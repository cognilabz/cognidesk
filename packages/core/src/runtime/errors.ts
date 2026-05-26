export class AbortError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AbortError";
  }
}

export function isAbortLikeError(error: unknown) {
  if (error instanceof Error) {
    return error.name === "AbortError" || error.message === "interrupted_by_new_message";
  }
  return false;
}
