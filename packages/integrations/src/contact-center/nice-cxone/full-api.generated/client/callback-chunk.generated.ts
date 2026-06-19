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
export const NiceCxoneFullApiCallbackOperationKeys = [
  "patron-callback-api-docs:requestACallback:POST:/queuecallback",
  "patron-callback-api-docs:scheduleACallback:POST:/promise"
] as const;
export type NiceCxoneFullApiCallbackOperationKey = typeof NiceCxoneFullApiCallbackOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiCallbackOperationPathParamMap {
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": {};
  "patron-callback-api-docs:scheduleACallback:POST:/promise": {};
}

export interface NiceCxoneFullApiCallbackOperationRequestMap {
  "patron-callback-api-docs:requestACallback:POST:/queuecallback": NiceCxoneFullApiOperationInput<"patron-callback-api-docs:requestACallback:POST:/queuecallback">;
  "patron-callback-api-docs:scheduleACallback:POST:/promise": NiceCxoneFullApiOperationInput<"patron-callback-api-docs:scheduleACallback:POST:/promise">;
}

export interface NiceCxoneFullApiCallbackGeneratedClient {
  PatronCallbackApiDocsRequestACallback(...args: NiceCxoneFullApiOperationArgs<"patron-callback-api-docs:requestACallback:POST:/queuecallback">): Promise<NiceCxoneFullApiOperationResponseMap["patron-callback-api-docs:requestACallback:POST:/queuecallback"]>;
  PatronCallbackApiDocsScheduleACallback(...args: NiceCxoneFullApiOperationArgs<"patron-callback-api-docs:scheduleACallback:POST:/promise">): Promise<NiceCxoneFullApiOperationResponseMap["patron-callback-api-docs:scheduleACallback:POST:/promise"]>;
}

export const NiceCxoneFullApiCallbackGeneratedFunctionNames = [
  "PatronCallbackApiDocsRequestACallback",
  "PatronCallbackApiDocsScheduleACallback"
] as const satisfies readonly (keyof NiceCxoneFullApiCallbackGeneratedClient)[];

export function createNiceCxoneFullApiCallbackGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiCallbackGeneratedClient {
  return {
    PatronCallbackApiDocsRequestACallback: (...args) => callOperation("patron-callback-api-docs:requestACallback:POST:/queuecallback", ...(args as NiceCxoneFullApiOperationArgs<"patron-callback-api-docs:requestACallback:POST:/queuecallback">)),
    PatronCallbackApiDocsScheduleACallback: (...args) => callOperation("patron-callback-api-docs:scheduleACallback:POST:/promise", ...(args as NiceCxoneFullApiOperationArgs<"patron-callback-api-docs:scheduleACallback:POST:/promise">)),
  };
}
