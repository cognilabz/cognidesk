// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiTicketMetricEventsOperationKeys = [
  "ListTicketMetricEvents"
] as const;
export type ZendeskFullApiTicketMetricEventsOperationKey = typeof ZendeskFullApiTicketMetricEventsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketMetricEventsOperationPathParamMap {
  "ListTicketMetricEvents": {};
}

export interface ZendeskFullApiTicketMetricEventsOperationRequestMap {
  "ListTicketMetricEvents": ZendeskFullApiOperationInput<"ListTicketMetricEvents">;
}

export interface ZendeskFullApiTicketMetricEventsGeneratedClient {
  ListTicketMetricEvents(...args: ZendeskFullApiOperationArgs<"ListTicketMetricEvents">): Promise<ZendeskFullApiOperationResponseMap["ListTicketMetricEvents"]>;
}

export const ZendeskFullApiTicketMetricEventsGeneratedFunctionNames = [
  "ListTicketMetricEvents"
] as const satisfies readonly (keyof ZendeskFullApiTicketMetricEventsGeneratedClient)[];

export function createZendeskFullApiTicketMetricEventsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketMetricEventsGeneratedClient {
  return {
    ListTicketMetricEvents: (...args) => callOperation("ListTicketMetricEvents", ...(args as ZendeskFullApiOperationArgs<"ListTicketMetricEvents">)),
  };
}
