// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiWebhookTriggerAPIOperationKeys = [
  "postTrigger",
  "deleteTrigger"
] as const;
export type TalkdeskFullApiWebhookTriggerAPIOperationKey = typeof TalkdeskFullApiWebhookTriggerAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiWebhookTriggerAPIOperationPathParamMap {
  "postTrigger": { "trigger_name": TalkdeskFullApiPathParamValue };
  "deleteTrigger": { "trigger_name": TalkdeskFullApiPathParamValue; "trigger_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiWebhookTriggerAPIOperationRequestMap {
  "postTrigger": TalkdeskFullApiOperationInput<"postTrigger">;
  "deleteTrigger": TalkdeskFullApiOperationInput<"deleteTrigger">;
}

export interface TalkdeskFullApiWebhookTriggerAPIGeneratedClient {
  PostTrigger(...args: TalkdeskFullApiOperationArgs<"postTrigger">): Promise<TalkdeskFullApiOperationResponseMap["postTrigger"]>;
  DeleteTrigger(...args: TalkdeskFullApiOperationArgs<"deleteTrigger">): Promise<TalkdeskFullApiOperationResponseMap["deleteTrigger"]>;
}

export const TalkdeskFullApiWebhookTriggerAPIGeneratedFunctionNames = [
  "PostTrigger",
  "DeleteTrigger"
] as const satisfies readonly (keyof TalkdeskFullApiWebhookTriggerAPIGeneratedClient)[];

export function createTalkdeskFullApiWebhookTriggerAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiWebhookTriggerAPIGeneratedClient {
  return {
    PostTrigger: (...args) => callOperation("postTrigger", ...(args as TalkdeskFullApiOperationArgs<"postTrigger">)),
    DeleteTrigger: (...args) => callOperation("deleteTrigger", ...(args as TalkdeskFullApiOperationArgs<"deleteTrigger">)),
  };
}
