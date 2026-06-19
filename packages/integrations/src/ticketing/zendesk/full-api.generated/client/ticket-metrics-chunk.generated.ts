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
export const ZendeskFullApiTicketMetricsOperationKeys = [
  "ListTicketMetrics",
  "ShowTicketMetrics",
  "ShowTicketMetricsByTicket"
] as const;
export type ZendeskFullApiTicketMetricsOperationKey = typeof ZendeskFullApiTicketMetricsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketMetricsOperationPathParamMap {
  "ListTicketMetrics": {};
  "ShowTicketMetrics": { "ticket_metric_id": ZendeskFullApiPathParamValue };
  "ShowTicketMetricsByTicket": { "ticket_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTicketMetricsOperationRequestMap {
  "ListTicketMetrics": ZendeskFullApiOperationInput<"ListTicketMetrics">;
  "ShowTicketMetrics": ZendeskFullApiOperationInput<"ShowTicketMetrics">;
  "ShowTicketMetricsByTicket": ZendeskFullApiOperationInput<"ShowTicketMetricsByTicket">;
}

export interface ZendeskFullApiTicketMetricsGeneratedClient {
  ListTicketMetrics(...args: ZendeskFullApiOperationArgs<"ListTicketMetrics">): Promise<ZendeskFullApiOperationResponseMap["ListTicketMetrics"]>;
  ShowTicketMetrics(...args: ZendeskFullApiOperationArgs<"ShowTicketMetrics">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketMetrics"]>;
  ShowTicketMetricsByTicket(...args: ZendeskFullApiOperationArgs<"ShowTicketMetricsByTicket">): Promise<ZendeskFullApiOperationResponseMap["ShowTicketMetricsByTicket"]>;
}

export const ZendeskFullApiTicketMetricsGeneratedFunctionNames = [
  "ListTicketMetrics",
  "ShowTicketMetrics",
  "ShowTicketMetricsByTicket"
] as const satisfies readonly (keyof ZendeskFullApiTicketMetricsGeneratedClient)[];

export function createZendeskFullApiTicketMetricsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketMetricsGeneratedClient {
  return {
    ListTicketMetrics: (...args) => callOperation("ListTicketMetrics", ...(args as ZendeskFullApiOperationArgs<"ListTicketMetrics">)),
    ShowTicketMetrics: (...args) => callOperation("ShowTicketMetrics", ...(args as ZendeskFullApiOperationArgs<"ShowTicketMetrics">)),
    ShowTicketMetricsByTicket: (...args) => callOperation("ShowTicketMetricsByTicket", ...(args as ZendeskFullApiOperationArgs<"ShowTicketMetricsByTicket">)),
  };
}
