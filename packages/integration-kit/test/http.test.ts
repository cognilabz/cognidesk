import { describe, expect, it, vi } from "vitest";
import {
  providerJsonRequest,
  providerRequestUrl,
} from "../src/index.js";

describe("providerJsonRequest", () => {
  it("builds encoded provider request URLs", () => {
    expect(providerRequestUrl({
      baseUrl: "https://provider.example/api/",
      path: "/tickets/{ticketId}/comments",
      pathParams: { ticketId: "T 1/2" },
      query: { limit: 20, tag: ["vip", "refund"], empty: undefined },
    })).toBe("https://provider.example/api/tickets/T%201%2F2/comments?limit=20&tag=vip&tag=refund");
  });

  it("retries configured transient provider failures", async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "busy" }), { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    await expect(providerJsonRequest({
      baseUrl: "https://provider.example",
      path: "/tickets",
      fetch: fetchMock,
      providerName: "Example",
      retry: { attempts: 2 },
    })).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("retries object-form retry options when attempts are omitted", async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "rate limited" }), { status: 429 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    await expect(providerJsonRequest({
      baseUrl: "https://provider.example",
      path: "/tickets",
      fetch: fetchMock,
      providerName: "Example",
      retry: { statusCodes: [429] },
    })).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("does not retry arbitrary statusless errors", async () => {
    const error = new Error("Unexpected response handling failure.");
    const fetchMock = vi.fn().mockRejectedValue(error);

    await expect(providerJsonRequest({
      baseUrl: "https://provider.example",
      path: "/tickets",
      fetch: fetchMock,
      retry: { attempts: 3 },
    })).rejects.toBe(error);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("retries statusless timeout errors", async () => {
    const timeoutError = Object.assign(new Error("The operation timed out."), { name: "TimeoutError" });
    const fetchMock = vi.fn()
      .mockRejectedValueOnce(timeoutError)
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    await expect(providerJsonRequest({
      baseUrl: "https://provider.example",
      path: "/tickets",
      fetch: fetchMock,
      retry: { attempts: 2 },
    })).resolves.toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("uses exponential retry delays when maxDelayMs is omitted", async () => {
    vi.useFakeTimers();
    const setTimeoutSpy = vi.spyOn(globalThis, "setTimeout");
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "busy" }), { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "busy" }), { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));

    const request = providerJsonRequest({
      baseUrl: "https://provider.example",
      path: "/tickets",
      fetch: fetchMock,
      retry: { attempts: 3, baseDelayMs: 10 },
    });

    await vi.advanceTimersByTimeAsync(10);
    await vi.advanceTimersByTimeAsync(20);
    await expect(request).resolves.toEqual({ ok: true });

    expect(setTimeoutSpy.mock.calls.map((call) => call[1])).toEqual([10, 20]);
    setTimeoutSpy.mockRestore();
    vi.useRealTimers();
  });

  it("passes abort signals to the fetch implementation", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn(async (_url: URL | RequestInfo, init?: RequestInit) => {
      expect(init?.signal).toBe(controller.signal);
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    });

    await expect(providerJsonRequest({
      baseUrl: "https://provider.example",
      path: "/readiness",
      fetch: fetchMock,
      signal: controller.signal,
    })).resolves.toEqual({ ok: true });
  });
});
