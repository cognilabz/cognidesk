import { describe, expect, it, vi } from "vitest";
import type { WherebyVideoProviderClient } from "../src/contracts.js";

describe("@cognidesk/integration-video-whereby package boundary", () => {
  it("imports the manifest-only entry without importing provider clients", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(manifestModule.wherebyVideoProviderManifest.packageName).toBe("@cognidesk/integration-video-whereby");
    expect(manifestModule).not.toHaveProperty("createWherebyVideoClient");
    expect(manifestModule).not.toHaveProperty("createWherebyFullApiGeneratedClient");
  });

  it("binds every manifest operation to an executable handler", async () => {
    const { wherebyVideoIntegration } = await import("../src/integration.js");

    expect(Object.keys(wherebyVideoIntegration.operations).sort())
      .toEqual(wherebyVideoIntegration.manifest.operations.map((operation) => operation.alias).sort());
  });

  it("executes normalized meeting creation through the integration handler", async () => {
    const { createWherebyVideoClient } = await import("../src/client.js");
    const { wherebyVideoOperationHandlers } = await import("../src/integration.js");
    const requestOperation = vi.fn(async () => ({
      meetingId: "meeting_123",
      roomUrl: "https://example.whereby.com/support",
      endDate: "2099-07-01T10:01:32.041Z",
    }));
    const providerClient = {
      requestOperation: requestOperation as unknown as WherebyVideoProviderClient["requestOperation"],
    };
    const client = createWherebyVideoClient({ providerClient });

    await expect(wherebyVideoOperationHandlers["video.meeting.create"](
      { endDate: "2099-07-01T10:01:32.041Z" },
      { client },
    )).resolves.toMatchObject({ meetingId: "meeting_123" });
    expect(requestOperation).toHaveBeenCalledWith(
      "POST /meetings",
      { body: { endDate: "2099-07-01T10:01:32.041Z" } },
    );
  });
});
