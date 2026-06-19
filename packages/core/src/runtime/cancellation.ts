import { AbortError } from "./errors.js";

export function abortErrorFromSignal(signal: AbortSignal) {
  const reason = signal.reason;
  if (reason instanceof Error && reason.message.length > 0) return new AbortError(reason.message);
  return new AbortError(typeof reason === "string" && reason.length > 0 ? reason : "aborted");
}

export function throwIfSignalAborted(signal?: AbortSignal) {
  if (signal?.aborted) throw abortErrorFromSignal(signal);
}

export function waitForAbort<T>(promise: Promise<T>, signal?: AbortSignal): Promise<T> {
  if (!signal) return promise;
  throwIfSignalAborted(signal);
  return new Promise<T>((resolve, reject) => {
    let onAbort: () => void;
    const cleanup = () => signal.removeEventListener("abort", onAbort);
    onAbort = () => {
      cleanup();
      reject(abortErrorFromSignal(signal));
    };
    signal.addEventListener("abort", onAbort, { once: true });
    promise.then(
      (value) => {
        cleanup();
        resolve(value);
      },
      (error) => {
        cleanup();
        reject(error);
      },
    );
  });
}

export function runWithAbort<T>(run: () => T | Promise<T>, signal?: AbortSignal): Promise<T> {
  return waitForAbort(Promise.resolve().then(run), signal);
}
