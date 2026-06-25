import {
  type WherebyVideoProviderClient,
  createWherebyVideoClient,
  expect,
  it,
  vi,
} from "./helpers.js";

export function registerWherebyGeneratedApiTests() {
  it("exposes generated functions for every Whereby provider operation including theme media and insights", async () => {
    const providerClient = createProviderClient((operation) => {
      if (operation === "GET /insights/participant") {
        return [{ participantId: "participant_1", samples: {} }];
      }
      if (operation.startsWith("GET /insights/")) {
        return { results: [{ roomName: "/support-abc" }], cursor: null };
      }
      return {};
    });
    const client = createWherebyVideoClient({ providerClient });

    await expect(client.fullApi.SetRoomLogo({
      pathParams: { roomName: "/support-abc" },
      body: { theme: "default" },
    })).resolves.toEqual({});
    await expect(client.setRoomBackground("/support-abc", { palette: "grey", theme: "mountains" })).resolves.toEqual({});
    await expect(client.setRoomKnockPageBackground("/support-abc", { palette: "default", theme: "default" }))
      .resolves.toEqual({});
    await expect(client.fullApi.GetRoomInsights({
      query: {
        roomName: { startsWith: "/support" },
        createdAt: { from: "2026-01-01T00:00:00.000Z" },
        limit: 5,
      },
    })).resolves.toMatchObject({ results: [expect.objectContaining({ roomName: "/support-abc" })] });
    await expect(client.getRoomSessionInsights({ roomName: "/support-abc", roomSessionId: "session_1" }))
      .resolves.toMatchObject({ cursor: null });
    await expect(client.listParticipants({ roomSessionId: "session_1", sortBy: "joinedAt:asc" }))
      .resolves.toMatchObject({ cursor: null });
    await expect(client.getParticipantInsights({ roomSessionId: "session_1", participantId: "participant_1" }))
      .resolves.toEqual([expect.objectContaining({ participantId: "participant_1" })]);

    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      1,
      "PUT /rooms/{roomName}/theme/logo",
      { pathParams: { roomName: "/support-abc" }, body: { theme: "default" } },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      4,
      "GET /insights/rooms",
      {
        query: {
          roomName: { startsWith: "/support" },
          createdAt: { from: "2026-01-01T00:00:00.000Z" },
          limit: 5,
        },
      },
    );
    expect(providerClient.requestOperation).toHaveBeenNthCalledWith(
      7,
      "GET /insights/participant",
      { query: { roomSessionId: "session_1", participantId: "participant_1" } },
    );
    // @ts-expect-error Missing path params intentionally exercises runtime validation before host delegation.
    await expect(client.fullApi.GetMeeting()).rejects.toThrow("Missing Whereby path parameter 'meetingId'");
    // @ts-expect-error Operation IDs are accepted at runtime for compatibility, then normalized to catalog keys.
    await expect(client.requestOperation("getMeeting", { pathParams: { meetingId: "meeting_123" } })).resolves.toEqual({});
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Whereby provider operation");
  });

  it("passes Whereby theme media FormData to the host provider client without JSON request metadata", async () => {
    const providerClient = createProviderClient(() => ({}));
    const client = createWherebyVideoClient({ providerClient });
    const formData = new FormData();
    formData.append("image", new Blob(["png-bytes"], { type: "image/png" }), "logo.png");

    await expect(client.setRoomLogo("/support-abc", formData)).resolves.toEqual({});

    expect(providerClient.requestOperation).toHaveBeenCalledWith(
      "PUT /rooms/{roomName}/theme/logo",
      {
        pathParams: { roomName: "/support-abc" },
        body: formData,
      },
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
