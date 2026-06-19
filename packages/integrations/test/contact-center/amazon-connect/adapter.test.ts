import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  amazonConnectContactCenterCredentialStatuses,
  amazonConnectContactCenterProviderManifest,
  AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_COUNT,
  AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_NAMES,
  AMAZON_CONNECT_FULL_API_MODEL_COUNT,
  AMAZON_CONNECT_FULL_API_OPERATION_COUNT,
  createAmazonConnectContactCenterClient,
  createAmazonConnectContactCenterLiveChecks,
} from "../../../src/contact-center/amazon-connect/index.js";
import { createGeneratedApiFetchMock } from "./generated-api-fixtures.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(amazonConnectContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.amazon-connect",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "amazon-connect",
      trustLevel: "official",
    });
    expect(amazonConnectContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["handoff", "send", "transfer", "read-provider-object"]));
    expect(amazonConnectContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(amazonConnectContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        taskContact: "typed-create",
        chatContact: "typed-start",
        participantMessages: "typed-selected",
        participantEvents: "typed-selected",
        participantTranscript: "typed-read",
        participantAttachments: "generated-full-surface",
        taskEmailTransfer: "typed-transfer",
        fullConnectFamilyApiOperations: "generated-per-operation-functions",
        emailContact: "generated-full-surface",
        outboundChatContact: "generated-full-surface",
        outboundEmailContact: "generated-full-surface",
        voiceCallTransfer: "generated-full-surface-where-present-in-official-models",
        outboundVoiceContact: "generated-full-surface",
        callback: "generated-full-surface-where-present-in-official-models",
        outboundCampaigns: "generated-full-surface",
        webRtcContactLifecycle: "generated-full-surface",
        chatTransfer: "generated-full-surface-where-present-in-official-models",
        appIntegrations: "generated-full-surface",
        customerProfiles: "generated-full-surface",
        qConnect: "generated-full-surface",
        wisdom: "generated-full-surface",
      },
    });
    expect(amazonConnectContactCenterProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(amazonConnectContactCenterProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      officialModelCount: 11,
      documentedOperationCount: 765,
      implementedOperationCount: 765,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 765,
    });
    expect(AMAZON_CONNECT_FULL_API_MODEL_COUNT).toBe(11);
    expect(AMAZON_CONNECT_FULL_API_OPERATION_COUNT).toBe(765);
    expect(AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_COUNT).toBe(765);
    expect(AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "CreateApplication",
      "StartEmailContact",
      "StartOutboundChatContact",
      "StartOutboundVoiceContact",
      "StartWebRTCContact",
      "StartAttachmentUpload",
      "CreateCase",
      "StartCampaign",
      "ListRealtimeContactAnalysisSegments",
      "GetDomainConnecthealth",
      "SearchProfiles",
      "CreateAssistant",
      "CreateAssistantWisdom",
    ]));
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartTaskContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartChatContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("Connect Participant Service");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("TASK/EMAIL transfer");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("documented task attachments");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartWebRTCContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartEmailContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartOutboundChatContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartOutboundEmailContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("StartOutboundVoiceContact");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("Customer Profiles");
    expect(amazonConnectContactCenterProviderManifest.coverage.notes.join(" ")).toContain("Q Connect");
    expect(amazonConnectContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://github.com/aws/api-models-aws/tree/main/models",
        "https://aws.amazon.com/blogs/aws/introducing-aws-api-models-and-publicly-available-resources-for-aws-api-definitions/",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Service.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-participant_SendEvent.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-participant_GetTranscript.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-participant_StartAttachmentUpload.html",
        "https://docs.aws.amazon.com/connect/latest/APIReference/API_TransferContact.html",
        "https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html",
        "https://docs.aws.amazon.com/customerprofiles/latest/APIReference/Welcome.html",
        "https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/Welcome.html",
      ]));
    const providerObjectKinds = amazonConnectContactCenterProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining([
      "amazonConnectParticipantEvent",
      "amazonConnectChatTranscript",
    ]));
    expect(amazonConnectContactCenterProviderManifest.capabilities)
      .not.toContainEqual(expect.objectContaining({
        providerObjects: expect.arrayContaining([
          expect.objectContaining({ kind: "amazonConnectOutboundVoiceContact" }),
        ]),
      }));
  });

  it("exposes generated functions for the full AWS Connect-family model surface", async () => {
    const fetchMock = createGeneratedApiFetchMock();
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-123",
      authorizationHeader: "AWS4-HMAC-SHA256 signed",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.StartEmailContact({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires full email endpoints/message.
      body: { InstanceId: "instance-123", ContactFlowId: "flow-1" },
    })).resolves.toMatchObject({ ContactId: "email-contact-1" });
    await expect(client.fullApi.StartOutboundChatContact({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires source/destination endpoints.
      body: { InstanceId: "instance-123", ContactFlowId: "flow-1" },
    })).resolves.toMatchObject({ ContactId: "outbound-chat-1" });
    await expect(client.fullApi.StartOutboundVoiceContact({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires destination phone number.
      body: { InstanceId: "instance-123", ContactFlowId: "flow-1" },
    })).resolves.toMatchObject({ ContactId: "voice-1" });
    await expect(client.fullApi.StartWebRTCContact({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires participant details.
      body: { InstanceId: "instance-123", ContactFlowId: "flow-1" },
    })).resolves.toMatchObject({ ConnectionData: { Attendee: {} } });
    await expect(client.fullApi.StartAttachmentUpload({
      bearerToken: "connection-token",
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires content type and client token.
      body: { AttachmentName: "summary.txt", AttachmentSizeInBytes: 12 },
    })).resolves.toMatchObject({ AttachmentId: "attachment-1" });
    await expect(client.fullApi.CreateCase({
      pathParams: { domainId: "domain-1" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires template id.
      body: { fields: [] },
    })).resolves.toMatchObject({ caseId: "case-1" });
    await expect(client.fullApi.StartCampaign({
      pathParams: { id: "campaign-1" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.ListRealtimeContactAnalysisSegments({
      body: { InstanceId: "instance-123", ContactId: "contact-1" },
    })).resolves.toMatchObject({ Segments: [] });
    await expect(client.requestOperation("connecthealth:GetDomain", {
      pathParams: { domainId: "domain-1" },
    })).resolves.toMatchObject({ domain: { id: "domain-1" } });
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.CreateCase()).rejects.toThrow("Missing Amazon Connect path parameter 'domainId'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://connect.eu-central-1.amazonaws.com/contact/email",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          authorization: "AWS4-HMAC-SHA256 signed",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://participant.connect.eu-central-1.amazonaws.com/participant/start-attachment-upload",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "x-amz-bearer": "connection-token",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      "https://cases.eu-central-1.amazonaws.com/domains/domain-1/cases",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("starts Amazon Connect task contacts with the documented request shape", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ContactId: "contact-123" }), { status: 200 })
    );
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-123",
      authorizationHeader: "AWS4-HMAC-SHA256 signed",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.startTaskContact({
      name: "Flight disruption handoff",
      description: "Passenger needs manual rebooking.",
      contactFlowId: "flow-123",
      attributes: { cognideskConversationId: "conversation_1" },
      references: {
        conversation: { type: "URL", value: "https://studio.example.test/conversations/conversation_1" },
      },
      attachments: [{ fileName: "summary.txt", s3Url: "https://s3.example.test/summary.txt?signature=1" }],
    })).resolves.toMatchObject({ contactId: "contact-123" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://connect.eu-central-1.amazonaws.com/contact/task",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          authorization: "AWS4-HMAC-SHA256 signed",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      InstanceId: "instance-123",
      Name: "Flight disruption handoff",
      ContactFlowId: "flow-123",
      Attributes: { cognideskConversationId: "conversation_1" },
      References: {
        conversation: { Type: "URL", Value: "https://studio.example.test/conversations/conversation_1" },
      },
      Attachments: [{ FileName: "summary.txt", S3Url: "https://s3.example.test/summary.txt?signature=1" }],
    });
  });

  it("fails closed when SDK config supplies multiple routing targets", async () => {
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-123",
      authorizationHeader: "signed",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    await expect(client.startTaskContact({
      name: "Bad route",
      contactFlowId: "flow-123",
      quickConnectId: "quick-123",
    })).rejects.toThrow("only one of contactFlowId, quickConnectId, or taskTemplateId");
  });

  it("starts Amazon Connect chat contacts through the documented chat endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        ContactId: "chat-contact-123",
        ParticipantId: "participant-123",
        ParticipantToken: "participant-token",
      }), { status: 200 })
    );
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-123",
      authorizationHeader: "AWS4-HMAC-SHA256 signed",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.startChatContact({
      contactFlowId: "flow-123",
      participantDetails: { displayName: "Ada Customer" },
      initialMessage: { contentType: "text/plain", content: "I need help." },
      supportedMessagingContentTypes: ["text/plain", "text/markdown"],
      attributes: { cognideskConversationId: "conversation_1" },
      clientToken: "chat-token-1",
      disconnectOnCustomerExit: ["AGENT"],
    })).resolves.toMatchObject({
      contactId: "chat-contact-123",
      participantId: "participant-123",
      participantToken: "participant-token",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://connect.eu-central-1.amazonaws.com/contact/chat",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          authorization: "AWS4-HMAC-SHA256 signed",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      InstanceId: "instance-123",
      ContactFlowId: "flow-123",
      ParticipantDetails: { DisplayName: "Ada Customer" },
      InitialMessage: { Content: "I need help.", ContentType: "text/plain" },
      SupportedMessagingContentTypes: ["text/plain", "text/markdown"],
      Attributes: { cognideskConversationId: "conversation_1" },
      ClientToken: "chat-token-1",
      DisconnectOnCustomerExit: ["AGENT"],
    });
  });

  it("types Amazon Connect chat disconnect as the documented AGENT option", () => {
    const typed: Parameters<ReturnType<typeof createAmazonConnectContactCenterClient>["startChatContact"]>[0] = {
      contactFlowId: "flow-123",
      participantDetails: { displayName: "Ada Customer" },
      disconnectOnCustomerExit: ["AGENT"],
    };
    expect(typed.disconnectOnCustomerExit).toEqual(["AGENT"]);
  });

  it("uses Amazon Connect Participant Service bearer-token chat operations without SigV4 headers", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request) => {
      const value = String(url);
      if (value.endsWith("/participant/connection")) {
        return new Response(JSON.stringify({
          ConnectionCredentials: { ConnectionToken: "connection-token" },
          Websocket: { Url: "wss://example.test/connect", ConnectionExpiry: "2026-06-17T18:30:00.000Z" },
        }), { status: 200 });
      }
      if (value.endsWith("/participant/message")) {
        return new Response(JSON.stringify({ Id: "message-1" }), { status: 200 });
      }
      if (value.endsWith("/participant/event")) {
        return new Response(JSON.stringify({ Id: "event-1" }), { status: 200 });
      }
      if (value.endsWith("/participant/transcript")) {
        return new Response(JSON.stringify({ Transcript: [{ Id: "message-1", Content: "Hello" }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ Message: `Unexpected URL ${value}` }), { status: 404 });
    });
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-123",
      authorizationHeader: "AWS4-HMAC-SHA256 signed",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createParticipantConnection({
      participantToken: "participant-token",
      type: ["WEBSOCKET", "CONNECTION_CREDENTIALS"],
      connectParticipant: true,
    })).resolves.toMatchObject({ ConnectionCredentials: { ConnectionToken: "connection-token" } });
    await expect(client.sendParticipantMessage({
      connectionToken: "connection-token",
      contentType: "text/plain",
      content: "Thanks for waiting.",
      clientToken: "message-token",
    })).resolves.toMatchObject({ Id: "message-1" });
    await expect(client.sendParticipantEvent({
      connectionToken: "connection-token",
      contentType: "application/vnd.amazonaws.connect.event.typing",
    })).resolves.toMatchObject({ Id: "event-1" });
    await expect(client.getParticipantTranscript({
      connectionToken: "connection-token",
      scanDirection: "BACKWARD",
      sortOrder: "DESCENDING",
      maxResults: 25,
    })).resolves.toMatchObject({ Transcript: [{ Id: "message-1" }] });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://participant.connect.eu-central-1.amazonaws.com/participant/connection",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "x-amz-bearer": "participant-token",
          "content-type": "application/json",
        }),
      }),
    );
    expect((fetchMock.mock.calls[0] as unknown[])[1]).not.toMatchObject({
      headers: expect.objectContaining({ authorization: "AWS4-HMAC-SHA256 signed" }),
    });
    expect(JSON.parse(((fetchMock.mock.calls[1] as unknown[])[1] as { body: string }).body)).toEqual({
      Content: "Thanks for waiting.",
      ContentType: "text/plain",
      ClientToken: "message-token",
    });
  });

  it("transfers only one Amazon Connect task/email target at a time", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ContactId: "contact-123", ContactArn: "arn:aws:connect:contact" }), { status: 200 })
    );
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-123",
      authorizationHeader: "AWS4-HMAC-SHA256 signed",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.transferContact({
      contactId: "contact-123",
      contactFlowId: "transfer-flow-123",
      queueId: "queue-123",
      clientToken: "transfer-token",
    })).resolves.toMatchObject({ ContactId: "contact-123" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://connect.eu-central-1.amazonaws.com/contact/transfer",
      expect.objectContaining({ method: "POST" }),
    );
    expect(JSON.parse(((fetchMock.mock.calls[0] as unknown[])[1] as { body: string }).body)).toEqual({
      InstanceId: "instance-123",
      ContactId: "contact-123",
      ContactFlowId: "transfer-flow-123",
      QueueId: "queue-123",
      ClientToken: "transfer-token",
    });

    await expect(client.transferContact({
      contactId: "contact-123",
      contactFlowId: "transfer-flow-123",
      queueId: "queue-123",
      userId: "user-123",
    })).rejects.toThrow("queueId or userId, not both");
  });

  it("reports live conformance as credential-blocked until credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: amazonConnectContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [amazonConnectContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff", "send", "transfer", "read-provider-object"],
      }],
      credentialStatuses: amazonConnectContactCenterCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createAmazonConnectContactCenterLiveChecks({
          region: "eu-central-1",
          instanceId: "instance-123",
          authorizationHeader: "missing",
          client: { async describeInstance() { return {}; } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.describe-instance",
      status: "credential-blocked",
    }));
  });

  it("passes conformance with configured credentials and live readiness", async () => {
    const result = await runProviderConformance({
      manifest: amazonConnectContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [amazonConnectContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff", "send", "transfer", "read-provider-object"],
      }],
      credentialStatuses: amazonConnectContactCenterCredentialStatuses({
        region: "eu-central-1",
        instanceId: "instance-123",
        apiAccessConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createAmazonConnectContactCenterLiveChecks({
          region: "eu-central-1",
          instanceId: "instance-123",
          authorizationHeader: "configured",
          client: { async describeInstance() { return { Instance: { Id: "instance-123" } }; } },
        }),
      },
    });

    expect(result.status).toBe("passed");
  });
});
