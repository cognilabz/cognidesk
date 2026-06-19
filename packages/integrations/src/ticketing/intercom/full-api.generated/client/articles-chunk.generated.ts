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
export const IntercomFullApiArticlesOperationKeys = [
  "listArticles",
  "createArticle",
  "deleteArticle",
  "retrieveArticle",
  "updateArticle",
  "searchArticles"
] as const;
export type IntercomFullApiArticlesOperationKey = typeof IntercomFullApiArticlesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiArticlesOperationPathParamMap {
  "listArticles": {};
  "createArticle": {};
  "deleteArticle": { "article_id": IntercomFullApiPathParamValue };
  "retrieveArticle": { "article_id": IntercomFullApiPathParamValue };
  "updateArticle": { "article_id": IntercomFullApiPathParamValue };
  "searchArticles": {};
}

export interface IntercomFullApiArticlesOperationRequestMap {
  "listArticles": IntercomFullApiOperationInput<"listArticles">;
  "createArticle": IntercomFullApiOperationInput<"createArticle">;
  "deleteArticle": IntercomFullApiOperationInput<"deleteArticle">;
  "retrieveArticle": IntercomFullApiOperationInput<"retrieveArticle">;
  "updateArticle": IntercomFullApiOperationInput<"updateArticle">;
  "searchArticles": IntercomFullApiOperationInput<"searchArticles">;
}

export interface IntercomFullApiArticlesGeneratedClient {
  intercomListArticles(...args: IntercomFullApiOperationArgs<"listArticles">): Promise<IntercomFullApiOperationResponseMap["listArticles"]>;
  intercomCreateArticle(...args: IntercomFullApiOperationArgs<"createArticle">): Promise<IntercomFullApiOperationResponseMap["createArticle"]>;
  intercomDeleteArticle(...args: IntercomFullApiOperationArgs<"deleteArticle">): Promise<IntercomFullApiOperationResponseMap["deleteArticle"]>;
  intercomRetrieveArticle(...args: IntercomFullApiOperationArgs<"retrieveArticle">): Promise<IntercomFullApiOperationResponseMap["retrieveArticle"]>;
  intercomUpdateArticle(...args: IntercomFullApiOperationArgs<"updateArticle">): Promise<IntercomFullApiOperationResponseMap["updateArticle"]>;
  intercomSearchArticles(...args: IntercomFullApiOperationArgs<"searchArticles">): Promise<IntercomFullApiOperationResponseMap["searchArticles"]>;
}

export const IntercomFullApiArticlesGeneratedFunctionNames = [
  "intercomListArticles",
  "intercomCreateArticle",
  "intercomDeleteArticle",
  "intercomRetrieveArticle",
  "intercomUpdateArticle",
  "intercomSearchArticles"
] as const satisfies readonly (keyof IntercomFullApiArticlesGeneratedClient)[];

export function createIntercomFullApiArticlesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiArticlesGeneratedClient {
  return {
    intercomListArticles: (...args) => callOperation("listArticles", ...(args as IntercomFullApiOperationArgs<"listArticles">)),
    intercomCreateArticle: (...args) => callOperation("createArticle", ...(args as IntercomFullApiOperationArgs<"createArticle">)),
    intercomDeleteArticle: (...args) => callOperation("deleteArticle", ...(args as IntercomFullApiOperationArgs<"deleteArticle">)),
    intercomRetrieveArticle: (...args) => callOperation("retrieveArticle", ...(args as IntercomFullApiOperationArgs<"retrieveArticle">)),
    intercomUpdateArticle: (...args) => callOperation("updateArticle", ...(args as IntercomFullApiOperationArgs<"updateArticle">)),
    intercomSearchArticles: (...args) => callOperation("searchArticles", ...(args as IntercomFullApiOperationArgs<"searchArticles">)),
  };
}
