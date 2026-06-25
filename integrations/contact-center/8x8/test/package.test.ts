import { describe, expect, it, vi } from "vitest";
import type { EightByEightRawClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-8x8", () => {
  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.eightByEightProviderManifest.metadata);

    expect(manifestModule.eightByEightProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-8x8");
    expect(manifestModule.eightByEightSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.eightByEightSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(metadata).toContain("provider-rest-adapter");
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).not.toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createEightByEightIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createEightByEightClient({
      baseUrl: "https://api.example.test/",
      accessToken: "token_123",
      apiKey: "key_123",
      apiKeyHeaderName: "x-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.startContact({
      tenantId: "tenant/123",
      contact: { phoneNumber: "+15551234567" },
      idempotencyKey: "idem_123",
    })).resolves.toEqual({ ok: true });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/tenants/tenant%2F123/calls");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ contact: { phoneNumber: "+15551234567" } }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "x-api-key": "key_123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected raw client override", async () => {
    const mod = await import("../src/index.js");
    const rawClient = fakeEightByEightRawClient();
    const client = mod.createEightByEightClient({ baseUrl: "https://api.example.test", rawClient });

    await client.updateAgentStatus({
      tenantId: "tenant_123",
      agentId: "agent_123",
      status: { code: "available" },
    });

    expect(client.rawClient).toBe(rawClient);
    expect(rawClient.updateAgentStatus).toHaveBeenCalledWith({
      tenantId: "tenant_123",
      agentId: "agent_123",
      status: { code: "available" },
    });
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createEightByEightClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response(JSON.stringify({ error: "denied" }), { status: 403, statusText: "Forbidden" }),
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 403, payload: { error: "denied" } });
  });
});

function fakeEightByEightRawClient(): EightByEightRawClient {
  return {
    createHandoff: vi.fn(async () => ({ id: "handoff_123" })),
    startContact: vi.fn(async () => ({ id: "interaction_123" })),
    endContact: vi.fn(async () => ({ id: "interaction_123", ended: true })),
    updateAgentStatus: vi.fn(async () => ({ id: "agent_123", status: "available" })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
