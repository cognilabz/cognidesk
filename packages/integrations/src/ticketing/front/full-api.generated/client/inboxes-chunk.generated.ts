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
export const FrontFullApiInboxesOperationKeys = [
  "list-inboxes",
  "create-inbox",
  "get-inbox",
  "list-inbox-channels",
  "list-inbox-conversations",
  "removes-inbox-access",
  "list-inbox-access",
  "add-inbox-access",
  "list-teammate-private-inboxes",
  "create-teammate-private-inbox",
  "list-team-inboxes",
  "create-team-inbox"
] as const;
export type FrontFullApiInboxesOperationKey = typeof FrontFullApiInboxesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiInboxesOperationPathParamMap {
  "list-inboxes": {};
  "create-inbox": {};
  "get-inbox": { "inbox_id": FrontFullApiPathParamValue };
  "list-inbox-channels": { "inbox_id": FrontFullApiPathParamValue };
  "list-inbox-conversations": { "inbox_id": FrontFullApiPathParamValue };
  "removes-inbox-access": { "inbox_id": FrontFullApiPathParamValue };
  "list-inbox-access": { "inbox_id": FrontFullApiPathParamValue };
  "add-inbox-access": { "inbox_id": FrontFullApiPathParamValue };
  "list-teammate-private-inboxes": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-private-inbox": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-inboxes": { "team_id": FrontFullApiPathParamValue };
  "create-team-inbox": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiInboxesOperationRequestMap {
  "list-inboxes": FrontFullApiOperationInput<"list-inboxes">;
  "create-inbox": FrontFullApiOperationInput<"create-inbox">;
  "get-inbox": FrontFullApiOperationInput<"get-inbox">;
  "list-inbox-channels": FrontFullApiOperationInput<"list-inbox-channels">;
  "list-inbox-conversations": FrontFullApiOperationInput<"list-inbox-conversations">;
  "removes-inbox-access": FrontFullApiOperationInput<"removes-inbox-access">;
  "list-inbox-access": FrontFullApiOperationInput<"list-inbox-access">;
  "add-inbox-access": FrontFullApiOperationInput<"add-inbox-access">;
  "list-teammate-private-inboxes": FrontFullApiOperationInput<"list-teammate-private-inboxes">;
  "create-teammate-private-inbox": FrontFullApiOperationInput<"create-teammate-private-inbox">;
  "list-team-inboxes": FrontFullApiOperationInput<"list-team-inboxes">;
  "create-team-inbox": FrontFullApiOperationInput<"create-team-inbox">;
}

export interface FrontFullApiInboxesGeneratedClient {
  frontListInboxes(...args: FrontFullApiOperationArgs<"list-inboxes">): Promise<FrontFullApiOperationResponseMap["list-inboxes"]>;
  frontCreateInbox(...args: FrontFullApiOperationArgs<"create-inbox">): Promise<FrontFullApiOperationResponseMap["create-inbox"]>;
  frontGetInbox(...args: FrontFullApiOperationArgs<"get-inbox">): Promise<FrontFullApiOperationResponseMap["get-inbox"]>;
  frontListInboxChannels(...args: FrontFullApiOperationArgs<"list-inbox-channels">): Promise<FrontFullApiOperationResponseMap["list-inbox-channels"]>;
  frontListInboxConversations(...args: FrontFullApiOperationArgs<"list-inbox-conversations">): Promise<FrontFullApiOperationResponseMap["list-inbox-conversations"]>;
  frontRemovesInboxAccess(...args: FrontFullApiOperationArgs<"removes-inbox-access">): Promise<FrontFullApiOperationResponseMap["removes-inbox-access"]>;
  frontListInboxAccess(...args: FrontFullApiOperationArgs<"list-inbox-access">): Promise<FrontFullApiOperationResponseMap["list-inbox-access"]>;
  frontAddInboxAccess(...args: FrontFullApiOperationArgs<"add-inbox-access">): Promise<FrontFullApiOperationResponseMap["add-inbox-access"]>;
  frontListTeammatePrivateInboxes(...args: FrontFullApiOperationArgs<"list-teammate-private-inboxes">): Promise<FrontFullApiOperationResponseMap["list-teammate-private-inboxes"]>;
  frontCreateTeammatePrivateInbox(...args: FrontFullApiOperationArgs<"create-teammate-private-inbox">): Promise<FrontFullApiOperationResponseMap["create-teammate-private-inbox"]>;
  frontListTeamInboxes(...args: FrontFullApiOperationArgs<"list-team-inboxes">): Promise<FrontFullApiOperationResponseMap["list-team-inboxes"]>;
  frontCreateTeamInbox(...args: FrontFullApiOperationArgs<"create-team-inbox">): Promise<FrontFullApiOperationResponseMap["create-team-inbox"]>;
}

export const FrontFullApiInboxesGeneratedFunctionNames = [
  "frontListInboxes",
  "frontCreateInbox",
  "frontGetInbox",
  "frontListInboxChannels",
  "frontListInboxConversations",
  "frontRemovesInboxAccess",
  "frontListInboxAccess",
  "frontAddInboxAccess",
  "frontListTeammatePrivateInboxes",
  "frontCreateTeammatePrivateInbox",
  "frontListTeamInboxes",
  "frontCreateTeamInbox"
] as const satisfies readonly (keyof FrontFullApiInboxesGeneratedClient)[];

export function createFrontFullApiInboxesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiInboxesGeneratedClient {
  return {
    frontListInboxes: (...args) => callOperation("list-inboxes", ...(args as FrontFullApiOperationArgs<"list-inboxes">)),
    frontCreateInbox: (...args) => callOperation("create-inbox", ...(args as FrontFullApiOperationArgs<"create-inbox">)),
    frontGetInbox: (...args) => callOperation("get-inbox", ...(args as FrontFullApiOperationArgs<"get-inbox">)),
    frontListInboxChannels: (...args) => callOperation("list-inbox-channels", ...(args as FrontFullApiOperationArgs<"list-inbox-channels">)),
    frontListInboxConversations: (...args) => callOperation("list-inbox-conversations", ...(args as FrontFullApiOperationArgs<"list-inbox-conversations">)),
    frontRemovesInboxAccess: (...args) => callOperation("removes-inbox-access", ...(args as FrontFullApiOperationArgs<"removes-inbox-access">)),
    frontListInboxAccess: (...args) => callOperation("list-inbox-access", ...(args as FrontFullApiOperationArgs<"list-inbox-access">)),
    frontAddInboxAccess: (...args) => callOperation("add-inbox-access", ...(args as FrontFullApiOperationArgs<"add-inbox-access">)),
    frontListTeammatePrivateInboxes: (...args) => callOperation("list-teammate-private-inboxes", ...(args as FrontFullApiOperationArgs<"list-teammate-private-inboxes">)),
    frontCreateTeammatePrivateInbox: (...args) => callOperation("create-teammate-private-inbox", ...(args as FrontFullApiOperationArgs<"create-teammate-private-inbox">)),
    frontListTeamInboxes: (...args) => callOperation("list-team-inboxes", ...(args as FrontFullApiOperationArgs<"list-team-inboxes">)),
    frontCreateTeamInbox: (...args) => callOperation("create-team-inbox", ...(args as FrontFullApiOperationArgs<"create-team-inbox">)),
  };
}
