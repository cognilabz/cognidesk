import { createHubSpotTicketingClient } from "./client.js";
import type { HubSpotLiveCheckOptions } from "./contracts.js";

export function createHubSpotTicketingLiveChecks(options: HubSpotLiveCheckOptions) {
  return [{
    id: "account-details",
    description: "HubSpot account-info endpoint is reachable with the configured private app token.",
    requiredCredentialIds: ["hubspot-private-app-token", "hubspot-portal"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createHubSpotTicketingClient(options);
      const account = await client.getAccountDetails();
      if (context.signal?.aborted) throw new Error("HubSpot live account-details check aborted.");
      return {
        details: {
          portalId: account.portalId,
          accountType: account.accountType,
          timeZone: account.timeZone,
        },
      };
    },
  }];
}
