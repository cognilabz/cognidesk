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
export const NiceCxoneFullApiGroupsOperationKeys = [
  "admin-groups-api-docs:getgroups:GET:/groups",
  "admin-groups-api-docs:postgroups:POST:/groups",
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}",
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}",
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents",
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents",
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents"
] as const;
export type NiceCxoneFullApiGroupsOperationKey = typeof NiceCxoneFullApiGroupsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiGroupsOperationPathParamMap {
  "admin-groups-api-docs:getgroups:GET:/groups": {};
  "admin-groups-api-docs:postgroups:POST:/groups": {};
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": { "groupId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiGroupsOperationRequestMap {
  "admin-groups-api-docs:getgroups:GET:/groups": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:getgroups:GET:/groups">;
  "admin-groups-api-docs:postgroups:POST:/groups": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:postgroups:POST:/groups">;
  "admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}">;
  "admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}">;
  "admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents">;
  "admin-groups-api-docs:blank:POST:/groups/{groupId}/agents": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:blank:POST:/groups/{groupId}/agents">;
  "admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents": NiceCxoneFullApiOperationInput<"admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents">;
}

export interface NiceCxoneFullApiGroupsGeneratedClient {
  AdminGroupsApiDocsGetgroups(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:getgroups:GET:/groups">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:getgroups:GET:/groups"]>;
  AdminGroupsApiDocsPostgroups(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:postgroups:POST:/groups">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:postgroups:POST:/groups"]>;
  AdminGroupsApiDocsGetgroupsbygroupid(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}"]>;
  AdminGroupsApiDocsPutgroupsbygroupid(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}"]>;
  AdminGroupsApiDocsGetGroupAgent(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents"]>;
  AdminGroupsApiDocsBlank(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:blank:POST:/groups/{groupId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:blank:POST:/groups/{groupId}/agents"]>;
  AdminGroupsApiDocsDeleteGroupAgents(...args: NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents"]>;
}

export const NiceCxoneFullApiGroupsGeneratedFunctionNames = [
  "AdminGroupsApiDocsGetgroups",
  "AdminGroupsApiDocsPostgroups",
  "AdminGroupsApiDocsGetgroupsbygroupid",
  "AdminGroupsApiDocsPutgroupsbygroupid",
  "AdminGroupsApiDocsGetGroupAgent",
  "AdminGroupsApiDocsBlank",
  "AdminGroupsApiDocsDeleteGroupAgents"
] as const satisfies readonly (keyof NiceCxoneFullApiGroupsGeneratedClient)[];

export function createNiceCxoneFullApiGroupsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiGroupsGeneratedClient {
  return {
    AdminGroupsApiDocsGetgroups: (...args) => callOperation("admin-groups-api-docs:getgroups:GET:/groups", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:getgroups:GET:/groups">)),
    AdminGroupsApiDocsPostgroups: (...args) => callOperation("admin-groups-api-docs:postgroups:POST:/groups", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:postgroups:POST:/groups">)),
    AdminGroupsApiDocsGetgroupsbygroupid: (...args) => callOperation("admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:getgroupsbygroupid:GET:/groups/{groupId}">)),
    AdminGroupsApiDocsPutgroupsbygroupid: (...args) => callOperation("admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:putgroupsbygroupid:PUT:/groups/{groupId}">)),
    AdminGroupsApiDocsGetGroupAgent: (...args) => callOperation("admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:GetGroupAgent:GET:/groups/{groupId}/agents">)),
    AdminGroupsApiDocsBlank: (...args) => callOperation("admin-groups-api-docs:blank:POST:/groups/{groupId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:blank:POST:/groups/{groupId}/agents">)),
    AdminGroupsApiDocsDeleteGroupAgents: (...args) => callOperation("admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-groups-api-docs:deleteGroupAgents:DELETE:/groups/{groupId}/agents">)),
  };
}
