import {
  createWherebyVideoClient,
  expect,
  it,
  vi,
} from "./helpers.js";

export function registerWherebyGeneratedApiTests() {
  it("exposes generated functions for every Whereby REST operation including theme media and insights", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.includes("/insights/participant?")) {
        return new Response(JSON.stringify([{ participantId: "participant_1", samples: {} }]), { status: 200 });
      }
      if (url.includes("/insights/")) {
        return new Response(JSON.stringify({ results: [{ roomName: "/support-abc" }], cursor: null }), { status: 200 });
      }
      return new Response(null, { status: 204 });
    });
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

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

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.whereby.dev/v1/rooms/%2Fsupport-abc/theme/logo",
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({ "content-type": "application/json" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.whereby.dev/v1/insights/rooms?roomName%5BstartsWith%5D=%2Fsupport&createdAt%5Bfrom%5D=2026-01-01T00%3A00%3A00.000Z&limit=5",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      7,
      "https://api.whereby.dev/v1/insights/participant?roomSessionId=session_1&participantId=participant_1",
      expect.objectContaining({ method: "GET" }),
    );
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.GetMeeting()).rejects.toThrow("Missing Whereby path parameter 'meetingId'");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Whereby REST OpenAPI operation");
  });

  it("sends Whereby theme media FormData without forcing a JSON content type", async () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });
    const formData = new FormData();
    formData.append("image", new Blob(["png-bytes"], { type: "image/png" }), "logo.png");

    await expect(client.setRoomLogo("/support-abc", formData)).resolves.toEqual({});

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.whereby.dev/v1/rooms/%2Fsupport-abc/theme/logo",
      expect.objectContaining({
        method: "PUT",
        body: formData,
        headers: expect.not.objectContaining({ "content-type": expect.any(String) }),
      }),
    );
  });
}
