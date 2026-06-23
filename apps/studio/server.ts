import { createHmac, randomUUID } from "node:crypto";
import { createServer, type IncomingMessage } from "node:http";
import next from "next";
import { WebSocket, WebSocketServer } from "ws";
import { ensureArtifactBucket } from "@/server/artifacts";
import { ensureBootstrapAdmin, getStudioSession } from "@/server/auth";
import { ensureDefaultTarget } from "@/server/target";
import { requirePermission } from "@/server/rbac";
import { studioEnv } from "@/server/config";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "127.0.0.1";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
let handleUpgrade: ReturnType<typeof app.getUpgradeHandler>;
const wss = new WebSocketServer({ noServer: true });

await ensureBootstrapAdmin();
await ensureDefaultTarget(null);
ensureArtifactBucket().catch((error) => {
  console.warn(`Studio artifact bucket is not ready yet: ${error instanceof Error ? error.message : String(error)}`);
});

await app.prepare();
handleUpgrade = app.getUpgradeHandler();

const server = createServer((request, response) => {
  handle(request, response).catch((error) => {
    console.error(error);
    response.statusCode = 500;
    response.end("Internal server error");
  });
});

server.on("upgrade", (request, socket, head) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host ?? `${hostname}:${port}`}`);
  if (url.pathname !== "/api/studio/operator/ws") {
    handleUpgrade(request, socket, head);
    return;
  }

  authenticateUpgrade(request).then((claims) => {
    wss.handleUpgrade(request, socket, head, (client) => {
      handleStudioSocket(client, claims);
    });
  }).catch((error) => {
    socket.write([
      "HTTP/1.1 401 Unauthorized",
      "Connection: close",
      "Content-Length: 0",
      "",
      "",
    ].join("\r\n"));
    socket.destroy();
    console.warn(`Rejected Studio Operator socket: ${error instanceof Error ? error.message : String(error)}`);
  });
});

function handleStudioSocket(client: WebSocket, claims: StudioSocketClaims) {
  const env = studioEnv();
  if (!env.operatorRuntimeSecret) {
    client.send(JSON.stringify({
      type: "error",
      message: "Studio Operator Runtime authentication is not configured.",
    }));
    client.close(1011, "Runtime authentication is not configured");
    return;
  }

  const queuedClientMessages: string[] = [];
  const upstream = new WebSocket(env.operatorRuntimeWsUrl, {
    headers: signedStudioRuntimeHeaders(claims, env.operatorRuntimeSecret),
  });

  upstream.on("open", () => {
    upstream.send(JSON.stringify({
      type: "studio.claims",
      userId: claims.userId,
      role: claims.role,
      permissions: claims.permissions,
    }));
    client.send(JSON.stringify({
      type: "activity",
      message: "Connected to Studio Operator Runtime.",
      surface: "conversation",
    }));
    for (const message of queuedClientMessages.splice(0)) upstream.send(message);
  });

  client.on("message", (data) => {
    const message = data.toString();
    if (upstream.readyState === WebSocket.OPEN) upstream.send(message);
    else queuedClientMessages.push(message);
  });

  upstream.on("message", (data) => {
    if (client.readyState === WebSocket.OPEN) client.send(data.toString());
  });

  upstream.on("close", () => {
    if (client.readyState === WebSocket.OPEN) client.close();
  });

  upstream.on("error", (error) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: "error",
        message: `Studio Operator Runtime is unavailable: ${error.message}`,
      }));
    }
  });

  client.on("close", () => {
    if (upstream.readyState === WebSocket.OPEN || upstream.readyState === WebSocket.CONNECTING) {
      upstream.close();
    }
  });
}

server.listen(port, hostname, () => {
  console.log(`Cognidesk Studio listening on http://${hostname}:${port}`);
});

interface StudioSocketClaims {
  userId: string;
  role: string;
  permissions: string[];
  sessionToken: string;
}

async function authenticateUpgrade(request: IncomingMessage): Promise<StudioSocketClaims> {
  const headers = toHeaders(request);
  const session = await getStudioSession(headers);
  requirePermission(session, "operator:use");
  const role = String(session?.user.role ?? "viewer");
  return {
    userId: session!.user.id,
    role,
    permissions: [],
    sessionToken: session!.session.token,
  };
}

function toHeaders(request: IncomingMessage) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(request.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }
  return headers;
}

function signedStudioRuntimeHeaders(claims: StudioSocketClaims, secret: string): Record<string, string> {
  const encodedClaims = Buffer.from(JSON.stringify({
    userId: claims.userId,
    role: claims.role,
    permissions: claims.permissions,
    sessionToken: claims.sessionToken,
    expiresAt: Date.now() + 60_000,
    nonce: randomUUID(),
  }), "utf8").toString("base64url");
  return {
    "x-studio-runtime-claims": encodedClaims,
    "x-studio-runtime-signature": createHmac("sha256", secret).update(encodedClaims).digest("base64url"),
  };
}
