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
export const GenesysCloudFullApiPresenceOperationKeys = [
  "deletePresencedefinition",
  "deletePresenceDefinition",
  "deletePresenceSource",
  "getPresencedefinition",
  "getPresenceDefinition",
  "getPresencedefinitions",
  "getPresenceDefinitions",
  "getPresenceSettings",
  "getPresenceSource",
  "getPresenceSources",
  "getPresenceUserPrimarysource",
  "getSystempresences",
  "getUserPresence",
  "getUserPresencesPurecloud",
  "getUsersPresenceBulk",
  "getUsersPresencesPurecloudBulk",
  "patchUserPresence",
  "patchUserPresencesPurecloud",
  "postPresencedefinitions",
  "postPresenceDefinitions",
  "postPresenceSources",
  "putPresencedefinition",
  "putPresenceDefinition",
  "putPresenceSettings",
  "putPresenceSource",
  "putPresenceUserPrimarysource",
  "putUsersPresencesBulk"
] as const;
export type GenesysCloudFullApiPresenceOperationKey = typeof GenesysCloudFullApiPresenceOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiPresenceOperationPathParamMap {
  "deletePresencedefinition": { "presenceId": GenesysCloudFullApiPathParamValue };
  "deletePresenceDefinition": { "definitionId": GenesysCloudFullApiPathParamValue };
  "deletePresenceSource": { "sourceId": GenesysCloudFullApiPathParamValue };
  "getPresencedefinition": { "presenceId": GenesysCloudFullApiPathParamValue };
  "getPresenceDefinition": { "definitionId": GenesysCloudFullApiPathParamValue };
  "getPresencedefinitions": {};
  "getPresenceDefinitions": {};
  "getPresenceSettings": {};
  "getPresenceSource": { "sourceId": GenesysCloudFullApiPathParamValue };
  "getPresenceSources": {};
  "getPresenceUserPrimarysource": { "userId": GenesysCloudFullApiPathParamValue };
  "getSystempresences": {};
  "getUserPresence": { "userId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "getUserPresencesPurecloud": { "userId": GenesysCloudFullApiPathParamValue };
  "getUsersPresenceBulk": { "sourceId": GenesysCloudFullApiPathParamValue };
  "getUsersPresencesPurecloudBulk": {};
  "patchUserPresence": { "userId": GenesysCloudFullApiPathParamValue; "sourceId": GenesysCloudFullApiPathParamValue };
  "patchUserPresencesPurecloud": { "userId": GenesysCloudFullApiPathParamValue };
  "postPresencedefinitions": {};
  "postPresenceDefinitions": {};
  "postPresenceSources": {};
  "putPresencedefinition": { "presenceId": GenesysCloudFullApiPathParamValue };
  "putPresenceDefinition": { "definitionId": GenesysCloudFullApiPathParamValue };
  "putPresenceSettings": {};
  "putPresenceSource": { "sourceId": GenesysCloudFullApiPathParamValue };
  "putPresenceUserPrimarysource": { "userId": GenesysCloudFullApiPathParamValue };
  "putUsersPresencesBulk": {};
}

export interface GenesysCloudFullApiPresenceOperationRequestMap {
  "deletePresencedefinition": GenesysCloudFullApiOperationInput<"deletePresencedefinition">;
  "deletePresenceDefinition": GenesysCloudFullApiOperationInput<"deletePresenceDefinition">;
  "deletePresenceSource": GenesysCloudFullApiOperationInput<"deletePresenceSource">;
  "getPresencedefinition": GenesysCloudFullApiOperationInput<"getPresencedefinition">;
  "getPresenceDefinition": GenesysCloudFullApiOperationInput<"getPresenceDefinition">;
  "getPresencedefinitions": GenesysCloudFullApiOperationInput<"getPresencedefinitions">;
  "getPresenceDefinitions": GenesysCloudFullApiOperationInput<"getPresenceDefinitions">;
  "getPresenceSettings": GenesysCloudFullApiOperationInput<"getPresenceSettings">;
  "getPresenceSource": GenesysCloudFullApiOperationInput<"getPresenceSource">;
  "getPresenceSources": GenesysCloudFullApiOperationInput<"getPresenceSources">;
  "getPresenceUserPrimarysource": GenesysCloudFullApiOperationInput<"getPresenceUserPrimarysource">;
  "getSystempresences": GenesysCloudFullApiOperationInput<"getSystempresences">;
  "getUserPresence": GenesysCloudFullApiOperationInput<"getUserPresence">;
  "getUserPresencesPurecloud": GenesysCloudFullApiOperationInput<"getUserPresencesPurecloud">;
  "getUsersPresenceBulk": GenesysCloudFullApiOperationInput<"getUsersPresenceBulk">;
  "getUsersPresencesPurecloudBulk": GenesysCloudFullApiOperationInput<"getUsersPresencesPurecloudBulk">;
  "patchUserPresence": GenesysCloudFullApiOperationInput<"patchUserPresence">;
  "patchUserPresencesPurecloud": GenesysCloudFullApiOperationInput<"patchUserPresencesPurecloud">;
  "postPresencedefinitions": GenesysCloudFullApiOperationInput<"postPresencedefinitions">;
  "postPresenceDefinitions": GenesysCloudFullApiOperationInput<"postPresenceDefinitions">;
  "postPresenceSources": GenesysCloudFullApiOperationInput<"postPresenceSources">;
  "putPresencedefinition": GenesysCloudFullApiOperationInput<"putPresencedefinition">;
  "putPresenceDefinition": GenesysCloudFullApiOperationInput<"putPresenceDefinition">;
  "putPresenceSettings": GenesysCloudFullApiOperationInput<"putPresenceSettings">;
  "putPresenceSource": GenesysCloudFullApiOperationInput<"putPresenceSource">;
  "putPresenceUserPrimarysource": GenesysCloudFullApiOperationInput<"putPresenceUserPrimarysource">;
  "putUsersPresencesBulk": GenesysCloudFullApiOperationInput<"putUsersPresencesBulk">;
}

export interface GenesysCloudFullApiPresenceGeneratedClient {
  DeletePresencedefinition(...args: GenesysCloudFullApiOperationArgs<"deletePresencedefinition">): Promise<GenesysCloudFullApiOperationResponseMap["deletePresencedefinition"]>;
  DeletePresenceDefinition(...args: GenesysCloudFullApiOperationArgs<"deletePresenceDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["deletePresenceDefinition"]>;
  DeletePresenceSource(...args: GenesysCloudFullApiOperationArgs<"deletePresenceSource">): Promise<GenesysCloudFullApiOperationResponseMap["deletePresenceSource"]>;
  GetPresencedefinition(...args: GenesysCloudFullApiOperationArgs<"getPresencedefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getPresencedefinition"]>;
  GetPresenceDefinition(...args: GenesysCloudFullApiOperationArgs<"getPresenceDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getPresenceDefinition"]>;
  GetPresencedefinitions(...args: GenesysCloudFullApiOperationArgs<"getPresencedefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getPresencedefinitions"]>;
  GetPresenceDefinitions(...args: GenesysCloudFullApiOperationArgs<"getPresenceDefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getPresenceDefinitions"]>;
  GetPresenceSettings(...args: GenesysCloudFullApiOperationArgs<"getPresenceSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getPresenceSettings"]>;
  GetPresenceSource(...args: GenesysCloudFullApiOperationArgs<"getPresenceSource">): Promise<GenesysCloudFullApiOperationResponseMap["getPresenceSource"]>;
  GetPresenceSources(...args: GenesysCloudFullApiOperationArgs<"getPresenceSources">): Promise<GenesysCloudFullApiOperationResponseMap["getPresenceSources"]>;
  GetPresenceUserPrimarysource(...args: GenesysCloudFullApiOperationArgs<"getPresenceUserPrimarysource">): Promise<GenesysCloudFullApiOperationResponseMap["getPresenceUserPrimarysource"]>;
  GetSystempresences(...args: GenesysCloudFullApiOperationArgs<"getSystempresences">): Promise<GenesysCloudFullApiOperationResponseMap["getSystempresences"]>;
  GetUserPresence(...args: GenesysCloudFullApiOperationArgs<"getUserPresence">): Promise<GenesysCloudFullApiOperationResponseMap["getUserPresence"]>;
  GetUserPresencesPurecloud(...args: GenesysCloudFullApiOperationArgs<"getUserPresencesPurecloud">): Promise<GenesysCloudFullApiOperationResponseMap["getUserPresencesPurecloud"]>;
  GetUsersPresenceBulk(...args: GenesysCloudFullApiOperationArgs<"getUsersPresenceBulk">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersPresenceBulk"]>;
  GetUsersPresencesPurecloudBulk(...args: GenesysCloudFullApiOperationArgs<"getUsersPresencesPurecloudBulk">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersPresencesPurecloudBulk"]>;
  PatchUserPresence(...args: GenesysCloudFullApiOperationArgs<"patchUserPresence">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserPresence"]>;
  PatchUserPresencesPurecloud(...args: GenesysCloudFullApiOperationArgs<"patchUserPresencesPurecloud">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserPresencesPurecloud"]>;
  PostPresencedefinitions(...args: GenesysCloudFullApiOperationArgs<"postPresencedefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["postPresencedefinitions"]>;
  PostPresenceDefinitions(...args: GenesysCloudFullApiOperationArgs<"postPresenceDefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["postPresenceDefinitions"]>;
  PostPresenceSources(...args: GenesysCloudFullApiOperationArgs<"postPresenceSources">): Promise<GenesysCloudFullApiOperationResponseMap["postPresenceSources"]>;
  PutPresencedefinition(...args: GenesysCloudFullApiOperationArgs<"putPresencedefinition">): Promise<GenesysCloudFullApiOperationResponseMap["putPresencedefinition"]>;
  PutPresenceDefinition(...args: GenesysCloudFullApiOperationArgs<"putPresenceDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["putPresenceDefinition"]>;
  PutPresenceSettings(...args: GenesysCloudFullApiOperationArgs<"putPresenceSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putPresenceSettings"]>;
  PutPresenceSource(...args: GenesysCloudFullApiOperationArgs<"putPresenceSource">): Promise<GenesysCloudFullApiOperationResponseMap["putPresenceSource"]>;
  PutPresenceUserPrimarysource(...args: GenesysCloudFullApiOperationArgs<"putPresenceUserPrimarysource">): Promise<GenesysCloudFullApiOperationResponseMap["putPresenceUserPrimarysource"]>;
  PutUsersPresencesBulk(...args: GenesysCloudFullApiOperationArgs<"putUsersPresencesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["putUsersPresencesBulk"]>;
}

export const GenesysCloudFullApiPresenceGeneratedFunctionNames = [
  "DeletePresencedefinition",
  "DeletePresenceDefinition",
  "DeletePresenceSource",
  "GetPresencedefinition",
  "GetPresenceDefinition",
  "GetPresencedefinitions",
  "GetPresenceDefinitions",
  "GetPresenceSettings",
  "GetPresenceSource",
  "GetPresenceSources",
  "GetPresenceUserPrimarysource",
  "GetSystempresences",
  "GetUserPresence",
  "GetUserPresencesPurecloud",
  "GetUsersPresenceBulk",
  "GetUsersPresencesPurecloudBulk",
  "PatchUserPresence",
  "PatchUserPresencesPurecloud",
  "PostPresencedefinitions",
  "PostPresenceDefinitions",
  "PostPresenceSources",
  "PutPresencedefinition",
  "PutPresenceDefinition",
  "PutPresenceSettings",
  "PutPresenceSource",
  "PutPresenceUserPrimarysource",
  "PutUsersPresencesBulk"
] as const satisfies readonly (keyof GenesysCloudFullApiPresenceGeneratedClient)[];

export function createGenesysCloudFullApiPresenceGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiPresenceGeneratedClient {
  return {
    DeletePresencedefinition: (...args) => callOperation("deletePresencedefinition", ...(args as GenesysCloudFullApiOperationArgs<"deletePresencedefinition">)),
    DeletePresenceDefinition: (...args) => callOperation("deletePresenceDefinition", ...(args as GenesysCloudFullApiOperationArgs<"deletePresenceDefinition">)),
    DeletePresenceSource: (...args) => callOperation("deletePresenceSource", ...(args as GenesysCloudFullApiOperationArgs<"deletePresenceSource">)),
    GetPresencedefinition: (...args) => callOperation("getPresencedefinition", ...(args as GenesysCloudFullApiOperationArgs<"getPresencedefinition">)),
    GetPresenceDefinition: (...args) => callOperation("getPresenceDefinition", ...(args as GenesysCloudFullApiOperationArgs<"getPresenceDefinition">)),
    GetPresencedefinitions: (...args) => callOperation("getPresencedefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getPresencedefinitions">)),
    GetPresenceDefinitions: (...args) => callOperation("getPresenceDefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getPresenceDefinitions">)),
    GetPresenceSettings: (...args) => callOperation("getPresenceSettings", ...(args as GenesysCloudFullApiOperationArgs<"getPresenceSettings">)),
    GetPresenceSource: (...args) => callOperation("getPresenceSource", ...(args as GenesysCloudFullApiOperationArgs<"getPresenceSource">)),
    GetPresenceSources: (...args) => callOperation("getPresenceSources", ...(args as GenesysCloudFullApiOperationArgs<"getPresenceSources">)),
    GetPresenceUserPrimarysource: (...args) => callOperation("getPresenceUserPrimarysource", ...(args as GenesysCloudFullApiOperationArgs<"getPresenceUserPrimarysource">)),
    GetSystempresences: (...args) => callOperation("getSystempresences", ...(args as GenesysCloudFullApiOperationArgs<"getSystempresences">)),
    GetUserPresence: (...args) => callOperation("getUserPresence", ...(args as GenesysCloudFullApiOperationArgs<"getUserPresence">)),
    GetUserPresencesPurecloud: (...args) => callOperation("getUserPresencesPurecloud", ...(args as GenesysCloudFullApiOperationArgs<"getUserPresencesPurecloud">)),
    GetUsersPresenceBulk: (...args) => callOperation("getUsersPresenceBulk", ...(args as GenesysCloudFullApiOperationArgs<"getUsersPresenceBulk">)),
    GetUsersPresencesPurecloudBulk: (...args) => callOperation("getUsersPresencesPurecloudBulk", ...(args as GenesysCloudFullApiOperationArgs<"getUsersPresencesPurecloudBulk">)),
    PatchUserPresence: (...args) => callOperation("patchUserPresence", ...(args as GenesysCloudFullApiOperationArgs<"patchUserPresence">)),
    PatchUserPresencesPurecloud: (...args) => callOperation("patchUserPresencesPurecloud", ...(args as GenesysCloudFullApiOperationArgs<"patchUserPresencesPurecloud">)),
    PostPresencedefinitions: (...args) => callOperation("postPresencedefinitions", ...(args as GenesysCloudFullApiOperationArgs<"postPresencedefinitions">)),
    PostPresenceDefinitions: (...args) => callOperation("postPresenceDefinitions", ...(args as GenesysCloudFullApiOperationArgs<"postPresenceDefinitions">)),
    PostPresenceSources: (...args) => callOperation("postPresenceSources", ...(args as GenesysCloudFullApiOperationArgs<"postPresenceSources">)),
    PutPresencedefinition: (...args) => callOperation("putPresencedefinition", ...(args as GenesysCloudFullApiOperationArgs<"putPresencedefinition">)),
    PutPresenceDefinition: (...args) => callOperation("putPresenceDefinition", ...(args as GenesysCloudFullApiOperationArgs<"putPresenceDefinition">)),
    PutPresenceSettings: (...args) => callOperation("putPresenceSettings", ...(args as GenesysCloudFullApiOperationArgs<"putPresenceSettings">)),
    PutPresenceSource: (...args) => callOperation("putPresenceSource", ...(args as GenesysCloudFullApiOperationArgs<"putPresenceSource">)),
    PutPresenceUserPrimarysource: (...args) => callOperation("putPresenceUserPrimarysource", ...(args as GenesysCloudFullApiOperationArgs<"putPresenceUserPrimarysource">)),
    PutUsersPresencesBulk: (...args) => callOperation("putUsersPresencesBulk", ...(args as GenesysCloudFullApiOperationArgs<"putUsersPresencesBulk">)),
  };
}
