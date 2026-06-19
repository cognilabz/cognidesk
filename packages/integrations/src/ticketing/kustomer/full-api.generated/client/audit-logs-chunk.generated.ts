// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiAuditLogsOperationKeys = [
  "GetAuditLogs"
] as const;
export type KustomerFullApiAuditLogsOperationKey = typeof KustomerFullApiAuditLogsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiAuditLogsOperationPathParamMap {
  "GetAuditLogs": {};
}

export interface KustomerFullApiAuditLogsOperationRequestMap {
  "GetAuditLogs": KustomerFullApiOperationInput<"GetAuditLogs">;
}

export interface KustomerFullApiAuditLogsGeneratedClient {
  kustomerGetAuditLogs(...args: KustomerFullApiOperationArgs<"GetAuditLogs">): Promise<KustomerFullApiOperationResponseMap["GetAuditLogs"]>;
}

export const KustomerFullApiAuditLogsGeneratedFunctionNames = [
  "kustomerGetAuditLogs"
] as const satisfies readonly (keyof KustomerFullApiAuditLogsGeneratedClient)[];

export function createKustomerFullApiAuditLogsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiAuditLogsGeneratedClient {
  return {
    kustomerGetAuditLogs: (...args) => callOperation("GetAuditLogs", ...(args as KustomerFullApiOperationArgs<"GetAuditLogs">)),
  };
}
