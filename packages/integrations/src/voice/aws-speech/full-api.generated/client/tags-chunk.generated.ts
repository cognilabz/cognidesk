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
export const AwsSpeechFullApiTagsOperationKeys = [
  "transcribe:ListTagsForResource",
  "transcribe:TagResource",
  "transcribe:UntagResource"
] as const;
export type AwsSpeechFullApiTagsOperationKey = typeof AwsSpeechFullApiTagsOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiTagsOperationPathParamMap {
  "transcribe:ListTagsForResource": { "ResourceArn": AwsSpeechFullApiPathParamValue };
  "transcribe:TagResource": { "ResourceArn": AwsSpeechFullApiPathParamValue };
  "transcribe:UntagResource": { "ResourceArn": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiTagsOperationRequestMap {
  "transcribe:ListTagsForResource": AwsSpeechFullApiOperationInput<"transcribe:ListTagsForResource">;
  "transcribe:TagResource": AwsSpeechFullApiOperationInput<"transcribe:TagResource">;
  "transcribe:UntagResource": AwsSpeechFullApiOperationInput<"transcribe:UntagResource">;
}

export interface AwsSpeechFullApiTagsGeneratedClient {
  TranscribeListTagsForResource(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListTagsForResource">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListTagsForResource"]>;
  TranscribeTagResource(...args: AwsSpeechFullApiOperationArgs<"transcribe:TagResource">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:TagResource"]>;
  TranscribeUntagResource(...args: AwsSpeechFullApiOperationArgs<"transcribe:UntagResource">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:UntagResource"]>;
}

export const AwsSpeechFullApiTagsGeneratedFunctionNames = [
  "TranscribeListTagsForResource",
  "TranscribeTagResource",
  "TranscribeUntagResource"
] as const satisfies readonly (keyof AwsSpeechFullApiTagsGeneratedClient)[];

export function createAwsSpeechFullApiTagsGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiTagsGeneratedClient {
  return {
    TranscribeListTagsForResource: (...args) => callOperation("transcribe:ListTagsForResource", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListTagsForResource">)),
    TranscribeTagResource: (...args) => callOperation("transcribe:TagResource", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:TagResource">)),
    TranscribeUntagResource: (...args) => callOperation("transcribe:UntagResource", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:UntagResource">)),
  };
}
