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
export const KustomerFullApiCustomersKObjectsOperationKeys = [
  "FindCustomerKObjects",
  "CreateCustomerKObject"
] as const;
export type KustomerFullApiCustomersKObjectsOperationKey = typeof KustomerFullApiCustomersKObjectsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersKObjectsOperationPathParamMap {
  "FindCustomerKObjects": { "id": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
  "CreateCustomerKObject": { "id": KustomerFullApiPathParamValue; "name": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersKObjectsOperationRequestMap {
  "FindCustomerKObjects": KustomerFullApiOperationInput<"FindCustomerKObjects">;
  "CreateCustomerKObject": KustomerFullApiOperationInput<"CreateCustomerKObject">;
}

export interface KustomerFullApiCustomersKObjectsGeneratedClient {
  kustomerFindCustomerKObjects(...args: KustomerFullApiOperationArgs<"FindCustomerKObjects">): Promise<KustomerFullApiOperationResponseMap["FindCustomerKObjects"]>;
  kustomerCreateCustomerKObject(...args: KustomerFullApiOperationArgs<"CreateCustomerKObject">): Promise<KustomerFullApiOperationResponseMap["CreateCustomerKObject"]>;
}

export const KustomerFullApiCustomersKObjectsGeneratedFunctionNames = [
  "kustomerFindCustomerKObjects",
  "kustomerCreateCustomerKObject"
] as const satisfies readonly (keyof KustomerFullApiCustomersKObjectsGeneratedClient)[];

export function createKustomerFullApiCustomersKObjectsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersKObjectsGeneratedClient {
  return {
    kustomerFindCustomerKObjects: (...args) => callOperation("FindCustomerKObjects", ...(args as KustomerFullApiOperationArgs<"FindCustomerKObjects">)),
    kustomerCreateCustomerKObject: (...args) => callOperation("CreateCustomerKObject", ...(args as KustomerFullApiOperationArgs<"CreateCustomerKObject">)),
  };
}
