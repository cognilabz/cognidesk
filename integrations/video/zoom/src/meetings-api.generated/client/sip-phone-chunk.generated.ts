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
export const ZoomMeetingsApiSIPPhoneOperationKeys = [
  "GET /sip_phones/phones",
  "POST /sip_phones/phones",
  "DELETE /sip_phones/phones/{phoneId}",
  "PATCH /sip_phones/phones/{phoneId}"
] as const;
export type ZoomMeetingsApiSIPPhoneOperationKey = typeof ZoomMeetingsApiSIPPhoneOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiSIPPhoneOperationPathParamMap {
  "GET /sip_phones/phones": {};
  "POST /sip_phones/phones": {};
  "DELETE /sip_phones/phones/{phoneId}": { "phoneId": ZoomMeetingsApiPathParamValue };
  "PATCH /sip_phones/phones/{phoneId}": { "phoneId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiSIPPhoneOperationRequestMap {
  "GET /sip_phones/phones": ZoomMeetingsApiOperationInput<"GET /sip_phones/phones">;
  "POST /sip_phones/phones": ZoomMeetingsApiOperationInput<"POST /sip_phones/phones">;
  "DELETE /sip_phones/phones/{phoneId}": ZoomMeetingsApiOperationInput<"DELETE /sip_phones/phones/{phoneId}">;
  "PATCH /sip_phones/phones/{phoneId}": ZoomMeetingsApiOperationInput<"PATCH /sip_phones/phones/{phoneId}">;
}

export interface ZoomMeetingsApiSIPPhoneGeneratedClient {
  ListSIPPhonePhones(...args: ZoomMeetingsApiOperationArgs<"GET /sip_phones/phones">): Promise<ZoomMeetingsApiOperationResponseMap["GET /sip_phones/phones"]>;
  EnableSIPPhonePhones(...args: ZoomMeetingsApiOperationArgs<"POST /sip_phones/phones">): Promise<ZoomMeetingsApiOperationResponseMap["POST /sip_phones/phones"]>;
  DeleteSIPPhonePhones(...args: ZoomMeetingsApiOperationArgs<"DELETE /sip_phones/phones/{phoneId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /sip_phones/phones/{phoneId}"]>;
  UpdateSIPPhonePhones(...args: ZoomMeetingsApiOperationArgs<"PATCH /sip_phones/phones/{phoneId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /sip_phones/phones/{phoneId}"]>;
}

export const ZoomMeetingsApiSIPPhoneGeneratedFunctionNames = [
  "ListSIPPhonePhones",
  "EnableSIPPhonePhones",
  "DeleteSIPPhonePhones",
  "UpdateSIPPhonePhones"
] as const satisfies readonly (keyof ZoomMeetingsApiSIPPhoneGeneratedClient)[];

export function createZoomMeetingsApiSIPPhoneGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiSIPPhoneGeneratedClient {
  return {
    ListSIPPhonePhones: (...args) => callOperation("GET /sip_phones/phones", ...(args as ZoomMeetingsApiOperationArgs<"GET /sip_phones/phones">)),
    EnableSIPPhonePhones: (...args) => callOperation("POST /sip_phones/phones", ...(args as ZoomMeetingsApiOperationArgs<"POST /sip_phones/phones">)),
    DeleteSIPPhonePhones: (...args) => callOperation("DELETE /sip_phones/phones/{phoneId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /sip_phones/phones/{phoneId}">)),
    UpdateSIPPhonePhones: (...args) => callOperation("PATCH /sip_phones/phones/{phoneId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /sip_phones/phones/{phoneId}">)),
  };
}
