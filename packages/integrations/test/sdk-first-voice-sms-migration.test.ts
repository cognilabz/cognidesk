import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const workstreamDocPath = path.join(repoRoot, "docs", "integrations-sdk-first-voice-sms-workstream.md");

const reconciledFoundationIssues = ["#20", "#21"] as const;
const rolloutFollowUps = ["#22", "#26", "#28"] as const;
const targetPackages = [
  "@cognidesk/integration-voice-deepgram",
  "@cognidesk/integration-voice-elevenlabs",
  "@cognidesk/integration-voice-twilio",
  "@cognidesk/integration-sms-twilio",
  "@cognidesk/integration-voice-vonage",
] as const;
const currentPaths = [
  "packages/integrations/src/voice/deepgram",
  "packages/integrations/src/voice/elevenlabs",
  "packages/integrations/src/voice/twilio",
  "packages/integrations/src/sms/twilio",
  "packages/integrations/src/voice/vonage",
] as const;
const sdkCandidates = [
  "@deepgram/sdk@5.4.0",
  "@elevenlabs/elevenlabs-js@2.53.1",
  "twilio@6.0.2",
  "@vonage/server-sdk@3.27.0",
] as const;

describe("SDK-first voice and SMS migration workstream", () => {
  it("records the implemented tracking state and reconciled foundation", async () => {
    const document = await readFile(workstreamDocPath, "utf8");

    expect(document).toContain("Tracking issue: #41.");
    expect(document).toContain("Status: final replacement implemented as split SDK-backed provider packages");
    expect(document).toContain("@cognidesk/integration-kit");
    expect(document).toContain("`pnpm-workspace.yaml` includes `integrations/*/*` nested provider workspaces.");
    expect(document).toContain("No old `@cognidesk/integrations/*` compatibility bridge is added.");
    for (const issue of reconciledFoundationIssues) {
      expect(document).toContain(issue);
    }
    for (const issue of rolloutFollowUps) {
      expect(document).toContain(issue);
    }
  });

  it("maps every owned provider path to its target package and verified SDK", async () => {
    const document = await readFile(workstreamDocPath, "utf8");

    for (const currentPath of currentPaths) {
      expect(document).toContain(currentPath);
    }
    for (const packageName of targetPackages) {
      expect(document).toContain(packageName);
    }
    for (const sdkCandidate of sdkCandidates) {
      expect(document).toContain(sdkCandidate);
    }
  });

  it("keeps manifest-only imports, raw-client escape hatches, and monolith cleanup sequencing in the workstream record", async () => {
    const document = await readFile(workstreamDocPath, "utf8");

    expect(document).toContain("Manifest-only exports must not import or initialize provider SDK clients.");
    expect(document).toContain("Runtime exports should support SDK client injection and expose the configured raw SDK client.");
    expect(document).toContain("Replacement packages do not copy generated full-provider clones where the official SDK is viable.");
    expect(document).toContain("old monolith sources, tests, package exports, build entries, and legacy runtime-loader references");
  });
});
