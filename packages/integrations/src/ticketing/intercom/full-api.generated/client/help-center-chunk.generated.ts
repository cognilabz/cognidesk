// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiHelpCenterOperationKeys = [
  "listAllCollections",
  "createCollection",
  "deleteCollection",
  "retrieveCollection",
  "updateCollection",
  "listHelpCenters",
  "retrieveHelpCenter"
] as const;
export type IntercomFullApiHelpCenterOperationKey = typeof IntercomFullApiHelpCenterOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiHelpCenterOperationPathParamMap {
  "listAllCollections": {};
  "createCollection": {};
  "deleteCollection": { "collection_id": IntercomFullApiPathParamValue };
  "retrieveCollection": { "collection_id": IntercomFullApiPathParamValue };
  "updateCollection": { "collection_id": IntercomFullApiPathParamValue };
  "listHelpCenters": {};
  "retrieveHelpCenter": { "help_center_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiHelpCenterOperationRequestMap {
  "listAllCollections": IntercomFullApiOperationInput<"listAllCollections">;
  "createCollection": IntercomFullApiOperationInput<"createCollection">;
  "deleteCollection": IntercomFullApiOperationInput<"deleteCollection">;
  "retrieveCollection": IntercomFullApiOperationInput<"retrieveCollection">;
  "updateCollection": IntercomFullApiOperationInput<"updateCollection">;
  "listHelpCenters": IntercomFullApiOperationInput<"listHelpCenters">;
  "retrieveHelpCenter": IntercomFullApiOperationInput<"retrieveHelpCenter">;
}

export interface IntercomFullApiHelpCenterGeneratedClient {
  intercomListAllCollections(...args: IntercomFullApiOperationArgs<"listAllCollections">): Promise<IntercomFullApiOperationResponseMap["listAllCollections"]>;
  intercomCreateCollection(...args: IntercomFullApiOperationArgs<"createCollection">): Promise<IntercomFullApiOperationResponseMap["createCollection"]>;
  intercomDeleteCollection(...args: IntercomFullApiOperationArgs<"deleteCollection">): Promise<IntercomFullApiOperationResponseMap["deleteCollection"]>;
  intercomRetrieveCollection(...args: IntercomFullApiOperationArgs<"retrieveCollection">): Promise<IntercomFullApiOperationResponseMap["retrieveCollection"]>;
  intercomUpdateCollection(...args: IntercomFullApiOperationArgs<"updateCollection">): Promise<IntercomFullApiOperationResponseMap["updateCollection"]>;
  intercomListHelpCenters(...args: IntercomFullApiOperationArgs<"listHelpCenters">): Promise<IntercomFullApiOperationResponseMap["listHelpCenters"]>;
  intercomRetrieveHelpCenter(...args: IntercomFullApiOperationArgs<"retrieveHelpCenter">): Promise<IntercomFullApiOperationResponseMap["retrieveHelpCenter"]>;
}

export const IntercomFullApiHelpCenterGeneratedFunctionNames = [
  "intercomListAllCollections",
  "intercomCreateCollection",
  "intercomDeleteCollection",
  "intercomRetrieveCollection",
  "intercomUpdateCollection",
  "intercomListHelpCenters",
  "intercomRetrieveHelpCenter"
] as const satisfies readonly (keyof IntercomFullApiHelpCenterGeneratedClient)[];

export function createIntercomFullApiHelpCenterGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiHelpCenterGeneratedClient {
  return {
    intercomListAllCollections: (...args) => callOperation("listAllCollections", ...(args as IntercomFullApiOperationArgs<"listAllCollections">)),
    intercomCreateCollection: (...args) => callOperation("createCollection", ...(args as IntercomFullApiOperationArgs<"createCollection">)),
    intercomDeleteCollection: (...args) => callOperation("deleteCollection", ...(args as IntercomFullApiOperationArgs<"deleteCollection">)),
    intercomRetrieveCollection: (...args) => callOperation("retrieveCollection", ...(args as IntercomFullApiOperationArgs<"retrieveCollection">)),
    intercomUpdateCollection: (...args) => callOperation("updateCollection", ...(args as IntercomFullApiOperationArgs<"updateCollection">)),
    intercomListHelpCenters: (...args) => callOperation("listHelpCenters", ...(args as IntercomFullApiOperationArgs<"listHelpCenters">)),
    intercomRetrieveHelpCenter: (...args) => callOperation("retrieveHelpCenter", ...(args as IntercomFullApiOperationArgs<"retrieveHelpCenter">)),
  };
}
