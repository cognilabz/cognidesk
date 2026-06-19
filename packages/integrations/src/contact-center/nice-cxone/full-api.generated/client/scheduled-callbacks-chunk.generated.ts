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
export const NiceCxoneFullApiScheduledCallbacksOperationKeys = [
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial",
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule",
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel"
] as const;
export type NiceCxoneFullApiScheduledCallbacksOperationKey = typeof NiceCxoneFullApiScheduledCallbacksOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiScheduledCallbacksOperationPathParamMap {
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": { "sessionId": NiceCxoneFullApiPathParamValue; "callbackId": NiceCxoneFullApiPathParamValue };
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": { "sessionId": NiceCxoneFullApiPathParamValue; "callbackId": NiceCxoneFullApiPathParamValue };
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": { "sessionId": NiceCxoneFullApiPathParamValue; "callbackId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiScheduledCallbacksOperationRequestMap {
  "scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial": NiceCxoneFullApiOperationInput<"scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial">;
  "scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule": NiceCxoneFullApiOperationInput<"scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule">;
  "scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel": NiceCxoneFullApiOperationInput<"scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel">;
}

export interface NiceCxoneFullApiScheduledCallbacksGeneratedClient {
  ScheduledcallbacksApiDocsDialCallback(...args: NiceCxoneFullApiOperationArgs<"scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial">): Promise<NiceCxoneFullApiOperationResponseMap["scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial"]>;
  ScheduledcallbacksApiDocsRescheduleCallback(...args: NiceCxoneFullApiOperationArgs<"scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule">): Promise<NiceCxoneFullApiOperationResponseMap["scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule"]>;
  ScheduledcallbacksApiDocsAgentinteractionscallbackcancel(...args: NiceCxoneFullApiOperationArgs<"scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel">): Promise<NiceCxoneFullApiOperationResponseMap["scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel"]>;
}

export const NiceCxoneFullApiScheduledCallbacksGeneratedFunctionNames = [
  "ScheduledcallbacksApiDocsDialCallback",
  "ScheduledcallbacksApiDocsRescheduleCallback",
  "ScheduledcallbacksApiDocsAgentinteractionscallbackcancel"
] as const satisfies readonly (keyof NiceCxoneFullApiScheduledCallbacksGeneratedClient)[];

export function createNiceCxoneFullApiScheduledCallbacksGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiScheduledCallbacksGeneratedClient {
  return {
    ScheduledcallbacksApiDocsDialCallback: (...args) => callOperation("scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial", ...(args as NiceCxoneFullApiOperationArgs<"scheduledcallbacks-api-docs:DialCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/dial">)),
    ScheduledcallbacksApiDocsRescheduleCallback: (...args) => callOperation("scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule", ...(args as NiceCxoneFullApiOperationArgs<"scheduledcallbacks-api-docs:RescheduleCallback:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/reschedule">)),
    ScheduledcallbacksApiDocsAgentinteractionscallbackcancel: (...args) => callOperation("scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel", ...(args as NiceCxoneFullApiOperationArgs<"scheduledcallbacks-api-docs:agentinteractionscallbackcancel:POST:/agent-sessions/{sessionId}/interactions/{callbackId}/cancel">)),
  };
}
