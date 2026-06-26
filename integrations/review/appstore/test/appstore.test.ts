import { generateKeyPairSync } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Client as AppStoreConnectSdkClient } from "appstore-connect-sdk";
import { describe, expect, it, vi } from "vitest";
import {
  appStoreConnectReviewedOperationAllowlist,
  appStoreReviewsCredentialStatuses,
  appStoreReviewsIntegration,
  appStoreReviewsProviderManifest,
  createAppStoreConnectJwt,
  createAppStoreReviewsIntegration,
  createAppStoreReviewsClient,
  createAppStoreReviewsLiveChecks,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/integration-review-appstore", () => {
  it("declares an App Store Connect SDK-backed adapter with provider-client override", () => {
    expect(appStoreReviewsProviderManifest).toMatchObject({
      id: "review.appstore",
      packageName: "@cognidesk/integration-review-appstore",
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
      missingHandlerAliases: appStoreReviewsProviderManifest.operations.map((operation) => operation.alias),
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(appStoreReviewsProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "third-party-app-store-connect-sdk-default-with-typed-domain-adapter",
      officialJsSdkAvailable: false,
      providerOwnedSdkAvailable: false,
      packageOwnedRestClient: "custom-transport-fallback-only",
      defaultClientPolicy: "appstore-connect-sdk-with-jwt",
      providerSdk: expect.objectContaining({
        package: "appstore-connect-sdk",
        runtimeFunctions: expect.arrayContaining([
          "appsCustomerReviewsGetToManyRelated",
          "customerReviewsGetInstance",
          "customerReviewResponsesCreateInstance",
        ]),
      }),
    });
    expect(appStoreReviewsProviderManifest.metadata?.providerRestFallback).toMatchObject({
      status: "narrow-custom-transport-fallback",
      allowedFallbackRuntime: "built-in-app-store-connect-rest-adapter-for-custom-transport",
      hostSdkPath: "AppStoreReviewsProviderClient",
    });
    expect(appStoreReviewsProviderManifest.metadata?.checkedProviderSdk).toMatchObject({
      verdict: "third-party-app-store-connect-sdk-default-runtime",
      candidates: expect.arrayContaining([
        expect.objectContaining({
          package: "@apple/app-store-server-library",
          result: "official-wrong-api-family",
        }),
        expect.objectContaining({
          package: "@rage-against-the-pixel/app-store-connect-api",
          result: "third-party-generated-not-selected",
        }),
        expect.objectContaining({
          package: "appstore-connect-sdk",
          result: "third-party-generated-default-runtime",
        }),
        expect.objectContaining({
          package: "node-app-store-connect-api",
          result: "third-party-not-default-runtime",
        }),
      ]),
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

  it("declares and imports appstore-connect-sdk for the runtime client", async () => {
    const packageJson = JSON.parse(await readFile(path.join(packageRoot, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
    };
    const clientSource = await readFile(path.join(packageRoot, "src", "client.ts"), "utf8");

    expect(packageJson.dependencies ?? {}).toHaveProperty("appstore-connect-sdk");
    expect(clientSource).toContain("from \"appstore-connect-sdk\"");
    expect(clientSource).toContain("appsCustomerReviewsGetToManyRelated");
    expect(clientSource).toContain("customerReviewsGetInstance");
    expect(clientSource).toContain("customerReviewResponsesCreateInstance");
    expect(clientSource).toContain("customerReviewResponsesDeleteInstance");
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
    expect(importedSpecifiers).not.toContain("@rage-against-the-pixel/app-store-connect-api");
    expect(importedSpecifiers).not.toContain("appstore-connect-sdk");
    expect(importedSpecifiers).not.toContain("node-app-store-connect-api");
  });

  it("delegates review operations to the injected App Store provider client", async () => {
    const providerClient = fakeProviderClient();
    const client = createAppStoreReviewsClient({
      appId: "app_1",
      providerClient,
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

    expect(providerClient.listReviews).toHaveBeenCalledWith({
      limit: 10,
      sort: "-createdDate",
      include: ["response"],
      filter: { territory: "USA", rating: ["1", "2"] },
      fields: { customerReviews: ["rating", "title"] },
    });
    expect(providerClient.listReviewsPage).toHaveBeenCalledWith("https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next");
    expect(providerClient.getReview).toHaveBeenCalledWith("review_1", undefined);
    expect(providerClient.createOrUpdateReviewResponse).toHaveBeenCalledWith({ reviewId: "review_1", responseBody: "Thanks." });
    expect(providerClient.deleteReviewResponse).toHaveBeenCalledWith("response_1");
    await expect(client.listReviewsPage("https://api.appstoreconnect.apple.com/v1/apps/other/customerReviews?cursor=next"))
      .rejects.toThrow("configured app's customerReviews pagination links");
  });

  it("calls App Store Connect review SDK functions by default", async () => {
    const sdkClient = fakeAppStoreConnectSdkClient();
    const client = createAppStoreReviewsClient({
      appId: "app_1",
      sdkClient,
    });

    await expect(client.listReviews({
      limit: 10,
      sort: "-createdDate",
      include: ["response"],
      filter: { territory: "USA", rating: ["1", "2"], existsPublishedResponse: "true" },
      fields: { customerReviews: ["rating", "title"] },
    })).resolves.toMatchObject({ data: [{ id: "review_1" }] });
    await expect(client.listReviewsPage("https://api.appstoreconnect.apple.com/v1/apps/app_1/customerReviews?cursor=next"))
      .resolves.toMatchObject({ data: [{ id: "review_1" }] });
    await expect(client.getReview("review_1")).resolves.toMatchObject({ data: { id: "review_1" } });
    await expect(client.createOrUpdateReviewResponse({ reviewId: "review_1", responseBody: "Thanks." }))
      .resolves.toMatchObject({ data: { id: "response_1" } });
    await expect(client.deleteReviewResponse("response_1")).resolves.toBeUndefined();
    await expect(client.getApp()).resolves.toMatchObject({ data: { id: "app_1" } });

    expect(sdkClient.get).toHaveBeenCalledWith(expect.objectContaining({
      url: "/v1/apps/{id}/customerReviews",
      path: { id: "app_1" },
      query: expect.objectContaining({
        limit: 10,
        sort: ["-createdDate"],
        include: ["response"],
        "filter[territory]": ["USA"],
        "filter[rating]": ["1", "2"],
        "exists[publishedResponse]": ["true"],
      }),
      responseStyle: "data",
      throwOnError: true,
    }));
    expect(sdkClient.get).toHaveBeenCalledWith(expect.objectContaining({
      url: "/v1/apps/app_1/customerReviews?cursor=next",
      responseStyle: "data",
      throwOnError: true,
    }));
    expect(sdkClient.get).toHaveBeenCalledWith(expect.objectContaining({
      url: "/v1/customerReviews/{id}",
      path: { id: "review_1" },
      responseStyle: "data",
      throwOnError: true,
    }));
    expect(sdkClient.post).toHaveBeenCalledWith(expect.objectContaining({
      url: "/v1/customerReviewResponses",
      body: expect.objectContaining({
        data: expect.objectContaining({
          type: "customerReviewResponses",
        }),
      }),
      responseStyle: "data",
      throwOnError: true,
    }));
    expect(sdkClient.delete).toHaveBeenCalledWith(expect.objectContaining({
      url: "/v1/customerReviewResponses/{id}",
      path: { id: "response_1" },
      responseStyle: "data",
      throwOnError: true,
    }));
  });

  it("uses the App Store Connect REST fallback when custom fetch is configured", async () => {
    const fetchMock = vi.fn(async (url: RequestInfo | URL, init?: RequestInit) => {
      if (String(url).includes("/customerReviewResponses") && init?.method === "POST") {
        return new Response(JSON.stringify({ data: { id: "response_1", type: "customerReviewResponses" } }), { status: 201 });
      }
      if (init?.method === "DELETE") return new Response(null, { status: 204 });
      return new Response(JSON.stringify({ data: [{ id: "review_1", type: "customerReviews" }] }), { status: 200 });
    });
    const client = createAppStoreReviewsClient({
      appId: "app 1",
      getJwt: () => "jwt-token",
      baseUrl: "https://appstore.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listReviews({
      limit: 10,
      sort: "-createdDate",
      include: ["response"],
      filter: { territory: "USA", rating: ["1", "2"] },
      fields: { customerReviews: ["rating", "title"] },
    })).resolves.toMatchObject({ data: [{ id: "review_1" }] });
    await expect(client.createOrUpdateReviewResponse({ reviewId: "review_1", responseBody: "Thanks." }))
      .resolves.toMatchObject({ data: { id: "response_1" } });
    await expect(client.deleteReviewResponse("response 1")).resolves.toBeUndefined();

    const [listUrl, listInit] = fetchMock.mock.calls[0] as [string, RequestInit];
    const parsedListUrl = new URL(listUrl);
    expect(parsedListUrl.origin).toBe("https://appstore.test");
    expect(parsedListUrl.pathname).toBe("/v1/apps/app%201/customerReviews");
    expect(parsedListUrl.searchParams.get("limit")).toBe("10");
    expect(parsedListUrl.searchParams.get("include")).toBe("response");
    expect(parsedListUrl.searchParams.get("filter[rating]")).toBe("1,2");
    expect(listInit.headers).toMatchObject({
      accept: "application/json",
      authorization: "Bearer jwt-token",
    });
    const [, responseInit] = fetchMock.mock.calls[1] as [string, RequestInit];
    expect(JSON.parse(String(responseInit.body))).toMatchObject({
      data: {
        type: "customerReviewResponses",
        attributes: { responseBody: "Thanks." },
        relationships: { review: { data: { type: "customerReviews", id: "review_1" } } },
      },
    });
    const [deleteUrl] = fetchMock.mock.calls[2] as [string, RequestInit];
    expect(deleteUrl).toBe("https://appstore.test/v1/customerReviewResponses/response%201");
  });

  it("throws structured App Store Connect JSON errors from the built-in REST adapter", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ errors: [{ status: "403", detail: "Forbidden" }] }), { status: 403 })
    );
    const client = createAppStoreReviewsClient({
      appId: "app_1",
      accessToken: "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getReview("review_1")).rejects.toMatchObject({
      name: "IntegrationError",
      code: "provider-permission",
      statusCode: 403,
      operationAlias: "appstore.reviews.get",
      details: { payload: { errors: [{ status: "403", detail: "Forbidden" }] } },
    });
  });

  it("fails closed without App Store Connect credentials or a host-injected provider client", async () => {
    const client = createAppStoreReviewsClient({ appId: "app_1" });

    await expect(client.listReviews()).rejects.toThrow("credentials");
  });

  it("fails closed before REST calls when App Store Connect runtime inputs are blank or malformed", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ data: [] }), { status: 200 }));
    const blankJwtClient = createAppStoreReviewsClient({
      appId: "app_1",
      getJwt: () => " ",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(blankJwtClient.listReviews()).rejects.toMatchObject({
      name: "IntegrationError",
      code: "credential-missing",
      providerPackageId: "review.appstore",
    });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(() => createAppStoreReviewsClient({
      appId: " ",
      accessToken: "jwt-token",
      fetch: fetchMock as unknown as typeof fetch,
    })).toThrow("app ID");

    const client = createAppStoreReviewsClient({
      appId: "app_1",
      providerClient: fakeProviderClient(),
    });
    await expect(client.listReviewsPage("not-a-url")).rejects.toMatchObject({
      name: "IntegrationError",
      code: "provider-validation",
      providerPackageId: "review.appstore",
    });
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
    const providerClient = fakeProviderClient({
      listReviews: vi.fn(async () => ({ data: [{ id: "review_2", type: "customerReviews" as const }] })),
    });
    const integration = createAppStoreReviewsIntegration({
      appId: "app_1",
      providerClient,
    });
    await expect((integration.run as (alias: "appstore.reviews.list", input: { limit: number }) => Promise<unknown>)(
      "appstore.reviews.list",
      { limit: 1 },
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
      appId: "app_1",
      client: { getApp },
    });
    await expect(check?.run({})).resolves.toMatchObject({
      details: { id: "app_1", name: "Example", bundleId: "com.example.app" },
    });
  });
});

function fakeProviderClient(overrides: Partial<ReturnType<typeof fakeProviderClientShape>> = {}) {
  return {
    ...fakeProviderClientShape(),
    ...overrides,
  };
}

function fakeProviderClientShape() {
  return {
    listReviews: vi.fn(async () => ({ data: [{ id: "review_1", type: "customerReviews" as const }] })),
    listReviewsPage: vi.fn(async () => ({ data: [{ id: "review_1", type: "customerReviews" as const }] })),
    getReview: vi.fn(async () => ({ data: { id: "review_1", type: "customerReviews" as const } })),
    createOrUpdateReviewResponse: vi.fn(async () => ({ data: { id: "response_1", type: "customerReviewResponses" as const } })),
    deleteReviewResponse: vi.fn(async () => undefined),
    getApp: vi.fn(async () => ({ data: { id: "app_1", type: "apps" as const, attributes: { name: "Example" } } })),
  };
}

function fakeAppStoreConnectSdkClient() {
  return {
    get: vi.fn(async (options: { url?: string }) => {
      if (options.url?.includes("/v1/apps/{id}/customerReviews") ||
        options.url?.includes("/v1/apps/app_1/customerReviews")) {
        return { data: [{ id: "review_1", type: "customerReviews" as const }] };
      }
      if (options.url?.includes("/v1/customerReviews/{id}")) {
        return { data: { id: "review_1", type: "customerReviews" as const } };
      }
      return { data: { id: "app_1", type: "apps" as const, attributes: { name: "Example" } } };
    }),
    post: vi.fn(async () => ({ data: { id: "response_1", type: "customerReviewResponses" as const } })),
    delete: vi.fn(async () => undefined),
  } as unknown as AppStoreConnectSdkClient & {
    get: ReturnType<typeof vi.fn>;
    post: ReturnType<typeof vi.fn>;
    delete: ReturnType<typeof vi.fn>;
  };
}
