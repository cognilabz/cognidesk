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
export const GenesysCloudFullApiSCIMOperationKeys = [
  "deleteScimUser",
  "deleteScimV2User",
  "getScimGroup",
  "getScimGroups",
  "getScimResourcetype",
  "getScimResourcetypes",
  "getScimSchema",
  "getScimSchemas",
  "getScimServiceproviderconfig",
  "getScimUser",
  "getScimUsers",
  "getScimV2Group",
  "getScimV2Groups",
  "getScimV2Resourcetype",
  "getScimV2Resourcetypes",
  "getScimV2Schema",
  "getScimV2Schemas",
  "getScimV2Serviceproviderconfig",
  "getScimV2User",
  "getScimV2Users",
  "patchScimGroup",
  "patchScimUser",
  "patchScimV2Group",
  "patchScimV2User",
  "postScimUsers",
  "postScimV2Users",
  "putScimGroup",
  "putScimUser",
  "putScimV2Group",
  "putScimV2User"
] as const;
export type GenesysCloudFullApiSCIMOperationKey = typeof GenesysCloudFullApiSCIMOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiSCIMOperationPathParamMap {
  "deleteScimUser": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteScimV2User": { "userId": GenesysCloudFullApiPathParamValue };
  "getScimGroup": { "groupId": GenesysCloudFullApiPathParamValue };
  "getScimGroups": {};
  "getScimResourcetype": { "resourceType": GenesysCloudFullApiPathParamValue };
  "getScimResourcetypes": {};
  "getScimSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getScimSchemas": {};
  "getScimServiceproviderconfig": {};
  "getScimUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getScimUsers": {};
  "getScimV2Group": { "groupId": GenesysCloudFullApiPathParamValue };
  "getScimV2Groups": {};
  "getScimV2Resourcetype": { "resourceType": GenesysCloudFullApiPathParamValue };
  "getScimV2Resourcetypes": {};
  "getScimV2Schema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getScimV2Schemas": {};
  "getScimV2Serviceproviderconfig": {};
  "getScimV2User": { "userId": GenesysCloudFullApiPathParamValue };
  "getScimV2Users": {};
  "patchScimGroup": { "groupId": GenesysCloudFullApiPathParamValue };
  "patchScimUser": { "userId": GenesysCloudFullApiPathParamValue };
  "patchScimV2Group": { "groupId": GenesysCloudFullApiPathParamValue };
  "patchScimV2User": { "userId": GenesysCloudFullApiPathParamValue };
  "postScimUsers": {};
  "postScimV2Users": {};
  "putScimGroup": { "groupId": GenesysCloudFullApiPathParamValue };
  "putScimUser": { "userId": GenesysCloudFullApiPathParamValue };
  "putScimV2Group": { "groupId": GenesysCloudFullApiPathParamValue };
  "putScimV2User": { "userId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiSCIMOperationRequestMap {
  "deleteScimUser": GenesysCloudFullApiOperationInput<"deleteScimUser">;
  "deleteScimV2User": GenesysCloudFullApiOperationInput<"deleteScimV2User">;
  "getScimGroup": GenesysCloudFullApiOperationInput<"getScimGroup">;
  "getScimGroups": GenesysCloudFullApiOperationInput<"getScimGroups">;
  "getScimResourcetype": GenesysCloudFullApiOperationInput<"getScimResourcetype">;
  "getScimResourcetypes": GenesysCloudFullApiOperationInput<"getScimResourcetypes">;
  "getScimSchema": GenesysCloudFullApiOperationInput<"getScimSchema">;
  "getScimSchemas": GenesysCloudFullApiOperationInput<"getScimSchemas">;
  "getScimServiceproviderconfig": GenesysCloudFullApiOperationInput<"getScimServiceproviderconfig">;
  "getScimUser": GenesysCloudFullApiOperationInput<"getScimUser">;
  "getScimUsers": GenesysCloudFullApiOperationInput<"getScimUsers">;
  "getScimV2Group": GenesysCloudFullApiOperationInput<"getScimV2Group">;
  "getScimV2Groups": GenesysCloudFullApiOperationInput<"getScimV2Groups">;
  "getScimV2Resourcetype": GenesysCloudFullApiOperationInput<"getScimV2Resourcetype">;
  "getScimV2Resourcetypes": GenesysCloudFullApiOperationInput<"getScimV2Resourcetypes">;
  "getScimV2Schema": GenesysCloudFullApiOperationInput<"getScimV2Schema">;
  "getScimV2Schemas": GenesysCloudFullApiOperationInput<"getScimV2Schemas">;
  "getScimV2Serviceproviderconfig": GenesysCloudFullApiOperationInput<"getScimV2Serviceproviderconfig">;
  "getScimV2User": GenesysCloudFullApiOperationInput<"getScimV2User">;
  "getScimV2Users": GenesysCloudFullApiOperationInput<"getScimV2Users">;
  "patchScimGroup": GenesysCloudFullApiOperationInput<"patchScimGroup">;
  "patchScimUser": GenesysCloudFullApiOperationInput<"patchScimUser">;
  "patchScimV2Group": GenesysCloudFullApiOperationInput<"patchScimV2Group">;
  "patchScimV2User": GenesysCloudFullApiOperationInput<"patchScimV2User">;
  "postScimUsers": GenesysCloudFullApiOperationInput<"postScimUsers">;
  "postScimV2Users": GenesysCloudFullApiOperationInput<"postScimV2Users">;
  "putScimGroup": GenesysCloudFullApiOperationInput<"putScimGroup">;
  "putScimUser": GenesysCloudFullApiOperationInput<"putScimUser">;
  "putScimV2Group": GenesysCloudFullApiOperationInput<"putScimV2Group">;
  "putScimV2User": GenesysCloudFullApiOperationInput<"putScimV2User">;
}

export interface GenesysCloudFullApiSCIMGeneratedClient {
  DeleteScimUser(...args: GenesysCloudFullApiOperationArgs<"deleteScimUser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteScimUser"]>;
  DeleteScimV2User(...args: GenesysCloudFullApiOperationArgs<"deleteScimV2User">): Promise<GenesysCloudFullApiOperationResponseMap["deleteScimV2User"]>;
  GetScimGroup(...args: GenesysCloudFullApiOperationArgs<"getScimGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getScimGroup"]>;
  GetScimGroups(...args: GenesysCloudFullApiOperationArgs<"getScimGroups">): Promise<GenesysCloudFullApiOperationResponseMap["getScimGroups"]>;
  GetScimResourcetype(...args: GenesysCloudFullApiOperationArgs<"getScimResourcetype">): Promise<GenesysCloudFullApiOperationResponseMap["getScimResourcetype"]>;
  GetScimResourcetypes(...args: GenesysCloudFullApiOperationArgs<"getScimResourcetypes">): Promise<GenesysCloudFullApiOperationResponseMap["getScimResourcetypes"]>;
  GetScimSchema(...args: GenesysCloudFullApiOperationArgs<"getScimSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getScimSchema"]>;
  GetScimSchemas(...args: GenesysCloudFullApiOperationArgs<"getScimSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getScimSchemas"]>;
  GetScimServiceproviderconfig(...args: GenesysCloudFullApiOperationArgs<"getScimServiceproviderconfig">): Promise<GenesysCloudFullApiOperationResponseMap["getScimServiceproviderconfig"]>;
  GetScimUser(...args: GenesysCloudFullApiOperationArgs<"getScimUser">): Promise<GenesysCloudFullApiOperationResponseMap["getScimUser"]>;
  GetScimUsers(...args: GenesysCloudFullApiOperationArgs<"getScimUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getScimUsers"]>;
  GetScimV2Group(...args: GenesysCloudFullApiOperationArgs<"getScimV2Group">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Group"]>;
  GetScimV2Groups(...args: GenesysCloudFullApiOperationArgs<"getScimV2Groups">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Groups"]>;
  GetScimV2Resourcetype(...args: GenesysCloudFullApiOperationArgs<"getScimV2Resourcetype">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Resourcetype"]>;
  GetScimV2Resourcetypes(...args: GenesysCloudFullApiOperationArgs<"getScimV2Resourcetypes">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Resourcetypes"]>;
  GetScimV2Schema(...args: GenesysCloudFullApiOperationArgs<"getScimV2Schema">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Schema"]>;
  GetScimV2Schemas(...args: GenesysCloudFullApiOperationArgs<"getScimV2Schemas">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Schemas"]>;
  GetScimV2Serviceproviderconfig(...args: GenesysCloudFullApiOperationArgs<"getScimV2Serviceproviderconfig">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Serviceproviderconfig"]>;
  GetScimV2User(...args: GenesysCloudFullApiOperationArgs<"getScimV2User">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2User"]>;
  GetScimV2Users(...args: GenesysCloudFullApiOperationArgs<"getScimV2Users">): Promise<GenesysCloudFullApiOperationResponseMap["getScimV2Users"]>;
  PatchScimGroup(...args: GenesysCloudFullApiOperationArgs<"patchScimGroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchScimGroup"]>;
  PatchScimUser(...args: GenesysCloudFullApiOperationArgs<"patchScimUser">): Promise<GenesysCloudFullApiOperationResponseMap["patchScimUser"]>;
  PatchScimV2Group(...args: GenesysCloudFullApiOperationArgs<"patchScimV2Group">): Promise<GenesysCloudFullApiOperationResponseMap["patchScimV2Group"]>;
  PatchScimV2User(...args: GenesysCloudFullApiOperationArgs<"patchScimV2User">): Promise<GenesysCloudFullApiOperationResponseMap["patchScimV2User"]>;
  PostScimUsers(...args: GenesysCloudFullApiOperationArgs<"postScimUsers">): Promise<GenesysCloudFullApiOperationResponseMap["postScimUsers"]>;
  PostScimV2Users(...args: GenesysCloudFullApiOperationArgs<"postScimV2Users">): Promise<GenesysCloudFullApiOperationResponseMap["postScimV2Users"]>;
  PutScimGroup(...args: GenesysCloudFullApiOperationArgs<"putScimGroup">): Promise<GenesysCloudFullApiOperationResponseMap["putScimGroup"]>;
  PutScimUser(...args: GenesysCloudFullApiOperationArgs<"putScimUser">): Promise<GenesysCloudFullApiOperationResponseMap["putScimUser"]>;
  PutScimV2Group(...args: GenesysCloudFullApiOperationArgs<"putScimV2Group">): Promise<GenesysCloudFullApiOperationResponseMap["putScimV2Group"]>;
  PutScimV2User(...args: GenesysCloudFullApiOperationArgs<"putScimV2User">): Promise<GenesysCloudFullApiOperationResponseMap["putScimV2User"]>;
}

export const GenesysCloudFullApiSCIMGeneratedFunctionNames = [
  "DeleteScimUser",
  "DeleteScimV2User",
  "GetScimGroup",
  "GetScimGroups",
  "GetScimResourcetype",
  "GetScimResourcetypes",
  "GetScimSchema",
  "GetScimSchemas",
  "GetScimServiceproviderconfig",
  "GetScimUser",
  "GetScimUsers",
  "GetScimV2Group",
  "GetScimV2Groups",
  "GetScimV2Resourcetype",
  "GetScimV2Resourcetypes",
  "GetScimV2Schema",
  "GetScimV2Schemas",
  "GetScimV2Serviceproviderconfig",
  "GetScimV2User",
  "GetScimV2Users",
  "PatchScimGroup",
  "PatchScimUser",
  "PatchScimV2Group",
  "PatchScimV2User",
  "PostScimUsers",
  "PostScimV2Users",
  "PutScimGroup",
  "PutScimUser",
  "PutScimV2Group",
  "PutScimV2User"
] as const satisfies readonly (keyof GenesysCloudFullApiSCIMGeneratedClient)[];

export function createGenesysCloudFullApiSCIMGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiSCIMGeneratedClient {
  return {
    DeleteScimUser: (...args) => callOperation("deleteScimUser", ...(args as GenesysCloudFullApiOperationArgs<"deleteScimUser">)),
    DeleteScimV2User: (...args) => callOperation("deleteScimV2User", ...(args as GenesysCloudFullApiOperationArgs<"deleteScimV2User">)),
    GetScimGroup: (...args) => callOperation("getScimGroup", ...(args as GenesysCloudFullApiOperationArgs<"getScimGroup">)),
    GetScimGroups: (...args) => callOperation("getScimGroups", ...(args as GenesysCloudFullApiOperationArgs<"getScimGroups">)),
    GetScimResourcetype: (...args) => callOperation("getScimResourcetype", ...(args as GenesysCloudFullApiOperationArgs<"getScimResourcetype">)),
    GetScimResourcetypes: (...args) => callOperation("getScimResourcetypes", ...(args as GenesysCloudFullApiOperationArgs<"getScimResourcetypes">)),
    GetScimSchema: (...args) => callOperation("getScimSchema", ...(args as GenesysCloudFullApiOperationArgs<"getScimSchema">)),
    GetScimSchemas: (...args) => callOperation("getScimSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getScimSchemas">)),
    GetScimServiceproviderconfig: (...args) => callOperation("getScimServiceproviderconfig", ...(args as GenesysCloudFullApiOperationArgs<"getScimServiceproviderconfig">)),
    GetScimUser: (...args) => callOperation("getScimUser", ...(args as GenesysCloudFullApiOperationArgs<"getScimUser">)),
    GetScimUsers: (...args) => callOperation("getScimUsers", ...(args as GenesysCloudFullApiOperationArgs<"getScimUsers">)),
    GetScimV2Group: (...args) => callOperation("getScimV2Group", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Group">)),
    GetScimV2Groups: (...args) => callOperation("getScimV2Groups", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Groups">)),
    GetScimV2Resourcetype: (...args) => callOperation("getScimV2Resourcetype", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Resourcetype">)),
    GetScimV2Resourcetypes: (...args) => callOperation("getScimV2Resourcetypes", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Resourcetypes">)),
    GetScimV2Schema: (...args) => callOperation("getScimV2Schema", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Schema">)),
    GetScimV2Schemas: (...args) => callOperation("getScimV2Schemas", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Schemas">)),
    GetScimV2Serviceproviderconfig: (...args) => callOperation("getScimV2Serviceproviderconfig", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Serviceproviderconfig">)),
    GetScimV2User: (...args) => callOperation("getScimV2User", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2User">)),
    GetScimV2Users: (...args) => callOperation("getScimV2Users", ...(args as GenesysCloudFullApiOperationArgs<"getScimV2Users">)),
    PatchScimGroup: (...args) => callOperation("patchScimGroup", ...(args as GenesysCloudFullApiOperationArgs<"patchScimGroup">)),
    PatchScimUser: (...args) => callOperation("patchScimUser", ...(args as GenesysCloudFullApiOperationArgs<"patchScimUser">)),
    PatchScimV2Group: (...args) => callOperation("patchScimV2Group", ...(args as GenesysCloudFullApiOperationArgs<"patchScimV2Group">)),
    PatchScimV2User: (...args) => callOperation("patchScimV2User", ...(args as GenesysCloudFullApiOperationArgs<"patchScimV2User">)),
    PostScimUsers: (...args) => callOperation("postScimUsers", ...(args as GenesysCloudFullApiOperationArgs<"postScimUsers">)),
    PostScimV2Users: (...args) => callOperation("postScimV2Users", ...(args as GenesysCloudFullApiOperationArgs<"postScimV2Users">)),
    PutScimGroup: (...args) => callOperation("putScimGroup", ...(args as GenesysCloudFullApiOperationArgs<"putScimGroup">)),
    PutScimUser: (...args) => callOperation("putScimUser", ...(args as GenesysCloudFullApiOperationArgs<"putScimUser">)),
    PutScimV2Group: (...args) => callOperation("putScimV2Group", ...(args as GenesysCloudFullApiOperationArgs<"putScimV2Group">)),
    PutScimV2User: (...args) => callOperation("putScimV2User", ...(args as GenesysCloudFullApiOperationArgs<"putScimV2User">)),
  };
}
