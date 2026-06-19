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
export const AzureSpeechFullApiCustomSpeechOperationsOperationKeys = [
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechOperationsOperationKey = typeof AzureSpeechFullApiCustomSpeechOperationsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechOperationsOperationPathParamMap {
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechOperationsOperationRequestMap {
  "speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechOperationsGeneratedClient {
  SpeechToTextOperationsGetModelCopy(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechOperationsGeneratedFunctionNames = [
  "SpeechToTextOperationsGetModelCopy"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechOperationsGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechOperationsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechOperationsGeneratedClient {
  return {
    SpeechToTextOperationsGetModelCopy: (...args) => callOperation("speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}">)),
  };
}
