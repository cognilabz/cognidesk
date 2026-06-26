import { describe, expect, it, vi } from "vitest";
import {
  amazonConnectContactCenterManifest,
  createAmazonConnectContactCenterClient,
  createAmazonConnectContactCenterIntegration,
} from "../src/index.js";

describe("@cognidesk/integration-contact-center-amazon-connect", () => {
  it("keeps the manifest metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.amazonConnectContactCenterManifest.packageName)
      .toBe("@cognidesk/integration-contact-center-amazon-connect");
  });

  it("binds manifest operations to AWS SDK v3-backed handlers", () => {
    const connectClient = { send: vi.fn() };
    const participantClient = { send: vi.fn() };
    const integration = createAmazonConnectContactCenterIntegration({
      region: "eu-central-1",
      instanceId: "instance-1",
      connectClient: connectClient as never,
      participantClient: participantClient as never,
    });

    expect(integration.manifest.operations.map((operation) => operation.alias).sort())
      .toEqual([...integration.operationAliases].sort());
    expect(integration.rawClient).toMatchObject({
      connect: connectClient,
      participant: participantClient,
    });
  });

  it("starts task contacts through the injected AWS SDK client", async () => {
    const connectClient = {
      send: vi.fn(async (command: { input: unknown }) => ({ ContactId: "contact-1", input: command.input })),
    };
    const scheduledTime = new Date("2026-06-26T12:00:00.000Z");
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-1",
      connectClient: connectClient as never,
      participantClient: { send: vi.fn() } as never,
    });

    await expect(client.startTaskContact({
      name: "Support handoff",
      contactFlowId: "flow-1",
      previousContactId: "previous-contact-1",
      relatedContactId: "related-contact-1",
      attributes: { conversationId: "conversation-1" },
      references: {
        caseUrl: { type: "URL", value: "https://example.test/cases/1" },
        native: { Type: "STRING", Value: "case-1" },
      },
      scheduledTime,
      segmentAttributes: {
        "connect:ContactExpiry": {
          ValueMap: { ExpiryDuration: { ValueInteger: 135 } },
        },
      },
    })).resolves.toMatchObject({ contactId: "contact-1" });

    expect(connectClient.send).toHaveBeenCalledTimes(1);
    expect((connectClient.send.mock.calls[0]?.[0] as { input: Record<string, unknown> }).input)
      .toMatchObject({
        InstanceId: "instance-1",
        Name: "Support handoff",
        ContactFlowId: "flow-1",
        PreviousContactId: "previous-contact-1",
        RelatedContactId: "related-contact-1",
        Attributes: { conversationId: "conversation-1" },
        References: {
          caseUrl: { Type: "URL", Value: "https://example.test/cases/1" },
          native: { Type: "STRING", Value: "case-1" },
        },
        ScheduledTime: scheduledTime,
        SegmentAttributes: {
          "connect:ContactExpiry": {
            ValueMap: { ExpiryDuration: { ValueInteger: 135 } },
          },
        },
      });
  });

  it("starts chat contacts with typed AWS SDK fields", async () => {
    const connectClient = {
      send: vi.fn(async (command: { input: unknown }) => ({
        ContactId: "chat-1",
        ParticipantId: "participant-1",
        ParticipantToken: "participant-token-1",
        input: command.input,
      })),
    };
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-1",
      connectClient: connectClient as never,
      participantClient: { send: vi.fn() } as never,
    });

    await expect(client.startChatContact({
      contactFlowId: "flow-1",
      participantDetails: { DisplayName: "Customer One" },
      participantConfiguration: { ResponseMode: "COMPLETE" },
      initialMessage: { contentType: "text/plain", content: "Hello" },
      chatDurationInMinutes: 60,
      supportedMessagingContentTypes: ["text/plain", "text/markdown"],
      persistentChat: {
        RehydrationType: "ENTIRE_PAST_SESSION",
        SourceContactId: "source-contact-1",
      },
      segmentAttributes: {
        "connect:Subtype": { ValueString: "connect:Guide" },
      },
      customerId: "customer-1",
      disconnectOnCustomerExit: ["AGENT"],
      attributes: { conversationId: "conversation-1" },
    })).resolves.toMatchObject({
      contactId: "chat-1",
      participantId: "participant-1",
      participantToken: "participant-token-1",
    });

    expect((connectClient.send.mock.calls[0]?.[0] as { input: Record<string, unknown> }).input)
      .toMatchObject({
        InstanceId: "instance-1",
        ContactFlowId: "flow-1",
        ParticipantDetails: { DisplayName: "Customer One" },
        ParticipantConfiguration: { ResponseMode: "COMPLETE" },
        InitialMessage: { ContentType: "text/plain", Content: "Hello" },
        ChatDurationInMinutes: 60,
        SupportedMessagingContentTypes: ["text/plain", "text/markdown"],
        PersistentChat: {
          RehydrationType: "ENTIRE_PAST_SESSION",
          SourceContactId: "source-contact-1",
        },
        SegmentAttributes: {
          "connect:Subtype": { ValueString: "connect:Guide" },
        },
        CustomerId: "customer-1",
        DisconnectOnCustomerExit: ["AGENT"],
        Attributes: { conversationId: "conversation-1" },
      });
  });

  it("passes typed Connect Participant operations through SDK commands", async () => {
    const participantClient = {
      send: vi.fn(async (command: { input: unknown }) => ({ input: command.input })),
    };
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-1",
      connectClient: { send: vi.fn() } as never,
      participantClient: participantClient as never,
    });

    await client.createParticipantConnection({
      participantToken: "participant-token-1",
      type: ["WEBSOCKET", "CONNECTION_CREDENTIALS"],
      connectParticipant: true,
    });
    await client.sendParticipantMessage({
      connectionToken: "connection-token-1",
      contentType: "text/plain",
      content: "Message",
      clientToken: "message-token-1",
    });
    await client.sendParticipantEvent({
      connectionToken: "connection-token-1",
      contentType: "application/vnd.amazonaws.connect.event.typing",
      clientToken: "event-token-1",
    });
    await client.getParticipantTranscript({
      connectionToken: "connection-token-1",
      contactId: "contact-1",
      maxResults: 25,
      nextToken: "next-token-1",
      scanDirection: "FORWARD",
      sortOrder: "ASCENDING",
      startPosition: { MostRecent: 10 },
    });

    const inputs = participantClient.send.mock.calls
      .map((call) => (call[0] as { input: Record<string, unknown> }).input);
    expect(inputs).toEqual([
      {
        ParticipantToken: "participant-token-1",
        Type: ["WEBSOCKET", "CONNECTION_CREDENTIALS"],
        ConnectParticipant: true,
      },
      {
        ConnectionToken: "connection-token-1",
        ContentType: "text/plain",
        Content: "Message",
        ClientToken: "message-token-1",
      },
      {
        ConnectionToken: "connection-token-1",
        ContentType: "application/vnd.amazonaws.connect.event.typing",
        Content: undefined,
        ClientToken: "event-token-1",
      },
      {
        ConnectionToken: "connection-token-1",
        ContactId: "contact-1",
        MaxResults: 25,
        NextToken: "next-token-1",
        ScanDirection: "FORWARD",
        SortOrder: "ASCENDING",
        StartPosition: { MostRecent: 10 },
      },
    ]);
  });

  it("declares SDK-backed coverage rather than generated full-provider coverage", () => {
    expect(amazonConnectContactCenterManifest.coverage.scope).toBe("support-workflow-subset");
    expect(amazonConnectContactCenterManifest.metadata).toMatchObject({
      implementation: {
        strategy: "official-sdk",
        sdkPackages: ["@aws-sdk/client-connect", "@aws-sdk/client-connectparticipant"],
      },
    });
  });

  it("matches supported contact-center category aliases with normalized operation objects", () => {
    expect(amazonConnectContactCenterManifest.metadata?.categoryProfile).toMatchObject({
      id: "contact-center",
      matchedOperations: expect.arrayContaining([
        "contact-center.handoff.request",
        "contact-center.task.create",
        "contact-center.contact.start",
        "contact-center.transfer.request",
        "contact-center.transcript.read",
      ]),
    });
    expect(amazonConnectContactCenterManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((providerObject) => providerObject.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "amazonConnectTaskContact",
      "amazonConnectChatContact",
      "amazonConnectContactTransfer",
      "amazonConnectChatTranscript",
    ]));
  });
});
