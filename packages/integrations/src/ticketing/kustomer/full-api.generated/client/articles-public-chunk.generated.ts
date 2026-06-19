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
export const KustomerFullApiArticlesPublicOperationKeys = [
  "GetArticles(Public)",
  "SearchArticles(Public)"
] as const;
export type KustomerFullApiArticlesPublicOperationKey = typeof KustomerFullApiArticlesPublicOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiArticlesPublicOperationPathParamMap {
  "GetArticles(Public)": {};
  "SearchArticles(Public)": {};
}

export interface KustomerFullApiArticlesPublicOperationRequestMap {
  "GetArticles(Public)": KustomerFullApiOperationInput<"GetArticles(Public)">;
  "SearchArticles(Public)": KustomerFullApiOperationInput<"SearchArticles(Public)">;
}

export interface KustomerFullApiArticlesPublicGeneratedClient {
  kustomerGetArticlesPublic(...args: KustomerFullApiOperationArgs<"GetArticles(Public)">): Promise<KustomerFullApiOperationResponseMap["GetArticles(Public)"]>;
  kustomerSearchArticlesPublic(...args: KustomerFullApiOperationArgs<"SearchArticles(Public)">): Promise<KustomerFullApiOperationResponseMap["SearchArticles(Public)"]>;
}

export const KustomerFullApiArticlesPublicGeneratedFunctionNames = [
  "kustomerGetArticlesPublic",
  "kustomerSearchArticlesPublic"
] as const satisfies readonly (keyof KustomerFullApiArticlesPublicGeneratedClient)[];

export function createKustomerFullApiArticlesPublicGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiArticlesPublicGeneratedClient {
  return {
    kustomerGetArticlesPublic: (...args) => callOperation("GetArticles(Public)", ...(args as KustomerFullApiOperationArgs<"GetArticles(Public)">)),
    kustomerSearchArticlesPublic: (...args) => callOperation("SearchArticles(Public)", ...(args as KustomerFullApiOperationArgs<"SearchArticles(Public)">)),
  };
}
