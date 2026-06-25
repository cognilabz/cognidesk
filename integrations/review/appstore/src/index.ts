import {
  defineIntegration,
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
  applyListQuery,
  createAppStoreConnectRestProviderClient,
  createAppStoreReviewsClient,
  createUnconfiguredAppStoreProviderClient,
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

export function createAppStoreReviewsOperationHandlers(options: AppStoreReviewsClientOptions) {
  const client = createAppStoreReviewsClient(options);
  return {
  "appstore.reviews.list": async (
    input: Parameters<ReturnType<typeof createAppStoreReviewsClient>["listReviews"]>[0],
  ) => {
    return client.listReviews(input);
  },
  "appstore.reviews.page": async (input: { pageUrl: string }) => {
    return client.listReviewsPage(input.pageUrl);
  },
  "appstore.reviews.get": async (
    input: { reviewId: string } & Parameters<ReturnType<typeof createAppStoreReviewsClient>["getReview"]>[1],
  ) => {
    return client.getReview(input.reviewId, input);
  },
  "appstore.reviewResponses.createOrUpdate": async (
    input: { reviewId: string; responseBody: string },
  ) => {
    return client.createOrUpdateReviewResponse(input);
  },
  "appstore.reviewResponses.delete": async (input: { responseId: string }) => {
    return client.deleteReviewResponse(input.responseId);
  },
  } as const;
}

export function createAppStoreReviewsIntegration(options: AppStoreReviewsClientOptions) {
  return defineIntegration({
    manifest: appStoreReviewsProviderManifestInput as unknown as ProviderManifestInput,
    operations: createAppStoreReviewsOperationHandlers(options),
  });
}

export const appStoreReviewOperations = createAppStoreReviewsOperationHandlers;
export const appStoreReviewsIntegration = {
  manifest: appStoreReviewsProviderManifest,
  operations: {},
  operationAliases: [],
  bindingReport: {
    missingHandlerAliases: appStoreReviewsProviderManifest.operations.map((operation) => operation.alias),
    extraHandlerAliases: [],
    invalidExtensionOperationAliases: [],
  },
};

if (appStoreReviewsIntegration.manifest.id !== appStoreReviewsProviderManifest.id) {
  throw new Error("App Store manifest and integration binding are out of sync.");
}
