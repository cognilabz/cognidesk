// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiWebhooksOperationKeys = [
  "GET /webhooks/{webhook_id}",
  "DELETE /webhooks/{webhook_id}",
  "PATCH /webhooks/{webhook_id}",
  "GET /webhooks/{webhook_id}/{webhook_token}",
  "POST /webhooks/{webhook_id}/{webhook_token}",
  "DELETE /webhooks/{webhook_id}/{webhook_token}",
  "PATCH /webhooks/{webhook_id}/{webhook_token}",
  "POST /webhooks/{webhook_id}/{webhook_token}/github",
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original",
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original",
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original",
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}",
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}",
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}",
  "POST /webhooks/{webhook_id}/{webhook_token}/slack"
] as const;
export type DiscordHttpApiWebhooksOperationKey = typeof DiscordHttpApiWebhooksOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiWebhooksOperationPathParamMap {
  "GET /webhooks/{webhook_id}": { "webhook_id": DiscordHttpApiPathParamValue };
  "DELETE /webhooks/{webhook_id}": { "webhook_id": DiscordHttpApiPathParamValue };
  "PATCH /webhooks/{webhook_id}": { "webhook_id": DiscordHttpApiPathParamValue };
  "GET /webhooks/{webhook_id}/{webhook_token}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "POST /webhooks/{webhook_id}/{webhook_token}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "DELETE /webhooks/{webhook_id}/{webhook_token}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "PATCH /webhooks/{webhook_id}/{webhook_token}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "POST /webhooks/{webhook_id}/{webhook_token}/github": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue; "message_id": DiscordHttpApiPathParamValue };
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": { "webhook_id": DiscordHttpApiPathParamValue; "webhook_token": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiWebhooksOperationRequestMap {
  "GET /webhooks/{webhook_id}": DiscordHttpApiOperationInput<"GET /webhooks/{webhook_id}">;
  "DELETE /webhooks/{webhook_id}": DiscordHttpApiOperationInput<"DELETE /webhooks/{webhook_id}">;
  "PATCH /webhooks/{webhook_id}": DiscordHttpApiOperationInput<"PATCH /webhooks/{webhook_id}">;
  "GET /webhooks/{webhook_id}/{webhook_token}": DiscordHttpApiOperationInput<"GET /webhooks/{webhook_id}/{webhook_token}">;
  "POST /webhooks/{webhook_id}/{webhook_token}": DiscordHttpApiOperationInput<"POST /webhooks/{webhook_id}/{webhook_token}">;
  "DELETE /webhooks/{webhook_id}/{webhook_token}": DiscordHttpApiOperationInput<"DELETE /webhooks/{webhook_id}/{webhook_token}">;
  "PATCH /webhooks/{webhook_id}/{webhook_token}": DiscordHttpApiOperationInput<"PATCH /webhooks/{webhook_id}/{webhook_token}">;
  "POST /webhooks/{webhook_id}/{webhook_token}/github": DiscordHttpApiOperationInput<"POST /webhooks/{webhook_id}/{webhook_token}/github">;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiOperationInput<"GET /webhooks/{webhook_id}/{webhook_token}/messages/@original">;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiOperationInput<"DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original">;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original": DiscordHttpApiOperationInput<"PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original">;
  "GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiOperationInput<"GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">;
  "DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiOperationInput<"DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">;
  "PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": DiscordHttpApiOperationInput<"PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">;
  "POST /webhooks/{webhook_id}/{webhook_token}/slack": DiscordHttpApiOperationInput<"POST /webhooks/{webhook_id}/{webhook_token}/slack">;
}

export interface DiscordHttpApiWebhooksGeneratedClient {
  GetWebhook(...args: DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /webhooks/{webhook_id}"]>;
  DeleteWebhook(...args: DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /webhooks/{webhook_id}"]>;
  UpdateWebhook(...args: DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /webhooks/{webhook_id}"]>;
  GetWebhookByToken(...args: DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}/{webhook_token}">): Promise<DiscordHttpApiOperationResponseMap["GET /webhooks/{webhook_id}/{webhook_token}"]>;
  ExecuteWebhook(...args: DiscordHttpApiOperationArgs<"POST /webhooks/{webhook_id}/{webhook_token}">): Promise<DiscordHttpApiOperationResponseMap["POST /webhooks/{webhook_id}/{webhook_token}"]>;
  DeleteWebhookByToken(...args: DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}/{webhook_token}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /webhooks/{webhook_id}/{webhook_token}"]>;
  UpdateWebhookByToken(...args: DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}/{webhook_token}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /webhooks/{webhook_id}/{webhook_token}"]>;
  ExecuteGithubCompatibleWebhook(...args: DiscordHttpApiOperationArgs<"POST /webhooks/{webhook_id}/{webhook_token}/github">): Promise<DiscordHttpApiOperationResponseMap["POST /webhooks/{webhook_id}/{webhook_token}/github"]>;
  GetOriginalWebhookMessage(...args: DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}/{webhook_token}/messages/@original">): Promise<DiscordHttpApiOperationResponseMap["GET /webhooks/{webhook_id}/{webhook_token}/messages/@original"]>;
  DeleteOriginalWebhookMessage(...args: DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original">): Promise<DiscordHttpApiOperationResponseMap["DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original"]>;
  UpdateOriginalWebhookMessage(...args: DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original">): Promise<DiscordHttpApiOperationResponseMap["PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original"]>;
  GetWebhookMessage(...args: DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}"]>;
  DeleteWebhookMessage(...args: DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}"]>;
  UpdateWebhookMessage(...args: DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}"]>;
  ExecuteSlackCompatibleWebhook(...args: DiscordHttpApiOperationArgs<"POST /webhooks/{webhook_id}/{webhook_token}/slack">): Promise<DiscordHttpApiOperationResponseMap["POST /webhooks/{webhook_id}/{webhook_token}/slack"]>;
}

export const DiscordHttpApiWebhooksGeneratedFunctionNames = [
  "GetWebhook",
  "DeleteWebhook",
  "UpdateWebhook",
  "GetWebhookByToken",
  "ExecuteWebhook",
  "DeleteWebhookByToken",
  "UpdateWebhookByToken",
  "ExecuteGithubCompatibleWebhook",
  "GetOriginalWebhookMessage",
  "DeleteOriginalWebhookMessage",
  "UpdateOriginalWebhookMessage",
  "GetWebhookMessage",
  "DeleteWebhookMessage",
  "UpdateWebhookMessage",
  "ExecuteSlackCompatibleWebhook"
] as const satisfies readonly (keyof DiscordHttpApiWebhooksGeneratedClient)[];

export function createDiscordHttpApiWebhooksGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiWebhooksGeneratedClient {
  return {
    GetWebhook: (...args) => callOperation("GET /webhooks/{webhook_id}", ...(args as DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}">)),
    DeleteWebhook: (...args) => callOperation("DELETE /webhooks/{webhook_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}">)),
    UpdateWebhook: (...args) => callOperation("PATCH /webhooks/{webhook_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}">)),
    GetWebhookByToken: (...args) => callOperation("GET /webhooks/{webhook_id}/{webhook_token}", ...(args as DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}/{webhook_token}">)),
    ExecuteWebhook: (...args) => callOperation("POST /webhooks/{webhook_id}/{webhook_token}", ...(args as DiscordHttpApiOperationArgs<"POST /webhooks/{webhook_id}/{webhook_token}">)),
    DeleteWebhookByToken: (...args) => callOperation("DELETE /webhooks/{webhook_id}/{webhook_token}", ...(args as DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}/{webhook_token}">)),
    UpdateWebhookByToken: (...args) => callOperation("PATCH /webhooks/{webhook_id}/{webhook_token}", ...(args as DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}/{webhook_token}">)),
    ExecuteGithubCompatibleWebhook: (...args) => callOperation("POST /webhooks/{webhook_id}/{webhook_token}/github", ...(args as DiscordHttpApiOperationArgs<"POST /webhooks/{webhook_id}/{webhook_token}/github">)),
    GetOriginalWebhookMessage: (...args) => callOperation("GET /webhooks/{webhook_id}/{webhook_token}/messages/@original", ...(args as DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}/{webhook_token}/messages/@original">)),
    DeleteOriginalWebhookMessage: (...args) => callOperation("DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original", ...(args as DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original">)),
    UpdateOriginalWebhookMessage: (...args) => callOperation("PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original", ...(args as DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original">)),
    GetWebhookMessage: (...args) => callOperation("GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}", ...(args as DiscordHttpApiOperationArgs<"GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">)),
    DeleteWebhookMessage: (...args) => callOperation("DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">)),
    UpdateWebhookMessage: (...args) => callOperation("PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}">)),
    ExecuteSlackCompatibleWebhook: (...args) => callOperation("POST /webhooks/{webhook_id}/{webhook_token}/slack", ...(args as DiscordHttpApiOperationArgs<"POST /webhooks/{webhook_id}/{webhook_token}/slack">)),
  };
}
