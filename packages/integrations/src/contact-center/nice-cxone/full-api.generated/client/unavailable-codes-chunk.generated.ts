// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiUnavailableCodesOperationKeys = [
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history",
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status",
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams",
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams",
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams",
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams",
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned",
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}",
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}"
] as const;
export type NiceCxoneFullApiUnavailableCodesOperationKey = typeof NiceCxoneFullApiUnavailableCodesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiUnavailableCodesOperationPathParamMap {
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": { "unavailableCodeId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiUnavailableCodesOperationRequestMap {
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history">;
  "admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status">;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams">;
  "admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams">;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams">;
  "admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams">;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned">;
  "admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}">;
  "admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}": NiceCxoneFullApiOperationInput<"admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}">;
}

export interface NiceCxoneFullApiUnavailableCodesGeneratedClient {
  AdminUnavailablecodesApiDocsGetUnavailableCodesIdAuditHistory(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history"]>;
  AdminUnavailablecodesApiDocsPatchStatusByUnavailableCodesId(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status"]>;
  AdminUnavailablecodesApiDocsGetUnavailableCodesIdTeams(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams"]>;
  AdminUnavailablecodesApiDocsPostUnavailableCodesIdTeams(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams"]>;
  AdminUnavailablecodesApiDocsPutUnavailableCodesIdTeams(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams"]>;
  AdminUnavailablecodesApiDocsDeleteUnavailableCodesIdTeams(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams"]>;
  AdminUnavailablecodesApiDocsGetUnavailableCodesIdTeamsUnassigned(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned"]>;
  AdminUnavailablecodesApiDocsGetUnavailableCodesId(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}"]>;
  AdminUnavailablecodesApiDocsPutUnavailableCodesId(...args: NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}"]>;
}

export const NiceCxoneFullApiUnavailableCodesGeneratedFunctionNames = [
  "AdminUnavailablecodesApiDocsGetUnavailableCodesIdAuditHistory",
  "AdminUnavailablecodesApiDocsPatchStatusByUnavailableCodesId",
  "AdminUnavailablecodesApiDocsGetUnavailableCodesIdTeams",
  "AdminUnavailablecodesApiDocsPostUnavailableCodesIdTeams",
  "AdminUnavailablecodesApiDocsPutUnavailableCodesIdTeams",
  "AdminUnavailablecodesApiDocsDeleteUnavailableCodesIdTeams",
  "AdminUnavailablecodesApiDocsGetUnavailableCodesIdTeamsUnassigned",
  "AdminUnavailablecodesApiDocsGetUnavailableCodesId",
  "AdminUnavailablecodesApiDocsPutUnavailableCodesId"
] as const satisfies readonly (keyof NiceCxoneFullApiUnavailableCodesGeneratedClient)[];

export function createNiceCxoneFullApiUnavailableCodesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiUnavailableCodesGeneratedClient {
  return {
    AdminUnavailablecodesApiDocsGetUnavailableCodesIdAuditHistory: (...args) => callOperation("admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-audit-history:GET:/unavailable-codes/{unavailableCodeId}/audit-history">)),
    AdminUnavailablecodesApiDocsPatchStatusByUnavailableCodesId: (...args) => callOperation("admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:patch-status-by-unavailable-codes-id:PATCH:/unavailable-codes/{unavailableCodeId}/status">)),
    AdminUnavailablecodesApiDocsGetUnavailableCodesIdTeams: (...args) => callOperation("admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams:GET:/unavailable-codes/{unavailableCodeId}/teams">)),
    AdminUnavailablecodesApiDocsPostUnavailableCodesIdTeams: (...args) => callOperation("admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:post-unavailable-codes-id-teams:POST:/unavailable-codes/{unavailableCodeId}/teams">)),
    AdminUnavailablecodesApiDocsPutUnavailableCodesIdTeams: (...args) => callOperation("admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:put-unavailable-codes-id-teams:PUT:/unavailable-codes/{unavailableCodeId}/teams">)),
    AdminUnavailablecodesApiDocsDeleteUnavailableCodesIdTeams: (...args) => callOperation("admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:delete-unavailable-codes-id-teams:DELETE:/unavailable-codes/{unavailableCodeId}/teams">)),
    AdminUnavailablecodesApiDocsGetUnavailableCodesIdTeamsUnassigned: (...args) => callOperation("admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id-teams-unassigned:GET:/unavailable-codes/{unavailableCodeId}/teams/unassigned">)),
    AdminUnavailablecodesApiDocsGetUnavailableCodesId: (...args) => callOperation("admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:get-unavailable-codes-id:GET:/unavailable-codes/{unavailableCodeId}">)),
    AdminUnavailablecodesApiDocsPutUnavailableCodesId: (...args) => callOperation("admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-unavailablecodes-api-docs:put-unavailable-codes-id:PUT:/unavailable-codes/{unavailableCodeId}">)),
  };
}
