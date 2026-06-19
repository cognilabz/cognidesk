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
export const FrontFullApiContactsOperationKeys = [
  "list-contacts",
  "create-contact",
  "delete-a-contact",
  "get-contact",
  "update-a-contact",
  "list-contact-conversations",
  "merge-contacts",
  "list-teammate-contacts",
  "create-teammate-contact",
  "list-team-contacts",
  "create-team-contact"
] as const;
export type FrontFullApiContactsOperationKey = typeof FrontFullApiContactsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiContactsOperationPathParamMap {
  "list-contacts": {};
  "create-contact": {};
  "delete-a-contact": { "contact_id": FrontFullApiPathParamValue };
  "get-contact": { "contact_id": FrontFullApiPathParamValue };
  "update-a-contact": { "contact_id": FrontFullApiPathParamValue };
  "list-contact-conversations": { "contact_id": FrontFullApiPathParamValue };
  "merge-contacts": {};
  "list-teammate-contacts": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-contact": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-contacts": { "team_id": FrontFullApiPathParamValue };
  "create-team-contact": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiContactsOperationRequestMap {
  "list-contacts": FrontFullApiOperationInput<"list-contacts">;
  "create-contact": FrontFullApiOperationInput<"create-contact">;
  "delete-a-contact": FrontFullApiOperationInput<"delete-a-contact">;
  "get-contact": FrontFullApiOperationInput<"get-contact">;
  "update-a-contact": FrontFullApiOperationInput<"update-a-contact">;
  "list-contact-conversations": FrontFullApiOperationInput<"list-contact-conversations">;
  "merge-contacts": FrontFullApiOperationInput<"merge-contacts">;
  "list-teammate-contacts": FrontFullApiOperationInput<"list-teammate-contacts">;
  "create-teammate-contact": FrontFullApiOperationInput<"create-teammate-contact">;
  "list-team-contacts": FrontFullApiOperationInput<"list-team-contacts">;
  "create-team-contact": FrontFullApiOperationInput<"create-team-contact">;
}

export interface FrontFullApiContactsGeneratedClient {
  frontListContacts(...args: FrontFullApiOperationArgs<"list-contacts">): Promise<FrontFullApiOperationResponseMap["list-contacts"]>;
  frontCreateContact(...args: FrontFullApiOperationArgs<"create-contact">): Promise<FrontFullApiOperationResponseMap["create-contact"]>;
  frontDeleteAContact(...args: FrontFullApiOperationArgs<"delete-a-contact">): Promise<FrontFullApiOperationResponseMap["delete-a-contact"]>;
  frontGetContact(...args: FrontFullApiOperationArgs<"get-contact">): Promise<FrontFullApiOperationResponseMap["get-contact"]>;
  frontUpdateAContact(...args: FrontFullApiOperationArgs<"update-a-contact">): Promise<FrontFullApiOperationResponseMap["update-a-contact"]>;
  frontListContactConversations(...args: FrontFullApiOperationArgs<"list-contact-conversations">): Promise<FrontFullApiOperationResponseMap["list-contact-conversations"]>;
  frontMergeContacts(...args: FrontFullApiOperationArgs<"merge-contacts">): Promise<FrontFullApiOperationResponseMap["merge-contacts"]>;
  frontListTeammateContacts(...args: FrontFullApiOperationArgs<"list-teammate-contacts">): Promise<FrontFullApiOperationResponseMap["list-teammate-contacts"]>;
  frontCreateTeammateContact(...args: FrontFullApiOperationArgs<"create-teammate-contact">): Promise<FrontFullApiOperationResponseMap["create-teammate-contact"]>;
  frontListTeamContacts(...args: FrontFullApiOperationArgs<"list-team-contacts">): Promise<FrontFullApiOperationResponseMap["list-team-contacts"]>;
  frontCreateTeamContact(...args: FrontFullApiOperationArgs<"create-team-contact">): Promise<FrontFullApiOperationResponseMap["create-team-contact"]>;
}

export const FrontFullApiContactsGeneratedFunctionNames = [
  "frontListContacts",
  "frontCreateContact",
  "frontDeleteAContact",
  "frontGetContact",
  "frontUpdateAContact",
  "frontListContactConversations",
  "frontMergeContacts",
  "frontListTeammateContacts",
  "frontCreateTeammateContact",
  "frontListTeamContacts",
  "frontCreateTeamContact"
] as const satisfies readonly (keyof FrontFullApiContactsGeneratedClient)[];

export function createFrontFullApiContactsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiContactsGeneratedClient {
  return {
    frontListContacts: (...args) => callOperation("list-contacts", ...(args as FrontFullApiOperationArgs<"list-contacts">)),
    frontCreateContact: (...args) => callOperation("create-contact", ...(args as FrontFullApiOperationArgs<"create-contact">)),
    frontDeleteAContact: (...args) => callOperation("delete-a-contact", ...(args as FrontFullApiOperationArgs<"delete-a-contact">)),
    frontGetContact: (...args) => callOperation("get-contact", ...(args as FrontFullApiOperationArgs<"get-contact">)),
    frontUpdateAContact: (...args) => callOperation("update-a-contact", ...(args as FrontFullApiOperationArgs<"update-a-contact">)),
    frontListContactConversations: (...args) => callOperation("list-contact-conversations", ...(args as FrontFullApiOperationArgs<"list-contact-conversations">)),
    frontMergeContacts: (...args) => callOperation("merge-contacts", ...(args as FrontFullApiOperationArgs<"merge-contacts">)),
    frontListTeammateContacts: (...args) => callOperation("list-teammate-contacts", ...(args as FrontFullApiOperationArgs<"list-teammate-contacts">)),
    frontCreateTeammateContact: (...args) => callOperation("create-teammate-contact", ...(args as FrontFullApiOperationArgs<"create-teammate-contact">)),
    frontListTeamContacts: (...args) => callOperation("list-team-contacts", ...(args as FrontFullApiOperationArgs<"list-team-contacts">)),
    frontCreateTeamContact: (...args) => callOperation("create-team-contact", ...(args as FrontFullApiOperationArgs<"create-team-contact">)),
  };
}
