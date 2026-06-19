import { createHmac } from "node:crypto";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  type ZoomCreateMeetingInput,
  type ZoomListMeetingsInput,
  type ZoomMeetingRecurrence,
  type ZoomMeetingResource,
  createZoomVideoClient,
  createZoomVideoLiveChecks,
  createZoomWebhookValidationResponse,
  parseZoomWebhookRequest,
  validateZoomWebhookSignature,
  ZOOM_MEETINGS_API_GENERATED_FUNCTION_COUNT,
  ZOOM_MEETINGS_API_OPERATION_COUNT,
  ZOOM_MEETINGS_API_PATH_COUNT,
  zoomVideoCredentialStatuses,
  zoomVideoProviderManifest,
} from "../../../src/video/zoom/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Zoom video meetings", () => {
    expect(zoomVideoProviderManifest).toMatchObject({
      id: "video.zoom",
      packageName: "@cognidesk/integrations",
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
    expect(zoomVideoProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
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
  });

  it("creates Zoom meetings through the REST API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: 987654321,
        topic: "Support video call",
        join_url: "https://zoom.us/j/987654321",
      }), { status: 201 })
    );
    const client = createZoomVideoClient({
      accessToken: "zoom-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const meeting = await client.createMeeting({
      topic: "Support video call",
      type: 2,
      startTime: "2026-06-17T16:00:00Z",
      duration: 30,
      timezone: "UTC",
      settings: { join_before_host: false, approval_type: 1 },
      trackingFields: [{ field: "conversation_id", value: "conversation_1" }],
      additionalFields: { agenda: "Customer support escalation" },
    });

    expect(meeting.id).toBe(987654321);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.zoom.us/v2/users/me/meetings",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer zoom-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      topic: "Support video call",
      type: 2,
      start_time: "2026-06-17T16:00:00Z",
      duration: 30,
      timezone: "UTC",
      agenda: "Customer support escalation",
      settings: { join_before_host: false, approval_type: 1 },
      tracking_fields: [{ field: "conversation_id", value: "conversation_1" }],
    });
  });

  it("exposes Zoom Meetings API literal types for meeting create/list/resource shapes", () => {
    expectTypeOf<ZoomCreateMeetingInput["type"]>().toEqualTypeOf<1 | 2 | 3 | 8 | 10 | undefined>();
    expectTypeOf<ZoomCreateMeetingInput["recurrence"]>().toEqualTypeOf<ZoomMeetingRecurrence | undefined>();
    expectTypeOf<ZoomListMeetingsInput["type"]>()
      .toEqualTypeOf<"scheduled" | "live" | "upcoming" | "upcoming_meetings" | "previous_meetings" | undefined>();
    expectTypeOf<ZoomMeetingResource["status"]>().toEqualTypeOf<"waiting" | "started" | "finished" | undefined>();
  });

  it("lists and deletes Zoom meetings through the REST API", async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
      if (init.method === "DELETE") return new Response(null, { status: 204 });
      return new Response(JSON.stringify({
        meetings: [{
          id: 987654321,
          topic: "Support video call",
          start_time: "2026-06-17T16:00:00Z",
        }],
        next_page_token: "next_page_1",
        page_size: 1,
        total_records: 2,
      }), { status: 200 });
    });
    const client = createZoomVideoClient({
      accessToken: "zoom-token",
      userId: "host@example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listMeetings({
      type: "scheduled",
      pageSize: 1,
      nextPageToken: "page_0",
      from: "2026-06-01",
      to: "2026-06-30",
      timezone: "UTC",
    })).resolves.toMatchObject({
      meetings: [expect.objectContaining({ id: 987654321 })],
      next_page_token: "next_page_1",
    });
    await expect(client.deleteMeeting(987654321, {
      occurrenceId: "occurrence_1",
      scheduleForReminder: false,
    })).resolves.toEqual({});

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.zoom.us/v2/users/host%40example.test/meetings?type=scheduled&page_size=1&next_page_token=page_0&from=2026-06-01&to=2026-06-30&timezone=UTC",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.zoom.us/v2/meetings/987654321?occurrence_id=occurrence_1&schedule_for_reminder=false",
      expect.objectContaining({ method: "DELETE" }),
    );
  });

  it("reads, updates, and checks the current Zoom user", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.includes("/meetings/987654321")) {
        return new Response(JSON.stringify({ id: 987654321, topic: "Support video call" }), { status: 200 });
      }
      if (init.method === "PATCH") {
        return new Response(null, { status: 204 });
      }
      return new Response(JSON.stringify({
        id: "user_123",
        account_id: "account_123",
        email: "agent@example.test",
        status: "active",
      }), { status: 200 });
    });
    const client = createZoomVideoClient({
      accessToken: "zoom-token",
      userId: "host@example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getMeeting(987654321, {
      occurrenceId: "occurrence_1",
      showPreviousOccurrences: true,
    })).resolves.toMatchObject({ id: 987654321 });
    await expect(client.updateMeeting(987654321, {
      topic: "Updated support video call",
      startTime: "2026-06-17T17:00:00Z",
      settings: { waiting_room: true },
    })).resolves.toEqual({});
    await expect(client.getCurrentUser()).resolves.toMatchObject({
      id: "user_123",
      account_id: "account_123",
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.zoom.us/v2/meetings/987654321?occurrence_id=occurrence_1&show_previous_occurrences=true",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer zoom-token" }),
      }),
    );
    const updateRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(updateRequest.body)).toEqual({
      topic: "Updated support video call",
      start_time: "2026-06-17T17:00:00Z",
      settings: { waiting_room: true },
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.zoom.us/v2/users/me",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("exposes generated functions for the official Zoom Meetings API Hub slice", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.includes("/recordings")) {
        return new Response(JSON.stringify({ recording_files: [] }), { status: 200 });
      }
      if (init.method === "PUT") {
        return new Response(null, { status: 204 });
      }
      if (init.method === "DELETE") {
        return new Response(null, { status: 204 });
      }
      return new Response(JSON.stringify({ participants: [] }), { status: 200 });
    });
    const client = createZoomVideoClient({
      accessToken: "zoom-token",
      fetch: fetchMock as unknown as typeof fetch,
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

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.zoom.us/v2/meetings/987654321/recordings?include_fields=download_access_token&ttl=60",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.zoom.us/v2/meetings/987654321/recordings/registrants/status",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({ "content-type": "application/json" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.zoom.us/v2/report/meetings/987654321/participants?page_size=30&include_fields=registrant_id",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.zoom.us/v2/meetings/987654321/transcript",
      expect.objectContaining({ method: "DELETE" }),
    );
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.meetingsApi.Meeting()).rejects.toThrow("Missing Zoom path parameter 'meetingId'");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Zoom Meetings API Hub operation");
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
          accessToken: "missing",
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
      manifest: zoomVideoProviderManifest,
      channels: [{
        id: "video",
        channel: "video",
        providerPackageIds: [zoomVideoProviderManifest.id],
        enabledCapabilities: ["schedule", "create-provider-object", "read-provider-object", "delete-provider-object", "update-provider-object", "receive"],
      }],
      credentialStatuses: zoomVideoCredentialStatuses({
        accessToken: "configured",
        webhookSecretToken: "configured",
        scopes: ["meeting:write", "meeting:read", "meeting:delete:meeting", "user:read"],
      }),
      live: {
        enabled: true,
        checks: createZoomVideoLiveChecks({
          accessToken: "configured",
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
