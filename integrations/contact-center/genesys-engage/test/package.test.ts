import { describe, expect, it } from "vitest";

describe("@cognidesk/contact-center-genesys-engage", () => {
  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.genesysEngageProviderManifest.packageName).toBe("@cognidesk/contact-center-genesys-engage");
    expect(manifestModule.genesysEngageSupportSlice.allowedOperations.length).toBeGreaterThan(0);
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createGenesysEngageIntegration({ apiBaseUrl: "https://example.invalid", defaultHandoffPath: "/handoff", readinessPath: "/ready", fetch: async () => new Response("{}") });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });
});
