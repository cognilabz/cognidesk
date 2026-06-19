// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiOpenapiScoutOtherOperationKeys = [
  "GET /v3/domains/{domain}/tag/devices",
  "GET /v3/domains/{domain}/tag/providers",
  "GET /v3/domains/{domain}/tag/countries"
] as const;
export type MailgunFullApiOpenapiScoutOtherOperationKey = typeof MailgunFullApiOpenapiScoutOtherOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiOpenapiScoutOtherOperationPathParamMap {
  "GET /v3/domains/{domain}/tag/devices": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/domains/{domain}/tag/providers": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/domains/{domain}/tag/countries": { "domain": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiOpenapiScoutOtherOperationRequestMap {
  "GET /v3/domains/{domain}/tag/devices": MailgunFullApiOperationInput<"GET /v3/domains/{domain}/tag/devices">;
  "GET /v3/domains/{domain}/tag/providers": MailgunFullApiOperationInput<"GET /v3/domains/{domain}/tag/providers">;
  "GET /v3/domains/{domain}/tag/countries": MailgunFullApiOperationInput<"GET /v3/domains/{domain}/tag/countries">;
}

export interface MailgunFullApiOpenapiScoutOtherGeneratedClient {
  ListOfSupportedDevices(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/tag/devices">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain}/tag/devices"]>;
  ListOfSupportedProviders(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/tag/providers">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain}/tag/providers"]>;
  ListOfSupportedCountryCodes(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/tag/countries">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain}/tag/countries"]>;
}

export const MailgunFullApiOpenapiScoutOtherGeneratedFunctionNames = [
  "ListOfSupportedDevices",
  "ListOfSupportedProviders",
  "ListOfSupportedCountryCodes"
] as const satisfies readonly (keyof MailgunFullApiOpenapiScoutOtherGeneratedClient)[];

export function createMailgunFullApiOpenapiScoutOtherGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiOpenapiScoutOtherGeneratedClient {
  return {
    ListOfSupportedDevices: (...args) => callOperation("GET /v3/domains/{domain}/tag/devices", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/tag/devices">)),
    ListOfSupportedProviders: (...args) => callOperation("GET /v3/domains/{domain}/tag/providers", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/tag/providers">)),
    ListOfSupportedCountryCodes: (...args) => callOperation("GET /v3/domains/{domain}/tag/countries", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/tag/countries">)),
  };
}
