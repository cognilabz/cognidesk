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
export const FrontFullApiKnowledgeBaseCategoriesOperationKeys = [
  "delete-a-knowledge-base-category",
  "get-a-knowledge-base-category",
  "get-knowledge-base-category-content-in-default-locale",
  "update-knowledge-base-category-in-default-locale",
  "get-knowledge-base-category-with-content-in-specified-locale",
  "update-knowledge-base-category-in-specified-locale",
  "list-categories-in-a-knowledge-base"
] as const;
export type FrontFullApiKnowledgeBaseCategoriesOperationKey = typeof FrontFullApiKnowledgeBaseCategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiKnowledgeBaseCategoriesOperationPathParamMap {
  "delete-a-knowledge-base-category": { "category_id": FrontFullApiPathParamValue };
  "get-a-knowledge-base-category": { "category_id": FrontFullApiPathParamValue };
  "get-knowledge-base-category-content-in-default-locale": { "category_id": FrontFullApiPathParamValue };
  "update-knowledge-base-category-in-default-locale": { "category_id": FrontFullApiPathParamValue };
  "get-knowledge-base-category-with-content-in-specified-locale": { "category_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "update-knowledge-base-category-in-specified-locale": { "category_id": FrontFullApiPathParamValue; "locale": FrontFullApiPathParamValue };
  "list-categories-in-a-knowledge-base": { "knowledge_base_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiKnowledgeBaseCategoriesOperationRequestMap {
  "delete-a-knowledge-base-category": FrontFullApiOperationInput<"delete-a-knowledge-base-category">;
  "get-a-knowledge-base-category": FrontFullApiOperationInput<"get-a-knowledge-base-category">;
  "get-knowledge-base-category-content-in-default-locale": FrontFullApiOperationInput<"get-knowledge-base-category-content-in-default-locale">;
  "update-knowledge-base-category-in-default-locale": FrontFullApiOperationInput<"update-knowledge-base-category-in-default-locale">;
  "get-knowledge-base-category-with-content-in-specified-locale": FrontFullApiOperationInput<"get-knowledge-base-category-with-content-in-specified-locale">;
  "update-knowledge-base-category-in-specified-locale": FrontFullApiOperationInput<"update-knowledge-base-category-in-specified-locale">;
  "list-categories-in-a-knowledge-base": FrontFullApiOperationInput<"list-categories-in-a-knowledge-base">;
}

export interface FrontFullApiKnowledgeBaseCategoriesGeneratedClient {
  frontDeleteAKnowledgeBaseCategory(...args: FrontFullApiOperationArgs<"delete-a-knowledge-base-category">): Promise<FrontFullApiOperationResponseMap["delete-a-knowledge-base-category"]>;
  frontGetAKnowledgeBaseCategory(...args: FrontFullApiOperationArgs<"get-a-knowledge-base-category">): Promise<FrontFullApiOperationResponseMap["get-a-knowledge-base-category"]>;
  frontGetKnowledgeBaseCategoryContentInDefaultLocale(...args: FrontFullApiOperationArgs<"get-knowledge-base-category-content-in-default-locale">): Promise<FrontFullApiOperationResponseMap["get-knowledge-base-category-content-in-default-locale"]>;
  frontUpdateKnowledgeBaseCategoryInDefaultLocale(...args: FrontFullApiOperationArgs<"update-knowledge-base-category-in-default-locale">): Promise<FrontFullApiOperationResponseMap["update-knowledge-base-category-in-default-locale"]>;
  frontGetKnowledgeBaseCategoryWithContentInSpecifiedLocale(...args: FrontFullApiOperationArgs<"get-knowledge-base-category-with-content-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["get-knowledge-base-category-with-content-in-specified-locale"]>;
  frontUpdateKnowledgeBaseCategoryInSpecifiedLocale(...args: FrontFullApiOperationArgs<"update-knowledge-base-category-in-specified-locale">): Promise<FrontFullApiOperationResponseMap["update-knowledge-base-category-in-specified-locale"]>;
  frontListCategoriesInAKnowledgeBase(...args: FrontFullApiOperationArgs<"list-categories-in-a-knowledge-base">): Promise<FrontFullApiOperationResponseMap["list-categories-in-a-knowledge-base"]>;
}

export const FrontFullApiKnowledgeBaseCategoriesGeneratedFunctionNames = [
  "frontDeleteAKnowledgeBaseCategory",
  "frontGetAKnowledgeBaseCategory",
  "frontGetKnowledgeBaseCategoryContentInDefaultLocale",
  "frontUpdateKnowledgeBaseCategoryInDefaultLocale",
  "frontGetKnowledgeBaseCategoryWithContentInSpecifiedLocale",
  "frontUpdateKnowledgeBaseCategoryInSpecifiedLocale",
  "frontListCategoriesInAKnowledgeBase"
] as const satisfies readonly (keyof FrontFullApiKnowledgeBaseCategoriesGeneratedClient)[];

export function createFrontFullApiKnowledgeBaseCategoriesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiKnowledgeBaseCategoriesGeneratedClient {
  return {
    frontDeleteAKnowledgeBaseCategory: (...args) => callOperation("delete-a-knowledge-base-category", ...(args as FrontFullApiOperationArgs<"delete-a-knowledge-base-category">)),
    frontGetAKnowledgeBaseCategory: (...args) => callOperation("get-a-knowledge-base-category", ...(args as FrontFullApiOperationArgs<"get-a-knowledge-base-category">)),
    frontGetKnowledgeBaseCategoryContentInDefaultLocale: (...args) => callOperation("get-knowledge-base-category-content-in-default-locale", ...(args as FrontFullApiOperationArgs<"get-knowledge-base-category-content-in-default-locale">)),
    frontUpdateKnowledgeBaseCategoryInDefaultLocale: (...args) => callOperation("update-knowledge-base-category-in-default-locale", ...(args as FrontFullApiOperationArgs<"update-knowledge-base-category-in-default-locale">)),
    frontGetKnowledgeBaseCategoryWithContentInSpecifiedLocale: (...args) => callOperation("get-knowledge-base-category-with-content-in-specified-locale", ...(args as FrontFullApiOperationArgs<"get-knowledge-base-category-with-content-in-specified-locale">)),
    frontUpdateKnowledgeBaseCategoryInSpecifiedLocale: (...args) => callOperation("update-knowledge-base-category-in-specified-locale", ...(args as FrontFullApiOperationArgs<"update-knowledge-base-category-in-specified-locale">)),
    frontListCategoriesInAKnowledgeBase: (...args) => callOperation("list-categories-in-a-knowledge-base", ...(args as FrontFullApiOperationArgs<"list-categories-in-a-knowledge-base">)),
  };
}
