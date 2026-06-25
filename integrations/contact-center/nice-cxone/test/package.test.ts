import { describe, expect, it, vi } from "vitest";
import type { NiceCxoneProviderClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-nice-cxone", () => {
  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.niceCxoneProviderManifest.metadata);

    expect(manifestModule.niceCxoneProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-nice-cxone");
    expect(manifestModule.niceCxoneRestSupportSlice).toBe(manifestModule.niceCxoneSupportSlice);
    expect(manifestModule.niceCxoneSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.niceCxoneSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).not.toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createNiceCxoneIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createNiceCxoneClient({
      baseUrl: "https://api.example.test",
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.endContact({
      pathParams: { chatSession: "chat/123" },
      body: { reason: "resolved" },
      idempotencyKey: "idem_123",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/contacts/chats/chat%2F123");
    expect(init?.method).toBe("DELETE");
    expect(init?.body).toBe(JSON.stringify({ reason: "resolved" }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected provider client override", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNiceCxoneClient({ baseUrl: "https://api.example.test", providerClient });

    await client.startContact({ body: { contactId: "contact_123" } });

    expect(client.providerClient).toBe(providerClient);
    expect(providerClient.startContact).toHaveBeenCalledWith({
      body: { contactId: "contact_123" },
      method: "POST",
      path: "/contacts/chats",
    });
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createNiceCxoneClient({
      baseUrl: "https://api.example.test",
      fetch: async () => new Response(JSON.stringify({ error: "denied" }), { status: 403, statusText: "Forbidden" }),
    });

    await expect(client.scheduleCallback({ body: { phone: "+15550100" } }))
      .rejects.toMatchObject({ status: 403, payload: { error: "denied" } });
  });
});

function fakeProviderClient(): NiceCxoneProviderClient {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    scheduleCallback: vi.fn(async () => ({ ok: true })),
    startContact: vi.fn(async () => ({ ok: true })),
    endContact: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
