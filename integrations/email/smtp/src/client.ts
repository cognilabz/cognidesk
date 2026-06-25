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
  createTransport(options: SmtpTransportOptions): unknown;
};

export function createSmtpEmailClient(options: SmtpEmailClientOptions): SmtpEmailClient {
  assertSmtpTransportOptions(options.transport);
  const rawTransportCandidate: unknown = options.rawTransport ?? createNodemailerTransport(options.transport);
  assertSmtpRawTransport(
    rawTransportCandidate,
    options.rawTransport ? "rawTransport" : "nodemailer.createTransport() result",
  );
  const rawTransport = rawTransportCandidate;
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
    if (!isRecord(info)) throw new Error("SMTP transport sendMail() must resolve to a delivery info object.");
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
        if (typeof verified !== "boolean") {
          throw new Error("SMTP transport verify() must resolve to a boolean.");
        }
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
  const nodemailer = requireNodemailerModule();
  const transport = nodemailer.createTransport(options);
  assertSmtpRawTransport(transport, "nodemailer.createTransport() result");
  return transport;
}

function requireNodemailerModule(): NodemailerModule {
  const loaded = require("nodemailer") as unknown;
  if (isNodemailerModule(loaded)) return loaded;
  if (isRecord(loaded) && isNodemailerModule(loaded.default)) return loaded.default;
  throw new Error("SMTP runtime requires nodemailer.createTransport.");
}

function isNodemailerModule(value: unknown): value is NodemailerModule {
  return isRecord(value) && typeof value.createTransport === "function";
}

function assertSmtpTransportOptions(value: unknown): asserts value is SmtpTransportOptions {
  if (!isRecord(value)) throw new Error("SMTP transport options must be an object.");
  if (typeof value.host !== "string" || value.host.trim() === "") {
    throw new Error("SMTP transport requires a non-empty host.");
  }
  if (typeof value.port !== "number" || !Number.isInteger(value.port) || value.port < 1 || value.port > 65_535) {
    throw new Error("SMTP transport requires a port between 1 and 65535.");
  }
  if (typeof value.secure !== "boolean") {
    throw new Error("SMTP transport requires secure to be a boolean.");
  }
  if (value.auth !== undefined) {
    if (!isRecord(value.auth) || typeof value.auth.user !== "string" || typeof value.auth.pass !== "string") {
      throw new Error("SMTP transport auth requires string user and pass values.");
    }
  }
  if (value.requireTLS !== undefined && typeof value.requireTLS !== "boolean") {
    throw new Error("SMTP transport requireTLS must be a boolean when provided.");
  }
  assertOptionalString(value.name, "name");
  assertOptionalString(value.localAddress, "localAddress");
  assertOptionalNonNegativeNumber(value.connectionTimeout, "connectionTimeout");
  assertOptionalNonNegativeNumber(value.greetingTimeout, "greetingTimeout");
  assertOptionalNonNegativeNumber(value.socketTimeout, "socketTimeout");
}

function assertOptionalString(value: unknown, field: string) {
  if (value !== undefined && typeof value !== "string") {
    throw new Error(`SMTP transport ${field} must be a string when provided.`);
  }
}

function assertOptionalNonNegativeNumber(value: unknown, field: string) {
  if (value !== undefined && (typeof value !== "number" || !Number.isFinite(value) || value < 0)) {
    throw new Error(`SMTP transport ${field} must be a non-negative number when provided.`);
  }
}

function assertSmtpRawTransport(value: unknown, source: string): asserts value is SmtpRawTransport {
  if (!isRecord(value) || typeof value.sendMail !== "function") {
    throw new Error(`SMTP runtime requires ${source} to provide sendMail().`);
  }
  if (value.verify !== undefined && typeof value.verify !== "function") {
    throw new Error(`SMTP runtime requires ${source}.verify to be a function when provided.`);
  }
  if (value.close !== undefined && typeof value.close !== "function") {
    throw new Error(`SMTP runtime requires ${source}.close to be a function when provided.`);
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
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
