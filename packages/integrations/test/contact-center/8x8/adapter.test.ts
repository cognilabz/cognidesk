import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createEightByEightContactCenterClient,
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_GENERATED_FUNCTION_COUNT,
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_COUNT,
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_PATH_COUNT,
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_SPECS,
  eightByEightContactCenterCredentialStatuses,
  eightByEightContactCenterProviderManifest,
} from "../../../src/contact-center/8x8/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(eightByEightContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.8x8",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "8x8",
      trustLevel: "official",
    });
    expect(eightByEightContactCenterProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(eightByEightContactCenterProviderManifest.coverage.notes.join(" ")).toContain("generated per-operation functions");
    expect(eightByEightContactCenterProviderManifest.coverage.notes.join(" ")).toContain("11 official machine-readable 8x8 OpenAPI specs");
    expect(eightByEightContactCenterProviderManifest.coverage.notes.join(" ")).toContain("135 operations across 106 documented paths");
    expect(eightByEightContactCenterProviderManifest.coverage.notes.join(" ")).toContain("does not claim CRM");
    expect(EIGHT_BY_EIGHT_CONTACT_CENTER_API_SPECS).toHaveLength(11);
    expect(EIGHT_BY_EIGHT_CONTACT_CENTER_API_PATH_COUNT).toBe(106);
    expect(EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_COUNT).toBe(135);
    expect(EIGHT_BY_EIGHT_CONTACT_CENTER_API_GENERATED_FUNCTION_COUNT).toBe(135);
    expect(eightByEightContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(eightByEightContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        generatedVerifiedOpenApiOperations: "generated-per-operation-functions",
        generatedCallAndAgentStatusApiOperations: "generated-per-operation-functions",
        chat: "generated-per-operation-functions",
        chatGateway: "generated-per-operation-functions",
        outboundPhoneInteraction: "generated-slice-and-typed-helper",
        callControl: "generated-slice-and-typed-helpers",
        agentStatus: "generated-slice-and-typed-helpers",
        campaigns: "generated-per-operation-functions",
        realtimeMetrics: "generated-per-operation-functions",
        historicalMetrics: "generated-per-operation-functions",
        qualityManagementSpeechAnalytics: "generated-per-operation-functions",
        transfer: "provider-supported-not-typed",
        crm: "not-covered",
        recordings: "not-covered",
        eventStreaming: "not-covered",
      },
      generatedProviderApiSlices: {
        verifiedOfficialOpenApi: {
          documentedSpecCount: 11,
          documentedPathCount: 106,
          documentedOperationCount: 135,
          implementedOperationCount: 135,
          generatedFunctionCount: 135,
        },
      },
    });
    expect(eightByEightContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["send", "contact-center.call-control", "update-provider-object"]));
    expect(eightByEightContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("transfer");
    const handoff = eightByEightContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "handoff"
    );
    expect(handoff?.description).toContain("without implying typed case, queue, chat, or transfer coverage");
    expect(handoff?.description).not.toContain("case, or queue requests");
    expect(handoff?.providerObjects).toEqual([
      { kind: "eightByEightConfiguredHandoff", label: "8x8 configured handoff request" },
    ]);
    expect(eightByEightContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/8x8_contact_center_chat_api_v2.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/8x8_contact_center_dynamic_campaigns.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/8x8_contact_center_new_campaigns.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/chapi_-_chat_api.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact-center-chat-gateway-v1.oas.yml",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/analytics/8x8_analytics_for_contact_center_historical_metrics_api.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/analytics/8x8_analytics_for_contact_center_real-time_metrics_api.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/analytics/quality_management_and_speech_analytics_api.json",
        "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/contactcenter/8x8_contact_center_chat_api.json",
        "https://developer.8x8.com/actions-events/reference/place-phone-call/",
        "https://developer.8x8.com/actions-events/reference/add-transaction-codes/",
        "https://developer.8x8.com/actions-events/reference/delete-phone-interaction/",
        "https://developer.8x8.com/actions-events/reference/hangup-agent-handling-interaction/",
        "https://developer.8x8.com/actions-events/reference/hangup-agent-line/",
        "https://developer.8x8.com/actions-events/reference/hangup-agent-lines/",
        "https://developer.8x8.com/actions-events/reference/setagentstatus/",
        "https://developer.8x8.com/actions-events/reference/contact-center-chat-gateway/",
        "https://developer.8x8.com/actions-events/reference/contact-center-campaigns-api/",
        "https://developer.8x8.com/analytics/reference/quality-management-and-speech-analytics-api/",
        "https://developer.8x8.com/contactcenter/docs/contact-center-chat/",
        "https://developer.8x8.com/actions-events/docs/chat-gateway/",
      ]));
    expect(eightByEightContactCenterProviderManifest.credentialRequirements[1]?.scopes).toEqual([]);
  });

  it("creates 8x8 handoff requests through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "handoff-1" }), { status: 201 }));
    const client = createEightByEightContactCenterClient({
      apiBaseUrl: "https://api.8x8.example.test",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      path: "/contact-center/handoffs",
      payload: { queueId: "queue-1", customer: { phone: "+15551234567" } },
    })).resolves.toMatchObject({ id: "handoff-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/contact-center/handoffs",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("does not call undocumented 8x8 default handoff or readiness paths", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createEightByEightContactCenterClient({
      apiBaseUrl: "https://api.8x8.example.test",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { queueId: "queue-1" } }))
      .rejects.toThrow("handoff path must be configured");
    await expect(client.readiness())
      .rejects.toThrow("readiness path must be configured");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses documented 8x8 Call API and Agent Status paths with explicit auth headers", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createEightByEightContactCenterClient({
      apiBaseUrl: "https://api.8x8.example.test",
      authorizationHeader: "Basic configured-action-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.placePhoneCall({
      tenantId: "tenant-1",
      payload: { agentId: "agent-1", phoneNumber: "+15551234567" },
      idempotencyKey: "call-1",
    });
    await client.setTransactionCodes({
      tenantId: "tenant-1",
      interactionId: "interaction-1",
      agentId: "agent-1",
      payload: { transactionCodes: ["sales"] },
    });
    await client.endCall({ tenantId: "tenant-1", interactionId: "interaction-1" });
    await client.hangupAgentCall({ tenantId: "tenant-1", interactionId: "interaction-1", agentId: "agent-1" });
    await client.releaseAgentLine({ tenantId: "tenant-1", agentId: "agent-1", lineNo: 2 });
    await client.releaseAgentLines({ tenantId: "tenant-1", agentId: "agent-1" });
    await client.listAgentStatuses({ tenantId: "tenant-1", query: { groupId: "group-1" } });
    await client.getAgentStatus({ tenantId: "tenant-1", agentId: "agent-1" });
    await client.setAgentStatusesBulk({
      tenantId: "tenant-1",
      payload: { agents: [{ agentId: "agent-1", statusCode: 4 }] },
    });
    await client.setAgentStatus({
      tenantId: "tenant-1",
      agentId: "agent-1",
      payload: { statusCode: 4 },
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/calls",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ agentId: "agent-1", phoneNumber: "+15551234567" }),
        headers: expect.objectContaining({
          authorization: "Basic configured-action-token",
          "content-type": "application/json",
          "idempotency-key": "call-1",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/calls/interaction-1/agent/agent-1/transaction-codes",
      expect.objectContaining({ method: "PUT" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/calls/interaction-1",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/calls/interaction-1/agent/agent-1",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agents/agent-1/calls/line/2",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agents/agent-1/calls",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agentstatus/agents?groupId=group-1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agentstatus/agents/agent-1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agentstatus/agents/bulk",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ agents: [{ agentId: "agent-1", statusCode: 4 }] }),
      }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agentstatus/agents/agent-1",
      expect.objectContaining({
        method: "PUT",
        body: JSON.stringify({ statusCode: 4 }),
      }),
    );
  });

  it("exposes generated 8x8 operation functions and fails closed for unknown operations", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createEightByEightContactCenterClient({
      apiBaseUrl: "https://api.8x8.example.test",
      authorizationHeader: "Basic configured-action-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.Getagentsstatus({
      pathParams: { tenantId: "tenant-1" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.Getwebhooks1()).resolves.toMatchObject({ ok: true });
    await expect(client.requestOperation("agent-status:POST /tenants/{tenantId}/agentstatus/agents/bulk", {
      pathParams: { tenantId: "tenant-1" },
      body: { agents: [{ "agent-id": "agent-1", "agent-status": 4 }] },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.requestOperation("chat-gateway:GET /chat-gateway/v1/webhooks")).resolves.toMatchObject({ ok: true });
    await expect(client.requestOperation("agent-status:GET /tenants/{tenantId}/agentstatus/agents", {
      pathParams: { tenantId: "tenant-1" },
    })).resolves.toMatchObject({ ok: true });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agentstatus/agents",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/chat-gateway/v1/webhooks",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.8x8.example.test/tenants/tenant-1/agentstatus/agents/bulk",
      expect.objectContaining({ method: "POST" }),
    );
    await expect(client.fullApi.Getagentstatus({
      // @ts-expect-error Missing agentId intentionally exercises runtime validation.
      pathParams: { tenantId: "tenant-1" },
    })).rejects.toThrow("Missing 8x8 Contact Center path parameter 'agentId'");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    expect(() => client.requestOperation("not-real-operation")).toThrow("Unknown 8x8 Contact Center operation");
  });

  it("requires a line number before releasing a single 8x8 agent line", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createEightByEightContactCenterClient({
      apiBaseUrl: "https://api.8x8.example.test",
      authorizationHeader: "Basic configured-action-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.releaseAgentLine({ tenantId: "tenant-1", agentId: "agent-1" }))
      .rejects.toThrow("lineNo is required");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: eightByEightContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [eightByEightContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: eightByEightContactCenterCredentialStatuses({
        apiBaseUrl: "https://api.8x8.example.test",
        apiAccessConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(result.manifest.credentialRequirements[1]?.scopes).toEqual([]);
  });
});
