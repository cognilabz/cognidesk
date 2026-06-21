import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import {
  createGooglePlayReviewsClient,
  createGooglePlayReviewsLiveChecks,
  googlePlayReviewsCredentialStatuses,
  googlePlayReviewsIntegration,
  googlePlayReviewsProviderManifest,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/review-googleplay", () => {
  it("declares SDK-backed adapter coverage without full-provider clone claims", () => {
    expect(googlePlayReviewsProviderManifest).toMatchObject({
      id: "review.googleplay",
      packageName: "@cognidesk/review-googleplay",
      category: "review",
      provider: "googleplay",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(googlePlayReviewsProviderManifest.operations.map((operation) => operation.alias)).toEqual([
      "googleplay.reviews.list",
      "googleplay.reviews.get",
      "googleplay.reviews.reply",
    ]);
    expect(googlePlayReviewsIntegration.bindingReport).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(googlePlayReviewsProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk",
      sdkPackage: "@googleapis/androidpublisher",
    });
  });

  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    const importedSpecifiers = [...source.matchAll(/from\s+["']([^"']+)["']|import\s*\(\s*["']([^"']+)["']\s*\)/g)]
      .map((match) => match[1] ?? match[2])
      .filter(Boolean);

    expect(importedSpecifiers).not.toContain("@googleapis/androidpublisher");
    expect(importedSpecifiers).not.toContain("./client.js");
    expect(importedSpecifiers).not.toContain("./readiness.js");
  });

  it("calls the official Android Publisher reviews methods", async () => {
    const list = vi.fn(async () => ({ data: { reviews: [{ reviewId: "review-1" }], tokenPagination: { nextPageToken: "next" } } }));
    const get = vi.fn(async () => ({ data: { reviewId: "review-1", authorName: "Ada" } }));
    const reply = vi.fn(async () => ({ data: { result: { replyText: "Thanks!" } } }));
    const rawClient = { reviews: { list, get, reply } };
    const client = createGooglePlayReviewsClient({
      packageName: "com.example.app",
      getAccessToken: async () => "access-token",
      rawClient: rawClient as any,
    });

    await expect(client.listReviews({ maxResults: 10, token: "page", translationLanguage: "en" }))
      .resolves.toMatchObject({ reviews: [{ reviewId: "review-1" }] });
    await expect(client.getReview("review-1")).resolves.toMatchObject({ authorName: "Ada" });
    await expect(client.replyToReview("review-1", { replyText: "Thanks!" }))
      .resolves.toMatchObject({ result: { replyText: "Thanks!" } });

    expect(client.rawClient).toBe(rawClient);
    expect(list).toHaveBeenCalledWith(expect.objectContaining({
      auth: "access-token",
      packageName: "com.example.app",
      maxResults: 10,
      token: "page",
      translationLanguage: "en",
    }));
    expect(get).toHaveBeenCalledWith(expect.objectContaining({
      auth: "access-token",
      packageName: "com.example.app",
      reviewId: "review-1",
    }));
    expect(reply).toHaveBeenCalledWith(expect.objectContaining({
      auth: "access-token",
      packageName: "com.example.app",
      reviewId: "review-1",
      requestBody: { replyText: "Thanks!" },
    }));
  });

  it("runs bound operations through integration-kit", async () => {
    const list = vi.fn(async () => ({ data: { reviews: [{ reviewId: "review-2" }] } }));
    await expect((googlePlayReviewsIntegration.run as any)(
      "googleplay.reviews.list",
      { maxResults: 1 },
      {
        credentials: {
          packageName: "com.example.app",
          accessToken: "token",
          rawClient: { reviews: { list, get: vi.fn(), reply: vi.fn() } },
        },
      },
    )).resolves.toMatchObject({ reviews: [{ reviewId: "review-2" }] });
  });

  it("preserves readiness and reply policy behavior", async () => {
    const client = createGooglePlayReviewsClient({
      packageName: "com.example.app",
      accessToken: "token",
      rawClient: { reviews: { list: vi.fn(), get: vi.fn(), reply: vi.fn() } } as any,
    });
    await expect(client.replyToReview("review-1", { replyText: "x".repeat(351) }))
      .rejects.toThrow("350 characters or fewer");

    expect(googlePlayReviewsCredentialStatuses({ packageName: "com.example.app", tokenSupplierConfigured: true }))
      .toEqual(expect.arrayContaining([
        expect.objectContaining({ requirementId: "googleplay-access-token", state: "configured" }),
        expect.objectContaining({ requirementId: "googleplay-package-name", state: "configured" }),
      ]));

    const listReviews = vi.fn(async () => ({ reviews: [{ reviewId: "review-1" }] }));
    const [check] = createGooglePlayReviewsLiveChecks({
      packageName: "com.example.app",
      accessToken: "token",
      client: { listReviews },
    });
    await expect(check?.run({})).resolves.toMatchObject({ details: { reviewCount: 1, hasNextPage: false } });
  });
});
