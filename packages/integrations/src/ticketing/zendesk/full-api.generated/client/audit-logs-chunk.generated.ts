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
export const ZendeskFullApiAuditLogsOperationKeys = [
  "ExportAuditLogs",
  "ListAuditLogs",
  "ShowAuditLog"
] as const;
export type ZendeskFullApiAuditLogsOperationKey = typeof ZendeskFullApiAuditLogsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiAuditLogsOperationPathParamMap {
  "ExportAuditLogs": {};
  "ListAuditLogs": {};
  "ShowAuditLog": { "audit_log_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiAuditLogsOperationRequestMap {
  "ExportAuditLogs": ZendeskFullApiOperationInput<"ExportAuditLogs">;
  "ListAuditLogs": ZendeskFullApiOperationInput<"ListAuditLogs">;
  "ShowAuditLog": ZendeskFullApiOperationInput<"ShowAuditLog">;
}

export interface ZendeskFullApiAuditLogsGeneratedClient {
  ExportAuditLogs(...args: ZendeskFullApiOperationArgs<"ExportAuditLogs">): Promise<ZendeskFullApiOperationResponseMap["ExportAuditLogs"]>;
  ListAuditLogs(...args: ZendeskFullApiOperationArgs<"ListAuditLogs">): Promise<ZendeskFullApiOperationResponseMap["ListAuditLogs"]>;
  ShowAuditLog(...args: ZendeskFullApiOperationArgs<"ShowAuditLog">): Promise<ZendeskFullApiOperationResponseMap["ShowAuditLog"]>;
}

export const ZendeskFullApiAuditLogsGeneratedFunctionNames = [
  "ExportAuditLogs",
  "ListAuditLogs",
  "ShowAuditLog"
] as const satisfies readonly (keyof ZendeskFullApiAuditLogsGeneratedClient)[];

export function createZendeskFullApiAuditLogsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiAuditLogsGeneratedClient {
  return {
    ExportAuditLogs: (...args) => callOperation("ExportAuditLogs", ...(args as ZendeskFullApiOperationArgs<"ExportAuditLogs">)),
    ListAuditLogs: (...args) => callOperation("ListAuditLogs", ...(args as ZendeskFullApiOperationArgs<"ListAuditLogs">)),
    ShowAuditLog: (...args) => callOperation("ShowAuditLog", ...(args as ZendeskFullApiOperationArgs<"ShowAuditLog">)),
  };
}
