// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiMessagingOperationKeys = [
  "deleteMessagingSetting",
  "deleteMessagingSettingsDefault",
  "deleteMessagingSupportedcontentSupportedContentId",
  "getMessagingSetting",
  "getMessagingSettings",
  "getMessagingSettingsDefault",
  "getMessagingSupportedcontent",
  "getMessagingSupportedcontentSupportedContentId",
  "patchMessagingSetting",
  "patchMessagingSupportedcontentSupportedContentId",
  "postMessagingSettings",
  "postMessagingSupportedcontent",
  "putMessagingSettingsDefault"
] as const;
export type GenesysCloudFullApiMessagingOperationKey = typeof GenesysCloudFullApiMessagingOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiMessagingOperationPathParamMap {
  "deleteMessagingSetting": { "messageSettingId": GenesysCloudFullApiPathParamValue };
  "deleteMessagingSettingsDefault": {};
  "deleteMessagingSupportedcontentSupportedContentId": { "supportedContentId": GenesysCloudFullApiPathParamValue };
  "getMessagingSetting": { "messageSettingId": GenesysCloudFullApiPathParamValue };
  "getMessagingSettings": {};
  "getMessagingSettingsDefault": {};
  "getMessagingSupportedcontent": {};
  "getMessagingSupportedcontentSupportedContentId": { "supportedContentId": GenesysCloudFullApiPathParamValue };
  "patchMessagingSetting": { "messageSettingId": GenesysCloudFullApiPathParamValue };
  "patchMessagingSupportedcontentSupportedContentId": { "supportedContentId": GenesysCloudFullApiPathParamValue };
  "postMessagingSettings": {};
  "postMessagingSupportedcontent": {};
  "putMessagingSettingsDefault": {};
}

export interface GenesysCloudFullApiMessagingOperationRequestMap {
  "deleteMessagingSetting": GenesysCloudFullApiOperationInput<"deleteMessagingSetting">;
  "deleteMessagingSettingsDefault": GenesysCloudFullApiOperationInput<"deleteMessagingSettingsDefault">;
  "deleteMessagingSupportedcontentSupportedContentId": GenesysCloudFullApiOperationInput<"deleteMessagingSupportedcontentSupportedContentId">;
  "getMessagingSetting": GenesysCloudFullApiOperationInput<"getMessagingSetting">;
  "getMessagingSettings": GenesysCloudFullApiOperationInput<"getMessagingSettings">;
  "getMessagingSettingsDefault": GenesysCloudFullApiOperationInput<"getMessagingSettingsDefault">;
  "getMessagingSupportedcontent": GenesysCloudFullApiOperationInput<"getMessagingSupportedcontent">;
  "getMessagingSupportedcontentSupportedContentId": GenesysCloudFullApiOperationInput<"getMessagingSupportedcontentSupportedContentId">;
  "patchMessagingSetting": GenesysCloudFullApiOperationInput<"patchMessagingSetting">;
  "patchMessagingSupportedcontentSupportedContentId": GenesysCloudFullApiOperationInput<"patchMessagingSupportedcontentSupportedContentId">;
  "postMessagingSettings": GenesysCloudFullApiOperationInput<"postMessagingSettings">;
  "postMessagingSupportedcontent": GenesysCloudFullApiOperationInput<"postMessagingSupportedcontent">;
  "putMessagingSettingsDefault": GenesysCloudFullApiOperationInput<"putMessagingSettingsDefault">;
}

export interface GenesysCloudFullApiMessagingGeneratedClient {
  DeleteMessagingSetting(...args: GenesysCloudFullApiOperationArgs<"deleteMessagingSetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteMessagingSetting"]>;
  DeleteMessagingSettingsDefault(...args: GenesysCloudFullApiOperationArgs<"deleteMessagingSettingsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["deleteMessagingSettingsDefault"]>;
  DeleteMessagingSupportedcontentSupportedContentId(...args: GenesysCloudFullApiOperationArgs<"deleteMessagingSupportedcontentSupportedContentId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteMessagingSupportedcontentSupportedContentId"]>;
  GetMessagingSetting(...args: GenesysCloudFullApiOperationArgs<"getMessagingSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getMessagingSetting"]>;
  GetMessagingSettings(...args: GenesysCloudFullApiOperationArgs<"getMessagingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getMessagingSettings"]>;
  GetMessagingSettingsDefault(...args: GenesysCloudFullApiOperationArgs<"getMessagingSettingsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["getMessagingSettingsDefault"]>;
  GetMessagingSupportedcontent(...args: GenesysCloudFullApiOperationArgs<"getMessagingSupportedcontent">): Promise<GenesysCloudFullApiOperationResponseMap["getMessagingSupportedcontent"]>;
  GetMessagingSupportedcontentSupportedContentId(...args: GenesysCloudFullApiOperationArgs<"getMessagingSupportedcontentSupportedContentId">): Promise<GenesysCloudFullApiOperationResponseMap["getMessagingSupportedcontentSupportedContentId"]>;
  PatchMessagingSetting(...args: GenesysCloudFullApiOperationArgs<"patchMessagingSetting">): Promise<GenesysCloudFullApiOperationResponseMap["patchMessagingSetting"]>;
  PatchMessagingSupportedcontentSupportedContentId(...args: GenesysCloudFullApiOperationArgs<"patchMessagingSupportedcontentSupportedContentId">): Promise<GenesysCloudFullApiOperationResponseMap["patchMessagingSupportedcontentSupportedContentId"]>;
  PostMessagingSettings(...args: GenesysCloudFullApiOperationArgs<"postMessagingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postMessagingSettings"]>;
  PostMessagingSupportedcontent(...args: GenesysCloudFullApiOperationArgs<"postMessagingSupportedcontent">): Promise<GenesysCloudFullApiOperationResponseMap["postMessagingSupportedcontent"]>;
  PutMessagingSettingsDefault(...args: GenesysCloudFullApiOperationArgs<"putMessagingSettingsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["putMessagingSettingsDefault"]>;
}

export const GenesysCloudFullApiMessagingGeneratedFunctionNames = [
  "DeleteMessagingSetting",
  "DeleteMessagingSettingsDefault",
  "DeleteMessagingSupportedcontentSupportedContentId",
  "GetMessagingSetting",
  "GetMessagingSettings",
  "GetMessagingSettingsDefault",
  "GetMessagingSupportedcontent",
  "GetMessagingSupportedcontentSupportedContentId",
  "PatchMessagingSetting",
  "PatchMessagingSupportedcontentSupportedContentId",
  "PostMessagingSettings",
  "PostMessagingSupportedcontent",
  "PutMessagingSettingsDefault"
] as const satisfies readonly (keyof GenesysCloudFullApiMessagingGeneratedClient)[];

export function createGenesysCloudFullApiMessagingGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiMessagingGeneratedClient {
  return {
    DeleteMessagingSetting: (...args) => callOperation("deleteMessagingSetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteMessagingSetting">)),
    DeleteMessagingSettingsDefault: (...args) => callOperation("deleteMessagingSettingsDefault", ...(args as GenesysCloudFullApiOperationArgs<"deleteMessagingSettingsDefault">)),
    DeleteMessagingSupportedcontentSupportedContentId: (...args) => callOperation("deleteMessagingSupportedcontentSupportedContentId", ...(args as GenesysCloudFullApiOperationArgs<"deleteMessagingSupportedcontentSupportedContentId">)),
    GetMessagingSetting: (...args) => callOperation("getMessagingSetting", ...(args as GenesysCloudFullApiOperationArgs<"getMessagingSetting">)),
    GetMessagingSettings: (...args) => callOperation("getMessagingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getMessagingSettings">)),
    GetMessagingSettingsDefault: (...args) => callOperation("getMessagingSettingsDefault", ...(args as GenesysCloudFullApiOperationArgs<"getMessagingSettingsDefault">)),
    GetMessagingSupportedcontent: (...args) => callOperation("getMessagingSupportedcontent", ...(args as GenesysCloudFullApiOperationArgs<"getMessagingSupportedcontent">)),
    GetMessagingSupportedcontentSupportedContentId: (...args) => callOperation("getMessagingSupportedcontentSupportedContentId", ...(args as GenesysCloudFullApiOperationArgs<"getMessagingSupportedcontentSupportedContentId">)),
    PatchMessagingSetting: (...args) => callOperation("patchMessagingSetting", ...(args as GenesysCloudFullApiOperationArgs<"patchMessagingSetting">)),
    PatchMessagingSupportedcontentSupportedContentId: (...args) => callOperation("patchMessagingSupportedcontentSupportedContentId", ...(args as GenesysCloudFullApiOperationArgs<"patchMessagingSupportedcontentSupportedContentId">)),
    PostMessagingSettings: (...args) => callOperation("postMessagingSettings", ...(args as GenesysCloudFullApiOperationArgs<"postMessagingSettings">)),
    PostMessagingSupportedcontent: (...args) => callOperation("postMessagingSupportedcontent", ...(args as GenesysCloudFullApiOperationArgs<"postMessagingSupportedcontent">)),
    PutMessagingSettingsDefault: (...args) => callOperation("putMessagingSettingsDefault", ...(args as GenesysCloudFullApiOperationArgs<"putMessagingSettingsDefault">)),
  };
}
