import { describe, expect, it, vi } from "vitest";
import { generateKeyPairSync } from "node:crypto";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createGooglePlayReviewsClient,
  createGooglePlayReviewsLiveChecks,
  createGooglePlayServiceAccountTokenProvider,
  GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_COUNT,
  GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_NAMES,
  GOOGLEPLAY_FULL_API_OPERATION_COUNT,
  googlePlayReviewsCredentialStatuses,
  googlePlayReviewsProviderManifest,
} from "../../../src/review/googleplay/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Google Play reviews", () => {
    expect(googlePlayReviewsProviderManifest).toMatchObject({
      id: "review.googleplay",
      packageName: "@cognidesk/integrations",
      category: "review",
      provider: "googleplay",
      trustLevel: "official",
    });
    expect(googlePlayReviewsProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "read-provider-object",
        "search-provider-object",
        "send",
        "draft",
      ]));
    expect(googlePlayReviewsProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining([
        "receive",
        "googleplay.pubsub-oidc",
        "googleplay.pubsub-shared-secret",
      ]));
    expect(googlePlayReviewsProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .not.toEqual(expect.arrayContaining(["googleplay-pubsub", "googleplay-webhook-verification"]));
    expect(googlePlayReviewsProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "googleplay-access-token"))
      .toMatchObject({
        label: "Google Play API auth",
        description: expect.stringContaining("service-account token minting"),
      });
    expect(googlePlayReviewsProviderManifest.limitations.join(" ")).toContain("production app reviews");
    expect(googlePlayReviewsProviderManifest.limitations.join(" ")).toContain("not a review-ingestion surface");
    expect(googlePlayReviewsProviderManifest.limitations.join(" ")).toContain("350 characters");
    expect(googlePlayReviewsProviderManifest.limitations.join(" ")).toContain("SDK users own");
    expect(googlePlayReviewsProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(googlePlayReviewsProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "googleplay",
      documentedOperationCount: 137,
      implementedOperationCount: 137,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 137,
    });
    expect(GOOGLEPLAY_FULL_API_OPERATION_COUNT).toBe(137);
    expect(GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_COUNT).toBe(137);
    expect(GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "EditsTracksUpdate",
      "GrantsCreate",
      "InappproductsBatchUpdate",
      "PurchasesSubscriptionsGet",
    ]));
    expect(googlePlayReviewsProviderManifest.coverage.notes.join(" "))
      .toContain("every method in the official Google Play Android Publisher v3 Discovery document");
    expect(googlePlayReviewsProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.google.com/android-publisher/api-ref/rest/v3/reviews",
        "https://developers.google.com/identity/protocols/oauth2/service-account",
        "https://developer.android.com/google/play/billing/rtdn-reference",
      ]));
  });

  it("exposes generated functions for every documented Android Publisher method", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createGooglePlayReviewsClient({
      accessToken: "play-token",
      packageName: "com.example.app",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.EditsTracksUpdate({
      pathParams: { packageName: "com.example.app", editId: "edit-1", track: "production" },
      body: { releases: [] },
    });
    await client.fullApi.InappproductsBatchUpdate({
      pathParams: { packageName: "com.example.app" },
      body: { requests: [] },
    });
    await client.fullApi.PurchasesSubscriptionsGet({
      pathParams: { packageName: "com.example.app", subscriptionId: "sub_1", token: "token_1" },
    });
    await client.fullApi.GrantsCreate({
      pathParams: { parent: "developers/123456" },
      body: { packageName: "com.example.app", appLevelPermissions: ["CAN_REPLY_TO_REVIEWS"] },
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/com.example.app/edits/edit-1/tracks/production",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          authorization: "Bearer play-token",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/com.example.app/inappproducts:batchUpdate",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/com.example.app/purchases/subscriptions/sub_1/tokens/token_1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://androidpublisher.googleapis.com/androidpublisher/v3/developers/123456/grants",
      expect.objectContaining({ method: "POST" }),
    );
    await expect(client.fullApi.EditsTracksUpdate({
      // @ts-expect-error Runtime validation still rejects missing path params when JS callers omit typed input.
      pathParams: { packageName: "com.example.app", editId: "edit-1" },
    })).rejects.toThrow("Missing Google Play path parameter 'track'");
  });

  it("lists, reads, and replies to Google Play reviews through Android Publisher v3", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/reviews?") && init.method === "GET") {
        return new Response(JSON.stringify({
          reviews: [{
            reviewId: "review-1",
            authorName: "Ada",
            comments: [{ userComment: { text: "Helpful app", starRating: 5 } }],
          }],
          tokenPagination: { nextPageToken: "next" },
        }), { status: 200 });
      }
      if (url.endsWith("/reviews/review-1?translationLanguage=de") && init.method === "GET") {
        return new Response(JSON.stringify({
          reviewId: "review-1",
          comments: [{ userComment: { text: "Hilfreiche App", originalText: "Helpful app" } }],
        }), { status: 200 });
      }
      if (url.endsWith("/reviews/review-1:reply") && init.method === "POST") {
        return new Response(JSON.stringify({ result: { replyText: "Thank you!" } }), { status: 200 });
      }
      return new Response(JSON.stringify({ error: { message: "unexpected request" } }), { status: 404 });
    });
    const client = createGooglePlayReviewsClient({
      accessToken: "play-token",
      packageName: "com.example.app",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const list = await client.listReviews({
      maxResults: 10,
      token: "page-token",
      translationLanguage: "en",
    });
    const review = await client.getReview("review-1", { translationLanguage: "de" });
    const reply = await client.replyToReview("review-1", { replyText: "Thank you!" });

    expect(list.reviews?.[0]?.reviewId).toBe("review-1");
    expect(review.comments?.[0]?.userComment?.originalText).toBe("Helpful app");
    expect(reply.result?.replyText).toBe("Thank you!");
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/com.example.app/reviews?maxResults=10&token=page-token&translationLanguage=en",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer play-token" }),
      }),
    );
    const replyRequest = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string };
    expect(JSON.parse(replyRequest.body)).toEqual({ replyText: "Thank you!" });
  });

  it("rejects Google Play review replies longer than the documented limit", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ result: { replyText: "unexpected" } }), { status: 200 })
    );
    const client = createGooglePlayReviewsClient({
      accessToken: "play-token",
      packageName: "com.example.app",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.replyToReview("review-1", { replyText: "x".repeat(351) }))
      .rejects.toThrow("350 characters or fewer");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses an SDK-supplied token provider and surfaces Google API errors", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ error: { message: "The caller does not have permission" } }), { status: 403 })
    );
    const client = createGooglePlayReviewsClient({
      getAccessToken: async () => "fresh-token",
      packageName: "com.example.app",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getReview("review-2")).rejects.toThrow("The caller does not have permission");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/com.example.app/reviews/review-2",
      expect.objectContaining({
        headers: expect.objectContaining({ authorization: "Bearer fresh-token" }),
      }),
    );
  });

  it("mints Android Publisher access tokens from service-account credentials", async () => {
    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
    const privateKeyPem = privateKey.export({ format: "pem", type: "pkcs8" }).toString();
    const tokenFetch = vi.fn(async (_url: string, init?: RequestInit) =>
      new Response(JSON.stringify({ access_token: "minted-token", expires_in: 3600 }), { status: 200 })
    );
    const provider = createGooglePlayServiceAccountTokenProvider({
      serviceAccount: {
        clientEmail: "play-reviewer@example.iam.gserviceaccount.com",
        privateKey: privateKeyPem,
        privateKeyId: "key-1",
        tokenUri: "https://oauth2.googleapis.test/token",
      },
      fetch: tokenFetch as unknown as typeof fetch,
      now: () => 1_781_690_400,
    });

    await expect(provider()).resolves.toBe("minted-token");
    await expect(provider()).resolves.toBe("minted-token");

    expect(tokenFetch).toHaveBeenCalledTimes(1);
    const [url, init] = tokenFetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://oauth2.googleapis.test/token");
    expect(init.method).toBe("POST");
    const body = new URLSearchParams(String(init.body));
    expect(body.get("grant_type")).toBe("urn:ietf:params:oauth:grant-type:jwt-bearer");
    const assertion = body.get("assertion");
    if (!assertion) throw new Error("Expected OAuth assertion.");
    const [header, payload] = assertion.split(".");
    expect(JSON.parse(Buffer.from(header ?? "", "base64url").toString("utf8"))).toMatchObject({
      alg: "RS256",
      kid: "key-1",
    });
    expect(JSON.parse(Buffer.from(payload ?? "", "base64url").toString("utf8"))).toMatchObject({
      iss: "play-reviewer@example.iam.gserviceaccount.com",
      aud: "https://oauth2.googleapis.test/token",
      scope: "https://www.googleapis.com/auth/androidpublisher",
      iat: 1_781_690_400,
      exp: 1_781_694_000,
    });
  });

  it("uses service-account credentials directly from the reviews client", async () => {
    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
    const privateKeyPem = privateKey.export({ format: "pem", type: "pkcs8" }).toString();
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (url === "https://oauth2.googleapis.com/token") {
        return new Response(JSON.stringify({ access_token: "service-account-token", expires_in: 3600 }), { status: 200 });
      }
      return new Response(JSON.stringify({ reviewId: "review-1" }), { status: 200 });
    });
    const client = createGooglePlayReviewsClient({
      packageName: "com.example.app",
      serviceAccount: {
        clientEmail: "play-reviewer@example.iam.gserviceaccount.com",
        privateKey: privateKeyPem,
      },
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getReview("review-1")).resolves.toMatchObject({ reviewId: "review-1" });
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/com.example.app/reviews/review-1",
      expect.objectContaining({
        headers: expect.objectContaining({ authorization: "Bearer service-account-token" }),
      }),
    );
  });

  it("reports Studio-visible credential readiness without exposing secrets", () => {
    const statuses = googlePlayReviewsCredentialStatuses({
      serviceAccountConfigured: true,
      accessTokenConfigured: true,
      packageName: "com.example.app",
      expiresAt: "2026-06-17T10:00:00.000Z",
    });

    expect(statuses).toEqual(expect.arrayContaining([
      expect.objectContaining({
        providerPackageId: "review.googleplay",
        requirementId: "googleplay-access-token",
        state: "configured",
        expiresAt: "2026-06-17T10:00:00.000Z",
      }),
    ]));
    expect(statuses.map((status) => status.requirementId))
      .not.toEqual(expect.arrayContaining(["googleplay-pubsub", "googleplay-webhook-verification"]));
    expect(JSON.stringify(statuses)).not.toMatch(/secret-value|play-token|private_key/i);

    const serviceAccountAuthOnly = googlePlayReviewsCredentialStatuses({
      serviceAccountConfigured: true,
      packageName: "com.example.app",
    });
    expect(serviceAccountAuthOnly).toEqual(expect.arrayContaining([
      expect.objectContaining({
        requirementId: "googleplay-access-token",
        state: "configured",
        message: expect.stringContaining("service-account token minting"),
      }),
    ]));

    const tokenSupplierAuthOnly = googlePlayReviewsCredentialStatuses({
      tokenSupplierConfigured: true,
      packageName: "com.example.app",
    });
    expect(tokenSupplierAuthOnly).toEqual(expect.arrayContaining([
      expect.objectContaining({
        requirementId: "googleplay-access-token",
        state: "configured",
        message: expect.stringContaining("token supplier"),
      }),
    ]));

    const missing = googlePlayReviewsCredentialStatuses({});
    expect(missing.map((status) => status.state)).toEqual([
      "not-required",
      "missing",
      "missing",
    ]);
  });

  it("creates a live check that reads one review page", async () => {
    const listReviews = vi.fn(async () => ({
      reviews: [{ reviewId: "review-1" }],
      tokenPagination: { nextPageToken: "next" },
    }));
    const checks = createGooglePlayReviewsLiveChecks({
      accessToken: "play-token",
      packageName: "com.example.app",
      client: { listReviews },
    });
    const check = checks[0];

    if (!check) throw new Error("Expected Google Play reviews live check.");
    const result = await check.run({});

    expect(listReviews).toHaveBeenCalledWith({ maxResults: 1 });
    expect(result?.details).toEqual({ reviewCount: 1, hasNextPage: true });
  });

  it("documents that Google Play RTDN payloads are purchase-state triggers, not review ingestion", () => {
    const rtdnNotification = {
      version: "1.0",
      packageName: "com.example.app",
      eventTimeMillis: "1781690400000",
      subscriptionNotification: {
        version: "1.0",
        notificationType: 4,
        purchaseToken: "purchase-token",
        subscriptionId: "premium_monthly",
      },
    };

    expect(rtdnNotification).not.toHaveProperty("reviewId");
    expect(rtdnNotification).not.toHaveProperty("review");
    expect(googlePlayReviewsProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("receive");
  });

  it("passes provider conformance for the SDK-owned review channel", async () => {
    const result = await runProviderConformance({
      manifest: googlePlayReviewsProviderManifest,
      expectedPackageName: "@cognidesk/integrations",
      credentialStatuses: googlePlayReviewsCredentialStatuses({
        serviceAccountConfigured: true,
        accessTokenConfigured: true,
        packageName: "com.example.app",
      }),
    });

    expect(result.passed).toBe(true);
    expect(result.checks.every((check) => check.status === "passed" || check.status === "skipped")).toBe(true);
  });
});
