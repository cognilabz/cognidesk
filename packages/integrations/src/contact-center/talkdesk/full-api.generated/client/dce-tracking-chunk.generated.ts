// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiDCETrackingOperationKeys = [
  "interactions_elimination"
] as const;
export type TalkdeskFullApiDCETrackingOperationKey = typeof TalkdeskFullApiDCETrackingOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiDCETrackingOperationPathParamMap {
  "interactions_elimination": { "resource_type": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiDCETrackingOperationRequestMap {
  "interactions_elimination": TalkdeskFullApiOperationInput<"interactions_elimination">;
}

export interface TalkdeskFullApiDCETrackingGeneratedClient {
  InteractionsElimination(...args: TalkdeskFullApiOperationArgs<"interactions_elimination">): Promise<TalkdeskFullApiOperationResponseMap["interactions_elimination"]>;
}

export const TalkdeskFullApiDCETrackingGeneratedFunctionNames = [
  "InteractionsElimination"
] as const satisfies readonly (keyof TalkdeskFullApiDCETrackingGeneratedClient)[];

export function createTalkdeskFullApiDCETrackingGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiDCETrackingGeneratedClient {
  return {
    InteractionsElimination: (...args) => callOperation("interactions_elimination", ...(args as TalkdeskFullApiOperationArgs<"interactions_elimination">)),
  };
}
