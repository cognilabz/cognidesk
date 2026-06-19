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
export const MailgunFullApiAccountWebhooksOperationKeys = [
  "GET /v1/webhooks",
  "POST /v1/webhooks",
  "DELETE /v1/webhooks",
  "GET /v1/webhooks/{webhook_id}",
  "PUT /v1/webhooks/{webhook_id}",
  "DELETE /v1/webhooks/{webhook_id}"
] as const;
export type MailgunFullApiAccountWebhooksOperationKey = typeof MailgunFullApiAccountWebhooksOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiAccountWebhooksOperationPathParamMap {
  "GET /v1/webhooks": {};
  "POST /v1/webhooks": {};
  "DELETE /v1/webhooks": {};
  "GET /v1/webhooks/{webhook_id}": { "webhook_id": MailgunFullApiPathParamValue };
  "PUT /v1/webhooks/{webhook_id}": { "webhook_id": MailgunFullApiPathParamValue };
  "DELETE /v1/webhooks/{webhook_id}": { "webhook_id": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiAccountWebhooksOperationRequestMap {
  "GET /v1/webhooks": MailgunFullApiOperationInput<"GET /v1/webhooks">;
  "POST /v1/webhooks": MailgunFullApiOperationInput<"POST /v1/webhooks">;
  "DELETE /v1/webhooks": MailgunFullApiOperationInput<"DELETE /v1/webhooks">;
  "GET /v1/webhooks/{webhook_id}": MailgunFullApiOperationInput<"GET /v1/webhooks/{webhook_id}">;
  "PUT /v1/webhooks/{webhook_id}": MailgunFullApiOperationInput<"PUT /v1/webhooks/{webhook_id}">;
  "DELETE /v1/webhooks/{webhook_id}": MailgunFullApiOperationInput<"DELETE /v1/webhooks/{webhook_id}">;
}

export interface MailgunFullApiAccountWebhooksGeneratedClient {
  ListAccountLevelWebhooks(...args: MailgunFullApiOperationArgs<"GET /v1/webhooks">): Promise<MailgunFullApiOperationResponseMap["GET /v1/webhooks"]>;
  CreateAnAccountLevelWebhook(...args: MailgunFullApiOperationArgs<"POST /v1/webhooks">): Promise<MailgunFullApiOperationResponseMap["POST /v1/webhooks"]>;
  DeleteAccountLevelWebhooks(...args: MailgunFullApiOperationArgs<"DELETE /v1/webhooks">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/webhooks"]>;
  GetAccountLevelWebhookByID(...args: MailgunFullApiOperationArgs<"GET /v1/webhooks/{webhook_id}">): Promise<MailgunFullApiOperationResponseMap["GET /v1/webhooks/{webhook_id}"]>;
  UpdateAnAccountLevelWebhook(...args: MailgunFullApiOperationArgs<"PUT /v1/webhooks/{webhook_id}">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/webhooks/{webhook_id}"]>;
  DeleteAccountLevelWebhookByID(...args: MailgunFullApiOperationArgs<"DELETE /v1/webhooks/{webhook_id}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/webhooks/{webhook_id}"]>;
}

export const MailgunFullApiAccountWebhooksGeneratedFunctionNames = [
  "ListAccountLevelWebhooks",
  "CreateAnAccountLevelWebhook",
  "DeleteAccountLevelWebhooks",
  "GetAccountLevelWebhookByID",
  "UpdateAnAccountLevelWebhook",
  "DeleteAccountLevelWebhookByID"
] as const satisfies readonly (keyof MailgunFullApiAccountWebhooksGeneratedClient)[];

export function createMailgunFullApiAccountWebhooksGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiAccountWebhooksGeneratedClient {
  return {
    ListAccountLevelWebhooks: (...args) => callOperation("GET /v1/webhooks", ...(args as MailgunFullApiOperationArgs<"GET /v1/webhooks">)),
    CreateAnAccountLevelWebhook: (...args) => callOperation("POST /v1/webhooks", ...(args as MailgunFullApiOperationArgs<"POST /v1/webhooks">)),
    DeleteAccountLevelWebhooks: (...args) => callOperation("DELETE /v1/webhooks", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/webhooks">)),
    GetAccountLevelWebhookByID: (...args) => callOperation("GET /v1/webhooks/{webhook_id}", ...(args as MailgunFullApiOperationArgs<"GET /v1/webhooks/{webhook_id}">)),
    UpdateAnAccountLevelWebhook: (...args) => callOperation("PUT /v1/webhooks/{webhook_id}", ...(args as MailgunFullApiOperationArgs<"PUT /v1/webhooks/{webhook_id}">)),
    DeleteAccountLevelWebhookByID: (...args) => callOperation("DELETE /v1/webhooks/{webhook_id}", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/webhooks/{webhook_id}">)),
  };
}
