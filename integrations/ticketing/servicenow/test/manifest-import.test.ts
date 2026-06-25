import { describe, expect, it } from "vitest";

describe("@cognidesk/integration-ticketing-servicenow/manifest", () => {
  it("exports the split package manifest without the runtime entrypoint", async () => {
    const { serviceNowTicketingProviderManifest } = await import("../src/manifest.js");

    expect(serviceNowTicketingProviderManifest).toMatchObject({
      id: "ticketing.servicenow",
      packageName: "@cognidesk/integration-ticketing-servicenow",
      category: "ticketing",
      provider: "servicenow",
      metadata: {
        implementation: {
          strategy: "provider-rest-adapter",
          manifestImport: "no-sdk-client-initialization",
          packageOwnedRestClient: true,
        },
        sdkDecision: {
          package: "@servicenow/sdk",
          result: "official-sdk-not-runtime-rest-client",
        },
      },
    });
  }, 10_000);
});
