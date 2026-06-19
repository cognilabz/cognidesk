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
export const ZendeskFullApiITAMAssetLocationsOperationKeys = [
  "CreateItamLocation",
  "DeleteItamLocation",
  "ListItamLocations",
  "ShowItamLocation",
  "UpdateItamLocation"
] as const;
export type ZendeskFullApiITAMAssetLocationsOperationKey = typeof ZendeskFullApiITAMAssetLocationsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiITAMAssetLocationsOperationPathParamMap {
  "CreateItamLocation": {};
  "DeleteItamLocation": { "location_id": ZendeskFullApiPathParamValue };
  "ListItamLocations": {};
  "ShowItamLocation": { "location_id": ZendeskFullApiPathParamValue };
  "UpdateItamLocation": { "location_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiITAMAssetLocationsOperationRequestMap {
  "CreateItamLocation": ZendeskFullApiOperationInput<"CreateItamLocation">;
  "DeleteItamLocation": ZendeskFullApiOperationInput<"DeleteItamLocation">;
  "ListItamLocations": ZendeskFullApiOperationInput<"ListItamLocations">;
  "ShowItamLocation": ZendeskFullApiOperationInput<"ShowItamLocation">;
  "UpdateItamLocation": ZendeskFullApiOperationInput<"UpdateItamLocation">;
}

export interface ZendeskFullApiITAMAssetLocationsGeneratedClient {
  CreateItamLocation(...args: ZendeskFullApiOperationArgs<"CreateItamLocation">): Promise<ZendeskFullApiOperationResponseMap["CreateItamLocation"]>;
  DeleteItamLocation(...args: ZendeskFullApiOperationArgs<"DeleteItamLocation">): Promise<ZendeskFullApiOperationResponseMap["DeleteItamLocation"]>;
  ListItamLocations(...args: ZendeskFullApiOperationArgs<"ListItamLocations">): Promise<ZendeskFullApiOperationResponseMap["ListItamLocations"]>;
  ShowItamLocation(...args: ZendeskFullApiOperationArgs<"ShowItamLocation">): Promise<ZendeskFullApiOperationResponseMap["ShowItamLocation"]>;
  UpdateItamLocation(...args: ZendeskFullApiOperationArgs<"UpdateItamLocation">): Promise<ZendeskFullApiOperationResponseMap["UpdateItamLocation"]>;
}

export const ZendeskFullApiITAMAssetLocationsGeneratedFunctionNames = [
  "CreateItamLocation",
  "DeleteItamLocation",
  "ListItamLocations",
  "ShowItamLocation",
  "UpdateItamLocation"
] as const satisfies readonly (keyof ZendeskFullApiITAMAssetLocationsGeneratedClient)[];

export function createZendeskFullApiITAMAssetLocationsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiITAMAssetLocationsGeneratedClient {
  return {
    CreateItamLocation: (...args) => callOperation("CreateItamLocation", ...(args as ZendeskFullApiOperationArgs<"CreateItamLocation">)),
    DeleteItamLocation: (...args) => callOperation("DeleteItamLocation", ...(args as ZendeskFullApiOperationArgs<"DeleteItamLocation">)),
    ListItamLocations: (...args) => callOperation("ListItamLocations", ...(args as ZendeskFullApiOperationArgs<"ListItamLocations">)),
    ShowItamLocation: (...args) => callOperation("ShowItamLocation", ...(args as ZendeskFullApiOperationArgs<"ShowItamLocation">)),
    UpdateItamLocation: (...args) => callOperation("UpdateItamLocation", ...(args as ZendeskFullApiOperationArgs<"UpdateItamLocation">)),
  };
}
