import type { VoiceControlToolCall, VoiceControlToolResult } from "@cognidesk/voice-websocket";
import { searchFlightKnowledgeIndex } from "../knowledge-index.js";
import type { FlightDemoVoiceControlInput } from "./types.js";
import { parseRecord } from "./utils.js";

export async function retrieveVoiceKnowledge(
  input: Pick<FlightDemoVoiceControlInput, "runtime" | "models" | "knowledgeIndex">,
  call: VoiceControlToolCall,
): Promise<VoiceControlToolResult> {
  const args = parseRecord(call.arguments);
  const query = typeof args.query === "string" ? args.query.trim() : "";
  if (!query) {
    return {
      output: {
        ok: false,
        error: "query is required.",
      },
    };
  }
  const items = await searchFlightKnowledgeIndex({
    index: input.knowledgeIndex,
    embeddingModel: input.models.journeyEmbedding,
    query,
    limit: 4,
    minScore: 0.15,
    signal: call.signal,
  });
  const event = await input.runtime.emit({
    conversationId: call.session.conversation.id,
    type: "knowledge.retrieved",
    data: {
      sourceName: "flight-policies",
      itemIds: items.map((item) => item.id),
    },
  });
  return {
    events: [event],
    output: {
      ok: true,
      items: items.map((item) => ({
        id: item.id,
        title: item.title ?? null,
        content: item.content,
        score: item.score ?? null,
        metadata: {
          ...item.metadata,
          url: item.metadata.url ?? `/docs/${item.metadata.documentId}.html`,
        },
      })),
    },
  };
}
