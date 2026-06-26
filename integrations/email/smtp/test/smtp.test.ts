import { createRequire } from "node:module";
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
const nodeRequire = createRequire(import.meta.url);

type MutableNodemailerModule = {
  createTransport(options: unknown): unknown;
};

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

  it("creates the default SMTP runtime through package-local Nodemailer", async () => {
    const rawTransport: SmtpRawTransport = {
      sendMail: vi.fn(async () => ({
        messageId: "smtp-message-id",
        response: "250 accepted",
        accepted: ["customer@example.test"],
        rejected: [],
      })),
      verify: vi.fn(async () => true),
      close: vi.fn(),
    };
    const createTransport = vi.fn((_options: unknown) => rawTransport);

    await withPatchedNodemailer(createTransport, async () => {
      const transport = {
        host: "smtp.example.test",
        port: 587,
        secure: false,
        auth: { user: "sender@example.test", pass: "smtp-password" },
        requireTLS: true,
      };
      const client = createSmtpEmailClient({
        transport,
        defaults: { from: "sender@example.test" },
      });

      await expect(client.sendEmail({
        to: "customer@example.test",
        subject: "Hello",
        text: "Hi",
      })).resolves.toMatchObject({
        provider: "smtp",
        messageId: "smtp-message-id",
        accepted: ["customer@example.test"],
      });
      await expect(client.checkTransport()).resolves.toMatchObject({
        ready: true,
        verified: true,
        host: "smtp.example.test",
      });
      client.close();

      expect(client.rawTransport).toBe(rawTransport);
      expect(createTransport).toHaveBeenCalledWith(transport);
      expect(rawTransport.sendMail).toHaveBeenCalledWith({
        from: "sender@example.test",
        to: "customer@example.test",
        subject: "Hello",
        text: "Hi",
      });
      expect(rawTransport.verify).toHaveBeenCalledTimes(1);
      expect(rawTransport.close).toHaveBeenCalledTimes(1);
    });
  });

  it("fails closed when Nodemailer does not create a usable SMTP transport", async () => {
    const createTransport = vi.fn(() => ({ verify: vi.fn(async () => true) }));

    await withPatchedNodemailer(createTransport, () => {
      expect(() => createSmtpEmailClient({
        transport: { host: "smtp.example.test", port: 587, secure: false },
      })).toThrow("nodemailer.createTransport() result to provide sendMail()");
    });
  });

  it("fails closed for malformed raw SMTP transport overrides", () => {
    expect(() => createSmtpEmailClient({
      transport: { host: "smtp.example.test", port: 587, secure: false },
      rawTransport: { verify: vi.fn(async () => true) } as unknown as SmtpRawTransport,
    })).toThrow("rawTransport to provide sendMail()");
  });

  it("fails closed for malformed SMTP transport options", () => {
    const rawTransport: SmtpRawTransport = {
      sendMail: vi.fn(async () => ({ accepted: [], rejected: [] })),
    };

    expect(() => createSmtpEmailClient({
      transport: { host: "", port: 587, secure: false },
      rawTransport,
    })).toThrow("non-empty host");
    expect(() => createSmtpEmailClient({
      transport: { host: "smtp.example.test", port: 0, secure: false },
      rawTransport,
    })).toThrow("port between 1 and 65535");
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

async function withPatchedNodemailer<T>(
  createTransport: MutableNodemailerModule["createTransport"],
  run: () => T | Promise<T>,
) {
  const nodemailer = nodeRequire("nodemailer") as MutableNodemailerModule;
  const originalCreateTransport = nodemailer.createTransport;
  nodemailer.createTransport = createTransport;
  try {
    return await run();
  } finally {
    nodemailer.createTransport = originalCreateTransport;
  }
}
