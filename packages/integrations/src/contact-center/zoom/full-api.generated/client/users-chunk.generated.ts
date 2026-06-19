// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiUsersOperationKeys = [
  "GET /contact_center/users",
  "POST /contact_center/users",
  "DELETE /contact_center/users",
  "PATCH /contact_center/users",
  "POST /contact_center/users/batch",
  "PATCH /contact_center/users/status",
  "GET /contact_center/users/templates",
  "POST /contact_center/users/templates",
  "GET /contact_center/users/templates/{templateId}",
  "DELETE /contact_center/users/templates/{templateId}",
  "PATCH /contact_center/users/templates/{templateId}",
  "GET /contact_center/users/{userId}",
  "DELETE /contact_center/users/{userId}",
  "PATCH /contact_center/users/{userId}",
  "PATCH /contact_center/users/{userId}/opt_in_out_queues",
  "GET /contact_center/users/{userId}/queues",
  "GET /contact_center/users/{userId}/recordings",
  "DELETE /contact_center/users/{userId}/recordings",
  "GET /contact_center/users/{userId}/skills",
  "POST /contact_center/users/{userId}/skills",
  "DELETE /contact_center/users/{userId}/skills/{skillId}",
  "PATCH /contact_center/users/{userId}/status"
] as const;
export type ZoomContactCenterFullApiUsersOperationKey = typeof ZoomContactCenterFullApiUsersOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiUsersOperationPathParamMap {
  "GET /contact_center/users": {};
  "POST /contact_center/users": {};
  "DELETE /contact_center/users": {};
  "PATCH /contact_center/users": {};
  "POST /contact_center/users/batch": {};
  "PATCH /contact_center/users/status": {};
  "GET /contact_center/users/templates": {};
  "POST /contact_center/users/templates": {};
  "GET /contact_center/users/templates/{templateId}": { "templateId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/users/templates/{templateId}": { "templateId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/users/templates/{templateId}": { "templateId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/users/{userId}": { "userId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/users/{userId}": { "userId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/users/{userId}": { "userId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": { "userId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/users/{userId}/queues": { "userId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/users/{userId}/recordings": { "userId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/users/{userId}/recordings": { "userId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/users/{userId}/skills": { "userId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/users/{userId}/skills": { "userId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/users/{userId}/skills/{skillId}": { "userId": ZoomContactCenterFullApiPathParamValue; "skillId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/users/{userId}/status": { "userId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiUsersOperationRequestMap {
  "GET /contact_center/users": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users">;
  "POST /contact_center/users": ZoomContactCenterFullApiOperationInput<"POST /contact_center/users">;
  "DELETE /contact_center/users": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/users">;
  "PATCH /contact_center/users": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/users">;
  "POST /contact_center/users/batch": ZoomContactCenterFullApiOperationInput<"POST /contact_center/users/batch">;
  "PATCH /contact_center/users/status": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/users/status">;
  "GET /contact_center/users/templates": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/templates">;
  "POST /contact_center/users/templates": ZoomContactCenterFullApiOperationInput<"POST /contact_center/users/templates">;
  "GET /contact_center/users/templates/{templateId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/templates/{templateId}">;
  "DELETE /contact_center/users/templates/{templateId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/users/templates/{templateId}">;
  "PATCH /contact_center/users/templates/{templateId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/users/templates/{templateId}">;
  "GET /contact_center/users/{userId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/{userId}">;
  "DELETE /contact_center/users/{userId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/users/{userId}">;
  "PATCH /contact_center/users/{userId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/users/{userId}">;
  "PATCH /contact_center/users/{userId}/opt_in_out_queues": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/users/{userId}/opt_in_out_queues">;
  "GET /contact_center/users/{userId}/queues": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/{userId}/queues">;
  "GET /contact_center/users/{userId}/recordings": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/{userId}/recordings">;
  "DELETE /contact_center/users/{userId}/recordings": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/users/{userId}/recordings">;
  "GET /contact_center/users/{userId}/skills": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/{userId}/skills">;
  "POST /contact_center/users/{userId}/skills": ZoomContactCenterFullApiOperationInput<"POST /contact_center/users/{userId}/skills">;
  "DELETE /contact_center/users/{userId}/skills/{skillId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/users/{userId}/skills/{skillId}">;
  "PATCH /contact_center/users/{userId}/status": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/users/{userId}/status">;
}

export interface ZoomContactCenterFullApiUsersGeneratedClient {
  Users(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users"]>;
  CreateUser(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/users"]>;
  BatchDeleteUsers(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/users"]>;
  BatchUpdateUsers(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/users"]>;
  BatchCreateUsers(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/users/batch"]>;
  Batchupdateuserstatus(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/status">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/users/status"]>;
  ListUserTemplates(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/templates">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/templates"]>;
  CreateAUserTemplate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/templates">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/users/templates"]>;
  Getanusertemplate(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/templates/{templateId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/templates/{templateId}"]>;
  DeleteAUserTemplate(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/templates/{templateId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/users/templates/{templateId}"]>;
  UpdateAUserTemplate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/templates/{templateId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/users/templates/{templateId}"]>;
  GetUser(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/{userId}"]>;
  UserDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/users/{userId}"]>;
  UpdateUser(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/{userId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/users/{userId}"]>;
  BatchOptInOrOutUserQueues(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/{userId}/opt_in_out_queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/users/{userId}/opt_in_out_queues"]>;
  ListUserQueues(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/{userId}/queues"]>;
  ListUserRecordings(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/{userId}/recordings"]>;
  DeleteUserRecordings(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/{userId}/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/users/{userId}/recordings"]>;
  ListAUserSkills(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/skills">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/{userId}/skills"]>;
  AssignSkills(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/{userId}/skills">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/users/{userId}/skills"]>;
  DeleteASkill(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/{userId}/skills/{skillId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/users/{userId}/skills/{skillId}"]>;
  UpdateauserSstatus(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/{userId}/status">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/users/{userId}/status"]>;
}

export const ZoomContactCenterFullApiUsersGeneratedFunctionNames = [
  "Users",
  "CreateUser",
  "BatchDeleteUsers",
  "BatchUpdateUsers",
  "BatchCreateUsers",
  "Batchupdateuserstatus",
  "ListUserTemplates",
  "CreateAUserTemplate",
  "Getanusertemplate",
  "DeleteAUserTemplate",
  "UpdateAUserTemplate",
  "GetUser",
  "UserDelete",
  "UpdateUser",
  "BatchOptInOrOutUserQueues",
  "ListUserQueues",
  "ListUserRecordings",
  "DeleteUserRecordings",
  "ListAUserSkills",
  "AssignSkills",
  "DeleteASkill",
  "UpdateauserSstatus"
] as const satisfies readonly (keyof ZoomContactCenterFullApiUsersGeneratedClient)[];

export function createZoomContactCenterFullApiUsersGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiUsersGeneratedClient {
  return {
    Users: (...args) => callOperation("GET /contact_center/users", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users">)),
    CreateUser: (...args) => callOperation("POST /contact_center/users", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users">)),
    BatchDeleteUsers: (...args) => callOperation("DELETE /contact_center/users", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users">)),
    BatchUpdateUsers: (...args) => callOperation("PATCH /contact_center/users", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users">)),
    BatchCreateUsers: (...args) => callOperation("POST /contact_center/users/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/batch">)),
    Batchupdateuserstatus: (...args) => callOperation("PATCH /contact_center/users/status", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/status">)),
    ListUserTemplates: (...args) => callOperation("GET /contact_center/users/templates", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/templates">)),
    CreateAUserTemplate: (...args) => callOperation("POST /contact_center/users/templates", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/templates">)),
    Getanusertemplate: (...args) => callOperation("GET /contact_center/users/templates/{templateId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/templates/{templateId}">)),
    DeleteAUserTemplate: (...args) => callOperation("DELETE /contact_center/users/templates/{templateId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/templates/{templateId}">)),
    UpdateAUserTemplate: (...args) => callOperation("PATCH /contact_center/users/templates/{templateId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/templates/{templateId}">)),
    GetUser: (...args) => callOperation("GET /contact_center/users/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}">)),
    UserDelete: (...args) => callOperation("DELETE /contact_center/users/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/{userId}">)),
    UpdateUser: (...args) => callOperation("PATCH /contact_center/users/{userId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/{userId}">)),
    BatchOptInOrOutUserQueues: (...args) => callOperation("PATCH /contact_center/users/{userId}/opt_in_out_queues", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/{userId}/opt_in_out_queues">)),
    ListUserQueues: (...args) => callOperation("GET /contact_center/users/{userId}/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/queues">)),
    ListUserRecordings: (...args) => callOperation("GET /contact_center/users/{userId}/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/recordings">)),
    DeleteUserRecordings: (...args) => callOperation("DELETE /contact_center/users/{userId}/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/{userId}/recordings">)),
    ListAUserSkills: (...args) => callOperation("GET /contact_center/users/{userId}/skills", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/skills">)),
    AssignSkills: (...args) => callOperation("POST /contact_center/users/{userId}/skills", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/{userId}/skills">)),
    DeleteASkill: (...args) => callOperation("DELETE /contact_center/users/{userId}/skills/{skillId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/users/{userId}/skills/{skillId}">)),
    UpdateauserSstatus: (...args) => callOperation("PATCH /contact_center/users/{userId}/status", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/users/{userId}/status">)),
  };
}
