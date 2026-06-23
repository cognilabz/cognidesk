import type { AppStoreLiveCheckOptions } from "./contracts.js";
import { createAppStoreReviewsClient } from "./client.js";

export function createAppStoreReviewsLiveChecks(options: AppStoreLiveCheckOptions) {
  return [{
    id: "app",
    description: "App Store Connect API can read the configured app resource with the generated JWT.",
    requiredCredentialIds: ["appstore-api-key", "appstore-app-id"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createAppStoreReviewsClient(options);
      const app = await client.getApp();
      if (context.signal?.aborted) throw new Error("App Store reviews live app check aborted.");
      const data = app.data as { id?: string; attributes?: { name?: string; bundleId?: string } } | undefined;
      return {
        details: {
          id: data?.id,
          name: data?.attributes?.name,
          bundleId: data?.attributes?.bundleId,
        },
      };
    },
  }];
}
