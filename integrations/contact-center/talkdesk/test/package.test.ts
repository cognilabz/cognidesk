import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-contact-center-talkdesk", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.talkdeskProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-talkdesk");
    expect(manifestModule.talkdeskSupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createTalkdeskIntegration({
      providerClient: fakeProviderClient(),
      defaultHandoffPath: "/handoff",
      readinessPath: "/ready",
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("delegates handoff and provider operations to the injected provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createTalkdeskClient({
      providerClient,
      defaultHandoffPath: "/configured/handoff",
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      // @ts-expect-error createHandoff intentionally rejects per-call endpoint paths.
      path: "/provider/native-transfer",
    });
    await client.scheduleCallback({ body: { phone: "+15550100" } });
    await client.createTask({ body: { title: "Follow up" } });

    expect(providerClient.createHandoff).toHaveBeenCalledWith({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
    });
    expect(providerClient.scheduleCallback).toHaveBeenCalledWith({
      body: { phone: "+15550100" },
      method: "POST",
      path: "/calls/callback",
    });
    expect(providerClient.createTask).toHaveBeenCalledWith({
      body: { title: "Follow up" },
      method: "POST",
      path: "/cm/core/va/cases",
    });
  });

  it("creates a built-in REST adapter when configured without a provider client", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createTalkdeskClient({
      baseUrl: "https://api.example.test",
      accessToken: "talkdesk-token",
      defaultHandoffPath: "/configured/handoff",
    });
    expect(client).toBeDefined();
  });
});

function fakeProviderClient() {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    scheduleCallback: vi.fn(async () => ({ ok: true })),
    createTask: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
