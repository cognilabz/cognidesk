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
export const MailgunFullApiSubaccountsOperationKeys = [
  "GET /v5/accounts/subaccounts/{subaccount_id}",
  "GET /v5/accounts/subaccounts",
  "POST /v5/accounts/subaccounts",
  "DELETE /v5/accounts/subaccounts",
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable",
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable",
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly",
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly",
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly",
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features"
] as const;
export type MailgunFullApiSubaccountsOperationKey = typeof MailgunFullApiSubaccountsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiSubaccountsOperationPathParamMap {
  "GET /v5/accounts/subaccounts/{subaccount_id}": { "subaccount_id": MailgunFullApiPathParamValue };
  "GET /v5/accounts/subaccounts": {};
  "POST /v5/accounts/subaccounts": {};
  "DELETE /v5/accounts/subaccounts": {};
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": { "subaccount_id": MailgunFullApiPathParamValue };
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": { "subaccount_id": MailgunFullApiPathParamValue };
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": { "subaccount_id": MailgunFullApiPathParamValue };
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": { "subaccount_id": MailgunFullApiPathParamValue };
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": { "subaccount_id": MailgunFullApiPathParamValue };
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": { "subaccount_id": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiSubaccountsOperationRequestMap {
  "GET /v5/accounts/subaccounts/{subaccount_id}": MailgunFullApiOperationInput<"GET /v5/accounts/subaccounts/{subaccount_id}">;
  "GET /v5/accounts/subaccounts": MailgunFullApiOperationInput<"GET /v5/accounts/subaccounts">;
  "POST /v5/accounts/subaccounts": MailgunFullApiOperationInput<"POST /v5/accounts/subaccounts">;
  "DELETE /v5/accounts/subaccounts": MailgunFullApiOperationInput<"DELETE /v5/accounts/subaccounts">;
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": MailgunFullApiOperationInput<"POST /v5/accounts/subaccounts/{subaccount_id}/disable">;
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": MailgunFullApiOperationInput<"POST /v5/accounts/subaccounts/{subaccount_id}/enable">;
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": MailgunFullApiOperationInput<"GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": MailgunFullApiOperationInput<"PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">;
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": MailgunFullApiOperationInput<"DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": MailgunFullApiOperationInput<"PUT /v5/accounts/subaccounts/{subaccount_id}/features">;
}

export interface MailgunFullApiSubaccountsGeneratedClient {
  GetASingleSubaccount(...args: MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts/{subaccount_id}">): Promise<MailgunFullApiOperationResponseMap["GET /v5/accounts/subaccounts/{subaccount_id}"]>;
  ListAllSubaccounts(...args: MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts">): Promise<MailgunFullApiOperationResponseMap["GET /v5/accounts/subaccounts"]>;
  CreateASubaccount(...args: MailgunFullApiOperationArgs<"POST /v5/accounts/subaccounts">): Promise<MailgunFullApiOperationResponseMap["POST /v5/accounts/subaccounts"]>;
  DeleteASubaccount(...args: MailgunFullApiOperationArgs<"DELETE /v5/accounts/subaccounts">): Promise<MailgunFullApiOperationResponseMap["DELETE /v5/accounts/subaccounts"]>;
  DisableASubaccount(...args: MailgunFullApiOperationArgs<"POST /v5/accounts/subaccounts/{subaccount_id}/disable">): Promise<MailgunFullApiOperationResponseMap["POST /v5/accounts/subaccounts/{subaccount_id}/disable"]>;
  EnableASubaccount(...args: MailgunFullApiOperationArgs<"POST /v5/accounts/subaccounts/{subaccount_id}/enable">): Promise<MailgunFullApiOperationResponseMap["POST /v5/accounts/subaccounts/{subaccount_id}/enable"]>;
  GetCurrentCustomSendingLimit(...args: MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">): Promise<MailgunFullApiOperationResponseMap["GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly"]>;
  SetACustomSendingLimit(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly"]>;
  DeleteACustomSendingLimit(...args: MailgunFullApiOperationArgs<"DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">): Promise<MailgunFullApiOperationResponseMap["DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly"]>;
  UpdateSubaccountFeature(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts/subaccounts/{subaccount_id}/features">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts/subaccounts/{subaccount_id}/features"]>;
}

export const MailgunFullApiSubaccountsGeneratedFunctionNames = [
  "GetASingleSubaccount",
  "ListAllSubaccounts",
  "CreateASubaccount",
  "DeleteASubaccount",
  "DisableASubaccount",
  "EnableASubaccount",
  "GetCurrentCustomSendingLimit",
  "SetACustomSendingLimit",
  "DeleteACustomSendingLimit",
  "UpdateSubaccountFeature"
] as const satisfies readonly (keyof MailgunFullApiSubaccountsGeneratedClient)[];

export function createMailgunFullApiSubaccountsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiSubaccountsGeneratedClient {
  return {
    GetASingleSubaccount: (...args) => callOperation("GET /v5/accounts/subaccounts/{subaccount_id}", ...(args as MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts/{subaccount_id}">)),
    ListAllSubaccounts: (...args) => callOperation("GET /v5/accounts/subaccounts", ...(args as MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts">)),
    CreateASubaccount: (...args) => callOperation("POST /v5/accounts/subaccounts", ...(args as MailgunFullApiOperationArgs<"POST /v5/accounts/subaccounts">)),
    DeleteASubaccount: (...args) => callOperation("DELETE /v5/accounts/subaccounts", ...(args as MailgunFullApiOperationArgs<"DELETE /v5/accounts/subaccounts">)),
    DisableASubaccount: (...args) => callOperation("POST /v5/accounts/subaccounts/{subaccount_id}/disable", ...(args as MailgunFullApiOperationArgs<"POST /v5/accounts/subaccounts/{subaccount_id}/disable">)),
    EnableASubaccount: (...args) => callOperation("POST /v5/accounts/subaccounts/{subaccount_id}/enable", ...(args as MailgunFullApiOperationArgs<"POST /v5/accounts/subaccounts/{subaccount_id}/enable">)),
    GetCurrentCustomSendingLimit: (...args) => callOperation("GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly", ...(args as MailgunFullApiOperationArgs<"GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">)),
    SetACustomSendingLimit: (...args) => callOperation("PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">)),
    DeleteACustomSendingLimit: (...args) => callOperation("DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly", ...(args as MailgunFullApiOperationArgs<"DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly">)),
    UpdateSubaccountFeature: (...args) => callOperation("PUT /v5/accounts/subaccounts/{subaccount_id}/features", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts/subaccounts/{subaccount_id}/features">)),
  };
}
