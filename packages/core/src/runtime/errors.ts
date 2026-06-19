export class AbortError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AbortError";
  }
}

export function isAbortLikeError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const maybeError = error as { name?: unknown; message?: unknown };
  return maybeError.name === "AbortError" || maybeError.message === "interrupted_by_new_message";
}
