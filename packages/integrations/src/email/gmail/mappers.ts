import { randomUUID } from "node:crypto";
import type { GmailRawMessageInput } from "./contracts.js";

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

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}
