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
export const KustomerFullApiThemesThemeFilesOperationKeys = [
  "GetThemeFiles(Public)",
  "GetThemeFilesbyRevision",
  "CreateRevisionThemeFile",
  "DeleteRevisionThemeFile",
  "GetThemeFilebyRevision",
  "UpdateRevisionThemeFile"
] as const;
export type KustomerFullApiThemesThemeFilesOperationKey = typeof KustomerFullApiThemesThemeFilesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiThemesThemeFilesOperationPathParamMap {
  "GetThemeFiles(Public)": { "id": KustomerFullApiPathParamValue };
  "GetThemeFilesbyRevision": { "themeId": KustomerFullApiPathParamValue; "revisionId": KustomerFullApiPathParamValue };
  "CreateRevisionThemeFile": { "themeId": KustomerFullApiPathParamValue; "revisionId": KustomerFullApiPathParamValue };
  "DeleteRevisionThemeFile": { "themeId": KustomerFullApiPathParamValue; "revisionId": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "GetThemeFilebyRevision": { "themeId": KustomerFullApiPathParamValue; "revisionId": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "UpdateRevisionThemeFile": { "themeId": KustomerFullApiPathParamValue; "revisionId": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiThemesThemeFilesOperationRequestMap {
  "GetThemeFiles(Public)": KustomerFullApiOperationInput<"GetThemeFiles(Public)">;
  "GetThemeFilesbyRevision": KustomerFullApiOperationInput<"GetThemeFilesbyRevision">;
  "CreateRevisionThemeFile": KustomerFullApiOperationInput<"CreateRevisionThemeFile">;
  "DeleteRevisionThemeFile": KustomerFullApiOperationInput<"DeleteRevisionThemeFile">;
  "GetThemeFilebyRevision": KustomerFullApiOperationInput<"GetThemeFilebyRevision">;
  "UpdateRevisionThemeFile": KustomerFullApiOperationInput<"UpdateRevisionThemeFile">;
}

export interface KustomerFullApiThemesThemeFilesGeneratedClient {
  kustomerGetThemeFilesPublic(...args: KustomerFullApiOperationArgs<"GetThemeFiles(Public)">): Promise<KustomerFullApiOperationResponseMap["GetThemeFiles(Public)"]>;
  kustomerGetThemeFilesbyRevision(...args: KustomerFullApiOperationArgs<"GetThemeFilesbyRevision">): Promise<KustomerFullApiOperationResponseMap["GetThemeFilesbyRevision"]>;
  kustomerCreateRevisionThemeFile(...args: KustomerFullApiOperationArgs<"CreateRevisionThemeFile">): Promise<KustomerFullApiOperationResponseMap["CreateRevisionThemeFile"]>;
  kustomerDeleteRevisionThemeFile(...args: KustomerFullApiOperationArgs<"DeleteRevisionThemeFile">): Promise<KustomerFullApiOperationResponseMap["DeleteRevisionThemeFile"]>;
  kustomerGetThemeFilebyRevision(...args: KustomerFullApiOperationArgs<"GetThemeFilebyRevision">): Promise<KustomerFullApiOperationResponseMap["GetThemeFilebyRevision"]>;
  kustomerUpdateRevisionThemeFile(...args: KustomerFullApiOperationArgs<"UpdateRevisionThemeFile">): Promise<KustomerFullApiOperationResponseMap["UpdateRevisionThemeFile"]>;
}

export const KustomerFullApiThemesThemeFilesGeneratedFunctionNames = [
  "kustomerGetThemeFilesPublic",
  "kustomerGetThemeFilesbyRevision",
  "kustomerCreateRevisionThemeFile",
  "kustomerDeleteRevisionThemeFile",
  "kustomerGetThemeFilebyRevision",
  "kustomerUpdateRevisionThemeFile"
] as const satisfies readonly (keyof KustomerFullApiThemesThemeFilesGeneratedClient)[];

export function createKustomerFullApiThemesThemeFilesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiThemesThemeFilesGeneratedClient {
  return {
    kustomerGetThemeFilesPublic: (...args) => callOperation("GetThemeFiles(Public)", ...(args as KustomerFullApiOperationArgs<"GetThemeFiles(Public)">)),
    kustomerGetThemeFilesbyRevision: (...args) => callOperation("GetThemeFilesbyRevision", ...(args as KustomerFullApiOperationArgs<"GetThemeFilesbyRevision">)),
    kustomerCreateRevisionThemeFile: (...args) => callOperation("CreateRevisionThemeFile", ...(args as KustomerFullApiOperationArgs<"CreateRevisionThemeFile">)),
    kustomerDeleteRevisionThemeFile: (...args) => callOperation("DeleteRevisionThemeFile", ...(args as KustomerFullApiOperationArgs<"DeleteRevisionThemeFile">)),
    kustomerGetThemeFilebyRevision: (...args) => callOperation("GetThemeFilebyRevision", ...(args as KustomerFullApiOperationArgs<"GetThemeFilebyRevision">)),
    kustomerUpdateRevisionThemeFile: (...args) => callOperation("UpdateRevisionThemeFile", ...(args as KustomerFullApiOperationArgs<"UpdateRevisionThemeFile">)),
  };
}
