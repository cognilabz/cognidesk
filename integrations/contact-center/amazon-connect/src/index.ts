import {
  ConnectClient,
  DescribeInstanceCommand,
  StartChatContactCommand,
  StartTaskContactCommand,
  TransferContactCommand,
  type ConnectClientConfig,
  type DescribeInstanceCommandOutput,
  type Reference,
  type StartChatContactCommandInput,
  type StartChatContactCommandOutput,
  type StartTaskContactCommandInput,
  type StartTaskContactCommandOutput,
  type TransferContactCommandInput,
  type TransferContactCommandOutput,
} from "@aws-sdk/client-connect";
import {
  ConnectParticipantClient,
  CreateParticipantConnectionCommand,
  GetTranscriptCommand,
  SendEventCommand,
  SendMessageCommand,
  type CreateParticipantConnectionCommandInput,
  type CreateParticipantConnectionCommandOutput,
  type ConnectParticipantClientConfig,
  type GetTranscriptCommandInput,
  type GetTranscriptCommandOutput,
  type SendEventCommandInput,
  type SendEventCommandOutput,
  type SendMessageCommandInput,
  type SendMessageCommandOutput,
} from "@aws-sdk/client-connectparticipant";
import { defineIntegration } from "@cognidesk/integration-kit";
import {
  amazonConnectContactCenterManifest,
  amazonConnectContactCenterManifestInput,
} from "./manifest.js";

export { amazonConnectContactCenterManifest } from "./manifest.js";

export interface AmazonConnectRawClients {
  connect: ConnectClient;
  participant: ConnectParticipantClient;
}

export interface AmazonConnectContactCenterOptions {
  region: string;
  instanceId: string;
  connectClient?: ConnectClient;
  participantClient?: ConnectParticipantClient;
  connectClientConfig?: ConnectClientConfig;
  participantClientConfig?: ConnectParticipantClientConfig;
}

type AwsParticipantDetails = NonNullable<StartChatContactCommandInput["ParticipantDetails"]>;
type AwsChatMessage = NonNullable<StartChatContactCommandInput["InitialMessage"]>;

export interface AmazonConnectReferenceInput {
  type: NonNullable<Reference["Type"]>;
  value: NonNullable<Reference["Value"]>;
  status?: Reference["Status"];
  arn?: Reference["Arn"];
  statusReason?: Reference["StatusReason"];
}

export type AmazonConnectContactReferencesInput = Record<string, AmazonConnectReferenceInput | Reference>;

export interface AmazonConnectStartTaskInput {
  name: NonNullable<StartTaskContactCommandInput["Name"]>;
  previousContactId?: StartTaskContactCommandInput["PreviousContactId"];
  description?: StartTaskContactCommandInput["Description"];
  contactFlowId?: StartTaskContactCommandInput["ContactFlowId"];
  quickConnectId?: StartTaskContactCommandInput["QuickConnectId"];
  taskTemplateId?: StartTaskContactCommandInput["TaskTemplateId"];
  attributes?: StartTaskContactCommandInput["Attributes"];
  references?: AmazonConnectContactReferencesInput;
  scheduledTime?: StartTaskContactCommandInput["ScheduledTime"];
  relatedContactId?: StartTaskContactCommandInput["RelatedContactId"];
  segmentAttributes?: StartTaskContactCommandInput["SegmentAttributes"];
  attachments?: StartTaskContactCommandInput["Attachments"];
  clientToken?: StartTaskContactCommandInput["ClientToken"];
}

export type AmazonConnectParticipantDetailsInput =
  | AwsParticipantDetails
  | { displayName: NonNullable<AwsParticipantDetails["DisplayName"]> };

export type AmazonConnectChatMessageInput =
  | AwsChatMessage
  | {
    contentType: NonNullable<AwsChatMessage["ContentType"]>;
    content: NonNullable<AwsChatMessage["Content"]>;
  };

export interface AmazonConnectStartChatInput {
  contactFlowId: NonNullable<StartChatContactCommandInput["ContactFlowId"]>;
  participantDetails: AmazonConnectParticipantDetailsInput;
  participantConfiguration?: StartChatContactCommandInput["ParticipantConfiguration"];
  initialMessage?: AmazonConnectChatMessageInput;
  chatDurationInMinutes?: StartChatContactCommandInput["ChatDurationInMinutes"];
  supportedMessagingContentTypes?: StartChatContactCommandInput["SupportedMessagingContentTypes"];
  persistentChat?: StartChatContactCommandInput["PersistentChat"];
  relatedContactId?: StartChatContactCommandInput["RelatedContactId"];
  segmentAttributes?: StartChatContactCommandInput["SegmentAttributes"];
  customerId?: StartChatContactCommandInput["CustomerId"];
  disconnectOnCustomerExit?: StartChatContactCommandInput["DisconnectOnCustomerExit"];
  attributes?: StartChatContactCommandInput["Attributes"];
  clientToken?: StartChatContactCommandInput["ClientToken"];
}

export interface AmazonConnectTransferInput {
  contactId: NonNullable<TransferContactCommandInput["ContactId"]>;
  contactFlowId: NonNullable<TransferContactCommandInput["ContactFlowId"]>;
  queueId?: TransferContactCommandInput["QueueId"];
  userId?: TransferContactCommandInput["UserId"];
  clientToken?: TransferContactCommandInput["ClientToken"];
}

export interface AmazonConnectCreateParticipantConnectionInput {
  participantToken: NonNullable<CreateParticipantConnectionCommandInput["ParticipantToken"]>;
  type?: CreateParticipantConnectionCommandInput["Type"];
  connectParticipant?: CreateParticipantConnectionCommandInput["ConnectParticipant"];
}

export interface AmazonConnectSendParticipantMessageInput {
  connectionToken: NonNullable<SendMessageCommandInput["ConnectionToken"]>;
  contentType: NonNullable<SendMessageCommandInput["ContentType"]>;
  content: NonNullable<SendMessageCommandInput["Content"]>;
  clientToken?: SendMessageCommandInput["ClientToken"];
}

export interface AmazonConnectSendParticipantEventInput {
  connectionToken: NonNullable<SendEventCommandInput["ConnectionToken"]>;
  contentType: NonNullable<SendEventCommandInput["ContentType"]>;
  content?: SendEventCommandInput["Content"];
  clientToken?: SendEventCommandInput["ClientToken"];
}

export interface AmazonConnectTranscriptInput {
  connectionToken: NonNullable<GetTranscriptCommandInput["ConnectionToken"]>;
  contactId?: GetTranscriptCommandInput["ContactId"];
  maxResults?: GetTranscriptCommandInput["MaxResults"];
  nextToken?: GetTranscriptCommandInput["NextToken"];
  scanDirection?: GetTranscriptCommandInput["ScanDirection"];
  sortOrder?: GetTranscriptCommandInput["SortOrder"];
  startPosition?: GetTranscriptCommandInput["StartPosition"];
}

export interface AmazonConnectStartTaskResult {
  contactId: StartTaskContactCommandOutput["ContactId"];
  raw: StartTaskContactCommandOutput;
}

export interface AmazonConnectStartChatResult {
  contactId: StartChatContactCommandOutput["ContactId"];
  participantId: StartChatContactCommandOutput["ParticipantId"];
  participantToken: StartChatContactCommandOutput["ParticipantToken"];
  continuedFromContactId: StartChatContactCommandOutput["ContinuedFromContactId"];
  raw: StartChatContactCommandOutput;
}

export function createAmazonConnectContactCenterClient(
  options: AmazonConnectContactCenterOptions,
) {
  const rawClients = createAmazonConnectRawClients(options);

  return {
    rawClients,
    async startTaskContact(input: AmazonConnectStartTaskInput): Promise<AmazonConnectStartTaskResult> {
      const commandInput: StartTaskContactCommandInput = {
        InstanceId: options.instanceId,
        Name: input.name,
        PreviousContactId: input.previousContactId,
        Description: input.description,
        ContactFlowId: input.contactFlowId,
        QuickConnectId: input.quickConnectId,
        TaskTemplateId: input.taskTemplateId,
        Attributes: input.attributes,
        References: normalizeReferences(input.references),
        ScheduledTime: input.scheduledTime,
        RelatedContactId: input.relatedContactId,
        SegmentAttributes: input.segmentAttributes,
        Attachments: input.attachments,
        ClientToken: input.clientToken,
      };
      const response = await rawClients.connect.send(new StartTaskContactCommand(commandInput));
      return { contactId: response.ContactId, raw: response };
    },
    async startChatContact(input: AmazonConnectStartChatInput): Promise<AmazonConnectStartChatResult> {
      const commandInput: StartChatContactCommandInput = {
        InstanceId: options.instanceId,
        ContactFlowId: input.contactFlowId,
        ParticipantDetails: normalizeParticipantDetails(input.participantDetails),
        ParticipantConfiguration: input.participantConfiguration,
        InitialMessage: normalizeChatMessage(input.initialMessage),
        ChatDurationInMinutes: input.chatDurationInMinutes,
        SupportedMessagingContentTypes: input.supportedMessagingContentTypes,
        PersistentChat: input.persistentChat,
        RelatedContactId: input.relatedContactId,
        SegmentAttributes: input.segmentAttributes,
        CustomerId: input.customerId,
        DisconnectOnCustomerExit: input.disconnectOnCustomerExit,
        Attributes: input.attributes,
        ClientToken: input.clientToken,
      };
      const response = await rawClients.connect.send(new StartChatContactCommand(commandInput));
      return {
        contactId: response.ContactId,
        participantId: response.ParticipantId,
        participantToken: response.ParticipantToken,
        continuedFromContactId: response.ContinuedFromContactId,
        raw: response,
      };
    },
    async createParticipantConnection(
      input: AmazonConnectCreateParticipantConnectionInput,
    ): Promise<CreateParticipantConnectionCommandOutput> {
      const commandInput: CreateParticipantConnectionCommandInput = {
        ParticipantToken: input.participantToken,
        Type: input.type,
        ConnectParticipant: input.connectParticipant,
      };
      return rawClients.participant.send(new CreateParticipantConnectionCommand(commandInput));
    },
    async sendParticipantMessage(
      input: AmazonConnectSendParticipantMessageInput,
    ): Promise<SendMessageCommandOutput> {
      const commandInput: SendMessageCommandInput = {
        ConnectionToken: input.connectionToken,
        ContentType: input.contentType,
        Content: input.content,
        ClientToken: input.clientToken,
      };
      return rawClients.participant.send(new SendMessageCommand(commandInput));
    },
    async sendParticipantEvent(
      input: AmazonConnectSendParticipantEventInput,
    ): Promise<SendEventCommandOutput> {
      const commandInput: SendEventCommandInput = {
        ConnectionToken: input.connectionToken,
        ContentType: input.contentType,
        Content: input.content,
        ClientToken: input.clientToken,
      };
      return rawClients.participant.send(new SendEventCommand(commandInput));
    },
    async getParticipantTranscript(input: AmazonConnectTranscriptInput): Promise<GetTranscriptCommandOutput> {
      const commandInput: GetTranscriptCommandInput = {
        ConnectionToken: input.connectionToken,
        ContactId: input.contactId,
        MaxResults: input.maxResults,
        NextToken: input.nextToken,
        ScanDirection: input.scanDirection,
        SortOrder: input.sortOrder,
        StartPosition: input.startPosition,
      };
      return rawClients.participant.send(new GetTranscriptCommand(commandInput));
    },
    async transferContact(input: AmazonConnectTransferInput): Promise<TransferContactCommandOutput> {
      const commandInput: TransferContactCommandInput = {
        InstanceId: options.instanceId,
        ContactId: input.contactId,
        ContactFlowId: input.contactFlowId,
        QueueId: input.queueId,
        UserId: input.userId,
        ClientToken: input.clientToken,
      };
      return rawClients.connect.send(new TransferContactCommand(commandInput));
    },
    async describeInstance(): Promise<DescribeInstanceCommandOutput> {
      return rawClients.connect.send(new DescribeInstanceCommand({
        InstanceId: options.instanceId,
      }));
    },
  };
}

export function createAmazonConnectContactCenterIntegration(options: AmazonConnectContactCenterOptions) {
  const client = createAmazonConnectContactCenterClient(options);
  const integration = defineIntegration({
    manifest: amazonConnectContactCenterManifestInput,
    operations: {
      "contact-center.handoff.request": client.startTaskContact,
      "contact-center.task.create": client.startTaskContact,
      "contact-center.contact.start": client.startChatContact,
      "contact-center.transfer.request": client.transferContact,
      "contact-center.transcript.read": client.getParticipantTranscript,
    },
  });
  return {
    ...integration,
    rawClient: client.rawClients,
    rawClients: client.rawClients,
    credentialStatuses: () => amazonConnectContactCenterCredentialStatuses(options),
    readiness: async () => amazonConnectReadiness(client),
  };
}

export function amazonConnectContactCenterCredentialStatuses(
  input: Pick<AmazonConnectContactCenterOptions, "region" | "instanceId">,
) {
  return [
    {
      providerPackageId: amazonConnectContactCenterManifest.id,
      requirementId: "amazon-connect-instance",
      state: input.region && input.instanceId ? "configured" : "missing",
      message: input.region && input.instanceId
        ? "Amazon Connect region and instance ID are configured."
        : "Amazon Connect region and instance ID are required.",
    },
    {
      providerPackageId: amazonConnectContactCenterManifest.id,
      requirementId: "amazon-connect-api-access",
      state: "required",
      message: "AWS SDK credential readiness is verified by the live readiness check.",
    },
  ];
}

async function amazonConnectReadiness(
  client: ReturnType<typeof createAmazonConnectContactCenterClient>,
) {
  try {
    await client.describeInstance();
    return {
      providerPackageId: amazonConnectContactCenterManifest.id,
      status: "ready",
      live: true,
      checkSource: "DescribeInstance",
    };
  } catch (error) {
    return {
      providerPackageId: amazonConnectContactCenterManifest.id,
      status: "blocked",
      live: true,
      checkSource: "DescribeInstance",
      blockers: [{
        code: "amazon-connect-readiness-failed",
        message: error instanceof Error ? error.message : "Amazon Connect readiness failed.",
        kind: "permission-blocked",
      }],
    };
  }
}

function createAmazonConnectRawClients(options: AmazonConnectContactCenterOptions): AmazonConnectRawClients {
  return {
    connect: options.connectClient ?? new ConnectClient({
      region: options.region,
      ...options.connectClientConfig,
    }),
    participant: options.participantClient ?? new ConnectParticipantClient({
      region: options.region,
      ...options.participantClientConfig,
    }),
  };
}

function normalizeReferences(
  references: AmazonConnectStartTaskInput["references"],
): StartTaskContactCommandInput["References"] {
  if (!references) return undefined;
  return Object.fromEntries(Object.entries(references).map(([key, value]) => [
    key,
    normalizeReference(value),
  ]));
}

function normalizeReference(reference: AmazonConnectReferenceInput | Reference): Reference {
  if ("type" in reference) {
    return {
      Type: reference.type,
      Value: reference.value,
      Status: reference.status,
      Arn: reference.arn,
      StatusReason: reference.statusReason,
    };
  }
  return reference;
}

function normalizeParticipantDetails(
  participantDetails: AmazonConnectStartChatInput["participantDetails"],
): StartChatContactCommandInput["ParticipantDetails"] {
  if ("displayName" in participantDetails) {
    return { DisplayName: participantDetails.displayName };
  }
  return participantDetails;
}

function normalizeChatMessage(
  message: AmazonConnectStartChatInput["initialMessage"],
): StartChatContactCommandInput["InitialMessage"] {
  if (!message) return undefined;
  if ("contentType" in message) {
    return { ContentType: message.contentType, Content: message.content };
  }
  return message;
}
