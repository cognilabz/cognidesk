import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT,
  ZOOM_CONTACT_CENTER_FULL_API_PATH_COUNT,
  ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_COUNT,
  createZoomContactCenterClient,
  zoomContactCenterCredentialStatuses,
  zoomContactCenterProviderManifest,
} from "../../../src/contact-center/zoom/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(zoomContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.zoom",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "zoom",
      trustLevel: "official",
    });
    expect(zoomContactCenterProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(zoomContactCenterProviderManifest.coverage.notes.join(" ")).toContain("every operation in Zoom's official Contact Center REST OpenAPI spec");
    expect(zoomContactCenterProviderManifest.coverage.notes.join(" ")).toContain("124");
    expect(zoomContactCenterProviderManifest.coverage.notes.join(" ")).toContain("generated fullApi functions");
    expect(zoomContactCenterProviderManifest.directions).toEqual(["inbound-only"]);
    expect(zoomContactCenterProviderManifest.credentialRequirements[1]?.scopes)
      .toEqual(["contact_center_queue:read:admin"]);
    expect(zoomContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        fullRestApiOperations: "generated-per-operation-functions",
        webhookEventCatalog: "generated-per-operation-functions",
        configuredHttpHandoff: "supported",
        scheduledCallback: "generated-per-operation-functions",
        engagementTransfer: "generated-per-operation-functions",
        outboundCampaigns: "generated-per-operation-functions",
        taskCoverage: "generated-per-operation-functions",
        nativeVoice: "generated-per-operation-functions",
        nativeVideo: "generated-per-operation-functions",
        nativeMessaging: "generated-per-operation-functions",
        nativeChat: "generated-per-operation-functions",
        nativeSms: "generated-per-operation-functions",
        nativeInAppChat: "generated-per-operation-functions",
        nativeEmail: "generated-per-operation-functions",
        nativeWorkItem: "generated-per-operation-functions",
        webhooksEvents: "generated-per-operation-functions",
      },
      fullProviderApiVerification: {
        provider: "zoom-contact-center-rest",
        apiVersion: "2",
        documentedPathCount: 176,
        documentedOperationCount: 312,
        implementedOperationCount: 312,
        unimplementedOperationCount: 0,
        generatedFunctionCount: 312,
        webhookEventCount: 124,
      },
    });
    expect(ZOOM_CONTACT_CENTER_FULL_API_PATH_COUNT).toBe(176);
    expect(ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT).toBe(312);
    expect(ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT).toBe(312);
    expect(ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_COUNT).toBe(124);
    expect(zoomContactCenterProviderManifest.coverage.evidence.map((item) => item.url))
      .toContain("https://developers.zoom.us/docs/api/contact-center/events/");
    expect(zoomContactCenterProviderManifest.coverage.evidence.map((item) => item.url))
      .toContain("https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json");
    expect(zoomContactCenterProviderManifest.coverage.evidence.map((item) => item.url))
      .toContain("https://developers.zoom.us/api-hub/contact-center/events/webhooks.json");
    expect(zoomContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["transfer", "send"]));
    const handoff = zoomContactCenterProviderManifest.capabilities.find((capability) => capability.capability === "handoff");
    expect(handoff?.description).toContain("without implying typed engagement transfer");
    expect(handoff?.description).not.toContain("outbound campaign handoff");
    expect(handoff?.providerObjects?.map((object) => object.kind)).toEqual(["zoomContactCenterHandoff"]);
    expect(zoomContactCenterProviderManifest.limitations.join(" ")).toContain("Generated functions expose");
    expect(zoomContactCenterProviderManifest.limitations.join(" ")).toContain("webhook catalog names documented event entries");
  });

  it("creates Zoom Contact Center handoff requests through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "handoff-1" }), { status: 201 }));
    const client = createZoomContactCenterClient({
      accessToken: "configured",
      defaultHandoffPath: "/v2/custom-cognidesk-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { queue_id: "queue-1", channel: "voice" },
    })).resolves.toMatchObject({ id: "handoff-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.zoom.us/v2/custom-cognidesk-handoff",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("does not call an undocumented Zoom task handoff path without SDK configuration", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createZoomContactCenterClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { queue_id: "queue-1" } }))
      .rejects.toThrow("handoff path must be configured");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("exposes generated functions for all Zoom Contact Center REST operations and webhook events", async () => {
    const fetchMock = vi.fn(async (url: string) =>
      new Response(JSON.stringify({ ok: true, url }), { status: 200 })
    );
    const client = createZoomContactCenterClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.Scheduleacallbackonaqueue({
      pathParams: { queueId: "queue-1" },
      json: { consumer_number: "+15550100" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.GetAvailableTransferQueues({
      pathParams: { engagementId: "eng-1" },
      query: { page_size: 25 },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.CreateOutboundCampaign({
      json: { name: "Renewals" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.requestOperation("POST /contact_center/sms", {
      json: { to: "+15550100", message: "Hello" },
    })).resolves.toMatchObject({ ok: true });

    expect(fetchMock.mock.calls.map((call) => call[0])).toEqual([
      "https://api.zoom.us/v2/contact_center/queues/queue-1/scheduled_callbacks/events",
      "https://api.zoom.us/v2/contact_center/engagements/eng-1/transfer/queues?page_size=25",
      "https://api.zoom.us/v2/contact_center/outbound_campaign/campaigns",
      "https://api.zoom.us/v2/contact_center/sms",
    ]);
    expect((fetchMock.mock.calls[0] as unknown[])[1]).toMatchObject({
      method: "POST",
      headers: expect.objectContaining({
        authorization: "Bearer configured",
        "content-type": "application/json",
      }),
      body: JSON.stringify({ consumer_number: "+15550100" }),
    });
    expect(client.getWebhookEvent("contact_center.engagement_transfer_accepted")).toMatchObject({
      event: "contact_center.engagement_transfer_accepted",
    });
    expect(client.getWebhookEvent("contact_center.recording_completed")).toMatchObject({
      event: "contact_center.recording_completed",
    });
  });

  it("fails closed for unknown generated operations, missing path params, and multiple bodies", async () => {
    const client = createZoomContactCenterClient({
      accessToken: "configured",
      fetch: vi.fn(async () => new Response("{}", { status: 200 })) as unknown as typeof fetch,
    });

    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.GetAQueue()).rejects.toThrow("Missing Zoom Contact Center path parameter");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    expect(() => client.requestOperation("not-real-operation")).toThrow("Unknown Zoom Contact Center REST operation");
    await expect(client.fullApi.ListQueues({
      json: { a: 1 },
      // @ts-expect-error Invalid mixed body options intentionally exercises runtime validation.
      body: "bad",
    })).rejects.toThrow("Only one of json, form, or body");
  });

  it("supports apiBaseUrl values with and without /v2 for generated operations", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createZoomContactCenterClient({
      apiBaseUrl: "https://example.zoom.test/v2",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.ListQueues();

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.zoom.test/v2/contact_center/queues",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("passes provider conformance", async () => {
    const credentialStatuses = zoomContactCenterCredentialStatuses({
      apiBaseUrl: "https://api.zoom.us",
      apiAccessConfigured: true,
      routingConfigured: true,
    });
    expect(credentialStatuses[1]?.scopes).toEqual(["contact_center_queue:read:admin"]);

    const result = await runProviderConformance({
      manifest: zoomContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [zoomContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses,
    });

    expect(result.status).toBe("passed");
  });
});
