import {
  createWherebyVideoLiveChecks,
  expect,
  it,
  runProviderConformance,
  wherebyVideoCredentialStatuses,
  wherebyVideoProviderManifest,
} from "./helpers.js";

export function registerWherebyConformanceTests() {
  it("reports live conformance as credential-blocked until Whereby API credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: wherebyVideoProviderManifest,
      channels: [{
        id: "video",
        channel: "video",
        providerPackageIds: [wherebyVideoProviderManifest.id],
        enabledCapabilities: ["schedule", "create-provider-object", "read-provider-object", "delete-provider-object", "update-provider-object", "receive"],
      }],
      credentialStatuses: wherebyVideoCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createWherebyVideoLiveChecks({
          apiKey: "missing",
          client: {
            async listMeetings() {
              return { results: [], cursor: null };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check: { id: string; status: string }) =>
      check.id === "provider.live.meetings-list" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Whereby readiness and live checks are configured", async () => {
    const result = await runProviderConformance({
      manifest: wherebyVideoProviderManifest,
      channels: [{
        id: "video",
        channel: "video",
        providerPackageIds: [wherebyVideoProviderManifest.id],
        enabledCapabilities: ["schedule", "create-provider-object", "read-provider-object", "delete-provider-object", "update-provider-object", "receive"],
      }],
      credentialStatuses: wherebyVideoCredentialStatuses({
        apiKey: "configured",
        subdomain: "example",
        roomTemplateConfigured: true,
        webhookSigningSecret: "configured",
        scopes: ["meetings:create", "meetings:read", "meetings:delete", "rooms:theme"],
      }),
      live: {
        enabled: true,
        checks: createWherebyVideoLiveChecks({
          apiKey: "configured",
          client: {
            async listMeetings() {
              return { results: [], cursor: null };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.meetings-list",
      status: "passed",
    }));
  });
}
