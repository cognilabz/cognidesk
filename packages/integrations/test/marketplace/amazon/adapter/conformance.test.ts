import {
  amazonMarketplaceCredentialStatuses,
  amazonMarketplaceProviderManifest,
  createAmazonMarketplaceLiveChecks,
  describe,
  expect,
  it,
  runProviderConformance,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("reports live conformance as credential-blocked until Amazon credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: amazonMarketplaceProviderManifest,
      channels: [{
        id: "marketplace",
        channel: "marketplace",
        providerPackageIds: [amazonMarketplaceProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object", "send"],
      }],
      credentialStatuses: amazonMarketplaceCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createAmazonMarketplaceLiveChecks({
          accessToken: "missing",
          marketplaceId: "ATVPDKIKX0DER",
          client: {
            async getMarketplaceParticipations() {
              return { payload: [{ marketplace: { id: "ATVPDKIKX0DER" } }] };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.seller-account" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes provider conformance when Amazon readiness and live check are configured", async () => {
    const result = await runProviderConformance({
      manifest: amazonMarketplaceProviderManifest,
      channels: [{
        id: "marketplace",
        channel: "marketplace",
        providerPackageIds: [amazonMarketplaceProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object", "send"],
      }],
      credentialStatuses: amazonMarketplaceCredentialStatuses({
        lwaClientConfigured: true,
        accessTokenConfigured: true,
        awsRoleConfigured: true,
        awsRegion: "us-east-1",
        marketplaceId: "ATVPDKIKX0DER",
        notificationDestinationConfigured: true,
        notificationSignatureConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createAmazonMarketplaceLiveChecks({
          accessToken: "configured",
          marketplaceId: "ATVPDKIKX0DER",
          client: {
            async getMarketplaceParticipations() {
              return { payload: [{ marketplace: { id: "ATVPDKIKX0DER" } }] };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.seller-account",
      status: "passed",
    }));
  });
});
