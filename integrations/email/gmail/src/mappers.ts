import { randomUUID } from "node:crypto";
import type { gmail_v1 } from "@googleapis/gmail";
import type {
  GmailComposedMessageInput,
  GmailEmailAttachment,
  GmailEmailDraft,
  GmailEmailMessage,
  GmailEmailThread,
  GmailRawMessageInput,
} from "./contracts.js";

export function createGmailRawMessage(input: GmailRawMessageInput) {
  const messageId = input.messageId ?? `<${randomUUID()}@cognidesk.local>`;
  const headers: Array<[string, string]> = [
    ["From", input.from],
    ["To", input.to.join(", ")],
  ];
  if (input.cc?.length) headers.push(["Cc", input.cc.join(", ")]);
  if (input.bcc?.length) headers.push(["Bcc", input.bcc.join(", ")]);
  headers.push(
    ["Subject", input.subject],
    ["Message-ID", messageId],
  );
  if (input.replyTo) headers.push(["Reply-To", input.replyTo]);
  if (input.inReplyTo) headers.push(["In-Reply-To", input.inReplyTo]);
  if (input.references?.length) headers.push(["References", input.references.join(" ")]);
  headers.push(
    ["MIME-Version", "1.0"],
    ["Content-Type", "text/plain; charset=UTF-8"],
    ["Content-Transfer-Encoding", "8bit"],
  );
  const raw = `${headers.map(([key, value]) => `${key}: ${sanitizeHeader(value)}`).join("\r\n")}\r\n\r\n${input.text}`;
  return Buffer.from(raw, "utf8").toString("base64url");
}

export function resolveGmailRawMessage(input: GmailComposedMessageInput) {
  if (input.raw) return input.raw;
  if (!input.from || !input.to || !input.subject || input.text === undefined) {
    throw new Error("Gmail raw message input requires raw or from, to, subject, and text.");
  }
  return createGmailRawMessage({
    from: input.from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    ...(input.cc ? { cc: input.cc } : {}),
    ...(input.bcc ? { bcc: input.bcc } : {}),
    ...(input.replyTo ? { replyTo: input.replyTo } : {}),
    ...(input.inReplyTo ? { inReplyTo: input.inReplyTo } : {}),
    ...(input.references ? { references: input.references } : {}),
    ...(input.messageId ? { messageId: input.messageId } : {}),
  });
}

export function normalizeGmailThread(thread: gmail_v1.Schema$Thread): GmailEmailThread {
  const normalized: GmailEmailThread = {
    provider: "gmail",
    messages: (thread.messages ?? []).map(normalizeGmailMessage),
    raw: thread,
  };
  if (thread.id) normalized.id = thread.id;
  if (thread.historyId) normalized.historyId = thread.historyId;
  return normalized;
}

export function normalizeGmailMessage(message: gmail_v1.Schema$Message): GmailEmailMessage {
  const headers = normalizeHeaders(message.payload?.headers ?? []);
  const normalized: GmailEmailMessage = {
    provider: "gmail",
    labelIds: message.labelIds ?? [],
    headers,
    attachments: collectAttachments(message.payload),
    raw: message,
  };
  if (message.id) normalized.id = message.id;
  if (message.threadId) normalized.threadId = message.threadId;
  if (message.historyId) normalized.historyId = message.historyId;
  if (message.internalDate) normalized.internalDate = message.internalDate;
  if (message.snippet) normalized.snippet = message.snippet;
  assignFirstHeader(normalized, "subject", headers.subject);
  assignFirstHeader(normalized, "from", headers.from);
  assignHeaderList(normalized, "to", headers.to);
  assignHeaderList(normalized, "cc", headers.cc);
  assignHeaderList(normalized, "bcc", headers.bcc);
  assignFirstHeader(normalized, "replyTo", headers["reply-to"]);
  assignFirstHeader(normalized, "messageId", headers["message-id"]);
  assignFirstHeader(normalized, "inReplyTo", headers["in-reply-to"]);
  if (headers.references?.[0]) normalized.references = headers.references[0].split(/\s+/).filter(Boolean);
  return normalized;
}

export function normalizeGmailDraft(draft: gmail_v1.Schema$Draft): GmailEmailDraft {
  const normalized: GmailEmailDraft = {
    provider: "gmail",
    raw: draft,
  };
  if (draft.id) normalized.id = draft.id;
  if (draft.message) normalized.message = normalizeGmailMessage(draft.message);
  return normalized;
}

function normalizeHeaders(headers: gmail_v1.Schema$MessagePartHeader[]) {
  const output: Record<string, string[]> = {};
  for (const header of headers) {
    if (!header.name || header.value === undefined || header.value === null) continue;
    const key = header.name.toLowerCase();
    output[key] = [...(output[key] ?? []), header.value];
  }
  return output;
}

function collectAttachments(part: gmail_v1.Schema$MessagePart | undefined): GmailEmailAttachment[] {
  if (!part) return [];
  const attachments: GmailEmailAttachment[] = [];
  const body = part.body;
  if (part.filename || body?.attachmentId) {
    const attachment: GmailEmailAttachment = {};
    if (part.partId) attachment.partId = part.partId;
    if (body?.attachmentId) attachment.attachmentId = body.attachmentId;
    if (part.filename) attachment.filename = part.filename;
    if (part.mimeType) attachment.mimeType = part.mimeType;
    if (body?.size !== undefined && body.size !== null) attachment.size = body.size;
    attachments.push(attachment);
  }
  for (const child of part.parts ?? []) attachments.push(...collectAttachments(child));
  return attachments;
}

function assignFirstHeader<T extends keyof GmailEmailMessage>(
  message: GmailEmailMessage,
  key: T,
  values: string[] | undefined,
) {
  const value = values?.[0];
  if (value !== undefined) {
    (message as unknown as Record<string, unknown>)[key] = value;
  }
}

function assignHeaderList<T extends keyof GmailEmailMessage>(
  message: GmailEmailMessage,
  key: T,
  values: string[] | undefined,
) {
  if (values?.length) {
    (message as unknown as Record<string, unknown>)[key] = values;
  }
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}
