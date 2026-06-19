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
export const KustomerFullApiNotesOperationKeys = [
  "GetNotesforOrg",
  "CreateNote",
  "DeleteNotebyID",
  "GetNotebyID",
  "UpdateNoteAttributes",
  "UpdateNotebyID"
] as const;
export type KustomerFullApiNotesOperationKey = typeof KustomerFullApiNotesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiNotesOperationPathParamMap {
  "GetNotesforOrg": {};
  "CreateNote": {};
  "DeleteNotebyID": { "id": KustomerFullApiPathParamValue };
  "GetNotebyID": { "id": KustomerFullApiPathParamValue };
  "UpdateNoteAttributes": { "id": KustomerFullApiPathParamValue };
  "UpdateNotebyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiNotesOperationRequestMap {
  "GetNotesforOrg": KustomerFullApiOperationInput<"GetNotesforOrg">;
  "CreateNote": KustomerFullApiOperationInput<"CreateNote">;
  "DeleteNotebyID": KustomerFullApiOperationInput<"DeleteNotebyID">;
  "GetNotebyID": KustomerFullApiOperationInput<"GetNotebyID">;
  "UpdateNoteAttributes": KustomerFullApiOperationInput<"UpdateNoteAttributes">;
  "UpdateNotebyID": KustomerFullApiOperationInput<"UpdateNotebyID">;
}

export interface KustomerFullApiNotesGeneratedClient {
  kustomerGetNotesforOrg(...args: KustomerFullApiOperationArgs<"GetNotesforOrg">): Promise<KustomerFullApiOperationResponseMap["GetNotesforOrg"]>;
  kustomerCreateNote(...args: KustomerFullApiOperationArgs<"CreateNote">): Promise<KustomerFullApiOperationResponseMap["CreateNote"]>;
  kustomerDeleteNotebyID(...args: KustomerFullApiOperationArgs<"DeleteNotebyID">): Promise<KustomerFullApiOperationResponseMap["DeleteNotebyID"]>;
  kustomerGetNotebyID(...args: KustomerFullApiOperationArgs<"GetNotebyID">): Promise<KustomerFullApiOperationResponseMap["GetNotebyID"]>;
  kustomerUpdateNoteAttributes(...args: KustomerFullApiOperationArgs<"UpdateNoteAttributes">): Promise<KustomerFullApiOperationResponseMap["UpdateNoteAttributes"]>;
  kustomerUpdateNotebyID(...args: KustomerFullApiOperationArgs<"UpdateNotebyID">): Promise<KustomerFullApiOperationResponseMap["UpdateNotebyID"]>;
}

export const KustomerFullApiNotesGeneratedFunctionNames = [
  "kustomerGetNotesforOrg",
  "kustomerCreateNote",
  "kustomerDeleteNotebyID",
  "kustomerGetNotebyID",
  "kustomerUpdateNoteAttributes",
  "kustomerUpdateNotebyID"
] as const satisfies readonly (keyof KustomerFullApiNotesGeneratedClient)[];

export function createKustomerFullApiNotesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiNotesGeneratedClient {
  return {
    kustomerGetNotesforOrg: (...args) => callOperation("GetNotesforOrg", ...(args as KustomerFullApiOperationArgs<"GetNotesforOrg">)),
    kustomerCreateNote: (...args) => callOperation("CreateNote", ...(args as KustomerFullApiOperationArgs<"CreateNote">)),
    kustomerDeleteNotebyID: (...args) => callOperation("DeleteNotebyID", ...(args as KustomerFullApiOperationArgs<"DeleteNotebyID">)),
    kustomerGetNotebyID: (...args) => callOperation("GetNotebyID", ...(args as KustomerFullApiOperationArgs<"GetNotebyID">)),
    kustomerUpdateNoteAttributes: (...args) => callOperation("UpdateNoteAttributes", ...(args as KustomerFullApiOperationArgs<"UpdateNoteAttributes">)),
    kustomerUpdateNotebyID: (...args) => callOperation("UpdateNotebyID", ...(args as KustomerFullApiOperationArgs<"UpdateNotebyID">)),
  };
}
