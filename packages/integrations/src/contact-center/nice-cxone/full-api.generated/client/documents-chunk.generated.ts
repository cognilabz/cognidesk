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
export const NiceCxoneFullApiDocumentsOperationKeys = [
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents",
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot"
] as const;
export type NiceCxoneFullApiDocumentsOperationKey = typeof NiceCxoneFullApiDocumentsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiDocumentsOperationPathParamMap {
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": {};
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": { "khId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiDocumentsOperationRequestMap {
  "cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents": NiceCxoneFullApiOperationInput<"cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents">;
  "cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot": NiceCxoneFullApiOperationInput<"cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot">;
}

export interface NiceCxoneFullApiDocumentsGeneratedClient {
  CxoneDocumentsApiDocsCreateKnowledgeHubConfiguration(...args: NiceCxoneFullApiOperationArgs<"cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents"]>;
  CxoneDocumentsApiDocsGetDocumentSnapshot(...args: NiceCxoneFullApiOperationArgs<"cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot"]>;
}

export const NiceCxoneFullApiDocumentsGeneratedFunctionNames = [
  "CxoneDocumentsApiDocsCreateKnowledgeHubConfiguration",
  "CxoneDocumentsApiDocsGetDocumentSnapshot"
] as const satisfies readonly (keyof NiceCxoneFullApiDocumentsGeneratedClient)[];

export function createNiceCxoneFullApiDocumentsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiDocumentsGeneratedClient {
  return {
    CxoneDocumentsApiDocsCreateKnowledgeHubConfiguration: (...args) => callOperation("cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents", ...(args as NiceCxoneFullApiOperationArgs<"cxone-documents-api-docs:createKnowledgeHubConfiguration:POST:/eai-knowledge-hub-services/ingestion-service/v1/documents">)),
    CxoneDocumentsApiDocsGetDocumentSnapshot: (...args) => callOperation("cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot", ...(args as NiceCxoneFullApiOperationArgs<"cxone-documents-api-docs:getDocumentSnapshot:POST:/eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot">)),
  };
}
