import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createForumCommunityIntegration,
  createForumCommunityLiveChecks,
  createForumCommunityUnavailableClient,
  forumCommunityCredentialStatuses,
  forumCommunityProviderManifest,
  parseForumWebhook,
  type ForumCommunityClient,
  validateForumWebhookSignature,
} from "../src/index.js";

type OperationRunner = (alias: string, input: unknown) => Promise<unknown>;

describe("@cognidesk/integration-community-forum", () => {
  it("exports an official provider manifest for forum community support", () => {
    expect(forumCommunityProviderManifest).toMatchObject({
      id: "community.forum",
      packageName: "@cognidesk/integration-community-forum",
      category: "community",
      provider: "forum",
      trustLevel: "official",
    });
    expect(forumCommunityProviderManifest.name).toBe("Discourse Forum");
    expect(forumCommunityProviderManifest.metadata).toMatchObject({
      concreteProvider: "discourse-compatible-rest-adapter-or-provider-client",
      supportedForumApi: "built-in-discourse-rest-adapter-and-discourse-webhooks",
      implementation: {
        strategy: "no-official-js-ts-sdk-rest-adapter",
        defaultClientPolicy: "provider-rest-adapter-when-configured",
        officialJsSdkAvailable: false,
        verifiedAt: "2026-06-25",
        providerClient: "ForumCommunityProviderClient",
        sdkDecision: {
          result: "no-applicable-official-js-ts-sdk",
          rejectedSdkPackages: expect.arrayContaining([
            expect.objectContaining({
              packageName: "discourse_api",
              ecosystem: "ruby",
            }),
            expect.objectContaining({
              packageName: "discourse-api-sdk",
              ecosystem: "npm",
            }),
            expect.objectContaining({
              packageName: "@discourse/mcp",
              ecosystem: "npm",
            }),
            expect.objectContaining({
              packageName: "discourse-sdk",
              ecosystem: "npm",
            }),
          ]),
        },
      },
      providerClient: {
        interface: "ForumCommunityProviderClient",
        defaultClientPolicy: "provider-rest-adapter-when-configured",
        sdkDecision: {
          result: "no-applicable-official-js-ts-sdk",
        },
      },
      apiCoverage: {
        operationCatalog: "docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json",
        generatedFromOfficialSpec: false,
        officialSpec: "https://docs.discourse.org/openapi.json",
        sourcePathCount: 79,
        sourceOperationCount: 93,
        selectedOperationCount: 5,
        docsOnlyOperationCount: 1,
        implementedOperationCount: 6,
        packageImplementedProviderRestOperationCount: 5,
        providerOperationImplementation: "built-in-provider-rest-adapter",
        fullProviderApi: false,
      },
    });
    expect(forumCommunityProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "create-provider-object",
        "read-provider-object",
        "search-provider-object",
        "community.webhook-signature",
      ]));
    expect(forumCommunityProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(forumCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("built-in Discourse-compatible REST adapter");
    expect(forumCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("No applicable official JavaScript or TypeScript Discourse provider SDK");
    expect(forumCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement broader Discourse administration");
    expect(forumCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("non-Discourse forum APIs");
    expect(forumCommunityProviderManifest.limitations.join(" "))
      .toContain("operation handlers fail closed");
    expect(forumCommunityProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining(["https://docs.discourse.org/"]));
    const descriptions = forumCommunityProviderManifest.capabilities
      .map((capability) => capability.description ?? "")
      .join(" ");
    expect(descriptions).toContain("configured Discourse-compatible REST adapter or provider client");
    expect(descriptions).toContain("current API user readiness record");
    expect(descriptions).toContain("query and pagination controls");
    expect(descriptions).not.toContain("category, tag, and pagination controls");
    expect(descriptions).not.toContain("category, and user records");
    expect(forumCommunityProviderManifest.privacyNotes.join(" "))
      .toContain("category/tag labels present in returned topics");
  });

  it("delegates provider operations to the host-injected forum client", async () => {
    const calls: [string, unknown][] = [];
    const client: ForumCommunityClient = {
      async createTopic(input) {
        calls.push(["createTopic", input]);
        return { id: 101, topic_id: 55 };
      },
      async createReply(input) {
        calls.push(["createReply", input]);
        return { id: 102, topic_id: input.topicId };
      },
      async getTopic(topicId) {
        calls.push(["getTopic", topicId]);
        return { id: topicId, title: "Known issue" };
      },
      async getPost(postId) {
        calls.push(["getPost", postId]);
        return { id: postId, raw: "Body" };
      },
      async search(input) {
        calls.push(["search", input]);
        return { topics: [{ id: 55 }], query: input.query };
      },
      async latest() {
        calls.push(["latest", undefined]);
        return { topics: [] };
      },
      async getCurrentUser() {
        calls.push(["getCurrentUser", undefined]);
        return { id: 1, username: "system" };
      },
    };
    const integration = createForumCommunityIntegration({ client });
    const run = integration.run as unknown as OperationRunner;

    await expect(run("forum.topic.create", {
      title: "Known issue",
      raw: "We are investigating.",
      category: 7,
      tags: ["status"],
    })).resolves.toMatchObject({ id: 101 });
    await expect(run("forum.reply.create", {
      topicId: 55,
      raw: "Can you share logs?",
      replyToPostNumber: 1,
    })).resolves.toMatchObject({ id: 102 });
    await expect(run("forum.topic.read", { topicId: 55 })).resolves.toMatchObject({ id: 55 });
    await expect(run("forum.post.read", { postId: 101 })).resolves.toMatchObject({ id: 101 });
    await expect(run("forum.search", { query: "reset password", page: 2 }))
      .resolves.toMatchObject({ topics: [{ id: 55 }] });

    expect(calls).toEqual([
      ["createTopic", { title: "Known issue", raw: "We are investigating.", category: 7, tags: ["status"] }],
      ["createReply", { topicId: 55, raw: "Can you share logs?", replyToPostNumber: 1 }],
      ["getTopic", 55],
      ["getPost", 101],
      ["search", { query: "reset password", page: 2 }],
    ]);
  });

  it("fails closed instead of performing default provider REST operations", async () => {
    const client = createForumCommunityUnavailableClient("Host forum client missing.");

    await expect(client.search({ query: "reset password" })).rejects.toThrow("Host forum client missing.");
  });

  it("validates and parses signed forum webhooks", async () => {
    const rawBody = JSON.stringify({ post: { id: 101, raw: "I need help" } });
    const secret = "forum-secret";
    const signature = `sha256=${createHmac("sha256", secret).update(rawBody).digest("hex")}`;
    const request = new Request("https://example.test/forum", {
      method: "POST",
      headers: {
        "x-discourse-event": "post_created",
        "x-discourse-event-type": "post",
        "x-discourse-event-signature": signature,
      },
      body: rawBody,
    });

    expect(validateForumWebhookSignature({ rawBody, signature, secret })).toBe(true);
    await expect(parseForumWebhook(request, { secret })).resolves.toMatchObject({
      event: "post_created",
      eventType: "post",
      post: { id: 101 },
    });
  });

  it("fails closed when signed webhook verification is required", async () => {
    const request = new Request("https://example.test/forum", {
      method: "POST",
      headers: { "x-discourse-event-signature": "sha256=bad" },
      body: JSON.stringify({ ping: true }),
    });

    await expect(parseForumWebhook(request, {
      secret: "forum-secret",
      requireSignature: true,
    })).rejects.toThrow("Forum webhook signature validation failed.");
  });

  it("reports conformance as credential-blocked until forum credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: forumCommunityProviderManifest,
      expectedPackageName: "@cognidesk/integration-community-forum",
      channels: [{
        id: "community",
        channel: "community",
        providerPackageIds: [forumCommunityProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "create-provider-object", "read-provider-object", "search-provider-object", "community.webhook-signature"],
      }],
      credentialStatuses: forumCommunityCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createForumCommunityLiveChecks({
          client: {
            async getCurrentUser() {
              return { id: 1, username: "system" };
            },
            async latest() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.current-user" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when forum readiness is configured", async () => {
    const result = await runProviderConformance({
      manifest: forumCommunityProviderManifest,
      expectedPackageName: "@cognidesk/integration-community-forum",
      channels: [{
        id: "community",
        channel: "community",
        providerPackageIds: [forumCommunityProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "create-provider-object", "read-provider-object", "search-provider-object", "community.webhook-signature"],
      }],
      credentialStatuses: forumCommunityCredentialStatuses({
        baseUrl: "https://community.example.test",
        apiKeyConfigured: true,
        apiUsername: "system",
        webhookSecretConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createForumCommunityLiveChecks({
          client: {
            async getCurrentUser() {
              return { id: 1, username: "system" };
            },
            async latest() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.current-user",
      status: "passed",
    }));
  });
});
