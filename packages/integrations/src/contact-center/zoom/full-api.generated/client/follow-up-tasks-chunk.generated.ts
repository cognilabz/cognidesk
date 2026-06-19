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
export const ZoomContactCenterFullApiFollowUpTasksOperationKeys = [
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks",
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}",
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}"
] as const;
export type ZoomContactCenterFullApiFollowUpTasksOperationKey = typeof ZoomContactCenterFullApiFollowUpTasksOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiFollowUpTasksOperationPathParamMap {
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": { "engagementId": ZoomContactCenterFullApiPathParamValue; "taskId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": { "engagementId": ZoomContactCenterFullApiPathParamValue; "taskId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiFollowUpTasksOperationRequestMap {
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/follow_up_tasks">;
  "GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}">;
  "PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}">;
}

export interface ZoomContactCenterFullApiFollowUpTasksGeneratedClient {
  EngagementFollowUpTasksBatchList(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/follow_up_tasks">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/follow_up_tasks"]>;
  EngagementFollowUpTaskGet(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}"]>;
  EngagementFollowUpTaskPatch(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}"]>;
}

export const ZoomContactCenterFullApiFollowUpTasksGeneratedFunctionNames = [
  "EngagementFollowUpTasksBatchList",
  "EngagementFollowUpTaskGet",
  "EngagementFollowUpTaskPatch"
] as const satisfies readonly (keyof ZoomContactCenterFullApiFollowUpTasksGeneratedClient)[];

export function createZoomContactCenterFullApiFollowUpTasksGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiFollowUpTasksGeneratedClient {
  return {
    EngagementFollowUpTasksBatchList: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/follow_up_tasks", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/follow_up_tasks">)),
    EngagementFollowUpTaskGet: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}">)),
    EngagementFollowUpTaskPatch: (...args) => callOperation("PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/engagements/{engagementId}/follow_up_tasks/{taskId}">)),
  };
}
