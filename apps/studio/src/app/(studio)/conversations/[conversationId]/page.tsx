import { ConversationDetailView } from "@/components/studio/conversation-detail-view";
import { requireStudioPageContext } from "@/server/studio-page-data";
import { fetchConversationEvents, fetchConversationSnapshot, fetchTargetConversations } from "@/server/target";
import type { Metadata } from "next";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Conversation | Cognidesk Studio",
  description: "Inspect a Cognidesk runtime conversation session.",
};

export default async function ConversationPage(context: { params: Promise<{ conversationId: string }> }) {
  await requireStudioPageContext();
  const { conversationId } = await context.params;
  const { conversation, events, eventsError, snapshot, snapshotError } = await loadConversationPageData(conversationId);

  return (
    <ConversationDetailView
      conversationId={conversationId}
      conversation={conversation}
      events={events}
      eventsError={eventsError}
      snapshot={snapshot}
      snapshotError={snapshotError}
    />
  );
}

async function loadConversationPageData(conversationId: string) {
  const [conversationsResult, eventsResult, snapshotResult] = await Promise.all([
    fetchTargetConversations({ limit: 250 }).then(
      (conversations) => ({ conversations, error: null }),
      (error: unknown) => ({ conversations: [], error: errorMessage(error) }),
    ),
    fetchConversationEvents(conversationId).then(
      (body) => ({ events: body.events ?? [], error: null }),
      (error: unknown) => ({ events: [], error: errorMessage(error) }),
    ),
    fetchConversationSnapshot(conversationId).then(
      (body) => ({ snapshot: body.snapshot, error: null }),
      (error: unknown) => ({ snapshot: null, error: errorMessage(error) }),
    ),
  ]);

  return {
    conversation: conversationsResult.conversations.find((candidate) => candidate.id === conversationId) ?? null,
    events: eventsResult.events,
    eventsError: eventsResult.error,
    snapshot: snapshotResult.snapshot,
    snapshotError: snapshotResult.error ?? conversationsResult.error,
  };
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Request failed";
}
