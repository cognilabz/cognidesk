import { describe, expect, it } from "vitest";

describe("@cognidesk/integration-contact-center-five9", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.five9ProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-five9");
    expect(manifestModule.five9SupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createFive9Integration({ apiBaseUrl: "https://example.invalid", defaultHandoffPath: "/handoff", readinessPath: "/ready", fetch: async () => new Response("{}") });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses only the configured handoff path", async () => {
    const mod = await import("../src/index.js");
    const requests: string[] = [];
    const client = mod.createFive9Client({
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
