import type { CompiledAgent } from "../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import type {
  AgentModelSet,
  MessageSegment,
  ModelAdapter,
  RuntimeEvent,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import { isAbortLikeError } from "./errors.js";
import { citationPostProcessingSchema } from "./schemas.js";
import type { RetrievedKnowledgeItem, RuntimeOptions } from "./types.js";

type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;

type GenerateTextWithTrace = (input: {
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}) => Promise<TextGenerationOutput>;

export async function createCitationSegments(args: {
  options: RuntimeOptions;
  models: AgentModelSet;
  agent: CompiledAgent;
  conversation: ConversationRecord;
  text: string;
  knowledge: RetrievedKnowledgeItem[];
  signal?: AbortSignal;
  generateTextWithTrace: GenerateTextWithTrace;
  emit: RuntimeEmit;
}): Promise<MessageSegment[] | null> {
  if (args.knowledge.length === 0) return null;
  if (args.agent.postProcessing?.citations === false) return null;
  if (args.options.postProcessing?.citations === false) return null;
  try {
    const output = await args.generateTextWithTrace({
      conversationId: args.conversation.id,
      model: args.models.citationPostProcessing,
      input: {
        role: "citationPostProcessing",
        messages: [
          {
            role: "system",
            content: "Split the assistant answer into citation segments. Attach knowledgeIds only where the segment uses that source.",
          },
          {
            role: "user",
            content: [
              "Knowledge:",
              ...args.knowledge.map((item) => `[${item.id}] ${item.content}`),
              "",
              "Assistant answer:",
              args.text,
            ].join("\n"),
          },
        ],
        responseFormat: citationPostProcessingSchema,
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    const structured = citationPostProcessingSchema.parse(output.structured ?? JSON.parse(output.text));
    const knowledgeById = new Map(args.knowledge.map((item) => [item.id, item]));
    return structured.segments.map((segment, index) => ({
      id: `segment_${index + 1}`,
      text: segment.text,
      references: segment.knowledgeIds.map((id) => {
        const item = knowledgeById.get(id);
        return {
          type: "knowledge" as const,
          id,
          ...(item?.sourceName ? { sourceName: item.sourceName } : {}),
          ...(item?.title ? { title: item.title } : {}),
          ...(item?.metadata !== undefined ? { metadata: item.metadata } : {}),
        };
      }),
    }));
  } catch (error) {
    if (isAbortLikeError(error) && args.signal?.aborted) throw error;
    await args.emit({
      conversationId: args.conversation.id,
      type: "error",
      data: {
        code: "citation_post_processing_failed",
        message: error instanceof Error ? error.message : "Citation post-processing failed.",
      },
    });
    return null;
  }
}
