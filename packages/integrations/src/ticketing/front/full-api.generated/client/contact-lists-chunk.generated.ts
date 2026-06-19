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
export const FrontFullApiContactListsOperationKeys = [
  "list-contact-lists",
  "create-contact-list",
  "delete-contact-list",
  "remove-contacts-from-contact-list",
  "list-contacts-in-contact-list",
  "add-contacts-to-contact-list",
  "list-teammate-contact-lists",
  "create-teammate-contact-list",
  "list-team-contact-lists",
  "create-team-contact-list"
] as const;
export type FrontFullApiContactListsOperationKey = typeof FrontFullApiContactListsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiContactListsOperationPathParamMap {
  "list-contact-lists": {};
  "create-contact-list": {};
  "delete-contact-list": { "contact_list_id": FrontFullApiPathParamValue };
  "remove-contacts-from-contact-list": { "contact_list_id": FrontFullApiPathParamValue };
  "list-contacts-in-contact-list": { "contact_list_id": FrontFullApiPathParamValue };
  "add-contacts-to-contact-list": { "contact_list_id": FrontFullApiPathParamValue };
  "list-teammate-contact-lists": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-contact-list": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-contact-lists": { "team_id": FrontFullApiPathParamValue };
  "create-team-contact-list": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiContactListsOperationRequestMap {
  "list-contact-lists": FrontFullApiOperationInput<"list-contact-lists">;
  "create-contact-list": FrontFullApiOperationInput<"create-contact-list">;
  "delete-contact-list": FrontFullApiOperationInput<"delete-contact-list">;
  "remove-contacts-from-contact-list": FrontFullApiOperationInput<"remove-contacts-from-contact-list">;
  "list-contacts-in-contact-list": FrontFullApiOperationInput<"list-contacts-in-contact-list">;
  "add-contacts-to-contact-list": FrontFullApiOperationInput<"add-contacts-to-contact-list">;
  "list-teammate-contact-lists": FrontFullApiOperationInput<"list-teammate-contact-lists">;
  "create-teammate-contact-list": FrontFullApiOperationInput<"create-teammate-contact-list">;
  "list-team-contact-lists": FrontFullApiOperationInput<"list-team-contact-lists">;
  "create-team-contact-list": FrontFullApiOperationInput<"create-team-contact-list">;
}

export interface FrontFullApiContactListsGeneratedClient {
  frontListContactLists(...args: FrontFullApiOperationArgs<"list-contact-lists">): Promise<FrontFullApiOperationResponseMap["list-contact-lists"]>;
  frontCreateContactList(...args: FrontFullApiOperationArgs<"create-contact-list">): Promise<FrontFullApiOperationResponseMap["create-contact-list"]>;
  frontDeleteContactList(...args: FrontFullApiOperationArgs<"delete-contact-list">): Promise<FrontFullApiOperationResponseMap["delete-contact-list"]>;
  frontRemoveContactsFromContactList(...args: FrontFullApiOperationArgs<"remove-contacts-from-contact-list">): Promise<FrontFullApiOperationResponseMap["remove-contacts-from-contact-list"]>;
  frontListContactsInContactList(...args: FrontFullApiOperationArgs<"list-contacts-in-contact-list">): Promise<FrontFullApiOperationResponseMap["list-contacts-in-contact-list"]>;
  frontAddContactsToContactList(...args: FrontFullApiOperationArgs<"add-contacts-to-contact-list">): Promise<FrontFullApiOperationResponseMap["add-contacts-to-contact-list"]>;
  frontListTeammateContactLists(...args: FrontFullApiOperationArgs<"list-teammate-contact-lists">): Promise<FrontFullApiOperationResponseMap["list-teammate-contact-lists"]>;
  frontCreateTeammateContactList(...args: FrontFullApiOperationArgs<"create-teammate-contact-list">): Promise<FrontFullApiOperationResponseMap["create-teammate-contact-list"]>;
  frontListTeamContactLists(...args: FrontFullApiOperationArgs<"list-team-contact-lists">): Promise<FrontFullApiOperationResponseMap["list-team-contact-lists"]>;
  frontCreateTeamContactList(...args: FrontFullApiOperationArgs<"create-team-contact-list">): Promise<FrontFullApiOperationResponseMap["create-team-contact-list"]>;
}

export const FrontFullApiContactListsGeneratedFunctionNames = [
  "frontListContactLists",
  "frontCreateContactList",
  "frontDeleteContactList",
  "frontRemoveContactsFromContactList",
  "frontListContactsInContactList",
  "frontAddContactsToContactList",
  "frontListTeammateContactLists",
  "frontCreateTeammateContactList",
  "frontListTeamContactLists",
  "frontCreateTeamContactList"
] as const satisfies readonly (keyof FrontFullApiContactListsGeneratedClient)[];

export function createFrontFullApiContactListsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiContactListsGeneratedClient {
  return {
    frontListContactLists: (...args) => callOperation("list-contact-lists", ...(args as FrontFullApiOperationArgs<"list-contact-lists">)),
    frontCreateContactList: (...args) => callOperation("create-contact-list", ...(args as FrontFullApiOperationArgs<"create-contact-list">)),
    frontDeleteContactList: (...args) => callOperation("delete-contact-list", ...(args as FrontFullApiOperationArgs<"delete-contact-list">)),
    frontRemoveContactsFromContactList: (...args) => callOperation("remove-contacts-from-contact-list", ...(args as FrontFullApiOperationArgs<"remove-contacts-from-contact-list">)),
    frontListContactsInContactList: (...args) => callOperation("list-contacts-in-contact-list", ...(args as FrontFullApiOperationArgs<"list-contacts-in-contact-list">)),
    frontAddContactsToContactList: (...args) => callOperation("add-contacts-to-contact-list", ...(args as FrontFullApiOperationArgs<"add-contacts-to-contact-list">)),
    frontListTeammateContactLists: (...args) => callOperation("list-teammate-contact-lists", ...(args as FrontFullApiOperationArgs<"list-teammate-contact-lists">)),
    frontCreateTeammateContactList: (...args) => callOperation("create-teammate-contact-list", ...(args as FrontFullApiOperationArgs<"create-teammate-contact-list">)),
    frontListTeamContactLists: (...args) => callOperation("list-team-contact-lists", ...(args as FrontFullApiOperationArgs<"list-team-contact-lists">)),
    frontCreateTeamContactList: (...args) => callOperation("create-team-contact-list", ...(args as FrontFullApiOperationArgs<"create-team-contact-list">)),
  };
}
