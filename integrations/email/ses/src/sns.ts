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
  const notification = await request.json() as SesSnsNotification;
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
  const notification = JSON.parse(record.body) as SesSnsNotification;
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
