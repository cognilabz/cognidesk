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
export const ZendeskFullApiSkillBasedRoutingOperationKeys = [
  "BulkSetAgentAttributeValuesJob",
  "CreateAttribute",
  "CreateAttributeValue",
  "DeleteAttribute",
  "DeleteAttributeValue",
  "ListAccountAttributes",
  "ListAGentAttributeValues",
  "ListAttributeValues",
  "ListManyAgentsAttributeValues",
  "ListRoutingAttributeDefinitions",
  "ListTicketAttributeValues",
  "ListTicketsFullfilledByUser",
  "SetAgentAttributeValues",
  "SetTicketAttributeValues",
  "ShowAttribute",
  "ShowAttributeValue",
  "UpdateAttribute",
  "UpdateAttributeValue"
] as const;
export type ZendeskFullApiSkillBasedRoutingOperationKey = typeof ZendeskFullApiSkillBasedRoutingOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSkillBasedRoutingOperationPathParamMap {
  "BulkSetAgentAttributeValuesJob": {};
  "CreateAttribute": {};
  "CreateAttributeValue": { "attribute_id": ZendeskFullApiPathParamValue };
  "DeleteAttribute": { "attribute_id": ZendeskFullApiPathParamValue };
  "DeleteAttributeValue": { "attribute_id": ZendeskFullApiPathParamValue; "attribute_value_id": ZendeskFullApiPathParamValue };
  "ListAccountAttributes": {};
  "ListAGentAttributeValues": { "user_id": ZendeskFullApiPathParamValue };
  "ListAttributeValues": { "attribute_id": ZendeskFullApiPathParamValue };
  "ListManyAgentsAttributeValues": {};
  "ListRoutingAttributeDefinitions": {};
  "ListTicketAttributeValues": { "ticket_id": ZendeskFullApiPathParamValue };
  "ListTicketsFullfilledByUser": {};
  "SetAgentAttributeValues": { "user_id": ZendeskFullApiPathParamValue };
  "SetTicketAttributeValues": { "ticket_id": ZendeskFullApiPathParamValue };
  "ShowAttribute": { "attribute_id": ZendeskFullApiPathParamValue };
  "ShowAttributeValue": { "attribute_id": ZendeskFullApiPathParamValue; "attribute_value_id": ZendeskFullApiPathParamValue };
  "UpdateAttribute": { "attribute_id": ZendeskFullApiPathParamValue };
  "UpdateAttributeValue": { "attribute_id": ZendeskFullApiPathParamValue; "attribute_value_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiSkillBasedRoutingOperationRequestMap {
  "BulkSetAgentAttributeValuesJob": ZendeskFullApiOperationInput<"BulkSetAgentAttributeValuesJob">;
  "CreateAttribute": ZendeskFullApiOperationInput<"CreateAttribute">;
  "CreateAttributeValue": ZendeskFullApiOperationInput<"CreateAttributeValue">;
  "DeleteAttribute": ZendeskFullApiOperationInput<"DeleteAttribute">;
  "DeleteAttributeValue": ZendeskFullApiOperationInput<"DeleteAttributeValue">;
  "ListAccountAttributes": ZendeskFullApiOperationInput<"ListAccountAttributes">;
  "ListAGentAttributeValues": ZendeskFullApiOperationInput<"ListAGentAttributeValues">;
  "ListAttributeValues": ZendeskFullApiOperationInput<"ListAttributeValues">;
  "ListManyAgentsAttributeValues": ZendeskFullApiOperationInput<"ListManyAgentsAttributeValues">;
  "ListRoutingAttributeDefinitions": ZendeskFullApiOperationInput<"ListRoutingAttributeDefinitions">;
  "ListTicketAttributeValues": ZendeskFullApiOperationInput<"ListTicketAttributeValues">;
  "ListTicketsFullfilledByUser": ZendeskFullApiOperationInput<"ListTicketsFullfilledByUser">;
  "SetAgentAttributeValues": ZendeskFullApiOperationInput<"SetAgentAttributeValues">;
  "SetTicketAttributeValues": ZendeskFullApiOperationInput<"SetTicketAttributeValues">;
  "ShowAttribute": ZendeskFullApiOperationInput<"ShowAttribute">;
  "ShowAttributeValue": ZendeskFullApiOperationInput<"ShowAttributeValue">;
  "UpdateAttribute": ZendeskFullApiOperationInput<"UpdateAttribute">;
  "UpdateAttributeValue": ZendeskFullApiOperationInput<"UpdateAttributeValue">;
}

export interface ZendeskFullApiSkillBasedRoutingGeneratedClient {
  BulkSetAgentAttributeValuesJob(...args: ZendeskFullApiOperationArgs<"BulkSetAgentAttributeValuesJob">): Promise<ZendeskFullApiOperationResponseMap["BulkSetAgentAttributeValuesJob"]>;
  CreateAttribute(...args: ZendeskFullApiOperationArgs<"CreateAttribute">): Promise<ZendeskFullApiOperationResponseMap["CreateAttribute"]>;
  CreateAttributeValue(...args: ZendeskFullApiOperationArgs<"CreateAttributeValue">): Promise<ZendeskFullApiOperationResponseMap["CreateAttributeValue"]>;
  DeleteAttribute(...args: ZendeskFullApiOperationArgs<"DeleteAttribute">): Promise<ZendeskFullApiOperationResponseMap["DeleteAttribute"]>;
  DeleteAttributeValue(...args: ZendeskFullApiOperationArgs<"DeleteAttributeValue">): Promise<ZendeskFullApiOperationResponseMap["DeleteAttributeValue"]>;
  ListAccountAttributes(...args: ZendeskFullApiOperationArgs<"ListAccountAttributes">): Promise<ZendeskFullApiOperationResponseMap["ListAccountAttributes"]>;
  ListAGentAttributeValues(...args: ZendeskFullApiOperationArgs<"ListAGentAttributeValues">): Promise<ZendeskFullApiOperationResponseMap["ListAGentAttributeValues"]>;
  ListAttributeValues(...args: ZendeskFullApiOperationArgs<"ListAttributeValues">): Promise<ZendeskFullApiOperationResponseMap["ListAttributeValues"]>;
  ListManyAgentsAttributeValues(...args: ZendeskFullApiOperationArgs<"ListManyAgentsAttributeValues">): Promise<ZendeskFullApiOperationResponseMap["ListManyAgentsAttributeValues"]>;
  ListRoutingAttributeDefinitions(...args: ZendeskFullApiOperationArgs<"ListRoutingAttributeDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListRoutingAttributeDefinitions"]>;
  ListTicketAttributeValues(...args: ZendeskFullApiOperationArgs<"ListTicketAttributeValues">): Promise<ZendeskFullApiOperationResponseMap["ListTicketAttributeValues"]>;
  ListTicketsFullfilledByUser(...args: ZendeskFullApiOperationArgs<"ListTicketsFullfilledByUser">): Promise<ZendeskFullApiOperationResponseMap["ListTicketsFullfilledByUser"]>;
  SetAgentAttributeValues(...args: ZendeskFullApiOperationArgs<"SetAgentAttributeValues">): Promise<ZendeskFullApiOperationResponseMap["SetAgentAttributeValues"]>;
  SetTicketAttributeValues(...args: ZendeskFullApiOperationArgs<"SetTicketAttributeValues">): Promise<ZendeskFullApiOperationResponseMap["SetTicketAttributeValues"]>;
  ShowAttribute(...args: ZendeskFullApiOperationArgs<"ShowAttribute">): Promise<ZendeskFullApiOperationResponseMap["ShowAttribute"]>;
  ShowAttributeValue(...args: ZendeskFullApiOperationArgs<"ShowAttributeValue">): Promise<ZendeskFullApiOperationResponseMap["ShowAttributeValue"]>;
  UpdateAttribute(...args: ZendeskFullApiOperationArgs<"UpdateAttribute">): Promise<ZendeskFullApiOperationResponseMap["UpdateAttribute"]>;
  UpdateAttributeValue(...args: ZendeskFullApiOperationArgs<"UpdateAttributeValue">): Promise<ZendeskFullApiOperationResponseMap["UpdateAttributeValue"]>;
}

export const ZendeskFullApiSkillBasedRoutingGeneratedFunctionNames = [
  "BulkSetAgentAttributeValuesJob",
  "CreateAttribute",
  "CreateAttributeValue",
  "DeleteAttribute",
  "DeleteAttributeValue",
  "ListAccountAttributes",
  "ListAGentAttributeValues",
  "ListAttributeValues",
  "ListManyAgentsAttributeValues",
  "ListRoutingAttributeDefinitions",
  "ListTicketAttributeValues",
  "ListTicketsFullfilledByUser",
  "SetAgentAttributeValues",
  "SetTicketAttributeValues",
  "ShowAttribute",
  "ShowAttributeValue",
  "UpdateAttribute",
  "UpdateAttributeValue"
] as const satisfies readonly (keyof ZendeskFullApiSkillBasedRoutingGeneratedClient)[];

export function createZendeskFullApiSkillBasedRoutingGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSkillBasedRoutingGeneratedClient {
  return {
    BulkSetAgentAttributeValuesJob: (...args) => callOperation("BulkSetAgentAttributeValuesJob", ...(args as ZendeskFullApiOperationArgs<"BulkSetAgentAttributeValuesJob">)),
    CreateAttribute: (...args) => callOperation("CreateAttribute", ...(args as ZendeskFullApiOperationArgs<"CreateAttribute">)),
    CreateAttributeValue: (...args) => callOperation("CreateAttributeValue", ...(args as ZendeskFullApiOperationArgs<"CreateAttributeValue">)),
    DeleteAttribute: (...args) => callOperation("DeleteAttribute", ...(args as ZendeskFullApiOperationArgs<"DeleteAttribute">)),
    DeleteAttributeValue: (...args) => callOperation("DeleteAttributeValue", ...(args as ZendeskFullApiOperationArgs<"DeleteAttributeValue">)),
    ListAccountAttributes: (...args) => callOperation("ListAccountAttributes", ...(args as ZendeskFullApiOperationArgs<"ListAccountAttributes">)),
    ListAGentAttributeValues: (...args) => callOperation("ListAGentAttributeValues", ...(args as ZendeskFullApiOperationArgs<"ListAGentAttributeValues">)),
    ListAttributeValues: (...args) => callOperation("ListAttributeValues", ...(args as ZendeskFullApiOperationArgs<"ListAttributeValues">)),
    ListManyAgentsAttributeValues: (...args) => callOperation("ListManyAgentsAttributeValues", ...(args as ZendeskFullApiOperationArgs<"ListManyAgentsAttributeValues">)),
    ListRoutingAttributeDefinitions: (...args) => callOperation("ListRoutingAttributeDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListRoutingAttributeDefinitions">)),
    ListTicketAttributeValues: (...args) => callOperation("ListTicketAttributeValues", ...(args as ZendeskFullApiOperationArgs<"ListTicketAttributeValues">)),
    ListTicketsFullfilledByUser: (...args) => callOperation("ListTicketsFullfilledByUser", ...(args as ZendeskFullApiOperationArgs<"ListTicketsFullfilledByUser">)),
    SetAgentAttributeValues: (...args) => callOperation("SetAgentAttributeValues", ...(args as ZendeskFullApiOperationArgs<"SetAgentAttributeValues">)),
    SetTicketAttributeValues: (...args) => callOperation("SetTicketAttributeValues", ...(args as ZendeskFullApiOperationArgs<"SetTicketAttributeValues">)),
    ShowAttribute: (...args) => callOperation("ShowAttribute", ...(args as ZendeskFullApiOperationArgs<"ShowAttribute">)),
    ShowAttributeValue: (...args) => callOperation("ShowAttributeValue", ...(args as ZendeskFullApiOperationArgs<"ShowAttributeValue">)),
    UpdateAttribute: (...args) => callOperation("UpdateAttribute", ...(args as ZendeskFullApiOperationArgs<"UpdateAttribute">)),
    UpdateAttributeValue: (...args) => callOperation("UpdateAttributeValue", ...(args as ZendeskFullApiOperationArgs<"UpdateAttributeValue">)),
  };
}
