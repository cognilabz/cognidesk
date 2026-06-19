// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiUsersByIDOperationKeys = [
  "GetUserbyID",
  "UpdateUserbyID",
  "GetMultipleUsersbyIDs"
] as const;
export type KustomerFullApiUsersByIDOperationKey = typeof KustomerFullApiUsersByIDOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiUsersByIDOperationPathParamMap {
  "GetUserbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateUserbyID": { "id": KustomerFullApiPathParamValue };
  "GetMultipleUsersbyIDs": { "ids": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiUsersByIDOperationRequestMap {
  "GetUserbyID": KustomerFullApiOperationInput<"GetUserbyID">;
  "UpdateUserbyID": KustomerFullApiOperationInput<"UpdateUserbyID">;
  "GetMultipleUsersbyIDs": KustomerFullApiOperationInput<"GetMultipleUsersbyIDs">;
}

export interface KustomerFullApiUsersByIDGeneratedClient {
  kustomerGetUserbyID(...args: KustomerFullApiOperationArgs<"GetUserbyID">): Promise<KustomerFullApiOperationResponseMap["GetUserbyID"]>;
  kustomerUpdateUserbyID(...args: KustomerFullApiOperationArgs<"UpdateUserbyID">): Promise<KustomerFullApiOperationResponseMap["UpdateUserbyID"]>;
  kustomerGetMultipleUsersbyIDs(...args: KustomerFullApiOperationArgs<"GetMultipleUsersbyIDs">): Promise<KustomerFullApiOperationResponseMap["GetMultipleUsersbyIDs"]>;
}

export const KustomerFullApiUsersByIDGeneratedFunctionNames = [
  "kustomerGetUserbyID",
  "kustomerUpdateUserbyID",
  "kustomerGetMultipleUsersbyIDs"
] as const satisfies readonly (keyof KustomerFullApiUsersByIDGeneratedClient)[];

export function createKustomerFullApiUsersByIDGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiUsersByIDGeneratedClient {
  return {
    kustomerGetUserbyID: (...args) => callOperation("GetUserbyID", ...(args as KustomerFullApiOperationArgs<"GetUserbyID">)),
    kustomerUpdateUserbyID: (...args) => callOperation("UpdateUserbyID", ...(args as KustomerFullApiOperationArgs<"UpdateUserbyID">)),
    kustomerGetMultipleUsersbyIDs: (...args) => callOperation("GetMultipleUsersbyIDs", ...(args as KustomerFullApiOperationArgs<"GetMultipleUsersbyIDs">)),
  };
}
