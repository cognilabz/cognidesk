import type { MessengerLiveCheckOptions } from "./contracts.js";
import { createMessengerSocialClient } from "./client.js";

export function createMessengerSocialLiveChecks(options: MessengerLiveCheckOptions) {
  return [{
    id: "page",
    description: "Meta Graph API can read the configured Messenger Page with the Page access token.",
    requiredCredentialIds: ["messenger-page-access-token", "messenger-page-id"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createMessengerSocialClient(options);
      const page = await client.getPage();
      if (context.signal?.aborted) throw new Error("Messenger live page check aborted.");
      return {
        details: {
          id: typeof page.id === "string" ? page.id : undefined,
          name: typeof page.name === "string" ? page.name : undefined,
          category: typeof page.category === "string" ? page.category : undefined,
        },
      };
    },
  }];
}
