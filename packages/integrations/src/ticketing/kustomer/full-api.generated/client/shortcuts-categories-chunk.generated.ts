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
export const KustomerFullApiShortcutsCategoriesOperationKeys = [
  "GetShortcutCategories",
  "CreateaShortcutCategory",
  "DeleteaShortcutCategory",
  "GetaShortcutCategory",
  "UpdateaShortcutCategory"
] as const;
export type KustomerFullApiShortcutsCategoriesOperationKey = typeof KustomerFullApiShortcutsCategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiShortcutsCategoriesOperationPathParamMap {
  "GetShortcutCategories": {};
  "CreateaShortcutCategory": {};
  "DeleteaShortcutCategory": { "id": KustomerFullApiPathParamValue };
  "GetaShortcutCategory": { "id": KustomerFullApiPathParamValue };
  "UpdateaShortcutCategory": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiShortcutsCategoriesOperationRequestMap {
  "GetShortcutCategories": KustomerFullApiOperationInput<"GetShortcutCategories">;
  "CreateaShortcutCategory": KustomerFullApiOperationInput<"CreateaShortcutCategory">;
  "DeleteaShortcutCategory": KustomerFullApiOperationInput<"DeleteaShortcutCategory">;
  "GetaShortcutCategory": KustomerFullApiOperationInput<"GetaShortcutCategory">;
  "UpdateaShortcutCategory": KustomerFullApiOperationInput<"UpdateaShortcutCategory">;
}

export interface KustomerFullApiShortcutsCategoriesGeneratedClient {
  kustomerGetShortcutCategories(...args: KustomerFullApiOperationArgs<"GetShortcutCategories">): Promise<KustomerFullApiOperationResponseMap["GetShortcutCategories"]>;
  kustomerCreateaShortcutCategory(...args: KustomerFullApiOperationArgs<"CreateaShortcutCategory">): Promise<KustomerFullApiOperationResponseMap["CreateaShortcutCategory"]>;
  kustomerDeleteaShortcutCategory(...args: KustomerFullApiOperationArgs<"DeleteaShortcutCategory">): Promise<KustomerFullApiOperationResponseMap["DeleteaShortcutCategory"]>;
  kustomerGetaShortcutCategory(...args: KustomerFullApiOperationArgs<"GetaShortcutCategory">): Promise<KustomerFullApiOperationResponseMap["GetaShortcutCategory"]>;
  kustomerUpdateaShortcutCategory(...args: KustomerFullApiOperationArgs<"UpdateaShortcutCategory">): Promise<KustomerFullApiOperationResponseMap["UpdateaShortcutCategory"]>;
}

export const KustomerFullApiShortcutsCategoriesGeneratedFunctionNames = [
  "kustomerGetShortcutCategories",
  "kustomerCreateaShortcutCategory",
  "kustomerDeleteaShortcutCategory",
  "kustomerGetaShortcutCategory",
  "kustomerUpdateaShortcutCategory"
] as const satisfies readonly (keyof KustomerFullApiShortcutsCategoriesGeneratedClient)[];

export function createKustomerFullApiShortcutsCategoriesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiShortcutsCategoriesGeneratedClient {
  return {
    kustomerGetShortcutCategories: (...args) => callOperation("GetShortcutCategories", ...(args as KustomerFullApiOperationArgs<"GetShortcutCategories">)),
    kustomerCreateaShortcutCategory: (...args) => callOperation("CreateaShortcutCategory", ...(args as KustomerFullApiOperationArgs<"CreateaShortcutCategory">)),
    kustomerDeleteaShortcutCategory: (...args) => callOperation("DeleteaShortcutCategory", ...(args as KustomerFullApiOperationArgs<"DeleteaShortcutCategory">)),
    kustomerGetaShortcutCategory: (...args) => callOperation("GetaShortcutCategory", ...(args as KustomerFullApiOperationArgs<"GetaShortcutCategory">)),
    kustomerUpdateaShortcutCategory: (...args) => callOperation("UpdateaShortcutCategory", ...(args as KustomerFullApiOperationArgs<"UpdateaShortcutCategory">)),
  };
}
