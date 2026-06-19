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
export const TwilioSmsFullApiMessagingV2OperationKeys = [
  "messaging_v2:CreateChannelsSender",
  "messaging_v2:CreateTypingIndicator",
  "messaging_v2:DeleteChannelsSender",
  "messaging_v2:FetchChannelsSender",
  "messaging_v2:FetchDomainCertV4",
  "messaging_v2:ListChannelsSender",
  "messaging_v2:UpdateChannelsSender"
] as const;
export type TwilioSmsFullApiMessagingV2OperationKey = typeof TwilioSmsFullApiMessagingV2OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiMessagingV2OperationPathParamMap {
  "messaging_v2:CreateChannelsSender": {};
  "messaging_v2:CreateTypingIndicator": {};
  "messaging_v2:DeleteChannelsSender": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v2:FetchChannelsSender": { "Sid": TwilioSmsFullApiPathParamValue };
  "messaging_v2:FetchDomainCertV4": { "DomainSid": TwilioSmsFullApiPathParamValue };
  "messaging_v2:ListChannelsSender": {};
  "messaging_v2:UpdateChannelsSender": { "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiMessagingV2OperationRequestMap {
  "messaging_v2:CreateChannelsSender": TwilioSmsFullApiOperationInput<"messaging_v2:CreateChannelsSender">;
  "messaging_v2:CreateTypingIndicator": TwilioSmsFullApiOperationInput<"messaging_v2:CreateTypingIndicator">;
  "messaging_v2:DeleteChannelsSender": TwilioSmsFullApiOperationInput<"messaging_v2:DeleteChannelsSender">;
  "messaging_v2:FetchChannelsSender": TwilioSmsFullApiOperationInput<"messaging_v2:FetchChannelsSender">;
  "messaging_v2:FetchDomainCertV4": TwilioSmsFullApiOperationInput<"messaging_v2:FetchDomainCertV4">;
  "messaging_v2:ListChannelsSender": TwilioSmsFullApiOperationInput<"messaging_v2:ListChannelsSender">;
  "messaging_v2:UpdateChannelsSender": TwilioSmsFullApiOperationInput<"messaging_v2:UpdateChannelsSender">;
}

export interface TwilioSmsFullApiMessagingV2GeneratedClient {
  MessagingV2CreateChannelsSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:CreateChannelsSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:CreateChannelsSender"]>;
  MessagingV2CreateTypingIndicator(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:CreateTypingIndicator">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:CreateTypingIndicator"]>;
  MessagingV2DeleteChannelsSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:DeleteChannelsSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:DeleteChannelsSender"]>;
  MessagingV2FetchChannelsSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:FetchChannelsSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:FetchChannelsSender"]>;
  MessagingV2FetchDomainCertV4(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:FetchDomainCertV4">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:FetchDomainCertV4"]>;
  MessagingV2ListChannelsSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:ListChannelsSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:ListChannelsSender"]>;
  MessagingV2UpdateChannelsSender(...args: TwilioSmsFullApiOperationArgs<"messaging_v2:UpdateChannelsSender">): Promise<TwilioSmsFullApiOperationResponseMap["messaging_v2:UpdateChannelsSender"]>;
}

export const TwilioSmsFullApiMessagingV2GeneratedFunctionNames = [
  "MessagingV2CreateChannelsSender",
  "MessagingV2CreateTypingIndicator",
  "MessagingV2DeleteChannelsSender",
  "MessagingV2FetchChannelsSender",
  "MessagingV2FetchDomainCertV4",
  "MessagingV2ListChannelsSender",
  "MessagingV2UpdateChannelsSender"
] as const satisfies readonly (keyof TwilioSmsFullApiMessagingV2GeneratedClient)[];

export function createTwilioSmsFullApiMessagingV2GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiMessagingV2GeneratedClient {
  return {
    MessagingV2CreateChannelsSender: (...args) => callOperation("messaging_v2:CreateChannelsSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:CreateChannelsSender">)),
    MessagingV2CreateTypingIndicator: (...args) => callOperation("messaging_v2:CreateTypingIndicator", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:CreateTypingIndicator">)),
    MessagingV2DeleteChannelsSender: (...args) => callOperation("messaging_v2:DeleteChannelsSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:DeleteChannelsSender">)),
    MessagingV2FetchChannelsSender: (...args) => callOperation("messaging_v2:FetchChannelsSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:FetchChannelsSender">)),
    MessagingV2FetchDomainCertV4: (...args) => callOperation("messaging_v2:FetchDomainCertV4", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:FetchDomainCertV4">)),
    MessagingV2ListChannelsSender: (...args) => callOperation("messaging_v2:ListChannelsSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:ListChannelsSender">)),
    MessagingV2UpdateChannelsSender: (...args) => callOperation("messaging_v2:UpdateChannelsSender", ...(args as TwilioSmsFullApiOperationArgs<"messaging_v2:UpdateChannelsSender">)),
  };
}
