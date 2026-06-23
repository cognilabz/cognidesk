import {
  type WherebyCreateMeetingInput,
  type WherebyLiveTranscriptionOptions,
  type WherebyRecordingOptions,
  type WherebyTranscriptionResource,
  createWherebyVideoClient,
  expect,
  expectTypeOf,
  it,
  vi,
} from "./helpers.js";

export function registerWherebyClientOperationTests() {
  it("creates Whereby meetings through the REST API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        meetingId: "meeting_123",
        roomName: "/support-abc",
        roomUrl: "https://example.whereby.com/support-abc",
        hostRoomUrl: "https://example.whereby.com/support-abc?roomKey=secret",
        endDate: "2099-07-01T10:01:32.041Z",
      }), { status: 201 })
    );
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

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
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.whereby.dev/v1/meetings",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer whereby-api-key",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      endDate: "2099-07-01T10:01:32.041Z",
      isLocked: true,
      roomMode: "group",
      roomNamePrefix: "support",
      roomNamePattern: "human-short",
      fields: ["hostRoomUrl"],
      recording: { type: "none" },
      liveTranscription: { startTrigger: "none" },
    });
  });

  it("exposes official Whereby meeting media option and transcription state types", () => {
    expectTypeOf<WherebyCreateMeetingInput["recording"]>()
      .toMatchTypeOf<WherebyRecordingOptions | null | undefined>();
    expectTypeOf<WherebyCreateMeetingInput["liveTranscription"]>()
      .toMatchTypeOf<WherebyLiveTranscriptionOptions | null | undefined>();
    expectTypeOf<WherebyTranscriptionResource["state"]>()
      .toEqualTypeOf<"ready" | "failed" | "in_progress" | undefined>();
  });

  it("lists, reads, deletes meetings, and updates supported room theme tokens", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "GET" && url.includes("/meetings?")) {
        return new Response(JSON.stringify({
          results: [{
            meetingId: "meeting_123",
            roomUrl: "https://example.whereby.com/support-abc",
            endDate: "2099-07-01T10:01:32.041Z",
          }],
          cursor: null,
        }), { status: 200 });
      }
      if (init.method === "GET" && url.includes("/meetings/meeting_123")) {
        return new Response(JSON.stringify({
          meetingId: "meeting_123",
          roomName: "/support-abc",
          roomUrl: "https://example.whereby.com/support-abc",
          viewerRoomUrl: "https://example.whereby.com/support-abc?viewerKey=secret",
          endDate: "2099-07-01T10:01:32.041Z",
        }), { status: 200 });
      }
      return new Response(null, { status: 204 });
    });
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

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

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.whereby.dev/v1/meetings?limit=1&fields=hostRoomUrl",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.whereby.dev/v1/meetings/meeting_123?fields=viewerRoomUrl",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.whereby.dev/v1/meetings/meeting_123",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.whereby.dev/v1/rooms/%2Fsupport-abc/theme/tokens",
      expect.objectContaining({ method: "PUT" }),
    );
  });

  it("covers Whereby recordings, transcriptions, and beta summaries endpoints", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "DELETE" || url.includes("bulk-delete")) {
        return new Response(null, { status: 204 });
      }
      if (url.includes("/recordings/recording_1/access-link")) {
        return new Response(JSON.stringify({ accessLink: "https://recordings.example.test/recording.mp4", expires: 1_740_819_600_000 }), { status: 200 });
      }
      if (url.includes("/transcriptions/transcription_1/access-link")) {
        return new Response(JSON.stringify({ accessLink: "https://recordings.example.test/transcript.md", expires: 1_740_819_600_000 }), { status: 200 });
      }
      if (url.includes("/recordings/recording_1")) {
        return new Response(JSON.stringify({ recordingId: "recording_1", filename: "recording.mp4" }), { status: 200 });
      }
      if (url.includes("/transcriptions/transcription_1")) {
        return new Response(JSON.stringify({ transcriptionId: "transcription_1", state: "ready" }), { status: 200 });
      }
      if (url.includes("/summaries/summary_1")) {
        return new Response(JSON.stringify({ summaryId: "summary_1", state: "ready" }), { status: 200 });
      }
      if (url.endsWith("/recordings?limit=1")) {
        return new Response(JSON.stringify({ results: [{ recordingId: "recording_1" }], cursor: "next-recordings" }), { status: 200 });
      }
      if (url.endsWith("/transcriptions?cursor=next-transcriptions")) {
        return new Response(JSON.stringify({ results: [{ transcriptionId: "transcription_1" }], cursor: null }), { status: 200 });
      }
      if (url.endsWith("/summaries?limit=2")) {
        return new Response(JSON.stringify({ results: [{ summaryId: "summary_1" }], cursor: null }), { status: 200 });
      }
      if (url.endsWith("/transcriptions")) {
        return new Response(JSON.stringify({ transcriptionId: "transcription_1", state: "processing" }), { status: 201 });
      }
      return new Response(JSON.stringify({ summaryId: "summary_1", state: "processing" }), { status: 201 });
    });
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

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

    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.whereby.dev/v1/recordings/recording_1/access-link?validForSeconds=600",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      "https://api.whereby.dev/v1/transcriptions",
      expect.objectContaining({ method: "POST" }),
    );
    expect(JSON.parse(String(((fetchMock.mock.calls[11] as unknown[])[1] as RequestInit).body))).toMatchObject({
      transcriptionId: "transcription_1",
      template: "General Narrative",
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      15,
      "https://api.whereby.dev/v1/summaries/summary_1",
      expect.objectContaining({ method: "DELETE" }),
    );
  });
}
