import type { TikTokLiveCheckOptions } from "./contracts.js";
import { createTikTokSocialClient } from "./client.js";

export function createTikTokSocialLiveChecks(options: TikTokLiveCheckOptions) {
  return [{
    id: "account",
    description: "TikTok Open API user profile endpoint is reachable with the configured access token.",
    requiredCredentialIds: ["tiktok-access-token", "tiktok-account-id", "tiktok-scopes"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createTikTokSocialClient(options);
      const profile = await client.getUserInfo();
      if (context.signal?.aborted) throw new Error("TikTok live account check aborted.");
      const user = profile.data?.user;
      return {
        details: {
          openId: typeof user?.open_id === "string" ? user.open_id : options.openId,
          username: typeof user?.username === "string" ? user.username : undefined,
          displayName: typeof user?.display_name === "string" ? user.display_name : undefined,
        },
      };
    },
  }];
}
