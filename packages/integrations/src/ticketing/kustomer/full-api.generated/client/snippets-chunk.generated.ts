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
export const KustomerFullApiSnippetsOperationKeys = [
  "GetSnippets",
  "CreateSnippet",
  "GetSnippetsbyID",
  "PatchSnippet",
  "UpdateSnippet"
] as const;
export type KustomerFullApiSnippetsOperationKey = typeof KustomerFullApiSnippetsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSnippetsOperationPathParamMap {
  "GetSnippets": {};
  "CreateSnippet": {};
  "GetSnippetsbyID": { "id": KustomerFullApiPathParamValue };
  "PatchSnippet": { "id": KustomerFullApiPathParamValue };
  "UpdateSnippet": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSnippetsOperationRequestMap {
  "GetSnippets": KustomerFullApiOperationInput<"GetSnippets">;
  "CreateSnippet": KustomerFullApiOperationInput<"CreateSnippet">;
  "GetSnippetsbyID": KustomerFullApiOperationInput<"GetSnippetsbyID">;
  "PatchSnippet": KustomerFullApiOperationInput<"PatchSnippet">;
  "UpdateSnippet": KustomerFullApiOperationInput<"UpdateSnippet">;
}

export interface KustomerFullApiSnippetsGeneratedClient {
  kustomerGetSnippets(...args: KustomerFullApiOperationArgs<"GetSnippets">): Promise<KustomerFullApiOperationResponseMap["GetSnippets"]>;
  kustomerCreateSnippet(...args: KustomerFullApiOperationArgs<"CreateSnippet">): Promise<KustomerFullApiOperationResponseMap["CreateSnippet"]>;
  kustomerGetSnippetsbyID(...args: KustomerFullApiOperationArgs<"GetSnippetsbyID">): Promise<KustomerFullApiOperationResponseMap["GetSnippetsbyID"]>;
  kustomerPatchSnippet(...args: KustomerFullApiOperationArgs<"PatchSnippet">): Promise<KustomerFullApiOperationResponseMap["PatchSnippet"]>;
  kustomerUpdateSnippet(...args: KustomerFullApiOperationArgs<"UpdateSnippet">): Promise<KustomerFullApiOperationResponseMap["UpdateSnippet"]>;
}

export const KustomerFullApiSnippetsGeneratedFunctionNames = [
  "kustomerGetSnippets",
  "kustomerCreateSnippet",
  "kustomerGetSnippetsbyID",
  "kustomerPatchSnippet",
  "kustomerUpdateSnippet"
] as const satisfies readonly (keyof KustomerFullApiSnippetsGeneratedClient)[];

export function createKustomerFullApiSnippetsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSnippetsGeneratedClient {
  return {
    kustomerGetSnippets: (...args) => callOperation("GetSnippets", ...(args as KustomerFullApiOperationArgs<"GetSnippets">)),
    kustomerCreateSnippet: (...args) => callOperation("CreateSnippet", ...(args as KustomerFullApiOperationArgs<"CreateSnippet">)),
    kustomerGetSnippetsbyID: (...args) => callOperation("GetSnippetsbyID", ...(args as KustomerFullApiOperationArgs<"GetSnippetsbyID">)),
    kustomerPatchSnippet: (...args) => callOperation("PatchSnippet", ...(args as KustomerFullApiOperationArgs<"PatchSnippet">)),
    kustomerUpdateSnippet: (...args) => callOperation("UpdateSnippet", ...(args as KustomerFullApiOperationArgs<"UpdateSnippet">)),
  };
}
