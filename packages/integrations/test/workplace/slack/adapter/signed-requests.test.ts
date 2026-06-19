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
  it("validates Slack request signatures and parses Events API JSON", async () => {
      const signingSecret = "signing-secret";
      const timestamp = 1_710_000_000;
      const body = JSON.stringify({
        type: "event_callback",
        event: { type: "message", channel: "C123", user: "U123", text: "Help", ts: "1710000000.000000" },
      });
      const signature = signSlack({ signingSecret, timestamp, body });
      const request = new Request("https://example.test/slack/events", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-slack-request-timestamp": String(timestamp),
          "x-slack-signature": signature,
        },
        body,
      });
  
      expect(validateSlackRequestSignature({
        signingSecret,
        rawBody: body,
        timestamp,
        signature,
        nowSeconds: timestamp,
      })).toBe(true);
  
      const parsed = await parseSlackSignedRequest(request, {
        signingSecret,
        nowSeconds: timestamp,
      });
      expect(parsed.json).toMatchObject({
        type: "event_callback",
        event: { type: "message", channel: "C123" },
      });
    });

  it("parses signed Slack interactivity form payloads", async () => {
      const signingSecret = "signing-secret";
      const timestamp = 1_710_000_000;
      const payload = {
        type: "block_actions",
        user: { id: "U_AGENT" },
        channel: { id: "C123" },
      };
      const body = new URLSearchParams({ payload: JSON.stringify(payload) }).toString();
      const request = new Request("https://example.test/slack/interactivity", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-slack-request-timestamp": String(timestamp),
          "x-slack-signature": signSlack({ signingSecret, timestamp, body }),
        },
        body,
      });
  
      const parsed = await parseSlackSignedRequest(request, {
        signingSecret,
        nowSeconds: timestamp,
      });
  
      expect(parsed.payload).toMatchObject({
        type: "block_actions",
        user: { id: "U_AGENT" },
        channel: { id: "C123" },
      });
    });

  it("rejects stale or tampered Slack request signatures", () => {
      const signingSecret = "signing-secret";
      const timestamp = 1_710_000_000;
      const body = "token=legacy&team_id=T123";
      const signature = signSlack({ signingSecret, timestamp, body });
  
      expect(validateSlackRequestSignature({
        signingSecret,
        rawBody: body,
        timestamp,
        signature,
        nowSeconds: timestamp + 301,
      })).toBe(false);
      expect(validateSlackRequestSignature({
        signingSecret,
        rawBody: `${body}&tampered=true`,
        timestamp,
        signature,
        nowSeconds: timestamp,
      })).toBe(false);
    });
});
