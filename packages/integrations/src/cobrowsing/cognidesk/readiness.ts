import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { CobrowsingCredentialStatusInput } from "./contracts.js";
import { cognideskCobrowsingProviderManifest } from "./manifest.js";

export function cobrowsingCredentialStatuses(
  input: CobrowsingCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const recordingAndRedactionConfigured = Boolean(input.recordingPolicyConfigured && input.redactionPolicyConfigured);
  const hasAllowedOrigins = Boolean(input.allowedOrigins?.length);
  return [
    {
      providerPackageId: cognideskCobrowsingProviderManifest.id,
      requirementId: "cobrowsing-session-store",
      state: input.sessionStoreConfigured ? "configured" : "missing",
      message: input.sessionStoreConfigured
        ? "Cobrowsing session store is configured by the SDK user."
        : "Configure an SDK-user-owned cobrowsing session store before creating sessions.",
    },
    {
      providerPackageId: cognideskCobrowsingProviderManifest.id,
      requirementId: "cobrowsing-session-token-signing",
      state: input.sessionTokenSigningConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: input.sessionTokenSigningConfigured
        ? "Signed session token policy is configured by the SDK user."
        : "Configure SDK-user-owned HMAC signing material and token lifetime policy.",
    },
    {
      providerPackageId: cognideskCobrowsingProviderManifest.id,
      requirementId: "cobrowsing-consent-policy",
      state: input.consentPolicyConfigured ? "configured" : "missing",
      message: input.consentPolicyConfigured
        ? "Cobrowsing consent policy is configured by the SDK user."
        : "Configure the consent policy before enabling cobrowsing.",
    },
    {
      providerPackageId: cognideskCobrowsingProviderManifest.id,
      requirementId: "cobrowsing-recording-redaction-policy",
      state: recordingAndRedactionConfigured ? "configured" : "missing",
      message: recordingAndRedactionConfigured
        ? "Recording and redaction policy is configured by the SDK user."
        : "Configure recording and redaction policy before enabling cobrowsing.",
    },
    {
      providerPackageId: cognideskCobrowsingProviderManifest.id,
      requirementId: "cobrowsing-allowed-origins",
      state: hasAllowedOrigins ? "configured" : "missing",
      message: hasAllowedOrigins
        ? "Allowed cobrowsing origins are configured by the SDK user."
        : "Configure at least one allowed origin before issuing or accepting session tokens.",
    },
    {
      providerPackageId: cognideskCobrowsingProviderManifest.id,
      requirementId: "cobrowsing-webhook-shared-secret",
      state: input.webhookVerifierConfigured ? "configured" : "missing",
      message: input.webhookVerifierConfigured
        ? "Signed webhook/session-event verification is configured by the SDK user."
        : "Configure a webhook verifier before accepting signed cobrowsing events.",
    },
  ];
}
