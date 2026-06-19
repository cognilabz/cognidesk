import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createImapEmailLiveChecks,
  imapEmailCredentialStatuses,
  imapEmailProviderManifest,
  type ImapMailboxConnector,
} from "../../../src/email/imap/index.js";

const emailChannel = {
  id: "email-support",
  channel: "email",
  providerPackageIds: [imapEmailProviderManifest.id],
  enabledCapabilities: ["read-provider-object"],
};

const connection = {
  host: "imap.example.test",
  port: 993,
  secure: true,
  username: "support@example.test",
  mailbox: "INBOX",
};

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for IMAP email", () => {
    expect(imapEmailProviderManifest).toMatchObject({
      id: "email.imap",
      packageName: "@cognidesk/integrations",
      category: "email",
      provider: "imap",
      trustLevel: "official",
      directions: ["inbound-only"],
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(imapEmailProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(["read-provider-object"]);
    expect(imapEmailProviderManifest.capabilities[0]).toMatchObject({
      label: "Check IMAP mailbox readiness",
      providerObjects: [{ kind: "imapMailbox", label: "IMAP Mailbox" }],
    });
    expect(imapEmailProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement IMAP SEARCH, FETCH, STORE/flag mutation");
    expect(imapEmailProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual(["imap-server", "imap-mailbox-credentials", "imap-connector"]);
  });

  it("reports live readiness as credential-blocked without an injected connector", async () => {
    const result = await runProviderConformance({
      manifest: imapEmailProviderManifest,
      channels: [emailChannel],
      credentialStatuses: imapEmailCredentialStatuses({
        serverConfigured: true,
        mailboxCredentialsConfigured: true,
        connectorConfigured: false,
      }),
      live: {
        enabled: true,
        checks: createImapEmailLiveChecks({ connection }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailbox",
      status: "credential-blocked",
      details: { requirementIds: ["imap-connector"] },
    }));
  });

  it("passes conformance when an injected connector reports mailbox readiness", async () => {
    const connector: ImapMailboxConnector = {
      checkReadiness: vi.fn(async () => ({
        ready: true,
        mailbox: "INBOX",
        capabilities: ["IMAP4rev1", "IDLE"],
        uidValidity: 42,
        messagesTotal: 120,
        unseenTotal: 4,
        readOnly: false,
      })),
    };

    const result = await runProviderConformance({
      manifest: imapEmailProviderManifest,
      channels: [emailChannel],
      credentialStatuses: imapEmailCredentialStatuses({
        serverConfigured: true,
        mailboxCredentialsConfigured: true,
        connectorConfigured: true,
        authMode: "password",
      }),
      live: {
        enabled: true,
        checks: createImapEmailLiveChecks({ connection, connector }),
      },
    });

    expect(result.status).toBe("passed");
    expect(connector.checkReadiness).toHaveBeenCalledWith(connection, {});
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailbox",
      status: "passed",
      details: expect.objectContaining({
        host: "imap.example.test",
        port: 993,
        mailbox: "INBOX",
        capabilities: ["IMAP4rev1", "IDLE"],
        messagesTotal: 120,
        unseenTotal: 4,
      }),
    }));
  });

  it("fails conformance when the injected connector cannot reach the mailbox", async () => {
    const connector: ImapMailboxConnector = {
      async checkReadiness() {
        return {
          ready: false,
          reason: "IMAP authentication failed for the configured mailbox.",
        };
      },
    };

    const result = await runProviderConformance({
      manifest: imapEmailProviderManifest,
      channels: [emailChannel],
      credentialStatuses: imapEmailCredentialStatuses({
        serverConfigured: true,
        mailboxCredentialsConfigured: true,
        connectorConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createImapEmailLiveChecks({ connection, connector }),
      },
    });

    expect(result.status).toBe("failed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailbox",
      status: "failed",
      message: "IMAP authentication failed for the configured mailbox.",
    }));
  });
});
