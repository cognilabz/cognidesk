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
export const ZoomContactCenterFullApiEngagementsOperationKeys = [
  "POST /contact_center/engagement",
  "GET /contact_center/engagements",
  "GET /contact_center/engagements/{engagementId}",
  "PATCH /contact_center/engagements/{engagementId}",
  "GET /contact_center/engagements/{engagementId}/attachments",
  "GET /contact_center/engagements/{engagementId}/events",
  "GET /contact_center/engagements/{engagementId}/recordings/status",
  "GET /contact_center/engagements/{engagementId}/survey",
  "GET /contact_center/engagements/{engagementId}/transfer/flows",
  "GET /contact_center/engagements/{engagementId}/transfer/queues",
  "GET /contact_center/engagements/{engagementId}/transfer/users"
] as const;
export type ZoomContactCenterFullApiEngagementsOperationKey = typeof ZoomContactCenterFullApiEngagementsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiEngagementsOperationPathParamMap {
  "POST /contact_center/engagement": {};
  "GET /contact_center/engagements": {};
  "GET /contact_center/engagements/{engagementId}": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/engagements/{engagementId}": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/attachments": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/events": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/recordings/status": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/survey": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/transfer/flows": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/transfer/queues": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/engagements/{engagementId}/transfer/users": { "engagementId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiEngagementsOperationRequestMap {
  "POST /contact_center/engagement": ZoomContactCenterFullApiOperationInput<"POST /contact_center/engagement">;
  "GET /contact_center/engagements": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements">;
  "GET /contact_center/engagements/{engagementId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}">;
  "PATCH /contact_center/engagements/{engagementId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/engagements/{engagementId}">;
  "GET /contact_center/engagements/{engagementId}/attachments": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/attachments">;
  "GET /contact_center/engagements/{engagementId}/events": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/events">;
  "GET /contact_center/engagements/{engagementId}/recordings/status": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/recordings/status">;
  "GET /contact_center/engagements/{engagementId}/survey": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/survey">;
  "GET /contact_center/engagements/{engagementId}/transfer/flows": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/transfer/flows">;
  "GET /contact_center/engagements/{engagementId}/transfer/queues": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/transfer/queues">;
  "GET /contact_center/engagements/{engagementId}/transfer/users": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/transfer/users">;
}

export interface ZoomContactCenterFullApiEngagementsGeneratedClient {
  Startworkitemengagement(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/engagement">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/engagement"]>;
  ListEngagements(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements"]>;
  GetEngagement(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}"]>;
  UpdateEngagement(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/engagements/{engagementId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/engagements/{engagementId}"]>;
  ListAttachments(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/attachments">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/attachments"]>;
  GetEngagementEvents(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/events">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/events"]>;
  EngagementRecordingStatus(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/recordings/status">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/recordings/status"]>;
  GetEngagementSurvey(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/survey">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/survey"]>;
  GetAvailableTransferFlows(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/transfer/flows">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/transfer/flows"]>;
  GetAvailableTransferQueues(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/transfer/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/transfer/queues"]>;
  GetAvailableTransferUsers(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/transfer/users">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/transfer/users"]>;
}

export const ZoomContactCenterFullApiEngagementsGeneratedFunctionNames = [
  "Startworkitemengagement",
  "ListEngagements",
  "GetEngagement",
  "UpdateEngagement",
  "ListAttachments",
  "GetEngagementEvents",
  "EngagementRecordingStatus",
  "GetEngagementSurvey",
  "GetAvailableTransferFlows",
  "GetAvailableTransferQueues",
  "GetAvailableTransferUsers"
] as const satisfies readonly (keyof ZoomContactCenterFullApiEngagementsGeneratedClient)[];

export function createZoomContactCenterFullApiEngagementsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiEngagementsGeneratedClient {
  return {
    Startworkitemengagement: (...args) => callOperation("POST /contact_center/engagement", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/engagement">)),
    ListEngagements: (...args) => callOperation("GET /contact_center/engagements", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements">)),
    GetEngagement: (...args) => callOperation("GET /contact_center/engagements/{engagementId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}">)),
    UpdateEngagement: (...args) => callOperation("PATCH /contact_center/engagements/{engagementId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/engagements/{engagementId}">)),
    ListAttachments: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/attachments", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/attachments">)),
    GetEngagementEvents: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/events", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/events">)),
    EngagementRecordingStatus: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/recordings/status", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/recordings/status">)),
    GetEngagementSurvey: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/survey", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/survey">)),
    GetAvailableTransferFlows: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/transfer/flows", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/transfer/flows">)),
    GetAvailableTransferQueues: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/transfer/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/transfer/queues">)),
    GetAvailableTransferUsers: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/transfer/users", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/transfer/users">)),
  };
}
