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
export const TalkdeskFullApiSeatManagerOperationKeys = [
  "GetLicenseSeats",
  "AssignLicenseSeat",
  "RemoveLicenseSeat",
  "BulkManageLicenseSeats",
  "GetLicenseUsers",
  "GetAssetSeatUsers",
  "RemoveUserSeats",
  "AssignAccountSeats"
] as const;
export type TalkdeskFullApiSeatManagerOperationKey = typeof TalkdeskFullApiSeatManagerOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiSeatManagerOperationPathParamMap {
  "GetLicenseSeats": { "license_id": TalkdeskFullApiPathParamValue };
  "AssignLicenseSeat": { "license_id": TalkdeskFullApiPathParamValue };
  "RemoveLicenseSeat": { "license_id": TalkdeskFullApiPathParamValue };
  "BulkManageLicenseSeats": { "license_id": TalkdeskFullApiPathParamValue };
  "GetLicenseUsers": { "license_id": TalkdeskFullApiPathParamValue };
  "GetAssetSeatUsers": { "asset_type": TalkdeskFullApiPathParamValue; "asset_id": TalkdeskFullApiPathParamValue };
  "RemoveUserSeats": { "user_id": TalkdeskFullApiPathParamValue };
  "AssignAccountSeats": {};
}

export interface TalkdeskFullApiSeatManagerOperationRequestMap {
  "GetLicenseSeats": TalkdeskFullApiOperationInput<"GetLicenseSeats">;
  "AssignLicenseSeat": TalkdeskFullApiOperationInput<"AssignLicenseSeat">;
  "RemoveLicenseSeat": TalkdeskFullApiOperationInput<"RemoveLicenseSeat">;
  "BulkManageLicenseSeats": TalkdeskFullApiOperationInput<"BulkManageLicenseSeats">;
  "GetLicenseUsers": TalkdeskFullApiOperationInput<"GetLicenseUsers">;
  "GetAssetSeatUsers": TalkdeskFullApiOperationInput<"GetAssetSeatUsers">;
  "RemoveUserSeats": TalkdeskFullApiOperationInput<"RemoveUserSeats">;
  "AssignAccountSeats": TalkdeskFullApiOperationInput<"AssignAccountSeats">;
}

export interface TalkdeskFullApiSeatManagerGeneratedClient {
  GetLicenseSeats(...args: TalkdeskFullApiOperationArgs<"GetLicenseSeats">): Promise<TalkdeskFullApiOperationResponseMap["GetLicenseSeats"]>;
  AssignLicenseSeat(...args: TalkdeskFullApiOperationArgs<"AssignLicenseSeat">): Promise<TalkdeskFullApiOperationResponseMap["AssignLicenseSeat"]>;
  RemoveLicenseSeat(...args: TalkdeskFullApiOperationArgs<"RemoveLicenseSeat">): Promise<TalkdeskFullApiOperationResponseMap["RemoveLicenseSeat"]>;
  BulkManageLicenseSeats(...args: TalkdeskFullApiOperationArgs<"BulkManageLicenseSeats">): Promise<TalkdeskFullApiOperationResponseMap["BulkManageLicenseSeats"]>;
  GetLicenseUsers(...args: TalkdeskFullApiOperationArgs<"GetLicenseUsers">): Promise<TalkdeskFullApiOperationResponseMap["GetLicenseUsers"]>;
  GetAssetSeatUsers(...args: TalkdeskFullApiOperationArgs<"GetAssetSeatUsers">): Promise<TalkdeskFullApiOperationResponseMap["GetAssetSeatUsers"]>;
  RemoveUserSeats(...args: TalkdeskFullApiOperationArgs<"RemoveUserSeats">): Promise<TalkdeskFullApiOperationResponseMap["RemoveUserSeats"]>;
  AssignAccountSeats(...args: TalkdeskFullApiOperationArgs<"AssignAccountSeats">): Promise<TalkdeskFullApiOperationResponseMap["AssignAccountSeats"]>;
}

export const TalkdeskFullApiSeatManagerGeneratedFunctionNames = [
  "GetLicenseSeats",
  "AssignLicenseSeat",
  "RemoveLicenseSeat",
  "BulkManageLicenseSeats",
  "GetLicenseUsers",
  "GetAssetSeatUsers",
  "RemoveUserSeats",
  "AssignAccountSeats"
] as const satisfies readonly (keyof TalkdeskFullApiSeatManagerGeneratedClient)[];

export function createTalkdeskFullApiSeatManagerGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiSeatManagerGeneratedClient {
  return {
    GetLicenseSeats: (...args) => callOperation("GetLicenseSeats", ...(args as TalkdeskFullApiOperationArgs<"GetLicenseSeats">)),
    AssignLicenseSeat: (...args) => callOperation("AssignLicenseSeat", ...(args as TalkdeskFullApiOperationArgs<"AssignLicenseSeat">)),
    RemoveLicenseSeat: (...args) => callOperation("RemoveLicenseSeat", ...(args as TalkdeskFullApiOperationArgs<"RemoveLicenseSeat">)),
    BulkManageLicenseSeats: (...args) => callOperation("BulkManageLicenseSeats", ...(args as TalkdeskFullApiOperationArgs<"BulkManageLicenseSeats">)),
    GetLicenseUsers: (...args) => callOperation("GetLicenseUsers", ...(args as TalkdeskFullApiOperationArgs<"GetLicenseUsers">)),
    GetAssetSeatUsers: (...args) => callOperation("GetAssetSeatUsers", ...(args as TalkdeskFullApiOperationArgs<"GetAssetSeatUsers">)),
    RemoveUserSeats: (...args) => callOperation("RemoveUserSeats", ...(args as TalkdeskFullApiOperationArgs<"RemoveUserSeats">)),
    AssignAccountSeats: (...args) => callOperation("AssignAccountSeats", ...(args as TalkdeskFullApiOperationArgs<"AssignAccountSeats">)),
  };
}
