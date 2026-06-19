import { createFreshdeskTicketingClient } from "./client.js";
import type { FreshdeskLiveCheckOptions } from "./contracts.js";

export function createFreshdeskTicketingLiveChecks(options: FreshdeskLiveCheckOptions) {
  return [{
    id: "current-agent",
    description: "Freshdesk currently-authenticated-agent endpoint is reachable with the configured API key.",
    requiredCredentialIds: ["freshdesk-domain", "freshdesk-api-key"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createFreshdeskTicketingClient(options);
      const agent = await client.getCurrentAgent();
      if (context.signal?.aborted) throw new Error("Freshdesk live current-agent check aborted.");
      return {
        details: {
          agentId: typeof agent.id === "number" ? agent.id : undefined,
          email: typeof agent.contact?.email === "string" ? agent.contact.email : undefined,
          type: typeof agent.type === "string" ? agent.type : undefined,
        },
      };
    },
  }];
}
