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
export const TalkdeskFullApiGuardianAPIOperationKeys = [
  "LogsResource_getSessionsOdata",
  "AgentsResource_getAllAgentsOdata",
  "AgentsResource_getAgent",
  "getAgentRoles",
  "CasesResource_getCasesOdata",
  "UsersResource_getAllUsersOdata",
  "UsersResource_getUsers",
  "UsersResource_getUserRoles",
  "CallsResource_getCallQualityOdata"
] as const;
export type TalkdeskFullApiGuardianAPIOperationKey = typeof TalkdeskFullApiGuardianAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiGuardianAPIOperationPathParamMap {
  "LogsResource_getSessionsOdata": {};
  "AgentsResource_getAllAgentsOdata": {};
  "AgentsResource_getAgent": { "id": TalkdeskFullApiPathParamValue };
  "getAgentRoles": { "id": TalkdeskFullApiPathParamValue };
  "CasesResource_getCasesOdata": {};
  "UsersResource_getAllUsersOdata": {};
  "UsersResource_getUsers": { "id": TalkdeskFullApiPathParamValue };
  "UsersResource_getUserRoles": { "id": TalkdeskFullApiPathParamValue };
  "CallsResource_getCallQualityOdata": {};
}

export interface TalkdeskFullApiGuardianAPIOperationRequestMap {
  "LogsResource_getSessionsOdata": TalkdeskFullApiOperationInput<"LogsResource_getSessionsOdata">;
  "AgentsResource_getAllAgentsOdata": TalkdeskFullApiOperationInput<"AgentsResource_getAllAgentsOdata">;
  "AgentsResource_getAgent": TalkdeskFullApiOperationInput<"AgentsResource_getAgent">;
  "getAgentRoles": TalkdeskFullApiOperationInput<"getAgentRoles">;
  "CasesResource_getCasesOdata": TalkdeskFullApiOperationInput<"CasesResource_getCasesOdata">;
  "UsersResource_getAllUsersOdata": TalkdeskFullApiOperationInput<"UsersResource_getAllUsersOdata">;
  "UsersResource_getUsers": TalkdeskFullApiOperationInput<"UsersResource_getUsers">;
  "UsersResource_getUserRoles": TalkdeskFullApiOperationInput<"UsersResource_getUserRoles">;
  "CallsResource_getCallQualityOdata": TalkdeskFullApiOperationInput<"CallsResource_getCallQualityOdata">;
}

export interface TalkdeskFullApiGuardianAPIGeneratedClient {
  LogsResourceGetSessionsOdata(...args: TalkdeskFullApiOperationArgs<"LogsResource_getSessionsOdata">): Promise<TalkdeskFullApiOperationResponseMap["LogsResource_getSessionsOdata"]>;
  AgentsResourceGetAllAgentsOdata(...args: TalkdeskFullApiOperationArgs<"AgentsResource_getAllAgentsOdata">): Promise<TalkdeskFullApiOperationResponseMap["AgentsResource_getAllAgentsOdata"]>;
  AgentsResourceGetAgent(...args: TalkdeskFullApiOperationArgs<"AgentsResource_getAgent">): Promise<TalkdeskFullApiOperationResponseMap["AgentsResource_getAgent"]>;
  GetAgentRoles(...args: TalkdeskFullApiOperationArgs<"getAgentRoles">): Promise<TalkdeskFullApiOperationResponseMap["getAgentRoles"]>;
  CasesResourceGetCasesOdata(...args: TalkdeskFullApiOperationArgs<"CasesResource_getCasesOdata">): Promise<TalkdeskFullApiOperationResponseMap["CasesResource_getCasesOdata"]>;
  UsersResourceGetAllUsersOdata(...args: TalkdeskFullApiOperationArgs<"UsersResource_getAllUsersOdata">): Promise<TalkdeskFullApiOperationResponseMap["UsersResource_getAllUsersOdata"]>;
  UsersResourceGetUsers(...args: TalkdeskFullApiOperationArgs<"UsersResource_getUsers">): Promise<TalkdeskFullApiOperationResponseMap["UsersResource_getUsers"]>;
  UsersResourceGetUserRoles(...args: TalkdeskFullApiOperationArgs<"UsersResource_getUserRoles">): Promise<TalkdeskFullApiOperationResponseMap["UsersResource_getUserRoles"]>;
  CallsResourceGetCallQualityOdata(...args: TalkdeskFullApiOperationArgs<"CallsResource_getCallQualityOdata">): Promise<TalkdeskFullApiOperationResponseMap["CallsResource_getCallQualityOdata"]>;
}

export const TalkdeskFullApiGuardianAPIGeneratedFunctionNames = [
  "LogsResourceGetSessionsOdata",
  "AgentsResourceGetAllAgentsOdata",
  "AgentsResourceGetAgent",
  "GetAgentRoles",
  "CasesResourceGetCasesOdata",
  "UsersResourceGetAllUsersOdata",
  "UsersResourceGetUsers",
  "UsersResourceGetUserRoles",
  "CallsResourceGetCallQualityOdata"
] as const satisfies readonly (keyof TalkdeskFullApiGuardianAPIGeneratedClient)[];

export function createTalkdeskFullApiGuardianAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiGuardianAPIGeneratedClient {
  return {
    LogsResourceGetSessionsOdata: (...args) => callOperation("LogsResource_getSessionsOdata", ...(args as TalkdeskFullApiOperationArgs<"LogsResource_getSessionsOdata">)),
    AgentsResourceGetAllAgentsOdata: (...args) => callOperation("AgentsResource_getAllAgentsOdata", ...(args as TalkdeskFullApiOperationArgs<"AgentsResource_getAllAgentsOdata">)),
    AgentsResourceGetAgent: (...args) => callOperation("AgentsResource_getAgent", ...(args as TalkdeskFullApiOperationArgs<"AgentsResource_getAgent">)),
    GetAgentRoles: (...args) => callOperation("getAgentRoles", ...(args as TalkdeskFullApiOperationArgs<"getAgentRoles">)),
    CasesResourceGetCasesOdata: (...args) => callOperation("CasesResource_getCasesOdata", ...(args as TalkdeskFullApiOperationArgs<"CasesResource_getCasesOdata">)),
    UsersResourceGetAllUsersOdata: (...args) => callOperation("UsersResource_getAllUsersOdata", ...(args as TalkdeskFullApiOperationArgs<"UsersResource_getAllUsersOdata">)),
    UsersResourceGetUsers: (...args) => callOperation("UsersResource_getUsers", ...(args as TalkdeskFullApiOperationArgs<"UsersResource_getUsers">)),
    UsersResourceGetUserRoles: (...args) => callOperation("UsersResource_getUserRoles", ...(args as TalkdeskFullApiOperationArgs<"UsersResource_getUserRoles">)),
    CallsResourceGetCallQualityOdata: (...args) => callOperation("CallsResource_getCallQualityOdata", ...(args as TalkdeskFullApiOperationArgs<"CallsResource_getCallQualityOdata">)),
  };
}
