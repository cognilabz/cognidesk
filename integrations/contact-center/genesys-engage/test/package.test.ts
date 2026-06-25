import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-contact-center-genesys-engage", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.genesysEngageProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-genesys-engage");
    expect(manifestModule.genesysEngageSupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createGenesysEngageIntegration({
      providerClient: fakeProviderClient(),
      defaultHandoffPath: "/handoff",
      readinessPath: "/ready",
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("delegates handoff and GMS operations to the injected provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createGenesysEngageClient({
      providerClient,
      defaultHandoffPath: "/configured/handoff",
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      // @ts-expect-error createHandoff intentionally rejects per-call endpoint paths.
      path: "/provider/native-transfer",
    });
    await client.scheduleCallback({ pathParams: { serviceName: "support" }, body: { phone: "+15550100" } });
    await client.startContact({ pathParams: { serviceName: "support" }, body: { nickname: "Ada" } });
    await client.sendChatMessage({ pathParams: { serviceName: "support", chatId: "chat-1" }, body: { text: "Hi" } });

    expect(providerClient.createHandoff).toHaveBeenCalledWith({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
    });
    expect(providerClient.scheduleCallback).toHaveBeenCalledWith({
      pathParams: { serviceName: "support" },
      body: { phone: "+15550100" },
      method: "POST",
      path: "/genesys/1/service/callback/{serviceName}",
    });
    expect(providerClient.startContact).toHaveBeenCalledWith({
      pathParams: { serviceName: "support" },
      body: { nickname: "Ada" },
      method: "POST",
      path: "/genesys/2/chat/{serviceName}",
    });
    expect(providerClient.sendChatMessage).toHaveBeenCalledWith({
      pathParams: { serviceName: "support", chatId: "chat-1" },
      body: { text: "Hi" },
      method: "POST",
      path: "/genesys/2/chat/{serviceName}/{chatId}/send",
    });
  });

  it("creates a built-in REST adapter when configured without a provider client", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createGenesysEngageClient({
      baseUrl: "https://api.example.test",
      accessToken: "genesys-token",
      defaultHandoffPath: "/configured/handoff",
    });
    expect(client).toBeDefined();
  });
});

function fakeProviderClient() {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    scheduleCallback: vi.fn(async () => ({ ok: true })),
    startContact: vi.fn(async () => ({ ok: true })),
    sendChatMessage: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
