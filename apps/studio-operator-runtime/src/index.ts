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
      message: "Started the operator turn.",
      category: "turn",
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
    const activity = activityMessage(notification);
    send(socket, {
      type: "activity",
      sessionId,
      message: activity.message,
      ...(activity.detail ? { detail: activity.detail } : {}),
      ...(activity.category ? { category: activity.category } : {}),
      ...(activity.input !== undefined ? { input: activity.input } : {}),
      ...(activity.output !== undefined ? { output: activity.output } : {}),
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
    "Dashboard datasets must use { id, title, description?, source: { capability, targetId, params }, capturedAt, data }. The source capability must be one of telemetry.traces, telemetry.metrics, cognidesk.agent, cognidesk.events, or cognidesk.snapshots. Do not send shorthand datasets such as { name, rows }.",
    "During every multi-step turn, write short visible assistant progress messages as separate transcript paragraphs before the first tool or API phase, after each completed logical phase, and before the final save or mutation call. Do not hold those updates until the final answer.",
    "For dashboard creation, first state that you are fetching the source data, then after fetching state what you found and that you are saving the draft, then finish with the saved dashboard details and evidence.",
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
    "When saving dashboards, send datasets in the full StudioDashboardDataset shape: { id, title, description?, source: { capability, targetId, params }, capturedAt, data }.",
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

interface ActivityDescription {
  message: string;
  detail?: string;
  category?: string;
  input?: unknown;
  output?: unknown;
}

function activityMessage(notification: CodexNotification): ActivityDescription {
  const method = notification.method;
  if (method === "turn/started") return { message: "Started the operator turn.", category: "turn" };
  if (method === "turn/completed") return { message: "Finished the operator turn.", category: "turn" };

  const status = method.endsWith("/started")
    ? "started"
    : method.endsWith("/completed")
      ? "completed"
      : method.endsWith("/updated")
        ? "updated"
        : "observed";
  const described = describeNotificationAction(notification, status);
  if (described) return described;

  const subject = notificationSubject(notification);
  if (method.endsWith("/started")) return { message: `Started ${subject}.`, category: categoryForSubject(subject) };
  if (method.endsWith("/completed")) return { message: `Finished ${subject}.`, category: categoryForSubject(subject) };
  if (method.endsWith("/updated")) return { message: `Updated ${subject}.`, category: categoryForSubject(subject) };
  return { message: labelPath(method), category: categoryForSubject(subject) };
}

function describeNotificationAction(notification: CodexNotification, status: "started" | "completed" | "updated" | "observed"): ActivityDescription | null {
  const command = extractCommand(notification.params);
  if (command) return describeCommandActivity(command, notification.params, status);

  const toolName = extractToolName(notification.params);
  const query = firstStringByKeys(notification.params, ["query", "searchQuery", "search_query", "pattern", "regex", "q"]);
  if (query && (toolName ? /search|find|grep|rg|ripgrep/i.test(toolName) : true)) {
    const detail = detailFromPath(firstStringByKeys(notification.params, ["path", "cwd", "workdir", "workingDirectory"]));
    return {
      message: `${activityVerb(status, "search")} ${formatQuoted(query)}.`,
      ...(detail ? { detail } : {}),
      category: "search",
      input: compactPayload({ query, tool: toolName ?? undefined }),
    };
  }

  const path = firstStringByKeys(notification.params, ["file", "filePath", "filename", "path", "uri"]);
  if (path && looksLikeReadablePath(path)) {
    return {
      message: `${activityVerb(status, "read")} ${displayPath(path)}.`,
      detail: path,
      category: "file",
      input: compactPayload({ path, tool: toolName ?? undefined }),
    };
  }

  if (toolName) {
    const friendlyTool = displayToolName(toolName);
    const detail = toolDetail(notification.params, toolName);
    return {
      message: `${activityVerb(status, "use")} ${friendlyTool}.`,
      ...(detail ? { detail } : {}),
      category: "tool",
      input: compactPayload({ tool: toolName, ...(detail ? { detail } : {}) }),
    };
  }

  return null;
}

function describeCommandActivity(command: string, params: Record<string, unknown>, status: "started" | "completed" | "updated" | "observed"): ActivityDescription {
  const effectiveCommand = unwrapShellCommand(command) ?? command;
  const safeCommand = redactSensitiveText(effectiveCommand);
  const safeWrappedCommand = redactSensitiveText(command);
  const args = splitShellLike(effectiveCommand);
  const executable = commandExecutable(args);
  const input = compactPayload(effectiveCommand === command ? { command: safeCommand } : { command: safeCommand, wrappedCommand: safeWrappedCommand });

  if (executable === "rg" || executable === "grep") {
    const query = firstSearchArg(args, executable);
    const detail = commandSearchScope(args) ?? detailFromPath(firstStringByKeys(params, ["cwd", "workdir", "workingDirectory"]));
    return {
      message: `${activityVerb(status, "search")} ${formatQuoted(query ?? "text")}.`,
      ...(detail ? { detail } : {}),
      category: "search",
      input,
    };
  }

  if (["cat", "sed", "nl", "head", "tail", "less"].includes(executable)) {
    const path = lastFileArg(args);
    return {
      message: `${activityVerb(status, "read")} ${displayPath(path ?? "file")}.`,
      ...(path ? { detail: path } : {}),
      category: "file",
      input,
    };
  }

  if (["ls", "find", "fd", "tree"].includes(executable)) {
    const target = firstPathArg(args) ?? firstStringByKeys(params, ["cwd", "workdir", "workingDirectory"]);
    return {
      message: `${activityVerb(status, "list")} ${target ? `files in ${displayPath(target)}` : "files"}.`,
      ...(target ? { detail: target } : {}),
      category: "list",
      input,
    };
  }

  if (executable === "curl") {
    const url = args.find((arg) => /^https?:\/\//.test(arg));
    const target = url ? displayRequestTarget(url) : "HTTP endpoint";
    return {
      message: `${status === "started" ? "Querying" : status === "completed" ? "Queried" : "Updated"} ${target}.`,
      detail: url ? target : safeCommand,
      category: "command",
      input,
    };
  }

  if (executable === "git") {
    return {
      message: `${activityVerb(status, "run")} ${shortGitCommand(args)}.`,
      detail: safeCommand,
      category: "command",
      input,
    };
  }

  if (["pnpm", "npm", "yarn", "bun"].includes(executable)) {
    return {
      message: `${activityVerb(status, "run")} ${shortPackageCommand(args)}.`,
      detail: safeCommand,
      category: "command",
      input,
    };
  }

  return {
    message: `${activityVerb(status, "run")} shell command.`,
    detail: safeCommand,
    category: "command",
    input,
  };
}

function notificationSubject(notification: CodexNotification) {
  const item = notification.params.item;
  if (item && typeof item === "object") {
    const type = "type" in item && typeof item.type === "string" ? item.type : null;
    const name = "name" in item && typeof item.name === "string" ? item.name : null;
    if (name) return labelPath(name);
    if (type === "agent_message" || type === "agentMessage") return "assistant response";
    if (type === "reasoning") return "reasoning update";
    if (type === "tool_call" || type === "toolCall") return "tool call";
    if (type) return labelPath(type);
  }
  const name = notificationName(notification);
  return name === notification.method ? "Codex step" : labelPath(name);
}

function categoryForSubject(subject: string) {
  const value = subject.toLowerCase();
  if (value.includes("response") || value.includes("message")) return "message";
  if (value.includes("reasoning") || value.includes("plan")) return "reasoning";
  if (value.includes("tool")) return "tool";
  if (value.includes("turn")) return "turn";
  return "other";
}

function extractCommand(value: unknown): string | null {
  const records = collectRecords(value);
  for (const record of records) {
    for (const key of ["cmd", "command", "shellCommand", "shell_command", "script"]) {
      const raw = record[key];
      if (typeof raw === "string" && raw.trim()) return raw.trim();
      if (Array.isArray(raw) && raw.every((item) => typeof item === "string")) return raw.join(" ").trim();
    }

    const action = record.action;
    if (action && typeof action === "object") {
      const command = extractCommand(action);
      if (command) return command;
    }
  }
  return null;
}

function extractToolName(value: unknown) {
  const records = collectRecords(value);
  for (const record of records) {
    for (const key of ["toolName", "tool_name", "tool", "name", "serverLabel", "server_label", "serverName", "server_name"]) {
      const raw = record[key];
      if (typeof raw === "string" && raw.trim()) return raw.trim();
    }
  }
  return null;
}

function firstStringByKeys(value: unknown, keys: string[]) {
  const keySet = new Set(keys);
  for (const record of collectRecords(value)) {
    for (const [key, raw] of Object.entries(record)) {
      if (!keySet.has(key)) continue;
      if (typeof raw === "string" && raw.trim()) return raw.trim();
      if (Array.isArray(raw)) {
        const strings = raw.filter((item): item is string => typeof item === "string" && Boolean(item.trim()));
        if (strings.length) return strings.join(", ");
      }
    }
  }
  return null;
}

function collectRecords(value: unknown, depth = 0, seen = new Set<unknown>()): Record<string, unknown>[] {
  if (depth > 5 || !value || typeof value !== "object" || seen.has(value)) return [];
  seen.add(value);
  if (Array.isArray(value)) {
    return value.flatMap((item) => collectRecords(item, depth + 1, seen));
  }

  const record = value as Record<string, unknown>;
  const parsedChildren: unknown[] = [];
  for (const raw of Object.values(record)) {
    if (typeof raw === "string" && raw.trim().startsWith("{")) {
      const parsed = parseJson(raw);
      if (parsed) parsedChildren.push(parsed);
    }
  }
  return [
    record,
    ...Object.values(record).flatMap((item) => collectRecords(item, depth + 1, seen)),
    ...parsedChildren.flatMap((item) => collectRecords(item, depth + 1, seen)),
  ];
}

function parseJson(value: string) {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return null;
  }
}

function activityVerb(status: "started" | "completed" | "updated" | "observed", action: "search" | "read" | "list" | "run" | "use") {
  const verbs: Record<typeof action, Record<typeof status, string>> = {
    search: {
      started: "Searching for",
      completed: "Searched for",
      updated: "Updated search for",
      observed: "Searched for",
    },
    read: {
      started: "Reading",
      completed: "Read",
      updated: "Updated",
      observed: "Read",
    },
    list: {
      started: "Listing",
      completed: "Listed",
      updated: "Updated",
      observed: "Listed",
    },
    run: {
      started: "Running",
      completed: "Ran",
      updated: "Updated",
      observed: "Ran",
    },
    use: {
      started: "Using",
      completed: "Used",
      updated: "Updated",
      observed: "Used",
    },
  };
  return verbs[action][status];
}

function splitShellLike(command: string) {
  const matches = command.match(/"([^"\\]*(?:\\.[^"\\]*)*)"|'([^']*)'|[^\s]+/g) ?? [];
  return matches.map((part) => part.replace(/^["']|["']$/g, ""));
}

function unwrapShellCommand(command: string) {
  const args = splitShellLike(command);
  const executable = commandExecutable(args);
  if (!["sh", "bash", "zsh"].includes(executable)) return null;
  const commandIndex = args.findIndex((arg) => arg === "-c" || arg === "-lc");
  const inner = commandIndex >= 0 ? args[commandIndex + 1] : null;
  return inner?.trim() || null;
}

function commandExecutable(args: string[]) {
  const executable = args[0] ?? "";
  return displayPath(executable).toLowerCase();
}

function firstSearchArg(args: string[], executable: string) {
  const skipNextAfter = new Set(["-g", "--glob", "-t", "--type", "-C", "--context", "-A", "--after-context", "-B", "--before-context", "-m", "--max-count", "-e", "--regexp"]);
  let seenExecutable = false;
  let skipNext = false;
  for (const arg of args) {
    if (!seenExecutable) {
      seenExecutable = displayPath(arg).toLowerCase() === executable;
      continue;
    }
    if (skipNext) {
      skipNext = false;
      continue;
    }
    if (skipNextAfter.has(arg)) {
      skipNext = true;
      continue;
    }
    if (arg.startsWith("-")) continue;
    return arg;
  }
  return null;
}

function commandSearchScope(args: string[]) {
  const path = args.slice(2).reverse().find((arg) => looksLikeReadablePath(arg) && !arg.startsWith("-"));
  return path ? path : null;
}

function lastFileArg(args: string[]) {
  for (const arg of [...args].reverse()) {
    if (arg.startsWith("-")) continue;
    if (/^\d+(,\d+)?[a-z]?$/i.test(arg)) continue;
    if (looksLikeReadablePath(arg)) return arg;
  }
  return null;
}

function firstPathArg(args: string[]) {
  for (const arg of args.slice(1)) {
    if (arg.startsWith("-")) continue;
    if (looksLikeReadablePath(arg) || arg === ".") return arg;
  }
  return null;
}

function looksLikeReadablePath(value: string) {
  if (!value.trim()) return false;
  if (/^https?:\/\//.test(value)) return false;
  return value.includes("/") || value.includes(".") || value === ".";
}

function displayPath(path: string) {
  const normalized = path.replace(/\\/g, "/").replace(/\/$/, "");
  if (!normalized || normalized === ".") return "workspace";
  return normalized.split("/").filter(Boolean).pop() ?? normalized;
}

function detailFromPath(path: string | null) {
  if (!path || path === ".") return undefined;
  return path;
}

function formatQuoted(value: string) {
  const clean = value.length > 80 ? `${value.slice(0, 77)}...` : value;
  return `"${clean}"`;
}

function shortCommand(command: string) {
  const clean = redactSensitiveText(command).replace(/\s+/g, " ").trim();
  return clean.length > 96 ? `${clean.slice(0, 93)}...` : clean;
}

function displayRequestTarget(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.host}${parsed.pathname}`;
  } catch {
    return redactSensitiveText(url);
  }
}

function redactSensitiveText(value: string) {
  return value
    .replace(/(authorization:\s*bearer\s+)[^'"\s]+/gi, "$1[redacted]")
    .replace(/(bearer\s+)[A-Za-z0-9._~+/=-]{12,}/gi, "$1[redacted]")
    .replace(/((?:token|secret|api[_-]?key|password)=)[^&\s'"]+/gi, "$1[redacted]");
}

function shortGitCommand(args: string[]) {
  const subcommand = args[1] ?? "command";
  return `git ${subcommand}`;
}

function shortPackageCommand(args: string[]) {
  const executable = args[0] ?? "package command";
  const command = args.find((arg, index) => index > 0 && !arg.startsWith("-") && !arg.startsWith("@")) ?? args[1];
  return [executable, command].filter(Boolean).join(" ");
}

function displayToolName(name: string) {
  const normalized = name.replace(/^functions\./, "");
  if (/next.*devtools|next-devtools/i.test(normalized)) return "Next Devtools MCP";
  if (/browser-use|browser/i.test(normalized)) return "Browser";
  if (/exec_command|shell|terminal/i.test(normalized)) return "terminal";
  if (/apply_patch/i.test(normalized)) return "patch editor";
  return labelPath(normalized);
}

function toolDetail(value: unknown, toolName: string) {
  const method = firstStringByKeys(value, ["method", "fn", "function", "resource", "uri"]);
  if (method && method !== toolName) return labelPath(method);
  return null;
}

function compactPayload(value: unknown) {
  const text = JSON.stringify(value);
  if (text.length <= 1200) return value;
  return { summary: `${text.slice(0, 1170)}...` };
}

function labelPath(value: string) {
  return value
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split("/")
    .filter(Boolean)
    .map((part) => part.trim())
    .join(" ");
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
