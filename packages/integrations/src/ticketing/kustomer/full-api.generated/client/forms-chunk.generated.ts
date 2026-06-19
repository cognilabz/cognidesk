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
export const KustomerFullApiFormsOperationKeys = [
  "GetFormbyID(Public)",
  "GetForms",
  "CreateaForm",
  "DeleteForm",
  "GetFormbyID",
  "UpdateForm"
] as const;
export type KustomerFullApiFormsOperationKey = typeof KustomerFullApiFormsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiFormsOperationPathParamMap {
  "GetFormbyID(Public)": { "id": KustomerFullApiPathParamValue };
  "GetForms": {};
  "CreateaForm": {};
  "DeleteForm": { "id": KustomerFullApiPathParamValue };
  "GetFormbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateForm": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiFormsOperationRequestMap {
  "GetFormbyID(Public)": KustomerFullApiOperationInput<"GetFormbyID(Public)">;
  "GetForms": KustomerFullApiOperationInput<"GetForms">;
  "CreateaForm": KustomerFullApiOperationInput<"CreateaForm">;
  "DeleteForm": KustomerFullApiOperationInput<"DeleteForm">;
  "GetFormbyID": KustomerFullApiOperationInput<"GetFormbyID">;
  "UpdateForm": KustomerFullApiOperationInput<"UpdateForm">;
}

export interface KustomerFullApiFormsGeneratedClient {
  kustomerGetFormbyIDPublic(...args: KustomerFullApiOperationArgs<"GetFormbyID(Public)">): Promise<KustomerFullApiOperationResponseMap["GetFormbyID(Public)"]>;
  kustomerGetForms(...args: KustomerFullApiOperationArgs<"GetForms">): Promise<KustomerFullApiOperationResponseMap["GetForms"]>;
  kustomerCreateaForm(...args: KustomerFullApiOperationArgs<"CreateaForm">): Promise<KustomerFullApiOperationResponseMap["CreateaForm"]>;
  kustomerDeleteForm(...args: KustomerFullApiOperationArgs<"DeleteForm">): Promise<KustomerFullApiOperationResponseMap["DeleteForm"]>;
  kustomerGetFormbyID(...args: KustomerFullApiOperationArgs<"GetFormbyID">): Promise<KustomerFullApiOperationResponseMap["GetFormbyID"]>;
  kustomerUpdateForm(...args: KustomerFullApiOperationArgs<"UpdateForm">): Promise<KustomerFullApiOperationResponseMap["UpdateForm"]>;
}

export const KustomerFullApiFormsGeneratedFunctionNames = [
  "kustomerGetFormbyIDPublic",
  "kustomerGetForms",
  "kustomerCreateaForm",
  "kustomerDeleteForm",
  "kustomerGetFormbyID",
  "kustomerUpdateForm"
] as const satisfies readonly (keyof KustomerFullApiFormsGeneratedClient)[];

export function createKustomerFullApiFormsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiFormsGeneratedClient {
  return {
    kustomerGetFormbyIDPublic: (...args) => callOperation("GetFormbyID(Public)", ...(args as KustomerFullApiOperationArgs<"GetFormbyID(Public)">)),
    kustomerGetForms: (...args) => callOperation("GetForms", ...(args as KustomerFullApiOperationArgs<"GetForms">)),
    kustomerCreateaForm: (...args) => callOperation("CreateaForm", ...(args as KustomerFullApiOperationArgs<"CreateaForm">)),
    kustomerDeleteForm: (...args) => callOperation("DeleteForm", ...(args as KustomerFullApiOperationArgs<"DeleteForm">)),
    kustomerGetFormbyID: (...args) => callOperation("GetFormbyID", ...(args as KustomerFullApiOperationArgs<"GetFormbyID">)),
    kustomerUpdateForm: (...args) => callOperation("UpdateForm", ...(args as KustomerFullApiOperationArgs<"UpdateForm">)),
  };
}
