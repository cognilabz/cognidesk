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
export const GenesysCloudFullApiOrganizationAuthorizationOperationKeys = [
  "deleteOrgauthorizationTrustee",
  "deleteOrgauthorizationTrusteeCloneduser",
  "deleteOrgauthorizationTrusteeGroup",
  "deleteOrgauthorizationTrusteeGroupRoles",
  "deleteOrgauthorizationTrusteeUser",
  "deleteOrgauthorizationTrusteeUserRoles",
  "deleteOrgauthorizationTrustor",
  "deleteOrgauthorizationTrustorCloneduser",
  "deleteOrgauthorizationTrustorGroup",
  "deleteOrgauthorizationTrustorUser",
  "getOrgauthorizationPairing",
  "getOrgauthorizationTrustee",
  "getOrgauthorizationTrusteeClonedusers",
  "getOrgauthorizationTrusteeGroup",
  "getOrgauthorizationTrusteeGroupRoles",
  "getOrgauthorizationTrusteeGroups",
  "getOrgauthorizationTrustees",
  "getOrgauthorizationTrusteesCare",
  "getOrgauthorizationTrusteesDefault",
  "getOrgauthorizationTrusteeUser",
  "getOrgauthorizationTrusteeUserRoles",
  "getOrgauthorizationTrusteeUsers",
  "getOrgauthorizationTrustor",
  "getOrgauthorizationTrustorCloneduser",
  "getOrgauthorizationTrustorClonedusers",
  "getOrgauthorizationTrustorGroup",
  "getOrgauthorizationTrustorGroups",
  "getOrgauthorizationTrustors",
  "getOrgauthorizationTrustorUser",
  "getOrgauthorizationTrustorUsers",
  "postOrgauthorizationPairings",
  "postOrgauthorizationTrusteeGroups",
  "postOrgauthorizationTrustees",
  "postOrgauthorizationTrusteesAudits",
  "postOrgauthorizationTrusteesCare",
  "postOrgauthorizationTrusteesDefault",
  "postOrgauthorizationTrusteeUsers",
  "postOrgauthorizationTrustorAudits",
  "putOrgauthorizationTrustee",
  "putOrgauthorizationTrusteeGroupRoledivisions",
  "putOrgauthorizationTrusteeGroupRoles",
  "putOrgauthorizationTrusteeUserRoledivisions",
  "putOrgauthorizationTrusteeUserRoles",
  "putOrgauthorizationTrustorCloneduser",
  "putOrgauthorizationTrustorGroup",
  "putOrgauthorizationTrustorUser"
] as const;
export type GenesysCloudFullApiOrganizationAuthorizationOperationKey = typeof GenesysCloudFullApiOrganizationAuthorizationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiOrganizationAuthorizationOperationPathParamMap {
  "deleteOrgauthorizationTrustee": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrusteeCloneduser": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrusteeGroup": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeGroupId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrusteeGroupRoles": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeGroupId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrusteeUser": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrusteeUserRoles": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrustor": { "trustorOrgId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrustorCloneduser": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrustorGroup": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trustorGroupId": GenesysCloudFullApiPathParamValue };
  "deleteOrgauthorizationTrustorUser": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationPairing": { "pairingId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustee": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrusteeClonedusers": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrusteeGroup": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeGroupId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrusteeGroupRoles": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeGroupId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrusteeGroups": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustees": {};
  "getOrgauthorizationTrusteesCare": {};
  "getOrgauthorizationTrusteesDefault": {};
  "getOrgauthorizationTrusteeUser": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrusteeUserRoles": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrusteeUsers": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustor": { "trustorOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustorCloneduser": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustorClonedusers": { "trustorOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustorGroup": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trustorGroupId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustorGroups": { "trustorOrgId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustors": {};
  "getOrgauthorizationTrustorUser": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "getOrgauthorizationTrustorUsers": { "trustorOrgId": GenesysCloudFullApiPathParamValue };
  "postOrgauthorizationPairings": {};
  "postOrgauthorizationTrusteeGroups": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "postOrgauthorizationTrustees": {};
  "postOrgauthorizationTrusteesAudits": {};
  "postOrgauthorizationTrusteesCare": {};
  "postOrgauthorizationTrusteesDefault": {};
  "postOrgauthorizationTrusteeUsers": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "postOrgauthorizationTrustorAudits": {};
  "putOrgauthorizationTrustee": { "trusteeOrgId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrusteeGroupRoledivisions": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeGroupId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrusteeGroupRoles": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeGroupId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrusteeUserRoledivisions": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrusteeUserRoles": { "trusteeOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrustorCloneduser": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrustorGroup": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trustorGroupId": GenesysCloudFullApiPathParamValue };
  "putOrgauthorizationTrustorUser": { "trustorOrgId": GenesysCloudFullApiPathParamValue; "trusteeUserId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiOrganizationAuthorizationOperationRequestMap {
  "deleteOrgauthorizationTrustee": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrustee">;
  "deleteOrgauthorizationTrusteeCloneduser": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrusteeCloneduser">;
  "deleteOrgauthorizationTrusteeGroup": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrusteeGroup">;
  "deleteOrgauthorizationTrusteeGroupRoles": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrusteeGroupRoles">;
  "deleteOrgauthorizationTrusteeUser": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrusteeUser">;
  "deleteOrgauthorizationTrusteeUserRoles": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrusteeUserRoles">;
  "deleteOrgauthorizationTrustor": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrustor">;
  "deleteOrgauthorizationTrustorCloneduser": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrustorCloneduser">;
  "deleteOrgauthorizationTrustorGroup": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrustorGroup">;
  "deleteOrgauthorizationTrustorUser": GenesysCloudFullApiOperationInput<"deleteOrgauthorizationTrustorUser">;
  "getOrgauthorizationPairing": GenesysCloudFullApiOperationInput<"getOrgauthorizationPairing">;
  "getOrgauthorizationTrustee": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustee">;
  "getOrgauthorizationTrusteeClonedusers": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeClonedusers">;
  "getOrgauthorizationTrusteeGroup": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeGroup">;
  "getOrgauthorizationTrusteeGroupRoles": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeGroupRoles">;
  "getOrgauthorizationTrusteeGroups": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeGroups">;
  "getOrgauthorizationTrustees": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustees">;
  "getOrgauthorizationTrusteesCare": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteesCare">;
  "getOrgauthorizationTrusteesDefault": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteesDefault">;
  "getOrgauthorizationTrusteeUser": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeUser">;
  "getOrgauthorizationTrusteeUserRoles": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeUserRoles">;
  "getOrgauthorizationTrusteeUsers": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrusteeUsers">;
  "getOrgauthorizationTrustor": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustor">;
  "getOrgauthorizationTrustorCloneduser": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustorCloneduser">;
  "getOrgauthorizationTrustorClonedusers": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustorClonedusers">;
  "getOrgauthorizationTrustorGroup": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustorGroup">;
  "getOrgauthorizationTrustorGroups": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustorGroups">;
  "getOrgauthorizationTrustors": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustors">;
  "getOrgauthorizationTrustorUser": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustorUser">;
  "getOrgauthorizationTrustorUsers": GenesysCloudFullApiOperationInput<"getOrgauthorizationTrustorUsers">;
  "postOrgauthorizationPairings": GenesysCloudFullApiOperationInput<"postOrgauthorizationPairings">;
  "postOrgauthorizationTrusteeGroups": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrusteeGroups">;
  "postOrgauthorizationTrustees": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrustees">;
  "postOrgauthorizationTrusteesAudits": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrusteesAudits">;
  "postOrgauthorizationTrusteesCare": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrusteesCare">;
  "postOrgauthorizationTrusteesDefault": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrusteesDefault">;
  "postOrgauthorizationTrusteeUsers": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrusteeUsers">;
  "postOrgauthorizationTrustorAudits": GenesysCloudFullApiOperationInput<"postOrgauthorizationTrustorAudits">;
  "putOrgauthorizationTrustee": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrustee">;
  "putOrgauthorizationTrusteeGroupRoledivisions": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrusteeGroupRoledivisions">;
  "putOrgauthorizationTrusteeGroupRoles": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrusteeGroupRoles">;
  "putOrgauthorizationTrusteeUserRoledivisions": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrusteeUserRoledivisions">;
  "putOrgauthorizationTrusteeUserRoles": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrusteeUserRoles">;
  "putOrgauthorizationTrustorCloneduser": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrustorCloneduser">;
  "putOrgauthorizationTrustorGroup": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrustorGroup">;
  "putOrgauthorizationTrustorUser": GenesysCloudFullApiOperationInput<"putOrgauthorizationTrustorUser">;
}

export interface GenesysCloudFullApiOrganizationAuthorizationGeneratedClient {
  DeleteOrgauthorizationTrustee(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustee">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrustee"]>;
  DeleteOrgauthorizationTrusteeCloneduser(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeCloneduser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrusteeCloneduser"]>;
  DeleteOrgauthorizationTrusteeGroup(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeGroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrusteeGroup"]>;
  DeleteOrgauthorizationTrusteeGroupRoles(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeGroupRoles">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrusteeGroupRoles"]>;
  DeleteOrgauthorizationTrusteeUser(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeUser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrusteeUser"]>;
  DeleteOrgauthorizationTrusteeUserRoles(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeUserRoles">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrusteeUserRoles"]>;
  DeleteOrgauthorizationTrustor(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustor">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrustor"]>;
  DeleteOrgauthorizationTrustorCloneduser(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustorCloneduser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrustorCloneduser"]>;
  DeleteOrgauthorizationTrustorGroup(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustorGroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrustorGroup"]>;
  DeleteOrgauthorizationTrustorUser(...args: GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustorUser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteOrgauthorizationTrustorUser"]>;
  GetOrgauthorizationPairing(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationPairing">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationPairing"]>;
  GetOrgauthorizationTrustee(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustee">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustee"]>;
  GetOrgauthorizationTrusteeClonedusers(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeClonedusers">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeClonedusers"]>;
  GetOrgauthorizationTrusteeGroup(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeGroup"]>;
  GetOrgauthorizationTrusteeGroupRoles(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeGroupRoles">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeGroupRoles"]>;
  GetOrgauthorizationTrusteeGroups(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeGroups">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeGroups"]>;
  GetOrgauthorizationTrustees(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustees">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustees"]>;
  GetOrgauthorizationTrusteesCare(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteesCare">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteesCare"]>;
  GetOrgauthorizationTrusteesDefault(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteesDefault">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteesDefault"]>;
  GetOrgauthorizationTrusteeUser(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeUser">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeUser"]>;
  GetOrgauthorizationTrusteeUserRoles(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeUserRoles">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeUserRoles"]>;
  GetOrgauthorizationTrusteeUsers(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrusteeUsers"]>;
  GetOrgauthorizationTrustor(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustor">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustor"]>;
  GetOrgauthorizationTrustorCloneduser(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorCloneduser">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustorCloneduser"]>;
  GetOrgauthorizationTrustorClonedusers(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorClonedusers">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustorClonedusers"]>;
  GetOrgauthorizationTrustorGroup(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustorGroup"]>;
  GetOrgauthorizationTrustorGroups(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorGroups">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustorGroups"]>;
  GetOrgauthorizationTrustors(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustors">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustors"]>;
  GetOrgauthorizationTrustorUser(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorUser">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustorUser"]>;
  GetOrgauthorizationTrustorUsers(...args: GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getOrgauthorizationTrustorUsers"]>;
  PostOrgauthorizationPairings(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationPairings">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationPairings"]>;
  PostOrgauthorizationTrusteeGroups(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteeGroups">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrusteeGroups"]>;
  PostOrgauthorizationTrustees(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrustees">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrustees"]>;
  PostOrgauthorizationTrusteesAudits(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteesAudits">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrusteesAudits"]>;
  PostOrgauthorizationTrusteesCare(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteesCare">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrusteesCare"]>;
  PostOrgauthorizationTrusteesDefault(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteesDefault">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrusteesDefault"]>;
  PostOrgauthorizationTrusteeUsers(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteeUsers">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrusteeUsers"]>;
  PostOrgauthorizationTrustorAudits(...args: GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrustorAudits">): Promise<GenesysCloudFullApiOperationResponseMap["postOrgauthorizationTrustorAudits"]>;
  PutOrgauthorizationTrustee(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustee">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrustee"]>;
  PutOrgauthorizationTrusteeGroupRoledivisions(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeGroupRoledivisions">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrusteeGroupRoledivisions"]>;
  PutOrgauthorizationTrusteeGroupRoles(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeGroupRoles">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrusteeGroupRoles"]>;
  PutOrgauthorizationTrusteeUserRoledivisions(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeUserRoledivisions">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrusteeUserRoledivisions"]>;
  PutOrgauthorizationTrusteeUserRoles(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeUserRoles">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrusteeUserRoles"]>;
  PutOrgauthorizationTrustorCloneduser(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustorCloneduser">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrustorCloneduser"]>;
  PutOrgauthorizationTrustorGroup(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustorGroup">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrustorGroup"]>;
  PutOrgauthorizationTrustorUser(...args: GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustorUser">): Promise<GenesysCloudFullApiOperationResponseMap["putOrgauthorizationTrustorUser"]>;
}

export const GenesysCloudFullApiOrganizationAuthorizationGeneratedFunctionNames = [
  "DeleteOrgauthorizationTrustee",
  "DeleteOrgauthorizationTrusteeCloneduser",
  "DeleteOrgauthorizationTrusteeGroup",
  "DeleteOrgauthorizationTrusteeGroupRoles",
  "DeleteOrgauthorizationTrusteeUser",
  "DeleteOrgauthorizationTrusteeUserRoles",
  "DeleteOrgauthorizationTrustor",
  "DeleteOrgauthorizationTrustorCloneduser",
  "DeleteOrgauthorizationTrustorGroup",
  "DeleteOrgauthorizationTrustorUser",
  "GetOrgauthorizationPairing",
  "GetOrgauthorizationTrustee",
  "GetOrgauthorizationTrusteeClonedusers",
  "GetOrgauthorizationTrusteeGroup",
  "GetOrgauthorizationTrusteeGroupRoles",
  "GetOrgauthorizationTrusteeGroups",
  "GetOrgauthorizationTrustees",
  "GetOrgauthorizationTrusteesCare",
  "GetOrgauthorizationTrusteesDefault",
  "GetOrgauthorizationTrusteeUser",
  "GetOrgauthorizationTrusteeUserRoles",
  "GetOrgauthorizationTrusteeUsers",
  "GetOrgauthorizationTrustor",
  "GetOrgauthorizationTrustorCloneduser",
  "GetOrgauthorizationTrustorClonedusers",
  "GetOrgauthorizationTrustorGroup",
  "GetOrgauthorizationTrustorGroups",
  "GetOrgauthorizationTrustors",
  "GetOrgauthorizationTrustorUser",
  "GetOrgauthorizationTrustorUsers",
  "PostOrgauthorizationPairings",
  "PostOrgauthorizationTrusteeGroups",
  "PostOrgauthorizationTrustees",
  "PostOrgauthorizationTrusteesAudits",
  "PostOrgauthorizationTrusteesCare",
  "PostOrgauthorizationTrusteesDefault",
  "PostOrgauthorizationTrusteeUsers",
  "PostOrgauthorizationTrustorAudits",
  "PutOrgauthorizationTrustee",
  "PutOrgauthorizationTrusteeGroupRoledivisions",
  "PutOrgauthorizationTrusteeGroupRoles",
  "PutOrgauthorizationTrusteeUserRoledivisions",
  "PutOrgauthorizationTrusteeUserRoles",
  "PutOrgauthorizationTrustorCloneduser",
  "PutOrgauthorizationTrustorGroup",
  "PutOrgauthorizationTrustorUser"
] as const satisfies readonly (keyof GenesysCloudFullApiOrganizationAuthorizationGeneratedClient)[];

export function createGenesysCloudFullApiOrganizationAuthorizationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiOrganizationAuthorizationGeneratedClient {
  return {
    DeleteOrgauthorizationTrustee: (...args) => callOperation("deleteOrgauthorizationTrustee", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustee">)),
    DeleteOrgauthorizationTrusteeCloneduser: (...args) => callOperation("deleteOrgauthorizationTrusteeCloneduser", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeCloneduser">)),
    DeleteOrgauthorizationTrusteeGroup: (...args) => callOperation("deleteOrgauthorizationTrusteeGroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeGroup">)),
    DeleteOrgauthorizationTrusteeGroupRoles: (...args) => callOperation("deleteOrgauthorizationTrusteeGroupRoles", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeGroupRoles">)),
    DeleteOrgauthorizationTrusteeUser: (...args) => callOperation("deleteOrgauthorizationTrusteeUser", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeUser">)),
    DeleteOrgauthorizationTrusteeUserRoles: (...args) => callOperation("deleteOrgauthorizationTrusteeUserRoles", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrusteeUserRoles">)),
    DeleteOrgauthorizationTrustor: (...args) => callOperation("deleteOrgauthorizationTrustor", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustor">)),
    DeleteOrgauthorizationTrustorCloneduser: (...args) => callOperation("deleteOrgauthorizationTrustorCloneduser", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustorCloneduser">)),
    DeleteOrgauthorizationTrustorGroup: (...args) => callOperation("deleteOrgauthorizationTrustorGroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustorGroup">)),
    DeleteOrgauthorizationTrustorUser: (...args) => callOperation("deleteOrgauthorizationTrustorUser", ...(args as GenesysCloudFullApiOperationArgs<"deleteOrgauthorizationTrustorUser">)),
    GetOrgauthorizationPairing: (...args) => callOperation("getOrgauthorizationPairing", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationPairing">)),
    GetOrgauthorizationTrustee: (...args) => callOperation("getOrgauthorizationTrustee", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustee">)),
    GetOrgauthorizationTrusteeClonedusers: (...args) => callOperation("getOrgauthorizationTrusteeClonedusers", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeClonedusers">)),
    GetOrgauthorizationTrusteeGroup: (...args) => callOperation("getOrgauthorizationTrusteeGroup", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeGroup">)),
    GetOrgauthorizationTrusteeGroupRoles: (...args) => callOperation("getOrgauthorizationTrusteeGroupRoles", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeGroupRoles">)),
    GetOrgauthorizationTrusteeGroups: (...args) => callOperation("getOrgauthorizationTrusteeGroups", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeGroups">)),
    GetOrgauthorizationTrustees: (...args) => callOperation("getOrgauthorizationTrustees", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustees">)),
    GetOrgauthorizationTrusteesCare: (...args) => callOperation("getOrgauthorizationTrusteesCare", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteesCare">)),
    GetOrgauthorizationTrusteesDefault: (...args) => callOperation("getOrgauthorizationTrusteesDefault", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteesDefault">)),
    GetOrgauthorizationTrusteeUser: (...args) => callOperation("getOrgauthorizationTrusteeUser", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeUser">)),
    GetOrgauthorizationTrusteeUserRoles: (...args) => callOperation("getOrgauthorizationTrusteeUserRoles", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeUserRoles">)),
    GetOrgauthorizationTrusteeUsers: (...args) => callOperation("getOrgauthorizationTrusteeUsers", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrusteeUsers">)),
    GetOrgauthorizationTrustor: (...args) => callOperation("getOrgauthorizationTrustor", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustor">)),
    GetOrgauthorizationTrustorCloneduser: (...args) => callOperation("getOrgauthorizationTrustorCloneduser", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorCloneduser">)),
    GetOrgauthorizationTrustorClonedusers: (...args) => callOperation("getOrgauthorizationTrustorClonedusers", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorClonedusers">)),
    GetOrgauthorizationTrustorGroup: (...args) => callOperation("getOrgauthorizationTrustorGroup", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorGroup">)),
    GetOrgauthorizationTrustorGroups: (...args) => callOperation("getOrgauthorizationTrustorGroups", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorGroups">)),
    GetOrgauthorizationTrustors: (...args) => callOperation("getOrgauthorizationTrustors", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustors">)),
    GetOrgauthorizationTrustorUser: (...args) => callOperation("getOrgauthorizationTrustorUser", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorUser">)),
    GetOrgauthorizationTrustorUsers: (...args) => callOperation("getOrgauthorizationTrustorUsers", ...(args as GenesysCloudFullApiOperationArgs<"getOrgauthorizationTrustorUsers">)),
    PostOrgauthorizationPairings: (...args) => callOperation("postOrgauthorizationPairings", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationPairings">)),
    PostOrgauthorizationTrusteeGroups: (...args) => callOperation("postOrgauthorizationTrusteeGroups", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteeGroups">)),
    PostOrgauthorizationTrustees: (...args) => callOperation("postOrgauthorizationTrustees", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrustees">)),
    PostOrgauthorizationTrusteesAudits: (...args) => callOperation("postOrgauthorizationTrusteesAudits", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteesAudits">)),
    PostOrgauthorizationTrusteesCare: (...args) => callOperation("postOrgauthorizationTrusteesCare", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteesCare">)),
    PostOrgauthorizationTrusteesDefault: (...args) => callOperation("postOrgauthorizationTrusteesDefault", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteesDefault">)),
    PostOrgauthorizationTrusteeUsers: (...args) => callOperation("postOrgauthorizationTrusteeUsers", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrusteeUsers">)),
    PostOrgauthorizationTrustorAudits: (...args) => callOperation("postOrgauthorizationTrustorAudits", ...(args as GenesysCloudFullApiOperationArgs<"postOrgauthorizationTrustorAudits">)),
    PutOrgauthorizationTrustee: (...args) => callOperation("putOrgauthorizationTrustee", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustee">)),
    PutOrgauthorizationTrusteeGroupRoledivisions: (...args) => callOperation("putOrgauthorizationTrusteeGroupRoledivisions", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeGroupRoledivisions">)),
    PutOrgauthorizationTrusteeGroupRoles: (...args) => callOperation("putOrgauthorizationTrusteeGroupRoles", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeGroupRoles">)),
    PutOrgauthorizationTrusteeUserRoledivisions: (...args) => callOperation("putOrgauthorizationTrusteeUserRoledivisions", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeUserRoledivisions">)),
    PutOrgauthorizationTrusteeUserRoles: (...args) => callOperation("putOrgauthorizationTrusteeUserRoles", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrusteeUserRoles">)),
    PutOrgauthorizationTrustorCloneduser: (...args) => callOperation("putOrgauthorizationTrustorCloneduser", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustorCloneduser">)),
    PutOrgauthorizationTrustorGroup: (...args) => callOperation("putOrgauthorizationTrustorGroup", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustorGroup">)),
    PutOrgauthorizationTrustorUser: (...args) => callOperation("putOrgauthorizationTrustorUser", ...(args as GenesysCloudFullApiOperationArgs<"putOrgauthorizationTrustorUser">)),
  };
}
