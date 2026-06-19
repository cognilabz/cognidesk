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
export const KustomerFullApiMediaOperationKeys = [
  "CreateMedia",
  "GetMediabyID",
  "UpdateMedia"
] as const;
export type KustomerFullApiMediaOperationKey = typeof KustomerFullApiMediaOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiMediaOperationPathParamMap {
  "CreateMedia": {};
  "GetMediabyID": { "id": KustomerFullApiPathParamValue };
  "UpdateMedia": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiMediaOperationRequestMap {
  "CreateMedia": KustomerFullApiOperationInput<"CreateMedia">;
  "GetMediabyID": KustomerFullApiOperationInput<"GetMediabyID">;
  "UpdateMedia": KustomerFullApiOperationInput<"UpdateMedia">;
}

export interface KustomerFullApiMediaGeneratedClient {
  kustomerCreateMedia(...args: KustomerFullApiOperationArgs<"CreateMedia">): Promise<KustomerFullApiOperationResponseMap["CreateMedia"]>;
  kustomerGetMediabyID(...args: KustomerFullApiOperationArgs<"GetMediabyID">): Promise<KustomerFullApiOperationResponseMap["GetMediabyID"]>;
  kustomerUpdateMedia(...args: KustomerFullApiOperationArgs<"UpdateMedia">): Promise<KustomerFullApiOperationResponseMap["UpdateMedia"]>;
}

export const KustomerFullApiMediaGeneratedFunctionNames = [
  "kustomerCreateMedia",
  "kustomerGetMediabyID",
  "kustomerUpdateMedia"
] as const satisfies readonly (keyof KustomerFullApiMediaGeneratedClient)[];

export function createKustomerFullApiMediaGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiMediaGeneratedClient {
  return {
    kustomerCreateMedia: (...args) => callOperation("CreateMedia", ...(args as KustomerFullApiOperationArgs<"CreateMedia">)),
    kustomerGetMediabyID: (...args) => callOperation("GetMediabyID", ...(args as KustomerFullApiOperationArgs<"GetMediabyID">)),
    kustomerUpdateMedia: (...args) => callOperation("UpdateMedia", ...(args as KustomerFullApiOperationArgs<"UpdateMedia">)),
  };
}
