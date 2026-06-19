import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  type AircallConfiguredRequestResponse,
  type AircallPingResponse,
  aircallContactCenterCredentialStatuses,
  aircallContactCenterProviderManifest,
  createAircallContactCenterClient,
} from "../../../src/contact-center/aircall/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(aircallContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.aircall",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "aircall",
      trustLevel: "official",
    });
    expect(aircallContactCenterProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(aircallContactCenterProviderManifest.coverage.notes.join(" ")).toContain("documented Aircall `/v1/ping` readiness check");
    expect(aircallContactCenterProviderManifest.coverage.notes.join(" ")).toContain("No official public OpenAPI/Swagger specification was found");
    expect(aircallContactCenterProviderManifest.coverage.notes.join(" ")).toContain("aircall-public-api-2026-06-18.checked-inventory.json");
    expect(aircallContactCenterProviderManifest.coverage.notes.join(" ")).toContain("does not implement the broader Aircall Public API");
    expect(aircallContactCenterProviderManifest.coverage.notes.join(" ")).toContain("OAuth token exchange");
    expect(aircallContactCenterProviderManifest.coverage.notes.join(" ")).toContain("AI Voice Agent outbound calls");
    expect(aircallContactCenterProviderManifest.capabilities[0]?.description).toContain("without claiming a native Aircall handoff endpoint");
    expect(aircallContactCenterProviderManifest.capabilities[0]?.providerObjects?.map((object) => object.kind) ?? [])
      .toEqual(["aircallConfiguredRequest"]);
    expect(aircallContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(aircallContactCenterProviderManifest.metadata).toMatchObject({
      checkedInventoryArtifact: "docs/provider-coverage/aircall-public-api-2026-06-18.checked-inventory.json",
      checkedProviderSupportedNotTypedFamilies: 25,
      officialPublicOpenApiSpec: "not-found",
      channelCoverage: {
        configuredHttpHandoff: "supported",
        publicOpenApiSpec: "not-covered",
        publicHtmlApiReference: "provider-supported-not-typed",
        oauthTokenExchange: "provider-supported-not-typed",
        nativeInboundVoice: "provider-supported-not-typed",
        outboundCall: "provider-supported-not-typed",
        aiVoiceAgentOutboundCall: "provider-supported-not-typed",
        callback: "provider-supported-not-typed",
        transfer: "provider-supported-not-typed",
        callRecordingControls: "provider-supported-not-typed",
        messaging: "provider-supported-not-typed",
        smsAgentConversation: "provider-supported-not-typed",
        groupMessaging: "provider-supported-not-typed",
        whatsappAgentConversation: "provider-supported-not-typed",
        messageWebhooks: "provider-supported-not-typed",
        contacts: "provider-supported-not-typed",
        usersV2: "provider-supported-not-typed",
        dialerCampaigns: "provider-supported-not-typed",
        analyticsExports: "provider-supported-not-typed",
        conversationIntelligence: "provider-supported-not-typed",
        recordings: "provider-supported-not-typed",
        webhooks: "provider-supported-not-typed",
      },
    });
    expect(aircallContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["transfer", "send", "update-provider-object"]));
    expect(aircallContactCenterProviderManifest.limitations.join(" ")).toContain("Per-conversation handoff calls cannot override");
  });

  it("creates Aircall handoff context through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ requestId: "handoff-123" }), { status: 201 }));
    const client = createAircallContactCenterClient({
      apiId: "id",
      apiToken: "token",
      defaultHandoffPath: "/v1/integrations/cognidesk/workflows/handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { summary: "Escalate to Aircall workflow", customerPhone: "+15551234567" },
    })).resolves.toMatchObject({ requestId: "handoff-123" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.aircall.io/v1/integrations/cognidesk/workflows/handoff",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("id:token").toString("base64")}`,
        }),
      }),
    );
  });

  it("does not assume Aircall handoff or readiness paths", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createAircallContactCenterClient({
      apiId: "id",
      apiToken: "token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: {} }))
      .rejects.toThrow("Aircall handoff path must be configured by the SDK app");
    await expect(client.readiness()).resolves.toEqual({});
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.aircall.io/v1/ping",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("exposes typed Aircall ping readiness and named configured-request escape hatches", () => {
    const client = createAircallContactCenterClient({
      apiId: "id",
      apiToken: "token",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    expectTypeOf(client.readiness).returns.resolves.toMatchTypeOf<AircallPingResponse | AircallConfiguredRequestResponse>();
    expectTypeOf(client.createHandoff).returns.resolves.toMatchTypeOf<AircallConfiguredRequestResponse>();
    expectTypeOf<AircallPingResponse["ping"]>().toEqualTypeOf<"pong">();
  });

  it("does not allow per-call Aircall handoff paths to become hidden transfer or message actions", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ requestId: "handoff-123" }), { status: 201 }));
    const client = createAircallContactCenterClient({
      apiId: "id",
      apiToken: "token",
      defaultHandoffPath: "/v1/integrations/cognidesk/workflows/handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { first_name: "Ada" },
      path: "/v1/calls/123/transfers",
    } as never)).resolves.toMatchObject({ requestId: "handoff-123" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.aircall.io/v1/integrations/cognidesk/workflows/handoff",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).not.toHaveBeenCalledWith(
      "https://api.aircall.io/v1/calls/123/transfers",
      expect.anything(),
    );
  });

  it("surfaces documented Aircall error and troubleshoot fields", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ error: "invalid_request", troubleshoot: "Check the Aircall request payload." }), { status: 422 }),
    );
    const client = createAircallContactCenterClient({
      apiId: "id",
      apiToken: "token",
      defaultHandoffPath: "/v1/integrations/cognidesk/workflows/handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { first_name: "Ada" } }))
      .rejects.toThrow("Check the Aircall request payload.");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.aircall.io/v1/integrations/cognidesk/workflows/handoff",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: aircallContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [aircallContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: aircallContactCenterCredentialStatuses({
        apiBaseUrl: "https://api.aircall.io",
        apiAccessConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });
});
