import { createServer, type IncomingMessage } from "node:http";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { createCognideskHttpHandler } from "@cognidesk/http";
import { createRuntime } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { loadFlightDemoConfig, resolveFlightDemoPath } from "./config.js";
import { createFlightDemoRuntimeParts } from "./flight-agent.js";

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
});
await runtime.initialize();

const handler = createCognideskHttpHandler({
  runtime,
  basePath: "/api",
  agentId: agent.id,
  cors: true,
  ssePollIntervalMs: 300,
});

const port = Number(process.env.PORT ?? 8787);
const server = createServer(async (nodeRequest, nodeResponse) => {
  try {
    const request = toWebRequest(nodeRequest, port);
    const response = await handler.handle(request);
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    nodeResponse.writeHead(response.status, headers);
    if (!response.body) {
      nodeResponse.end();
      return;
    }
    const reader = response.body.getReader();
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      nodeResponse.write(Buffer.from(chunk.value));
    }
    nodeResponse.end();
  } catch (error) {
    nodeResponse.writeHead(500, { "content-type": "application/json" });
    nodeResponse.end(JSON.stringify({
      error: error instanceof Error ? error.message : "Unknown error",
    }));
  }
});

server.listen(port, () => {
  console.log(`Flight demo API listening on http://localhost:${port}/api`);
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
  const init: RequestInit & { duplex?: "half" } = {
    method,
    headers,
  };
  if (method !== "GET" && method !== "HEAD") {
    init.body = request as unknown as BodyInit;
    init.duplex = "half";
  }
  return new Request(url, init);
}
