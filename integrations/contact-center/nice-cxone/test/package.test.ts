import { describe, expect, it } from "vitest";

describe("@cognidesk/integration-contact-center-nice-cxone", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.niceCxoneProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-nice-cxone");
    expect(manifestModule.niceCxoneSupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createNiceCxoneIntegration({ apiBaseUrl: "https://example.invalid", defaultHandoffPath: "/handoff", readinessPath: "/ready", fetch: async () => new Response("{}") });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses only the configured handoff path", async () => {
    const mod = await import("../src/index.js");
    const requests: string[] = [];
    const client = mod.createNiceCxoneClient({
      apiBaseUrl: "https://example.invalid",
      defaultHandoffPath: "/configured/handoff",
      fetch: async (url, init) => {
        requests.push(String(url));
        expect(init?.method).toBe("POST");
        return new Response("{}");
      },
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      // @ts-expect-error createHandoff intentionally rejects per-call endpoint paths.
      path: "/provider/native-transfer",
    });

    expect(requests).toEqual(["https://example.invalid/configured/handoff?source=test"]);
  });
});
