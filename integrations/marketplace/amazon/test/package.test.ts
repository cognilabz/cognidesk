import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { createAmazonMarketplaceClient } from "../src/client.js";
import { createAmazonMarketplaceLiveChecks } from "../src/credentials/live-checks.js";
import { refreshAmazonLwaAccessToken } from "../src/credentials/tokens.js";
import {
  amazonMarketplaceIntegration,
  createAmazonMarketplaceIntegrationOperationHandlers,
} from "../src/integration.js";
import { amazonMarketplaceOperationAliases, amazonMarketplaceProviderManifest } from "../src/manifest.js";
import { parseAmazonMarketplaceNotificationWebhook } from "../src/notifications/webhooks.js";
import {
  loadAmazonSpApiOfficialSdk,
  type AmazonSpApiOfficialApiClient,
  type AmazonSpApiOfficialSdk,
} from "../src/official-sdk.js";

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
    const calls: AmazonSdkCall[] = [];
    const client = createAmazonMarketplaceClient({
      accessToken: "token",
      officialSdk: createFakeAmazonOfficialSdk(calls),
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
    expect(calls).toEqual([]);
  });

  it("routes marketplace operations through the official SDK API classes", async () => {
    const calls: AmazonSdkCall[] = [];
    const client = createAmazonMarketplaceClient({
      accessToken: "token",
      endpoint: "eu",
      marketplaceId: "A1PA6795UKMFR9",
      userAgent: "@cognidesk/test",
      officialSdk: createFakeAmazonOfficialSdk(calls),
    });

    await expect(client.getOrders({
      createdAfter: "2026-01-01T00:00:00Z",
      orderStatuses: ["Shipped"],
    })).resolves.toEqual({ payload: { Orders: [] } });

    expect(calls).toEqual([{
      operation: "ordersV0.getOrders",
      basePath: "https://sellingpartnerapi-eu.amazon.com",
      token: "token",
      userAgent: "@cognidesk/test",
      marketplaceIds: ["A1PA6795UKMFR9"],
      opts: {
        createdAfter: "2026-01-01T00:00:00Z",
        orderStatuses: ["Shipped"],
      },
    }]);
  });

  it("creates restricted data tokens and restricted order reads through the SDK", async () => {
    const calls: AmazonSdkCall[] = [];
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      officialSdk: createFakeAmazonOfficialSdk(calls),
    });

    await expect(client.getOrderBuyerInfo("ORDER-1")).resolves.toEqual({
      payload: { Order: { AmazonOrderId: "ORDER-1", BuyerInfo: { BuyerEmail: "buyer@example.test" } } },
    });

    expect(calls).toEqual([
      {
        operation: "tokens.createRestrictedDataToken",
        basePath: "https://sellingpartnerapi-na.amazon.com",
        token: "access-token",
        userAgent: undefined,
        body: {
          restrictedResources: [{
            method: "GET",
            path: "/orders/v0/orders/ORDER-1/buyerInfo",
            dataElements: ["buyerInfo"],
          }],
        },
      },
      {
        operation: "ordersV0.getOrderBuyerInfo",
        basePath: "https://sellingpartnerapi-na.amazon.com",
        token: "rdt-from-sdk",
        userAgent: undefined,
        orderId: "ORDER-1",
      },
    ]);
  });

  it("creates operation handlers with an injected SDK-backed client", async () => {
    const calls: AmazonSdkCall[] = [];
    const handlers = createAmazonMarketplaceIntegrationOperationHandlers({
      accessToken: "token",
      marketplaceId: "ATVPDKIKX0DER",
      officialSdk: createFakeAmazonOfficialSdk(calls),
    });

    await expect(handlers[amazonMarketplaceOperationAliases.getOrders]?.(
      { createdAfter: "2026-01-01T00:00:00Z" },
      {
        providerPackageId: amazonMarketplaceProviderManifest.id,
        provider: amazonMarketplaceProviderManifest.provider,
        operationAlias: amazonMarketplaceOperationAliases.getOrders,
      },
    )).resolves.toEqual({ payload: { Orders: [] } });

    expect(calls.map((call) => call.operation)).toEqual(["ordersV0.getOrders"]);
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

  it("includes HTTP status context when Amazon LWA token responses are malformed", async () => {
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
    expect(runtimeModule).toHaveProperty("createAmazonMarketplaceIntegrationOperationHandlers");
    expect(runtimeModule).toHaveProperty("loadAmazonSpApiOfficialSdk");
  });

  it("can load the official Amazon SP-API SDK as a raw-client escape hatch", async () => {
    const sdk = await loadAmazonSpApiOfficialSdk();

    expect(sdk).toHaveProperty("SellersSpApi");
    expect(sdk).toHaveProperty("OrdersSpApi");
    expect(sdk).toHaveProperty("NotificationsSpApi");
  }, 20_000);
});

interface AmazonSdkCall {
  operation: string;
  basePath: string | undefined;
  token: string | undefined;
  userAgent: string | undefined;
  marketplaceIds?: string[];
  opts?: unknown;
  body?: unknown;
  orderId?: string;
  destinationId?: string;
  notificationType?: string;
  subscriptionId?: string;
}

function createFakeAmazonOfficialSdk(calls: AmazonSdkCall[]): AmazonSpApiOfficialSdk {
  class ApiClient implements AmazonSpApiOfficialApiClient {
    defaultHeaders: Record<string, string> = {};
    token: string | undefined;

    constructor(public basePath?: string) {}

    applyRestrictedDataToken(restrictedDataToken: string) {
      this.token = restrictedDataToken;
      return this;
    }

    applyXAmzAccessTokenToRequest(accessOrRdtToken: string) {
      this.token = accessOrRdtToken;
      return this;
    }

    enableAutoRetrievalAccessToken(clientId: string, _clientSecret: string, refreshToken?: string | null) {
      this.token = `auto:${clientId}:${refreshToken ?? ""}`;
      return this;
    }
  }

  const details = (apiClient: AmazonSpApiOfficialApiClient) => {
    const observed = apiClient as ApiClient;
    return {
      basePath: observed.basePath,
      token: observed.token,
      userAgent: observed.defaultHeaders["User-Agent"],
    };
  };

  return {
    OrdersSpApi: {
      ApiClient,
      OrdersV0Api: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async getOrders(marketplaceIds: string[], opts?: unknown) {
          calls.push({
            operation: "ordersV0.getOrders",
            ...details(this.apiClient),
            marketplaceIds,
            opts,
          });
          return { payload: { Orders: [] } };
        }

        async getOrder(orderId: string) {
          calls.push({ operation: "ordersV0.getOrder", ...details(this.apiClient), orderId });
          return { payload: { Order: { AmazonOrderId: orderId } } };
        }

        async getOrderBuyerInfo(orderId: string) {
          calls.push({ operation: "ordersV0.getOrderBuyerInfo", ...details(this.apiClient), orderId });
          return { payload: { Order: { AmazonOrderId: orderId, BuyerInfo: { BuyerEmail: "buyer@example.test" } } } };
        }

        async getOrderItems(orderId: string, opts?: unknown) {
          calls.push({ operation: "ordersV0.getOrderItems", ...details(this.apiClient), orderId, opts });
          return { payload: { AmazonOrderId: orderId, OrderItems: [] } };
        }

        async getOrderItemsBuyerInfo(orderId: string, opts?: unknown) {
          calls.push({ operation: "ordersV0.getOrderItemsBuyerInfo", ...details(this.apiClient), orderId, opts });
          return { payload: { AmazonOrderId: orderId, OrderItems: [] } };
        }
      },
    },
    Orders_v2026SpApi: {
      ApiClient,
      SearchOrdersApi: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async searchOrders(opts?: unknown) {
          calls.push({ operation: "ordersV2026.searchOrders", ...details(this.apiClient), opts });
          return { payload: { Orders: [] } };
        }
      },
      GetOrderApi: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async getOrder(orderId: string, opts?: unknown) {
          calls.push({ operation: "ordersV2026.getOrder", ...details(this.apiClient), orderId, opts });
          return { payload: { Order: { AmazonOrderId: orderId } } };
        }
      },
    },
    SellersSpApi: {
      ApiClient,
      SellersApi: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async getMarketplaceParticipations() {
          calls.push({ operation: "sellers.getMarketplaceParticipations", ...details(this.apiClient) });
          return { payload: [] };
        }
      },
    },
    NotificationsSpApi: {
      ApiClient,
      NotificationsApi: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async getDestinations() {
          calls.push({ operation: "notifications.getDestinations", ...details(this.apiClient) });
          return { payload: [] };
        }

        async getDestination(destinationId: string) {
          calls.push({ operation: "notifications.getDestination", ...details(this.apiClient), destinationId });
          return { payload: { destinationId } };
        }

        async createSubscription(notificationType: string, body: unknown) {
          calls.push({ operation: "notifications.createSubscription", ...details(this.apiClient), notificationType, body });
          return { payload: { notificationType } };
        }

        async getSubscription(notificationType: string, opts?: unknown) {
          calls.push({ operation: "notifications.getSubscription", ...details(this.apiClient), notificationType, opts });
          return { payload: { notificationType } };
        }

        async deleteSubscriptionById(subscriptionId: string, notificationType: string) {
          calls.push({
            operation: "notifications.deleteSubscriptionById",
            ...details(this.apiClient),
            notificationType,
            subscriptionId,
          });
          return {};
        }
      },
    },
    SolicitationsSpApi: {
      ApiClient,
      SolicitationsApi: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async getSolicitationActionsForOrder(orderId: string, marketplaceIds: string[]) {
          calls.push({
            operation: "solicitations.getSolicitationActionsForOrder",
            ...details(this.apiClient),
            orderId,
            marketplaceIds,
          });
          return { _links: {} };
        }

        async createProductReviewAndSellerFeedbackSolicitation(orderId: string, marketplaceIds: string[]) {
          calls.push({
            operation: "solicitations.createProductReviewAndSellerFeedbackSolicitation",
            ...details(this.apiClient),
            orderId,
            marketplaceIds,
          });
          return {};
        }
      },
    },
    TokensSpApi: {
      ApiClient,
      TokensApi: class {
        constructor(private readonly apiClient: AmazonSpApiOfficialApiClient) {}

        async createRestrictedDataToken(body: unknown) {
          calls.push({ operation: "tokens.createRestrictedDataToken", ...details(this.apiClient), body });
          return { restrictedDataToken: "rdt-from-sdk", expiresIn: 3600 };
        }
      },
    },
  };
}
