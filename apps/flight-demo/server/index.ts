import { createServer, type IncomingMessage } from "node:http";
import { createHash } from "node:crypto";
import { once } from "node:events";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { StartStreamTranscriptionCommand, TranscribeStreamingClient } from "@aws-sdk/client-transcribe-streaming";
import { createCognideskHttpHandler } from "@cognidesk/http";
import {
  CapabilityAvailabilitySchema,
  createRuntime,
  defineChannelContext,
  ProviderCredentialStatusSchema,
  ProviderReadinessSchema,
  type CapabilityAvailability,
  type CognideskRuntime,
  type HandleChannelEventInput,
  type HandleChannelEventResult,
  type HandleUserMessageInput,
  type HandleUserMessageResult,
  type HandleVoiceUserMessageInput,
  type HandleVoiceUserMessageResult,
  type ProviderCredentialStatus,
  type ProviderReadiness,
  type RuntimeEvent,
  type SubmitWidgetInput,
} from "@cognidesk/core";
import {
  createDiscordGatewayService,
  createDiscordSqliteStore,
  discordMessagingCredentialStatuses,
  discordMessagingProviderManifest,
  type DiscordGatewayService,
} from "@cognidesk/integration-messaging-discord";
import {
  whatsappMessagingCredentialStatuses,
  whatsappMessagingProviderManifest,
} from "@cognidesk/integration-messaging-whatsapp";
import {
  createAwsSpeechVoiceProvider,
  type AwsPollySynthesizeCommandInput,
  type AwsSdkCommandConstructor,
  type AwsTranscribeStreamingCommandInput,
} from "@cognidesk/integration-voice-aws-speech";
import { createAzureSpeechVoiceProvider } from "@cognidesk/integration-voice-azure-speech";
import { createDeepgramVoiceProvider } from "@cognidesk/integration-voice-deepgram";
import { createElevenLabsVoiceProvider } from "@cognidesk/integration-voice-elevenlabs";
import { createGoogleSpeechVoiceProvider } from "@cognidesk/integration-voice-google-speech";
import { createOpenAIVoiceProvider } from "@cognidesk/integration-voice-openai";
import {
  attachNodeVoiceWebSocketAdapter,
  createInMemoryVoiceSessionStore,
  createVoiceSocketHandshake,
} from "@cognidesk/voice-websocket";
import { startCognideskDemoTelemetrySeed, startCognideskOtel } from "@cognidesk/otel";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import { createCognideskStudioAdapter } from "@cognidesk/studio-adapter";
import {
  flightDemoCorsEnabled,
  flightDemoExternalApisEnabled,
  flightDemoExternalIntegrationJourneysEnabled,
  flightDemoStudioServiceToken,
  getConfiguredDiscordIntegration,
  getConfiguredEmailDeliveryConfig,
  getConfiguredEmailReplyVerificationConfig,
  getConfiguredWhatsAppDeliveryConfig,
  getConfiguredVoiceProviderSecrets,
  loadFlightDemoConfig,
  resolveFlightDemoPath,
  type ConfiguredEmailDeliveryConfig,
  type ConfiguredEmailReplyVerificationConfig,
  type ConfiguredWhatsAppDeliveryConfig,
  type ConfiguredVoiceProviderSecrets,
  type FlightDemoConfig,
} from "./config.js";
import { createImapEmailClient } from "@cognidesk/integration-email-imap";
import {
  createSmtpEmailClient,
  htmlEmailFromText,
  type SmtpEmailClient,
} from "@cognidesk/integration-email-smtp";
import {
  FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
  FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID,
  FLIGHT_SECURE_EMAIL_CHANNEL_ID,
  FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID,
  FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
  createFlightDemoRuntimeChannels,
} from "./agent/policies.js";
import { createFlightDemoRuntimeParts, createFlightTools } from "./agent/index.js";
import {
  createFlightDemoEmailReplyPoller,
  flightDemoEmailReplySubject,
  flightDemoEmailReplyVerificationCode,
  type FlightDemoEmailReplyPoller,
} from "./email-reply-verification.js";
import { createFlightDemoVoiceControlSurface } from "./voice-control.js";

const FLIGHT_HANDOFF_JOURNEY_ID = "human-handoff";
const FLIGHT_SECURE_EMAIL_JOURNEY_ID = "secure-email-login";
const FLIGHT_WHATSAPP_JOURNEY_ID = "whatsapp-customer-message";
const FLIGHT_DISCORD_HANDOFF_STATUS_EVENT = "custom.flight.discord_handoff_status";
const FLIGHT_EMAIL_SWITCH_STATUS_EVENT = "custom.flight.email_channel_switch_status";
const FLIGHT_DISCORD_UNAVAILABLE_MESSAGE =
  "Human support handoff requested, but Discord support is not configured for this flight demo.";
const FLIGHT_EXTERNAL_APIS_DISABLED_REASON =
  "Flight demo external API integrations are disabled. Set FLIGHT_DEMO_EXTERNAL_APIS=true to enable live providers.";
const flightDiscordCredentialRequirementIds = new Set([
  "discord-bot-token",
  "discord-application-id",
  "discord-guild-id",
  "discord-channel-id",
]);
const flightWhatsAppOutboundRequirementIds = new Set([
  "whatsapp-access-token",
  "whatsapp-phone-number-id",
  "whatsapp-app-secret",
]);
const discordHandoffPreparations = new Map<string, Promise<RuntimeEvent[]>>();
const emailSwitchPreparations = new Map<string, Promise<RuntimeEvent[]>>();

type FlightDemoEmailDelivery = {
  config: ConfiguredEmailDeliveryConfig;
  sender: SmtpEmailClient | null;
};
type FlightDemoEmailReplyVerification = {
  config: ConfiguredEmailReplyVerificationConfig;
  poller: FlightDemoEmailReplyPoller | null;
};

function flightDemoDisabledEmailDeliveryConfig(
  config: FlightDemoConfig,
  reason = FLIGHT_EXTERNAL_APIS_DISABLED_REASON,
): ConfiguredEmailDeliveryConfig {
  return {
    provider: "smtp",
    configured: false,
    reason,
    missingEnv: [],
    loginBaseUrl: config.email.loginBaseUrl,
  };
}

function flightDemoDisabledEmailReplyVerificationConfig(
  config: FlightDemoConfig,
  reason = FLIGHT_EXTERNAL_APIS_DISABLED_REASON,
): ConfiguredEmailReplyVerificationConfig {
  return {
    provider: "imap",
    configured: false,
    enabled: config.email.replyVerification.enabled,
    reason,
    missingEnv: [],
    mailbox: config.email.replyVerification.mailbox,
    pollIntervalMs: config.email.replyVerification.pollIntervalMs,
    lookbackMinutes: config.email.replyVerification.lookbackMinutes,
  };
}

function flightDemoDisabledWhatsAppDeliveryConfig(
  config: FlightDemoConfig,
  reason = FLIGHT_EXTERNAL_APIS_DISABLED_REASON,
): ConfiguredWhatsAppDeliveryConfig {
  return {
    provider: "whatsapp",
    configured: false,
    enabled: config.whatsapp.enabled,
    reason,
    missingEnv: [],
    confirmationBaseUrl: config.whatsapp.confirmationBaseUrl,
    graphApiBaseUrl: config.whatsapp.graphApiBaseUrl,
    graphApiVersion: config.whatsapp.graphApiVersion,
    wabaWebhookSubscribed: config.whatsapp.wabaWebhookSubscribed,
  };
}

function flightDemoIntegrationDisabledReason(envName: keyof NodeJS.ProcessEnv & string) {
  return `This flight demo integration is disabled. Set ${envName}=true to enable it, or set FLIGHT_DEMO_EXTERNAL_APIS=true to enable all external integrations by default.`;
}

const otel = process.env.COGNIDESK_OTEL === "true"
  ? startCognideskOtel({
      serviceName: "cognidesk-flight-demo",
      serviceVersion: "0.0.0",
      environment: process.env.NODE_ENV ?? "development",
      ...(process.env.OTEL_EXPORTER_OTLP_ENDPOINT ? { otlpEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT } : {}),
      resourceAttributes: {
        "cognidesk.demo": "flight",
      },
    })
  : null;
const demoTelemetrySeed = otel && process.env.COGNIDESK_OTEL_FAKE_DATA !== "false"
  ? startCognideskDemoTelemetrySeed({
      serviceName: "cognidesk-flight-demo",
      serviceVersion: "0.0.0",
    })
  : null;

const config = await loadFlightDemoConfig();
const corsEnabled = flightDemoCorsEnabled();
const externalApisEnabled = flightDemoExternalApisEnabled();
const externalIntegrationJourneysEnabled = flightDemoExternalIntegrationJourneysEnabled();
const sqlitePath = resolveFlightDemoPath(config.storage.sqlitePath);
await mkdir(dirname(sqlitePath), { recursive: true });

const whatsAppDeliveryConfig = externalIntegrationJourneysEnabled.whatsapp
  ? getConfiguredWhatsAppDeliveryConfig(config)
  : flightDemoDisabledWhatsAppDeliveryConfig(
      config,
      flightDemoIntegrationDisabledReason("FLIGHT_DEMO_WHATSAPP_JOURNEY"),
    );
const flightRuntimeTools = createFlightTools({ whatsapp: whatsAppDeliveryConfig });
const { agent, models, journeyIndex, knowledgeIndex } = await createFlightDemoRuntimeParts({
  config,
  externalIntegrationJourneysEnabled,
  tools: flightRuntimeTools,
});
const storage = createSqliteStorage({ filename: sqlitePath });
const voiceSecrets = externalApisEnabled ? getConfiguredVoiceProviderSecrets(config) : undefined;
const discordCredentialStatuses = flightDemoDiscordCredentialStatuses(
  config,
  externalIntegrationJourneysEnabled.discordHandoff,
);
const discordCapabilityAvailability = flightDemoDiscordCapabilityAvailability(
  config,
  discordCredentialStatuses,
  externalIntegrationJourneysEnabled.discordHandoff,
);
const whatsAppCredentialStatuses = flightDemoWhatsAppCredentialStatuses(
  config,
  externalIntegrationJourneysEnabled.whatsapp,
);
const whatsAppCapabilityAvailability = flightDemoWhatsAppCapabilityAvailability(
  config,
  whatsAppCredentialStatuses,
  externalIntegrationJourneysEnabled.whatsapp,
);
const discordIntegration = externalIntegrationJourneysEnabled.discordHandoff
  ? getConfiguredDiscordIntegration(config)
  : undefined;
const emailDeliveryConfig = externalIntegrationJourneysEnabled.secureEmail
  ? getConfiguredEmailDeliveryConfig(config)
  : flightDemoDisabledEmailDeliveryConfig(
      config,
      flightDemoIntegrationDisabledReason("FLIGHT_DEMO_SECURE_EMAIL_JOURNEY"),
    );
const emailSender = emailDeliveryConfig.configured
  ? createSmtpEmailClient({
      transport: {
        host: emailDeliveryConfig.host,
        port: emailDeliveryConfig.port,
        secure: emailDeliveryConfig.secure,
        auth: {
          user: emailDeliveryConfig.user,
          pass: emailDeliveryConfig.password,
        },
        ...(emailDeliveryConfig.secure ? {} : { requireTLS: true }),
      },
      defaults: {
        from: emailDeliveryConfig.from,
        ...(emailDeliveryConfig.replyTo ? { replyTo: emailDeliveryConfig.replyTo } : {}),
      },
    })
  : null;
const emailReplyVerificationConfig = externalIntegrationJourneysEnabled.secureEmail
  ? getConfiguredEmailReplyVerificationConfig(config)
  : flightDemoDisabledEmailReplyVerificationConfig(
      config,
      flightDemoIntegrationDisabledReason("FLIGHT_DEMO_SECURE_EMAIL_JOURNEY"),
    );
const voiceSessionStore = createInMemoryVoiceSessionStore();
const voiceProvider = createConfiguredVoiceProvider(config, voiceSecrets);
const runtime = createRuntime({
  storage,
  agent,
  models,
  journeyIndex,
  channels: createFlightDemoRuntimeChannels({
    externalIntegrationJourneysEnabled,
  }),
  providerPackages: [discordMessagingProviderManifest, whatsappMessagingProviderManifest],
  capabilityAvailability: [discordCapabilityAvailability, whatsAppCapabilityAvailability],
  providerCredentialStatuses: [...discordCredentialStatuses, ...whatsAppCredentialStatuses],
  providerReadiness: [
    flightDemoDiscordProviderReadiness(
      config,
      discordCredentialStatuses,
      externalIntegrationJourneysEnabled.discordHandoff,
    ),
    flightDemoWhatsAppProviderReadiness(
      config,
      whatsAppCredentialStatuses,
      whatsAppDeliveryConfig,
      externalIntegrationJourneysEnabled.whatsapp,
    ),
  ],
  topKJourneys: 3,
  streaming: {
    syntheticDeltas: true,
  },
  telemetry: {
    content: process.env.COGNIDESK_TELEMETRY_CONTENT === "full" ? "full" : "redacted",
  },
});
await runtime.initialize();

const discordService = discordIntegration
  ? createDiscordGatewayService({
      config: discordIntegration.config,
      botToken: discordIntegration.secrets.botToken,
      runtime,
      store: createDiscordSqliteStore({ filename: sqlitePath }),
      agentId: agent.id,
      copy: {
        supportThreadNamePrefix: "Flight support",
        sourceThreadNamePrefix: "Flight support",
        voiceChannelNamePrefix: "Flight support voice",
        promptFallbackMessage: ({ conversationUrl }: { conversationUrl: string }) =>
          `This step needs the web demo. Continue here: ${conversationUrl}`,
        turnFailureMessage: ({ conversationUrl }: { conversationUrl: string }) =>
          `The flight demo could not generate a response. Continue on web: ${conversationUrl}`,
        voiceHandoffMessage: ({ conversationUrl, discordVoiceChannelUrl }: {
          conversationUrl: string;
          discordVoiceChannelUrl: string;
        }) => [
          `Voice handoff room: ${discordVoiceChannelUrl}`,
          `Customer transcript: ${conversationUrl}`,
          "Use this support thread for notes. Type `bot: <instruction>` here to hand the customer back to the bot.",
        ].join("\n"),
      },
    })
  : null;
if (discordService) await discordService.start();
const handoffRuntime = withFlightDemoDiscordHandoff(runtime, () => discordService, () => ({
  config: emailDeliveryConfig,
  sender: emailSender,
}));
const emailReplyPoller = emailReplyVerificationConfig.configured
  ? createFlightDemoEmailReplyPoller({
      runtime: handoffRuntime,
      agentId: agent.id,
      imapClient: createImapEmailClient({
        connection: {
          host: emailReplyVerificationConfig.host,
          port: emailReplyVerificationConfig.port,
          secure: emailReplyVerificationConfig.secure,
          auth: {
            user: emailReplyVerificationConfig.user,
            pass: emailReplyVerificationConfig.password,
          },
        },
        mailbox: emailReplyVerificationConfig.mailbox,
      }),
      channelId: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
      statusEventType: FLIGHT_EMAIL_SWITCH_STATUS_EVENT,
      policyId: FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID,
      pollIntervalMs: emailReplyVerificationConfig.pollIntervalMs,
      lookbackMinutes: emailReplyVerificationConfig.lookbackMinutes,
    })
  : null;
if (emailReplyPoller) emailReplyPoller.start();

const handler = createCognideskHttpHandler({
  runtime: handoffRuntime,
  basePath: "/api",
  agentId: agent.id,
  chatStart: agent.behavior.chatStart,
  ...(voiceProvider
    ? {
        voice: createVoiceSocketHandshake({
          store: voiceSessionStore,
        }),
      }
    : {}),
  cors: corsEnabled,
  ssePollIntervalMs: 300,
});

const studioAdapter = createCognideskStudioAdapter({
  targetId: process.env.COGNIDESK_STUDIO_TARGET_ID ?? "flight-demo-local",
  agent,
  runtime,
  configuration: {
    providerPackages: [discordMessagingProviderManifest, whatsappMessagingProviderManifest],
    capabilityAvailability: [discordCapabilityAvailability, whatsAppCapabilityAvailability],
    credentialStatuses: [...discordCredentialStatuses, ...whatsAppCredentialStatuses],
    providerReadiness: [
      flightDemoDiscordProviderReadiness(
        config,
        discordCredentialStatuses,
        externalIntegrationJourneysEnabled.discordHandoff,
        discordService,
      ),
      flightDemoWhatsAppProviderReadiness(
        config,
        whatsAppCredentialStatuses,
        whatsAppDeliveryConfig,
        externalIntegrationJourneysEnabled.whatsapp,
      ),
    ],
  },
  basePath: "/api/studio",
  serviceToken: flightDemoStudioServiceToken(),
  cors: corsEnabled,
});

const port = Number(process.env.PORT ?? 8787);
const host = process.env.HOST ?? "127.0.0.1";
const server = createServer(async (nodeRequest, nodeResponse) => {
  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  try {
    const request = toWebRequest(nodeRequest, port);
    const path = new URL(request.url).pathname;
    const response = path.startsWith("/api/demo/discord")
      ? await handleFlightDemoDiscordRequest(request, discordService)
      : path.startsWith("/api/studio")
        ? await studioAdapter.handle(request)
        : await handler.handle(request);
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    nodeResponse.writeHead(response.status, headers);
    if (!response.body) {
      nodeResponse.end();
      return;
    }
    let responseClosed = false;
    nodeResponse.on("close", () => {
      responseClosed = true;
      void reader?.cancel().catch(() => undefined);
    });
    reader = response.body.getReader();
    while (true) {
      const chunk = await reader.read();
      if (chunk.done || responseClosed) break;
      if (!nodeResponse.write(Buffer.from(chunk.value))) {
        await Promise.race([
          once(nodeResponse, "drain"),
          once(nodeResponse, "close"),
        ]);
      }
    }
    if (!responseClosed) nodeResponse.end();
  } catch (error) {
    nodeResponse.writeHead(500, { "content-type": "application/json" });
    nodeResponse.end(JSON.stringify({
      error: "Internal server error",
    }));
  } finally {
    await reader?.cancel().catch(() => undefined);
  }
});

if (voiceProvider) {
  attachNodeVoiceWebSocketAdapter({
    server,
    store: voiceSessionStore,
    runtime: handoffRuntime,
    provider: voiceProvider,
    control: createFlightDemoVoiceControlSurface({
      runtime,
      agent,
      models,
      knowledgeIndex,
    }),
    ...(agent.voice ? { profile: agent.voice } : {}),
    pathPrefix: "/api/voice/connections",
    turnPreambleMs: 700,
  });
}

server.listen(port, host, () => {
  console.log(`Flight demo API listening on http://${host}:${port}/api`);
});

server.on("close", () => {
  void discordService?.stop().catch(() => undefined);
  void emailReplyPoller?.stop().catch(() => undefined);
  demoTelemetrySeed?.shutdown();
  void otel?.shutdown().catch(() => undefined);
});

function withFlightDemoDiscordHandoff(
  runtime: CognideskRuntime,
  discordServiceForTurn: () => DiscordGatewayService | null,
  emailDeliveryForTurn: () => FlightDemoEmailDelivery,
): CognideskRuntime {
  return new Proxy(runtime, {
    get(target, property, receiver) {
      if (property === "handleUserMessage") {
        return async (input: HandleUserMessageInput): Promise<HandleUserMessageResult> => {
          const blocked = await blockIfFlightDemoEmailReplyIsPending(target, input);
          if (blocked) return blocked;
          const result = await target.handleUserMessage(input);
          const withDiscord = await appendFlightDemoDiscordHandoffEvents(target, discordServiceForTurn(), result);
          return appendFlightDemoEmailSwitchEvents(target, emailDeliveryForTurn(), withDiscord);
        };
      }
      if (property === "handleChannelEvent") {
        return async (input: HandleChannelEventInput): Promise<HandleChannelEventResult> => {
          const result = await target.handleChannelEvent(input);
          const withDiscord = await appendFlightDemoDiscordHandoffEvents(target, discordServiceForTurn(), result);
          return appendFlightDemoEmailSwitchEvents(target, emailDeliveryForTurn(), withDiscord);
        };
      }
      if (property === "handleVoiceUserMessage") {
        return async (input: HandleVoiceUserMessageInput): Promise<HandleVoiceUserMessageResult> => {
          const blocked = await blockIfFlightDemoEmailReplyIsPending(target, input);
          if (blocked) return { ...blocked, voiceEvents: blocked.events };
          const result = await target.handleVoiceUserMessage(input);
          const next = await appendFlightDemoDiscordHandoffEvents(target, discordServiceForTurn(), result);
          const withEmail = await appendFlightDemoEmailSwitchEvents(target, emailDeliveryForTurn(), next);
          const handoffText = flightDemoHandoffIntermediateText(withEmail.events.slice(result.events.length));
          if (handoffText) void input.onAssistantTextDelta?.(` ${handoffText}`);
          return withEmail;
        };
      }
      if (property === "submitWidget") {
        return async (input: SubmitWidgetInput): Promise<RuntimeEvent> => {
          const event = await target.submitWidget(input);
          await prepareFlightDemoEmailSwitch(target, input.conversationId, emailDeliveryForTurn());
          return event;
        };
      }
      const value = Reflect.get(target, property, receiver);
      return typeof value === "function" ? value.bind(target) : value;
    },
  });
}

async function appendFlightDemoDiscordHandoffEvents<TResult extends {
  activeJourneyId?: string;
  conversation?: { id: string };
  events: RuntimeEvent[];
}>(
  runtime: CognideskRuntime,
  service: DiscordGatewayService | null,
  result: TResult,
): Promise<TResult> {
  if (!flightHandoffWasActivated(result.events)) return result;
  const conversationId = result.conversation?.id;
  if (!conversationId) return result;
  const events = await prepareFlightDemoDiscordHandoff(runtime, service, conversationId, result.events);
  return events.length > 0 ? { ...result, events: [...result.events, ...events] } : result;
}

function flightHandoffWasActivated(events: RuntimeEvent[]) {
  return events.some((event) =>
    event.type === "journey.activated" && event.data.journeyId === FLIGHT_HANDOFF_JOURNEY_ID
  );
}

function flightDemoHandoffIntermediateText(events: RuntimeEvent[]) {
  const completed = events.find((event) =>
    event.type === "message.completed" && event.data.intermediate === true
  );
  return completed?.type === "message.completed" ? completed.data.text : undefined;
}

async function appendFlightDemoEmailSwitchEvents<TResult extends {
  activeJourneyId?: string;
  conversation?: { id: string };
  events: RuntimeEvent[];
}>(
  runtime: CognideskRuntime,
  emailDelivery: FlightDemoEmailDelivery,
  result: TResult,
): Promise<TResult> {
  if (!flightEmailSwitchWasCompleted(result.events)) return result;
  const conversationId = result.conversation?.id;
  if (!conversationId) return result;
  const events = await prepareFlightDemoEmailSwitch(runtime, conversationId, emailDelivery);
  return events.length > 0 ? { ...result, events: [...result.events, ...events] } : result;
}

function flightEmailSwitchWasCompleted(events: RuntimeEvent[]) {
  return events.some((event) =>
    event.type === "journey.completed" && event.data.journeyId === FLIGHT_SECURE_EMAIL_JOURNEY_ID
  );
}

async function blockIfFlightDemoEmailReplyIsPending(
  runtime: CognideskRuntime,
  input: HandleUserMessageInput,
): Promise<HandleUserMessageResult | null> {
  if (flightDemoIsEmailInputChannel(input.channel)) return null;
  const status = await flightDemoPendingEmailReplyStatus(runtime, input.conversationId);
  if (!status) return null;
  const accountEmail = typeof status.accountEmail === "string" ? status.accountEmail : "the account email";
  const bookingReference = typeof status.bookingReference === "string" ? status.bookingReference : "this booking";
  const text = [
    `Please confirm this request from the email I sent to ${accountEmail} before we continue.`,
    `Reply to that email for booking ${bookingReference}; I will resume the workflow automatically after the reply arrives.`,
  ].join(" ");
  const conversations = await runtime.listConversations({ limit: 200 });
  const conversation = conversations.find((entry) => entry.id === input.conversationId);
  if (!conversation) throw new Error(`Conversation ${input.conversationId} not found.`);
  const emitted: RuntimeEvent[] = [];
  if (input.recordUserMessage !== false) {
    emitted.push(await runtime.emit({
      conversationId: input.conversationId,
      type: "message.started",
      data: { role: "user" },
    }));
    emitted.push(await runtime.emit({
      conversationId: input.conversationId,
      type: "message.completed",
      data: { text: input.text },
    }));
  }
  const message = await runtime.emitIntermediateMessage({
    conversationId: input.conversationId,
    text,
    visibleToModel: true,
  });
  emitted.push(...message.events);
  await input.onAssistantTextDelta?.(text);
  const snapshot = await runtime.getSnapshot(input.conversationId);
  if (!snapshot) throw new Error(`Conversation snapshot ${input.conversationId} not found.`);
  return {
    conversation,
    snapshot,
    events: emitted,
    text,
    ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
  };
}

async function flightDemoPendingEmailReplyStatus(runtime: CognideskRuntime, conversationId: string) {
  const events = await runtime.listEvents(conversationId, 0);
  for (const event of [...events].reverse()) {
    if (event.type !== FLIGHT_EMAIL_SWITCH_STATUS_EVENT || !isRecord(event.data)) continue;
    return event.data.status === "waiting_for_reply" ? event.data : null;
  }
  return null;
}

function flightDemoIsEmailInputChannel(channel: HandleUserMessageInput["channel"]) {
  if (!channel) return false;
  if (channel === FLIGHT_SECURE_EMAIL_CHANNEL_ID) return true;
  return isRecord(channel) && channel.kind === "email";
}

async function prepareFlightDemoDiscordHandoff(
  runtime: CognideskRuntime,
  service: DiscordGatewayService | null,
  conversationId: string,
  turnEvents: RuntimeEvent[] = [],
) {
  const existingEvents = await runtime.listEvents(conversationId, 0);
  const allEvents = [...existingEvents, ...turnEvents];
  const voice = flightConversationHasVoice(allEvents);
  const existingStatus = [...existingEvents].reverse().find((event) => event.type === FLIGHT_DISCORD_HANDOFF_STATUS_EVENT);
  if (existingStatus && (!voice || flightHandoffStatusHasVoiceRoom(existingStatus))) return [];
  const existingPreparation = discordHandoffPreparations.get(conversationId);
  if (existingPreparation) return existingPreparation;

  const preparation = createFlightDemoDiscordHandoffStatus(runtime, service, conversationId, { voice })
    .finally(() => {
      discordHandoffPreparations.delete(conversationId);
    });
  discordHandoffPreparations.set(conversationId, preparation);
  return preparation;
}

async function createFlightDemoDiscordHandoffStatus(
  runtime: CognideskRuntime,
  service: DiscordGatewayService | null,
  conversationId: string,
  options: { voice: boolean } = { voice: false },
): Promise<RuntimeEvent[]> {
  if (!service) {
    const message = await runtime.emitIntermediateMessage({
      conversationId,
      text: FLIGHT_DISCORD_UNAVAILABLE_MESSAGE,
      visibleToModel: true,
    });
    const status = await runtime.emit({
      conversationId,
      type: FLIGHT_DISCORD_HANDOFF_STATUS_EVENT,
      data: {
        status: "unavailable",
        provider: "discord",
        providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
        reason: "Discord Gateway service is not configured.",
      },
    });
    return [...message.events, status];
  }

  try {
    const handoff = await service.continueConversation(conversationId, { voice: options.voice });
    const status = await runtime.emit({
      conversationId,
      type: FLIGHT_DISCORD_HANDOFF_STATUS_EVENT,
      data: {
        status: "prepared",
        provider: "discord",
        providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
        discordThreadId: handoff.discordThreadId,
        discordThreadUrl: handoff.discordThreadUrl,
        voice: options.voice,
        ...(handoff.discordVoiceChannelId ? { discordVoiceChannelId: handoff.discordVoiceChannelId } : {}),
        ...(handoff.discordVoiceChannelUrl ? { discordVoiceChannelUrl: handoff.discordVoiceChannelUrl } : {}),
      },
    });
    return [status];
  } catch (error) {
    const reason = error instanceof Error ? error.message : "Failed to prepare Discord handoff.";
    console.error("Flight demo Discord human handoff preparation failed.", error);
    const message = await runtime.emitIntermediateMessage({
      conversationId,
      text: `Human support handoff requested, but Discord support is not ready yet. ${reason}`,
      visibleToModel: true,
    });
    const status = await runtime.emit({
      conversationId,
      type: FLIGHT_DISCORD_HANDOFF_STATUS_EVENT,
      data: {
        status: "failed",
        provider: "discord",
        providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
        reason,
      },
    });
    return [...message.events, status];
  }
}

async function prepareFlightDemoEmailSwitch(
  runtime: CognideskRuntime,
  conversationId: string,
  emailDelivery: FlightDemoEmailDelivery,
) {
  const existingEvents = await runtime.listEvents(conversationId, 0);
  if (existingEvents.some((event) => event.type === FLIGHT_EMAIL_SWITCH_STATUS_EVENT)) return [];
  if (!existingEvents.some((event) =>
    event.type === "journey.completed" && event.data.journeyId === FLIGHT_SECURE_EMAIL_JOURNEY_ID
  )) return [];
  const existingPreparation = emailSwitchPreparations.get(conversationId);
  if (existingPreparation) return existingPreparation;

  const preparation = createFlightDemoEmailSwitchStatus(runtime, conversationId, emailDelivery)
    .finally(() => {
      emailSwitchPreparations.delete(conversationId);
    });
  emailSwitchPreparations.set(conversationId, preparation);
  return preparation;
}

async function createFlightDemoEmailSwitchStatus(
  runtime: CognideskRuntime,
  conversationId: string,
  emailDelivery: FlightDemoEmailDelivery,
): Promise<RuntimeEvent[]> {
  const snapshot = await runtime.getSnapshot(conversationId);
  const context = flightSecureEmailContextFromSnapshot(snapshot);
  const bookingReference = typeof context.bookingReference === "string"
    ? context.bookingReference.trim().toUpperCase()
    : "";
  const accountEmail = typeof context.accountEmail === "string"
    ? context.accountEmail.trim()
    : "";
  const requestType = typeof context.requestType === "string"
    ? context.requestType.trim()
    : "account-protected flight request";
  if (!bookingReference || !isEmailLike(accountEmail)) return [];

  const threadId = `secure-email-${shortId(conversationId)}`;
  const maskedAccountEmail = maskEmail(accountEmail);
  const deliveryConfig = emailDelivery.config;

  if (!deliveryConfig.configured) {
    return emitFlightDemoEmailSwitchFailure(runtime, {
      conversationId,
      bookingReference,
      requestType,
      accountEmail: maskedAccountEmail,
      reason: deliveryConfig.reason,
      reasonCode: "smtp-not-configured",
      missingEnv: deliveryConfig.missingEnv,
      customerReason: "SMTP is not configured for this local demo yet.",
    });
  }
  if (!emailDelivery.sender) {
    return emitFlightDemoEmailSwitchFailure(runtime, {
      conversationId,
      bookingReference,
      requestType,
      accountEmail: maskedAccountEmail,
      reason: "Flight demo secure-email SMTP sender was not initialized.",
      reasonCode: "smtp-sender-unavailable",
      customerReason: "SMTP is not ready in this local demo yet.",
    });
  }

  const recipientEmail = secureEmailRecipient(deliveryConfig, accountEmail);
  if (!isEmailLike(recipientEmail)) {
    return emitFlightDemoEmailSwitchFailure(runtime, {
      conversationId,
      bookingReference,
      requestType,
      accountEmail: maskedAccountEmail,
      reason: "The configured secure-email recipient override is not a valid email address.",
      reasonCode: "smtp-invalid-recipient",
      customerReason: "the configured email recipient is invalid.",
    });
  }

  const loginUrl = secureEmailLoginUrl({
    conversationId,
    bookingReference,
    accountEmail,
    baseUrl: deliveryConfig.loginBaseUrl,
  });
  const verificationCode = flightDemoEmailReplyVerificationCode({
    conversationId,
    bookingReference,
    accountEmail,
  });
  const maskedRecipientEmail = maskEmail(recipientEmail);
  const recipientOverridden = Boolean(deliveryConfig.recipientOverride);
  const channel = defineChannelContext({
    channelId: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
    kind: "email",
    provider: "smtp",
    externalThreadId: threadId,
    externalUserId: maskedRecipientEmail,
    capabilities: {
      async: true,
      html: true,
      markdown: false,
      threaded: true,
      deliveryReceipts: true,
    },
    metadata: {
      loginRequired: true,
      bookingReference,
      requestType,
      accountEmailMasked: maskedAccountEmail,
      recipientEmailMasked: maskedRecipientEmail,
      recipientOverridden,
      fromMasked: maskEmail(deliveryConfig.from),
      verificationMode: "email-reply",
      policyId: FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID,
    },
  });
  const subject = flightDemoEmailReplySubject({ bookingReference, verificationCode });
  const body = [
    "Hello,",
    "",
    `We received your ${requestType} in chat.`,
    "For your security, reply to this email with exactly:",
    `CONFIRM ${verificationCode}`,
    "",
    "After your reply arrives, Cognidesk will continue the workflow in the flight demo conversation.",
    "",
    "Do not reply with passwords, one-time codes, passport numbers, or payment details.",
    "",
    "Cognidesk Flight Demo",
  ].join("\n");
  let sendResult: Awaited<ReturnType<SmtpEmailClient["sendEmail"]>>;
  try {
    sendResult = await emailDelivery.sender.sendEmail({
      to: recipientEmail,
      subject,
      text: body,
      html: htmlEmailFromText(body),
    });
  } catch (error) {
    const reason = publicSmtpErrorMessage(error);
    console.error("Flight demo SMTP secure-email delivery failed.", reason);
    return emitFlightDemoEmailSwitchFailure(runtime, {
      conversationId,
      bookingReference,
      requestType,
      accountEmail: maskedAccountEmail,
      recipientEmail: maskedRecipientEmail,
      reason,
      reasonCode: "smtp-send-failed",
      customerReason: "the SMTP provider rejected the email.",
    });
  }

  const customerMessage = [
    `I sent a verification email to ${maskedRecipientEmail}.`,
    `Reply to that email to confirm the ${requestType} for booking ${bookingReference}.`,
    "I will continue automatically after the email reply arrives.",
    "I will not ask for your password or one-time code in chat.",
  ].join(" ");

  const message = await runtime.emitIntermediateMessage({
    conversationId,
    text: customerMessage,
    visibleToModel: true,
  });
  const linked = await runtime.emit({
    conversationId,
    type: "channel.thread.linked",
    data: {
      channel,
      reason: "secure-login-required",
    },
  });
  const sent = await runtime.emit({
    conversationId,
    type: "channel.sent",
    data: {
      channel,
      text: customerMessage,
      payload: {
        to: maskedRecipientEmail,
        from: maskEmail(deliveryConfig.from),
        subject,
        body,
        loginUrl,
        deliveryMode: "smtp-email-reply-verification",
        policyId: FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID,
        provider: "smtp",
        recipientOverridden,
        verificationMode: "email-reply",
        ...(sendResult.messageId ? { smtpMessageId: sendResult.messageId } : {}),
      },
    },
  });
  const delivery = await runtime.emit({
    conversationId,
    type: "channel.delivery.updated",
    data: {
      channel,
      status: "sent",
      payload: {
        externalThreadId: threadId,
        deliveryMode: "smtp-email-reply-verification",
        accepted: sendResult.accepted.map(maskEmail),
        rejected: sendResult.rejected.map(maskEmail),
        ...(sendResult.messageId ? { smtpMessageId: sendResult.messageId } : {}),
        ...(sendResult.response ? { smtpResponse: sendResult.response } : {}),
      },
    },
  });
  const status = await runtime.emit({
    conversationId,
    type: FLIGHT_EMAIL_SWITCH_STATUS_EVENT,
    data: {
      status: "waiting_for_reply",
      provider: "smtp",
      channelId: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
      emailThreadId: threadId,
      accountEmail: maskedAccountEmail,
      recipientEmail: maskedRecipientEmail,
      recipientOverridden,
      bookingReference,
      requestType,
      verificationMode: "email-reply",
      policyId: FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID,
      ...(sendResult.messageId ? { smtpMessageId: sendResult.messageId } : {}),
    },
  });
  return [...message.events, linked, sent, delivery, status];
}

async function emitFlightDemoEmailSwitchFailure(
  runtime: CognideskRuntime,
  input: {
    conversationId: string;
    bookingReference: string;
    requestType: string;
    accountEmail: string;
    recipientEmail?: string;
    reason: string;
    reasonCode: string;
    customerReason: string;
    missingEnv?: string[];
  },
): Promise<RuntimeEvent[]> {
  const message = await runtime.emitIntermediateMessage({
    conversationId: input.conversationId,
    text: [
      `I could not send the secure sign-in email for booking ${input.bookingReference} because ${input.customerReason}`,
      "No password or one-time code is needed in chat.",
    ].join(" "),
    visibleToModel: true,
  });
  const status = await runtime.emit({
    conversationId: input.conversationId,
    type: FLIGHT_EMAIL_SWITCH_STATUS_EVENT,
    data: {
      status: "failed",
      provider: "smtp",
      channelId: FLIGHT_SECURE_EMAIL_CHANNEL_ID,
      accountEmail: input.accountEmail,
      ...(input.recipientEmail ? { recipientEmail: input.recipientEmail } : {}),
      bookingReference: input.bookingReference,
      requestType: input.requestType,
      reason: input.reason,
      reasonCode: input.reasonCode,
      ...(input.missingEnv && input.missingEnv.length > 0 ? { missingEnv: input.missingEnv } : {}),
      policyId: FLIGHT_EMAIL_CHANNEL_SWITCH_POLICY_ID,
    },
  });
  return [...message.events, status];
}

function flightSecureEmailContextFromSnapshot(snapshot: unknown) {
  if (!isRecord(snapshot)) return {};
  if (isRecord(snapshot.journeyContext)) return snapshot.journeyContext;
  if (!Array.isArray(snapshot.journeyContexts)) return {};
  const secureEmailContext = snapshot.journeyContexts.find((entry) => (
    isRecord(entry)
    && entry.journeyId === FLIGHT_SECURE_EMAIL_JOURNEY_ID
    && isRecord(entry.context)
  ));
  return isRecord(secureEmailContext) && isRecord(secureEmailContext.context)
    ? secureEmailContext.context
    : {};
}

function secureEmailRecipient(config: Extract<ConfiguredEmailDeliveryConfig, { configured: true }>, accountEmail: string) {
  return config.recipientOverride ?? accountEmail;
}

async function handleFlightDemoDiscordRequest(
  request: Request,
  service: DiscordGatewayService | null,
) {
  const url = new URL(request.url);
  if (request.method === "OPTIONS") return demoJson({}, 204);
  if (request.method === "GET" && url.pathname === "/api/demo/discord/status") {
    return demoJson(service ? service.status() : { enabled: false, ready: false });
  }
  if (request.method === "POST" && url.pathname === "/api/demo/discord/continue") {
    if (!service) return demoJson({ error: "Discord integration is not enabled for the flight demo." }, 501);
    const body = await request.json().catch(() => null);
    const conversationId = isRecord(body) && typeof body.conversationId === "string"
      ? body.conversationId.trim()
      : "";
    if (!conversationId) return demoJson({ error: "conversationId is required." }, 400);
    const voice = isRecord(body) && body.voice === true;
    try {
      return demoJson(await service.continueConversation(conversationId, { voice }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to continue conversation in Discord.";
      return demoJson({ error: message }, /not ready/i.test(message) ? 503 : 500);
    }
  }
  return demoJson({ error: "Not found" }, 404);
}

function demoJson(value: unknown, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(value), {
    status,
    headers: {
      ...(status === 204 ? {} : { "content-type": "application/json" }),
      ...demoCorsHeaders(),
    },
  });
}

function demoCorsHeaders() {
  if (!corsEnabled) return {};
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isEmailLike(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function maskEmail(email: string) {
  const [local = "", domain = ""] = email.split("@");
  const visibleLocal = local.slice(0, Math.min(2, local.length));
  return `${visibleLocal}${local.length > visibleLocal.length ? "..." : "."}@${domain}`;
}

function publicSmtpErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "SMTP delivery failed.";
  return message.replace(/[^\s@]+@[^\s@]+\.[^\s@.,;:)]+/g, (email) => maskEmail(email));
}

function secureEmailLoginUrl(input: {
  conversationId: string;
  bookingReference: string;
  accountEmail: string;
  baseUrl: string;
}) {
  const token = createHash("sha256")
    .update(`${input.conversationId}:${input.bookingReference}:${input.accountEmail.toLowerCase()}`)
    .digest("base64url")
    .slice(0, 24);
  return `${input.baseUrl.replace(/\/+$/, "")}/${token}`;
}

function shortId(value: string) {
  return value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) || "thread";
}

function flightConversationHasVoice(events: RuntimeEvent[]) {
  return events.some((event) => {
    if (event.type === "voice.segment.started" || event.type === "voice.transcript.committed") return true;
    const channel = channelFromRuntimeEvent(event);
    return isRecord(channel) && channel.kind === "voice";
  });
}

function flightHandoffStatusHasVoiceRoom(event: RuntimeEvent) {
  return event.type === FLIGHT_DISCORD_HANDOFF_STATUS_EVENT
    && isRecord(event.data)
    && typeof event.data.discordVoiceChannelId === "string";
}

function channelFromRuntimeEvent(event: RuntimeEvent): unknown {
  if (!isRecord(event.data)) return null;
  if ("channel" in event.data) return event.data.channel;
  return null;
}

function flightDemoDiscordCredentialStatuses(
  config: FlightDemoConfig,
  externalApisEnabledForProvider: boolean,
): ProviderCredentialStatus[] {
  if (!externalApisEnabledForProvider) return [];
  const discord = config.discord;
  const botToken = discord?.enabled ? process.env[discord.botTokenEnv] : undefined;
  return discordMessagingCredentialStatuses({
    ...(botToken ? { botToken } : {}),
    ...(discord?.applicationId ? { applicationId: discord.applicationId } : {}),
    ...(discord?.guildId ? { guildId: discord.guildId } : {}),
    ...(discord?.supportChannelId ? { channelId: discord.supportChannelId } : {}),
    scopes: botToken ? ["bot", "applications.commands"] : [],
    requiredScopes: ["bot", "applications.commands"],
  })
    .filter((status) => flightDiscordCredentialRequirementIds.has(status.requirementId))
    .map((status) => ProviderCredentialStatusSchema.parse(status));
}

function flightDemoDiscordCapabilityAvailability(
  config: FlightDemoConfig,
  credentialStatuses: ProviderCredentialStatus[],
  externalApisEnabledForProvider: boolean,
): CapabilityAvailability {
  const blockers = flightDemoDiscordBlockers(config, credentialStatuses, externalApisEnabledForProvider);
  return CapabilityAvailabilitySchema.parse({
    providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
    capability: "thread",
    status: blockers.length > 0 ? "blocked" : "enabled",
    enabledForChannels: ["chat", "voice"],
    enabledForJourneys: [FLIGHT_HANDOFF_JOURNEY_ID],
    blockers,
    metadata: {
      destination: "discord-support-thread",
      enabled: config.discord?.enabled === true,
      ...(config.discord?.supportChannelId ? { supportChannelId: config.discord.supportChannelId } : {}),
    },
  });
}

function flightDemoDiscordProviderReadiness(
  config: FlightDemoConfig,
  credentialStatuses: ProviderCredentialStatus[],
  externalApisEnabledForProvider: boolean,
  service?: DiscordGatewayService | null,
): ProviderReadiness {
  const blockers = flightDemoDiscordBlockers(config, credentialStatuses, externalApisEnabledForProvider);
  const status = service?.status();
  if (!externalApisEnabledForProvider) {
    return ProviderReadinessSchema.parse({
      providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
      status: "not-configured",
      live: false,
      checkedAt: new Date().toISOString(),
      checkSource: "flight-demo-config",
      blockers,
    });
  }
  if (config.discord?.enabled !== true) {
    return ProviderReadinessSchema.parse({
      providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
      status: "not-configured",
      live: false,
      checkedAt: new Date().toISOString(),
      checkSource: "flight-demo-config",
      blockers: [{
        code: "discord-disabled",
        message: "Discord handoff is disabled in the flight demo configuration.",
        kind: "missing-configuration",
      }],
    });
  }
  if (blockers.length > 0) {
    return ProviderReadinessSchema.parse({
      providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
      status: "blocked",
      live: false,
      checkedAt: new Date().toISOString(),
      checkSource: "flight-demo-config",
      blockers,
    });
  }
  return ProviderReadinessSchema.parse({
    providerPackageId: FLIGHT_DISCORD_PROVIDER_PACKAGE_ID,
    status: status?.ready ? "ready" : "configured",
    live: status?.ready ?? false,
    checkedAt: new Date().toISOString(),
    checkSource: service ? "flight-demo-discord-gateway" : "flight-demo-config",
    blockers: [],
    metadata: {
      guildId: config.discord.guildId,
      supportChannelId: config.discord.supportChannelId,
      applicationId: config.discord.applicationId,
      ...(status?.botUser ? { botUser: status.botUser } : {}),
    },
  });
}

function flightDemoDiscordBlockers(
  config: FlightDemoConfig,
  credentialStatuses: ProviderCredentialStatus[],
  externalApisEnabledForProvider: boolean,
) {
  const blockers: Array<{
    code: string;
    message: string;
    kind: "missing-configuration" | "missing-credentials" | "permission-blocked";
  }> = [];
  if (!externalApisEnabledForProvider) {
    blockers.push({
      code: "external-apis-disabled",
      message: flightDemoIntegrationDisabledReason("FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY"),
      kind: "missing-configuration",
    });
    return blockers;
  }
  if (config.discord?.enabled !== true) {
    blockers.push({
      code: "discord-disabled",
      message: "Discord handoff is disabled in the flight demo configuration.",
      kind: "missing-configuration",
    });
  }
  for (const status of credentialStatuses) {
    if (!["missing", "expired", "insufficient-scope", "permission-blocked", "unavailable"].includes(status.state)) {
      continue;
    }
    blockers.push({
      code: `discord-${status.requirementId}-${status.state}`,
      message: status.message ?? `Discord credential '${status.requirementId}' is ${status.state}.`,
      kind: status.state === "permission-blocked" ? "permission-blocked" : "missing-credentials",
    });
  }
  return blockers;
}

function flightDemoWhatsAppCredentialStatuses(
  config: FlightDemoConfig,
  externalApisEnabledForProvider: boolean,
): ProviderCredentialStatus[] {
  if (!externalApisEnabledForProvider) return [];
  const whatsapp = config.whatsapp;
  const accessToken = whatsapp.enabled ? process.env[whatsapp.accessTokenEnv]?.trim() : undefined;
  const phoneNumberId = whatsapp.enabled ? process.env[whatsapp.phoneNumberIdEnv]?.trim() : undefined;
  const appSecret = whatsapp.enabled ? process.env[whatsapp.appSecretEnv]?.trim() : undefined;
  const verifyToken = whatsapp.enabled ? process.env[whatsapp.verifyTokenEnv]?.trim() : undefined;
  return whatsappMessagingCredentialStatuses({
    ...(accessToken ? { accessToken } : {}),
    ...(phoneNumberId ? { phoneNumberId } : {}),
    ...(appSecret ? { appSecret } : {}),
    ...(verifyToken ? { verifyToken } : {}),
    wabaWebhookSubscribed: whatsapp.enabled && whatsapp.wabaWebhookSubscribed,
  }).map((status) => ProviderCredentialStatusSchema.parse(status));
}

function flightDemoWhatsAppCapabilityAvailability(
  config: FlightDemoConfig,
  credentialStatuses: ProviderCredentialStatus[],
  externalApisEnabledForProvider: boolean,
): CapabilityAvailability {
  const blockers = flightDemoWhatsAppBlockers(config, credentialStatuses, externalApisEnabledForProvider);
  return CapabilityAvailabilitySchema.parse({
    providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
    capability: "send",
    status: blockers.length > 0 ? "blocked" : "enabled",
    enabledForChannels: ["chat", "voice", "messaging"],
    enabledForJourneys: [FLIGHT_WHATSAPP_JOURNEY_ID],
    enabledForTools: ["sendWhatsAppCustomerMessage"],
    blockers,
    metadata: {
      destination: "whatsapp-customer-message",
      enabled: config.whatsapp.enabled,
      graphApiVersion: config.whatsapp.graphApiVersion,
      policyId: FLIGHT_WHATSAPP_CUSTOMER_MESSAGE_POLICY_ID,
    },
  });
}

function flightDemoWhatsAppProviderReadiness(
  config: FlightDemoConfig,
  credentialStatuses: ProviderCredentialStatus[],
  deliveryConfig: ConfiguredWhatsAppDeliveryConfig,
  externalApisEnabledForProvider: boolean,
): ProviderReadiness {
  const blockers = flightDemoWhatsAppBlockers(config, credentialStatuses, externalApisEnabledForProvider);
  if (!externalApisEnabledForProvider) {
    return ProviderReadinessSchema.parse({
      providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
      status: "not-configured",
      live: false,
      checkedAt: new Date().toISOString(),
      checkSource: "flight-demo-config",
      blockers,
    });
  }
  if (!config.whatsapp.enabled) {
    return ProviderReadinessSchema.parse({
      providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
      status: "not-configured",
      live: false,
      checkedAt: new Date().toISOString(),
      checkSource: "flight-demo-config",
      blockers,
    });
  }
  if (blockers.length > 0) {
    return ProviderReadinessSchema.parse({
      providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
      status: "blocked",
      live: false,
      checkedAt: new Date().toISOString(),
      checkSource: "flight-demo-config",
      blockers,
      remediationActions: [{
        id: "configure-whatsapp-cloud-api",
        label: "Configure WhatsApp Cloud API credentials",
        kind: "configure",
      }],
    });
  }
  return ProviderReadinessSchema.parse({
    providerPackageId: FLIGHT_WHATSAPP_PROVIDER_PACKAGE_ID,
    status: "configured",
    live: false,
    checkedAt: new Date().toISOString(),
    checkSource: "flight-demo-config",
    blockers: [],
    metadata: {
      phoneNumberId: deliveryConfig.configured ? deliveryConfig.phoneNumberId : undefined,
      graphApiVersion: config.whatsapp.graphApiVersion,
      recipientOverrideConfigured: Boolean(deliveryConfig.recipientOverride),
      wabaWebhookSubscribed: config.whatsapp.wabaWebhookSubscribed,
    },
  });
}

function flightDemoWhatsAppBlockers(
  config: FlightDemoConfig,
  credentialStatuses: ProviderCredentialStatus[],
  externalApisEnabledForProvider: boolean,
) {
  const blockers: Array<{
    code: string;
    message: string;
    kind: "missing-configuration" | "missing-credentials" | "permission-blocked";
  }> = [];
  if (!externalApisEnabledForProvider) {
    blockers.push({
      code: "external-apis-disabled",
      message: flightDemoIntegrationDisabledReason("FLIGHT_DEMO_WHATSAPP_JOURNEY"),
      kind: "missing-configuration",
    });
    return blockers;
  }
  if (!config.whatsapp.enabled) {
    blockers.push({
      code: "whatsapp-disabled",
      message: "WhatsApp delivery is disabled in the flight demo configuration.",
      kind: "missing-configuration",
    });
    return blockers;
  }
  for (const status of credentialStatuses) {
    if (!flightWhatsAppOutboundRequirementIds.has(status.requirementId)) continue;
    if (!["missing", "expired", "insufficient-scope", "permission-blocked", "unavailable"].includes(status.state)) {
      continue;
    }
    blockers.push({
      code: `whatsapp-${status.requirementId}-${status.state}`,
      message: status.message ?? `WhatsApp credential '${status.requirementId}' is ${status.state}.`,
      kind: status.state === "permission-blocked" ? "permission-blocked" : "missing-credentials",
    });
  }
  return blockers;
}

function createConfiguredVoiceProvider(
  config: FlightDemoConfig,
  secrets: ConfiguredVoiceProviderSecrets | undefined,
) {
  if (!config.voice || !secrets) return null;
  switch (config.voice.provider) {
    case "openai": {
      if (secrets.provider !== "openai") throw new Error("OpenAI voice configuration received mismatched credentials.");
      return createOpenAIVoiceProvider({
        apiKey: secrets.apiKey,
        ...(config.voice.voice ? { voice: config.voice.voice } : {}),
        ...(config.voice.transcriptionLanguage ? { transcriptionLanguage: config.voice.transcriptionLanguage } : {}),
      });
    }
    case "elevenlabs": {
      if (secrets.provider !== "elevenlabs") {
        throw new Error("ElevenLabs voice configuration received mismatched credentials.");
      }
      return createElevenLabsVoiceProvider({
        apiKey: secrets.apiKey,
        voiceId: config.voice.voiceId,
        ...(config.voice.textToSpeechModelId ? { textToSpeechModelId: config.voice.textToSpeechModelId } : {}),
        ...(config.voice.speechToTextModelId ? { speechToTextModelId: config.voice.speechToTextModelId } : {}),
        ...(config.voice.languageCode != null ? { languageCode: config.voice.languageCode } : {}),
        ...(config.voice.outputFormat ? { outputFormat: config.voice.outputFormat } : {}),
      });
    }
    case "azure-speech": {
      if (secrets.provider !== "azure-speech") {
        throw new Error("Azure Speech voice configuration received mismatched credentials.");
      }
      return createAzureSpeechVoiceProvider({
        speechKey: secrets.speechKey,
        region: secrets.region,
        voiceName: config.voice.voiceName,
        ...(config.voice.language ? { language: config.voice.language } : {}),
        ...(config.voice.outputFormat ? { outputFormat: config.voice.outputFormat } : {}),
      });
    }
    case "aws-speech": {
      if (secrets.provider !== "aws-speech") {
        throw new Error("AWS Speech voice configuration received mismatched credentials.");
      }
      const awsClientOptions = {
        region: secrets.region,
        credentials: {
          accessKeyId: secrets.accessKeyId,
          secretAccessKey: secrets.secretAccessKey,
          ...(secrets.sessionToken ? { sessionToken: secrets.sessionToken } : {}),
        },
      };
      const startStreamTranscriptionCommand =
        StartStreamTranscriptionCommand as unknown as AwsSdkCommandConstructor<AwsTranscribeStreamingCommandInput>;
      const synthesizeSpeechCommand =
        SynthesizeSpeechCommand as unknown as AwsSdkCommandConstructor<AwsPollySynthesizeCommandInput>;
      return createAwsSpeechVoiceProvider({
        transcribeStreamingClient: new TranscribeStreamingClient(awsClientOptions),
        StartStreamTranscriptionCommand: startStreamTranscriptionCommand,
        pollyClient: new PollyClient(awsClientOptions),
        SynthesizeSpeechCommand: synthesizeSpeechCommand,
        voiceId: config.voice.voiceId,
        languageCode: config.voice.languageCode,
        ...(config.voice.engine ? { engine: config.voice.engine } : {}),
        ...(config.voice.outputFormat ? { outputFormat: config.voice.outputFormat } : {}),
      });
    }
    case "google-speech": {
      if (secrets.provider !== "google-speech") {
        throw new Error("Google Cloud Speech voice configuration received mismatched credentials.");
      }
      return createGoogleSpeechVoiceProvider({
        voiceName: config.voice.voiceName,
        accessToken: secrets.accessToken,
        languageCode: config.voice.languageCode,
        ...(config.voice.speechToTextModel ? { recognitionModel: config.voice.speechToTextModel } : {}),
        ...(config.voice.audioEncoding ? { audioEncoding: config.voice.audioEncoding } : {}),
      });
    }
    case "deepgram": {
      if (secrets.provider !== "deepgram") {
        throw new Error("Deepgram voice configuration received mismatched credentials.");
      }
      return createDeepgramVoiceProvider({
        apiKey: secrets.apiKey,
        textToSpeechModel: config.voice.textToSpeechModel,
        ...(config.voice.speechToTextModel ? { speechToTextModel: config.voice.speechToTextModel } : {}),
        ...(config.voice.language ? { language: config.voice.language } : {}),
        ...(config.voice.encoding ? { encoding: config.voice.encoding } : {}),
      });
    }
  }
}

function toWebRequest(request: IncomingMessage, port: number) {
  const host = request.headers.host ?? `localhost:${port}`;
  const url = `http://${host}${request.url ?? "/"}`;
  const headers = new Headers();
  for (const [key, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }
  const method = request.method ?? "GET";
  const controller = new AbortController();
  request.on("aborted", () => {
    controller.abort();
  });
  const init: RequestInit & { duplex?: "half" } = {
    method,
    headers,
    signal: controller.signal,
  };
  if (method !== "GET" && method !== "HEAD") {
    init.body = request as unknown as BodyInit;
    init.duplex = "half";
  }
  return new Request(url, init);
}
