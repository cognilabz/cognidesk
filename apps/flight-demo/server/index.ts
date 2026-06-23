import { createServer, type IncomingMessage } from "node:http";
import { once } from "node:events";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { StartStreamTranscriptionCommand, TranscribeStreamingClient } from "@aws-sdk/client-transcribe-streaming";
import { createCognideskHttpHandler } from "@cognidesk/http";
import { createRuntime } from "@cognidesk/core";
import {
  createDiscordGatewayService,
  createDiscordSqliteStore,
  type DiscordGatewayService,
} from "@cognidesk/integration-messaging-discord";
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
  getConfiguredDiscordIntegration,
  getConfiguredVoiceProviderSecrets,
  loadFlightDemoConfig,
  resolveFlightDemoPath,
  type ConfiguredVoiceProviderSecrets,
  type FlightDemoConfig,
} from "./config.js";
import { createFlightDemoRuntimeParts } from "./flight-agent.js";
import { createFlightDemoVoiceControlSurface } from "./voice-control.js";

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
const sqlitePath = resolveFlightDemoPath(config.storage.sqlitePath);
await mkdir(dirname(sqlitePath), { recursive: true });

const { agent, models, journeyIndex, knowledgeIndex } = await createFlightDemoRuntimeParts({ config });
const storage = createSqliteStorage({ filename: sqlitePath });
const voiceSecrets = getConfiguredVoiceProviderSecrets(config);
const discordIntegration = getConfiguredDiscordIntegration(config);
const voiceSessionStore = createInMemoryVoiceSessionStore();
const voiceProvider = createConfiguredVoiceProvider(config, voiceSecrets);
const runtime = createRuntime({
  storage,
  agent,
  models,
  journeyIndex,
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
        promptFallbackMessage: ({ conversationUrl }: { conversationUrl: string }) =>
          `This step needs the web demo. Continue here: ${conversationUrl}`,
        turnFailureMessage: ({ conversationUrl }: { conversationUrl: string }) =>
          `The flight demo could not generate a response. Continue on web: ${conversationUrl}`,
      },
    })
  : null;
if (discordService) await discordService.start();

const handler = createCognideskHttpHandler({
  runtime,
  basePath: "/api",
  agentId: agent.id,
  ...(voiceProvider
    ? {
        voice: createVoiceSocketHandshake({
          store: voiceSessionStore,
        }),
      }
    : {}),
  cors: process.env.COGNIDESK_CORS === "false" ? false : true,
  ssePollIntervalMs: 300,
});

const studioAdapter = createCognideskStudioAdapter({
  targetId: process.env.COGNIDESK_STUDIO_TARGET_ID ?? "flight-demo-local",
  agent,
  runtime,
  basePath: "/api/studio",
  serviceToken: process.env.COGNIDESK_STUDIO_TARGET_TOKEN ?? "dev-studio-token",
  cors: process.env.COGNIDESK_CORS === "false" ? false : true,
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
    runtime,
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
  demoTelemetrySeed?.shutdown();
  void otel?.shutdown().catch(() => undefined);
});

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
    try {
      return demoJson(await service.continueConversation(conversationId));
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
  if (process.env.COGNIDESK_CORS === "false") return {};
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
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
