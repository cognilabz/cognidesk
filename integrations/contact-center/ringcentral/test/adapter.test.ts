import { describe, expect, it, vi } from "vitest";
import {
  createRingCentralContactCenterClient,
  createRingCentralContactCenterIntegration,
  ringCentralContactCenterManifest,
} from "../src/index.js";

describe("@cognidesk/integration-contact-center-ringcentral", () => {
  it("keeps the manifest metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.ringCentralContactCenterManifest.packageName)
      .toBe("@cognidesk/integration-contact-center-ringcentral");
  });

  it("binds manifest operations to injected RingCentral raw-client handlers", async () => {
    const rawClient = {
      platform: {},
      request: vi.fn(async () => ({ ok: true })),
    };
    const integration = await createRingCentralContactCenterIntegration({
      server: "https://platform.ringcentral.com",
      rawClient,
      defaultHandoffPath: "/restapi/ringcx/handoff",
      readinessPath: "/restapi/v1.0/account/~/extension/~",
    });

    expect(integration.manifest.operations.map((operation) => operation.alias).sort())
      .toEqual([...integration.operationAliases].sort());
    expect(integration.rawClient).toBe(rawClient);
  });

  it("routes configured handoff and readiness through the RingCentral raw client", async () => {
    const rawClient = {
      platform: {},
      request: vi.fn(async () => ({ ok: true })),
    };
    const client = await createRingCentralContactCenterClient({
      server: "https://platform.ringcentral.com",
      rawClient,
      defaultHandoffPath: "/restapi/ringcx/handoff",
      readinessPath: "/restapi/v1.0/account/~/extension/~",
    });

    await client.createHandoff({ payload: { conversationId: "conversation-1" } });
    await client.readiness();

    expect(rawClient.request).toHaveBeenNthCalledWith(1, "POST", "/restapi/ringcx/handoff", {
      body: { conversationId: "conversation-1" },
    });
    expect(rawClient.request).toHaveBeenNthCalledWith(2, "GET", "/restapi/v1.0/account/~/extension/~");
  });

  it("declares SDK plus reviewed-slice coverage rather than generated full-provider coverage", () => {
    expect(ringCentralContactCenterManifest.coverage.scope).toBe("support-workflow-subset");
    expect(ringCentralContactCenterManifest.metadata).toMatchObject({
      implementation: {
        strategy: "official-sdk-plus-reviewed-slices",
        sdkPackages: ["@ringcentral/sdk"],
      },
    });
  });

  it("matches supported contact-center category aliases with normalized operation objects", () => {
    expect(ringCentralContactCenterManifest.metadata?.categoryProfile).toMatchObject({
      id: "contact-center",
      matchedOperations: expect.arrayContaining([
        "contact-center.handoff.request",
        "contact-center.handoff.status.read",
      ]),
    });
    expect(ringCentralContactCenterManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((providerObject) => providerObject.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "ringcxHandoff",
      "ringcentralReadiness",
    ]));
  });
});
