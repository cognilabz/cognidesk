import { createId } from "./ids.js";
import {
  COGNIDESK_VOICE_PROTOCOL,
  type VoiceSessionStore,
  type VoiceSocketSession,
  type VoiceSocketToken,
} from "./protocol.js";

export interface InMemoryVoiceSessionStoreOptions {
  createToken?: () => string;
}

export function createInMemoryVoiceSessionStore(
  options: InMemoryVoiceSessionStoreOptions = {},
): VoiceSessionStore {
  const sessions = new Map<string, VoiceSocketSession>();
  const tokens = new Map<string, VoiceSocketToken>();
  const createToken = options.createToken ?? (() => createId("voice_socket_token"));

  return {
    async createSession(input) {
      const now = input.now ?? new Date();
      const result = input.result;
      const session: VoiceSocketSession = {
        id: result.connection.id,
        conversation: result.conversation,
        channelSegment: result.channelSegment,
        connection: result.connection,
        events: result.events,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        status: "pending",
        lastAckSequence: 0,
      };
      sessions.set(session.id, session);
      const token = createTokenRecord({
        createToken,
        connectionId: session.connection.id,
        sessionId: session.id,
        purpose: "start",
        ttlMs: input.tokenTtlMs,
        now,
      });
      tokens.set(token.token, token);
      return {
        session,
        socket: {
          url: "",
          token: token.token,
          expiresAt: token.expiresAt,
          protocol: COGNIDESK_VOICE_PROTOCOL,
        },
      };
    },

    async claimToken(input) {
      const now = input.now ?? new Date();
      const token = tokens.get(input.token);
      if (!token) return null;
      if (token.connectionId !== input.connectionId) return null;
      if (token.consumedAt) return null;
      if (Date.parse(token.expiresAt) <= now.getTime()) return null;
      const session = sessions.get(token.sessionId);
      if (!session || session.status === "ended") return null;
      token.consumedAt = now.toISOString();
      tokens.set(token.token, token);
      return {
        session,
        token,
        reconnect: token.purpose === "reconnect",
      };
    },

    async issueReconnectToken(input) {
      const session = requireSession(sessions, input.sessionId);
      const token = createTokenRecord({
        createToken,
        connectionId: session.connection.id,
        sessionId: session.id,
        purpose: "reconnect",
        ttlMs: input.ttlMs,
        now: input.now ?? new Date(),
      });
      tokens.set(token.token, token);
      return token;
    },

    async acknowledgeAudio(input) {
      const session = requireSession(sessions, input.sessionId);
      if (input.sequence > session.lastAckSequence) {
        session.lastAckSequence = input.sequence;
        session.updatedAt = (input.now ?? new Date()).toISOString();
        sessions.set(session.id, session);
      }
      return session;
    },

    async markConnected(sessionId, now = new Date()) {
      const session = requireSession(sessions, sessionId);
      session.status = "connected";
      session.updatedAt = now.toISOString();
      delete session.reconnectGraceUntil;
      sessions.set(session.id, session);
      return session;
    },

    async markReconnecting(sessionId, now = new Date(), graceMs = 30_000) {
      const session = requireSession(sessions, sessionId);
      session.status = "reconnecting";
      session.updatedAt = now.toISOString();
      session.reconnectGraceUntil = new Date(now.getTime() + graceMs).toISOString();
      sessions.set(session.id, session);
      return session;
    },

    async markEnded(sessionId, now = new Date()) {
      const session = requireSession(sessions, sessionId);
      session.status = "ended";
      session.updatedAt = now.toISOString();
      sessions.set(session.id, session);
      return session;
    },

    async getSession(sessionId) {
      return sessions.get(sessionId) ?? null;
    },
  };
}

function createTokenRecord(input: {
  createToken: () => string;
  connectionId: string;
  sessionId: string;
  purpose: "start" | "reconnect";
  ttlMs: number;
  now: Date;
}): VoiceSocketToken {
  return {
    token: input.createToken(),
    connectionId: input.connectionId,
    sessionId: input.sessionId,
    purpose: input.purpose,
    expiresAt: new Date(input.now.getTime() + input.ttlMs).toISOString(),
  };
}

function requireSession(sessions: Map<string, VoiceSocketSession>, sessionId: string) {
  const session = sessions.get(sessionId);
  if (!session) throw new Error(`Voice session '${sessionId}' was not found.`);
  return session;
}
