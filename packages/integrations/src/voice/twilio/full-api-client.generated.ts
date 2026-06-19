// Generated from Twilio's official twilio-oai OpenAPI specs (https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json).
// Do not edit by hand; run scripts/generate-twilio-full-api.mjs after checking upstream docs.

import type { TwilioVoiceOperationRequestInput } from "./index.js";
import type {
  TwilioVoiceFullApiOperationQueryMap,
  TwilioVoiceFullApiOperationQueryRequiredMap,
  TwilioVoiceFullApiOperationRequestBodyMap,
  TwilioVoiceFullApiOperationRequestBodyRequiredMap,
  TwilioVoiceFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createTwilioVoiceFullApiApiV201001GeneratedClient,
  TwilioVoiceFullApiApiV201001GeneratedFunctionNames,
  type TwilioVoiceFullApiApiV201001GeneratedClient,
  type TwilioVoiceFullApiApiV201001OperationPathParamMap,
  type TwilioVoiceFullApiApiV201001OperationRequestMap,
} from "./full-api.generated/client/api-v2010-01-chunk.generated.js";
import {
  createTwilioVoiceFullApiApiV201002GeneratedClient,
  TwilioVoiceFullApiApiV201002GeneratedFunctionNames,
  type TwilioVoiceFullApiApiV201002GeneratedClient,
  type TwilioVoiceFullApiApiV201002OperationPathParamMap,
  type TwilioVoiceFullApiApiV201002OperationRequestMap,
} from "./full-api.generated/client/api-v2010-02-chunk.generated.js";
import {
  createTwilioVoiceFullApiInsightsV1GeneratedClient,
  TwilioVoiceFullApiInsightsV1GeneratedFunctionNames,
  type TwilioVoiceFullApiInsightsV1GeneratedClient,
  type TwilioVoiceFullApiInsightsV1OperationPathParamMap,
  type TwilioVoiceFullApiInsightsV1OperationRequestMap,
} from "./full-api.generated/client/insights-v1-chunk.generated.js";
import {
  createTwilioVoiceFullApiInsightsV2GeneratedClient,
  TwilioVoiceFullApiInsightsV2GeneratedFunctionNames,
  type TwilioVoiceFullApiInsightsV2GeneratedClient,
  type TwilioVoiceFullApiInsightsV2OperationPathParamMap,
  type TwilioVoiceFullApiInsightsV2OperationRequestMap,
} from "./full-api.generated/client/insights-v2-chunk.generated.js";
import {
  createTwilioVoiceFullApiInsightsV3GeneratedClient,
  TwilioVoiceFullApiInsightsV3GeneratedFunctionNames,
  type TwilioVoiceFullApiInsightsV3GeneratedClient,
  type TwilioVoiceFullApiInsightsV3OperationPathParamMap,
  type TwilioVoiceFullApiInsightsV3OperationRequestMap,
} from "./full-api.generated/client/insights-v3-chunk.generated.js";
import {
  createTwilioVoiceFullApiTrunkingV1GeneratedClient,
  TwilioVoiceFullApiTrunkingV1GeneratedFunctionNames,
  type TwilioVoiceFullApiTrunkingV1GeneratedClient,
  type TwilioVoiceFullApiTrunkingV1OperationPathParamMap,
  type TwilioVoiceFullApiTrunkingV1OperationRequestMap,
} from "./full-api.generated/client/trunking-v1-chunk.generated.js";
import {
  createTwilioVoiceFullApiVoiceV1GeneratedClient,
  TwilioVoiceFullApiVoiceV1GeneratedFunctionNames,
  type TwilioVoiceFullApiVoiceV1GeneratedClient,
  type TwilioVoiceFullApiVoiceV1OperationPathParamMap,
  type TwilioVoiceFullApiVoiceV1OperationRequestMap,
} from "./full-api.generated/client/voice-v1-chunk.generated.js";
import {
  createTwilioVoiceFullApiVoiceV3GeneratedClient,
  TwilioVoiceFullApiVoiceV3GeneratedFunctionNames,
  type TwilioVoiceFullApiVoiceV3GeneratedClient,
  type TwilioVoiceFullApiVoiceV3OperationPathParamMap,
  type TwilioVoiceFullApiVoiceV3OperationRequestMap,
} from "./full-api.generated/client/voice-v3-chunk.generated.js";

export type TwilioVoiceFullApiPathParamValue = string | number;
export interface TwilioVoiceFullApiOperationPathParamMap extends TwilioVoiceFullApiApiV201001OperationPathParamMap, TwilioVoiceFullApiApiV201002OperationPathParamMap, TwilioVoiceFullApiInsightsV1OperationPathParamMap, TwilioVoiceFullApiInsightsV2OperationPathParamMap, TwilioVoiceFullApiInsightsV3OperationPathParamMap, TwilioVoiceFullApiTrunkingV1OperationPathParamMap, TwilioVoiceFullApiVoiceV1OperationPathParamMap, TwilioVoiceFullApiVoiceV3OperationPathParamMap {}

export type TwilioVoiceFullApiOperationKey = keyof TwilioVoiceFullApiOperationPathParamMap & string;

export type TwilioVoiceFullApiOperationQueryInput<OperationKey extends TwilioVoiceFullApiOperationKey> =
  TwilioVoiceFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: TwilioVoiceFullApiOperationQueryMap[OperationKey] }
    : { query?: TwilioVoiceFullApiOperationQueryMap[OperationKey] };

export type TwilioVoiceFullApiOperationBodyInput<OperationKey extends TwilioVoiceFullApiOperationKey> =
  [TwilioVoiceFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : TwilioVoiceFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: TwilioVoiceFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: TwilioVoiceFullApiOperationRequestBodyMap[OperationKey] };

export type TwilioVoiceFullApiOperationInput<OperationKey extends TwilioVoiceFullApiOperationKey> = Omit<TwilioVoiceOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends TwilioVoiceFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: TwilioVoiceFullApiOperationPathParamMap[OperationKey] }
) & TwilioVoiceFullApiOperationQueryInput<OperationKey> & TwilioVoiceFullApiOperationBodyInput<OperationKey>;

export interface TwilioVoiceFullApiOperationRequestMap extends TwilioVoiceFullApiApiV201001OperationRequestMap, TwilioVoiceFullApiApiV201002OperationRequestMap, TwilioVoiceFullApiInsightsV1OperationRequestMap, TwilioVoiceFullApiInsightsV2OperationRequestMap, TwilioVoiceFullApiInsightsV3OperationRequestMap, TwilioVoiceFullApiTrunkingV1OperationRequestMap, TwilioVoiceFullApiVoiceV1OperationRequestMap, TwilioVoiceFullApiVoiceV3OperationRequestMap {}

export type TwilioVoiceFullApiOperationArgs<OperationKey extends TwilioVoiceFullApiOperationKey> = {} extends TwilioVoiceFullApiOperationPathParamMap[OperationKey]
  ? [input?: TwilioVoiceFullApiOperationRequestMap[OperationKey]]
  : [input: TwilioVoiceFullApiOperationRequestMap[OperationKey]];

export type TwilioVoiceGeneratedOperationCaller = <OperationKey extends TwilioVoiceFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: TwilioVoiceFullApiOperationArgs<OperationKey>
) => Promise<TwilioVoiceFullApiOperationResponseMap[OperationKey]>;

export interface TwilioVoiceFullApiGeneratedClient extends TwilioVoiceFullApiApiV201001GeneratedClient, TwilioVoiceFullApiApiV201002GeneratedClient, TwilioVoiceFullApiInsightsV1GeneratedClient, TwilioVoiceFullApiInsightsV2GeneratedClient, TwilioVoiceFullApiInsightsV3GeneratedClient, TwilioVoiceFullApiTrunkingV1GeneratedClient, TwilioVoiceFullApiVoiceV1GeneratedClient, TwilioVoiceFullApiVoiceV3GeneratedClient {}

export const TWILIO_VOICE_FULL_API_GENERATED_FUNCTION_COUNT = 178 as const;
export const TWILIO_VOICE_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...TwilioVoiceFullApiApiV201001GeneratedFunctionNames,
  ...TwilioVoiceFullApiApiV201002GeneratedFunctionNames,
  ...TwilioVoiceFullApiInsightsV1GeneratedFunctionNames,
  ...TwilioVoiceFullApiInsightsV2GeneratedFunctionNames,
  ...TwilioVoiceFullApiInsightsV3GeneratedFunctionNames,
  ...TwilioVoiceFullApiTrunkingV1GeneratedFunctionNames,
  ...TwilioVoiceFullApiVoiceV1GeneratedFunctionNames,
  ...TwilioVoiceFullApiVoiceV3GeneratedFunctionNames,
] as const satisfies readonly (keyof TwilioVoiceFullApiGeneratedClient)[];

export function createTwilioVoiceFullApiGeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiGeneratedClient {
  return Object.assign(
    {},
    createTwilioVoiceFullApiApiV201001GeneratedClient(callOperation),
    createTwilioVoiceFullApiApiV201002GeneratedClient(callOperation),
    createTwilioVoiceFullApiInsightsV1GeneratedClient(callOperation),
    createTwilioVoiceFullApiInsightsV2GeneratedClient(callOperation),
    createTwilioVoiceFullApiInsightsV3GeneratedClient(callOperation),
    createTwilioVoiceFullApiTrunkingV1GeneratedClient(callOperation),
    createTwilioVoiceFullApiVoiceV1GeneratedClient(callOperation),
    createTwilioVoiceFullApiVoiceV3GeneratedClient(callOperation),
  ) as TwilioVoiceFullApiGeneratedClient;
}
