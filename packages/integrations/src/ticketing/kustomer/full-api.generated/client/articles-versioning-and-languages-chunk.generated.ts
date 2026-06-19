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
export const KustomerFullApiArticlesVersioningAndLanguagesOperationKeys = [
  "DeleteVersionsofaLanguage",
  "GetArticleVersionsbyLanguage",
  "CreateaVersion",
  "DeleteaDraftVersion",
  "UpdateaDraftVersion",
  "UpdateLatestPublishedArticleVersion",
  "GetArticleVersionbyID"
] as const;
export type KustomerFullApiArticlesVersioningAndLanguagesOperationKey = typeof KustomerFullApiArticlesVersioningAndLanguagesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiArticlesVersioningAndLanguagesOperationPathParamMap {
  "DeleteVersionsofaLanguage": { "id": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "GetArticleVersionsbyLanguage": { "id": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "CreateaVersion": { "id": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "DeleteaDraftVersion": { "id": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "UpdateaDraftVersion": { "id": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "UpdateLatestPublishedArticleVersion": { "id": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "GetArticleVersionbyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiArticlesVersioningAndLanguagesOperationRequestMap {
  "DeleteVersionsofaLanguage": KustomerFullApiOperationInput<"DeleteVersionsofaLanguage">;
  "GetArticleVersionsbyLanguage": KustomerFullApiOperationInput<"GetArticleVersionsbyLanguage">;
  "CreateaVersion": KustomerFullApiOperationInput<"CreateaVersion">;
  "DeleteaDraftVersion": KustomerFullApiOperationInput<"DeleteaDraftVersion">;
  "UpdateaDraftVersion": KustomerFullApiOperationInput<"UpdateaDraftVersion">;
  "UpdateLatestPublishedArticleVersion": KustomerFullApiOperationInput<"UpdateLatestPublishedArticleVersion">;
  "GetArticleVersionbyID": KustomerFullApiOperationInput<"GetArticleVersionbyID">;
}

export interface KustomerFullApiArticlesVersioningAndLanguagesGeneratedClient {
  kustomerDeleteVersionsofaLanguage(...args: KustomerFullApiOperationArgs<"DeleteVersionsofaLanguage">): Promise<KustomerFullApiOperationResponseMap["DeleteVersionsofaLanguage"]>;
  kustomerGetArticleVersionsbyLanguage(...args: KustomerFullApiOperationArgs<"GetArticleVersionsbyLanguage">): Promise<KustomerFullApiOperationResponseMap["GetArticleVersionsbyLanguage"]>;
  kustomerCreateaVersion(...args: KustomerFullApiOperationArgs<"CreateaVersion">): Promise<KustomerFullApiOperationResponseMap["CreateaVersion"]>;
  kustomerDeleteaDraftVersion(...args: KustomerFullApiOperationArgs<"DeleteaDraftVersion">): Promise<KustomerFullApiOperationResponseMap["DeleteaDraftVersion"]>;
  kustomerUpdateaDraftVersion(...args: KustomerFullApiOperationArgs<"UpdateaDraftVersion">): Promise<KustomerFullApiOperationResponseMap["UpdateaDraftVersion"]>;
  kustomerUpdateLatestPublishedArticleVersion(...args: KustomerFullApiOperationArgs<"UpdateLatestPublishedArticleVersion">): Promise<KustomerFullApiOperationResponseMap["UpdateLatestPublishedArticleVersion"]>;
  kustomerGetArticleVersionbyID(...args: KustomerFullApiOperationArgs<"GetArticleVersionbyID">): Promise<KustomerFullApiOperationResponseMap["GetArticleVersionbyID"]>;
}

export const KustomerFullApiArticlesVersioningAndLanguagesGeneratedFunctionNames = [
  "kustomerDeleteVersionsofaLanguage",
  "kustomerGetArticleVersionsbyLanguage",
  "kustomerCreateaVersion",
  "kustomerDeleteaDraftVersion",
  "kustomerUpdateaDraftVersion",
  "kustomerUpdateLatestPublishedArticleVersion",
  "kustomerGetArticleVersionbyID"
] as const satisfies readonly (keyof KustomerFullApiArticlesVersioningAndLanguagesGeneratedClient)[];

export function createKustomerFullApiArticlesVersioningAndLanguagesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiArticlesVersioningAndLanguagesGeneratedClient {
  return {
    kustomerDeleteVersionsofaLanguage: (...args) => callOperation("DeleteVersionsofaLanguage", ...(args as KustomerFullApiOperationArgs<"DeleteVersionsofaLanguage">)),
    kustomerGetArticleVersionsbyLanguage: (...args) => callOperation("GetArticleVersionsbyLanguage", ...(args as KustomerFullApiOperationArgs<"GetArticleVersionsbyLanguage">)),
    kustomerCreateaVersion: (...args) => callOperation("CreateaVersion", ...(args as KustomerFullApiOperationArgs<"CreateaVersion">)),
    kustomerDeleteaDraftVersion: (...args) => callOperation("DeleteaDraftVersion", ...(args as KustomerFullApiOperationArgs<"DeleteaDraftVersion">)),
    kustomerUpdateaDraftVersion: (...args) => callOperation("UpdateaDraftVersion", ...(args as KustomerFullApiOperationArgs<"UpdateaDraftVersion">)),
    kustomerUpdateLatestPublishedArticleVersion: (...args) => callOperation("UpdateLatestPublishedArticleVersion", ...(args as KustomerFullApiOperationArgs<"UpdateLatestPublishedArticleVersion">)),
    kustomerGetArticleVersionbyID: (...args) => callOperation("GetArticleVersionbyID", ...(args as KustomerFullApiOperationArgs<"GetArticleVersionbyID">)),
  };
}
