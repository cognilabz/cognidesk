import {
  type WherebyCreateMeetingInput,
  type WherebyLiveTranscriptionOptions,
  type WherebyRecordingOptions,
  type WherebyTranscriptionResource,
  type WherebyVideoProviderClient,
  createUnconfiguredWherebyVideoProviderClient,
  createWherebyVideoClient,
  expect,
  expectTypeOf,
  it,
  vi,
} from "./helpers.js";

export function registerWherebyClientOperationTests() {
  it("creates Whereby meetings through the built-in REST adapter when apiKey is configured", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        meetingId: "meeting_123",
        roomName: "/support-abc",
        roomUrl: "https://example.whereby.com/support-abc",
        hostRoomUrl: "https://example.whereby.com/support-abc?roomKey=secret",
        endDate: "2099-07-01T10:01:32.041Z",
      }), { status: 201, headers: { "content-type": "application/json" } })
    );
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      baseUrl: "https://api.whereby.test/v1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const meeting = await client.createMeeting({
      endDate: "2099-07-01T10:01:32.041Z",
      fields: ["hostRoomUrl"],
    });

    expect(meeting.meetingId).toBe("meeting_123");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [requestUrl, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(requestUrl).toBe("https://api.whereby.test/v1/meetings");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({
      accept: "application/json",
      authorization: "Bearer whereby-api-key",
      "content-type": "application/json",
    });
    expect(JSON.parse(String(init.body))).toMatchObject({
      endDate: "2099-07-01T10:01:32.041Z",
      fields: ["hostRoomUrl"],
    });
  });

  it("creates Whereby meetings through a host-injected provider client", async () => {
    const providerClient = createProviderClient((operation, input) => {
      expect(operation).toBe("POST /meetings");
      expect(input).toMatchObject({
        body: {
          endDate: "2099-07-01T10:01:32.041Z",
          isLocked: true,
          roomMode: "group",
          roomNamePrefix: "support",
          roomNamePattern: "human-short",
          fields: ["hostRoomUrl"],
          recording: { type: "none" },
          liveTranscription: { startTrigger: "none" },
        },
      });
      return {
        meetingId: "meeting_123",
        roomName: "/support-abc",
        roomUrl: "https://example.whereby.com/support-abc",
        hostRoomUrl: "https://example.whereby.com/support-abc?roomKey=secret",
        endDate: "2099-07-01T10:01:32.041Z",
      };
    });
    const client = createWherebyVideoClient({ providerClient });

    const meeting = await client.createMeeting({
      endDate: "2099-07-01T10:01:32.041Z",
      roomMode: "group",
      roomNamePrefix: "support",
      roomNamePattern: "human-short",
      fields: ["hostRoomUrl"],
      recording: { type: "none" },
      liveTranscription: { startTrigger: "none" },
      additionalFields: { isLocked: true },
    });

    expect(meeting.meetingId).toBe("meeting_123");
    expect(providerClient.requestOperation).toHaveBeenCalledTimes(1);
  });

  it("fails closed without Whereby API credentials or a host-provided provider client", async () => {
    const client = createWherebyVideoClient();
    await expect(client.listMeetings()).rejects.toThrow("apiKey");
    await expect(createUnconfiguredWherebyVideoProviderClient().requestOperation("GET /meetings"))
      .rejects.toThrow("apiKey");
  });

  it("throws structured Whereby JSON errors from the built-in REST adapter", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ error: "invalid_request", message: "Bad meeting id" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      })
    );
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      baseUrl: "https://api.whereby.test/v1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getMeeting("meeting with spaces")).rejects.toMatchObject({
      name: "IntegrationError",
      code: "provider-validation",
      statusCode: 400,
      details: { payload: { error: "invalid_request", message: "Bad meeting id" } },
    });
    const [requestUrl] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(requestUrl).toBe("https://api.whereby.test/v1/meetings/meeting%20with%20spaces");
  });

  it("exposes official Whereby meeting media option and transcription state types", () => {
    expectTypeOf<WherebyCreateMeetingInput["recording"]>()
      .toMatchTypeOf<WherebyRecordingOptions | null | undefined>();
    expectTypeOf<WherebyCreateMeetingInput["liveTranscription"]>()
      .toMatchTypeOf<WherebyLiveTranscriptionOptions | null | undefined>();
    expectTypeOf<WherebyTranscriptionResource["state"]>()
      .toEqualTypeOf<"ready" | "failed" | "in_progress" | undefined>();
  });

  it("lists, reads, deletes meetings, and updates supported room theme tokens through provider operations", async () => {
    const providerClient = createProviderClient((operation) => {
      if (operation === "GET /meetings") {
        return {
          results: [{
            meetingId: "meeting_123",
            roomUrl: "https://example.whereby.com/support-abc",
            endDate: "2099-07-01T10:01:32.041Z",
          }],
          cursor: null,
        };
      }
      if (operation === "GET /meetings/{meetingId}") {
        return {
          meetingId: "meeting_123",
          roomName: "/support-abc",
          roomUrl: "https://example.whereby.com/support-abc",
          viewerRoomUrl: "https://example.whereby.com/support-abc?viewerKey=secret",
          endDate: "2099-07-01T10:01:32.041Z",
        };
      }
      return {};
    });
    const client = createWherebyVideoClient({ providerClient });

    await expect(client.listMeetings({ limit: 1, fields: ["hostRoomUrl"] })).resolves.toMatchObject({
      results: [expect.objectContaining({ meetingId: "meeting_123" })],
      cursor: null,
    });
    await expect(client.getMeeting("meeting_123", { fields: ["viewerRoomUrl"] })).resolves.toMatchObject({
      meetingId: "meeting_123",
      viewerRoomUrl: expect.stringContaining("viewerKey"),
    });
    await expect(client.deleteMeeting("meeting_123")).resolves.toEqual({});
    await expect(client.setRoomThemeTokens("/support-abc", {
      tokensPreset: "custom",
      tokens: { colors: { primary: "#005fcc", secondary: "#111111", focus: "#ffcc00" } },
    })).resolves.toEqual({});

    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      1,
      "GET /meetings",
      { query: { limit: 1, fields: ["hostRoomUrl"] } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      2,
      "GET /meetings/{meetingId}",
      { pathParams: { meetingId: "meeting_123" }, query: { fields: ["viewerRoomUrl"] } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      3,
      "DELETE /meetings/{meetingId}",
      { pathParams: { meetingId: "meeting_123" } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      4,
      "PUT /rooms/{roomName}/theme/tokens",
      {
        pathParams: { roomName: "/support-abc" },
        body: {
          tokensPreset: "custom",
          tokens: { colors: { primary: "#005fcc", secondary: "#111111", focus: "#ffcc00" } },
        },
      },
    );
  });

  it("covers Whereby recordings, transcriptions, and beta summaries as host provider operations", async () => {
    const providerClient = createProviderClient((operation) => {
      if (operation === "GET /recordings/{recordingId}/access-link") {
        return { accessLink: "https://recordings.example.test/recording.mp4", expires: 1_740_819_600_000 };
      }
      if (operation === "GET /transcriptions/{transcriptionId}/access-link") {
        return { accessLink: "https://recordings.example.test/transcript.md", expires: 1_740_819_600_000 };
      }
      if (operation === "GET /recordings/{recordingId}") {
        return { recordingId: "recording_1", filename: "recording.mp4" };
      }
      if (operation === "GET /transcriptions/{transcriptionId}") {
        return { transcriptionId: "transcription_1", state: "ready" };
      }
      if (operation === "GET /summaries/{summaryId}") {
        return { summaryId: "summary_1", state: "ready" };
      }
      if (operation === "GET /recordings") {
        return { results: [{ recordingId: "recording_1" }], cursor: "next-recordings" };
      }
      if (operation === "GET /transcriptions") {
        return { results: [{ transcriptionId: "transcription_1" }], cursor: null };
      }
      if (operation === "GET /summaries") {
        return { results: [{ summaryId: "summary_1" }], cursor: null };
      }
      if (operation === "POST /transcriptions") {
        return { transcriptionId: "transcription_1", state: "processing" };
      }
      if (operation === "POST /summaries") {
        return { summaryId: "summary_1", state: "processing" };
      }
      return {};
    });
    const client = createWherebyVideoClient({ providerClient });

    await expect(client.listRecordings({ limit: 1 })).resolves.toMatchObject({ cursor: "next-recordings" });
    await expect(client.getRecording("recording_1")).resolves.toMatchObject({ recordingId: "recording_1" });
    await expect(client.getRecordingAccessLink("recording_1", { validForSeconds: 600 })).resolves.toMatchObject({ accessLink: expect.stringContaining("recording.mp4") });
    await expect(client.bulkDeleteRecordings(["recording_1"])).resolves.toEqual({});
    await expect(client.deleteRecording("recording_1")).resolves.toEqual({});
    await expect(client.createTranscription({ recordingId: "recording_1" })).resolves.toMatchObject({ transcriptionId: "transcription_1" });
    await expect(client.listTranscriptions({ cursor: "next-transcriptions" })).resolves.toMatchObject({ cursor: null });
    await expect(client.getTranscription("transcription_1")).resolves.toMatchObject({ state: "ready" });
    await expect(client.getTranscriptionAccessLink("transcription_1")).resolves.toMatchObject({ accessLink: expect.stringContaining("transcript.md") });
    await expect(client.bulkDeleteTranscriptions(["transcription_1"])).resolves.toEqual({});
    await expect(client.deleteTranscription("transcription_1")).resolves.toEqual({});
    await expect(client.createSummary({ transcriptionId: "transcription_1", template: "General Narrative" })).resolves.toMatchObject({ summaryId: "summary_1" });
    await expect(client.listSummaries({ limit: 2 })).resolves.toMatchObject({ results: [expect.objectContaining({ summaryId: "summary_1" })] });
    await expect(client.getSummary("summary_1")).resolves.toMatchObject({ state: "ready" });
    await expect(client.deleteSummary("summary_1")).resolves.toEqual({});

    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      3,
      "GET /recordings/{recordingId}/access-link",
      { pathParams: { recordingId: "recording_1" }, query: { validForSeconds: 600 } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      6,
      "POST /transcriptions",
      { body: { recordingId: "recording_1" } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      12,
      "POST /summaries",
      { body: { transcriptionId: "transcription_1", template: "General Narrative" } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      15,
      "DELETE /summaries/{summaryId}",
      { pathParams: { summaryId: "summary_1" } },
    );
  });
}

function createProviderClient(
  handler: (operation: string, input?: unknown) => unknown | Promise<unknown>,
): WherebyVideoProviderClient {
  return {
    requestOperation: vi.fn(async (operation, input) => handler(operation, input)) as WherebyVideoProviderClient["requestOperation"],
  };
}
