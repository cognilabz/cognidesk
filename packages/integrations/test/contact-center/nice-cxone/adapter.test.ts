import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createNiceCxoneContactCenterClient,
  NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT,
  NICE_CXONE_FULL_API_OPERATION_COUNT,
  NICE_CXONE_FULL_API_PATH_COUNT,
  NICE_CXONE_FULL_API_SPEC_COUNT,
  niceCxoneContactCenterCredentialStatuses,
  niceCxoneContactCenterProviderManifest,
} from "../../../src/contact-center/nice-cxone/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(niceCxoneContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.nice-cxone",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "nice-cxone",
      trustLevel: "official",
    });
    expect(niceCxoneContactCenterProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(niceCxoneContactCenterProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "nice-cxone-public-openapi",
      documentedSpecCount: 68,
      documentedPathCount: 484,
      documentedOperationCount: 618,
      implementedOperationCount: 618,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 618,
    });
    expect(NICE_CXONE_FULL_API_SPEC_COUNT).toBe(68);
    expect(NICE_CXONE_FULL_API_PATH_COUNT).toBe(484);
    expect(NICE_CXONE_FULL_API_OPERATION_COUNT).toBe(618);
    expect(NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT).toBe(618);
    expect(niceCxoneContactCenterProviderManifest.coverage.notes.join(" ")).toContain("generated per-operation functions");
    expect(niceCxoneContactCenterProviderManifest.credentialRequirements[1]?.scopes).toEqual([]);
    expect(niceCxoneContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developer.niceincontact.com/API/PatronAPI",
        "https://developer.niceincontact.com/API/AgentAPI",
        "https://developer.niceincontact.com/API/DigitalEngagementAPI",
        "https://developer.niceincontact.com/API/AdminAPI",
        "https://developer.niceincontact.com/API/ReportingAPI",
      ]));
    expect(niceCxoneContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(niceCxoneContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        configuredHttpHandoff: "supported",
        fullPublicApiOperations: "generated-per-operation-functions",
        patronCallback: "generated-full-surface",
        patronLiveChat: "generated-full-surface",
        patronWorkItem: "generated-full-surface",
        digitalEngagement: "generated-full-surface",
        agentPhoneChatEmailSmsWorkItems: "generated-full-surface",
        agentStatus: "generated-full-surface",
        email: "generated-full-surface",
        sms: "generated-full-surface",
        outboundDialing: "generated-full-surface",
        reporting: "generated-full-surface",
      },
    });
    const handoff = niceCxoneContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "handoff"
    );
    expect(handoff?.description).toContain("generated public OpenAPI functions are available separately");
    expect(handoff?.description).not.toContain("contact, callback, or skill handoff requests");
    expect(handoff?.providerObjects).toEqual([
      { kind: "niceCxoneConfiguredRequest", label: "NICE CXone configured request" },
    ]);
    expect(niceCxoneContactCenterProviderManifest.limitations.join(" ")).toContain("Generated functions expose NICE CXone's public OpenAPI catalog");
    expect(niceCxoneContactCenterProviderManifest.limitations.join(" ")).toContain("Per-conversation handoff calls cannot override");
    expect(niceCxoneContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["transfer", "send"]));
  });

  it("exposes generated NICE CXone public OpenAPI operations as callable functions", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) =>
      new Response(JSON.stringify({
        ok: true,
        url,
        method: init.method,
      }), { status: 200 })
    );
    const client = createNiceCxoneContactCenterClient({
      apiBaseUrl: "https://api-na1.niceincontact.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.PatronCallbackApiDocsRequestACallback({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; provider spec exposes no body for this operation.
      body: { phoneNumber: "+15551234567", skillId: 42 },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.fullApi.PatronChatrequestsApiDocsPostContactsChatsIdSendText({
      pathParams: { chatSession: "chat-1" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema uses provider-specific send-text fields.
      body: { text: "Hello" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.fullApi.SessionsApiDocsStartSession({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; provider spec exposes no body for this operation.
      body: { stationId: "station-1" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.fullApi.AgentphoneApiDocsDialAgentPhone({
      pathParams: { sessionId: "session-1" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema exposes no JSON body here.
      body: { phoneNumber: "+15551234567" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.fullApi.DigitalMessageApiDocsSendOutboundMessage({
      pathParams: { channelId: "channel-1" },
      body: { message: { text: "Digital reply" } },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.fullApi.ReportingReportingApiDocsGetContacts({
      query: { startDate: "2026-06-18", fields: "contactId,skillId" },
    })).resolves.toMatchObject({ method: "GET" });
    await expect(client.fullApi.RealtimedataRealtimeApiDocsGetAgentStates()).resolves.toMatchObject({ method: "GET" });
    await expect(client.fullApi.MediaplaybackMediaplaybackApiDocsGetACDContactRecordingData({
      query: { "acd-call-id": "contact-1" },
    })).resolves.toMatchObject({ method: "GET" });
    await expect(client.fullApi.RecordingRecordingondemandApiDocsStopRecord({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; provider spec exposes no body for this operation.
      body: { agentUserId: "agent-1", contactId: "contact-1" },
    })).resolves.toMatchObject({ method: "POST" });
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.PatronChatrequestsApiDocsPostContactsChatsIdSendText())
      .rejects.toThrow("Missing NICE CXone path parameter 'chatSession'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api-na1.niceincontact.com/contacts/chats/chat-1/send-text",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      "https://api-na1.niceincontact.com/contacts?startDate=2026-06-18&fields=contactId%2CskillId",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("creates NICE CXone handoff requests through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ contactId: "contact-1" }), { status: 201 }));
    const client = createNiceCxoneContactCenterClient({
      apiBaseUrl: "https://api-na1.niceincontact.com",
      accessToken: "configured",
      defaultHandoffPath: "/custom/cognidesk/cxone-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { skillId: 42, phoneNumber: "+15551234567" },
    })).resolves.toMatchObject({ contactId: "contact-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api-na1.niceincontact.com/custom/cognidesk/cxone-handoff",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("does not allow per-call NICE CXone paths to become hidden Patron or Digital Engagement actions", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ contactId: "contact-1" }), { status: 201 }));
    const client = createNiceCxoneContactCenterClient({
      apiBaseUrl: "https://api-na1.niceincontact.com",
      accessToken: "configured",
      defaultHandoffPath: "/custom/cognidesk/cxone-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { skillId: 42 },
      path: "/inContactAPI/services/v32.0/contacts",
    } as never)).resolves.toMatchObject({ contactId: "contact-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api-na1.niceincontact.com/custom/cognidesk/cxone-handoff",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("does not assume NICE CXone handoff or readiness paths", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createNiceCxoneContactCenterClient({
      apiBaseUrl: "https://api-na1.niceincontact.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: {} }))
      .rejects.toThrow("NICE CXone handoff path must be configured by the SDK app");
    await expect(client.readiness())
      .rejects.toThrow("NICE CXone readiness path must be configured by the SDK app");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: niceCxoneContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [niceCxoneContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: niceCxoneContactCenterCredentialStatuses({
        apiBaseUrl: "https://api-na1.niceincontact.com",
        apiAccessConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(niceCxoneContactCenterCredentialStatuses({
      apiBaseUrl: "https://api-na1.niceincontact.com",
      apiAccessConfigured: true,
      routingConfigured: true,
    })[1]?.scopes).toBeUndefined();
  });
});
