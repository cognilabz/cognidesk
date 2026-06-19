import { HttpInputError, readJson } from "../responses.js";

export async function readObject(request: Request) {
  const body = await readJson(request);
  if (!isRecord(body)) throw new HttpInputError("Request body must be a JSON object.");
  return body;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
