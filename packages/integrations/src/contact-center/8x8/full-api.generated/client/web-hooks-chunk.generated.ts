// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiWebHooksOperationKeys = [
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks",
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks",
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}",
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}",
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}",
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify",
  "chat-gateway:GET /chat-gateway/v1/webhooks",
  "chat-gateway:POST /chat-gateway/v1/webhooks",
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}",
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}",
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}",
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks",
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks",
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}",
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}",
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}",
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify"
] as const;
export type EightByEightContactCenterApiWebHooksOperationKey = typeof EightByEightContactCenterApiWebHooksOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiWebHooksOperationPathParamMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "web-hook-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "web-hook-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "web-hook-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:GET /chat-gateway/v1/webhooks": {};
  "chat-gateway:POST /chat-gateway/v1/webhooks": {};
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": { "webhookId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": { "webhookId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": { "webhookId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": {};
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "web-hook-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "web-hook-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue; "web-hook-id": EightByEightContactCenterApiPathParamValue };
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": { "region": EightByEightContactCenterApiPathParamValue; "tenant-id": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiWebHooksOperationRequestMap {
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">;
  "chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">;
  "chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">;
  "chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">;
  "chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify">;
  "chat-gateway:GET /chat-gateway/v1/webhooks": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/webhooks">;
  "chat-gateway:POST /chat-gateway/v1/webhooks": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/webhooks">;
  "chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}">;
  "chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiOperationInput<"chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}">;
  "chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}": EightByEightContactCenterApiOperationInput<"chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}">;
  "chat-gateway:POST /chat-gateway/v1/webhooks/verify": EightByEightContactCenterApiOperationInput<"chat-gateway:POST /chat-gateway/v1/webhooks/verify">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">;
  "chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">;
  "chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">;
  "chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">;
  "chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify">;
}

export interface EightByEightContactCenterApiWebHooksGeneratedClient {
  Getwebhooks(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks"]>;
  Createwebhook(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks"]>;
  Getwebhookbyid(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}"]>;
  Updatewebhook(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}"]>;
  Deletewebhookbyid(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}"]>;
  Verifywebhook(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify"]>;
  Getwebhooks1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/webhooks">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/webhooks"]>;
  Createwebhook1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/webhooks">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/webhooks"]>;
  Getwebhookbyid1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}"]>;
  Updatewebhook1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}"]>;
  Deletewebhookbyid1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}"]>;
  Verifywebhook1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/webhooks/verify">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:POST /chat-gateway/v1/webhooks/verify"]>;
  Getwebhooks2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks"]>;
  Createwebhook2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks"]>;
  Getwebhookbyid2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}"]>;
  Updatewebhook2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}"]>;
  Deletewebhookbyid2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}"]>;
  Verifywebhook2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify"]>;
}

export const EightByEightContactCenterApiWebHooksGeneratedFunctionNames = [
  "Getwebhooks",
  "Createwebhook",
  "Getwebhookbyid",
  "Updatewebhook",
  "Deletewebhookbyid",
  "Verifywebhook",
  "Getwebhooks1",
  "Createwebhook1",
  "Getwebhookbyid1",
  "Updatewebhook1",
  "Deletewebhookbyid1",
  "Verifywebhook1",
  "Getwebhooks2",
  "Createwebhook2",
  "Getwebhookbyid2",
  "Updatewebhook2",
  "Deletewebhookbyid2",
  "Verifywebhook2"
] as const satisfies readonly (keyof EightByEightContactCenterApiWebHooksGeneratedClient)[];

export function createEightByEightContactCenterApiWebHooksGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiWebHooksGeneratedClient {
  return {
    Getwebhooks: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">)),
    Createwebhook: (...args) => callOperation("chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">)),
    Getwebhookbyid: (...args) => callOperation("chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">)),
    Updatewebhook: (...args) => callOperation("chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">)),
    Deletewebhookbyid: (...args) => callOperation("chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">)),
    Verifywebhook: (...args) => callOperation("chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify">)),
    Getwebhooks1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/webhooks", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/webhooks">)),
    Createwebhook1: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/webhooks", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/webhooks">)),
    Getwebhookbyid1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/webhooks/{webhookId}">)),
    Updatewebhook1: (...args) => callOperation("chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PUT /chat-gateway/v1/webhooks/{webhookId}">)),
    Deletewebhookbyid1: (...args) => callOperation("chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:DELETE /chat-gateway/v1/webhooks/{webhookId}">)),
    Verifywebhook1: (...args) => callOperation("chat-gateway:POST /chat-gateway/v1/webhooks/verify", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:POST /chat-gateway/v1/webhooks/verify">)),
    Getwebhooks2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">)),
    Createwebhook2: (...args) => callOperation("chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks">)),
    Getwebhookbyid2: (...args) => callOperation("chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:GET /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">)),
    Updatewebhook2: (...args) => callOperation("chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:PUT /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">)),
    Deletewebhookbyid2: (...args) => callOperation("chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:DELETE /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/{web-hook-id}">)),
    Verifywebhook2: (...args) => callOperation("chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /vcc/{region}/chat/v2/tenant/{tenant-id}/web-hooks/verify">)),
  };
}
