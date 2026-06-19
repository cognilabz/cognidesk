import { describe, expect, it } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createHubSpotTicketingLiveChecks,
  hubSpotTicketingCredentialStatuses,
  hubSpotTicketingProviderManifest,
} from "../../../src/ticketing/hubspot/index.js";

describe("@cognidesk/integrations HubSpot conformance", () => {
  it("reports live conformance as credential-blocked until HubSpot credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: hubSpotTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [hubSpotTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: hubSpotTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createHubSpotTicketingLiveChecks({
          privateAppToken: "missing",
          client: {
            async getAccountDetails() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.account-details" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when HubSpot live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: hubSpotTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [hubSpotTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: hubSpotTicketingCredentialStatuses({
        privateAppToken: "configured",
        portalId: 42,
        appId: 24,
        webhookSecret: "configured",
      }),
      live: {
        enabled: true,
        checks: createHubSpotTicketingLiveChecks({
          privateAppToken: "configured",
          client: {
            async getAccountDetails() {
              return { portalId: 42, accountType: "STANDARD", timeZone: "Europe/Vienna" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account-details",
      status: "passed",
    }));
  });
});
