import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");

const migrationDocPath = resolve(repoRoot, "docs/local-protocol-integrations-sdk-first-migration.md");
const issueDraftPath = resolve(repoRoot, "docs/issue-drafts/local-protocol-integrations-sdk-first.md");
const catalogDocPath = resolve(repoRoot, "website/guides/provider-integrations-catalog.md");

const ownedSurfaces = [
  {
    path: "packages/integrations/src/cobrowsing/cognidesk",
    packageName: "@cognidesk/integration-cobrowsing-cognidesk",
    decision: "local protocol adapter",
  },
  {
    path: "packages/integrations/src/form/cognidesk",
    packageName: "@cognidesk/integration-form-cognidesk",
    decision: "form protocol adapter",
  },
  {
    path: "packages/integrations/src/help-center/cognidesk",
    packageName: "@cognidesk/integration-help-center-cognidesk",
    decision: "help-center adapter",
  },
  {
    path: "packages/integrations/src/community/forum",
    packageName: "@cognidesk/integration-community-forum",
    decision: "Discourse-compatible support adapter",
  },
  {
    path: "packages/integrations/src/voice/sip",
    packageName: "@cognidesk/integration-voice-sip",
    decision: "local protocol adapter",
  },
  {
    path: "packages/integrations/src/email/imap",
    packageName: "@cognidesk/integration-email-imap",
    decision: "already staged the split IMAP package on issue #29",
  },
] as const;

describe("local/protocol SDK-first migration docs", () => {
  it("records every owned surface with a target package and ownership decision", async () => {
    const doc = await readFile(migrationDocPath, "utf8");

    for (const surface of ownedSurfaces) {
      expect(doc).toContain(surface.path);
      expect(doc).toContain(surface.packageName);
      expect(doc).toContain(surface.decision);
    }
  });

  it("keeps dependency gates and candidate library decisions explicit", async () => {
    const doc = await readFile(migrationDocPath, "utf8");

    expect(doc).toContain("Tracking issue: https://github.com/cognilabz/cognidesk/issues/43");
    expect(doc).toContain("codex/integrations-foundation-stack");
    expect(doc).toContain("nested provider workspaces from issue #20");
    expect(doc).toContain("@cognidesk/integration-kit");
    expect(doc).toContain("metadata catalog generation from issue #22");
    expect(doc).toContain("combined foundation stack is present in this worktree");
    expect(doc).toContain("drachtio-srf@5.0.24");
    expect(doc).toContain("imapflow@1.4.2");
    expect(doc).toContain("issue #29 has staged that package");
    expect(doc).toContain("discourse2@1.2.0");
    expect(doc).toContain("Do not make it a required dependency of `@cognidesk/integration-voice-sip`");
  });

  it("keeps the dedicated GitHub issue draft ready to file", async () => {
    const issue = await readFile(issueDraftPath, "utf8");

    expect(issue).toContain("# [Integrations] Package local and protocol adapters without provider SDK pretense");
    expect(issue).toContain("issue #43 now tracks this workstream");
    expect(issue).toContain("This branch is based on `codex/integrations-foundation-stack`");
    expect(issue).toContain("Final packages export `./manifest` without importing runtime helpers or optional provider/client libraries.");
    expect(issue).toContain("Old `@cognidesk/integrations/*` subpaths are removed only after replacement packages and tests exist, with no compatibility shim.");
  });

  it("keeps the provider catalog guide linked to the new package paths", async () => {
    const catalog = await readFile(catalogDocPath, "utf8");

    expect(catalog).toContain("integrations/cobrowsing/cognidesk");
    expect(catalog).toContain("@cognidesk/integration-cobrowsing-cognidesk");
  });
});
