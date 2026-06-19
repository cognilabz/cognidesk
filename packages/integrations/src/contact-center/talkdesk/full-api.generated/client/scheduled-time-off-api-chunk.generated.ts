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
export const TalkdeskFullApiScheduledTimeOffAPIOperationKeys = [
  "DeleteTimeOffAionExternal",
  "UpdateTimeOffAionExternal",
  "CreateTimeOffAionExternal",
  "GetAgentCalendarSchedule"
] as const;
export type TalkdeskFullApiScheduledTimeOffAPIOperationKey = typeof TalkdeskFullApiScheduledTimeOffAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiScheduledTimeOffAPIOperationPathParamMap {
  "DeleteTimeOffAionExternal": { "id": TalkdeskFullApiPathParamValue };
  "UpdateTimeOffAionExternal": { "id": TalkdeskFullApiPathParamValue };
  "CreateTimeOffAionExternal": {};
  "GetAgentCalendarSchedule": { "token": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiScheduledTimeOffAPIOperationRequestMap {
  "DeleteTimeOffAionExternal": TalkdeskFullApiOperationInput<"DeleteTimeOffAionExternal">;
  "UpdateTimeOffAionExternal": TalkdeskFullApiOperationInput<"UpdateTimeOffAionExternal">;
  "CreateTimeOffAionExternal": TalkdeskFullApiOperationInput<"CreateTimeOffAionExternal">;
  "GetAgentCalendarSchedule": TalkdeskFullApiOperationInput<"GetAgentCalendarSchedule">;
}

export interface TalkdeskFullApiScheduledTimeOffAPIGeneratedClient {
  DeleteTimeOffAionExternal(...args: TalkdeskFullApiOperationArgs<"DeleteTimeOffAionExternal">): Promise<TalkdeskFullApiOperationResponseMap["DeleteTimeOffAionExternal"]>;
  UpdateTimeOffAionExternal(...args: TalkdeskFullApiOperationArgs<"UpdateTimeOffAionExternal">): Promise<TalkdeskFullApiOperationResponseMap["UpdateTimeOffAionExternal"]>;
  CreateTimeOffAionExternal(...args: TalkdeskFullApiOperationArgs<"CreateTimeOffAionExternal">): Promise<TalkdeskFullApiOperationResponseMap["CreateTimeOffAionExternal"]>;
  GetAgentCalendarSchedule(...args: TalkdeskFullApiOperationArgs<"GetAgentCalendarSchedule">): Promise<TalkdeskFullApiOperationResponseMap["GetAgentCalendarSchedule"]>;
}

export const TalkdeskFullApiScheduledTimeOffAPIGeneratedFunctionNames = [
  "DeleteTimeOffAionExternal",
  "UpdateTimeOffAionExternal",
  "CreateTimeOffAionExternal",
  "GetAgentCalendarSchedule"
] as const satisfies readonly (keyof TalkdeskFullApiScheduledTimeOffAPIGeneratedClient)[];

export function createTalkdeskFullApiScheduledTimeOffAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiScheduledTimeOffAPIGeneratedClient {
  return {
    DeleteTimeOffAionExternal: (...args) => callOperation("DeleteTimeOffAionExternal", ...(args as TalkdeskFullApiOperationArgs<"DeleteTimeOffAionExternal">)),
    UpdateTimeOffAionExternal: (...args) => callOperation("UpdateTimeOffAionExternal", ...(args as TalkdeskFullApiOperationArgs<"UpdateTimeOffAionExternal">)),
    CreateTimeOffAionExternal: (...args) => callOperation("CreateTimeOffAionExternal", ...(args as TalkdeskFullApiOperationArgs<"CreateTimeOffAionExternal">)),
    GetAgentCalendarSchedule: (...args) => callOperation("GetAgentCalendarSchedule", ...(args as TalkdeskFullApiOperationArgs<"GetAgentCalendarSchedule">)),
  };
}
