import { createHash } from "node:crypto";
import { defineChannelContext, type CognideskRuntime, type ConversationRecord, type RuntimeEvent } from "@cognidesk/core";
import type { ImapEmailClient } from "@cognidesk/integration-email-imap";

export type FlightDemoEmailReplyGate = {
  conversation: ConversationRecord;
  conversationId: string;
  bookingReference: string;
  accountEmail: string;
  requestType: string;
  verificationCode: string;
  emailThreadId: string;
};

export type FlightDemoEmailReplyPoller = {
  start(): void;
  stop(): Promise<void>;
  pollOnce(): Promise<{ pending: number; matched: number }>;
  status(): { enabled: boolean; ready: boolean; lastPollAt?: string; lastError?: string };
};

export type FlightDemoEmailReplyPollerOptions = {
  runtime: CognideskRuntime;
  agentId: string;
  imapClient: ImapEmailClient;
  channelId: string;
  statusEventType: `custom.${string}`;
  policyId: string;
  pollIntervalMs: number;
  lookbackMinutes: number;
  logger?: Pick<Console, "error" | "info" | "warn">;
};

type ImapReplyMessage = {
  uid: string;
  subject: string;
  fromEmails: string[];
  sourceText: string;
  receivedAt?: string;
};

export function flightDemoEmailReplyVerificationCode(input: {
  conversationId: string;
  bookingReference: string;
  accountEmail: string;
}) {
  const digest = createHash("sha256")
    .update(`${input.conversationId}:${input.bookingReference}:${input.accountEmail.toLowerCase()}:email-reply-verification`)
    .digest("base64url")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 8)
    .toUpperCase();
  return `CDESK-${digest}`;
}

export function flightDemoEmailReplySubject(input: { bookingReference: string; verificationCode: string }) {
  return `Confirm booking ${input.bookingReference} [${input.verificationCode}]`;
}

export async function listFlightDemoPendingEmailReplyGates(input: {
  runtime: CognideskRuntime;
  agentId: string;
  statusEventType: `custom.${string}`;
}) {
  const conversations = await input.runtime.listConversations({ agentId: input.agentId, limit: 100 });
  const gates: FlightDemoEmailReplyGate[] = [];
  for (const conversation of conversations) {
    const events = await input.runtime.listEvents(conversation.id, 0);
    const status = latestEmailStatus(events, input.statusEventType);
    if (!status || !isRecord(status.data) || status.data.status !== "waiting_for_reply") continue;
    const snapshot = await input.runtime.getSnapshot(conversation.id);
    const context = flightSecureEmailContextFromSnapshot(snapshot);
    const bookingReference = typeof context.bookingReference === "string"
      ? context.bookingReference.trim().toUpperCase()
      : "";
    const accountEmail = typeof context.accountEmail === "string" ? context.accountEmail.trim() : "";
    const requestType = typeof context.requestType === "string"
      ? context.requestType.trim()
      : "account-protected flight request";
    if (!bookingReference || !isEmailLike(accountEmail)) continue;
    const emailThreadId = typeof status.data.emailThreadId === "string"
      ? status.data.emailThreadId
      : `secure-email-${shortId(conversation.id)}`;
    gates.push({
      conversation,
      conversationId: conversation.id,
      bookingReference,
      accountEmail,
      requestType,
      emailThreadId,
      verificationCode: flightDemoEmailReplyVerificationCode({
        conversationId: conversation.id,
        bookingReference,
        accountEmail,
      }),
    });
  }
  return gates;
}

export function createFlightDemoEmailReplyPoller(options: FlightDemoEmailReplyPollerOptions): FlightDemoEmailReplyPoller {
  const logger = options.logger ?? console;
  const processedMessageKeys = new Set<string>();
  let timer: NodeJS.Timeout | null = null;
  let polling = false;
  let lastPollAt: string | undefined;
  let lastError: string | undefined;

  const pollOnce = async () => {
    if (polling) return { pending: 0, matched: 0 };
    polling = true;
    try {
      const gates = await listFlightDemoPendingEmailReplyGates({
        runtime: options.runtime,
        agentId: options.agentId,
        statusEventType: options.statusEventType,
      });
      if (gates.length === 0) {
        lastPollAt = new Date().toISOString();
        lastError = undefined;
        return { pending: 0, matched: 0 };
      }
      const messages = await fetchRecentMessages(options.imapClient, options.lookbackMinutes);
      let matched = 0;
      for (const message of messages) {
        const messageKey = message.uid;
        if (processedMessageKeys.has(messageKey)) continue;
        const gate = gates.find((candidate) => emailReplyMatchesGate(message, candidate));
        if (!gate) continue;
        processedMessageKeys.add(messageKey);
        await markEmailReplyGateVerified(options, gate, message);
        matched += 1;
      }
      lastPollAt = new Date().toISOString();
      lastError = undefined;
      return { pending: gates.length, matched };
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Email reply verification polling failed.";
      logger.warn("Flight demo email reply verification polling failed.", error);
      return { pending: 0, matched: 0 };
    } finally {
      polling = false;
    }
  };

  return {
    start() {
      if (timer) return;
      void pollOnce();
      timer = setInterval(() => void pollOnce(), options.pollIntervalMs);
    },
    async stop() {
      if (timer) clearInterval(timer);
      timer = null;
      await options.imapClient.close();
    },
    pollOnce,
    status() {
      return {
        enabled: true,
        ready: !lastError,
        ...(lastPollAt ? { lastPollAt } : {}),
        ...(lastError ? { lastError } : {}),
      };
    },
  };
}

async function fetchRecentMessages(client: ImapEmailClient, lookbackMinutes: number): Promise<ImapReplyMessage[]> {
  const since = new Date(Date.now() - lookbackMinutes * 60_000);
  const uids = await client.searchMessages({ query: { since } as never, uid: true });
  const recentUids = uids.slice(-100);
  if (recentUids.length === 0) return [];
  const rawMessages = await client.fetchMessages({
    range: recentUids,
    query: {
      envelope: true,
      source: true,
      internalDate: true,
      uid: true,
    } as never,
    uid: true,
  });
  return rawMessages.map(normalizeImapReplyMessage).filter((message): message is ImapReplyMessage => Boolean(message));
}

async function markEmailReplyGateVerified(
  options: FlightDemoEmailReplyPollerOptions,
  gate: FlightDemoEmailReplyGate,
  message: ImapReplyMessage,
) {
  const channel = defineChannelContext({
    channelId: options.channelId,
    kind: "email",
    provider: "imap",
    externalThreadId: gate.emailThreadId,
    externalUserId: maskEmail(gate.accountEmail),
    capabilities: {
      async: true,
      html: true,
      markdown: false,
      threaded: true,
      deliveryReceipts: true,
    },
    metadata: {
      loginRequired: true,
      replyVerified: true,
      bookingReference: gate.bookingReference,
      requestType: gate.requestType,
      accountEmailMasked: maskEmail(gate.accountEmail),
      policyId: options.policyId,
    },
  });
  await options.runtime.emit({
    conversationId: gate.conversationId,
    type: options.statusEventType,
    data: {
      status: "verified",
      provider: "imap",
      channelId: options.channelId,
      emailThreadId: gate.emailThreadId,
      accountEmail: maskEmail(gate.accountEmail),
      bookingReference: gate.bookingReference,
      requestType: gate.requestType,
      verifiedAt: new Date().toISOString(),
      imapUid: message.uid,
      policyId: options.policyId,
    },
  });
  await options.runtime.handleChannelEvent({
    conversationId: gate.conversationId,
    event: {
      channel,
      nature: "message",
      direction: "inbound",
      intent: "customer-message",
      actor: { type: "customer" },
      ...(message.receivedAt ? { occurredAt: message.receivedAt } : {}),
      payload: {
        text: `Email verification confirmed for booking ${gate.bookingReference}.`,
        subject: message.subject,
        providerObject: {
          uid: message.uid,
          from: message.fromEmails.map(maskEmail),
        },
      },
      metadata: {
        emailReplyVerified: true,
        verificationCode: gate.verificationCode,
      },
    },
    handling: {
      disposition: "model-turn",
      text: [
        `The customer confirmed their account email by replying to the verification email for booking ${gate.bookingReference}.`,
        `Continue the ${gate.requestType}.`,
        "Do not ask for passwords, one-time codes, passport numbers, or payment details.",
      ].join(" "),
    },
  });
}

function emailReplyMatchesGate(message: ImapReplyMessage, gate: FlightDemoEmailReplyGate) {
  const searchable = `${message.subject}\n${message.sourceText}`.toUpperCase();
  if (!searchable.includes(gate.verificationCode.toUpperCase())) return false;
  const expected = gate.accountEmail.toLowerCase();
  return message.fromEmails.some((email) => email.toLowerCase() === expected);
}

function normalizeImapReplyMessage(value: unknown): ImapReplyMessage | null {
  if (!isRecord(value)) return null;
  const envelope = isRecord(value.envelope) ? value.envelope : {};
  const subject = typeof envelope.subject === "string" ? envelope.subject : "";
  const fromEmails = Array.isArray(envelope.from)
    ? envelope.from.flatMap((entry) => {
      if (!isRecord(entry)) return [];
      return typeof entry.address === "string" ? [entry.address] : [];
    })
    : [];
  const sourceText = sourceToText(value.source);
  const uidSeed = typeof value.uid === "number" || typeof value.uid === "bigint" || typeof value.uid === "string"
    ? String(value.uid)
    : createHash("sha256").update(`${subject}\n${sourceText}`).digest("base64url").slice(0, 16);
  const internalDate = value.internalDate instanceof Date
    ? value.internalDate.toISOString()
    : typeof value.internalDate === "string"
      ? value.internalDate
      : undefined;
  return {
    uid: uidSeed,
    subject,
    fromEmails,
    sourceText,
    ...(internalDate ? { receivedAt: internalDate } : {}),
  };
}

function latestEmailStatus(events: RuntimeEvent[], statusEventType: string) {
  return [...events].reverse().find((event) => event.type === statusEventType);
}

function flightSecureEmailContextFromSnapshot(snapshot: unknown) {
  if (!isRecord(snapshot)) return {};
  if (isRecord(snapshot.journeyContext)) return snapshot.journeyContext;
  if (!Array.isArray(snapshot.journeyContexts)) return {};
  const secureEmailContext = snapshot.journeyContexts.find((entry) => (
    isRecord(entry)
    && entry.journeyId === "secure-email-login"
    && isRecord(entry.context)
  ));
  return isRecord(secureEmailContext) && isRecord(secureEmailContext.context)
    ? secureEmailContext.context
    : {};
}

function sourceToText(value: unknown) {
  if (typeof value === "string") return value;
  if (value instanceof Uint8Array) return Buffer.from(value).toString("utf8");
  if (Buffer.isBuffer(value)) return value.toString("utf8");
  return "";
}

function isEmailLike(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function maskEmail(email: string) {
  const [local = "", domain = ""] = email.split("@");
  const visibleLocal = local.slice(0, Math.min(2, local.length));
  return `${visibleLocal}${local.length > visibleLocal.length ? "..." : "."}@${domain}`;
}

function shortId(value: string) {
  return value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "thread";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
