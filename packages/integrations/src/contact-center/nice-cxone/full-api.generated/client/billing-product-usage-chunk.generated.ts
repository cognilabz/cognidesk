// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiBillingProductUsageOperationKeys = [
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage",
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}"
] as const;
export type NiceCxoneFullApiBillingProductUsageOperationKey = typeof NiceCxoneFullApiBillingProductUsageOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiBillingProductUsageOperationPathParamMap {
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": {};
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": { "productTypeId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiBillingProductUsageOperationRequestMap {
  "cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage": NiceCxoneFullApiOperationInput<"cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage">;
  "cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}": NiceCxoneFullApiOperationInput<"cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}">;
}

export interface NiceCxoneFullApiBillingProductUsageGeneratedClient {
  CxoneBillingApiDocsSubmitProductUsages(...args: NiceCxoneFullApiOperationArgs<"cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage"]>;
  CxoneBillingApiDocsGetProductUsageById(...args: NiceCxoneFullApiOperationArgs<"cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}"]>;
}

export const NiceCxoneFullApiBillingProductUsageGeneratedFunctionNames = [
  "CxoneBillingApiDocsSubmitProductUsages",
  "CxoneBillingApiDocsGetProductUsageById"
] as const satisfies readonly (keyof NiceCxoneFullApiBillingProductUsageGeneratedClient)[];

export function createNiceCxoneFullApiBillingProductUsageGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiBillingProductUsageGeneratedClient {
  return {
    CxoneBillingApiDocsSubmitProductUsages: (...args) => callOperation("cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage", ...(args as NiceCxoneFullApiOperationArgs<"cxone-billing-api-docs:submitProductUsages:POST:/billing/v1.0/product-usage">)),
    CxoneBillingApiDocsGetProductUsageById: (...args) => callOperation("cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-billing-api-docs:getProductUsageById:GET:/billing/v1.0/product-usage/{productTypeId}">)),
  };
}
