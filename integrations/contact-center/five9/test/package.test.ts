import { describe, expect, it } from "vitest";

describe("@cognidesk/contact-center-five9", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.five9ProviderManifest.packageName).toBe("@cognidesk/contact-center-five9");
    expect(manifestModule.five9SupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createFive9Integration({ apiBaseUrl: "https://example.invalid", defaultHandoffPath: "/handoff", readinessPath: "/ready", fetch: async () => new Response("{}") });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });
});
