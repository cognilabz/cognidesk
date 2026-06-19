// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiTextToDialogueOperationKeys = [
  "POST /v1/text-to-dialogue",
  "POST /v1/text-to-dialogue/stream",
  "POST /v1/text-to-dialogue/stream/with-timestamps",
  "POST /v1/text-to-dialogue/with-timestamps"
] as const;
export type ElevenLabsFullApiTextToDialogueOperationKey = typeof ElevenLabsFullApiTextToDialogueOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiTextToDialogueOperationPathParamMap {
  "POST /v1/text-to-dialogue": {};
  "POST /v1/text-to-dialogue/stream": {};
  "POST /v1/text-to-dialogue/stream/with-timestamps": {};
  "POST /v1/text-to-dialogue/with-timestamps": {};
}

export interface ElevenLabsFullApiTextToDialogueOperationRequestMap {
  "POST /v1/text-to-dialogue": ElevenLabsFullApiOperationInput<"POST /v1/text-to-dialogue">;
  "POST /v1/text-to-dialogue/stream": ElevenLabsFullApiOperationInput<"POST /v1/text-to-dialogue/stream">;
  "POST /v1/text-to-dialogue/stream/with-timestamps": ElevenLabsFullApiOperationInput<"POST /v1/text-to-dialogue/stream/with-timestamps">;
  "POST /v1/text-to-dialogue/with-timestamps": ElevenLabsFullApiOperationInput<"POST /v1/text-to-dialogue/with-timestamps">;
}

export interface ElevenLabsFullApiTextToDialogueGeneratedClient {
  TextToDialogue(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-dialogue"]>;
  TextToDialogueStream(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-dialogue/stream"]>;
  TextToDialogueStreamWithTimestamps(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue/stream/with-timestamps">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-dialogue/stream/with-timestamps"]>;
  TextToDialogueFullWithTimestamps(...args: ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue/with-timestamps">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/text-to-dialogue/with-timestamps"]>;
}

export const ElevenLabsFullApiTextToDialogueGeneratedFunctionNames = [
  "TextToDialogue",
  "TextToDialogueStream",
  "TextToDialogueStreamWithTimestamps",
  "TextToDialogueFullWithTimestamps"
] as const satisfies readonly (keyof ElevenLabsFullApiTextToDialogueGeneratedClient)[];

export function createElevenLabsFullApiTextToDialogueGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiTextToDialogueGeneratedClient {
  return {
    TextToDialogue: (...args) => callOperation("POST /v1/text-to-dialogue", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue">)),
    TextToDialogueStream: (...args) => callOperation("POST /v1/text-to-dialogue/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue/stream">)),
    TextToDialogueStreamWithTimestamps: (...args) => callOperation("POST /v1/text-to-dialogue/stream/with-timestamps", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue/stream/with-timestamps">)),
    TextToDialogueFullWithTimestamps: (...args) => callOperation("POST /v1/text-to-dialogue/with-timestamps", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/text-to-dialogue/with-timestamps">)),
  };
}
