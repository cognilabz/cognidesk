// Generated endpoint chunk for TwilioSmsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioSmsGeneratedOperationCaller,
  TwilioSmsFullApiOperationArgs,
  TwilioSmsFullApiOperationInput,
  TwilioSmsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioSmsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioSmsFullApiMessagingV3OperationKeys = [
  "messaging_v3:CreateV3TypingIndicator"
] as const;
export type TwilioSmsFullApiMessagingV3OperationKey = typeof TwilioSmsFullApiMessagingV3OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiMessagingV3OperationPathParamMap {
  "messaging_v3:CreateV3TypingIndicator": {};
}

export interface TwilioSmsFullApiMessagingV3OperationRequestMap {
  "messaging_v3:CreateV3TypingIndicator": TwilioSmsFullApiOperationInput<"messaging_v3:CreateV3TypingIndicator">;
}

export interface TwilioSmsFullApiMessagingV3GeneratedClient {
  MessagingV3CreateV3TypingIndicator(...args: TwilioSmsFullApiOperationArgs<"messaging_v3:CreateV3TypingIndicator">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v3:CreateV3TypingIndicator"]>;
}

export const TwilioSmsFullApiMessagingV3GeneratedFunctionNames = [
  "MessagingV3CreateV3TypingIndicator"
] as const satisfies readonly (keyof TwilioSmsFullApiMessagingV3GeneratedClient)[];

export function createTwilioSmsFullApiMessagingV3GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiMessagingV3GeneratedClient {
  return {
    MessagingV3CreateV3TypingIndicator: (...args) => callOperation("messaging_v3:CreateV3TypingIndicator", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v3:CreateV3TypingIndicator">)),
  };
}
