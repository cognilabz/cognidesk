import type { OperatorEvent, OperatorEventEntry } from "../types";
import { activityStatus, humanizeActivity, stringifySmall } from "./activity";

export function activityEventEntry(
  event: Extract<OperatorEvent, { type: "activity" }>,
  isWorking: boolean,
): Omit<OperatorEventEntry, "id"> {
  const activityDetail = event.surface && event.surface !== "conversation" ? event.surface : undefined;
  const detail = event.detail ?? activityDetail;
  const title = humanizeActivity(event.message);
  return {
    kind: "activity",
    title,
    ...(detail ? { detail } : {}),
    ...(event.category ? { category: event.category } : {}),
    ...(event.input !== undefined ? { input: event.input } : {}),
    ...(event.output !== undefined ? { output: event.output } : {}),
    ...(activityDetail ? { surface: activityDetail } : {}),
    status: activityStatus(title, isWorking),
  };
}

export function reasoningSummaryEntry(event: Extract<OperatorEvent, { type: "reasoning.summary" }>) {
  return {
    kind: "reasoning",
    title: "Working plan updated",
    detail: event.summary,
    surface: "evidence",
    status: "running",
  } satisfies Omit<OperatorEventEntry, "id">;
}

export function toolStartedEntry(event: Extract<OperatorEvent, { type: "tool.started" }>) {
  return {
    kind: "tool",
    title: `Running ${event.name}`,
    name: event.name,
    input: event.input,
    surface: "conversation",
    status: "running",
  } satisfies Omit<OperatorEventEntry, "id">;
}

export function toolCompletedEntry(event: Extract<OperatorEvent, { type: "tool.completed" }>) {
  return {
    kind: "tool",
    title: `Finished ${event.name}`,
    name: event.name,
    output: event.output,
    surface: "conversation",
    status: "completed",
  } satisfies Omit<OperatorEventEntry, "id">;
}

export function diffUpdatedEntry(event: Extract<OperatorEvent, { type: "sandbox.diff.updated" }>) {
  return {
    kind: "diff",
    title: event.summary,
    detail: event.files.map((file) => `${file.status}: ${file.path}`).join("\n"),
    files: event.files,
    surface: "sandbox_diff",
    status: "completed",
  } satisfies Omit<OperatorEventEntry, "id">;
}

export function validationCompletedEntry(event: Extract<OperatorEvent, { type: "validation.completed" }>) {
  return {
    kind: "validation",
    title: `Validation ${event.commandId}`,
    detail: event.output,
    output: event.output,
    surface: "validation_runs",
    status: event.exitCode === 0 ? "completed" : "error",
  } satisfies Omit<OperatorEventEntry, "id">;
}

export function approvalRequiredEntry(event: Extract<OperatorEvent, { type: "approval.required" }>) {
  const approvalDetail = stringifySmall(event.payload);
  return {
    kind: "approval",
    title: event.title,
    ...(approvalDetail ? { detail: approvalDetail } : {}),
    approvalId: event.approvalId,
    action: event.action,
    surface: "approvals",
    status: "pending",
  } satisfies Omit<OperatorEventEntry, "id">;
}
