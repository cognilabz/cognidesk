import type { StartVoiceResult, VoiceSocketMetadata } from "@cognidesk/core";
import type { VoiceSessionStore } from "./protocol.js";
import { buildSocketUrl, normalizePathPrefix } from "./urls.js";

export interface VoiceSocketHandshakeOptions {
  store: VoiceSessionStore;
  tokenTtlMs?: number;
  pathPrefix?: string;
  baseUrl?: string;
}

export function createVoiceSocketHandshake(options: VoiceSocketHandshakeOptions) {
  const tokenTtlMs = options.tokenTtlMs ?? 60_000;
  const pathPrefix = normalizePathPrefix(options.pathPrefix ?? "/voice/connections");

  return {
    async createSocket(input: {
      result: StartVoiceResult;
      request: Request;
      basePath: string;
      initialGreeting?: string;
    }): Promise<VoiceSocketMetadata> {
      const created = await options.store.createSession({
        result: input.result,
        ...(input.initialGreeting ? { initialGreeting: input.initialGreeting } : {}),
        tokenTtlMs,
      });
      return {
        ...created.socket,
        url: buildSocketUrl({
          requestUrl: input.request.url,
          basePath: input.basePath,
          pathPrefix,
          connectionId: input.result.connection.id,
          token: created.socket.token,
          ...(options.baseUrl ? { baseUrl: options.baseUrl } : {}),
        }),
      };
    },
  };
}
