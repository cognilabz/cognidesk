import { describe, expect, it, vi } from "vitest";
import {
  createRingCentralContactCenterClient,
  createRingCentralContactCenterIntegration,
  createRingCentralContactCenterIntegrationOperationHandlers,
  createRingCentralContactCenterOperationHandlers,
  ringCentralContactCenterManifest,
} from "../src/index.js";
import type { RingCentralSdkClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-ringcentral", () => {
  it("keeps the manifest metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.ringCentralContactCenterManifest.packageName)
      .toBe("@cognidesk/integration-contact-center-ringcentral");
  });

  it("binds manifest operations to injected RingCentral SDK-backed client handlers", () => {
    const contactCenterClient = {
      sdk: fakeRingCentralSdk(),
      createHandoff: vi.fn(async () => ({ ok: true })),
      readiness: vi.fn(async () => ({ ok: true })),
    };
    const integration = createRingCentralContactCenterIntegration({
      server: "https://platform.ringcentral.com",
      contactCenterClient,
      defaultHandoffPath: "/restapi/ringcx/handoff",
      readinessPath: "/restapi/v1.0/account/~/extension/~",
    });

    expect(integration.manifest.operations.map((operation) => operation.alias).sort())
      .toEqual([...integration.operationAliases].sort());
    expect(integration.contactCenterClient).toBe(contactCenterClient);
  });

  it("routes configured handoff and readiness through @ringcentral/sdk methods", async () => {
    const authSetData = vi.fn(async () => undefined);
    const sdk = fakeRingCentralSdk({
      authSetData,
      post: vi.fn(async () => jsonResponse({ id: "handoff-1" })),
      get: vi.fn(async () => jsonResponse({ id: "extension-1" })),
    });
    const client = createRingCentralContactCenterClient({
      server: "https://platform.ringcentral.com",
      sdk,
      accessToken: "ringcentral-access-token",
      defaultHandoffPath: "/restapi/ringcx/handoff",
      readinessPath: "/restapi/v1.0/account/~/extension/~",
    });

    await expect(client.createHandoff({ payload: { conversationId: "conversation-1" } }))
      .resolves.toEqual({ id: "handoff-1" });
    await expect(client.readiness()).resolves.toEqual({ id: "extension-1" });

    expect(authSetData).toHaveBeenCalledWith({
      access_token: "ringcentral-access-token",
      token_type: "bearer",
    });
    expect(sdk.post).toHaveBeenCalledWith("/restapi/ringcx/handoff", { conversationId: "conversation-1" });
    expect(sdk.get).toHaveBeenCalledWith("/restapi/v1.0/account/~/extension/~");
    expect(client.sdk).toBe(sdk);
  });

  it("exports operation handlers that delegate to the injected SDK-backed client", async () => {
    const contactCenterClient = {
      sdk: fakeRingCentralSdk(),
      createHandoff: vi.fn(async () => ({ id: "handoff-1" })),
      readiness: vi.fn(async () => ({ ok: true })),
    };
    const handlers = createRingCentralContactCenterOperationHandlers({
      server: "https://platform.ringcentral.com",
      contactCenterClient,
      defaultHandoffPath: "/restapi/ringcx/handoff",
      readinessPath: "/restapi/v1.0/account/~/extension/~",
    });

    await handlers["contact-center.handoff.request"]({ payload: { conversationId: "conversation-1" } });
    await handlers["contact-center.handoff.status.read"]();

    expect(createRingCentralContactCenterIntegrationOperationHandlers).toBe(createRingCentralContactCenterOperationHandlers);
    expect(contactCenterClient.createHandoff).toHaveBeenCalledWith({ payload: { conversationId: "conversation-1" } });
    expect(contactCenterClient.readiness).toHaveBeenCalledWith();
  });

  it("declares SDK plus reviewed-slice coverage rather than generated full-provider coverage", () => {
    expect(ringCentralContactCenterManifest.coverage.scope).toBe("support-workflow-subset");
    expect(ringCentralContactCenterManifest.metadata).toMatchObject({
      implementation: {
        strategy: "official-sdk-backed-client-plus-reviewed-slices",
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

function fakeRingCentralSdk(input: {
  authSetData?: (data: unknown) => Promise<void>;
  get?: RingCentralSdkClient["get"];
  post?: RingCentralSdkClient["post"];
} = {}): RingCentralSdkClient {
  return {
    platform: vi.fn(() => ({
      auth: () => ({
        setData: input.authSetData ?? vi.fn(async () => undefined),
      }),
    })) as RingCentralSdkClient["platform"],
    get: input.get ?? vi.fn(async () => ({ ok: true })),
    post: input.post ?? vi.fn(async () => ({ ok: true })),
  };
}

function jsonResponse(body: unknown) {
  return {
    json: vi.fn(async () => body),
  };
}
