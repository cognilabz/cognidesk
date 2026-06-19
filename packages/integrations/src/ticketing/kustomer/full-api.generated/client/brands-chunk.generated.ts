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
export const KustomerFullApiBrandsOperationKeys = [
  "GETBrands",
  "POSTBrands",
  "GETBrandbyID",
  "PATCHBrandResource",
  "GETDefaultBrand"
] as const;
export type KustomerFullApiBrandsOperationKey = typeof KustomerFullApiBrandsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiBrandsOperationPathParamMap {
  "GETBrands": {};
  "POSTBrands": {};
  "GETBrandbyID": { "id": KustomerFullApiPathParamValue };
  "PATCHBrandResource": { "id": KustomerFullApiPathParamValue };
  "GETDefaultBrand": {};
}

export interface KustomerFullApiBrandsOperationRequestMap {
  "GETBrands": KustomerFullApiOperationInput<"GETBrands">;
  "POSTBrands": KustomerFullApiOperationInput<"POSTBrands">;
  "GETBrandbyID": KustomerFullApiOperationInput<"GETBrandbyID">;
  "PATCHBrandResource": KustomerFullApiOperationInput<"PATCHBrandResource">;
  "GETDefaultBrand": KustomerFullApiOperationInput<"GETDefaultBrand">;
}

export interface KustomerFullApiBrandsGeneratedClient {
  kustomerGETBrands(...args: KustomerFullApiOperationArgs<"GETBrands">): Promise<KustomerFullApiOperationResponseMap["GETBrands"]>;
  kustomerPOSTBrands(...args: KustomerFullApiOperationArgs<"POSTBrands">): Promise<KustomerFullApiOperationResponseMap["POSTBrands"]>;
  kustomerGETBrandbyID(...args: KustomerFullApiOperationArgs<"GETBrandbyID">): Promise<KustomerFullApiOperationResponseMap["GETBrandbyID"]>;
  kustomerPATCHBrandResource(...args: KustomerFullApiOperationArgs<"PATCHBrandResource">): Promise<KustomerFullApiOperationResponseMap["PATCHBrandResource"]>;
  kustomerGETDefaultBrand(...args: KustomerFullApiOperationArgs<"GETDefaultBrand">): Promise<KustomerFullApiOperationResponseMap["GETDefaultBrand"]>;
}

export const KustomerFullApiBrandsGeneratedFunctionNames = [
  "kustomerGETBrands",
  "kustomerPOSTBrands",
  "kustomerGETBrandbyID",
  "kustomerPATCHBrandResource",
  "kustomerGETDefaultBrand"
] as const satisfies readonly (keyof KustomerFullApiBrandsGeneratedClient)[];

export function createKustomerFullApiBrandsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiBrandsGeneratedClient {
  return {
    kustomerGETBrands: (...args) => callOperation("GETBrands", ...(args as KustomerFullApiOperationArgs<"GETBrands">)),
    kustomerPOSTBrands: (...args) => callOperation("POSTBrands", ...(args as KustomerFullApiOperationArgs<"POSTBrands">)),
    kustomerGETBrandbyID: (...args) => callOperation("GETBrandbyID", ...(args as KustomerFullApiOperationArgs<"GETBrandbyID">)),
    kustomerPATCHBrandResource: (...args) => callOperation("PATCHBrandResource", ...(args as KustomerFullApiOperationArgs<"PATCHBrandResource">)),
    kustomerGETDefaultBrand: (...args) => callOperation("GETDefaultBrand", ...(args as KustomerFullApiOperationArgs<"GETDefaultBrand">)),
  };
}
