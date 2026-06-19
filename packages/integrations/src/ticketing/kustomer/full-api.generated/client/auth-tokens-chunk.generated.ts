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
export const KustomerFullApiAuthTokensOperationKeys = [
  "GetAuthTokens",
  "CreateToken",
  "DeleteAuthTokenbyID",
  "GetAuthTokenbyID",
  "DeleteCurrentAuthToken",
  "GetCurrentAuthToken"
] as const;
export type KustomerFullApiAuthTokensOperationKey = typeof KustomerFullApiAuthTokensOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiAuthTokensOperationPathParamMap {
  "GetAuthTokens": {};
  "CreateToken": {};
  "DeleteAuthTokenbyID": { "id": KustomerFullApiPathParamValue };
  "GetAuthTokenbyID": { "id": KustomerFullApiPathParamValue };
  "DeleteCurrentAuthToken": {};
  "GetCurrentAuthToken": {};
}

export interface KustomerFullApiAuthTokensOperationRequestMap {
  "GetAuthTokens": KustomerFullApiOperationInput<"GetAuthTokens">;
  "CreateToken": KustomerFullApiOperationInput<"CreateToken">;
  "DeleteAuthTokenbyID": KustomerFullApiOperationInput<"DeleteAuthTokenbyID">;
  "GetAuthTokenbyID": KustomerFullApiOperationInput<"GetAuthTokenbyID">;
  "DeleteCurrentAuthToken": KustomerFullApiOperationInput<"DeleteCurrentAuthToken">;
  "GetCurrentAuthToken": KustomerFullApiOperationInput<"GetCurrentAuthToken">;
}

export interface KustomerFullApiAuthTokensGeneratedClient {
  kustomerGetAuthTokens(...args: KustomerFullApiOperationArgs<"GetAuthTokens">): Promise<KustomerFullApiOperationResponseMap["GetAuthTokens"]>;
  kustomerCreateToken(...args: KustomerFullApiOperationArgs<"CreateToken">): Promise<KustomerFullApiOperationResponseMap["CreateToken"]>;
  kustomerDeleteAuthTokenbyID(...args: KustomerFullApiOperationArgs<"DeleteAuthTokenbyID">): Promise<KustomerFullApiOperationResponseMap["DeleteAuthTokenbyID"]>;
  kustomerGetAuthTokenbyID(...args: KustomerFullApiOperationArgs<"GetAuthTokenbyID">): Promise<KustomerFullApiOperationResponseMap["GetAuthTokenbyID"]>;
  kustomerDeleteCurrentAuthToken(...args: KustomerFullApiOperationArgs<"DeleteCurrentAuthToken">): Promise<KustomerFullApiOperationResponseMap["DeleteCurrentAuthToken"]>;
  kustomerGetCurrentAuthToken(...args: KustomerFullApiOperationArgs<"GetCurrentAuthToken">): Promise<KustomerFullApiOperationResponseMap["GetCurrentAuthToken"]>;
}

export const KustomerFullApiAuthTokensGeneratedFunctionNames = [
  "kustomerGetAuthTokens",
  "kustomerCreateToken",
  "kustomerDeleteAuthTokenbyID",
  "kustomerGetAuthTokenbyID",
  "kustomerDeleteCurrentAuthToken",
  "kustomerGetCurrentAuthToken"
] as const satisfies readonly (keyof KustomerFullApiAuthTokensGeneratedClient)[];

export function createKustomerFullApiAuthTokensGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiAuthTokensGeneratedClient {
  return {
    kustomerGetAuthTokens: (...args) => callOperation("GetAuthTokens", ...(args as KustomerFullApiOperationArgs<"GetAuthTokens">)),
    kustomerCreateToken: (...args) => callOperation("CreateToken", ...(args as KustomerFullApiOperationArgs<"CreateToken">)),
    kustomerDeleteAuthTokenbyID: (...args) => callOperation("DeleteAuthTokenbyID", ...(args as KustomerFullApiOperationArgs<"DeleteAuthTokenbyID">)),
    kustomerGetAuthTokenbyID: (...args) => callOperation("GetAuthTokenbyID", ...(args as KustomerFullApiOperationArgs<"GetAuthTokenbyID">)),
    kustomerDeleteCurrentAuthToken: (...args) => callOperation("DeleteCurrentAuthToken", ...(args as KustomerFullApiOperationArgs<"DeleteCurrentAuthToken">)),
    kustomerGetCurrentAuthToken: (...args) => callOperation("GetCurrentAuthToken", ...(args as KustomerFullApiOperationArgs<"GetCurrentAuthToken">)),
  };
}
