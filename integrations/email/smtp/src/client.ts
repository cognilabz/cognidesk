import { createRequire } from "node:module";
import { defineIntegration, normalizeIntegrationError } from "@cognidesk/integration-kit";
import { smtpEmailProviderManifest } from "./manifest.js";

const require = createRequire(import.meta.url);

export interface SmtpTransportAuth {
  user: string;
  pass: string;
}

export interface SmtpTransportOptions {
  host: string;
  port: number;
  secure: boolean;
  auth?: SmtpTransportAuth;
  requireTLS?: boolean;
  name?: string;
  localAddress?: string;
  connectionTimeout?: number;
  greetingTimeout?: number;
  socketTimeout?: number;
}

export interface SmtpEmailDefaults {
  from?: string;
  replyTo?: string;
}

export interface SmtpEmailMessageInput {
  from?: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  cc?: string | string[];
  bcc?: string | string[];
  replyTo?: string;
  headers?: Record<string, string>;
  attachments?: unknown[];
}

export interface SmtpEmailSendResult {
  provider: "smtp";
  messageId?: string;
  response?: string;
  accepted: string[];
  rejected: string[];
  pending: string[];
}

export interface SmtpTransportReadiness {
  ready: boolean;
  verified: boolean;
  host: string;
  port: number;
  secure: boolean;
}

export interface SmtpRawTransport {
  sendMail(input: SmtpEmailMessageInput & { from: string }): Promise<SmtpRawSendInfo>;
  verify?(): Promise<boolean>;
  close?(): void;
}

export interface SmtpRawSendInfo {
  messageId?: unknown;
  response?: unknown;
  accepted?: unknown;
  rejected?: unknown;
  pending?: unknown;
}

export interface SmtpEmailClientOptions {
  transport: SmtpTransportOptions;
  defaults?: SmtpEmailDefaults;
  rawTransport?: SmtpRawTransport;
}

export interface SmtpEmailClient {
  rawTransport: SmtpRawTransport;
  sendEmail(input: SmtpEmailMessageInput): Promise<SmtpEmailSendResult>;
  sendReply(input: SmtpEmailMessageInput): Promise<SmtpEmailSendResult>;
  checkTransport(): Promise<SmtpTransportReadiness>;
  close(): void;
}

type NodemailerModule = {
  createTransport(options: SmtpTransportOptions): SmtpRawTransport;
};

export function createSmtpEmailClient(options: SmtpEmailClientOptions): SmtpEmailClient {
  const rawTransport = options.rawTransport ?? createNodemailerTransport(options.transport);
  const call = async <T>(operation: () => Promise<T>) => {
    try {
      return await operation();
    } catch (error) {
      throw normalizeIntegrationError(error, { provider: "smtp" });
    }
  };

  const send = (input: SmtpEmailMessageInput) => call(async () => {
    const from = input.from ?? options.defaults?.from;
    if (!from) throw new Error("SMTP email send requires a from address.");
    const replyTo = input.replyTo ?? options.defaults?.replyTo;
    const message = {
      from,
      to: input.to,
      subject: input.subject,
      ...(input.text ? { text: input.text } : {}),
      ...(input.html ? { html: input.html } : {}),
      ...(input.cc ? { cc: input.cc } : {}),
      ...(input.bcc ? { bcc: input.bcc } : {}),
      ...(replyTo ? { replyTo } : {}),
      ...(input.headers ? { headers: input.headers } : {}),
      ...(input.attachments ? { attachments: input.attachments } : {}),
    };
    const info = await rawTransport.sendMail(message);
    return {
      provider: "smtp" as const,
      ...(typeof info.messageId === "string" ? { messageId: info.messageId } : {}),
      ...(typeof info.response === "string" ? { response: info.response } : {}),
      accepted: stringArray(info.accepted),
      rejected: stringArray(info.rejected),
      pending: stringArray(info.pending),
    };
  });

  return {
    rawTransport,
    sendEmail: send,
    sendReply: send,
    async checkTransport() {
      return call(async () => {
        const verified = rawTransport.verify ? await rawTransport.verify() : true;
        return {
          ready: Boolean(verified),
          verified: Boolean(rawTransport.verify ? verified : false),
          host: options.transport.host,
          port: options.transport.port,
          secure: options.transport.secure,
        };
      });
    },
    close() {
      rawTransport.close?.();
    },
  };
}

export function createSmtpEmailIntegration(options: SmtpEmailClientOptions) {
  const client = createSmtpEmailClient(options);
  return {
    ...defineIntegration({
      manifest: smtpEmailProviderManifest,
      operations: {
        "email.send": (input: SmtpEmailMessageInput) => client.sendEmail(input),
        "email.reply.send": (input: SmtpEmailMessageInput) => client.sendReply(input),
        "smtp.transport.check": () => client.checkTransport(),
      },
    }),
    rawTransport: client.rawTransport,
    client,
  };
}

export function htmlEmailFromText(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("\n");
}

function createNodemailerTransport(options: SmtpTransportOptions) {
  const nodemailer = require("nodemailer") as NodemailerModule;
  return nodemailer.createTransport(options);
}

function stringArray(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry) => {
    if (typeof entry === "string") return [entry];
    if (entry && typeof entry === "object" && "address" in entry && typeof entry.address === "string") {
      return [entry.address];
    }
    return [];
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
