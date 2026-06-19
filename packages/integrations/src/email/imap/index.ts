import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const imapEmailProviderManifest = defineProviderPackage({
  id: "email.imap",
  name: "IMAP Mailbox",
  packageName: "@cognidesk/integrations",
  provider: "imap",
  category: "email",
  trustLevel: "official",
  directions: ["inbound-only"],
  channelAudiences: ["customer-facing", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to credential status and SDK-user-injected mailbox readiness checks.",
      "This package does not implement IMAP SEARCH, FETCH, STORE/flag mutation, mailbox management, attachment retrieval, IDLE, UID sync, or MIME parsing; those remain the responsibility of an SDK-user-provided IMAP client.",
    ],
    evidence: [
      { label: "RFC 9051 IMAP4rev2", url: "https://datatracker.ietf.org/doc/html/rfc9051" },
    ],
  },
  credentialRequirements: [
    {
      id: "imap-server",
      label: "IMAP server settings",
      description: "Server-side mailbox host, port, TLS mode, and mailbox folder configuration.",
      required: true,
    },
    {
      id: "imap-mailbox-credentials",
      label: "IMAP mailbox credentials",
      description: "Server-side mailbox authentication material such as app password, OAuth bearer token, or external auth.",
      required: true,
    },
    {
      id: "imap-connector",
      label: "Injected IMAP connector",
      description: "An SDK-user-provided connector implementation that performs IMAP network operations.",
      required: true,
    },
  ],
  capabilities: [
    {
      capability: "read-provider-object",
      label: "Check IMAP mailbox readiness",
      description: "Runs an SDK-user-injected readiness check for an IMAP mailbox without implementing IMAP message operations.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "imapMailbox", label: "IMAP Mailbox" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata.",
    "Mailbox credentials stay server-side; this package reports readiness only and requires an injected connector for network access.",
  ],
  limitations: [
    "This package does not bundle an IMAP client dependency; SDK users inject a connector that matches their runtime, TLS, auth, and proxy requirements.",
    "Mailbox search, fetch, retention, folder selection, message deletion, flag mutation, attachment retrieval, and outbound email policy remain SDK-user implementation/configuration.",
  ],
  metadata: {
    channelCoverage: {
      mailboxReadiness: "typed-readiness-via-injected-connector",
      imapSearchFetchStoreIdle: "not-covered",
      mimeParsingAttachments: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type ImapAuthenticationMode = "password" | "oauth2" | "external";

export type ImapJsonPrimitive = string | number | boolean | null;
export type ImapJsonValue =
  | ImapJsonPrimitive
  | ImapJsonObject
  | readonly ImapJsonValue[];
export type ImapProviderExtensionValue = ImapJsonValue | object | undefined;
export interface ImapJsonObject {
  [key: string]: ImapProviderExtensionValue;
}
export type ImapProviderPayload = ImapJsonObject | object;
export type ImapProviderQuery = Record<string, ImapProviderExtensionValue>;
export interface ImapProviderResponse extends ImapJsonObject {}
export interface ImapProviderExtensionFields extends ImapJsonObject {}

export interface ImapMailboxConnectionInput {
  host: string;
  port: number;
  secure?: boolean;
  username?: string;
  authMode?: ImapAuthenticationMode;
  mailbox?: string;
  connectionTimeoutMs?: number;
  metadata?: ImapProviderExtensionFields;
}

export interface ImapMailboxReadiness {
  ready: boolean;
  mailbox?: string;
  capabilities?: string[];
  uidValidity?: string | number;
  messagesTotal?: number;
  unseenTotal?: number;
  readOnly?: boolean;
  reason?: string;
  details?: ImapJsonObject;
}

export interface ImapMailboxConnectorContext {
  signal?: AbortSignal;
}

export interface ImapMailboxConnector {
  checkReadiness(
    input: ImapMailboxConnectionInput,
    context: ImapMailboxConnectorContext,
  ): Promise<ImapMailboxReadiness>;
}

export interface ImapCredentialStatusInput {
  serverConfigured?: boolean;
  mailboxCredentialsConfigured?: boolean;
  connectorConfigured?: boolean;
  authMode?: ImapAuthenticationMode;
  mailbox?: string;
}

export interface ImapLiveCheckOptions {
  connection: ImapMailboxConnectionInput;
  connector?: ImapMailboxConnector;
}

export function imapEmailCredentialStatuses(input: ImapCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: imapEmailProviderManifest.id,
      requirementId: "imap-server",
      state: input.serverConfigured ? "configured" : "missing",
      message: input.serverConfigured
        ? "IMAP server settings are configured."
        : "IMAP host, port, TLS mode, and mailbox settings are required.",
    },
    {
      providerPackageId: imapEmailProviderManifest.id,
      requirementId: "imap-mailbox-credentials",
      state: input.mailboxCredentialsConfigured ? "configured" : "missing",
      message: input.mailboxCredentialsConfigured
        ? `IMAP mailbox credentials are configured${input.authMode ? ` for ${input.authMode} authentication` : ""}.`
        : "IMAP mailbox credentials are required.",
    },
    {
      providerPackageId: imapEmailProviderManifest.id,
      requirementId: "imap-connector",
      state: input.connectorConfigured ? "configured" : "unavailable",
      message: input.connectorConfigured
        ? "An IMAP connector adapter is configured."
        : "An injected IMAP connector adapter is required before live mailbox checks can run.",
    },
  ];
}

export function createImapEmailLiveChecks(options: ImapLiveCheckOptions) {
  return [{
    id: "mailbox",
    description: "IMAP mailbox connection is reachable and reports readiness through the injected connector.",
    requiredCredentialIds: ["imap-server", "imap-mailbox-credentials", "imap-connector"],
    async run(context: { signal?: AbortSignal }) {
      if (!options.connector) {
        throw new Error("IMAP live mailbox check requires an injected connector.");
      }

      const readiness = await options.connector.checkReadiness(options.connection, {
        ...(context.signal ? { signal: context.signal } : {}),
      });
      if (context.signal?.aborted) throw new Error("IMAP live mailbox check aborted.");
      if (!readiness.ready) {
        throw new Error(readiness.reason ?? "IMAP mailbox did not report ready.");
      }

      return {
        details: {
          host: options.connection.host,
          port: options.connection.port,
          secure: options.connection.secure ?? false,
          mailbox: readiness.mailbox ?? options.connection.mailbox ?? "INBOX",
          capabilities: readiness.capabilities ?? [],
          ...(readiness.uidValidity === undefined ? {} : { uidValidity: readiness.uidValidity }),
          ...(readiness.messagesTotal === undefined ? {} : { messagesTotal: readiness.messagesTotal }),
          ...(readiness.unseenTotal === undefined ? {} : { unseenTotal: readiness.unseenTotal }),
          ...(readiness.readOnly === undefined ? {} : { readOnly: readiness.readOnly }),
          ...(readiness.details ? { connector: readiness.details } : {}),
        },
      };
    },
  }];
}
