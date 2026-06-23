import { timingSafeEqual } from "node:crypto";

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

export interface PostmarkWebhookBasicAuthCredentials {
  username: string;
  password: string;
}

export interface ParsePostmarkInboundWebhookOptions {
  basicAuth?: PostmarkWebhookBasicAuthCredentials;
  requireBasicAuth?: boolean;
}

export class PostmarkWebhookAuthenticationError extends Error {
  readonly status = 401;
  readonly statusCode = 401;

  constructor(message = "Postmark inbound webhook Basic authentication failed.") {
    super(message);
    this.name = "PostmarkWebhookAuthenticationError";
  }
}

export async function parsePostmarkInboundWebhook(
  request: Request,
  options: ParsePostmarkInboundWebhookOptions = {},
): Promise<PostmarkInboundWebhook> {
  validatePostmarkBasicAuth(request, options);
  const payload = await request.json();
  if (!isRecord(payload)) throw new Error("Postmark inbound webhook payload must be a JSON object.");
  return payload as PostmarkInboundWebhook;
}

function validatePostmarkBasicAuth(request: Request, options: ParsePostmarkInboundWebhookOptions) {
  if (!options.basicAuth && !options.requireBasicAuth) return;
  if (!options.basicAuth) {
    throw new PostmarkWebhookAuthenticationError("Postmark inbound webhook Basic authentication credentials are required.");
  }
  const actual = parseBasicAuthorization(request.headers.get("authorization"));
  if (
    !actual
    || !timingSafeStringEqual(actual.username, options.basicAuth.username)
    || !timingSafeStringEqual(actual.password, options.basicAuth.password)
  ) {
    throw new PostmarkWebhookAuthenticationError();
  }
}

function parseBasicAuthorization(header: string | null): PostmarkWebhookBasicAuthCredentials | undefined {
  if (!header) return undefined;
  const [scheme, encoded] = header.split(/\s+/, 2);
  if (scheme?.toLowerCase() !== "basic" || !encoded) return undefined;
  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  const delimiter = decoded.indexOf(":");
  if (delimiter < 0) return undefined;
  return {
    username: decoded.slice(0, delimiter),
    password: decoded.slice(delimiter + 1),
  };
}

function timingSafeStringEqual(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
