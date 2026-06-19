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
  it("exposes generated functions for the archived official Slack Web API slice", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({ ok: true, channel: "C123", ts: "1710000000.000300", channels: [] }), { status: 200 })
      );
      const client = createSlackWorkplaceClient({
        botToken: "xoxb-token",
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await expect(client.webApi.ChatScheduleMessage({
        body: {
          channel: "C123",
          text: "Scheduled support follow-up.",
          post_at: "1790000000",
        },
      })).resolves.toMatchObject({ ok: true, channel: "C123" });
      await expect(client.requestOperation("GET /conversations.list", {
        query: { types: "public_channel,private_channel", limit: 50 },
      })).resolves.toMatchObject({ ok: true, channels: [] });
  
      await expect(client.webApi.FilesUpload({
        body: { channels: "C123", filename: "receipt.txt", content: "receipt" },
      })).resolves.toMatchObject({ ok: true });
  
      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://slack.com/api/chat.scheduleMessage",
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({ "content-type": "application/json; charset=utf-8" }),
        }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "https://slack.com/api/conversations.list?types=public_channel%2Cprivate_channel&limit=50",
        expect.objectContaining({ method: "GET" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        3,
        "https://slack.com/api/files.upload",
        expect.objectContaining({
          method: "POST",
          body: JSON.stringify({ channels: "C123", filename: "receipt.txt", content: "receipt" }),
          headers: expect.objectContaining({ "content-type": "application/json; charset=utf-8" }),
        }),
      );
      // @ts-expect-error Invalid operation id intentionally exercises runtime validation.
      await expect(client.requestOperation("not-real-operation")).rejects.toThrow("Unknown Slack Web API operation");
    });
});
