export interface SesSnsNotification {
  Type?: string;
  MessageId?: string;
  TopicArn?: string;
  Message?: string;
  Timestamp?: string;
  SignatureVersion?: string;
  Signature?: string;
  SigningCertURL?: string;
  UnsubscribeURL?: string;
  [key: string]: unknown;
}

export interface ParsedSesSnsNotification {
  notification: SesSnsNotification;
  event: unknown;
  verified: boolean;
}

export interface ParseSesSnsNotificationOptions {
  requireSignatureVerification?: boolean;
  verifySignature?: (notification: SesSnsNotification) => boolean | Promise<boolean>;
}

export async function parseSesSnsNotification(
  request: Request,
  options: ParseSesSnsNotificationOptions = {},
): Promise<ParsedSesSnsNotification> {
  const parsed = await request.json();
  if (!isRecord(parsed)) throw new Error("Amazon SNS notification payload must be a JSON object.");
  const notification = parsed as SesSnsNotification;
  const verified = options.verifySignature ? await options.verifySignature(notification) : false;
  if (options.requireSignatureVerification && !verified) {
    throw new Error("Amazon SNS signature verification is required.");
  }
  return {
    notification,
    event: parseMessage(notification.Message),
    verified,
  };
}

export function parseSesSqsRecord(record: { body: string }): ParsedSesSnsNotification {
  const parsed = JSON.parse(record.body);
  if (!isRecord(parsed)) throw new Error("Amazon SQS record body must contain a JSON SNS notification object.");
  const notification = parsed as SesSnsNotification;
  return {
    notification,
    event: parseMessage(notification.Message),
    verified: false,
  };
}

function parseMessage(message: unknown): unknown {
  if (typeof message !== "string") return undefined;
  try {
    return JSON.parse(message);
  } catch {
    return message;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
