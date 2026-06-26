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
} from "../src/index.js";

describe("@cognidesk/integration-help-center-cognidesk", () => {
  it("exports an official generic help center provider manifest", () => {
    expect(cognideskHelpCenterProviderManifest).toMatchObject({
      id: "help-center.cognidesk",
      packageName: "@cognidesk/integration-help-center-cognidesk",
      category: "help-center",
      provider: "cognidesk",
      trustLevel: "official",
    });
    expect(cognideskHelpCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "read-provider-object",
        "search-provider-object",
        "receive",
        "help-center.webhook-signature",
      ]));
    expect(cognideskHelpCenterProviderManifest.coverage).toMatchObject({
      scope: "local-protocol",
      evidence: [],
    });
    expect(cognideskHelpCenterProviderManifest.coverage.notes.join(" "))
      .toContain("built-in HTTP source adapters");
    expect(cognideskHelpCenterProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement a named external help-center provider API or broader article/category");
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

  it("delegates HTTP help center sources to a host-injected provider client", async () => {
    const providerClient = {
      search: vi.fn(async () => ({
        articles: [{ id: "a1", title: "Article 1" }],
        cursor: "next",
      })),
      fetchArticle: vi.fn(async () => ({ id: "a1", title: "Article 1" })),
      readiness: vi.fn(async () => ({ ok: true })),
    };
    const client = createHelpCenterClient({
      id: "http-docs",
      type: "http",
    }, { providerClient });

    await expect(client.search({ query: "password", limit: 3 })).resolves.toMatchObject({
      articles: [{ id: "a1" }],
      cursor: "next",
    });
    await expect(client.fetchArticle("a1")).resolves.toMatchObject({ id: "a1" });
    await expect(client.readiness()).resolves.toMatchObject({ ok: true });
    expect(providerClient.search).toHaveBeenCalledWith({ query: "password", limit: 3 });
    expect(providerClient.fetchArticle).toHaveBeenCalledWith("a1");
    expect(providerClient.readiness).toHaveBeenCalledWith();
  });

  it("requires baseUrl for HTTP help center sources without a host client", async () => {
    const client = createHelpCenterClient({
      id: "http-docs",
      type: "http",
    });

    await expect(client.search({ query: "password" })).rejects
      .toThrow("baseUrl");
  });

  it("accepts configured HTTP help center sources for the built-in adapter", () => {
    expect(() => defineHelpCenterSource({
      id: "legacy-http-docs",
      type: "http",
      baseUrl: "https://docs.example.test",
    })).not.toThrow();
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
      type: "channel.help-center.article.ingested",
      channel: { kind: "help-center", provider: "cognidesk" },
      sourceId: "local-docs",
    });
    expect(search).toMatchObject({
      type: "channel.help-center.search.performed",
      resultCount: 1,
      channel: { kind: "help-center" },
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
      headers: { "x-cognidesk-help-center-signature": signature },
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
      expectedPackageName: "@cognidesk/integration-help-center-cognidesk",
      channels: [{
        id: "helpcenter",
        channel: "help-center",
        providerPackageIds: [cognideskHelpCenterProviderManifest.id],
        enabledCapabilities: [
          "read-provider-object",
          "search-provider-object",
          "receive",
          "help-center.webhook-signature",
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
