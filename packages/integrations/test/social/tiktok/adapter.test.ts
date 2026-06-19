import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createTikTokBusinessCommentReply,
  createTikTokSocialClient,
  createTikTokSocialLiveChecks,
  getTikTokGeneralDmSupport,
  parseTikTokSignatureHeader,
  parseTikTokWebhook,
  tiktokSocialCredentialStatuses,
  tiktokSocialProviderManifest,
  validateTikTokWebhookSignature,
} from "../../../src/social/tiktok/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for TikTok social support", () => {
    expect(tiktokSocialProviderManifest).toMatchObject({
      id: "social.tiktok",
      packageName: "@cognidesk/integrations",
      category: "social",
      provider: "tiktok",
      trustLevel: "official",
    });
    expect(tiktokSocialProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "draft",
        "thread",
        "read-provider-object",
        "search-provider-object",
        "social.comment-reply",
        "social.webhook-signature",
      ]));
    expect(tiktokSocialProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("send");
    expect(tiktokSocialProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual(expect.arrayContaining([
        "tiktok-webhook-signature",
        "tiktok-webhook-callback",
      ]));
    const tiktokScopes = tiktokSocialProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "tiktok-scopes"
    );
    expect(tiktokScopes?.description).toContain("content upload/publish scopes are not used");
    expect(tiktokScopes?.scopes).not.toContain("video.upload");
    expect(tiktokScopes?.scopes).not.toContain("video.publish");
    expect(tiktokSocialProviderManifest.directions).toEqual(["receive-only", "send-only", "bidirectional"]);
    const commentReplyCapability = tiktokSocialProviderManifest.capabilities.find((capability) =>
      capability.capability === "social.comment-reply"
    );
    expect(commentReplyCapability?.label).toBe("Reply to TikTok Business comments");
    expect(commentReplyCapability?.description).toContain("Business API comment reply primitives only");
    expect(tiktokSocialProviderManifest.limitations.join(" ")).toContain("do not expose a general customer-service direct-message inbox");
    expect(tiktokSocialProviderManifest.limitations.join(" ")).toContain("callback URL registration");
    expect(tiktokSocialProviderManifest.limitations.join(" ")).toContain("direct-message lead APIs are Business lead surfaces");
    expect(tiktokSocialProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(tiktokSocialProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement a general TikTok direct-message inbox");
    expect(tiktokSocialProviderManifest.metadata?.apiCoverage).toMatchObject({
      operationCatalog: "docs/provider-coverage/tiktok-selected-api-2026-06-18.operations.json",
      generatedFromOfficialSpec: false,
      selectedOperationCount: 8,
      implementedOperationCount: 8,
      fullProviderApi: false,
      fullTikTokPlatformCoverage: false,
    });
    expect(tiktokSocialProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.tiktok.com/doc/tiktok-api-v2-video-list",
        "https://developers.tiktok.com/doc/research-api-specs-query-video-comments",
        "https://developers.tiktok.com/doc/webhooks-verification",
        "https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status",
      ]));
    expect(tiktokSocialProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .not.toContain("https://developers.tiktok.com/doc/content-posting-api-reference-direct-post");
  });

  it("reports SDK-user-owned TikTok credential and scope readiness", () => {
    const statuses = tiktokSocialCredentialStatuses({
      clientKey: "client-key",
      clientSecret: "client-secret",
      accessToken: "access-token",
      openId: "open_1",
      webhookConfigured: true,
      scopes: ["user.info.basic"],
    });

    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "tiktok-client-key",
      state: "configured",
    }));
    expect(statuses).toContainEqual(expect.objectContaining({
      requirementId: "tiktok-scopes",
      state: "insufficient-scope",
    }));
    const callbackMissingStatuses = tiktokSocialCredentialStatuses({
      clientSecret: "client-secret",
      webhookConfigured: false,
    });
    expect(callbackMissingStatuses).toContainEqual(expect.objectContaining({
      requirementId: "tiktok-webhook-signature",
      state: "configured",
    }));
    expect(callbackMissingStatuses).toContainEqual(expect.objectContaining({
      requirementId: "tiktok-webhook-callback",
      state: "missing",
    }));
  });

  it("reads TikTok profile and videos through documented Open API endpoints", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/v2/video/list/")) {
        return new Response(JSON.stringify({
          data: { videos: [{ id: "video_1", title: "Support update" }], has_more: false },
          error: { code: "ok", message: "" },
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: { user: { open_id: "open_1", username: "support" } },
        error: { code: "ok", message: "" },
      }), { status: 200 });
    });
    const client = createTikTokSocialClient({
      accessToken: "access-token",
      openId: "open_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getUserInfo(["open_id", "username"]))
      .resolves.toMatchObject({ data: { user: { open_id: "open_1" } } });
    await expect(client.listVideos({ fields: ["id", "title"], maxCount: 10 }))
      .resolves.toMatchObject({ data: { videos: [{ id: "video_1" }] } });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://open.tiktokapis.com/v2/user/info/?fields=open_id%2Cusername",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer access-token" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://open.tiktokapis.com/v2/video/list/?fields=id%2Ctitle",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer access-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({ max_count: 10 });
  });

  it("queries research comments and Business API comment reply primitives", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/v2/research/video/comment/list/")) {
        return new Response(JSON.stringify({
          data: { comments: [{ id: "comment_1", text: "Need help" }] },
          error: { code: "ok", message: "" },
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: { reply_id: "reply_1" },
        error: { code: "ok", message: "" },
      }), { status: 200 });
    });
    const client = createTikTokSocialClient({
      accessToken: "access-token",
      businessId: "business_1",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.queryResearchVideoComments({
      videoId: "video_1",
      fields: ["id", "text"],
      maxCount: 20,
    })).resolves.toMatchObject({ data: { comments: [{ id: "comment_1" }] } });
    await expect(client.replyToBusinessComment({
      videoId: "video_1",
      commentId: "comment_1",
      text: "Operator-approved reply.",
    })).resolves.toMatchObject({ data: { reply_id: "reply_1" } });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://open.tiktokapis.com/v2/research/video/comment/list/?fields=id%2Ctext",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://business-api.tiktok.com/open_api/v1.3/business/comment/reply/create/",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ "Access-Token": "access-token" }),
      }),
    );
    const replyRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(replyRequest.body)).toEqual({
      business_id: "business_1",
      video_id: "video_1",
      comment_id: "comment_1",
      text: "Operator-approved reply.",
    });
  });

  it("builds Business comment reply payloads without imposing moderation policy defaults", () => {
    expect(createTikTokBusinessCommentReply({
      videoId: "video_1",
      commentId: "comment_1",
      text: "Thanks for the note.",
      additionalFields: { operator_id: "operator_1" },
    }, "business_1")).toEqual({
      business_id: "business_1",
      video_id: "video_1",
      comment_id: "comment_1",
      text: "Thanks for the note.",
      operator_id: "operator_1",
    });
    expect(() => createTikTokBusinessCommentReply({
      videoId: "video_1",
      commentId: "comment_1",
      text: "Missing business.",
    })).toThrow("business ID is required");
  });

  it("documents that general TikTok DMs are not exposed by the public API", () => {
    expect(getTikTokGeneralDmSupport()).toMatchObject({
      supported: false,
    });
    expect(getTikTokGeneralDmSupport().alternatives).toContain("Use approved comment management primitives for owned Business accounts.");
  });

  it("validates and parses signed TikTok webhooks with timestamp tolerance", async () => {
    const clientSecret = "client-secret";
    const timestamp = 1_780_000_000;
    const rawBody = JSON.stringify({
      event: "post.publish.failed",
      event_id: "event_1",
      data: { publish_id: "publish_1" },
    });
    const signatureHeader = signTikTok(clientSecret, timestamp, rawBody);
    const request = new Request("https://example.test/tiktok/webhook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "tiktok-signature": signatureHeader,
      },
      body: rawBody,
    });

    expect(parseTikTokSignatureHeader(signatureHeader)).toEqual({
      timestamp,
      signature: signatureHeader.split("s=")[1],
    });
    expect(validateTikTokWebhookSignature({
      clientSecret,
      rawBody,
      signatureHeader,
      nowSeconds: timestamp + 30,
      toleranceSeconds: 60,
    })).toBe(true);
    const parsed = await parseTikTokWebhook(request, {
      clientSecret,
      nowSeconds: timestamp + 30,
      toleranceSeconds: 60,
    });
    expect(parsed).toMatchObject({
      timestamp,
      payload: { event: "post.publish.failed", event_id: "event_1" },
    });
  });

  it("rejects tampered TikTok webhook signatures and fails closed when required", async () => {
    const clientSecret = "client-secret";
    const timestamp = 1_780_000_000;
    const rawBody = JSON.stringify({ event: "x" });
    const signatureHeader = signTikTok(clientSecret, timestamp, rawBody);

    expect(validateTikTokWebhookSignature({
      clientSecret,
      rawBody: `${rawBody}\n`,
      signatureHeader,
    })).toBe(false);
    expect(validateTikTokWebhookSignature({
      clientSecret,
      rawBody,
      signatureHeader,
      nowSeconds: timestamp + 600,
      toleranceSeconds: 60,
    })).toBe(false);

    const unsignedRequest = new Request("https://example.test/tiktok/webhook", {
      method: "POST",
      body: rawBody,
    });
    await expect(parseTikTokWebhook(unsignedRequest, { requireSignature: true }))
      .rejects.toThrow("client secret is required");
  });

  it("reports live conformance as credential-blocked until TikTok credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: tiktokSocialProviderManifest,
      channels: [{
        id: "social",
        channel: "social",
        providerPackageIds: [tiktokSocialProviderManifest.id],
        enabledCapabilities: [
          "receive",
          "draft",
          "thread",
          "read-provider-object",
          "search-provider-object",
          "social.comment-reply",
          "social.webhook-signature",
        ],
      }],
      credentialStatuses: tiktokSocialCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createTikTokSocialLiveChecks({
          accessToken: "missing",
          openId: "open_1",
          client: {
            async getUserInfo() {
              return { data: { user: { open_id: "open_1" } }, error: { code: "ok" } };
            },
            async listVideos() {
              return { data: { videos: [] }, error: { code: "ok" } };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.account" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when TikTok readiness and profile live check are configured", async () => {
    const result = await runProviderConformance({
      manifest: tiktokSocialProviderManifest,
      channels: [{
        id: "social",
        channel: "social",
        providerPackageIds: [tiktokSocialProviderManifest.id],
        enabledCapabilities: [
          "receive",
          "draft",
          "thread",
          "read-provider-object",
          "search-provider-object",
          "social.comment-reply",
          "social.webhook-signature",
        ],
      }],
      credentialStatuses: tiktokSocialCredentialStatuses({
        clientKey: "client-key",
        clientSecret: "client-secret",
        accessToken: "access-token",
        openId: "open_1",
        webhookConfigured: true,
        scopes: ["user.info.basic", "video.list"],
      }),
      live: {
        enabled: true,
        checks: createTikTokSocialLiveChecks({
          accessToken: "access-token",
          openId: "open_1",
          client: {
            async getUserInfo() {
              return {
                data: { user: { open_id: "open_1", username: "support", display_name: "Support" } },
                error: { code: "ok" },
              };
            },
            async listVideos() {
              return { data: { videos: [] }, error: { code: "ok" } };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account",
      status: "passed",
    }));
  });
});

function signTikTok(clientSecret: string, timestamp: number, body: string) {
  const signature = createHmac("sha256", clientSecret).update(`${timestamp}.${body}`).digest("hex");
  return `t=${timestamp},s=${signature}`;
}
