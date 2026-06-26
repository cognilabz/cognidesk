import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import type { NiceCxoneProviderClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-nice-cxone", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "NiceCxoneProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.niceCxoneSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.niceCxoneProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.niceCxoneProviderManifest.metadata);
    const manifestMetadata = manifestModule.niceCxoneProviderManifest.metadata;

    expect(manifestModule.niceCxoneProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-nice-cxone");
    expect(manifestModule.niceCxoneRestSupportSlice).toBe(manifestModule.niceCxoneSupportSlice);
    expect(manifestModule.niceCxoneSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.niceCxoneSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(manifestMetadata.sdkDecision).toMatchObject({
      package: "@nice-devone/acd-sdk",
      checkedVersion: "26.2.1",
      license: "UNLICENSED",
      result: "official-sdk-not-redistributable-server-rest-client",
    });
    expect(manifestMetadata.providerRestAdapter).toMatchObject({
      packageOwnedRestClient: true,
      hostClientOverride: true,
      failureMode: "fail-closed",
      reviewedOperationAllowlist: true,
    });
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  }, 10_000);

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

  it("sanitizes reviewed operation inputs before delegating to a host provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNiceCxoneClient({ providerClient });

    await client.scheduleCallback({
      pathParams: { skillId: "skill_123" },
      query: { source: "test" },
      body: { phone: "+15550100" },
      idempotencyKey: "idem_123",
      method: "DELETE",
      path: "/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    } as never);

    expect(providerClient.scheduleCallback).toHaveBeenCalledWith({
      pathParams: { skillId: "skill_123" },
      query: { source: "test" },
      body: { phone: "+15550100" },
      idempotencyKey: "idem_123",
      method: "POST",
      path: "/promise",
    });
  });

  it("fails closed for host-configured requests and invalid handler input", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNiceCxoneClient({ providerClient });

    expect(() => client.request({ operationId: "providerExtensionRequest" }))
      .toThrow(/path or reviewed operationId/);
    expect(() => client.request({ operationId: "configuredHandoff" }))
      .toThrow(/path or reviewed operationId/);
    expect(() => client.scheduleCallback(null as never))
      .toThrow(/operation input object/);

    expect(providerClient.request).not.toHaveBeenCalled();
    expect(providerClient.scheduleCallback).not.toHaveBeenCalled();
  });

  it("fails closed before fetch when the built-in REST adapter is unconfigured", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createNiceCxoneClient({ fetch: fetchMock as unknown as typeof fetch });

    expect(() => client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .toThrow(/handoff path/);
    expect(() => client.scheduleCallback({ body: { phone: "+15550100" } }))
      .toThrow(/baseUrl/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("normalizes extension request methods before enforcing mutation policy", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNiceCxoneClient({ providerClient });

    expect(() => client.request({ method: "TRACE" as never, path: "/contacts/danger", allowMutation: true, classification: "host-reviewed-extension" }))
      .toThrow(/not supported/);
    expect(() => client.request({ method: "post" as never, path: "/contacts/danger", allowMutation: true }))
      .toThrow(/classification/);

    await client.request({
      method: "post" as never,
      path: "/contacts/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      method: "POST",
      path: "/contacts/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    }));
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

function readPackageJson() {
  return JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
    cognidesk: {
      providerSdkDecision: {
        checkedAt: string;
        typedClientOverride: string;
        defaultRestPolicy: string;
        checkedPackages: unknown[];
      };
    };
  };
}
