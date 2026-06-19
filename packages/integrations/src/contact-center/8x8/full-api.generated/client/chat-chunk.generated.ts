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
export const EightByEightContactCenterApiChatOperationKeys = [
  "chapi-chat-api:POST /api/chat/v1/messages/",
  "chapi-chat-api:GET /api/chat/v1/messages"
] as const;
export type EightByEightContactCenterApiChatOperationKey = typeof EightByEightContactCenterApiChatOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiChatOperationPathParamMap {
  "chapi-chat-api:POST /api/chat/v1/messages/": {};
  "chapi-chat-api:GET /api/chat/v1/messages": {};
}

export interface EightByEightContactCenterApiChatOperationRequestMap {
  "chapi-chat-api:POST /api/chat/v1/messages/": EightByEightContactCenterApiOperationInput<"chapi-chat-api:POST /api/chat/v1/messages/">;
  "chapi-chat-api:GET /api/chat/v1/messages": EightByEightContactCenterApiOperationInput<"chapi-chat-api:GET /api/chat/v1/messages">;
}

export interface EightByEightContactCenterApiChatGeneratedClient {
  Sendmessageusingpost(...args: EightByEightContactCenterApiOperationArgs<"chapi-chat-api:POST /api/chat/v1/messages/">): Promise<EightByEightContactCenterApiOperationResponseMap["chapi-chat-api:POST /api/chat/v1/messages/"]>;
  Getmessagesusingget1(...args: EightByEightContactCenterApiOperationArgs<"chapi-chat-api:GET /api/chat/v1/messages">): Promise<EightByEightContactCenterApiOperationResponseMap["chapi-chat-api:GET /api/chat/v1/messages"]>;
}

export const EightByEightContactCenterApiChatGeneratedFunctionNames = [
  "Sendmessageusingpost",
  "Getmessagesusingget1"
] as const satisfies readonly (keyof EightByEightContactCenterApiChatGeneratedClient)[];

export function createEightByEightContactCenterApiChatGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiChatGeneratedClient {
  return {
    Sendmessageusingpost: (...args) => callOperation("chapi-chat-api:POST /api/chat/v1/messages/", ...(args as EightByEightContactCenterApiOperationArgs<"chapi-chat-api:POST /api/chat/v1/messages/">)),
    Getmessagesusingget1: (...args) => callOperation("chapi-chat-api:GET /api/chat/v1/messages", ...(args as EightByEightContactCenterApiOperationArgs<"chapi-chat-api:GET /api/chat/v1/messages">)),
  };
}
