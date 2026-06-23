import {
  createTeamsWorkplaceLiveChecks,
  expect,
  it,
  runProviderConformance,
  teamsWorkplaceCredentialStatuses,
  teamsWorkplaceProviderManifest,
  workplaceChannel,
} from "./helpers.js";

export function registerTeamsConformanceTests() {
  it("reports live conformance as credential-blocked until Microsoft Graph credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: teamsWorkplaceProviderManifest,
      channels: [workplaceChannel],
      credentialStatuses: teamsWorkplaceCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createTeamsWorkplaceLiveChecks({
          accessToken: "missing",
          client: {
            async getCurrentUser() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.me" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Microsoft Graph readiness and /me checks are configured", async () => {
    const result = await runProviderConformance({
      manifest: teamsWorkplaceProviderManifest,
      channels: [workplaceChannel],
      credentialStatuses: teamsWorkplaceCredentialStatuses({
        accessToken: "configured",
        tenantId: "tenant_123",
        appClientId: "app_123",
        clientState: "configured",
        scopes: ["User.Read", "ChatMessage.Send", "ChannelMessage.Send"],
      }),
      live: {
        enabled: true,
        checks: createTeamsWorkplaceLiveChecks({
          accessToken: "configured",
          client: {
            async getCurrentUser() {
              return {
                id: "user_123",
                displayName: "Support Agent",
                userPrincipalName: "agent@example.test",
              };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.me",
      status: "passed",
    }));
  });

  it("documents Microsoft Graph /me readiness as delegated-token only", () => {
    const [check] = createTeamsWorkplaceLiveChecks({
      accessToken: "configured",
      client: {
        async getCurrentUser() {
          return {};
        },
      },
    });

    expect(check?.description).toContain("delegated OAuth access token");
  });
}
