import type { CompiledAgent } from "../definition.js";
import type { StorageAdapter } from "../storage.js";
import type { RuntimeEvent } from "../types.js";
import type { ConversationMessage, VisibleCustomEventContext } from "./types.js";

export async function listVisibleCustomEventContext(
  storage: StorageAdapter,
  agent: CompiledAgent,
  conversationId: string,
): Promise<VisibleCustomEventContext[]> {
  const visibleTypes = new Set(
    agent.customEvents
      .filter((event) => event.visibleToModel)
      .map((event) => `custom.${event.name}`),
  );
  if (visibleTypes.size === 0) return [];
  const events = await storage.listEvents({ conversationId });
  return events
    .filter((event) => visibleTypes.has(event.type))
    .map((event) => ({
      type: event.type,
      offset: event.offset,
      data: event.data,
    }));
}

export async function listConversationMessages(
  storage: StorageAdapter,
  conversationId: string,
): Promise<ConversationMessage[]> {
  const events = await storage.listEvents({ conversationId });
  return conversationMessagesFromEvents(events);
}

export function conversationMessagesFromEvents(events: RuntimeEvent[]): ConversationMessage[] {
  const messages: ConversationMessage[] = [];
  let pendingRole: ConversationMessage["role"] | null = null;
  for (const event of events) {
    if (event.type === "message.started") {
      pendingRole = event.data.role;
      continue;
    }
    if (event.type === "message.aborted") {
      pendingRole = null;
      continue;
    }
    if (event.type !== "message.completed") continue;
    if (event.data.intermediate && !event.data.visibleToModel) {
      pendingRole = null;
      continue;
    }
    if (!pendingRole) continue;
    messages.push({
      role: pendingRole,
      content: event.data.text,
    });
    pendingRole = null;
  }
  return messages;
}
