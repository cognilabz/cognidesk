// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiAuditLogsOperationKeys = [
  "GET /voice/api/v1/admin/auditLogs/auditable",
  "PUT /voice/api/v1/admin/auditLogs/search"
] as const;
export type RingCentralVoiceApiAuditLogsOperationKey = typeof RingCentralVoiceApiAuditLogsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiAuditLogsOperationPathParamMap {
  "GET /voice/api/v1/admin/auditLogs/auditable": {};
  "PUT /voice/api/v1/admin/auditLogs/search": {};
}

export interface RingCentralVoiceApiAuditLogsOperationRequestMap {
  "GET /voice/api/v1/admin/auditLogs/auditable": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/auditLogs/auditable">;
  "PUT /voice/api/v1/admin/auditLogs/search": RingCentralVoiceApiOperationInput<"PUT /voice/api/v1/admin/auditLogs/search">;
}

export interface RingCentralVoiceApiAuditLogsGeneratedClient {
  GetAuditableEntities(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/auditLogs/auditable">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/auditLogs/auditable"]>;
  SearchAuditLogs(...args: RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/auditLogs/search">): Promise<RingCentralVoiceApiOperationResponseMap["PUT /voice/api/v1/admin/auditLogs/search"]>;
}

export const RingCentralVoiceApiAuditLogsGeneratedFunctionNames = [
  "GetAuditableEntities",
  "SearchAuditLogs"
] as const satisfies readonly (keyof RingCentralVoiceApiAuditLogsGeneratedClient)[];

export function createRingCentralVoiceApiAuditLogsGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiAuditLogsGeneratedClient {
  return {
    GetAuditableEntities: (...args) => callOperation("GET /voice/api/v1/admin/auditLogs/auditable", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/auditLogs/auditable">)),
    SearchAuditLogs: (...args) => callOperation("PUT /voice/api/v1/admin/auditLogs/search", ...(args as RingCentralVoiceApiOperationArgs<"PUT /voice/api/v1/admin/auditLogs/search">)),
  };
}
