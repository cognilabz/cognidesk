// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiSessionsOperationKeys = [
  "BulkDeleteSessionsByUserId",
  "DeleteAuthenticatedSession",
  "DeleteSession",
  "ListSessions",
  "ListUserSessions",
  "RenewCurrentSession",
  "ShowCurrentlyAuthenticatedSession",
  "ShowSession"
] as const;
export type ZendeskFullApiSessionsOperationKey = typeof ZendeskFullApiSessionsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSessionsOperationPathParamMap {
  "BulkDeleteSessionsByUserId": { "user_id": ZendeskFullApiPathParamValue };
  "DeleteAuthenticatedSession": {};
  "DeleteSession": { "user_id": ZendeskFullApiPathParamValue; "session_id": ZendeskFullApiPathParamValue };
  "ListSessions": {};
  "ListUserSessions": { "user_id": ZendeskFullApiPathParamValue };
  "RenewCurrentSession": {};
  "ShowCurrentlyAuthenticatedSession": {};
  "ShowSession": { "user_id": ZendeskFullApiPathParamValue; "session_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSessionsOperationRequestMap {
  "BulkDeleteSessionsByUserId": ZendeskFullApiOperationInput<"BulkDeleteSessionsByUserId">;
  "DeleteAuthenticatedSession": ZendeskFullApiOperationInput<"DeleteAuthenticatedSession">;
  "DeleteSession": ZendeskFullApiOperationInput<"DeleteSession">;
  "ListSessions": ZendeskFullApiOperationInput<"ListSessions">;
  "ListUserSessions": ZendeskFullApiOperationInput<"ListUserSessions">;
  "RenewCurrentSession": ZendeskFullApiOperationInput<"RenewCurrentSession">;
  "ShowCurrentlyAuthenticatedSession": ZendeskFullApiOperationInput<"ShowCurrentlyAuthenticatedSession">;
  "ShowSession": ZendeskFullApiOperationInput<"ShowSession">;
}

export interface ZendeskFullApiSessionsGeneratedClient {
  BulkDeleteSessionsByUserId(...args: ZendeskFullApiOperationArgs<"BulkDeleteSessionsByUserId">): Promise<ZendeskFullApiOperationResponseMap["BulkDeleteSessionsByUserId"]>;
  DeleteAuthenticatedSession(...args: ZendeskFullApiOperationArgs<"DeleteAuthenticatedSession">): Promise<ZendeskFullApiOperationResponseMap["DeleteAuthenticatedSession"]>;
  DeleteSession(...args: ZendeskFullApiOperationArgs<"DeleteSession">): Promise<ZendeskFullApiOperationResponseMap["DeleteSession"]>;
  ListSessions(...args: ZendeskFullApiOperationArgs<"ListSessions">): Promise<ZendeskFullApiOperationResponseMap["ListSessions"]>;
  ListUserSessions(...args: ZendeskFullApiOperationArgs<"ListUserSessions">): Promise<ZendeskFullApiOperationResponseMap["ListUserSessions"]>;
  RenewCurrentSession(...args: ZendeskFullApiOperationArgs<"RenewCurrentSession">): Promise<ZendeskFullApiOperationResponseMap["RenewCurrentSession"]>;
  ShowCurrentlyAuthenticatedSession(...args: ZendeskFullApiOperationArgs<"ShowCurrentlyAuthenticatedSession">): Promise<ZendeskFullApiOperationResponseMap["ShowCurrentlyAuthenticatedSession"]>;
  ShowSession(...args: ZendeskFullApiOperationArgs<"ShowSession">): Promise<ZendeskFullApiOperationResponseMap["ShowSession"]>;
}

export const ZendeskFullApiSessionsGeneratedFunctionNames = [
  "BulkDeleteSessionsByUserId",
  "DeleteAuthenticatedSession",
  "DeleteSession",
  "ListSessions",
  "ListUserSessions",
  "RenewCurrentSession",
  "ShowCurrentlyAuthenticatedSession",
  "ShowSession"
] as const satisfies readonly (keyof ZendeskFullApiSessionsGeneratedClient)[];

export function createZendeskFullApiSessionsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSessionsGeneratedClient {
  return {
    BulkDeleteSessionsByUserId: (...args) => callOperation("BulkDeleteSessionsByUserId", ...(args as ZendeskFullApiOperationArgs<"BulkDeleteSessionsByUserId">)),
    DeleteAuthenticatedSession: (...args) => callOperation("DeleteAuthenticatedSession", ...(args as ZendeskFullApiOperationArgs<"DeleteAuthenticatedSession">)),
    DeleteSession: (...args) => callOperation("DeleteSession", ...(args as ZendeskFullApiOperationArgs<"DeleteSession">)),
    ListSessions: (...args) => callOperation("ListSessions", ...(args as ZendeskFullApiOperationArgs<"ListSessions">)),
    ListUserSessions: (...args) => callOperation("ListUserSessions", ...(args as ZendeskFullApiOperationArgs<"ListUserSessions">)),
    RenewCurrentSession: (...args) => callOperation("RenewCurrentSession", ...(args as ZendeskFullApiOperationArgs<"RenewCurrentSession">)),
    ShowCurrentlyAuthenticatedSession: (...args) => callOperation("ShowCurrentlyAuthenticatedSession", ...(args as ZendeskFullApiOperationArgs<"ShowCurrentlyAuthenticatedSession">)),
    ShowSession: (...args) => callOperation("ShowSession", ...(args as ZendeskFullApiOperationArgs<"ShowSession">)),
  };
}
