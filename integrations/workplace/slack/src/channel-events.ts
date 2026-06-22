import type {
  NormalizeSlackChannelEventInput,
  SlackChannelEvent,
  SlackMessageResource,
  SlackSignedRequest,
} from "./contracts.js";

export function normalizeSlackChannelEvent(input: NormalizeSlackChannelEventInput): SlackChannelEvent {
  const payload = slackPayload(input.signedRequest);
  const event = slackEvent(payload);
  const channelId = stringField(event, "channel") ?? input.defaultChannelId ?? "slack";
  const messageTs = stringField(event, "ts") ?? stringField(event, "event_ts");
  const threadTs = stringField(event, "thread_ts") ?? messageTs;
  const eventId = stringField(payload, "event_id") ?? stringField(event, "client_msg_id") ?? messageTs ?? input.signedRequest.rawBody;
  const streamId = [channelId, threadTs].filter(Boolean).join(":");
  const actorId = stringField(event, "user");
  const verified = input.signedRequest.validSignature === true;

  return {
    nature: "message",
    direction: "inbound",
    intent: "customer-message",
    actor: {
      type: "customer",
      ...(actorId ? { id: actorId } : {}),
    },
    channel: {
      channelId: "slack",
      kind: "workplace",
      provider: "slack",
      externalThreadId: threadTs,
    },
    payload: {
      text: stringField(event, "text"),
      providerObject: event,
      metadata: {
        teamId: stringField(payload, "team_id"),
        channelId,
        threadTs,
        messageTs,
      },
    },
    identity: {
      dedupeKey: `slack:${eventId}`,
      streamId,
    },
    source: {
      sourceType: "provider-adapter",
      provider: "slack",
      providerPackageId: "workplace.slack",
      eventId,
      streamId,
      verified,
      raw: payload,
      ...(input.receivedAt ? { receivedAt: input.receivedAt } : {}),
    },
  };
}

function slackPayload(signedRequest: SlackSignedRequest): Record<string, unknown> {
  const payload = signedRequest.json ?? signedRequest.payload ?? signedRequest.form ?? {};
  return isRecord(payload) ? payload : {};
}

function slackEvent(payload: Record<string, unknown>): SlackMessageResource {
  const event = payload.event;
  if (isRecord(event)) return event as SlackMessageResource;
  return payload as SlackMessageResource;
}

function stringField(input: Record<string, unknown>, key: string): string | undefined {
  const value = input[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
