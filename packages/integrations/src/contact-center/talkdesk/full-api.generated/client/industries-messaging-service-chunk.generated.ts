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
export const TalkdeskFullApiIndustriesMessagingServiceOperationKeys = [
  "send_message",
  "send_email"
] as const;
export type TalkdeskFullApiIndustriesMessagingServiceOperationKey = typeof TalkdeskFullApiIndustriesMessagingServiceOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIndustriesMessagingServiceOperationPathParamMap {
  "send_message": {};
  "send_email": {};
}

export interface TalkdeskFullApiIndustriesMessagingServiceOperationRequestMap {
  "send_message": TalkdeskFullApiOperationInput<"send_message">;
  "send_email": TalkdeskFullApiOperationInput<"send_email">;
}

export interface TalkdeskFullApiIndustriesMessagingServiceGeneratedClient {
  SendMessage(...args: TalkdeskFullApiOperationArgs<"send_message">): Promise<TalkdeskFullApiOperationResponseMap["send_message"]>;
  SendEmail(...args: TalkdeskFullApiOperationArgs<"send_email">): Promise<TalkdeskFullApiOperationResponseMap["send_email"]>;
}

export const TalkdeskFullApiIndustriesMessagingServiceGeneratedFunctionNames = [
  "SendMessage",
  "SendEmail"
] as const satisfies readonly (keyof TalkdeskFullApiIndustriesMessagingServiceGeneratedClient)[];

export function createTalkdeskFullApiIndustriesMessagingServiceGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIndustriesMessagingServiceGeneratedClient {
  return {
    SendMessage: (...args) => callOperation("send_message", ...(args as TalkdeskFullApiOperationArgs<"send_message">)),
    SendEmail: (...args) => callOperation("send_email", ...(args as TalkdeskFullApiOperationArgs<"send_email">)),
  };
}
