import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { zoomVideoProviderManifest } from "./manifest.js";
import type {
  ParseZoomWebhookRequestOptions,
  ZoomCreateMeetingInput,
  ZoomDeleteMeetingInput,
  ZoomGetMeetingInput,
  ZoomOperationRequestInput,
  ZoomUpdateMeetingInput,
  ZoomVideoClient,
} from "./contracts.js";
import { parseZoomWebhookRequest } from "./webhooks.js";

export interface ZoomVideoIntegrationContext {
  client: ZoomVideoClient;
}

type ZoomVideoOperationContext = Partial<IntegrationOperationContext<ZoomVideoIntegrationContext>> & Partial<ZoomVideoIntegrationContext>;

function requireZoomVideoClient(context: ZoomVideoOperationContext): ZoomVideoClient {
  const client = context.credentials?.client ?? context.client;
  if (!client) throw new Error("Zoom video operation requires a configured Zoom video client.");
  return client;
}

export const zoomVideoOperationHandlers = {
  "video.meeting.create": (input: ZoomCreateMeetingInput, context: ZoomVideoOperationContext) =>
    requireZoomVideoClient(context).createMeeting(input),
  "video.meeting.list": (input: Parameters<ZoomVideoClient["listMeetings"]>[0], context: ZoomVideoOperationContext) =>
    requireZoomVideoClient(context).listMeetings(input),
  "video.meeting.read": (
    input: { meetingId: string | number; options?: ZoomGetMeetingInput },
    context: ZoomVideoOperationContext,
  ) => requireZoomVideoClient(context).getMeeting(input.meetingId, input.options),
  "video.meeting.update": (
    input: { meetingId: string | number; meeting: ZoomUpdateMeetingInput },
    context: ZoomVideoOperationContext,
  ) => requireZoomVideoClient(context).updateMeeting(input.meetingId, input.meeting),
  "video.meeting.delete": (
    input: { meetingId: string | number; options?: ZoomDeleteMeetingInput },
    context: ZoomVideoOperationContext,
  ) => requireZoomVideoClient(context).deleteMeeting(input.meetingId, input.options),
  "video.user.current.read": (_input: undefined, context: ZoomVideoOperationContext) =>
    requireZoomVideoClient(context).getCurrentUser(),
  "zoom.meetings.request": (
    input: { operation: Parameters<ZoomVideoClient["requestOperation"]>[0]; request?: ZoomOperationRequestInput },
    context: ZoomVideoOperationContext,
  ) => requireZoomVideoClient(context).requestOperation(input.operation, input.request as never),
  "zoom.webhook.parse": (
    input: { request: Request; options?: ParseZoomWebhookRequestOptions },
  ) => parseZoomWebhookRequest(input.request, input.options),
};

export const zoomVideoIntegration = defineIntegration<
  typeof zoomVideoProviderManifest,
  ZoomVideoIntegrationContext,
  typeof zoomVideoOperationHandlers
>({
  manifest: zoomVideoProviderManifest,
  operations: zoomVideoOperationHandlers,
});
