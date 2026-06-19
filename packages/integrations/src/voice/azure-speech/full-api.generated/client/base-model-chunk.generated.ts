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
export const AzureSpeechFullApiBaseModelOperationKeys = [
  "custom-text-to-speech:BaseModels_List:/basemodels"
] as const;
export type AzureSpeechFullApiBaseModelOperationKey = typeof AzureSpeechFullApiBaseModelOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiBaseModelOperationPathParamMap {
  "custom-text-to-speech:BaseModels_List:/basemodels": {};
}

export interface AzureSpeechFullApiBaseModelOperationRequestMap {
  "custom-text-to-speech:BaseModels_List:/basemodels": AzureSpeechFullApiOperationInput<"custom-text-to-speech:BaseModels_List:/basemodels">;
}

export interface AzureSpeechFullApiBaseModelGeneratedClient {
  CustomTextToSpeechBaseModelsList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:BaseModels_List:/basemodels">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:BaseModels_List:/basemodels"]>;
}

export const AzureSpeechFullApiBaseModelGeneratedFunctionNames = [
  "CustomTextToSpeechBaseModelsList"
] as const satisfies readonly (keyof AzureSpeechFullApiBaseModelGeneratedClient)[];

export function createAzureSpeechFullApiBaseModelGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiBaseModelGeneratedClient {
  return {
    CustomTextToSpeechBaseModelsList: (...args) => callOperation("custom-text-to-speech:BaseModels_List:/basemodels", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:BaseModels_List:/basemodels">)),
  };
}
