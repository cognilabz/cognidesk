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
  it("exports an official provider manifest for Slack workplace support", () => {
      expect(slackWorkplaceProviderManifest).toMatchObject({
        id: "workplace.slack",
        packageName: "@cognidesk/integrations",
        category: "workplace",
        provider: "slack",
        trustLevel: "official",
        coverage: {
          scope: "provider-api-subset",
        },
      });
      expect(slackWorkplaceProviderManifest.capabilities.map((capability) => capability.capability))
        .toEqual(expect.arrayContaining([
          "receive",
          "send",
          "notify",
          "thread",
          "media",
          "read-provider-object",
          "update-provider-object",
          "slack.request-signature",
        ]));
      expect(slackWorkplaceProviderManifest.credentialRequirements.map((requirement) => requirement.id))
        .toEqual(["slack-bot-token", "slack-signing-secret"]);
      expect(slackWorkplaceProviderManifest.coverage.notes.join(" "))
        .toContain("every operation in Slack's archived official Web API Swagger");
      expect(slackWorkplaceProviderManifest.coverage.notes.join(" "))
        .toContain("does not configure Slack app subscriptions");
      expect(slackWorkplaceProviderManifest.coverage.notes.join(" ")).toContain("Socket Mode ingestion");
      expect(slackWorkplaceProviderManifest.coverage.notes.join(" ")).toContain("apps.connections.open");
      expect(slackWorkplaceProviderManifest.coverage.notes.join(" ")).toContain("WebSocket");
      expect(slackWorkplaceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
        .toEqual(expect.arrayContaining([
          "https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json",
          "https://github.com/slackapi/slack-api-specs",
          "https://docs.slack.dev/reference/methods/",
          "https://docs.slack.dev/reference/methods/chat.postMessage/",
          "https://docs.slack.dev/reference/methods/conversations.replies/",
          "https://docs.slack.dev/authentication/verifying-requests-from-slack/",
          "https://docs.slack.dev/apis/web-api/rate-limits",
          "https://docs.slack.dev/changelog/2025/05/29/rate-limit-changes-for-non-marketplace-apps",
        ]));
      expect(slackWorkplaceProviderManifest.limitations.join(" "))
        .toContain("conversations.history and conversations.replies rate limits vary");
      expect(slackWorkplaceProviderManifest.limitations.join(" ")).toContain("Retry-After");
      expect(slackWorkplaceProviderManifest.capabilities.find((capability) =>
        capability.capability === "media"
      )?.providerObjects).toEqual([{ kind: "slackFile", label: "Slack File" }]);
      expect(slackWorkplaceProviderManifest.metadata?.generatedProviderSliceVerification).toMatchObject({
        provider: "slack-web-api-archived-swagger",
        documentedPathCount: 174,
        documentedOperationCount: 174,
        implementedOperationCount: 174,
        unimplementedOperationCount: 0,
        generatedFunctionCount: 174,
      });
      expect(SLACK_WEB_API_PATH_COUNT).toBe(174);
      expect(SLACK_WEB_API_OPERATION_COUNT).toBe(174);
      expect(SLACK_WEB_API_GENERATED_FUNCTION_COUNT).toBe(174);
    });
});
