import Srf from "drachtio-srf";
import type {
  SipCallControlResult,
  SipCallReference,
  SipDtmfInput,
  SipHangupCallInput,
  SipMediaSessionUpdateInput,
  SipOutboundCallInput,
  SipReadinessResult,
  SipStackGateway,
  SipTransferCallInput,
  SipVoiceConfig,
} from "./contracts.js";
import { buildSipAddress } from "./request.js";

export interface DrachtioSrfSipStackGatewayOptions {
  srf?: Srf | undefined;
  connect?: Srf.SrfConfig | undefined;
  dialogs?: Map<string, Srf.Dialog> | undefined;
}

export interface DrachtioSrfSipGateway extends SipStackGateway {
  readonly rawClient: {
    sdkPackage: "drachtio-srf";
    srf: Srf;
    dialogs: Map<string, Srf.Dialog>;
  };
}

export function createDrachtioSrfSipStackGateway(
  options: DrachtioSrfSipStackGatewayOptions = {},
): DrachtioSrfSipGateway {
  const srf = options.srf ?? new Srf();
  const dialogs = options.dialogs ?? new Map<string, Srf.Dialog>();
  let connectPromise: Promise<void> | undefined;

  async function ensureConnected() {
    if (!options.connect) return;
    connectPromise ??= srf.connect(options.connect);
    await connectPromise;
  }

  function rememberDialog(dialog: Srf.Dialog) {
    const keys = dialogKeys(dialog);
    for (const key of keys) dialogs.set(key, dialog);
    return keys[0] ?? dialog.sip.callId;
  }

  const gateway: DrachtioSrfSipGateway = {
    rawClient: {
      sdkPackage: "drachtio-srf",
      srf,
      dialogs,
    },
    async checkReadiness() {
      if (options.connect) {
        await ensureConnected();
        return drachtioReadiness({ connected: true, configured: true });
      }
      if (options.srf) return drachtioReadiness({ connected: true, configured: true });
      return drachtioReadiness({ connected: false, configured: false });
    },
    async createOutboundCall(input, context) {
      await ensureConnected();
      const dialog = await srf.createUAC(buildSipAddress(input.to), drachtioCreateUacOptions(input, context.config));
      const callId = rememberDialog(dialog);
      return dialogResult(dialog, {
        callId,
        state: "answered",
        ...(input.offer ? { remoteDescription: input.offer } : {}),
      });
    },
    async hangupCall(input) {
      const dialog = requireDrachtioDialog(dialogs, input);
      await destroyDialog(dialog, input);
      return dialogResult(dialog, { callId: input.callId, state: "completed" });
    },
    async transferCall(input) {
      const dialog = requireDrachtioDialog(dialogs, input);
      await requestDialog(dialog, {
        method: "REFER",
        headers: {
          "Refer-To": buildSipAddress(input.target),
          ...input.headers,
        },
      });
      return dialogResult(dialog, { callId: input.callId, state: "transferring" });
    },
    async sendDtmf(input) {
      const dialog = requireDrachtioDialog(dialogs, input);
      await requestDialog(dialog, {
        method: "INFO",
        headers: {
          "Content-Type": "application/dtmf-relay",
          ...input.headers,
        },
        body: dtmfRelayBody(input),
      });
      return dialogResult(dialog, { callId: input.callId, state: "answered" });
    },
    async updateMediaSession(input) {
      const dialog = requireDrachtioDialog(dialogs, input);
      const sdp = input.offer?.sdp ?? input.answer?.sdp;
      if (!sdp) throw new Error("SIP media update requires an offer or answer SDP.");
      const responseSdp = await dialog.modify(sdp, { noAck: false });
      return dialogResult(dialog, {
        callId: input.callId,
        state: input.reason === "hold" ? "held" : "answered",
        localDescription: {
          type: input.answer ? "answer" : "offer",
          sdp: responseSdp,
          contentType: "application/sdp",
        },
      });
    },
  };

  return gateway;
}

function drachtioCreateUacOptions(input: SipOutboundCallInput, config: SipVoiceConfig): Srf.CreateUACOptions {
  return {
    headers: {
      From: buildSipAddress(input.from),
      To: buildSipAddress(input.to),
      ...(config.userAgent ? { "User-Agent": config.userAgent } : {}),
      ...input.headers,
    },
    ...(input.offer?.sdp ? { localSdp: input.offer.sdp } : {}),
    ...(config.outboundProxyUri ?? config.proxyUri ? { proxy: config.outboundProxyUri ?? config.proxyUri } : {}),
    auth: {
      username: config.authUsername,
      password: config.authPassword,
    },
  };
}

function requireDrachtioDialog(dialogs: Map<string, Srf.Dialog>, input: SipCallReference): Srf.Dialog {
  const keys = [input.dialogId, input.providerCallId, input.callId].filter((value): value is string => Boolean(value));
  for (const key of keys) {
    const dialog = dialogs.get(key);
    if (dialog) return dialog;
  }
  throw new Error(`No drachtio-srf dialog found for SIP call '${input.callId}'.`);
}

function dialogKeys(dialog: Srf.Dialog) {
  return [
    dialog.sip.callId,
    `${dialog.sip.callId}:${dialog.sip.localTag}:${dialog.sip.remoteTag}`,
  ].filter(Boolean);
}

function dialogResult(dialog: Srf.Dialog, result: SipCallControlResult): SipCallControlResult {
  return {
    ...result,
    providerCallId: result.providerCallId ?? dialog.sip.callId,
    dialogId: result.dialogId ?? `${dialog.sip.callId}:${dialog.sip.localTag}:${dialog.sip.remoteTag}`,
    raw: dialog,
  };
}

function destroyDialog(dialog: Srf.Dialog, input: SipHangupCallInput) {
  return new Promise<void>((resolve, reject) => {
    dialog.destroy(
      { headers: input.headers ?? {} },
      (error) => error ? reject(error) : resolve(),
    );
  });
}

function requestDialog(dialog: Srf.Dialog, input: {
  method: Srf.SipMethod;
  headers?: Record<string, string> | undefined;
  body?: string | undefined;
}) {
  return dialog.request(input as unknown as Srf.SrfRequest);
}

function dtmfRelayBody(input: SipDtmfInput) {
  return [
    `Signal=${input.digits}`,
    `Duration=${input.durationMs ?? 250}`,
  ].join("\r\n");
}

function drachtioReadiness(input: { connected: boolean; configured: boolean }): SipReadinessResult {
  return {
    ok: input.connected,
    registrarReachable: input.connected,
    registered: input.connected,
    proxyReachable: input.connected,
    tlsReady: input.connected,
    srtpReady: input.connected,
    webhookReachable: input.connected,
    ...(input.connected ? {} : { missing: ["drachtio-server-connection"] }),
    details: {
      sdkPackage: "drachtio-srf",
      sdkRuntime: "Srf.createUAC/Dialog",
      configured: input.configured,
    },
  };
}
