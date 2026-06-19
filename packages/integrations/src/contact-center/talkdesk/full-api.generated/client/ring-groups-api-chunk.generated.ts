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
export const TalkdeskFullApiRingGroupsAPIOperationKeys = [
  "ring-groups-get",
  "ring-groups-id-users-get",
  "AssignUserRingGroups",
  "UnassignUserRingGroups",
  "UpdateUserRingGroups"
] as const;
export type TalkdeskFullApiRingGroupsAPIOperationKey = typeof TalkdeskFullApiRingGroupsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiRingGroupsAPIOperationPathParamMap {
  "ring-groups-get": {};
  "ring-groups-id-users-get": { "id": TalkdeskFullApiPathParamValue };
  "AssignUserRingGroups": {};
  "UnassignUserRingGroups": {};
  "UpdateUserRingGroups": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiRingGroupsAPIOperationRequestMap {
  "ring-groups-get": TalkdeskFullApiOperationInput<"ring-groups-get">;
  "ring-groups-id-users-get": TalkdeskFullApiOperationInput<"ring-groups-id-users-get">;
  "AssignUserRingGroups": TalkdeskFullApiOperationInput<"AssignUserRingGroups">;
  "UnassignUserRingGroups": TalkdeskFullApiOperationInput<"UnassignUserRingGroups">;
  "UpdateUserRingGroups": TalkdeskFullApiOperationInput<"UpdateUserRingGroups">;
}

export interface TalkdeskFullApiRingGroupsAPIGeneratedClient {
  RingGroupsGet(...args: TalkdeskFullApiOperationArgs<"ring-groups-get">): Promise<TalkdeskFullApiOperationResponseMap["ring-groups-get"]>;
  RingGroupsIdUsersGet(...args: TalkdeskFullApiOperationArgs<"ring-groups-id-users-get">): Promise<TalkdeskFullApiOperationResponseMap["ring-groups-id-users-get"]>;
  AssignUserRingGroups(...args: TalkdeskFullApiOperationArgs<"AssignUserRingGroups">): Promise<TalkdeskFullApiOperationResponseMap["AssignUserRingGroups"]>;
  UnassignUserRingGroups(...args: TalkdeskFullApiOperationArgs<"UnassignUserRingGroups">): Promise<TalkdeskFullApiOperationResponseMap["UnassignUserRingGroups"]>;
  UpdateUserRingGroups(...args: TalkdeskFullApiOperationArgs<"UpdateUserRingGroups">): Promise<TalkdeskFullApiOperationResponseMap["UpdateUserRingGroups"]>;
}

export const TalkdeskFullApiRingGroupsAPIGeneratedFunctionNames = [
  "RingGroupsGet",
  "RingGroupsIdUsersGet",
  "AssignUserRingGroups",
  "UnassignUserRingGroups",
  "UpdateUserRingGroups"
] as const satisfies readonly (keyof TalkdeskFullApiRingGroupsAPIGeneratedClient)[];

export function createTalkdeskFullApiRingGroupsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiRingGroupsAPIGeneratedClient {
  return {
    RingGroupsGet: (...args) => callOperation("ring-groups-get", ...(args as TalkdeskFullApiOperationArgs<"ring-groups-get">)),
    RingGroupsIdUsersGet: (...args) => callOperation("ring-groups-id-users-get", ...(args as TalkdeskFullApiOperationArgs<"ring-groups-id-users-get">)),
    AssignUserRingGroups: (...args) => callOperation("AssignUserRingGroups", ...(args as TalkdeskFullApiOperationArgs<"AssignUserRingGroups">)),
    UnassignUserRingGroups: (...args) => callOperation("UnassignUserRingGroups", ...(args as TalkdeskFullApiOperationArgs<"UnassignUserRingGroups">)),
    UpdateUserRingGroups: (...args) => callOperation("UpdateUserRingGroups", ...(args as TalkdeskFullApiOperationArgs<"UpdateUserRingGroups">)),
  };
}
