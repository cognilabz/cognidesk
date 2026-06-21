import { generateKeyPairSync } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import {
  appStoreConnectReviewedOperationAllowlist,
  appStoreReviewsCredentialStatuses,
  appStoreReviewsIntegration,
  appStoreReviewsProviderManifest,
  createAppStoreConnectJwt,
  createAppStoreReviewsClient,
  createAppStoreReviewsLiveChecks,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/review-appstore", () => {
  it("declares a constrained direct REST support slice when no official Connect JS SDK exists", () => {
    expect(appStoreReviewsProviderManifest).toMatchObject({
      id: "review.appstore",
      packageName: "@cognidesk/review-appstore",
      category: "review",
      provider: "appstore",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(appStoreReviewsProviderManifest.operations.map((operation) => operation.alias)).toEqual([
      "appstore.reviews.list",
      "appstore.reviews.page",
      "appstore.reviews.get",
      "appstore.reviewResponses.createOrUpdate",
      "appstore.reviewResponses.delete",
    ]);
    expect(appStoreReviewsIntegration.bindingReport).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(appStoreReviewsProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "direct-http-support-slice",
      officialJsSdkAvailable: false,
    });
    expect(appStoreReviewsProviderManifest.metadata?.reviewedSource).toMatchObject({
      source: "Apple App Store Connect OpenAPI specification",
      sourceUrl: "https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip",
      version: "4.4",
      artifact: "openapi.oas.json",
      checksum: "sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec",
      archiveChecksum: "sha256:18d2e448db9ebac9f6fb183e786342f67dfaa0c515995d782694a776e26c2dfd",
      operationAllowlist: appStoreConnectReviewedOperationAllowlist,
    });
    expect(appStoreConnectReviewedOperationAllowlist.map((operation) => `${operation.method} ${operation.path}`))
      .toEqual([
        "GET /v1/apps/{id}/customerReviews",
        "GET /v1/apps/{id}/customerReviews",
        "GET /v1/customerReviews/{id}",
        "POST /v1/customerReviewResponses",
        "DELETE /v1/customerReviewResponses/{id}",
        "GET /v1/apps/{id}",
      ]);
    expect(new Set(appStoreConnectReviewedOperationAllowlist.flatMap((operation) => operation.aliases)))
      .toEqual(new Set(appStoreReviewsProviderManifest.operations.map((operation) => operation.alias)));
    expect(appStoreReviewsProviderManifest.coverage.notes.join(" "))
      .toContain("@apple/app-store-server-library Node package targets App Store Server APIs");
  });

  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    const importedSpecifiers = [...source.matchAll(/from\s+["']([^"']+)["']|import\s*\(\s*["']([^"']+)["']\s*\)/g)]
      .map((match) => match[1] ?? match[2])
      .filter(Boolean);

    expect(importedSpecifiers).not.toContain("./client.js");
    expect(importedSpecifiers).not.toContain("./jwt.js");
    expect(importedSpecifiers).not.toContain("@apple/app-store-server-library");
    expect(importedSpecifiers).not.toContain("appstore-connect");
  });

  it("lists, pages, reads, responds to, and deletes App Store reviews", async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.includes("/customerReviews/review_1")) {
        return new Response(JSON.stringify({ data: { id: "review_1", type: "customerReviews" } }), { status: 200 });
      }
      if (url.includes("/customerReviewResponses/response_1") && init?.method === "DELETE") {
        return new Response(null, { status: 204 });
      }
      if (url.endsWith("/v1/customerReviewResponses") && init?.method === "POST") {
        return new Response(JSON.stringify({ data: { id: "response_1", type: "customerReviewResponses" } }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: [{ id: "review_1", type: "customerReviews" }],
        links: {
          next: "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next",
        },
      }), { status: 200 });
    });
    const client = createAppStoreReviewsClient({
      issuerId: "issuer",
      keyId: "key",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listReviews({
      limit: 10,
      sort: "-createdDate",
      include: ["response"],
      filter: { territory: "USA", rating: ["1", "2"] },
      fields: { customerReviews: ["rating", "title"] },
    })).resolves.toMatchObject({ data: [{ id: "review_1" }] });
    await expect(client.listReviewsPage("https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next"))
      .resolves.toMatchObject({ data: [{ id: "review_1" }] });
    await expect(client.getReview("review_1")).resolves.toMatchObject({ data: { id: "review_1" } });
    await expect(client.createOrUpdateReviewResponse({ reviewId: "review_1", responseBody: "Thanks." }))
      .resolves.toMatchObject({ data: { id: "response_1" } });
    await expect(client.deleteReviewResponse("response_1")).resolves.toBeUndefined();

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?limit=10&sort=-createdDate&include=response&fields%5BcustomerReviews%5D=rating%2Ctitle&filter%5Bterritory%5D=USA&filter%5Brating%5D=1%2C2",
      expect.objectContaining({ method: "GET", headers: expect.objectContaining({ authorization: "Bearer jwt-token" }) }),
    );
    await expect(client.listReviewsPage("https://api.appstoreconnect.apple.com/v1/apps/other/customerReviews?cursor=next"))
      .rejects.toThrow("configured app's customerReviews pagination links");
  });

  it("exposes a raw direct request escape hatch for reviewed support endpoints", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ data: { id: "app_1" } }), { status: 200 }));
    const client = createAppStoreReviewsClient({
      issuerId: "issuer",
      keyId: "key",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.rawClient.request({ method: "GET", path: "/v1/apps/app_1" }))
      .resolves.toMatchObject({ data: { id: "app_1" } });
  });

  it("generates ES256 App Store Connect JWTs", () => {
    const { privateKey } = generateKeyPairSync("ec", { namedCurve: "P-256" });
    const token = createAppStoreConnectJwt({
      issuerId: "issuer",
      keyId: "key-id",
      privateKey: privateKey.export({ type: "pkcs8", format: "pem" }).toString(),
      now: () => 1_780_000_000_000,
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

  it("runs bound operations and reports readiness", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ data: [{ id: "review_2" }] }), { status: 200 }));
    await expect((appStoreReviewsIntegration.run as any)(
      "appstore.reviews.list",
      { limit: 1 },
      {
        credentials: {
          issuerId: "issuer",
          keyId: "key",
          appId: "app_1",
          jwtFactory: () => "jwt-token",
          fetch: fetchMock as unknown as typeof fetch,
        },
      },
    )).resolves.toMatchObject({ data: [{ id: "review_2" }] });

    expect(appStoreReviewsCredentialStatuses({
      issuerId: "issuer",
      keyId: "key",
      privateKeyConfigured: true,
      appId: "app_1",
      responsePolicyConfigured: true,
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "appstore-api-key", state: "configured" }),
      expect.objectContaining({ requirementId: "appstore-app-id", state: "configured" }),
    ]));

    const getApp = vi.fn(async () => ({
      data: { id: "app_1", type: "apps" as const, attributes: { name: "Example", bundleId: "com.example.app" } },
    }));
    const [check] = createAppStoreReviewsLiveChecks({
      issuerId: "issuer",
      keyId: "key",
      appId: "app_1",
      jwtFactory: () => "jwt-token",
      client: { getApp },
    });
    await expect(check?.run({})).resolves.toMatchObject({
      details: { id: "app_1", name: "Example", bundleId: "com.example.app" },
    });
  });
});
