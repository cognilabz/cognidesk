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
export const AzureSpeechFullApiOperationsOperationKeys = [
  "batch-text-to-speech:Operations_Get:/operations/{id}",
  "custom-text-to-speech:Operations_Get:/operations/{id}"
] as const;
export type AzureSpeechFullApiOperationsOperationKey = typeof AzureSpeechFullApiOperationsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiOperationsOperationPathParamMap {
  "batch-text-to-speech:Operations_Get:/operations/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Operations_Get:/operations/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiOperationsOperationRequestMap {
  "batch-text-to-speech:Operations_Get:/operations/{id}": AzureSpeechFullApiOperationInput<"batch-text-to-speech:Operations_Get:/operations/{id}">;
  "custom-text-to-speech:Operations_Get:/operations/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Operations_Get:/operations/{id}">;
}

export interface AzureSpeechFullApiOperationsGeneratedClient {
  BatchTextToSpeechOperationsGet(...args: AzureSpeechFullApiOperationArgs<"batch-text-to-speech:Operations_Get:/operations/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["batch-text-to-speech:Operations_Get:/operations/{id}"]>;
  CustomTextToSpeechOperationsGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Operations_Get:/operations/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Operations_Get:/operations/{id}"]>;
}

export const AzureSpeechFullApiOperationsGeneratedFunctionNames = [
  "BatchTextToSpeechOperationsGet",
  "CustomTextToSpeechOperationsGet"
] as const satisfies readonly (keyof AzureSpeechFullApiOperationsGeneratedClient)[];

export function createAzureSpeechFullApiOperationsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiOperationsGeneratedClient {
  return {
    BatchTextToSpeechOperationsGet: (...args) => callOperation("batch-text-to-speech:Operations_Get:/operations/{id}", ...(args as AzureSpeechFullApiOperationArgs<"batch-text-to-speech:Operations_Get:/operations/{id}">)),
    CustomTextToSpeechOperationsGet: (...args) => callOperation("custom-text-to-speech:Operations_Get:/operations/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Operations_Get:/operations/{id}">)),
  };
}
