// Generated endpoint chunk for AwsSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AwsSpeechGeneratedOperationCaller,
  AwsSpeechFullApiOperationArgs,
  AwsSpeechFullApiOperationInput,
  AwsSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AwsSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AwsSpeechFullApiLanguagemodelsOperationKeys = [
  "transcribe:CreateLanguageModel",
  "transcribe:DeleteLanguageModel",
  "transcribe:DescribeLanguageModel",
  "transcribe:ListLanguageModels"
] as const;
export type AwsSpeechFullApiLanguagemodelsOperationKey = typeof AwsSpeechFullApiLanguagemodelsOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiLanguagemodelsOperationPathParamMap {
  "transcribe:CreateLanguageModel": { "ModelName": AwsSpeechFullApiPathParamValue };
  "transcribe:DeleteLanguageModel": { "ModelName": AwsSpeechFullApiPathParamValue };
  "transcribe:DescribeLanguageModel": { "ModelName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListLanguageModels": {};
}

export interface AwsSpeechFullApiLanguagemodelsOperationRequestMap {
  "transcribe:CreateLanguageModel": AwsSpeechFullApiOperationInput<"transcribe:CreateLanguageModel">;
  "transcribe:DeleteLanguageModel": AwsSpeechFullApiOperationInput<"transcribe:DeleteLanguageModel">;
  "transcribe:DescribeLanguageModel": AwsSpeechFullApiOperationInput<"transcribe:DescribeLanguageModel">;
  "transcribe:ListLanguageModels": AwsSpeechFullApiOperationInput<"transcribe:ListLanguageModels">;
}

export interface AwsSpeechFullApiLanguagemodelsGeneratedClient {
  TranscribeCreateLanguageModel(...args: AwsSpeechFullApiOperationArgs<"transcribe:CreateLanguageModel">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:CreateLanguageModel"]>;
  TranscribeDeleteLanguageModel(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteLanguageModel">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteLanguageModel"]>;
  TranscribeDescribeLanguageModel(...args: AwsSpeechFullApiOperationArgs<"transcribe:DescribeLanguageModel">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DescribeLanguageModel"]>;
  TranscribeListLanguageModels(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListLanguageModels">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListLanguageModels"]>;
}

export const AwsSpeechFullApiLanguagemodelsGeneratedFunctionNames = [
  "TranscribeCreateLanguageModel",
  "TranscribeDeleteLanguageModel",
  "TranscribeDescribeLanguageModel",
  "TranscribeListLanguageModels"
] as const satisfies readonly (keyof AwsSpeechFullApiLanguagemodelsGeneratedClient)[];

export function createAwsSpeechFullApiLanguagemodelsGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiLanguagemodelsGeneratedClient {
  return {
    TranscribeCreateLanguageModel: (...args) => callOperation("transcribe:CreateLanguageModel", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:CreateLanguageModel">)),
    TranscribeDeleteLanguageModel: (...args) => callOperation("transcribe:DeleteLanguageModel", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteLanguageModel">)),
    TranscribeDescribeLanguageModel: (...args) => callOperation("transcribe:DescribeLanguageModel", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DescribeLanguageModel">)),
    TranscribeListLanguageModels: (...args) => callOperation("transcribe:ListLanguageModels", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListLanguageModels">)),
  };
}
