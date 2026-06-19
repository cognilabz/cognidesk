// Generated from AWS official API models (https://github.com/aws/api-models-aws/tree/main/models).
// Do not edit by hand; run scripts/generate-ses-full-api.mjs after checking upstream docs.

import type { SesOperationRequestInput } from "./index.js";
import type {
  SesFullApiOperationQueryMap,
  SesFullApiOperationQueryRequiredMap,
  SesFullApiOperationRequestBodyMap,
  SesFullApiOperationRequestBodyRequiredMap,
  SesFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createSesFullApiGeneralGeneratedClient,
  SesFullApiGeneralGeneratedFunctionNames,
  type SesFullApiGeneralGeneratedClient,
  type SesFullApiGeneralOperationPathParamMap,
  type SesFullApiGeneralOperationRequestMap,
} from "./full-api.generated/client/general-chunk.generated.js";
import {
  createSesFullApiV201GeneratedClient,
  SesFullApiV201GeneratedFunctionNames,
  type SesFullApiV201GeneratedClient,
  type SesFullApiV201OperationPathParamMap,
  type SesFullApiV201OperationRequestMap,
} from "./full-api.generated/client/v2-01-chunk.generated.js";
import {
  createSesFullApiV202GeneratedClient,
  SesFullApiV202GeneratedFunctionNames,
  type SesFullApiV202GeneratedClient,
  type SesFullApiV202OperationPathParamMap,
  type SesFullApiV202OperationRequestMap,
} from "./full-api.generated/client/v2-02-chunk.generated.js";

export type SesFullApiPathParamValue = string | number;
export interface SesFullApiOperationPathParamMap extends SesFullApiGeneralOperationPathParamMap, SesFullApiV201OperationPathParamMap, SesFullApiV202OperationPathParamMap {}

export type SesFullApiOperationKey = keyof SesFullApiOperationPathParamMap & string;

export type SesFullApiOperationQueryInput<OperationKey extends SesFullApiOperationKey> =
  SesFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: SesFullApiOperationQueryMap[OperationKey] }
    : { query?: SesFullApiOperationQueryMap[OperationKey] };

export type SesFullApiOperationBodyInput<OperationKey extends SesFullApiOperationKey> =
  [SesFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : SesFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: SesFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: SesFullApiOperationRequestBodyMap[OperationKey] };

export type SesFullApiOperationInput<OperationKey extends SesFullApiOperationKey> = Omit<SesOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends SesFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: SesFullApiOperationPathParamMap[OperationKey] }
) & SesFullApiOperationQueryInput<OperationKey> & SesFullApiOperationBodyInput<OperationKey>;

export interface SesFullApiOperationRequestMap extends SesFullApiGeneralOperationRequestMap, SesFullApiV201OperationRequestMap, SesFullApiV202OperationRequestMap {}

export type SesFullApiOperationArgs<OperationKey extends SesFullApiOperationKey> = {} extends SesFullApiOperationPathParamMap[OperationKey]
  ? [input?: SesFullApiOperationRequestMap[OperationKey]]
  : [input: SesFullApiOperationRequestMap[OperationKey]];

export type SesGeneratedOperationCaller = <OperationKey extends SesFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: SesFullApiOperationArgs<OperationKey>
) => Promise<SesFullApiOperationResponseMap[OperationKey]>;

export interface SesFullApiGeneratedClient extends SesFullApiGeneralGeneratedClient, SesFullApiV201GeneratedClient, SesFullApiV202GeneratedClient {}

export const SES_FULL_API_GENERATED_FUNCTION_COUNT = 182 as const;
export const SES_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...SesFullApiGeneralGeneratedFunctionNames,
  ...SesFullApiV201GeneratedFunctionNames,
  ...SesFullApiV202GeneratedFunctionNames,
] as const satisfies readonly (keyof SesFullApiGeneratedClient)[];

export function createSesFullApiGeneratedClient(
  callOperation: SesGeneratedOperationCaller,
): SesFullApiGeneratedClient {
  return Object.assign(
    {},
    createSesFullApiGeneralGeneratedClient(callOperation),
    createSesFullApiV201GeneratedClient(callOperation),
    createSesFullApiV202GeneratedClient(callOperation),
  ) as SesFullApiGeneratedClient;
}
