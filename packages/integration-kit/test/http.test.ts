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
