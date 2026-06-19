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
export const ZendeskFullApiITAMAssetFieldsOperationKeys = [
  "CreateItamAssetTypeField",
  "DeleteItamAssetTypeField",
  "ListItamAssetTypeFields",
  "ShowItamAssetTypeField",
  "UpdateItamAssetTypeField"
] as const;
export type ZendeskFullApiITAMAssetFieldsOperationKey = typeof ZendeskFullApiITAMAssetFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiITAMAssetFieldsOperationPathParamMap {
  "CreateItamAssetTypeField": { "asset_type_id": ZendeskFullApiPathParamValue };
  "DeleteItamAssetTypeField": { "asset_type_id": ZendeskFullApiPathParamValue; "asset_type_field_id": ZendeskFullApiPathParamValue };
  "ListItamAssetTypeFields": { "asset_type_id": ZendeskFullApiPathParamValue };
  "ShowItamAssetTypeField": { "asset_type_id": ZendeskFullApiPathParamValue; "asset_type_field_id": ZendeskFullApiPathParamValue };
  "UpdateItamAssetTypeField": { "asset_type_id": ZendeskFullApiPathParamValue; "asset_type_field_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiITAMAssetFieldsOperationRequestMap {
  "CreateItamAssetTypeField": ZendeskFullApiOperationInput<"CreateItamAssetTypeField">;
  "DeleteItamAssetTypeField": ZendeskFullApiOperationInput<"DeleteItamAssetTypeField">;
  "ListItamAssetTypeFields": ZendeskFullApiOperationInput<"ListItamAssetTypeFields">;
  "ShowItamAssetTypeField": ZendeskFullApiOperationInput<"ShowItamAssetTypeField">;
  "UpdateItamAssetTypeField": ZendeskFullApiOperationInput<"UpdateItamAssetTypeField">;
}

export interface ZendeskFullApiITAMAssetFieldsGeneratedClient {
  CreateItamAssetTypeField(...args: ZendeskFullApiOperationArgs<"CreateItamAssetTypeField">): Promise<ZendeskFullApiOperationResponseMap["CreateItamAssetTypeField"]>;
  DeleteItamAssetTypeField(...args: ZendeskFullApiOperationArgs<"DeleteItamAssetTypeField">): Promise<ZendeskFullApiOperationResponseMap["DeleteItamAssetTypeField"]>;
  ListItamAssetTypeFields(...args: ZendeskFullApiOperationArgs<"ListItamAssetTypeFields">): Promise<ZendeskFullApiOperationResponseMap["ListItamAssetTypeFields"]>;
  ShowItamAssetTypeField(...args: ZendeskFullApiOperationArgs<"ShowItamAssetTypeField">): Promise<ZendeskFullApiOperationResponseMap["ShowItamAssetTypeField"]>;
  UpdateItamAssetTypeField(...args: ZendeskFullApiOperationArgs<"UpdateItamAssetTypeField">): Promise<ZendeskFullApiOperationResponseMap["UpdateItamAssetTypeField"]>;
}

export const ZendeskFullApiITAMAssetFieldsGeneratedFunctionNames = [
  "CreateItamAssetTypeField",
  "DeleteItamAssetTypeField",
  "ListItamAssetTypeFields",
  "ShowItamAssetTypeField",
  "UpdateItamAssetTypeField"
] as const satisfies readonly (keyof ZendeskFullApiITAMAssetFieldsGeneratedClient)[];

export function createZendeskFullApiITAMAssetFieldsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiITAMAssetFieldsGeneratedClient {
  return {
    CreateItamAssetTypeField: (...args) => callOperation("CreateItamAssetTypeField", ...(args as ZendeskFullApiOperationArgs<"CreateItamAssetTypeField">)),
    DeleteItamAssetTypeField: (...args) => callOperation("DeleteItamAssetTypeField", ...(args as ZendeskFullApiOperationArgs<"DeleteItamAssetTypeField">)),
    ListItamAssetTypeFields: (...args) => callOperation("ListItamAssetTypeFields", ...(args as ZendeskFullApiOperationArgs<"ListItamAssetTypeFields">)),
    ShowItamAssetTypeField: (...args) => callOperation("ShowItamAssetTypeField", ...(args as ZendeskFullApiOperationArgs<"ShowItamAssetTypeField">)),
    UpdateItamAssetTypeField: (...args) => callOperation("UpdateItamAssetTypeField", ...(args as ZendeskFullApiOperationArgs<"UpdateItamAssetTypeField">)),
  };
}
