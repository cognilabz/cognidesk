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
export const KustomerFullApiCustomersUnmaskingWindowsOperationKeys = [
  "DeleteUnmaskingWindowbyCustomer",
  "CreateUnmaskingWindowbyCustomer"
] as const;
export type KustomerFullApiCustomersUnmaskingWindowsOperationKey = typeof KustomerFullApiCustomersUnmaskingWindowsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersUnmaskingWindowsOperationPathParamMap {
  "DeleteUnmaskingWindowbyCustomer": { "id": KustomerFullApiPathParamValue };
  "CreateUnmaskingWindowbyCustomer": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersUnmaskingWindowsOperationRequestMap {
  "DeleteUnmaskingWindowbyCustomer": KustomerFullApiOperationInput<"DeleteUnmaskingWindowbyCustomer">;
  "CreateUnmaskingWindowbyCustomer": KustomerFullApiOperationInput<"CreateUnmaskingWindowbyCustomer">;
}

export interface KustomerFullApiCustomersUnmaskingWindowsGeneratedClient {
  kustomerDeleteUnmaskingWindowbyCustomer(...args: KustomerFullApiOperationArgs<"DeleteUnmaskingWindowbyCustomer">): Promise<KustomerFullApiOperationResponseMap["DeleteUnmaskingWindowbyCustomer"]>;
  kustomerCreateUnmaskingWindowbyCustomer(...args: KustomerFullApiOperationArgs<"CreateUnmaskingWindowbyCustomer">): Promise<KustomerFullApiOperationResponseMap["CreateUnmaskingWindowbyCustomer"]>;
}

export const KustomerFullApiCustomersUnmaskingWindowsGeneratedFunctionNames = [
  "kustomerDeleteUnmaskingWindowbyCustomer",
  "kustomerCreateUnmaskingWindowbyCustomer"
] as const satisfies readonly (keyof KustomerFullApiCustomersUnmaskingWindowsGeneratedClient)[];

export function createKustomerFullApiCustomersUnmaskingWindowsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersUnmaskingWindowsGeneratedClient {
  return {
    kustomerDeleteUnmaskingWindowbyCustomer: (...args) => callOperation("DeleteUnmaskingWindowbyCustomer", ...(args as KustomerFullApiOperationArgs<"DeleteUnmaskingWindowbyCustomer">)),
    kustomerCreateUnmaskingWindowbyCustomer: (...args) => callOperation("CreateUnmaskingWindowbyCustomer", ...(args as KustomerFullApiOperationArgs<"CreateUnmaskingWindowbyCustomer">)),
  };
}
