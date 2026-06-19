// Generated from Microsoft Graph v1.0 OpenAPI (https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml).
// This is the Outlook/mailbox slice for @cognidesk/integrations, not the full Microsoft Graph API.
// Do not edit by hand; run scripts/generate-outlook-graph-api.mjs after checking upstream docs.

import type { OutlookGraphOperationRequestInput } from "./index.js";
import type {
  OutlookGraphOperationQueryMap,
  OutlookGraphOperationQueryRequiredMap,
  OutlookGraphOperationRequestBodyMap,
  OutlookGraphOperationRequestBodyRequiredMap,
  OutlookGraphOperationResponseMap,
} from "./graph-api-schema-types.generated.js";
import {
  createOutlookGraphMeMailFolder01GeneratedClient,
  OutlookGraphMeMailFolder01GeneratedFunctionNames,
  type OutlookGraphMeMailFolder01GeneratedClient,
  type OutlookGraphMeMailFolder01OperationPathParamMap,
  type OutlookGraphMeMailFolder01OperationRequestMap,
} from "./graph-api.generated/client/me-mail-folder-01-chunk.generated.js";
import {
  createOutlookGraphMeMailFolder02GeneratedClient,
  OutlookGraphMeMailFolder02GeneratedFunctionNames,
  type OutlookGraphMeMailFolder02GeneratedClient,
  type OutlookGraphMeMailFolder02OperationPathParamMap,
  type OutlookGraphMeMailFolder02OperationRequestMap,
} from "./graph-api.generated/client/me-mail-folder-02-chunk.generated.js";
import {
  createOutlookGraphMeMessageGeneratedClient,
  OutlookGraphMeMessageGeneratedFunctionNames,
  type OutlookGraphMeMessageGeneratedClient,
  type OutlookGraphMeMessageOperationPathParamMap,
  type OutlookGraphMeMessageOperationRequestMap,
} from "./graph-api.generated/client/me-message-chunk.generated.js";
import {
  createOutlookGraphMeOutlookUserGeneratedClient,
  OutlookGraphMeOutlookUserGeneratedFunctionNames,
  type OutlookGraphMeOutlookUserGeneratedClient,
  type OutlookGraphMeOutlookUserOperationPathParamMap,
  type OutlookGraphMeOutlookUserOperationRequestMap,
} from "./graph-api.generated/client/me-outlook-user-chunk.generated.js";
import {
  createOutlookGraphMeUserGeneratedClient,
  OutlookGraphMeUserGeneratedFunctionNames,
  type OutlookGraphMeUserGeneratedClient,
  type OutlookGraphMeUserOperationPathParamMap,
  type OutlookGraphMeUserOperationRequestMap,
} from "./graph-api.generated/client/me-user-chunk.generated.js";
import {
  createOutlookGraphMeUserActionsGeneratedClient,
  OutlookGraphMeUserActionsGeneratedFunctionNames,
  type OutlookGraphMeUserActionsGeneratedClient,
  type OutlookGraphMeUserActionsOperationPathParamMap,
  type OutlookGraphMeUserActionsOperationRequestMap,
} from "./graph-api.generated/client/me-user-actions-chunk.generated.js";
import {
  createOutlookGraphSubscriptionsSubscriptionGeneratedClient,
  OutlookGraphSubscriptionsSubscriptionGeneratedFunctionNames,
  type OutlookGraphSubscriptionsSubscriptionGeneratedClient,
  type OutlookGraphSubscriptionsSubscriptionOperationPathParamMap,
  type OutlookGraphSubscriptionsSubscriptionOperationRequestMap,
} from "./graph-api.generated/client/subscriptions-subscription-chunk.generated.js";
import {
  createOutlookGraphSubscriptionsSubscriptionActionsGeneratedClient,
  OutlookGraphSubscriptionsSubscriptionActionsGeneratedFunctionNames,
  type OutlookGraphSubscriptionsSubscriptionActionsGeneratedClient,
  type OutlookGraphSubscriptionsSubscriptionActionsOperationPathParamMap,
  type OutlookGraphSubscriptionsSubscriptionActionsOperationRequestMap,
} from "./graph-api.generated/client/subscriptions-subscription-actions-chunk.generated.js";
import {
  createOutlookGraphUsersMailFolder01GeneratedClient,
  OutlookGraphUsersMailFolder01GeneratedFunctionNames,
  type OutlookGraphUsersMailFolder01GeneratedClient,
  type OutlookGraphUsersMailFolder01OperationPathParamMap,
  type OutlookGraphUsersMailFolder01OperationRequestMap,
} from "./graph-api.generated/client/users-mail-folder-01-chunk.generated.js";
import {
  createOutlookGraphUsersMailFolder02GeneratedClient,
  OutlookGraphUsersMailFolder02GeneratedFunctionNames,
  type OutlookGraphUsersMailFolder02GeneratedClient,
  type OutlookGraphUsersMailFolder02OperationPathParamMap,
  type OutlookGraphUsersMailFolder02OperationRequestMap,
} from "./graph-api.generated/client/users-mail-folder-02-chunk.generated.js";
import {
  createOutlookGraphUsersMessageGeneratedClient,
  OutlookGraphUsersMessageGeneratedFunctionNames,
  type OutlookGraphUsersMessageGeneratedClient,
  type OutlookGraphUsersMessageOperationPathParamMap,
  type OutlookGraphUsersMessageOperationRequestMap,
} from "./graph-api.generated/client/users-message-chunk.generated.js";
import {
  createOutlookGraphUsersOutlookUserGeneratedClient,
  OutlookGraphUsersOutlookUserGeneratedFunctionNames,
  type OutlookGraphUsersOutlookUserGeneratedClient,
  type OutlookGraphUsersOutlookUserOperationPathParamMap,
  type OutlookGraphUsersOutlookUserOperationRequestMap,
} from "./graph-api.generated/client/users-outlook-user-chunk.generated.js";
import {
  createOutlookGraphUsersUserGeneratedClient,
  OutlookGraphUsersUserGeneratedFunctionNames,
  type OutlookGraphUsersUserGeneratedClient,
  type OutlookGraphUsersUserOperationPathParamMap,
  type OutlookGraphUsersUserOperationRequestMap,
} from "./graph-api.generated/client/users-user-chunk.generated.js";
import {
  createOutlookGraphUsersUserActionsGeneratedClient,
  OutlookGraphUsersUserActionsGeneratedFunctionNames,
  type OutlookGraphUsersUserActionsGeneratedClient,
  type OutlookGraphUsersUserActionsOperationPathParamMap,
  type OutlookGraphUsersUserActionsOperationRequestMap,
} from "./graph-api.generated/client/users-user-actions-chunk.generated.js";

export type OutlookGraphPathParamValue = string | number;
export interface OutlookGraphOperationPathParamMap extends OutlookGraphMeMailFolder01OperationPathParamMap, OutlookGraphMeMailFolder02OperationPathParamMap, OutlookGraphMeMessageOperationPathParamMap, OutlookGraphMeOutlookUserOperationPathParamMap, OutlookGraphMeUserOperationPathParamMap, OutlookGraphMeUserActionsOperationPathParamMap, OutlookGraphSubscriptionsSubscriptionOperationPathParamMap, OutlookGraphSubscriptionsSubscriptionActionsOperationPathParamMap, OutlookGraphUsersMailFolder01OperationPathParamMap, OutlookGraphUsersMailFolder02OperationPathParamMap, OutlookGraphUsersMessageOperationPathParamMap, OutlookGraphUsersOutlookUserOperationPathParamMap, OutlookGraphUsersUserOperationPathParamMap, OutlookGraphUsersUserActionsOperationPathParamMap {}

export type OutlookGraphOperationKey = keyof OutlookGraphOperationPathParamMap & string;

export type OutlookGraphOperationQueryInput<OperationKey extends OutlookGraphOperationKey> =
  OutlookGraphOperationQueryRequiredMap[OperationKey] extends true
    ? { query: OutlookGraphOperationQueryMap[OperationKey] }
    : { query?: OutlookGraphOperationQueryMap[OperationKey] };

export type OutlookGraphOperationBodyInput<OperationKey extends OutlookGraphOperationKey> =
  [OutlookGraphOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : OutlookGraphOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: OutlookGraphOperationRequestBodyMap[OperationKey] }
      : { body?: OutlookGraphOperationRequestBodyMap[OperationKey] };

export type OutlookGraphOperationInput<OperationKey extends OutlookGraphOperationKey> = Omit<OutlookGraphOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends OutlookGraphOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: OutlookGraphOperationPathParamMap[OperationKey] }
) & OutlookGraphOperationQueryInput<OperationKey> & OutlookGraphOperationBodyInput<OperationKey>;

export interface OutlookGraphOperationRequestMap extends OutlookGraphMeMailFolder01OperationRequestMap, OutlookGraphMeMailFolder02OperationRequestMap, OutlookGraphMeMessageOperationRequestMap, OutlookGraphMeOutlookUserOperationRequestMap, OutlookGraphMeUserOperationRequestMap, OutlookGraphMeUserActionsOperationRequestMap, OutlookGraphSubscriptionsSubscriptionOperationRequestMap, OutlookGraphSubscriptionsSubscriptionActionsOperationRequestMap, OutlookGraphUsersMailFolder01OperationRequestMap, OutlookGraphUsersMailFolder02OperationRequestMap, OutlookGraphUsersMessageOperationRequestMap, OutlookGraphUsersOutlookUserOperationRequestMap, OutlookGraphUsersUserOperationRequestMap, OutlookGraphUsersUserActionsOperationRequestMap {}

export type OutlookGraphOperationArgs<OperationKey extends OutlookGraphOperationKey> = {} extends OutlookGraphOperationPathParamMap[OperationKey]
  ? [input?: OutlookGraphOperationRequestMap[OperationKey]]
  : [input: OutlookGraphOperationRequestMap[OperationKey]];

export type OutlookGraphGeneratedOperationCaller = <OperationKey extends OutlookGraphOperationKey>(
  operationKey: OperationKey,
  ...args: OutlookGraphOperationArgs<OperationKey>
) => Promise<OutlookGraphOperationResponseMap[OperationKey]>;

export interface OutlookGraphGeneratedClient extends OutlookGraphMeMailFolder01GeneratedClient, OutlookGraphMeMailFolder02GeneratedClient, OutlookGraphMeMessageGeneratedClient, OutlookGraphMeOutlookUserGeneratedClient, OutlookGraphMeUserGeneratedClient, OutlookGraphMeUserActionsGeneratedClient, OutlookGraphSubscriptionsSubscriptionGeneratedClient, OutlookGraphSubscriptionsSubscriptionActionsGeneratedClient, OutlookGraphUsersMailFolder01GeneratedClient, OutlookGraphUsersMailFolder02GeneratedClient, OutlookGraphUsersMessageGeneratedClient, OutlookGraphUsersOutlookUserGeneratedClient, OutlookGraphUsersUserGeneratedClient, OutlookGraphUsersUserActionsGeneratedClient {}

export const OUTLOOK_GRAPH_API_GENERATED_FUNCTION_COUNT = 289 as const;
export const OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES = [
  ...OutlookGraphMeMailFolder01GeneratedFunctionNames,
  ...OutlookGraphMeMailFolder02GeneratedFunctionNames,
  ...OutlookGraphMeMessageGeneratedFunctionNames,
  ...OutlookGraphMeOutlookUserGeneratedFunctionNames,
  ...OutlookGraphMeUserGeneratedFunctionNames,
  ...OutlookGraphMeUserActionsGeneratedFunctionNames,
  ...OutlookGraphSubscriptionsSubscriptionGeneratedFunctionNames,
  ...OutlookGraphSubscriptionsSubscriptionActionsGeneratedFunctionNames,
  ...OutlookGraphUsersMailFolder01GeneratedFunctionNames,
  ...OutlookGraphUsersMailFolder02GeneratedFunctionNames,
  ...OutlookGraphUsersMessageGeneratedFunctionNames,
  ...OutlookGraphUsersOutlookUserGeneratedFunctionNames,
  ...OutlookGraphUsersUserGeneratedFunctionNames,
  ...OutlookGraphUsersUserActionsGeneratedFunctionNames,
] as const satisfies readonly (keyof OutlookGraphGeneratedClient)[];

export function createOutlookGraphGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphGeneratedClient {
  return Object.assign(
    {},
    createOutlookGraphMeMailFolder01GeneratedClient(callOperation),
    createOutlookGraphMeMailFolder02GeneratedClient(callOperation),
    createOutlookGraphMeMessageGeneratedClient(callOperation),
    createOutlookGraphMeOutlookUserGeneratedClient(callOperation),
    createOutlookGraphMeUserGeneratedClient(callOperation),
    createOutlookGraphMeUserActionsGeneratedClient(callOperation),
    createOutlookGraphSubscriptionsSubscriptionGeneratedClient(callOperation),
    createOutlookGraphSubscriptionsSubscriptionActionsGeneratedClient(callOperation),
    createOutlookGraphUsersMailFolder01GeneratedClient(callOperation),
    createOutlookGraphUsersMailFolder02GeneratedClient(callOperation),
    createOutlookGraphUsersMessageGeneratedClient(callOperation),
    createOutlookGraphUsersOutlookUserGeneratedClient(callOperation),
    createOutlookGraphUsersUserGeneratedClient(callOperation),
    createOutlookGraphUsersUserActionsGeneratedClient(callOperation),
  ) as OutlookGraphGeneratedClient;
}
