// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiArticlesOperationKeys = [
  "GetArticles",
  "CreateanArticle",
  "GetArticlebyID",
  "UpdateArticle",
  "SearchArticles"
] as const;
export type KustomerFullApiArticlesOperationKey = typeof KustomerFullApiArticlesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiArticlesOperationPathParamMap {
  "GetArticles": {};
  "CreateanArticle": {};
  "GetArticlebyID": { "id": KustomerFullApiPathParamValue };
  "UpdateArticle": { "id": KustomerFullApiPathParamValue };
  "SearchArticles": {};
}

export interface KustomerFullApiArticlesOperationRequestMap {
  "GetArticles": KustomerFullApiOperationInput<"GetArticles">;
  "CreateanArticle": KustomerFullApiOperationInput<"CreateanArticle">;
  "GetArticlebyID": KustomerFullApiOperationInput<"GetArticlebyID">;
  "UpdateArticle": KustomerFullApiOperationInput<"UpdateArticle">;
  "SearchArticles": KustomerFullApiOperationInput<"SearchArticles">;
}

export interface KustomerFullApiArticlesGeneratedClient {
  kustomerGetArticles(...args: KustomerFullApiOperationArgs<"GetArticles">): Promise<KustomerFullApiOperationResponseMap["GetArticles"]>;
  kustomerCreateanArticle(...args: KustomerFullApiOperationArgs<"CreateanArticle">): Promise<KustomerFullApiOperationResponseMap["CreateanArticle"]>;
  kustomerGetArticlebyID(...args: KustomerFullApiOperationArgs<"GetArticlebyID">): Promise<KustomerFullApiOperationResponseMap["GetArticlebyID"]>;
  kustomerUpdateArticle(...args: KustomerFullApiOperationArgs<"UpdateArticle">): Promise<KustomerFullApiOperationResponseMap["UpdateArticle"]>;
  kustomerSearchArticles(...args: KustomerFullApiOperationArgs<"SearchArticles">): Promise<KustomerFullApiOperationResponseMap["SearchArticles"]>;
}

export const KustomerFullApiArticlesGeneratedFunctionNames = [
  "kustomerGetArticles",
  "kustomerCreateanArticle",
  "kustomerGetArticlebyID",
  "kustomerUpdateArticle",
  "kustomerSearchArticles"
] as const satisfies readonly (keyof KustomerFullApiArticlesGeneratedClient)[];

export function createKustomerFullApiArticlesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiArticlesGeneratedClient {
  return {
    kustomerGetArticles: (...args) => callOperation("GetArticles", ...(args as KustomerFullApiOperationArgs<"GetArticles">)),
    kustomerCreateanArticle: (...args) => callOperation("CreateanArticle", ...(args as KustomerFullApiOperationArgs<"CreateanArticle">)),
    kustomerGetArticlebyID: (...args) => callOperation("GetArticlebyID", ...(args as KustomerFullApiOperationArgs<"GetArticlebyID">)),
    kustomerUpdateArticle: (...args) => callOperation("UpdateArticle", ...(args as KustomerFullApiOperationArgs<"UpdateArticle">)),
    kustomerSearchArticles: (...args) => callOperation("SearchArticles", ...(args as KustomerFullApiOperationArgs<"SearchArticles">)),
  };
}
