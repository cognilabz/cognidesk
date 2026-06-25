import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-contact-center-genesys-pureconnect", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.genesysPureConnectProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-genesys-pureconnect");
    expect(manifestModule.genesysPureConnectSupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createGenesysPureConnectIntegration({
      providerClient: fakeProviderClient(),
      defaultHandoffPath: "/handoff",
      readinessPath: "/ready",
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("delegates handoff and ICWS operations to the injected provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createGenesysPureConnectClient({
      providerClient,
      defaultHandoffPath: "/configured/handoff",
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      // @ts-expect-error createHandoff intentionally rejects per-call endpoint paths.
      path: "/provider/native-transfer",
    });
    await client.createConnection({ body: { applicationName: "Cognidesk" } });
    await client.request({ path: "/icws/session-1/interactions", method: "GET" });

    expect(providerClient.createHandoff).toHaveBeenCalledWith({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
    });
    expect(providerClient.createConnection).toHaveBeenCalledWith({
      body: { applicationName: "Cognidesk" },
      method: "POST",
      path: "/icws/connection",
    });
    expect(providerClient.request).toHaveBeenCalledWith({
      path: "/icws/session-1/interactions",
      method: "GET",
    });
  });

  it("creates a built-in REST adapter when configured without a provider client", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createGenesysPureConnectClient({
      baseUrl: "https://api.example.test",
      accessToken: "pureconnect-token",
      defaultHandoffPath: "/configured/handoff",
    });
    expect(client).toBeDefined();
  });
});

function fakeProviderClient() {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    createConnection: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
