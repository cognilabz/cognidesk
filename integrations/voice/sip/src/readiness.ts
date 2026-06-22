import type { SipLiveCheckOptions, SipReadinessResult, SipVoiceConfig } from "./contracts.js";
import { sipVoiceCredentialStatuses } from "./credentials.js";

export function createSipVoiceLiveChecks(options: SipLiveCheckOptions) {
  return [{
    id: "sip-stack-readiness",
    description: "SIP registrar/proxy/auth/TLS/SRTP/webhook configuration is ready, optionally confirmed by the SDK user's SIP stack gateway.",
    requiredCredentialIds: [
      "sip-registrar",
      "sip-domain",
      "sip-auth",
      "sip-tls",
      "sip-srtp",
      "sip-webhook-callback",
    ],
    async run(context: { signal?: AbortSignal }) {
      if (context.signal?.aborted) throw new Error("SIP live readiness check aborted.");
      const readiness = options.gateway?.checkReadiness
        ? await options.gateway.checkReadiness(sipGatewayContext(options.config, context.signal))
        : buildSipConfigReadiness(options.config);
      if (!readiness.ok) {
        throw new Error(`SIP readiness check failed: ${(readiness.missing ?? ["unknown"]).join(", ")}`);
      }
      return {
        details: {
          registrarReachable: readiness.registrarReachable,
          registered: readiness.registered,
          proxyReachable: readiness.proxyReachable,
          tlsReady: readiness.tlsReady,
          srtpReady: readiness.srtpReady,
          webhookReachable: readiness.webhookReachable,
          ...readiness.details,
        },
      };
    },
  }];
}

export function buildSipConfigReadiness(config: SipVoiceConfig): SipReadinessResult {
  const statuses = sipVoiceCredentialStatuses(config);
  const missing = statuses
    .filter((status) => status.state !== "configured")
    .map((status) => status.requirementId);
  return {
    ok: missing.length === 0,
    registrarReachable: Boolean(config.registrarUri),
    registered: Boolean(config.registrarUri && config.authUsername && config.authPassword),
    proxyReachable: Boolean(config.proxyUri || config.outboundProxyUri),
    tlsReady: Boolean(config.tlsEnabled || config.transport === "tls" || config.transport === "wss"),
    srtpReady: config.mediaEncryption === "srtp" || config.mediaEncryption === "dtls-srtp" || Boolean(config.srtpEnabled),
    webhookReachable: Boolean(config.webhookCallbackUrl),
    missing,
    details: {
      registrarUri: config.registrarUri,
      domain: config.domain,
      proxyUri: config.proxyUri ?? config.outboundProxyUri,
      transport: config.transport,
      userAgent: config.userAgent,
    },
  };
}

export function sipGatewayContext(config: SipVoiceConfig, signal?: AbortSignal) {
  return {
    config,
    ...(signal ? { signal } : {}),
  };
}
