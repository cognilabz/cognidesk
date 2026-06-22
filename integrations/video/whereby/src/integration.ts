import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { wherebyVideoProviderManifest } from "./manifest.js";
import type {
  ParseWherebyWebhookRequestOptions,
  WherebyCreateMeetingInput,
  WherebyGetMeetingInput,
  WherebyOperationRequestInput,
  WherebyRoomThemeTokensInput,
  WherebyVideoClient,
} from "./contracts.js";
import { parseWherebyWebhookRequest } from "./webhooks.js";

export interface WherebyVideoIntegrationContext {
  client: WherebyVideoClient;
}

type WherebyVideoOperationContext = Partial<IntegrationOperationContext<WherebyVideoIntegrationContext>> & Partial<WherebyVideoIntegrationContext>;

function requireWherebyVideoClient(context: WherebyVideoOperationContext): WherebyVideoClient {
  const client = context.credentials?.client ?? context.client;
  if (!client) throw new Error("Whereby video operation requires a configured Whereby video client.");
  return client;
}

export const wherebyVideoOperationHandlers = {
  "video.meeting.create": (input: WherebyCreateMeetingInput, context: WherebyVideoOperationContext) =>
    requireWherebyVideoClient(context).createMeeting(input),
  "video.meeting.list": (input: Parameters<WherebyVideoClient["listMeetings"]>[0], context: WherebyVideoOperationContext) =>
    requireWherebyVideoClient(context).listMeetings(input),
  "video.meeting.read": (
    input: { meetingId: string; options?: WherebyGetMeetingInput },
    context: WherebyVideoOperationContext,
  ) => requireWherebyVideoClient(context).getMeeting(input.meetingId, input.options),
  "video.meeting.delete": (input: { meetingId: string }, context: WherebyVideoOperationContext) =>
    requireWherebyVideoClient(context).deleteMeeting(input.meetingId),
  "whereby.room-theme.update": (
    input: { roomName: string; tokens: WherebyRoomThemeTokensInput },
    context: WherebyVideoOperationContext,
  ) => requireWherebyVideoClient(context).setRoomThemeTokens(input.roomName, input.tokens),
  "whereby.rest.request": (
    input: { operation: Parameters<WherebyVideoClient["requestOperation"]>[0]; request?: WherebyOperationRequestInput },
    context: WherebyVideoOperationContext,
  ) => requireWherebyVideoClient(context).requestOperation(input.operation, input.request as never),
  "whereby.webhook.parse": (
    input: { request: Request; options?: ParseWherebyWebhookRequestOptions },
  ) => parseWherebyWebhookRequest(input.request, input.options),
};

export const wherebyVideoIntegration = defineIntegration<
  typeof wherebyVideoProviderManifest,
  WherebyVideoIntegrationContext,
  typeof wherebyVideoOperationHandlers
>({
  manifest: wherebyVideoProviderManifest,
  operations: wherebyVideoOperationHandlers,
});
