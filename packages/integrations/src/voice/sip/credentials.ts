import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { SipCredentialStatusInput } from "./contracts.js";
import { sipVoiceProviderManifest } from "./manifest.js";

export function sipVoiceCredentialStatuses(input: SipCredentialStatusInput): ProviderCredentialStatusInput[] {
  const proxyConfigured = Boolean(input.proxyUri || input.outboundProxyUri);
  const authConfigured = Boolean(input.authUsername && input.authPassword);
  const mediaEncryption = input.mediaEncryption ?? (input.srtpEnabled ? "srtp" : undefined);
  const webhookSecured = Boolean(input.webhookSharedSecret || input.webhookHmacSecret);
  return [
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-registrar",
      state: input.registrarUri ? "configured" : "missing",
      message: input.registrarUri
        ? "SIP registrar URI is configured."
        : "A SIP registrar URI is required.",
    },
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-proxy",
      state: proxyConfigured ? "configured" : "missing",
      message: proxyConfigured
        ? "SIP proxy or outbound proxy is configured."
        : "Configure a SIP proxy or outbound proxy when the SIP stack requires one.",
    },
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-domain",
      state: input.domain ? "configured" : "missing",
      message: input.domain ? "SIP domain is configured." : "A SIP domain/realm is required.",
    },
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-auth",
      state: authConfigured ? "configured" : "missing",
      message: authConfigured
        ? "SIP authentication username and password are configured."
        : "SIP auth username and password are required.",
    },
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-tls",
      state: input.tlsEnabled ? "configured" : "missing",
      message: input.tlsEnabled
        ? "SIP signaling is configured for TLS."
        : "Enable SIP over TLS for encrypted signaling readiness.",
    },
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-srtp",
      state: mediaEncryption === "srtp" || mediaEncryption === "dtls-srtp" ? "configured" : "missing",
      message: mediaEncryption === "srtp" || mediaEncryption === "dtls-srtp"
        ? "SIP media encryption is configured."
        : "Enable SRTP or DTLS-SRTP for encrypted media readiness.",
    },
    {
      providerPackageId: sipVoiceProviderManifest.id,
      requirementId: "sip-webhook-callback",
      state: input.webhookCallbackUrl && webhookSecured ? "configured" : "missing",
      message: input.webhookCallbackUrl && webhookSecured
        ? "SIP callback URL and webhook validation secret are configured."
        : "Configure a public SIP callback URL plus shared-secret or HMAC validation.",
    },
  ];
}
