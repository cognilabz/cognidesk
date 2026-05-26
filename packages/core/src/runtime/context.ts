import { z } from "zod";
import type { GuardResult, JourneyContextRecord } from "../types.js";

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function getPathValue(context: Record<string, unknown>, path: string) {
  let current: unknown = context;
  for (const part of path.split(".")) {
    if (!isRecord(current)) return undefined;
    current = current[part];
  }
  return current;
}

export function setPathValue(context: Record<string, unknown>, path: string, value: unknown) {
  const parts = path.split(".");
  let current = context;
  for (const part of parts.slice(0, -1)) {
    const next = current[part];
    if (!isRecord(next)) current[part] = {};
    current = current[part] as Record<string, unknown>;
  }
  const last = parts.at(-1);
  if (last) current[last] = value;
}

export function selectContextFields(context: Record<string, unknown>, fields: string[]) {
  const selected: Record<string, unknown> = {};
  for (const field of fields) {
    const value = getPathValue(context, field);
    if (value !== undefined) setPathValue(selected, field, structuredClone(value));
  }
  return selected;
}

export function hasUsableValue(value: unknown) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

export function guardAllows(result: GuardResult) {
  if (typeof result === "boolean") return result;
  return result.allow;
}

export function isStructuredGuardDenial(result: GuardResult): result is Extract<GuardResult, { allow: false }> {
  return typeof result === "object" && result !== null && result.allow === false;
}

export function createJourneyContextView(
  input: unknown,
  activeContext: Record<string, unknown>,
  storedContexts: JourneyContextRecord[],
) {
  const parsed = z.object({
    journeyId: z.string(),
    fields: z.array(z.string()).optional(),
  }).parse(input);
  const stored = storedContexts.find((record) => record.journeyId === parsed.journeyId);
  const context = isRecord(stored?.context) ? stored.context : activeContext;
  if (!parsed.fields?.length) {
    return {
      journeyId: parsed.journeyId,
      context: structuredClone(context),
    };
  }
  const selected: Record<string, unknown> = {};
  for (const field of parsed.fields) {
    const value = getPathValue(context, field);
    if (value !== undefined) setPathValue(selected, field, structuredClone(value));
  }
  return {
    journeyId: parsed.journeyId,
    context: selected,
  };
}
