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
export const MailgunFullApiOpenapiTowerOtherOperationKeys = [
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool",
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool"
] as const;
export type MailgunFullApiOpenapiTowerOtherOperationKey = typeof MailgunFullApiOpenapiTowerOtherOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiOpenapiTowerOtherOperationPathParamMap {
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": { "subaccountId": MailgunFullApiPathParamValue };
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": { "subaccountId": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiOpenapiTowerOtherOperationRequestMap {
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": MailgunFullApiOperationInput<"PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool">;
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": MailgunFullApiOperationInput<"DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool">;
}

export interface MailgunFullApiOpenapiTowerOtherGeneratedClient {
  DelegateADIPPToASubaccount(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool"]>;
  RevokeADIPPDelegatedToASubaccount(...args: MailgunFullApiOperationArgs<"DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool">): Promise<MailgunFullApiOperationResponseMap["DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool"]>;
}

export const MailgunFullApiOpenapiTowerOtherGeneratedFunctionNames = [
  "DelegateADIPPToASubaccount",
  "RevokeADIPPDelegatedToASubaccount"
] as const satisfies readonly (keyof MailgunFullApiOpenapiTowerOtherGeneratedClient)[];

export function createMailgunFullApiOpenapiTowerOtherGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiOpenapiTowerOtherGeneratedClient {
  return {
    DelegateADIPPToASubaccount: (...args) => callOperation("PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool">)),
    RevokeADIPPDelegatedToASubaccount: (...args) => callOperation("DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool", ...(args as MailgunFullApiOperationArgs<"DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool">)),
  };
}
