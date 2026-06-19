import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createForumCommunityClient,
  createForumCommunityLiveChecks,
  forumCommunityCredentialStatuses,
  forumCommunityProviderManifest,
  parseForumWebhook,
  validateForumWebhookSignature,
} from "../../../src/community/forum/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for forum community support", () => {
    expect(forumCommunityProviderManifest).toMatchObject({
      id: "community.forum",
      packageName: "@cognidesk/integrations",
      category: "community",
      provider: "forum",
      trustLevel: "official",
    });
    expect(forumCommunityProviderManifest.name).toBe("Discourse Forum");
    expect(forumCommunityProviderManifest.metadata).toMatchObject({
      concreteProvider: "discourse",
      supportedForumApi: "discourse-compatible-rest-and-webhooks",
      apiCoverage: {
        operationCatalog: "docs/provider-coverage/discourse-selected-api-2026-06-18.operations.json",
        generatedFromOfficialSpec: false,
        officialSpec: "https://docs.discourse.org/openapi.json",
        sourcePathCount: 79,
        sourceOperationCount: 93,
        selectedOperationCount: 5,
        docsOnlyOperationCount: 1,
        implementedOperationCount: 6,
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
      .toContain("does not implement broader Discourse administration");
    expect(forumCommunityProviderManifest.coverage.notes.join(" "))
      .toContain("non-Discourse forum APIs");
    expect(forumCommunityProviderManifest.limitations.join(" "))
      .toContain("Discourse rate limits and throttling");
    expect(forumCommunityProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining(["https://docs.discourse.org/"]));
    const descriptions = forumCommunityProviderManifest.capabilities
      .map((capability) => capability.description ?? "")
      .join(" ");
    expect(descriptions).toContain("latest topics, and search results");
    expect(descriptions).toContain("current API user readiness record");
    expect(descriptions).toContain("query and pagination controls");
    expect(descriptions).not.toContain("category, tag, and pagination controls");
    expect(descriptions).not.toContain("category, and user records");
    expect(forumCommunityProviderManifest.privacyNotes.join(" "))
      .toContain("category/tag labels present in returned topics");
  });

  it("creates topics and replies through Discourse-compatible posts endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: 101, topic_id: 55, post_number: 1 }), { status: 200 })
    );
    const client = createForumCommunityClient({
      baseUrl: "https://community.example.test",
      apiKey: "forum-key",
      apiUsername: "system",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.createTopic({ title: "Known issue", raw: "We are investigating.", category: 7, tags: ["status"] });
    await client.createReply({ topicId: 55, raw: "Can you share logs?", replyToPostNumber: 1 });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://community.example.test/posts.json",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Api-Key": "forum-key",
          "Api-Username": "system",
          "content-type": "application/x-www-form-urlencoded",
        }),
      }),
    );
    const topicRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: URLSearchParams };
    expect(topicRequest.body.get("title")).toBe("Known issue");
    expect(topicRequest.body.get("category")).toBe("7");
    expect(topicRequest.body.getAll("tags[]")).toEqual(["status"]);
    const replyRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: URLSearchParams };
    expect(replyRequest.body.get("topic_id")).toBe("55");
    expect(replyRequest.body.get("reply_to_post_number")).toBe("1");
  });

  it("reads topics, posts, and search results", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/t/55.json")) return new Response(JSON.stringify({ id: 55, title: "Known issue" }), { status: 200 });
      if (url.endsWith("/posts/101.json")) return new Response(JSON.stringify({ id: 101, raw: "Body" }), { status: 200 });
      return new Response(JSON.stringify({ topics: [{ id: 55 }] }), { status: 200 });
    });
    const client = createForumCommunityClient({
      baseUrl: "https://community.example.test",
      apiKey: "forum-key",
      apiUsername: "system",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getTopic(55)).resolves.toMatchObject({ id: 55 });
    await expect(client.getPost(101)).resolves.toMatchObject({ id: 101 });
    await expect(client.search({ query: "reset password", page: 2 })).resolves.toMatchObject({ topics: [{ id: 55 }] });
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://community.example.test/search.json?q=reset+password&page=2",
      expect.objectContaining({ method: "GET" }),
    );
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
          baseUrl: "https://community.example.test",
          apiKey: "missing",
          apiUsername: "missing",
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
          baseUrl: "https://community.example.test",
          apiKey: "configured",
          apiUsername: "system",
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
