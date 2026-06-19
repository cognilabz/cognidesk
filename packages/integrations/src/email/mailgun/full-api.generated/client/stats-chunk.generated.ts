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
export const MailgunFullApiStatsOperationKeys = [
  "GET /v3/stats/total",
  "GET /v3/{domain}/stats/total",
  "GET /v3/stats/total/domains",
  "GET /v3/stats/filter",
  "GET /v3/{domain}/aggregates/providers",
  "GET /v3/{domain}/aggregates/devices",
  "GET /v3/{domain}/aggregates/countries"
] as const;
export type MailgunFullApiStatsOperationKey = typeof MailgunFullApiStatsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiStatsOperationPathParamMap {
  "GET /v3/stats/total": {};
  "GET /v3/{domain}/stats/total": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/stats/total/domains": {};
  "GET /v3/stats/filter": {};
  "GET /v3/{domain}/aggregates/providers": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/{domain}/aggregates/devices": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/{domain}/aggregates/countries": { "domain": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiStatsOperationRequestMap {
  "GET /v3/stats/total": MailgunFullApiOperationInput<"GET /v3/stats/total">;
  "GET /v3/{domain}/stats/total": MailgunFullApiOperationInput<"GET /v3/{domain}/stats/total">;
  "GET /v3/stats/total/domains": MailgunFullApiOperationInput<"GET /v3/stats/total/domains">;
  "GET /v3/stats/filter": MailgunFullApiOperationInput<"GET /v3/stats/filter">;
  "GET /v3/{domain}/aggregates/providers": MailgunFullApiOperationInput<"GET /v3/{domain}/aggregates/providers">;
  "GET /v3/{domain}/aggregates/devices": MailgunFullApiOperationInput<"GET /v3/{domain}/aggregates/devices">;
  "GET /v3/{domain}/aggregates/countries": MailgunFullApiOperationInput<"GET /v3/{domain}/aggregates/countries">;
}

export interface MailgunFullApiStatsGeneratedClient {
  TotalsForEntireAccount(...args: MailgunFullApiOperationArgs<"GET /v3/stats/total">): Promise<MailgunFullApiOperationResponseMap["GET /v3/stats/total"]>;
  TotalsForEntireDomain(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/stats/total">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/stats/total"]>;
  TotalsForAccountDomainsForASingleTimeResolution(...args: MailgunFullApiOperationArgs<"GET /v3/stats/total/domains">): Promise<MailgunFullApiOperationResponseMap["GET /v3/stats/total/domains"]>;
  FilteredGroupedTotalsForEntireAccount(...args: MailgunFullApiOperationArgs<"GET /v3/stats/filter">): Promise<MailgunFullApiOperationResponseMap["GET /v3/stats/filter"]>;
  AggregateCountsByESP(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/aggregates/providers">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/aggregates/providers"]>;
  AggregateCountsByDevicesTriggeringEvents(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/aggregates/devices">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/aggregates/devices"]>;
  AggregateCountsByCountry(...args: MailgunFullApiOperationArgs<"GET /v3/{domain}/aggregates/countries">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain}/aggregates/countries"]>;
}

export const MailgunFullApiStatsGeneratedFunctionNames = [
  "TotalsForEntireAccount",
  "TotalsForEntireDomain",
  "TotalsForAccountDomainsForASingleTimeResolution",
  "FilteredGroupedTotalsForEntireAccount",
  "AggregateCountsByESP",
  "AggregateCountsByDevicesTriggeringEvents",
  "AggregateCountsByCountry"
] as const satisfies readonly (keyof MailgunFullApiStatsGeneratedClient)[];

export function createMailgunFullApiStatsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiStatsGeneratedClient {
  return {
    TotalsForEntireAccount: (...args) => callOperation("GET /v3/stats/total", ...(args as MailgunFullApiOperationArgs<"GET /v3/stats/total">)),
    TotalsForEntireDomain: (...args) => callOperation("GET /v3/{domain}/stats/total", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/stats/total">)),
    TotalsForAccountDomainsForASingleTimeResolution: (...args) => callOperation("GET /v3/stats/total/domains", ...(args as MailgunFullApiOperationArgs<"GET /v3/stats/total/domains">)),
    FilteredGroupedTotalsForEntireAccount: (...args) => callOperation("GET /v3/stats/filter", ...(args as MailgunFullApiOperationArgs<"GET /v3/stats/filter">)),
    AggregateCountsByESP: (...args) => callOperation("GET /v3/{domain}/aggregates/providers", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/aggregates/providers">)),
    AggregateCountsByDevicesTriggeringEvents: (...args) => callOperation("GET /v3/{domain}/aggregates/devices", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/aggregates/devices">)),
    AggregateCountsByCountry: (...args) => callOperation("GET /v3/{domain}/aggregates/countries", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain}/aggregates/countries">)),
  };
}
