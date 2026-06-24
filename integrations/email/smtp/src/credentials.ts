import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { smtpEmailProviderManifest } from "./manifest.js";

export interface SmtpCredentialStatusInput {
  serverConfigured?: boolean;
  accountCredentialsConfigured?: boolean;
  senderConfigured?: boolean;
  authMode?: "password" | "external";
}

export function smtpEmailCredentialStatuses(input: SmtpCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: smtpEmailProviderManifest.id,
      requirementId: "smtp-server",
      state: input.serverConfigured ? "configured" : "missing",
      message: input.serverConfigured ? "SMTP server settings are configured." : "SMTP server settings are required.",
    },
    {
      providerPackageId: smtpEmailProviderManifest.id,
      requirementId: "smtp-account-credentials",
      state: input.accountCredentialsConfigured ? "configured" : "missing",
      message: input.accountCredentialsConfigured
        ? `SMTP account credentials are configured${input.authMode ? ` for ${input.authMode} authentication` : ""}.`
        : "SMTP account credentials are required.",
    },
    {
      providerPackageId: smtpEmailProviderManifest.id,
      requirementId: "smtp-sender-address",
      state: input.senderConfigured ? "configured" : "not-required",
      message: input.senderConfigured
        ? "A default SMTP sender address is configured."
        : "A default sender is optional when each send call supplies a from address.",
    },
  ];
}
