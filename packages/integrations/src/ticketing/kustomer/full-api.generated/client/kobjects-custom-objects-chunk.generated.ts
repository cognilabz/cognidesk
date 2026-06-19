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
export const KustomerFullApiKObjectsCustomObjectsOperationKeys = [
  "GetKObjects",
  "CreateKObject",
  "DeleteKObject",
  "GetKObject",
  "UpdateKObject",
  "GetKObjectByExternalID"
] as const;
export type KustomerFullApiKObjectsCustomObjectsOperationKey = typeof KustomerFullApiKObjectsCustomObjectsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiKObjectsCustomObjectsOperationPathParamMap {
  "GetKObjects": { "name": KustomerFullApiPathParamValue };
  "CreateKObject": { "name": KustomerFullApiPathParamValue };
  "DeleteKObject": { "name": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "GetKObject": { "name": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "UpdateKObject": { "name": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
  "GetKObjectByExternalID": { "name": KustomerFullApiPathParamValue; "externalId": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiKObjectsCustomObjectsOperationRequestMap {
  "GetKObjects": KustomerFullApiOperationInput<"GetKObjects">;
  "CreateKObject": KustomerFullApiOperationInput<"CreateKObject">;
  "DeleteKObject": KustomerFullApiOperationInput<"DeleteKObject">;
  "GetKObject": KustomerFullApiOperationInput<"GetKObject">;
  "UpdateKObject": KustomerFullApiOperationInput<"UpdateKObject">;
  "GetKObjectByExternalID": KustomerFullApiOperationInput<"GetKObjectByExternalID">;
}

export interface KustomerFullApiKObjectsCustomObjectsGeneratedClient {
  kustomerGetKObjects(...args: KustomerFullApiOperationArgs<"GetKObjects">): Promise<KustomerFullApiOperationResponseMap["GetKObjects"]>;
  kustomerCreateKObject(...args: KustomerFullApiOperationArgs<"CreateKObject">): Promise<KustomerFullApiOperationResponseMap["CreateKObject"]>;
  kustomerDeleteKObject(...args: KustomerFullApiOperationArgs<"DeleteKObject">): Promise<KustomerFullApiOperationResponseMap["DeleteKObject"]>;
  kustomerGetKObject(...args: KustomerFullApiOperationArgs<"GetKObject">): Promise<KustomerFullApiOperationResponseMap["GetKObject"]>;
  kustomerUpdateKObject(...args: KustomerFullApiOperationArgs<"UpdateKObject">): Promise<KustomerFullApiOperationResponseMap["UpdateKObject"]>;
  kustomerGetKObjectByExternalID(...args: KustomerFullApiOperationArgs<"GetKObjectByExternalID">): Promise<KustomerFullApiOperationResponseMap["GetKObjectByExternalID"]>;
}

export const KustomerFullApiKObjectsCustomObjectsGeneratedFunctionNames = [
  "kustomerGetKObjects",
  "kustomerCreateKObject",
  "kustomerDeleteKObject",
  "kustomerGetKObject",
  "kustomerUpdateKObject",
  "kustomerGetKObjectByExternalID"
] as const satisfies readonly (keyof KustomerFullApiKObjectsCustomObjectsGeneratedClient)[];

export function createKustomerFullApiKObjectsCustomObjectsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiKObjectsCustomObjectsGeneratedClient {
  return {
    kustomerGetKObjects: (...args) => callOperation("GetKObjects", ...(args as KustomerFullApiOperationArgs<"GetKObjects">)),
    kustomerCreateKObject: (...args) => callOperation("CreateKObject", ...(args as KustomerFullApiOperationArgs<"CreateKObject">)),
    kustomerDeleteKObject: (...args) => callOperation("DeleteKObject", ...(args as KustomerFullApiOperationArgs<"DeleteKObject">)),
    kustomerGetKObject: (...args) => callOperation("GetKObject", ...(args as KustomerFullApiOperationArgs<"GetKObject">)),
    kustomerUpdateKObject: (...args) => callOperation("UpdateKObject", ...(args as KustomerFullApiOperationArgs<"UpdateKObject">)),
    kustomerGetKObjectByExternalID: (...args) => callOperation("GetKObjectByExternalID", ...(args as KustomerFullApiOperationArgs<"GetKObjectByExternalID">)),
  };
}
