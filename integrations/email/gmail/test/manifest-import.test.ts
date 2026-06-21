import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-email-gmail/manifest", () => {
  it("imports without loading the Gmail SDK client module", async () => {
    vi.resetModules();
    vi.doMock("@googleapis/gmail", () => {
      throw new Error("manifest imported the Gmail SDK");
    });

    const { gmailEmailProviderManifest } = await import("../src/manifest.js");

    expect(gmailEmailProviderManifest.packageName).toBe("@cognidesk/integration-email-gmail");
    expect(gmailEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
    vi.doUnmock("@googleapis/gmail");
  });
});
