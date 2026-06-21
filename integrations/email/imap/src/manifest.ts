import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";

export const imapEmailProviderManifest = defineIntegrationProviderPackage({
  id: "email.imap",
  name: "IMAP Mailbox",
  packageName: "@cognidesk/email-imap",
  provider: "imap",
  category: "email",
  trustLevel: "official",
  directions: ["inbound-only"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "local-protocol",
    notes: [
      "Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow.",
      "This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support.",
    ],
    evidence: [
      { label: "RFC 9051 IMAP4rev2", url: "https://datatracker.ietf.org/doc/html/rfc9051" },
      { label: "ImapFlow", url: "https://imapflow.com/" },
    ],
  },
  credentialRequirements: [
    {
      id: "imap-server",
      label: "IMAP server settings",
      description: "Mailbox host, port, TLS mode, and mailbox folder configuration.",
      required: true,
    },
    {
      id: "imap-mailbox-credentials",
      label: "IMAP mailbox credentials",
      description: "Mailbox username with password, OAuth2 access token, or externally supplied auth.",
      required: true,
    },
  ],
  capabilities: [
    {
      capability: "read-provider-object",
      label: "Read IMAP mailbox data",
      description: "Checks mailbox readiness and fetches explicitly requested message data through ImapFlow.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [
        { kind: "imapMailbox", label: "IMAP Mailbox" },
        { kind: "emailMessage", label: "Email Message" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "search-provider-object",
      label: "Search IMAP mailbox",
      description: "Runs SDK-user supplied IMAP searches through ImapFlow.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "emailMessage", label: "Email Message" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  operations: [
    { alias: "imap.mailbox.check", capability: "read-provider-object", providerObject: "imapMailbox", extension: true, exposesSensitiveData: true },
    { alias: "email.thread.search", capability: "search-provider-object", providerObject: "emailMessage", exposesSensitiveData: true },
    { alias: "email.thread.read", capability: "read-provider-object", providerObject: "emailMessage", exposesSensitiveData: true },
  ],
  privacyNotes: [
    "IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata.",
    "Mailbox credentials stay server-side and are represented only as readiness state.",
  ],
  limitations: [
    "This package does not implement full mailbox synchronization, storage, retention, MIME parsing policy, attachment handling policy, deletion policy, or outbound SMTP.",
    "SDK users own mailbox selection, search scope, flag mutation policy, retention, redaction, and concurrency limits.",
  ],
  metadata: {
    implementation: {
      strategy: "protocol-library",
      libraryPackage: "imapflow",
      libraryVersionRange: "^1.4.2",
      verifiedPackageVersion: "1.4.2",
      verifiedAt: "2026-06-21",
      protocolSource: "RFC 9051",
      manifestImport: "no-sdk-client-initialization",
      integrationKitStatus: "implemented",
    },
    channelCoverage: {
      mailboxReadiness: "provider-supported-via-protocol-library",
      messageSearch: "provider-supported-via-protocol-library",
      messageFetch: "provider-supported-via-protocol-library",
      mimeParsingAttachments: "not-covered",
      outboundSmtp: "not-covered",
      fullMailboxSync: "not-covered",
    },
    directSliceMetadata: {
      source: "RFC 9051 plus ImapFlow 1.4.2 declarations",
      allowlist: ["connect", "logout", "mailboxOpen", "status", "search", "fetch"],
      checksum: "npm:imapflow@1.4.2",
    },
    rawClientEscapeHatch: "ImapFlow client exposed from createImapEmailClient().rawClient",
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});
