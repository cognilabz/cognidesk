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
export const KustomerFullApiCustomAttributesOperationKeys = [
  "GetCustomAttributeMetadata",
  "UpdateCustomAttributeMetadata"
] as const;
export type KustomerFullApiCustomAttributesOperationKey = typeof KustomerFullApiCustomAttributesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomAttributesOperationPathParamMap {
  "GetCustomAttributeMetadata": { "resource": KustomerFullApiPathParamValue };
  "UpdateCustomAttributeMetadata": { "resource": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomAttributesOperationRequestMap {
  "GetCustomAttributeMetadata": KustomerFullApiOperationInput<"GetCustomAttributeMetadata">;
  "UpdateCustomAttributeMetadata": KustomerFullApiOperationInput<"UpdateCustomAttributeMetadata">;
}

export interface KustomerFullApiCustomAttributesGeneratedClient {
  kustomerGetCustomAttributeMetadata(...args: KustomerFullApiOperationArgs<"GetCustomAttributeMetadata">): Promise<KustomerFullApiOperationResponseMap["GetCustomAttributeMetadata"]>;
  kustomerUpdateCustomAttributeMetadata(...args: KustomerFullApiOperationArgs<"UpdateCustomAttributeMetadata">): Promise<KustomerFullApiOperationResponseMap["UpdateCustomAttributeMetadata"]>;
}

export const KustomerFullApiCustomAttributesGeneratedFunctionNames = [
  "kustomerGetCustomAttributeMetadata",
  "kustomerUpdateCustomAttributeMetadata"
] as const satisfies readonly (keyof KustomerFullApiCustomAttributesGeneratedClient)[];

export function createKustomerFullApiCustomAttributesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomAttributesGeneratedClient {
  return {
    kustomerGetCustomAttributeMetadata: (...args) => callOperation("GetCustomAttributeMetadata", ...(args as KustomerFullApiOperationArgs<"GetCustomAttributeMetadata">)),
    kustomerUpdateCustomAttributeMetadata: (...args) => callOperation("UpdateCustomAttributeMetadata", ...(args as KustomerFullApiOperationArgs<"UpdateCustomAttributeMetadata">)),
  };
}
