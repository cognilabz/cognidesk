import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { StripeCredentialStatusInput, StripeLiveCheckOptions } from "./contracts.js";
import { createStripeEcommerceClient } from "./client.js";
import { stripeEcommerceProviderManifest } from "./manifest.js";

export function stripeEcommerceCredentialStatuses(input: StripeCredentialStatusInput): ProviderCredentialStatusInput[] {
  const missingScopes = input.requiredScopes?.filter((scope) => !input.restrictedKeyScopes?.includes(scope)) ?? [];
  const secretState = input.secretKeyConfigured
    ? missingScopes.length > 0 ? "insufficient-scope" : "configured"
    : "missing";

  return [
    {
      providerPackageId: stripeEcommerceProviderManifest.id,
      requirementId: "stripe-secret-key",
      state: secretState,
      scopes: input.restrictedKeyScopes ?? [],
      message: input.secretKeyConfigured
        ? missingScopes.length > 0
          ? `Stripe key is configured but missing declared scopes: ${missingScopes.join(", ")}.`
          : `Stripe server-side key is configured${input.apiVersion ? ` for API ${input.apiVersion}` : ""}.`
        : "A server-side Stripe secret key or restricted key is required.",
    },
    {
      providerPackageId: stripeEcommerceProviderManifest.id,
      requirementId: "stripe-publishable-key",
      state: input.publishableKeyConfigured ? "configured" : "not-required",
      message: input.publishableKeyConfigured
        ? "Stripe publishable key is configured for SDK-user-controlled payment UI."
        : "Publishable key is optional unless the SDK user exposes Stripe-hosted or embedded payment UI.",
    },
    {
      providerPackageId: stripeEcommerceProviderManifest.id,
      requirementId: "stripe-webhook-signing-secret",
      state: input.webhookSigningSecretConfigured ? "configured" : "missing",
      message: input.webhookSigningSecretConfigured
        ? "Stripe webhook signing secret is configured."
        : "A Stripe webhook signing secret is required before event signature validation can be enforced.",
    },
    {
      providerPackageId: stripeEcommerceProviderManifest.id,
      requirementId: "stripe-connect-mode",
      state: input.connectMode && input.connectMode !== "none"
        ? input.connectMode === "connected-account" && !input.stripeAccountConfigured ? "missing" : "configured"
        : "not-required",
      message: input.connectMode && input.connectMode !== "none"
        ? input.connectMode === "connected-account" && !input.stripeAccountConfigured
          ? "Connected-account mode requires SDK-user-selected Stripe-Account routing."
          : `Stripe ${input.connectMode} mode is configured.`
        : "Connect account routing is optional and fully SDK-user configured.",
    },
    {
      providerPackageId: stripeEcommerceProviderManifest.id,
      requirementId: "stripe-restricted-key-scopes",
      state: input.restrictedKeyScopes?.length ? "configured" : "not-required",
      scopes: input.restrictedKeyScopes ?? [],
      message: input.restrictedKeyScopes?.length
        ? "Stripe restricted-key scopes are declared for Studio readiness review."
        : "Restricted-key scope declarations are optional but recommended for least-privilege review.",
    },
  ];
}

export function createStripeEcommerceLiveChecks(options: StripeLiveCheckOptions) {
  return [{
    id: "account",
    description: "Stripe account endpoint is reachable with the configured secret or restricted key.",
    requiredCredentialIds: ["stripe-secret-key"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createStripeEcommerceClient(options);
      const account = await client.getAccount();
      if (context.signal?.aborted) throw new Error("Stripe live account check aborted.");
      return {
        details: {
          accountId: account.id,
          country: account.country,
          defaultCurrency: account.default_currency,
          chargesEnabled: account.charges_enabled,
          payoutsEnabled: account.payouts_enabled,
          detailsSubmitted: account.details_submitted,
        },
      };
    },
  }];
}
