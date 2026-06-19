import { generateKeyPairSync } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  APPSTORE_FULL_API_GENERATED_FUNCTION_COUNT,
  APPSTORE_FULL_API_GENERATED_FUNCTION_NAMES,
  APPSTORE_FULL_API_OPERATION_COUNT,
  appStoreReviewsCredentialStatuses,
  appStoreReviewsProviderManifest,
  createAppStoreConnectJwt,
  createAppStoreReviewsClient,
  createAppStoreReviewsLiveChecks,
} from "../../../src/review/appstore/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for App Store reviews", () => {
    expect(appStoreReviewsProviderManifest).toMatchObject({
      id: "review.appstore",
      packageName: "@cognidesk/integrations",
      category: "review",
      provider: "appstore",
      trustLevel: "official",
    });
    expect(appStoreReviewsProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "draft",
        "send",
        "read-provider-object",
        "search-provider-object",
        "update-provider-object",
      ]));
    expect(appStoreReviewsProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(appStoreReviewsProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "appstore",
      documentedOperationCount: 1216,
      implementedOperationCount: 1216,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 1216,
    });
    expect(APPSTORE_FULL_API_OPERATION_COUNT).toBe(1216);
    expect(APPSTORE_FULL_API_GENERATED_FUNCTION_COUNT).toBe(1216);
    expect(APPSTORE_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "AppsCustomerReviewsGetToManyRelated",
      "CustomerReviewResponsesCreateInstance",
      "BuildsGetCollection",
      "AnalyticsReportRequestsCreateInstance",
      "InAppPurchasesV2CreateInstance",
    ]));
    expect(appStoreReviewsProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in Apple's official App Store Connect OpenAPI specification");
    expect(appStoreReviewsProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-customerreviews",
        "https://developer.apple.com/documentation/appstoreconnectapi/post-v1-customerreviewresponses",
      ]));
  });

  it("exposes generated functions for every documented App Store Connect OpenAPI operation", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ data: { id: "ok" } }), { status: 200 }));
    const client = createAppStoreReviewsClient({
      issuerId: "issuer",
      keyId: "key-id",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.AppsCustomerReviewsGetToManyRelated({
      pathParams: { id: "app_1" },
      query: { limit: 10, include: ["response"] },
    });
    await client.fullApi.CustomerReviewResponsesCreateInstance({
      body: { data: { type: "customerReviewResponses", attributes: { responseBody: "Thanks for the feedback." }, relationships: { review: { data: { type: "customerReviews", id: "review_1" } } } } },
    });
    await client.fullApi.BuildsGetCollection({ query: { "filter[app]": ["app_1"] } });
    await client.fullApi.AnalyticsReportRequestsCreateInstance({
      body: { data: { type: "analyticsReportRequests", attributes: { accessType: "ONE_TIME_SNAPSHOT" }, relationships: { app: { data: { type: "apps", id: "app_1" } } } } },
    });
    await client.fullApi.InAppPurchasesV2CreateInstance({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full in-app purchase attributes.
      body: { data: { type: "inAppPurchases" } },
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?limit=10&include=response",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer jwt-token" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.appstoreconnect.apple.com/v1/customerReviewResponses",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.appstoreconnect.apple.com/v1/builds?filter%5Bapp%5D=app_1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://api.appstoreconnect.apple.com/v2/inAppPurchases",
      expect.objectContaining({ method: "POST" }),
    );
    // @ts-expect-error Runtime validation still rejects missing path params when JS callers omit typed input.
    await expect(client.fullApi.AppsCustomerReviewsGetToManyRelated())
      .rejects.toThrow("Missing App Store Connect path parameter 'id'");
  });

  it("lists and reads App Store customer reviews", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/customerReviews/review_1")) {
        return new Response(JSON.stringify({ data: { id: "review_1", type: "customerReviews" } }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: [{ id: "review_1", type: "customerReviews" }],
        links: {
          self: "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?limit=10",
          next: "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next-cursor",
        },
      }), { status: 200 });
    });
    const client = createAppStoreReviewsClient({
      issuerId: "issuer",
      keyId: "key-id",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listReviews({
      limit: 10,
      sort: "-createdDate",
      include: ["response"],
      filter: { territory: "USA", rating: ["1", "2"] },
      fields: { customerReviews: ["rating", "title", "body"] },
    })).resolves.toMatchObject({ data: [{ id: "review_1" }] });
    await expect(client.getReview("review_1", { include: ["response"] })).resolves.toMatchObject({ data: { id: "review_1" } });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?limit=10&sort=-createdDate&include=response&fields%5BcustomerReviews%5D=rating%2Ctitle%2Cbody&filter%5Bterritory%5D=USA&filter%5Brating%5D=1%2C2",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("follows App Store review pagination links only for the configured app", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ data: [{ id: "review_2", type: "customerReviews" }] }), { status: 200 })
    );
    const client = createAppStoreReviewsClient({
      issuerId: "issuer",
      keyId: "key-id",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listReviewsPage("https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next-cursor"))
      .resolves.toMatchObject({ data: [{ id: "review_2" }] });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next-cursor",
      expect.objectContaining({ method: "GET" }),
    );
    await expect(client.listReviewsPage("https://api.appstoreconnect.apple.com/v1/apps/other/customerReviews?cursor=next-cursor"))
      .rejects.toThrow("configured app's customerReviews pagination links");
  });

  it("creates and updates customer review responses", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ data: { id: "response_1", type: "customerReviewResponses" } }), { status: 200 })
    );
    const client = createAppStoreReviewsClient({
      issuerId: "issuer",
      keyId: "key-id",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.createOrUpdateReviewResponse({ reviewId: "review_1", responseBody: "Thanks for the feedback." });
    await client.updateReviewResponse({ responseId: "response_1", responseBody: "Updated response." });

    const createRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(createRequest.body)).toMatchObject({
      data: {
        type: "customerReviewResponses",
        attributes: { responseBody: "Thanks for the feedback." },
        relationships: { review: { data: { type: "customerReviews", id: "review_1" } } },
      },
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.appstoreconnect.apple.com/v1/customerReviewResponses",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("generates ES256 App Store Connect JWTs", () => {
    const { privateKey } = generateKeyPairSync("ec", { namedCurve: "P-256" });
    const token = createAppStoreConnectJwt({
      issuerId: "issuer",
      keyId: "key-id",
      privateKey: privateKey.export({ type: "pkcs8", format: "pem" }).toString(),
      now: () => 1780000000000,
      jti: "jwt-id",
    });

    const [header, payload, signature] = token.split(".");
    expect(JSON.parse(Buffer.from(header ?? "", "base64url").toString("utf8"))).toMatchObject({
      alg: "ES256",
      kid: "key-id",
    });
    expect(JSON.parse(Buffer.from(payload ?? "", "base64url").toString("utf8"))).toMatchObject({
      iss: "issuer",
      aud: "appstoreconnect-v1",
      jti: "jwt-id",
    });
    expect(Buffer.from(signature ?? "", "base64url").byteLength).toBe(64);
  });

  it("reports conformance as credential-blocked until App Store credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: appStoreReviewsProviderManifest,
      channels: [{
        id: "review",
        channel: "review",
        providerPackageIds: [appStoreReviewsProviderManifest.id],
        enabledCapabilities: ["receive", "draft", "send", "read-provider-object", "search-provider-object", "update-provider-object"],
      }],
      credentialStatuses: appStoreReviewsCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createAppStoreReviewsLiveChecks({
          issuerId: "missing",
          keyId: "missing",
          appId: "app_1",
          jwtFactory: () => "unused",
          client: {
            async getApp() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.app" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when App Store review readiness is configured", async () => {
    const result = await runProviderConformance({
      manifest: appStoreReviewsProviderManifest,
      channels: [{
        id: "review",
        channel: "review",
        providerPackageIds: [appStoreReviewsProviderManifest.id],
        enabledCapabilities: ["receive", "draft", "send", "read-provider-object", "search-provider-object", "update-provider-object"],
      }],
      credentialStatuses: appStoreReviewsCredentialStatuses({
        issuerId: "issuer",
        keyId: "key-id",
        privateKeyConfigured: true,
        appId: "app_1",
        responsePolicyConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createAppStoreReviewsLiveChecks({
          issuerId: "issuer",
          keyId: "key-id",
          appId: "app_1",
          jwtFactory: () => "jwt-token",
          client: {
            async getApp() {
              return { data: { id: "app_1", type: "apps", attributes: { name: "Example App", bundleId: "com.example.app" } } };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.app",
      status: "passed",
    }));
  });
});
