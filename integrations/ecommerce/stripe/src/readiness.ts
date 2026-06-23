import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { StripeCredentialStatusInput, StripeEcommerceClient } from "./types.js";
import { stripeEcommerceProviderManifest } from "./manifest.js";

export function stripeEcommerceCredentialStatuses(input: StripeCredentialStatusInput): ProviderCredentialStatusInput[] {
  const missingScopes = input.requiredScopes?.filter((scope) => !input.restrictedKeyScopes?.includes(scope)) ?? [];
  return [
    {
      providerPackageId: stripeEcommerceProviderManifest.id,
      requirementId: "stripe-secret-key",
      state: input.secretKeyConfigured
        ? missingScopes.length > 0 ? "insufficient-scope" : "configured"
        : "missing",
      scopes: input.restrictedKeyScopes ?? [],
      message: input.secretKeyConfigured
        ? missingScopes.length > 0
          ? `Stripe key is configured but missing declared scopes: ${missingScopes.join(", ")}.`
          : "Stripe server-side key is configured."
        : "A server-side Stripe secret key or restricted key is required.",
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
  ];
}

export function createStripeEcommerceLiveChecks(options: { client: Pick<StripeEcommerceClient, "getAccount"> }): Array<{
  id: string;
  description: string;
  requiredCredentialIds: string[];
  run(context?: { signal?: AbortSignal }): Promise<{ details: unknown }>;
}> {
  return [{
    id: "account",
    description: "Stripe account endpoint is reachable with the configured secret or restricted key.",
    requiredCredentialIds: ["stripe-secret-key"],
    async run(context: { signal?: AbortSignal } = {}) {
      const account = await options.client.getAccount();
      if (context.signal?.aborted) throw new Error("Stripe live account check aborted.");
      return {
        details: {
          id: account.id,
          object: account.object,
          country: account.country,
          charges_enabled: account.charges_enabled,
          payouts_enabled: account.payouts_enabled,
          details_submitted: account.details_submitted,
        },
      };
    },
  }];
}
