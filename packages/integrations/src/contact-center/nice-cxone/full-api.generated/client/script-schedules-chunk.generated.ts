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
export const NiceCxoneFullApiScriptSchedulesOperationKeys = [
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules",
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}",
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history",
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts",
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills"
] as const;
export type NiceCxoneFullApiScriptSchedulesOperationKey = typeof NiceCxoneFullApiScriptSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiScriptSchedulesOperationPathParamMap {
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": {};
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": { "scriptScheduleId": NiceCxoneFullApiPathParamValue };
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": { "scriptScheduleId": NiceCxoneFullApiPathParamValue };
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": {};
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": {};
}

export interface NiceCxoneFullApiScriptSchedulesOperationRequestMap {
  "admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules": NiceCxoneFullApiOperationInput<"admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules">;
  "admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}": NiceCxoneFullApiOperationInput<"admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}">;
  "admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history": NiceCxoneFullApiOperationInput<"admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history">;
  "admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts": NiceCxoneFullApiOperationInput<"admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts">;
  "admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills": NiceCxoneFullApiOperationInput<"admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills">;
}

export interface NiceCxoneFullApiScriptSchedulesGeneratedClient {
  AdminScriptschedulesApiDocsGetScriptSchedules(...args: NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules">): Promise<NiceCxoneFullApiOperationResponseMap["admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules"]>;
  AdminScriptschedulesApiDocsGetScriptSchedulesId(...args: NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}">): Promise<NiceCxoneFullApiOperationResponseMap["admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}"]>;
  AdminScriptschedulesApiDocsGetScriptSchedulesIdAuditHistory(...args: NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history">): Promise<NiceCxoneFullApiOperationResponseMap["admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history"]>;
  AdminScriptschedulesApiDocsGetScriptSchedulesScripts(...args: NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts">): Promise<NiceCxoneFullApiOperationResponseMap["admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts"]>;
  AdminScriptschedulesApiDocsGetScriptSchedulesSkills(...args: NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills">): Promise<NiceCxoneFullApiOperationResponseMap["admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills"]>;
}

export const NiceCxoneFullApiScriptSchedulesGeneratedFunctionNames = [
  "AdminScriptschedulesApiDocsGetScriptSchedules",
  "AdminScriptschedulesApiDocsGetScriptSchedulesId",
  "AdminScriptschedulesApiDocsGetScriptSchedulesIdAuditHistory",
  "AdminScriptschedulesApiDocsGetScriptSchedulesScripts",
  "AdminScriptschedulesApiDocsGetScriptSchedulesSkills"
] as const satisfies readonly (keyof NiceCxoneFullApiScriptSchedulesGeneratedClient)[];

export function createNiceCxoneFullApiScriptSchedulesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiScriptSchedulesGeneratedClient {
  return {
    AdminScriptschedulesApiDocsGetScriptSchedules: (...args) => callOperation("admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules", ...(args as NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules:GET:/script-schedules">)),
    AdminScriptschedulesApiDocsGetScriptSchedulesId: (...args) => callOperation("admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}", ...(args as NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-id:GET:/script-schedules/{scriptScheduleId}">)),
    AdminScriptschedulesApiDocsGetScriptSchedulesIdAuditHistory: (...args) => callOperation("admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history", ...(args as NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-id-audit-history:GET:/script-schedules/{scriptScheduleId}/audit-history">)),
    AdminScriptschedulesApiDocsGetScriptSchedulesScripts: (...args) => callOperation("admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts", ...(args as NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-scripts:GET:/script-schedules/scripts">)),
    AdminScriptschedulesApiDocsGetScriptSchedulesSkills: (...args) => callOperation("admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills", ...(args as NiceCxoneFullApiOperationArgs<"admin-scriptschedules-api-docs:get-script-schedules-skills:GET:/script-schedules/skills">)),
  };
}
