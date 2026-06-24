import { describe, expect, it, vi } from "vitest";
import type { CognideskRuntime, ConversationRecord, RuntimeEvent } from "@cognidesk/core";
import type { ImapEmailClient } from "@cognidesk/integration-email-imap";
import {
  createFlightDemoEmailReplyPoller,
  flightDemoEmailReplySubject,
  flightDemoEmailReplyVerificationCode,
  listFlightDemoPendingEmailReplyGates,
} from "../server/email-reply-verification.js";

const statusEventType = "custom.flight.email_channel_switch_status" as const;
const conversationId = "conversation-secure-email";
const bookingReference = "CGN-4821";
const accountEmail = "customer@example.test";

describe("flight demo email reply verification", () => {
  it("creates a deterministic verification code and subject for email replies", () => {
    const code = flightDemoEmailReplyVerificationCode({
      conversationId,
      bookingReference,
      accountEmail,
    });

    expect(code).toMatch(/^CDESK-[A-Z0-9]{8}$/);
    expect(code).not.toContain("customer");
    expect(flightDemoEmailReplyVerificationCode({
      conversationId,
      bookingReference,
      accountEmail: accountEmail.toUpperCase(),
    })).toBe(code);
    expect(flightDemoEmailReplySubject({ bookingReference, verificationCode: code }))
      .toBe(`Confirm booking ${bookingReference} [${code}]`);
  });

  it("lists pending reply gates from waiting secure-email status events", async () => {
    const runtime = createRuntimeWithPendingGate();

    const gates = await listFlightDemoPendingEmailReplyGates({
      runtime,
      agentId: "flight-demo",
      statusEventType,
    });

    expect(gates).toHaveLength(1);
    expect(gates[0]).toMatchObject({
      conversationId,
      bookingReference,
      accountEmail,
      requestType: "secure itinerary change",
      emailThreadId: "secure-email-thread",
    });
    expect(gates[0]?.verificationCode).toMatch(/^CDESK-[A-Z0-9]{8}$/);
  });

  it("verifies a matching IMAP reply and resumes the workflow through a channel event", async () => {
    const runtime = createRuntimeWithPendingGate();
    const code = flightDemoEmailReplyVerificationCode({
      conversationId,
      bookingReference,
      accountEmail,
    });
    const imapClient = createMatchingImapClient(code);
    const poller = createFlightDemoEmailReplyPoller({
      runtime,
      agentId: "flight-demo",
      imapClient,
      channelId: "flight-email-secure-login",
      statusEventType,
      policyId: "secure-email-login",
      pollIntervalMs: 15_000,
      lookbackMinutes: 60,
    });

    await expect(poller.pollOnce()).resolves.toEqual({ pending: 1, matched: 1 });

    expect(runtime.emit).toHaveBeenCalledWith(expect.objectContaining({
      conversationId,
      type: statusEventType,
      data: expect.objectContaining({
        status: "verified",
        provider: "imap",
        bookingReference,
        requestType: "secure itinerary change",
        imapUid: "42",
      }),
    }));
    expect(runtime.handleChannelEvent).toHaveBeenCalledWith(expect.objectContaining({
      conversationId,
      event: expect.objectContaining({
        nature: "message",
        direction: "inbound",
        intent: "customer-message",
        actor: { type: "customer" },
        metadata: expect.objectContaining({
          emailReplyVerified: true,
          verificationCode: code,
        }),
      }),
      handling: expect.objectContaining({
        disposition: "model-turn",
        text: expect.stringContaining("confirmed their account email"),
      }),
    }));
  });
});

function createRuntimeWithPendingGate() {
  const conversation: ConversationRecord = {
    id: conversationId,
    agentId: "flight-demo",
    lifecycle: "active",
    context: {},
    createdAt: "2026-06-24T08:00:00.000Z",
    updatedAt: "2026-06-24T08:00:00.000Z",
  };
  return {
    listConversations: vi.fn(async () => [conversation]),
    listEvents: vi.fn(async () => [
      runtimeEvent(statusEventType, {
        status: "waiting_for_reply",
        provider: "smtp",
        emailThreadId: "secure-email-thread",
      }),
    ]),
    getSnapshot: vi.fn(async () => ({
      journeyContexts: [{
        journeyId: "secure-email-login",
        context: {
          bookingReference,
          accountEmail,
          requestType: "secure itinerary change",
        },
      }],
    })),
    emit: vi.fn(async (input: unknown) => runtimeEvent(statusEventType, input)),
    handleChannelEvent: vi.fn(async () => ({ events: [] })),
  } as unknown as CognideskRuntime & {
    emit: ReturnType<typeof vi.fn>;
    handleChannelEvent: ReturnType<typeof vi.fn>;
  };
}

function createMatchingImapClient(code: string) {
  return {
    rawClient: {},
    checkMailbox: vi.fn(),
    searchMessages: vi.fn(async () => [42]),
    fetchMessages: vi.fn(async () => [{
      uid: 42,
      envelope: {
        subject: `Re: Confirm booking ${bookingReference} [${code}]`,
        from: [{ address: accountEmail }],
      },
      source: Buffer.from(`CONFIRM ${code}`),
      internalDate: new Date("2026-06-24T08:05:00.000Z"),
    }]),
    close: vi.fn(async () => {}),
  } as unknown as ImapEmailClient;
}

function runtimeEvent(type: RuntimeEvent["type"], data: unknown): RuntimeEvent {
  return {
    id: `${type}-event`,
    conversationId,
    offset: 1,
    type,
    createdAt: "2026-06-24T08:00:00.000Z",
    data,
  } as RuntimeEvent;
}
