// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiParticipantOperationKeys = [
  "connectparticipant:CancelParticipantAuthentication",
  "connectparticipant:CompleteAttachmentUpload",
  "connectparticipant:CreateParticipantConnection",
  "connectparticipant:DescribeView",
  "connectparticipant:DisconnectParticipant",
  "connectparticipant:GetAttachment",
  "connectparticipant:GetAuthenticationUrl",
  "connectparticipant:GetTranscript",
  "connectparticipant:SendEvent",
  "connectparticipant:SendMessage",
  "connectparticipant:StartAttachmentUpload"
] as const;
export type AmazonConnectFullApiParticipantOperationKey = typeof AmazonConnectFullApiParticipantOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiParticipantOperationPathParamMap {
  "connectparticipant:CancelParticipantAuthentication": {};
  "connectparticipant:CompleteAttachmentUpload": {};
  "connectparticipant:CreateParticipantConnection": {};
  "connectparticipant:DescribeView": { "ViewToken": AmazonConnectFullApiPathParamValue };
  "connectparticipant:DisconnectParticipant": {};
  "connectparticipant:GetAttachment": {};
  "connectparticipant:GetAuthenticationUrl": {};
  "connectparticipant:GetTranscript": {};
  "connectparticipant:SendEvent": {};
  "connectparticipant:SendMessage": {};
  "connectparticipant:StartAttachmentUpload": {};
}

export interface AmazonConnectFullApiParticipantOperationRequestMap {
  "connectparticipant:CancelParticipantAuthentication": AmazonConnectFullApiOperationInput<"connectparticipant:CancelParticipantAuthentication">;
  "connectparticipant:CompleteAttachmentUpload": AmazonConnectFullApiOperationInput<"connectparticipant:CompleteAttachmentUpload">;
  "connectparticipant:CreateParticipantConnection": AmazonConnectFullApiOperationInput<"connectparticipant:CreateParticipantConnection">;
  "connectparticipant:DescribeView": AmazonConnectFullApiOperationInput<"connectparticipant:DescribeView">;
  "connectparticipant:DisconnectParticipant": AmazonConnectFullApiOperationInput<"connectparticipant:DisconnectParticipant">;
  "connectparticipant:GetAttachment": AmazonConnectFullApiOperationInput<"connectparticipant:GetAttachment">;
  "connectparticipant:GetAuthenticationUrl": AmazonConnectFullApiOperationInput<"connectparticipant:GetAuthenticationUrl">;
  "connectparticipant:GetTranscript": AmazonConnectFullApiOperationInput<"connectparticipant:GetTranscript">;
  "connectparticipant:SendEvent": AmazonConnectFullApiOperationInput<"connectparticipant:SendEvent">;
  "connectparticipant:SendMessage": AmazonConnectFullApiOperationInput<"connectparticipant:SendMessage">;
  "connectparticipant:StartAttachmentUpload": AmazonConnectFullApiOperationInput<"connectparticipant:StartAttachmentUpload">;
}

export interface AmazonConnectFullApiParticipantGeneratedClient {
  CancelParticipantAuthentication(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:CancelParticipantAuthentication">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:CancelParticipantAuthentication"]>;
  CompleteAttachmentUpload(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:CompleteAttachmentUpload">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:CompleteAttachmentUpload"]>;
  CreateParticipantConnection(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:CreateParticipantConnection">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:CreateParticipantConnection"]>;
  DescribeViewConnectparticipant(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:DescribeView">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:DescribeView"]>;
  DisconnectParticipant(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:DisconnectParticipant">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:DisconnectParticipant"]>;
  GetAttachment(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:GetAttachment">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:GetAttachment"]>;
  GetAuthenticationUrl(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:GetAuthenticationUrl">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:GetAuthenticationUrl"]>;
  GetTranscript(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:GetTranscript">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:GetTranscript"]>;
  SendEvent(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:SendEvent">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:SendEvent"]>;
  SendMessage(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:SendMessage">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:SendMessage"]>;
  StartAttachmentUpload(...args: AmazonConnectFullApiOperationArgs<"connectparticipant:StartAttachmentUpload">): Promise<AmazonConnectFullApiOperationResponseMap["connectparticipant:StartAttachmentUpload"]>;
}

export const AmazonConnectFullApiParticipantGeneratedFunctionNames = [
  "CancelParticipantAuthentication",
  "CompleteAttachmentUpload",
  "CreateParticipantConnection",
  "DescribeViewConnectparticipant",
  "DisconnectParticipant",
  "GetAttachment",
  "GetAuthenticationUrl",
  "GetTranscript",
  "SendEvent",
  "SendMessage",
  "StartAttachmentUpload"
] as const satisfies readonly (keyof AmazonConnectFullApiParticipantGeneratedClient)[];

export function createAmazonConnectFullApiParticipantGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiParticipantGeneratedClient {
  return {
    CancelParticipantAuthentication: (...args) => callOperation("connectparticipant:CancelParticipantAuthentication", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:CancelParticipantAuthentication">)),
    CompleteAttachmentUpload: (...args) => callOperation("connectparticipant:CompleteAttachmentUpload", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:CompleteAttachmentUpload">)),
    CreateParticipantConnection: (...args) => callOperation("connectparticipant:CreateParticipantConnection", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:CreateParticipantConnection">)),
    DescribeViewConnectparticipant: (...args) => callOperation("connectparticipant:DescribeView", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:DescribeView">)),
    DisconnectParticipant: (...args) => callOperation("connectparticipant:DisconnectParticipant", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:DisconnectParticipant">)),
    GetAttachment: (...args) => callOperation("connectparticipant:GetAttachment", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:GetAttachment">)),
    GetAuthenticationUrl: (...args) => callOperation("connectparticipant:GetAuthenticationUrl", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:GetAuthenticationUrl">)),
    GetTranscript: (...args) => callOperation("connectparticipant:GetTranscript", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:GetTranscript">)),
    SendEvent: (...args) => callOperation("connectparticipant:SendEvent", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:SendEvent">)),
    SendMessage: (...args) => callOperation("connectparticipant:SendMessage", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:SendMessage">)),
    StartAttachmentUpload: (...args) => callOperation("connectparticipant:StartAttachmentUpload", ...(args as AmazonConnectFullApiOperationArgs<"connectparticipant:StartAttachmentUpload">)),
  };
}
