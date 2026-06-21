import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createSlackWorkplaceClient,
  createSlackWorkplaceIntegration,
  createSlackWorkplaceLiveChecks,
  normalizeSlackChannelEvent,
  parseSlackSignedRequest,
  slackWorkplaceCredentialStatuses,
  slackWorkplaceOperationAliases,
  slackWorkplaceProviderManifest,
  validateSlackRequestSignature,
} from "../src/index.js";
import type { SlackApiResponse, SlackWorkplaceClient } from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/workplace-slack", () => {
  it("exports split package metadata with exact operation bindings", () => {
    expect(slackWorkplaceProviderManifest).toMatchObject({
      id: "workplace.slack",
      packageName: "@cognidesk/workplace-slack",
      provider: "slack",
      category: "workplace",
      trustLevel: "official",
      coverage: { scope: "support-workflow-subset" },
    });
    expect(slackWorkplaceProviderManifest.operations.map((operation) => operation.alias))
      .toEqual([...slackWorkplaceOperationAliases]);
    expect(slackWorkplaceProviderManifest.coverage.notes.join(" ")).toContain("@slack/web-api");
    expect(slackWorkplaceProviderManifest.coverage.notes.join(" ")).toContain("does not clone");
    expect(slackWorkplaceProviderManifest.metadata?.providerClient).toMatchObject({
      package: "@slack/web-api",
      importPolicy: "runtime-entrypoint-only",
    });

    const integration = createSlackWorkplaceIntegration({
      botToken: "xoxb-token",
      signingSecret: "signing-secret",
      workplaceClient: fakeSlackWorkplaceClient(),
    });
    expect(integration.operationAliases).toEqual([...slackWorkplaceOperationAliases]);
    expect(assertIntegrationConformance({
      manifest: integration.manifest,
      operations: integration.operations,
    })).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
  });

  it("uses @slack/web-api client methods for supported Web API operations", async () => {
    const webClient = {
      chat: {
        postMessage: vi.fn(async () => ({ ok: true, channel: "C123", ts: "1710000000.000100" })),
        postEphemeral: vi.fn(async () => ({ ok: true, message_ts: "1710000000.000200" })),
        update: vi.fn(async () => ({ ok: true, channel: "C123", ts: "1710000000.000100" })),
      },
      conversations: {
        replies: vi.fn(async () => ({ ok: true, messages: [{ ts: "1710000000.000000" }] })),
      },
      files: {
        getUploadURLExternal: vi.fn(async () => ({
          ok: true,
          upload_url: "https://files.slack.com/upload/v1/ABC",
          file_id: "F123",
        })),
        completeUploadExternal: vi.fn(async () => ({ ok: true, files: [{ id: "F123" }] })),
      },
      auth: {
        test: vi.fn(async () => ({ ok: true, team: "Example", team_id: "T123" })),
      },
      apiCall: vi.fn(async () => ({ ok: true })),
    };
    const fetchMock = vi.fn(async () => new Response("OK", { status: 200 }));
    const client = createSlackWorkplaceClient({
      botToken: "xoxb-token",
      client: webClient as never,
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.postMessage({
      channel: "C123",
      text: "Reset link sent.",
      threadTs: "1710000000.000000",
      metadata: { event_type: "cognidesk_reply" },
    })).resolves.toMatchObject({ ts: "1710000000.000100" });
    expect(webClient.chat.postMessage).toHaveBeenCalledWith(expect.objectContaining({
      channel: "C123",
      thread_ts: "1710000000.000000",
      metadata: { event_type: "cognidesk_reply" },
    }));

    await expect(client.postInternalAssistMessage({
      channel: "C123",
      user: "U_AGENT",
      text: "Suggested answer.",
    })).resolves.toMatchObject({ message_ts: "1710000000.000200" });
    expect(webClient.chat.postEphemeral).toHaveBeenCalledWith(expect.objectContaining({
      channel: "C123",
      user: "U_AGENT",
    }));

    await client.updateMessage({ channel: "C123", ts: "1710000000.000100", text: "Updated." });
    expect(webClient.chat.update).toHaveBeenCalledWith(expect.objectContaining({
      channel: "C123",
      ts: "1710000000.000100",
    }));

    await client.conversationsReplies({ channel: "C123", ts: "1710000000.000000", limit: 5 });
    expect(webClient.conversations.replies).toHaveBeenCalledWith(expect.objectContaining({
      channel: "C123",
      ts: "1710000000.000000",
      limit: 5,
    }));

    await client.uploadExternalFile({
      filename: "receipt.pdf",
      length: 5,
      body: "bytes",
      contentType: "application/pdf",
      channelId: "C123",
      title: "receipt.pdf",
    });
    expect(webClient.files.getUploadURLExternal).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://files.slack.com/upload/v1/ABC",
      expect.objectContaining({ method: "POST", body: "bytes" }),
    );
    expect(webClient.files.completeUploadExternal).toHaveBeenCalledWith(expect.objectContaining({
      files: [{ id: "F123", title: "receipt.pdf" }],
      channel_id: "C123",
    }));
  });

  it("validates signed requests and normalizes Slack message events", async () => {
    const signingSecret = "signing-secret";
    const timestamp = 1_710_000_000;
    const body = JSON.stringify({
      type: "event_callback",
      team_id: "T123",
      event_id: "Ev123",
      event: {
        type: "message",
        channel: "C123",
        user: "U123",
        text: "Help",
        ts: "1710000000.000000",
      },
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

    const parsed = await parseSlackSignedRequest(request, { signingSecret, nowSeconds: timestamp });
    const event = normalizeSlackChannelEvent({ signedRequest: parsed, receivedAt: "2026-06-21T00:00:00.000Z" });

    expect(event).toMatchObject({
      nature: "message",
      channel: {
        kind: "workplace",
        provider: "slack",
        externalThreadId: "1710000000.000000",
      },
      payload: {
        text: "Help",
      },
      identity: {
        dedupeKey: "slack:Ev123",
        streamId: "C123:1710000000.000000",
      },
      source: {
        provider: "slack",
        providerPackageId: "workplace.slack",
        verified: true,
      },
    });

    expect(validateSlackRequestSignature({
      signingSecret,
      rawBody: `${body}tampered`,
      timestamp,
      signature,
      nowSeconds: timestamp,
    })).toBe(false);
  });

  it("passes readiness and provider conformance without importing provider SDKs from /manifest", async () => {
    const result = await runProviderConformance({
      manifest: slackWorkplaceProviderManifest,
      expectedPackageName: "@cognidesk/workplace-slack",
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
              return { ok: true, team: "Example", team_id: "T123", user: "cognidesk" };
            },
          },
        }),
      },
    });
    expect(result.status).toBe("passed");

    const manifestSource = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(manifestSource).not.toMatch(/(?:from\s+["']@slack\/web-api["']|import\s+["']@slack\/web-api["'])/);
    const packageJson = JSON.parse(await readFile(path.join(packageRoot, "package.json"), "utf8")) as {
      dependencies: Record<string, string>;
      exports: Record<string, unknown>;
    };
    expect(packageJson.dependencies).toHaveProperty("@slack/web-api");
    expect(packageJson.exports).toHaveProperty("./manifest");
  });
});

function signSlack(input: { signingSecret: string; timestamp: number; body: string }) {
  const base = `v0:${input.timestamp}:${input.body}`;
  return `v0=${createHmac("sha256", input.signingSecret).update(base).digest("hex")}`;
}

function fakeSlackWorkplaceClient(): SlackWorkplaceClient {
  return {
    webClient: {} as never,
    async apiCall<T = SlackApiResponse>() {
      return { ok: true } as T;
    },
    async postMessage() {
      return { ok: true };
    },
    async postEphemeralMessage() {
      return { ok: true };
    },
    async postInternalAssistMessage() {
      return { ok: true };
    },
    async updateMessage() {
      return { ok: true };
    },
    async conversationsReplies() {
      return { ok: true, messages: [] };
    },
    async getUploadUrlExternal() {
      return { ok: true, upload_url: "https://files.slack.com/upload/v1/ABC", file_id: "F123" };
    },
    async uploadExternalFileBytes() {
      return new Response("OK");
    },
    async uploadExternalFile() {
      return { ok: true, files: [] };
    },
    async completeUploadExternal() {
      return { ok: true, files: [] };
    },
    async authTest() {
      return { ok: true };
    },
  };
}
