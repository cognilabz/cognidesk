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
export const TalkdeskFullApiOmnichannelAPIOperationKeys = [
  "conversations-interactions-get",
  "interactions-interaction-id-actions-start-recording-post",
  "interactions-interaction-id-actions-pause-recording-post",
  "interactions-interaction-id-announcement-post"
] as const;
export type TalkdeskFullApiOmnichannelAPIOperationKey = typeof TalkdeskFullApiOmnichannelAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiOmnichannelAPIOperationPathParamMap {
  "conversations-interactions-get": {};
  "interactions-interaction-id-actions-start-recording-post": { "interaction_id": TalkdeskFullApiPathParamValue };
  "interactions-interaction-id-actions-pause-recording-post": { "interaction_id": TalkdeskFullApiPathParamValue };
  "interactions-interaction-id-announcement-post": { "interaction_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiOmnichannelAPIOperationRequestMap {
  "conversations-interactions-get": TalkdeskFullApiOperationInput<"conversations-interactions-get">;
  "interactions-interaction-id-actions-start-recording-post": TalkdeskFullApiOperationInput<"interactions-interaction-id-actions-start-recording-post">;
  "interactions-interaction-id-actions-pause-recording-post": TalkdeskFullApiOperationInput<"interactions-interaction-id-actions-pause-recording-post">;
  "interactions-interaction-id-announcement-post": TalkdeskFullApiOperationInput<"interactions-interaction-id-announcement-post">;
}

export interface TalkdeskFullApiOmnichannelAPIGeneratedClient {
  ConversationsInteractionsGet(...args: TalkdeskFullApiOperationArgs<"conversations-interactions-get">): Promise<TalkdeskFullApiOperationResponseMap["conversations-interactions-get"]>;
  InteractionsInteractionIdActionsStartRecordingPost(...args: TalkdeskFullApiOperationArgs<"interactions-interaction-id-actions-start-recording-post">): Promise<TalkdeskFullApiOperationResponseMap["interactions-interaction-id-actions-start-recording-post"]>;
  InteractionsInteractionIdActionsPauseRecordingPost(...args: TalkdeskFullApiOperationArgs<"interactions-interaction-id-actions-pause-recording-post">): Promise<TalkdeskFullApiOperationResponseMap["interactions-interaction-id-actions-pause-recording-post"]>;
  InteractionsInteractionIdAnnouncementPost(...args: TalkdeskFullApiOperationArgs<"interactions-interaction-id-announcement-post">): Promise<TalkdeskFullApiOperationResponseMap["interactions-interaction-id-announcement-post"]>;
}

export const TalkdeskFullApiOmnichannelAPIGeneratedFunctionNames = [
  "ConversationsInteractionsGet",
  "InteractionsInteractionIdActionsStartRecordingPost",
  "InteractionsInteractionIdActionsPauseRecordingPost",
  "InteractionsInteractionIdAnnouncementPost"
] as const satisfies readonly (keyof TalkdeskFullApiOmnichannelAPIGeneratedClient)[];

export function createTalkdeskFullApiOmnichannelAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiOmnichannelAPIGeneratedClient {
  return {
    ConversationsInteractionsGet: (...args) => callOperation("conversations-interactions-get", ...(args as TalkdeskFullApiOperationArgs<"conversations-interactions-get">)),
    InteractionsInteractionIdActionsStartRecordingPost: (...args) => callOperation("interactions-interaction-id-actions-start-recording-post", ...(args as TalkdeskFullApiOperationArgs<"interactions-interaction-id-actions-start-recording-post">)),
    InteractionsInteractionIdActionsPauseRecordingPost: (...args) => callOperation("interactions-interaction-id-actions-pause-recording-post", ...(args as TalkdeskFullApiOperationArgs<"interactions-interaction-id-actions-pause-recording-post">)),
    InteractionsInteractionIdAnnouncementPost: (...args) => callOperation("interactions-interaction-id-announcement-post", ...(args as TalkdeskFullApiOperationArgs<"interactions-interaction-id-announcement-post">)),
  };
}
