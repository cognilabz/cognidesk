import { describe, expect, it, vi } from "vitest";
import type { NextivaProviderClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-nextiva", () => {
  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.nextivaProviderManifest.metadata);

    expect(manifestModule.nextivaProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-nextiva");
    expect(manifestModule.nextivaSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.nextivaSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).not.toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createNextivaIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createNextivaClient({
      baseUrl: "https://api.example.test",
      apiKey: "key_123",
      apiKeyHeaderName: "x-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.request({
      method: "POST",
      path: "/workitems/{workItemId}",
      pathParams: { workItemId: "work/123" },
      body: { status: "queued" },
      allowMutation: true,
      classification: "host-reviewed-workitem",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/workitems/work%2F123");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ status: "queued" }));
    expect(init?.headers).toMatchObject({
      "x-api-key": "key_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected provider client override", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNextivaClient({ baseUrl: "https://api.example.test", providerClient });

    await client.createHandoff({ payload: { conversationId: "conv_123" } });

    expect(client.providerClient).toBe(providerClient);
    expect(providerClient.createHandoff).toHaveBeenCalledWith({ payload: { conversationId: "conv_123" } });
  });

  it("normalizes extension request methods before enforcing mutation policy", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNextivaClient({ providerClient });

    expect(() => client.request({ method: "TRACE" as never, path: "/danger", allowMutation: true, classification: "host-reviewed-extension" }))
      .toThrow(/not supported/);
    expect(() => client.request({ method: "post" as never, path: "/danger", allowMutation: true }))
      .toThrow(/classification/);

    await client.request({
      method: "post" as never,
      path: "/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      method: "POST",
      path: "/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    }));
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createNextivaClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response(JSON.stringify({ error: "bad_request" }), { status: 400, statusText: "Bad Request" }),
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 400, payload: { error: "bad_request" } });
  });
});

function fakeProviderClient(): NextivaProviderClient {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
