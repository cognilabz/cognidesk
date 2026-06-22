import { describe, expect, it, vi } from "vitest";
import { createZoomVideoClient, zoomVideoIntegration, zoomVideoOperationHandlers } from "../src/index.js";

describe("@cognidesk/integration-video-zoom package boundary", () => {
  it("binds every manifest operation to an executable handler", () => {
    expect(Object.keys(zoomVideoIntegration.operations).sort())
      .toEqual(zoomVideoIntegration.manifest.operations.map((operation) => operation.alias).sort());
  });

  it("imports the manifest-only entry without importing provider clients", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(manifestModule.zoomVideoProviderManifest.packageName).toBe("@cognidesk/integration-video-zoom");
    expect(manifestModule).not.toHaveProperty("createZoomVideoClient");
    expect(manifestModule).not.toHaveProperty("createZoomMeetingsApiGeneratedClient");
  });

  it("executes normalized meeting creation through the integration handler", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: 123, topic: "Support video" }), { status: 201 })
    );
    const client = createZoomVideoClient({
      accessToken: "zoom-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(zoomVideoOperationHandlers["video.meeting.create"](
      { topic: "Support video", type: 2 },
      { client },
    )).resolves.toMatchObject({ id: 123 });
  });
});
