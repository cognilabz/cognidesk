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
export const TalkdeskFullApiScheduleCallbacksOperationKeys = [
  "listScheduledCallbacks",
  "createScheduledCallback",
  "schedule-callbacks-id-delete",
  "schedule-callbacks-id-patch",
  "schedule-callbacks-id-get"
] as const;
export type TalkdeskFullApiScheduleCallbacksOperationKey = typeof TalkdeskFullApiScheduleCallbacksOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiScheduleCallbacksOperationPathParamMap {
  "listScheduledCallbacks": {};
  "createScheduledCallback": {};
  "schedule-callbacks-id-delete": { "id": TalkdeskFullApiPathParamValue };
  "schedule-callbacks-id-patch": { "id": TalkdeskFullApiPathParamValue };
  "schedule-callbacks-id-get": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiScheduleCallbacksOperationRequestMap {
  "listScheduledCallbacks": TalkdeskFullApiOperationInput<"listScheduledCallbacks">;
  "createScheduledCallback": TalkdeskFullApiOperationInput<"createScheduledCallback">;
  "schedule-callbacks-id-delete": TalkdeskFullApiOperationInput<"schedule-callbacks-id-delete">;
  "schedule-callbacks-id-patch": TalkdeskFullApiOperationInput<"schedule-callbacks-id-patch">;
  "schedule-callbacks-id-get": TalkdeskFullApiOperationInput<"schedule-callbacks-id-get">;
}

export interface TalkdeskFullApiScheduleCallbacksGeneratedClient {
  ListScheduledCallbacks(...args: TalkdeskFullApiOperationArgs<"listScheduledCallbacks">): Promise<TalkdeskFullApiOperationResponseMap["listScheduledCallbacks"]>;
  CreateScheduledCallback(...args: TalkdeskFullApiOperationArgs<"createScheduledCallback">): Promise<TalkdeskFullApiOperationResponseMap["createScheduledCallback"]>;
  ScheduleCallbacksIdDelete(...args: TalkdeskFullApiOperationArgs<"schedule-callbacks-id-delete">): Promise<TalkdeskFullApiOperationResponseMap["schedule-callbacks-id-delete"]>;
  ScheduleCallbacksIdPatch(...args: TalkdeskFullApiOperationArgs<"schedule-callbacks-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["schedule-callbacks-id-patch"]>;
  ScheduleCallbacksIdGet(...args: TalkdeskFullApiOperationArgs<"schedule-callbacks-id-get">): Promise<TalkdeskFullApiOperationResponseMap["schedule-callbacks-id-get"]>;
}

export const TalkdeskFullApiScheduleCallbacksGeneratedFunctionNames = [
  "ListScheduledCallbacks",
  "CreateScheduledCallback",
  "ScheduleCallbacksIdDelete",
  "ScheduleCallbacksIdPatch",
  "ScheduleCallbacksIdGet"
] as const satisfies readonly (keyof TalkdeskFullApiScheduleCallbacksGeneratedClient)[];

export function createTalkdeskFullApiScheduleCallbacksGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiScheduleCallbacksGeneratedClient {
  return {
    ListScheduledCallbacks: (...args) => callOperation("listScheduledCallbacks", ...(args as TalkdeskFullApiOperationArgs<"listScheduledCallbacks">)),
    CreateScheduledCallback: (...args) => callOperation("createScheduledCallback", ...(args as TalkdeskFullApiOperationArgs<"createScheduledCallback">)),
    ScheduleCallbacksIdDelete: (...args) => callOperation("schedule-callbacks-id-delete", ...(args as TalkdeskFullApiOperationArgs<"schedule-callbacks-id-delete">)),
    ScheduleCallbacksIdPatch: (...args) => callOperation("schedule-callbacks-id-patch", ...(args as TalkdeskFullApiOperationArgs<"schedule-callbacks-id-patch">)),
    ScheduleCallbacksIdGet: (...args) => callOperation("schedule-callbacks-id-get", ...(args as TalkdeskFullApiOperationArgs<"schedule-callbacks-id-get">)),
  };
}
