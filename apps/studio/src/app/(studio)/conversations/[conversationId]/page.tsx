import { ConversationDetailView } from "@/components/studio/conversation-detail-view";
import { loadIntrospectionResult, requireStudioPageContext } from "@/server/studio-page-data";
import { fetchConversationEvents, fetchConversationSnapshot, fetchTargetConversation } from "@/server/target";
import type { Metadata } from "next";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Conversation | Cognidesk Studio",
  description: "Inspect a Cognidesk runtime conversation session.",
};

export default async function ConversationPage(context: { params: Promise<{ conversationId: string }> }) {
  await requireStudioPageContext();
  const { conversationId } = await context.params;
  const { conversation, conversationError, events, eventsError, introspection, introspectionError, snapshot, snapshotError } = await loadConversationPageData(conversationId);

  return (
    <ConversationDetailView
      conversationId={conversationId}
      conversation={conversation}
      conversationError={conversationError}
      events={events}
      eventsError={eventsError}
      introspection={introspection}
      introspectionError={introspectionError}
      snapshot={snapshot}
      snapshotError={snapshotError}
    />
  );
}

async function loadConversationPageData(conversationId: string) {
  const [conversationResult, eventsResult, introspectionResult, snapshotResult] = await Promise.all([
    fetchTargetConversation(conversationId).then(
      (conversation) => ({ conversation, error: null }),
      (error: unknown) => ({ conversation: null, error: errorMessage(error) }),
    ),
    fetchConversationEvents(conversationId).then(
      (body) => ({ events: body.events ?? [], error: null }),
      (error: unknown) => ({ events: [], error: errorMessage(error) }),
    ),
    loadIntrospectionResult(),
    fetchConversationSnapshot(conversationId).then(
      (body) => ({ snapshot: body.snapshot, error: null }),
      (error: unknown) => ({ snapshot: null, error: errorMessage(error) }),
    ),
  ]);

  return {
    conversation: conversationResult.conversation,
    conversationError: conversationResult.error,
    events: eventsResult.events,
    eventsError: eventsResult.error,
    introspection: introspectionResult.value,
    introspectionError: introspectionResult.error,
    snapshot: snapshotResult.snapshot,
    snapshotError: snapshotResult.error,
  };
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Request failed";
}
