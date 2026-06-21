import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-ticketing-salesforce/manifest", () => {
  it("imports without loading jsforce", async () => {
    vi.resetModules();
    vi.doMock("jsforce", () => {
      throw new Error("manifest imported jsforce");
    });

    try {
      const { salesforceTicketingProviderManifest } = await import("../src/manifest.js");

      expect(salesforceTicketingProviderManifest.packageName).toBe("@cognidesk/integration-ticketing-salesforce");
      expect(salesforceTicketingProviderManifest.metadata?.implementation).toMatchObject({
        strategy: "maintained-library",
        manifestImport: "no-sdk-client-initialization",
      });
    } finally {
      vi.doUnmock("jsforce");
    }
  }, 15_000);
});
