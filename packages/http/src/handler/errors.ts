import type { CognideskHttpHandlerOptions } from "../types.js";

export function internalErrorMessage(error: unknown, options: CognideskHttpHandlerOptions) {
  if (!options.exposeInternalErrors) return "Internal server error";
  return error instanceof Error ? error.message : "Unknown error";
}
