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
export const MailgunFullApiIPAddressWarmupOperationKeys = [
  "GET /v3/ip_warmups",
  "GET /v3/ip_warmups/{addr}",
  "POST /v3/ip_warmups/{addr}",
  "DELETE /v3/ip_warmups/{addr}"
] as const;
export type MailgunFullApiIPAddressWarmupOperationKey = typeof MailgunFullApiIPAddressWarmupOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiIPAddressWarmupOperationPathParamMap {
  "GET /v3/ip_warmups": {};
  "GET /v3/ip_warmups/{addr}": { "addr": MailgunFullApiPathParamValue };
  "POST /v3/ip_warmups/{addr}": { "addr": MailgunFullApiPathParamValue };
  "DELETE /v3/ip_warmups/{addr}": { "addr": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiIPAddressWarmupOperationRequestMap {
  "GET /v3/ip_warmups": MailgunFullApiOperationInput<"GET /v3/ip_warmups">;
  "GET /v3/ip_warmups/{addr}": MailgunFullApiOperationInput<"GET /v3/ip_warmups/{addr}">;
  "POST /v3/ip_warmups/{addr}": MailgunFullApiOperationInput<"POST /v3/ip_warmups/{addr}">;
  "DELETE /v3/ip_warmups/{addr}": MailgunFullApiOperationInput<"DELETE /v3/ip_warmups/{addr}">;
}

export interface MailgunFullApiIPAddressWarmupGeneratedClient {
  RetrievesTheListOfInFlightIPAddressWarmupStatuses(...args: MailgunFullApiOperationArgs<"GET /v3/ip_warmups">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ip_warmups"]>;
  RetrievesTheStatusOfAnInFlightIPWarmup(...args: MailgunFullApiOperationArgs<"GET /v3/ip_warmups/{addr}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/ip_warmups/{addr}"]>;
  CreatesAWarmupPlanForAnIPAddress(...args: MailgunFullApiOperationArgs<"POST /v3/ip_warmups/{addr}">): Promise<MailgunFullApiOperationResponseMap["POST /v3/ip_warmups/{addr}"]>;
  CancelsTheWarmupPlanForAnIPAddress(...args: MailgunFullApiOperationArgs<"DELETE /v3/ip_warmups/{addr}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/ip_warmups/{addr}"]>;
}

export const MailgunFullApiIPAddressWarmupGeneratedFunctionNames = [
  "RetrievesTheListOfInFlightIPAddressWarmupStatuses",
  "RetrievesTheStatusOfAnInFlightIPWarmup",
  "CreatesAWarmupPlanForAnIPAddress",
  "CancelsTheWarmupPlanForAnIPAddress"
] as const satisfies readonly (keyof MailgunFullApiIPAddressWarmupGeneratedClient)[];

export function createMailgunFullApiIPAddressWarmupGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiIPAddressWarmupGeneratedClient {
  return {
    RetrievesTheListOfInFlightIPAddressWarmupStatuses: (...args) => callOperation("GET /v3/ip_warmups", ...(args as MailgunFullApiOperationArgs<"GET /v3/ip_warmups">)),
    RetrievesTheStatusOfAnInFlightIPWarmup: (...args) => callOperation("GET /v3/ip_warmups/{addr}", ...(args as MailgunFullApiOperationArgs<"GET /v3/ip_warmups/{addr}">)),
    CreatesAWarmupPlanForAnIPAddress: (...args) => callOperation("POST /v3/ip_warmups/{addr}", ...(args as MailgunFullApiOperationArgs<"POST /v3/ip_warmups/{addr}">)),
    CancelsTheWarmupPlanForAnIPAddress: (...args) => callOperation("DELETE /v3/ip_warmups/{addr}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/ip_warmups/{addr}">)),
  };
}
