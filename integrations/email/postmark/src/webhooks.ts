export interface PostmarkInboundWebhook {
  From?: string;
  To?: string;
  Subject?: string;
  MessageID?: string;
  Date?: string;
  TextBody?: string;
  HtmlBody?: string;
  Headers?: Array<{ Name?: string; Value?: string }>;
  Attachments?: Array<{ Name?: string; ContentType?: string; ContentLength?: number; Content?: string }>;
  [key: string]: unknown;
}

export async function parsePostmarkInboundWebhook(request: Request): Promise<PostmarkInboundWebhook> {
  const payload = await request.json();
  if (!isRecord(payload)) throw new Error("Postmark inbound webhook payload must be a JSON object.");
  return payload as PostmarkInboundWebhook;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
