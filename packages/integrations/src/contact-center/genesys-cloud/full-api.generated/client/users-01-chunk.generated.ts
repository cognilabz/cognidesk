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
export const GenesysCloudFullApiUsers01OperationKeys = [
  "deleteUser",
  "deleteUserCustomattribute",
  "deleteUserExternalidAuthorityNameExternalKey",
  "deleteUserRoutinglanguage",
  "deleteUserRoutingskill",
  "deleteUsersCustomattributesSchema",
  "deleteUsersStationsMeAssociatedstation",
  "deleteUserStationAssociatedstation",
  "deleteUserStationDefaultstation",
  "deleteUserVerifier",
  "getFieldconfig",
  "getProfilesUsers",
  "getUser",
  "getUserAdjacents",
  "getUserCallforwarding",
  "getUserCustomattribute",
  "getUserCustomattributesBulk",
  "getUserDirectreports",
  "getUserExternalid",
  "getUserExternalidAuthorityName",
  "getUserFavorites",
  "getUserOutofoffice",
  "getUserProfile",
  "getUserProfileskills",
  "getUserRoutinglanguages",
  "getUserRoutingskills",
  "getUserRoutingstatus",
  "getUsers",
  "getUsersChatsMe",
  "getUsersCustomattributesSchema",
  "getUsersCustomattributesSchemas",
  "getUsersCustomattributesSchemasCoretype",
  "getUsersCustomattributesSchemasCoretypes",
  "getUsersCustomattributesSchemasLimits",
  "getUsersCustomattributesSchemaVersion",
  "getUsersCustomattributesSchemaVersions",
  "getUsersDevelopmentActivities",
  "getUsersDevelopmentActivitiesMe",
  "getUsersDevelopmentActivity",
  "getUsersExternalidAuthorityNameExternalKey",
  "getUsersMe",
  "getUsersQuery",
  "getUsersSearch",
  "getUsersStationsMe",
  "getUserState",
  "getUserStation",
  "getUserSuperiors",
  "getUserTrustors",
  "getUserVerifiers",
  "patchUser",
  "patchUserCallforwarding",
  "patchUserCustomattributes",
  "patchUserCustomattributesBulk",
  "patchUserRoutinglanguage",
  "patchUserRoutinglanguagesBulk",
  "patchUserRoutingskillsBulk",
  "patchUsersBulk",
  "postUserExternalid",
  "postUserInvite",
  "postUserPassword",
  "postUserRoutinglanguages",
  "postUserRoutingskills",
  "postUsers",
  "postUsersCustomattributesSchemas",
  "postUsersDevelopmentActivitiesAggregatesQuery",
  "postUsersMePassword",
  "postUsersSearch",
  "postUsersSearchTeamsAssign",
  "putUserCallforwarding",
  "putUserCustomattributes",
  "putUserOutofoffice",
  "putUserProfileskills",
  "putUserRoutingskill",
  "putUserRoutingskillsBulk",
  "putUserRoutingstatus",
  "putUsersCustomattributesSchema",
  "putUsersStationsMeAssociatedstationStationId",
  "putUserState",
  "putUserStationAssociatedstationStationId",
  "putUserStationDefaultstationStationId"
] as const;
export type GenesysCloudFullApiUsers01OperationKey = typeof GenesysCloudFullApiUsers01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUsers01OperationPathParamMap {
  "deleteUser": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteUserCustomattribute": { "userId": GenesysCloudFullApiPathParamValue; "schemaId": GenesysCloudFullApiPathParamValue };
  "deleteUserExternalidAuthorityNameExternalKey": { "userId": GenesysCloudFullApiPathParamValue; "authorityName": GenesysCloudFullApiPathParamValue; "externalKey": GenesysCloudFullApiPathParamValue };
  "deleteUserRoutinglanguage": { "userId": GenesysCloudFullApiPathParamValue; "languageId": GenesysCloudFullApiPathParamValue };
  "deleteUserRoutingskill": { "userId": GenesysCloudFullApiPathParamValue; "skillId": GenesysCloudFullApiPathParamValue };
  "deleteUsersCustomattributesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "deleteUsersStationsMeAssociatedstation": {};
  "deleteUserStationAssociatedstation": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteUserStationDefaultstation": { "userId": GenesysCloudFullApiPathParamValue };
  "deleteUserVerifier": { "userId": GenesysCloudFullApiPathParamValue; "verifierId": GenesysCloudFullApiPathParamValue };
  "getFieldconfig": {};
  "getProfilesUsers": {};
  "getUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserAdjacents": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserCallforwarding": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserCustomattribute": { "userId": GenesysCloudFullApiPathParamValue; "schemaId": GenesysCloudFullApiPathParamValue };
  "getUserCustomattributesBulk": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserDirectreports": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserExternalid": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserExternalidAuthorityName": { "userId": GenesysCloudFullApiPathParamValue; "authorityName": GenesysCloudFullApiPathParamValue };
  "getUserFavorites": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserOutofoffice": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserProfile": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserProfileskills": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserRoutinglanguages": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserRoutingskills": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserRoutingstatus": { "userId": GenesysCloudFullApiPathParamValue };
  "getUsers": {};
  "getUsersChatsMe": {};
  "getUsersCustomattributesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getUsersCustomattributesSchemas": {};
  "getUsersCustomattributesSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getUsersCustomattributesSchemasCoretypes": {};
  "getUsersCustomattributesSchemasLimits": {};
  "getUsersCustomattributesSchemaVersion": { "schemaId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getUsersCustomattributesSchemaVersions": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getUsersDevelopmentActivities": {};
  "getUsersDevelopmentActivitiesMe": {};
  "getUsersDevelopmentActivity": { "activityId": GenesysCloudFullApiPathParamValue };
  "getUsersExternalidAuthorityNameExternalKey": { "authorityName": GenesysCloudFullApiPathParamValue; "externalKey": GenesysCloudFullApiPathParamValue };
  "getUsersMe": {};
  "getUsersQuery": {};
  "getUsersSearch": {};
  "getUsersStationsMe": {};
  "getUserState": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserStation": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserSuperiors": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserTrustors": { "userId": GenesysCloudFullApiPathParamValue };
  "getUserVerifiers": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUser": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUserCallforwarding": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUserCustomattributes": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUserCustomattributesBulk": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUserRoutinglanguage": { "userId": GenesysCloudFullApiPathParamValue; "languageId": GenesysCloudFullApiPathParamValue };
  "patchUserRoutinglanguagesBulk": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUserRoutingskillsBulk": { "userId": GenesysCloudFullApiPathParamValue };
  "patchUsersBulk": {};
  "postUserExternalid": { "userId": GenesysCloudFullApiPathParamValue };
  "postUserInvite": { "userId": GenesysCloudFullApiPathParamValue };
  "postUserPassword": { "userId": GenesysCloudFullApiPathParamValue };
  "postUserRoutinglanguages": { "userId": GenesysCloudFullApiPathParamValue };
  "postUserRoutingskills": { "userId": GenesysCloudFullApiPathParamValue };
  "postUsers": {};
  "postUsersCustomattributesSchemas": {};
  "postUsersDevelopmentActivitiesAggregatesQuery": {};
  "postUsersMePassword": {};
  "postUsersSearch": {};
  "postUsersSearchTeamsAssign": {};
  "putUserCallforwarding": { "userId": GenesysCloudFullApiPathParamValue };
  "putUserCustomattributes": { "userId": GenesysCloudFullApiPathParamValue };
  "putUserOutofoffice": { "userId": GenesysCloudFullApiPathParamValue };
  "putUserProfileskills": { "userId": GenesysCloudFullApiPathParamValue };
  "putUserRoutingskill": { "userId": GenesysCloudFullApiPathParamValue; "skillId": GenesysCloudFullApiPathParamValue };
  "putUserRoutingskillsBulk": { "userId": GenesysCloudFullApiPathParamValue };
  "putUserRoutingstatus": { "userId": GenesysCloudFullApiPathParamValue };
  "putUsersCustomattributesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "putUsersStationsMeAssociatedstationStationId": { "stationId": GenesysCloudFullApiPathParamValue };
  "putUserState": { "userId": GenesysCloudFullApiPathParamValue };
  "putUserStationAssociatedstationStationId": { "userId": GenesysCloudFullApiPathParamValue; "stationId": GenesysCloudFullApiPathParamValue };
  "putUserStationDefaultstationStationId": { "userId": GenesysCloudFullApiPathParamValue; "stationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiUsers01OperationRequestMap {
  "deleteUser": GenesysCloudFullApiOperationInput<"deleteUser">;
  "deleteUserCustomattribute": GenesysCloudFullApiOperationInput<"deleteUserCustomattribute">;
  "deleteUserExternalidAuthorityNameExternalKey": GenesysCloudFullApiOperationInput<"deleteUserExternalidAuthorityNameExternalKey">;
  "deleteUserRoutinglanguage": GenesysCloudFullApiOperationInput<"deleteUserRoutinglanguage">;
  "deleteUserRoutingskill": GenesysCloudFullApiOperationInput<"deleteUserRoutingskill">;
  "deleteUsersCustomattributesSchema": GenesysCloudFullApiOperationInput<"deleteUsersCustomattributesSchema">;
  "deleteUsersStationsMeAssociatedstation": GenesysCloudFullApiOperationInput<"deleteUsersStationsMeAssociatedstation">;
  "deleteUserStationAssociatedstation": GenesysCloudFullApiOperationInput<"deleteUserStationAssociatedstation">;
  "deleteUserStationDefaultstation": GenesysCloudFullApiOperationInput<"deleteUserStationDefaultstation">;
  "deleteUserVerifier": GenesysCloudFullApiOperationInput<"deleteUserVerifier">;
  "getFieldconfig": GenesysCloudFullApiOperationInput<"getFieldconfig">;
  "getProfilesUsers": GenesysCloudFullApiOperationInput<"getProfilesUsers">;
  "getUser": GenesysCloudFullApiOperationInput<"getUser">;
  "getUserAdjacents": GenesysCloudFullApiOperationInput<"getUserAdjacents">;
  "getUserCallforwarding": GenesysCloudFullApiOperationInput<"getUserCallforwarding">;
  "getUserCustomattribute": GenesysCloudFullApiOperationInput<"getUserCustomattribute">;
  "getUserCustomattributesBulk": GenesysCloudFullApiOperationInput<"getUserCustomattributesBulk">;
  "getUserDirectreports": GenesysCloudFullApiOperationInput<"getUserDirectreports">;
  "getUserExternalid": GenesysCloudFullApiOperationInput<"getUserExternalid">;
  "getUserExternalidAuthorityName": GenesysCloudFullApiOperationInput<"getUserExternalidAuthorityName">;
  "getUserFavorites": GenesysCloudFullApiOperationInput<"getUserFavorites">;
  "getUserOutofoffice": GenesysCloudFullApiOperationInput<"getUserOutofoffice">;
  "getUserProfile": GenesysCloudFullApiOperationInput<"getUserProfile">;
  "getUserProfileskills": GenesysCloudFullApiOperationInput<"getUserProfileskills">;
  "getUserRoutinglanguages": GenesysCloudFullApiOperationInput<"getUserRoutinglanguages">;
  "getUserRoutingskills": GenesysCloudFullApiOperationInput<"getUserRoutingskills">;
  "getUserRoutingstatus": GenesysCloudFullApiOperationInput<"getUserRoutingstatus">;
  "getUsers": GenesysCloudFullApiOperationInput<"getUsers">;
  "getUsersChatsMe": GenesysCloudFullApiOperationInput<"getUsersChatsMe">;
  "getUsersCustomattributesSchema": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchema">;
  "getUsersCustomattributesSchemas": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchemas">;
  "getUsersCustomattributesSchemasCoretype": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchemasCoretype">;
  "getUsersCustomattributesSchemasCoretypes": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchemasCoretypes">;
  "getUsersCustomattributesSchemasLimits": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchemasLimits">;
  "getUsersCustomattributesSchemaVersion": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchemaVersion">;
  "getUsersCustomattributesSchemaVersions": GenesysCloudFullApiOperationInput<"getUsersCustomattributesSchemaVersions">;
  "getUsersDevelopmentActivities": GenesysCloudFullApiOperationInput<"getUsersDevelopmentActivities">;
  "getUsersDevelopmentActivitiesMe": GenesysCloudFullApiOperationInput<"getUsersDevelopmentActivitiesMe">;
  "getUsersDevelopmentActivity": GenesysCloudFullApiOperationInput<"getUsersDevelopmentActivity">;
  "getUsersExternalidAuthorityNameExternalKey": GenesysCloudFullApiOperationInput<"getUsersExternalidAuthorityNameExternalKey">;
  "getUsersMe": GenesysCloudFullApiOperationInput<"getUsersMe">;
  "getUsersQuery": GenesysCloudFullApiOperationInput<"getUsersQuery">;
  "getUsersSearch": GenesysCloudFullApiOperationInput<"getUsersSearch">;
  "getUsersStationsMe": GenesysCloudFullApiOperationInput<"getUsersStationsMe">;
  "getUserState": GenesysCloudFullApiOperationInput<"getUserState">;
  "getUserStation": GenesysCloudFullApiOperationInput<"getUserStation">;
  "getUserSuperiors": GenesysCloudFullApiOperationInput<"getUserSuperiors">;
  "getUserTrustors": GenesysCloudFullApiOperationInput<"getUserTrustors">;
  "getUserVerifiers": GenesysCloudFullApiOperationInput<"getUserVerifiers">;
  "patchUser": GenesysCloudFullApiOperationInput<"patchUser">;
  "patchUserCallforwarding": GenesysCloudFullApiOperationInput<"patchUserCallforwarding">;
  "patchUserCustomattributes": GenesysCloudFullApiOperationInput<"patchUserCustomattributes">;
  "patchUserCustomattributesBulk": GenesysCloudFullApiOperationInput<"patchUserCustomattributesBulk">;
  "patchUserRoutinglanguage": GenesysCloudFullApiOperationInput<"patchUserRoutinglanguage">;
  "patchUserRoutinglanguagesBulk": GenesysCloudFullApiOperationInput<"patchUserRoutinglanguagesBulk">;
  "patchUserRoutingskillsBulk": GenesysCloudFullApiOperationInput<"patchUserRoutingskillsBulk">;
  "patchUsersBulk": GenesysCloudFullApiOperationInput<"patchUsersBulk">;
  "postUserExternalid": GenesysCloudFullApiOperationInput<"postUserExternalid">;
  "postUserInvite": GenesysCloudFullApiOperationInput<"postUserInvite">;
  "postUserPassword": GenesysCloudFullApiOperationInput<"postUserPassword">;
  "postUserRoutinglanguages": GenesysCloudFullApiOperationInput<"postUserRoutinglanguages">;
  "postUserRoutingskills": GenesysCloudFullApiOperationInput<"postUserRoutingskills">;
  "postUsers": GenesysCloudFullApiOperationInput<"postUsers">;
  "postUsersCustomattributesSchemas": GenesysCloudFullApiOperationInput<"postUsersCustomattributesSchemas">;
  "postUsersDevelopmentActivitiesAggregatesQuery": GenesysCloudFullApiOperationInput<"postUsersDevelopmentActivitiesAggregatesQuery">;
  "postUsersMePassword": GenesysCloudFullApiOperationInput<"postUsersMePassword">;
  "postUsersSearch": GenesysCloudFullApiOperationInput<"postUsersSearch">;
  "postUsersSearchTeamsAssign": GenesysCloudFullApiOperationInput<"postUsersSearchTeamsAssign">;
  "putUserCallforwarding": GenesysCloudFullApiOperationInput<"putUserCallforwarding">;
  "putUserCustomattributes": GenesysCloudFullApiOperationInput<"putUserCustomattributes">;
  "putUserOutofoffice": GenesysCloudFullApiOperationInput<"putUserOutofoffice">;
  "putUserProfileskills": GenesysCloudFullApiOperationInput<"putUserProfileskills">;
  "putUserRoutingskill": GenesysCloudFullApiOperationInput<"putUserRoutingskill">;
  "putUserRoutingskillsBulk": GenesysCloudFullApiOperationInput<"putUserRoutingskillsBulk">;
  "putUserRoutingstatus": GenesysCloudFullApiOperationInput<"putUserRoutingstatus">;
  "putUsersCustomattributesSchema": GenesysCloudFullApiOperationInput<"putUsersCustomattributesSchema">;
  "putUsersStationsMeAssociatedstationStationId": GenesysCloudFullApiOperationInput<"putUsersStationsMeAssociatedstationStationId">;
  "putUserState": GenesysCloudFullApiOperationInput<"putUserState">;
  "putUserStationAssociatedstationStationId": GenesysCloudFullApiOperationInput<"putUserStationAssociatedstationStationId">;
  "putUserStationDefaultstationStationId": GenesysCloudFullApiOperationInput<"putUserStationDefaultstationStationId">;
}

export interface GenesysCloudFullApiUsers01GeneratedClient {
  DeleteUser(...args: GenesysCloudFullApiOperationArgs<"deleteUser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUser"]>;
  DeleteUserCustomattribute(...args: GenesysCloudFullApiOperationArgs<"deleteUserCustomattribute">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserCustomattribute"]>;
  DeleteUserExternalidAuthorityNameExternalKey(...args: GenesysCloudFullApiOperationArgs<"deleteUserExternalidAuthorityNameExternalKey">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserExternalidAuthorityNameExternalKey"]>;
  DeleteUserRoutinglanguage(...args: GenesysCloudFullApiOperationArgs<"deleteUserRoutinglanguage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserRoutinglanguage"]>;
  DeleteUserRoutingskill(...args: GenesysCloudFullApiOperationArgs<"deleteUserRoutingskill">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserRoutingskill"]>;
  DeleteUsersCustomattributesSchema(...args: GenesysCloudFullApiOperationArgs<"deleteUsersCustomattributesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUsersCustomattributesSchema"]>;
  DeleteUsersStationsMeAssociatedstation(...args: GenesysCloudFullApiOperationArgs<"deleteUsersStationsMeAssociatedstation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUsersStationsMeAssociatedstation"]>;
  DeleteUserStationAssociatedstation(...args: GenesysCloudFullApiOperationArgs<"deleteUserStationAssociatedstation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserStationAssociatedstation"]>;
  DeleteUserStationDefaultstation(...args: GenesysCloudFullApiOperationArgs<"deleteUserStationDefaultstation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserStationDefaultstation"]>;
  DeleteUserVerifier(...args: GenesysCloudFullApiOperationArgs<"deleteUserVerifier">): Promise<GenesysCloudFullApiOperationResponseMap["deleteUserVerifier"]>;
  GetFieldconfig(...args: GenesysCloudFullApiOperationArgs<"getFieldconfig">): Promise<GenesysCloudFullApiOperationResponseMap["getFieldconfig"]>;
  GetProfilesUsers(...args: GenesysCloudFullApiOperationArgs<"getProfilesUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getProfilesUsers"]>;
  GetUser(...args: GenesysCloudFullApiOperationArgs<"getUser">): Promise<GenesysCloudFullApiOperationResponseMap["getUser"]>;
  GetUserAdjacents(...args: GenesysCloudFullApiOperationArgs<"getUserAdjacents">): Promise<GenesysCloudFullApiOperationResponseMap["getUserAdjacents"]>;
  GetUserCallforwarding(...args: GenesysCloudFullApiOperationArgs<"getUserCallforwarding">): Promise<GenesysCloudFullApiOperationResponseMap["getUserCallforwarding"]>;
  GetUserCustomattribute(...args: GenesysCloudFullApiOperationArgs<"getUserCustomattribute">): Promise<GenesysCloudFullApiOperationResponseMap["getUserCustomattribute"]>;
  GetUserCustomattributesBulk(...args: GenesysCloudFullApiOperationArgs<"getUserCustomattributesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["getUserCustomattributesBulk"]>;
  GetUserDirectreports(...args: GenesysCloudFullApiOperationArgs<"getUserDirectreports">): Promise<GenesysCloudFullApiOperationResponseMap["getUserDirectreports"]>;
  GetUserExternalid(...args: GenesysCloudFullApiOperationArgs<"getUserExternalid">): Promise<GenesysCloudFullApiOperationResponseMap["getUserExternalid"]>;
  GetUserExternalidAuthorityName(...args: GenesysCloudFullApiOperationArgs<"getUserExternalidAuthorityName">): Promise<GenesysCloudFullApiOperationResponseMap["getUserExternalidAuthorityName"]>;
  GetUserFavorites(...args: GenesysCloudFullApiOperationArgs<"getUserFavorites">): Promise<GenesysCloudFullApiOperationResponseMap["getUserFavorites"]>;
  GetUserOutofoffice(...args: GenesysCloudFullApiOperationArgs<"getUserOutofoffice">): Promise<GenesysCloudFullApiOperationResponseMap["getUserOutofoffice"]>;
  GetUserProfile(...args: GenesysCloudFullApiOperationArgs<"getUserProfile">): Promise<GenesysCloudFullApiOperationResponseMap["getUserProfile"]>;
  GetUserProfileskills(...args: GenesysCloudFullApiOperationArgs<"getUserProfileskills">): Promise<GenesysCloudFullApiOperationResponseMap["getUserProfileskills"]>;
  GetUserRoutinglanguages(...args: GenesysCloudFullApiOperationArgs<"getUserRoutinglanguages">): Promise<GenesysCloudFullApiOperationResponseMap["getUserRoutinglanguages"]>;
  GetUserRoutingskills(...args: GenesysCloudFullApiOperationArgs<"getUserRoutingskills">): Promise<GenesysCloudFullApiOperationResponseMap["getUserRoutingskills"]>;
  GetUserRoutingstatus(...args: GenesysCloudFullApiOperationArgs<"getUserRoutingstatus">): Promise<GenesysCloudFullApiOperationResponseMap["getUserRoutingstatus"]>;
  GetUsers(...args: GenesysCloudFullApiOperationArgs<"getUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getUsers"]>;
  GetUsersChatsMe(...args: GenesysCloudFullApiOperationArgs<"getUsersChatsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersChatsMe"]>;
  GetUsersCustomattributesSchema(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchema"]>;
  GetUsersCustomattributesSchemas(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchemas"]>;
  GetUsersCustomattributesSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchemasCoretype"]>;
  GetUsersCustomattributesSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchemasCoretypes"]>;
  GetUsersCustomattributesSchemasLimits(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemasLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchemasLimits"]>;
  GetUsersCustomattributesSchemaVersion(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemaVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchemaVersion"]>;
  GetUsersCustomattributesSchemaVersions(...args: GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemaVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersCustomattributesSchemaVersions"]>;
  GetUsersDevelopmentActivities(...args: GenesysCloudFullApiOperationArgs<"getUsersDevelopmentActivities">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersDevelopmentActivities"]>;
  GetUsersDevelopmentActivitiesMe(...args: GenesysCloudFullApiOperationArgs<"getUsersDevelopmentActivitiesMe">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersDevelopmentActivitiesMe"]>;
  GetUsersDevelopmentActivity(...args: GenesysCloudFullApiOperationArgs<"getUsersDevelopmentActivity">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersDevelopmentActivity"]>;
  GetUsersExternalidAuthorityNameExternalKey(...args: GenesysCloudFullApiOperationArgs<"getUsersExternalidAuthorityNameExternalKey">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersExternalidAuthorityNameExternalKey"]>;
  GetUsersMe(...args: GenesysCloudFullApiOperationArgs<"getUsersMe">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersMe"]>;
  GetUsersQuery(...args: GenesysCloudFullApiOperationArgs<"getUsersQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersQuery"]>;
  GetUsersSearch(...args: GenesysCloudFullApiOperationArgs<"getUsersSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersSearch"]>;
  GetUsersStationsMe(...args: GenesysCloudFullApiOperationArgs<"getUsersStationsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getUsersStationsMe"]>;
  GetUserState(...args: GenesysCloudFullApiOperationArgs<"getUserState">): Promise<GenesysCloudFullApiOperationResponseMap["getUserState"]>;
  GetUserStation(...args: GenesysCloudFullApiOperationArgs<"getUserStation">): Promise<GenesysCloudFullApiOperationResponseMap["getUserStation"]>;
  GetUserSuperiors(...args: GenesysCloudFullApiOperationArgs<"getUserSuperiors">): Promise<GenesysCloudFullApiOperationResponseMap["getUserSuperiors"]>;
  GetUserTrustors(...args: GenesysCloudFullApiOperationArgs<"getUserTrustors">): Promise<GenesysCloudFullApiOperationResponseMap["getUserTrustors"]>;
  GetUserVerifiers(...args: GenesysCloudFullApiOperationArgs<"getUserVerifiers">): Promise<GenesysCloudFullApiOperationResponseMap["getUserVerifiers"]>;
  PatchUser(...args: GenesysCloudFullApiOperationArgs<"patchUser">): Promise<GenesysCloudFullApiOperationResponseMap["patchUser"]>;
  PatchUserCallforwarding(...args: GenesysCloudFullApiOperationArgs<"patchUserCallforwarding">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserCallforwarding"]>;
  PatchUserCustomattributes(...args: GenesysCloudFullApiOperationArgs<"patchUserCustomattributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserCustomattributes"]>;
  PatchUserCustomattributesBulk(...args: GenesysCloudFullApiOperationArgs<"patchUserCustomattributesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserCustomattributesBulk"]>;
  PatchUserRoutinglanguage(...args: GenesysCloudFullApiOperationArgs<"patchUserRoutinglanguage">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserRoutinglanguage"]>;
  PatchUserRoutinglanguagesBulk(...args: GenesysCloudFullApiOperationArgs<"patchUserRoutinglanguagesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserRoutinglanguagesBulk"]>;
  PatchUserRoutingskillsBulk(...args: GenesysCloudFullApiOperationArgs<"patchUserRoutingskillsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserRoutingskillsBulk"]>;
  PatchUsersBulk(...args: GenesysCloudFullApiOperationArgs<"patchUsersBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchUsersBulk"]>;
  PostUserExternalid(...args: GenesysCloudFullApiOperationArgs<"postUserExternalid">): Promise<GenesysCloudFullApiOperationResponseMap["postUserExternalid"]>;
  PostUserInvite(...args: GenesysCloudFullApiOperationArgs<"postUserInvite">): Promise<GenesysCloudFullApiOperationResponseMap["postUserInvite"]>;
  PostUserPassword(...args: GenesysCloudFullApiOperationArgs<"postUserPassword">): Promise<GenesysCloudFullApiOperationResponseMap["postUserPassword"]>;
  PostUserRoutinglanguages(...args: GenesysCloudFullApiOperationArgs<"postUserRoutinglanguages">): Promise<GenesysCloudFullApiOperationResponseMap["postUserRoutinglanguages"]>;
  PostUserRoutingskills(...args: GenesysCloudFullApiOperationArgs<"postUserRoutingskills">): Promise<GenesysCloudFullApiOperationResponseMap["postUserRoutingskills"]>;
  PostUsers(...args: GenesysCloudFullApiOperationArgs<"postUsers">): Promise<GenesysCloudFullApiOperationResponseMap["postUsers"]>;
  PostUsersCustomattributesSchemas(...args: GenesysCloudFullApiOperationArgs<"postUsersCustomattributesSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersCustomattributesSchemas"]>;
  PostUsersDevelopmentActivitiesAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postUsersDevelopmentActivitiesAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersDevelopmentActivitiesAggregatesQuery"]>;
  PostUsersMePassword(...args: GenesysCloudFullApiOperationArgs<"postUsersMePassword">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersMePassword"]>;
  PostUsersSearch(...args: GenesysCloudFullApiOperationArgs<"postUsersSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersSearch"]>;
  PostUsersSearchTeamsAssign(...args: GenesysCloudFullApiOperationArgs<"postUsersSearchTeamsAssign">): Promise<GenesysCloudFullApiOperationResponseMap["postUsersSearchTeamsAssign"]>;
  PutUserCallforwarding(...args: GenesysCloudFullApiOperationArgs<"putUserCallforwarding">): Promise<GenesysCloudFullApiOperationResponseMap["putUserCallforwarding"]>;
  PutUserCustomattributes(...args: GenesysCloudFullApiOperationArgs<"putUserCustomattributes">): Promise<GenesysCloudFullApiOperationResponseMap["putUserCustomattributes"]>;
  PutUserOutofoffice(...args: GenesysCloudFullApiOperationArgs<"putUserOutofoffice">): Promise<GenesysCloudFullApiOperationResponseMap["putUserOutofoffice"]>;
  PutUserProfileskills(...args: GenesysCloudFullApiOperationArgs<"putUserProfileskills">): Promise<GenesysCloudFullApiOperationResponseMap["putUserProfileskills"]>;
  PutUserRoutingskill(...args: GenesysCloudFullApiOperationArgs<"putUserRoutingskill">): Promise<GenesysCloudFullApiOperationResponseMap["putUserRoutingskill"]>;
  PutUserRoutingskillsBulk(...args: GenesysCloudFullApiOperationArgs<"putUserRoutingskillsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["putUserRoutingskillsBulk"]>;
  PutUserRoutingstatus(...args: GenesysCloudFullApiOperationArgs<"putUserRoutingstatus">): Promise<GenesysCloudFullApiOperationResponseMap["putUserRoutingstatus"]>;
  PutUsersCustomattributesSchema(...args: GenesysCloudFullApiOperationArgs<"putUsersCustomattributesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putUsersCustomattributesSchema"]>;
  PutUsersStationsMeAssociatedstationStationId(...args: GenesysCloudFullApiOperationArgs<"putUsersStationsMeAssociatedstationStationId">): Promise<GenesysCloudFullApiOperationResponseMap["putUsersStationsMeAssociatedstationStationId"]>;
  PutUserState(...args: GenesysCloudFullApiOperationArgs<"putUserState">): Promise<GenesysCloudFullApiOperationResponseMap["putUserState"]>;
  PutUserStationAssociatedstationStationId(...args: GenesysCloudFullApiOperationArgs<"putUserStationAssociatedstationStationId">): Promise<GenesysCloudFullApiOperationResponseMap["putUserStationAssociatedstationStationId"]>;
  PutUserStationDefaultstationStationId(...args: GenesysCloudFullApiOperationArgs<"putUserStationDefaultstationStationId">): Promise<GenesysCloudFullApiOperationResponseMap["putUserStationDefaultstationStationId"]>;
}

export const GenesysCloudFullApiUsers01GeneratedFunctionNames = [
  "DeleteUser",
  "DeleteUserCustomattribute",
  "DeleteUserExternalidAuthorityNameExternalKey",
  "DeleteUserRoutinglanguage",
  "DeleteUserRoutingskill",
  "DeleteUsersCustomattributesSchema",
  "DeleteUsersStationsMeAssociatedstation",
  "DeleteUserStationAssociatedstation",
  "DeleteUserStationDefaultstation",
  "DeleteUserVerifier",
  "GetFieldconfig",
  "GetProfilesUsers",
  "GetUser",
  "GetUserAdjacents",
  "GetUserCallforwarding",
  "GetUserCustomattribute",
  "GetUserCustomattributesBulk",
  "GetUserDirectreports",
  "GetUserExternalid",
  "GetUserExternalidAuthorityName",
  "GetUserFavorites",
  "GetUserOutofoffice",
  "GetUserProfile",
  "GetUserProfileskills",
  "GetUserRoutinglanguages",
  "GetUserRoutingskills",
  "GetUserRoutingstatus",
  "GetUsers",
  "GetUsersChatsMe",
  "GetUsersCustomattributesSchema",
  "GetUsersCustomattributesSchemas",
  "GetUsersCustomattributesSchemasCoretype",
  "GetUsersCustomattributesSchemasCoretypes",
  "GetUsersCustomattributesSchemasLimits",
  "GetUsersCustomattributesSchemaVersion",
  "GetUsersCustomattributesSchemaVersions",
  "GetUsersDevelopmentActivities",
  "GetUsersDevelopmentActivitiesMe",
  "GetUsersDevelopmentActivity",
  "GetUsersExternalidAuthorityNameExternalKey",
  "GetUsersMe",
  "GetUsersQuery",
  "GetUsersSearch",
  "GetUsersStationsMe",
  "GetUserState",
  "GetUserStation",
  "GetUserSuperiors",
  "GetUserTrustors",
  "GetUserVerifiers",
  "PatchUser",
  "PatchUserCallforwarding",
  "PatchUserCustomattributes",
  "PatchUserCustomattributesBulk",
  "PatchUserRoutinglanguage",
  "PatchUserRoutinglanguagesBulk",
  "PatchUserRoutingskillsBulk",
  "PatchUsersBulk",
  "PostUserExternalid",
  "PostUserInvite",
  "PostUserPassword",
  "PostUserRoutinglanguages",
  "PostUserRoutingskills",
  "PostUsers",
  "PostUsersCustomattributesSchemas",
  "PostUsersDevelopmentActivitiesAggregatesQuery",
  "PostUsersMePassword",
  "PostUsersSearch",
  "PostUsersSearchTeamsAssign",
  "PutUserCallforwarding",
  "PutUserCustomattributes",
  "PutUserOutofoffice",
  "PutUserProfileskills",
  "PutUserRoutingskill",
  "PutUserRoutingskillsBulk",
  "PutUserRoutingstatus",
  "PutUsersCustomattributesSchema",
  "PutUsersStationsMeAssociatedstationStationId",
  "PutUserState",
  "PutUserStationAssociatedstationStationId",
  "PutUserStationDefaultstationStationId"
] as const satisfies readonly (keyof GenesysCloudFullApiUsers01GeneratedClient)[];

export function createGenesysCloudFullApiUsers01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUsers01GeneratedClient {
  return {
    DeleteUser: (...args) => callOperation("deleteUser", ...(args as GenesysCloudFullApiOperationArgs<"deleteUser">)),
    DeleteUserCustomattribute: (...args) => callOperation("deleteUserCustomattribute", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserCustomattribute">)),
    DeleteUserExternalidAuthorityNameExternalKey: (...args) => callOperation("deleteUserExternalidAuthorityNameExternalKey", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserExternalidAuthorityNameExternalKey">)),
    DeleteUserRoutinglanguage: (...args) => callOperation("deleteUserRoutinglanguage", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserRoutinglanguage">)),
    DeleteUserRoutingskill: (...args) => callOperation("deleteUserRoutingskill", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserRoutingskill">)),
    DeleteUsersCustomattributesSchema: (...args) => callOperation("deleteUsersCustomattributesSchema", ...(args as GenesysCloudFullApiOperationArgs<"deleteUsersCustomattributesSchema">)),
    DeleteUsersStationsMeAssociatedstation: (...args) => callOperation("deleteUsersStationsMeAssociatedstation", ...(args as GenesysCloudFullApiOperationArgs<"deleteUsersStationsMeAssociatedstation">)),
    DeleteUserStationAssociatedstation: (...args) => callOperation("deleteUserStationAssociatedstation", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserStationAssociatedstation">)),
    DeleteUserStationDefaultstation: (...args) => callOperation("deleteUserStationDefaultstation", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserStationDefaultstation">)),
    DeleteUserVerifier: (...args) => callOperation("deleteUserVerifier", ...(args as GenesysCloudFullApiOperationArgs<"deleteUserVerifier">)),
    GetFieldconfig: (...args) => callOperation("getFieldconfig", ...(args as GenesysCloudFullApiOperationArgs<"getFieldconfig">)),
    GetProfilesUsers: (...args) => callOperation("getProfilesUsers", ...(args as GenesysCloudFullApiOperationArgs<"getProfilesUsers">)),
    GetUser: (...args) => callOperation("getUser", ...(args as GenesysCloudFullApiOperationArgs<"getUser">)),
    GetUserAdjacents: (...args) => callOperation("getUserAdjacents", ...(args as GenesysCloudFullApiOperationArgs<"getUserAdjacents">)),
    GetUserCallforwarding: (...args) => callOperation("getUserCallforwarding", ...(args as GenesysCloudFullApiOperationArgs<"getUserCallforwarding">)),
    GetUserCustomattribute: (...args) => callOperation("getUserCustomattribute", ...(args as GenesysCloudFullApiOperationArgs<"getUserCustomattribute">)),
    GetUserCustomattributesBulk: (...args) => callOperation("getUserCustomattributesBulk", ...(args as GenesysCloudFullApiOperationArgs<"getUserCustomattributesBulk">)),
    GetUserDirectreports: (...args) => callOperation("getUserDirectreports", ...(args as GenesysCloudFullApiOperationArgs<"getUserDirectreports">)),
    GetUserExternalid: (...args) => callOperation("getUserExternalid", ...(args as GenesysCloudFullApiOperationArgs<"getUserExternalid">)),
    GetUserExternalidAuthorityName: (...args) => callOperation("getUserExternalidAuthorityName", ...(args as GenesysCloudFullApiOperationArgs<"getUserExternalidAuthorityName">)),
    GetUserFavorites: (...args) => callOperation("getUserFavorites", ...(args as GenesysCloudFullApiOperationArgs<"getUserFavorites">)),
    GetUserOutofoffice: (...args) => callOperation("getUserOutofoffice", ...(args as GenesysCloudFullApiOperationArgs<"getUserOutofoffice">)),
    GetUserProfile: (...args) => callOperation("getUserProfile", ...(args as GenesysCloudFullApiOperationArgs<"getUserProfile">)),
    GetUserProfileskills: (...args) => callOperation("getUserProfileskills", ...(args as GenesysCloudFullApiOperationArgs<"getUserProfileskills">)),
    GetUserRoutinglanguages: (...args) => callOperation("getUserRoutinglanguages", ...(args as GenesysCloudFullApiOperationArgs<"getUserRoutinglanguages">)),
    GetUserRoutingskills: (...args) => callOperation("getUserRoutingskills", ...(args as GenesysCloudFullApiOperationArgs<"getUserRoutingskills">)),
    GetUserRoutingstatus: (...args) => callOperation("getUserRoutingstatus", ...(args as GenesysCloudFullApiOperationArgs<"getUserRoutingstatus">)),
    GetUsers: (...args) => callOperation("getUsers", ...(args as GenesysCloudFullApiOperationArgs<"getUsers">)),
    GetUsersChatsMe: (...args) => callOperation("getUsersChatsMe", ...(args as GenesysCloudFullApiOperationArgs<"getUsersChatsMe">)),
    GetUsersCustomattributesSchema: (...args) => callOperation("getUsersCustomattributesSchema", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchema">)),
    GetUsersCustomattributesSchemas: (...args) => callOperation("getUsersCustomattributesSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemas">)),
    GetUsersCustomattributesSchemasCoretype: (...args) => callOperation("getUsersCustomattributesSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemasCoretype">)),
    GetUsersCustomattributesSchemasCoretypes: (...args) => callOperation("getUsersCustomattributesSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemasCoretypes">)),
    GetUsersCustomattributesSchemasLimits: (...args) => callOperation("getUsersCustomattributesSchemasLimits", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemasLimits">)),
    GetUsersCustomattributesSchemaVersion: (...args) => callOperation("getUsersCustomattributesSchemaVersion", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemaVersion">)),
    GetUsersCustomattributesSchemaVersions: (...args) => callOperation("getUsersCustomattributesSchemaVersions", ...(args as GenesysCloudFullApiOperationArgs<"getUsersCustomattributesSchemaVersions">)),
    GetUsersDevelopmentActivities: (...args) => callOperation("getUsersDevelopmentActivities", ...(args as GenesysCloudFullApiOperationArgs<"getUsersDevelopmentActivities">)),
    GetUsersDevelopmentActivitiesMe: (...args) => callOperation("getUsersDevelopmentActivitiesMe", ...(args as GenesysCloudFullApiOperationArgs<"getUsersDevelopmentActivitiesMe">)),
    GetUsersDevelopmentActivity: (...args) => callOperation("getUsersDevelopmentActivity", ...(args as GenesysCloudFullApiOperationArgs<"getUsersDevelopmentActivity">)),
    GetUsersExternalidAuthorityNameExternalKey: (...args) => callOperation("getUsersExternalidAuthorityNameExternalKey", ...(args as GenesysCloudFullApiOperationArgs<"getUsersExternalidAuthorityNameExternalKey">)),
    GetUsersMe: (...args) => callOperation("getUsersMe", ...(args as GenesysCloudFullApiOperationArgs<"getUsersMe">)),
    GetUsersQuery: (...args) => callOperation("getUsersQuery", ...(args as GenesysCloudFullApiOperationArgs<"getUsersQuery">)),
    GetUsersSearch: (...args) => callOperation("getUsersSearch", ...(args as GenesysCloudFullApiOperationArgs<"getUsersSearch">)),
    GetUsersStationsMe: (...args) => callOperation("getUsersStationsMe", ...(args as GenesysCloudFullApiOperationArgs<"getUsersStationsMe">)),
    GetUserState: (...args) => callOperation("getUserState", ...(args as GenesysCloudFullApiOperationArgs<"getUserState">)),
    GetUserStation: (...args) => callOperation("getUserStation", ...(args as GenesysCloudFullApiOperationArgs<"getUserStation">)),
    GetUserSuperiors: (...args) => callOperation("getUserSuperiors", ...(args as GenesysCloudFullApiOperationArgs<"getUserSuperiors">)),
    GetUserTrustors: (...args) => callOperation("getUserTrustors", ...(args as GenesysCloudFullApiOperationArgs<"getUserTrustors">)),
    GetUserVerifiers: (...args) => callOperation("getUserVerifiers", ...(args as GenesysCloudFullApiOperationArgs<"getUserVerifiers">)),
    PatchUser: (...args) => callOperation("patchUser", ...(args as GenesysCloudFullApiOperationArgs<"patchUser">)),
    PatchUserCallforwarding: (...args) => callOperation("patchUserCallforwarding", ...(args as GenesysCloudFullApiOperationArgs<"patchUserCallforwarding">)),
    PatchUserCustomattributes: (...args) => callOperation("patchUserCustomattributes", ...(args as GenesysCloudFullApiOperationArgs<"patchUserCustomattributes">)),
    PatchUserCustomattributesBulk: (...args) => callOperation("patchUserCustomattributesBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchUserCustomattributesBulk">)),
    PatchUserRoutinglanguage: (...args) => callOperation("patchUserRoutinglanguage", ...(args as GenesysCloudFullApiOperationArgs<"patchUserRoutinglanguage">)),
    PatchUserRoutinglanguagesBulk: (...args) => callOperation("patchUserRoutinglanguagesBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchUserRoutinglanguagesBulk">)),
    PatchUserRoutingskillsBulk: (...args) => callOperation("patchUserRoutingskillsBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchUserRoutingskillsBulk">)),
    PatchUsersBulk: (...args) => callOperation("patchUsersBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchUsersBulk">)),
    PostUserExternalid: (...args) => callOperation("postUserExternalid", ...(args as GenesysCloudFullApiOperationArgs<"postUserExternalid">)),
    PostUserInvite: (...args) => callOperation("postUserInvite", ...(args as GenesysCloudFullApiOperationArgs<"postUserInvite">)),
    PostUserPassword: (...args) => callOperation("postUserPassword", ...(args as GenesysCloudFullApiOperationArgs<"postUserPassword">)),
    PostUserRoutinglanguages: (...args) => callOperation("postUserRoutinglanguages", ...(args as GenesysCloudFullApiOperationArgs<"postUserRoutinglanguages">)),
    PostUserRoutingskills: (...args) => callOperation("postUserRoutingskills", ...(args as GenesysCloudFullApiOperationArgs<"postUserRoutingskills">)),
    PostUsers: (...args) => callOperation("postUsers", ...(args as GenesysCloudFullApiOperationArgs<"postUsers">)),
    PostUsersCustomattributesSchemas: (...args) => callOperation("postUsersCustomattributesSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postUsersCustomattributesSchemas">)),
    PostUsersDevelopmentActivitiesAggregatesQuery: (...args) => callOperation("postUsersDevelopmentActivitiesAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postUsersDevelopmentActivitiesAggregatesQuery">)),
    PostUsersMePassword: (...args) => callOperation("postUsersMePassword", ...(args as GenesysCloudFullApiOperationArgs<"postUsersMePassword">)),
    PostUsersSearch: (...args) => callOperation("postUsersSearch", ...(args as GenesysCloudFullApiOperationArgs<"postUsersSearch">)),
    PostUsersSearchTeamsAssign: (...args) => callOperation("postUsersSearchTeamsAssign", ...(args as GenesysCloudFullApiOperationArgs<"postUsersSearchTeamsAssign">)),
    PutUserCallforwarding: (...args) => callOperation("putUserCallforwarding", ...(args as GenesysCloudFullApiOperationArgs<"putUserCallforwarding">)),
    PutUserCustomattributes: (...args) => callOperation("putUserCustomattributes", ...(args as GenesysCloudFullApiOperationArgs<"putUserCustomattributes">)),
    PutUserOutofoffice: (...args) => callOperation("putUserOutofoffice", ...(args as GenesysCloudFullApiOperationArgs<"putUserOutofoffice">)),
    PutUserProfileskills: (...args) => callOperation("putUserProfileskills", ...(args as GenesysCloudFullApiOperationArgs<"putUserProfileskills">)),
    PutUserRoutingskill: (...args) => callOperation("putUserRoutingskill", ...(args as GenesysCloudFullApiOperationArgs<"putUserRoutingskill">)),
    PutUserRoutingskillsBulk: (...args) => callOperation("putUserRoutingskillsBulk", ...(args as GenesysCloudFullApiOperationArgs<"putUserRoutingskillsBulk">)),
    PutUserRoutingstatus: (...args) => callOperation("putUserRoutingstatus", ...(args as GenesysCloudFullApiOperationArgs<"putUserRoutingstatus">)),
    PutUsersCustomattributesSchema: (...args) => callOperation("putUsersCustomattributesSchema", ...(args as GenesysCloudFullApiOperationArgs<"putUsersCustomattributesSchema">)),
    PutUsersStationsMeAssociatedstationStationId: (...args) => callOperation("putUsersStationsMeAssociatedstationStationId", ...(args as GenesysCloudFullApiOperationArgs<"putUsersStationsMeAssociatedstationStationId">)),
    PutUserState: (...args) => callOperation("putUserState", ...(args as GenesysCloudFullApiOperationArgs<"putUserState">)),
    PutUserStationAssociatedstationStationId: (...args) => callOperation("putUserStationAssociatedstationStationId", ...(args as GenesysCloudFullApiOperationArgs<"putUserStationAssociatedstationStationId">)),
    PutUserStationDefaultstationStationId: (...args) => callOperation("putUserStationDefaultstationStationId", ...(args as GenesysCloudFullApiOperationArgs<"putUserStationDefaultstationStationId">)),
  };
}
