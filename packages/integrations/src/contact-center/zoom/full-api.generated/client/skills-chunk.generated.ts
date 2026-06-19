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
export const ZoomContactCenterFullApiSkillsOperationKeys = [
  "GET /contact_center/skills",
  "POST /contact_center/skills",
  "GET /contact_center/skills/categories",
  "POST /contact_center/skills/categories",
  "GET /contact_center/skills/categories/{skillCategoryId}",
  "DELETE /contact_center/skills/categories/{skillCategoryId}",
  "PATCH /contact_center/skills/categories/{skillCategoryId}",
  "GET /contact_center/skills/{skillId}",
  "DELETE /contact_center/skills/{skillId}",
  "PATCH /contact_center/skills/{skillId}",
  "GET /contact_center/skills/{skillId}/users"
] as const;
export type ZoomContactCenterFullApiSkillsOperationKey = typeof ZoomContactCenterFullApiSkillsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiSkillsOperationPathParamMap {
  "GET /contact_center/skills": {};
  "POST /contact_center/skills": {};
  "GET /contact_center/skills/categories": {};
  "POST /contact_center/skills/categories": {};
  "GET /contact_center/skills/categories/{skillCategoryId}": { "skillCategoryId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/skills/categories/{skillCategoryId}": { "skillCategoryId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/skills/categories/{skillCategoryId}": { "skillCategoryId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/skills/{skillId}": { "skillId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/skills/{skillId}": { "skillId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/skills/{skillId}": { "skillId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/skills/{skillId}/users": { "skillId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiSkillsOperationRequestMap {
  "GET /contact_center/skills": ZoomContactCenterFullApiOperationInput<"GET /contact_center/skills">;
  "POST /contact_center/skills": ZoomContactCenterFullApiOperationInput<"POST /contact_center/skills">;
  "GET /contact_center/skills/categories": ZoomContactCenterFullApiOperationInput<"GET /contact_center/skills/categories">;
  "POST /contact_center/skills/categories": ZoomContactCenterFullApiOperationInput<"POST /contact_center/skills/categories">;
  "GET /contact_center/skills/categories/{skillCategoryId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/skills/categories/{skillCategoryId}">;
  "DELETE /contact_center/skills/categories/{skillCategoryId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/skills/categories/{skillCategoryId}">;
  "PATCH /contact_center/skills/categories/{skillCategoryId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/skills/categories/{skillCategoryId}">;
  "GET /contact_center/skills/{skillId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/skills/{skillId}">;
  "DELETE /contact_center/skills/{skillId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/skills/{skillId}">;
  "PATCH /contact_center/skills/{skillId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/skills/{skillId}">;
  "GET /contact_center/skills/{skillId}/users": ZoomContactCenterFullApiOperationInput<"GET /contact_center/skills/{skillId}/users">;
}

export interface ZoomContactCenterFullApiSkillsGeneratedClient {
  ListSkills(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/skills"]>;
  SkillCreate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/skills">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/skills"]>;
  ListSkillCategory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/categories">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/skills/categories"]>;
  SkillCategoryCreate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/skills/categories">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/skills/categories"]>;
  GetSkillCategory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/categories/{skillCategoryId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/skills/categories/{skillCategoryId}"]>;
  SkillCategoryDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/skills/categories/{skillCategoryId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/skills/categories/{skillCategoryId}"]>;
  SkillCategoryUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/skills/categories/{skillCategoryId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/skills/categories/{skillCategoryId}"]>;
  GetSkill(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/{skillId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/skills/{skillId}"]>;
  SkillDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/skills/{skillId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/skills/{skillId}"]>;
  SkillNameUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/skills/{skillId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/skills/{skillId}"]>;
  ListSkillUsers(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/{skillId}/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/skills/{skillId}/users"]>;
}

export const ZoomContactCenterFullApiSkillsGeneratedFunctionNames = [
  "ListSkills",
  "SkillCreate",
  "ListSkillCategory",
  "SkillCategoryCreate",
  "GetSkillCategory",
  "SkillCategoryDelete",
  "SkillCategoryUpdate",
  "GetSkill",
  "SkillDelete",
  "SkillNameUpdate",
  "ListSkillUsers"
] as const satisfies readonly (keyof ZoomContactCenterFullApiSkillsGeneratedClient)[];

export function createZoomContactCenterFullApiSkillsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiSkillsGeneratedClient {
  return {
    ListSkills: (...args) => callOperation("GET /contact_center/skills", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills">)),
    SkillCreate: (...args) => callOperation("POST /contact_center/skills", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/skills">)),
    ListSkillCategory: (...args) => callOperation("GET /contact_center/skills/categories", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/categories">)),
    SkillCategoryCreate: (...args) => callOperation("POST /contact_center/skills/categories", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/skills/categories">)),
    GetSkillCategory: (...args) => callOperation("GET /contact_center/skills/categories/{skillCategoryId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/categories/{skillCategoryId}">)),
    SkillCategoryDelete: (...args) => callOperation("DELETE /contact_center/skills/categories/{skillCategoryId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/skills/categories/{skillCategoryId}">)),
    SkillCategoryUpdate: (...args) => callOperation("PATCH /contact_center/skills/categories/{skillCategoryId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/skills/categories/{skillCategoryId}">)),
    GetSkill: (...args) => callOperation("GET /contact_center/skills/{skillId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/{skillId}">)),
    SkillDelete: (...args) => callOperation("DELETE /contact_center/skills/{skillId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/skills/{skillId}">)),
    SkillNameUpdate: (...args) => callOperation("PATCH /contact_center/skills/{skillId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/skills/{skillId}">)),
    ListSkillUsers: (...args) => callOperation("GET /contact_center/skills/{skillId}/users", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/skills/{skillId}/users">)),
  };
}
