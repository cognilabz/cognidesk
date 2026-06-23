import {
  createOutlookEmailLiveChecks,
  describe,
  emailChannel,
  expect,
  it,
  outlookEmailCredentialStatuses,
  outlookEmailProviderManifest,
  runProviderConformance,
} from "./helpers.js";

describe("@cognidesk/integration-email-outlook", () => {
  it("reports live conformance as credential-blocked until Outlook credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: outlookEmailProviderManifest,
      channels: [emailChannel],
      credentialStatuses: outlookEmailCredentialStatuses({
        delegatedMe: false,
      }),
      live: {
        enabled: true,
        checks: createOutlookEmailLiveChecks({
          accessToken: "missing",
          client: {
            async getMailboxUser() {
              return { id: "user_1", mail: "support@example.test" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailbox-user",
      status: "credential-blocked",
      details: { requirementIds: ["microsoft-graph-oauth-access-token", "microsoft-graph-mailbox-user"] },
    }));
  });

  it("passes conformance when Outlook live checks and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: outlookEmailProviderManifest,
      channels: [emailChannel],
      credentialStatuses: outlookEmailCredentialStatuses({
        accessToken: "configured",
        scopes: ["Mail.Read", "Mail.ReadWrite", "Mail.Send", "User.Read"],
        userId: "support@example.test",
        clientStateConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createOutlookEmailLiveChecks({
          accessToken: "configured",
          userId: "support@example.test",
          client: {
            async getMailboxUser() {
              return {
                id: "user_1",
                displayName: "Example Support",
                mail: "support@example.test",
                userPrincipalName: "support@example.test",
              };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailbox-user",
      status: "passed",
      details: expect.objectContaining({
        userId: "user_1",
        mail: "support@example.test",
      }),
    }));
  });
});
