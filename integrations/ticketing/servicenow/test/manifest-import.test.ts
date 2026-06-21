import { describe, expect, it } from "vitest";

describe("@cognidesk/ticketing-servicenow/manifest", () => {
  it("exports the split package manifest without the runtime entrypoint", async () => {
    const { serviceNowTicketingProviderManifest } = await import("../src/manifest.js");

    expect(serviceNowTicketingProviderManifest).toMatchObject({
      id: "ticketing.servicenow",
      packageName: "@cognidesk/ticketing-servicenow",
      category: "ticketing",
      provider: "servicenow",
    });
  });
});
