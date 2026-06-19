import {
  AMAZON_FULL_API_GENERATED_FUNCTION_COUNT,
  AMAZON_FULL_API_GENERATED_FUNCTION_NAMES,
  AMAZON_FULL_API_MODEL_COUNT,
  AMAZON_FULL_API_OPERATION_COUNT,
  amazonMarketplaceProviderManifest,
  describe,
  expect,
  it,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Amazon marketplace support", () => {
    expect(amazonMarketplaceProviderManifest).toMatchObject({
      id: "marketplace.amazon",
      packageName: "@cognidesk/integrations",
      category: "marketplace",
      provider: "amazon",
      trustLevel: "official",
    });
    expect(amazonMarketplaceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "read-provider-object",
        "search-provider-object",
        "create-provider-object",
        "send",
        "marketplace.notification-signature",
        "marketplace.sigv4",
      ]));
    expect(amazonMarketplaceProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("handoff");
    expect(amazonMarketplaceProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(amazonMarketplaceProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      officialModelCount: 63,
      documentedOperationCount: 353,
      implementedOperationCount: 353,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 353,
    });
    expect(AMAZON_FULL_API_MODEL_COUNT).toBe(63);
    expect(AMAZON_FULL_API_OPERATION_COUNT).toBe(353);
    expect(AMAZON_FULL_API_GENERATED_FUNCTION_COUNT).toBe(353);
    expect(AMAZON_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "GetOrderAddress",
      "ConfirmShipment",
      "SearchCatalogItems",
      "CreateFeed",
      "CreateReport",
      "CreateDestination",
      "DeleteSubscriptionById",
    ]));
    expect(amazonMarketplaceProviderManifest.coverage.notes.join(" "))
      .toContain("every operation");
    expect(amazonMarketplaceProviderManifest.coverage.notes.join(" "))
      .toContain("March 27, 2027");
    expect(amazonMarketplaceProviderManifest.coverage.notes.join(" "))
      .toContain("Notifications destination reads, subscription creation/read/deletion");
    expect(amazonMarketplaceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://github.com/amzn/selling-partner-api-models/tree/main/models",
        "https://developer-docs.amazon.com/sp-api/reference/orders-v0",
        "https://developer-docs.amazon.com/sp-api/reference/orders-v2026-01-01",
        "https://developer-docs.amazon.com/sp-api/docs/orders-api-migration-guide",
        "https://developer-docs.amazon.com/sp-api/changelog/new-introducing-the-orders-api-v2026-01-01",
        "https://developer-docs.amazon.com/sp-api/docs/sp-api-deprecations",
        "https://developer-docs.amazon.com/sp-api/reference/createrestricteddatatoken",
        "https://developer-docs.amazon.com/sp-api/docs/notifications-api",
      ]));
    const lwaTokenRequirement = amazonMarketplaceProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "amazon-lwa-token");
    const awsSigningRequirement = amazonMarketplaceProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "amazon-aws-role-region");
    expect(awsSigningRequirement?.required).toBe(false);
    expect(lwaTokenRequirement?.scopes ?? []).not.toEqual(expect.arrayContaining([
      "sellingpartnerapi::orders",
      "sellingpartnerapi::sellers",
      "sellingpartnerapi::solicitations",
    ]));
  });
});
