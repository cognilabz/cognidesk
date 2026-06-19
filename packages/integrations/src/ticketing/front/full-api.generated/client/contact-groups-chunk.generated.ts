// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiContactGroupsOperationKeys = [
  "list-groups",
  "create-group",
  "delete-group",
  "remove-contacts-from-group",
  "list-contacts-in-group",
  "add-contacts-to-group",
  "list-teammate-groups",
  "create-teammate-group",
  "list-team-groups",
  "create-team-group"
] as const;
export type FrontFullApiContactGroupsOperationKey = typeof FrontFullApiContactGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiContactGroupsOperationPathParamMap {
  "list-groups": {};
  "create-group": {};
  "delete-group": { "contact_group_id": FrontFullApiPathParamValue };
  "remove-contacts-from-group": { "contact_group_id": FrontFullApiPathParamValue };
  "list-contacts-in-group": { "contact_group_id": FrontFullApiPathParamValue };
  "add-contacts-to-group": { "contact_group_id": FrontFullApiPathParamValue };
  "list-teammate-groups": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-group": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-groups": { "team_id": FrontFullApiPathParamValue };
  "create-team-group": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiContactGroupsOperationRequestMap {
  "list-groups": FrontFullApiOperationInput<"list-groups">;
  "create-group": FrontFullApiOperationInput<"create-group">;
  "delete-group": FrontFullApiOperationInput<"delete-group">;
  "remove-contacts-from-group": FrontFullApiOperationInput<"remove-contacts-from-group">;
  "list-contacts-in-group": FrontFullApiOperationInput<"list-contacts-in-group">;
  "add-contacts-to-group": FrontFullApiOperationInput<"add-contacts-to-group">;
  "list-teammate-groups": FrontFullApiOperationInput<"list-teammate-groups">;
  "create-teammate-group": FrontFullApiOperationInput<"create-teammate-group">;
  "list-team-groups": FrontFullApiOperationInput<"list-team-groups">;
  "create-team-group": FrontFullApiOperationInput<"create-team-group">;
}

export interface FrontFullApiContactGroupsGeneratedClient {
  frontListGroups(...args: FrontFullApiOperationArgs<"list-groups">): Promise<FrontFullApiOperationResponseMap["list-groups"]>;
  frontCreateGroup(...args: FrontFullApiOperationArgs<"create-group">): Promise<FrontFullApiOperationResponseMap["create-group"]>;
  frontDeleteGroup(...args: FrontFullApiOperationArgs<"delete-group">): Promise<FrontFullApiOperationResponseMap["delete-group"]>;
  frontRemoveContactsFromGroup(...args: FrontFullApiOperationArgs<"remove-contacts-from-group">): Promise<FrontFullApiOperationResponseMap["remove-contacts-from-group"]>;
  frontListContactsInGroup(...args: FrontFullApiOperationArgs<"list-contacts-in-group">): Promise<FrontFullApiOperationResponseMap["list-contacts-in-group"]>;
  frontAddContactsToGroup(...args: FrontFullApiOperationArgs<"add-contacts-to-group">): Promise<FrontFullApiOperationResponseMap["add-contacts-to-group"]>;
  frontListTeammateGroups(...args: FrontFullApiOperationArgs<"list-teammate-groups">): Promise<FrontFullApiOperationResponseMap["list-teammate-groups"]>;
  frontCreateTeammateGroup(...args: FrontFullApiOperationArgs<"create-teammate-group">): Promise<FrontFullApiOperationResponseMap["create-teammate-group"]>;
  frontListTeamGroups(...args: FrontFullApiOperationArgs<"list-team-groups">): Promise<FrontFullApiOperationResponseMap["list-team-groups"]>;
  frontCreateTeamGroup(...args: FrontFullApiOperationArgs<"create-team-group">): Promise<FrontFullApiOperationResponseMap["create-team-group"]>;
}

export const FrontFullApiContactGroupsGeneratedFunctionNames = [
  "frontListGroups",
  "frontCreateGroup",
  "frontDeleteGroup",
  "frontRemoveContactsFromGroup",
  "frontListContactsInGroup",
  "frontAddContactsToGroup",
  "frontListTeammateGroups",
  "frontCreateTeammateGroup",
  "frontListTeamGroups",
  "frontCreateTeamGroup"
] as const satisfies readonly (keyof FrontFullApiContactGroupsGeneratedClient)[];

export function createFrontFullApiContactGroupsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiContactGroupsGeneratedClient {
  return {
    frontListGroups: (...args) => callOperation("list-groups", ...(args as FrontFullApiOperationArgs<"list-groups">)),
    frontCreateGroup: (...args) => callOperation("create-group", ...(args as FrontFullApiOperationArgs<"create-group">)),
    frontDeleteGroup: (...args) => callOperation("delete-group", ...(args as FrontFullApiOperationArgs<"delete-group">)),
    frontRemoveContactsFromGroup: (...args) => callOperation("remove-contacts-from-group", ...(args as FrontFullApiOperationArgs<"remove-contacts-from-group">)),
    frontListContactsInGroup: (...args) => callOperation("list-contacts-in-group", ...(args as FrontFullApiOperationArgs<"list-contacts-in-group">)),
    frontAddContactsToGroup: (...args) => callOperation("add-contacts-to-group", ...(args as FrontFullApiOperationArgs<"add-contacts-to-group">)),
    frontListTeammateGroups: (...args) => callOperation("list-teammate-groups", ...(args as FrontFullApiOperationArgs<"list-teammate-groups">)),
    frontCreateTeammateGroup: (...args) => callOperation("create-teammate-group", ...(args as FrontFullApiOperationArgs<"create-teammate-group">)),
    frontListTeamGroups: (...args) => callOperation("list-team-groups", ...(args as FrontFullApiOperationArgs<"list-team-groups">)),
    frontCreateTeamGroup: (...args) => callOperation("create-team-group", ...(args as FrontFullApiOperationArgs<"create-team-group">)),
  };
}
