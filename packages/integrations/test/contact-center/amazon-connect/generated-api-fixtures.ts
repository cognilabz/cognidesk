import { vi } from "vitest";

export function createGeneratedApiFetchMock() {
  return vi.fn(async (url: string, init: RequestInit) => {
    if (url.endsWith("/contact/email") && init.method === "PUT") {
      return new Response(JSON.stringify({ ContactId: "email-contact-1" }), { status: 200 });
    }
    if (url.endsWith("/contact/outbound-chat") && init.method === "PUT") {
      return new Response(JSON.stringify({ ContactId: "outbound-chat-1" }), { status: 200 });
    }
    if (url.endsWith("/contact/outbound-voice") && init.method === "PUT") {
      return new Response(JSON.stringify({ ContactId: "voice-1" }), { status: 200 });
    }
    if (url.endsWith("/contact/webrtc") && init.method === "PUT") {
      return new Response(JSON.stringify({ ConnectionData: { Attendee: {} } }), { status: 200 });
    }
    if (url.endsWith("/participant/start-attachment-upload") && init.method === "POST") {
      return new Response(JSON.stringify({ AttachmentId: "attachment-1" }), { status: 200 });
    }
    if (url.endsWith("/domains/domain-1/cases") && init.method === "POST") {
      return new Response(JSON.stringify({ caseId: "case-1" }), { status: 200 });
    }
    if (url.endsWith("/campaigns/campaign-1/start") && init.method === "POST") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    if (url.endsWith("/realtime-contact-analysis/analysis-segments") && init.method === "POST") {
      return new Response(JSON.stringify({ Segments: [] }), { status: 200 });
    }
    if (url.endsWith("/domain/domain-1") && init.method === "GET") {
      return new Response(JSON.stringify({ domain: { id: "domain-1" } }), { status: 200 });
    }
    return new Response(JSON.stringify({ Message: `unexpected ${init.method} ${url}` }), { status: 500 });
  });
}
