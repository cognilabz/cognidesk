import type { ResolveChannelOutputInput, ResolveChannelOutputResult } from "@cognidesk/core";
import { HttpInputError } from "../responses.js";
import type { CognideskHttpHandlerOptions, ResolveChannelOutputBody } from "../types.js";
import { isRecord } from "./body.js";
import { optionalString } from "./optional.js";

export function hasResolveChannelOutput(
  runtime: CognideskHttpHandlerOptions["runtime"],
): runtime is CognideskHttpHandlerOptions["runtime"] & {
  resolveChannelOutput(input: ResolveChannelOutputInput): Promise<ResolveChannelOutputResult>;
} {
  return typeof (runtime as { resolveChannelOutput?: unknown }).resolveChannelOutput === "function";
}

export function readChannelOutputResolutionInput<TPayload>(
  body: ResolveChannelOutputBody<TPayload>,
  signal: AbortSignal,
): ResolveChannelOutputInput<TPayload> {
  const record = body as Record<string, unknown>;
  const conversationId = optionalString(record, "conversationId");
  if (!conversationId) throw new HttpInputError("conversationId is required");
  if (!isRecord(record.intent)) throw new HttpInputError("intent is required");
  const input: ResolveChannelOutputInput<TPayload> = {
    conversationId,
    intent: record.intent as ResolveChannelOutputInput<TPayload>["intent"],
    signal,
  };
  if (record.resolution !== undefined) {
    input.resolution = record.resolution as NonNullable<ResolveChannelOutputInput<TPayload>["resolution"]>;
  }
  if (record.app !== undefined) {
    input.app = record.app;
  }
  return input;
}
