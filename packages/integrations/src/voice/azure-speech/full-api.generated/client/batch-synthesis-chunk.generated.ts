// Generated endpoint chunk for AzureSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AzureSpeechGeneratedOperationCaller,
  AzureSpeechFullApiOperationArgs,
  AzureSpeechFullApiOperationInput,
  AzureSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AzureSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AzureSpeechFullApiBatchSynthesisOperationKeys = [
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}",
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}",
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}",
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses"
] as const;
export type AzureSpeechFullApiBatchSynthesisOperationKey = typeof AzureSpeechFullApiBatchSynthesisOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiBatchSynthesisOperationPathParamMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": {};
}

export interface AzureSpeechFullApiBatchSynthesisOperationRequestMap {
  "batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}": AzureSpeechFullApiOperationInput<"batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}">;
  "batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}": AzureSpeechFullApiOperationInput<"batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}">;
  "batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}": AzureSpeechFullApiOperationInput<"batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}">;
  "batch-text-to-speech:BatchSyntheses_List:/batchsyntheses": AzureSpeechFullApiOperationInput<"batch-text-to-speech:BatchSyntheses_List:/batchsyntheses">;
}

export interface AzureSpeechFullApiBatchSynthesisGeneratedClient {
  BatchTextToSpeechBatchSynthesesCreate(...args: AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}"]>;
  BatchTextToSpeechBatchSynthesesDelete(...args: AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}"]>;
  BatchTextToSpeechBatchSynthesesGet(...args: AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}"]>;
  BatchTextToSpeechBatchSynthesesList(...args: AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_List:/batchsyntheses">): Promise<AzureSpeechFullApiOperationResponseMap["batch-text-to-speech:BatchSyntheses_List:/batchsyntheses"]>;
}

export const AzureSpeechFullApiBatchSynthesisGeneratedFunctionNames = [
  "BatchTextToSpeechBatchSynthesesCreate",
  "BatchTextToSpeechBatchSynthesesDelete",
  "BatchTextToSpeechBatchSynthesesGet",
  "BatchTextToSpeechBatchSynthesesList"
] as const satisfies readonly (keyof AzureSpeechFullApiBatchSynthesisGeneratedClient)[];

export function createAzureSpeechFullApiBatchSynthesisGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiBatchSynthesisGeneratedClient {
  return {
    BatchTextToSpeechBatchSynthesesCreate: (...args) => callOperation("batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}", ...(args as AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}">)),
    BatchTextToSpeechBatchSynthesesDelete: (...args) => callOperation("batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}", ...(args as AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}">)),
    BatchTextToSpeechBatchSynthesesGet: (...args) => callOperation("batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}", ...(args as AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}">)),
    BatchTextToSpeechBatchSynthesesList: (...args) => callOperation("batch-text-to-speech:BatchSyntheses_List:/batchsyntheses", ...(args as AzureSpeechFullApiOperationArgs<"batch-text-to-speech:BatchSyntheses_List:/batchsyntheses">)),
  };
}
