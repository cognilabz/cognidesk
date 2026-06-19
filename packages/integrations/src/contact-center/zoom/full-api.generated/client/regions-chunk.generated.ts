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
export const ZoomContactCenterFullApiRegionsOperationKeys = [
  "GET /contact_center/regions",
  "POST /contact_center/regions",
  "GET /contact_center/regions/{regionId}",
  "DELETE /contact_center/regions/{regionId}",
  "PATCH /contact_center/regions/{regionId}",
  "GET /contact_center/regions/{regionId}/users",
  "POST /contact_center/regions/{regionId}/users"
] as const;
export type ZoomContactCenterFullApiRegionsOperationKey = typeof ZoomContactCenterFullApiRegionsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiRegionsOperationPathParamMap {
  "GET /contact_center/regions": {};
  "POST /contact_center/regions": {};
  "GET /contact_center/regions/{regionId}": { "regionId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/regions/{regionId}": { "regionId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/regions/{regionId}": { "regionId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/regions/{regionId}/users": { "regionId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/regions/{regionId}/users": { "regionId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiRegionsOperationRequestMap {
  "GET /contact_center/regions": ZoomContactCenterFullApiOperationInput<"GET /contact_center/regions">;
  "POST /contact_center/regions": ZoomContactCenterFullApiOperationInput<"POST /contact_center/regions">;
  "GET /contact_center/regions/{regionId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/regions/{regionId}">;
  "DELETE /contact_center/regions/{regionId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/regions/{regionId}">;
  "PATCH /contact_center/regions/{regionId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/regions/{regionId}">;
  "GET /contact_center/regions/{regionId}/users": ZoomContactCenterFullApiOperationInput<"GET /contact_center/regions/{regionId}/users">;
  "POST /contact_center/regions/{regionId}/users": ZoomContactCenterFullApiOperationInput<"POST /contact_center/regions/{regionId}/users">;
}

export interface ZoomContactCenterFullApiRegionsGeneratedClient {
  ListRegions(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/regions">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/regions"]>;
  CreateARegion(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/regions">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/regions"]>;
  GetARegion(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/regions/{regionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/regions/{regionId}"]>;
  DeleteARegion(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/regions/{regionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/regions/{regionId}"]>;
  UpdateARegion(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/regions/{regionId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/regions/{regionId}"]>;
  ListRegionSUsers(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/regions/{regionId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/regions/{regionId}/users"]>;
  AssignUsersToARegion(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/regions/{regionId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/regions/{regionId}/users"]>;
}

export const ZoomContactCenterFullApiRegionsGeneratedFunctionNames = [
  "ListRegions",
  "CreateARegion",
  "GetARegion",
  "DeleteARegion",
  "UpdateARegion",
  "ListRegionSUsers",
  "AssignUsersToARegion"
] as const satisfies readonly (keyof ZoomContactCenterFullApiRegionsGeneratedClient)[];

export function createZoomContactCenterFullApiRegionsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiRegionsGeneratedClient {
  return {
    ListRegions: (...args) => callOperation("GET /contact_center/regions", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/regions">)),
    CreateARegion: (...args) => callOperation("POST /contact_center/regions", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/regions">)),
    GetARegion: (...args) => callOperation("GET /contact_center/regions/{regionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/regions/{regionId}">)),
    DeleteARegion: (...args) => callOperation("DELETE /contact_center/regions/{regionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/regions/{regionId}">)),
    UpdateARegion: (...args) => callOperation("PATCH /contact_center/regions/{regionId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/regions/{regionId}">)),
    ListRegionSUsers: (...args) => callOperation("GET /contact_center/regions/{regionId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/regions/{regionId}/users">)),
    AssignUsersToARegion: (...args) => callOperation("POST /contact_center/regions/{regionId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/regions/{regionId}/users">)),
  };
}
