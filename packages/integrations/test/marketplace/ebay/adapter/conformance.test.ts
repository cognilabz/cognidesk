import {
  EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT,
  EBAY_SELECTED_API_OPERATION_COUNT,
  EBAY_SELECTED_API_PATH_COUNT,
  createEbayDigitalSignatureHeaders,
  createEbayMarketplaceClient,
  createEbayMarketplaceLiveChecks,
  createEbayNotificationChallengeResponse,
  createHash,
  createSign,
  describe,
  ebayMarketplaceCredentialStatuses,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiFunctionCatalog,
  ebaySelectedApiOperationCatalog,
  ebaySelectedApiSpecs,
  expect,
  generateKeyPairSync,
  it,
  parseEbayNotificationSignatureHeader,
  parseEbayNotificationWebhook,
  readProviderCoverageArtifact,
  runProviderConformance,
  verifyEbayNotificationSignature,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("reports live conformance as credential-blocked until eBay credentials are configured", async () => {
      const result = await runProviderConformance({
        manifest: ebayMarketplaceProviderManifest,
        channels: [{
          id: "marketplace",
          channel: "marketplace",
          providerPackageIds: [ebayMarketplaceProviderManifest.id],
          enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object", "update-provider-object", "send"],
        }],
        credentialStatuses: ebayMarketplaceCredentialStatuses({}),
        live: {
          enabled: true,
          checks: createEbayMarketplaceLiveChecks({
            accessToken: "missing",
            marketplaceId: "EBAY_US",
            client: {
              async getUser() {
                return { userId: "seller-1" };
              },
            },
          }),
        },
      });
  
      expect(result.status).toBe("credential-blocked");
      expect(result.checks.some((check) =>
        check.id === "provider.live.identity" && check.status === "credential-blocked"
      )).toBe(true);
    });

  it("passes provider conformance when eBay readiness and live check are configured", async () => {
      const result = await runProviderConformance({
        manifest: ebayMarketplaceProviderManifest,
        channels: [{
          id: "marketplace",
          channel: "marketplace",
          providerPackageIds: [ebayMarketplaceProviderManifest.id],
          enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object", "update-provider-object", "send"],
        }],
        credentialStatuses: ebayMarketplaceCredentialStatuses({
          accessTokenConfigured: true,
          applicationAccessTokenConfigured: true,
          clientIdConfigured: true,
          clientSecretConfigured: true,
          marketplaceId: "EBAY_US",
          notificationVerificationTokenConfigured: true,
        }),
        live: {
          enabled: true,
          checks: createEbayMarketplaceLiveChecks({
            accessToken: "configured",
            marketplaceId: "EBAY_US",
            client: {
              async getUser() {
                return { userId: "seller-1" };
              },
            },
          }),
        },
      });
  
      expect(result.status).toBe("passed");
      expect(result.checks).toContainEqual(expect.objectContaining({
        id: "provider.live.identity",
        status: "passed",
      }));
    });
});
