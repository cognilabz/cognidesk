// Generated from Gmail API Discovery (https://gmail.googleapis.com/$discovery/rest?version=v1).
// Do not edit by hand; run scripts/generate-gmail-full-api.mjs after checking upstream docs.

import type { GmailOperationRequestInput } from "./index.js";
import type {
  GmailFullApiOperationQueryMap,
  GmailFullApiOperationQueryRequiredMap,
  GmailFullApiOperationRequestBodyMap,
  GmailFullApiOperationRequestBodyRequiredMap,
  GmailFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createGmailFullApiGmailGeneratedClient,
  GmailFullApiGmailGeneratedFunctionNames,
  type GmailFullApiGmailGeneratedClient,
  type GmailFullApiGmailOperationPathParamMap,
  type GmailFullApiGmailOperationRequestMap,
} from "./full-api.generated/client/gmail-chunk.generated.js";

export type GmailFullApiPathParamValue = string | number;
export interface GmailFullApiOperationPathParamMap extends GmailFullApiGmailOperationPathParamMap {}

export type GmailFullApiOperationKey = keyof GmailFullApiOperationPathParamMap & string;

export type GmailFullApiOperationQueryInput<OperationKey extends GmailFullApiOperationKey> =
  GmailFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: GmailFullApiOperationQueryMap[OperationKey] }
    : { query?: GmailFullApiOperationQueryMap[OperationKey] };

export type GmailFullApiOperationBodyInput<OperationKey extends GmailFullApiOperationKey> =
  [GmailFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : GmailFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: GmailFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: GmailFullApiOperationRequestBodyMap[OperationKey] };

export type GmailFullApiOperationInput<OperationKey extends GmailFullApiOperationKey> = Omit<GmailOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends GmailFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: GmailFullApiOperationPathParamMap[OperationKey] }
) & GmailFullApiOperationQueryInput<OperationKey> & GmailFullApiOperationBodyInput<OperationKey>;

export interface GmailFullApiOperationRequestMap extends GmailFullApiGmailOperationRequestMap {}

export type GmailFullApiOperationArgs<OperationKey extends GmailFullApiOperationKey> = {} extends GmailFullApiOperationPathParamMap[OperationKey]
  ? [input?: GmailFullApiOperationRequestMap[OperationKey]]
  : [input: GmailFullApiOperationRequestMap[OperationKey]];

export type GmailGeneratedOperationCaller = <OperationKey extends GmailFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: GmailFullApiOperationArgs<OperationKey>
) => Promise<GmailFullApiOperationResponseMap[OperationKey]>;

export interface GmailFullApiGeneratedClient extends GmailFullApiGmailGeneratedClient {}

export const GMAIL_FULL_API_GENERATED_FUNCTION_COUNT = 79 as const;
export const GMAIL_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...GmailFullApiGmailGeneratedFunctionNames,
] as const satisfies readonly (keyof GmailFullApiGeneratedClient)[];

export function createGmailFullApiGeneratedClient(
  callOperation: GmailGeneratedOperationCaller,
): GmailFullApiGeneratedClient {
  return Object.assign(
    {},
    createGmailFullApiGmailGeneratedClient(callOperation),
  ) as GmailFullApiGeneratedClient;
}
