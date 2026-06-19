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
export const KustomerFullApiThemesDraftsAndRevisionsOperationKeys = [
  "GetThemeRevisions",
  "GetThemeRevisionbyID",
  "DeleteThemeDraftRevision",
  "CreateThemeDraftRevision",
  "UpdateThemeDraftRevision"
] as const;
export type KustomerFullApiThemesDraftsAndRevisionsOperationKey = typeof KustomerFullApiThemesDraftsAndRevisionsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiThemesDraftsAndRevisionsOperationPathParamMap {
  "GetThemeRevisions": { "themeId": KustomerFullApiPathParamValue };
  "GetThemeRevisionbyID": { "themeId": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "DeleteThemeDraftRevision": { "themeId": KustomerFullApiPathParamValue };
  "CreateThemeDraftRevision": { "themeId": KustomerFullApiPathParamValue };
  "UpdateThemeDraftRevision": { "themeId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiThemesDraftsAndRevisionsOperationRequestMap {
  "GetThemeRevisions": KustomerFullApiOperationInput<"GetThemeRevisions">;
  "GetThemeRevisionbyID": KustomerFullApiOperationInput<"GetThemeRevisionbyID">;
  "DeleteThemeDraftRevision": KustomerFullApiOperationInput<"DeleteThemeDraftRevision">;
  "CreateThemeDraftRevision": KustomerFullApiOperationInput<"CreateThemeDraftRevision">;
  "UpdateThemeDraftRevision": KustomerFullApiOperationInput<"UpdateThemeDraftRevision">;
}

export interface KustomerFullApiThemesDraftsAndRevisionsGeneratedClient {
  kustomerGetThemeRevisions(...args: KustomerFullApiOperationArgs<"GetThemeRevisions">): Promise<KustomerFullApiOperationResponseMap["GetThemeRevisions"]>;
  kustomerGetThemeRevisionbyID(...args: KustomerFullApiOperationArgs<"GetThemeRevisionbyID">): Promise<KustomerFullApiOperationResponseMap["GetThemeRevisionbyID"]>;
  kustomerDeleteThemeDraftRevision(...args: KustomerFullApiOperationArgs<"DeleteThemeDraftRevision">): Promise<KustomerFullApiOperationResponseMap["DeleteThemeDraftRevision"]>;
  kustomerCreateThemeDraftRevision(...args: KustomerFullApiOperationArgs<"CreateThemeDraftRevision">): Promise<KustomerFullApiOperationResponseMap["CreateThemeDraftRevision"]>;
  kustomerUpdateThemeDraftRevision(...args: KustomerFullApiOperationArgs<"UpdateThemeDraftRevision">): Promise<KustomerFullApiOperationResponseMap["UpdateThemeDraftRevision"]>;
}

export const KustomerFullApiThemesDraftsAndRevisionsGeneratedFunctionNames = [
  "kustomerGetThemeRevisions",
  "kustomerGetThemeRevisionbyID",
  "kustomerDeleteThemeDraftRevision",
  "kustomerCreateThemeDraftRevision",
  "kustomerUpdateThemeDraftRevision"
] as const satisfies readonly (keyof KustomerFullApiThemesDraftsAndRevisionsGeneratedClient)[];

export function createKustomerFullApiThemesDraftsAndRevisionsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiThemesDraftsAndRevisionsGeneratedClient {
  return {
    kustomerGetThemeRevisions: (...args) => callOperation("GetThemeRevisions", ...(args as KustomerFullApiOperationArgs<"GetThemeRevisions">)),
    kustomerGetThemeRevisionbyID: (...args) => callOperation("GetThemeRevisionbyID", ...(args as KustomerFullApiOperationArgs<"GetThemeRevisionbyID">)),
    kustomerDeleteThemeDraftRevision: (...args) => callOperation("DeleteThemeDraftRevision", ...(args as KustomerFullApiOperationArgs<"DeleteThemeDraftRevision">)),
    kustomerCreateThemeDraftRevision: (...args) => callOperation("CreateThemeDraftRevision", ...(args as KustomerFullApiOperationArgs<"CreateThemeDraftRevision">)),
    kustomerUpdateThemeDraftRevision: (...args) => callOperation("UpdateThemeDraftRevision", ...(args as KustomerFullApiOperationArgs<"UpdateThemeDraftRevision">)),
  };
}
