import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/ticketing-intercom/manifest", () => {
  it("imports without loading the Intercom SDK client module", async () => {
    vi.resetModules();
    vi.doMock("intercom-client", () => {
      throw new Error("manifest imported the Intercom SDK");
    });

    try {
      const { intercomTicketingProviderManifest } = await import("../src/manifest.js");

      expect(intercomTicketingProviderManifest.packageName).toBe("@cognidesk/ticketing-intercom");
      expect(intercomTicketingProviderManifest.metadata?.implementation).toMatchObject({
        strategy: "official-sdk",
        manifestImport: "no-sdk-client-initialization",
      });
    } finally {
      vi.doUnmock("intercom-client");
    }
  }, 15_000);
});
