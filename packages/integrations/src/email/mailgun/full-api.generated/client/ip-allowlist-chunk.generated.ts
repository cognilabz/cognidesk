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
export const MailgunFullApiIPAllowlistOperationKeys = [
  "GET /v2/ip_whitelist",
  "PUT /v2/ip_whitelist",
  "POST /v2/ip_whitelist",
  "DELETE /v2/ip_whitelist"
] as const;
export type MailgunFullApiIPAllowlistOperationKey = typeof MailgunFullApiIPAllowlistOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiIPAllowlistOperationPathParamMap {
  "GET /v2/ip_whitelist": {};
  "PUT /v2/ip_whitelist": {};
  "POST /v2/ip_whitelist": {};
  "DELETE /v2/ip_whitelist": {};
}

export interface MailgunFullApiIPAllowlistOperationRequestMap {
  "GET /v2/ip_whitelist": MailgunFullApiOperationInput<"GET /v2/ip_whitelist">;
  "PUT /v2/ip_whitelist": MailgunFullApiOperationInput<"PUT /v2/ip_whitelist">;
  "POST /v2/ip_whitelist": MailgunFullApiOperationInput<"POST /v2/ip_whitelist">;
  "DELETE /v2/ip_whitelist": MailgunFullApiOperationInput<"DELETE /v2/ip_whitelist">;
}

export interface MailgunFullApiIPAllowlistGeneratedClient {
  ListMailgunAccountIPAllowlistEntries(...args: MailgunFullApiOperationArgs<"GET /v2/ip_whitelist">): Promise<MailgunFullApiOperationResponseMap["GET /v2/ip_whitelist"]>;
  UpdateIndividualMailgunAccountIPAllowlistEntrySDescription(...args: MailgunFullApiOperationArgs<"PUT /v2/ip_whitelist">): Promise<MailgunFullApiOperationResponseMap["PUT /v2/ip_whitelist"]>;
  AddMailgunAccountIPAllowlistEntry(...args: MailgunFullApiOperationArgs<"POST /v2/ip_whitelist">): Promise<MailgunFullApiOperationResponseMap["POST /v2/ip_whitelist"]>;
  DeleteMailgunAccountIPAllowlistEntry(...args: MailgunFullApiOperationArgs<"DELETE /v2/ip_whitelist">): Promise<MailgunFullApiOperationResponseMap["DELETE /v2/ip_whitelist"]>;
}

export const MailgunFullApiIPAllowlistGeneratedFunctionNames = [
  "ListMailgunAccountIPAllowlistEntries",
  "UpdateIndividualMailgunAccountIPAllowlistEntrySDescription",
  "AddMailgunAccountIPAllowlistEntry",
  "DeleteMailgunAccountIPAllowlistEntry"
] as const satisfies readonly (keyof MailgunFullApiIPAllowlistGeneratedClient)[];

export function createMailgunFullApiIPAllowlistGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiIPAllowlistGeneratedClient {
  return {
    ListMailgunAccountIPAllowlistEntries: (...args) => callOperation("GET /v2/ip_whitelist", ...(args as MailgunFullApiOperationArgs<"GET /v2/ip_whitelist">)),
    UpdateIndividualMailgunAccountIPAllowlistEntrySDescription: (...args) => callOperation("PUT /v2/ip_whitelist", ...(args as MailgunFullApiOperationArgs<"PUT /v2/ip_whitelist">)),
    AddMailgunAccountIPAllowlistEntry: (...args) => callOperation("POST /v2/ip_whitelist", ...(args as MailgunFullApiOperationArgs<"POST /v2/ip_whitelist">)),
    DeleteMailgunAccountIPAllowlistEntry: (...args) => callOperation("DELETE /v2/ip_whitelist", ...(args as MailgunFullApiOperationArgs<"DELETE /v2/ip_whitelist">)),
  };
}
