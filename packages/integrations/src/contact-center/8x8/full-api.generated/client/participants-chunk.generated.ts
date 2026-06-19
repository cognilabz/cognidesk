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
export const EightByEightContactCenterApiParticipantsOperationKeys = [
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants",
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user"
] as const;
export type EightByEightContactCenterApiParticipantsOperationKey = typeof EightByEightContactCenterApiParticipantsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiParticipantsOperationPathParamMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": { "conversationId": EightByEightContactCenterApiPathParamValue };
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": { "conversationId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiParticipantsOperationRequestMap {
  "chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants": EightByEightContactCenterApiOperationInput<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants">;
  "chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user": EightByEightContactCenterApiOperationInput<"chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user">;
}

export interface EightByEightContactCenterApiParticipantsGeneratedClient {
  Getparticipantsforcctransaction1(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants"]>;
  Userparticipantleavecctransaction(...args: EightByEightContactCenterApiOperationArgs<"chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user"]>;
}

export const EightByEightContactCenterApiParticipantsGeneratedFunctionNames = [
  "Getparticipantsforcctransaction1",
  "Userparticipantleavecctransaction"
] as const satisfies readonly (keyof EightByEightContactCenterApiParticipantsGeneratedClient)[];

export function createEightByEightContactCenterApiParticipantsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiParticipantsGeneratedClient {
  return {
    Getparticipantsforcctransaction1: (...args) => callOperation("chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:GET /chat-gateway/v1/conversations/{conversationId}/participants">)),
    Userparticipantleavecctransaction: (...args) => callOperation("chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user", ...(args as EightByEightContactCenterApiOperationArgs<"chat-gateway:PATCH /chat-gateway/v1/conversations/{conversationId}/participants/user">)),
  };
}
