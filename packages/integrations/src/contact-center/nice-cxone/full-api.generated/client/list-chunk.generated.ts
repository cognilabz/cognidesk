// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiListOperationKeys = [
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups",
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups",
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}",
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}",
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills",
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}",
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}",
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records",
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records",
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records",
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills",
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}",
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}",
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search",
  "admin-lists-api-docs:get-dnis:GET:/dnis",
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists",
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists",
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}",
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}",
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts",
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload",
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects",
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs",
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}",
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}"
] as const;
export type NiceCxoneFullApiListOperationKey = typeof NiceCxoneFullApiListOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiListOperationPathParamMap {
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": {};
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": {};
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": { "groupId": NiceCxoneFullApiPathParamValue; "skillId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": { "groupId": NiceCxoneFullApiPathParamValue; "skillId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": { "groupId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": { "groupId": NiceCxoneFullApiPathParamValue; "skillId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": { "groupId": NiceCxoneFullApiPathParamValue; "skillId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": {};
  "admin-lists-api-docs:get-dnis:GET:/dnis": {};
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": {};
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": {};
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": { "listId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": { "listId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": { "listId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": { "listId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": { "sourceName": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": {};
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": { "jobId": NiceCxoneFullApiPathParamValue };
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": { "jobId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiListOperationRequestMap {
  "admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups">;
  "admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups">;
  "admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}">;
  "admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}">;
  "admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills">;
  "admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}">;
  "admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}">;
  "admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records">;
  "admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records">;
  "admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records">;
  "admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills">;
  "admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}">;
  "admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}">;
  "admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search">;
  "admin-lists-api-docs:get-dnis:GET:/dnis": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:get-dnis:GET:/dnis">;
  "admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists">;
  "admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists">;
  "admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}">;
  "admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}">;
  "admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts">;
  "admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload">;
  "admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects">;
  "admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs">;
  "admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}">;
  "admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}": NiceCxoneFullApiOperationInput<"admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}">;
}

export interface NiceCxoneFullApiListGeneratedClient {
  AdminListsApiDocsDncGroupsResultSet(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups"]>;
  AdminListsApiDocsPostDncGroups(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups"]>;
  AdminListsApiDocsGetDNCgroupByID(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}"]>;
  AdminListsApiDocsPutDNCgroupByID(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}"]>;
  AdminListsApiDocsGetDncGroupsContribSkills(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills"]>;
  AdminListsApiDocsPostDncGroupsContribSkillsById(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}"]>;
  AdminListsApiDocsDeleteDncGroupsContribSkillsById(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}"]>;
  AdminListsApiDocsDncGroupsRecords(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records"]>;
  AdminListsApiDocsCreateDncGroupRecords(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records"]>;
  AdminListsApiDocsDeleteDncGroupRecords(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records"]>;
  AdminListsApiDocsGetDncGroupsScrubbedSkills(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills"]>;
  AdminListsApiDocsPostDncGroupsScrubbedSkills(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}"]>;
  AdminListsApiDocsDeleteDncGroupsScrubbedSkills(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}"]>;
  AdminListsApiDocsReturnAListOfGroupsByPhonenumber(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search"]>;
  AdminListsApiDocsGetDnis(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:get-dnis:GET:/dnis">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:get-dnis:GET:/dnis"]>;
  AdminListsApiDocsReturnCallList(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists"]>;
  AdminListsApiDocsPostListsCallLists(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists"]>;
  AdminListsApiDocsDownloadACallList(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}"]>;
  AdminListsApiDocsDeleteListsCallListsListId(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}"]>;
  AdminListsApiDocsDownloadACallListAttempts(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts"]>;
  AdminListsApiDocsUploadingCallingList(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload"]>;
  AdminListsApiDocsDeleteListsCallListsIdRemoveProspects(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects"]>;
  AdminListsApiDocsGetListJob(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs"]>;
  AdminListsApiDocsGetCallingList(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}"]>;
  AdminListsApiDocsCancelList(...args: NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}"]>;
}

export const NiceCxoneFullApiListGeneratedFunctionNames = [
  "AdminListsApiDocsDncGroupsResultSet",
  "AdminListsApiDocsPostDncGroups",
  "AdminListsApiDocsGetDNCgroupByID",
  "AdminListsApiDocsPutDNCgroupByID",
  "AdminListsApiDocsGetDncGroupsContribSkills",
  "AdminListsApiDocsPostDncGroupsContribSkillsById",
  "AdminListsApiDocsDeleteDncGroupsContribSkillsById",
  "AdminListsApiDocsDncGroupsRecords",
  "AdminListsApiDocsCreateDncGroupRecords",
  "AdminListsApiDocsDeleteDncGroupRecords",
  "AdminListsApiDocsGetDncGroupsScrubbedSkills",
  "AdminListsApiDocsPostDncGroupsScrubbedSkills",
  "AdminListsApiDocsDeleteDncGroupsScrubbedSkills",
  "AdminListsApiDocsReturnAListOfGroupsByPhonenumber",
  "AdminListsApiDocsGetDnis",
  "AdminListsApiDocsReturnCallList",
  "AdminListsApiDocsPostListsCallLists",
  "AdminListsApiDocsDownloadACallList",
  "AdminListsApiDocsDeleteListsCallListsListId",
  "AdminListsApiDocsDownloadACallListAttempts",
  "AdminListsApiDocsUploadingCallingList",
  "AdminListsApiDocsDeleteListsCallListsIdRemoveProspects",
  "AdminListsApiDocsGetListJob",
  "AdminListsApiDocsGetCallingList",
  "AdminListsApiDocsCancelList"
] as const satisfies readonly (keyof NiceCxoneFullApiListGeneratedClient)[];

export function createNiceCxoneFullApiListGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiListGeneratedClient {
  return {
    AdminListsApiDocsDncGroupsResultSet: (...args) => callOperation("admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DncGroupsResultSet:GET:/dnc-groups">)),
    AdminListsApiDocsPostDncGroups: (...args) => callOperation("admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:post-dnc-groups:POST:/dnc-groups">)),
    AdminListsApiDocsGetDNCgroupByID: (...args) => callOperation("admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetDNCgroupByID:GET:/dnc-groups/{groupId}">)),
    AdminListsApiDocsPutDNCgroupByID: (...args) => callOperation("admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:PutDNCgroupByID:PUT:/dnc-groups/{groupId}">)),
    AdminListsApiDocsGetDncGroupsContribSkills: (...args) => callOperation("admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetDncGroupsContribSkills:GET:/dnc-groups/{groupId}/contributing-skills">)),
    AdminListsApiDocsPostDncGroupsContribSkillsById: (...args) => callOperation("admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:PostDncGroupsContribSkillsById:POST:/dnc-groups/{groupId}/contributing-skills/{skillId}">)),
    AdminListsApiDocsDeleteDncGroupsContribSkillsById: (...args) => callOperation("admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DeleteDncGroupsContribSkillsById:DELETE:/dnc-groups/{groupId}/contributing-skills/{skillId}">)),
    AdminListsApiDocsDncGroupsRecords: (...args) => callOperation("admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DncGroupsRecords:GET:/dnc-groups/{groupId}/records">)),
    AdminListsApiDocsCreateDncGroupRecords: (...args) => callOperation("admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:CreateDncGroupRecords:POST:/dnc-groups/{groupId}/records">)),
    AdminListsApiDocsDeleteDncGroupRecords: (...args) => callOperation("admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DeleteDncGroupRecords:DELETE:/dnc-groups/{groupId}/records">)),
    AdminListsApiDocsGetDncGroupsScrubbedSkills: (...args) => callOperation("admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetDncGroupsScrubbedSkills:GET:/dnc-groups/{groupId}/scrubbed-skills">)),
    AdminListsApiDocsPostDncGroupsScrubbedSkills: (...args) => callOperation("admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:PostDncGroupsScrubbedSkills:POST:/dnc-groups/{groupId}/scrubbed-skills/{skillId}">)),
    AdminListsApiDocsDeleteDncGroupsScrubbedSkills: (...args) => callOperation("admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DeleteDncGroupsScrubbedSkills:DELETE:/dnc-groups/{groupId}/scrubbed-skills/{skillId}">)),
    AdminListsApiDocsReturnAListOfGroupsByPhonenumber: (...args) => callOperation("admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:ReturnAListOfGroupsByPhonenumber:POST:/dnc-groups/search">)),
    AdminListsApiDocsGetDnis: (...args) => callOperation("admin-lists-api-docs:get-dnis:GET:/dnis", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:get-dnis:GET:/dnis">)),
    AdminListsApiDocsReturnCallList: (...args) => callOperation("admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:ReturnCallList:GET:/lists/call-lists">)),
    AdminListsApiDocsPostListsCallLists: (...args) => callOperation("admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:post_/lists/call-lists:POST:/lists/call-lists">)),
    AdminListsApiDocsDownloadACallList: (...args) => callOperation("admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DownloadACallList:GET:/lists/call-lists/{listId}">)),
    AdminListsApiDocsDeleteListsCallListsListId: (...args) => callOperation("admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:delete_/lists/call-lists/{listId}:DELETE:/lists/call-lists/{listId}">)),
    AdminListsApiDocsDownloadACallListAttempts: (...args) => callOperation("admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:DownloadACallListAttempts:GET:/lists/call-lists/{listId}/attempts">)),
    AdminListsApiDocsUploadingCallingList: (...args) => callOperation("admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:UploadingCallingList:POST:/lists/call-lists/{listId}/upload">)),
    AdminListsApiDocsDeleteListsCallListsIdRemoveProspects: (...args) => callOperation("admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:delete-lists-call-lists-id-removeProspects:DELETE:/lists/call-lists/{sourceName}/removeProspects">)),
    AdminListsApiDocsGetListJob: (...args) => callOperation("admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetListJob:GET:/lists/call-lists/jobs">)),
    AdminListsApiDocsGetCallingList: (...args) => callOperation("admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:GetCallingList:GET:/lists/call-lists/jobs/{jobId}">)),
    AdminListsApiDocsCancelList: (...args) => callOperation("admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-lists-api-docs:CancelList:DELETE:/lists/call-lists/jobs/{jobId}">)),
  };
}
