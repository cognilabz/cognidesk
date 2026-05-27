import { randomUUID } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { WebSocket, WebSocketServer } from "ws";
import {
  StudioOperatorClientEventSchema,
  type StudioOperatorClientEvent,
  type StudioOperatorReasoningEffort,
} from "@cognidesk/studio-contracts";
import { getStudioOperatorSkillPack } from "@cognidesk/studio-operator-skills";
import { CodexAppServerClient, type CodexNotification } from "./codex-client.js";

const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 4099);
const sandboxRoot = process.env.STUDIO_OPERATOR_SANDBOX_ROOT ?? "/tmp/cognidesk-studio-sandboxes";
const codex = new CodexAppServerClient();
const sessions = new Map<string, OperatorSession>();
const threadToSession = new Map<string, string>();

const wss = new WebSocketServer({ host, port, path: "/ws" });
codex.onNotification(handleCodexNotification);

wss.on("connection", (socket, request) => {
  const sessionToken = request.headers["x-studio-session-token"]?.toString();
  const claims: StudioClaims = {
    userId: request.headers["x-studio-user-id"]?.toString() ?? "unknown",
    role: request.headers["x-studio-user-role"]?.toString() ?? "viewer",
    ...(sessionToken ? { sessionToken } : {}),
  };
  send(socket, {
    type: "activity",
    message: "Studio Operator Runtime connected.",
    surface: "conversation",
  });

  socket.on("message", (data) => {
    void handleClientMessage(socket, claims, data.toString()).catch((error) => {
      send(socket, {
        type: "error",
        message: error instanceof Error ? error.message : "Operator runtime error",
      });
    });
  });
});

console.log(`Cognidesk Studio Operator Runtime listening on ws://${host}:${port}/ws`);

interface StudioClaims {
  userId: string;
  role: string;
  sessionToken?: string;
}

interface OperatorSession {
  sessionId: string;
  targetId: string;
  modelId?: string;
  userId: string;
  sandboxPath: string;
  threadId: string;
  currentTurnId?: string;
  socket: WebSocket;
  reasoningEffort?: StudioOperatorReasoningEffort;
}

async function handleClientMessage(socket: WebSocket, claims: StudioClaims, raw: string) {
  const value = JSON.parse(raw) as unknown;
  if (isStudioClaims(value)) return;
  const event = StudioOperatorClientEventSchema.parse(value);
  switch (event.type) {
    case "session.start":
      await startSession(socket, claims, event);
      break;
    case "turn.start":
      await startTurn(socket, claims, event);
      break;
    case "turn.interrupt":
      await interruptTurn(event.sessionId);
      break;
    case "approval.resolve":
      send(socket, {
        type: "activity",
        sessionId: event.sessionId,
        message: event.approved ? "Approval accepted." : "Approval rejected.",
        surface: "approvals",
      });
      break;
  }
}

async function startSession(
  socket: WebSocket,
  claims: StudioClaims,
  event: Extract<StudioOperatorClientEvent, { type: "session.start" }>,
) {
  const sessionId = event.sessionId ?? randomUUID();
  const sandboxPath = await prepareSandbox(sessionId);
  const model = modelForCodex(event.modelId);
  const thread = await codex.startThread({
    cwd: sandboxPath,
    baseInstructions: buildBaseInstructions(event.targetId, claims.sessionToken),
    ...(model ? { model } : {}),
  });
  const session: OperatorSession = {
    sessionId,
    targetId: event.targetId,
    userId: claims.userId,
    sandboxPath,
    threadId: thread.thread.id,
    socket,
    ...(event.modelId ? { modelId: event.modelId } : {}),
    ...(event.reasoningEffort ? { reasoningEffort: event.reasoningEffort } : {}),
  };
  sessions.set(sessionId, session);
  threadToSession.set(thread.thread.id, sessionId);
  send(socket, {
    type: "session.ready",
    sessionId,
    targetId: event.targetId,
    modelId: event.modelId,
  });
  if (event.message?.trim()) {
    const turn = await codex.startTurn({
      threadId: thread.thread.id,
      message: event.message,
      ...(model ? { model } : {}),
      ...(event.reasoningEffort ? { effort: event.reasoningEffort } : {}),
    });
    session.currentTurnId = turn.turn.id;
  }
}

async function startTurn(
  socket: WebSocket,
  claims: StudioClaims,
  event: Extract<StudioOperatorClientEvent, { type: "turn.start" }>,
) {
  let session = sessions.get(event.sessionId);
  if (!session) {
    await startSession(socket, claims, {
      type: "session.start",
      sessionId: event.sessionId,
      targetId: process.env.STUDIO_DEFAULT_TARGET_ID ?? "flight-demo-local",
      modelId: event.modelId,
      reasoningEffort: event.reasoningEffort,
    });
    session = sessions.get(event.sessionId);
  }
  if (!session) throw new Error("Operator session could not be started");
  session.socket = socket;
  const model = modelForCodex(event.modelId ?? session.modelId);
  if (event.modelId) session.modelId = event.modelId;
  if (event.reasoningEffort) session.reasoningEffort = event.reasoningEffort;
  const turn = await codex.startTurn({
    threadId: session.threadId,
    message: event.message,
    ...(model ? { model } : {}),
    ...(session.reasoningEffort ? { effort: session.reasoningEffort } : {}),
  });
  session.currentTurnId = turn.turn.id;
}

async function interruptTurn(sessionId: string) {
  const session = sessions.get(sessionId);
  if (!session?.currentTurnId) return;
  await codex.interruptTurn(session.threadId, session.currentTurnId);
}

function handleCodexNotification(notification: CodexNotification) {
  const threadId = getThreadId(notification.params);
  if (!threadId) return;
  const sessionId = threadToSession.get(threadId);
  if (!sessionId) return;
  const session = sessions.get(sessionId);
  if (!session) return;
  const socket = session.socket;

  if (notification.method === "turn/started" && typeof notification.params.turn === "object" && notification.params.turn && "id" in notification.params.turn && typeof notification.params.turn.id === "string") {
    session.currentTurnId = notification.params.turn.id;
    send(socket, {
      type: "activity",
      sessionId,
      message: "Turn started.",
      surface: "conversation",
    });
  } else if (notification.method === "item/agentMessage/delta") {
    send(socket, {
      type: "assistant.delta",
      sessionId,
      delta: String(notification.params.delta ?? ""),
    });
  } else if (notification.method === "turn/diff/updated") {
    const diff = String(notification.params.diff ?? "");
    send(socket, {
      type: "sandbox.diff.updated",
      sessionId,
      summary: diff ? "Sandbox diff updated." : "Sandbox diff is empty.",
      files: parseDiffFiles(diff),
    });
  } else if (notification.method === "turn/plan/updated") {
    const explanation = notification.params.explanation;
    if (typeof explanation === "string" && explanation.trim()) {
      send(socket, {
        type: "reasoning.summary",
        sessionId,
        summary: explanation,
      });
    }
    send(socket, {
      type: "artifact.upserted",
      sessionId,
      artifact: {
        type: "plan",
        title: "Operator plan",
        explanation: notification.params.explanation ?? null,
        steps: notification.params.plan ?? [],
      },
    });
  } else if (notification.method === "turn/completed") {
    delete session.currentTurnId;
    send(socket, { type: "turn.completed", sessionId });
  } else if (notification.method === "error") {
    send(socket, {
      type: "error",
      sessionId,
      message: JSON.stringify(notification.params),
    });
  } else if (isToolStarted(notification.method)) {
    send(socket, {
      type: "tool.started",
      sessionId,
      name: notificationName(notification),
      input: notification.params,
    });
  } else if (isToolCompleted(notification.method)) {
    send(socket, {
      type: "tool.completed",
      sessionId,
      name: notificationName(notification),
      output: notification.params,
    });
  } else if (isUsefulActivity(notification.method)) {
    send(socket, {
      type: "activity",
      sessionId,
      message: notification.method,
      surface: "conversation",
    });
  }
}

async function prepareSandbox(sessionId: string) {
  const path = join(sandboxRoot, sessionId);
  await rm(path, { recursive: true, force: true });
  await mkdir(path, { recursive: true });
  const repoUrl = process.env.STUDIO_SOURCE_REPO_URL;
  if (repoUrl) {
    await run("git", ["clone", "--depth", "1", repoUrl, "."], path);
  } else {
    const repoPath = process.env.STUDIO_SOURCE_REPO_PATH ?? await localRepoRoot().catch(() => null);
    if (repoPath) {
      await run("git", ["clone", "--shared", repoPath, "."], path).catch(async () => {
        await run("git", ["clone", repoPath, "."], path);
      });
    }
  }
  await writeFile(join(path, "AGENTS.md"), buildSandboxAgentsFile(), "utf8");
  return path;
}

function buildBaseInstructions(targetId: string, sessionToken?: string) {
  const pack = getStudioOperatorSkillPack();
  const studioApiBaseUrl = process.env.STUDIO_API_BASE_URL ?? "http://studio:3000";
  return [
    pack.defaultSystemPrompt,
    "",
    `Active Studio Target: ${targetId}`,
    `Studio API base URL: ${studioApiBaseUrl}`,
    sessionToken ? `Studio API authentication: include Authorization: Bearer ${sessionToken} on /api/studio requests.` : "Studio API authentication: use the credentials provided by the runtime environment.",
    "To explain the agent, read /api/studio/introspection and cite concrete journey, tool, and knowledge names.",
    "To create or save a dashboard, read /api/studio/conversations or /api/studio/dashboard-data, then POST a dashboard draft to /api/studio/dashboards with title, slug, code, datasets, and fallback. Publishing still requires an explicit user action.",
    "Use WebSocket-visible activity updates when gathering telemetry, editing source, creating dashboard artifacts, validating changes, or preparing a GitHub PR.",
    "For code changes, keep edits inside the sandbox and create a GitHub PR only after the user requests publication.",
  ].join("\n");
}

function buildSandboxAgentsFile() {
  const pack = getStudioOperatorSkillPack();
  return [
    "# Cognidesk Studio Operator Sandbox",
    "",
    pack.defaultSystemPrompt,
    "",
    "Available skill pack:",
    ...pack.skills.map((skill) => `- ${skill.id}: ${skill.description}`),
    "",
    "Use git, gh, package manager CLIs, telemetry APIs, and Studio APIs according to the active manifest and credential grants.",
  ].join("\n");
}

function modelForCodex(modelId?: string) {
  if (!modelId || modelId === "codex-default") return undefined;
  return modelId;
}

function send(socket: WebSocket, event: unknown) {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(event));
}

function getThreadId(params: Record<string, unknown>) {
  const value = params.threadId;
  if (typeof value === "string") return value;
  const thread = params.thread;
  if (thread && typeof thread === "object" && "id" in thread && typeof thread.id === "string") return thread.id;
  return null;
}

function notificationName(notification: CodexNotification) {
  const item = notification.params.item;
  if (item && typeof item === "object" && "name" in item && typeof item.name === "string") return item.name;
  const toolName = notification.params.toolName ?? notification.params.name ?? notification.params.command;
  return typeof toolName === "string" ? toolName : notification.method;
}

function isToolStarted(method: string) {
  return method.includes("tool") && (method.includes("started") || method.includes("call"));
}

function isToolCompleted(method: string) {
  return method.includes("tool") && (method.includes("completed") || method.includes("result") || method.includes("output"));
}

function isUsefulActivity(method: string) {
  if (method.includes("delta")) return false;
  return method.startsWith("turn/") || method.startsWith("item/");
}

function parseDiffFiles(diff: string) {
  const files: Array<{ path: string; status: "added" | "modified" | "deleted" | "renamed" }> = [];
  for (const line of diff.split("\n")) {
    if (!line.startsWith("diff --git ")) continue;
    const match = line.match(/^diff --git a\/(.+?) b\/(.+)$/);
    if (!match) continue;
    const before = match[1] ?? "";
    const after = match[2] ?? before;
    files.push({ path: after, status: before === "/dev/null" ? "added" : "modified" });
  }
  return files;
}

function isStudioClaims(value: unknown): value is { type: "studio.claims" } {
  return Boolean(value && typeof value === "object" && "type" in value && value.type === "studio.claims");
}

function run(command: string, args: string[], cwd: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: ["ignore", "pipe", "pipe"], env: process.env });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} failed with ${code}: ${stderr}`));
    });
    child.on("error", reject);
  });
}

async function localRepoRoot() {
  const output = await runCapture("git", ["rev-parse", "--show-toplevel"], process.cwd());
  return output.trim() || null;
}

function runCapture(command: string, args: string[], cwd: string) {
  return new Promise<string>((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: ["ignore", "pipe", "pipe"], env: process.env });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("exit", (code) => {
      if (code === 0) resolve(stdout);
      else reject(new Error(`${command} ${args.join(" ")} failed with ${code}: ${stderr}`));
    });
    child.on("error", reject);
  });
}
