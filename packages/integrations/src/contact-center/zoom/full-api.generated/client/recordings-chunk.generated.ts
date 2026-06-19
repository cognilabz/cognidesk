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
export const ZoomContactCenterFullApiRecordingsOperationKeys = [
  "GET /contact_center/engagements/{engagementId}/recordings",
  "DELETE /contact_center/engagements/{engagementId}/recordings",
  "GET /contact_center/recordings",
  "DELETE /contact_center/recordings/{recordingId}"
] as const;
export type ZoomContactCenterFullApiRecordingsOperationKey = typeof ZoomContactCenterFullApiRecordingsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiRecordingsOperationPathParamMap {
  "GET /contact_center/engagements/{engagementId}/recordings": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/engagements/{engagementId}/recordings": { "engagementId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/recordings": {};
  "DELETE /contact_center/recordings/{recordingId}": { "recordingId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiRecordingsOperationRequestMap {
  "GET /contact_center/engagements/{engagementId}/recordings": ZoomContactCenterFullApiOperationInput<"GET /contact_center/engagements/{engagementId}/recordings">;
  "DELETE /contact_center/engagements/{engagementId}/recordings": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/engagements/{engagementId}/recordings">;
  "GET /contact_center/recordings": ZoomContactCenterFullApiOperationInput<"GET /contact_center/recordings">;
  "DELETE /contact_center/recordings/{recordingId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/recordings/{recordingId}">;
}

export interface ZoomContactCenterFullApiRecordingsGeneratedClient {
  ListEngagementRecordings(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/engagements/{engagementId}/recordings"]>;
  DeleteEngagementRecordings(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/engagements/{engagementId}/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/engagements/{engagementId}/recordings"]>;
  ListRecordings(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/recordings">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/recordings"]>;
  DeleteRecording(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/recordings/{recordingId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/recordings/{recordingId}"]>;
}

export const ZoomContactCenterFullApiRecordingsGeneratedFunctionNames = [
  "ListEngagementRecordings",
  "DeleteEngagementRecordings",
  "ListRecordings",
  "DeleteRecording"
] as const satisfies readonly (keyof ZoomContactCenterFullApiRecordingsGeneratedClient)[];

export function createZoomContactCenterFullApiRecordingsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiRecordingsGeneratedClient {
  return {
    ListEngagementRecordings: (...args) => callOperation("GET /contact_center/engagements/{engagementId}/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/engagements/{engagementId}/recordings">)),
    DeleteEngagementRecordings: (...args) => callOperation("DELETE /contact_center/engagements/{engagementId}/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/engagements/{engagementId}/recordings">)),
    ListRecordings: (...args) => callOperation("GET /contact_center/recordings", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/recordings">)),
    DeleteRecording: (...args) => callOperation("DELETE /contact_center/recordings/{recordingId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/recordings/{recordingId}">)),
  };
}
