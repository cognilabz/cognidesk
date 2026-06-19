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
export const KustomerFullApiSearchFiltersFoldersOperationKeys = [
  "CreateSearchFolder",
  "DeleteSearchFolderbyID",
  "UpdateSearchFolderbyID"
] as const;
export type KustomerFullApiSearchFiltersFoldersOperationKey = typeof KustomerFullApiSearchFiltersFoldersOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSearchFiltersFoldersOperationPathParamMap {
  "CreateSearchFolder": {};
  "DeleteSearchFolderbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateSearchFolderbyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSearchFiltersFoldersOperationRequestMap {
  "CreateSearchFolder": KustomerFullApiOperationInput<"CreateSearchFolder">;
  "DeleteSearchFolderbyID": KustomerFullApiOperationInput<"DeleteSearchFolderbyID">;
  "UpdateSearchFolderbyID": KustomerFullApiOperationInput<"UpdateSearchFolderbyID">;
}

export interface KustomerFullApiSearchFiltersFoldersGeneratedClient {
  kustomerCreateSearchFolder(...args: KustomerFullApiOperationArgs<"CreateSearchFolder">): Promise<KustomerFullApiOperationResponseMap["CreateSearchFolder"]>;
  kustomerDeleteSearchFolderbyID(...args: KustomerFullApiOperationArgs<"DeleteSearchFolderbyID">): Promise<KustomerFullApiOperationResponseMap["DeleteSearchFolderbyID"]>;
  kustomerUpdateSearchFolderbyID(...args: KustomerFullApiOperationArgs<"UpdateSearchFolderbyID">): Promise<KustomerFullApiOperationResponseMap["UpdateSearchFolderbyID"]>;
}

export const KustomerFullApiSearchFiltersFoldersGeneratedFunctionNames = [
  "kustomerCreateSearchFolder",
  "kustomerDeleteSearchFolderbyID",
  "kustomerUpdateSearchFolderbyID"
] as const satisfies readonly (keyof KustomerFullApiSearchFiltersFoldersGeneratedClient)[];

export function createKustomerFullApiSearchFiltersFoldersGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSearchFiltersFoldersGeneratedClient {
  return {
    kustomerCreateSearchFolder: (...args) => callOperation("CreateSearchFolder", ...(args as KustomerFullApiOperationArgs<"CreateSearchFolder">)),
    kustomerDeleteSearchFolderbyID: (...args) => callOperation("DeleteSearchFolderbyID", ...(args as KustomerFullApiOperationArgs<"DeleteSearchFolderbyID">)),
    kustomerUpdateSearchFolderbyID: (...args) => callOperation("UpdateSearchFolderbyID", ...(args as KustomerFullApiOperationArgs<"UpdateSearchFolderbyID">)),
  };
}
