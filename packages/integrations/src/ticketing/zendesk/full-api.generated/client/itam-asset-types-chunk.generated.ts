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
export const ZendeskFullApiITAMAssetTypesOperationKeys = [
  "CreateItamAssetType",
  "DeleteItamAssetType",
  "ListItamAssetTypes",
  "ShowItamAssetType",
  "UpdateItamAssetType"
] as const;
export type ZendeskFullApiITAMAssetTypesOperationKey = typeof ZendeskFullApiITAMAssetTypesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiITAMAssetTypesOperationPathParamMap {
  "CreateItamAssetType": {};
  "DeleteItamAssetType": { "asset_type_id": ZendeskFullApiPathParamValue };
  "ListItamAssetTypes": {};
  "ShowItamAssetType": { "asset_type_id": ZendeskFullApiPathParamValue };
  "UpdateItamAssetType": { "asset_type_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiITAMAssetTypesOperationRequestMap {
  "CreateItamAssetType": ZendeskFullApiOperationInput<"CreateItamAssetType">;
  "DeleteItamAssetType": ZendeskFullApiOperationInput<"DeleteItamAssetType">;
  "ListItamAssetTypes": ZendeskFullApiOperationInput<"ListItamAssetTypes">;
  "ShowItamAssetType": ZendeskFullApiOperationInput<"ShowItamAssetType">;
  "UpdateItamAssetType": ZendeskFullApiOperationInput<"UpdateItamAssetType">;
}

export interface ZendeskFullApiITAMAssetTypesGeneratedClient {
  CreateItamAssetType(...args: ZendeskFullApiOperationArgs<"CreateItamAssetType">): Promise<ZendeskFullApiOperationResponseMap["CreateItamAssetType"]>;
  DeleteItamAssetType(...args: ZendeskFullApiOperationArgs<"DeleteItamAssetType">): Promise<ZendeskFullApiOperationResponseMap["DeleteItamAssetType"]>;
  ListItamAssetTypes(...args: ZendeskFullApiOperationArgs<"ListItamAssetTypes">): Promise<ZendeskFullApiOperationResponseMap["ListItamAssetTypes"]>;
  ShowItamAssetType(...args: ZendeskFullApiOperationArgs<"ShowItamAssetType">): Promise<ZendeskFullApiOperationResponseMap["ShowItamAssetType"]>;
  UpdateItamAssetType(...args: ZendeskFullApiOperationArgs<"UpdateItamAssetType">): Promise<ZendeskFullApiOperationResponseMap["UpdateItamAssetType"]>;
}

export const ZendeskFullApiITAMAssetTypesGeneratedFunctionNames = [
  "CreateItamAssetType",
  "DeleteItamAssetType",
  "ListItamAssetTypes",
  "ShowItamAssetType",
  "UpdateItamAssetType"
] as const satisfies readonly (keyof ZendeskFullApiITAMAssetTypesGeneratedClient)[];

export function createZendeskFullApiITAMAssetTypesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiITAMAssetTypesGeneratedClient {
  return {
    CreateItamAssetType: (...args) => callOperation("CreateItamAssetType", ...(args as ZendeskFullApiOperationArgs<"CreateItamAssetType">)),
    DeleteItamAssetType: (...args) => callOperation("DeleteItamAssetType", ...(args as ZendeskFullApiOperationArgs<"DeleteItamAssetType">)),
    ListItamAssetTypes: (...args) => callOperation("ListItamAssetTypes", ...(args as ZendeskFullApiOperationArgs<"ListItamAssetTypes">)),
    ShowItamAssetType: (...args) => callOperation("ShowItamAssetType", ...(args as ZendeskFullApiOperationArgs<"ShowItamAssetType">)),
    UpdateItamAssetType: (...args) => callOperation("UpdateItamAssetType", ...(args as ZendeskFullApiOperationArgs<"UpdateItamAssetType">)),
  };
}
