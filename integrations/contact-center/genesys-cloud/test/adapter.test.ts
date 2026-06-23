import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import {
  createGenesysCloudContactCenterClient,
  createGenesysCloudContactCenterIntegration,
  genesysCloudContactCenterManifest,
  verifyGenesysCloudOpenMessagingWebhookSignature,
} from "../src/index.js";

describe("@cognidesk/integration-contact-center-genesys-cloud", () => {
  it("keeps the manifest metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.genesysCloudContactCenterManifest.packageName)
      .toBe("@cognidesk/integration-contact-center-genesys-cloud");
  });

  it("binds manifest operations to injected SDK raw-client handlers", async () => {
    const rawClient = {
      apiClient: {},
      request: vi.fn(async () => ({ ok: true })),
    };
    const integration = await createGenesysCloudContactCenterIntegration({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "token",
      rawClient,
    });

    expect(integration.manifest.operations.map((operation) => operation.alias).sort())
      .toEqual([...integration.operationAliases].sort());
    expect(integration.rawClient).toBe(rawClient);
  });

  it("routes normalized callback and queue operations through the SDK raw client", async () => {
    const rawClient = {
      apiClient: {},
      request: vi.fn(async () => ({ ok: true })),
    };
    const client = await createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "token",
      rawClient,
    });

    await client.createCallback({ callback: { queueId: "queue-1" } });
    await client.listQueues({ pageSize: 25, name: "Escalation" });

    expect(rawClient.request).toHaveBeenNthCalledWith(1, "POST", "/api/v2/conversations/callbacks", {
      body: { queueId: "queue-1" },
    });
    expect(rawClient.request).toHaveBeenNthCalledWith(2, "GET", "/api/v2/routing/queues", {
      query: { pageSize: 25, pageNumber: undefined, name: "Escalation" },
    });
  });

  it("verifies Open Messaging webhook signatures locally", () => {
    const secret = "secret";
    const body = JSON.stringify({ id: "message-1" });
    const digest = createHmac("sha256", secret).update(body).digest("hex");
    expect(verifyGenesysCloudOpenMessagingWebhookSignature({
      secret,
      body,
      signature: `sha256=${digest}`,
    })).toBe(true);
  });

  it("declares SDK-backed coverage", () => {
    expect(genesysCloudContactCenterManifest.coverage.scope).toBe("support-workflow-subset");
    expect(genesysCloudContactCenterManifest.metadata).toMatchObject({
      implementation: {
        strategy: "official-sdk",
        sdkPackages: ["purecloud-platform-client-v2"],
      },
    });
  });

  it("matches supported contact-center category aliases with normalized operation objects", () => {
    expect(genesysCloudContactCenterManifest.metadata?.categoryProfile).toMatchObject({
      id: "contact-center",
      matchedOperations: expect.arrayContaining([
        "contactCenter.handoff.request",
        "contactCenter.callback.schedule",
        "contactCenter.contact.read",
        "contactCenter.queue.list",
      ]),
    });
    expect(genesysCloudContactCenterManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((providerObject) => providerObject.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "genesysCloudCallback",
      "genesysCloudOpenMessage",
      "genesysCloudConversation",
      "genesysCloudQueue",
    ]));
  });
});
