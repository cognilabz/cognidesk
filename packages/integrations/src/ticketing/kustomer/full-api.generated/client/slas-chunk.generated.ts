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
export const KustomerFullApiSLAsOperationKeys = [
  "GetSLAByID"
] as const;
export type KustomerFullApiSLAsOperationKey = typeof KustomerFullApiSLAsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSLAsOperationPathParamMap {
  "GetSLAByID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiSLAsOperationRequestMap {
  "GetSLAByID": KustomerFullApiOperationInput<"GetSLAByID">;
}

export interface KustomerFullApiSLAsGeneratedClient {
  kustomerGetSLAByID(...args: KustomerFullApiOperationArgs<"GetSLAByID">): Promise<KustomerFullApiOperationResponseMap["GetSLAByID"]>;
}

export const KustomerFullApiSLAsGeneratedFunctionNames = [
  "kustomerGetSLAByID"
] as const satisfies readonly (keyof KustomerFullApiSLAsGeneratedClient)[];

export function createKustomerFullApiSLAsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSLAsGeneratedClient {
  return {
    kustomerGetSLAByID: (...args) => callOperation("GetSLAByID", ...(args as KustomerFullApiOperationArgs<"GetSLAByID">)),
  };
}
