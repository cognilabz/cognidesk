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
export const ZendeskFullApiITAMAssetsOperationKeys = [
  "CreateItamAsset",
  "DeleteItamAsset",
  "FilteredSearchItamAssets",
  "ItamAssetBulkJobs",
  "ListItamAssets",
  "SearchItamAssets",
  "ShowItamAsset",
  "UpdateItamAsset"
] as const;
export type ZendeskFullApiITAMAssetsOperationKey = typeof ZendeskFullApiITAMAssetsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiITAMAssetsOperationPathParamMap {
  "CreateItamAsset": {};
  "DeleteItamAsset": { "asset_id": ZendeskFullApiPathParamValue };
  "FilteredSearchItamAssets": {};
  "ItamAssetBulkJobs": {};
  "ListItamAssets": {};
  "SearchItamAssets": {};
  "ShowItamAsset": { "asset_id": ZendeskFullApiPathParamValue };
  "UpdateItamAsset": { "asset_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiITAMAssetsOperationRequestMap {
  "CreateItamAsset": ZendeskFullApiOperationInput<"CreateItamAsset">;
  "DeleteItamAsset": ZendeskFullApiOperationInput<"DeleteItamAsset">;
  "FilteredSearchItamAssets": ZendeskFullApiOperationInput<"FilteredSearchItamAssets">;
  "ItamAssetBulkJobs": ZendeskFullApiOperationInput<"ItamAssetBulkJobs">;
  "ListItamAssets": ZendeskFullApiOperationInput<"ListItamAssets">;
  "SearchItamAssets": ZendeskFullApiOperationInput<"SearchItamAssets">;
  "ShowItamAsset": ZendeskFullApiOperationInput<"ShowItamAsset">;
  "UpdateItamAsset": ZendeskFullApiOperationInput<"UpdateItamAsset">;
}

export interface ZendeskFullApiITAMAssetsGeneratedClient {
  CreateItamAsset(...args: ZendeskFullApiOperationArgs<"CreateItamAsset">): Promise<ZendeskFullApiOperationResponseMap["CreateItamAsset"]>;
  DeleteItamAsset(...args: ZendeskFullApiOperationArgs<"DeleteItamAsset">): Promise<ZendeskFullApiOperationResponseMap["DeleteItamAsset"]>;
  FilteredSearchItamAssets(...args: ZendeskFullApiOperationArgs<"FilteredSearchItamAssets">): Promise<ZendeskFullApiOperationResponseMap["FilteredSearchItamAssets"]>;
  ItamAssetBulkJobs(...args: ZendeskFullApiOperationArgs<"ItamAssetBulkJobs">): Promise<ZendeskFullApiOperationResponseMap["ItamAssetBulkJobs"]>;
  ListItamAssets(...args: ZendeskFullApiOperationArgs<"ListItamAssets">): Promise<ZendeskFullApiOperationResponseMap["ListItamAssets"]>;
  SearchItamAssets(...args: ZendeskFullApiOperationArgs<"SearchItamAssets">): Promise<ZendeskFullApiOperationResponseMap["SearchItamAssets"]>;
  ShowItamAsset(...args: ZendeskFullApiOperationArgs<"ShowItamAsset">): Promise<ZendeskFullApiOperationResponseMap["ShowItamAsset"]>;
  UpdateItamAsset(...args: ZendeskFullApiOperationArgs<"UpdateItamAsset">): Promise<ZendeskFullApiOperationResponseMap["UpdateItamAsset"]>;
}

export const ZendeskFullApiITAMAssetsGeneratedFunctionNames = [
  "CreateItamAsset",
  "DeleteItamAsset",
  "FilteredSearchItamAssets",
  "ItamAssetBulkJobs",
  "ListItamAssets",
  "SearchItamAssets",
  "ShowItamAsset",
  "UpdateItamAsset"
] as const satisfies readonly (keyof ZendeskFullApiITAMAssetsGeneratedClient)[];

export function createZendeskFullApiITAMAssetsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiITAMAssetsGeneratedClient {
  return {
    CreateItamAsset: (...args) => callOperation("CreateItamAsset", ...(args as ZendeskFullApiOperationArgs<"CreateItamAsset">)),
    DeleteItamAsset: (...args) => callOperation("DeleteItamAsset", ...(args as ZendeskFullApiOperationArgs<"DeleteItamAsset">)),
    FilteredSearchItamAssets: (...args) => callOperation("FilteredSearchItamAssets", ...(args as ZendeskFullApiOperationArgs<"FilteredSearchItamAssets">)),
    ItamAssetBulkJobs: (...args) => callOperation("ItamAssetBulkJobs", ...(args as ZendeskFullApiOperationArgs<"ItamAssetBulkJobs">)),
    ListItamAssets: (...args) => callOperation("ListItamAssets", ...(args as ZendeskFullApiOperationArgs<"ListItamAssets">)),
    SearchItamAssets: (...args) => callOperation("SearchItamAssets", ...(args as ZendeskFullApiOperationArgs<"SearchItamAssets">)),
    ShowItamAsset: (...args) => callOperation("ShowItamAsset", ...(args as ZendeskFullApiOperationArgs<"ShowItamAsset">)),
    UpdateItamAsset: (...args) => callOperation("UpdateItamAsset", ...(args as ZendeskFullApiOperationArgs<"UpdateItamAsset">)),
  };
}
