import { mkdir, rm, writeFile } from "node:fs/promises";
import { isAbsolute, join, relative, resolve, sep } from "node:path";
import { spawn } from "node:child_process";
import { getStudioOperatorSkillPack } from "@cognidesk/studio-operator-skills";
import { buildChildProcessEnv } from "./child-env.js";

const sandboxRoot = process.env.STUDIO_OPERATOR_SANDBOX_ROOT ?? "/tmp/cognidesk-studio-sandboxes";
const sessionIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function prepareSandbox(sessionId: string) {
  const path = sandboxPathForSession(sessionId);
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

export function sandboxPathForSession(sessionId: string) {
  if (!sessionIdPattern.test(sessionId)) {
    throw new Error("Invalid operator session id");
  }
  const root = resolve(sandboxRoot);
  const path = resolve(root, sessionId);
  const relativePath = relative(root, path);
  if (!relativePath || relativePath.startsWith(`..${sep}`) || relativePath === ".." || isAbsolute(relativePath)) {
    throw new Error("Operator sandbox path escaped sandbox root");
  }
  return path;
}

export function buildBaseInstructions(targetId: string, sessionToken?: string) {
  const pack = getStudioOperatorSkillPack();
  const studioApiBaseUrl = process.env.STUDIO_API_BASE_URL ?? "http://studio:3000";
  return [
    pack.defaultSystemPrompt,
    "",
    `Active Studio Target: ${targetId}`,
    `Studio API base URL: ${studioApiBaseUrl}`,
    sessionToken ? `Studio API authentication: include Authorization: Bearer ${sessionToken} on /api/studio requests.` : "Studio API authentication: use the credentials provided by the runtime environment.",
    "To explain the agent, read /api/studio/introspection and cite concrete journey, tool, and knowledge names.",
    "To inspect channel or policy metadata derived from the compiled SDK target, read /api/studio/configuration. Treat it as read-only target introspection, not a separate Studio-owned config.",
    "For reporting questions, textual analysis, and dashboards, read generic datasets through /api/studio/data by POSTing { capability, targetId, params }. /api/studio/dashboard-data is a legacy alias for the same data layer.",
    "For telemetry trace analysis, use capability telemetry.traces. Pass params.traceId or params.traceIds to retrieve complete raw trace payloads, or pass params.includeTraceData: true with a search query to hydrate matching traces. The returned data preserves rawTraces and also exposes flat spans with attributes, resourceAttributes, scopeAttributes, events, and links for text reports and dashboards.",
    "To create or save a dashboard, read /api/studio/conversations or /api/studio/data, then POST a dashboard draft to /api/studio/dashboards with title, slug, code, datasets, spec, and fallback. Publishing still requires an explicit user action.",
    "Dashboard code must be real React code exporting a Dashboard component. It should use props.initialDatasets for static/captured data and props.dataLayer.query(source) or /api/studio/dashboard-data for datasets marked mode: \"live\".",
    "Dashboard datasets must use { id, title, description?, mode?, refreshMs?, source: { capability, targetId, params }, capturedAt, data }. Use mode: \"live\" when the dashboard should refresh from the source and mode: \"static\" for fixed inputs. The source capability must be one of telemetry.traces, telemetry.metrics, cognidesk.agent, cognidesk.conversations, cognidesk.events, or cognidesk.snapshots. Do not send shorthand datasets such as { name, rows }.",
    "Dashboard specs should describe the requested cards, graphs, tables, and insights as { layout, summary, widgets }. Widget kinds are metric, line, bar, donut, table, and insight. Match the user's requested dashboard instead of reusing the demo layout.",
    "Dashboard metric widgets support row aggregation with aggregate: \"sum\" | \"avg\" | \"max\" | \"count\" | \"countNonNull\" plus valuePath, or valuePath shorthand such as sum(totalTokens), sum(modelCalls), and avg(usage.totalTokens). Row paths use dot paths such as usage.totalTokens; attribute keys containing dots may use bracket syntax such as attributes[\"gen_ai.request.model\"]. Do not use unsupported computed paths such as $computed.rows[*].total.",
    "For exact conversation Journey counters in dashboard specs, use metric value paths such as $metrics.journeyCounts.human-handoff. Use $metrics.handoverConversations only for broader handoff/escalation-related counts.",
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
    "When answering reporting questions, fetch evidence from /api/studio/data and cite the concrete dataset fields you used. For trace reports, request telemetry.traces with traceId/traceIds or includeTraceData so rawTraces and flat spans are available.",
    "When saving dashboards, send datasets in the full StudioDashboardDataset shape: { id, title, description?, mode?, refreshMs?, source: { capability, targetId, params }, capturedAt, data }. Use cognidesk.conversations for live conversation lists and telemetry.traces for trace/span analysis. For metric sums or averages, use aggregate plus valuePath or shorthand such as sum(totalTokens); never use unsupported $computed paths. For exact Journey counters, use renderer metric paths such as $metrics.journeyCounts.human-handoff.",
    "",
    "Use git, gh, package manager CLIs, telemetry APIs, and Studio APIs according to the active manifest and credential grants.",
  ].join("\n");
}

export function modelForCodex(modelId?: string) {
  if (!modelId || modelId === "codex-default") return undefined;
  return modelId;
}

function run(command: string, args: string[], cwd: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { cwd, stdio: ["ignore", "pipe", "pipe"], env: buildChildProcessEnv() });
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
    const child = spawn(command, args, { cwd, stdio: ["ignore", "pipe", "pipe"], env: buildChildProcessEnv() });
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
