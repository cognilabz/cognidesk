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
export const NiceCxoneFullApiDivisionManagementOperationKeys = [
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division",
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division",
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}",
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search",
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities",
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes",
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate"
] as const;
export type NiceCxoneFullApiDivisionManagementOperationKey = typeof NiceCxoneFullApiDivisionManagementOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiDivisionManagementOperationPathParamMap {
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": {};
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": {};
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": { "divisionId": NiceCxoneFullApiPathParamValue };
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": {};
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": {};
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": { "divisionId": NiceCxoneFullApiPathParamValue };
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": { "billingCode": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiDivisionManagementOperationRequestMap {
  "cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division">;
  "cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division">;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}">;
  "cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search">;
  "cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities">;
  "cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes">;
  "cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate": NiceCxoneFullApiOperationInput<"cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate">;
}

export interface NiceCxoneFullApiDivisionManagementGeneratedClient {
  CxoneDivisionApiDocsPostDivisionManagementV1Division(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division"]>;
  CxoneDivisionApiDocsPutDivisionManagementV1Division(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division"]>;
  CxoneDivisionApiDocsGetDivisionManagementV1DivisionDivisionId(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}"]>;
  CxoneDivisionApiDocsPostDivisionManagementV1DivisionSearch(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search"]>;
  CxoneDivisionApiDocsPostDivisionManagementV1DivisionIdentities(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities"]>;
  CxoneDivisionApiDocsGetDivisionManagementV1DivisionDivisionIdGetAllBillingCodes(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes"]>;
  CxoneDivisionApiDocsGetDivisionManagementV1DivisionBillingCodeBillingCodeValidate(...args: NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate"]>;
}

export const NiceCxoneFullApiDivisionManagementGeneratedFunctionNames = [
  "CxoneDivisionApiDocsPostDivisionManagementV1Division",
  "CxoneDivisionApiDocsPutDivisionManagementV1Division",
  "CxoneDivisionApiDocsGetDivisionManagementV1DivisionDivisionId",
  "CxoneDivisionApiDocsPostDivisionManagementV1DivisionSearch",
  "CxoneDivisionApiDocsPostDivisionManagementV1DivisionIdentities",
  "CxoneDivisionApiDocsGetDivisionManagementV1DivisionDivisionIdGetAllBillingCodes",
  "CxoneDivisionApiDocsGetDivisionManagementV1DivisionBillingCodeBillingCodeValidate"
] as const satisfies readonly (keyof NiceCxoneFullApiDivisionManagementGeneratedClient)[];

export function createNiceCxoneFullApiDivisionManagementGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiDivisionManagementGeneratedClient {
  return {
    CxoneDivisionApiDocsPostDivisionManagementV1Division: (...args) => callOperation("cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:post_/division-management/v1/division:POST:/division-management/v1/division">)),
    CxoneDivisionApiDocsPutDivisionManagementV1Division: (...args) => callOperation("cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:put_/division-management/v1/division:PUT:/division-management/v1/division">)),
    CxoneDivisionApiDocsGetDivisionManagementV1DivisionDivisionId: (...args) => callOperation("cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:get_/division-management/v1/division/{divisionId}:GET:/division-management/v1/division/{divisionId}">)),
    CxoneDivisionApiDocsPostDivisionManagementV1DivisionSearch: (...args) => callOperation("cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:post_/division-management/v1/division/search:POST:/division-management/v1/division/search">)),
    CxoneDivisionApiDocsPostDivisionManagementV1DivisionIdentities: (...args) => callOperation("cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:post_/division-management/v1/division/identities:POST:/division-management/v1/division/identities">)),
    CxoneDivisionApiDocsGetDivisionManagementV1DivisionDivisionIdGetAllBillingCodes: (...args) => callOperation("cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:get_/division-management/v1/division/{divisionId}/getAllBillingCodes:GET:/division-management/v1/division/{divisionId}/getAllBillingCodes">)),
    CxoneDivisionApiDocsGetDivisionManagementV1DivisionBillingCodeBillingCodeValidate: (...args) => callOperation("cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate", ...(args as NiceCxoneFullApiOperationArgs<"cxone-division-api-docs:get_/division-management/v1/division/billingCode/{billingCode}/validate:GET:/division-management/v1/division/billingCode/{billingCode}/validate">)),
  };
}
