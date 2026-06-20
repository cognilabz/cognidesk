import type { CodexNotification } from "../codex-client.js";

export function notificationName(notification: CodexNotification) {
  const item = notification.params.item;
  if (item && typeof item === "object" && "name" in item && typeof item.name === "string") return item.name;
  const toolName = notification.params.toolName ?? notification.params.name ?? notification.params.command;
  return typeof toolName === "string" ? toolName : notification.method;
}

export interface ActivityDescription {
  message: string;
  detail?: string;
  category?: string;
  input?: unknown;
  output?: unknown;
}

export function activityMessage(notification: CodexNotification): ActivityDescription {
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

export function isToolStarted(method: string) {
  return method.includes("tool") && (method.includes("started") || method.includes("call"));
}

export function isToolCompleted(method: string) {
  return method.includes("tool") && (method.includes("completed") || method.includes("result") || method.includes("output"));
}

export function isUsefulActivity(method: string) {
  if (method.includes("delta")) return false;
  return method.startsWith("turn/") || method.startsWith("item/");
}

export function parseDiffFiles(diff: string) {
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
