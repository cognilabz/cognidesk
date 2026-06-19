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
export const MailgunFullApiLimitsOperationKeys = [
  "GET /v1/thresholds/limits",
  "POST /v1/thresholds/limits",
  "GET /v1/thresholds/limits/{name}",
  "PUT /v1/thresholds/limits/{name}",
  "DELETE /v1/thresholds/limits/{name}"
] as const;
export type MailgunFullApiLimitsOperationKey = typeof MailgunFullApiLimitsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiLimitsOperationPathParamMap {
  "GET /v1/thresholds/limits": {};
  "POST /v1/thresholds/limits": {};
  "GET /v1/thresholds/limits/{name}": { "name": MailgunFullApiPathParamValue };
  "PUT /v1/thresholds/limits/{name}": { "name": MailgunFullApiPathParamValue };
  "DELETE /v1/thresholds/limits/{name}": { "name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiLimitsOperationRequestMap {
  "GET /v1/thresholds/limits": MailgunFullApiOperationInput<"GET /v1/thresholds/limits">;
  "POST /v1/thresholds/limits": MailgunFullApiOperationInput<"POST /v1/thresholds/limits">;
  "GET /v1/thresholds/limits/{name}": MailgunFullApiOperationInput<"GET /v1/thresholds/limits/{name}">;
  "PUT /v1/thresholds/limits/{name}": MailgunFullApiOperationInput<"PUT /v1/thresholds/limits/{name}">;
  "DELETE /v1/thresholds/limits/{name}": MailgunFullApiOperationInput<"DELETE /v1/thresholds/limits/{name}">;
}

export interface MailgunFullApiLimitsGeneratedClient {
  ListLimitThresholdsForAnAccount(...args: MailgunFullApiOperationArgs<"GET /v1/thresholds/limits">): Promise<MailgunFullApiOperationResponseMap["GET /v1/thresholds/limits"]>;
  CreateALimitThresholdForAnAccount(...args: MailgunFullApiOperationArgs<"POST /v1/thresholds/limits">): Promise<MailgunFullApiOperationResponseMap["POST /v1/thresholds/limits"]>;
  GetALimitThresholdForAnAccount(...args: MailgunFullApiOperationArgs<"GET /v1/thresholds/limits/{name}">): Promise<MailgunFullApiOperationResponseMap["GET /v1/thresholds/limits/{name}"]>;
  UpdateALimitThresholdForAnAccount(...args: MailgunFullApiOperationArgs<"PUT /v1/thresholds/limits/{name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/thresholds/limits/{name}"]>;
  DeleteALimitThresholdForAnAccount(...args: MailgunFullApiOperationArgs<"DELETE /v1/thresholds/limits/{name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/thresholds/limits/{name}"]>;
}

export const MailgunFullApiLimitsGeneratedFunctionNames = [
  "ListLimitThresholdsForAnAccount",
  "CreateALimitThresholdForAnAccount",
  "GetALimitThresholdForAnAccount",
  "UpdateALimitThresholdForAnAccount",
  "DeleteALimitThresholdForAnAccount"
] as const satisfies readonly (keyof MailgunFullApiLimitsGeneratedClient)[];

export function createMailgunFullApiLimitsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiLimitsGeneratedClient {
  return {
    ListLimitThresholdsForAnAccount: (...args) => callOperation("GET /v1/thresholds/limits", ...(args as MailgunFullApiOperationArgs<"GET /v1/thresholds/limits">)),
    CreateALimitThresholdForAnAccount: (...args) => callOperation("POST /v1/thresholds/limits", ...(args as MailgunFullApiOperationArgs<"POST /v1/thresholds/limits">)),
    GetALimitThresholdForAnAccount: (...args) => callOperation("GET /v1/thresholds/limits/{name}", ...(args as MailgunFullApiOperationArgs<"GET /v1/thresholds/limits/{name}">)),
    UpdateALimitThresholdForAnAccount: (...args) => callOperation("PUT /v1/thresholds/limits/{name}", ...(args as MailgunFullApiOperationArgs<"PUT /v1/thresholds/limits/{name}">)),
    DeleteALimitThresholdForAnAccount: (...args) => callOperation("DELETE /v1/thresholds/limits/{name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/thresholds/limits/{name}">)),
  };
}
