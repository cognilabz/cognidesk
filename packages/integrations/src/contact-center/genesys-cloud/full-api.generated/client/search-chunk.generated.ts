// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiSearchOperationKeys = [
  "getDocumentationGknSearch",
  "getDocumentationSearch",
  "getSearch",
  "getSearchSuggest",
  "postDocumentationGknSearch",
  "postDocumentationSearch",
  "postSearch",
  "postSearchSuggest",
  "postSpeechandtextanalyticsTranscriptsSearch"
] as const;
export type GenesysCloudFullApiSearchOperationKey = typeof GenesysCloudFullApiSearchOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiSearchOperationPathParamMap {
  "getDocumentationGknSearch": {};
  "getDocumentationSearch": {};
  "getSearch": {};
  "getSearchSuggest": {};
  "postDocumentationGknSearch": {};
  "postDocumentationSearch": {};
  "postSearch": {};
  "postSearchSuggest": {};
  "postSpeechandtextanalyticsTranscriptsSearch": {};
}

export interface GenesysCloudFullApiSearchOperationRequestMap {
  "getDocumentationGknSearch": GenesysCloudFullApiOperationInput<"getDocumentationGknSearch">;
  "getDocumentationSearch": GenesysCloudFullApiOperationInput<"getDocumentationSearch">;
  "getSearch": GenesysCloudFullApiOperationInput<"getSearch">;
  "getSearchSuggest": GenesysCloudFullApiOperationInput<"getSearchSuggest">;
  "postDocumentationGknSearch": GenesysCloudFullApiOperationInput<"postDocumentationGknSearch">;
  "postDocumentationSearch": GenesysCloudFullApiOperationInput<"postDocumentationSearch">;
  "postSearch": GenesysCloudFullApiOperationInput<"postSearch">;
  "postSearchSuggest": GenesysCloudFullApiOperationInput<"postSearchSuggest">;
  "postSpeechandtextanalyticsTranscriptsSearch": GenesysCloudFullApiOperationInput<"postSpeechandtextanalyticsTranscriptsSearch">;
}

export interface GenesysCloudFullApiSearchGeneratedClient {
  GetDocumentationGknSearch(...args: GenesysCloudFullApiOperationArgs<"getDocumentationGknSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getDocumentationGknSearch"]>;
  GetDocumentationSearch(...args: GenesysCloudFullApiOperationArgs<"getDocumentationSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getDocumentationSearch"]>;
  GetSearch(...args: GenesysCloudFullApiOperationArgs<"getSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getSearch"]>;
  GetSearchSuggest(...args: GenesysCloudFullApiOperationArgs<"getSearchSuggest">): Promise<GenesysCloudFullApiOperationResponseMap["getSearchSuggest"]>;
  PostDocumentationGknSearch(...args: GenesysCloudFullApiOperationArgs<"postDocumentationGknSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postDocumentationGknSearch"]>;
  PostDocumentationSearch(...args: GenesysCloudFullApiOperationArgs<"postDocumentationSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postDocumentationSearch"]>;
  PostSearch(...args: GenesysCloudFullApiOperationArgs<"postSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postSearch"]>;
  PostSearchSuggest(...args: GenesysCloudFullApiOperationArgs<"postSearchSuggest">): Promise<GenesysCloudFullApiOperationResponseMap["postSearchSuggest"]>;
  PostSpeechandtextanalyticsTranscriptsSearch(...args: GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTranscriptsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postSpeechandtextanalyticsTranscriptsSearch"]>;
}

export const GenesysCloudFullApiSearchGeneratedFunctionNames = [
  "GetDocumentationGknSearch",
  "GetDocumentationSearch",
  "GetSearch",
  "GetSearchSuggest",
  "PostDocumentationGknSearch",
  "PostDocumentationSearch",
  "PostSearch",
  "PostSearchSuggest",
  "PostSpeechandtextanalyticsTranscriptsSearch"
] as const satisfies readonly (keyof GenesysCloudFullApiSearchGeneratedClient)[];

export function createGenesysCloudFullApiSearchGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiSearchGeneratedClient {
  return {
    GetDocumentationGknSearch: (...args) => callOperation("getDocumentationGknSearch", ...(args as GenesysCloudFullApiOperationArgs<"getDocumentationGknSearch">)),
    GetDocumentationSearch: (...args) => callOperation("getDocumentationSearch", ...(args as GenesysCloudFullApiOperationArgs<"getDocumentationSearch">)),
    GetSearch: (...args) => callOperation("getSearch", ...(args as GenesysCloudFullApiOperationArgs<"getSearch">)),
    GetSearchSuggest: (...args) => callOperation("getSearchSuggest", ...(args as GenesysCloudFullApiOperationArgs<"getSearchSuggest">)),
    PostDocumentationGknSearch: (...args) => callOperation("postDocumentationGknSearch", ...(args as GenesysCloudFullApiOperationArgs<"postDocumentationGknSearch">)),
    PostDocumentationSearch: (...args) => callOperation("postDocumentationSearch", ...(args as GenesysCloudFullApiOperationArgs<"postDocumentationSearch">)),
    PostSearch: (...args) => callOperation("postSearch", ...(args as GenesysCloudFullApiOperationArgs<"postSearch">)),
    PostSearchSuggest: (...args) => callOperation("postSearchSuggest", ...(args as GenesysCloudFullApiOperationArgs<"postSearchSuggest">)),
    PostSpeechandtextanalyticsTranscriptsSearch: (...args) => callOperation("postSpeechandtextanalyticsTranscriptsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postSpeechandtextanalyticsTranscriptsSearch">)),
  };
}
