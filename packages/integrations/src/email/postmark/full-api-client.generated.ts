// Generated from Postmark official Swagger files (https://postmarkapp.com/swagger/server.yml, https://postmarkapp.com/swagger/account.yml).
// Do not edit by hand; run scripts/generate-postmark-full-api.mjs after checking upstream docs.

import type { PostmarkOperationRequestInput } from "./index.js";
import type {
  PostmarkFullApiOperationQueryMap,
  PostmarkFullApiOperationQueryRequiredMap,
  PostmarkFullApiOperationRequestBodyMap,
  PostmarkFullApiOperationRequestBodyRequiredMap,
  PostmarkFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createPostmarkFullApiBouncesGeneratedClient,
  PostmarkFullApiBouncesGeneratedFunctionNames,
  type PostmarkFullApiBouncesGeneratedClient,
  type PostmarkFullApiBouncesOperationPathParamMap,
  type PostmarkFullApiBouncesOperationRequestMap,
} from "./full-api.generated/client/bounces-chunk.generated.js";
import {
  createPostmarkFullApiDeliverystatsGeneratedClient,
  PostmarkFullApiDeliverystatsGeneratedFunctionNames,
  type PostmarkFullApiDeliverystatsGeneratedClient,
  type PostmarkFullApiDeliverystatsOperationPathParamMap,
  type PostmarkFullApiDeliverystatsOperationRequestMap,
} from "./full-api.generated/client/deliverystats-chunk.generated.js";
import {
  createPostmarkFullApiDomainsGeneratedClient,
  PostmarkFullApiDomainsGeneratedFunctionNames,
  type PostmarkFullApiDomainsGeneratedClient,
  type PostmarkFullApiDomainsOperationPathParamMap,
  type PostmarkFullApiDomainsOperationRequestMap,
} from "./full-api.generated/client/domains-chunk.generated.js";
import {
  createPostmarkFullApiEmailGeneratedClient,
  PostmarkFullApiEmailGeneratedFunctionNames,
  type PostmarkFullApiEmailGeneratedClient,
  type PostmarkFullApiEmailOperationPathParamMap,
  type PostmarkFullApiEmailOperationRequestMap,
} from "./full-api.generated/client/email-chunk.generated.js";
import {
  createPostmarkFullApiMessagesGeneratedClient,
  PostmarkFullApiMessagesGeneratedFunctionNames,
  type PostmarkFullApiMessagesGeneratedClient,
  type PostmarkFullApiMessagesOperationPathParamMap,
  type PostmarkFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createPostmarkFullApiSendersGeneratedClient,
  PostmarkFullApiSendersGeneratedFunctionNames,
  type PostmarkFullApiSendersGeneratedClient,
  type PostmarkFullApiSendersOperationPathParamMap,
  type PostmarkFullApiSendersOperationRequestMap,
} from "./full-api.generated/client/senders-chunk.generated.js";
import {
  createPostmarkFullApiServerGeneratedClient,
  PostmarkFullApiServerGeneratedFunctionNames,
  type PostmarkFullApiServerGeneratedClient,
  type PostmarkFullApiServerOperationPathParamMap,
  type PostmarkFullApiServerOperationRequestMap,
} from "./full-api.generated/client/server-chunk.generated.js";
import {
  createPostmarkFullApiServersGeneratedClient,
  PostmarkFullApiServersGeneratedFunctionNames,
  type PostmarkFullApiServersGeneratedClient,
  type PostmarkFullApiServersOperationPathParamMap,
  type PostmarkFullApiServersOperationRequestMap,
} from "./full-api.generated/client/servers-chunk.generated.js";
import {
  createPostmarkFullApiStatsGeneratedClient,
  PostmarkFullApiStatsGeneratedFunctionNames,
  type PostmarkFullApiStatsGeneratedClient,
  type PostmarkFullApiStatsOperationPathParamMap,
  type PostmarkFullApiStatsOperationRequestMap,
} from "./full-api.generated/client/stats-chunk.generated.js";
import {
  createPostmarkFullApiTemplatesGeneratedClient,
  PostmarkFullApiTemplatesGeneratedFunctionNames,
  type PostmarkFullApiTemplatesGeneratedClient,
  type PostmarkFullApiTemplatesOperationPathParamMap,
  type PostmarkFullApiTemplatesOperationRequestMap,
} from "./full-api.generated/client/templates-chunk.generated.js";
import {
  createPostmarkFullApiTriggersGeneratedClient,
  PostmarkFullApiTriggersGeneratedFunctionNames,
  type PostmarkFullApiTriggersGeneratedClient,
  type PostmarkFullApiTriggersOperationPathParamMap,
  type PostmarkFullApiTriggersOperationRequestMap,
} from "./full-api.generated/client/triggers-chunk.generated.js";

export type PostmarkFullApiPathParamValue = string | number;
export interface PostmarkFullApiOperationPathParamMap extends PostmarkFullApiBouncesOperationPathParamMap, PostmarkFullApiDeliverystatsOperationPathParamMap, PostmarkFullApiDomainsOperationPathParamMap, PostmarkFullApiEmailOperationPathParamMap, PostmarkFullApiMessagesOperationPathParamMap, PostmarkFullApiSendersOperationPathParamMap, PostmarkFullApiServerOperationPathParamMap, PostmarkFullApiServersOperationPathParamMap, PostmarkFullApiStatsOperationPathParamMap, PostmarkFullApiTemplatesOperationPathParamMap, PostmarkFullApiTriggersOperationPathParamMap {}

export type PostmarkFullApiOperationKey = keyof PostmarkFullApiOperationPathParamMap & string;

export type PostmarkFullApiOperationQueryInput<OperationKey extends PostmarkFullApiOperationKey> =
  PostmarkFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: PostmarkFullApiOperationQueryMap[OperationKey] }
    : { query?: PostmarkFullApiOperationQueryMap[OperationKey] };

export type PostmarkFullApiOperationBodyInput<OperationKey extends PostmarkFullApiOperationKey> =
  [PostmarkFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : PostmarkFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: PostmarkFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: PostmarkFullApiOperationRequestBodyMap[OperationKey] };

export type PostmarkFullApiOperationInput<OperationKey extends PostmarkFullApiOperationKey> = Omit<PostmarkOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends PostmarkFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: PostmarkFullApiOperationPathParamMap[OperationKey] }
) & PostmarkFullApiOperationQueryInput<OperationKey> & PostmarkFullApiOperationBodyInput<OperationKey>;

export interface PostmarkFullApiOperationRequestMap extends PostmarkFullApiBouncesOperationRequestMap, PostmarkFullApiDeliverystatsOperationRequestMap, PostmarkFullApiDomainsOperationRequestMap, PostmarkFullApiEmailOperationRequestMap, PostmarkFullApiMessagesOperationRequestMap, PostmarkFullApiSendersOperationRequestMap, PostmarkFullApiServerOperationRequestMap, PostmarkFullApiServersOperationRequestMap, PostmarkFullApiStatsOperationRequestMap, PostmarkFullApiTemplatesOperationRequestMap, PostmarkFullApiTriggersOperationRequestMap {}

export type PostmarkFullApiOperationArgs<OperationKey extends PostmarkFullApiOperationKey> = {} extends PostmarkFullApiOperationPathParamMap[OperationKey]
  ? [input?: PostmarkFullApiOperationRequestMap[OperationKey]]
  : [input: PostmarkFullApiOperationRequestMap[OperationKey]];

export type PostmarkGeneratedOperationCaller = <OperationKey extends PostmarkFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: PostmarkFullApiOperationArgs<OperationKey>
) => Promise<PostmarkFullApiOperationResponseMap[OperationKey]>;

export interface PostmarkFullApiGeneratedClient extends PostmarkFullApiBouncesGeneratedClient, PostmarkFullApiDeliverystatsGeneratedClient, PostmarkFullApiDomainsGeneratedClient, PostmarkFullApiEmailGeneratedClient, PostmarkFullApiMessagesGeneratedClient, PostmarkFullApiSendersGeneratedClient, PostmarkFullApiServerGeneratedClient, PostmarkFullApiServersGeneratedClient, PostmarkFullApiStatsGeneratedClient, PostmarkFullApiTemplatesGeneratedClient, PostmarkFullApiTriggersGeneratedClient {}

export const POSTMARK_FULL_API_GENERATED_FUNCTION_COUNT = 66 as const;
export const POSTMARK_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...PostmarkFullApiBouncesGeneratedFunctionNames,
  ...PostmarkFullApiDeliverystatsGeneratedFunctionNames,
  ...PostmarkFullApiDomainsGeneratedFunctionNames,
  ...PostmarkFullApiEmailGeneratedFunctionNames,
  ...PostmarkFullApiMessagesGeneratedFunctionNames,
  ...PostmarkFullApiSendersGeneratedFunctionNames,
  ...PostmarkFullApiServerGeneratedFunctionNames,
  ...PostmarkFullApiServersGeneratedFunctionNames,
  ...PostmarkFullApiStatsGeneratedFunctionNames,
  ...PostmarkFullApiTemplatesGeneratedFunctionNames,
  ...PostmarkFullApiTriggersGeneratedFunctionNames,
] as const satisfies readonly (keyof PostmarkFullApiGeneratedClient)[];

export function createPostmarkFullApiGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiGeneratedClient {
  return Object.assign(
    {},
    createPostmarkFullApiBouncesGeneratedClient(callOperation),
    createPostmarkFullApiDeliverystatsGeneratedClient(callOperation),
    createPostmarkFullApiDomainsGeneratedClient(callOperation),
    createPostmarkFullApiEmailGeneratedClient(callOperation),
    createPostmarkFullApiMessagesGeneratedClient(callOperation),
    createPostmarkFullApiSendersGeneratedClient(callOperation),
    createPostmarkFullApiServerGeneratedClient(callOperation),
    createPostmarkFullApiServersGeneratedClient(callOperation),
    createPostmarkFullApiStatsGeneratedClient(callOperation),
    createPostmarkFullApiTemplatesGeneratedClient(callOperation),
    createPostmarkFullApiTriggersGeneratedClient(callOperation),
  ) as PostmarkFullApiGeneratedClient;
}
