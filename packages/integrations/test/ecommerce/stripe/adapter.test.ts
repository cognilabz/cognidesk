import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createStripeEcommerceClient,
  createStripeEcommerceLiveChecks,
  defaultStripeApiVersion,
  parseStripeSignatureHeader,
  parseStripeWebhook,
  STRIPE_FULL_API_GENERATED_FUNCTION_COUNT,
  STRIPE_FULL_API_GENERATED_FUNCTION_NAMES,
  STRIPE_FULL_API_OPERATION_COUNT,
  STRIPE_FULL_API_OPERATION_BY_ID,
  STRIPE_FULL_API_SPEC_VERSION,
  stripeEcommerceCredentialStatuses,
  stripeEcommerceProviderManifest,
  validateStripeWebhookSignature,
} from "../../../src/ecommerce/stripe/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official Stripe ecommerce provider manifest", () => {
    expect(stripeEcommerceProviderManifest).toMatchObject({
      id: "ecommerce.stripe",
      packageName: "@cognidesk/integrations",
      category: "ecommerce",
      provider: "stripe",
      trustLevel: "official",
    });
    expect(stripeEcommerceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "read-provider-object",
        "search-provider-object",
        "create-provider-object",
        "update-provider-object",
        "ecommerce.payments",
      ]));
    expect(stripeEcommerceProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(stripeEcommerceProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in the official Stripe OpenAPI spec");
    expect(defaultStripeApiVersion).toBe("2026-05-27.dahlia");
    expect(STRIPE_FULL_API_SPEC_VERSION).toBe(defaultStripeApiVersion);
    expect(STRIPE_FULL_API_OPERATION_COUNT).toBe(619);
    expect(stripeEcommerceProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        provider: "stripe",
        apiVersion: defaultStripeApiVersion,
        documentedOperationCount: 619,
        implementedOperationCount: 619,
        unimplementedOperationCount: 0,
        generatedFunctionCount: 619,
      },
      channelCoverage: {
        fullRestApiOperations: "typed-operation-catalog",
      },
    });
    expect(stripeEcommerceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://docs.stripe.com/api/payment_intents",
        "https://docs.stripe.com/api/webhook_endpoints",
        "https://docs.stripe.com/webhooks/signature",
      ]));
  });

  it("calls any generated Stripe OpenAPI operation through its own function", async () => {
    expect(STRIPE_FULL_API_GENERATED_FUNCTION_COUNT).toBe(619);
    expect(STRIPE_FULL_API_GENERATED_FUNCTION_NAMES).toContain("GetTerminalReadersReader");
    expect(STRIPE_FULL_API_OPERATION_BY_ID.get("GetTerminalReadersReader")).toMatchObject({
      method: "GET",
      path: "/v1/terminal/readers/{reader}",
    });
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "tmr_123", object: "terminal.reader" }), { status: 200 })
    );
    const client = createStripeEcommerceClient({
      secretKey: "sk_test_secret",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const reader = await client.fullApi.GetTerminalReadersReader({
      pathParams: { reader: "tmr_123" },
      query: { expand: ["location"] },
    });

    expect(reader).toMatchObject({ id: "tmr_123", object: "terminal.reader" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.stripe.com/v1/terminal/readers/tmr_123?expand%5B0%5D=location",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          authorization: "Bearer sk_test_secret",
          "stripe-version": defaultStripeApiVersion,
        }),
      }),
    );
    // @ts-expect-error Missing input intentionally exercises runtime validation.
    expect(() => client.requestOperation("GetTerminalReadersReader")).toThrow("path parameter 'reader' is required");
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    expect(() => client.fullApi.GetTerminalReadersReader()).toThrow("path parameter 'reader' is required");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    expect(() => client.requestOperation("NotARealStripeOperation")).toThrow("Unknown Stripe OpenAPI operation");
  });

  it("reads Stripe account details with auth, API version, and Connect account headers", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "acct_123",
        object: "account",
        country: "US",
        default_currency: "usd",
        charges_enabled: true,
      }), { status: 200 })
    );
    const client = createStripeEcommerceClient({
      secretKey: "rk_test_secret",
      stripeAccount: "acct_connected",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const account = await client.getAccount();

    expect(account.id).toBe("acct_123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.stripe.com/v1/account",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          authorization: "Bearer rk_test_secret",
          "stripe-version": defaultStripeApiVersion,
          "stripe-account": "acct_connected",
        }),
      }),
    );
  });

  it("creates support-relevant Stripe objects with form encoding and idempotency keys", async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
      const body = new URLSearchParams(String(init.body));
      if (body.get("mode") === "payment") {
        return new Response(JSON.stringify({
          id: "cs_test_123",
          object: "checkout.session",
          mode: "payment",
          url: "https://checkout.stripe.com/c/pay/cs_test_123",
        }), { status: 200 });
      }
      return new Response(JSON.stringify({ id: "pi_123", object: "payment_intent", status: "requires_payment_method" }), { status: 200 });
    });
    const client = createStripeEcommerceClient({
      secretKey: "sk_test_secret",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const session = await client.createCheckoutSession({
      mode: "payment",
      success_url: "https://example.test/success",
      cancel_url: "https://example.test/cancel",
      line_items: [{ price: "price_123", quantity: 1 }],
      metadata: { support_case: "case_1" },
    }, { idempotencyKey: "case_1_checkout" });
    await client.createPaymentIntent({
      amount: 4200,
      currency: "usd",
      customer: "cus_123",
      automatic_payment_methods: { enabled: true },
      metadata: { support_case: "case_1" },
    });

    expect(session.id).toBe("cs_test_123");
    const checkoutInit = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    const checkoutBody = new URLSearchParams(String(checkoutInit.body));
    expect(checkoutInit.headers).toEqual(expect.objectContaining({
      "content-type": "application/x-www-form-urlencoded",
      "idempotency-key": "case_1_checkout",
    }));
    expect(checkoutBody.get("line_items[0][price]")).toBe("price_123");
    expect(checkoutBody.get("line_items[0][quantity]")).toBe("1");
    expect(checkoutBody.get("metadata[support_case]")).toBe("case_1");

    await client.createCheckoutSession({
      mode: "payment",
      ui_mode: "embedded_page",
      return_url: "https://example.test/return",
      line_items: [{ price: "price_456", quantity: 1 }],
    });
    const embeddedBody = new URLSearchParams(String(((fetchMock.mock.calls[2] as unknown[])[1] as RequestInit).body));
    expect(embeddedBody.get("ui_mode")).toBe("embedded_page");
    expect(embeddedBody.get("return_url")).toBe("https://example.test/return");
    expect(embeddedBody.has("success_url")).toBe(false);
    expect(() => client.createCheckoutSession({
      mode: "payment",
      ui_mode: "embedded_page",
      success_url: "https://example.test/success",
      return_url: "https://example.test/return",
    })).toThrow("must not include success_url or cancel_url");

    const paymentBody = new URLSearchParams(String(((fetchMock.mock.calls[1] as unknown[])[1] as RequestInit).body));
    expect(paymentBody.get("automatic_payment_methods[enabled]")).toBe("true");
    expect(paymentBody.get("amount")).toBe("4200");
  });

  it("lists and updates support workflow resources through documented Stripe endpoints", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/v1/disputes/dp_123/close")) {
        return new Response(JSON.stringify({ id: "dp_123", object: "dispute", status: "won" }), { status: 200 });
      }
      if (url.includes("/v1/refunds")) {
        return new Response(JSON.stringify({ id: "re_123", object: "refund", status: "pending" }), { status: 200 });
      }
      return new Response(JSON.stringify({ object: "list", data: [{ id: "in_123", object: "invoice" }], has_more: false }), { status: 200 });
    });
    const client = createStripeEcommerceClient({
      secretKey: "sk_test_secret",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const invoices = await client.listInvoices({ customer: "cus_123", subscription: "sub_123", limit: 3 });
    const refund = await client.createRefund({ payment_intent: "pi_123", amount: 1000, reason: "requested_by_customer" });
    const dispute = await client.closeDispute("dp_123");

    expect(invoices.data[0]?.id).toBe("in_123");
    expect(refund.id).toBe("re_123");
    expect(dispute.status).toBe("won");
    expect((fetchMock.mock.calls[0] as unknown[])[0]).toBe("https://api.stripe.com/v1/invoices?customer=cus_123&subscription=sub_123&limit=3");
    expect((fetchMock.mock.calls[2] as unknown[])[0]).toBe("https://api.stripe.com/v1/disputes/dp_123/close");
  });

  it("covers Stripe subscription lifecycle and webhook endpoint management endpoints", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/v1/webhook_endpoints/we_123") && init.method === "DELETE") {
        return new Response(JSON.stringify({ id: "we_123", object: "webhook_endpoint", deleted: true }), { status: 200 });
      }
      if (url.includes("/v1/webhook_endpoints")) {
        return new Response(JSON.stringify({ id: "we_123", object: "webhook_endpoint", status: "enabled" }), { status: 200 });
      }
      return new Response(JSON.stringify({ id: "sub_123", object: "subscription", status: "canceled" }), { status: 200 });
    });
    const client = createStripeEcommerceClient({
      secretKey: "sk_test_secret",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.updateSubscription("sub_123", {
      cancel_at_period_end: true,
      metadata: { support_case: "case_1" },
    });
    await client.cancelSubscription("sub_123", { invoice_now: true, prorate: false });
    await client.createWebhookEndpoint({
      url: "https://example.test/stripe/webhook",
      enabled_events: ["payment_intent.succeeded", "customer.subscription.updated"],
      description: "Cognidesk support workflow events",
    });
    await client.updateWebhookEndpoint("we_123", { disabled: true });
    await expect(client.deleteWebhookEndpoint("we_123")).resolves.toMatchObject({ deleted: true });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.stripe.com/v1/subscriptions/sub_123",
      expect.objectContaining({ method: "POST" }),
    );
    expect(new URLSearchParams(String(((fetchMock.mock.calls[0] as unknown[])[1] as RequestInit).body)).get("cancel_at_period_end")).toBe("true");
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.stripe.com/v1/subscriptions/sub_123",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(new URLSearchParams(String(((fetchMock.mock.calls[1] as unknown[])[1] as RequestInit).body)).get("invoice_now")).toBe("true");
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.stripe.com/v1/webhook_endpoints",
      expect.objectContaining({ method: "POST" }),
    );
    const createWebhookBody = new URLSearchParams(String(((fetchMock.mock.calls[2] as unknown[])[1] as RequestInit).body));
    expect(createWebhookBody.get("enabled_events[0]")).toBe("payment_intent.succeeded");
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.stripe.com/v1/webhook_endpoints/we_123",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://api.stripe.com/v1/webhook_endpoints/we_123",
      expect.objectContaining({ method: "DELETE" }),
    );
  });

  it("reports credential readiness including restricted-key scope gaps", () => {
    const statuses = stripeEcommerceCredentialStatuses({
      secretKeyConfigured: true,
      webhookSigningSecretConfigured: true,
      connectMode: "connected-account",
      stripeAccountConfigured: false,
      restrictedKeyScopes: ["customers:read"],
      requiredScopes: ["customers:read", "refunds:read"],
    });

    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "stripe-secret-key",
      state: "insufficient-scope",
      scopes: ["customers:read"],
    }));
    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "stripe-connect-mode",
      state: "missing",
    }));
    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "stripe-publishable-key",
      state: "not-required",
    }));
  });

  it("validates and parses Stripe webhook signatures against the raw body", async () => {
    const signingSecret = "whsec_test";
    const timestamp = 1_700_000_000;
    const body = JSON.stringify({
      id: "evt_123",
      object: "event",
      type: "payment_intent.succeeded",
      data: { object: { id: "pi_123", object: "payment_intent" } },
    });
    const signatureHeader = signStripeWebhook(signingSecret, timestamp, body);
    const request = new Request("https://example.test/stripe/webhook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "stripe-signature": signatureHeader,
      },
      body,
    });

    expect(parseStripeSignatureHeader(signatureHeader)).toEqual({
      timestamp,
      signatures: [expectedStripeSignature(signingSecret, timestamp, body)],
    });
    expect(validateStripeWebhookSignature({
      signingSecret,
      rawBody: body,
      signatureHeader,
      currentTimestamp: timestamp,
    })).toMatchObject({ valid: true, timestamp });

    const parsed = await parseStripeWebhook(request, { signingSecret, currentTimestamp: timestamp });

    expect(parsed.event).toMatchObject({
      id: "evt_123",
      type: "payment_intent.succeeded",
      data: { object: { id: "pi_123" } },
    });
  });

  it("rejects tampered and stale Stripe webhook signatures", () => {
    const signingSecret = "whsec_test";
    const timestamp = 1_700_000_000;
    const body = JSON.stringify({ id: "evt_123" });
    const signatureHeader = signStripeWebhook(signingSecret, timestamp, body);

    expect(validateStripeWebhookSignature({
      signingSecret,
      rawBody: JSON.stringify({ id: "evt_tampered" }),
      signatureHeader,
      currentTimestamp: timestamp,
    })).toMatchObject({ valid: false });
    expect(validateStripeWebhookSignature({
      signingSecret,
      rawBody: body,
      signatureHeader,
      currentTimestamp: timestamp + 1_000,
    })).toMatchObject({
      valid: false,
      reason: "Stripe webhook timestamp is outside the configured tolerance.",
    });
  });

  it("fails closed by default when webhook verification has no signing secret", async () => {
    const request = new Request("https://example.test/stripe/webhook", {
      method: "POST",
      body: JSON.stringify({ id: "evt_123" }),
    });

    await expect(parseStripeWebhook(request))
      .rejects.toThrow("Stripe webhook signing secret is required");
  });

  it("parses Stripe webhooks without verification only when explicitly requested", async () => {
    const request = new Request("https://example.test/stripe/webhook", {
      method: "POST",
      body: JSON.stringify({ id: "evt_123", object: "event" }),
    });

    await expect(parseStripeWebhook(request, { requireSignature: false }))
      .resolves.toMatchObject({ event: { id: "evt_123" } });
  });

  it("reports live conformance as credential-blocked until Stripe credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: stripeEcommerceProviderManifest,
      channels: [{
        id: "ecommerce",
        channel: "ecommerce",
        providerPackageIds: [stripeEcommerceProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object", "update-provider-object"],
      }],
      credentialStatuses: stripeEcommerceCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createStripeEcommerceLiveChecks({
          secretKey: "missing",
          client: {
            async getAccount() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.account" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Stripe account live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: stripeEcommerceProviderManifest,
      channels: [{
        id: "ecommerce",
        channel: "ecommerce",
        providerPackageIds: [stripeEcommerceProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object", "update-provider-object"],
      }],
      credentialStatuses: stripeEcommerceCredentialStatuses({
        secretKeyConfigured: true,
        webhookSigningSecretConfigured: true,
        connectMode: "platform",
        restrictedKeyScopes: ["customers:read", "refunds:read"],
      }),
      live: {
        enabled: true,
        checks: createStripeEcommerceLiveChecks({
          secretKey: "configured",
          client: {
            async getAccount() {
              return { id: "acct_123", object: "account", country: "US", default_currency: "usd", charges_enabled: true };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account",
      status: "passed",
    }));
  });
});

function expectedStripeSignature(signingSecret: string, timestamp: number, body: string) {
  return createHmac("sha256", signingSecret).update(`${timestamp}.${body}`, "utf8").digest("hex");
}

function signStripeWebhook(signingSecret: string, timestamp: number, body: string) {
  return `t=${timestamp},v1=${expectedStripeSignature(signingSecret, timestamp, body)}`;
}
