// Generated from Stripe OpenAPI 2026-05-27.dahlia (https://raw.githubusercontent.com/stripe/openapi/master/latest/openapi.spec3.json).
// Do not edit by hand; run scripts/generate-stripe-full-api.mjs after checking upstream docs.

import type { StripeOperationRequestInput } from "./index.js";
import type {
  StripeFullApiOperationQueryMap,
  StripeFullApiOperationQueryRequiredMap,
  StripeFullApiOperationRequestBodyMap,
  StripeFullApiOperationRequestBodyRequiredMap,
  StripeFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createStripeFullApiV101GeneratedClient,
  StripeFullApiV101GeneratedFunctionNames,
  type StripeFullApiV101GeneratedClient,
  type StripeFullApiV101OperationPathParamMap,
  type StripeFullApiV101OperationRequestMap,
} from "./full-api.generated/client/v1-01-chunk.generated.js";
import {
  createStripeFullApiV102GeneratedClient,
  StripeFullApiV102GeneratedFunctionNames,
  type StripeFullApiV102GeneratedClient,
  type StripeFullApiV102OperationPathParamMap,
  type StripeFullApiV102OperationRequestMap,
} from "./full-api.generated/client/v1-02-chunk.generated.js";
import {
  createStripeFullApiV103GeneratedClient,
  StripeFullApiV103GeneratedFunctionNames,
  type StripeFullApiV103GeneratedClient,
  type StripeFullApiV103OperationPathParamMap,
  type StripeFullApiV103OperationRequestMap,
} from "./full-api.generated/client/v1-03-chunk.generated.js";
import {
  createStripeFullApiV104GeneratedClient,
  StripeFullApiV104GeneratedFunctionNames,
  type StripeFullApiV104GeneratedClient,
  type StripeFullApiV104OperationPathParamMap,
  type StripeFullApiV104OperationRequestMap,
} from "./full-api.generated/client/v1-04-chunk.generated.js";
import {
  createStripeFullApiV105GeneratedClient,
  StripeFullApiV105GeneratedFunctionNames,
  type StripeFullApiV105GeneratedClient,
  type StripeFullApiV105OperationPathParamMap,
  type StripeFullApiV105OperationRequestMap,
} from "./full-api.generated/client/v1-05-chunk.generated.js";
import {
  createStripeFullApiV106GeneratedClient,
  StripeFullApiV106GeneratedFunctionNames,
  type StripeFullApiV106GeneratedClient,
  type StripeFullApiV106OperationPathParamMap,
  type StripeFullApiV106OperationRequestMap,
} from "./full-api.generated/client/v1-06-chunk.generated.js";
import {
  createStripeFullApiV107GeneratedClient,
  StripeFullApiV107GeneratedFunctionNames,
  type StripeFullApiV107GeneratedClient,
  type StripeFullApiV107OperationPathParamMap,
  type StripeFullApiV107OperationRequestMap,
} from "./full-api.generated/client/v1-07-chunk.generated.js";
import {
  createStripeFullApiV108GeneratedClient,
  StripeFullApiV108GeneratedFunctionNames,
  type StripeFullApiV108GeneratedClient,
  type StripeFullApiV108OperationPathParamMap,
  type StripeFullApiV108OperationRequestMap,
} from "./full-api.generated/client/v1-08-chunk.generated.js";
import {
  createStripeFullApiV2GeneratedClient,
  StripeFullApiV2GeneratedFunctionNames,
  type StripeFullApiV2GeneratedClient,
  type StripeFullApiV2OperationPathParamMap,
  type StripeFullApiV2OperationRequestMap,
} from "./full-api.generated/client/v2-chunk.generated.js";

export type StripeFullApiPathParamValue = string | number;
export interface StripeFullApiOperationPathParamMap extends StripeFullApiV101OperationPathParamMap, StripeFullApiV102OperationPathParamMap, StripeFullApiV103OperationPathParamMap, StripeFullApiV104OperationPathParamMap, StripeFullApiV105OperationPathParamMap, StripeFullApiV106OperationPathParamMap, StripeFullApiV107OperationPathParamMap, StripeFullApiV108OperationPathParamMap, StripeFullApiV2OperationPathParamMap {}

export type StripeFullApiOperationKey = keyof StripeFullApiOperationPathParamMap & string;

export type StripeFullApiOperationQueryInput<OperationKey extends StripeFullApiOperationKey> =
  StripeFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: StripeFullApiOperationQueryMap[OperationKey] }
    : { query?: StripeFullApiOperationQueryMap[OperationKey] };

export type StripeFullApiOperationBodyInput<OperationKey extends StripeFullApiOperationKey> =
  [StripeFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : StripeFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: StripeFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: StripeFullApiOperationRequestBodyMap[OperationKey] };

export type StripeFullApiOperationInput<OperationKey extends StripeFullApiOperationKey> = Omit<StripeOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends StripeFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: StripeFullApiOperationPathParamMap[OperationKey] }
) & StripeFullApiOperationQueryInput<OperationKey> & StripeFullApiOperationBodyInput<OperationKey>;

export interface StripeFullApiOperationRequestMap extends StripeFullApiV101OperationRequestMap, StripeFullApiV102OperationRequestMap, StripeFullApiV103OperationRequestMap, StripeFullApiV104OperationRequestMap, StripeFullApiV105OperationRequestMap, StripeFullApiV106OperationRequestMap, StripeFullApiV107OperationRequestMap, StripeFullApiV108OperationRequestMap, StripeFullApiV2OperationRequestMap {}

export type StripeFullApiOperationArgs<OperationKey extends StripeFullApiOperationKey> = {} extends StripeFullApiOperationPathParamMap[OperationKey]
  ? [input?: StripeFullApiOperationRequestMap[OperationKey]]
  : [input: StripeFullApiOperationRequestMap[OperationKey]];

export type StripeGeneratedOperationCaller = <OperationKey extends StripeFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: StripeFullApiOperationArgs<OperationKey>
) => Promise<StripeFullApiOperationResponseMap[OperationKey]>;

export interface StripeFullApiGeneratedClient extends StripeFullApiV101GeneratedClient, StripeFullApiV102GeneratedClient, StripeFullApiV103GeneratedClient, StripeFullApiV104GeneratedClient, StripeFullApiV105GeneratedClient, StripeFullApiV106GeneratedClient, StripeFullApiV107GeneratedClient, StripeFullApiV108GeneratedClient, StripeFullApiV2GeneratedClient {}

export const STRIPE_FULL_API_GENERATED_FUNCTION_COUNT = 619 as const;
export const STRIPE_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...StripeFullApiV101GeneratedFunctionNames,
  ...StripeFullApiV102GeneratedFunctionNames,
  ...StripeFullApiV103GeneratedFunctionNames,
  ...StripeFullApiV104GeneratedFunctionNames,
  ...StripeFullApiV105GeneratedFunctionNames,
  ...StripeFullApiV106GeneratedFunctionNames,
  ...StripeFullApiV107GeneratedFunctionNames,
  ...StripeFullApiV108GeneratedFunctionNames,
  ...StripeFullApiV2GeneratedFunctionNames,
] as const satisfies readonly (keyof StripeFullApiGeneratedClient)[];

export function createStripeFullApiGeneratedClient(
  callOperation: StripeGeneratedOperationCaller,
): StripeFullApiGeneratedClient {
  return Object.assign(
    {},
    createStripeFullApiV101GeneratedClient(callOperation),
    createStripeFullApiV102GeneratedClient(callOperation),
    createStripeFullApiV103GeneratedClient(callOperation),
    createStripeFullApiV104GeneratedClient(callOperation),
    createStripeFullApiV105GeneratedClient(callOperation),
    createStripeFullApiV106GeneratedClient(callOperation),
    createStripeFullApiV107GeneratedClient(callOperation),
    createStripeFullApiV108GeneratedClient(callOperation),
    createStripeFullApiV2GeneratedClient(callOperation),
  ) as StripeFullApiGeneratedClient;
}
