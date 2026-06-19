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
export const MailgunFullApiCustomMessageLimitOperationKeys = [
  "GET /v5/accounts/limit/custom/monthly",
  "PUT /v5/accounts/limit/custom/monthly",
  "DELETE /v5/accounts/limit/custom/monthly",
  "PUT /v5/accounts/limit/custom/enable"
] as const;
export type MailgunFullApiCustomMessageLimitOperationKey = typeof MailgunFullApiCustomMessageLimitOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiCustomMessageLimitOperationPathParamMap {
  "GET /v5/accounts/limit/custom/monthly": {};
  "PUT /v5/accounts/limit/custom/monthly": {};
  "DELETE /v5/accounts/limit/custom/monthly": {};
  "PUT /v5/accounts/limit/custom/enable": {};
}

export interface MailgunFullApiCustomMessageLimitOperationRequestMap {
  "GET /v5/accounts/limit/custom/monthly": MailgunFullApiOperationInput<"GET /v5/accounts/limit/custom/monthly">;
  "PUT /v5/accounts/limit/custom/monthly": MailgunFullApiOperationInput<"PUT /v5/accounts/limit/custom/monthly">;
  "DELETE /v5/accounts/limit/custom/monthly": MailgunFullApiOperationInput<"DELETE /v5/accounts/limit/custom/monthly">;
  "PUT /v5/accounts/limit/custom/enable": MailgunFullApiOperationInput<"PUT /v5/accounts/limit/custom/enable">;
}

export interface MailgunFullApiCustomMessageLimitGeneratedClient {
  GetCurrentCustomSendingLimit2(...args: MailgunFullApiOperationArgs<"GET /v5/accounts/limit/custom/monthly">): Promise<MailgunFullApiOperationResponseMap["GET /v5/accounts/limit/custom/monthly"]>;
  SetACustomSendingLimit2(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts/limit/custom/monthly">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts/limit/custom/monthly"]>;
  DeleteACustomSendingLimit2(...args: MailgunFullApiOperationArgs<"DELETE /v5/accounts/limit/custom/monthly">): Promise<MailgunFullApiOperationResponseMap["DELETE /v5/accounts/limit/custom/monthly"]>;
  ReEnableAccountDisabledForHittingSendLimit(...args: MailgunFullApiOperationArgs<"PUT /v5/accounts/limit/custom/enable">): Promise<MailgunFullApiOperationResponseMap["PUT /v5/accounts/limit/custom/enable"]>;
}

export const MailgunFullApiCustomMessageLimitGeneratedFunctionNames = [
  "GetCurrentCustomSendingLimit2",
  "SetACustomSendingLimit2",
  "DeleteACustomSendingLimit2",
  "ReEnableAccountDisabledForHittingSendLimit"
] as const satisfies readonly (keyof MailgunFullApiCustomMessageLimitGeneratedClient)[];

export function createMailgunFullApiCustomMessageLimitGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiCustomMessageLimitGeneratedClient {
  return {
    GetCurrentCustomSendingLimit2: (...args) => callOperation("GET /v5/accounts/limit/custom/monthly", ...(args as MailgunFullApiOperationArgs<"GET /v5/accounts/limit/custom/monthly">)),
    SetACustomSendingLimit2: (...args) => callOperation("PUT /v5/accounts/limit/custom/monthly", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts/limit/custom/monthly">)),
    DeleteACustomSendingLimit2: (...args) => callOperation("DELETE /v5/accounts/limit/custom/monthly", ...(args as MailgunFullApiOperationArgs<"DELETE /v5/accounts/limit/custom/monthly">)),
    ReEnableAccountDisabledForHittingSendLimit: (...args) => callOperation("PUT /v5/accounts/limit/custom/enable", ...(args as MailgunFullApiOperationArgs<"PUT /v5/accounts/limit/custom/enable">)),
  };
}
