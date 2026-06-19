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
export const NiceCxoneFullApiWorkItemsOperationKeys = [
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept",
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject",
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold",
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume",
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"
] as const;
export type NiceCxoneFullApiWorkItemsOperationKey = typeof NiceCxoneFullApiWorkItemsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiWorkItemsOperationPathParamMap {
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiWorkItemsOperationRequestMap {
  "workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": NiceCxoneFullApiOperationInput<"workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">;
  "workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": NiceCxoneFullApiOperationInput<"workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">;
  "workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold": NiceCxoneFullApiOperationInput<"workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">;
  "workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume": NiceCxoneFullApiOperationInput<"workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">;
  "workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": NiceCxoneFullApiOperationInput<"workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">;
}

export interface NiceCxoneFullApiWorkItemsGeneratedClient {
  WorkitemsApiDocsAcceptWorkItem(...args: NiceCxoneFullApiOperationArgs<"workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">): Promise<NiceCxoneFullApiOperationResponseMap["workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept"]>;
  WorkitemsApiDocsRejectWorkItem(...args: NiceCxoneFullApiOperationArgs<"workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">): Promise<NiceCxoneFullApiOperationResponseMap["workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject"]>;
  WorkitemsApiDocsHoldAWorkItem(...args: NiceCxoneFullApiOperationArgs<"workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">): Promise<NiceCxoneFullApiOperationResponseMap["workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold"]>;
  WorkitemsApiDocsResumeAWorkItem(...args: NiceCxoneFullApiOperationArgs<"workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">): Promise<NiceCxoneFullApiOperationResponseMap["workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume"]>;
  WorkitemsApiDocsEndAWorkItem(...args: NiceCxoneFullApiOperationArgs<"workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"]>;
}

export const NiceCxoneFullApiWorkItemsGeneratedFunctionNames = [
  "WorkitemsApiDocsAcceptWorkItem",
  "WorkitemsApiDocsRejectWorkItem",
  "WorkitemsApiDocsHoldAWorkItem",
  "WorkitemsApiDocsResumeAWorkItem",
  "WorkitemsApiDocsEndAWorkItem"
] as const satisfies readonly (keyof NiceCxoneFullApiWorkItemsGeneratedClient)[];

export function createNiceCxoneFullApiWorkItemsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiWorkItemsGeneratedClient {
  return {
    WorkitemsApiDocsAcceptWorkItem: (...args) => callOperation("workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept", ...(args as NiceCxoneFullApiOperationArgs<"workitems-api-docs:acceptWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">)),
    WorkitemsApiDocsRejectWorkItem: (...args) => callOperation("workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject", ...(args as NiceCxoneFullApiOperationArgs<"workitems-api-docs:rejectWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">)),
    WorkitemsApiDocsHoldAWorkItem: (...args) => callOperation("workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold", ...(args as NiceCxoneFullApiOperationArgs<"workitems-api-docs:holdAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/hold">)),
    WorkitemsApiDocsResumeAWorkItem: (...args) => callOperation("workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume", ...(args as NiceCxoneFullApiOperationArgs<"workitems-api-docs:resumeAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/resume">)),
    WorkitemsApiDocsEndAWorkItem: (...args) => callOperation("workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"workitems-api-docs:endAWorkItem:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">)),
  };
}
