// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; refresh this generated provider package after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiDevicesOperationKeys = [
  "GET /devices",
  "POST /devices",
  "GET /devices/groups",
  "POST /devices/zpa/assignment",
  "GET /devices/zpa/settings",
  "POST /devices/zpa/upgrade",
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}",
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions",
  "GET /devices/{deviceId}",
  "DELETE /devices/{deviceId}",
  "PATCH /devices/{deviceId}",
  "PATCH /devices/{deviceId}/assign_group",
  "PATCH /devices/{deviceId}/assignment"
] as const;
export type ZoomMeetingsApiDevicesOperationKey = typeof ZoomMeetingsApiDevicesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiDevicesOperationPathParamMap {
  "GET /devices": {};
  "POST /devices": {};
  "GET /devices/groups": {};
  "POST /devices/zpa/assignment": {};
  "GET /devices/zpa/settings": {};
  "POST /devices/zpa/upgrade": {};
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": { "vendor": ZoomMeetingsApiPathParamValue; "macAddress": ZoomMeetingsApiPathParamValue };
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": { "zdmGroupId": ZoomMeetingsApiPathParamValue };
  "GET /devices/{deviceId}": { "deviceId": ZoomMeetingsApiPathParamValue };
  "DELETE /devices/{deviceId}": { "deviceId": ZoomMeetingsApiPathParamValue };
  "PATCH /devices/{deviceId}": { "deviceId": ZoomMeetingsApiPathParamValue };
  "PATCH /devices/{deviceId}/assign_group": { "deviceId": ZoomMeetingsApiPathParamValue };
  "PATCH /devices/{deviceId}/assignment": { "deviceId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiDevicesOperationRequestMap {
  "GET /devices": ZoomMeetingsApiOperationInput<"GET /devices">;
  "POST /devices": ZoomMeetingsApiOperationInput<"POST /devices">;
  "GET /devices/groups": ZoomMeetingsApiOperationInput<"GET /devices/groups">;
  "POST /devices/zpa/assignment": ZoomMeetingsApiOperationInput<"POST /devices/zpa/assignment">;
  "GET /devices/zpa/settings": ZoomMeetingsApiOperationInput<"GET /devices/zpa/settings">;
  "POST /devices/zpa/upgrade": ZoomMeetingsApiOperationInput<"POST /devices/zpa/upgrade">;
  "DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}": ZoomMeetingsApiOperationInput<"DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}">;
  "GET /devices/zpa/zdm_groups/{zdmGroupId}/versions": ZoomMeetingsApiOperationInput<"GET /devices/zpa/zdm_groups/{zdmGroupId}/versions">;
  "GET /devices/{deviceId}": ZoomMeetingsApiOperationInput<"GET /devices/{deviceId}">;
  "DELETE /devices/{deviceId}": ZoomMeetingsApiOperationInput<"DELETE /devices/{deviceId}">;
  "PATCH /devices/{deviceId}": ZoomMeetingsApiOperationInput<"PATCH /devices/{deviceId}">;
  "PATCH /devices/{deviceId}/assign_group": ZoomMeetingsApiOperationInput<"PATCH /devices/{deviceId}/assign_group">;
  "PATCH /devices/{deviceId}/assignment": ZoomMeetingsApiOperationInput<"PATCH /devices/{deviceId}/assignment">;
}

export interface ZoomMeetingsApiDevicesGeneratedClient {
  ListDevices(...args: ZoomMeetingsApiOperationArgs<"GET /devices">): Promise<ZoomMeetingsApiOperationResponseMap["GET /devices"]>;
  AddDevice(...args: ZoomMeetingsApiOperationArgs<"POST /devices">): Promise<ZoomMeetingsApiOperationResponseMap["POST /devices"]>;
  Getzdmgroupinfo(...args: ZoomMeetingsApiOperationArgs<"GET /devices/groups">): Promise<ZoomMeetingsApiOperationResponseMap["GET /devices/groups"]>;
  AssigndevicetoauserCommonarea(...args: ZoomMeetingsApiOperationArgs<"POST /devices/zpa/assignment">): Promise<ZoomMeetingsApiOperationResponseMap["POST /devices/zpa/assignment"]>;
  GetZpaDeviceListProfileSettingOfaUser(...args: ZoomMeetingsApiOperationArgs<"GET /devices/zpa/settings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /devices/zpa/settings"]>;
  UpgradeZpasApp(...args: ZoomMeetingsApiOperationArgs<"POST /devices/zpa/upgrade">): Promise<ZoomMeetingsApiOperationResponseMap["POST /devices/zpa/upgrade"]>;
  DeleteZpaDeviceByVendorAndMacAddress(...args: ZoomMeetingsApiOperationArgs<"DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}"]>;
  GetZpaVersioninfo(...args: ZoomMeetingsApiOperationArgs<"GET /devices/zpa/zdm_groups/{zdmGroupId}/versions">): Promise<ZoomMeetingsApiOperationResponseMap["GET /devices/zpa/zdm_groups/{zdmGroupId}/versions"]>;
  GetDevice(...args: ZoomMeetingsApiOperationArgs<"GET /devices/{deviceId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /devices/{deviceId}"]>;
  DeleteDevice(...args: ZoomMeetingsApiOperationArgs<"DELETE /devices/{deviceId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /devices/{deviceId}"]>;
  UpdateDevice(...args: ZoomMeetingsApiOperationArgs<"PATCH /devices/{deviceId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /devices/{deviceId}"]>;
  AssginGroup(...args: ZoomMeetingsApiOperationArgs<"PATCH /devices/{deviceId}/assign_group">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /devices/{deviceId}/assign_group"]>;
  ChangeDeviceAssociation(...args: ZoomMeetingsApiOperationArgs<"PATCH /devices/{deviceId}/assignment">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /devices/{deviceId}/assignment"]>;
}

export const ZoomMeetingsApiDevicesGeneratedFunctionNames = [
  "ListDevices",
  "AddDevice",
  "Getzdmgroupinfo",
  "AssigndevicetoauserCommonarea",
  "GetZpaDeviceListProfileSettingOfaUser",
  "UpgradeZpasApp",
  "DeleteZpaDeviceByVendorAndMacAddress",
  "GetZpaVersioninfo",
  "GetDevice",
  "DeleteDevice",
  "UpdateDevice",
  "AssginGroup",
  "ChangeDeviceAssociation"
] as const satisfies readonly (keyof ZoomMeetingsApiDevicesGeneratedClient)[];

export function createZoomMeetingsApiDevicesGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiDevicesGeneratedClient {
  return {
    ListDevices: (...args) => callOperation("GET /devices", ...(args as ZoomMeetingsApiOperationArgs<"GET /devices">)),
    AddDevice: (...args) => callOperation("POST /devices", ...(args as ZoomMeetingsApiOperationArgs<"POST /devices">)),
    Getzdmgroupinfo: (...args) => callOperation("GET /devices/groups", ...(args as ZoomMeetingsApiOperationArgs<"GET /devices/groups">)),
    AssigndevicetoauserCommonarea: (...args) => callOperation("POST /devices/zpa/assignment", ...(args as ZoomMeetingsApiOperationArgs<"POST /devices/zpa/assignment">)),
    GetZpaDeviceListProfileSettingOfaUser: (...args) => callOperation("GET /devices/zpa/settings", ...(args as ZoomMeetingsApiOperationArgs<"GET /devices/zpa/settings">)),
    UpgradeZpasApp: (...args) => callOperation("POST /devices/zpa/upgrade", ...(args as ZoomMeetingsApiOperationArgs<"POST /devices/zpa/upgrade">)),
    DeleteZpaDeviceByVendorAndMacAddress: (...args) => callOperation("DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /devices/zpa/vendors/{vendor}/mac_addresses/{macAddress}">)),
    GetZpaVersioninfo: (...args) => callOperation("GET /devices/zpa/zdm_groups/{zdmGroupId}/versions", ...(args as ZoomMeetingsApiOperationArgs<"GET /devices/zpa/zdm_groups/{zdmGroupId}/versions">)),
    GetDevice: (...args) => callOperation("GET /devices/{deviceId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /devices/{deviceId}">)),
    DeleteDevice: (...args) => callOperation("DELETE /devices/{deviceId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /devices/{deviceId}">)),
    UpdateDevice: (...args) => callOperation("PATCH /devices/{deviceId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /devices/{deviceId}">)),
    AssginGroup: (...args) => callOperation("PATCH /devices/{deviceId}/assign_group", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /devices/{deviceId}/assign_group">)),
    ChangeDeviceAssociation: (...args) => callOperation("PATCH /devices/{deviceId}/assignment", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /devices/{deviceId}/assignment">)),
  };
}
