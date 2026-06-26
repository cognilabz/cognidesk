import { createHmac } from "node:crypto";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  type ZoomCreateMeetingInput,
  type ZoomListMeetingsInput,
  type ZoomMeetingRecurrence,
  type ZoomMeetingResource,
  type ZoomVideoProviderClient,
  createZoomVideoClient,
  createZoomVideoLiveChecks,
  createZoomWebhookValidationResponse,
  parseZoomWebhookRequest,
  validateZoomWebhookSignature,
  ZOOM_MEETINGS_API_GENERATED_FUNCTION_COUNT,
  ZOOM_MEETINGS_API_OPERATION_COUNT,
  ZOOM_MEETINGS_API_PATH_COUNT,
  ZOOM_RIVET_MEETINGS_REST_EXCEPTION_OPERATION_UIDS,
  ZOOM_RIVET_MEETINGS_SDK_OPERATION_COUNT,
  ZOOM_RIVET_SDK_PACKAGE_NAME,
  zoomVideoCredentialStatuses,
  zoomVideoProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-video-zoom", () => {
  it("exports an official provider manifest for Zoom video meetings", () => {
    expect(zoomVideoProviderManifest).toMatchObject({
      id: "video.zoom",
      packageName: "@cognidesk/integration-video-zoom",
      category: "video",
      provider: "zoom",
      trustLevel: "official",
    });
    expect(zoomVideoProviderManifest.capabilities.map((capability: { capability: string }) => capability.capability))
      .toEqual(expect.arrayContaining([
        "schedule",
        "create-provider-object",
        "read-provider-object",
        "delete-provider-object",
        "update-provider-object",
        "receive",
        "zoom.request-signature",
      ]));
    const providerClientRequirement = zoomVideoProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "zoom-video-provider-client");
    expect(providerClientRequirement).toMatchObject({
      label: "Optional Zoom video provider client override",
      required: false,
      metadata: {
        injectionInterface: "ZoomVideoProviderClient",
        defaultClientPolicy: "official-rivet-sdk-with-reviewed-rest-exceptions",
      },
    });
    const tokenRequirement = zoomVideoProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "zoom-oauth-access-token");
    expect(tokenRequirement?.scopes).toEqual(expect.arrayContaining([
      "meeting:write:meeting",
      "meeting:read:list_meetings",
      "meeting:read:meeting",
      "meeting:update:meeting",
      "meeting:delete:meeting",
      "user:read:user",
    ]));
    expect(tokenRequirement?.scopes).not.toEqual(expect.arrayContaining(["meeting:delete"]));
    expect(zoomVideoProviderManifest.limitations.join(" ")).toContain("inbound");
    expect(zoomVideoProviderManifest.privacyNotes.join(" ")).toContain("recording");
    expect(zoomVideoProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(zoomVideoProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in Zoom's official Meetings API Hub OpenAPI spec");
    expect(zoomVideoProviderManifest.metadata).toMatchObject({
      implementationStrategy: "official-sdk-with-reviewed-rest-exceptions",
      providerClient: {
        interface: "ZoomVideoProviderClient",
        defaultClient: "official-zoom-rivet-sdk",
      },
      sdkViability: {
        decision: "official-provider-sdk-selected",
        selectedSdkPackage: {
          packageName: "@zoom/rivet",
          checkedVersion: "0.4.0",
        },
      },
    });
    expect(zoomVideoProviderManifest.metadata?.implementation).toMatchObject({
      officialSdk: {
        packageName: ZOOM_RIVET_SDK_PACKAGE_NAME,
        checkedVersion: "0.4.0",
        mappedMeetingsOperationCount: ZOOM_RIVET_MEETINGS_SDK_OPERATION_COUNT,
      },
      restAdapterException: {
        operationUids: ZOOM_RIVET_MEETINGS_REST_EXCEPTION_OPERATION_UIDS,
      },
    });
    expect(zoomVideoProviderManifest.metadata?.providerRestAdapterException).toMatchObject({
      status: "accepted",
      adapterKind: "reviewed-rest-exception",
      operationUids: [
        "GET /report/disclaimer",
        "GET /report/remote_support",
      ],
      failClosed: true,
    });
    expect(zoomVideoProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.zoom.us/docs/rivet/javascript/",
        "https://github.com/zoom/rivet-javascript",
        "https://developers.zoom.us/api-hub/meetings/methods/endpoints.json",
        "https://developers.zoom.us/docs/api/meetings/",
        "https://developers.zoom.us/docs/api/rest/webhook-reference/",
      ]));
    expect(zoomVideoProviderManifest.metadata?.generatedProviderSliceVerification).toMatchObject({
      provider: "zoom-meetings-api-hub",
      documentedPathCount: 129,
      documentedOperationCount: 184,
      implementedOperationCount: 184,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 184,
    });
    expect(ZOOM_MEETINGS_API_PATH_COUNT).toBe(129);
    expect(ZOOM_MEETINGS_API_OPERATION_COUNT).toBe(184);
    expect(ZOOM_MEETINGS_API_GENERATED_FUNCTION_COUNT).toBe(184);
    expect(ZOOM_RIVET_MEETINGS_SDK_OPERATION_COUNT).toBe(182);
    expect(ZOOM_RIVET_MEETINGS_REST_EXCEPTION_OPERATION_UIDS).toEqual([
      "GET /report/disclaimer",
      "GET /report/remote_support",
    ]);
  });

  it("creates Zoom meetings through the built-in REST adapter when explicit fetch transport is configured", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: 987654321,
        topic: "Support video call",
        join_url: "https://zoom.us/j/987654321",
      }), { status: 201, headers: { "content-type": "application/json" } })
    );
    const client = createZoomVideoClient({
      accessToken: "zoom-access-token",
      baseUrl: "https://zoom.test/v2",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const meeting = await client.createMeeting({
      topic: "Support video call",
      type: 2,
      startTime: "2026-06-17T16:00:00Z",
      duration: 30,
      scheduleFor: "agent@example.test",
      trackingFields: [{ field: "conversation_id", value: "conversation_1" }],
      additionalFields: { agenda: "Customer support escalation" },
    });

    expect(meeting.id).toBe(987654321);
    const [requestUrl, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(requestUrl).toBe("https://zoom.test/v2/users/me/meetings");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({
      accept: "application/json",
      authorization: "Bearer zoom-access-token",
      "content-type": "application/json",
    });
    expect(JSON.parse(String(init.body))).toMatchObject({
      topic: "Support video call",
      start_time: "2026-06-17T16:00:00Z",
      schedule_for: "agent@example.test",
      tracking_fields: [{ field: "conversation_id", value: "conversation_1" }],
    });
  });

  it("creates Zoom meetings through a host-injected provider client override", async () => {
    const createMeeting = vi.fn(async () => ({
      id: 987654321,
      topic: "Support video call",
      join_url: "https://zoom.us/j/987654321",
    }));
    const client = createZoomVideoClient({
      providerClient: createProviderClient({ createMeeting }),
    });

    const input: ZoomCreateMeetingInput = {
      topic: "Support video call",
      type: 2,
      startTime: "2026-06-17T16:00:00Z",
      duration: 30,
      timezone: "UTC",
      settings: { join_before_host: false, approval_type: 1 },
      trackingFields: [{ field: "conversation_id", value: "conversation_1" }],
      additionalFields: { agenda: "Customer support escalation" },
    };
    const meeting = await client.createMeeting(input);

    expect(meeting.id).toBe(987654321);
    expect(createMeeting).toHaveBeenCalledWith(input);
  });

  it("exposes Zoom Meetings API literal types for meeting create/list/resource shapes", () => {
    expectTypeOf<ZoomCreateMeetingInput["type"]>().toEqualTypeOf<1 | 2 | 3 | 8 | 10 | undefined>();
    expectTypeOf<ZoomCreateMeetingInput["recurrence"]>().toEqualTypeOf<ZoomMeetingRecurrence | undefined>();
    expectTypeOf<ZoomListMeetingsInput["type"]>()
      .toEqualTypeOf<"scheduled" | "live" | "upcoming" | "upcoming_meetings" | "previous_meetings" | undefined>();
    expectTypeOf<ZoomMeetingResource["status"]>().toEqualTypeOf<"waiting" | "started" | "finished" | undefined>();
  });

  it("lists and deletes Zoom meetings through the host provider client", async () => {
    const listMeetings = vi.fn(async () => ({
        meetings: [{
          id: 987654321,
          topic: "Support video call",
          start_time: "2026-06-17T16:00:00Z",
        }],
        next_page_token: "next_page_1",
        page_size: 1,
        total_records: 2,
    }));
    const deleteMeeting = vi.fn(async () => ({}));
    const client = createZoomVideoClient({
      providerClient: createProviderClient({ listMeetings, deleteMeeting }),
    });

    const listInput: ZoomListMeetingsInput = {
      type: "scheduled",
      pageSize: 1,
      nextPageToken: "page_0",
      from: "2026-06-01",
      to: "2026-06-30",
      timezone: "UTC",
    };
    await expect(client.listMeetings(listInput)).resolves.toMatchObject({
      meetings: [expect.objectContaining({ id: 987654321 })],
      next_page_token: "next_page_1",
    });
    const deleteInput = {
      occurrenceId: "occurrence_1",
      scheduleForReminder: false,
    };
    await expect(client.deleteMeeting(987654321, deleteInput)).resolves.toEqual({});

    expect(listMeetings).toHaveBeenCalledWith(listInput);
    expect(deleteMeeting).toHaveBeenCalledWith(987654321, deleteInput);
  });

  it("reads, updates, and checks the current Zoom user through the host provider client", async () => {
    const getMeeting = vi.fn(async () => ({ id: 987654321, topic: "Support video call" }));
    const updateMeeting = vi.fn(async () => ({}));
    const getCurrentUser = vi.fn(async () => ({
        id: "user_123",
        account_id: "account_123",
        email: "agent@example.test",
        status: "active",
    }));
    const client = createZoomVideoClient({
      providerClient: createProviderClient({ getMeeting, updateMeeting, getCurrentUser }),
    });

    const getInput = {
      occurrenceId: "occurrence_1",
      showPreviousOccurrences: true,
    };
    await expect(client.getMeeting(987654321, getInput)).resolves.toMatchObject({ id: 987654321 });
    const updateInput = {
      topic: "Updated support video call",
      startTime: "2026-06-17T17:00:00Z",
      settings: { waiting_room: true },
    };
    await expect(client.updateMeeting(987654321, updateInput)).resolves.toEqual({});
    await expect(client.getCurrentUser()).resolves.toMatchObject({
      id: "user_123",
      account_id: "account_123",
    });

    expect(getMeeting).toHaveBeenCalledWith(987654321, getInput);
    expect(updateMeeting).toHaveBeenCalledWith(987654321, updateInput);
    expect(getCurrentUser).toHaveBeenCalledWith();
  });

  it("exposes generated functions for the official Zoom Meetings API Hub slice", async () => {
    const requestOperation = vi.fn(async (operation: string) => {
      if (operation === "GET /meetings/{meetingId}/recordings") return { recording_files: [] };
      if (operation === "GET /report/meetings/{meetingId}/participants") return { participants: [] };
      return {};
    });
    const client = createZoomVideoClient({
      providerClient: createProviderClient({
        requestOperation: requestOperation as unknown as ZoomVideoProviderClient["requestOperation"],
      }),
    });

    await expect(client.meetingsApi.RecordingGet({
      pathParams: { meetingId: 987654321 },
      query: { include_fields: "download_access_token", ttl: 60 },
    })).resolves.toMatchObject({ recording_files: [] });
    await expect(client.requestOperation("PUT /meetings/{meetingId}/recordings/registrants/status", {
      pathParams: { meetingId: 987654321 },
      body: { action: "approve", registrants: [{ id: "registrant-1" }] },
    })).resolves.toEqual({});
    await expect(client.meetingsApi.ReportMeetingParticipants({
      pathParams: { meetingId: 987654321 },
      query: { page_size: 30, include_fields: "registrant_id" },
    })).resolves.toMatchObject({ participants: [] });
    await expect(client.meetingsApi.DeleteMeetingTranscript({
      pathParams: { meetingId: 987654321 },
    })).resolves.toEqual({});

    expect(requestOperation).toHaveBeenNthCalledWith(
      1,
      "GET /meetings/{meetingId}/recordings",
      {
        pathParams: { meetingId: 987654321 },
        query: { include_fields: "download_access_token", ttl: 60 },
      },
    );
    expect(requestOperation).toHaveBeenNthCalledWith(
      2,
      "PUT /meetings/{meetingId}/recordings/registrants/status",
      {
        pathParams: { meetingId: 987654321 },
        body: { action: "approve", registrants: [{ id: "registrant-1" }] },
      },
    );
    expect(requestOperation).toHaveBeenNthCalledWith(
      3,
      "GET /report/meetings/{meetingId}/participants",
      {
        pathParams: { meetingId: 987654321 },
        query: { page_size: 30, include_fields: "registrant_id" },
      },
    );
    expect(requestOperation).toHaveBeenNthCalledWith(
      4,
      "DELETE /meetings/{meetingId}/transcript",
      {
        pathParams: { meetingId: 987654321 },
      },
    );
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Zoom Meetings API Hub operation");
  });

  it("executes generated Zoom Meetings API operations through the built-in REST adapter", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ recording_files: [] }), { status: 200, headers: { "content-type": "application/json" } })
    );
    const client = createZoomVideoClient({
      accessToken: "zoom-access-token",
      baseUrl: "https://zoom.test/v2",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.meetingsApi.RecordingGet({
      pathParams: { meetingId: "meeting/1" },
      query: { include_fields: "download_access_token", ttl: 60 },
    })).resolves.toMatchObject({ recording_files: [] });

    const [requestUrl, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(requestUrl).toBe("https://zoom.test/v2/meetings/meeting%2F1/recordings?include_fields=download_access_token&ttl=60");
    expect(init.headers).toMatchObject({ authorization: "Bearer zoom-access-token" });
  });

  it("uses Zoom server-to-server OAuth credentials when no accessToken is configured", async () => {
    const fetchMock = vi.fn(async (url: RequestInfo | URL) => {
      if (String(url).startsWith("https://zoom-oauth.test/oauth/token")) {
        return new Response(JSON.stringify({ access_token: "server-token" }), { status: 200 });
      }
      return new Response(JSON.stringify({ id: "user_123", account_id: "account_123" }), { status: 200 });
    });
    const client = createZoomVideoClient({
      accountId: "account_123",
      clientId: "client-id",
      clientSecret: "client-secret",
      oauthBaseUrl: "https://zoom-oauth.test",
      baseUrl: "https://zoom.test/v2",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getCurrentUser()).resolves.toMatchObject({ id: "user_123" });
    const [tokenUrl, tokenInit] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(tokenUrl).toBe("https://zoom-oauth.test/oauth/token?grant_type=account_credentials&account_id=account_123");
    expect(tokenInit.headers).toMatchObject({
      authorization: `Basic ${Buffer.from("client-id:client-secret").toString("base64")}`,
    });
    const [, userInit] = fetchMock.mock.calls[1] as unknown as [string, RequestInit];
    expect(userInit.headers).toMatchObject({ authorization: "Bearer server-token" });
  });

  it("throws structured Zoom JSON errors from the built-in REST adapter", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ code: 3001, message: "Meeting does not exist" }), { status: 404 })
    );
    const client = createZoomVideoClient({
      accessToken: "zoom-access-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getMeeting(987654321)).rejects.toMatchObject({
      name: "IntegrationError",
      code: "provider-validation",
      statusCode: 404,
      details: { payload: { code: 3001, message: "Meeting does not exist" } },
    });
  });

  it("fails closed without Zoom OAuth credentials or a host-injected provider client", async () => {
    const client = createZoomVideoClient();

    await expect(client.createMeeting({ topic: "Support video", type: 2 }))
      .rejects.toThrow("credentials");
    await expect(client.meetingsApi.RecordingGet({
      pathParams: { meetingId: 987654321 },
    })).rejects.toThrow("credentials");
  });

  it("validates Zoom webhook signatures and parses URL validation challenges", async () => {
    const webhookSecretToken = "webhook-secret-token";
    const timestamp = 1_710_000_000;
    const body = JSON.stringify({
      event: "endpoint.url_validation",
      payload: { plainToken: "plain-token" },
    });
    const signature = signZoom({ webhookSecretToken, timestamp, body });
    const request = new Request("https://example.test/zoom/webhooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-zm-request-timestamp": String(timestamp),
        "x-zm-signature": signature,
      },
      body,
    });

    expect(validateZoomWebhookSignature({
      webhookSecretToken,
      rawBody: body,
      timestamp,
      signature,
      nowSeconds: timestamp,
    })).toBe(true);

    const parsed = await parseZoomWebhookRequest(request, {
      webhookSecretToken,
      nowSeconds: timestamp,
    });
    expect(parsed.event).toBe("endpoint.url_validation");
    expect(parsed.urlValidationResponse).toEqual(createZoomWebhookValidationResponse({
      webhookSecretToken,
      plainToken: "plain-token",
    }));
  });

  it("fails closed by default when Zoom webhook verification has no secret token", async () => {
    const request = new Request("https://example.test/zoom/webhooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event: "meeting.started", payload: { object: { id: "meeting-1" } } }),
    });

    await expect(parseZoomWebhookRequest(request))
      .rejects.toThrow("Zoom webhook secret token is required");
  });

  it("parses Zoom webhooks without verification only when explicitly requested", async () => {
    const request = new Request("https://example.test/zoom/webhooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event: "meeting.started", payload: { object: { id: "meeting-1" } } }),
    });

    await expect(parseZoomWebhookRequest(request, { requireSignature: false }))
      .resolves.toMatchObject({ event: "meeting.started" });
  });

  it("rejects stale or tampered Zoom webhook signatures", () => {
    const webhookSecretToken = "webhook-secret-token";
    const timestamp = 1_710_000_000;
    const body = JSON.stringify({ event: "meeting.started", payload: { object: { id: 987654321 } } });
    const signature = signZoom({ webhookSecretToken, timestamp, body });

    expect(validateZoomWebhookSignature({
      webhookSecretToken,
      rawBody: body,
      timestamp,
      signature,
      nowSeconds: timestamp + 301,
    })).toBe(false);
    expect(validateZoomWebhookSignature({
      webhookSecretToken,
      rawBody: JSON.stringify({ event: "meeting.ended" }),
      timestamp,
      signature,
      nowSeconds: timestamp,
    })).toBe(false);
  });

  it("reports live conformance as credential-blocked until Zoom OAuth credentials are configured", async () => {
    const result = await runProviderConformance({
      expectedPackageName: "@cognidesk/integration-video-zoom",
      manifest: zoomVideoProviderManifest,
      channels: [{
        id: "video",
        channel: "video",
        providerPackageIds: [zoomVideoProviderManifest.id],
        enabledCapabilities: ["schedule", "create-provider-object", "read-provider-object", "delete-provider-object", "update-provider-object", "receive"],
      }],
      credentialStatuses: zoomVideoCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createZoomVideoLiveChecks({
          client: {
            async getCurrentUser() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check: { id: string; status: string }) =>
      check.id === "provider.live.current-user" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Zoom current-user live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      expectedPackageName: "@cognidesk/integration-video-zoom",
      manifest: zoomVideoProviderManifest,
      channels: [{
        id: "video",
        channel: "video",
        providerPackageIds: [zoomVideoProviderManifest.id],
        enabledCapabilities: ["schedule", "create-provider-object", "read-provider-object", "delete-provider-object", "update-provider-object", "receive"],
      }],
      credentialStatuses: zoomVideoCredentialStatuses({
        providerClientConfigured: true,
        accessToken: "configured",
        webhookSecretToken: "configured",
        scopes: ["meeting:write", "meeting:read", "meeting:delete:meeting", "user:read"],
      }),
      live: {
        enabled: true,
        checks: createZoomVideoLiveChecks({
          client: {
            async getCurrentUser() {
              return {
                id: "user_123",
                account_id: "account_123",
                email: "agent@example.test",
                status: "active",
              };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.current-user",
      status: "passed",
    }));
  });
});

function signZoom(input: { webhookSecretToken: string; timestamp: number; body: string }) {
  const base = `v0:${input.timestamp}:${input.body}`;
  return `v0=${createHmac("sha256", input.webhookSecretToken).update(base).digest("hex")}`;
}

function createProviderClient(
  overrides: Partial<ZoomVideoProviderClient> = {},
): ZoomVideoProviderClient {
  const response = async () => ({});
  const listMeetings = async () => ({ meetings: [] });
  return {
    createMeeting: response,
    listMeetings,
    getMeeting: response,
    updateMeeting: response,
    deleteMeeting: response,
    getCurrentUser: response,
    requestOperation: response as ZoomVideoProviderClient["requestOperation"],
    ...overrides,
  };
}
