import { describe, expect, it } from "vitest";

describe("@cognidesk/integration-ticketing-dynamics365/manifest", () => {
  it("exports the split package manifest without the runtime entrypoint", async () => {
    const { dynamics365TicketingProviderManifest } = await import("../src/manifest.js");

    expect(dynamics365TicketingProviderManifest).toMatchObject({
      id: "ticketing.dynamics365",
      packageName: "@cognidesk/integration-ticketing-dynamics365",
      category: "ticketing",
      provider: "dynamics365",
    });
  });
});
