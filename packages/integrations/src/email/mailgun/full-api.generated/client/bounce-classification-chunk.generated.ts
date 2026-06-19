// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiBounceClassificationOperationKeys = [
  "GET /v1/bounce-classification/stats",
  "GET /v1/bounce-classification/domains",
  "GET /v1/bounce-classification/domains/{domain}/entities",
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules",
  "GET /v1/bounce-classification/domains/{domain}/events",
  "GET /v1/bounce-classification/config/entities",
  "GET /v1/bounce-classification/config/rules",
  "POST /v2/bounce-classification/metrics"
] as const;
export type MailgunFullApiBounceClassificationOperationKey = typeof MailgunFullApiBounceClassificationOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiBounceClassificationOperationPathParamMap {
  "GET /v1/bounce-classification/stats": {};
  "GET /v1/bounce-classification/domains": {};
  "GET /v1/bounce-classification/domains/{domain}/entities": { "domain": MailgunFullApiPathParamValue };
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": { "domain": MailgunFullApiPathParamValue; "entity-id": MailgunFullApiPathParamValue };
  "GET /v1/bounce-classification/domains/{domain}/events": { "domain": MailgunFullApiPathParamValue };
  "GET /v1/bounce-classification/config/entities": {};
  "GET /v1/bounce-classification/config/rules": {};
  "POST /v2/bounce-classification/metrics": {};
}

export interface MailgunFullApiBounceClassificationOperationRequestMap {
  "GET /v1/bounce-classification/stats": MailgunFullApiOperationInput<"GET /v1/bounce-classification/stats">;
  "GET /v1/bounce-classification/domains": MailgunFullApiOperationInput<"GET /v1/bounce-classification/domains">;
  "GET /v1/bounce-classification/domains/{domain}/entities": MailgunFullApiOperationInput<"GET /v1/bounce-classification/domains/{domain}/entities">;
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": MailgunFullApiOperationInput<"GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules">;
  "GET /v1/bounce-classification/domains/{domain}/events": MailgunFullApiOperationInput<"GET /v1/bounce-classification/domains/{domain}/events">;
  "GET /v1/bounce-classification/config/entities": MailgunFullApiOperationInput<"GET /v1/bounce-classification/config/entities">;
  "GET /v1/bounce-classification/config/rules": MailgunFullApiOperationInput<"GET /v1/bounce-classification/config/rules">;
  "POST /v2/bounce-classification/metrics": MailgunFullApiOperationInput<"POST /v2/bounce-classification/metrics">;
}

export interface MailgunFullApiBounceClassificationGeneratedClient {
  ListStatisticsOrderedByTotalBounces(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/stats">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/stats"]>;
  ListDomainsStatisticPerAccount(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/domains"]>;
  ListStatisticPerDomain(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains/{domain}/entities">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/domains/{domain}/entities"]>;
  ListStatisticPerEntity(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules"]>;
  ListBounceLogs(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains/{domain}/events">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/domains/{domain}/events"]>;
  ListEntities(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/config/entities">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/config/entities"]>;
  ListRules(...args: MailgunFullApiOperationArgs<"GET /v1/bounce-classification/config/rules">): Promise<MailgunFullApiOperationResponseMap["GET /v1/bounce-classification/config/rules"]>;
  ListStatisticV2(...args: MailgunFullApiOperationArgs<"POST /v2/bounce-classification/metrics">): Promise<MailgunFullApiOperationResponseMap["POST /v2/bounce-classification/metrics"]>;
}

export const MailgunFullApiBounceClassificationGeneratedFunctionNames = [
  "ListStatisticsOrderedByTotalBounces",
  "ListDomainsStatisticPerAccount",
  "ListStatisticPerDomain",
  "ListStatisticPerEntity",
  "ListBounceLogs",
  "ListEntities",
  "ListRules",
  "ListStatisticV2"
] as const satisfies readonly (keyof MailgunFullApiBounceClassificationGeneratedClient)[];

export function createMailgunFullApiBounceClassificationGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiBounceClassificationGeneratedClient {
  return {
    ListStatisticsOrderedByTotalBounces: (...args) => callOperation("GET /v1/bounce-classification/stats", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/stats">)),
    ListDomainsStatisticPerAccount: (...args) => callOperation("GET /v1/bounce-classification/domains", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains">)),
    ListStatisticPerDomain: (...args) => callOperation("GET /v1/bounce-classification/domains/{domain}/entities", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains/{domain}/entities">)),
    ListStatisticPerEntity: (...args) => callOperation("GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules">)),
    ListBounceLogs: (...args) => callOperation("GET /v1/bounce-classification/domains/{domain}/events", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/domains/{domain}/events">)),
    ListEntities: (...args) => callOperation("GET /v1/bounce-classification/config/entities", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/config/entities">)),
    ListRules: (...args) => callOperation("GET /v1/bounce-classification/config/rules", ...(args as MailgunFullApiOperationArgs<"GET /v1/bounce-classification/config/rules">)),
    ListStatisticV2: (...args) => callOperation("POST /v2/bounce-classification/metrics", ...(args as MailgunFullApiOperationArgs<"POST /v2/bounce-classification/metrics">)),
  };
}
