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
export const ZoomContactCenterFullApiSMSOperationKeys = [
  "POST /contact_center/sms"
] as const;
export type ZoomContactCenterFullApiSMSOperationKey = typeof ZoomContactCenterFullApiSMSOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiSMSOperationPathParamMap {
  "POST /contact_center/sms": {};
}

export interface ZoomContactCenterFullApiSMSOperationRequestMap {
  "POST /contact_center/sms": ZoomContactCenterFullApiOperationInput<"POST /contact_center/sms">;
}

export interface ZoomContactCenterFullApiSMSGeneratedClient {
  ContactCenterSMS(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/sms">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/sms"]>;
}

export const ZoomContactCenterFullApiSMSGeneratedFunctionNames = [
  "ContactCenterSMS"
] as const satisfies readonly (keyof ZoomContactCenterFullApiSMSGeneratedClient)[];

export function createZoomContactCenterFullApiSMSGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiSMSGeneratedClient {
  return {
    ContactCenterSMS: (...args) => callOperation("POST /contact_center/sms", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/sms">)),
  };
}
