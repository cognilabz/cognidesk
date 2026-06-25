import type {
  SipCallControlResult,
  SipStackGateway,
  SipVoiceClient,
  SipVoiceClientOptions,
  SipVoiceConfig,
} from "./contracts.js";
import { buildSipLocalRuntimeMissingReadiness, sipGatewayContext } from "./readiness.js";

export function createSipVoiceClient(options: SipVoiceClientOptions): SipVoiceClient {
  return {
    async checkReadiness(context = {}) {
      if (context.signal?.aborted) throw new Error("SIP readiness check aborted.");
      return options.gateway?.checkReadiness
        ? options.gateway.checkReadiness(sipGatewayContext(options.config, context.signal))
        : buildSipLocalRuntimeMissingReadiness(options.config);
    },
    createOutboundCall(input, context = {}) {
      return invokeGateway(options, "createOutboundCall", input, context);
    },
    answerCall(input, context = {}) {
      return invokeGateway(options, "answerCall", input, context);
    },
    rejectCall(input, context = {}) {
      return invokeGateway(options, "rejectCall", input, context);
    },
    hangupCall(input, context = {}) {
      return invokeGateway(options, "hangupCall", input, context);
    },
    transferCall(input, context = {}) {
      return invokeGateway(options, "transferCall", input, context);
    },
    startRecording(input, context = {}) {
      return invokeGateway(options, "startRecording", input, context);
    },
    stopRecording(input, context = {}) {
      return invokeGateway(options, "stopRecording", input, context);
    },
    sendDtmf(input, context = {}) {
      return invokeGateway(options, "sendDtmf", input, context);
    },
    updateMediaSession(input, context = {}) {
      return invokeGateway(options, "updateMediaSession", input, context);
    },
  };
}

async function invokeGateway<
  Method extends Exclude<keyof SipStackGateway, "checkReadiness">,
  Input extends Parameters<NonNullable<SipStackGateway[Method]>>[0],
>(
  options: SipVoiceClientOptions,
  method: Method,
  input: Input,
  context: { signal?: AbortSignal },
): Promise<SipCallControlResult> {
  if (context.signal?.aborted) throw new Error(`SIP ${String(method)} aborted.`);
  const gatewayMethod = options.gateway?.[method] as ((input: Input, context: {
    config: SipVoiceConfig;
    signal?: AbortSignal;
  }) => Promise<SipCallControlResult> | SipCallControlResult) | undefined;
  if (!gatewayMethod) {
    throw new Error(`SIP stack gateway does not implement ${String(method)}.`);
  }
  return gatewayMethod(input, sipGatewayContext(options.config, context.signal));
}
