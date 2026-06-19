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
export const MailgunFullApiMessagesOperationKeys = [
  "POST /v3/{domain_name}/messages",
  "POST /v3/{domain_name}/messages.mime",
  "GET /v3/domains/{domain_name}/messages/{storage_key}",
  "POST /v3/domains/{domain_name}/messages/{storage_key}",
  "GET /v3/domains/{name}/sending_queues",
  "DELETE /v3/{domain_name}/envelopes"
] as const;
export type MailgunFullApiMessagesOperationKey = typeof MailgunFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiMessagesOperationPathParamMap {
  "POST /v3/{domain_name}/messages": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/messages.mime": { "domain_name": MailgunFullApiPathParamValue };
  "GET /v3/domains/{domain_name}/messages/{storage_key}": { "domain_name": MailgunFullApiPathParamValue; "storage_key": MailgunFullApiPathParamValue };
  "POST /v3/domains/{domain_name}/messages/{storage_key}": { "domain_name": MailgunFullApiPathParamValue; "storage_key": MailgunFullApiPathParamValue };
  "GET /v3/domains/{name}/sending_queues": { "name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/envelopes": { "domain_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiMessagesOperationRequestMap {
  "POST /v3/{domain_name}/messages": MailgunFullApiOperationInput<"POST /v3/{domain_name}/messages">;
  "POST /v3/{domain_name}/messages.mime": MailgunFullApiOperationInput<"POST /v3/{domain_name}/messages.mime">;
  "GET /v3/domains/{domain_name}/messages/{storage_key}": MailgunFullApiOperationInput<"GET /v3/domains/{domain_name}/messages/{storage_key}">;
  "POST /v3/domains/{domain_name}/messages/{storage_key}": MailgunFullApiOperationInput<"POST /v3/domains/{domain_name}/messages/{storage_key}">;
  "GET /v3/domains/{name}/sending_queues": MailgunFullApiOperationInput<"GET /v3/domains/{name}/sending_queues">;
  "DELETE /v3/{domain_name}/envelopes": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/envelopes">;
}

export interface MailgunFullApiMessagesGeneratedClient {
  SendAnEmail(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/messages">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/messages"]>;
  SendAnEmailInMIMEFormat(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/messages.mime">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/messages.mime"]>;
  RetrieveAStoredEmail(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain_name}/messages/{storage_key}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain_name}/messages/{storage_key}"]>;
  ResendAnEmail(...args: MailgunFullApiOperationArgs<"POST /v3/domains/{domain_name}/messages/{storage_key}">): Promise<MailgunFullApiOperationResponseMap["POST /v3/domains/{domain_name}/messages/{storage_key}"]>;
  GetMessagesQueueStatus(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{name}/sending_queues">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{name}/sending_queues"]>;
  DeleteScheduledAndUndeliveredMail(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/envelopes">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/envelopes"]>;
}

export const MailgunFullApiMessagesGeneratedFunctionNames = [
  "SendAnEmail",
  "SendAnEmailInMIMEFormat",
  "RetrieveAStoredEmail",
  "ResendAnEmail",
  "GetMessagesQueueStatus",
  "DeleteScheduledAndUndeliveredMail"
] as const satisfies readonly (keyof MailgunFullApiMessagesGeneratedClient)[];

export function createMailgunFullApiMessagesGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiMessagesGeneratedClient {
  return {
    SendAnEmail: (...args) => callOperation("POST /v3/{domain_name}/messages", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/messages">)),
    SendAnEmailInMIMEFormat: (...args) => callOperation("POST /v3/{domain_name}/messages.mime", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/messages.mime">)),
    RetrieveAStoredEmail: (...args) => callOperation("GET /v3/domains/{domain_name}/messages/{storage_key}", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain_name}/messages/{storage_key}">)),
    ResendAnEmail: (...args) => callOperation("POST /v3/domains/{domain_name}/messages/{storage_key}", ...(args as MailgunFullApiOperationArgs<"POST /v3/domains/{domain_name}/messages/{storage_key}">)),
    GetMessagesQueueStatus: (...args) => callOperation("GET /v3/domains/{name}/sending_queues", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{name}/sending_queues">)),
    DeleteScheduledAndUndeliveredMail: (...args) => callOperation("DELETE /v3/{domain_name}/envelopes", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/envelopes">)),
  };
}
