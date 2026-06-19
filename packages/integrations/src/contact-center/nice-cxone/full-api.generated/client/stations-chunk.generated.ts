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
export const NiceCxoneFullApiStationsOperationKeys = [
  "admin-stations-api-docs:get-stations:GET:/stations",
  "admin-stations-api-docs:create-station:POST:/stations",
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}",
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}",
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history",
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history",
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status"
] as const;
export type NiceCxoneFullApiStationsOperationKey = typeof NiceCxoneFullApiStationsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiStationsOperationPathParamMap {
  "admin-stations-api-docs:get-stations:GET:/stations": {};
  "admin-stations-api-docs:create-station:POST:/stations": {};
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": { "stationId": NiceCxoneFullApiPathParamValue };
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": { "stationId": NiceCxoneFullApiPathParamValue };
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": { "stationId": NiceCxoneFullApiPathParamValue };
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": { "stationId": NiceCxoneFullApiPathParamValue };
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": { "stationId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiStationsOperationRequestMap {
  "admin-stations-api-docs:get-stations:GET:/stations": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:get-stations:GET:/stations">;
  "admin-stations-api-docs:create-station:POST:/stations": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:create-station:POST:/stations">;
  "admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}">;
  "admin-stations-api-docs:update-station:PUT:/stations/{stationId}": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:update-station:PUT:/stations/{stationId}">;
  "admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history">;
  "admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history">;
  "admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status": NiceCxoneFullApiOperationInput<"admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status">;
}

export interface NiceCxoneFullApiStationsGeneratedClient {
  AdminStationsApiDocsGetStations(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-stations:GET:/stations">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:get-stations:GET:/stations"]>;
  AdminStationsApiDocsCreateStation(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:create-station:POST:/stations">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:create-station:POST:/stations"]>;
  AdminStationsApiDocsGetStationById(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}"]>;
  AdminStationsApiDocsUpdateStation(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:update-station:PUT:/stations/{stationId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:update-station:PUT:/stations/{stationId}"]>;
  AdminStationsApiDocsGetStationsAuditHistory(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history"]>;
  AdminStationsApiDocsGetStationsLoginHistory(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history"]>;
  AdminStationsApiDocsUpdateStationStatus(...args: NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status"]>;
}

export const NiceCxoneFullApiStationsGeneratedFunctionNames = [
  "AdminStationsApiDocsGetStations",
  "AdminStationsApiDocsCreateStation",
  "AdminStationsApiDocsGetStationById",
  "AdminStationsApiDocsUpdateStation",
  "AdminStationsApiDocsGetStationsAuditHistory",
  "AdminStationsApiDocsGetStationsLoginHistory",
  "AdminStationsApiDocsUpdateStationStatus"
] as const satisfies readonly (keyof NiceCxoneFullApiStationsGeneratedClient)[];

export function createNiceCxoneFullApiStationsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiStationsGeneratedClient {
  return {
    AdminStationsApiDocsGetStations: (...args) => callOperation("admin-stations-api-docs:get-stations:GET:/stations", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-stations:GET:/stations">)),
    AdminStationsApiDocsCreateStation: (...args) => callOperation("admin-stations-api-docs:create-station:POST:/stations", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:create-station:POST:/stations">)),
    AdminStationsApiDocsGetStationById: (...args) => callOperation("admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-station-by-id:GET:/stations/{stationId}">)),
    AdminStationsApiDocsUpdateStation: (...args) => callOperation("admin-stations-api-docs:update-station:PUT:/stations/{stationId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:update-station:PUT:/stations/{stationId}">)),
    AdminStationsApiDocsGetStationsAuditHistory: (...args) => callOperation("admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-stations-audit-history:GET:/stations/{stationId}/audit-history">)),
    AdminStationsApiDocsGetStationsLoginHistory: (...args) => callOperation("admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:get-stations-login-history:GET:/stations/{stationId}/login-history">)),
    AdminStationsApiDocsUpdateStationStatus: (...args) => callOperation("admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status", ...(args as NiceCxoneFullApiOperationArgs<"admin-stations-api-docs:update-station-status:PATCH:/stations/{stationId}/status">)),
  };
}
