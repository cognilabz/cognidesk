import type { ZendeskLiveCheckOptions } from "./contracts.js";
import { createZendeskTicketingClient } from "./client/index.js";

export function createZendeskTicketingLiveChecks(options: ZendeskLiveCheckOptions) {
  return [{
    id: "current-user",
    description: "Zendesk Support API current-user endpoint is reachable with the configured credentials.",
    requiredCredentialIds: ["zendesk-instance", "zendesk-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createZendeskTicketingClient(options);
      const user = await client.getCurrentUser();
      if (context.signal?.aborted) throw new Error("Zendesk live current-user check aborted.");
      return {
        details: {
          userId: typeof user.id === "number" ? user.id : undefined,
          role: typeof user.role === "string" ? user.role : undefined,
          active: typeof user.active === "boolean" ? user.active : undefined,
        },
      };
    },
  }];
}
