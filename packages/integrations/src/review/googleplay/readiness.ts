import type { GooglePlayReviewsLiveCheckOptions } from "./contracts.js";
import { createGooglePlayReviewsClient } from "./client.js";

export function createGooglePlayReviewsLiveChecks(options: GooglePlayReviewsLiveCheckOptions) {
  return [{
    id: "reviews-list",
    description: "Android Publisher reviews endpoint is reachable for the configured package.",
    requiredCredentialIds: ["googleplay-access-token", "googleplay-package-name"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createGooglePlayReviewsClient(options);
      const response = await client.listReviews({ maxResults: 1 });
      if (context.signal?.aborted) throw new Error("Google Play reviews live check aborted.");
      return {
        details: {
          reviewCount: response.reviews?.length ?? 0,
          hasNextPage: Boolean(response.tokenPagination?.nextPageToken),
        },
      };
    },
  }];
}
