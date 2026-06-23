import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-ticketing-hubspot/manifest", () => {
  it("imports without loading the HubSpot SDK client module", async () => {
    vi.resetModules();
    vi.doMock("@hubspot/api-client", () => {
      throw new Error("manifest imported the HubSpot SDK");
    });

    try {
      const { hubSpotTicketingProviderManifest } = await import("../src/manifest.js");

      expect(hubSpotTicketingProviderManifest.packageName).toBe("@cognidesk/integration-ticketing-hubspot");
      expect(hubSpotTicketingProviderManifest.metadata?.implementation).toMatchObject({
        strategy: "official-sdk",
        manifestImport: "no-sdk-client-initialization",
      });
    } finally {
      vi.doUnmock("@hubspot/api-client");
    }
  }, 15_000);
});
