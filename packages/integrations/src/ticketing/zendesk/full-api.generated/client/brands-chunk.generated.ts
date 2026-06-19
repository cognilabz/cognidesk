// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiBrandsOperationKeys = [
  "CheckHostMappingValidity",
  "CheckHostMappingValidityForExistingBrand",
  "CreateBrand",
  "DeleteBrand",
  "DeleteBrandLogo",
  "ListBrands",
  "ShowBrand",
  "UpdateBrand",
  "UpdateBrandLogo"
] as const;
export type ZendeskFullApiBrandsOperationKey = typeof ZendeskFullApiBrandsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiBrandsOperationPathParamMap {
  "CheckHostMappingValidity": {};
  "CheckHostMappingValidityForExistingBrand": { "brand_id": ZendeskFullApiPathParamValue };
  "CreateBrand": {};
  "DeleteBrand": { "brand_id": ZendeskFullApiPathParamValue };
  "DeleteBrandLogo": { "brand_id": ZendeskFullApiPathParamValue };
  "ListBrands": {};
  "ShowBrand": { "brand_id": ZendeskFullApiPathParamValue };
  "UpdateBrand": { "brand_id": ZendeskFullApiPathParamValue };
  "UpdateBrandLogo": { "brand_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiBrandsOperationRequestMap {
  "CheckHostMappingValidity": ZendeskFullApiOperationInput<"CheckHostMappingValidity">;
  "CheckHostMappingValidityForExistingBrand": ZendeskFullApiOperationInput<"CheckHostMappingValidityForExistingBrand">;
  "CreateBrand": ZendeskFullApiOperationInput<"CreateBrand">;
  "DeleteBrand": ZendeskFullApiOperationInput<"DeleteBrand">;
  "DeleteBrandLogo": ZendeskFullApiOperationInput<"DeleteBrandLogo">;
  "ListBrands": ZendeskFullApiOperationInput<"ListBrands">;
  "ShowBrand": ZendeskFullApiOperationInput<"ShowBrand">;
  "UpdateBrand": ZendeskFullApiOperationInput<"UpdateBrand">;
  "UpdateBrandLogo": ZendeskFullApiOperationInput<"UpdateBrandLogo">;
}

export interface ZendeskFullApiBrandsGeneratedClient {
  CheckHostMappingValidity(...args: ZendeskFullApiOperationArgs<"CheckHostMappingValidity">): Promise<ZendeskFullApiOperationResponseMap["CheckHostMappingValidity"]>;
  CheckHostMappingValidityForExistingBrand(...args: ZendeskFullApiOperationArgs<"CheckHostMappingValidityForExistingBrand">): Promise<ZendeskFullApiOperationResponseMap["CheckHostMappingValidityForExistingBrand"]>;
  CreateBrand(...args: ZendeskFullApiOperationArgs<"CreateBrand">): Promise<ZendeskFullApiOperationResponseMap["CreateBrand"]>;
  DeleteBrand(...args: ZendeskFullApiOperationArgs<"DeleteBrand">): Promise<ZendeskFullApiOperationResponseMap["DeleteBrand"]>;
  DeleteBrandLogo(...args: ZendeskFullApiOperationArgs<"DeleteBrandLogo">): Promise<ZendeskFullApiOperationResponseMap["DeleteBrandLogo"]>;
  ListBrands(...args: ZendeskFullApiOperationArgs<"ListBrands">): Promise<ZendeskFullApiOperationResponseMap["ListBrands"]>;
  ShowBrand(...args: ZendeskFullApiOperationArgs<"ShowBrand">): Promise<ZendeskFullApiOperationResponseMap["ShowBrand"]>;
  UpdateBrand(...args: ZendeskFullApiOperationArgs<"UpdateBrand">): Promise<ZendeskFullApiOperationResponseMap["UpdateBrand"]>;
  UpdateBrandLogo(...args: ZendeskFullApiOperationArgs<"UpdateBrandLogo">): Promise<ZendeskFullApiOperationResponseMap["UpdateBrandLogo"]>;
}

export const ZendeskFullApiBrandsGeneratedFunctionNames = [
  "CheckHostMappingValidity",
  "CheckHostMappingValidityForExistingBrand",
  "CreateBrand",
  "DeleteBrand",
  "DeleteBrandLogo",
  "ListBrands",
  "ShowBrand",
  "UpdateBrand",
  "UpdateBrandLogo"
] as const satisfies readonly (keyof ZendeskFullApiBrandsGeneratedClient)[];

export function createZendeskFullApiBrandsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiBrandsGeneratedClient {
  return {
    CheckHostMappingValidity: (...args) => callOperation("CheckHostMappingValidity", ...(args as ZendeskFullApiOperationArgs<"CheckHostMappingValidity">)),
    CheckHostMappingValidityForExistingBrand: (...args) => callOperation("CheckHostMappingValidityForExistingBrand", ...(args as ZendeskFullApiOperationArgs<"CheckHostMappingValidityForExistingBrand">)),
    CreateBrand: (...args) => callOperation("CreateBrand", ...(args as ZendeskFullApiOperationArgs<"CreateBrand">)),
    DeleteBrand: (...args) => callOperation("DeleteBrand", ...(args as ZendeskFullApiOperationArgs<"DeleteBrand">)),
    DeleteBrandLogo: (...args) => callOperation("DeleteBrandLogo", ...(args as ZendeskFullApiOperationArgs<"DeleteBrandLogo">)),
    ListBrands: (...args) => callOperation("ListBrands", ...(args as ZendeskFullApiOperationArgs<"ListBrands">)),
    ShowBrand: (...args) => callOperation("ShowBrand", ...(args as ZendeskFullApiOperationArgs<"ShowBrand">)),
    UpdateBrand: (...args) => callOperation("UpdateBrand", ...(args as ZendeskFullApiOperationArgs<"UpdateBrand">)),
    UpdateBrandLogo: (...args) => callOperation("UpdateBrandLogo", ...(args as ZendeskFullApiOperationArgs<"UpdateBrandLogo">)),
  };
}
