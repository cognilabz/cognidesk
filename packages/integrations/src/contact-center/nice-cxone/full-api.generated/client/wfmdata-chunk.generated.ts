// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiWFMDataOperationKeys = [
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts",
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents",
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts",
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence",
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards",
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance"
] as const;
export type NiceCxoneFullApiWFMDataOperationKey = typeof NiceCxoneFullApiWFMDataOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiWFMDataOperationPathParamMap {
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": {};
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": {};
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": {};
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": {};
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": {};
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": {};
}

export interface NiceCxoneFullApiWFMDataOperationRequestMap {
  "reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts">;
  "reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents">;
  "reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts">;
  "reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence">;
  "reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards">;
  "reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance">;
}

export interface NiceCxoneFullApiWFMDataGeneratedClient {
  ReportingReportingApiDocsWfmskillscontacts(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts"]>;
  ReportingReportingApiDocsWfmDataAgent(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents"]>;
  ReportingReportingApiDocsWfmDailerContactStatistics(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts"]>;
  ReportingReportingApiDocsWfmAdherenceStatistics(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence"]>;
  ReportingReportingApiDocsWfmAgentScorecard(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards"]>;
  ReportingReportingApiDocsWfmAgentPerformance(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance"]>;
}

export const NiceCxoneFullApiWFMDataGeneratedFunctionNames = [
  "ReportingReportingApiDocsWfmskillscontacts",
  "ReportingReportingApiDocsWfmDataAgent",
  "ReportingReportingApiDocsWfmDailerContactStatistics",
  "ReportingReportingApiDocsWfmAdherenceStatistics",
  "ReportingReportingApiDocsWfmAgentScorecard",
  "ReportingReportingApiDocsWfmAgentPerformance"
] as const satisfies readonly (keyof NiceCxoneFullApiWFMDataGeneratedClient)[];

export function createNiceCxoneFullApiWFMDataGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiWFMDataGeneratedClient {
  return {
    ReportingReportingApiDocsWfmskillscontacts: (...args) => callOperation("reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmskillscontacts:GET:/wfm-data/skills/contacts">)),
    ReportingReportingApiDocsWfmDataAgent: (...args) => callOperation("reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmDataAgent:GET:/wfm-data/agents">)),
    ReportingReportingApiDocsWfmDailerContactStatistics: (...args) => callOperation("reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmDailerContactStatistics:GET:/wfm-data/skills/dialer-contacts">)),
    ReportingReportingApiDocsWfmAdherenceStatistics: (...args) => callOperation("reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmAdherenceStatistics:GET:/wfm-data/agents/schedule-adherence">)),
    ReportingReportingApiDocsWfmAgentScorecard: (...args) => callOperation("reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmAgentScorecard:GET:/wfm-data/agents/scorecards">)),
    ReportingReportingApiDocsWfmAgentPerformance: (...args) => callOperation("reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:wfmAgentPerformance:GET:/wfm-data/skills/agent-performance">)),
  };
}
