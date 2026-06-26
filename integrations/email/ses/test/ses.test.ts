import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { GetAccountCommand, SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance, createOperationHandlerStubs } from "@cognidesk/integration-kit/testing";
import {
  createSesEmailClient,
  createSesEmailIntegration,
  parseSesSnsNotification,
  parseSesSqsRecord,
  sesEmailCredentialStatuses,
  sesEmailProviderManifest,
  type SesRawClients,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/integration-email-ses", () => {
  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(source).not.toMatch(/from ["']@aws-sdk\/client-ses/);
    expect(sesEmailProviderManifest.packageName).toBe("@cognidesk/integration-email-ses");
    expect(sesEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
  });

  it("imports /manifest without loading AWS SDK clients", async () => {
    vi.resetModules();
    vi.doMock("@aws-sdk/client-ses", () => {
      throw new Error("manifest imported @aws-sdk/client-ses");
    });
    vi.doMock("@aws-sdk/client-sesv2", () => {
      throw new Error("manifest imported @aws-sdk/client-sesv2");
    });

    const { sesEmailProviderManifest: manifest } = await import("../src/manifest.js");

    expect(manifest.packageName).toBe("@cognidesk/integration-email-ses");
    vi.doUnmock("@aws-sdk/client-ses");
    vi.doUnmock("@aws-sdk/client-sesv2");
  });

  it("constructs real AWS SDK v3 clients for default runtime use", () => {
    const client = createSesEmailClient({
      region: "eu-central-1",
      credentials: {
        accessKeyId: "test-access-key",
        secretAccessKey: "test-secret-key",
      },
    });

    expect(client.rawClients.sesv2).toBeInstanceOf(SESv2Client);
    expect(client.rawClients.ses).toBeInstanceOf(SESClient);
  });

  it("passes provider conformance for the split package manifest", async () => {
    const report = assertIntegrationConformance({
      manifest: sesEmailProviderManifest,
      operations: createOperationHandlerStubs(sesEmailProviderManifest),
    });

    expect(report).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(sesEmailCredentialStatuses({
      credentialsConfigured: true,
      region: "eu-central-1",
      snsVerificationConfigured: true,
    }).every((status) => status.state === "configured")).toBe(true);
    expect(sesEmailCredentialStatuses({
      credentialsConfigured: true,
      region: "   ",
      snsVerificationConfigured: true,
    }).find((status) => status.requirementId === "aws-region")?.state).toBe("missing");
  });

  it("binds declared operations to AWS SDK v3 clients", async () => {
    const sesv2Send = vi.fn(async (command: unknown) => {
      if (command instanceof GetAccountCommand) return { SendingEnabled: true };
      if (command instanceof SendEmailCommand) return { MessageId: "ses-message-id" };
      return {};
    });
    const sesSend = vi.fn(async (command: unknown) => {
      if (command instanceof SendRawEmailCommand) return { MessageId: "raw-ses-message-id" };
      return {};
    });
    const rawClients = { sesv2: { send: sesv2Send }, ses: { send: sesSend } } as unknown as SesRawClients;
    const integration = createSesEmailIntegration({ region: "eu-central-1", rawClients });

    await expect(integration.operations["email.send"]?.({
      FromEmailAddress: "support@example.test",
      Destination: { ToAddresses: ["customer@example.test"] },
      Content: { Simple: { Subject: { Data: "Hi" }, Body: { Text: { Data: "Body" } } } },
    })).resolves.toMatchObject({ MessageId: "ses-message-id" });
    await expect(integration.operations["ses.rawEmail.send"]?.({
      Source: "support@example.test",
      Destinations: ["customer@example.test"],
      RawMessage: { Data: new Uint8Array([82, 97, 119]) },
    })).resolves.toMatchObject({ MessageId: "raw-ses-message-id" });
    await integration.operations["ses.account.read"]?.();

    expect(sesv2Send).toHaveBeenCalledTimes(2);
    expect(sesSend).toHaveBeenCalledTimes(1);
  });

  it("passes fail-closed SNS verification options through inbound operations", async () => {
    const integration = createSesEmailIntegration({
      region: "eu-central-1",
      rawClients: { sesv2: { send: vi.fn(async () => ({})) }, ses: { send: vi.fn(async () => ({})) } } as unknown as SesRawClients,
      snsParseOptions: {
        verifySignature: () => true,
      },
    });

    await expect(integration.operations["ses.snsNotification.receive"]?.(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({
        Message: JSON.stringify({ eventType: "Received" }),
      }),
    }))).resolves.toMatchObject({ verified: true, event: { eventType: "Received" } });
    await expect(integration.operations["email.deliveryStatus.read"]?.(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({
        Message: JSON.stringify({ eventType: "Delivery" }),
      }),
    }))).resolves.toMatchObject({ verified: true, event: { eventType: "Delivery" } });
  });

  it("parses SNS and SQS SES events and fails closed when verification is required", async () => {
    const request = new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({
        Type: "Notification",
        MessageId: "sns-message-id",
        Message: JSON.stringify({ eventType: "Delivery", mail: { messageId: "ses-message-id" } }),
      }),
    });

    await expect(parseSesSnsNotification(request, { verifySignature: () => true, requireSignatureVerification: true }))
      .resolves.toMatchObject({ verified: true, event: { eventType: "Delivery" } });
    expect(parseSesSqsRecord({ body: JSON.stringify({ Message: JSON.stringify({ eventType: "Bounce" }) }) }))
      .toMatchObject({ event: { eventType: "Bounce" } });
    await expect(parseSesSnsNotification(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({ Message: "{}" }),
    }), { requireSignatureVerification: true })).rejects.toThrow("verification is required");
  });
});
