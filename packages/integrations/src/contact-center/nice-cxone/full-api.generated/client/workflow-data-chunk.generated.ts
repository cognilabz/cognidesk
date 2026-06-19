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
export const NiceCxoneFullApiWorkflowDataOperationKeys = [
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}",
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data",
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data",
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data",
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities",
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}",
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate",
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate"
] as const;
export type NiceCxoneFullApiWorkflowDataOperationKey = typeof NiceCxoneFullApiWorkflowDataOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiWorkflowDataOperationPathParamMap {
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": { "activeFlag": NiceCxoneFullApiPathParamValue };
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": {};
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": {};
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": {};
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": {};
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": { "workFlowDataId": NiceCxoneFullApiPathParamValue };
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": { "workflowDataId": NiceCxoneFullApiPathParamValue };
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": { "workflowDataId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiWorkflowDataOperationRequestMap {
  "admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}">;
  "admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data">;
  "admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data">;
  "admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data">;
  "admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities">;
  "admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}">;
  "admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate">;
  "admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate": NiceCxoneFullApiOperationInput<"admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate">;
}

export interface NiceCxoneFullApiWorkflowDataGeneratedClient {
  AdminWorkflowdataApiDocsListWorkflowData(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}"]>;
  AdminWorkflowdataApiDocsGetWorkflowData(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data"]>;
  AdminWorkflowdataApiDocsCreateWorkflowData(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data"]>;
  AdminWorkflowdataApiDocsUpdateWorkflowData(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data"]>;
  AdminWorkflowdataApiDocsGetWorkflowDataIdentities(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities"]>;
  AdminWorkflowdataApiDocsGetWorkflowDataId(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}"]>;
  AdminWorkflowdataApiDocsDeactivateWorkflowData(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate"]>;
  AdminWorkflowdataApiDocsActivateWorkflowData(...args: NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate">): Promise<NiceCxoneFullApiOperationResponseMap["admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate"]>;
}

export const NiceCxoneFullApiWorkflowDataGeneratedFunctionNames = [
  "AdminWorkflowdataApiDocsListWorkflowData",
  "AdminWorkflowdataApiDocsGetWorkflowData",
  "AdminWorkflowdataApiDocsCreateWorkflowData",
  "AdminWorkflowdataApiDocsUpdateWorkflowData",
  "AdminWorkflowdataApiDocsGetWorkflowDataIdentities",
  "AdminWorkflowdataApiDocsGetWorkflowDataId",
  "AdminWorkflowdataApiDocsDeactivateWorkflowData",
  "AdminWorkflowdataApiDocsActivateWorkflowData"
] as const satisfies readonly (keyof NiceCxoneFullApiWorkflowDataGeneratedClient)[];

export function createNiceCxoneFullApiWorkflowDataGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiWorkflowDataGeneratedClient {
  return {
    AdminWorkflowdataApiDocsListWorkflowData: (...args) => callOperation("admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:list-workflow-data:GET:/workflow-data/list/{activeFlag}">)),
    AdminWorkflowdataApiDocsGetWorkflowData: (...args) => callOperation("admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:get-workflow-data:GET:/workflow-data">)),
    AdminWorkflowdataApiDocsCreateWorkflowData: (...args) => callOperation("admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:create-workflow-data:POST:/workflow-data">)),
    AdminWorkflowdataApiDocsUpdateWorkflowData: (...args) => callOperation("admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:update-workflow-data:PUT:/workflow-data">)),
    AdminWorkflowdataApiDocsGetWorkflowDataIdentities: (...args) => callOperation("admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:get-workflow-data-identities:GET:/workflow-data/identities">)),
    AdminWorkflowdataApiDocsGetWorkflowDataId: (...args) => callOperation("admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:get-workflow-data-id:GET:/workflow-data/{workFlowDataId}">)),
    AdminWorkflowdataApiDocsDeactivateWorkflowData: (...args) => callOperation("admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:deactivate-workflow-data:PUT:/workflow-data/{workflowDataId}/deactivate">)),
    AdminWorkflowdataApiDocsActivateWorkflowData: (...args) => callOperation("admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate", ...(args as NiceCxoneFullApiOperationArgs<"admin-workflowdata-api-docs:activate-workflow-data:PUT:/workflow-data/{workflowDataId}/activate">)),
  };
}
