import { describe, expect, it, vi } from "vitest";
import {
  amazonConnectContactCenterManifest,
  createAmazonConnectContactCenterClient,
  createAmazonConnectContactCenterIntegration,
} from "../src/index.js";

describe("@cognidesk/integration-contact-center-amazon-connect", () => {
  it("keeps the manifest metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.amazonConnectContactCenterManifest.packageName)
      .toBe("@cognidesk/integration-contact-center-amazon-connect");
  });

  it("binds manifest operations to AWS SDK v3-backed handlers", () => {
    const connectClient = { send: vi.fn() };
    const participantClient = { send: vi.fn() };
    const integration = createAmazonConnectContactCenterIntegration({
      region: "eu-central-1",
      instanceId: "instance-1",
      connectClient: connectClient as never,
      participantClient: participantClient as never,
    });

    expect(integration.manifest.operations.map((operation) => operation.alias).sort())
      .toEqual([...integration.operationAliases].sort());
    expect(integration.rawClient).toMatchObject({
      connect: connectClient,
      participant: participantClient,
    });
  });

  it("starts task contacts through the injected AWS SDK client", async () => {
    const connectClient = {
      send: vi.fn(async (command: { input: unknown }) => ({ ContactId: "contact-1", input: command.input })),
    };
    const client = createAmazonConnectContactCenterClient({
      region: "eu-central-1",
      instanceId: "instance-1",
      connectClient: connectClient as never,
      participantClient: { send: vi.fn() } as never,
    });

    await expect(client.startTaskContact({
      name: "Support handoff",
      contactFlowId: "flow-1",
      attributes: { conversationId: "conversation-1" },
    })).resolves.toMatchObject({ contactId: "contact-1" });

    expect(connectClient.send).toHaveBeenCalledTimes(1);
    expect((connectClient.send.mock.calls[0]?.[0] as { input: Record<string, unknown> }).input)
      .toMatchObject({
        InstanceId: "instance-1",
        Name: "Support handoff",
        ContactFlowId: "flow-1",
        Attributes: { conversationId: "conversation-1" },
      });
  });

  it("declares SDK-backed coverage rather than generated full-provider coverage", () => {
    expect(amazonConnectContactCenterManifest.coverage.scope).toBe("support-workflow-subset");
    expect(amazonConnectContactCenterManifest.metadata).toMatchObject({
      implementation: {
        strategy: "official-sdk",
        sdkPackages: ["@aws-sdk/client-connect", "@aws-sdk/client-connectparticipant"],
      },
    });
  });

  it("matches supported contact-center category aliases with normalized operation objects", () => {
    expect(amazonConnectContactCenterManifest.metadata?.categoryProfile).toMatchObject({
      id: "contact-center",
      matchedOperations: expect.arrayContaining([
        "contactCenter.handoff.request",
        "contactCenter.task.create",
        "contactCenter.contact.start",
        "contactCenter.transfer.request",
        "contactCenter.transcript.read",
      ]),
    });
    expect(amazonConnectContactCenterManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((providerObject) => providerObject.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "amazonConnectTaskContact",
      "amazonConnectChatContact",
      "amazonConnectContactTransfer",
      "amazonConnectChatTranscript",
    ]));
  });
});
