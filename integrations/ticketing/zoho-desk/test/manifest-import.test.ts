import { describe, expect, it } from "vitest";

describe("@cognidesk/integration-ticketing-zoho-desk/manifest", () => {
  it("exports the split package manifest without the runtime entrypoint", async () => {
    const { zohoDeskTicketingProviderManifest } = await import("../src/manifest.js");

    expect(zohoDeskTicketingProviderManifest).toMatchObject({
      id: "ticketing.zoho-desk",
      packageName: "@cognidesk/integration-ticketing-zoho-desk",
      category: "ticketing",
      provider: "zoho-desk",
    });
  });
});
