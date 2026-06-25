import { describe, expect, it, vi } from "vitest";
import {
  createRingCentralContactCenterClient,
  createRingCentralContactCenterIntegration,
  createRingCentralContactCenterIntegrationOperationHandlers,
  createRingCentralContactCenterOperationHandlers,
  ringCentralContactCenterManifest,
} from "../src/index.js";
import type { RingCentralSdkClient, RingCentralSdkPlatform } from "../src/index.js";

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
    const platform = fakeRingCentralSdkPlatform({
      authSetData,
      post: vi.fn(async () => jsonResponse({ id: "handoff-1" })),
      get: vi.fn(async () => jsonResponse({ id: "extension-1" })),
    });
    const sdk = fakeRingCentralSdk({ platform });
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
    expect(platform.post).toHaveBeenCalledWith("/restapi/ringcx/handoff", { conversationId: "conversation-1" });
    expect(platform.get).toHaveBeenCalledWith("/restapi/v1.0/account/~/extension/~");
    expect(sdk.platform).toHaveBeenCalledTimes(1);
    expect(client.sdk).toBe(sdk);
  });

  it("accepts injected SDK clients without requiring server", async () => {
    const platform = fakeRingCentralSdkPlatform({
      post: vi.fn(async () => jsonResponse({ id: "handoff-1" })),
      get: vi.fn(async () => jsonResponse({ id: "extension-1" })),
    });
    const sdk = fakeRingCentralSdk({ platform });
    const client = createRingCentralContactCenterClient({
      sdk,
      defaultHandoffPath: "/restapi/ringcx/handoff",
      readinessPath: "/restapi/v1.0/account/~/extension/~",
    });

    await expect(client.createHandoff({ payload: { conversationId: "conversation-1" } }))
      .resolves.toEqual({ id: "handoff-1" });
    expect(platform.post).toHaveBeenCalledWith("/restapi/ringcx/handoff", { conversationId: "conversation-1" });
  });

  it("requires server when constructing a RingCentral SDK client", () => {
    expect(() => createRingCentralContactCenterClient({
      defaultHandoffPath: "/restapi/ringcx/handoff",
    } as never)).toThrow(/server is required/);
  });

  it("retries SDK authentication after a transient setup failure", async () => {
    const authSetData = vi.fn()
      .mockRejectedValueOnce(new Error("temporary auth failure"))
      .mockResolvedValueOnce(undefined);
    const platform = fakeRingCentralSdkPlatform({
      authSetData,
      post: vi.fn(async () => jsonResponse({ id: "handoff-1" })),
    });
    const sdk = fakeRingCentralSdk({ platform });
    const client = createRingCentralContactCenterClient({
      sdk,
      accessToken: "ringcentral-access-token",
      defaultHandoffPath: "/restapi/ringcx/handoff",
    });

    await expect(client.createHandoff({ payload: { conversationId: "conversation-1" } }))
      .rejects.toThrow(/temporary auth failure/);
    await expect(client.createHandoff({ payload: { conversationId: "conversation-1" } }))
      .resolves.toEqual({ id: "handoff-1" });

    expect(authSetData).toHaveBeenCalledTimes(2);
    expect(platform.post).toHaveBeenCalledTimes(1);
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
        sdkRuntimeSurface: "SDK.platform()",
        operationMethodMap: {
          "contact-center.handoff.request": "SDK.platform().post",
          "contact-center.handoff.status.read": "SDK.platform().get",
        },
      },
    });
  });

  it("matches supported contact-center category aliases with normalized operation objects", () => {
    expect(ringCentralContactCenterManifest.metadata?.categoryProfile).toMatchObject({
      id: "contact-center",
    });
    expect(ringCentralContactCenterManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((providerObject) => providerObject.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "ringcxHandoff",
      "ringcentralReadiness",
    ]));
    expect(ringCentralContactCenterManifest.operations).toEqual(expect.arrayContaining([
      expect.objectContaining({
        alias: "contact-center.handoff.request",
        capability: "handoff",
        providerOperation: "SDK.platform().post",
        providerObject: "ringcxHandoff",
      }),
      expect.objectContaining({
        alias: "contact-center.handoff.status.read",
        capability: "read-provider-object",
        providerOperation: "SDK.platform().get",
        providerObject: "ringcentralReadiness",
      }),
    ]));
  });
});

function fakeRingCentralSdk(input: {
  platform?: RingCentralSdkPlatform;
} = {}): RingCentralSdkClient {
  const platform = input.platform ?? fakeRingCentralSdkPlatform();
  return {
    platform: vi.fn(() => platform),
  };
}

function fakeRingCentralSdkPlatform(input: {
  authSetData?: (data: unknown) => Promise<void>;
  get?: RingCentralSdkPlatform["get"];
  post?: RingCentralSdkPlatform["post"];
} = {}): RingCentralSdkPlatform {
  const auth = vi.fn(() => ({
    setData: input.authSetData ?? vi.fn(async () => undefined),
  })) as RingCentralSdkPlatform["auth"];

  return {
    auth,
    get: input.get ?? vi.fn(async () => ({ ok: true })),
    post: input.post ?? vi.fn(async () => ({ ok: true })),
  };
}

function jsonResponse(body: unknown) {
  return {
    json: vi.fn(async () => body),
  };
}
