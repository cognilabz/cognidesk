import { createSalesforceTicketingClient } from "./client.js";
import type { SalesforceLiveCheckOptions } from "./contracts.js";

export function createSalesforceTicketingLiveChecks(options: SalesforceLiveCheckOptions) {
  return [{
    id: "identity-org",
    description: "Salesforce userinfo and Organization query endpoints are reachable with the configured OAuth token.",
    requiredCredentialIds: ["salesforce-instance", "salesforce-oauth-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createSalesforceTicketingClient(options);
      const [userInfo, organization] = await Promise.all([
        client.getUserInfo(),
        client.getOrganization(),
      ]);
      if (context.signal?.aborted) throw new Error("Salesforce live identity/org check aborted.");
      return {
        details: {
          userId: userInfo.user_id,
          username: userInfo.preferred_username,
          organizationId: userInfo.organization_id ?? organization?.Id,
          organizationName: organization?.Name,
          instanceName: organization?.InstanceName,
          isSandbox: organization?.IsSandbox,
        },
      };
    },
  }];
}
