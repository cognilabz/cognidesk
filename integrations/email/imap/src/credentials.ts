import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { imapEmailProviderManifest } from "./manifest.js";

export interface ImapCredentialStatusInput {
  serverConfigured?: boolean;
  mailboxCredentialsConfigured?: boolean;
  authMode?: "password" | "oauth2" | "external";
}

export function imapEmailCredentialStatuses(input: ImapCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: imapEmailProviderManifest.id,
      requirementId: "imap-server",
      state: input.serverConfigured ? "configured" : "missing",
      message: input.serverConfigured ? "IMAP server settings are configured." : "IMAP server settings are required.",
    },
    {
      providerPackageId: imapEmailProviderManifest.id,
      requirementId: "imap-mailbox-credentials",
      state: input.mailboxCredentialsConfigured ? "configured" : "missing",
      message: input.mailboxCredentialsConfigured
        ? `IMAP mailbox credentials are configured${input.authMode ? ` for ${input.authMode} authentication` : ""}.`
        : "IMAP mailbox credentials are required.",
    },
  ];
}
