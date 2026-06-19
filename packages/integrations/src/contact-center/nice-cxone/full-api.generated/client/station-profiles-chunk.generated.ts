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
export const NiceCxoneFullApiStationProfilesOperationKeys = [
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles",
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles",
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}",
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}",
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}",
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history"
] as const;
export type NiceCxoneFullApiStationProfilesOperationKey = typeof NiceCxoneFullApiStationProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiStationProfilesOperationPathParamMap {
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": {};
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": {};
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": { "stationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": { "stationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": { "stationProfileId": NiceCxoneFullApiPathParamValue };
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": { "stationProfileId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiStationProfilesOperationRequestMap {
  "admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles": NiceCxoneFullApiOperationInput<"admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles">;
  "admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles": NiceCxoneFullApiOperationInput<"admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles">;
  "admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}": NiceCxoneFullApiOperationInput<"admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}">;
  "admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}": NiceCxoneFullApiOperationInput<"admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}">;
  "admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}": NiceCxoneFullApiOperationInput<"admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}">;
  "admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history": NiceCxoneFullApiOperationInput<"admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history">;
}

export interface NiceCxoneFullApiStationProfilesGeneratedClient {
  AdminStationprofilesApiDocsGetStationProfiles(...args: NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles"]>;
  AdminStationprofilesApiDocsPostStationProfiles(...args: NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles"]>;
  AdminStationprofilesApiDocsGetStationProfilesId(...args: NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}"]>;
  AdminStationprofilesApiDocsPutStationProfilesId(...args: NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}"]>;
  AdminStationprofilesApiDocsDeleteStationProfilesId(...args: NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}"]>;
  AdminStationprofilesApiDocsGetStationProfilesIdAuditHistory(...args: NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history"]>;
}

export const NiceCxoneFullApiStationProfilesGeneratedFunctionNames = [
  "AdminStationprofilesApiDocsGetStationProfiles",
  "AdminStationprofilesApiDocsPostStationProfiles",
  "AdminStationprofilesApiDocsGetStationProfilesId",
  "AdminStationprofilesApiDocsPutStationProfilesId",
  "AdminStationprofilesApiDocsDeleteStationProfilesId",
  "AdminStationprofilesApiDocsGetStationProfilesIdAuditHistory"
] as const satisfies readonly (keyof NiceCxoneFullApiStationProfilesGeneratedClient)[];

export function createNiceCxoneFullApiStationProfilesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiStationProfilesGeneratedClient {
  return {
    AdminStationprofilesApiDocsGetStationProfiles: (...args) => callOperation("admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles", ...(args as NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:get-station-profiles:GET:/station-profiles">)),
    AdminStationprofilesApiDocsPostStationProfiles: (...args) => callOperation("admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles", ...(args as NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:post-station-profiles:POST:/station-profiles">)),
    AdminStationprofilesApiDocsGetStationProfilesId: (...args) => callOperation("admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:get-station-profiles-id:GET:/station-profiles/{stationProfileId}">)),
    AdminStationprofilesApiDocsPutStationProfilesId: (...args) => callOperation("admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:put-station-profiles-id:PUT:/station-profiles/{stationProfileId}">)),
    AdminStationprofilesApiDocsDeleteStationProfilesId: (...args) => callOperation("admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:delete-station-profiles-id:DELETE:/station-profiles/{stationProfileId}">)),
    AdminStationprofilesApiDocsGetStationProfilesIdAuditHistory: (...args) => callOperation("admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-stationprofiles-api-docs:get-station-profiles-id-audit-history:GET:/station-profiles/{stationProfileId}/audit-history">)),
  };
}
