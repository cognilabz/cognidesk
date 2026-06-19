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
export const GenesysCloudFullApiTokensOperationKeys = [
  "deleteToken",
  "deleteTokensMe",
  "getTokensMe",
  "getTokensTimeout",
  "headTokensMe",
  "putTokensTimeout"
] as const;
export type GenesysCloudFullApiTokensOperationKey = typeof GenesysCloudFullApiTokensOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTokensOperationPathParamMap {
  "deleteToken": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteTokensMe": {};
  "getTokensMe": {};
  "getTokensTimeout": {};
  "headTokensMe": {};
  "putTokensTimeout": {};
}

export interface GenesysCloudFullApiTokensOperationRequestMap {
  "deleteToken": GenesysCloudFullApiOperationInput<"deleteToken">;
  "deleteTokensMe": GenesysCloudFullApiOperationInput<"deleteTokensMe">;
  "getTokensMe": GenesysCloudFullApiOperationInput<"getTokensMe">;
  "getTokensTimeout": GenesysCloudFullApiOperationInput<"getTokensTimeout">;
  "headTokensMe": GenesysCloudFullApiOperationInput<"headTokensMe">;
  "putTokensTimeout": GenesysCloudFullApiOperationInput<"putTokensTimeout">;
}

export interface GenesysCloudFullApiTokensGeneratedClient {
  DeleteToken(...args: GenesysCloudFullApiOperationArgs<"deleteToken">): Promise<GenesysCloudFullApiOperationResponseMap["deleteToken"]>;
  DeleteTokensMe(...args: GenesysCloudFullApiOperationArgs<"deleteTokensMe">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTokensMe"]>;
  GetTokensMe(...args: GenesysCloudFullApiOperationArgs<"getTokensMe">): Promise<GenesysCloudFullApiOperationResponseMap["getTokensMe"]>;
  GetTokensTimeout(...args: GenesysCloudFullApiOperationArgs<"getTokensTimeout">): Promise<GenesysCloudFullApiOperationResponseMap["getTokensTimeout"]>;
  HeadTokensMe(...args: GenesysCloudFullApiOperationArgs<"headTokensMe">): Promise<GenesysCloudFullApiOperationResponseMap["headTokensMe"]>;
  PutTokensTimeout(...args: GenesysCloudFullApiOperationArgs<"putTokensTimeout">): Promise<GenesysCloudFullApiOperationResponseMap["putTokensTimeout"]>;
}

export const GenesysCloudFullApiTokensGeneratedFunctionNames = [
  "DeleteToken",
  "DeleteTokensMe",
  "GetTokensMe",
  "GetTokensTimeout",
  "HeadTokensMe",
  "PutTokensTimeout"
] as const satisfies readonly (keyof GenesysCloudFullApiTokensGeneratedClient)[];

export function createGenesysCloudFullApiTokensGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTokensGeneratedClient {
  return {
    DeleteToken: (...args) => callOperation("deleteToken", ...(args as GenesysCloudFullApiOperationArgs<"deleteToken">)),
    DeleteTokensMe: (...args) => callOperation("deleteTokensMe", ...(args as GenesysCloudFullApiOperationArgs<"deleteTokensMe">)),
    GetTokensMe: (...args) => callOperation("getTokensMe", ...(args as GenesysCloudFullApiOperationArgs<"getTokensMe">)),
    GetTokensTimeout: (...args) => callOperation("getTokensTimeout", ...(args as GenesysCloudFullApiOperationArgs<"getTokensTimeout">)),
    HeadTokensMe: (...args) => callOperation("headTokensMe", ...(args as GenesysCloudFullApiOperationArgs<"headTokensMe">)),
    PutTokensTimeout: (...args) => callOperation("putTokensTimeout", ...(args as GenesysCloudFullApiOperationArgs<"putTokensTimeout">)),
  };
}
