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
export const AmazonConnectFullApiContactOperationKeys = [
  "connect:BatchPutContact",
  "connect:CreateContact",
  "connect:CreateParticipant",
  "connect:CreatePersistentContactAssociation",
  "connect:GetContactAttributes",
  "connect:ListAssociatedContacts",
  "connect:ListContactReferences",
  "connect:ListRealtimeContactAnalysisSegmentsV2",
  "connect:MonitorContact",
  "connect:PauseContact",
  "connect:ResumeContact",
  "connect:ResumeContactRecording",
  "connect:StartChatContact",
  "connect:StartContactMediaProcessing",
  "connect:StartContactRecording",
  "connect:StartContactStreaming",
  "connect:StartEmailContact",
  "connect:StartOutboundChatContact",
  "connect:StartOutboundEmailContact",
  "connect:StartOutboundVoiceContact",
  "connect:StartScreenSharing",
  "connect:StartTaskContact",
  "connect:StartWebRTCContact",
  "connect:StopContact",
  "connect:StopContactMediaProcessing",
  "connect:StopContactRecording",
  "connect:StopContactStreaming",
  "connect:SuspendContactRecording",
  "connect:TagContact",
  "connect:TransferContact",
  "connect:UntagContact",
  "connect:UpdateContactAttributes",
  "connect:UpdateContactSchedule",
  "connect:UpdateParticipantAuthentication",
  "connect:UpdateParticipantRoleConfig"
] as const;
export type AmazonConnectFullApiContactOperationKey = typeof AmazonConnectFullApiContactOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiContactOperationPathParamMap {
  "connect:BatchPutContact": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:CreateContact": {};
  "connect:CreateParticipant": {};
  "connect:CreatePersistentContactAssociation": { "InstanceId": AmazonConnectFullApiPathParamValue; "InitialContactId": AmazonConnectFullApiPathParamValue };
  "connect:GetContactAttributes": { "InstanceId": AmazonConnectFullApiPathParamValue; "InitialContactId": AmazonConnectFullApiPathParamValue };
  "connect:ListAssociatedContacts": { "InstanceId": AmazonConnectFullApiPathParamValue };
  "connect:ListContactReferences": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
  "connect:ListRealtimeContactAnalysisSegmentsV2": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
  "connect:MonitorContact": {};
  "connect:PauseContact": {};
  "connect:ResumeContact": {};
  "connect:ResumeContactRecording": {};
  "connect:StartChatContact": {};
  "connect:StartContactMediaProcessing": {};
  "connect:StartContactRecording": {};
  "connect:StartContactStreaming": {};
  "connect:StartEmailContact": {};
  "connect:StartOutboundChatContact": {};
  "connect:StartOutboundEmailContact": {};
  "connect:StartOutboundVoiceContact": {};
  "connect:StartScreenSharing": {};
  "connect:StartTaskContact": {};
  "connect:StartWebRTCContact": {};
  "connect:StopContact": {};
  "connect:StopContactMediaProcessing": {};
  "connect:StopContactRecording": {};
  "connect:StopContactStreaming": {};
  "connect:SuspendContactRecording": {};
  "connect:TagContact": {};
  "connect:TransferContact": {};
  "connect:UntagContact": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
  "connect:UpdateContactAttributes": {};
  "connect:UpdateContactSchedule": {};
  "connect:UpdateParticipantAuthentication": {};
  "connect:UpdateParticipantRoleConfig": { "InstanceId": AmazonConnectFullApiPathParamValue; "ContactId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiContactOperationRequestMap {
  "connect:BatchPutContact": AmazonConnectFullApiOperationInput<"connect:BatchPutContact">;
  "connect:CreateContact": AmazonConnectFullApiOperationInput<"connect:CreateContact">;
  "connect:CreateParticipant": AmazonConnectFullApiOperationInput<"connect:CreateParticipant">;
  "connect:CreatePersistentContactAssociation": AmazonConnectFullApiOperationInput<"connect:CreatePersistentContactAssociation">;
  "connect:GetContactAttributes": AmazonConnectFullApiOperationInput<"connect:GetContactAttributes">;
  "connect:ListAssociatedContacts": AmazonConnectFullApiOperationInput<"connect:ListAssociatedContacts">;
  "connect:ListContactReferences": AmazonConnectFullApiOperationInput<"connect:ListContactReferences">;
  "connect:ListRealtimeContactAnalysisSegmentsV2": AmazonConnectFullApiOperationInput<"connect:ListRealtimeContactAnalysisSegmentsV2">;
  "connect:MonitorContact": AmazonConnectFullApiOperationInput<"connect:MonitorContact">;
  "connect:PauseContact": AmazonConnectFullApiOperationInput<"connect:PauseContact">;
  "connect:ResumeContact": AmazonConnectFullApiOperationInput<"connect:ResumeContact">;
  "connect:ResumeContactRecording": AmazonConnectFullApiOperationInput<"connect:ResumeContactRecording">;
  "connect:StartChatContact": AmazonConnectFullApiOperationInput<"connect:StartChatContact">;
  "connect:StartContactMediaProcessing": AmazonConnectFullApiOperationInput<"connect:StartContactMediaProcessing">;
  "connect:StartContactRecording": AmazonConnectFullApiOperationInput<"connect:StartContactRecording">;
  "connect:StartContactStreaming": AmazonConnectFullApiOperationInput<"connect:StartContactStreaming">;
  "connect:StartEmailContact": AmazonConnectFullApiOperationInput<"connect:StartEmailContact">;
  "connect:StartOutboundChatContact": AmazonConnectFullApiOperationInput<"connect:StartOutboundChatContact">;
  "connect:StartOutboundEmailContact": AmazonConnectFullApiOperationInput<"connect:StartOutboundEmailContact">;
  "connect:StartOutboundVoiceContact": AmazonConnectFullApiOperationInput<"connect:StartOutboundVoiceContact">;
  "connect:StartScreenSharing": AmazonConnectFullApiOperationInput<"connect:StartScreenSharing">;
  "connect:StartTaskContact": AmazonConnectFullApiOperationInput<"connect:StartTaskContact">;
  "connect:StartWebRTCContact": AmazonConnectFullApiOperationInput<"connect:StartWebRTCContact">;
  "connect:StopContact": AmazonConnectFullApiOperationInput<"connect:StopContact">;
  "connect:StopContactMediaProcessing": AmazonConnectFullApiOperationInput<"connect:StopContactMediaProcessing">;
  "connect:StopContactRecording": AmazonConnectFullApiOperationInput<"connect:StopContactRecording">;
  "connect:StopContactStreaming": AmazonConnectFullApiOperationInput<"connect:StopContactStreaming">;
  "connect:SuspendContactRecording": AmazonConnectFullApiOperationInput<"connect:SuspendContactRecording">;
  "connect:TagContact": AmazonConnectFullApiOperationInput<"connect:TagContact">;
  "connect:TransferContact": AmazonConnectFullApiOperationInput<"connect:TransferContact">;
  "connect:UntagContact": AmazonConnectFullApiOperationInput<"connect:UntagContact">;
  "connect:UpdateContactAttributes": AmazonConnectFullApiOperationInput<"connect:UpdateContactAttributes">;
  "connect:UpdateContactSchedule": AmazonConnectFullApiOperationInput<"connect:UpdateContactSchedule">;
  "connect:UpdateParticipantAuthentication": AmazonConnectFullApiOperationInput<"connect:UpdateParticipantAuthentication">;
  "connect:UpdateParticipantRoleConfig": AmazonConnectFullApiOperationInput<"connect:UpdateParticipantRoleConfig">;
}

export interface AmazonConnectFullApiContactGeneratedClient {
  BatchPutContact(...args: AmazonConnectFullApiOperationArgs<"connect:BatchPutContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:BatchPutContact"]>;
  CreateContact(...args: AmazonConnectFullApiOperationArgs<"connect:CreateContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateContact"]>;
  CreateParticipant(...args: AmazonConnectFullApiOperationArgs<"connect:CreateParticipant">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreateParticipant"]>;
  CreatePersistentContactAssociation(...args: AmazonConnectFullApiOperationArgs<"connect:CreatePersistentContactAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["connect:CreatePersistentContactAssociation"]>;
  GetContactAttributes(...args: AmazonConnectFullApiOperationArgs<"connect:GetContactAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["connect:GetContactAttributes"]>;
  ListAssociatedContacts(...args: AmazonConnectFullApiOperationArgs<"connect:ListAssociatedContacts">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListAssociatedContacts"]>;
  ListContactReferences(...args: AmazonConnectFullApiOperationArgs<"connect:ListContactReferences">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListContactReferences"]>;
  ListRealtimeContactAnalysisSegmentsV2(...args: AmazonConnectFullApiOperationArgs<"connect:ListRealtimeContactAnalysisSegmentsV2">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ListRealtimeContactAnalysisSegmentsV2"]>;
  MonitorContact(...args: AmazonConnectFullApiOperationArgs<"connect:MonitorContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:MonitorContact"]>;
  PauseContact(...args: AmazonConnectFullApiOperationArgs<"connect:PauseContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:PauseContact"]>;
  ResumeContact(...args: AmazonConnectFullApiOperationArgs<"connect:ResumeContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ResumeContact"]>;
  ResumeContactRecording(...args: AmazonConnectFullApiOperationArgs<"connect:ResumeContactRecording">): Promise<AmazonConnectFullApiOperationResponseMap["connect:ResumeContactRecording"]>;
  StartChatContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartChatContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartChatContact"]>;
  StartContactMediaProcessing(...args: AmazonConnectFullApiOperationArgs<"connect:StartContactMediaProcessing">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartContactMediaProcessing"]>;
  StartContactRecording(...args: AmazonConnectFullApiOperationArgs<"connect:StartContactRecording">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartContactRecording"]>;
  StartContactStreaming(...args: AmazonConnectFullApiOperationArgs<"connect:StartContactStreaming">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartContactStreaming"]>;
  StartEmailContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartEmailContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartEmailContact"]>;
  StartOutboundChatContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartOutboundChatContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartOutboundChatContact"]>;
  StartOutboundEmailContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartOutboundEmailContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartOutboundEmailContact"]>;
  StartOutboundVoiceContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartOutboundVoiceContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartOutboundVoiceContact"]>;
  StartScreenSharing(...args: AmazonConnectFullApiOperationArgs<"connect:StartScreenSharing">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartScreenSharing"]>;
  StartTaskContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartTaskContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartTaskContact"]>;
  StartWebRTCContact(...args: AmazonConnectFullApiOperationArgs<"connect:StartWebRTCContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StartWebRTCContact"]>;
  StopContact(...args: AmazonConnectFullApiOperationArgs<"connect:StopContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StopContact"]>;
  StopContactMediaProcessing(...args: AmazonConnectFullApiOperationArgs<"connect:StopContactMediaProcessing">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StopContactMediaProcessing"]>;
  StopContactRecording(...args: AmazonConnectFullApiOperationArgs<"connect:StopContactRecording">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StopContactRecording"]>;
  StopContactStreaming(...args: AmazonConnectFullApiOperationArgs<"connect:StopContactStreaming">): Promise<AmazonConnectFullApiOperationResponseMap["connect:StopContactStreaming"]>;
  SuspendContactRecording(...args: AmazonConnectFullApiOperationArgs<"connect:SuspendContactRecording">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SuspendContactRecording"]>;
  TagContact(...args: AmazonConnectFullApiOperationArgs<"connect:TagContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:TagContact"]>;
  TransferContact(...args: AmazonConnectFullApiOperationArgs<"connect:TransferContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:TransferContact"]>;
  UntagContact(...args: AmazonConnectFullApiOperationArgs<"connect:UntagContact">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UntagContact"]>;
  UpdateContactAttributes(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactAttributes">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactAttributes"]>;
  UpdateContactSchedule(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateContactSchedule">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateContactSchedule"]>;
  UpdateParticipantAuthentication(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateParticipantAuthentication">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateParticipantAuthentication"]>;
  UpdateParticipantRoleConfig(...args: AmazonConnectFullApiOperationArgs<"connect:UpdateParticipantRoleConfig">): Promise<AmazonConnectFullApiOperationResponseMap["connect:UpdateParticipantRoleConfig"]>;
}

export const AmazonConnectFullApiContactGeneratedFunctionNames = [
  "BatchPutContact",
  "CreateContact",
  "CreateParticipant",
  "CreatePersistentContactAssociation",
  "GetContactAttributes",
  "ListAssociatedContacts",
  "ListContactReferences",
  "ListRealtimeContactAnalysisSegmentsV2",
  "MonitorContact",
  "PauseContact",
  "ResumeContact",
  "ResumeContactRecording",
  "StartChatContact",
  "StartContactMediaProcessing",
  "StartContactRecording",
  "StartContactStreaming",
  "StartEmailContact",
  "StartOutboundChatContact",
  "StartOutboundEmailContact",
  "StartOutboundVoiceContact",
  "StartScreenSharing",
  "StartTaskContact",
  "StartWebRTCContact",
  "StopContact",
  "StopContactMediaProcessing",
  "StopContactRecording",
  "StopContactStreaming",
  "SuspendContactRecording",
  "TagContact",
  "TransferContact",
  "UntagContact",
  "UpdateContactAttributes",
  "UpdateContactSchedule",
  "UpdateParticipantAuthentication",
  "UpdateParticipantRoleConfig"
] as const satisfies readonly (keyof AmazonConnectFullApiContactGeneratedClient)[];

export function createAmazonConnectFullApiContactGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiContactGeneratedClient {
  return {
    BatchPutContact: (...args) => callOperation("connect:BatchPutContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:BatchPutContact">)),
    CreateContact: (...args) => callOperation("connect:CreateContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateContact">)),
    CreateParticipant: (...args) => callOperation("connect:CreateParticipant", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreateParticipant">)),
    CreatePersistentContactAssociation: (...args) => callOperation("connect:CreatePersistentContactAssociation", ...(args as AmazonConnectFullApiOperationArgs<"connect:CreatePersistentContactAssociation">)),
    GetContactAttributes: (...args) => callOperation("connect:GetContactAttributes", ...(args as AmazonConnectFullApiOperationArgs<"connect:GetContactAttributes">)),
    ListAssociatedContacts: (...args) => callOperation("connect:ListAssociatedContacts", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListAssociatedContacts">)),
    ListContactReferences: (...args) => callOperation("connect:ListContactReferences", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListContactReferences">)),
    ListRealtimeContactAnalysisSegmentsV2: (...args) => callOperation("connect:ListRealtimeContactAnalysisSegmentsV2", ...(args as AmazonConnectFullApiOperationArgs<"connect:ListRealtimeContactAnalysisSegmentsV2">)),
    MonitorContact: (...args) => callOperation("connect:MonitorContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:MonitorContact">)),
    PauseContact: (...args) => callOperation("connect:PauseContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:PauseContact">)),
    ResumeContact: (...args) => callOperation("connect:ResumeContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:ResumeContact">)),
    ResumeContactRecording: (...args) => callOperation("connect:ResumeContactRecording", ...(args as AmazonConnectFullApiOperationArgs<"connect:ResumeContactRecording">)),
    StartChatContact: (...args) => callOperation("connect:StartChatContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartChatContact">)),
    StartContactMediaProcessing: (...args) => callOperation("connect:StartContactMediaProcessing", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartContactMediaProcessing">)),
    StartContactRecording: (...args) => callOperation("connect:StartContactRecording", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartContactRecording">)),
    StartContactStreaming: (...args) => callOperation("connect:StartContactStreaming", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartContactStreaming">)),
    StartEmailContact: (...args) => callOperation("connect:StartEmailContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartEmailContact">)),
    StartOutboundChatContact: (...args) => callOperation("connect:StartOutboundChatContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartOutboundChatContact">)),
    StartOutboundEmailContact: (...args) => callOperation("connect:StartOutboundEmailContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartOutboundEmailContact">)),
    StartOutboundVoiceContact: (...args) => callOperation("connect:StartOutboundVoiceContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartOutboundVoiceContact">)),
    StartScreenSharing: (...args) => callOperation("connect:StartScreenSharing", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartScreenSharing">)),
    StartTaskContact: (...args) => callOperation("connect:StartTaskContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartTaskContact">)),
    StartWebRTCContact: (...args) => callOperation("connect:StartWebRTCContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StartWebRTCContact">)),
    StopContact: (...args) => callOperation("connect:StopContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:StopContact">)),
    StopContactMediaProcessing: (...args) => callOperation("connect:StopContactMediaProcessing", ...(args as AmazonConnectFullApiOperationArgs<"connect:StopContactMediaProcessing">)),
    StopContactRecording: (...args) => callOperation("connect:StopContactRecording", ...(args as AmazonConnectFullApiOperationArgs<"connect:StopContactRecording">)),
    StopContactStreaming: (...args) => callOperation("connect:StopContactStreaming", ...(args as AmazonConnectFullApiOperationArgs<"connect:StopContactStreaming">)),
    SuspendContactRecording: (...args) => callOperation("connect:SuspendContactRecording", ...(args as AmazonConnectFullApiOperationArgs<"connect:SuspendContactRecording">)),
    TagContact: (...args) => callOperation("connect:TagContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:TagContact">)),
    TransferContact: (...args) => callOperation("connect:TransferContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:TransferContact">)),
    UntagContact: (...args) => callOperation("connect:UntagContact", ...(args as AmazonConnectFullApiOperationArgs<"connect:UntagContact">)),
    UpdateContactAttributes: (...args) => callOperation("connect:UpdateContactAttributes", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactAttributes">)),
    UpdateContactSchedule: (...args) => callOperation("connect:UpdateContactSchedule", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateContactSchedule">)),
    UpdateParticipantAuthentication: (...args) => callOperation("connect:UpdateParticipantAuthentication", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateParticipantAuthentication">)),
    UpdateParticipantRoleConfig: (...args) => callOperation("connect:UpdateParticipantRoleConfig", ...(args as AmazonConnectFullApiOperationArgs<"connect:UpdateParticipantRoleConfig">)),
  };
}
