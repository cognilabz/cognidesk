// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiMaskingOperationKeys = [
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask",
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask"
] as const;
export type NiceCxoneFullApiMaskingOperationKey = typeof NiceCxoneFullApiMaskingOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiMaskingOperationPathParamMap {
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": {};
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": {};
}

export interface NiceCxoneFullApiMaskingOperationRequestMap {
  "recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask": NiceCxoneFullApiOperationInput<"recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask">;
  "recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask": NiceCxoneFullApiOperationInput<"recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask">;
}

export interface NiceCxoneFullApiMaskingGeneratedClient {
  RecordingInteractionsApiDocsPostInteractionMask(...args: NiceCxoneFullApiOperationArgs<"recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask">): Promise<NiceCxoneFullApiOperationResponseMap["recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask"]>;
  RecordingInteractionsApiDocsPostInteractionUnmask(...args: NiceCxoneFullApiOperationArgs<"recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask">): Promise<NiceCxoneFullApiOperationResponseMap["recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask"]>;
}

export const NiceCxoneFullApiMaskingGeneratedFunctionNames = [
  "RecordingInteractionsApiDocsPostInteractionMask",
  "RecordingInteractionsApiDocsPostInteractionUnmask"
] as const satisfies readonly (keyof NiceCxoneFullApiMaskingGeneratedClient)[];

export function createNiceCxoneFullApiMaskingGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiMaskingGeneratedClient {
  return {
    RecordingInteractionsApiDocsPostInteractionMask: (...args) => callOperation("recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask", ...(args as NiceCxoneFullApiOperationArgs<"recording-interactions-api-docs:post-interaction-mask:POST:/interaction-recording-management-service/v1/interactions/mask">)),
    RecordingInteractionsApiDocsPostInteractionUnmask: (...args) => callOperation("recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask", ...(args as NiceCxoneFullApiOperationArgs<"recording-interactions-api-docs:post-interaction-unmask:POST:/interaction-recording-management-service/v1/interactions/unmask">)),
  };
}
