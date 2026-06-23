import {
  defineIntegration,
  type IntegrationOperationContext,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";
import { createAppStoreReviewsClient } from "./client.js";
import type { AppStoreReviewsClientOptions } from "./contracts.js";
import {
  appStoreReviewsProviderManifest,
  appStoreReviewsProviderManifestInput,
} from "./manifest.js";

export type * from "./contracts.js";
export {
  appStoreOperationUrl,
  appStoreRequest,
  applyListQuery,
  createAppStoreReviewsClient,
  normalizeAppStoreReviewsPageUrl,
} from "./client.js";
export { appStoreReviewsCredentialStatuses } from "./credentials.js";
export { createAppStoreConnectJwt } from "./jwt.js";
export {
  appStoreConnectReviewedOperationAllowlist,
  appStoreReviewsProviderManifest,
  appStoreReviewsProviderManifestInput,
} from "./manifest.js";
export { createAppStoreReviewsLiveChecks } from "./readiness.js";

type AppStoreOperationContext = IntegrationOperationContext<AppStoreReviewsClientOptions>;

const appStoreReviewOperations = {
  "appstore.reviews.list": async (
    input: Parameters<ReturnType<typeof createAppStoreReviewsClient>["listReviews"]>[0],
    context: AppStoreOperationContext,
  ) => {
    const client = createAppStoreReviewsClient(context.credentials as Parameters<typeof createAppStoreReviewsClient>[0]);
    return client.listReviews(input);
  },
  "appstore.reviews.page": async (input: { pageUrl: string }, context: AppStoreOperationContext) => {
    const client = createAppStoreReviewsClient(context.credentials as Parameters<typeof createAppStoreReviewsClient>[0]);
    return client.listReviewsPage(input.pageUrl);
  },
  "appstore.reviews.get": async (
    input: { reviewId: string } & Parameters<ReturnType<typeof createAppStoreReviewsClient>["getReview"]>[1],
    context: AppStoreOperationContext,
  ) => {
    const client = createAppStoreReviewsClient(context.credentials as Parameters<typeof createAppStoreReviewsClient>[0]);
    return client.getReview(input.reviewId, input);
  },
  "appstore.reviewResponses.createOrUpdate": async (
    input: { reviewId: string; responseBody: string },
    context: AppStoreOperationContext,
  ) => {
    const client = createAppStoreReviewsClient(context.credentials as Parameters<typeof createAppStoreReviewsClient>[0]);
    return client.createOrUpdateReviewResponse(input);
  },
  "appstore.reviewResponses.delete": async (input: { responseId: string }, context: AppStoreOperationContext) => {
    const client = createAppStoreReviewsClient(context.credentials as Parameters<typeof createAppStoreReviewsClient>[0]);
    return client.deleteReviewResponse(input.responseId);
  },
};

export const appStoreReviewsIntegration = defineIntegration({
  manifest: appStoreReviewsProviderManifestInput as unknown as ProviderManifestInput,
  operations: appStoreReviewOperations as never,
});

if (appStoreReviewsIntegration.manifest.id !== appStoreReviewsProviderManifest.id) {
  throw new Error("App Store manifest and integration binding are out of sync.");
}
