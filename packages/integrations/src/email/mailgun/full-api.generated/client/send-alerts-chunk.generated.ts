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
export const MailgunFullApiSendAlertsOperationKeys = [
  "GET /v1/thresholds/alerts/send",
  "POST /v1/thresholds/alerts/send",
  "GET /v1/thresholds/alerts/send/{name}",
  "PUT /v1/thresholds/alerts/send/{name}",
  "DELETE /v1/thresholds/alerts/send/{name}",
  "GET /v1/thresholds/hits"
] as const;
export type MailgunFullApiSendAlertsOperationKey = typeof MailgunFullApiSendAlertsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiSendAlertsOperationPathParamMap {
  "GET /v1/thresholds/alerts/send": {};
  "POST /v1/thresholds/alerts/send": {};
  "GET /v1/thresholds/alerts/send/{name}": { "name": MailgunFullApiPathParamValue };
  "PUT /v1/thresholds/alerts/send/{name}": { "name": MailgunFullApiPathParamValue };
  "DELETE /v1/thresholds/alerts/send/{name}": { "name": MailgunFullApiPathParamValue };
  "GET /v1/thresholds/hits": {};
}

export interface MailgunFullApiSendAlertsOperationRequestMap {
  "GET /v1/thresholds/alerts/send": MailgunFullApiOperationInput<"GET /v1/thresholds/alerts/send">;
  "POST /v1/thresholds/alerts/send": MailgunFullApiOperationInput<"POST /v1/thresholds/alerts/send">;
  "GET /v1/thresholds/alerts/send/{name}": MailgunFullApiOperationInput<"GET /v1/thresholds/alerts/send/{name}">;
  "PUT /v1/thresholds/alerts/send/{name}": MailgunFullApiOperationInput<"PUT /v1/thresholds/alerts/send/{name}">;
  "DELETE /v1/thresholds/alerts/send/{name}": MailgunFullApiOperationInput<"DELETE /v1/thresholds/alerts/send/{name}">;
  "GET /v1/thresholds/hits": MailgunFullApiOperationInput<"GET /v1/thresholds/hits">;
}

export interface MailgunFullApiSendAlertsGeneratedClient {
  ListSendAlerts(...args: MailgunFullApiOperationArgs<"GET /v1/thresholds/alerts/send">): Promise<MailgunFullApiOperationResponseMap["GET /v1/thresholds/alerts/send"]>;
  CreateASendAlertForAnAccount(...args: MailgunFullApiOperationArgs<"POST /v1/thresholds/alerts/send">): Promise<MailgunFullApiOperationResponseMap["POST /v1/thresholds/alerts/send"]>;
  GetASendAlert(...args: MailgunFullApiOperationArgs<"GET /v1/thresholds/alerts/send/{name}">): Promise<MailgunFullApiOperationResponseMap["GET /v1/thresholds/alerts/send/{name}"]>;
  UpdateASendAlert(...args: MailgunFullApiOperationArgs<"PUT /v1/thresholds/alerts/send/{name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/thresholds/alerts/send/{name}"]>;
  DeleteASendAlert(...args: MailgunFullApiOperationArgs<"DELETE /v1/thresholds/alerts/send/{name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/thresholds/alerts/send/{name}"]>;
  ListAccountHits(...args: MailgunFullApiOperationArgs<"GET /v1/thresholds/hits">): Promise<MailgunFullApiOperationResponseMap["GET /v1/thresholds/hits"]>;
}

export const MailgunFullApiSendAlertsGeneratedFunctionNames = [
  "ListSendAlerts",
  "CreateASendAlertForAnAccount",
  "GetASendAlert",
  "UpdateASendAlert",
  "DeleteASendAlert",
  "ListAccountHits"
] as const satisfies readonly (keyof MailgunFullApiSendAlertsGeneratedClient)[];

export function createMailgunFullApiSendAlertsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiSendAlertsGeneratedClient {
  return {
    ListSendAlerts: (...args) => callOperation("GET /v1/thresholds/alerts/send", ...(args as MailgunFullApiOperationArgs<"GET /v1/thresholds/alerts/send">)),
    CreateASendAlertForAnAccount: (...args) => callOperation("POST /v1/thresholds/alerts/send", ...(args as MailgunFullApiOperationArgs<"POST /v1/thresholds/alerts/send">)),
    GetASendAlert: (...args) => callOperation("GET /v1/thresholds/alerts/send/{name}", ...(args as MailgunFullApiOperationArgs<"GET /v1/thresholds/alerts/send/{name}">)),
    UpdateASendAlert: (...args) => callOperation("PUT /v1/thresholds/alerts/send/{name}", ...(args as MailgunFullApiOperationArgs<"PUT /v1/thresholds/alerts/send/{name}">)),
    DeleteASendAlert: (...args) => callOperation("DELETE /v1/thresholds/alerts/send/{name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/thresholds/alerts/send/{name}">)),
    ListAccountHits: (...args) => callOperation("GET /v1/thresholds/hits", ...(args as MailgunFullApiOperationArgs<"GET /v1/thresholds/hits">)),
  };
}
