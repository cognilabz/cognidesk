// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiOutboundNotificationsAPIOperationKeys = [
  "SendOutboundNotificationMessage"
] as const;
export type TalkdeskFullApiOutboundNotificationsAPIOperationKey = typeof TalkdeskFullApiOutboundNotificationsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiOutboundNotificationsAPIOperationPathParamMap {
  "SendOutboundNotificationMessage": {};
}

export interface TalkdeskFullApiOutboundNotificationsAPIOperationRequestMap {
  "SendOutboundNotificationMessage": TalkdeskFullApiOperationInput<"SendOutboundNotificationMessage">;
}

export interface TalkdeskFullApiOutboundNotificationsAPIGeneratedClient {
  SendOutboundNotificationMessage(...args: TalkdeskFullApiOperationArgs<"SendOutboundNotificationMessage">): Promise<TalkdeskFullApiOperationResponseMap["SendOutboundNotificationMessage"]>;
}

export const TalkdeskFullApiOutboundNotificationsAPIGeneratedFunctionNames = [
  "SendOutboundNotificationMessage"
] as const satisfies readonly (keyof TalkdeskFullApiOutboundNotificationsAPIGeneratedClient)[];

export function createTalkdeskFullApiOutboundNotificationsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiOutboundNotificationsAPIGeneratedClient {
  return {
    SendOutboundNotificationMessage: (...args) => callOperation("SendOutboundNotificationMessage", ...(args as TalkdeskFullApiOperationArgs<"SendOutboundNotificationMessage">)),
  };
}
