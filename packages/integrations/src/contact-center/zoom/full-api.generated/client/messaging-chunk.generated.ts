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
export const ZoomContactCenterFullApiMessagingOperationKeys = [
  "POST /contact_center/messages"
] as const;
export type ZoomContactCenterFullApiMessagingOperationKey = typeof ZoomContactCenterFullApiMessagingOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiMessagingOperationPathParamMap {
  "POST /contact_center/messages": {};
}

export interface ZoomContactCenterFullApiMessagingOperationRequestMap {
  "POST /contact_center/messages": ZoomContactCenterFullApiOperationInput<"POST /contact_center/messages">;
}

export interface ZoomContactCenterFullApiMessagingGeneratedClient {
  SendaMessage(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/messages">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/messages"]>;
}

export const ZoomContactCenterFullApiMessagingGeneratedFunctionNames = [
  "SendaMessage"
] as const satisfies readonly (keyof ZoomContactCenterFullApiMessagingGeneratedClient)[];

export function createZoomContactCenterFullApiMessagingGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiMessagingGeneratedClient {
  return {
    SendaMessage: (...args) => callOperation("POST /contact_center/messages", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/messages">)),
  };
}
