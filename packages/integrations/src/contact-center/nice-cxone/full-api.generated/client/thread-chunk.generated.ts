// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiThreadOperationKeys = [
  "digital-thread-api-docs:searchThreads:GET:/threads",
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions",
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}"
] as const;
export type NiceCxoneFullApiThreadOperationKey = typeof NiceCxoneFullApiThreadOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiThreadOperationPathParamMap {
  "digital-thread-api-docs:searchThreads:GET:/threads": {};
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": { "channelId": NiceCxoneFullApiPathParamValue; "threadIdOnExternalPlatform": NiceCxoneFullApiPathParamValue };
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": { "channelId": NiceCxoneFullApiPathParamValue; "threadIdOnExternalPlatform": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiThreadOperationRequestMap {
  "digital-thread-api-docs:searchThreads:GET:/threads": NiceCxoneFullApiOperationInput<"digital-thread-api-docs:searchThreads:GET:/threads">;
  "digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions": NiceCxoneFullApiOperationInput<"digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions">;
  "digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}": NiceCxoneFullApiOperationInput<"digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}">;
}

export interface NiceCxoneFullApiThreadGeneratedClient {
  DigitalThreadApiDocsSearchThreads(...args: NiceCxoneFullApiOperationArgs<"digital-thread-api-docs:searchThreads:GET:/threads">): Promise<NiceCxoneFullApiOperationResponseMap["digital-thread-api-docs:searchThreads:GET:/threads"]>;
  DigitalThreadApiDocsSendSenderAction(...args: NiceCxoneFullApiOperationArgs<"digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions">): Promise<NiceCxoneFullApiOperationResponseMap["digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions"]>;
  DigitalThreadApiDocsUpdateThread(...args: NiceCxoneFullApiOperationArgs<"digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}"]>;
}

export const NiceCxoneFullApiThreadGeneratedFunctionNames = [
  "DigitalThreadApiDocsSearchThreads",
  "DigitalThreadApiDocsSendSenderAction",
  "DigitalThreadApiDocsUpdateThread"
] as const satisfies readonly (keyof NiceCxoneFullApiThreadGeneratedClient)[];

export function createNiceCxoneFullApiThreadGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiThreadGeneratedClient {
  return {
    DigitalThreadApiDocsSearchThreads: (...args) => callOperation("digital-thread-api-docs:searchThreads:GET:/threads", ...(args as NiceCxoneFullApiOperationArgs<"digital-thread-api-docs:searchThreads:GET:/threads">)),
    DigitalThreadApiDocsSendSenderAction: (...args) => callOperation("digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions", ...(args as NiceCxoneFullApiOperationArgs<"digital-thread-api-docs:sendSenderAction:POST:/channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions">)),
    DigitalThreadApiDocsUpdateThread: (...args) => callOperation("digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}", ...(args as NiceCxoneFullApiOperationArgs<"digital-thread-api-docs:updateThread:PUT:/channels/{channelId}/threads/{threadIdOnExternalPlatform}">)),
  };
}
