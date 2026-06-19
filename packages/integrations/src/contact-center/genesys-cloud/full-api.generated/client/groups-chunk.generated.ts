// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiGroupsOperationKeys = [
  "deleteGroup",
  "deleteGroupMembers",
  "getGroup",
  "getGroupIndividuals",
  "getGroupMembers",
  "getGroupProfile",
  "getGroups",
  "getGroupsSearch",
  "getProfilesGroups",
  "postGroupMembers",
  "postGroups",
  "postGroupsSearch",
  "putGroup"
] as const;
export type GenesysCloudFullApiGroupsOperationKey = typeof GenesysCloudFullApiGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiGroupsOperationPathParamMap {
  "deleteGroup": { "groupId": GenesysCloudFullApiPathParamValue };
  "deleteGroupMembers": { "groupId": GenesysCloudFullApiPathParamValue };
  "getGroup": { "groupId": GenesysCloudFullApiPathParamValue };
  "getGroupIndividuals": { "groupId": GenesysCloudFullApiPathParamValue };
  "getGroupMembers": { "groupId": GenesysCloudFullApiPathParamValue };
  "getGroupProfile": { "groupId": GenesysCloudFullApiPathParamValue };
  "getGroups": {};
  "getGroupsSearch": {};
  "getProfilesGroups": {};
  "postGroupMembers": { "groupId": GenesysCloudFullApiPathParamValue };
  "postGroups": {};
  "postGroupsSearch": {};
  "putGroup": { "groupId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiGroupsOperationRequestMap {
  "deleteGroup": GenesysCloudFullApiOperationInput<"deleteGroup">;
  "deleteGroupMembers": GenesysCloudFullApiOperationInput<"deleteGroupMembers">;
  "getGroup": GenesysCloudFullApiOperationInput<"getGroup">;
  "getGroupIndividuals": GenesysCloudFullApiOperationInput<"getGroupIndividuals">;
  "getGroupMembers": GenesysCloudFullApiOperationInput<"getGroupMembers">;
  "getGroupProfile": GenesysCloudFullApiOperationInput<"getGroupProfile">;
  "getGroups": GenesysCloudFullApiOperationInput<"getGroups">;
  "getGroupsSearch": GenesysCloudFullApiOperationInput<"getGroupsSearch">;
  "getProfilesGroups": GenesysCloudFullApiOperationInput<"getProfilesGroups">;
  "postGroupMembers": GenesysCloudFullApiOperationInput<"postGroupMembers">;
  "postGroups": GenesysCloudFullApiOperationInput<"postGroups">;
  "postGroupsSearch": GenesysCloudFullApiOperationInput<"postGroupsSearch">;
  "putGroup": GenesysCloudFullApiOperationInput<"putGroup">;
}

export interface GenesysCloudFullApiGroupsGeneratedClient {
  DeleteGroup(...args: GenesysCloudFullApiOperationArgs<"deleteGroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteGroup"]>;
  DeleteGroupMembers(...args: GenesysCloudFullApiOperationArgs<"deleteGroupMembers">): Promise<GenesysCloudFullApiOperationResponseMap["deleteGroupMembers"]>;
  GetGroup(...args: GenesysCloudFullApiOperationArgs<"getGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getGroup"]>;
  GetGroupIndividuals(...args: GenesysCloudFullApiOperationArgs<"getGroupIndividuals">): Promise<GenesysCloudFullApiOperationResponseMap["getGroupIndividuals"]>;
  GetGroupMembers(...args: GenesysCloudFullApiOperationArgs<"getGroupMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getGroupMembers"]>;
  GetGroupProfile(...args: GenesysCloudFullApiOperationArgs<"getGroupProfile">): Promise<GenesysCloudFullApiOperationResponseMap["getGroupProfile"]>;
  GetGroups(...args: GenesysCloudFullApiOperationArgs<"getGroups">): Promise<GenesysCloudFullApiOperationResponseMap["getGroups"]>;
  GetGroupsSearch(...args: GenesysCloudFullApiOperationArgs<"getGroupsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getGroupsSearch"]>;
  GetProfilesGroups(...args: GenesysCloudFullApiOperationArgs<"getProfilesGroups">): Promise<GenesysCloudFullApiOperationResponseMap["getProfilesGroups"]>;
  PostGroupMembers(...args: GenesysCloudFullApiOperationArgs<"postGroupMembers">): Promise<GenesysCloudFullApiOperationResponseMap["postGroupMembers"]>;
  PostGroups(...args: GenesysCloudFullApiOperationArgs<"postGroups">): Promise<GenesysCloudFullApiOperationResponseMap["postGroups"]>;
  PostGroupsSearch(...args: GenesysCloudFullApiOperationArgs<"postGroupsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postGroupsSearch"]>;
  PutGroup(...args: GenesysCloudFullApiOperationArgs<"putGroup">): Promise<GenesysCloudFullApiOperationResponseMap["putGroup"]>;
}

export const GenesysCloudFullApiGroupsGeneratedFunctionNames = [
  "DeleteGroup",
  "DeleteGroupMembers",
  "GetGroup",
  "GetGroupIndividuals",
  "GetGroupMembers",
  "GetGroupProfile",
  "GetGroups",
  "GetGroupsSearch",
  "GetProfilesGroups",
  "PostGroupMembers",
  "PostGroups",
  "PostGroupsSearch",
  "PutGroup"
] as const satisfies readonly (keyof GenesysCloudFullApiGroupsGeneratedClient)[];

export function createGenesysCloudFullApiGroupsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiGroupsGeneratedClient {
  return {
    DeleteGroup: (...args) => callOperation("deleteGroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteGroup">)),
    DeleteGroupMembers: (...args) => callOperation("deleteGroupMembers", ...(args as GenesysCloudFullApiOperationArgs<"deleteGroupMembers">)),
    GetGroup: (...args) => callOperation("getGroup", ...(args as GenesysCloudFullApiOperationArgs<"getGroup">)),
    GetGroupIndividuals: (...args) => callOperation("getGroupIndividuals", ...(args as GenesysCloudFullApiOperationArgs<"getGroupIndividuals">)),
    GetGroupMembers: (...args) => callOperation("getGroupMembers", ...(args as GenesysCloudFullApiOperationArgs<"getGroupMembers">)),
    GetGroupProfile: (...args) => callOperation("getGroupProfile", ...(args as GenesysCloudFullApiOperationArgs<"getGroupProfile">)),
    GetGroups: (...args) => callOperation("getGroups", ...(args as GenesysCloudFullApiOperationArgs<"getGroups">)),
    GetGroupsSearch: (...args) => callOperation("getGroupsSearch", ...(args as GenesysCloudFullApiOperationArgs<"getGroupsSearch">)),
    GetProfilesGroups: (...args) => callOperation("getProfilesGroups", ...(args as GenesysCloudFullApiOperationArgs<"getProfilesGroups">)),
    PostGroupMembers: (...args) => callOperation("postGroupMembers", ...(args as GenesysCloudFullApiOperationArgs<"postGroupMembers">)),
    PostGroups: (...args) => callOperation("postGroups", ...(args as GenesysCloudFullApiOperationArgs<"postGroups">)),
    PostGroupsSearch: (...args) => callOperation("postGroupsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postGroupsSearch">)),
    PutGroup: (...args) => callOperation("putGroup", ...(args as GenesysCloudFullApiOperationArgs<"putGroup">)),
  };
}
