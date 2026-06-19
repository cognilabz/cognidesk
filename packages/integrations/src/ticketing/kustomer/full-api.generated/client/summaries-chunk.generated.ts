// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiSummariesOperationKeys = [
  "GetAISummaryByResourceId",
  "BatchGetAISummaries"
] as const;
export type KustomerFullApiSummariesOperationKey = typeof KustomerFullApiSummariesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSummariesOperationPathParamMap {
  "GetAISummaryByResourceId": { "resourceId": KustomerFullApiPathParamValue };
  "BatchGetAISummaries": {};
}

export interface KustomerFullApiSummariesOperationRequestMap {
  "GetAISummaryByResourceId": KustomerFullApiOperationInput<"GetAISummaryByResourceId">;
  "BatchGetAISummaries": KustomerFullApiOperationInput<"BatchGetAISummaries">;
}

export interface KustomerFullApiSummariesGeneratedClient {
  kustomerGetAISummaryByResourceId(...args: KustomerFullApiOperationArgs<"GetAISummaryByResourceId">): Promise<KustomerFullApiOperationResponseMap["GetAISummaryByResourceId"]>;
  kustomerBatchGetAISummaries(...args: KustomerFullApiOperationArgs<"BatchGetAISummaries">): Promise<KustomerFullApiOperationResponseMap["BatchGetAISummaries"]>;
}

export const KustomerFullApiSummariesGeneratedFunctionNames = [
  "kustomerGetAISummaryByResourceId",
  "kustomerBatchGetAISummaries"
] as const satisfies readonly (keyof KustomerFullApiSummariesGeneratedClient)[];

export function createKustomerFullApiSummariesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSummariesGeneratedClient {
  return {
    kustomerGetAISummaryByResourceId: (...args) => callOperation("GetAISummaryByResourceId", ...(args as KustomerFullApiOperationArgs<"GetAISummaryByResourceId">)),
    kustomerBatchGetAISummaries: (...args) => callOperation("BatchGetAISummaries", ...(args as KustomerFullApiOperationArgs<"BatchGetAISummaries">)),
  };
}
