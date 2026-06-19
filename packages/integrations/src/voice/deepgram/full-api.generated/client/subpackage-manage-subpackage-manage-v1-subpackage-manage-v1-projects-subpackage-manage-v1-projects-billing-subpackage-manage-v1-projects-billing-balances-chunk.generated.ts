// Generated endpoint chunk for DeepgramSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DeepgramSpeechGeneratedOperationCaller,
  DeepgramSpeechFullApiOperationArgs,
  DeepgramSpeechFullApiOperationInput,
  DeepgramSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { DeepgramSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesOperationKeys = [
  "GET /v1/projects/{project_id}/balances/{balance_id}",
  "GET /v1/projects/{project_id}/balances"
] as const;
export type DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesOperationKey = typeof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesOperationPathParamMap {
  "GET /v1/projects/{project_id}/balances/{balance_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "balance_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/balances": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesOperationRequestMap {
  "GET /v1/projects/{project_id}/balances/{balance_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/balances/{balance_id}">;
  "GET /v1/projects/{project_id}/balances": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/balances">;
}

export interface DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient {
  Get10(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/balances/{balance_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/balances/{balance_id}"]>;
  List13(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/balances">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/balances"]>;
}

export const DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedFunctionNames = [
  "Get10",
  "List13"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient {
  return {
    Get10: (...args) => callOperation("GET /v1/projects/{project_id}/balances/{balance_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/balances/{balance_id}">)),
    List13: (...args) => callOperation("GET /v1/projects/{project_id}/balances", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/balances">)),
  };
}
