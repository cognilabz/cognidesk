import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const smtpEmailProviderManifest = defineIntegrationProviderPackage({
  id: "email.smtp",
  name: "SMTP Email",
  packageName: "@cognidesk/integration-email-smtp",
  provider: "smtp",
  category: "email",
  trustLevel: "official",
  directions: ["send-only"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "local-protocol",
    notes: [
      "Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer.",
      "This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it.",
    ],
    evidence: [
      { label: "RFC 5321 SMTP", url: "https://datatracker.ietf.org/doc/html/rfc5321" },
      { label: "Nodemailer", url: "https://nodemailer.com/" },
    ],
  },
  credentialRequirements: [
    {
      id: "smtp-server",
      label: "SMTP server settings",
      description: "SMTP host, port, TLS mode, and optional transport security settings.",
      required: true,
    },
    {
      id: "smtp-account-credentials",
      label: "SMTP account credentials",
      description: "Server-side SMTP username and password or externally supplied authenticated transport.",
      required: true,
    },
    {
      id: "smtp-sender-address",
      label: "Sender address",
      description: "Default from address used when a send call does not provide one.",
      required: false,
    },
  ],
  capabilities: [
    {
      capability: "send",
      label: "Send SMTP email",
      description: "Sends outbound support email through a configured SMTP transport.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "emailMessage", label: "Email Message" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
    },
    {
      capability: "read-provider-object",
      label: "Check SMTP transport",
      description: "Checks whether the configured SMTP transport can authenticate and accept mail.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "smtpTransport", label: "SMTP Transport" }],
      requiresCredential: true,
    },
  ],
  operations: [
    {
      alias: "email.send",
      capability: "send",
      providerObject: "emailMessage",
      sideEffect: true,
      externallyVisible: true,
      requiresApproval: true,
      exposesSensitiveData: true,
    },
    {
      alias: "email.reply.send",
      capability: "send",
      providerObject: "emailMessage",
      sideEffect: true,
      externallyVisible: true,
      requiresApproval: true,
      exposesSensitiveData: true,
    },
    {
      alias: "smtp.transport.check",
      capability: "read-provider-object",
      providerObject: "smtpTransport",
      extension: true,
    },
  ],
  privacyNotes: [
    "SMTP message bodies, recipients, sender addresses, reply-to addresses, headers, attachments, and delivery responses can contain customer data.",
    "SMTP credentials stay server-side and are represented in Studio only as credential/readiness state.",
  ],
  limitations: [
    "SMTP is outbound-only; mailbox synchronization, inbound parsing, reply polling, retention, and deletion are intentionally outside this package.",
    "SDK users own outbound approval, consent, sender identity policy, retry policy, rate limits, attachment policy, bounce handling, and retention.",
  ],
  metadata: {
    implementation: {
      strategy: "local-protocol",
      libraryPackage: "nodemailer",
      libraryVersionRange: "^9.0.1",
      verifiedPackageVersion: "9.0.1",
      verifiedAt: "2026-06-24",
      protocolSource: "RFC 5321",
      manifestImport: "no-sdk-client-initialization",
      integrationKitStatus: "implemented",
    },
    channelCoverage: {
      sendEmail: "provider-supported-via-protocol-library",
      sendReply: "provider-supported-via-protocol-library",
      transportReadiness: "provider-supported-via-protocol-library",
      inboundMailbox: "not-covered",
      deliveryWebhooks: "not-covered",
      fullMailboxSync: "not-covered",
    },
    rawClientEscapeHatch: "Nodemailer transport exposed from createSmtpEmailClient().rawTransport",
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
