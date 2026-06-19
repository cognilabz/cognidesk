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
export const ZoomContactCenterFullApiLogsOperationKeys = [
  "GET /contact_center/email/messages",
  "GET /contact_center/messaging/messages",
  "GET /contact_center/sms",
  "GET /contact_center/voice_calls",
  "GET /contact_center/work_item/messages"
] as const;
export type ZoomContactCenterFullApiLogsOperationKey = typeof ZoomContactCenterFullApiLogsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiLogsOperationPathParamMap {
  "GET /contact_center/email/messages": {};
  "GET /contact_center/messaging/messages": {};
  "GET /contact_center/sms": {};
  "GET /contact_center/voice_calls": {};
  "GET /contact_center/work_item/messages": {};
}

export interface ZoomContactCenterFullApiLogsOperationRequestMap {
  "GET /contact_center/email/messages": ZoomContactCenterFullApiOperationInput<"GET /contact_center/email/messages">;
  "GET /contact_center/messaging/messages": ZoomContactCenterFullApiOperationInput<"GET /contact_center/messaging/messages">;
  "GET /contact_center/sms": ZoomContactCenterFullApiOperationInput<"GET /contact_center/sms">;
  "GET /contact_center/voice_calls": ZoomContactCenterFullApiOperationInput<"GET /contact_center/voice_calls">;
  "GET /contact_center/work_item/messages": ZoomContactCenterFullApiOperationInput<"GET /contact_center/work_item/messages">;
}

export interface ZoomContactCenterFullApiLogsGeneratedClient {
  GetEmailMessageHistory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/email/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/email/messages"]>;
  GetMessageHistory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/messaging/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/messaging/messages"]>;
  ListSMS(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/sms">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/sms"]>;
  ListVoiceCall(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/voice_calls">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/voice_calls"]>;
  GetWorkItemMessageHistory(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/work_item/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/work_item/messages"]>;
}

export const ZoomContactCenterFullApiLogsGeneratedFunctionNames = [
  "GetEmailMessageHistory",
  "GetMessageHistory",
  "ListSMS",
  "ListVoiceCall",
  "GetWorkItemMessageHistory"
] as const satisfies readonly (keyof ZoomContactCenterFullApiLogsGeneratedClient)[];

export function createZoomContactCenterFullApiLogsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiLogsGeneratedClient {
  return {
    GetEmailMessageHistory: (...args) => callOperation("GET /contact_center/email/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/email/messages">)),
    GetMessageHistory: (...args) => callOperation("GET /contact_center/messaging/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/messaging/messages">)),
    ListSMS: (...args) => callOperation("GET /contact_center/sms", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/sms">)),
    ListVoiceCall: (...args) => callOperation("GET /contact_center/voice_calls", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/voice_calls">)),
    GetWorkItemMessageHistory: (...args) => callOperation("GET /contact_center/work_item/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/work_item/messages">)),
  };
}
