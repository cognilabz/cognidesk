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
export const MailgunFullApiDomainWebhooksOperationKeys = [
  "GET /v3/domains/{domain}/webhooks",
  "POST /v3/domains/{domain}/webhooks",
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}",
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}",
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}",
  "PUT /v4/domains/{domain}/webhooks",
  "POST /v4/domains/{domain}/webhooks",
  "DELETE /v4/domains/{domain}/webhooks"
] as const;
export type MailgunFullApiDomainWebhooksOperationKey = typeof MailgunFullApiDomainWebhooksOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDomainWebhooksOperationPathParamMap {
  "GET /v3/domains/{domain}/webhooks": { "domain": MailgunFullApiPathParamValue };
  "POST /v3/domains/{domain}/webhooks": { "domain": MailgunFullApiPathParamValue };
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": { "domain_name": MailgunFullApiPathParamValue; "webhook_name": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": { "domain_name": MailgunFullApiPathParamValue; "webhook_name": MailgunFullApiPathParamValue };
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": { "domain_name": MailgunFullApiPathParamValue; "webhook_name": MailgunFullApiPathParamValue };
  "PUT /v4/domains/{domain}/webhooks": { "domain": MailgunFullApiPathParamValue };
  "POST /v4/domains/{domain}/webhooks": { "domain": MailgunFullApiPathParamValue };
  "DELETE /v4/domains/{domain}/webhooks": { "domain": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiDomainWebhooksOperationRequestMap {
  "GET /v3/domains/{domain}/webhooks": MailgunFullApiOperationInput<"GET /v3/domains/{domain}/webhooks">;
  "POST /v3/domains/{domain}/webhooks": MailgunFullApiOperationInput<"POST /v3/domains/{domain}/webhooks">;
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiOperationInput<"GET /v3/domains/{domain_name}/webhooks/{webhook_name}">;
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiOperationInput<"PUT /v3/domains/{domain_name}/webhooks/{webhook_name}">;
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiOperationInput<"DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}">;
  "PUT /v4/domains/{domain}/webhooks": MailgunFullApiOperationInput<"PUT /v4/domains/{domain}/webhooks">;
  "POST /v4/domains/{domain}/webhooks": MailgunFullApiOperationInput<"POST /v4/domains/{domain}/webhooks">;
  "DELETE /v4/domains/{domain}/webhooks": MailgunFullApiOperationInput<"DELETE /v4/domains/{domain}/webhooks">;
}

export interface MailgunFullApiDomainWebhooksGeneratedClient {
  GetDomainWebhooks(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/webhooks">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain}/webhooks"]>;
  CreateADomainWebhook(...args: MailgunFullApiOperationArgs<"POST /v3/domains/{domain}/webhooks">): Promise<MailgunFullApiOperationResponseMap["POST /v3/domains/{domain}/webhooks"]>;
  GetDomainWebhooksByType(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{domain_name}/webhooks/{webhook_name}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{domain_name}/webhooks/{webhook_name}"]>;
  UpdateDomainWebhook(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{domain_name}/webhooks/{webhook_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{domain_name}/webhooks/{webhook_name}"]>;
  DeleteDomainWebhooksByType(...args: MailgunFullApiOperationArgs<"DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}"]>;
  UpdateDomainWebhooksV4(...args: MailgunFullApiOperationArgs<"PUT /v4/domains/{domain}/webhooks">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/domains/{domain}/webhooks"]>;
  CreateDomainWebhooksV4(...args: MailgunFullApiOperationArgs<"POST /v4/domains/{domain}/webhooks">): Promise<MailgunFullApiOperationResponseMap["POST /v4/domains/{domain}/webhooks"]>;
  DeleteDomainWebhooksV4(...args: MailgunFullApiOperationArgs<"DELETE /v4/domains/{domain}/webhooks">): Promise<MailgunFullApiOperationResponseMap["DELETE /v4/domains/{domain}/webhooks"]>;
}

export const MailgunFullApiDomainWebhooksGeneratedFunctionNames = [
  "GetDomainWebhooks",
  "CreateADomainWebhook",
  "GetDomainWebhooksByType",
  "UpdateDomainWebhook",
  "DeleteDomainWebhooksByType",
  "UpdateDomainWebhooksV4",
  "CreateDomainWebhooksV4",
  "DeleteDomainWebhooksV4"
] as const satisfies readonly (keyof MailgunFullApiDomainWebhooksGeneratedClient)[];

export function createMailgunFullApiDomainWebhooksGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDomainWebhooksGeneratedClient {
  return {
    GetDomainWebhooks: (...args) => callOperation("GET /v3/domains/{domain}/webhooks", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain}/webhooks">)),
    CreateADomainWebhook: (...args) => callOperation("POST /v3/domains/{domain}/webhooks", ...(args as MailgunFullApiOperationArgs<"POST /v3/domains/{domain}/webhooks">)),
    GetDomainWebhooksByType: (...args) => callOperation("GET /v3/domains/{domain_name}/webhooks/{webhook_name}", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{domain_name}/webhooks/{webhook_name}">)),
    UpdateDomainWebhook: (...args) => callOperation("PUT /v3/domains/{domain_name}/webhooks/{webhook_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{domain_name}/webhooks/{webhook_name}">)),
    DeleteDomainWebhooksByType: (...args) => callOperation("DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}">)),
    UpdateDomainWebhooksV4: (...args) => callOperation("PUT /v4/domains/{domain}/webhooks", ...(args as MailgunFullApiOperationArgs<"PUT /v4/domains/{domain}/webhooks">)),
    CreateDomainWebhooksV4: (...args) => callOperation("POST /v4/domains/{domain}/webhooks", ...(args as MailgunFullApiOperationArgs<"POST /v4/domains/{domain}/webhooks">)),
    DeleteDomainWebhooksV4: (...args) => callOperation("DELETE /v4/domains/{domain}/webhooks", ...(args as MailgunFullApiOperationArgs<"DELETE /v4/domains/{domain}/webhooks">)),
  };
}
