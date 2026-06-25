import { describe, expect, it, vi } from "vitest";
import type { AircallRawClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-aircall", () => {
  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.aircallProviderManifest.metadata);

    expect(manifestModule.aircallProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-aircall");
    expect(manifestModule.aircallRestSupportSlice).toBe(manifestModule.aircallSupportSlice);
    expect(manifestModule.aircallSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.aircallSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).not.toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createAircallIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/v1/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with URL, headers, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createAircallClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/v1/handoff",
      authorizationHeader: "Basic abc123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      idempotencyKey: "idem_123",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/v1/handoff?source=test");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ conversationId: "conv_123" }));
    expect(init?.headers).toMatchObject({
      authorization: "Basic abc123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("preserves routing and metadata when payload is provided", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createAircallClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/v1/handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      routing: { queueId: "queue_123" },
      metadata: { priority: "high" },
    });

    const [, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(init?.body).toBe(JSON.stringify({
      conversationId: "conv_123",
      routing: { queueId: "queue_123" },
      metadata: { priority: "high" },
    }));
  });

  it("does not retry non-idempotent handoff requests", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ error: "try_later" }), { status: 503 }));
    const client = mod.createAircallClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/v1/handoff",
      retry: 2,
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 503 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("delegates to an injected raw client override", async () => {
    const mod = await import("../src/index.js");
    const rawClient: AircallRawClient = { createHandoff: vi.fn(async () => ({ id: "handoff_123" })) };
    const client = mod.createAircallClient({ baseUrl: "https://api.example.test", rawClient });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .resolves.toEqual({ id: "handoff_123" });

    expect(client.rawClient).toBe(rawClient);
    expect(rawClient.createHandoff).toHaveBeenCalledWith({ payload: { conversationId: "conv_123" } });
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createAircallClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/v1/handoff",
      fetch: async () => new Response(JSON.stringify({ error: "denied" }), { status: 401, statusText: "Unauthorized" }),
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 401, payload: { error: "denied" } });
  });
});
