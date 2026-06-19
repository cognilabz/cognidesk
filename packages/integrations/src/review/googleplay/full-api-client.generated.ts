// Generated from Google Play Android Publisher Discovery (https://androidpublisher.googleapis.com/$discovery/rest?version=v3).
// Do not edit by hand; run scripts/generate-googleplay-full-api.mjs after checking upstream docs.

import type { GooglePlayOperationRequestInput } from "./index.js";
import type {
  GooglePlayFullApiOperationQueryMap,
  GooglePlayFullApiOperationQueryRequiredMap,
  GooglePlayFullApiOperationRequestBodyMap,
  GooglePlayFullApiOperationRequestBodyRequiredMap,
  GooglePlayFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createGooglePlayFullApiAndroidpublisher01GeneratedClient,
  GooglePlayFullApiAndroidpublisher01GeneratedFunctionNames,
  type GooglePlayFullApiAndroidpublisher01GeneratedClient,
  type GooglePlayFullApiAndroidpublisher01OperationPathParamMap,
  type GooglePlayFullApiAndroidpublisher01OperationRequestMap,
} from "./full-api.generated/client/androidpublisher-01-chunk.generated.js";
import {
  createGooglePlayFullApiAndroidpublisher02GeneratedClient,
  GooglePlayFullApiAndroidpublisher02GeneratedFunctionNames,
  type GooglePlayFullApiAndroidpublisher02GeneratedClient,
  type GooglePlayFullApiAndroidpublisher02OperationPathParamMap,
  type GooglePlayFullApiAndroidpublisher02OperationRequestMap,
} from "./full-api.generated/client/androidpublisher-02-chunk.generated.js";

export type GooglePlayFullApiPathParamValue = string | number;
export interface GooglePlayFullApiOperationPathParamMap extends GooglePlayFullApiAndroidpublisher01OperationPathParamMap, GooglePlayFullApiAndroidpublisher02OperationPathParamMap {}

export type GooglePlayFullApiOperationKey = keyof GooglePlayFullApiOperationPathParamMap & string;

export type GooglePlayFullApiOperationQueryInput<OperationKey extends GooglePlayFullApiOperationKey> =
  GooglePlayFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: GooglePlayFullApiOperationQueryMap[OperationKey] }
    : { query?: GooglePlayFullApiOperationQueryMap[OperationKey] };

export type GooglePlayFullApiOperationBodyInput<OperationKey extends GooglePlayFullApiOperationKey> =
  [GooglePlayFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : GooglePlayFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: GooglePlayFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: GooglePlayFullApiOperationRequestBodyMap[OperationKey] };

export type GooglePlayFullApiOperationInput<OperationKey extends GooglePlayFullApiOperationKey> = Omit<GooglePlayOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends GooglePlayFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: GooglePlayFullApiOperationPathParamMap[OperationKey] }
) & GooglePlayFullApiOperationQueryInput<OperationKey> & GooglePlayFullApiOperationBodyInput<OperationKey>;

export interface GooglePlayFullApiOperationRequestMap extends GooglePlayFullApiAndroidpublisher01OperationRequestMap, GooglePlayFullApiAndroidpublisher02OperationRequestMap {}

export type GooglePlayFullApiOperationArgs<OperationKey extends GooglePlayFullApiOperationKey> = {} extends GooglePlayFullApiOperationPathParamMap[OperationKey]
  ? [input?: GooglePlayFullApiOperationRequestMap[OperationKey]]
  : [input: GooglePlayFullApiOperationRequestMap[OperationKey]];

export type GooglePlayGeneratedOperationCaller = <OperationKey extends GooglePlayFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: GooglePlayFullApiOperationArgs<OperationKey>
) => Promise<GooglePlayFullApiOperationResponseMap[OperationKey]>;

export interface GooglePlayFullApiGeneratedClient extends GooglePlayFullApiAndroidpublisher01GeneratedClient, GooglePlayFullApiAndroidpublisher02GeneratedClient {}

export const GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_COUNT = 137 as const;
export const GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...GooglePlayFullApiAndroidpublisher01GeneratedFunctionNames,
  ...GooglePlayFullApiAndroidpublisher02GeneratedFunctionNames,
] as const satisfies readonly (keyof GooglePlayFullApiGeneratedClient)[];

export function createGooglePlayFullApiGeneratedClient(
  callOperation: GooglePlayGeneratedOperationCaller,
): GooglePlayFullApiGeneratedClient {
  return Object.assign(
    {},
    createGooglePlayFullApiAndroidpublisher01GeneratedClient(callOperation),
    createGooglePlayFullApiAndroidpublisher02GeneratedClient(callOperation),
  ) as GooglePlayFullApiGeneratedClient;
}
