import { createServer, type IncomingMessage } from "node:http";
import { once } from "node:events";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { createCognideskHttpHandler } from "@cognidesk/http";
import { createRuntime } from "@cognidesk/core";
import { startCognideskOtel } from "@cognidesk/otel";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { createCognideskStudioAdapter } from "@cognidesk/studio-adapter";
import { loadFlightDemoConfig, resolveFlightDemoPath } from "./config.js";
import { createFlightDemoRuntimeParts } from "./flight-agent.js";

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

const config = await loadFlightDemoConfig();
const sqlitePath = resolveFlightDemoPath(config.storage.sqlitePath);
await mkdir(dirname(sqlitePath), { recursive: true });

const { agent, models, journeyIndex } = await createFlightDemoRuntimeParts({ config });
const storage = createSqliteStorage({ filename: sqlitePath });
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

const handler = createCognideskHttpHandler({
  runtime,
  basePath: "/api",
  agentId: agent.id,
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
    const response = path.startsWith("/api/studio")
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

server.listen(port, host, () => {
  console.log(`Flight demo API listening on http://${host}:${port}/api`);
});

server.on("close", () => {
  void otel?.shutdown().catch(() => undefined);
});

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
