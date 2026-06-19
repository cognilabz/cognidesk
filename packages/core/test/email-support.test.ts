import { describe, expect, it } from "vitest";
import {
  collectEmailAttachmentMetadata,
  createEmailThreadContext,
  normalizeEmailAttachmentMetadata,
  trimEmailQuote,
} from "../src/index.js";

describe("email support utilities", () => {
  it("trims quoted reply text while preserving the new customer message", () => {
    const result = trimEmailQuote([
      "Thanks, that fixed the login issue.",
      "",
      "On Tue, Jan 2, 2024 at 9:00 AM Support <support@example.test> wrote:",
      "> Can you try the reset link?",
      ">",
      "> Previous support reply.",
    ].join("\n"), { includeQuotedText: true });

    expect(result).toMatchObject({
      text: "Thanks, that fixed the login issue.",
      removedQuote: true,
      reason: "reply-header",
    });
    expect(result.quotedText).toContain("Previous support reply.");
  });

  it("normalizes provider attachment metadata without requiring a provider schema", () => {
    expect(normalizeEmailAttachmentMetadata({
      providerObjectId: "gmail-att-1",
      name: "invoice.pdf",
      mimeType: "application/pdf",
      size: 4232,
      inline: false,
      checksum: "sha256:abc",
    })).toEqual({
      providerObjectId: "gmail-att-1",
      filename: "invoice.pdf",
      contentType: "application/pdf",
      sizeBytes: 4232,
      disposition: "attachment",
      checksum: "sha256:abc",
    });

    expect(collectEmailAttachmentMetadata([{ filename: "", contentType: null, sizeBytes: -1 }])).toEqual([{
      filename: "attachment",
      contentType: "application/octet-stream",
      disposition: "attachment",
    }]);
  });

  it("builds provider-neutral thread context with trimmed bodies and attachment counts", () => {
    const context = createEmailThreadContext([
      {
        providerObjectId: "imap:2",
        messageId: "<reply@example.test>",
        inReplyTo: "<root@example.test>",
        from: "customer@example.test",
        to: ["support@example.test"],
        subject: "Re: Cannot log in",
        sentAt: "2024-01-02T12:00:00.000Z",
        text: "It still fails.\n\n> Please try again.",
        attachments: [{ filename: "screenshot.png", contentType: "image/png", sizeBytes: 1024, inline: true }],
      },
      {
        providerObjectId: "imap:1",
        messageId: "<root@example.test>",
        from: "support@example.test",
        to: ["customer@example.test"],
        subject: "Cannot log in",
        sentAt: "2024-01-02T11:00:00.000Z",
        html: "<p>Please try again.</p>",
      },
    ]);

    expect(context.subject).toBe("Cannot log in");
    expect(context.participants).toEqual(["support@example.test", "customer@example.test"]);
    expect(context.messageIds).toEqual(["<root@example.test>", "<reply@example.test>"]);
    expect(context.references).toEqual(["<root@example.test>"]);
    expect(context.attachmentCount).toBe(1);
    expect(context.messages.map((message) => message.providerObjectId)).toEqual(["imap:1", "imap:2"]);
    expect(context.messages[1]).toMatchObject({
      text: "It still fails.",
      quotedTextRemoved: true,
      attachments: [{
        filename: "screenshot.png",
        contentType: "image/png",
        sizeBytes: 1024,
        disposition: "inline",
      }],
    });
  });
});
