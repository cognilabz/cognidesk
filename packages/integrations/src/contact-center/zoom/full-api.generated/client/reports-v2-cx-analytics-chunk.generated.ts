// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiReportsV2CXAnalyticsOperationKeys = [
  "GET /contact_center/analytics/dataset/historical/agent_performance",
  "GET /contact_center/analytics/dataset/historical/agent_timecard",
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}",
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema",
  "GET /contact_center/analytics/dataset/historical/disposition",
  "GET /contact_center/analytics/dataset/historical/engagement",
  "GET /contact_center/analytics/dataset/historical/engagement_timelines",
  "GET /contact_center/analytics/dataset/historical/expert_assist",
  "GET /contact_center/analytics/dataset/historical/flow_performance",
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance",
  "GET /contact_center/analytics/dataset/historical/queue_performance",
  "GET /contact_center/analytics/log/historical/engagement",
  "GET /contact_center/analytics/log/historical/journey",
  "GET /contact_center/reports/operation_logs"
] as const;
export type ZoomContactCenterFullApiReportsV2CXAnalyticsOperationKey = typeof ZoomContactCenterFullApiReportsV2CXAnalyticsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiReportsV2CXAnalyticsOperationPathParamMap {
  "GET /contact_center/analytics/dataset/historical/agent_performance": {};
  "GET /contact_center/analytics/dataset/historical/agent_timecard": {};
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": { "reportId": ZoomContactCenterFullApiPathParamValue; "widgetId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": { "reportId": ZoomContactCenterFullApiPathParamValue; "widgetId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/analytics/dataset/historical/disposition": {};
  "GET /contact_center/analytics/dataset/historical/engagement": {};
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": {};
  "GET /contact_center/analytics/dataset/historical/expert_assist": {};
  "GET /contact_center/analytics/dataset/historical/flow_performance": {};
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": {};
  "GET /contact_center/analytics/dataset/historical/queue_performance": {};
  "GET /contact_center/analytics/log/historical/engagement": {};
  "GET /contact_center/analytics/log/historical/journey": {};
  "GET /contact_center/reports/operation_logs": {};
}

export interface ZoomContactCenterFullApiReportsV2CXAnalyticsOperationRequestMap {
  "GET /contact_center/analytics/dataset/historical/agent_performance": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/agent_performance">;
  "GET /contact_center/analytics/dataset/historical/agent_timecard": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/agent_timecard">;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}">;
  "GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema">;
  "GET /contact_center/analytics/dataset/historical/disposition": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/disposition">;
  "GET /contact_center/analytics/dataset/historical/engagement": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/engagement">;
  "GET /contact_center/analytics/dataset/historical/engagement_timelines": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/engagement_timelines">;
  "GET /contact_center/analytics/dataset/historical/expert_assist": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/expert_assist">;
  "GET /contact_center/analytics/dataset/historical/flow_performance": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/flow_performance">;
  "GET /contact_center/analytics/dataset/historical/outbound_dialer_performance": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/outbound_dialer_performance">;
  "GET /contact_center/analytics/dataset/historical/queue_performance": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/dataset/historical/queue_performance">;
  "GET /contact_center/analytics/log/historical/engagement": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/log/historical/engagement">;
  "GET /contact_center/analytics/log/historical/journey": ZoomContactCenterFullApiOperationInput<"GET /contact_center/analytics/log/historical/journey">;
  "GET /contact_center/reports/operation_logs": ZoomContactCenterFullApiOperationInput<"GET /contact_center/reports/operation_logs">;
}

export interface ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient {
  Listhistoricalagentperformancedatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/agent_performance">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/agent_performance"]>;
  Listhistoricalagenttimecarddatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/agent_timecard">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/agent_timecard"]>;
  Listhistoricalcustomreporttabulardata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}"]>;
  GetHistoricalCustomReportTabularSchema(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema"]>;
  Listhistoricaldispositiondatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/disposition">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/disposition"]>;
  Listengagementdatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/engagement">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/engagement"]>;
  ListHistoricalEngagementTimelines(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/engagement_timelines">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/engagement_timelines"]>;
  Listexpertassistdatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/expert_assist">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/expert_assist"]>;
  Listhistoricalflowperformancedatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/flow_performance">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/flow_performance"]>;
  Listhistoricaloutbounddialerperformancedatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/outbound_dialer_performance">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/outbound_dialer_performance"]>;
  Listhistoricalqueueperformancedatasetdata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/queue_performance">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/dataset/historical/queue_performance"]>;
  Listhistoricalengagementlogs(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/log/historical/engagement">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/log/historical/engagement"]>;
  ListhistoricalZoomphonetozcccalljourneydata(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/log/historical/journey">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/analytics/log/historical/journey"]>;
  ListOperationLogs(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/reports/operation_logs">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/reports/operation_logs"]>;
}

export const ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedFunctionNames = [
  "Listhistoricalagentperformancedatasetdata",
  "Listhistoricalagenttimecarddatasetdata",
  "Listhistoricalcustomreporttabulardata",
  "GetHistoricalCustomReportTabularSchema",
  "Listhistoricaldispositiondatasetdata",
  "Listengagementdatasetdata",
  "ListHistoricalEngagementTimelines",
  "Listexpertassistdatasetdata",
  "Listhistoricalflowperformancedatasetdata",
  "Listhistoricaloutbounddialerperformancedatasetdata",
  "Listhistoricalqueueperformancedatasetdata",
  "Listhistoricalengagementlogs",
  "ListhistoricalZoomphonetozcccalljourneydata",
  "ListOperationLogs"
] as const satisfies readonly (keyof ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient)[];

export function createZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient {
  return {
    Listhistoricalagentperformancedatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/agent_performance", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/agent_performance">)),
    Listhistoricalagenttimecarddatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/agent_timecard", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/agent_timecard">)),
    Listhistoricalcustomreporttabulardata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}">)),
    GetHistoricalCustomReportTabularSchema: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/custom_reports/{reportId}/widgets/{widgetId}/schema">)),
    Listhistoricaldispositiondatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/disposition", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/disposition">)),
    Listengagementdatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/engagement", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/engagement">)),
    ListHistoricalEngagementTimelines: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/engagement_timelines", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/engagement_timelines">)),
    Listexpertassistdatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/expert_assist", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/expert_assist">)),
    Listhistoricalflowperformancedatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/flow_performance", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/flow_performance">)),
    Listhistoricaloutbounddialerperformancedatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/outbound_dialer_performance", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/outbound_dialer_performance">)),
    Listhistoricalqueueperformancedatasetdata: (...args) => callOperation("GET /contact_center/analytics/dataset/historical/queue_performance", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/dataset/historical/queue_performance">)),
    Listhistoricalengagementlogs: (...args) => callOperation("GET /contact_center/analytics/log/historical/engagement", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/log/historical/engagement">)),
    ListhistoricalZoomphonetozcccalljourneydata: (...args) => callOperation("GET /contact_center/analytics/log/historical/journey", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/analytics/log/historical/journey">)),
    ListOperationLogs: (...args) => callOperation("GET /contact_center/reports/operation_logs", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/reports/operation_logs">)),
  };
}
