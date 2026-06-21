import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance, createOperationHandlerStubs } from "@cognidesk/integration-kit/testing";
import {
  createSesEmailIntegration,
  parseSesSnsNotification,
  parseSesSqsRecord,
  sesEmailCredentialStatuses,
  sesEmailProviderManifest,
  type SesRawClients,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/email-ses", () => {
  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(source).not.toMatch(/from ["']@aws-sdk\/client-ses/);
    expect(sesEmailProviderManifest.packageName).toBe("@cognidesk/email-ses");
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

    expect(manifest.packageName).toBe("@cognidesk/email-ses");
    vi.doUnmock("@aws-sdk/client-ses");
    vi.doUnmock("@aws-sdk/client-sesv2");
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
  });

  it("binds declared operations to AWS SDK v3 clients", async () => {
    const send = vi.fn(async (command: { constructor: { name: string } }) => {
      if (command.constructor.name === "GetAccountCommand") return { SendingEnabled: true };
      if (command.constructor.name === "ListEmailIdentitiesCommand") return { EmailIdentities: [{ IdentityName: "example.test" }] };
      if (command.constructor.name === "SendEmailCommand") return { MessageId: "ses-message-id" };
      return {};
    });
    const rawClients = { sesv2: { send } } as unknown as SesRawClients;
    const integration = createSesEmailIntegration({ region: "eu-central-1", rawClients });

    await expect(integration.operations["email.send"]?.({
      FromEmailAddress: "support@example.test",
      Destination: { ToAddresses: ["customer@example.test"] },
      Content: { Simple: { Subject: { Data: "Hi" }, Body: { Text: { Data: "Body" } } } },
    })).resolves.toMatchObject({ MessageId: "ses-message-id" });
    await integration.operations["ses.account.read"]?.();

    expect(send).toHaveBeenCalledTimes(2);
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
