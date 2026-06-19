// Generated from official Vonage OpenAPI specs.
// Do not edit by hand; run scripts/generate-vonage-voice-full-api.mjs after checking upstream docs.

import type { VonageOperationRequestInput } from "./index.js";
import type {
  VonageVoiceFullApiOperationQueryMap,
  VonageVoiceFullApiOperationQueryRequiredMap,
  VonageVoiceFullApiOperationRequestBodyMap,
  VonageVoiceFullApiOperationRequestBodyRequiredMap,
  VonageVoiceFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createVonageVoiceFullApiApplicationV2GeneratedClient,
  VonageVoiceFullApiApplicationV2GeneratedFunctionNames,
  type VonageVoiceFullApiApplicationV2GeneratedClient,
  type VonageVoiceFullApiApplicationV2OperationPathParamMap,
  type VonageVoiceFullApiApplicationV2OperationRequestMap,
} from "./full-api.generated/client/application-v2-chunk.generated.js";
import {
  createVonageVoiceFullApiConversationV1GeneratedClient,
  VonageVoiceFullApiConversationV1GeneratedFunctionNames,
  type VonageVoiceFullApiConversationV1GeneratedClient,
  type VonageVoiceFullApiConversationV1OperationPathParamMap,
  type VonageVoiceFullApiConversationV1OperationRequestMap,
} from "./full-api.generated/client/conversation-v1-chunk.generated.js";
import {
  createVonageVoiceFullApiNumbersGeneratedClient,
  VonageVoiceFullApiNumbersGeneratedFunctionNames,
  type VonageVoiceFullApiNumbersGeneratedClient,
  type VonageVoiceFullApiNumbersOperationPathParamMap,
  type VonageVoiceFullApiNumbersOperationRequestMap,
} from "./full-api.generated/client/numbers-chunk.generated.js";
import {
  createVonageVoiceFullApiVoiceV1GeneratedClient,
  VonageVoiceFullApiVoiceV1GeneratedFunctionNames,
  type VonageVoiceFullApiVoiceV1GeneratedClient,
  type VonageVoiceFullApiVoiceV1OperationPathParamMap,
  type VonageVoiceFullApiVoiceV1OperationRequestMap,
} from "./full-api.generated/client/voice-v1-chunk.generated.js";
import {
  createVonageVoiceFullApiVoiceV2GeneratedClient,
  VonageVoiceFullApiVoiceV2GeneratedFunctionNames,
  type VonageVoiceFullApiVoiceV2GeneratedClient,
  type VonageVoiceFullApiVoiceV2OperationPathParamMap,
  type VonageVoiceFullApiVoiceV2OperationRequestMap,
} from "./full-api.generated/client/voice-v2-chunk.generated.js";

export type VonageVoiceFullApiPathParamValue = string | number;
export interface VonageVoiceFullApiOperationPathParamMap extends VonageVoiceFullApiApplicationV2OperationPathParamMap, VonageVoiceFullApiConversationV1OperationPathParamMap, VonageVoiceFullApiNumbersOperationPathParamMap, VonageVoiceFullApiVoiceV1OperationPathParamMap, VonageVoiceFullApiVoiceV2OperationPathParamMap {}

export type VonageVoiceFullApiOperationKey = keyof VonageVoiceFullApiOperationPathParamMap & string;

export type VonageVoiceFullApiOperationQueryInput<OperationKey extends VonageVoiceFullApiOperationKey> =
  VonageVoiceFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: VonageVoiceFullApiOperationQueryMap[OperationKey] }
    : { query?: VonageVoiceFullApiOperationQueryMap[OperationKey] };

export type VonageVoiceFullApiOperationBodyInput<OperationKey extends VonageVoiceFullApiOperationKey> =
  [VonageVoiceFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : VonageVoiceFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: VonageVoiceFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: VonageVoiceFullApiOperationRequestBodyMap[OperationKey] };

export type VonageVoiceFullApiOperationInput<OperationKey extends VonageVoiceFullApiOperationKey> = Omit<VonageOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends VonageVoiceFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: VonageVoiceFullApiOperationPathParamMap[OperationKey] }
) & VonageVoiceFullApiOperationQueryInput<OperationKey> & VonageVoiceFullApiOperationBodyInput<OperationKey>;

export interface VonageVoiceFullApiOperationRequestMap extends VonageVoiceFullApiApplicationV2OperationRequestMap, VonageVoiceFullApiConversationV1OperationRequestMap, VonageVoiceFullApiNumbersOperationRequestMap, VonageVoiceFullApiVoiceV1OperationRequestMap, VonageVoiceFullApiVoiceV2OperationRequestMap {}

export type VonageVoiceFullApiOperationArgs<OperationKey extends VonageVoiceFullApiOperationKey> = {} extends VonageVoiceFullApiOperationPathParamMap[OperationKey]
  ? [input?: VonageVoiceFullApiOperationRequestMap[OperationKey]]
  : [input: VonageVoiceFullApiOperationRequestMap[OperationKey]];

export type VonageGeneratedOperationCaller = <OperationKey extends VonageVoiceFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: VonageVoiceFullApiOperationArgs<OperationKey>
) => Promise<VonageVoiceFullApiOperationResponseMap[OperationKey]>;

export interface VonageVoiceFullApiGeneratedClient extends VonageVoiceFullApiApplicationV2GeneratedClient, VonageVoiceFullApiConversationV1GeneratedClient, VonageVoiceFullApiNumbersGeneratedClient, VonageVoiceFullApiVoiceV1GeneratedClient, VonageVoiceFullApiVoiceV2GeneratedClient {}

export const VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_COUNT = 47 as const;
export const VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...VonageVoiceFullApiApplicationV2GeneratedFunctionNames,
  ...VonageVoiceFullApiConversationV1GeneratedFunctionNames,
  ...VonageVoiceFullApiNumbersGeneratedFunctionNames,
  ...VonageVoiceFullApiVoiceV1GeneratedFunctionNames,
  ...VonageVoiceFullApiVoiceV2GeneratedFunctionNames,
] as const satisfies readonly (keyof VonageVoiceFullApiGeneratedClient)[];

export function createVonageVoiceFullApiGeneratedClient(
  callOperation: VonageGeneratedOperationCaller,
): VonageVoiceFullApiGeneratedClient {
  return Object.assign(
    {},
    createVonageVoiceFullApiApplicationV2GeneratedClient(callOperation),
    createVonageVoiceFullApiConversationV1GeneratedClient(callOperation),
    createVonageVoiceFullApiNumbersGeneratedClient(callOperation),
    createVonageVoiceFullApiVoiceV1GeneratedClient(callOperation),
    createVonageVoiceFullApiVoiceV2GeneratedClient(callOperation),
  ) as VonageVoiceFullApiGeneratedClient;
}
