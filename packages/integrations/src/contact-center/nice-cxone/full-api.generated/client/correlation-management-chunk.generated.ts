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
export const NiceCxoneFullApiCorrelationManagementOperationKeys = [
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations",
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}",
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search"
] as const;
export type NiceCxoneFullApiCorrelationManagementOperationKey = typeof NiceCxoneFullApiCorrelationManagementOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiCorrelationManagementOperationPathParamMap {
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": {};
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": { "correlationId": NiceCxoneFullApiPathParamValue; "entityId": NiceCxoneFullApiPathParamValue };
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": {};
}

export interface NiceCxoneFullApiCorrelationManagementOperationRequestMap {
  "cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations": NiceCxoneFullApiOperationInput<"cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations">;
  "cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}": NiceCxoneFullApiOperationInput<"cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}">;
  "cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search": NiceCxoneFullApiOperationInput<"cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search">;
}

export interface NiceCxoneFullApiCorrelationManagementGeneratedClient {
  CxoneCorrelationmanagementApiDocsCreateCorrelation(...args: NiceCxoneFullApiOperationArgs<"cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations"]>;
  CxoneCorrelationmanagementApiDocsUpdateCorrelation(...args: NiceCxoneFullApiOperationArgs<"cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}"]>;
  CxoneCorrelationmanagementApiDocsSearchCorrelations(...args: NiceCxoneFullApiOperationArgs<"cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search"]>;
}

export const NiceCxoneFullApiCorrelationManagementGeneratedFunctionNames = [
  "CxoneCorrelationmanagementApiDocsCreateCorrelation",
  "CxoneCorrelationmanagementApiDocsUpdateCorrelation",
  "CxoneCorrelationmanagementApiDocsSearchCorrelations"
] as const satisfies readonly (keyof NiceCxoneFullApiCorrelationManagementGeneratedClient)[];

export function createNiceCxoneFullApiCorrelationManagementGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiCorrelationManagementGeneratedClient {
  return {
    CxoneCorrelationmanagementApiDocsCreateCorrelation: (...args) => callOperation("cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations", ...(args as NiceCxoneFullApiOperationArgs<"cxone-correlationmanagement-api-docs:createCorrelation:POST:/correlation-manager/v1/correlations">)),
    CxoneCorrelationmanagementApiDocsUpdateCorrelation: (...args) => callOperation("cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-correlationmanagement-api-docs:updateCorrelation:PUT:/correlation-manager/v1/correlations/{correlationId}/{entityId}">)),
    CxoneCorrelationmanagementApiDocsSearchCorrelations: (...args) => callOperation("cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-correlationmanagement-api-docs:searchCorrelations:POST:/correlation-manager/v1/correlations/search">)),
  };
}
