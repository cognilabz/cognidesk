import { describe, expect, it, vi } from "vitest";
import { createWherebyVideoClient, wherebyVideoIntegration, wherebyVideoOperationHandlers } from "../src/index.js";

describe("@cognidesk/integration-video-whereby package boundary", () => {
  it("binds every manifest operation to an executable handler", () => {
    expect(Object.keys(wherebyVideoIntegration.operations).sort())
      .toEqual(wherebyVideoIntegration.manifest.operations.map((operation) => operation.alias).sort());
  });

  it("imports the manifest-only entry without importing provider clients", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(manifestModule.wherebyVideoProviderManifest.packageName).toBe("@cognidesk/integration-video-whereby");
    expect(manifestModule).not.toHaveProperty("createWherebyVideoClient");
    expect(manifestModule).not.toHaveProperty("createWherebyFullApiGeneratedClient");
  });

  it("executes normalized meeting creation through the integration handler", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        meetingId: "meeting_123",
        roomUrl: "https://example.whereby.com/support",
        endDate: "2099-07-01T10:01:32.041Z",
      }), { status: 201 })
    );
    const client = createWherebyVideoClient({
      apiKey: "whereby-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(wherebyVideoOperationHandlers["video.meeting.create"](
      { endDate: "2099-07-01T10:01:32.041Z" },
      { client },
    )).resolves.toMatchObject({ meetingId: "meeting_123" });
  });
});
