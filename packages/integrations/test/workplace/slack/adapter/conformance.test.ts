import {
  ProviderApiError,
  SLACK_WEB_API_GENERATED_FUNCTION_COUNT,
  SLACK_WEB_API_OPERATION_COUNT,
  SLACK_WEB_API_PATH_COUNT,
  createSlackWorkplaceClient,
  createSlackWorkplaceLiveChecks,
  describe,
  expect,
  it,
  parseSlackSignedRequest,
  runProviderConformance,
  signSlack,
  slackWorkplaceCredentialStatuses,
  slackWorkplaceProviderManifest,
  validateSlackRequestSignature,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("reports live conformance as credential-blocked until Slack credentials are configured", async () => {
      const result = await runProviderConformance({
        manifest: slackWorkplaceProviderManifest,
        channels: [{
          id: "workplace",
          channel: "workplace",
          providerPackageIds: [slackWorkplaceProviderManifest.id],
          enabledCapabilities: ["receive", "send", "notify", "thread", "media", "read-provider-object", "update-provider-object"],
        }],
        credentialStatuses: slackWorkplaceCredentialStatuses({}),
        live: {
          enabled: true,
          checks: createSlackWorkplaceLiveChecks({
            botToken: "missing",
            client: {
              async authTest() {
                return { ok: true, team: "Example", team_id: "T123", user: "cognidesk" };
              },
            },
          }),
        },
      });

      expect(result.status).toBe("credential-blocked");
      expect(result.checks.some((check) =>
        check.id === "provider.live.auth" && check.status === "credential-blocked"
      )).toBe(true);
    });

  it("passes conformance when Slack live checks and credentials are configured", async () => {
      const result = await runProviderConformance({
        manifest: slackWorkplaceProviderManifest,
        channels: [{
          id: "workplace",
          channel: "workplace",
          providerPackageIds: [slackWorkplaceProviderManifest.id],
          enabledCapabilities: ["receive", "send", "notify", "thread", "media", "read-provider-object", "update-provider-object"],
        }],
        credentialStatuses: slackWorkplaceCredentialStatuses({
          botToken: "configured",
          signingSecret: "configured",
          scopes: ["chat:write", "channels:history"],
        }),
        live: {
          enabled: true,
          checks: createSlackWorkplaceLiveChecks({
            botToken: "configured",
            client: {
              async authTest() {
                return {
                  ok: true,
                  team: "Example",
                  team_id: "T123",
                  user: "cognidesk",
                  user_id: "U_BOT",
                  bot_id: "B123",
                };
              },
            },
          }),
        },
      });

      expect(result.status).toBe("passed");
      expect(result.checks).toContainEqual(expect.objectContaining({
        id: "provider.live.auth",
        status: "passed",
      }));
    });
});
