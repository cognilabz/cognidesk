// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiDeletionSchedulesOperationKeys = [
  "CreateDeletionSchedule",
  "DeleteDeletionSchedule",
  "GetDeletionSchedule",
  "ListDeletionSchedules",
  "UpdateDeletionSchedule"
] as const;
export type ZendeskFullApiDeletionSchedulesOperationKey = typeof ZendeskFullApiDeletionSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiDeletionSchedulesOperationPathParamMap {
  "CreateDeletionSchedule": {};
  "DeleteDeletionSchedule": { "deletion_schedule_id": ZendeskFullApiPathParamValue };
  "GetDeletionSchedule": { "deletion_schedule_id": ZendeskFullApiPathParamValue };
  "ListDeletionSchedules": {};
  "UpdateDeletionSchedule": { "deletion_schedule_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiDeletionSchedulesOperationRequestMap {
  "CreateDeletionSchedule": ZendeskFullApiOperationInput<"CreateDeletionSchedule">;
  "DeleteDeletionSchedule": ZendeskFullApiOperationInput<"DeleteDeletionSchedule">;
  "GetDeletionSchedule": ZendeskFullApiOperationInput<"GetDeletionSchedule">;
  "ListDeletionSchedules": ZendeskFullApiOperationInput<"ListDeletionSchedules">;
  "UpdateDeletionSchedule": ZendeskFullApiOperationInput<"UpdateDeletionSchedule">;
}

export interface ZendeskFullApiDeletionSchedulesGeneratedClient {
  CreateDeletionSchedule(...args: ZendeskFullApiOperationArgs<"CreateDeletionSchedule">): Promise<ZendeskFullApiOperationResponseMap["CreateDeletionSchedule"]>;
  DeleteDeletionSchedule(...args: ZendeskFullApiOperationArgs<"DeleteDeletionSchedule">): Promise<ZendeskFullApiOperationResponseMap["DeleteDeletionSchedule"]>;
  GetDeletionSchedule(...args: ZendeskFullApiOperationArgs<"GetDeletionSchedule">): Promise<ZendeskFullApiOperationResponseMap["GetDeletionSchedule"]>;
  ListDeletionSchedules(...args: ZendeskFullApiOperationArgs<"ListDeletionSchedules">): Promise<ZendeskFullApiOperationResponseMap["ListDeletionSchedules"]>;
  UpdateDeletionSchedule(...args: ZendeskFullApiOperationArgs<"UpdateDeletionSchedule">): Promise<ZendeskFullApiOperationResponseMap["UpdateDeletionSchedule"]>;
}

export const ZendeskFullApiDeletionSchedulesGeneratedFunctionNames = [
  "CreateDeletionSchedule",
  "DeleteDeletionSchedule",
  "GetDeletionSchedule",
  "ListDeletionSchedules",
  "UpdateDeletionSchedule"
] as const satisfies readonly (keyof ZendeskFullApiDeletionSchedulesGeneratedClient)[];

export function createZendeskFullApiDeletionSchedulesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiDeletionSchedulesGeneratedClient {
  return {
    CreateDeletionSchedule: (...args) => callOperation("CreateDeletionSchedule", ...(args as ZendeskFullApiOperationArgs<"CreateDeletionSchedule">)),
    DeleteDeletionSchedule: (...args) => callOperation("DeleteDeletionSchedule", ...(args as ZendeskFullApiOperationArgs<"DeleteDeletionSchedule">)),
    GetDeletionSchedule: (...args) => callOperation("GetDeletionSchedule", ...(args as ZendeskFullApiOperationArgs<"GetDeletionSchedule">)),
    ListDeletionSchedules: (...args) => callOperation("ListDeletionSchedules", ...(args as ZendeskFullApiOperationArgs<"ListDeletionSchedules">)),
    UpdateDeletionSchedule: (...args) => callOperation("UpdateDeletionSchedule", ...(args as ZendeskFullApiOperationArgs<"UpdateDeletionSchedule">)),
  };
}
