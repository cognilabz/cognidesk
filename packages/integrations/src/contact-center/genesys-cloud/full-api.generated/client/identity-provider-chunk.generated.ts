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
export const GenesysCloudFullApiIdentityProviderOperationKeys = [
  "deleteIdentityprovider",
  "deleteIdentityprovidersAdfs",
  "deleteIdentityprovidersCic",
  "deleteIdentityprovidersGeneric",
  "deleteIdentityprovidersGsuite",
  "deleteIdentityprovidersIdentitynow",
  "deleteIdentityprovidersOkta",
  "deleteIdentityprovidersOnelogin",
  "deleteIdentityprovidersPing",
  "deleteIdentityprovidersPurecloud",
  "deleteIdentityprovidersPureengage",
  "deleteIdentityprovidersSalesforce",
  "getIdentityprovider",
  "getIdentityproviders",
  "getIdentityprovidersAdfs",
  "getIdentityprovidersCic",
  "getIdentityprovidersGeneric",
  "getIdentityprovidersGsuite",
  "getIdentityprovidersIdentitynow",
  "getIdentityprovidersOkta",
  "getIdentityprovidersOnelogin",
  "getIdentityprovidersPing",
  "getIdentityprovidersPurecloud",
  "getIdentityprovidersPureengage",
  "getIdentityprovidersSalesforce",
  "postIdentityproviders",
  "putIdentityprovider",
  "putIdentityprovidersAdfs",
  "putIdentityprovidersCic",
  "putIdentityprovidersGeneric",
  "putIdentityprovidersGsuite",
  "putIdentityprovidersIdentitynow",
  "putIdentityprovidersOkta",
  "putIdentityprovidersOnelogin",
  "putIdentityprovidersPing",
  "putIdentityprovidersPurecloud",
  "putIdentityprovidersPureengage",
  "putIdentityprovidersSalesforce"
] as const;
export type GenesysCloudFullApiIdentityProviderOperationKey = typeof GenesysCloudFullApiIdentityProviderOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiIdentityProviderOperationPathParamMap {
  "deleteIdentityprovider": { "providerId": GenesysCloudFullApiPathParamValue };
  "deleteIdentityprovidersAdfs": {};
  "deleteIdentityprovidersCic": {};
  "deleteIdentityprovidersGeneric": {};
  "deleteIdentityprovidersGsuite": {};
  "deleteIdentityprovidersIdentitynow": {};
  "deleteIdentityprovidersOkta": {};
  "deleteIdentityprovidersOnelogin": {};
  "deleteIdentityprovidersPing": {};
  "deleteIdentityprovidersPurecloud": {};
  "deleteIdentityprovidersPureengage": {};
  "deleteIdentityprovidersSalesforce": {};
  "getIdentityprovider": { "providerId": GenesysCloudFullApiPathParamValue };
  "getIdentityproviders": {};
  "getIdentityprovidersAdfs": {};
  "getIdentityprovidersCic": {};
  "getIdentityprovidersGeneric": {};
  "getIdentityprovidersGsuite": {};
  "getIdentityprovidersIdentitynow": {};
  "getIdentityprovidersOkta": {};
  "getIdentityprovidersOnelogin": {};
  "getIdentityprovidersPing": {};
  "getIdentityprovidersPurecloud": {};
  "getIdentityprovidersPureengage": {};
  "getIdentityprovidersSalesforce": {};
  "postIdentityproviders": {};
  "putIdentityprovider": { "providerId": GenesysCloudFullApiPathParamValue };
  "putIdentityprovidersAdfs": {};
  "putIdentityprovidersCic": {};
  "putIdentityprovidersGeneric": {};
  "putIdentityprovidersGsuite": {};
  "putIdentityprovidersIdentitynow": {};
  "putIdentityprovidersOkta": {};
  "putIdentityprovidersOnelogin": {};
  "putIdentityprovidersPing": {};
  "putIdentityprovidersPurecloud": {};
  "putIdentityprovidersPureengage": {};
  "putIdentityprovidersSalesforce": {};
}

export interface GenesysCloudFullApiIdentityProviderOperationRequestMap {
  "deleteIdentityprovider": GenesysCloudFullApiOperationInput<"deleteIdentityprovider">;
  "deleteIdentityprovidersAdfs": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersAdfs">;
  "deleteIdentityprovidersCic": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersCic">;
  "deleteIdentityprovidersGeneric": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersGeneric">;
  "deleteIdentityprovidersGsuite": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersGsuite">;
  "deleteIdentityprovidersIdentitynow": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersIdentitynow">;
  "deleteIdentityprovidersOkta": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersOkta">;
  "deleteIdentityprovidersOnelogin": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersOnelogin">;
  "deleteIdentityprovidersPing": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersPing">;
  "deleteIdentityprovidersPurecloud": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersPurecloud">;
  "deleteIdentityprovidersPureengage": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersPureengage">;
  "deleteIdentityprovidersSalesforce": GenesysCloudFullApiOperationInput<"deleteIdentityprovidersSalesforce">;
  "getIdentityprovider": GenesysCloudFullApiOperationInput<"getIdentityprovider">;
  "getIdentityproviders": GenesysCloudFullApiOperationInput<"getIdentityproviders">;
  "getIdentityprovidersAdfs": GenesysCloudFullApiOperationInput<"getIdentityprovidersAdfs">;
  "getIdentityprovidersCic": GenesysCloudFullApiOperationInput<"getIdentityprovidersCic">;
  "getIdentityprovidersGeneric": GenesysCloudFullApiOperationInput<"getIdentityprovidersGeneric">;
  "getIdentityprovidersGsuite": GenesysCloudFullApiOperationInput<"getIdentityprovidersGsuite">;
  "getIdentityprovidersIdentitynow": GenesysCloudFullApiOperationInput<"getIdentityprovidersIdentitynow">;
  "getIdentityprovidersOkta": GenesysCloudFullApiOperationInput<"getIdentityprovidersOkta">;
  "getIdentityprovidersOnelogin": GenesysCloudFullApiOperationInput<"getIdentityprovidersOnelogin">;
  "getIdentityprovidersPing": GenesysCloudFullApiOperationInput<"getIdentityprovidersPing">;
  "getIdentityprovidersPurecloud": GenesysCloudFullApiOperationInput<"getIdentityprovidersPurecloud">;
  "getIdentityprovidersPureengage": GenesysCloudFullApiOperationInput<"getIdentityprovidersPureengage">;
  "getIdentityprovidersSalesforce": GenesysCloudFullApiOperationInput<"getIdentityprovidersSalesforce">;
  "postIdentityproviders": GenesysCloudFullApiOperationInput<"postIdentityproviders">;
  "putIdentityprovider": GenesysCloudFullApiOperationInput<"putIdentityprovider">;
  "putIdentityprovidersAdfs": GenesysCloudFullApiOperationInput<"putIdentityprovidersAdfs">;
  "putIdentityprovidersCic": GenesysCloudFullApiOperationInput<"putIdentityprovidersCic">;
  "putIdentityprovidersGeneric": GenesysCloudFullApiOperationInput<"putIdentityprovidersGeneric">;
  "putIdentityprovidersGsuite": GenesysCloudFullApiOperationInput<"putIdentityprovidersGsuite">;
  "putIdentityprovidersIdentitynow": GenesysCloudFullApiOperationInput<"putIdentityprovidersIdentitynow">;
  "putIdentityprovidersOkta": GenesysCloudFullApiOperationInput<"putIdentityprovidersOkta">;
  "putIdentityprovidersOnelogin": GenesysCloudFullApiOperationInput<"putIdentityprovidersOnelogin">;
  "putIdentityprovidersPing": GenesysCloudFullApiOperationInput<"putIdentityprovidersPing">;
  "putIdentityprovidersPurecloud": GenesysCloudFullApiOperationInput<"putIdentityprovidersPurecloud">;
  "putIdentityprovidersPureengage": GenesysCloudFullApiOperationInput<"putIdentityprovidersPureengage">;
  "putIdentityprovidersSalesforce": GenesysCloudFullApiOperationInput<"putIdentityprovidersSalesforce">;
}

export interface GenesysCloudFullApiIdentityProviderGeneratedClient {
  DeleteIdentityprovider(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovider">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovider"]>;
  DeleteIdentityprovidersAdfs(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersAdfs">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersAdfs"]>;
  DeleteIdentityprovidersCic(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersCic">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersCic"]>;
  DeleteIdentityprovidersGeneric(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersGeneric">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersGeneric"]>;
  DeleteIdentityprovidersGsuite(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersGsuite">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersGsuite"]>;
  DeleteIdentityprovidersIdentitynow(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersIdentitynow">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersIdentitynow"]>;
  DeleteIdentityprovidersOkta(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersOkta">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersOkta"]>;
  DeleteIdentityprovidersOnelogin(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersOnelogin">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersOnelogin"]>;
  DeleteIdentityprovidersPing(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersPing">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersPing"]>;
  DeleteIdentityprovidersPurecloud(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersPurecloud">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersPurecloud"]>;
  DeleteIdentityprovidersPureengage(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersPureengage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersPureengage"]>;
  DeleteIdentityprovidersSalesforce(...args: GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersSalesforce">): Promise<GenesysCloudFullApiOperationResponseMap["deleteIdentityprovidersSalesforce"]>;
  GetIdentityprovider(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovider">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovider"]>;
  GetIdentityproviders(...args: GenesysCloudFullApiOperationArgs<"getIdentityproviders">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityproviders"]>;
  GetIdentityprovidersAdfs(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersAdfs">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersAdfs"]>;
  GetIdentityprovidersCic(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersCic">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersCic"]>;
  GetIdentityprovidersGeneric(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersGeneric">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersGeneric"]>;
  GetIdentityprovidersGsuite(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersGsuite">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersGsuite"]>;
  GetIdentityprovidersIdentitynow(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersIdentitynow">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersIdentitynow"]>;
  GetIdentityprovidersOkta(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersOkta">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersOkta"]>;
  GetIdentityprovidersOnelogin(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersOnelogin">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersOnelogin"]>;
  GetIdentityprovidersPing(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersPing">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersPing"]>;
  GetIdentityprovidersPurecloud(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersPurecloud">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersPurecloud"]>;
  GetIdentityprovidersPureengage(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersPureengage">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersPureengage"]>;
  GetIdentityprovidersSalesforce(...args: GenesysCloudFullApiOperationArgs<"getIdentityprovidersSalesforce">): Promise<GenesysCloudFullApiOperationResponseMap["getIdentityprovidersSalesforce"]>;
  PostIdentityproviders(...args: GenesysCloudFullApiOperationArgs<"postIdentityproviders">): Promise<GenesysCloudFullApiOperationResponseMap["postIdentityproviders"]>;
  PutIdentityprovider(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovider">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovider"]>;
  PutIdentityprovidersAdfs(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersAdfs">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersAdfs"]>;
  PutIdentityprovidersCic(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersCic">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersCic"]>;
  PutIdentityprovidersGeneric(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersGeneric">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersGeneric"]>;
  PutIdentityprovidersGsuite(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersGsuite">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersGsuite"]>;
  PutIdentityprovidersIdentitynow(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersIdentitynow">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersIdentitynow"]>;
  PutIdentityprovidersOkta(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersOkta">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersOkta"]>;
  PutIdentityprovidersOnelogin(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersOnelogin">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersOnelogin"]>;
  PutIdentityprovidersPing(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersPing">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersPing"]>;
  PutIdentityprovidersPurecloud(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersPurecloud">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersPurecloud"]>;
  PutIdentityprovidersPureengage(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersPureengage">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersPureengage"]>;
  PutIdentityprovidersSalesforce(...args: GenesysCloudFullApiOperationArgs<"putIdentityprovidersSalesforce">): Promise<GenesysCloudFullApiOperationResponseMap["putIdentityprovidersSalesforce"]>;
}

export const GenesysCloudFullApiIdentityProviderGeneratedFunctionNames = [
  "DeleteIdentityprovider",
  "DeleteIdentityprovidersAdfs",
  "DeleteIdentityprovidersCic",
  "DeleteIdentityprovidersGeneric",
  "DeleteIdentityprovidersGsuite",
  "DeleteIdentityprovidersIdentitynow",
  "DeleteIdentityprovidersOkta",
  "DeleteIdentityprovidersOnelogin",
  "DeleteIdentityprovidersPing",
  "DeleteIdentityprovidersPurecloud",
  "DeleteIdentityprovidersPureengage",
  "DeleteIdentityprovidersSalesforce",
  "GetIdentityprovider",
  "GetIdentityproviders",
  "GetIdentityprovidersAdfs",
  "GetIdentityprovidersCic",
  "GetIdentityprovidersGeneric",
  "GetIdentityprovidersGsuite",
  "GetIdentityprovidersIdentitynow",
  "GetIdentityprovidersOkta",
  "GetIdentityprovidersOnelogin",
  "GetIdentityprovidersPing",
  "GetIdentityprovidersPurecloud",
  "GetIdentityprovidersPureengage",
  "GetIdentityprovidersSalesforce",
  "PostIdentityproviders",
  "PutIdentityprovider",
  "PutIdentityprovidersAdfs",
  "PutIdentityprovidersCic",
  "PutIdentityprovidersGeneric",
  "PutIdentityprovidersGsuite",
  "PutIdentityprovidersIdentitynow",
  "PutIdentityprovidersOkta",
  "PutIdentityprovidersOnelogin",
  "PutIdentityprovidersPing",
  "PutIdentityprovidersPurecloud",
  "PutIdentityprovidersPureengage",
  "PutIdentityprovidersSalesforce"
] as const satisfies readonly (keyof GenesysCloudFullApiIdentityProviderGeneratedClient)[];

export function createGenesysCloudFullApiIdentityProviderGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiIdentityProviderGeneratedClient {
  return {
    DeleteIdentityprovider: (...args) => callOperation("deleteIdentityprovider", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovider">)),
    DeleteIdentityprovidersAdfs: (...args) => callOperation("deleteIdentityprovidersAdfs", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersAdfs">)),
    DeleteIdentityprovidersCic: (...args) => callOperation("deleteIdentityprovidersCic", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersCic">)),
    DeleteIdentityprovidersGeneric: (...args) => callOperation("deleteIdentityprovidersGeneric", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersGeneric">)),
    DeleteIdentityprovidersGsuite: (...args) => callOperation("deleteIdentityprovidersGsuite", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersGsuite">)),
    DeleteIdentityprovidersIdentitynow: (...args) => callOperation("deleteIdentityprovidersIdentitynow", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersIdentitynow">)),
    DeleteIdentityprovidersOkta: (...args) => callOperation("deleteIdentityprovidersOkta", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersOkta">)),
    DeleteIdentityprovidersOnelogin: (...args) => callOperation("deleteIdentityprovidersOnelogin", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersOnelogin">)),
    DeleteIdentityprovidersPing: (...args) => callOperation("deleteIdentityprovidersPing", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersPing">)),
    DeleteIdentityprovidersPurecloud: (...args) => callOperation("deleteIdentityprovidersPurecloud", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersPurecloud">)),
    DeleteIdentityprovidersPureengage: (...args) => callOperation("deleteIdentityprovidersPureengage", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersPureengage">)),
    DeleteIdentityprovidersSalesforce: (...args) => callOperation("deleteIdentityprovidersSalesforce", ...(args as GenesysCloudFullApiOperationArgs<"deleteIdentityprovidersSalesforce">)),
    GetIdentityprovider: (...args) => callOperation("getIdentityprovider", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovider">)),
    GetIdentityproviders: (...args) => callOperation("getIdentityproviders", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityproviders">)),
    GetIdentityprovidersAdfs: (...args) => callOperation("getIdentityprovidersAdfs", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersAdfs">)),
    GetIdentityprovidersCic: (...args) => callOperation("getIdentityprovidersCic", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersCic">)),
    GetIdentityprovidersGeneric: (...args) => callOperation("getIdentityprovidersGeneric", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersGeneric">)),
    GetIdentityprovidersGsuite: (...args) => callOperation("getIdentityprovidersGsuite", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersGsuite">)),
    GetIdentityprovidersIdentitynow: (...args) => callOperation("getIdentityprovidersIdentitynow", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersIdentitynow">)),
    GetIdentityprovidersOkta: (...args) => callOperation("getIdentityprovidersOkta", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersOkta">)),
    GetIdentityprovidersOnelogin: (...args) => callOperation("getIdentityprovidersOnelogin", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersOnelogin">)),
    GetIdentityprovidersPing: (...args) => callOperation("getIdentityprovidersPing", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersPing">)),
    GetIdentityprovidersPurecloud: (...args) => callOperation("getIdentityprovidersPurecloud", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersPurecloud">)),
    GetIdentityprovidersPureengage: (...args) => callOperation("getIdentityprovidersPureengage", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersPureengage">)),
    GetIdentityprovidersSalesforce: (...args) => callOperation("getIdentityprovidersSalesforce", ...(args as GenesysCloudFullApiOperationArgs<"getIdentityprovidersSalesforce">)),
    PostIdentityproviders: (...args) => callOperation("postIdentityproviders", ...(args as GenesysCloudFullApiOperationArgs<"postIdentityproviders">)),
    PutIdentityprovider: (...args) => callOperation("putIdentityprovider", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovider">)),
    PutIdentityprovidersAdfs: (...args) => callOperation("putIdentityprovidersAdfs", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersAdfs">)),
    PutIdentityprovidersCic: (...args) => callOperation("putIdentityprovidersCic", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersCic">)),
    PutIdentityprovidersGeneric: (...args) => callOperation("putIdentityprovidersGeneric", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersGeneric">)),
    PutIdentityprovidersGsuite: (...args) => callOperation("putIdentityprovidersGsuite", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersGsuite">)),
    PutIdentityprovidersIdentitynow: (...args) => callOperation("putIdentityprovidersIdentitynow", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersIdentitynow">)),
    PutIdentityprovidersOkta: (...args) => callOperation("putIdentityprovidersOkta", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersOkta">)),
    PutIdentityprovidersOnelogin: (...args) => callOperation("putIdentityprovidersOnelogin", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersOnelogin">)),
    PutIdentityprovidersPing: (...args) => callOperation("putIdentityprovidersPing", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersPing">)),
    PutIdentityprovidersPurecloud: (...args) => callOperation("putIdentityprovidersPurecloud", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersPurecloud">)),
    PutIdentityprovidersPureengage: (...args) => callOperation("putIdentityprovidersPureengage", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersPureengage">)),
    PutIdentityprovidersSalesforce: (...args) => callOperation("putIdentityprovidersSalesforce", ...(args as GenesysCloudFullApiOperationArgs<"putIdentityprovidersSalesforce">)),
  };
}
