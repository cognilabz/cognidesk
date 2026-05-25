import { randomUUID } from "node:crypto";
import type { ConversationRecord, CreateConversationInput, RuntimeEventInput, StorageAdapter } from "./storage.js";
import type { RuntimeEvent, RuntimeSnapshot } from "./types.js";

export interface RuntimeOptions {
  storage: StorageAdapter;
}

export interface CreateRuntimeConversationInput<TConversationContext = unknown>
  extends CreateConversationInput<TConversationContext> {}

export class CognideskRuntime {
  constructor(private readonly options: RuntimeOptions) {}

  async initialize() {
    await this.options.storage.initialize?.();
  }

  async createConversation<TConversationContext = unknown>(
    input: CreateRuntimeConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    const conversation = await this.options.storage.createConversation(input);
    await this.options.storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: conversation.lifecycle,
      activeStateIds: [],
      updatedAt: conversation.updatedAt,
    });
    await this.emit({
      conversationId: conversation.id,
      type: "custom.conversation.created",
      data: {
        agentId: conversation.agentId,
      },
    });
    return conversation;
  }

  async emit<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    return this.options.storage.appendEvent({
      ...event,
      id: event.id ?? randomUUID(),
      createdAt: event.createdAt ?? new Date().toISOString(),
    });
  }

  async listEvents(conversationId: string, afterOffset?: number) {
    return this.options.storage.listEvents({
      conversationId,
      ...(afterOffset !== undefined ? { afterOffset } : {}),
    });
  }

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.options.storage.getSnapshot(conversationId);
  }

  async closeConversation(conversationId: string, reason?: string) {
    const conversation = await this.options.storage.updateConversationLifecycle(conversationId, "closed");
    const currentSnapshot = await this.options.storage.getSnapshot(conversationId);
    await this.options.storage.saveSnapshot({
      conversationId,
      lifecycle: "closed",
      activeStateIds: currentSnapshot?.activeStateIds ?? [],
      updatedAt: new Date().toISOString(),
      ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
      ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
      ...(currentSnapshot?.compactionSummary !== undefined ? { compactionSummary: currentSnapshot.compactionSummary } : {}),
      ...(currentSnapshot?.definitionHash ? { definitionHash: currentSnapshot.definitionHash } : {}),
    });
    await this.emit({
      conversationId,
      type: "conversation.closed",
      data: reason ? { reason } : {},
    });
    return conversation;
  }
}

export function createRuntime(options: RuntimeOptions) {
  return new CognideskRuntime(options);
}
