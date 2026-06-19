import type {
  CobrowsingSecurityPolicy,
  CobrowsingSession,
  CobrowsingSessionClientOptions,
  CobrowsingSessionStore,
  CreateCobrowsingSessionInput,
  EndCobrowsingSessionInput,
  JoinCobrowsingSessionInput,
} from "./contracts.js";
import { validateCobrowsingSessionToken } from "./request.js";

export function createInMemoryCobrowsingSessionStore(
  initialSessions: CobrowsingSession[] = [],
): CobrowsingSessionStore {
  const sessions = new Map(initialSessions.map((session) => [session.id, cloneSession(session)]));
  return {
    async create(session) {
      if (sessions.has(session.id)) throw new Error(`Cobrowsing session '${session.id}' already exists.`);
      sessions.set(session.id, cloneSession(session));
      return cloneSession(session);
    },
    async get(sessionId) {
      const session = sessions.get(sessionId);
      return session ? cloneSession(session) : undefined;
    },
    async update(session) {
      if (!sessions.has(session.id)) throw new Error(`Cobrowsing session '${session.id}' does not exist.`);
      sessions.set(session.id, cloneSession(session));
      return cloneSession(session);
    },
  };
}

export function createCobrowsingSessionClient(options: CobrowsingSessionClientOptions) {
  const now = () => (options.now ?? (() => new Date()))();
  const idFactory = options.idFactory ?? (() => `cobrowse_${Date.now().toString(36)}`);
  return {
    async createSession(input: CreateCobrowsingSessionInput): Promise<CobrowsingSession> {
      const policy = mergePolicy(options.policy, input.policy);
      assertAllowedOrigin(input.origin, policy.allowedOrigins);
      const createdAt = now().toISOString();
      return options.store.create({
        id: input.id ?? idFactory(),
        status: "created",
        origin: input.origin,
        allowedOrigins: policy.allowedOrigins,
        ...(input.conversationId ? { conversationId: input.conversationId } : {}),
        ...(input.customerId ? { customerId: input.customerId } : {}),
        ...(input.agentId ? { agentId: input.agentId } : {}),
        createdAt,
        updatedAt: createdAt,
        consent: policy.consent,
        recording: policy.recording,
        redaction: policy.redaction,
        participants: [],
        ...(input.metadata ? { metadata: input.metadata } : {}),
      });
    },
    async joinSession(input: JoinCobrowsingSessionInput): Promise<CobrowsingSession> {
      const session = await requireSession(options.store, input.sessionId);
      if (session.status === "ended") throw new Error(`Cobrowsing session '${input.sessionId}' has ended.`);
      assertAllowedOrigin(input.origin, session.allowedOrigins);
      if (options.sessionTokenSharedSecret) {
        const validation = validateCobrowsingSessionToken({
          sharedSecret: options.sessionTokenSharedSecret,
          token: input.sessionToken ?? "",
          expectedSessionId: input.sessionId,
          allowedOrigins: session.allowedOrigins,
          nowSeconds: Math.floor(now().getTime() / 1000),
        });
        if (!validation.valid) throw new Error(`Cobrowsing session token validation failed: ${validation.reason}.`);
      }
      const joinedAt = now().toISOString();
      const next: CobrowsingSession = {
        ...session,
        status: "joined",
        updatedAt: joinedAt,
        startedAt: session.startedAt ?? joinedAt,
        joinedAt,
        participants: [
          ...session.participants.filter((participant) => participant.id !== input.participantId),
          {
            id: input.participantId,
            role: input.role,
            joinedAt,
            ...(input.displayName ? { displayName: input.displayName } : {}),
            ...(input.metadata ? { metadata: input.metadata } : {}),
          },
        ],
      };
      return options.store.update(next);
    },
    async endSession(input: EndCobrowsingSessionInput): Promise<CobrowsingSession> {
      const session = await requireSession(options.store, input.sessionId);
      const endedAt = now().toISOString();
      return options.store.update({
        ...session,
        status: "ended",
        updatedAt: endedAt,
        endedAt,
        ...(input.endedBy ? { endedBy: input.endedBy } : {}),
        ...(input.reason ? { endReason: input.reason } : {}),
      });
    },
  };
}

function requireSession(store: CobrowsingSessionStore, sessionId: string) {
  return store.get(sessionId).then((session) => {
    if (!session) throw new Error(`Cobrowsing session '${sessionId}' does not exist.`);
    return session;
  });
}

function mergePolicy(
  base: CobrowsingSecurityPolicy,
  override: Partial<CobrowsingSecurityPolicy> = {},
): CobrowsingSecurityPolicy {
  return {
    allowedOrigins: override.allowedOrigins ?? base.allowedOrigins,
    consent: { ...base.consent, ...(override.consent ?? {}) },
    recording: { ...base.recording, ...(override.recording ?? {}) },
    redaction: { ...base.redaction, ...(override.redaction ?? {}) },
  };
}

function assertAllowedOrigin(origin: string, allowedOrigins: string[]) {
  if (!normalizeOrigins(allowedOrigins).has(normalizeOrigin(origin))) {
    throw new Error(`Cobrowsing origin '${origin}' is not allowed.`);
  }
}

function normalizeOrigins(origins: string[]) {
  return new Set(origins.map(normalizeOrigin));
}

function normalizeOrigin(origin: string) {
  return new URL(origin).origin;
}

function cloneSession(session: CobrowsingSession): CobrowsingSession {
  return {
    ...session,
    allowedOrigins: [...session.allowedOrigins],
    consent: { ...session.consent },
    recording: { ...session.recording },
    redaction: {
      ...session.redaction,
      ...(session.redaction.selectors ? { selectors: [...session.redaction.selectors] } : {}),
      ...(session.redaction.fieldNames ? { fieldNames: [...session.redaction.fieldNames] } : {}),
    },
    participants: session.participants.map((participant) => ({
      ...participant,
      ...(participant.metadata ? { metadata: { ...participant.metadata } } : {}),
    })),
    ...(session.metadata ? { metadata: { ...session.metadata } } : {}),
  };
}
