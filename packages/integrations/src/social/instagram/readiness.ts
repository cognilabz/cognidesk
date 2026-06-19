import type { InstagramLiveCheckOptions } from "./contracts.js";
import { createInstagramSocialClient } from "./client.js";

export function createInstagramSocialLiveChecks(options: InstagramLiveCheckOptions) {
  return [{
    id: "account",
    description: "Meta Graph API Instagram professional account and connected Page endpoints are reachable.",
    requiredCredentialIds: [
      "instagram-page-access-token",
      "instagram-page-id",
      "instagram-business-account-id",
      "instagram-permissions",
    ],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createInstagramSocialClient(options);
      const account = await client.getInstagramBusinessAccount();
      const page = options.pageId ? await client.getPage() : undefined;
      if (context.signal?.aborted) throw new Error("Instagram live account check aborted.");
      return {
        details: {
          accountId: typeof account.id === "string" ? account.id : undefined,
          username: typeof account.username === "string" ? account.username : undefined,
          pageId: typeof page?.id === "string" ? page.id : options.pageId,
          pageName: typeof page?.name === "string" ? page.name : undefined,
        },
      };
    },
  }];
}
