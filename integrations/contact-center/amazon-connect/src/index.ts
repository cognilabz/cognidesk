import {
  ConnectClient,
  DescribeInstanceCommand,
  StartChatContactCommand,
  StartTaskContactCommand,
  TransferContactCommand,
  type ConnectClientConfig,
} from "@aws-sdk/client-connect";
import {
  ConnectParticipantClient,
  CreateParticipantConnectionCommand,
  GetTranscriptCommand,
  SendEventCommand,
  SendMessageCommand,
  type ConnectParticipantClientConfig,
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

export type AmazonConnectJsonObject = Record<string, unknown>;

export interface AmazonConnectStartTaskInput extends AmazonConnectJsonObject {
  name: string;
  description?: string;
  contactFlowId?: string;
  quickConnectId?: string;
  taskTemplateId?: string;
  attributes?: Record<string, string>;
  references?: Record<string, { type: string; value: string }>;
  clientToken?: string;
}

export interface AmazonConnectStartChatInput extends AmazonConnectJsonObject {
  contactFlowId: string;
  participantDetails: { displayName: string };
  initialMessage?: { contentType: string; content: string };
  supportedMessagingContentTypes?: string[];
  attributes?: Record<string, string>;
  clientToken?: string;
}

export interface AmazonConnectTransferInput extends AmazonConnectJsonObject {
  contactId: string;
  contactFlowId: string;
  queueId?: string;
  userId?: string;
  clientToken?: string;
}

export interface AmazonConnectTranscriptInput {
  connectionToken: string;
  contactId?: string;
  maxResults?: number;
  nextToken?: string;
}

export function createAmazonConnectContactCenterClient(
  options: AmazonConnectContactCenterOptions,
) {
  const rawClients = createAmazonConnectRawClients(options);

  return {
    rawClients,
    async startTaskContact(input: AmazonConnectStartTaskInput) {
      const response = await rawClients.connect.send(new StartTaskContactCommand({
        InstanceId: options.instanceId,
        Name: input.name,
        Description: input.description,
        ContactFlowId: input.contactFlowId,
        QuickConnectId: input.quickConnectId,
        TaskTemplateId: input.taskTemplateId,
        Attributes: input.attributes,
        References: normalizeReferences(input.references) as never,
        ClientToken: input.clientToken,
      }));
      return { contactId: response.ContactId, raw: response };
    },
    async startChatContact(input: AmazonConnectStartChatInput) {
      const response = await rawClients.connect.send(new StartChatContactCommand({
        InstanceId: options.instanceId,
        ContactFlowId: input.contactFlowId,
        ParticipantDetails: { DisplayName: input.participantDetails.displayName },
        InitialMessage: input.initialMessage
          ? { ContentType: input.initialMessage.contentType, Content: input.initialMessage.content }
          : undefined,
        SupportedMessagingContentTypes: input.supportedMessagingContentTypes,
        Attributes: input.attributes,
        ClientToken: input.clientToken,
      }));
      return {
        contactId: response.ContactId,
        participantId: response.ParticipantId,
        participantToken: response.ParticipantToken,
        continuedFromContactId: response.ContinuedFromContactId,
        raw: response,
      };
    },
    async createParticipantConnection(input: { participantToken: string; type?: string[] }) {
      return rawClients.participant.send(new CreateParticipantConnectionCommand({
        ParticipantToken: input.participantToken,
        Type: input.type as never,
      }));
    },
    async sendParticipantMessage(input: { connectionToken: string; contentType: string; content: string; clientToken?: string }) {
      return rawClients.participant.send(new SendMessageCommand({
        ConnectionToken: input.connectionToken,
        ContentType: input.contentType,
        Content: input.content,
        ClientToken: input.clientToken,
      }));
    },
    async sendParticipantEvent(input: { connectionToken: string; contentType: string; content?: string; clientToken?: string }) {
      return rawClients.participant.send(new SendEventCommand({
        ConnectionToken: input.connectionToken,
        ContentType: input.contentType,
        Content: input.content,
        ClientToken: input.clientToken,
      }));
    },
    async getParticipantTranscript(input: AmazonConnectTranscriptInput) {
      return rawClients.participant.send(new GetTranscriptCommand({
        ConnectionToken: input.connectionToken,
        ContactId: input.contactId,
        MaxResults: input.maxResults,
        NextToken: input.nextToken,
      }));
    },
    async transferContact(input: AmazonConnectTransferInput) {
      return rawClients.connect.send(new TransferContactCommand({
        InstanceId: options.instanceId,
        ContactId: input.contactId,
        ContactFlowId: input.contactFlowId,
        QueueId: input.queueId,
        UserId: input.userId,
        ClientToken: input.clientToken,
      }));
    },
    async describeInstance() {
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

function normalizeReferences(references: AmazonConnectStartTaskInput["references"]) {
  if (!references) return undefined;
  return Object.fromEntries(Object.entries(references).map(([key, value]) => [
    key,
    { Type: value.type, Value: value.value },
  ]));
}
