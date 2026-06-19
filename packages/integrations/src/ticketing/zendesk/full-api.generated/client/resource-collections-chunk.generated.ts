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
export const ZendeskFullApiResourceCollectionsOperationKeys = [
  "CreateResourceCollection",
  "DeleteResourceCollection",
  "ListResourceCollections",
  "RetrieveResourceCollection",
  "UpdateResourceCollection"
] as const;
export type ZendeskFullApiResourceCollectionsOperationKey = typeof ZendeskFullApiResourceCollectionsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiResourceCollectionsOperationPathParamMap {
  "CreateResourceCollection": {};
  "DeleteResourceCollection": { "resource_collection_id": ZendeskFullApiPathParamValue };
  "ListResourceCollections": {};
  "RetrieveResourceCollection": { "resource_collection_id": ZendeskFullApiPathParamValue };
  "UpdateResourceCollection": { "resource_collection_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiResourceCollectionsOperationRequestMap {
  "CreateResourceCollection": ZendeskFullApiOperationInput<"CreateResourceCollection">;
  "DeleteResourceCollection": ZendeskFullApiOperationInput<"DeleteResourceCollection">;
  "ListResourceCollections": ZendeskFullApiOperationInput<"ListResourceCollections">;
  "RetrieveResourceCollection": ZendeskFullApiOperationInput<"RetrieveResourceCollection">;
  "UpdateResourceCollection": ZendeskFullApiOperationInput<"UpdateResourceCollection">;
}

export interface ZendeskFullApiResourceCollectionsGeneratedClient {
  CreateResourceCollection(...args: ZendeskFullApiOperationArgs<"CreateResourceCollection">): Promise<ZendeskFullApiOperationResponseMap["CreateResourceCollection"]>;
  DeleteResourceCollection(...args: ZendeskFullApiOperationArgs<"DeleteResourceCollection">): Promise<ZendeskFullApiOperationResponseMap["DeleteResourceCollection"]>;
  ListResourceCollections(...args: ZendeskFullApiOperationArgs<"ListResourceCollections">): Promise<ZendeskFullApiOperationResponseMap["ListResourceCollections"]>;
  RetrieveResourceCollection(...args: ZendeskFullApiOperationArgs<"RetrieveResourceCollection">): Promise<ZendeskFullApiOperationResponseMap["RetrieveResourceCollection"]>;
  UpdateResourceCollection(...args: ZendeskFullApiOperationArgs<"UpdateResourceCollection">): Promise<ZendeskFullApiOperationResponseMap["UpdateResourceCollection"]>;
}

export const ZendeskFullApiResourceCollectionsGeneratedFunctionNames = [
  "CreateResourceCollection",
  "DeleteResourceCollection",
  "ListResourceCollections",
  "RetrieveResourceCollection",
  "UpdateResourceCollection"
] as const satisfies readonly (keyof ZendeskFullApiResourceCollectionsGeneratedClient)[];

export function createZendeskFullApiResourceCollectionsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiResourceCollectionsGeneratedClient {
  return {
    CreateResourceCollection: (...args) => callOperation("CreateResourceCollection", ...(args as ZendeskFullApiOperationArgs<"CreateResourceCollection">)),
    DeleteResourceCollection: (...args) => callOperation("DeleteResourceCollection", ...(args as ZendeskFullApiOperationArgs<"DeleteResourceCollection">)),
    ListResourceCollections: (...args) => callOperation("ListResourceCollections", ...(args as ZendeskFullApiOperationArgs<"ListResourceCollections">)),
    RetrieveResourceCollection: (...args) => callOperation("RetrieveResourceCollection", ...(args as ZendeskFullApiOperationArgs<"RetrieveResourceCollection">)),
    UpdateResourceCollection: (...args) => callOperation("UpdateResourceCollection", ...(args as ZendeskFullApiOperationArgs<"UpdateResourceCollection">)),
  };
}
