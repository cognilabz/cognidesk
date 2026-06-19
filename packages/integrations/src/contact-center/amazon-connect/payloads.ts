import type {
  AmazonConnectStartChatInput,
  AmazonConnectStartTaskInput,
  AmazonConnectTaskReference,
  AmazonConnectTransferContactInput,
} from "./contracts.js";

export function startTaskBody(instanceId: string, input: AmazonConnectStartTaskInput) {
  if (!instanceId) throw new Error("Amazon Connect instanceId is required.");
  if (!input.name) throw new Error("Amazon Connect task name is required.");
  const routeKeys = [input.contactFlowId, input.quickConnectId, input.taskTemplateId].filter(Boolean);
  if (routeKeys.length > 1) {
    throw new Error("Amazon Connect task handoff accepts only one of contactFlowId, quickConnectId, or taskTemplateId.");
  }
  return {
    InstanceId: instanceId,
    Name: input.name,
    ...(input.description ? { Description: input.description } : {}),
    ...(input.clientToken ? { ClientToken: input.clientToken } : {}),
    ...(input.contactFlowId ? { ContactFlowId: input.contactFlowId } : {}),
    ...(input.quickConnectId ? { QuickConnectId: input.quickConnectId } : {}),
    ...(input.taskTemplateId ? { TaskTemplateId: input.taskTemplateId } : {}),
    ...(input.previousContactId ? { PreviousContactId: input.previousContactId } : {}),
    ...(input.relatedContactId ? { RelatedContactId: input.relatedContactId } : {}),
    ...(input.scheduledTime !== undefined ? { ScheduledTime: input.scheduledTime } : {}),
    ...(input.attributes ? { Attributes: input.attributes } : {}),
    ...(input.references ? { References: mapReferences(input.references) } : {}),
    ...(input.segmentAttributes ? { SegmentAttributes: input.segmentAttributes } : {}),
    ...(input.attachments?.length ? { Attachments: input.attachments.map((attachment) => ({
      FileName: attachment.fileName,
      S3Url: attachment.s3Url,
    })) } : {}),
  };
}

export function startChatBody(instanceId: string, input: AmazonConnectStartChatInput) {
  if (!instanceId) throw new Error("Amazon Connect instanceId is required.");
  if (!input.contactFlowId) throw new Error("Amazon Connect chat contactFlowId is required.");
  if (!input.participantDetails?.displayName) {
    throw new Error("Amazon Connect chat participantDetails.displayName is required.");
  }
  return {
    InstanceId: instanceId,
    ContactFlowId: input.contactFlowId,
    ParticipantDetails: { DisplayName: input.participantDetails.displayName },
    ...(input.attributes ? { Attributes: input.attributes } : {}),
    ...(input.clientToken ? { ClientToken: input.clientToken } : {}),
    ...(input.customerId ? { CustomerId: input.customerId } : {}),
    ...(input.chatDurationInMinutes !== undefined ? { ChatDurationInMinutes: input.chatDurationInMinutes } : {}),
    ...(input.initialMessage ? { InitialMessage: {
      Content: input.initialMessage.content,
      ContentType: input.initialMessage.contentType,
    } } : {}),
    ...(input.supportedMessagingContentTypes?.length ? { SupportedMessagingContentTypes: input.supportedMessagingContentTypes } : {}),
    ...(input.relatedContactId ? { RelatedContactId: input.relatedContactId } : {}),
    ...(input.persistentChat ? { PersistentChat: input.persistentChat } : {}),
    ...(input.participantConfiguration ? { ParticipantConfiguration: input.participantConfiguration } : {}),
    ...(input.segmentAttributes ? { SegmentAttributes: input.segmentAttributes } : {}),
    ...(input.disconnectOnCustomerExit?.length ? { DisconnectOnCustomerExit: input.disconnectOnCustomerExit } : {}),
  };
}

export function transferContactBody(instanceId: string, input: AmazonConnectTransferContactInput) {
  if (!instanceId) throw new Error("Amazon Connect instanceId is required.");
  if (!input.contactId) throw new Error("Amazon Connect transfer contactId is required.");
  if (!input.contactFlowId) throw new Error("Amazon Connect transfer contactFlowId is required.");
  if (input.queueId && input.userId) {
    throw new Error("Amazon Connect TransferContact accepts queueId or userId, not both.");
  }
  return {
    InstanceId: instanceId,
    ContactId: input.contactId,
    ContactFlowId: input.contactFlowId,
    ...(input.queueId ? { QueueId: input.queueId } : {}),
    ...(input.userId ? { UserId: input.userId } : {}),
    ...(input.clientToken ? { ClientToken: input.clientToken } : {}),
  };
}

function mapReferences(references: Record<string, AmazonConnectTaskReference>) {
  return Object.fromEntries(Object.entries(references).map(([key, reference]) => [key, {
    ...(reference.arn ? { Arn: reference.arn } : {}),
    ...(reference.status ? { Status: reference.status } : {}),
    ...(reference.statusReason ? { StatusReason: reference.statusReason } : {}),
    Type: reference.type,
    Value: reference.value,
  }]));
}
