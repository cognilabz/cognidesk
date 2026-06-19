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
export const NiceCxoneFullApiRoutingAttributesOperationKeys = [
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes",
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}",
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}",
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents",
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes",
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes",
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}"
] as const;
export type NiceCxoneFullApiRoutingAttributesOperationKey = typeof NiceCxoneFullApiRoutingAttributesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiRoutingAttributesOperationPathParamMap {
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": {};
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": { "routingAttributeNo": NiceCxoneFullApiPathParamValue };
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": { "routingAttributeNo": NiceCxoneFullApiPathParamValue };
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": { "routingAttributeNo": NiceCxoneFullApiPathParamValue };
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": { "agentNo": NiceCxoneFullApiPathParamValue };
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": { "agentNo": NiceCxoneFullApiPathParamValue };
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": { "routingAttributeNo": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiRoutingAttributesOperationRequestMap {
  "admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes">;
  "admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}">;
  "admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}">;
  "admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents">;
  "admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes">;
  "admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes">;
  "admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}": NiceCxoneFullApiOperationInput<"admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}">;
}

export interface NiceCxoneFullApiRoutingAttributesGeneratedClient {
  AdminRoutingattributesApiDocsGetRoutingAttributes(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes"]>;
  AdminRoutingattributesApiDocsGetRoutingAttribute(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}"]>;
  AdminRoutingattributesApiDocsAddUpdateRoutingAttribute(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}"]>;
  AdminRoutingattributesApiDocsGetRoutingAttributeAgents(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents"]>;
  AdminRoutingattributesApiDocsGetAgentRoutingAttributes(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes"]>;
  AdminRoutingattributesApiDocsUpdateAgentRoutingAttributes(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes"]>;
  AdminRoutingattributesApiDocsRemoveAgentRoutingAttribute(...args: NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}"]>;
}

export const NiceCxoneFullApiRoutingAttributesGeneratedFunctionNames = [
  "AdminRoutingattributesApiDocsGetRoutingAttributes",
  "AdminRoutingattributesApiDocsGetRoutingAttribute",
  "AdminRoutingattributesApiDocsAddUpdateRoutingAttribute",
  "AdminRoutingattributesApiDocsGetRoutingAttributeAgents",
  "AdminRoutingattributesApiDocsGetAgentRoutingAttributes",
  "AdminRoutingattributesApiDocsUpdateAgentRoutingAttributes",
  "AdminRoutingattributesApiDocsRemoveAgentRoutingAttribute"
] as const satisfies readonly (keyof NiceCxoneFullApiRoutingAttributesGeneratedClient)[];

export function createNiceCxoneFullApiRoutingAttributesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiRoutingAttributesGeneratedClient {
  return {
    AdminRoutingattributesApiDocsGetRoutingAttributes: (...args) => callOperation("admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getRoutingAttributes:GET:/routing-attributes">)),
    AdminRoutingattributesApiDocsGetRoutingAttribute: (...args) => callOperation("admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getRoutingAttribute:GET:/routing-attributes/{routingAttributeNo}">)),
    AdminRoutingattributesApiDocsAddUpdateRoutingAttribute: (...args) => callOperation("admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:addUpdateRoutingAttribute:PUT:/routing-attributes/{routingAttributeNo}">)),
    AdminRoutingattributesApiDocsGetRoutingAttributeAgents: (...args) => callOperation("admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getRoutingAttributeAgents:GET:/routing-attributes/{routingAttributeNo}/agents">)),
    AdminRoutingattributesApiDocsGetAgentRoutingAttributes: (...args) => callOperation("admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:getAgentRoutingAttributes:GET:/agents/{agentNo}/routing-attributes">)),
    AdminRoutingattributesApiDocsUpdateAgentRoutingAttributes: (...args) => callOperation("admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:updateAgentRoutingAttributes:PUT:/agents/{agentNo}/routing-attributes">)),
    AdminRoutingattributesApiDocsRemoveAgentRoutingAttribute: (...args) => callOperation("admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}", ...(args as NiceCxoneFullApiOperationArgs<"admin-routingattributes-api-docs:removeAgentRoutingAttribute:DELETE:/agents/routing-attributes/{routingAttributeNo}">)),
  };
}
