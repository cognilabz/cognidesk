import { expect, it } from "vitest";
import {
  parseSesSnsNotification,
  parseSesSqsRecord,
} from "../../../../src/email/ses/index.js";

export function registerSesEventTests() {
  it("parses SES events from SNS notifications and preserves signature fields", async () => {
    const request = new Request("https://example.test/ses/sns", {
      method: "POST",
      body: JSON.stringify({
        Type: "Notification",
        MessageId: "sns-message-id",
        TopicArn: "arn:aws:sns:eu-central-1:123456789012:ses-events",
        Message: JSON.stringify({
          eventType: "Delivery",
          mail: { messageId: "ses-message-id" },
          delivery: { recipients: ["customer@example.test"] },
        }),
        Timestamp: "2026-06-17T12:34:56.000Z",
        SignatureVersion: "2",
        Signature: "base64-signature",
        SigningCertURL: "https://sns.eu-central-1.amazonaws.com/cert.pem",
        UnsubscribeURL: "https://sns.eu-central-1.amazonaws.com/unsubscribe",
      }),
    });

    const parsed = await parseSesSnsNotification(request, {
      requireSignatureVerification: true,
      verifySignature: (notification) => notification.SignatureVersion === "2",
    });

    expect(parsed.notification).toMatchObject({
      SignatureVersion: "2",
      Signature: "base64-signature",
      SigningCertURL: "https://sns.eu-central-1.amazonaws.com/cert.pem",
    });
    expect(parsed.event).toMatchObject({
      eventType: "Delivery",
      mail: { messageId: "ses-message-id" },
    });
  });

  it("fails closed when SES/SNS signature verification is required but unavailable", async () => {
    const request = new Request("https://example.test/ses/sns", {
      method: "POST",
      body: JSON.stringify({
        Type: "Notification",
        MessageId: "sns-message-id",
        TopicArn: "arn:aws:sns:eu-central-1:123456789012:ses-events",
        Message: "{}",
        Timestamp: "2026-06-17T12:34:56.000Z",
        SignatureVersion: "2",
        Signature: "base64-signature",
        SigningCertURL: "https://sns.eu-central-1.amazonaws.com/cert.pem",
      }),
    });

    await expect(parseSesSnsNotification(request, { requireSignatureVerification: true }))
      .rejects.toThrow("verification is required");
  });

  it("parses SES/SNS notifications from SQS records", () => {
    const parsed = parseSesSqsRecord({
      body: JSON.stringify({
        Type: "Notification",
        MessageId: "sns-message-id",
        TopicArn: "arn:aws:sns:eu-central-1:123456789012:ses-events",
        Message: JSON.stringify({ eventType: "Bounce", bounce: { bounceType: "Permanent" } }),
        Timestamp: "2026-06-17T12:34:56.000Z",
      }),
    });

    expect(parsed.event).toMatchObject({ eventType: "Bounce", bounce: { bounceType: "Permanent" } });
  });
}
