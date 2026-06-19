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
export const MailgunFullApiAlertsOperationKeys = [
  "GET /v1/alerts/events",
  "POST /v1/alerts/settings/events",
  "PUT /v1/alerts/settings/events/{id}",
  "DELETE /v1/alerts/settings/events/{id}",
  "GET /v1/alerts/settings",
  "PUT /v1/alerts/settings/slack",
  "DELETE /v1/alerts/settings/slack",
  "PUT /v1/alerts/settings/webhooks/signing_key",
  "POST /v1/alerts/webhooks/test",
  "POST /v1/alerts/email/test",
  "POST /v1/alerts/slack/test",
  "DELETE /v1/alerts/slack/oauth",
  "GET /v1/alerts/slack/channels/{id}",
  "GET /v1/alerts/slack/channels"
] as const;
export type MailgunFullApiAlertsOperationKey = typeof MailgunFullApiAlertsOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiAlertsOperationPathParamMap {
  "GET /v1/alerts/events": {};
  "POST /v1/alerts/settings/events": {};
  "PUT /v1/alerts/settings/events/{id}": { "id": MailgunFullApiPathParamValue };
  "DELETE /v1/alerts/settings/events/{id}": { "id": MailgunFullApiPathParamValue };
  "GET /v1/alerts/settings": {};
  "PUT /v1/alerts/settings/slack": {};
  "DELETE /v1/alerts/settings/slack": {};
  "PUT /v1/alerts/settings/webhooks/signing_key": {};
  "POST /v1/alerts/webhooks/test": {};
  "POST /v1/alerts/email/test": {};
  "POST /v1/alerts/slack/test": {};
  "DELETE /v1/alerts/slack/oauth": {};
  "GET /v1/alerts/slack/channels/{id}": { "id": MailgunFullApiPathParamValue };
  "GET /v1/alerts/slack/channels": {};
}

export interface MailgunFullApiAlertsOperationRequestMap {
  "GET /v1/alerts/events": MailgunFullApiOperationInput<"GET /v1/alerts/events">;
  "POST /v1/alerts/settings/events": MailgunFullApiOperationInput<"POST /v1/alerts/settings/events">;
  "PUT /v1/alerts/settings/events/{id}": MailgunFullApiOperationInput<"PUT /v1/alerts/settings/events/{id}">;
  "DELETE /v1/alerts/settings/events/{id}": MailgunFullApiOperationInput<"DELETE /v1/alerts/settings/events/{id}">;
  "GET /v1/alerts/settings": MailgunFullApiOperationInput<"GET /v1/alerts/settings">;
  "PUT /v1/alerts/settings/slack": MailgunFullApiOperationInput<"PUT /v1/alerts/settings/slack">;
  "DELETE /v1/alerts/settings/slack": MailgunFullApiOperationInput<"DELETE /v1/alerts/settings/slack">;
  "PUT /v1/alerts/settings/webhooks/signing_key": MailgunFullApiOperationInput<"PUT /v1/alerts/settings/webhooks/signing_key">;
  "POST /v1/alerts/webhooks/test": MailgunFullApiOperationInput<"POST /v1/alerts/webhooks/test">;
  "POST /v1/alerts/email/test": MailgunFullApiOperationInput<"POST /v1/alerts/email/test">;
  "POST /v1/alerts/slack/test": MailgunFullApiOperationInput<"POST /v1/alerts/slack/test">;
  "DELETE /v1/alerts/slack/oauth": MailgunFullApiOperationInput<"DELETE /v1/alerts/slack/oauth">;
  "GET /v1/alerts/slack/channels/{id}": MailgunFullApiOperationInput<"GET /v1/alerts/slack/channels/{id}">;
  "GET /v1/alerts/slack/channels": MailgunFullApiOperationInput<"GET /v1/alerts/slack/channels">;
}

export interface MailgunFullApiAlertsGeneratedClient {
  ListEvents(...args: MailgunFullApiOperationArgs<"GET /v1/alerts/events">): Promise<MailgunFullApiOperationResponseMap["GET /v1/alerts/events"]>;
  AddAlert(...args: MailgunFullApiOperationArgs<"POST /v1/alerts/settings/events">): Promise<MailgunFullApiOperationResponseMap["POST /v1/alerts/settings/events"]>;
  UpdateAlert(...args: MailgunFullApiOperationArgs<"PUT /v1/alerts/settings/events/{id}">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/alerts/settings/events/{id}"]>;
  RemoveAlert(...args: MailgunFullApiOperationArgs<"DELETE /v1/alerts/settings/events/{id}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/alerts/settings/events/{id}"]>;
  ListAlerts(...args: MailgunFullApiOperationArgs<"GET /v1/alerts/settings">): Promise<MailgunFullApiOperationResponseMap["GET /v1/alerts/settings"]>;
  UpdateSlackSettings(...args: MailgunFullApiOperationArgs<"PUT /v1/alerts/settings/slack">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/alerts/settings/slack"]>;
  DeleteSlackSettings(...args: MailgunFullApiOperationArgs<"DELETE /v1/alerts/settings/slack">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/alerts/settings/slack"]>;
  ResetWebhookSigningKey(...args: MailgunFullApiOperationArgs<"PUT /v1/alerts/settings/webhooks/signing_key">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/alerts/settings/webhooks/signing_key"]>;
  TestWebhook(...args: MailgunFullApiOperationArgs<"POST /v1/alerts/webhooks/test">): Promise<MailgunFullApiOperationResponseMap["POST /v1/alerts/webhooks/test"]>;
  TestMessage(...args: MailgunFullApiOperationArgs<"POST /v1/alerts/email/test">): Promise<MailgunFullApiOperationResponseMap["POST /v1/alerts/email/test"]>;
  TestMessage2(...args: MailgunFullApiOperationArgs<"POST /v1/alerts/slack/test">): Promise<MailgunFullApiOperationResponseMap["POST /v1/alerts/slack/test"]>;
  RevokeSlackAccessToken(...args: MailgunFullApiOperationArgs<"DELETE /v1/alerts/slack/oauth">): Promise<MailgunFullApiOperationResponseMap["DELETE /v1/alerts/slack/oauth"]>;
  GetSlackChannel(...args: MailgunFullApiOperationArgs<"GET /v1/alerts/slack/channels/{id}">): Promise<MailgunFullApiOperationResponseMap["GET /v1/alerts/slack/channels/{id}"]>;
  ListSlackChannels(...args: MailgunFullApiOperationArgs<"GET /v1/alerts/slack/channels">): Promise<MailgunFullApiOperationResponseMap["GET /v1/alerts/slack/channels"]>;
}

export const MailgunFullApiAlertsGeneratedFunctionNames = [
  "ListEvents",
  "AddAlert",
  "UpdateAlert",
  "RemoveAlert",
  "ListAlerts",
  "UpdateSlackSettings",
  "DeleteSlackSettings",
  "ResetWebhookSigningKey",
  "TestWebhook",
  "TestMessage",
  "TestMessage2",
  "RevokeSlackAccessToken",
  "GetSlackChannel",
  "ListSlackChannels"
] as const satisfies readonly (keyof MailgunFullApiAlertsGeneratedClient)[];

export function createMailgunFullApiAlertsGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiAlertsGeneratedClient {
  return {
    ListEvents: (...args) => callOperation("GET /v1/alerts/events", ...(args as MailgunFullApiOperationArgs<"GET /v1/alerts/events">)),
    AddAlert: (...args) => callOperation("POST /v1/alerts/settings/events", ...(args as MailgunFullApiOperationArgs<"POST /v1/alerts/settings/events">)),
    UpdateAlert: (...args) => callOperation("PUT /v1/alerts/settings/events/{id}", ...(args as MailgunFullApiOperationArgs<"PUT /v1/alerts/settings/events/{id}">)),
    RemoveAlert: (...args) => callOperation("DELETE /v1/alerts/settings/events/{id}", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/alerts/settings/events/{id}">)),
    ListAlerts: (...args) => callOperation("GET /v1/alerts/settings", ...(args as MailgunFullApiOperationArgs<"GET /v1/alerts/settings">)),
    UpdateSlackSettings: (...args) => callOperation("PUT /v1/alerts/settings/slack", ...(args as MailgunFullApiOperationArgs<"PUT /v1/alerts/settings/slack">)),
    DeleteSlackSettings: (...args) => callOperation("DELETE /v1/alerts/settings/slack", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/alerts/settings/slack">)),
    ResetWebhookSigningKey: (...args) => callOperation("PUT /v1/alerts/settings/webhooks/signing_key", ...(args as MailgunFullApiOperationArgs<"PUT /v1/alerts/settings/webhooks/signing_key">)),
    TestWebhook: (...args) => callOperation("POST /v1/alerts/webhooks/test", ...(args as MailgunFullApiOperationArgs<"POST /v1/alerts/webhooks/test">)),
    TestMessage: (...args) => callOperation("POST /v1/alerts/email/test", ...(args as MailgunFullApiOperationArgs<"POST /v1/alerts/email/test">)),
    TestMessage2: (...args) => callOperation("POST /v1/alerts/slack/test", ...(args as MailgunFullApiOperationArgs<"POST /v1/alerts/slack/test">)),
    RevokeSlackAccessToken: (...args) => callOperation("DELETE /v1/alerts/slack/oauth", ...(args as MailgunFullApiOperationArgs<"DELETE /v1/alerts/slack/oauth">)),
    GetSlackChannel: (...args) => callOperation("GET /v1/alerts/slack/channels/{id}", ...(args as MailgunFullApiOperationArgs<"GET /v1/alerts/slack/channels/{id}">)),
    ListSlackChannels: (...args) => callOperation("GET /v1/alerts/slack/channels", ...(args as MailgunFullApiOperationArgs<"GET /v1/alerts/slack/channels">)),
  };
}
