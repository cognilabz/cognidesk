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
export const FrontFullApiKnowledgeBasesOperationKeys = [
  "list-knowledge-bases",
  "create-a-knowledge-base",
  "get-a-knowledge-base",
  "create-article-in-a-knowledge-base-in-default-locale",
  "create-knowledge-base-category-in-default-locale",
  "get-a-knowledge-base-with-content-in-default-locale",
  "update-knowledge-base-in-default-locale",
  "create-article-in-a-knowledge-base-in-specified-locale",
  "create-knowledge-base-category-in-specified-locale",
  "get-a-knowledge-base-with-content-in-specified-locale",
  "update-knowledge-base-in-specified-locale"
] as const;
export type FrontFullApiKnowledgeBasesOperationKey = typeof FrontFullApiKnowledgeBasesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiKnowledgeBasesOperationPathParamMap {
  "list-knowledge-bases": {};
  "create-a-knowledge-base": {};
  "get-a-knowledge-base": { "knowledge_base_id": FrontFullApiPathParamValue };
  "create-article-in-a-knowledge-base-in-default-locale": { "knowledge_base_id": FrontFullApiPathParamValue };
  "create-knowledge-base-category-in-default-locale": { "knowledge_base_id": FrontFullApiPathParamValue };
  "get-a-knowledge-base-with-content-in-default-locale": { "knowledge_base_id": FrontFullApiPathParamValue };
  "update-knowledge-base-in-default-locale": { "knowledge_base_id": FrontFullApiPathParamValue };
  "create-article-in-a-knowledge-base-in-specified-locale": { "knowledge_base_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "create-knowledge-base-category-in-specified-locale": { "knowledge_base_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "get-a-knowledge-base-with-content-in-specified-locale": { "knowledge_base_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "update-knowledge-base-in-specified-locale": { "knowledge_base_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
}

export interface FrontFullApiKnowledgeBasesOperationRequestMap {
  "list-knowledge-bases": FrontFullApiOperationInput<"list-knowledge-bases">;
  "create-a-knowledge-base": FrontFullApiOperationInput<"create-a-knowledge-base">;
  "get-a-knowledge-base": FrontFullApiOperationInput<"get-a-knowledge-base">;
  "create-article-in-a-knowledge-base-in-default-locale": FrontFullApiOperationInput<"create-article-in-a-knowledge-base-in-default-locale">;
  "create-knowledge-base-category-in-default-locale": FrontFullApiOperationInput<"create-knowledge-base-category-in-default-locale">;
  "get-a-knowledge-base-with-content-in-default-locale": FrontFullApiOperationInput<"get-a-knowledge-base-with-content-in-default-locale">;
  "update-knowledge-base-in-default-locale": FrontFullApiOperationInput<"update-knowledge-base-in-default-locale">;
  "create-article-in-a-knowledge-base-in-specified-locale": FrontFullApiOperationInput<"create-article-in-a-knowledge-base-in-specified-locale">;
  "create-knowledge-base-category-in-specified-locale": FrontFullApiOperationInput<"create-knowledge-base-category-in-specified-locale">;
  "get-a-knowledge-base-with-content-in-specified-locale": FrontFullApiOperationInput<"get-a-knowledge-base-with-content-in-specified-locale">;
  "update-knowledge-base-in-specified-locale": FrontFullApiOperationInput<"update-knowledge-base-in-specified-locale">;
}

export interface FrontFullApiKnowledgeBasesGeneratedClient {
  frontListKnowledgeBases(...args: FrontFullApiOperationArgs<"list-knowledge-bases">): Promise<FrontFullApiOperationResponseMap["list-knowledge-bases"]>;
  frontCreateAKnowledgeBase(...args: FrontFullApiOperationArgs<"create-a-knowledge-base">): Promise<FrontFullApiOperationResponseMap["create-a-knowledge-base"]>;
  frontGetAKnowledgeBase(...args: FrontFullApiOperationArgs<"get-a-knowledge-base">): Promise<FrontFullApiOperationResponseMap["get-a-knowledge-base"]>;
  frontCreateArticleInAKnowledgeBaseInDefaultLocale(...args: FrontFullApiOperationArgs<"create-article-in-a-knowledge-base-in-default-locale">): Promise<FrontFullApiOperationResponseMap["create-article-in-a-knowledge-base-in-default-locale"]>;
  frontCreateKnowledgeBaseCategoryInDefaultLocale(...args: FrontFullApiOperationArgs<"create-knowledge-base-category-in-default-locale">): Promise<FrontFullApiOperationResponseMap["create-knowledge-base-category-in-default-locale"]>;
  frontGetAKnowledgeBaseWithContentInDefaultLocale(...args: FrontFullApiOperationArgs<"get-a-knowledge-base-with-content-in-default-locale">): Promise<FrontFullApiOperationResponseMap["get-a-knowledge-base-with-content-in-default-locale"]>;
  frontUpdateKnowledgeBaseInDefaultLocale(...args: FrontFullApiOperationArgs<"update-knowledge-base-in-default-locale">): Promise<FrontFullApiOperationResponseMap["update-knowledge-base-in-default-locale"]>;
  frontCreateArticleInAKnowledgeBaseInSpecifiedLocale(...args: FrontFullApiOperationArgs<"create-article-in-a-knowledge-base-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["create-article-in-a-knowledge-base-in-specified-locale"]>;
  frontCreateKnowledgeBaseCategoryInSpecifiedLocale(...args: FrontFullApiOperationArgs<"create-knowledge-base-category-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["create-knowledge-base-category-in-specified-locale"]>;
  frontGetAKnowledgeBaseWithContentInSpecifiedLocale(...args: FrontFullApiOperationArgs<"get-a-knowledge-base-with-content-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["get-a-knowledge-base-with-content-in-specified-locale"]>;
  frontUpdateKnowledgeBaseInSpecifiedLocale(...args: FrontFullApiOperationArgs<"update-knowledge-base-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["update-knowledge-base-in-specified-locale"]>;
}

export const FrontFullApiKnowledgeBasesGeneratedFunctionNames = [
  "frontListKnowledgeBases",
  "frontCreateAKnowledgeBase",
  "frontGetAKnowledgeBase",
  "frontCreateArticleInAKnowledgeBaseInDefaultLocale",
  "frontCreateKnowledgeBaseCategoryInDefaultLocale",
  "frontGetAKnowledgeBaseWithContentInDefaultLocale",
  "frontUpdateKnowledgeBaseInDefaultLocale",
  "frontCreateArticleInAKnowledgeBaseInSpecifiedLocale",
  "frontCreateKnowledgeBaseCategoryInSpecifiedLocale",
  "frontGetAKnowledgeBaseWithContentInSpecifiedLocale",
  "frontUpdateKnowledgeBaseInSpecifiedLocale"
] as const satisfies readonly (keyof FrontFullApiKnowledgeBasesGeneratedClient)[];

export function createFrontFullApiKnowledgeBasesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiKnowledgeBasesGeneratedClient {
  return {
    frontListKnowledgeBases: (...args) => callOperation("list-knowledge-bases", ...(args as FrontFullApiOperationArgs<"list-knowledge-bases">)),
    frontCreateAKnowledgeBase: (...args) => callOperation("create-a-knowledge-base", ...(args as FrontFullApiOperationArgs<"create-a-knowledge-base">)),
    frontGetAKnowledgeBase: (...args) => callOperation("get-a-knowledge-base", ...(args as FrontFullApiOperationArgs<"get-a-knowledge-base">)),
    frontCreateArticleInAKnowledgeBaseInDefaultLocale: (...args) => callOperation("create-article-in-a-knowledge-base-in-default-locale", ...(args as FrontFullApiOperationArgs<"create-article-in-a-knowledge-base-in-default-locale">)),
    frontCreateKnowledgeBaseCategoryInDefaultLocale: (...args) => callOperation("create-knowledge-base-category-in-default-locale", ...(args as FrontFullApiOperationArgs<"create-knowledge-base-category-in-default-locale">)),
    frontGetAKnowledgeBaseWithContentInDefaultLocale: (...args) => callOperation("get-a-knowledge-base-with-content-in-default-locale", ...(args as FrontFullApiOperationArgs<"get-a-knowledge-base-with-content-in-default-locale">)),
    frontUpdateKnowledgeBaseInDefaultLocale: (...args) => callOperation("update-knowledge-base-in-default-locale", ...(args as FrontFullApiOperationArgs<"update-knowledge-base-in-default-locale">)),
    frontCreateArticleInAKnowledgeBaseInSpecifiedLocale: (...args) => callOperation("create-article-in-a-knowledge-base-in-specified-locale", ...(args as FrontFullApiOperationArgs<"create-article-in-a-knowledge-base-in-specified-locale">)),
    frontCreateKnowledgeBaseCategoryInSpecifiedLocale: (...args) => callOperation("create-knowledge-base-category-in-specified-locale", ...(args as FrontFullApiOperationArgs<"create-knowledge-base-category-in-specified-locale">)),
    frontGetAKnowledgeBaseWithContentInSpecifiedLocale: (...args) => callOperation("get-a-knowledge-base-with-content-in-specified-locale", ...(args as FrontFullApiOperationArgs<"get-a-knowledge-base-with-content-in-specified-locale">)),
    frontUpdateKnowledgeBaseInSpecifiedLocale: (...args) => callOperation("update-knowledge-base-in-specified-locale", ...(args as FrontFullApiOperationArgs<"update-knowledge-base-in-specified-locale">)),
  };
}
