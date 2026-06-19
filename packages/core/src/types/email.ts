export interface EmailQuoteTrimOptions {
  includeQuotedText?: boolean;
}

export interface EmailQuoteTrimResult {
  text: string;
  removedQuote: boolean;
  quotedText?: string;
  reason?: "reply-header" | "original-message" | "forwarded-message" | "quoted-block" | "metadata-header";
}

type EmailQuoteTrimReason = NonNullable<EmailQuoteTrimResult["reason"]>;

export interface EmailAttachmentMetadataInput {
  id?: string;
  providerObjectId?: string;
  filename?: string | null;
  name?: string | null;
  contentType?: string | null;
  mimeType?: string | null;
  sizeBytes?: number | null;
  size?: number | null;
  inline?: boolean | null;
  disposition?: string | null;
  contentId?: string | null;
  checksum?: string | null;
  metadata?: Record<string, unknown>;
}

export interface EmailAttachmentMetadata {
  id?: string;
  providerObjectId?: string;
  filename: string;
  contentType: string;
  sizeBytes?: number;
  disposition: "attachment" | "inline";
  contentId?: string;
  checksum?: string;
  metadata?: Record<string, unknown>;
}

export interface EmailThreadMessageInput {
  id?: string;
  providerObjectId?: string;
  messageId?: string;
  inReplyTo?: string;
  references?: string[];
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  subject?: string;
  sentAt?: string | Date;
  text?: string;
  html?: string;
  attachments?: EmailAttachmentMetadataInput[];
  metadata?: Record<string, unknown>;
}

export interface EmailThreadContextOptions {
  trimQuotes?: boolean;
  maxMessages?: number;
}

export interface EmailThreadContextMessage {
  id?: string;
  providerObjectId?: string;
  messageId?: string;
  inReplyTo?: string;
  references: string[];
  from?: string;
  to: string[];
  cc: string[];
  bcc: string[];
  subject?: string;
  sentAt?: string;
  text: string;
  quotedTextRemoved: boolean;
  attachments: EmailAttachmentMetadata[];
  metadata?: Record<string, unknown>;
}

export interface EmailThreadContext {
  subject?: string;
  participants: string[];
  messageIds: string[];
  references: string[];
  attachmentCount: number;
  messages: EmailThreadContextMessage[];
}

export function trimEmailQuote(input: string, options: EmailQuoteTrimOptions = {}): EmailQuoteTrimResult {
  const normalized = normalizeNewlines(input).trim();
  if (!normalized) return { text: "", removedQuote: false };

  const lines = normalized.split("\n");
  const boundary = findQuoteBoundary(lines);
  if (!boundary) return { text: normalized, removedQuote: false };

  const text = trimBlankLines(lines.slice(0, boundary.index)).join("\n").trim();
  const quotedLines = trimBlankLines(lines.slice(boundary.index));
  return {
    text,
    removedQuote: quotedLines.length > 0,
    ...(options.includeQuotedText ? { quotedText: quotedLines.join("\n").trim() } : {}),
    reason: boundary.reason,
  };
}

export function normalizeEmailAttachmentMetadata(input: EmailAttachmentMetadataInput): EmailAttachmentMetadata {
  const id = normalizeOptionalString(input.id);
  const providerObjectId = normalizeOptionalString(input.providerObjectId);
  const filename = normalizeOptionalString(input.filename ?? input.name) ?? "attachment";
  const contentType = normalizeOptionalString(input.contentType ?? input.mimeType) ?? "application/octet-stream";
  const sizeBytes = normalizeSize(input.sizeBytes ?? input.size);
  const explicitDisposition = normalizeOptionalString(input.disposition)?.toLowerCase();
  const disposition = input.inline || explicitDisposition === "inline" ? "inline" : "attachment";
  const contentId = normalizeOptionalString(input.contentId);
  const checksum = normalizeOptionalString(input.checksum);

  return {
    ...(id ? { id } : {}),
    ...(providerObjectId ? { providerObjectId } : {}),
    filename,
    contentType,
    ...(sizeBytes === undefined ? {} : { sizeBytes }),
    disposition,
    ...(contentId ? { contentId } : {}),
    ...(checksum ? { checksum } : {}),
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

export function collectEmailAttachmentMetadata(
  attachments: EmailAttachmentMetadataInput[] = [],
): EmailAttachmentMetadata[] {
  return attachments.map((attachment) => normalizeEmailAttachmentMetadata(attachment));
}

export function createEmailThreadContext(
  messages: EmailThreadMessageInput[],
  options: EmailThreadContextOptions = {},
): EmailThreadContext {
  const trimQuotes = options.trimQuotes ?? true;
  const ordered = [...messages]
    .sort(compareEmailThreadMessages)
    .slice(options.maxMessages === undefined ? 0 : Math.max(0, messages.length - options.maxMessages));

  const contextMessages = ordered.map((message) => {
    const body = message.text ?? htmlToPlainText(message.html ?? "");
    const trimmed = trimQuotes ? trimEmailQuote(body) : { text: normalizeNewlines(body).trim(), removedQuote: false };
    const references = uniqueStrings([
      ...(message.references ?? []),
      ...(message.inReplyTo ? [message.inReplyTo] : []),
    ]);

    return {
      ...(message.id ? { id: message.id } : {}),
      ...(message.providerObjectId ? { providerObjectId: message.providerObjectId } : {}),
      ...(message.messageId ? { messageId: message.messageId } : {}),
      ...(message.inReplyTo ? { inReplyTo: message.inReplyTo } : {}),
      references,
      ...(message.from ? { from: message.from } : {}),
      to: message.to ?? [],
      cc: message.cc ?? [],
      bcc: message.bcc ?? [],
      ...(message.subject ? { subject: message.subject } : {}),
      ...(message.sentAt ? { sentAt: normalizeDate(message.sentAt) } : {}),
      text: trimmed.text,
      quotedTextRemoved: trimmed.removedQuote,
      attachments: collectEmailAttachmentMetadata(message.attachments),
      ...(message.metadata ? { metadata: message.metadata } : {}),
    };
  });

  const participants = uniqueStrings(contextMessages.flatMap((message) => [
    ...(message.from ? [message.from] : []),
    ...message.to,
    ...message.cc,
    ...message.bcc,
  ]));
  const messageIds = uniqueStrings(contextMessages.flatMap((message) => message.messageId ? [message.messageId] : []));
  const references = uniqueStrings(contextMessages.flatMap((message) => message.references));
  const subject = contextMessages.find((message) => message.subject)?.subject;

  return {
    ...(subject ? { subject } : {}),
    participants,
    messageIds,
    references,
    attachmentCount: contextMessages.reduce((count, message) => count + message.attachments.length, 0),
    messages: contextMessages,
  };
}

function findQuoteBoundary(lines: string[]): { index: number; reason: EmailQuoteTrimReason } | undefined {
  let firstQuotedLine: number | undefined;
  let quotedRun = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]?.trim() ?? "";
    if (isOriginalMessageBoundary(line)) return { index, reason: "original-message" };
    if (isForwardedMessageBoundary(line)) return { index, reason: "forwarded-message" };
    if (isReplyHeader(line)) return { index, reason: "reply-header" };
    if (isMetadataHeaderBoundary(lines, index)) return { index, reason: "metadata-header" };

    if (line.startsWith(">")) {
      firstQuotedLine ??= index;
      quotedRun += 1;
      if (quotedRun >= 2 || index > 0) return { index: firstQuotedLine, reason: "quoted-block" };
    } else if (line.length > 0) {
      firstQuotedLine = undefined;
      quotedRun = 0;
    }
  }

  return undefined;
}

function isOriginalMessageBoundary(line: string) {
  return /^-{2,}\s*Original Message\s*-{2,}$/i.test(line);
}

function isForwardedMessageBoundary(line: string) {
  return /^-{2,}\s*Forwarded message\s*-{2,}$/i.test(line);
}

function isReplyHeader(line: string) {
  return /^(On .+ wrote:|Am .+ schrieb .+:|Le .+ a ecrit\s*:|El .+ escribio\s*:)/i.test(stripDiacritics(line));
}

function isMetadataHeaderBoundary(lines: string[], index: number) {
  const window = lines.slice(index, index + 5).map((line) => line.trim());
  if (!/^From:/i.test(window[0] ?? "")) return false;
  const headerCount = window.filter((line) => /^(From|Sent|Date|To|Cc|Subject):/i.test(line)).length;
  return headerCount >= 3;
}

function htmlToPlainText(html: string) {
  return normalizeNewlines(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function compareEmailThreadMessages(left: EmailThreadMessageInput, right: EmailThreadMessageInput) {
  const leftTime = left.sentAt ? new Date(left.sentAt).getTime() : Number.MAX_SAFE_INTEGER;
  const rightTime = right.sentAt ? new Date(right.sentAt).getTime() : Number.MAX_SAFE_INTEGER;
  return leftTime - rightTime;
}

function normalizeDate(value: string | Date) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function normalizeNewlines(value: string) {
  return value.replace(/\r\n?/g, "\n");
}

function normalizeOptionalString(value: string | null | undefined) {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

function normalizeSize(value: number | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : undefined;
}

function trimBlankLines(lines: string[]) {
  let start = 0;
  let end = lines.length;
  while (start < end && (lines[start]?.trim() ?? "") === "") start += 1;
  while (end > start && (lines[end - 1]?.trim() ?? "") === "") end -= 1;
  return lines.slice(start, end);
}

function uniqueStrings(values: string[]) {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const normalized = value.trim();
    if (!normalized || seen.has(normalized.toLowerCase())) continue;
    seen.add(normalized.toLowerCase());
    result.push(normalized);
  }
  return result;
}

function stripDiacritics(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
