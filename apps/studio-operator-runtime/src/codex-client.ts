import { spawn, type ChildProcess } from "node:child_process";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";
import { WebSocket } from "ws";
import { buildChildProcessEnv } from "./runtime/child-env.js";

interface PendingRequest {
  resolve(value: unknown): void;
  reject(error: Error): void;
}

export interface CodexNotification {
  method: string;
  params: Record<string, unknown>;
}

export type CodexReasoningEffort = "none" | "minimal" | "low" | "medium" | "high" | "xhigh";

export class CodexAppServerClient {
  private process: ChildProcess | null = null;
  private socket: WebSocket | null = null;
  private nextId = 1;
  private readonly pending = new Map<number, PendingRequest>();
  private notificationHandlers = new Set<(notification: CodexNotification) => void>();
  private port = 0;
  private initialized = false;
  private starting: Promise<void> | null = null;

  async start() {
    if (this.initialized && this.socket?.readyState === WebSocket.OPEN) return;
    if (this.starting) return await this.starting;
    this.starting = this.startInternal();
    try {
      await this.starting;
    } finally {
      this.starting = null;
    }
  }

  private async startInternal() {
    this.port = await findFreePort();
    this.process = spawn("codex", ["app-server", "--listen", `ws://127.0.0.1:${this.port}`], {
      stdio: ["ignore", "pipe", "pipe"],
      env: buildChildProcessEnv(),
    });
    this.process.stderr?.on("data", (chunk) => {
      process.stderr.write(chunk);
    });
    await this.waitUntilReady();
    await this.connect();
    await this.sendRequest("initialize", {
      clientInfo: {
        name: "cognidesk-studio-operator-runtime",
        title: "Cognidesk Studio Operator Runtime",
        version: "0.0.0",
      },
      capabilities: {
        experimentalApi: true,
        requestAttestation: false,
      },
    });
    this.sendNotification("initialized");
    this.initialized = true;
  }

  onNotification(handler: (notification: CodexNotification) => void) {
    this.notificationHandlers.add(handler);
    return () => this.notificationHandlers.delete(handler);
  }

  async startThread(input: {
    cwd: string;
    model?: string;
    baseInstructions: string;
  }) {
    const result = await this.request("thread/start", {
      cwd: input.cwd,
      model: input.model === "default" ? null : input.model,
      sandbox: "danger-full-access",
      approvalPolicy: "never",
      approvalsReviewer: "user",
      baseInstructions: input.baseInstructions,
      ephemeral: false,
    });
    return result as { thread: { id: string }; model: string };
  }

  async startTurn(input: {
    threadId: string;
    message: string;
    model?: string;
    effort?: CodexReasoningEffort;
  }) {
    const result = await this.request("turn/start", {
      threadId: input.threadId,
      input: [{
        type: "text",
        text: input.message,
        text_elements: [],
      }],
      model: input.model === "default" ? null : input.model,
      ...(input.effort ? { effort: input.effort } : {}),
    });
    return result as { turn: { id: string } };
  }

  async interruptTurn(threadId: string, turnId: string) {
    await this.request("turn/interrupt", { threadId, turnId });
  }

  async stop() {
    this.socket?.close();
    this.process?.kill("SIGTERM");
  }

  private async request(method: string, params: unknown) {
    await this.start();
    return await this.sendRequest(method, params);
  }

  private async sendRequest(method: string, params: unknown) {
    const id = this.nextId++;
    const socket = this.socket;
    if (!socket || socket.readyState !== WebSocket.OPEN) throw new Error("Codex app-server socket is not open");
    const promise = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
    socket.send(JSON.stringify({ id, method, params }));
    return await promise;
  }

  private sendNotification(method: string, params?: unknown) {
    const socket = this.socket;
    if (!socket || socket.readyState !== WebSocket.OPEN) throw new Error("Codex app-server socket is not open");
    socket.send(JSON.stringify(params === undefined ? { method } : { method, params }));
  }

  private async connect() {
    this.socket = new WebSocket(`ws://127.0.0.1:${this.port}`);
    this.socket.on("message", (data) => this.handleMessage(data.toString()));
    this.socket.on("close", () => {
      this.initialized = false;
      for (const pending of this.pending.values()) pending.reject(new Error("Codex app-server socket closed"));
      this.pending.clear();
    });
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Timed out connecting to Codex app-server")), 5000);
      this.socket?.once("open", () => {
        clearTimeout(timer);
        resolve();
      });
      this.socket?.once("error", (error) => {
        clearTimeout(timer);
        reject(error);
      });
    });
  }

  private handleMessage(raw: string) {
    const message = JSON.parse(raw) as {
      id?: number;
      result?: unknown;
      error?: { message?: string };
      method?: string;
      params?: Record<string, unknown>;
    };
    if (typeof message.id === "number") {
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message ?? "Codex app-server request failed"));
      else pending.resolve(message.result);
      return;
    }
    if (message.method) {
      for (const handler of this.notificationHandlers) {
        handler({ method: message.method, params: message.params ?? {} });
      }
    }
  }

  private async waitUntilReady() {
    const url = `http://127.0.0.1:${this.port}/readyz`;
    for (let attempt = 0; attempt < 80; attempt += 1) {
      try {
        const response = await fetch(url);
        if (response.ok) return;
      } catch {
        // keep waiting
      }
      await delay(100);
    }
    throw new Error("Codex app-server did not become ready");
  }
}

function findFreePort() {
  return new Promise<number>((resolve, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not allocate a local port"));
        return;
      }
      const port = address.port;
      server.close(() => resolve(port));
    });
    server.on("error", reject);
  });
}
