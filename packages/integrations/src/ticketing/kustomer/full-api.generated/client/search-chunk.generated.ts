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
export const KustomerFullApiSearchOperationKeys = [
  "CustomerArchiveSearch",
  "CustomerSearch"
] as const;
export type KustomerFullApiSearchOperationKey = typeof KustomerFullApiSearchOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiSearchOperationPathParamMap {
  "CustomerArchiveSearch": {};
  "CustomerSearch": {};
}

export interface KustomerFullApiSearchOperationRequestMap {
  "CustomerArchiveSearch": KustomerFullApiOperationInput<"CustomerArchiveSearch">;
  "CustomerSearch": KustomerFullApiOperationInput<"CustomerSearch">;
}

export interface KustomerFullApiSearchGeneratedClient {
  kustomerCustomerArchiveSearch(...args: KustomerFullApiOperationArgs<"CustomerArchiveSearch">): Promise<KustomerFullApiOperationResponseMap["CustomerArchiveSearch"]>;
  kustomerCustomerSearch(...args: KustomerFullApiOperationArgs<"CustomerSearch">): Promise<KustomerFullApiOperationResponseMap["CustomerSearch"]>;
}

export const KustomerFullApiSearchGeneratedFunctionNames = [
  "kustomerCustomerArchiveSearch",
  "kustomerCustomerSearch"
] as const satisfies readonly (keyof KustomerFullApiSearchGeneratedClient)[];

export function createKustomerFullApiSearchGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiSearchGeneratedClient {
  return {
    kustomerCustomerArchiveSearch: (...args) => callOperation("CustomerArchiveSearch", ...(args as KustomerFullApiOperationArgs<"CustomerArchiveSearch">)),
    kustomerCustomerSearch: (...args) => callOperation("CustomerSearch", ...(args as KustomerFullApiOperationArgs<"CustomerSearch">)),
  };
}
