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
export const NiceCxoneFullApiTableExportOperationKeys = [
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data",
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data",
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data",
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data",
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data"
] as const;
export type NiceCxoneFullApiTableExportOperationKey = typeof NiceCxoneFullApiTableExportOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiTableExportOperationPathParamMap {
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": {};
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": {};
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": {};
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": {};
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": {};
}

export interface NiceCxoneFullApiTableExportOperationRequestMap {
  "cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data": NiceCxoneFullApiOperationInput<"cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data">;
  "cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data": NiceCxoneFullApiOperationInput<"cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data">;
  "cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data": NiceCxoneFullApiOperationInput<"cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data">;
  "cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data": NiceCxoneFullApiOperationInput<"cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data">;
  "cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data": NiceCxoneFullApiOperationInput<"cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data">;
}

export interface NiceCxoneFullApiTableExportGeneratedClient {
  CxoneExportapiApiDocsExportCopilotKBTable(...args: NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data"]>;
  CxoneExportapiApiDocsExportCopilotAQTable(...args: NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data"]>;
  CxoneExportapiApiDocsExportCopilotASTable(...args: NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data"]>;
  CxoneExportapiApiDocsExportAutopilotKnowledgeGRTable(...args: NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data"]>;
  CxoneExportapiApiDocsExportAutopilotGRTable(...args: NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data"]>;
}

export const NiceCxoneFullApiTableExportGeneratedFunctionNames = [
  "CxoneExportapiApiDocsExportCopilotKBTable",
  "CxoneExportapiApiDocsExportCopilotAQTable",
  "CxoneExportapiApiDocsExportCopilotASTable",
  "CxoneExportapiApiDocsExportAutopilotKnowledgeGRTable",
  "CxoneExportapiApiDocsExportAutopilotGRTable"
] as const satisfies readonly (keyof NiceCxoneFullApiTableExportGeneratedClient)[];

export function createNiceCxoneFullApiTableExportGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiTableExportGeneratedClient {
  return {
    CxoneExportapiApiDocsExportCopilotKBTable: (...args) => callOperation("cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data", ...(args as NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportCopilotKBTable:POST:/observabilitydashboard/v2/tables/Copilot/KBTable/export-data">)),
    CxoneExportapiApiDocsExportCopilotAQTable: (...args) => callOperation("cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data", ...(args as NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportCopilotAQTable:POST:/observabilitydashboard/v2/tables/Copilot/AQTable/export-data">)),
    CxoneExportapiApiDocsExportCopilotASTable: (...args) => callOperation("cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data", ...(args as NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportCopilotASTable:POST:/observabilitydashboard/v2/tables/Copilot/ASTable/export-data">)),
    CxoneExportapiApiDocsExportAutopilotKnowledgeGRTable: (...args) => callOperation("cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data", ...(args as NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportAutopilotKnowledgeGRTable:POST:/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data">)),
    CxoneExportapiApiDocsExportAutopilotGRTable: (...args) => callOperation("cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data", ...(args as NiceCxoneFullApiOperationArgs<"cxone-exportapi-api-docs:exportAutopilotGRTable:POST:/observabilitydashboard/v2/tables/autopilot/GRTable/export-data">)),
  };
}
