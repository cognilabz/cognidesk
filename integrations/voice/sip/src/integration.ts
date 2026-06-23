import { defineIntegration } from "@cognidesk/integration-kit";
import { createSipVoiceClient } from "./client.js";
import type {
  SipAnswerCallInput,
  SipDtmfInput,
  SipHangupCallInput,
  SipMediaSessionUpdateInput,
  SipOutboundCallInput,
  SipRecordingControlInput,
  SipStackGateway,
  SipTransferCallInput,
  SipVoiceConfig,
  ParseSipVoiceWebhookOptions,
} from "./contracts.js";
import { sipVoiceProviderManifest } from "./manifest.js";
import { parseSipVoiceWebhook } from "./webhooks.js";

export interface SipVoiceIntegrationOptions {
  config: SipVoiceConfig;
  gateway: SipStackGateway;
}

export interface ParseSipVoiceWebhookOperationInput {
  request: Request;
  options?: ParseSipVoiceWebhookOptions;
}

export function createSipVoiceIntegration(options: SipVoiceIntegrationOptions) {
  const client = createSipVoiceClient(options);
  return defineIntegration({
    manifest: sipVoiceProviderManifest as never,
    operations: {
      "sip.call.start": (input: SipOutboundCallInput) => client.createOutboundCall(input),
      "sip.call.answer": (input: SipAnswerCallInput) => client.answerCall(input),
      "sip.call.hangup": (input: SipHangupCallInput) => client.hangupCall(input),
      "sip.call.transfer": (input: SipTransferCallInput) => client.transferCall(input),
      "sip.recording.start": (input: SipRecordingControlInput) => client.startRecording(input),
      "sip.recording.stop": (input: SipRecordingControlInput) => client.stopRecording(input),
      "sip.dtmf.send": (input: SipDtmfInput) => client.sendDtmf(input),
      "sip.media.update": (input: SipMediaSessionUpdateInput) => client.updateMediaSession(input),
      "sip.webhook.parse": (input: ParseSipVoiceWebhookOperationInput) =>
        parseSipVoiceWebhook(input.request, input.options),
    } as never,
  });
}
