import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { createAmazonMarketplaceClient } from "../src/client.js";
import { createAmazonMarketplaceLiveChecks } from "../src/credentials/live-checks.js";
import { refreshAmazonLwaAccessToken } from "../src/credentials/tokens.js";
import { amazonMarketplaceIntegration } from "../src/integration.js";
import { amazonMarketplaceOperationAliases, amazonMarketplaceProviderManifest } from "../src/manifest.js";
import { parseAmazonMarketplaceNotificationWebhook } from "../src/notifications/webhooks.js";
import { loadAmazonSpApiOfficialSdk } from "../src/official-sdk.js";

describe("@cognidesk/integration-marketplace-amazon", () => {
  it("publishes the Cognidesk manifest-only export subpath", () => {
    const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
      exports?: Record<string, { types?: string; import?: string }>;
      scripts?: { build?: string };
      cognidesk?: { manifestOnlyExports?: string[] };
    };

    expect(packageJson.exports?.["./cognidesk"]).toEqual({
      types: "./dist/cognidesk.d.ts",
      import: "./dist/cognidesk.js",
    });
    expect(packageJson.scripts?.build).toContain("src/cognidesk.ts");
    expect(packageJson.cognidesk?.manifestOnlyExports).toContain("./cognidesk");
  });

  it("binds every manifest operation to a handler", () => {
    const report = assertIntegrationConformance(amazonMarketplaceIntegration);

    expect(report.missingHandlerAliases).toEqual([]);
    expect(report.extraHandlerAliases).toEqual([]);
    expect(amazonMarketplaceProviderManifest.packageName).toBe("@cognidesk/integration-marketplace-amazon");
    expect(amazonMarketplaceProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(amazonMarketplaceProviderManifest.operations.map((operation) => operation.alias)).toContain(
      amazonMarketplaceOperationAliases.getOrders,
    );
  });

  it("keeps manifest imports runtime-light", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(Object.keys(manifestModule).sort()).toEqual([
      "amazonMarketplaceOperationAliases",
      "amazonMarketplaceProviderManifest",
    ]);
  });

  it("rejects invalid subscription identifiers before issuing requests", async () => {
    const client = createAmazonMarketplaceClient({
      accessToken: "token",
      fetch: (async () => {
        throw new Error("fetch should not be called");
      }) as typeof fetch,
    });

    await expect(client.createSubscription({
      notificationType: "",
      destinationId: "destination-1",
    })).rejects.toThrow("createSubscription requires a notificationType");
    await expect(client.createSubscription({
      notificationType: "ORDER_CHANGE",
    } as never)).rejects.toThrow("createSubscription requires a destinationId");
    await expect(client.getSubscription({
      notificationType: "",
    })).rejects.toThrow("getSubscription requires a notificationType");
  });

  it("preserves wrapped notification transport and marks skipped verification explicitly", async () => {
    const wrappedPayload = {
      Records: [{
        body: JSON.stringify({
          NotificationType: "ORDER_CHANGE",
          NotificationMetadata: {
            NotificationId: "notification-1",
            SellerId: "seller-1",
            MarketplaceId: "ATVPDKIKX0DER",
          },
        }),
      }],
    };

    const envelope = await parseAmazonMarketplaceNotificationWebhook(
      new Request("https://example.test/webhook", {
        method: "POST",
        body: JSON.stringify(wrappedPayload),
      }),
      { requireVerification: false },
    );

    expect(envelope.transport).toBe("sqs");
    expect(envelope.verifiedBy).toBe("unverified");
    expect(envelope.notificationType).toBe("ORDER_CHANGE");
  });

  it("includes HTTP status context when Amazon JSON responses are malformed", async () => {
    const client = createAmazonMarketplaceClient({
      accessToken: "token",
      fetch: (async () => new Response("<html>bad gateway</html>", { status: 502 })) as typeof fetch,
    });

    await expect(client.getOrders()).rejects.toThrow("Amazon SP-API returned malformed JSON with HTTP 502");
    await expect(refreshAmazonLwaAccessToken({
      refreshToken: "refresh",
      lwaClientId: "client",
      lwaClientSecret: "secret",
      fetch: (async () => new Response("<html>bad gateway</html>", { status: 503 })) as typeof fetch,
    })).rejects.toThrow("Amazon LWA token request returned malformed JSON with HTTP 503");
  });

  it("passes live-check abort signals into the seller-account request", async () => {
    const controller = new AbortController();
    let observedSignal: AbortSignal | undefined;
    const checks = createAmazonMarketplaceLiveChecks({
      marketplaceId: "ATVPDKIKX0DER",
      client: {
        async getMarketplaceParticipations(input) {
          observedSignal = input?.signal;
          return { payload: [] };
        },
      },
    });
    const check = checks[0];
    if (!check) throw new Error("Expected Amazon marketplace live check.");

    await check.run({ signal: controller.signal });

    expect(observedSignal).toBe(controller.signal);
  });

  it("exposes runtime imports separately from manifest-only metadata", async () => {
    const runtimeModule = await import("../src/runtime.js");

    expect(runtimeModule).toHaveProperty("amazonMarketplaceIntegration");
    expect(runtimeModule).toHaveProperty("createAmazonMarketplaceClient");
    expect(runtimeModule).toHaveProperty("loadAmazonSpApiOfficialSdk");
  });

  it("can load the official Amazon SP-API SDK as a raw-client escape hatch", async () => {
    const sdk = await loadAmazonSpApiOfficialSdk();

    expect(sdk).toHaveProperty("SellersSpApi");
    expect(sdk).toHaveProperty("OrdersSpApi");
    expect(sdk).toHaveProperty("NotificationsSpApi");
  }, 20_000);
});
