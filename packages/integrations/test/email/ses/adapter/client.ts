import { expect, it, vi } from "vitest";
import {
  ProviderApiError,
  createSesEmailClient,
} from "../../../../src/email/ses/index.js";
import { deterministicCrypto } from "./helpers.js";

export function registerSesClientTests() {
  it("signs and sends SES v2 email without AWS SDK dependencies", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ MessageId: "ses-message-id" }), { status: 200 })
    );
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "eu-central-1",
      sessionToken: "session-token",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T12:34:56Z"),
    });

    const sent = await client.sendEmail({
      FromEmailAddress: "support@example.test",
      Destination: { ToAddresses: ["customer@example.test"] },
      ConfigurationSetName: "support-events",
      EmailTags: [{ Name: "conversationId", Value: "conversation_1" }],
      Content: {
        Simple: {
          Subject: { Data: "Reset help" },
          Body: { Text: { Data: "Here is the reset link." } },
        },
      },
    });

    expect(sent.MessageId).toBe("ses-message-id");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://email.eu-central-1.amazonaws.com/v2/email/outbound-emails",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: expect.stringContaining("AWS4-HMAC-SHA256 Credential=AKIAEXAMPLE/20260617/eu-central-1/ses/aws4_request"),
          "x-amz-date": "20260617T123456Z",
          "x-amz-security-token": "session-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      FromEmailAddress: "support@example.test",
      Destination: { ToAddresses: ["customer@example.test"] },
      ConfigurationSetName: "support-events",
    });
  });

  it("sends raw MIME email through SES v2 SendEmail raw content", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ MessageId: "raw-message-id" }), { status: 200 })
    );
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "us-east-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    await client.sendRawEmail({
      FromEmailAddress: "support@example.test",
      Raw: { Data: "RnJvbTogc3VwcG9ydEBleGFtcGxlLnRlc3QK" },
    });

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toMatchObject({
      FromEmailAddress: "support@example.test",
      Content: { Raw: { Data: "RnJvbTogc3VwcG9ydEBleGFtcGxlLnRlc3QK" } },
    });
  });

  it("reads account, identities, templates, and configuration sets", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/account")) {
        return new Response(JSON.stringify({ SendingEnabled: true, ProductionAccessEnabled: true }), { status: 200 });
      }
      if (url.includes("/identities")) {
        return new Response(JSON.stringify({ EmailIdentities: [{ IdentityName: "example.test", IdentityType: "DOMAIN" }] }), { status: 200 });
      }
      if (url.includes("/templates")) {
        return new Response(JSON.stringify({ TemplatesMetadata: [{ TemplateName: "ticket-update" }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ ConfigurationSets: [{ ConfigurationSetName: "support-events" }] }), { status: 200 });
    });
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "eu-west-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    await expect(client.getAccount()).resolves.toMatchObject({ SendingEnabled: true });
    await expect(client.listEmailIdentities({ PageSize: 10 })).resolves.toMatchObject({
      EmailIdentities: [{ IdentityName: "example.test" }],
    });
    await expect(client.listTemplates({ PageSize: 5 })).resolves.toMatchObject({
      TemplatesMetadata: [{ TemplateName: "ticket-update" }],
    });
    await expect(client.listConfigurationSets()).resolves.toMatchObject({
      ConfigurationSets: [{ ConfigurationSetName: "support-events" }],
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://email.eu-west-1.amazonaws.com/v2/email/identities?PageSize=10",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("passes per-operation AbortSignal through SES fetch", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ SendingEnabled: true }), { status: 200 })
    );
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "eu-west-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    await client.getAccount({ signal: controller.signal });

    const request = (fetchMock.mock.calls[0] as unknown[])[1] as RequestInit;
    expect(request.signal).toBe(controller.signal);
  });

  it("throws structured SES ProviderApiError metadata", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        message: "Email identity is not verified.",
        __type: "MessageRejected",
      }), {
        status: 400,
        headers: { "x-amzn-requestid": "ses-request-id" },
      })
    );
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "eu-west-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    let caught: unknown;
    try {
      await client.sendEmail({
        FromEmailAddress: "support@example.test",
        Destination: { ToAddresses: ["customer@example.test"] },
        Content: {
          Simple: {
            Subject: { Data: "Reset help" },
            Body: { Text: { Data: "Here is the reset link." } },
          },
        },
      });
    } catch (error) {
      caught = error;
    }

    expect(caught).toBeInstanceOf(ProviderApiError);
    expect(caught).toMatchObject({
      provider: "ses",
      status: 400,
      code: "MessageRejected",
      body: {
        message: "Email identity is not verified.",
        __type: "MessageRejected",
      },
      response: {
        requestId: "ses-request-id",
      },
    });
    expect((caught as Error).message).toBe("Email identity is not verified.");
  });

  it("reads SES event destinations and suppression list entries", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/event-destinations")) {
        return new Response(JSON.stringify({ EventDestinations: [{ Name: "support-events-sns" }] }), { status: 200 });
      }
      if (url.includes("/suppression/addresses/customer%40example.test")) {
        return new Response(JSON.stringify({
          SuppressedDestination: { EmailAddress: "customer@example.test", Reason: "BOUNCE" },
        }), { status: 200 });
      }
      if (url.includes("/suppression/addresses")) {
        return new Response(JSON.stringify({
          SuppressedDestinationSummaries: [{ EmailAddress: "customer@example.test", Reason: "BOUNCE" }],
        }), { status: 200 });
      }
      return new Response("", { status: 200 });
    });
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "eu-west-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    await expect(client.getConfigurationSetEventDestinations("support-events")).resolves.toMatchObject({
      EventDestinations: [{ Name: "support-events-sns" }],
    });
    await expect(client.listSuppressedDestinations({
      PageSize: 10,
      StartDate: "2026-06-01T00:00:00Z",
      EndDate: "2026-06-17T00:00:00Z",
      TenantName: "tenant-a",
    })).resolves.toMatchObject({
      SuppressedDestinationSummaries: [{ EmailAddress: "customer@example.test" }],
    });
    await expect(client.getSuppressedDestination("customer@example.test")).resolves.toMatchObject({
      SuppressedDestination: { Reason: "BOUNCE" },
    });
    await expect(client.deleteSuppressedDestination({
      EmailAddress: "customer@example.test",
      TenantName: "tenant-a",
    })).resolves.toBeUndefined();

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://email.eu-west-1.amazonaws.com/v2/email/configuration-sets/support-events/event-destinations",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://email.eu-west-1.amazonaws.com/v2/email/suppression/addresses?PageSize=10&StartDate=2026-06-01T00%3A00%3A00Z&EndDate=2026-06-17T00%3A00%3A00Z&TenantName=tenant-a",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://email.eu-west-1.amazonaws.com/v2/email/suppression/addresses/customer%40example.test?TenantName=tenant-a",
      expect.objectContaining({ method: "DELETE" }),
    );
  });

  it("routes generated SESv2 REST operations through SigV4 JSON requests", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ IdentityType: "DOMAIN", VerifiedForSendingStatus: true }), { status: 200 })
    );
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "eu-central-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    await expect(client.fullApi.GetEmailIdentity({
      pathParams: { EmailIdentity: "example.test" },
    })).resolves.toMatchObject({ IdentityType: "DOMAIN" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://email.eu-central-1.amazonaws.com/v2/email/identities/example.test",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          authorization: expect.stringContaining("AWS4-HMAC-SHA256 Credential=AKIAEXAMPLE/20260617/eu-central-1/ses/aws4_request"),
        }),
      }),
    );
  });

  it("routes generated classic SES operations as AWS Query actions", async () => {
    const fetchMock = vi.fn(async () =>
      new Response("<CreateReceiptRuleResponse />", { status: 200 })
    );
    const client = createSesEmailClient({
      accessKeyId: "AKIAEXAMPLE",
      secretAccessKey: "secret",
      region: "us-east-1",
      fetch: fetchMock as unknown as typeof fetch,
      crypto: deterministicCrypto,
      now: () => new Date("2026-06-17T00:00:00Z"),
    });

    await expect(client.fullApi.CreateReceiptRule({
      body: {
        RuleSetName: "primary",
        After: "existing",
        Rule: {
          Name: "support",
          Enabled: true,
        },
      },
    })).resolves.toMatchObject({ raw: "<CreateReceiptRuleResponse />" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://email.us-east-1.amazonaws.com/",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(request.body).toContain("Action=CreateReceiptRule");
    expect(request.body).toContain("Version=2010-12-01");
    expect(request.body).toContain("RuleSetName=primary");
    expect(request.body).toContain("Rule.Name=support");
    expect(request.body).toContain("Rule.Enabled=true");
  });
}
