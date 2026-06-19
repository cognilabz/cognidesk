import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createRingCentralContactCenterClient,
  RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT,
  RINGCENTRAL_DIGITAL_API_OPERATION_COUNT,
  RINGCENTRAL_DIGITAL_API_PATH_COUNT,
  RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_COUNT,
  RINGCENTRAL_VOICE_API_OPERATION_COUNT,
  RINGCENTRAL_VOICE_API_PATH_COUNT,
  ringCentralContactCenterCredentialStatuses,
  ringCentralContactCenterProviderManifest,
} from "../../../src/contact-center/ringcentral/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(ringCentralContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.ringcentral",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "ringcentral",
      trustLevel: "official",
    });
    expect(ringCentralContactCenterProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(ringCentralContactCenterProviderManifest.coverage.notes.join(" ")).toContain("generated per-operation functions");
    expect(ringCentralContactCenterProviderManifest.coverage.notes.join(" ")).toContain("current official RingCentral RingCX Voice OpenAPI spec");
    expect(ringCentralContactCenterProviderManifest.coverage.notes.join(" ")).toContain("official RingCentral Engage Digital OpenAPI spec");
    expect(ringCentralContactCenterProviderManifest.credentialRequirements[1]?.scopes).toEqual([]);
    expect(ringCentralContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://raw.githubusercontent.com/ringcentral/engage-voice-api-docs/main/specs/engage-voice_openapi3.json",
        "https://raw.githubusercontent.com/ringcentral/engage-digital-api-docs/master/specs/engage-digital_openapi3.yaml",
        "https://developers.ringcentral.com/engage/digital/guide/interactions/web-messaging/source",
        "https://developers.ringcentral.com/engage/digital/guide/sdks/source-sdk/quick-start",
      ]));
    expect(RINGCENTRAL_VOICE_API_PATH_COUNT).toBe(87);
    expect(RINGCENTRAL_VOICE_API_OPERATION_COUNT).toBe(138);
    expect(RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_COUNT).toBe(138);
    expect(RINGCENTRAL_DIGITAL_API_PATH_COUNT).toBe(90);
    expect(RINGCENTRAL_DIGITAL_API_OPERATION_COUNT).toBe(149);
    expect(RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT).toBe(149);
    expect(ringCentralContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(ringCentralContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        configuredHttpHandoff: "supported",
        currentVoiceRestApiOperations: "generated-per-operation-functions",
        currentVoiceLeadCampaignActiveCall: "generated-current-openapi-surface",
        digitalRestApiOperations: "generated-per-operation-functions",
        digitalTasksThreadsInterventions: "generated-digital-openapi-surface",
        digitalWebhooksEvents: "generated-digital-openapi-surface",
        liveWebChat: "provider-supported-customer-site-not-typed",
        mobileMessaging: "provider-supported-customer-site-not-typed",
        channelSdkMessaging: "provider-supported-sdk-runtime-not-typed",
        legacyVoiceRestApiOperations: "provider-supported-not-typed",
      },
      authModes: {
        currentRingCx: "authorization-bearer",
        legacyEngageVoice: "x-auth-token",
        explicitAuthorizationHeader: "supported",
      },
      generatedProviderApiSlices: {
        ringCxVoiceCurrent: {
          documentedPathCount: 87,
          documentedOperationCount: 138,
          implementedOperationCount: 138,
          generatedFunctionCount: 138,
        },
        engageDigital: {
          documentedPathCount: 90,
          documentedOperationCount: 149,
          implementedOperationCount: 149,
          generatedFunctionCount: 149,
        },
      },
    });
    const handoff = ringCentralContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "handoff"
    );
    expect(handoff?.description).toContain("generated voiceApi and digitalApi functions");
    expect(handoff?.description).not.toContain("lead, task, case, or queue handoff requests");
    expect(ringCentralContactCenterProviderManifest.limitations.join(" ")).toContain("current RingCX Voice and Engage Digital REST specs");
    expect(ringCentralContactCenterProviderManifest.limitations.join(" ")).toContain("Legacy RingCX Voice OpenAPI specs");
    expect(ringCentralContactCenterProviderManifest.limitations.join(" ")).toContain("Per-conversation handoff calls cannot override");
    expect(ringCentralContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["transfer", "send"]));
  });

  it("exposes generated current RingCX Voice and Engage Digital operation functions", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) =>
      new Response(JSON.stringify({ ok: true, url, method: init.method }), { status: 200 })
    );
    const client = createRingCentralContactCenterClient({
      apiBaseUrl: "https://engage.ringcentral.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.voiceApi.GetProductActiveCallsListRequest({
      pathParams: { accountId: "acct-1" },
      query: { page: 2 },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.voiceApi.HangupCall({
      pathParams: { accountId: "acct-1", uii: "call-1" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.digitalApi.GetAllTasks({
      query: { limit: 25 },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.requestDigitalOperation("POST /tasks/{taskId}/transfer", {
      pathParams: { taskId: "task-1" },
    })).resolves.toMatchObject({ ok: true });

    expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
      "https://engage.ringcentral.com/voice/api/v1/admin/accounts/acct-1/activeCalls/list?page=2",
      "https://engage.ringcentral.com/voice/api/v1/admin/accounts/acct-1/activeCalls/call-1/hangupCall",
      "https://engage.ringcentral.com/tasks?limit=25",
      "https://engage.ringcentral.com/tasks/task-1/transfer",
    ]);
    expect((fetchMock.mock.calls[1] as unknown[])[1]).toMatchObject({
      method: "POST",
      headers: expect.objectContaining({
        authorization: "Bearer configured",
      }),
    });
    expect((fetchMock.mock.calls[1] as unknown[])[1]).not.toHaveProperty("body");
    await expect(client.voiceApi.HangupCall({
      // @ts-expect-error Missing uii intentionally exercises runtime validation.
      pathParams: { accountId: "acct-1" },
    })).rejects.toThrow("Missing RingCentral path parameter 'uii'");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    expect(() => client.requestVoiceOperation("not-real-operation")).toThrow("Unknown RingCentral RingCX Voice operation");
  });

  it("fails closed for legacy RingCX hosts unless legacy auth is configured", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "unexpected" }), { status: 201 }));
    const client = createRingCentralContactCenterClient({
      apiBaseUrl: "https://portal.vacd.biz/api/",
      accessToken: "bearer-would-be-wrong",
      defaultHandoffPath: "/admin/accounts/leads",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { phone: "+15551234567" } }))
      .rejects.toThrow("Legacy RingCX hosts require legacyAuthToken or authorizationHeader");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses X-Auth-Token for legacy RingCX hosts when configured", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ leadId: "lead-2" }), { status: 201 }));
    const client = createRingCentralContactCenterClient({
      apiBaseUrl: "https://portal.virtualacd.biz/api/",
      legacyAuthToken: "legacy-token",
      defaultHandoffPath: "/admin/accounts/leads",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { phone: "+15551234567" } }))
      .resolves.toMatchObject({ leadId: "lead-2" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://portal.virtualacd.biz/api/admin/accounts/leads",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ "x-auth-token": "legacy-token" }),
      }),
    );
  });

  it("creates RingCX handoff requests through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ leadId: "lead-1" }), { status: 201 }));
    const client = createRingCentralContactCenterClient({
      apiBaseUrl: "https://ringcx.example.test",
      accessToken: "configured",
      defaultHandoffPath: "/custom/cognidesk/ringcx-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { phone: "+15551234567", campaignId: "campaign-1" },
    })).resolves.toMatchObject({ leadId: "lead-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://ringcx.example.test/custom/cognidesk/ringcx-handoff",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("does not allow per-call RingCX paths to become hidden lead or active-call actions", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ leadId: "lead-1" }), { status: 201 }));
    const client = createRingCentralContactCenterClient({
      apiBaseUrl: "https://ringcx.example.test",
      accessToken: "configured",
      defaultHandoffPath: "/custom/cognidesk/ringcx-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { phone: "+15551234567" },
      path: "/api/v1/admin/accounts/leads",
    } as never)).resolves.toMatchObject({ leadId: "lead-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://ringcx.example.test/custom/cognidesk/ringcx-handoff",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("does not assume RingCX handoff or readiness paths", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createRingCentralContactCenterClient({
      apiBaseUrl: "https://ringcx.example.test",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: {} }))
      .rejects.toThrow("RingCX handoff path must be configured by the SDK app");
    await expect(client.readiness())
      .rejects.toThrow("RingCX readiness path must be configured by the SDK app");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: ringCentralContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [ringCentralContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: ringCentralContactCenterCredentialStatuses({
        apiBaseUrl: "https://ringcx.example.test",
        apiAccessConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(ringCentralContactCenterCredentialStatuses({
      apiBaseUrl: "https://ringcx.example.test",
      apiAccessConfigured: true,
      routingConfigured: true,
    })[1]?.scopes).toBeUndefined();
  });
});
