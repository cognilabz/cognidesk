import { afterEach, describe, expect, it, vi } from "vitest";

interface MockEndpointOptions extends Record<string, unknown> {
  auth?: { getToken?: () => string | Promise<string> };
}

interface MockEndpointCall {
  group: string;
  name: string;
  input: unknown;
  token?: string;
  options: MockEndpointOptions;
}

interface MockConstructorCall {
  kind: "endpoints" | "s2s";
  options: MockEndpointOptions;
}

function createRivetMocks() {
  const calls = {
    meetingsConstructors: [] as MockConstructorCall[],
    usersConstructors: [] as MockConstructorCall[],
    meetingEndpoints: [] as MockEndpointCall[],
    userEndpoints: [] as MockEndpointCall[],
  };

  vi.doMock("@zoom/rivet/meetings", () => {
    class MeetingsEndpoints {
      readonly archiving = {};
      readonly cloudRecording: Record<string, (input: unknown) => Promise<unknown>>;
      readonly meetings: Record<string, (input: unknown) => Promise<unknown>>;
      readonly reports: Record<string, (input: unknown) => Promise<unknown>>;

      constructor(readonly options: MockEndpointOptions) {
        calls.meetingsConstructors.push({ kind: "endpoints", options });
        this.cloudRecording = {
          getMeetingRecordings: (input) =>
            this.call("cloudRecording", "getMeetingRecordings", input, { recording_files: [] }),
          deleteMeetingOrWebinarTranscript: (input) =>
            this.call("cloudRecording", "deleteMeetingOrWebinarTranscript", input, {}),
        };
        this.meetings = {
          createMeeting: (input) =>
            this.call("meetings", "createMeeting", input, {
              id: 987654321,
              topic: readBody(input).topic,
              join_url: "https://zoom.us/j/987654321",
            }),
          listMeetings: (input) =>
            this.call("meetings", "listMeetings", input, {
              meetings: [{ id: 987654321, topic: "Support video call" }],
            }),
        };
        this.reports = {
          getMeetingParticipantReports: (input) =>
            this.call("reports", "getMeetingParticipantReports", input, { participants: [] }),
        };
      }

      private async call(group: string, name: string, input: unknown, data: unknown) {
        const token = await this.options.auth?.getToken?.();
        calls.meetingEndpoints.push({
          group,
          name,
          input,
          options: this.options,
          ...(token !== undefined ? { token } : {}),
        });
        return { data, statusCode: 200 };
      }
    }

    class MeetingsS2SAuthClient {
      readonly endpoints: MeetingsEndpoints;

      constructor(readonly options: MockEndpointOptions) {
        calls.meetingsConstructors.push({ kind: "s2s", options });
        this.endpoints = new MeetingsEndpoints({
          ...options,
          auth: { getToken: () => "sdk-s2s-token" },
        });
      }
    }

    return { MeetingsEndpoints, MeetingsS2SAuthClient };
  });

  vi.doMock("@zoom/rivet/users", () => {
    class UsersEndpoints {
      readonly users: Record<string, (input: unknown) => Promise<unknown>>;

      constructor(readonly options: MockEndpointOptions) {
        calls.usersConstructors.push({ kind: "endpoints", options });
        this.users = {
          getUser: (input) =>
            this.call("users", "getUser", input, {
              id: "user_123",
              account_id: "account_123",
              email: "agent@example.test",
              status: "active",
            }),
        };
      }

      private async call(group: string, name: string, input: unknown, data: unknown) {
        const token = await this.options.auth?.getToken?.();
        calls.userEndpoints.push({
          group,
          name,
          input,
          options: this.options,
          ...(token !== undefined ? { token } : {}),
        });
        return { data, statusCode: 200 };
      }
    }

    class UsersS2SAuthClient {
      readonly endpoints: UsersEndpoints;

      constructor(readonly options: MockEndpointOptions) {
        calls.usersConstructors.push({ kind: "s2s", options });
        this.endpoints = new UsersEndpoints({
          ...options,
          auth: { getToken: () => "sdk-s2s-token" },
        });
      }
    }

    return { UsersEndpoints, UsersS2SAuthClient };
  });

  return calls;
}

afterEach(() => {
  vi.doUnmock("@zoom/rivet/meetings");
  vi.doUnmock("@zoom/rivet/users");
  vi.unstubAllGlobals();
  vi.resetModules();
});

describe("@cognidesk/integration-video-zoom official SDK runtime", () => {
  it("routes default meeting helpers and generated operations through @zoom/rivet", async () => {
    vi.resetModules();
    const calls = createRivetMocks();
    const { createZoomVideoClient } = await import("../src/client.js");

    const client = createZoomVideoClient({
      accessToken: "zoom-access-token",
      baseUrl: "https://zoom.test/v2",
      timeoutMs: 1234,
    });

    await expect(client.createMeeting({
      topic: "Support video call",
      type: 2,
      startTime: "2026-06-17T16:00:00Z",
    })).resolves.toMatchObject({
      id: 987654321,
      topic: "Support video call",
    });
    await expect(client.meetingsApi.RecordingGet({
      pathParams: { meetingId: 987654321 },
    })).resolves.toMatchObject({ recording_files: [] });
    await expect(client.meetingsApi.ReportMeetingParticipants({
      pathParams: { meetingId: 987654321 },
      query: { page_size: 30 },
    })).resolves.toMatchObject({ participants: [] });
    await expect(client.meetingsApi.DeleteMeetingTranscript({
      pathParams: { meetingId: 987654321 },
    })).resolves.toEqual({});

    expect(client.providerClient.rawClient).toMatchObject({
      sdkPackage: "@zoom/rivet",
    });
    expect(calls.meetingsConstructors[0]).toMatchObject({
      kind: "endpoints",
      options: {
        baseUrl: "https://zoom.test/v2",
        timeout: 1234,
        userAgentName: "cognidesk-integration-video-zoom",
      },
    });
    expect(calls.meetingEndpoints.map((call) => `${call.group}.${call.name}`)).toEqual([
      "meetings.createMeeting",
      "cloudRecording.getMeetingRecordings",
      "reports.getMeetingParticipantReports",
      "cloudRecording.deleteMeetingOrWebinarTranscript",
    ]);
    expect(calls.meetingEndpoints[0]).toMatchObject({
      token: "zoom-access-token",
      input: {
        path: { userId: "me" },
        body: {
          topic: "Support video call",
          start_time: "2026-06-17T16:00:00Z",
        },
      },
    });
    expect(calls.meetingEndpoints[1]).toMatchObject({
      input: { path: { meetingId: 987654321 } },
    });
  });

  it("constructs Rivet server-to-server clients for account OAuth credentials", async () => {
    vi.resetModules();
    const calls = createRivetMocks();
    const { createZoomVideoClient } = await import("../src/client.js");

    const client = createZoomVideoClient({
      accountId: "account_123",
      clientId: "client-id",
      clientSecret: "client-secret",
    });

    await expect(client.getCurrentUser()).resolves.toMatchObject({
      id: "user_123",
      account_id: "account_123",
    });

    expect(calls.meetingsConstructors).toContainEqual(expect.objectContaining({
      kind: "s2s",
      options: expect.objectContaining({
        accountId: "account_123",
        clientId: "client-id",
        clientSecret: "client-secret",
        disableReceiver: true,
      }),
    }));
    expect(calls.usersConstructors).toContainEqual(expect.objectContaining({
      kind: "s2s",
      options: expect.objectContaining({
        accountId: "account_123",
        clientId: "client-id",
        clientSecret: "client-secret",
        disableReceiver: true,
      }),
    }));
    expect(calls.userEndpoints[0]).toMatchObject({
      group: "users",
      name: "getUser",
      token: "sdk-s2s-token",
      input: { path: { userId: "me" } },
    });
  });

  it("keeps documented Rivet coverage gaps on the typed REST fallback", async () => {
    vi.resetModules();
    const calls = createRivetMocks();
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ report: "disclaimer" }), { status: 200 })
    );
    vi.stubGlobal("fetch", fetchMock);
    const { createZoomVideoClient } = await import("../src/client.js");

    const client = createZoomVideoClient({
      accessToken: "zoom-access-token",
      baseUrl: "https://zoom.test/v2",
    });

    await expect(client.requestOperation("GET /report/disclaimer", {
      query: { from: "2026-06-01", to: "2026-06-30" },
    })).resolves.toEqual({ report: "disclaimer" });

    expect(calls.meetingEndpoints).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [requestUrl, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(requestUrl).toBe("https://zoom.test/v2/report/disclaimer?from=2026-06-01&to=2026-06-30");
    expect(init.headers).toMatchObject({ authorization: "Bearer zoom-access-token" });
  });
});

function readBody(input: unknown) {
  return readRecord(readRecord(input).body);
}

function readRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null ? value as Record<string, unknown> : {};
}
