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
export const GenesysCloudFullApiAuthorizationOperationKeys = [
  "deleteAuthorizationDivision",
  "deleteAuthorizationPoliciesTargetSubjectSubjectId",
  "deleteAuthorizationRole",
  "deleteAuthorizationSubjectDivisionRole",
  "getAuthorizationDivision",
  "getAuthorizationDivisionGrants",
  "getAuthorizationDivisions",
  "getAuthorizationDivisionsDeleted",
  "getAuthorizationDivisionsHome",
  "getAuthorizationDivisionsLimit",
  "getAuthorizationDivisionspermittedMe",
  "getAuthorizationDivisionspermittedPagedMe",
  "getAuthorizationDivisionspermittedPagedSubjectId",
  "getAuthorizationDivisionsQuery",
  "getAuthorizationPermissions",
  "getAuthorizationPolicies",
  "getAuthorizationPoliciesSubjectSubjectId",
  "getAuthorizationPoliciesTarget",
  "getAuthorizationPoliciesTargets",
  "getAuthorizationPoliciesTargetSubjectSubjectId",
  "getAuthorizationPolicy",
  "getAuthorizationPolicyAttributes",
  "getAuthorizationProducts",
  "getAuthorizationRole",
  "getAuthorizationRoleComparedefaultRightRoleId",
  "getAuthorizationRoles",
  "getAuthorizationRolesSettings",
  "getAuthorizationRoleSubjectgrants",
  "getAuthorizationRoleUsers",
  "getAuthorizationSettings",
  "getAuthorizationSubject",
  "getAuthorizationSubjectsMe",
  "getAuthorizationSubjectsRolecounts",
  "getUserRoles",
  "patchAuthorizationRole",
  "patchAuthorizationSettings",
  "postAuthorizationDivisionObject",
  "postAuthorizationDivisionRestore",
  "postAuthorizationDivisions",
  "postAuthorizationPoliciesTarget",
  "postAuthorizationPoliciesTargetValidate",
  "postAuthorizationPolicySimulate",
  "postAuthorizationRole",
  "postAuthorizationRoleComparedefaultRightRoleId",
  "postAuthorizationRoles",
  "postAuthorizationRolesDefault",
  "postAuthorizationSubjectBulkadd",
  "postAuthorizationSubjectBulkremove",
  "postAuthorizationSubjectBulkreplace",
  "postAuthorizationSubjectDivisionRole",
  "putAuthorizationDivision",
  "putAuthorizationPoliciesTarget",
  "putAuthorizationPolicy",
  "putAuthorizationRole",
  "putAuthorizationRolesDefault",
  "putAuthorizationRolesSettings",
  "putAuthorizationRoleUsersAdd",
  "putAuthorizationRoleUsersRemove",
  "putUserRoles"
] as const;
export type GenesysCloudFullApiAuthorizationOperationKey = typeof GenesysCloudFullApiAuthorizationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAuthorizationOperationPathParamMap {
  "deleteAuthorizationDivision": { "divisionId": GenesysCloudFullApiPathParamValue };
  "deleteAuthorizationPoliciesTargetSubjectSubjectId": { "targetName": GenesysCloudFullApiPathParamValue; "subjectId": GenesysCloudFullApiPathParamValue };
  "deleteAuthorizationRole": { "roleId": GenesysCloudFullApiPathParamValue };
  "deleteAuthorizationSubjectDivisionRole": { "subjectId": GenesysCloudFullApiPathParamValue; "divisionId": GenesysCloudFullApiPathParamValue; "roleId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationDivision": { "divisionId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationDivisionGrants": { "divisionId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationDivisions": {};
  "getAuthorizationDivisionsDeleted": {};
  "getAuthorizationDivisionsHome": {};
  "getAuthorizationDivisionsLimit": {};
  "getAuthorizationDivisionspermittedMe": {};
  "getAuthorizationDivisionspermittedPagedMe": {};
  "getAuthorizationDivisionspermittedPagedSubjectId": { "subjectId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationDivisionsQuery": {};
  "getAuthorizationPermissions": {};
  "getAuthorizationPolicies": {};
  "getAuthorizationPoliciesSubjectSubjectId": { "subjectId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationPoliciesTarget": { "targetName": GenesysCloudFullApiPathParamValue };
  "getAuthorizationPoliciesTargets": {};
  "getAuthorizationPoliciesTargetSubjectSubjectId": { "targetName": GenesysCloudFullApiPathParamValue; "subjectId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationPolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationPolicyAttributes": { "policyId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationProducts": {};
  "getAuthorizationRole": { "roleId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationRoleComparedefaultRightRoleId": { "leftRoleId": GenesysCloudFullApiPathParamValue; "rightRoleId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationRoles": {};
  "getAuthorizationRolesSettings": {};
  "getAuthorizationRoleSubjectgrants": { "roleId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationRoleUsers": { "roleId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationSettings": {};
  "getAuthorizationSubject": { "subjectId": GenesysCloudFullApiPathParamValue };
  "getAuthorizationSubjectsMe": {};
  "getAuthorizationSubjectsRolecounts": {};
  "getUserRoles": { "subjectId": GenesysCloudFullApiPathParamValue };
  "patchAuthorizationRole": { "roleId": GenesysCloudFullApiPathParamValue };
  "patchAuthorizationSettings": {};
  "postAuthorizationDivisionObject": { "divisionId": GenesysCloudFullApiPathParamValue; "objectType": GenesysCloudFullApiPathParamValue };
  "postAuthorizationDivisionRestore": { "divisionId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationDivisions": {};
  "postAuthorizationPoliciesTarget": { "targetName": GenesysCloudFullApiPathParamValue };
  "postAuthorizationPoliciesTargetValidate": { "targetName": GenesysCloudFullApiPathParamValue };
  "postAuthorizationPolicySimulate": { "policyId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationRole": { "roleId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationRoleComparedefaultRightRoleId": { "leftRoleId": GenesysCloudFullApiPathParamValue; "rightRoleId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationRoles": {};
  "postAuthorizationRolesDefault": {};
  "postAuthorizationSubjectBulkadd": { "subjectId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationSubjectBulkremove": { "subjectId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationSubjectBulkreplace": { "subjectId": GenesysCloudFullApiPathParamValue };
  "postAuthorizationSubjectDivisionRole": { "subjectId": GenesysCloudFullApiPathParamValue; "divisionId": GenesysCloudFullApiPathParamValue; "roleId": GenesysCloudFullApiPathParamValue };
  "putAuthorizationDivision": { "divisionId": GenesysCloudFullApiPathParamValue };
  "putAuthorizationPoliciesTarget": { "targetName": GenesysCloudFullApiPathParamValue };
  "putAuthorizationPolicy": { "policyId": GenesysCloudFullApiPathParamValue };
  "putAuthorizationRole": { "roleId": GenesysCloudFullApiPathParamValue };
  "putAuthorizationRolesDefault": {};
  "putAuthorizationRolesSettings": {};
  "putAuthorizationRoleUsersAdd": { "roleId": GenesysCloudFullApiPathParamValue };
  "putAuthorizationRoleUsersRemove": { "roleId": GenesysCloudFullApiPathParamValue };
  "putUserRoles": { "subjectId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiAuthorizationOperationRequestMap {
  "deleteAuthorizationDivision": GenesysCloudFullApiOperationInput<"deleteAuthorizationDivision">;
  "deleteAuthorizationPoliciesTargetSubjectSubjectId": GenesysCloudFullApiOperationInput<"deleteAuthorizationPoliciesTargetSubjectSubjectId">;
  "deleteAuthorizationRole": GenesysCloudFullApiOperationInput<"deleteAuthorizationRole">;
  "deleteAuthorizationSubjectDivisionRole": GenesysCloudFullApiOperationInput<"deleteAuthorizationSubjectDivisionRole">;
  "getAuthorizationDivision": GenesysCloudFullApiOperationInput<"getAuthorizationDivision">;
  "getAuthorizationDivisionGrants": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionGrants">;
  "getAuthorizationDivisions": GenesysCloudFullApiOperationInput<"getAuthorizationDivisions">;
  "getAuthorizationDivisionsDeleted": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionsDeleted">;
  "getAuthorizationDivisionsHome": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionsHome">;
  "getAuthorizationDivisionsLimit": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionsLimit">;
  "getAuthorizationDivisionspermittedMe": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionspermittedMe">;
  "getAuthorizationDivisionspermittedPagedMe": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionspermittedPagedMe">;
  "getAuthorizationDivisionspermittedPagedSubjectId": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionspermittedPagedSubjectId">;
  "getAuthorizationDivisionsQuery": GenesysCloudFullApiOperationInput<"getAuthorizationDivisionsQuery">;
  "getAuthorizationPermissions": GenesysCloudFullApiOperationInput<"getAuthorizationPermissions">;
  "getAuthorizationPolicies": GenesysCloudFullApiOperationInput<"getAuthorizationPolicies">;
  "getAuthorizationPoliciesSubjectSubjectId": GenesysCloudFullApiOperationInput<"getAuthorizationPoliciesSubjectSubjectId">;
  "getAuthorizationPoliciesTarget": GenesysCloudFullApiOperationInput<"getAuthorizationPoliciesTarget">;
  "getAuthorizationPoliciesTargets": GenesysCloudFullApiOperationInput<"getAuthorizationPoliciesTargets">;
  "getAuthorizationPoliciesTargetSubjectSubjectId": GenesysCloudFullApiOperationInput<"getAuthorizationPoliciesTargetSubjectSubjectId">;
  "getAuthorizationPolicy": GenesysCloudFullApiOperationInput<"getAuthorizationPolicy">;
  "getAuthorizationPolicyAttributes": GenesysCloudFullApiOperationInput<"getAuthorizationPolicyAttributes">;
  "getAuthorizationProducts": GenesysCloudFullApiOperationInput<"getAuthorizationProducts">;
  "getAuthorizationRole": GenesysCloudFullApiOperationInput<"getAuthorizationRole">;
  "getAuthorizationRoleComparedefaultRightRoleId": GenesysCloudFullApiOperationInput<"getAuthorizationRoleComparedefaultRightRoleId">;
  "getAuthorizationRoles": GenesysCloudFullApiOperationInput<"getAuthorizationRoles">;
  "getAuthorizationRolesSettings": GenesysCloudFullApiOperationInput<"getAuthorizationRolesSettings">;
  "getAuthorizationRoleSubjectgrants": GenesysCloudFullApiOperationInput<"getAuthorizationRoleSubjectgrants">;
  "getAuthorizationRoleUsers": GenesysCloudFullApiOperationInput<"getAuthorizationRoleUsers">;
  "getAuthorizationSettings": GenesysCloudFullApiOperationInput<"getAuthorizationSettings">;
  "getAuthorizationSubject": GenesysCloudFullApiOperationInput<"getAuthorizationSubject">;
  "getAuthorizationSubjectsMe": GenesysCloudFullApiOperationInput<"getAuthorizationSubjectsMe">;
  "getAuthorizationSubjectsRolecounts": GenesysCloudFullApiOperationInput<"getAuthorizationSubjectsRolecounts">;
  "getUserRoles": GenesysCloudFullApiOperationInput<"getUserRoles">;
  "patchAuthorizationRole": GenesysCloudFullApiOperationInput<"patchAuthorizationRole">;
  "patchAuthorizationSettings": GenesysCloudFullApiOperationInput<"patchAuthorizationSettings">;
  "postAuthorizationDivisionObject": GenesysCloudFullApiOperationInput<"postAuthorizationDivisionObject">;
  "postAuthorizationDivisionRestore": GenesysCloudFullApiOperationInput<"postAuthorizationDivisionRestore">;
  "postAuthorizationDivisions": GenesysCloudFullApiOperationInput<"postAuthorizationDivisions">;
  "postAuthorizationPoliciesTarget": GenesysCloudFullApiOperationInput<"postAuthorizationPoliciesTarget">;
  "postAuthorizationPoliciesTargetValidate": GenesysCloudFullApiOperationInput<"postAuthorizationPoliciesTargetValidate">;
  "postAuthorizationPolicySimulate": GenesysCloudFullApiOperationInput<"postAuthorizationPolicySimulate">;
  "postAuthorizationRole": GenesysCloudFullApiOperationInput<"postAuthorizationRole">;
  "postAuthorizationRoleComparedefaultRightRoleId": GenesysCloudFullApiOperationInput<"postAuthorizationRoleComparedefaultRightRoleId">;
  "postAuthorizationRoles": GenesysCloudFullApiOperationInput<"postAuthorizationRoles">;
  "postAuthorizationRolesDefault": GenesysCloudFullApiOperationInput<"postAuthorizationRolesDefault">;
  "postAuthorizationSubjectBulkadd": GenesysCloudFullApiOperationInput<"postAuthorizationSubjectBulkadd">;
  "postAuthorizationSubjectBulkremove": GenesysCloudFullApiOperationInput<"postAuthorizationSubjectBulkremove">;
  "postAuthorizationSubjectBulkreplace": GenesysCloudFullApiOperationInput<"postAuthorizationSubjectBulkreplace">;
  "postAuthorizationSubjectDivisionRole": GenesysCloudFullApiOperationInput<"postAuthorizationSubjectDivisionRole">;
  "putAuthorizationDivision": GenesysCloudFullApiOperationInput<"putAuthorizationDivision">;
  "putAuthorizationPoliciesTarget": GenesysCloudFullApiOperationInput<"putAuthorizationPoliciesTarget">;
  "putAuthorizationPolicy": GenesysCloudFullApiOperationInput<"putAuthorizationPolicy">;
  "putAuthorizationRole": GenesysCloudFullApiOperationInput<"putAuthorizationRole">;
  "putAuthorizationRolesDefault": GenesysCloudFullApiOperationInput<"putAuthorizationRolesDefault">;
  "putAuthorizationRolesSettings": GenesysCloudFullApiOperationInput<"putAuthorizationRolesSettings">;
  "putAuthorizationRoleUsersAdd": GenesysCloudFullApiOperationInput<"putAuthorizationRoleUsersAdd">;
  "putAuthorizationRoleUsersRemove": GenesysCloudFullApiOperationInput<"putAuthorizationRoleUsersRemove">;
  "putUserRoles": GenesysCloudFullApiOperationInput<"putUserRoles">;
}

export interface GenesysCloudFullApiAuthorizationGeneratedClient {
  DeleteAuthorizationDivision(...args: GenesysCloudFullApiOperationArgs<"deleteAuthorizationDivision">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAuthorizationDivision"]>;
  DeleteAuthorizationPoliciesTargetSubjectSubjectId(...args: GenesysCloudFullApiOperationArgs<"deleteAuthorizationPoliciesTargetSubjectSubjectId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAuthorizationPoliciesTargetSubjectSubjectId"]>;
  DeleteAuthorizationRole(...args: GenesysCloudFullApiOperationArgs<"deleteAuthorizationRole">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAuthorizationRole"]>;
  DeleteAuthorizationSubjectDivisionRole(...args: GenesysCloudFullApiOperationArgs<"deleteAuthorizationSubjectDivisionRole">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAuthorizationSubjectDivisionRole"]>;
  GetAuthorizationDivision(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivision">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivision"]>;
  GetAuthorizationDivisionGrants(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionGrants">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionGrants"]>;
  GetAuthorizationDivisions(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisions">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisions"]>;
  GetAuthorizationDivisionsDeleted(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsDeleted">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionsDeleted"]>;
  GetAuthorizationDivisionsHome(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsHome">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionsHome"]>;
  GetAuthorizationDivisionsLimit(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsLimit">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionsLimit"]>;
  GetAuthorizationDivisionspermittedMe(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionspermittedMe">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionspermittedMe"]>;
  GetAuthorizationDivisionspermittedPagedMe(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionspermittedPagedMe">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionspermittedPagedMe"]>;
  GetAuthorizationDivisionspermittedPagedSubjectId(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionspermittedPagedSubjectId">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionspermittedPagedSubjectId"]>;
  GetAuthorizationDivisionsQuery(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationDivisionsQuery"]>;
  GetAuthorizationPermissions(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPermissions">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPermissions"]>;
  GetAuthorizationPolicies(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPolicies">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPolicies"]>;
  GetAuthorizationPoliciesSubjectSubjectId(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesSubjectSubjectId">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPoliciesSubjectSubjectId"]>;
  GetAuthorizationPoliciesTarget(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesTarget">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPoliciesTarget"]>;
  GetAuthorizationPoliciesTargets(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesTargets">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPoliciesTargets"]>;
  GetAuthorizationPoliciesTargetSubjectSubjectId(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesTargetSubjectSubjectId">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPoliciesTargetSubjectSubjectId"]>;
  GetAuthorizationPolicy(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPolicy">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPolicy"]>;
  GetAuthorizationPolicyAttributes(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationPolicyAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationPolicyAttributes"]>;
  GetAuthorizationProducts(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationProducts">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationProducts"]>;
  GetAuthorizationRole(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationRole">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationRole"]>;
  GetAuthorizationRoleComparedefaultRightRoleId(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationRoleComparedefaultRightRoleId">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationRoleComparedefaultRightRoleId"]>;
  GetAuthorizationRoles(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationRoles">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationRoles"]>;
  GetAuthorizationRolesSettings(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationRolesSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationRolesSettings"]>;
  GetAuthorizationRoleSubjectgrants(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationRoleSubjectgrants">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationRoleSubjectgrants"]>;
  GetAuthorizationRoleUsers(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationRoleUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationRoleUsers"]>;
  GetAuthorizationSettings(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationSettings"]>;
  GetAuthorizationSubject(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationSubject">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationSubject"]>;
  GetAuthorizationSubjectsMe(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationSubjectsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationSubjectsMe"]>;
  GetAuthorizationSubjectsRolecounts(...args: GenesysCloudFullApiOperationArgs<"getAuthorizationSubjectsRolecounts">): Promise<GenesysCloudFullApiOperationResponseMap["getAuthorizationSubjectsRolecounts"]>;
  GetUserRoles(...args: GenesysCloudFullApiOperationArgs<"getUserRoles">): Promise<GenesysCloudFullApiOperationResponseMap["getUserRoles"]>;
  PatchAuthorizationRole(...args: GenesysCloudFullApiOperationArgs<"patchAuthorizationRole">): Promise<GenesysCloudFullApiOperationResponseMap["patchAuthorizationRole"]>;
  PatchAuthorizationSettings(...args: GenesysCloudFullApiOperationArgs<"patchAuthorizationSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchAuthorizationSettings"]>;
  PostAuthorizationDivisionObject(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationDivisionObject">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationDivisionObject"]>;
  PostAuthorizationDivisionRestore(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationDivisionRestore">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationDivisionRestore"]>;
  PostAuthorizationDivisions(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationDivisions">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationDivisions"]>;
  PostAuthorizationPoliciesTarget(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationPoliciesTarget">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationPoliciesTarget"]>;
  PostAuthorizationPoliciesTargetValidate(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationPoliciesTargetValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationPoliciesTargetValidate"]>;
  PostAuthorizationPolicySimulate(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationPolicySimulate">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationPolicySimulate"]>;
  PostAuthorizationRole(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationRole">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationRole"]>;
  PostAuthorizationRoleComparedefaultRightRoleId(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationRoleComparedefaultRightRoleId">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationRoleComparedefaultRightRoleId"]>;
  PostAuthorizationRoles(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationRoles">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationRoles"]>;
  PostAuthorizationRolesDefault(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationRolesDefault">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationRolesDefault"]>;
  PostAuthorizationSubjectBulkadd(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectBulkadd">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationSubjectBulkadd"]>;
  PostAuthorizationSubjectBulkremove(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectBulkremove">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationSubjectBulkremove"]>;
  PostAuthorizationSubjectBulkreplace(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectBulkreplace">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationSubjectBulkreplace"]>;
  PostAuthorizationSubjectDivisionRole(...args: GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectDivisionRole">): Promise<GenesysCloudFullApiOperationResponseMap["postAuthorizationSubjectDivisionRole"]>;
  PutAuthorizationDivision(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationDivision">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationDivision"]>;
  PutAuthorizationPoliciesTarget(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationPoliciesTarget">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationPoliciesTarget"]>;
  PutAuthorizationPolicy(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationPolicy">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationPolicy"]>;
  PutAuthorizationRole(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationRole">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationRole"]>;
  PutAuthorizationRolesDefault(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationRolesDefault">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationRolesDefault"]>;
  PutAuthorizationRolesSettings(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationRolesSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationRolesSettings"]>;
  PutAuthorizationRoleUsersAdd(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationRoleUsersAdd">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationRoleUsersAdd"]>;
  PutAuthorizationRoleUsersRemove(...args: GenesysCloudFullApiOperationArgs<"putAuthorizationRoleUsersRemove">): Promise<GenesysCloudFullApiOperationResponseMap["putAuthorizationRoleUsersRemove"]>;
  PutUserRoles(...args: GenesysCloudFullApiOperationArgs<"putUserRoles">): Promise<GenesysCloudFullApiOperationResponseMap["putUserRoles"]>;
}

export const GenesysCloudFullApiAuthorizationGeneratedFunctionNames = [
  "DeleteAuthorizationDivision",
  "DeleteAuthorizationPoliciesTargetSubjectSubjectId",
  "DeleteAuthorizationRole",
  "DeleteAuthorizationSubjectDivisionRole",
  "GetAuthorizationDivision",
  "GetAuthorizationDivisionGrants",
  "GetAuthorizationDivisions",
  "GetAuthorizationDivisionsDeleted",
  "GetAuthorizationDivisionsHome",
  "GetAuthorizationDivisionsLimit",
  "GetAuthorizationDivisionspermittedMe",
  "GetAuthorizationDivisionspermittedPagedMe",
  "GetAuthorizationDivisionspermittedPagedSubjectId",
  "GetAuthorizationDivisionsQuery",
  "GetAuthorizationPermissions",
  "GetAuthorizationPolicies",
  "GetAuthorizationPoliciesSubjectSubjectId",
  "GetAuthorizationPoliciesTarget",
  "GetAuthorizationPoliciesTargets",
  "GetAuthorizationPoliciesTargetSubjectSubjectId",
  "GetAuthorizationPolicy",
  "GetAuthorizationPolicyAttributes",
  "GetAuthorizationProducts",
  "GetAuthorizationRole",
  "GetAuthorizationRoleComparedefaultRightRoleId",
  "GetAuthorizationRoles",
  "GetAuthorizationRolesSettings",
  "GetAuthorizationRoleSubjectgrants",
  "GetAuthorizationRoleUsers",
  "GetAuthorizationSettings",
  "GetAuthorizationSubject",
  "GetAuthorizationSubjectsMe",
  "GetAuthorizationSubjectsRolecounts",
  "GetUserRoles",
  "PatchAuthorizationRole",
  "PatchAuthorizationSettings",
  "PostAuthorizationDivisionObject",
  "PostAuthorizationDivisionRestore",
  "PostAuthorizationDivisions",
  "PostAuthorizationPoliciesTarget",
  "PostAuthorizationPoliciesTargetValidate",
  "PostAuthorizationPolicySimulate",
  "PostAuthorizationRole",
  "PostAuthorizationRoleComparedefaultRightRoleId",
  "PostAuthorizationRoles",
  "PostAuthorizationRolesDefault",
  "PostAuthorizationSubjectBulkadd",
  "PostAuthorizationSubjectBulkremove",
  "PostAuthorizationSubjectBulkreplace",
  "PostAuthorizationSubjectDivisionRole",
  "PutAuthorizationDivision",
  "PutAuthorizationPoliciesTarget",
  "PutAuthorizationPolicy",
  "PutAuthorizationRole",
  "PutAuthorizationRolesDefault",
  "PutAuthorizationRolesSettings",
  "PutAuthorizationRoleUsersAdd",
  "PutAuthorizationRoleUsersRemove",
  "PutUserRoles"
] as const satisfies readonly (keyof GenesysCloudFullApiAuthorizationGeneratedClient)[];

export function createGenesysCloudFullApiAuthorizationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAuthorizationGeneratedClient {
  return {
    DeleteAuthorizationDivision: (...args) => callOperation("deleteAuthorizationDivision", ...(args as GenesysCloudFullApiOperationArgs<"deleteAuthorizationDivision">)),
    DeleteAuthorizationPoliciesTargetSubjectSubjectId: (...args) => callOperation("deleteAuthorizationPoliciesTargetSubjectSubjectId", ...(args as GenesysCloudFullApiOperationArgs<"deleteAuthorizationPoliciesTargetSubjectSubjectId">)),
    DeleteAuthorizationRole: (...args) => callOperation("deleteAuthorizationRole", ...(args as GenesysCloudFullApiOperationArgs<"deleteAuthorizationRole">)),
    DeleteAuthorizationSubjectDivisionRole: (...args) => callOperation("deleteAuthorizationSubjectDivisionRole", ...(args as GenesysCloudFullApiOperationArgs<"deleteAuthorizationSubjectDivisionRole">)),
    GetAuthorizationDivision: (...args) => callOperation("getAuthorizationDivision", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivision">)),
    GetAuthorizationDivisionGrants: (...args) => callOperation("getAuthorizationDivisionGrants", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionGrants">)),
    GetAuthorizationDivisions: (...args) => callOperation("getAuthorizationDivisions", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisions">)),
    GetAuthorizationDivisionsDeleted: (...args) => callOperation("getAuthorizationDivisionsDeleted", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsDeleted">)),
    GetAuthorizationDivisionsHome: (...args) => callOperation("getAuthorizationDivisionsHome", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsHome">)),
    GetAuthorizationDivisionsLimit: (...args) => callOperation("getAuthorizationDivisionsLimit", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsLimit">)),
    GetAuthorizationDivisionspermittedMe: (...args) => callOperation("getAuthorizationDivisionspermittedMe", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionspermittedMe">)),
    GetAuthorizationDivisionspermittedPagedMe: (...args) => callOperation("getAuthorizationDivisionspermittedPagedMe", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionspermittedPagedMe">)),
    GetAuthorizationDivisionspermittedPagedSubjectId: (...args) => callOperation("getAuthorizationDivisionspermittedPagedSubjectId", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionspermittedPagedSubjectId">)),
    GetAuthorizationDivisionsQuery: (...args) => callOperation("getAuthorizationDivisionsQuery", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationDivisionsQuery">)),
    GetAuthorizationPermissions: (...args) => callOperation("getAuthorizationPermissions", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPermissions">)),
    GetAuthorizationPolicies: (...args) => callOperation("getAuthorizationPolicies", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPolicies">)),
    GetAuthorizationPoliciesSubjectSubjectId: (...args) => callOperation("getAuthorizationPoliciesSubjectSubjectId", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesSubjectSubjectId">)),
    GetAuthorizationPoliciesTarget: (...args) => callOperation("getAuthorizationPoliciesTarget", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesTarget">)),
    GetAuthorizationPoliciesTargets: (...args) => callOperation("getAuthorizationPoliciesTargets", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesTargets">)),
    GetAuthorizationPoliciesTargetSubjectSubjectId: (...args) => callOperation("getAuthorizationPoliciesTargetSubjectSubjectId", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPoliciesTargetSubjectSubjectId">)),
    GetAuthorizationPolicy: (...args) => callOperation("getAuthorizationPolicy", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPolicy">)),
    GetAuthorizationPolicyAttributes: (...args) => callOperation("getAuthorizationPolicyAttributes", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationPolicyAttributes">)),
    GetAuthorizationProducts: (...args) => callOperation("getAuthorizationProducts", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationProducts">)),
    GetAuthorizationRole: (...args) => callOperation("getAuthorizationRole", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationRole">)),
    GetAuthorizationRoleComparedefaultRightRoleId: (...args) => callOperation("getAuthorizationRoleComparedefaultRightRoleId", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationRoleComparedefaultRightRoleId">)),
    GetAuthorizationRoles: (...args) => callOperation("getAuthorizationRoles", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationRoles">)),
    GetAuthorizationRolesSettings: (...args) => callOperation("getAuthorizationRolesSettings", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationRolesSettings">)),
    GetAuthorizationRoleSubjectgrants: (...args) => callOperation("getAuthorizationRoleSubjectgrants", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationRoleSubjectgrants">)),
    GetAuthorizationRoleUsers: (...args) => callOperation("getAuthorizationRoleUsers", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationRoleUsers">)),
    GetAuthorizationSettings: (...args) => callOperation("getAuthorizationSettings", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationSettings">)),
    GetAuthorizationSubject: (...args) => callOperation("getAuthorizationSubject", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationSubject">)),
    GetAuthorizationSubjectsMe: (...args) => callOperation("getAuthorizationSubjectsMe", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationSubjectsMe">)),
    GetAuthorizationSubjectsRolecounts: (...args) => callOperation("getAuthorizationSubjectsRolecounts", ...(args as GenesysCloudFullApiOperationArgs<"getAuthorizationSubjectsRolecounts">)),
    GetUserRoles: (...args) => callOperation("getUserRoles", ...(args as GenesysCloudFullApiOperationArgs<"getUserRoles">)),
    PatchAuthorizationRole: (...args) => callOperation("patchAuthorizationRole", ...(args as GenesysCloudFullApiOperationArgs<"patchAuthorizationRole">)),
    PatchAuthorizationSettings: (...args) => callOperation("patchAuthorizationSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchAuthorizationSettings">)),
    PostAuthorizationDivisionObject: (...args) => callOperation("postAuthorizationDivisionObject", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationDivisionObject">)),
    PostAuthorizationDivisionRestore: (...args) => callOperation("postAuthorizationDivisionRestore", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationDivisionRestore">)),
    PostAuthorizationDivisions: (...args) => callOperation("postAuthorizationDivisions", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationDivisions">)),
    PostAuthorizationPoliciesTarget: (...args) => callOperation("postAuthorizationPoliciesTarget", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationPoliciesTarget">)),
    PostAuthorizationPoliciesTargetValidate: (...args) => callOperation("postAuthorizationPoliciesTargetValidate", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationPoliciesTargetValidate">)),
    PostAuthorizationPolicySimulate: (...args) => callOperation("postAuthorizationPolicySimulate", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationPolicySimulate">)),
    PostAuthorizationRole: (...args) => callOperation("postAuthorizationRole", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationRole">)),
    PostAuthorizationRoleComparedefaultRightRoleId: (...args) => callOperation("postAuthorizationRoleComparedefaultRightRoleId", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationRoleComparedefaultRightRoleId">)),
    PostAuthorizationRoles: (...args) => callOperation("postAuthorizationRoles", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationRoles">)),
    PostAuthorizationRolesDefault: (...args) => callOperation("postAuthorizationRolesDefault", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationRolesDefault">)),
    PostAuthorizationSubjectBulkadd: (...args) => callOperation("postAuthorizationSubjectBulkadd", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectBulkadd">)),
    PostAuthorizationSubjectBulkremove: (...args) => callOperation("postAuthorizationSubjectBulkremove", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectBulkremove">)),
    PostAuthorizationSubjectBulkreplace: (...args) => callOperation("postAuthorizationSubjectBulkreplace", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectBulkreplace">)),
    PostAuthorizationSubjectDivisionRole: (...args) => callOperation("postAuthorizationSubjectDivisionRole", ...(args as GenesysCloudFullApiOperationArgs<"postAuthorizationSubjectDivisionRole">)),
    PutAuthorizationDivision: (...args) => callOperation("putAuthorizationDivision", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationDivision">)),
    PutAuthorizationPoliciesTarget: (...args) => callOperation("putAuthorizationPoliciesTarget", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationPoliciesTarget">)),
    PutAuthorizationPolicy: (...args) => callOperation("putAuthorizationPolicy", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationPolicy">)),
    PutAuthorizationRole: (...args) => callOperation("putAuthorizationRole", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationRole">)),
    PutAuthorizationRolesDefault: (...args) => callOperation("putAuthorizationRolesDefault", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationRolesDefault">)),
    PutAuthorizationRolesSettings: (...args) => callOperation("putAuthorizationRolesSettings", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationRolesSettings">)),
    PutAuthorizationRoleUsersAdd: (...args) => callOperation("putAuthorizationRoleUsersAdd", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationRoleUsersAdd">)),
    PutAuthorizationRoleUsersRemove: (...args) => callOperation("putAuthorizationRoleUsersRemove", ...(args as GenesysCloudFullApiOperationArgs<"putAuthorizationRoleUsersRemove">)),
    PutUserRoles: (...args) => callOperation("putUserRoles", ...(args as GenesysCloudFullApiOperationArgs<"putUserRoles">)),
  };
}
