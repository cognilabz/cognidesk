import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import type { GenesysPureConnectCredentialStatusInput } from "./contracts.js";
import { genesysPureConnectContactCenterProviderManifest } from "./manifest.js";

export function genesysPureConnectContactCenterCredentialStatuses(
  input: GenesysPureConnectCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: genesysPureConnectContactCenterProviderManifest.id,
      requirementId: "genesys-pureconnect-icws-base-url",
      state: input.icwsBaseUrl ? "configured" : "missing",
      message: input.icwsBaseUrl ? "PureConnect ICWS base URL is configured." : "PureConnect ICWS base URL is required.",
    },
    {
      providerPackageId: genesysPureConnectContactCenterProviderManifest.id,
      requirementId: "genesys-pureconnect-session",
      state: input.sessionConfigured ? "configured" : "missing",
      message: input.sessionConfigured ? "PureConnect ICWS session/authentication is configured." : "PureConnect ICWS session/authentication is not configured.",
    },
    {
      providerPackageId: genesysPureConnectContactCenterProviderManifest.id,
      requirementId: "genesys-pureconnect-routing",
      state: input.routingConfigured ? "configured" : "missing",
      message: input.routingConfigured
        ? "PureConnect Interaction Web Tools routing is configured by the SDK app."
        : "PureConnect chat/callback routing must be supplied by SDK configuration before handoff is enabled.",
    },
  ];
}
