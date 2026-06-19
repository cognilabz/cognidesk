import type { ZoomLiveCheckOptions } from "./contracts.js";
import { createZoomVideoClient } from "./client.js";

export function createZoomVideoLiveChecks(options: ZoomLiveCheckOptions) {
  return [{
    id: "current-user",
    description: "Zoom REST API current user endpoint is reachable with the configured OAuth access token.",
    requiredCredentialIds: ["zoom-oauth-access-token"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createZoomVideoClient(options);
      const user = await client.getCurrentUser();
      if (context.signal?.aborted) throw new Error("Zoom live current-user check aborted.");
      return {
        details: {
          userId: typeof user.id === "string" ? user.id : undefined,
          accountId: typeof user.account_id === "string" ? user.account_id : undefined,
          email: typeof user.email === "string" ? user.email : undefined,
          status: typeof user.status === "string" ? user.status : undefined,
        },
      };
    },
  }];
}
