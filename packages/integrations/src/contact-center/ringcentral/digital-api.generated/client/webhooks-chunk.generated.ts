// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiWebhooksOperationKeys = [
  "GET /webhooks",
  "POST /webhooks",
  "DELETE /webhooks/{webhookId}",
  "GET /webhooks/{webhookId}",
  "PUT /webhooks/{webhookId}"
] as const;
export type RingCentralDigitalApiWebhooksOperationKey = typeof RingCentralDigitalApiWebhooksOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiWebhooksOperationPathParamMap {
  "GET /webhooks": {};
  "POST /webhooks": {};
  "DELETE /webhooks/{webhookId}": { "webhookId": RingCentralDigitalApiPathParamValue };
  "GET /webhooks/{webhookId}": { "webhookId": RingCentralDigitalApiPathParamValue };
  "PUT /webhooks/{webhookId}": { "webhookId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiWebhooksOperationRequestMap {
  "GET /webhooks": RingCentralDigitalApiOperationInput<"GET /webhooks">;
  "POST /webhooks": RingCentralDigitalApiOperationInput<"POST /webhooks">;
  "DELETE /webhooks/{webhookId}": RingCentralDigitalApiOperationInput<"DELETE /webhooks/{webhookId}">;
  "GET /webhooks/{webhookId}": RingCentralDigitalApiOperationInput<"GET /webhooks/{webhookId}">;
  "PUT /webhooks/{webhookId}": RingCentralDigitalApiOperationInput<"PUT /webhooks/{webhookId}">;
}

export interface RingCentralDigitalApiWebhooksGeneratedClient {
  GetAllWebhooks(...args: RingCentralDigitalApiOperationArgs<"GET /webhooks">): Promise<RingCentralDigitalApiOperationResponseMap["GET /webhooks"]>;
  CreateWebhook(...args: RingCentralDigitalApiOperationArgs<"POST /webhooks">): Promise<RingCentralDigitalApiOperationResponseMap["POST /webhooks"]>;
  DeleteWebhook(...args: RingCentralDigitalApiOperationArgs<"DELETE /webhooks/{webhookId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /webhooks/{webhookId}"]>;
  GetWebhook(...args: RingCentralDigitalApiOperationArgs<"GET /webhooks/{webhookId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /webhooks/{webhookId}"]>;
  UpdateWebhook(...args: RingCentralDigitalApiOperationArgs<"PUT /webhooks/{webhookId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /webhooks/{webhookId}"]>;
}

export const RingCentralDigitalApiWebhooksGeneratedFunctionNames = [
  "GetAllWebhooks",
  "CreateWebhook",
  "DeleteWebhook",
  "GetWebhook",
  "UpdateWebhook"
] as const satisfies readonly (keyof RingCentralDigitalApiWebhooksGeneratedClient)[];

export function createRingCentralDigitalApiWebhooksGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiWebhooksGeneratedClient {
  return {
    GetAllWebhooks: (...args) => callOperation("GET /webhooks", ...(args as RingCentralDigitalApiOperationArgs<"GET /webhooks">)),
    CreateWebhook: (...args) => callOperation("POST /webhooks", ...(args as RingCentralDigitalApiOperationArgs<"POST /webhooks">)),
    DeleteWebhook: (...args) => callOperation("DELETE /webhooks/{webhookId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /webhooks/{webhookId}">)),
    GetWebhook: (...args) => callOperation("GET /webhooks/{webhookId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /webhooks/{webhookId}">)),
    UpdateWebhook: (...args) => callOperation("PUT /webhooks/{webhookId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /webhooks/{webhookId}">)),
  };
}
