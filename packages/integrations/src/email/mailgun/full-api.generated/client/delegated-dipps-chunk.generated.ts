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
export const MailgunFullApiDelegatedDIPPsOperationKeys = [
  "GET /v5/accounts/subaccounts/ip_pools/all"
] as const;
export type MailgunFullApiDelegatedDIPPsOperationKey = typeof MailgunFullApiDelegatedDIPPsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDelegatedDIPPsOperationPathParamMap {
  "GET /v5/accounts/subaccounts/ip_pools/all": {};
}

export interface MailgunFullApiDelegatedDIPPsOperationRequestMap {
  "GET /v5/accounts/subaccounts/ip_pools/all": MailgunFullApiOperationInput<"GET /v5/accounts/subaccounts/ip_pools/all">;
}

export interface MailgunFullApiDelegatedDIPPsGeneratedClient {
  ListDIPPsDelegatedToSubaccounts(...args: MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts/ip_pools/all">): Promise<MailgunFullApiOperationResponseMap["GET /v5/accounts/subaccounts/ip_pools/all"]>;
}

export const MailgunFullApiDelegatedDIPPsGeneratedFunctionNames = [
  "ListDIPPsDelegatedToSubaccounts"
] as const satisfies readonly (keyof MailgunFullApiDelegatedDIPPsGeneratedClient)[];

export function createMailgunFullApiDelegatedDIPPsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDelegatedDIPPsGeneratedClient {
  return {
    ListDIPPsDelegatedToSubaccounts: (...args) => callOperation("GET /v5/accounts/subaccounts/ip_pools/all", ...(args as MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts/ip_pools/all">)),
  };
}
