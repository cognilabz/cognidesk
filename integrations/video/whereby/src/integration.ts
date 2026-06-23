import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { wherebyVideoProviderManifest } from "./manifest.js";
import type {
  WherebyFullApiOperationKey,
  WherebyFullApiOperationRequestMap,
} from "./full-api-client.generated.js";
import type {
  ParseWherebyWebhookRequestOptions,
  WherebyCreateMeetingInput,
  WherebyGetMeetingInput,
  WherebyRoomThemeTokensInput,
  WherebyVideoClient,
} from "./contracts.js";
import { parseWherebyWebhookRequest } from "./webhooks.js";

export interface WherebyVideoIntegrationContext {
  client: WherebyVideoClient;
}

type WherebyVideoOperationContext = Partial<IntegrationOperationContext<WherebyVideoIntegrationContext>> & Partial<WherebyVideoIntegrationContext>;
type WherebyRestRequestOperationInput<OperationKey extends WherebyFullApiOperationKey> = {
  operation: OperationKey;
  request: WherebyFullApiOperationRequestMap[OperationKey];
};

function requireWherebyVideoClient(context: WherebyVideoOperationContext): WherebyVideoClient {
  const client = context.credentials?.client ?? context.client;
  if (!client) {
    throw new Error(
      "Whereby video operation requires a configured Whereby video client. " +
      "Provide a client via context.credentials.client or context.client.",
    );
  }
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
  "whereby.rest.request": <OperationKey extends WherebyFullApiOperationKey>(
    input: WherebyRestRequestOperationInput<OperationKey>,
    context: WherebyVideoOperationContext,
  ) => requireWherebyVideoClient(context).requestOperation(input.operation, input.request),
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
