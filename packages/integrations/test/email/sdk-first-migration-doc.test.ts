import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../../..", import.meta.url)));
const migrationDoc = path.join(repoRoot, "docs", "email-sdk-first-migration.md");

describe("email SDK-first migration docs", () => {
  it("records the owned providers, target packages, verified libraries, and implementation status", async () => {
    const source = await readFile(migrationDoc, "utf8");

    expect(source).toContain("Status: implemented for issue #29.");
    expect(source).toContain("Last verified: 2026-06-21");

    for (const expected of [
      "packages/integrations/src/email/mailgun",
      "packages/integrations/src/email/postmark",
      "packages/integrations/src/email/ses",
      "packages/integrations/src/email/imap",
      "@cognidesk/integration-email-mailgun",
      "@cognidesk/integration-email-postmark",
      "@cognidesk/integration-email-ses",
      "@cognidesk/integration-email-imap",
      "mailgun.js@13.2.0",
      "postmark@4.0.7",
      "@aws-sdk/client-sesv2@3.1073.0",
      "@aws-sdk/client-ses@3.1073.0",
      "imapflow@1.4.2",
      "or bridge through `@cognidesk/integrations`;",
      "Keep `/manifest` free of `mailgun.js` imports.",
      "Keep `/manifest` free of `postmark` imports.",
      "Keep `/manifest` free of AWS SDK client imports.",
      "Keep `/manifest` free of `imapflow` imports.",
    ]) {
      expect(source).toContain(expected);
    }
  });
});
