import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createTalkdeskContactCenterClient,
  TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT,
  TALKDESK_FULL_API_GENERATED_FUNCTION_NAMES,
  TALKDESK_FULL_API_OPERATION_COUNT,
  TALKDESK_FULL_API_PATH_COUNT,
  talkdeskContactCenterCredentialStatuses,
  talkdeskContactCenterProviderManifest,
} from "../../../src/contact-center/talkdesk/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(talkdeskContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.talkdesk",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "talkdesk",
      trustLevel: "official",
    });
    expect(talkdeskContactCenterProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(talkdeskContactCenterProviderManifest.coverage.notes.join(" ")).toContain("every operation");
    expect(talkdeskContactCenterProviderManifest.coverage.notes.join(" ")).toContain("Digital Connect conversations/messages");
    expect(talkdeskContactCenterProviderManifest.coverage.notes.join(" ")).toContain("FSI surfaces");
    expect(talkdeskContactCenterProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      documentedPathCount: 416,
      documentedOperationCount: 515,
      implementedOperationCount: 515,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 515,
    });
    expect(TALKDESK_FULL_API_PATH_COUNT).toBe(416);
    expect(TALKDESK_FULL_API_OPERATION_COUNT).toBe(515);
    expect(TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT).toBe(515);
    expect(TALKDESK_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "CallsCallbackPost",
      "CreatingACase",
      "CreateDigitalConnectConversations",
      "ExternalCredentialsOptionsCertificates",
      "ListContacts",
      "RecordingsIdMediaGet",
      "GetAllQueues",
      "CreateReportJob",
    ]));
    expect(talkdeskContactCenterProviderManifest.credentialRequirements[1]?.scopes)
      .toEqual(["callback:write", "cases-public:write"]);
    expect(talkdeskContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        configuredHttpHandoff: "supported",
        directCallback: "typed-create",
        caseCreation: "typed-helper",
        digitalConnectConversations: "generated-full-surface",
        digitalConnectMessages: "generated-full-surface",
        transfer: "generated-full-surface-where-present-in-public-openapi",
        smsSocialDigital: "generated-full-surface-where-present-in-public-openapi",
      },
    });
    expect(talkdeskContactCenterProviderManifest.coverage.evidence.map((item) => item.url))
      .toEqual(expect.arrayContaining([
        "https://api-docs.talkdeskapp.com/public-api",
        "https://docs.talkdesk.com/reference/callscallback",
        "https://docs.talkdesk.com/reference/create-a-new-case",
        "https://docs.talkdesk.com/docs/digital-connect-api",
      ]));
    expect(talkdeskContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "handoff"
    )?.description).toContain("without implying Digital Connect conversation or transfer support");
    expect(talkdeskContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("transfer");
    expect(talkdeskContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["handoff", "send", "create-provider-object"]));
    expect(talkdeskContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "create-provider-object"
    )?.providerObjects?.map((object) => object.kind)).toEqual(["talkdeskCase"]);
    expect(talkdeskContactCenterProviderManifest.limitations.join(" ")).toContain("Generated functions expose Talkdesk Digital Connect");
  });

  it("exposes generated functions for the full Talkdesk public OpenAPI surface", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/calls/callback") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "callback-1" }), { status: 201 });
      }
      if (url.endsWith("/cm/core/va/cases") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "case-1" }), { status: 201 });
      }
      if (url.endsWith("/digital-connect/conversations") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "conversation-1" }), { status: 201 });
      }
      if (url.endsWith("/contacts?page=1") && init.method === "GET") {
        return new Response(JSON.stringify({ _embedded: { contacts: [] } }), { status: 200 });
      }
      if (url.endsWith("/recordings/recording-1/media") && init.method === "GET") {
        return new Response(JSON.stringify({ url: "https://media.example.test/recording.wav" }), { status: 200 });
      }
      if (url.endsWith("/ccaas/queues") && init.method === "GET") {
        return new Response(JSON.stringify({ queues: [{ id: "queue-1" }] }), { status: 200 });
      }
      if (url.endsWith("/reports/calls/jobs") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "job-1" }), { status: 202 });
      }
      return new Response(JSON.stringify({ message: `unexpected ${init.method} ${url}` }), { status: 500 });
    });
    const client = createTalkdeskContactCenterClient({
      apiBaseUrl: "https://api.talkdeskapp.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.CallsCallbackPost({
      body: { talkdesk_phone_number: "+15557654321", contact_phone_number: "+15551234567" },
    })).resolves.toMatchObject({ id: "callback-1" });
    await expect(client.fullApi.CreatingACase({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires Talkdesk case fields.
      body: { contact_id: "contact-1", subject: "Flight disruption" },
    })).resolves.toMatchObject({ id: "case-1" });
    await expect(client.fullApi.CreateDigitalConnectConversations({
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires touchpoint/contact person fields.
      body: { channel: "chat", contact_id: "contact-1" },
    })).resolves.toMatchObject({ id: "conversation-1" });
    await expect(client.fullApi.ListContacts({
      query: { page: 1 },
    })).resolves.toMatchObject({ _embedded: { contacts: [] } });
    await expect(client.fullApi.RecordingsIdMediaGet({
      pathParams: { id: "recording-1" },
    })).resolves.toMatchObject({ url: "https://media.example.test/recording.wav" });
    await expect(client.fullApi.GetAllQueues()).resolves.toMatchObject({ queues: [{ id: "queue-1" }] });
    await expect(client.requestOperation("createReportJob", {
      pathParams: { type: "calls" },
      body: { name: "daily calls" },
    })).resolves.toMatchObject({ id: "job-1" });
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.RecordingsIdMediaGet()).rejects.toThrow("Missing Talkdesk path parameter 'id'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.talkdeskapp.com/calls/callback",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
      }),
    );
    const callbackBody = ((fetchMock.mock.calls[0] as unknown[])[1] as { body: string }).body;
    expect(JSON.parse(callbackBody)).toMatchObject({
      talkdesk_phone_number: "+15557654321",
      contact_phone_number: "+15551234567",
    });
  });

  it("does not assume an undocumented default Talkdesk handoff path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createTalkdeskContactCenterClient({
      apiBaseUrl: "https://api.talkdeskapp.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { contact_id: "contact-1", subject: "Flight disruption" },
    })).rejects.toThrow("Talkdesk handoff path must be configured");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("does not assume an undocumented default Talkdesk readiness path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createTalkdeskContactCenterClient({
      apiBaseUrl: "https://api.talkdeskapp.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness()).rejects.toThrow("Talkdesk readiness path must be configured by the SDK app");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates Talkdesk direct callbacks through the documented callback endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "callback-1" }), { status: 201 }));
    const client = createTalkdeskContactCenterClient({
      apiBaseUrl: "https://api.talkdeskapp.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createDirectCallback({
      talkdesk_phone_number: "+15557654321",
      contact_phone_number: "+15551234567",
    })).resolves.toMatchObject({ id: "callback-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.talkdeskapp.com/calls/callback",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
        body: JSON.stringify({
          talkdesk_phone_number: "+15557654321",
          contact_phone_number: "+15551234567",
        }),
      }),
    );
  });

  it("rejects undocumented Talkdesk direct callback payloads before calling the API", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "callback-1" }), { status: 201 }));
    const client = createTalkdeskContactCenterClient({
      apiBaseUrl: "https://api.talkdeskapp.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createDirectCallback({
      phone_number: "+15551234567",
      contact_name: "Ada",
    } as never)).rejects.toThrow("talkdesk_phone_number and contact_phone_number");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates Talkdesk cases through the documented case endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "case-1" }), { status: 201 }));
    const client = createTalkdeskContactCenterClient({
      apiBaseUrl: "https://api.talkdeskapp.com",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCase({
      contact_id: "contact-1",
      subject: "Flight disruption",
    })).resolves.toMatchObject({ id: "case-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.talkdeskapp.com/cm/core/va/cases",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: talkdeskContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [talkdeskContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff", "send", "create-provider-object"],
      }],
      credentialStatuses: talkdeskContactCenterCredentialStatuses({
        apiBaseUrl: "https://api.talkdeskapp.com",
        apiAccessConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(talkdeskContactCenterCredentialStatuses({
      apiBaseUrl: "https://api.talkdeskapp.com",
      apiAccessConfigured: true,
      routingConfigured: true,
    })[1]?.scopes).toEqual(["callback:write", "cases-public:write"]);
  });
});
