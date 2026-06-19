// Generated from Twilio's official twilio-oai OpenAPI specs (https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json).
// Do not edit by hand; run scripts/generate-twilio-full-api.mjs after checking upstream docs.

import type { TwilioSmsOperationRequestInput } from "./index.js";
import type {
  TwilioSmsFullApiOperationQueryMap,
  TwilioSmsFullApiOperationQueryRequiredMap,
  TwilioSmsFullApiOperationRequestBodyMap,
  TwilioSmsFullApiOperationRequestBodyRequiredMap,
  TwilioSmsFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createTwilioSmsFullApiApiV2010GeneratedClient,
  TwilioSmsFullApiApiV2010GeneratedFunctionNames,
  type TwilioSmsFullApiApiV2010GeneratedClient,
  type TwilioSmsFullApiApiV2010OperationPathParamMap,
  type TwilioSmsFullApiApiV2010OperationRequestMap,
} from "./full-api.generated/client/api-v2010-chunk.generated.js";
import {
  createTwilioSmsFullApiContentV1GeneratedClient,
  TwilioSmsFullApiContentV1GeneratedFunctionNames,
  type TwilioSmsFullApiContentV1GeneratedClient,
  type TwilioSmsFullApiContentV1OperationPathParamMap,
  type TwilioSmsFullApiContentV1OperationRequestMap,
} from "./full-api.generated/client/content-v1-chunk.generated.js";
import {
  createTwilioSmsFullApiContentV2GeneratedClient,
  TwilioSmsFullApiContentV2GeneratedFunctionNames,
  type TwilioSmsFullApiContentV2GeneratedClient,
  type TwilioSmsFullApiContentV2OperationPathParamMap,
  type TwilioSmsFullApiContentV2OperationRequestMap,
} from "./full-api.generated/client/content-v2-chunk.generated.js";
import {
  createTwilioSmsFullApiConversationsV101GeneratedClient,
  TwilioSmsFullApiConversationsV101GeneratedFunctionNames,
  type TwilioSmsFullApiConversationsV101GeneratedClient,
  type TwilioSmsFullApiConversationsV101OperationPathParamMap,
  type TwilioSmsFullApiConversationsV101OperationRequestMap,
} from "./full-api.generated/client/conversations-v1-01-chunk.generated.js";
import {
  createTwilioSmsFullApiConversationsV102GeneratedClient,
  TwilioSmsFullApiConversationsV102GeneratedFunctionNames,
  type TwilioSmsFullApiConversationsV102GeneratedClient,
  type TwilioSmsFullApiConversationsV102OperationPathParamMap,
  type TwilioSmsFullApiConversationsV102OperationRequestMap,
} from "./full-api.generated/client/conversations-v1-02-chunk.generated.js";
import {
  createTwilioSmsFullApiConversationsV2GeneratedClient,
  TwilioSmsFullApiConversationsV2GeneratedFunctionNames,
  type TwilioSmsFullApiConversationsV2GeneratedClient,
  type TwilioSmsFullApiConversationsV2OperationPathParamMap,
  type TwilioSmsFullApiConversationsV2OperationRequestMap,
} from "./full-api.generated/client/conversations-v2-chunk.generated.js";
import {
  createTwilioSmsFullApiMessagingV1GeneratedClient,
  TwilioSmsFullApiMessagingV1GeneratedFunctionNames,
  type TwilioSmsFullApiMessagingV1GeneratedClient,
  type TwilioSmsFullApiMessagingV1OperationPathParamMap,
  type TwilioSmsFullApiMessagingV1OperationRequestMap,
} from "./full-api.generated/client/messaging-v1-chunk.generated.js";
import {
  createTwilioSmsFullApiMessagingV2GeneratedClient,
  TwilioSmsFullApiMessagingV2GeneratedFunctionNames,
  type TwilioSmsFullApiMessagingV2GeneratedClient,
  type TwilioSmsFullApiMessagingV2OperationPathParamMap,
  type TwilioSmsFullApiMessagingV2OperationRequestMap,
} from "./full-api.generated/client/messaging-v2-chunk.generated.js";
import {
  createTwilioSmsFullApiMessagingV3GeneratedClient,
  TwilioSmsFullApiMessagingV3GeneratedFunctionNames,
  type TwilioSmsFullApiMessagingV3GeneratedClient,
  type TwilioSmsFullApiMessagingV3OperationPathParamMap,
  type TwilioSmsFullApiMessagingV3OperationRequestMap,
} from "./full-api.generated/client/messaging-v3-chunk.generated.js";
import {
  createTwilioSmsFullApiStudioV1GeneratedClient,
  TwilioSmsFullApiStudioV1GeneratedFunctionNames,
  type TwilioSmsFullApiStudioV1GeneratedClient,
  type TwilioSmsFullApiStudioV1OperationPathParamMap,
  type TwilioSmsFullApiStudioV1OperationRequestMap,
} from "./full-api.generated/client/studio-v1-chunk.generated.js";
import {
  createTwilioSmsFullApiStudioV2GeneratedClient,
  TwilioSmsFullApiStudioV2GeneratedFunctionNames,
  type TwilioSmsFullApiStudioV2GeneratedClient,
  type TwilioSmsFullApiStudioV2OperationPathParamMap,
  type TwilioSmsFullApiStudioV2OperationRequestMap,
} from "./full-api.generated/client/studio-v2-chunk.generated.js";
import {
  createTwilioSmsFullApiVerifyV2GeneratedClient,
  TwilioSmsFullApiVerifyV2GeneratedFunctionNames,
  type TwilioSmsFullApiVerifyV2GeneratedClient,
  type TwilioSmsFullApiVerifyV2OperationPathParamMap,
  type TwilioSmsFullApiVerifyV2OperationRequestMap,
} from "./full-api.generated/client/verify-v2-chunk.generated.js";

export type TwilioSmsFullApiPathParamValue = string | number;
export interface TwilioSmsFullApiOperationPathParamMap extends TwilioSmsFullApiApiV2010OperationPathParamMap, TwilioSmsFullApiContentV1OperationPathParamMap, TwilioSmsFullApiContentV2OperationPathParamMap, TwilioSmsFullApiConversationsV101OperationPathParamMap, TwilioSmsFullApiConversationsV102OperationPathParamMap, TwilioSmsFullApiConversationsV2OperationPathParamMap, TwilioSmsFullApiMessagingV1OperationPathParamMap, TwilioSmsFullApiMessagingV2OperationPathParamMap, TwilioSmsFullApiMessagingV3OperationPathParamMap, TwilioSmsFullApiStudioV1OperationPathParamMap, TwilioSmsFullApiStudioV2OperationPathParamMap, TwilioSmsFullApiVerifyV2OperationPathParamMap {}

export type TwilioSmsFullApiOperationKey = keyof TwilioSmsFullApiOperationPathParamMap & string;

export type TwilioSmsFullApiOperationQueryInput<OperationKey extends TwilioSmsFullApiOperationKey> =
  TwilioSmsFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: TwilioSmsFullApiOperationQueryMap[OperationKey] }
    : { query?: TwilioSmsFullApiOperationQueryMap[OperationKey] };

export type TwilioSmsFullApiOperationBodyInput<OperationKey extends TwilioSmsFullApiOperationKey> =
  [TwilioSmsFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : TwilioSmsFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: TwilioSmsFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: TwilioSmsFullApiOperationRequestBodyMap[OperationKey] };

export type TwilioSmsFullApiOperationInput<OperationKey extends TwilioSmsFullApiOperationKey> = Omit<TwilioSmsOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends TwilioSmsFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: TwilioSmsFullApiOperationPathParamMap[OperationKey] }
) & TwilioSmsFullApiOperationQueryInput<OperationKey> & TwilioSmsFullApiOperationBodyInput<OperationKey>;

export interface TwilioSmsFullApiOperationRequestMap extends TwilioSmsFullApiApiV2010OperationRequestMap, TwilioSmsFullApiContentV1OperationRequestMap, TwilioSmsFullApiContentV2OperationRequestMap, TwilioSmsFullApiConversationsV101OperationRequestMap, TwilioSmsFullApiConversationsV102OperationRequestMap, TwilioSmsFullApiConversationsV2OperationRequestMap, TwilioSmsFullApiMessagingV1OperationRequestMap, TwilioSmsFullApiMessagingV2OperationRequestMap, TwilioSmsFullApiMessagingV3OperationRequestMap, TwilioSmsFullApiStudioV1OperationRequestMap, TwilioSmsFullApiStudioV2OperationRequestMap, TwilioSmsFullApiVerifyV2OperationRequestMap {}

export type TwilioSmsFullApiOperationArgs<OperationKey extends TwilioSmsFullApiOperationKey> = {} extends TwilioSmsFullApiOperationPathParamMap[OperationKey]
  ? [input?: TwilioSmsFullApiOperationRequestMap[OperationKey]]
  : [input: TwilioSmsFullApiOperationRequestMap[OperationKey]];

export type TwilioSmsGeneratedOperationCaller = <OperationKey extends TwilioSmsFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: TwilioSmsFullApiOperationArgs<OperationKey>
) => Promise<TwilioSmsFullApiOperationResponseMap[OperationKey]>;

export interface TwilioSmsFullApiGeneratedClient extends TwilioSmsFullApiApiV2010GeneratedClient, TwilioSmsFullApiContentV1GeneratedClient, TwilioSmsFullApiContentV2GeneratedClient, TwilioSmsFullApiConversationsV101GeneratedClient, TwilioSmsFullApiConversationsV102GeneratedClient, TwilioSmsFullApiConversationsV2GeneratedClient, TwilioSmsFullApiMessagingV1GeneratedClient, TwilioSmsFullApiMessagingV2GeneratedClient, TwilioSmsFullApiMessagingV3GeneratedClient, TwilioSmsFullApiStudioV1GeneratedClient, TwilioSmsFullApiStudioV2GeneratedClient, TwilioSmsFullApiVerifyV2GeneratedClient {}

export const TWILIO_SMS_FULL_API_GENERATED_FUNCTION_COUNT = 309 as const;
export const TWILIO_SMS_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...TwilioSmsFullApiApiV2010GeneratedFunctionNames,
  ...TwilioSmsFullApiContentV1GeneratedFunctionNames,
  ...TwilioSmsFullApiContentV2GeneratedFunctionNames,
  ...TwilioSmsFullApiConversationsV101GeneratedFunctionNames,
  ...TwilioSmsFullApiConversationsV102GeneratedFunctionNames,
  ...TwilioSmsFullApiConversationsV2GeneratedFunctionNames,
  ...TwilioSmsFullApiMessagingV1GeneratedFunctionNames,
  ...TwilioSmsFullApiMessagingV2GeneratedFunctionNames,
  ...TwilioSmsFullApiMessagingV3GeneratedFunctionNames,
  ...TwilioSmsFullApiStudioV1GeneratedFunctionNames,
  ...TwilioSmsFullApiStudioV2GeneratedFunctionNames,
  ...TwilioSmsFullApiVerifyV2GeneratedFunctionNames,
] as const satisfies readonly (keyof TwilioSmsFullApiGeneratedClient)[];

export function createTwilioSmsFullApiGeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiGeneratedClient {
  return Object.assign(
    {},
    createTwilioSmsFullApiApiV2010GeneratedClient(callOperation),
    createTwilioSmsFullApiContentV1GeneratedClient(callOperation),
    createTwilioSmsFullApiContentV2GeneratedClient(callOperation),
    createTwilioSmsFullApiConversationsV101GeneratedClient(callOperation),
    createTwilioSmsFullApiConversationsV102GeneratedClient(callOperation),
    createTwilioSmsFullApiConversationsV2GeneratedClient(callOperation),
    createTwilioSmsFullApiMessagingV1GeneratedClient(callOperation),
    createTwilioSmsFullApiMessagingV2GeneratedClient(callOperation),
    createTwilioSmsFullApiMessagingV3GeneratedClient(callOperation),
    createTwilioSmsFullApiStudioV1GeneratedClient(callOperation),
    createTwilioSmsFullApiStudioV2GeneratedClient(callOperation),
    createTwilioSmsFullApiVerifyV2GeneratedClient(callOperation),
  ) as TwilioSmsFullApiGeneratedClient;
}
