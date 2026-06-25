import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createRcsCardMessage,
  createRcsMediaMessage,
  createRcsMessagingClient,
  createRcsMessagingLiveChecks,
  createRcsTextMessage,
  parseRcsWebhook,
  rcsMessagingCredentialStatuses,
  rcsMessagingProviderManifest,
  validateRcsWebhookSignature,
  verifyRcsWebhookChallenge,
  type RcsMessagingProviderClient,
} from "../src/index.js";

describe("@cognidesk/integration-messaging-rcs", () => {
  it("exports an official provider manifest for RCS messaging", () => {
    expect(rcsMessagingProviderManifest).toMatchObject({
      id: "messaging.rcs",
      packageName: "@cognidesk/integration-messaging-rcs",
      category: "messaging",
      provider: "rcs",
      trustLevel: "official",
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(rcsMessagingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "media",
        "read-provider-object",
        "rcs.agent-events",
        "rcs.webhook-signature",
      ]));
    expect(rcsMessagingProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual(["rcs-agent", "rcs-provider-client", "rcs-webhook-client-token"]);
    expect(rcsMessagingProviderManifest.coverage.notes.join(" "))
      .toContain("not full RCS for Business API coverage");
    expect(rcsMessagingProviderManifest.coverage.notes.join(" "))
      .toContain("built-in provider REST adapter");
    expect(rcsMessagingProviderManifest.coverage.notes.join(" "))
      .toContain("Launch and verification coverage is read-only readiness");
    expect(rcsMessagingProviderManifest.metadata?.apiCoverage).toMatchObject({
      operationCatalog: "package:src/selected-operations.ts",
      generatedFromOfficialSpec: false,
      documentedOperationCount: 38,
      selectedOperationCount: 8,
      implementedOperationCount: 8,
      fullProviderApi: false,
    });
    expect(rcsMessagingProviderManifest.metadata).toMatchObject({
      implementationStrategy: "provider-rest-adapter",
      providerClient: {
        interface: "RcsMessagingProviderClient",
        defaultClient: "provider-rest-adapter-when-configured",
      },
      implementation: {
        strategy: "provider-rest-adapter",
        defaultFetchClient: "provider-rest-adapter",
        failClosedWithoutProviderClient: false,
      },
    });
    expect(rcsMessagingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create",
        "https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks",
        "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create",
        "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch",
        "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification",
      ]));
    expect(rcsMessagingProviderManifest.limitations.join(" "))
      .toContain("provider approval");
    expect(rcsMessagingProviderManifest.limitations.join(" "))
      .toContain("Recipient reachability and feature support depend");
    expect(rcsMessagingProviderManifest.limitations.join(" "))
      .toContain("built-in REST adapter requires accessToken");
    expect(rcsMessagingProviderManifest.limitations.join(" "))
      .toContain("file-size, caching, and approval requirements");
    const receive = rcsMessagingProviderManifest.capabilities.find((capability) => capability.capability === "receive");
    expect(receive?.description).toContain("webhook messages, delivery receipts, and user events");
    const readiness = rcsMessagingProviderManifest.capabilities.find((capability) =>
      capability.capability === "read-provider-object"
    );
    expect(readiness?.providerObjects).toEqual(expect.arrayContaining([
      { kind: "rcsAgentLaunch", label: "RCS Agent Launch" },
      { kind: "rcsAgentVerification", label: "RCS Agent Verification" },
    ]));
  });

  it("sends text messages through the host-injected RCS provider client", async () => {
    const sendMessage = vi.fn(async (input: Parameters<RcsMessagingProviderClient["sendMessage"]>[0]) => input.message);
    const client = createRcsMessagingClient({
      providerClient: createProviderClient({ sendMessage }),
    });

    const message = await client.sendText({
      phoneNumber: "+15550100",
      messageId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d40",
      text: "Your reset link is ready.",
      messageTrafficType: "TRANSACTION",
      ttl: "300s",
    });

    expect(message.messageTrafficType).toBe("TRANSACTION");
    expect(sendMessage).toHaveBeenCalledWith({
      phoneNumber: "+15550100",
      messageId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d40",
      message: {
        contentMessage: { text: "Your reset link is ready." },
        messageTrafficType: "TRANSACTION",
        ttl: "300s",
      },
    });
  });

  it("builds and sends media and card messages without policy defaults", async () => {
    const sendMessage = vi.fn(async (input: Parameters<RcsMessagingProviderClient["sendMessage"]>[0]) => input.message);
    const client = createRcsMessagingClient({
      providerClient: createProviderClient({ sendMessage }),
    });

    const media = createRcsMediaMessage({
      contentInfo: {
        fileUrl: "https://example.test/boarding-pass.pdf",
        thumbnailUrl: "https://example.test/boarding-pass.png",
      },
      messageTrafficType: "TRANSACTION",
    });
    const card = createRcsCardMessage({
      richCard: {
        standaloneCard: {
          cardContent: {
            title: "Flight update",
            description: "Gate changed.",
            media: { contentInfo: { fileUrl: "https://example.test/gate.png" } },
          },
        },
      },
    });

    await client.sendMedia({
      phoneNumber: "+15550100",
      messageId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d41",
      contentInfo: media.contentMessage?.contentInfo ?? {
        fileUrl: "https://example.test/boarding-pass.pdf",
        thumbnailUrl: "https://example.test/boarding-pass.png",
      },
      messageTrafficType: "TRANSACTION",
    });
    await client.sendCard({
      phoneNumber: "+15550100",
      messageId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d42",
      richCard: card.contentMessage?.richCard ?? {},
    });

    expect(sendMessage).toHaveBeenNthCalledWith(
      1,
      {
        phoneNumber: "+15550100",
        messageId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d41",
        message: {
          contentMessage: {
            contentInfo: {
              fileUrl: "https://example.test/boarding-pass.pdf",
              thumbnailUrl: "https://example.test/boarding-pass.png",
            },
          },
          messageTrafficType: "TRANSACTION",
        },
      },
    );
  });

  it("uploads RCS files by URL metadata or binary media", async () => {
    const createFile = vi.fn(async () => ({ name: "files/url-media" }));
    const uploadFile = vi.fn(async () => ({ name: "files/uploaded-media" }));
    const client = createRcsMessagingClient({
      providerClient: createProviderClient({ createFile, uploadFile }),
    });

    await expect(client.createFile({
      fileUrl: "https://example.test/receipt.pdf",
      thumbnailUrl: "https://example.test/receipt.png",
    })).resolves.toMatchObject({ name: "files/url-media" });
    await expect(client.uploadFile({
      body: "bytes",
      contentType: "application/pdf",
    })).resolves.toMatchObject({ name: "files/uploaded-media" });

    expect(createFile).toHaveBeenCalledWith({
      fileUrl: "https://example.test/receipt.pdf",
      thumbnailUrl: "https://example.test/receipt.png",
    });
    expect(uploadFile).toHaveBeenCalledWith({
      body: "bytes",
      contentType: "application/pdf",
    });
  });

  it("sends read receipts, typing indicators, capabilities, and agent readiness requests", async () => {
    const sendAgentEvent = vi.fn(async (input: Parameters<RcsMessagingProviderClient["sendAgentEvent"]>[0]) => input.event);
    const getCapabilities = vi.fn(async () => ({ features: ["RICHCARD_STANDALONE"], carrier: "google-fi" }));
    const getAgent = vi.fn(async () => ({ name: "brands/brand-1/agents/agent-1", displayName: "Example Support" }));
    const getAgentLaunch = vi.fn(async () => ({ launchState: "LAUNCHED" }));
    const getAgentVerification = vi.fn(async () => ({ verificationState: "VERIFIED" }));
    const client = createRcsMessagingClient({
      agentName: "brands/brand-1/agents/agent-1",
      providerClient: createProviderClient({
        sendAgentEvent,
        getCapabilities,
        getAgent,
        getAgentLaunch,
        getAgentVerification,
      }),
    });

    await expect(client.sendReadReceipt({
      phoneNumber: "+15550100",
      messageId: "user-message-id",
      eventId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d43",
    })).resolves.toMatchObject({ eventType: "READ" });
    await expect(client.sendTyping({ phoneNumber: "+15550100" })).resolves.toMatchObject({ eventType: "IS_TYPING" });
    await expect(client.getCapabilities({
      phoneNumber: "+15550100",
      requestId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d44",
    })).resolves.toMatchObject({ features: ["RICHCARD_STANDALONE"] });
    await expect(client.getAgent()).resolves.toMatchObject({ displayName: "Example Support" });
    await expect(client.getAgentLaunch()).resolves.toMatchObject({ launchState: "LAUNCHED" });
    await expect(client.getAgentVerification()).resolves.toMatchObject({ verificationState: "VERIFIED" });

    expect(sendAgentEvent).toHaveBeenNthCalledWith(1, {
      phoneNumber: "+15550100",
      eventId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d43",
      event: { eventType: "READ", messageId: "user-message-id" },
    });
    expect(sendAgentEvent).toHaveBeenNthCalledWith(2, {
      phoneNumber: "+15550100",
      event: { eventType: "IS_TYPING" },
    });
    expect(getCapabilities).toHaveBeenCalledWith({
      phoneNumber: "+15550100",
      requestId: "2f6f6a36-97b5-4b4e-a2f4-4bc6366f7d44",
    });
    expect(getAgent).toHaveBeenCalledWith("brands/brand-1/agents/agent-1");
    expect(getAgentLaunch).toHaveBeenCalledWith("brands/brand-1/agents/agent-1");
    expect(getAgentVerification).toHaveBeenCalledWith("brands/brand-1/agents/agent-1");
  });

  it("ships a default REST adapter but fails closed when credentials are missing", async () => {
    const client = createRcsMessagingClient({
      agentId: "welcome-bot",
      agentName: "brands/brand-1/agents/agent-1",
    });

    await expect(client.getAgent())
      .rejects.toThrow("RCS built-in REST adapter requires accessToken");

    const [agentCheck] = createRcsMessagingLiveChecks({
      agentId: "welcome-bot",
      agentName: "brands/brand-1/agents/agent-1",
    });
    if (!agentCheck) throw new Error("Expected RCS agent live check to be registered.");
    await expect(agentCheck.run({})).rejects.toThrow("RCS built-in REST adapter requires accessToken");
  });

  it("validates, parses, and classifies signed RCS webhooks", async () => {
    const payload = JSON.stringify({
      agentId: "welcome-bot",
      senderPhoneNumber: "+15550100",
      messageId: "msg-1",
      text: "Help",
    });
    const encoded = Buffer.from(payload).toString("base64");
    const clientToken = "client-token";
    const signature = signRcs(clientToken, payload);
    const request = new Request("https://example.test/rcs/webhook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-signature": signature,
      },
      body: JSON.stringify({ message: { body: encoded } }),
    });

    expect(validateRcsWebhookSignature({
      clientToken,
      encodedMessageBody: encoded,
      signature,
    })).toBe(true);
    const parsed = await parseRcsWebhook(request, { clientToken });
    expect(parsed.kind).toBe("message");
    expect(parsed.payload).toMatchObject({ text: "Help", messageId: "msg-1" });
  });

  it("fails closed when RCS webhook verification is required", async () => {
    const payload = JSON.stringify({ eventType: "READ", messageId: "agent-message-id" });
    const request = new Request("https://example.test/rcs/webhook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: { body: Buffer.from(payload).toString("base64") } }),
    });

    await expect(parseRcsWebhook(request, { requireSignature: true }))
      .rejects.toThrow("RCS webhook verification failed");
    expect(verifyRcsWebhookChallenge({
      clientToken: "client-token",
      secret: "challenge-secret",
      expectedClientToken: "client-token",
    })).toBe("challenge-secret");
  });

  it("reports live conformance as credential-blocked until RCS credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: rcsMessagingProviderManifest,
      channels: [{
        id: "messaging",
        channel: "messaging",
        providerPackageIds: [rcsMessagingProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "media", "read-provider-object"],
      }],
      credentialStatuses: rcsMessagingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createRcsMessagingLiveChecks({
          agentId: "missing",
          agentName: "brands/brand-1/agents/agent-1",
          client: {
            async getAgent() {
              return { name: "brands/brand-1/agents/agent-1" };
            },
            async getAgentLaunch() {
              return { launchState: "LAUNCHED" };
            },
            async getAgentVerification() {
              return { verificationState: "VERIFIED" };
            },
            async getCapabilities() {
              return { features: ["RICHCARD_STANDALONE"] };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.agent" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes live conformance when mocked RCS readiness checks succeed", async () => {
    const result = await runProviderConformance({
      manifest: rcsMessagingProviderManifest,
      channels: [{
        id: "messaging",
        channel: "messaging",
        providerPackageIds: [rcsMessagingProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "media", "read-provider-object"],
      }],
      credentialStatuses: rcsMessagingCredentialStatuses({
        agentId: "welcome-bot",
        agentName: "brands/brand-1/agents/agent-1",
        providerClientConfigured: true,
        webhookClientToken: "configured",
        scopes: [
          "https://www.googleapis.com/auth/rcsbusinessmessaging",
          "https://www.googleapis.com/auth/businesscommunications",
        ],
      }),
      live: {
        enabled: true,
        checks: createRcsMessagingLiveChecks({
          agentId: "welcome-bot",
          agentName: "brands/brand-1/agents/agent-1",
          capabilityPhoneNumber: "+15550100",
          client: {
            async getAgent() {
              return { name: "brands/brand-1/agents/agent-1", displayName: "Example Support" };
            },
            async getAgentLaunch() {
              return { launchState: "LAUNCHED" };
            },
            async getAgentVerification() {
              return { verificationState: "VERIFIED" };
            },
            async getCapabilities() {
              return { features: ["RICHCARD_STANDALONE"], carrier: "google-fi" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.agent",
      status: "passed",
    }));
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.capabilities",
      status: "passed",
    }));
  });
});

function signRcs(clientToken: string, decodedBody: string) {
  return createHmac("sha512", clientToken).update(Buffer.from(decodedBody, "utf8")).digest("base64");
}

function createProviderClient(
  overrides: Partial<RcsMessagingProviderClient> = {},
): RcsMessagingProviderClient {
  return {
    async sendMessage(input) {
      return input.message;
    },
    async sendAgentEvent(input) {
      return input.event;
    },
    async createFile(input) {
      return {
        fileUrl: input.fileUrl,
        ...(input.thumbnailUrl ? { thumbnailUrl: input.thumbnailUrl } : {}),
      };
    },
    async uploadFile() {
      return { name: "files/uploaded-media" };
    },
    async getCapabilities() {
      return { features: ["RICHCARD_STANDALONE"] };
    },
    async getAgent(agentName) {
      return {
        ...(agentName ? { name: agentName } : {}),
      };
    },
    async getAgentLaunch() {
      return {};
    },
    async getAgentVerification() {
      return {};
    },
    ...overrides,
  };
}
