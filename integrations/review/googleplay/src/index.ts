import {
  defineIntegration,
  type IntegrationOperationHandlers,
  type IntegrationOperationContext,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";
import { createGooglePlayReviewsClient } from "./client.js";
import type { GooglePlayReviewsClientOptions } from "./contracts.js";
import {
  googlePlayReviewsProviderManifest,
  googlePlayReviewsProviderManifestInput,
} from "./manifest.js";

export type * from "./contracts.js";
export { createGooglePlayReviewsClient } from "./client.js";
export { googlePlayReviewsCredentialStatuses } from "./credentials.js";
export {
  googlePlayReviewsProviderManifest,
  googlePlayReviewsProviderManifestInput,
} from "./manifest.js";
export { createGooglePlayReviewsLiveChecks } from "./readiness.js";

type GooglePlayOperationContext = IntegrationOperationContext<GooglePlayReviewsClientOptions>;

export function createGooglePlayReviewsOperationHandlers(options: GooglePlayReviewsClientOptions) {
  return createGooglePlayReviewsClient(options).handlers;
}

export function createGooglePlayReviewsIntegration(options: GooglePlayReviewsClientOptions) {
  const client = createGooglePlayReviewsClient(options);
  return defineIntegration({
    manifest: googlePlayReviewsProviderManifestInput as unknown as ProviderManifestInput,
    operations: client.handlers as unknown as IntegrationOperationHandlers,
    metadata: {
      rawClient: client.rawClient,
      packageName: options.packageName,
    },
  });
}

const googlePlayReviewOperations = {
  "googleplay.reviews.list": async (
    input: Parameters<ReturnType<typeof createGooglePlayReviewsClient>["listReviews"]>[0],
    context: GooglePlayOperationContext,
  ) => {
    const client = createGooglePlayReviewsClient(context.credentials as Parameters<typeof createGooglePlayReviewsClient>[0]);
    return client.listReviews(input);
  },
  "googleplay.reviews.get": async (
    input: { reviewId: string } & Parameters<ReturnType<typeof createGooglePlayReviewsClient>["getReview"]>[1],
    context: GooglePlayOperationContext,
  ) => {
    const client = createGooglePlayReviewsClient(context.credentials as Parameters<typeof createGooglePlayReviewsClient>[0]);
    return client.getReview(input.reviewId, input);
  },
  "googleplay.reviews.reply": async (
    input: { reviewId: string; packageName?: string; replyText: string },
    context: GooglePlayOperationContext,
  ) => {
    const client = createGooglePlayReviewsClient(context.credentials as Parameters<typeof createGooglePlayReviewsClient>[0]);
    return client.replyToReview(input.reviewId, input);
  },
};

export const googlePlayReviewsOperationHandlers = createGooglePlayReviewsOperationHandlers;

export const googlePlayReviewsIntegration = defineIntegration({
  manifest: googlePlayReviewsProviderManifestInput as unknown as ProviderManifestInput,
  operations: googlePlayReviewOperations as never,
});

if (googlePlayReviewsIntegration.manifest.id !== googlePlayReviewsProviderManifest.id) {
  throw new Error("Google Play manifest and integration binding are out of sync.");
}
