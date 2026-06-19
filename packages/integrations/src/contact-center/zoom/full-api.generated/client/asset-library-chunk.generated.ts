// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiAssetLibraryOperationKeys = [
  "GET /contact_center/asset_library/assets",
  "POST /contact_center/asset_library/assets",
  "PATCH /contact_center/asset_library/assets/items",
  "GET /contact_center/asset_library/assets/{assetId}",
  "DELETE /contact_center/asset_library/assets/{assetId}",
  "PATCH /contact_center/asset_library/assets/{assetId}",
  "POST /contact_center/asset_library/assets/{assetId}/duplicate",
  "DELETE /contact_center/asset_library/assets/{assetId}/items",
  "GET /contact_center/asset_library/categories",
  "POST /contact_center/asset_library/categories",
  "GET /contact_center/asset_library/categories/{categoryId}",
  "DELETE /contact_center/asset_library/categories/{categoryId}",
  "PATCH /contact_center/asset_library/categories/{categoryId}"
] as const;
export type ZoomContactCenterFullApiAssetLibraryOperationKey = typeof ZoomContactCenterFullApiAssetLibraryOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiAssetLibraryOperationPathParamMap {
  "GET /contact_center/asset_library/assets": {};
  "POST /contact_center/asset_library/assets": {};
  "PATCH /contact_center/asset_library/assets/items": {};
  "GET /contact_center/asset_library/assets/{assetId}": { "assetId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/asset_library/assets/{assetId}": { "assetId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/asset_library/assets/{assetId}": { "assetId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": { "assetId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/asset_library/assets/{assetId}/items": { "assetId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/asset_library/categories": {};
  "POST /contact_center/asset_library/categories": {};
  "GET /contact_center/asset_library/categories/{categoryId}": { "categoryId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/asset_library/categories/{categoryId}": { "categoryId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/asset_library/categories/{categoryId}": { "categoryId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiAssetLibraryOperationRequestMap {
  "GET /contact_center/asset_library/assets": ZoomContactCenterFullApiOperationInput<"GET /contact_center/asset_library/assets">;
  "POST /contact_center/asset_library/assets": ZoomContactCenterFullApiOperationInput<"POST /contact_center/asset_library/assets">;
  "PATCH /contact_center/asset_library/assets/items": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/asset_library/assets/items">;
  "GET /contact_center/asset_library/assets/{assetId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/asset_library/assets/{assetId}">;
  "DELETE /contact_center/asset_library/assets/{assetId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/asset_library/assets/{assetId}">;
  "PATCH /contact_center/asset_library/assets/{assetId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/asset_library/assets/{assetId}">;
  "POST /contact_center/asset_library/assets/{assetId}/duplicate": ZoomContactCenterFullApiOperationInput<"POST /contact_center/asset_library/assets/{assetId}/duplicate">;
  "DELETE /contact_center/asset_library/assets/{assetId}/items": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/asset_library/assets/{assetId}/items">;
  "GET /contact_center/asset_library/categories": ZoomContactCenterFullApiOperationInput<"GET /contact_center/asset_library/categories">;
  "POST /contact_center/asset_library/categories": ZoomContactCenterFullApiOperationInput<"POST /contact_center/asset_library/categories">;
  "GET /contact_center/asset_library/categories/{categoryId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/asset_library/categories/{categoryId}">;
  "DELETE /contact_center/asset_library/categories/{categoryId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/asset_library/categories/{categoryId}">;
  "PATCH /contact_center/asset_library/categories/{categoryId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/asset_library/categories/{categoryId}">;
}

export interface ZoomContactCenterFullApiAssetLibraryGeneratedClient {
  ListAssets(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/assets">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/asset_library/assets"]>;
  CreateAnAsset(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/asset_library/assets">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/asset_library/assets"]>;
  BatchUpdateAssetItems(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/asset_library/assets/items">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/asset_library/assets/items"]>;
  GetAnAsset(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/assets/{assetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/asset_library/assets/{assetId}"]>;
  DeleteAnAsset(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/asset_library/assets/{assetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/asset_library/assets/{assetId}"]>;
  UpdateAnAsset(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/asset_library/assets/{assetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/asset_library/assets/{assetId}"]>;
  DuplicateAnAsset(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/asset_library/assets/{assetId}/duplicate">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/asset_library/assets/{assetId}/duplicate"]>;
  Deleteassetitems(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/asset_library/assets/{assetId}/items">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/asset_library/assets/{assetId}/items"]>;
  ListAssetCategories(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/categories">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/asset_library/categories"]>;
  CreateAnAssetCategory(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/asset_library/categories">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/asset_library/categories"]>;
  GetAnAssetCategory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/categories/{categoryId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/asset_library/categories/{categoryId}"]>;
  DeleteAnAssetCategory(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/asset_library/categories/{categoryId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/asset_library/categories/{categoryId}"]>;
  UpdateAnAssetCategory(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/asset_library/categories/{categoryId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/asset_library/categories/{categoryId}"]>;
}

export const ZoomContactCenterFullApiAssetLibraryGeneratedFunctionNames = [
  "ListAssets",
  "CreateAnAsset",
  "BatchUpdateAssetItems",
  "GetAnAsset",
  "DeleteAnAsset",
  "UpdateAnAsset",
  "DuplicateAnAsset",
  "Deleteassetitems",
  "ListAssetCategories",
  "CreateAnAssetCategory",
  "GetAnAssetCategory",
  "DeleteAnAssetCategory",
  "UpdateAnAssetCategory"
] as const satisfies readonly (keyof ZoomContactCenterFullApiAssetLibraryGeneratedClient)[];

export function createZoomContactCenterFullApiAssetLibraryGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiAssetLibraryGeneratedClient {
  return {
    ListAssets: (...args) => callOperation("GET /contact_center/asset_library/assets", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/assets">)),
    CreateAnAsset: (...args) => callOperation("POST /contact_center/asset_library/assets", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/asset_library/assets">)),
    BatchUpdateAssetItems: (...args) => callOperation("PATCH /contact_center/asset_library/assets/items", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/asset_library/assets/items">)),
    GetAnAsset: (...args) => callOperation("GET /contact_center/asset_library/assets/{assetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/assets/{assetId}">)),
    DeleteAnAsset: (...args) => callOperation("DELETE /contact_center/asset_library/assets/{assetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/asset_library/assets/{assetId}">)),
    UpdateAnAsset: (...args) => callOperation("PATCH /contact_center/asset_library/assets/{assetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/asset_library/assets/{assetId}">)),
    DuplicateAnAsset: (...args) => callOperation("POST /contact_center/asset_library/assets/{assetId}/duplicate", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/asset_library/assets/{assetId}/duplicate">)),
    Deleteassetitems: (...args) => callOperation("DELETE /contact_center/asset_library/assets/{assetId}/items", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/asset_library/assets/{assetId}/items">)),
    ListAssetCategories: (...args) => callOperation("GET /contact_center/asset_library/categories", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/categories">)),
    CreateAnAssetCategory: (...args) => callOperation("POST /contact_center/asset_library/categories", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/asset_library/categories">)),
    GetAnAssetCategory: (...args) => callOperation("GET /contact_center/asset_library/categories/{categoryId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/asset_library/categories/{categoryId}">)),
    DeleteAnAssetCategory: (...args) => callOperation("DELETE /contact_center/asset_library/categories/{categoryId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/asset_library/categories/{categoryId}">)),
    UpdateAnAssetCategory: (...args) => callOperation("PATCH /contact_center/asset_library/categories/{categoryId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/asset_library/categories/{categoryId}">)),
  };
}
