import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import { reasoningEfforts } from "./config";
import type {
  OperatorChatEventItem,
  OperatorChatItem,
  OperatorChatMessageItem,
  OperatorEventEntry,
  OperatorMessage,
  OperatorSessionRow,
  ReasoningEffort,
} from "../types";

export type RawOperatorSession = {
  id: string;
  title: string;
  updatedAt: string | Date;
  modelId: string | null;
};

export type RawDashboardRow = {
  id: string;
  status: "draft" | "published" | "archived";
  currentVersion: number;
  updatedAt: string | Date;
};

export function dashboardSnapshotValue(dashboard: RawDashboardRow) {
  return `${dashboard.status}:v${dashboard.currentVersion}:${String(dashboard.updatedAt)}`;
}

export function hasDashboardExport(code: string) {
  return /\bexport\s+(default\s+)?function\s+Dashboard\b/.test(code)
    || /\bexport\s+const\s+Dashboard\b/.test(code)
    || /\bexport\s*\{\s*Dashboard\s*\}/.test(code);
}

export function normalizeSession(session: RawOperatorSession): OperatorSessionRow {
  return {
    id: session.id,
    title: session.title,
    updatedAt: String(session.updatedAt),
    modelId: session.modelId,
  };
}

export function defaultModel(manifest: StudioTargetManifest) {
  return manifest.operator.models.find((model) => model.default)?.id ?? manifest.operator.models[0]?.id ?? "gpt-5.5";
}

export function reasoningLabel(effort: ReasoningEffort) {
  return reasoningEfforts.find((item) => item.id === effort)?.label ?? sentenceCase(effort);
}

export function welcomeMessage(targetName: string): OperatorMessage {
  return {
    id: "welcome",
    role: "assistant",
    text: `Ready to work on ${targetName}. I can explain the agent, inspect or edit the sandbox, and create dashboard drafts through Studio APIs.`,
  };
}

export function messageToChatItem(message: OperatorMessage): OperatorChatMessageItem {
  return { ...message, type: "message" };
}

export type ActivityHistoryEntry = NonNullable<OperatorEventEntry["history"]>[number];
export type ActivityHistoryRow = ActivityHistoryEntry & { count: number };

export function activityRunSummary(event: OperatorEventEntry, history: ActivityHistoryEntry[]) {
  const concrete = compactHistoryRows(history).filter(isConcreteActivityEntry);
  if (!concrete.length) {
    const verb = event.status === "running" ? "Working across" : "Completed";
    return `${verb} ${history.length} operator ${history.length === 1 ? "update" : "updates"}`;
  }

  const parts: string[] = [];
  const files = countByCategory(concrete, "file");
  const searches = countByCategory(concrete, "search");
  const lists = countByCategory(concrete, "list");
  const commands = countByCategory(concrete, "command");
  const tools = uniqueToolNames(concrete);

  if (files) parts.push(`Explored ${files} ${files === 1 ? "file" : "files"}`);
  if (searches) parts.push(`${searches} ${searches === 1 ? "search" : "searches"}`);
  if (lists) parts.push(`${lists} ${lists === 1 ? "list" : "lists"}`);
  if (commands) parts.push(`ran ${commands} ${commands === 1 ? "command" : "commands"}`);
  for (const tool of tools.slice(0, 2)) parts.push(`used ${tool}`);
  if (tools.length > 2) parts.push(`used ${tools.length - 2} more tools`);

  return parts.length ? sentenceCase(parts.join(", ")) : concrete[concrete.length - 1]?.title ?? event.title;
}

export function activeActivityTitle(history: ActivityHistoryEntry[]) {
  const lastConcrete = compactHistoryRows(history).filter(isConcreteActivityEntry).at(-1);
  if (!lastConcrete || !isStartedActivityTitle(lastConcrete.title)) return null;
  return lastConcrete.title.replace(/\.$/, "");
}

function compactHistoryRows(history: ActivityHistoryEntry[]): ActivityHistoryRow[] {
  const rows: ActivityHistoryRow[] = [];
  for (const entry of history) {
    const previous = rows[rows.length - 1];
    if (previous && isStartedCompletedPair(previous, entry)) {
      rows[rows.length - 1] = { ...entry, count: previous.count };
      continue;
    }
    if (previous && previous.title === entry.title && previous.detail === entry.detail) {
      previous.count += 1;
      continue;
    }
    rows.push({ ...entry, count: 1 });
  }
  return rows;
}

export function displayHistoryRows(history: ActivityHistoryEntry[]) {
  const rows = compactHistoryRows(history);
  const concrete = rows.filter(isConcreteActivityEntry);
  return concrete.length ? concrete : rows;
}

function isStartedCompletedPair(previous: ActivityHistoryEntry, next: ActivityHistoryEntry) {
  if (activityCategory(previous) !== activityCategory(next)) return false;
  if (!["file", "search", "list", "command", "tool"].includes(activityCategory(next))) return false;
  if ((previous.detail ?? "") !== (next.detail ?? "")) return false;
  return isStartedActivityTitle(previous.title) && isCompletedActivityTitle(next.title);
}

export function isStartedActivityTitle(title: string) {
  return /^(reading|searching|listing|running|using|querying)\b/i.test(title);
}

function isCompletedActivityTitle(title: string) {
  return /^(read|searched|listed|ran|used|queried)\b/i.test(title);
}

function isConcreteActivityEntry(entry: ActivityHistoryEntry) {
  const title = entry.title.toLowerCase();
  if (entry.category && ["file", "search", "list", "command", "tool"].includes(entry.category)) return true;
  if (/^(read|reading|searched|searching|listed|listing|ran|running|used|using|queried|querying)\b/.test(title)) return true;
  return false;
}

export function shouldDisplayActivityEvent(event: Pick<OperatorEventEntry, "kind" | "title" | "category">) {
  return event.kind === "activity" && isConcreteActivityEntry({
    id: "candidate",
    title: humanizeActivity(event.title),
    ...(event.category ? { category: event.category } : {}),
  });
}

function countByCategory(history: ActivityHistoryEntry[], category: string) {
  return history.filter((entry) => activityCategory(entry) === category).length;
}

function activityCategory(entry: ActivityHistoryEntry) {
  if (entry.category) return entry.category;
  const title = entry.title.toLowerCase();
  if (/^(read|reading)\b/.test(title)) return "file";
  if (/^(searched|searching)\b/.test(title)) return "search";
  if (/^(listed|listing)\b/.test(title)) return "list";
  if (/^(ran|running)\b/.test(title)) return "command";
  if (/^(used|using)\b/.test(title)) return "tool";
  return "other";
}

function uniqueToolNames(history: ActivityHistoryEntry[]) {
  const names = new Set<string>();
  for (const entry of history) {
    if (activityCategory(entry) !== "tool") continue;
    const name = entry.title
      .replace(/^(Used|Using)\s+/i, "")
      .replace(/\.$/, "")
      .trim();
    if (name) names.add(name);
  }
  return [...names];
}

function sentenceCase(value: string) {
  return value ? `${value[0]!.toUpperCase()}${value.slice(1)}` : value;
}

export function compactActivityEvents(items: OperatorChatItem[]): OperatorChatItem[] {
  const compacted: OperatorChatItem[] = [];
  let activityRun: OperatorChatEventItem[] = [];

  function flushActivityRun() {
    if (!activityRun.length) return;
    if (activityRun.length === 1) {
      const only = activityRun[0]!;
      compacted.push({ ...only, event: normalizeActivityEvent(only.event) });
      activityRun = [];
      return;
    }

    const first = normalizeActivityEvent(activityRun[0]!.event);
    const latest = normalizeActivityEvent(activityRun[activityRun.length - 1]!.event);
    compacted.push({
      id: first.id,
      type: "event",
      event: {
        ...latest,
        id: first.id,
        history: activityRun.map((item) => ({
          id: item.event.id,
          title: humanizeActivity(item.event.title),
          ...(usefulActivityDetail(item.event.detail) ? { detail: usefulActivityDetail(item.event.detail)! } : {}),
          ...(item.event.category ? { category: item.event.category } : {}),
          ...(item.event.input !== undefined ? { input: item.event.input } : {}),
          ...(item.event.output !== undefined ? { output: item.event.output } : {}),
          ...(item.event.status ? { status: item.event.status } : {}),
        })),
      },
    });
    activityRun = [];
  }

  for (const item of items) {
    if (item.type === "event" && item.event.kind === "activity") {
      const normalized = normalizeActivityEvent(item.event);
      if (!shouldDisplayActivityEvent(normalized)) continue;
      if (shouldCompactActivity(normalized)) {
        activityRun.push({ ...item, event: normalized });
      } else {
        flushActivityRun();
        compacted.push({ ...item, event: normalized });
      }
    } else {
      flushActivityRun();
      compacted.push(item);
    }
  }
  flushActivityRun();
  return compacted;
}

export function isAssistantTyping(items: OperatorChatItem[]) {
  return items.some((item) => item.type === "message" && item.role === "assistant" && Boolean(item.streaming));
}

export function shouldMarkItemContinuing(
  item: OperatorChatItem,
  items: OperatorChatItem[],
  isWorking: boolean,
  assistantIsTyping: boolean,
) {
  if (!isWorking || assistantIsTyping) return false;
  const last = items.at(-1);
  if (!last || last.id !== item.id) return false;
  if (item.type === "message") return item.role === "assistant" && !item.streaming;
  return item.event.kind === "reasoning" || item.event.status !== "running";
}

export function shouldShowStandaloneWorkingIndicator(
  items: OperatorChatItem[],
  isWorking: boolean,
  assistantIsTyping: boolean,
) {
  if (!isWorking || assistantIsTyping) return false;
  const last = items.at(-1);
  if (!last) return true;
  if (last.type === "message") return last.role !== "assistant";
  return last.event.kind === "reasoning" && last.event.status !== "running";
}

function shouldCompactActivity(event: OperatorEventEntry) {
  return event.kind === "activity" && event.status !== "error";
}

function normalizeActivityEvent(event: OperatorEventEntry): OperatorEventEntry {
  if (event.kind !== "activity") return event;
  const { detail: _detail, title: _title, history: _history, ...rest } = event;
  const detail = usefulActivityDetail(event.detail);
  return {
    ...rest,
    title: humanizeActivity(event.title),
    ...(detail ? { detail } : {}),
    ...(event.history ? {
      history: event.history.map((entry) => {
        const { detail: entryDetail, title: entryTitle, ...restEntry } = entry;
        const nextDetail = usefulActivityDetail(entryDetail);
        return {
          ...restEntry,
          title: humanizeActivity(entryTitle),
          ...(nextDetail ? { detail: nextDetail } : {}),
          ...(restEntry.category ? { category: restEntry.category } : {}),
          ...(restEntry.input !== undefined ? { input: restEntry.input } : {}),
          ...(restEntry.output !== undefined ? { output: restEntry.output } : {}),
        };
      }),
    } : {}),
  };
}

function usefulActivityDetail(detail: string | undefined) {
  if (!detail || detail === "conversation") return undefined;
  return redactSensitiveText(detail);
}

export function activityStatus(title: string, working: boolean): NonNullable<OperatorEventEntry["status"]> {
  if (isStartedActivityTitle(title)) return "running";
  if (isCompletedActivityTitle(title)) return "completed";
  return working ? "running" : "completed";
}

export function storedMessageToChatItem(message: {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: unknown;
}): OperatorChatItem {
  const event = storedOperatorEvent(message.content);
  if (event) {
    return { id: message.id, event, type: "event" };
  }
  return messageToChatItem({
    id: message.id,
    role: message.role === "tool" ? "system" : message.role,
    text: typeof message.content === "string" ? message.content : JSON.stringify(message.content, null, 2),
  });
}

function storedOperatorEvent(content: unknown): OperatorEventEntry | null {
  if (!isRecord(content) || content.type !== "operator.event" || !isRecord(content.event)) return null;
  const event = content.event;
  if (
    typeof event.id !== "string" ||
    typeof event.kind !== "string" ||
    typeof event.title !== "string"
  ) {
    return null;
  }
  const entry = event as unknown as OperatorEventEntry;
  return entry.kind === "activity" ? normalizeActivityEvent(entry) : entry;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function humanizeActivity(value: string) {
  const normalized = value.trim().replace(/\.$/, "");
  const lower = normalized.toLowerCase();
  if (lower === "turn started") return "Started the operator turn";
  if (lower === "turn completed") return "Finished the operator turn";
  if (lower === "item started") return "Started a Codex step";
  if (lower === "item completed") return "Finished a Codex step";
  if (normalized === "turn/started") return "Started the operator turn";
  if (normalized === "turn/completed") return "Finished the operator turn";
  if (normalized === "item/started") return "Started a Codex step";
  if (normalized === "item/completed") return "Finished a Codex step";
  if (normalized === "item/agentMessage/started") return "Started writing the assistant response";
  if (normalized === "item/agentMessage/completed") return "Finished writing the assistant response";
  if (normalized.startsWith("turn/")) return labelPath(normalized.replace("turn/", "Turn "));
  if (normalized.startsWith("item/")) return labelPath(normalized.replace("item/", "Item "));
  return redactSensitiveText(value);
}

function labelPath(value: string) {
  return value
    .split("/")
    .map((part) => part.replace(/([a-z])([A-Z])/g, "$1 $2"))
    .join(" ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function toolStateForEvent(event: OperatorEventEntry) {
  if (event.kind === "approval") return "approval-requested";
  if (event.status === "error") return "output-error";
  if (event.status === "pending") return "input-streaming";
  if (event.status === "running") return "input-available";
  return "output-available";
}

export function stringifySmall(value: unknown) {
  if (value === undefined) return undefined;
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return text.length > 1600 ? `${text.slice(0, 1600)}...` : text;
}

export function formatUnknown(value: unknown) {
  if (typeof value === "string") return redactSensitiveText(value);
  return redactSensitiveText(JSON.stringify(value, null, 2));
}

function redactSensitiveText(value: string) {
  return value
    .replace(/(authorization:\s*bearer\s+)[^'"\s]+/gi, "$1[redacted]")
    .replace(/(bearer\s+)[A-Za-z0-9._~+/=-]{12,}/gi, "$1[redacted]")
    .replace(/((?:token|secret|api[_-]?key|password)=)[^&\s'"]+/gi, "$1[redacted]");
}
