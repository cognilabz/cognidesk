import type {
  SesEmailJsonObject,
  SesEmailProviderExtensionValue,
} from "./contracts.js";

export interface SesSnsNotification {
  Type: "Notification" | "SubscriptionConfirmation" | "UnsubscribeConfirmation" | string;
  MessageId: string;
  TopicArn: string;
  Message: string;
  Timestamp: string;
  SignatureVersion?: "1" | "2" | string;
  Signature?: string;
  SigningCertURL?: string;
  SubscribeURL?: string;
  Token?: string;
  Subject?: string;
  UnsubscribeURL?: string;
  [key: string]: SesEmailProviderExtensionValue;
}

export interface SesEventNotification {
  eventType?: string;
  mail?: SesEmailJsonObject;
  bounce?: SesEmailJsonObject;
  complaint?: SesEmailJsonObject;
  delivery?: SesEmailJsonObject;
  send?: SesEmailJsonObject;
  reject?: SesEmailJsonObject;
  open?: SesEmailJsonObject;
  click?: SesEmailJsonObject;
  renderingFailure?: SesEmailJsonObject;
  deliveryDelay?: SesEmailJsonObject;
  subscription?: SesEmailJsonObject;
  [key: string]: SesEmailProviderExtensionValue;
}

export type SesSnsSignatureVerifier = (notification: SesSnsNotification) => Promise<boolean> | boolean;

export interface ParseSesSnsNotificationOptions {
  requireSignatureVerification?: boolean;
  verifySignature?: SesSnsSignatureVerifier;
  allowSubscriptionConfirmation?: boolean;
}

export interface ParsedSesSnsNotification {
  notification: SesSnsNotification;
  event?: SesEventNotification;
}

export async function parseSesSnsNotification(
  request: Request,
  options: ParseSesSnsNotificationOptions = {},
): Promise<ParsedSesSnsNotification> {
  const notification = await request.json() as SesSnsNotification;
  validateSnsNotificationShape(notification, options);
  if (options.requireSignatureVerification) {
    if (!options.verifySignature) {
      throw new Error("SES/SNS signature verification is required but no verifier hook was provided.");
    }
    const verified = await options.verifySignature(notification);
    if (!verified) throw new Error("SES/SNS signature verification failed.");
  }

  const event = parseSesEventMessage(notification);
  return {
    notification,
    ...(event ? { event } : {}),
  };
}

export function parseSesSqsRecord(record: { body?: string }): ParsedSesSnsNotification {
  if (!record.body) throw new Error("SES/SQS record is missing body.");
  const notification = JSON.parse(record.body) as SesSnsNotification;
  validateSnsNotificationShape(notification, { allowSubscriptionConfirmation: true });
  const event = parseSesEventMessage(notification);
  return {
    notification,
    ...(event ? { event } : {}),
  };
}

function parseSesEventMessage(notification: SesSnsNotification): SesEventNotification | undefined {
  if (notification.Type !== "Notification") return undefined;
  try {
    const parsed = JSON.parse(notification.Message) as SesEventNotification;
    return typeof parsed === "object" && parsed !== null ? parsed : undefined;
  } catch {
    return undefined;
  }
}

function validateSnsNotificationShape(
  notification: SesSnsNotification,
  options: Pick<ParseSesSnsNotificationOptions, "allowSubscriptionConfirmation">,
) {
  const required = ["Type", "MessageId", "TopicArn", "Message", "Timestamp"] as const;
  for (const field of required) {
    if (typeof notification[field] !== "string" || notification[field].length === 0) {
      throw new Error(`SES/SNS notification is missing required field '${field}'.`);
    }
  }
  if (notification.Type !== "Notification" && !options.allowSubscriptionConfirmation) {
    throw new Error(`SES/SNS notification type '${notification.Type}' is not enabled for this parser.`);
  }
  if (notification.SignatureVersion !== undefined && notification.SignatureVersion !== "1" && notification.SignatureVersion !== "2") {
    throw new Error(`SES/SNS signature version '${notification.SignatureVersion}' is not supported.`);
  }
  if ((notification.Signature || notification.SigningCertURL || notification.SignatureVersion) && (
    typeof notification.Signature !== "string"
      || typeof notification.SigningCertURL !== "string"
      || typeof notification.SignatureVersion !== "string"
  )) {
    throw new Error("SES/SNS notification signature fields are incomplete.");
  }
}
