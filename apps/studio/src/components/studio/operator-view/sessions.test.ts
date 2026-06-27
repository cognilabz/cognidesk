import { afterEach, describe, expect, it, vi } from "vitest";
import { persistOperatorMessage } from "./sessions";

describe("persistOperatorMessage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("resolves without a value when the server responds with 200 OK", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
    await expect(persistOperatorMessage("session-1", "user", "Hello")).resolves.toBeUndefined();
  });

  it("throws when the server returns a 500 error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    await expect(persistOperatorMessage("session-1", "user", "Hello")).rejects.toThrow(
      "Could not persist Operator message",
    );
  });

  it("throws when the server returns a 404 not found", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 404 }));
    await expect(persistOperatorMessage("session-2", "assistant", "response")).rejects.toThrow(
      "Could not persist Operator message",
    );
  });

  it("sends a POST request to the correct session endpoint", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", mockFetch);

    await persistOperatorMessage("session-abc", "user", "hello world");

    expect(mockFetch).toHaveBeenCalledWith(
      "/api/studio/operator/sessions/session-abc",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("sends the role and content as JSON in the request body", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", mockFetch);

    await persistOperatorMessage("session-xyz", "assistant", { text: "Hello from assistant" });

    expect(mockFetch).toHaveBeenCalledWith(
      "/api/studio/operator/sessions/session-xyz",
      expect.objectContaining({
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ role: "assistant", content: { text: "Hello from assistant" } }),
      }),
    );
  });

  it("works for all supported message roles", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", mockFetch);

    await persistOperatorMessage("session-1", "user", "user message");
    await persistOperatorMessage("session-1", "assistant", "assistant message");
    await persistOperatorMessage("session-1", "system", "system message");
    await persistOperatorMessage("session-1", "tool", { toolResult: true });

    expect(mockFetch).toHaveBeenCalledTimes(4);
  });
});