import { describe, expect, it, vi } from "vitest";
import type { ZoomVideoProviderClient } from "../src/index.js";

describe("@cognidesk/integration-video-zoom package boundary", () => {
  it("imports the manifest-only entry without importing provider clients", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(manifestModule.zoomVideoProviderManifest.packageName).toBe("@cognidesk/integration-video-zoom");
    expect(manifestModule).not.toHaveProperty("createZoomVideoClient");
    expect(manifestModule).not.toHaveProperty("createZoomMeetingsApiGeneratedClient");
  });

  it("binds every manifest operation to an executable handler", async () => {
    const { zoomVideoIntegration } = await import("../src/integration.js");

    expect(Object.keys(zoomVideoIntegration.operations).sort())
      .toEqual(zoomVideoIntegration.manifest.operations.map((operation) => operation.alias).sort());
  });

  it("executes meeting creation through the host provider client", async () => {
    const { createZoomVideoClient } = await import("../src/client.js");
    const { zoomVideoOperationHandlers } = await import("../src/integration.js");
    const createMeeting = vi.fn(async () => ({ id: 123, topic: "Support video" }));
    const client = createZoomVideoClient({
      providerClient: createProviderClient({ createMeeting }),
    });

    await expect(zoomVideoOperationHandlers["video.meeting.create"](
      { topic: "Support video", type: 2 },
      { client },
    )).resolves.toMatchObject({ id: 123 });
    expect(createMeeting).toHaveBeenCalledWith({ topic: "Support video", type: 2 });
  });
});

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
