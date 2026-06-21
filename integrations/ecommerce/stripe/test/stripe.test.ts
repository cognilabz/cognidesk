import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createStripeEcommerceClient,
  createStripeEcommerceIntegrationFromClient,
  stripeEcommerceCredentialStatuses,
  stripeEcommerceProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-ecommerce-stripe", () => {
  it("binds every manifest operation to exactly one handler", () => {
    const client = fakeStripeClient();
    const integration = createStripeEcommerceIntegrationFromClient(createStripeEcommerceClient({
      secretKey: "sk_test",
      rawClient: client as never,
    }));

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(integration.operationAliases).toContain("stripe.rawClient");
  });

  it("keeps manifest imports SDK-free", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    expect(source).not.toContain("from \"stripe\"");
    expect(source).not.toContain("new Stripe");
    expect(stripeEcommerceProviderManifest.packageName).toBe("@cognidesk/integration-ecommerce-stripe");
    expect(stripeEcommerceProviderManifest.coverage.scope).toBe("support-workflow-subset");
  });

  it("exposes the raw Stripe client escape hatch", async () => {
    const rawClient = fakeStripeClient();
    const integration = createStripeEcommerceIntegrationFromClient(createStripeEcommerceClient({
      secretKey: "sk_test",
      rawClient: rawClient as never,
    })) as any;

    await expect(integration.run("stripe.rawClient", {})).resolves.toBe(rawClient);
  });

  it("routes normalized operations through the official client shape", async () => {
    const rawClient = fakeStripeClient();
    const integration = createStripeEcommerceIntegrationFromClient(createStripeEcommerceClient({
      secretKey: "sk_test",
      rawClient: rawClient as never,
    })) as any;

    await expect(integration.run("ecommerce.payment.read", { id: "pi_123", expand: ["customer"] }))
      .resolves.toMatchObject({ id: "pi_123", object: "payment_intent" });
    expect(rawClient.paymentIntents.retrieve).toHaveBeenCalledWith(
      "pi_123",
      { expand: ["customer"] },
      {},
    );
  });

  it("parses signed webhooks through the Stripe SDK verifier", async () => {
    const body = JSON.stringify({ id: "evt_123", object: "event", type: "payment_intent.succeeded" });
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = createHmac("sha256", "whsec_test").update(`${timestamp}.${body}`).digest("hex");
    const rawClient = fakeStripeClient({
      webhooks: {
        constructEvent: vi.fn((payload) => JSON.parse(payload as string)),
      },
    });
    const client = createStripeEcommerceClient({ secretKey: "sk_test", rawClient: rawClient as never });

    await expect(client.parseWebhook({
      request: body,
      signatureHeader: `t=${timestamp},v1=${signature}`,
      signingSecret: "whsec_test",
    })).resolves.toMatchObject({
      event: { id: "evt_123" },
    });
    expect(rawClient.webhooks.constructEvent).toHaveBeenCalledWith(
      body,
      `t=${timestamp},v1=${signature}`,
      "whsec_test",
      undefined,
    );
  });

  it("reports credential readiness without a live client", () => {
    expect(stripeEcommerceCredentialStatuses({
      secretKeyConfigured: true,
      webhookSigningSecretConfigured: false,
      connectMode: "connected-account",
      stripeAccountConfigured: false,
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "stripe-secret-key", state: "configured" }),
      expect.objectContaining({ requirementId: "stripe-webhook-signing-secret", state: "missing" }),
      expect.objectContaining({ requirementId: "stripe-connect-mode", state: "missing" }),
    ]));
  });
});

function fakeStripeClient(overrides: Record<string, unknown> = {}) {
  return {
    accounts: { retrieve: vi.fn(async () => ({ id: "acct_123", object: "account" })) },
    customers: {
      retrieve: vi.fn(async (id: string) => ({ id, object: "customer" })),
      search: vi.fn(async () => ({ object: "search_result", data: [] })),
    },
    checkout: {
      sessions: {
        retrieve: vi.fn(async (id: string) => ({ id, object: "checkout.session" })),
        list: vi.fn(async () => ({ object: "list", data: [] })),
      },
    },
    paymentIntents: {
      retrieve: vi.fn(async (id: string) => ({ id, object: "payment_intent" })),
      create: vi.fn(async () => ({ id: "pi_new", object: "payment_intent" })),
    },
    subscriptions: {
      retrieve: vi.fn(async (id: string) => ({ id, object: "subscription" })),
      update: vi.fn(async (id: string) => ({ id, object: "subscription" })),
      cancel: vi.fn(async (id: string) => ({ id, object: "subscription" })),
    },
    invoices: { retrieve: vi.fn(async (id: string) => ({ id, object: "invoice" })) },
    refunds: {
      create: vi.fn(async () => ({ id: "re_123", object: "refund" })),
      retrieve: vi.fn(async (id: string) => ({ id, object: "refund" })),
      list: vi.fn(async () => ({ object: "list", data: [] })),
    },
    disputes: {
      retrieve: vi.fn(async (id: string) => ({ id, object: "dispute" })),
      update: vi.fn(async (id: string) => ({ id, object: "dispute" })),
      close: vi.fn(async (id: string) => ({ id, object: "dispute" })),
    },
    webhookEndpoints: {
      create: vi.fn(async () => ({ id: "we_123", object: "webhook_endpoint" })),
      retrieve: vi.fn(async (id: string) => ({ id, object: "webhook_endpoint" })),
      list: vi.fn(async () => ({ object: "list", data: [] })),
      update: vi.fn(async (id: string) => ({ id, object: "webhook_endpoint" })),
      del: vi.fn(async (id: string) => ({ id, object: "webhook_endpoint", deleted: true })),
    },
    webhooks: { constructEvent: vi.fn() },
    ...overrides,
  };
}
