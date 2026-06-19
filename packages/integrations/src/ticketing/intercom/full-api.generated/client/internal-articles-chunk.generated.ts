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
export const IntercomFullApiInternalArticlesOperationKeys = [
  "listInternalArticles",
  "createInternalArticle",
  "deleteInternalArticle",
  "retrieveInternalArticle",
  "updateInternalArticle",
  "searchInternalArticles"
] as const;
export type IntercomFullApiInternalArticlesOperationKey = typeof IntercomFullApiInternalArticlesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiInternalArticlesOperationPathParamMap {
  "listInternalArticles": {};
  "createInternalArticle": {};
  "deleteInternalArticle": { "internal_article_id": IntercomFullApiPathParamValue };
  "retrieveInternalArticle": { "internal_article_id": IntercomFullApiPathParamValue };
  "updateInternalArticle": { "internal_article_id": IntercomFullApiPathParamValue };
  "searchInternalArticles": {};
}

export interface IntercomFullApiInternalArticlesOperationRequestMap {
  "listInternalArticles": IntercomFullApiOperationInput<"listInternalArticles">;
  "createInternalArticle": IntercomFullApiOperationInput<"createInternalArticle">;
  "deleteInternalArticle": IntercomFullApiOperationInput<"deleteInternalArticle">;
  "retrieveInternalArticle": IntercomFullApiOperationInput<"retrieveInternalArticle">;
  "updateInternalArticle": IntercomFullApiOperationInput<"updateInternalArticle">;
  "searchInternalArticles": IntercomFullApiOperationInput<"searchInternalArticles">;
}

export interface IntercomFullApiInternalArticlesGeneratedClient {
  intercomListInternalArticles(...args: IntercomFullApiOperationArgs<"listInternalArticles">): Promise<IntercomFullApiOperationResponseMap["listInternalArticles"]>;
  intercomCreateInternalArticle(...args: IntercomFullApiOperationArgs<"createInternalArticle">): Promise<IntercomFullApiOperationResponseMap["createInternalArticle"]>;
  intercomDeleteInternalArticle(...args: IntercomFullApiOperationArgs<"deleteInternalArticle">): Promise<IntercomFullApiOperationResponseMap["deleteInternalArticle"]>;
  intercomRetrieveInternalArticle(...args: IntercomFullApiOperationArgs<"retrieveInternalArticle">): Promise<IntercomFullApiOperationResponseMap["retrieveInternalArticle"]>;
  intercomUpdateInternalArticle(...args: IntercomFullApiOperationArgs<"updateInternalArticle">): Promise<IntercomFullApiOperationResponseMap["updateInternalArticle"]>;
  intercomSearchInternalArticles(...args: IntercomFullApiOperationArgs<"searchInternalArticles">): Promise<IntercomFullApiOperationResponseMap["searchInternalArticles"]>;
}

export const IntercomFullApiInternalArticlesGeneratedFunctionNames = [
  "intercomListInternalArticles",
  "intercomCreateInternalArticle",
  "intercomDeleteInternalArticle",
  "intercomRetrieveInternalArticle",
  "intercomUpdateInternalArticle",
  "intercomSearchInternalArticles"
] as const satisfies readonly (keyof IntercomFullApiInternalArticlesGeneratedClient)[];

export function createIntercomFullApiInternalArticlesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiInternalArticlesGeneratedClient {
  return {
    intercomListInternalArticles: (...args) => callOperation("listInternalArticles", ...(args as IntercomFullApiOperationArgs<"listInternalArticles">)),
    intercomCreateInternalArticle: (...args) => callOperation("createInternalArticle", ...(args as IntercomFullApiOperationArgs<"createInternalArticle">)),
    intercomDeleteInternalArticle: (...args) => callOperation("deleteInternalArticle", ...(args as IntercomFullApiOperationArgs<"deleteInternalArticle">)),
    intercomRetrieveInternalArticle: (...args) => callOperation("retrieveInternalArticle", ...(args as IntercomFullApiOperationArgs<"retrieveInternalArticle">)),
    intercomUpdateInternalArticle: (...args) => callOperation("updateInternalArticle", ...(args as IntercomFullApiOperationArgs<"updateInternalArticle">)),
    intercomSearchInternalArticles: (...args) => callOperation("searchInternalArticles", ...(args as IntercomFullApiOperationArgs<"searchInternalArticles">)),
  };
}
