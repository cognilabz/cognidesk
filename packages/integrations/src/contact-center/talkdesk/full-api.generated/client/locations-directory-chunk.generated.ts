// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiLocationsDirectoryOperationKeys = [
  "getLocations",
  "getLocationCities",
  "getLocationNames",
  "getLocationsAgent",
  "getLocationsStaffView",
  "getCustomerAddresses",
  "getLocationById",
  "getLocationNextWeekOpeningHours",
  "getServices",
  "getServicesAgent",
  "getServiceLocations",
  "getServiceById",
  "getServiceNextWeekOpeningHours",
  "getGeoAddresses",
  "getGeocoding",
  "getServiceTypes",
  "getServiceNames",
  "getServiceDurations",
  "getStaffs",
  "getStaffSpecialities",
  "getStaffsAgent",
  "getSpecialtiesServicesLocations",
  "getStaffGenders",
  "publicUploadLocationsDirectory"
] as const;
export type TalkdeskFullApiLocationsDirectoryOperationKey = typeof TalkdeskFullApiLocationsDirectoryOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiLocationsDirectoryOperationPathParamMap {
  "getLocations": {};
  "getLocationCities": {};
  "getLocationNames": {};
  "getLocationsAgent": {};
  "getLocationsStaffView": {};
  "getCustomerAddresses": {};
  "getLocationById": { "location_id": TalkdeskFullApiPathParamValue };
  "getLocationNextWeekOpeningHours": { "location_id": TalkdeskFullApiPathParamValue };
  "getServices": {};
  "getServicesAgent": {};
  "getServiceLocations": {};
  "getServiceById": { "service_id": TalkdeskFullApiPathParamValue };
  "getServiceNextWeekOpeningHours": { "service_id": TalkdeskFullApiPathParamValue };
  "getGeoAddresses": {};
  "getGeocoding": {};
  "getServiceTypes": {};
  "getServiceNames": {};
  "getServiceDurations": {};
  "getStaffs": {};
  "getStaffSpecialities": {};
  "getStaffsAgent": {};
  "getSpecialtiesServicesLocations": {};
  "getStaffGenders": {};
  "publicUploadLocationsDirectory": { "directory_type": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiLocationsDirectoryOperationRequestMap {
  "getLocations": TalkdeskFullApiOperationInput<"getLocations">;
  "getLocationCities": TalkdeskFullApiOperationInput<"getLocationCities">;
  "getLocationNames": TalkdeskFullApiOperationInput<"getLocationNames">;
  "getLocationsAgent": TalkdeskFullApiOperationInput<"getLocationsAgent">;
  "getLocationsStaffView": TalkdeskFullApiOperationInput<"getLocationsStaffView">;
  "getCustomerAddresses": TalkdeskFullApiOperationInput<"getCustomerAddresses">;
  "getLocationById": TalkdeskFullApiOperationInput<"getLocationById">;
  "getLocationNextWeekOpeningHours": TalkdeskFullApiOperationInput<"getLocationNextWeekOpeningHours">;
  "getServices": TalkdeskFullApiOperationInput<"getServices">;
  "getServicesAgent": TalkdeskFullApiOperationInput<"getServicesAgent">;
  "getServiceLocations": TalkdeskFullApiOperationInput<"getServiceLocations">;
  "getServiceById": TalkdeskFullApiOperationInput<"getServiceById">;
  "getServiceNextWeekOpeningHours": TalkdeskFullApiOperationInput<"getServiceNextWeekOpeningHours">;
  "getGeoAddresses": TalkdeskFullApiOperationInput<"getGeoAddresses">;
  "getGeocoding": TalkdeskFullApiOperationInput<"getGeocoding">;
  "getServiceTypes": TalkdeskFullApiOperationInput<"getServiceTypes">;
  "getServiceNames": TalkdeskFullApiOperationInput<"getServiceNames">;
  "getServiceDurations": TalkdeskFullApiOperationInput<"getServiceDurations">;
  "getStaffs": TalkdeskFullApiOperationInput<"getStaffs">;
  "getStaffSpecialities": TalkdeskFullApiOperationInput<"getStaffSpecialities">;
  "getStaffsAgent": TalkdeskFullApiOperationInput<"getStaffsAgent">;
  "getSpecialtiesServicesLocations": TalkdeskFullApiOperationInput<"getSpecialtiesServicesLocations">;
  "getStaffGenders": TalkdeskFullApiOperationInput<"getStaffGenders">;
  "publicUploadLocationsDirectory": TalkdeskFullApiOperationInput<"publicUploadLocationsDirectory">;
}

export interface TalkdeskFullApiLocationsDirectoryGeneratedClient {
  GetLocations(...args: TalkdeskFullApiOperationArgs<"getLocations">): Promise<TalkdeskFullApiOperationResponseMap["getLocations"]>;
  GetLocationCities(...args: TalkdeskFullApiOperationArgs<"getLocationCities">): Promise<TalkdeskFullApiOperationResponseMap["getLocationCities"]>;
  GetLocationNames(...args: TalkdeskFullApiOperationArgs<"getLocationNames">): Promise<TalkdeskFullApiOperationResponseMap["getLocationNames"]>;
  GetLocationsAgent(...args: TalkdeskFullApiOperationArgs<"getLocationsAgent">): Promise<TalkdeskFullApiOperationResponseMap["getLocationsAgent"]>;
  GetLocationsStaffView(...args: TalkdeskFullApiOperationArgs<"getLocationsStaffView">): Promise<TalkdeskFullApiOperationResponseMap["getLocationsStaffView"]>;
  GetCustomerAddresses(...args: TalkdeskFullApiOperationArgs<"getCustomerAddresses">): Promise<TalkdeskFullApiOperationResponseMap["getCustomerAddresses"]>;
  GetLocationById(...args: TalkdeskFullApiOperationArgs<"getLocationById">): Promise<TalkdeskFullApiOperationResponseMap["getLocationById"]>;
  GetLocationNextWeekOpeningHours(...args: TalkdeskFullApiOperationArgs<"getLocationNextWeekOpeningHours">): Promise<TalkdeskFullApiOperationResponseMap["getLocationNextWeekOpeningHours"]>;
  GetServices(...args: TalkdeskFullApiOperationArgs<"getServices">): Promise<TalkdeskFullApiOperationResponseMap["getServices"]>;
  GetServicesAgent(...args: TalkdeskFullApiOperationArgs<"getServicesAgent">): Promise<TalkdeskFullApiOperationResponseMap["getServicesAgent"]>;
  GetServiceLocations(...args: TalkdeskFullApiOperationArgs<"getServiceLocations">): Promise<TalkdeskFullApiOperationResponseMap["getServiceLocations"]>;
  GetServiceById(...args: TalkdeskFullApiOperationArgs<"getServiceById">): Promise<TalkdeskFullApiOperationResponseMap["getServiceById"]>;
  GetServiceNextWeekOpeningHours(...args: TalkdeskFullApiOperationArgs<"getServiceNextWeekOpeningHours">): Promise<TalkdeskFullApiOperationResponseMap["getServiceNextWeekOpeningHours"]>;
  GetGeoAddresses(...args: TalkdeskFullApiOperationArgs<"getGeoAddresses">): Promise<TalkdeskFullApiOperationResponseMap["getGeoAddresses"]>;
  GetGeocoding(...args: TalkdeskFullApiOperationArgs<"getGeocoding">): Promise<TalkdeskFullApiOperationResponseMap["getGeocoding"]>;
  GetServiceTypes(...args: TalkdeskFullApiOperationArgs<"getServiceTypes">): Promise<TalkdeskFullApiOperationResponseMap["getServiceTypes"]>;
  GetServiceNames(...args: TalkdeskFullApiOperationArgs<"getServiceNames">): Promise<TalkdeskFullApiOperationResponseMap["getServiceNames"]>;
  GetServiceDurations(...args: TalkdeskFullApiOperationArgs<"getServiceDurations">): Promise<TalkdeskFullApiOperationResponseMap["getServiceDurations"]>;
  GetStaffs(...args: TalkdeskFullApiOperationArgs<"getStaffs">): Promise<TalkdeskFullApiOperationResponseMap["getStaffs"]>;
  GetStaffSpecialities(...args: TalkdeskFullApiOperationArgs<"getStaffSpecialities">): Promise<TalkdeskFullApiOperationResponseMap["getStaffSpecialities"]>;
  GetStaffsAgent(...args: TalkdeskFullApiOperationArgs<"getStaffsAgent">): Promise<TalkdeskFullApiOperationResponseMap["getStaffsAgent"]>;
  GetSpecialtiesServicesLocations(...args: TalkdeskFullApiOperationArgs<"getSpecialtiesServicesLocations">): Promise<TalkdeskFullApiOperationResponseMap["getSpecialtiesServicesLocations"]>;
  GetStaffGenders(...args: TalkdeskFullApiOperationArgs<"getStaffGenders">): Promise<TalkdeskFullApiOperationResponseMap["getStaffGenders"]>;
  PublicUploadLocationsDirectory(...args: TalkdeskFullApiOperationArgs<"publicUploadLocationsDirectory">): Promise<TalkdeskFullApiOperationResponseMap["publicUploadLocationsDirectory"]>;
}

export const TalkdeskFullApiLocationsDirectoryGeneratedFunctionNames = [
  "GetLocations",
  "GetLocationCities",
  "GetLocationNames",
  "GetLocationsAgent",
  "GetLocationsStaffView",
  "GetCustomerAddresses",
  "GetLocationById",
  "GetLocationNextWeekOpeningHours",
  "GetServices",
  "GetServicesAgent",
  "GetServiceLocations",
  "GetServiceById",
  "GetServiceNextWeekOpeningHours",
  "GetGeoAddresses",
  "GetGeocoding",
  "GetServiceTypes",
  "GetServiceNames",
  "GetServiceDurations",
  "GetStaffs",
  "GetStaffSpecialities",
  "GetStaffsAgent",
  "GetSpecialtiesServicesLocations",
  "GetStaffGenders",
  "PublicUploadLocationsDirectory"
] as const satisfies readonly (keyof TalkdeskFullApiLocationsDirectoryGeneratedClient)[];

export function createTalkdeskFullApiLocationsDirectoryGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiLocationsDirectoryGeneratedClient {
  return {
    GetLocations: (...args) => callOperation("getLocations", ...(args as TalkdeskFullApiOperationArgs<"getLocations">)),
    GetLocationCities: (...args) => callOperation("getLocationCities", ...(args as TalkdeskFullApiOperationArgs<"getLocationCities">)),
    GetLocationNames: (...args) => callOperation("getLocationNames", ...(args as TalkdeskFullApiOperationArgs<"getLocationNames">)),
    GetLocationsAgent: (...args) => callOperation("getLocationsAgent", ...(args as TalkdeskFullApiOperationArgs<"getLocationsAgent">)),
    GetLocationsStaffView: (...args) => callOperation("getLocationsStaffView", ...(args as TalkdeskFullApiOperationArgs<"getLocationsStaffView">)),
    GetCustomerAddresses: (...args) => callOperation("getCustomerAddresses", ...(args as TalkdeskFullApiOperationArgs<"getCustomerAddresses">)),
    GetLocationById: (...args) => callOperation("getLocationById", ...(args as TalkdeskFullApiOperationArgs<"getLocationById">)),
    GetLocationNextWeekOpeningHours: (...args) => callOperation("getLocationNextWeekOpeningHours", ...(args as TalkdeskFullApiOperationArgs<"getLocationNextWeekOpeningHours">)),
    GetServices: (...args) => callOperation("getServices", ...(args as TalkdeskFullApiOperationArgs<"getServices">)),
    GetServicesAgent: (...args) => callOperation("getServicesAgent", ...(args as TalkdeskFullApiOperationArgs<"getServicesAgent">)),
    GetServiceLocations: (...args) => callOperation("getServiceLocations", ...(args as TalkdeskFullApiOperationArgs<"getServiceLocations">)),
    GetServiceById: (...args) => callOperation("getServiceById", ...(args as TalkdeskFullApiOperationArgs<"getServiceById">)),
    GetServiceNextWeekOpeningHours: (...args) => callOperation("getServiceNextWeekOpeningHours", ...(args as TalkdeskFullApiOperationArgs<"getServiceNextWeekOpeningHours">)),
    GetGeoAddresses: (...args) => callOperation("getGeoAddresses", ...(args as TalkdeskFullApiOperationArgs<"getGeoAddresses">)),
    GetGeocoding: (...args) => callOperation("getGeocoding", ...(args as TalkdeskFullApiOperationArgs<"getGeocoding">)),
    GetServiceTypes: (...args) => callOperation("getServiceTypes", ...(args as TalkdeskFullApiOperationArgs<"getServiceTypes">)),
    GetServiceNames: (...args) => callOperation("getServiceNames", ...(args as TalkdeskFullApiOperationArgs<"getServiceNames">)),
    GetServiceDurations: (...args) => callOperation("getServiceDurations", ...(args as TalkdeskFullApiOperationArgs<"getServiceDurations">)),
    GetStaffs: (...args) => callOperation("getStaffs", ...(args as TalkdeskFullApiOperationArgs<"getStaffs">)),
    GetStaffSpecialities: (...args) => callOperation("getStaffSpecialities", ...(args as TalkdeskFullApiOperationArgs<"getStaffSpecialities">)),
    GetStaffsAgent: (...args) => callOperation("getStaffsAgent", ...(args as TalkdeskFullApiOperationArgs<"getStaffsAgent">)),
    GetSpecialtiesServicesLocations: (...args) => callOperation("getSpecialtiesServicesLocations", ...(args as TalkdeskFullApiOperationArgs<"getSpecialtiesServicesLocations">)),
    GetStaffGenders: (...args) => callOperation("getStaffGenders", ...(args as TalkdeskFullApiOperationArgs<"getStaffGenders">)),
    PublicUploadLocationsDirectory: (...args) => callOperation("publicUploadLocationsDirectory", ...(args as TalkdeskFullApiOperationArgs<"publicUploadLocationsDirectory">)),
  };
}
