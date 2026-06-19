import { createIntercomTicketingClient } from "./client.js";
import type { IntercomLiveCheckOptions } from "./contracts.js";

export function createIntercomTicketingLiveChecks(options: IntercomLiveCheckOptions) {
  return [{
    id: "identity",
    description: "Intercom /me is reachable with the configured API credentials.",
    requiredCredentialIds: ["intercom-access-token"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createIntercomTicketingClient(options);
      const identity = await client.identifyAdmin();
      if (context.signal?.aborted) throw new Error("Intercom live identity check aborted.");
      return {
        details: {
          adminId: typeof identity.id === "string" || typeof identity.id === "number" ? identity.id : undefined,
          email: typeof identity.email === "string" ? identity.email : undefined,
          appId: typeof identity.app?.id === "string" ? identity.app.id : undefined,
        },
      };
    },
  }];
}
