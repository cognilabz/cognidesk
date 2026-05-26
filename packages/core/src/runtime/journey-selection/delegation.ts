import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import type { AgentModelSet } from "../../types.js";
import { isAbortLikeError } from "../errors.js";
import { delegationCompletionSchema } from "../schemas.js";
import type {
  ConversationMessage,
  RuntimeEventEmitter,
} from "../types.js";
import type { GenerateTextWithTrace } from "./types.js";

export async function evaluateDelegationCompletion(args: {
  generateTextWithTrace: GenerateTextWithTrace;
  journey: CompiledJourney | null;
  models: AgentModelSet;
  conversation: ConversationRecord;
  history: ConversationMessage[];
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}): Promise<{ journeyId: string; reason?: string } | null> {
  if (args.journey?.kind !== "delegation" || !args.journey.delegation) return null;
  if (args.journey.delegation.completeWhen.length === 0) return null;

  try {
    const output = await args.generateTextWithTrace({
      conversationId: args.conversation.id,
      model: args.models.matcher,
      input: {
        role: "matcher",
        promptTask: "delegation-completion",
        promptPayload: {
          journey: {
            id: args.journey.id,
            kind: args.journey.kind,
            condition: args.journey.condition,
            delegation: {
              goal: args.journey.delegation.goal,
              completeWhen: args.journey.delegation.completeWhen,
            },
          },
          conversationTranscript: args.history,
        },
        messages: [
          {
            role: "system",
            content: [
              "Decide whether the active delegation journey is complete.",
              "Return complete only when all completion criteria are satisfied by the conversation.",
              `Delegation goal: ${args.journey.delegation.goal}`,
              `Completion criteria: ${args.journey.delegation.completeWhen.join("; ")}`,
            ].join("\n"),
          },
          {
            role: "user",
            content: args.history
              .map((message) => `${message.role}: ${message.content}`)
              .join("\n"),
          },
        ],
        responseFormat: delegationCompletionSchema,
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    const structured = delegationCompletionSchema.parse(output.structured ?? JSON.parse(output.text));
    if (!structured.complete) return null;
    const completed = {
      journeyId: args.journey.id,
      ...(structured.reason ? { reason: structured.reason } : {}),
    };
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.completed",
      data: completed,
    });
    return completed;
  } catch (error) {
    if (isAbortLikeError(error) && args.signal?.aborted) throw error;
    await args.emit({
      conversationId: args.conversation.id,
      type: "error",
      data: {
        code: "delegation_completion_failed",
        message: error instanceof Error ? error.message : "Delegation completion evaluation failed.",
      },
    });
    return null;
  }
}
