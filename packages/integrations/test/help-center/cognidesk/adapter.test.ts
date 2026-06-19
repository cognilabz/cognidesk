import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  cognideskHelpCenterProviderManifest,
  createHelpCenterClient,
  defineHelpCenterSource,
  helpCenterCredentialStatuses,
  normalizeHelpCenterIngestionEvent,
  normalizeHelpCenterSearchEvent,
  parseHelpCenterWebhook,
  validateHelpCenterWebhookSignature,
} from "../../../src/help-center/cognidesk/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official generic help center provider manifest", () => {
    expect(cognideskHelpCenterProviderManifest).toMatchObject({
      id: "helpcenter.cognidesk",
      packageName: "@cognidesk/integrations",
      category: "helpCenter",
      provider: "cognidesk",
      trustLevel: "official",
    });
    expect(cognideskHelpCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "read-provider-object",
        "search-provider-object",
        "receive",
        "helpCenter.webhook-signature",
      ]));
    expect(cognideskHelpCenterProviderManifest.coverage).toMatchObject({
      scope: "local-protocol",
      evidence: [],
    });
    expect(cognideskHelpCenterProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement a named external help-center provider API");
  });

  it("searches and fetches local help center articles", async () => {
    const source = defineHelpCenterSource({
      id: "local-docs",
      type: "local",
      articles: [
        { id: "reset-password", title: "Reset password", body: "Use the account settings page.", locale: "en" },
        { id: "refunds", title: "Refund policy", body: "Refunds take five days.", locale: "en" },
      ],
    });
    const client = createHelpCenterClient(source);

    await expect(client.search({ query: "settings", locale: "en" })).resolves.toMatchObject({
      articles: [{ id: "reset-password" }],
    });
    await expect(client.fetchArticle("refunds")).resolves.toMatchObject({ title: "Refund policy" });
    await expect(client.readiness()).resolves.toMatchObject({ type: "local", articleCount: 2 });
  });

  it("uses a generic HTTP help center source", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/search?")) {
        return new Response(JSON.stringify({ articles: [{ id: "a1", title: "Article 1" }], cursor: "next" }), { status: 200 });
      }
      if (url.endsWith("/articles/a1")) {
        return new Response(JSON.stringify({ article: { id: "a1", title: "Article 1" } }), { status: 200 });
      }
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    });
    const client = createHelpCenterClient({
      id: "http-docs",
      type: "http",
      baseUrl: "https://docs.example.test/",
      headers: { authorization: "Bearer configured" },
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.search({ query: "password", limit: 3 })).resolves.toMatchObject({
      articles: [{ id: "a1" }],
      cursor: "next",
    });
    await expect(client.fetchArticle("a1")).resolves.toMatchObject({ id: "a1" });
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://docs.example.test/search?query=password&limit=3",
      expect.objectContaining({
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("normalizes ingestion and search events", () => {
    const ingestion = normalizeHelpCenterIngestionEvent({
      sourceId: "local-docs",
      article: { id: "a1", title: "Article 1", updatedAt: "2026-06-17T10:00:00.000Z" },
    });
    const search = normalizeHelpCenterSearchEvent({
      sourceId: "local-docs",
      query: { query: "password" },
      result: { articles: [{ id: "a1", title: "Article 1" }] },
      occurredAt: "2026-06-17T10:01:00.000Z",
    });

    expect(ingestion).toMatchObject({
      type: "channel.helpCenter.article.ingested",
      channel: { kind: "helpCenter", provider: "cognidesk" },
      sourceId: "local-docs",
    });
    expect(search).toMatchObject({
      type: "channel.helpCenter.search.performed",
      resultCount: 1,
      channel: { kind: "helpCenter" },
    });
  });

  it("parses signed help center webhooks and fails closed when required", async () => {
    const rawBody = JSON.stringify({
      event: "article.updated",
      sourceId: "local-docs",
      article: { id: "a1", title: "Article 1" },
    });
    const secret = "helpcenter-secret";
    const signature = `sha256=${createHmac("sha256", secret).update(rawBody).digest("hex")}`;
    const request = new Request("https://example.test/helpcenter", {
      method: "POST",
      headers: { "x-cognidesk-helpcenter-signature": signature },
      body: rawBody,
    });

    expect(validateHelpCenterWebhookSignature({ rawBody, signature, secret })).toBe(true);
    await expect(parseHelpCenterWebhook(request, { secret })).resolves.toMatchObject({
      event: "article.updated",
      article: { id: "a1" },
    });

    const unsigned = new Request("https://example.test/helpcenter", { method: "POST", body: rawBody });
    await expect(parseHelpCenterWebhook(unsigned, { secret, requireSignature: true })).rejects
      .toThrow("Help center webhook signature validation failed.");
  });

  it("passes provider conformance with explicit generic package naming", async () => {
    const result = await runProviderConformance({
      manifest: cognideskHelpCenterProviderManifest,
      expectedPackageName: "@cognidesk/integrations",
      channels: [{
        id: "helpcenter",
        channel: "helpCenter",
        providerPackageIds: [cognideskHelpCenterProviderManifest.id],
        enabledCapabilities: [
          "read-provider-object",
          "search-provider-object",
          "receive",
          "helpCenter.webhook-signature",
        ],
      }],
      credentialStatuses: helpCenterCredentialStatuses({
        sourceConfigured: true,
        webhookSecretConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });
});
