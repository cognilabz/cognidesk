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
export const TwilioSmsFullApiApiV2010OperationKeys = [
  "api_v2010:CreateMessage",
  "api_v2010:CreateMessageFeedback",
  "api_v2010:DeleteMedia",
  "api_v2010:DeleteMessage",
  "api_v2010:FetchMedia",
  "api_v2010:FetchMessage",
  "api_v2010:FetchShortCode",
  "api_v2010:ListMedia",
  "api_v2010:ListMessage",
  "api_v2010:ListShortCode",
  "api_v2010:UpdateMessage",
  "api_v2010:UpdateShortCode"
] as const;
export type TwilioSmsFullApiApiV2010OperationKey = typeof TwilioSmsFullApiApiV2010OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiApiV2010OperationPathParamMap {
  "api_v2010:CreateMessage": { "AccountSid": TwilioSmsFullApiPathParamValue };
  "api_v2010:CreateMessageFeedback": { "AccountSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue };
  "api_v2010:DeleteMedia": { "AccountSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "api_v2010:DeleteMessage": { "AccountSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "api_v2010:FetchMedia": { "AccountSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "api_v2010:FetchMessage": { "AccountSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "api_v2010:FetchShortCode": { "AccountSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "api_v2010:ListMedia": { "AccountSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue };
  "api_v2010:ListMessage": { "AccountSid": TwilioSmsFullApiPathParamValue };
  "api_v2010:ListShortCode": { "AccountSid": TwilioSmsFullApiPathParamValue };
  "api_v2010:UpdateMessage": { "AccountSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "api_v2010:UpdateShortCode": { "AccountSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiApiV2010OperationRequestMap {
  "api_v2010:CreateMessage": TwilioSmsFullApiOperationInput<"api_v2010:CreateMessage">;
  "api_v2010:CreateMessageFeedback": TwilioSmsFullApiOperationInput<"api_v2010:CreateMessageFeedback">;
  "api_v2010:DeleteMedia": TwilioSmsFullApiOperationInput<"api_v2010:DeleteMedia">;
  "api_v2010:DeleteMessage": TwilioSmsFullApiOperationInput<"api_v2010:DeleteMessage">;
  "api_v2010:FetchMedia": TwilioSmsFullApiOperationInput<"api_v2010:FetchMedia">;
  "api_v2010:FetchMessage": TwilioSmsFullApiOperationInput<"api_v2010:FetchMessage">;
  "api_v2010:FetchShortCode": TwilioSmsFullApiOperationInput<"api_v2010:FetchShortCode">;
  "api_v2010:ListMedia": TwilioSmsFullApiOperationInput<"api_v2010:ListMedia">;
  "api_v2010:ListMessage": TwilioSmsFullApiOperationInput<"api_v2010:ListMessage">;
  "api_v2010:ListShortCode": TwilioSmsFullApiOperationInput<"api_v2010:ListShortCode">;
  "api_v2010:UpdateMessage": TwilioSmsFullApiOperationInput<"api_v2010:UpdateMessage">;
  "api_v2010:UpdateShortCode": TwilioSmsFullApiOperationInput<"api_v2010:UpdateShortCode">;
}

export interface TwilioSmsFullApiApiV2010GeneratedClient {
  ApiV2010CreateMessage(...args: TwilioSmsFullApiOperationArgs<"api_v2010:CreateMessage">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:CreateMessage"]>;
  ApiV2010CreateMessageFeedback(...args: TwilioSmsFullApiOperationArgs<"api_v2010:CreateMessageFeedback">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:CreateMessageFeedback"]>;
  ApiV2010DeleteMedia(...args: TwilioSmsFullApiOperationArgs<"api_v2010:DeleteMedia">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:DeleteMedia"]>;
  ApiV2010DeleteMessage(...args: TwilioSmsFullApiOperationArgs<"api_v2010:DeleteMessage">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:DeleteMessage"]>;
  ApiV2010FetchMedia(...args: TwilioSmsFullApiOperationArgs<"api_v2010:FetchMedia">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:FetchMedia"]>;
  ApiV2010FetchMessage(...args: TwilioSmsFullApiOperationArgs<"api_v2010:FetchMessage">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:FetchMessage"]>;
  ApiV2010FetchShortCode(...args: TwilioSmsFullApiOperationArgs<"api_v2010:FetchShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:FetchShortCode"]>;
  ApiV2010ListMedia(...args: TwilioSmsFullApiOperationArgs<"api_v2010:ListMedia">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:ListMedia"]>;
  ApiV2010ListMessage(...args: TwilioSmsFullApiOperationArgs<"api_v2010:ListMessage">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:ListMessage"]>;
  ApiV2010ListShortCode(...args: TwilioSmsFullApiOperationArgs<"api_v2010:ListShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:ListShortCode"]>;
  ApiV2010UpdateMessage(...args: TwilioSmsFullApiOperationArgs<"api_v2010:UpdateMessage">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:UpdateMessage"]>;
  ApiV2010UpdateShortCode(...args: TwilioSmsFullApiOperationArgs<"api_v2010:UpdateShortCode">): Promise<TwilioSmsFullApiOperationResponseMap["api_v2010:UpdateShortCode"]>;
}

export const TwilioSmsFullApiApiV2010GeneratedFunctionNames = [
  "ApiV2010CreateMessage",
  "ApiV2010CreateMessageFeedback",
  "ApiV2010DeleteMedia",
  "ApiV2010DeleteMessage",
  "ApiV2010FetchMedia",
  "ApiV2010FetchMessage",
  "ApiV2010FetchShortCode",
  "ApiV2010ListMedia",
  "ApiV2010ListMessage",
  "ApiV2010ListShortCode",
  "ApiV2010UpdateMessage",
  "ApiV2010UpdateShortCode"
] as const satisfies readonly (keyof TwilioSmsFullApiApiV2010GeneratedClient)[];

export function createTwilioSmsFullApiApiV2010GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiApiV2010GeneratedClient {
  return {
    ApiV2010CreateMessage: (...args) => callOperation("api_v2010:CreateMessage", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:CreateMessage">)),
    ApiV2010CreateMessageFeedback: (...args) => callOperation("api_v2010:CreateMessageFeedback", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:CreateMessageFeedback">)),
    ApiV2010DeleteMedia: (...args) => callOperation("api_v2010:DeleteMedia", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:DeleteMedia">)),
    ApiV2010DeleteMessage: (...args) => callOperation("api_v2010:DeleteMessage", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:DeleteMessage">)),
    ApiV2010FetchMedia: (...args) => callOperation("api_v2010:FetchMedia", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:FetchMedia">)),
    ApiV2010FetchMessage: (...args) => callOperation("api_v2010:FetchMessage", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:FetchMessage">)),
    ApiV2010FetchShortCode: (...args) => callOperation("api_v2010:FetchShortCode", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:FetchShortCode">)),
    ApiV2010ListMedia: (...args) => callOperation("api_v2010:ListMedia", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:ListMedia">)),
    ApiV2010ListMessage: (...args) => callOperation("api_v2010:ListMessage", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:ListMessage">)),
    ApiV2010ListShortCode: (...args) => callOperation("api_v2010:ListShortCode", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:ListShortCode">)),
    ApiV2010UpdateMessage: (...args) => callOperation("api_v2010:UpdateMessage", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:UpdateMessage">)),
    ApiV2010UpdateShortCode: (...args) => callOperation("api_v2010:UpdateShortCode", ...(args as TwilioSmsFullApiOperationArgs<"api_v2010:UpdateShortCode">)),
  };
}
