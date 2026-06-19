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
export const IntercomFullApiAIContentOperationKeys = [
  "listContentImportSources",
  "createContentImportSource",
  "deleteContentImportSource",
  "getContentImportSource",
  "updateContentImportSource",
  "listExternalPages",
  "createExternalPage",
  "deleteExternalPage",
  "getExternalPage",
  "updateExternalPage"
] as const;
export type IntercomFullApiAIContentOperationKey = typeof IntercomFullApiAIContentOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiAIContentOperationPathParamMap {
  "listContentImportSources": {};
  "createContentImportSource": {};
  "deleteContentImportSource": { "source_id": IntercomFullApiPathParamValue };
  "getContentImportSource": { "source_id": IntercomFullApiPathParamValue };
  "updateContentImportSource": { "source_id": IntercomFullApiPathParamValue };
  "listExternalPages": {};
  "createExternalPage": {};
  "deleteExternalPage": { "page_id": IntercomFullApiPathParamValue };
  "getExternalPage": { "page_id": IntercomFullApiPathParamValue };
  "updateExternalPage": { "page_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiAIContentOperationRequestMap {
  "listContentImportSources": IntercomFullApiOperationInput<"listContentImportSources">;
  "createContentImportSource": IntercomFullApiOperationInput<"createContentImportSource">;
  "deleteContentImportSource": IntercomFullApiOperationInput<"deleteContentImportSource">;
  "getContentImportSource": IntercomFullApiOperationInput<"getContentImportSource">;
  "updateContentImportSource": IntercomFullApiOperationInput<"updateContentImportSource">;
  "listExternalPages": IntercomFullApiOperationInput<"listExternalPages">;
  "createExternalPage": IntercomFullApiOperationInput<"createExternalPage">;
  "deleteExternalPage": IntercomFullApiOperationInput<"deleteExternalPage">;
  "getExternalPage": IntercomFullApiOperationInput<"getExternalPage">;
  "updateExternalPage": IntercomFullApiOperationInput<"updateExternalPage">;
}

export interface IntercomFullApiAIContentGeneratedClient {
  intercomListContentImportSources(...args: IntercomFullApiOperationArgs<"listContentImportSources">): Promise<IntercomFullApiOperationResponseMap["listContentImportSources"]>;
  intercomCreateContentImportSource(...args: IntercomFullApiOperationArgs<"createContentImportSource">): Promise<IntercomFullApiOperationResponseMap["createContentImportSource"]>;
  intercomDeleteContentImportSource(...args: IntercomFullApiOperationArgs<"deleteContentImportSource">): Promise<IntercomFullApiOperationResponseMap["deleteContentImportSource"]>;
  intercomGetContentImportSource(...args: IntercomFullApiOperationArgs<"getContentImportSource">): Promise<IntercomFullApiOperationResponseMap["getContentImportSource"]>;
  intercomUpdateContentImportSource(...args: IntercomFullApiOperationArgs<"updateContentImportSource">): Promise<IntercomFullApiOperationResponseMap["updateContentImportSource"]>;
  intercomListExternalPages(...args: IntercomFullApiOperationArgs<"listExternalPages">): Promise<IntercomFullApiOperationResponseMap["listExternalPages"]>;
  intercomCreateExternalPage(...args: IntercomFullApiOperationArgs<"createExternalPage">): Promise<IntercomFullApiOperationResponseMap["createExternalPage"]>;
  intercomDeleteExternalPage(...args: IntercomFullApiOperationArgs<"deleteExternalPage">): Promise<IntercomFullApiOperationResponseMap["deleteExternalPage"]>;
  intercomGetExternalPage(...args: IntercomFullApiOperationArgs<"getExternalPage">): Promise<IntercomFullApiOperationResponseMap["getExternalPage"]>;
  intercomUpdateExternalPage(...args: IntercomFullApiOperationArgs<"updateExternalPage">): Promise<IntercomFullApiOperationResponseMap["updateExternalPage"]>;
}

export const IntercomFullApiAIContentGeneratedFunctionNames = [
  "intercomListContentImportSources",
  "intercomCreateContentImportSource",
  "intercomDeleteContentImportSource",
  "intercomGetContentImportSource",
  "intercomUpdateContentImportSource",
  "intercomListExternalPages",
  "intercomCreateExternalPage",
  "intercomDeleteExternalPage",
  "intercomGetExternalPage",
  "intercomUpdateExternalPage"
] as const satisfies readonly (keyof IntercomFullApiAIContentGeneratedClient)[];

export function createIntercomFullApiAIContentGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiAIContentGeneratedClient {
  return {
    intercomListContentImportSources: (...args) => callOperation("listContentImportSources", ...(args as IntercomFullApiOperationArgs<"listContentImportSources">)),
    intercomCreateContentImportSource: (...args) => callOperation("createContentImportSource", ...(args as IntercomFullApiOperationArgs<"createContentImportSource">)),
    intercomDeleteContentImportSource: (...args) => callOperation("deleteContentImportSource", ...(args as IntercomFullApiOperationArgs<"deleteContentImportSource">)),
    intercomGetContentImportSource: (...args) => callOperation("getContentImportSource", ...(args as IntercomFullApiOperationArgs<"getContentImportSource">)),
    intercomUpdateContentImportSource: (...args) => callOperation("updateContentImportSource", ...(args as IntercomFullApiOperationArgs<"updateContentImportSource">)),
    intercomListExternalPages: (...args) => callOperation("listExternalPages", ...(args as IntercomFullApiOperationArgs<"listExternalPages">)),
    intercomCreateExternalPage: (...args) => callOperation("createExternalPage", ...(args as IntercomFullApiOperationArgs<"createExternalPage">)),
    intercomDeleteExternalPage: (...args) => callOperation("deleteExternalPage", ...(args as IntercomFullApiOperationArgs<"deleteExternalPage">)),
    intercomGetExternalPage: (...args) => callOperation("getExternalPage", ...(args as IntercomFullApiOperationArgs<"getExternalPage">)),
    intercomUpdateExternalPage: (...args) => callOperation("updateExternalPage", ...(args as IntercomFullApiOperationArgs<"updateExternalPage">)),
  };
}
