import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/email-gmail/manifest", () => {
  it("imports without loading the Gmail SDK client module", async () => {
    vi.resetModules();
    vi.doMock("@googleapis/gmail", () => {
      throw new Error("manifest imported the Gmail SDK");
    });

    const { gmailEmailProviderManifest } = await import("../src/manifest.js");

    expect(gmailEmailProviderManifest.packageName).toBe("@cognidesk/email-gmail");
    expect(gmailEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
    vi.doUnmock("@googleapis/gmail");
  });
});
