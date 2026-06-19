// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiTemplatesOperationKeys = [
  "GET /users/{userId}/meeting_templates",
  "POST /users/{userId}/meeting_templates"
] as const;
export type ZoomMeetingsApiTemplatesOperationKey = typeof ZoomMeetingsApiTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiTemplatesOperationPathParamMap {
  "GET /users/{userId}/meeting_templates": { "userId": ZoomMeetingsApiPathParamValue };
  "POST /users/{userId}/meeting_templates": { "userId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiTemplatesOperationRequestMap {
  "GET /users/{userId}/meeting_templates": ZoomMeetingsApiOperationInput<"GET /users/{userId}/meeting_templates">;
  "POST /users/{userId}/meeting_templates": ZoomMeetingsApiOperationInput<"POST /users/{userId}/meeting_templates">;
}

export interface ZoomMeetingsApiTemplatesGeneratedClient {
  ListMeetingTemplates(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/meeting_templates">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/meeting_templates"]>;
  MeetingTemplateCreate(...args: ZoomMeetingsApiOperationArgs<"POST /users/{userId}/meeting_templates">): Promise<ZoomMeetingsApiOperationResponseMap["POST /users/{userId}/meeting_templates"]>;
}

export const ZoomMeetingsApiTemplatesGeneratedFunctionNames = [
  "ListMeetingTemplates",
  "MeetingTemplateCreate"
] as const satisfies readonly (keyof ZoomMeetingsApiTemplatesGeneratedClient)[];

export function createZoomMeetingsApiTemplatesGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiTemplatesGeneratedClient {
  return {
    ListMeetingTemplates: (...args) => callOperation("GET /users/{userId}/meeting_templates", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/meeting_templates">)),
    MeetingTemplateCreate: (...args) => callOperation("POST /users/{userId}/meeting_templates", ...(args as ZoomMeetingsApiOperationArgs<"POST /users/{userId}/meeting_templates">)),
  };
}
