import type { ConnectionJsonObject } from "./types.js";

export function isHttpMethod(value: string) {
  return ["get", "post", "put", "patch", "delete", "head", "options"].includes(value.toLowerCase());
}

export function isRecord(value: unknown): value is ConnectionJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isStringRecord(value: unknown): value is Record<string, string> {
  return isRecord(value) && Object.values(value).every((candidate) => typeof candidate === "string");
}

export function coercePrimitiveRecord(value: ConnectionJsonObject) {
  const output: Record<string, string | number | boolean> = {};
  for (const [key, candidate] of Object.entries(value)) {
    if (typeof candidate === "string" || typeof candidate === "number" || typeof candidate === "boolean") {
      output[key] = candidate;
    }
  }
  return output;
}

export function coerceNullablePrimitiveRecord(value: ConnectionJsonObject) {
  const output: Record<string, string | number | boolean | null | undefined> = {};
  for (const [key, candidate] of Object.entries(value)) {
    if (
      candidate === null
      || candidate === undefined
      || typeof candidate === "string"
      || typeof candidate === "number"
      || typeof candidate === "boolean"
    ) {
      output[key] = candidate;
    }
  }
  return output;
}

export function stableJson(value: unknown): string {
  return JSON.stringify(sortForJson(value));
}

function sortForJson(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortForJson);
  if (!isRecord(value)) return value;
  return Object.fromEntries(
    Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, child]) => [key, sortForJson(child)]),
  );
}
