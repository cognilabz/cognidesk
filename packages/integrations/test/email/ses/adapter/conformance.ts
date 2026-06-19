import { expect, it } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createSesEmailLiveChecks,
  sesEmailCredentialStatuses,
  sesEmailProviderManifest,
} from "../../../../src/email/ses/index.js";

export function registerSesConformanceTests() {
  it("reports live conformance as credential-blocked until SES credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: sesEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [sesEmailProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "attach", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: sesEmailCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createSesEmailLiveChecks({
          accessKeyId: "missing",
          secretAccessKey: "missing",
          region: "eu-central-1",
          client: {
            async getAccount() {
              return {};
            },
            async listEmailIdentities() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.account" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when SES live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: sesEmailProviderManifest,
      channels: [{
        id: "email",
        channel: "email",
        providerPackageIds: [sesEmailProviderManifest.id],
        enabledCapabilities: ["receive", "send", "draft", "thread", "attach", "read-provider-object", "search-provider-object"],
      }],
      credentialStatuses: sesEmailCredentialStatuses({
        accessKeyConfigured: true,
        secretKeyConfigured: true,
        region: "eu-central-1",
        senderIdentity: "example.test",
        snsConfigured: true,
        webhookVerificationConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createSesEmailLiveChecks({
          accessKeyId: "configured",
          secretAccessKey: "configured",
          region: "eu-central-1",
          client: {
            async getAccount() {
              return { SendingEnabled: true, ProductionAccessEnabled: true };
            },
            async listEmailIdentities() {
              return { EmailIdentities: [{ IdentityName: "example.test", IdentityType: "DOMAIN" }] };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account",
      status: "passed",
    }));
  });

  it("fails SES live readiness when sending is disabled", async () => {
    const [check] = createSesEmailLiveChecks({
      accessKeyId: "configured",
      secretAccessKey: "configured",
      region: "eu-central-1",
      client: {
        async getAccount() {
          return { SendingEnabled: false, ProductionAccessEnabled: true };
        },
        async listEmailIdentities() {
          return { EmailIdentities: [] };
        },
      },
    });

    await expect(check?.run({})).rejects.toThrow("sending is disabled");
  });

  it("can require SES production access for unrestricted outbound channels", async () => {
    const [check] = createSesEmailLiveChecks({
      accessKeyId: "configured",
      secretAccessKey: "configured",
      region: "eu-central-1",
      requireProductionAccess: true,
      client: {
        async getAccount() {
          return { SendingEnabled: true, ProductionAccessEnabled: false };
        },
        async listEmailIdentities() {
          return { EmailIdentities: [] };
        },
      },
    });

    await expect(check?.run({})).rejects.toThrow("production access is required");
  });
}
