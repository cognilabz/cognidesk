import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance, createOperationHandlerStubs } from "@cognidesk/integration-kit/testing";
import {
  createSmtpEmailClient,
  createSmtpEmailIntegration,
  htmlEmailFromText,
  smtpEmailCredentialStatuses,
  smtpEmailProviderManifest,
  type SmtpRawTransport,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/integration-email-smtp", () => {
  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(source).not.toContain("from \"nodemailer\"");
    expect(smtpEmailProviderManifest.packageName).toBe("@cognidesk/integration-email-smtp");
  });

  it("imports /manifest without loading nodemailer", async () => {
    vi.resetModules();
    vi.doMock("nodemailer", () => {
      throw new Error("manifest imported nodemailer");
    });

    const { smtpEmailProviderManifest: manifest } = await import("../src/manifest.js");

    expect(manifest.packageName).toBe("@cognidesk/integration-email-smtp");
    vi.doUnmock("nodemailer");
  });

  it("passes provider conformance for the split package manifest", async () => {
    const report = assertIntegrationConformance({
      manifest: smtpEmailProviderManifest,
      operations: createOperationHandlerStubs(smtpEmailProviderManifest),
    });

    expect(report).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(smtpEmailCredentialStatuses({
      serverConfigured: true,
      accountCredentialsConfigured: true,
      senderConfigured: true,
      authMode: "password",
    }).every((status) => status.state === "configured")).toBe(true);
  });

  it("sends through the configured SMTP transport and applies defaults", async () => {
    const sendMail = vi.fn(async () => ({
      messageId: "smtp-message-id",
      response: "250 accepted",
      accepted: ["customer@example.test"],
      rejected: [],
    }));
    const rawTransport = { sendMail } as unknown as SmtpRawTransport;
    const client = createSmtpEmailClient({
      transport: { host: "smtp.example.test", port: 587, secure: false },
      defaults: {
        from: "sender@example.test",
        replyTo: "support@example.test",
      },
      rawTransport,
    });

    await expect(client.sendEmail({
      to: "customer@example.test",
      subject: "Secure sign-in",
      text: "Open the secure sign-in link.",
      html: "<p>Open the secure sign-in link.</p>",
    })).resolves.toEqual({
      provider: "smtp",
      messageId: "smtp-message-id",
      response: "250 accepted",
      accepted: ["customer@example.test"],
      rejected: [],
      pending: [],
    });

    expect(sendMail).toHaveBeenCalledWith({
      from: "sender@example.test",
      to: "customer@example.test",
      replyTo: "support@example.test",
      subject: "Secure sign-in",
      text: "Open the secure sign-in link.",
      html: "<p>Open the secure sign-in link.</p>",
    });
  });

  it("binds declared operations to the SMTP client", async () => {
    const rawTransport = {
      sendMail: vi.fn(async () => ({ accepted: ["customer@example.test"], rejected: [] })),
      verify: vi.fn(async () => true),
    } as unknown as SmtpRawTransport;
    const integration = createSmtpEmailIntegration({
      transport: { host: "smtp.example.test", port: 587, secure: false },
      defaults: { from: "sender@example.test" },
      rawTransport,
    });

    await expect(integration.operations["email.send"]?.({
      to: "customer@example.test",
      subject: "Hello",
      text: "Hi",
    })).resolves.toMatchObject({ provider: "smtp", accepted: ["customer@example.test"] });
    await expect(integration.operations["email.reply.send"]?.({
      to: "customer@example.test",
      subject: "Re: Hello",
      text: "Hi again",
    })).resolves.toMatchObject({ provider: "smtp", accepted: ["customer@example.test"] });
    await expect(integration.operations["smtp.transport.check"]?.())
      .resolves.toMatchObject({ ready: true, verified: true, host: "smtp.example.test" });
    expect(integration.rawTransport).toBe(rawTransport);
    expect(integration.client.rawTransport).toBe(rawTransport);
  });

  it("creates simple HTML from plain text email bodies", () => {
    expect(htmlEmailFromText("Hello\n\nOpen <link>")).toBe("<p>Hello</p>\n<p>Open &lt;link&gt;</p>");
  });
});
