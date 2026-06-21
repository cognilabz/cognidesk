import { describe, expect, it } from "vitest";

describe("@cognidesk/contact-center-8x8", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.eightByEightProviderManifest.packageName).toBe("@cognidesk/contact-center-8x8");
    expect(manifestModule.eightByEightSupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createEightByEightIntegration({ apiBaseUrl: "https://example.invalid", defaultHandoffPath: "/handoff", readinessPath: "/ready", fetch: async () => new Response("{}") });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });
});
