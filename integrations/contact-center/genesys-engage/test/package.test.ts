import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import type { GenesysEngageProviderClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-genesys-engage", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();

    expect(packageJson.cognidesk.providerSdkDependencies).toEqual([]);
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "GenesysEngageProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.genesysEngageSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.genesysEngageProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.genesysEngageProviderManifest.metadata);

    expect(manifestModule.genesysEngageProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-genesys-engage");
    expect(manifestModule.genesysEngageRestSupportSlice).toBe(manifestModule.genesysEngageSupportSlice);
    expect(manifestModule.genesysEngageSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.genesysEngageSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(manifestModule.genesysEngageSupportSlice.allowedOperations.length).toBeGreaterThan(0);
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createGenesysEngageIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, query, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createGenesysEngageClient({
      baseUrl: "https://api.example.test",
      accessToken: "genesys-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.sendChatMessage({
      pathParams: { serviceName: "customer support", chatId: "chat/123" },
      query: { transcriptPosition: 8 },
      body: { message: "Hi" },
      idempotencyKey: "idem_123",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/genesys/2/chat/customer%20support/chat%2F123/send?transcriptPosition=8");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ message: "Hi" }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer genesys-token",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
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
    await client.request({ path: "/genesys/2/chat/support/chat-1/refresh", method: "GET" });

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
    expect(providerClient.request).toHaveBeenCalledWith({
      path: "/genesys/2/chat/support/chat-1/refresh",
      method: "GET",
    });
  });

  it("normalizes extension request methods before enforcing mutation policy", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createGenesysEngageClient({ providerClient });

    expect(() => client.request({ method: "TRACE" as never, path: "/genesys/2/chat/danger", allowMutation: true, classification: "host-reviewed-extension" }))
      .toThrow(/not supported/);
    expect(() => client.request({ method: "post" as never, path: "/genesys/2/chat/danger", allowMutation: true }))
      .toThrow(/classification/);
    expect(() => client.request({ operationId: "providerExtensionRequest" }))
      .toThrow(/path or reviewed operationId/);

    await client.request({
      method: "post" as never,
      path: "/genesys/2/chat/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      method: "POST",
      path: "/genesys/2/chat/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    }));
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

  it("fails closed when required REST adapter configuration is missing", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createGenesysEngageClient();

    expect(() => client.startContact({ pathParams: { serviceName: "support" }, body: { nickname: "Ada" } }))
      .toThrow(/baseUrl is required/);
    expect(() => client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .toThrow(/handoff path must be configured/);
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createGenesysEngageClient({
      baseUrl: "https://api.example.test",
      fetch: async () => new Response(JSON.stringify({ error: "denied" }), { status: 403, statusText: "Forbidden" }),
    });

    await expect(client.startContact({ pathParams: { serviceName: "support" }, body: { nickname: "Ada" } }))
      .rejects.toMatchObject({ status: 403, payload: { error: "denied" } });
  });
});

function fakeProviderClient(): GenesysEngageProviderClient {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    scheduleCallback: vi.fn(async () => ({ ok: true })),
    startContact: vi.fn(async () => ({ ok: true })),
    sendChatMessage: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}

function readPackageJson() {
  return JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
    cognidesk: {
      providerSdkDependencies: string[];
      providerSdkDecision: {
        checkedAt: string;
        typedClientOverride: string;
        defaultRestPolicy: string;
        checkedPackages: unknown[];
      };
    };
  };
}
