import { defineIntegrationProviderPackage, type ProviderManifestInput } from "@cognidesk/integration-kit";

export const googlePlayReviewsProviderManifestInput = {
  id: "review.googleplay",
  name: "Google Play Reviews",
  packageName: "@cognidesk/review-googleplay",
  provider: "googleplay",
  category: "review",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Cognidesk adapter coverage is scoped to Google Play review list/read/reply workflows.",
      "Provider-client coverage is supplied by the official @googleapis/androidpublisher Android Publisher v3 client exposed as a raw-client escape hatch.",
      "The SDK user owns Play Console permissions, package ownership, review polling policy, review reply approval, localization, consent, redaction, and retention decisions.",
    ],
    evidence: [
      { label: "Google Play Android Publisher API", url: "https://developers.google.com/android-publisher/api-ref/rest" },
      { label: "Google Play Android Publisher reviews resource", url: "https://developers.google.com/android-publisher/api-ref/rest/v3/reviews" },
      { label: "Google APIs Node.js client", url: "https://googleapis.dev/nodejs/googleapis/latest/" },
      { label: "@googleapis/androidpublisher package", url: "https://www.npmjs.com/package/@googleapis/androidpublisher" },
    ],
  },
  credentialRequirements: [
    {
      id: "googleplay-service-account",
      label: "Google Play service account",
      description: "SDK-user-owned Google service account with Google Play Console Reply to reviews permission.",
      scopes: ["https://www.googleapis.com/auth/androidpublisher"],
      required: false,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
    {
      id: "googleplay-access-token",
      label: "Google Play API auth",
      description: "Server-side Google auth client, OAuth access token, token supplier, or service-account auth for Android Publisher API requests.",
      scopes: ["https://www.googleapis.com/auth/androidpublisher"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
    {
      id: "googleplay-package-name",
      label: "Android package name",
      description: "Fully-qualified Android application package name such as com.example.app.",
      required: true,
    },
  ],
  capabilities: [
    {
      capability: "read-provider-object",
      label: "Read Google Play reviews",
      description: "Lists recent reviews and reads individual Android app reviews through the official Android Publisher client.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "googlePlayReview", label: "Google Play Review", schemaName: "Review" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "search-provider-object",
      label: "Page through Google Play reviews",
      description: "Uses Android Publisher review pagination and translation parameters controlled by SDK-user policy.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "googlePlayReview", label: "Google Play Review", schemaName: "Review" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "send",
      label: "Reply to Google Play reviews",
      description: "Replies to or updates an existing developer reply for a review when SDK-user policy and Play permissions allow it.",
      audiences: ["customer-facing"],
      providerObjects: [
        { kind: "googlePlayReview", label: "Google Play Review", schemaName: "Review" },
        { kind: "googlePlayDeveloperReply", label: "Google Play Developer Reply", schemaName: "ReviewsReplyResponse" },
      ],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "draft",
      label: "Prepare Google Play review replies",
      description: "Builds reply payloads for SDK-user-configured approval, moderation, locale, and consent flows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "googlePlayDeveloperReplyDraft", label: "Google Play Developer Reply Draft" }],
      exposesSensitiveData: true,
    },
  ],
  operations: [
    {
      alias: "googleplay.reviews.list",
      capability: "search-provider-object",
      label: "List Google Play reviews",
      providerObject: "googlePlayReview",
      providerOperation: "androidpublisher.reviews.list",
      exposesSensitiveData: true,
      requiresCredential: true,
    },
    {
      alias: "googleplay.reviews.get",
      capability: "read-provider-object",
      label: "Get Google Play review",
      providerObject: "googlePlayReview",
      providerOperation: "androidpublisher.reviews.get",
      exposesSensitiveData: true,
      requiresCredential: true,
    },
    {
      alias: "googleplay.reviews.reply",
      capability: "send",
      label: "Reply to Google Play review",
      providerObject: "googlePlayDeveloperReply",
      providerOperation: "androidpublisher.reviews.reply",
      sideEffect: true,
      externallyVisible: true,
      requiresApproval: true,
      exposesSensitiveData: true,
      requiresCredential: true,
    },
  ],
  privacyNotes: [
    "Google Play review text, author names, device metadata, ratings, language, app version, and developer replies can contain customer data.",
    "OAuth tokens and service-account material stay server-side and are represented in Studio only as readiness state.",
  ],
  limitations: [
    "The Google Play Reply to Reviews API exposes production app reviews with comments; rating-only feedback and non-production feedback are not exposed through this API.",
    "Developer replies are limited to 350 characters by the Android Publisher Reply to Reviews API.",
    "Google Play review API quotas, Reply to reviews permission, package ownership, translation behavior, reply moderation, and reply timing are owned by the SDK user's Play Console setup.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
  metadata: {
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "@googleapis/androidpublisher",
      sdkVersionRange: "^36.0.0",
      runtimePackage: "@cognidesk/review-googleplay/runtime",
      rawClientExport: "GooglePlayReviewsClient.rawClient",
    },
    adapterCoverage: {
      normalizedOperations: ["googleplay.reviews.list", "googleplay.reviews.get", "googleplay.reviews.reply"],
    },
    providerClientCoverage: {
      strategy: "official-sdk-raw-client",
      notes: "Advanced Android Publisher API access is available through the official SDK raw client, not re-exported as Cognidesk-owned full API functions.",
    },
  },
} as const;

export const googlePlayReviewsProviderManifest = defineIntegrationProviderPackage(
  googlePlayReviewsProviderManifestInput as unknown as ProviderManifestInput,
);
