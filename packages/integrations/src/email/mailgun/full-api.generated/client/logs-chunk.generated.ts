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
export const MailgunFullApiLogsOperationKeys = [
  "POST /v1/analytics/logs"
] as const;
export type MailgunFullApiLogsOperationKey = typeof MailgunFullApiLogsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiLogsOperationPathParamMap {
  "POST /v1/analytics/logs": {};
}

export interface MailgunFullApiLogsOperationRequestMap {
  "POST /v1/analytics/logs": MailgunFullApiOperationInput<"POST /v1/analytics/logs">;
}

export interface MailgunFullApiLogsGeneratedClient {
  ListLogs(...args: MailgunFullApiOperationArgs<"POST /v1/analytics/logs">): Promise<MailgunFullApiOperationResponseMap["POST /v1/analytics/logs"]>;
}

export const MailgunFullApiLogsGeneratedFunctionNames = [
  "ListLogs"
] as const satisfies readonly (keyof MailgunFullApiLogsGeneratedClient)[];

export function createMailgunFullApiLogsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiLogsGeneratedClient {
  return {
    ListLogs: (...args) => callOperation("POST /v1/analytics/logs", ...(args as MailgunFullApiOperationArgs<"POST /v1/analytics/logs">)),
  };
}
