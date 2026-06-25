import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
  createTwilioSmsIntegration,
  createTwilioSmsClient,
  parseTwilioSmsWebhook,
  twilioSmsCredentialStatuses,
  twilioSmsProviderManifest,
} from "../src/index.js";

describe("@cognidesk/integration-sms-twilio", () => {
  it("keeps Twilio SMS separate from Voice and metadata-only at /manifest", async () => {
    expect(twilioSmsProviderManifest.packageName).toBe("@cognidesk/integration-sms-twilio");
    expect(twilioSmsProviderManifest.category).toBe("sms");
    expect(twilioSmsProviderManifest.metadata?.implementation).toMatchObject({
      strategy: "official-sdk",
      sdkPackage: "twilio",
      verifiedVersion: "6.0.2",
    });
    const integration = createTwilioSmsIntegration({
      accountSid: "AC123",
      authToken: "token",
      smsClient: fakeTwilioSmsClient(),
    });
    expect(integration.operationAliases).toEqual([
      "sms.message.receive",
      "sms.message.send",
      "sms.message.read",
      "sms.message.search",
    ]);
    await expect(integration.operations["sms.message.send"]({
      to: "+15550100",
      from: "+15550999",
      body: "Hello",
    }, {
      providerPackageId: "sms.twilio",
      provider: "twilio",
      operationAlias: "sms.message.send",
    })).resolves.toMatchObject({ sid: "SM123" });
    await expect(readFile(new URL("../src/manifest.ts", import.meta.url), "utf8"))
      .resolves.not.toMatch(/from\s+["']twilio["']/);
  });

  it("uses injected Twilio SDK clients for SMS operations", async () => {
    const client = createTwilioSmsClient({
      accountSid: "AC123",
      authToken: "token",
      sdkClient: {
        messages: {
          async create(input) {
            expect(input).toMatchObject({ to: "+15550100", from: "+15550999", body: "Hello" });
            return { sid: "SM123", status: "queued" };
          },
          get(sid) {
            return {
              async fetch() {
                return { sid, status: "sent" };
              },
              async update(input) {
                expect(input).toEqual({ status: "canceled" });
                return { sid, status: "canceled" };
              },
            };
          },
          async list(input) {
            expect(input).toMatchObject({ to: "+15550100", pageSize: 10 });
            return [{ sid: "SM123" }];
          },
        },
        incomingPhoneNumbers: {
          async list(input) {
            expect(input).toEqual({ phoneNumber: "+15550999" });
            return [{ sid: "PN123", capabilities: { sms: true } }];
          },
        },
        api: {
          accounts(accountSid) {
            return { async fetch() { return { sid: accountSid, status: "active" }; } };
          },
        },
      },
    });

    await expect(client.sendMessage({ to: "+15550100", from: "+15550999", body: "Hello" }))
      .resolves.toMatchObject({ sid: "SM123" });
    await expect(client.fetchMessage("SM123")).resolves.toMatchObject({ status: "sent" });
    await expect(client.updateMessageStatus("SM123", "cancelled")).resolves.toMatchObject({ status: "canceled" });
    await expect(client.listMessages({ to: "+15550100", pageSize: 10 })).resolves.toMatchObject({
      messages: [{ sid: "SM123" }],
    });
    await expect(client.fetchAccount()).resolves.toMatchObject({ sid: "AC123" });
    await expect(client.listIncomingPhoneNumbers({ phoneNumber: "+15550999" })).resolves.toHaveLength(1);
  });

  it("validates and parses Twilio SMS webhooks", async () => {
    const params = new URLSearchParams({
      MessageSid: "SM123",
      From: "+15550100",
      To: "+15550999",
      Body: "Hello",
      NumMedia: "1",
      MediaUrl0: "https://example.test/one.png",
      MediaContentType0: "image/png",
    });
    const url = "https://example.test/twilio/sms";
    const signature = signTwilio(url, Object.fromEntries(params), "token");
    const request = new Request(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-twilio-signature": signature,
      },
      body: params,
    });

    await expect(parseTwilioSmsWebhook(request, { authToken: "token" })).resolves.toMatchObject({
      messageSid: "SM123",
      body: "Hello",
      media: [{ url: "https://example.test/one.png", contentType: "image/png" }],
    });
  });

  it("reports credential readiness", () => {
    expect(twilioSmsCredentialStatuses({}).map((status) => status.state)).toEqual(["missing", "missing"]);
    expect(twilioSmsCredentialStatuses({ accountSid: "AC123", authToken: "token", fromNumber: "+1" }).map((status) => status.state))
      .toEqual(["configured", "configured"]);
  });
});

function fakeTwilioSmsClient() {
  return createTwilioSmsClient({
    accountSid: "AC123",
    authToken: "token",
    sdkClient: {
      messages: {
        async create() {
          return { sid: "SM123", status: "queued" };
        },
        get(sid) {
          return {
            async fetch() {
              return { sid, status: "sent" };
            },
            async update() {
              return { sid, status: "canceled" };
            },
          };
        },
        async list() {
          return [{ sid: "SM123" }];
        },
      },
      incomingPhoneNumbers: {
        async list() {
          return [{ sid: "PN123", capabilities: { sms: true } }];
        },
      },
      api: {
        accounts(accountSid) {
          return { async fetch() { return { sid: accountSid, status: "active" }; } };
        },
      },
    },
  });
}

function signTwilio(url: string, params: Record<string, string>, authToken: string) {
  const signed = Object.keys(params).sort()
    .reduce((value, key) => `${value}${key}${params[key] ?? ""}`, url);
  return createHmac("sha1", authToken).update(signed).digest("base64");
}
