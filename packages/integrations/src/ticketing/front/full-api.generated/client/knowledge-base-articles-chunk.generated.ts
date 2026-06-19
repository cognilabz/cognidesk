// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiKnowledgeBaseArticlesOperationKeys = [
  "delete-an-article",
  "get-a-knowledge-base-article",
  "get-knowledge-base-article-with-content-in-default-locale",
  "update-article-content-in-default-locale",
  "download-attachment-from-an-article",
  "get-knowledge-base-article-with-content-in-specified-locale",
  "update-article-content-in-specified-locale",
  "list-articles-in-a-category",
  "list-articles-in-a-knowledge-base"
] as const;
export type FrontFullApiKnowledgeBaseArticlesOperationKey = typeof FrontFullApiKnowledgeBaseArticlesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiKnowledgeBaseArticlesOperationPathParamMap {
  "delete-an-article": { "article_id": FrontFullApiPathParamValue };
  "get-a-knowledge-base-article": { "article_id": FrontFullApiPathParamValue };
  "get-knowledge-base-article-with-content-in-default-locale": { "article_id": FrontFullApiPathParamValue };
  "update-article-content-in-default-locale": { "article_id": FrontFullApiPathParamValue };
  "download-attachment-from-an-article": { "article_id": FrontFullApiPathParamValue; "attachment_id": FrontFullApiPathParamValue };
  "get-knowledge-base-article-with-content-in-specified-locale": { "article_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "update-article-content-in-specified-locale": { "article_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "list-articles-in-a-category": { "category_id": FrontFullApiPathParamValue };
  "list-articles-in-a-knowledge-base": { "knowledge_base_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiKnowledgeBaseArticlesOperationRequestMap {
  "delete-an-article": FrontFullApiOperationInput<"delete-an-article">;
  "get-a-knowledge-base-article": FrontFullApiOperationInput<"get-a-knowledge-base-article">;
  "get-knowledge-base-article-with-content-in-default-locale": FrontFullApiOperationInput<"get-knowledge-base-article-with-content-in-default-locale">;
  "update-article-content-in-default-locale": FrontFullApiOperationInput<"update-article-content-in-default-locale">;
  "download-attachment-from-an-article": FrontFullApiOperationInput<"download-attachment-from-an-article">;
  "get-knowledge-base-article-with-content-in-specified-locale": FrontFullApiOperationInput<"get-knowledge-base-article-with-content-in-specified-locale">;
  "update-article-content-in-specified-locale": FrontFullApiOperationInput<"update-article-content-in-specified-locale">;
  "list-articles-in-a-category": FrontFullApiOperationInput<"list-articles-in-a-category">;
  "list-articles-in-a-knowledge-base": FrontFullApiOperationInput<"list-articles-in-a-knowledge-base">;
}

export interface FrontFullApiKnowledgeBaseArticlesGeneratedClient {
  frontDeleteAnArticle(...args: FrontFullApiOperationArgs<"delete-an-article">): Promise<FrontFullApiOperationResponseMap["delete-an-article"]>;
  frontGetAKnowledgeBaseArticle(...args: FrontFullApiOperationArgs<"get-a-knowledge-base-article">): Promise<FrontFullApiOperationResponseMap["get-a-knowledge-base-article"]>;
  frontGetKnowledgeBaseArticleWithContentInDefaultLocale(...args: FrontFullApiOperationArgs<"get-knowledge-base-article-with-content-in-default-locale">): Promise<FrontFullApiOperationResponseMap["get-knowledge-base-article-with-content-in-default-locale"]>;
  frontUpdateArticleContentInDefaultLocale(...args: FrontFullApiOperationArgs<"update-article-content-in-default-locale">): Promise<FrontFullApiOperationResponseMap["update-article-content-in-default-locale"]>;
  frontDownloadAttachmentFromAnArticle(...args: FrontFullApiOperationArgs<"download-attachment-from-an-article">): Promise<FrontFullApiOperationResponseMap["download-attachment-from-an-article"]>;
  frontGetKnowledgeBaseArticleWithContentInSpecifiedLocale(...args: FrontFullApiOperationArgs<"get-knowledge-base-article-with-content-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["get-knowledge-base-article-with-content-in-specified-locale"]>;
  frontUpdateArticleContentInSpecifiedLocale(...args: FrontFullApiOperationArgs<"update-article-content-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["update-article-content-in-specified-locale"]>;
  frontListArticlesInACategory(...args: FrontFullApiOperationArgs<"list-articles-in-a-category">): Promise<FrontFullApiOperationResponseMap["list-articles-in-a-category"]>;
  frontListArticlesInAKnowledgeBase(...args: FrontFullApiOperationArgs<"list-articles-in-a-knowledge-base">): Promise<FrontFullApiOperationResponseMap["list-articles-in-a-knowledge-base"]>;
}

export const FrontFullApiKnowledgeBaseArticlesGeneratedFunctionNames = [
  "frontDeleteAnArticle",
  "frontGetAKnowledgeBaseArticle",
  "frontGetKnowledgeBaseArticleWithContentInDefaultLocale",
  "frontUpdateArticleContentInDefaultLocale",
  "frontDownloadAttachmentFromAnArticle",
  "frontGetKnowledgeBaseArticleWithContentInSpecifiedLocale",
  "frontUpdateArticleContentInSpecifiedLocale",
  "frontListArticlesInACategory",
  "frontListArticlesInAKnowledgeBase"
] as const satisfies readonly (keyof FrontFullApiKnowledgeBaseArticlesGeneratedClient)[];

export function createFrontFullApiKnowledgeBaseArticlesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiKnowledgeBaseArticlesGeneratedClient {
  return {
    frontDeleteAnArticle: (...args) => callOperation("delete-an-article", ...(args as FrontFullApiOperationArgs<"delete-an-article">)),
    frontGetAKnowledgeBaseArticle: (...args) => callOperation("get-a-knowledge-base-article", ...(args as FrontFullApiOperationArgs<"get-a-knowledge-base-article">)),
    frontGetKnowledgeBaseArticleWithContentInDefaultLocale: (...args) => callOperation("get-knowledge-base-article-with-content-in-default-locale", ...(args as FrontFullApiOperationArgs<"get-knowledge-base-article-with-content-in-default-locale">)),
    frontUpdateArticleContentInDefaultLocale: (...args) => callOperation("update-article-content-in-default-locale", ...(args as FrontFullApiOperationArgs<"update-article-content-in-default-locale">)),
    frontDownloadAttachmentFromAnArticle: (...args) => callOperation("download-attachment-from-an-article", ...(args as FrontFullApiOperationArgs<"download-attachment-from-an-article">)),
    frontGetKnowledgeBaseArticleWithContentInSpecifiedLocale: (...args) => callOperation("get-knowledge-base-article-with-content-in-specified-locale", ...(args as FrontFullApiOperationArgs<"get-knowledge-base-article-with-content-in-specified-locale">)),
    frontUpdateArticleContentInSpecifiedLocale: (...args) => callOperation("update-article-content-in-specified-locale", ...(args as FrontFullApiOperationArgs<"update-article-content-in-specified-locale">)),
    frontListArticlesInACategory: (...args) => callOperation("list-articles-in-a-category", ...(args as FrontFullApiOperationArgs<"list-articles-in-a-category">)),
    frontListArticlesInAKnowledgeBase: (...args) => callOperation("list-articles-in-a-knowledge-base", ...(args as FrontFullApiOperationArgs<"list-articles-in-a-knowledge-base">)),
  };
}
