import { createHmac } from "node:crypto";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createMailgunEmailClient,
  createMailgunEmailLiveChecks,
  MAILGUN_FULL_API_GENERATED_FUNCTION_COUNT,
  MAILGUN_FULL_API_OPERATION_COUNT,
  MAILGUN_FULL_API_PATH_COUNT,
  mailgunEmailCredentialStatuses,
  mailgunEmailProviderManifest,
  parseMailgunInboundRouteRequest,
  parseMailgunWebhook,
  verifyMailgunWebhookSignature,
  type MailgunDomainResponse,
  type MailgunFullApiOperationResponseMap,
  type MailgunStoredMessage,
} from "../../../src/email/mailgun/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Mailgun email", () => {
    expect(mailgunEmailProviderManifest).toMatchObject({
      id: "email.mailgun",
      packageName: "@cognidesk/integrations",
      category: "email",
      provider: "mailgun",
      trustLevel: "official",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(mailgunEmailProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "attach",
        "read-provider-object",
        "search-provider-object",
      ]));
    expect(mailgunEmailProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events",
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/logs",
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/metrics",
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks",
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/account-webhooks",
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domains",
        "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/bounces",
        "https://documentation.mailgun.com/docs/mailgun/user-manual/receive-forward-store/receive-http",
      ]));
    expect(mailgunEmailProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in Mailgun's official public OpenAPI");
    expect(mailgunEmailProviderManifest.coverage.evidence)
      .toContainEqual(expect.objectContaining({
        label: "Mailgun OpenAPI specification",
      }));
    const receive = mailgunEmailProviderManifest.capabilities.find((capability) => capability.capability === "receive");
    expect(receive?.description).toContain("inbound");
    expect(mailgunEmailProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "mailgunRoute",
      "mailgunDomainTemplate",
      "mailgunWebhook",
      "mailgunSuppressionRecord",
    ]));
    expect(mailgunEmailProviderManifest.limitations.join(" "))
      .toContain("stored message and event availability depends");
    expect(mailgunEmailProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "mailgun",
      apiVersion: "3.0.0",
      documentedPathCount: 169,
      documentedOperationCount: 265,
      implementedOperationCount: 265,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 265,
    });
    expect(MAILGUN_FULL_API_PATH_COUNT).toBe(169);
    expect(MAILGUN_FULL_API_OPERATION_COUNT).toBe(265);
    expect(MAILGUN_FULL_API_GENERATED_FUNCTION_COUNT).toBe(265);
  });

  it("types Mailgun helper and selected operation responses", () => {
    if (false) {
      const client = undefined as unknown as import("../../../src/email/mailgun/index.js").MailgunEmailClient;
      const events = client.requestOperation("GET /v3/{domain_name}/events", {
        pathParams: { domain_name: "example.test" },
        query: { limit: 10, event: "delivered" },
      });
      const stored = client.getStoredMessage("storage-key");
      const domain = client.getDomain();

      expectTypeOf<Awaited<typeof events>>().toEqualTypeOf<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/events"]>();
      expectTypeOf<Awaited<typeof stored>>().toEqualTypeOf<MailgunStoredMessage>();
      expectTypeOf<Awaited<typeof domain>>().toEqualTypeOf<MailgunDomainResponse>();
    }
  });

  it("sends email through the Mailgun HTTP Sending API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "<message-id@example.test>", message: "Queued. Thank you." }), { status: 200 })
    );
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const sent = await client.sendEmail({
      from: "Support <support@example.test>",
      to: ["customer@example.test", "other@example.test"],
      subject: "Reset help",
      text: "Here is the reset link.",
      "o:tag": ["support", "password-reset"],
      variables: { conversationId: "conversation_1" },
    });

    expect(sent.id).toBe("<message-id@example.test>");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mailgun.net/v3/mg.example.test/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Basic YXBpOmtleS0xMjM=",
          accept: "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: FormData };
    expect(request.body.get("from")).toBe("Support <support@example.test>");
    expect(request.body.getAll("to")).toEqual(["customer@example.test", "other@example.test"]);
    expect(request.body.getAll("o:tag")).toEqual(["support", "password-reset"]);
    expect(request.body.get("v:conversationId")).toBe("\"conversation_1\"");
  });

  it("sends raw MIME messages through Mailgun", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "<mime@example.test>", message: "Queued. Thank you." }), { status: 200 })
    );
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.sendMime({
      to: "customer@example.test",
      message: "From: support@example.test\nTo: customer@example.test\nSubject: Hi\n\nBody",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mailgun.net/v3/mg.example.test/messages.mime",
      expect.objectContaining({ method: "POST" }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: FormData };
    expect(request.body.get("to")).toBe("customer@example.test");
    expect(request.body.get("message")).toBeInstanceOf(Blob);
  });

  it("routes Mailgun API calls to the selected region", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ id: "<message-id@example.test>", message: "Queued." }), { status: 200 })
    );
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      region: "eu",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.sendEmail({
      from: "support@example.test",
      to: "customer@example.test",
      subject: "EU route",
      text: "This uses the EU Mailgun API.",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.eu.mailgun.net/v3/mg.example.test/messages",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("reads stored messages and searches Mailgun events", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/messages/")) {
        return new Response(JSON.stringify({ subject: "Reset help", recipients: "customer@example.test" }), { status: 200 });
      }
      return new Response(JSON.stringify({ items: [{ event: "delivered", recipient: "customer@example.test" }] }), { status: 200 });
    });
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getStoredMessage("storage/key")).resolves.toMatchObject({ subject: "Reset help" });
    const events = await client.searchEvents({
      limit: 25,
      event: "delivered",
      recipient: "customer@example.test",
      tags: ["support", "reset"],
    });

    expect(events.items).toHaveLength(1);
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.mailgun.net/v3/mg.example.test/events?limit=25&event=delivered&recipient=customer%40example.test&tags=support&tags=reset",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("reads Mailgun routes, suppressions, and domain templates for support workflows", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/routes")) {
        return new Response(JSON.stringify({ total_count: 1, items: [{ id: "route-id" }] }), { status: 200 });
      }
      if (url.includes("/bounces/")) {
        return new Response(JSON.stringify({ address: "customer@example.test", code: "550" }), { status: 200 });
      }
      return new Response(JSON.stringify({ items: [{ name: "ticket-update" }] }), { status: 200 });
    });
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listRoutes({ skip: 2, limit: 5 })).resolves.toMatchObject({ total_count: 1 });
    await expect(client.getSuppression("bounces", "customer@example.test")).resolves.toMatchObject({
      address: "customer@example.test",
    });
    await expect(client.listDomainTemplates({ limit: 10, page: "first" })).resolves.toMatchObject({
      items: [{ name: "ticket-update" }],
    });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.mailgun.net/v3/routes?skip=2&limit=5",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.mailgun.net/v3/mg.example.test/bounces/customer%40example.test",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.mailgun.net/v3/mg.example.test/templates?limit=10&page=first",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("exposes every Mailgun OpenAPI operation through generated functions", async () => {
    const fetchMock = vi.fn(async (url: string) =>
      new Response(JSON.stringify({ ok: true, url }), { status: 200 })
    );
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.ListLogs({
      body: { duration: "1d", filter: { AND: [{ attribute: "domain", comparator: "=", values: [{ label: "Domain", value: "mg.example.test" }] }] } },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.fullApi.CreateADomainWebhook({
      pathParams: { domain: "mg.example.test" },
      body: { id: "delivered", url: "https://example.test/mailgun" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.requestOperation("GET /v3/{domain_name}/bounces", {
      pathParams: { domain_name: "mg.example.test" },
      query: { limit: 10, page: "next", term: "a@example.test" },
    })).resolves.toMatchObject({ ok: true });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.mailgun.net/v1/analytics/logs",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Basic YXBpOmtleS0xMjM=",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.mailgun.net/v3/domains/mg.example.test/webhooks",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.mailgun.net/v3/mg.example.test/bounces?limit=10&page=next&term=a%40example.test",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("fails closed for unknown Mailgun operations and missing path params", async () => {
    const client = createMailgunEmailClient({
      apiKey: "key-123",
      domain: "mg.example.test",
      fetch: vi.fn(async () => new Response("{}", { status: 200 })) as unknown as typeof fetch,
    });

    await expect(client.requestOperation("GET /v4/domains/{name}", {} as never))
      .rejects.toThrow("Missing Mailgun path parameter 'name'");
    // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
    await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Mailgun OpenAPI operation");
  });

  it("verifies and parses signed Mailgun webhook events", async () => {
    const signingKey = "webhook-signing-key";
    const timestamp = "1780000000";
    const token = "token-value";
    const signature = createHmac("sha256", signingKey).update(`${timestamp}${token}`).digest("hex");
    const payload = {
      signature: { timestamp, token, signature },
      "event-data": { event: "delivered", recipient: "customer@example.test" },
    };

    expect(verifyMailgunWebhookSignature(payload, {
      signingKey,
      now: () => Number(timestamp) * 1000,
    })).toBe(true);

    const request = new Request("https://example.test/mailgun", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const parsed = await parseMailgunWebhook(request, {
      signingKey,
      requireVerifiedSignature: true,
      now: () => Number(timestamp) * 1000,
    });

    expect(parsed["event-data"]).toMatchObject({ event: "delivered" });
  });

  it("fails closed when webhook signature verification is required", async () => {
    const request = new Request("https://example.test/mailgun", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        signature: { timestamp: "1780000000", token: "token-value", signature: "bad" },
        "event-data": { event: "failed" },
      }),
    });

    await expect(parseMailgunWebhook(request, {
      signingKey: "webhook-signing-key",
      requireVerifiedSignature: true,
      now: () => 1780000000000,
    })).rejects.toThrow("Mailgun webhook signature verification failed.");
  });

  it("parses signed Mailgun inbound route form payloads", async () => {
    const signingKey = "webhook-signing-key";
    const timestamp = "1780000000";
    const token = "token-value";
    const signature = createHmac("sha256", signingKey).update(`${timestamp}${token}`).digest("hex");
    const body = new URLSearchParams({
      timestamp,
      token,
      signature,
      subject: "Reset help",
      sender: "customer@example.test",
      from: "Customer <customer@example.test>",
      recipient: "support@example.test",
      "body-plain": "I need help resetting my password.",
      "message-headers": JSON.stringify([["Message-Id", "<mailgun-1@example.test>"]]),
    });

    const parsed = await parseMailgunInboundRouteRequest(new Request("https://example.test/mailgun/inbound", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    }), {
      signingKey,
      requireVerifiedSignature: true,
      now: () => Number(timestamp) * 1000,
    });

    expect(parsed).toMatchObject({
      subject: "Reset help",
      sender: "customer@example.test",
      recipient: "support@example.test",
      "body-plain": "I need help resetting my password.",
      verifiedSignature: true,
    });
  });

  it("reports conformance as credential-blocked until Mailgun credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: mailgunEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [mailgunEmailProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "attach", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: mailgunEmailCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createMailgunEmailLiveChecks({
          apiKey: "missing",
          domain: "missing.example.test",
          client: {
            async getDomain() {
              return {};
            },
            async listWebhooks() {
              return [];
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.domain" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Mailgun live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: mailgunEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [mailgunEmailProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "attach", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: mailgunEmailCredentialStatuses({
        apiKeyConfigured: true,
        domain: "mg.example.test",
        webhookSigningKeyConfigured: true,
        region: "us",
      }),
      live: {
        enabled: true,
        checks: createMailgunEmailLiveChecks({
          apiKey: "configured",
          domain: "mg.example.test",
          client: {
            async getDomain() {
              return { domain: { name: "mg.example.test", state: "active" } };
            },
            async listWebhooks() {
              return [{ id: "delivered", urls: ["https://example.test/mailgun"] }];
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.domain",
      status: "passed",
    }));
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.webhooks",
      status: "passed",
    }));
  });
});
