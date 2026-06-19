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
export const FrontFullApiTeammatesOperationKeys = [
  "list-teammates",
  "get-teammate",
  "update-teammate",
  "list-assigned-conversations",
  "list-teammate-inboxes"
] as const;
export type FrontFullApiTeammatesOperationKey = typeof FrontFullApiTeammatesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiTeammatesOperationPathParamMap {
  "list-teammates": {};
  "get-teammate": { "teammate_id": FrontFullApiPathParamValue };
  "update-teammate": { "teammate_id": FrontFullApiPathParamValue };
  "list-assigned-conversations": { "teammate_id": FrontFullApiPathParamValue };
  "list-teammate-inboxes": { "teammate_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiTeammatesOperationRequestMap {
  "list-teammates": FrontFullApiOperationInput<"list-teammates">;
  "get-teammate": FrontFullApiOperationInput<"get-teammate">;
  "update-teammate": FrontFullApiOperationInput<"update-teammate">;
  "list-assigned-conversations": FrontFullApiOperationInput<"list-assigned-conversations">;
  "list-teammate-inboxes": FrontFullApiOperationInput<"list-teammate-inboxes">;
}

export interface FrontFullApiTeammatesGeneratedClient {
  frontListTeammates(...args: FrontFullApiOperationArgs<"list-teammates">): Promise<FrontFullApiOperationResponseMap["list-teammates"]>;
  frontGetTeammate(...args: FrontFullApiOperationArgs<"get-teammate">): Promise<FrontFullApiOperationResponseMap["get-teammate"]>;
  frontUpdateTeammate(...args: FrontFullApiOperationArgs<"update-teammate">): Promise<FrontFullApiOperationResponseMap["update-teammate"]>;
  frontListAssignedConversations(...args: FrontFullApiOperationArgs<"list-assigned-conversations">): Promise<FrontFullApiOperationResponseMap["list-assigned-conversations"]>;
  frontListTeammateInboxes(...args: FrontFullApiOperationArgs<"list-teammate-inboxes">): Promise<FrontFullApiOperationResponseMap["list-teammate-inboxes"]>;
}

export const FrontFullApiTeammatesGeneratedFunctionNames = [
  "frontListTeammates",
  "frontGetTeammate",
  "frontUpdateTeammate",
  "frontListAssignedConversations",
  "frontListTeammateInboxes"
] as const satisfies readonly (keyof FrontFullApiTeammatesGeneratedClient)[];

export function createFrontFullApiTeammatesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiTeammatesGeneratedClient {
  return {
    frontListTeammates: (...args) => callOperation("list-teammates", ...(args as FrontFullApiOperationArgs<"list-teammates">)),
    frontGetTeammate: (...args) => callOperation("get-teammate", ...(args as FrontFullApiOperationArgs<"get-teammate">)),
    frontUpdateTeammate: (...args) => callOperation("update-teammate", ...(args as FrontFullApiOperationArgs<"update-teammate">)),
    frontListAssignedConversations: (...args) => callOperation("list-assigned-conversations", ...(args as FrontFullApiOperationArgs<"list-assigned-conversations">)),
    frontListTeammateInboxes: (...args) => callOperation("list-teammate-inboxes", ...(args as FrontFullApiOperationArgs<"list-teammate-inboxes">)),
  };
}
