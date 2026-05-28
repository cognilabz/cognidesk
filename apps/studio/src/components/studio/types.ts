import type {
  StudioDashboardArtifact,
} from "@cognidesk/studio-contracts";

export type Health = {
  ok: boolean;
  status: number;
  latencyMs: number;
  body: unknown;
};

export type DashboardRow = {
  id: string;
  targetId: string;
  ownerUserId: string;
  slug: string;
  title: string;
  description: string | null;
  status: "draft" | "published" | "archived";
  currentVersion: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type OperatorMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
};

export type OperatorEventStatus = "pending" | "running" | "completed" | "error";

export type OperatorEventEntry = {
  id: string;
  kind: "activity" | "tool" | "reasoning" | "artifact" | "diff" | "validation" | "approval" | "error";
  title: string;
  detail?: string;
  category?: string;
  history?: Array<{
    id: string;
    title: string;
    detail?: string;
    category?: string;
    input?: unknown;
    output?: unknown;
    status?: OperatorEventStatus;
  }>;
  surface?: string;
  status?: OperatorEventStatus;
  name?: string;
  input?: unknown;
  output?: unknown;
  files?: Array<{ path: string; status: string }>;
  approvalId?: string;
  action?: string;
};

export type OperatorChatMessageItem = OperatorMessage & {
  type: "message";
  streaming?: boolean;
};

export type OperatorChatEventItem = {
  id: string;
  type: "event";
  event: OperatorEventEntry;
};

export type OperatorChatItem = OperatorChatMessageItem | OperatorChatEventItem;

export type ReasoningEffort = "none" | "minimal" | "low" | "medium" | "high" | "xhigh";

export type OperatorEvent =
  | { type: "session.ready"; sessionId: string; targetId: string; modelId?: string }
  | { type: "activity"; sessionId?: string; message: string; detail?: string; category?: string; input?: unknown; output?: unknown; surface?: string }
  | { type: "assistant.delta"; sessionId: string; delta: string }
  | { type: "artifact.upserted"; sessionId: string; artifact: Record<string, unknown> }
  | { type: "sandbox.diff.updated"; sessionId: string; summary: string; files: Array<{ path: string; status: string }> }
  | { type: "validation.completed"; sessionId: string; commandId: string; exitCode: number; output: string }
  | { type: "approval.required"; sessionId: string; approvalId: string; title: string; action: string; payload: unknown }
  | { type: "reasoning.summary"; sessionId: string; summary: string }
  | { type: "tool.started"; sessionId: string; name: string; input?: unknown }
  | { type: "tool.completed"; sessionId: string; name: string; output?: unknown }
  | { type: "turn.completed"; sessionId: string }
  | { type: "error"; sessionId?: string; message: string };

export type StudioConversationRow = {
  id: string;
  agentId: string;
  lifecycle: "active" | "handoff" | "closed";
  customerLabel: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  activeJourneyId?: string | undefined;
  activeStateIds: string[];
  traceIds: string[];
  eventCount?: number | undefined;
  satisfaction: "positive" | "neutral" | "negative";
};

export type OperatorSessionRow = {
  id: string;
  title: string;
  updatedAt: string;
  modelId: string | null;
};

export type PreviewDashboard = { artifact: StudioDashboardArtifact; code: string } | null;
