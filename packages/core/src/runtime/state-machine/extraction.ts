import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import type { AgentModelSet } from "../../types.js";
import {
  hasUsableValue,
  setPathValue,
} from "../context.js";
import { isAbortLikeError } from "../errors.js";
import { renderStateInstructionStack } from "../rendering.js";
import { stateExtractionSchema } from "../schemas.js";
import type {
  RuntimeEmit,
  StateMachineDeps,
} from "./types.js";

export async function applyStateExtraction(args: StateMachineDeps & {
  journey: CompiledJourney;
  models: AgentModelSet;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  userText: string;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) {
  const fields = args.state.collected.filter((field) => field.extract);
  if (fields.length === 0) return args.state;
  try {
    const output = await args.generateTextWithTrace({
      conversationId: args.conversation.id,
      model: args.models.extraction,
      input: {
        role: "extraction",
        promptTask: "extraction",
        promptPayload: {
          journey: {
            id: args.journey.id,
            kind: args.journey.kind,
            condition: args.journey.condition,
          },
          state: {
            id: args.state.id,
            instructions: args.state.instructions ?? null,
            summary: args.state.summary ?? null,
          },
          latestUserMessage: args.userText,
          currentContext: args.context,
          fields: fields.map((field) => ({
            path: field.path,
            required: field.required,
          })),
          stateInstructions: renderStateInstructionStack(args.journey, args.state),
        },
        messages: [
          {
            role: "system",
            content: [
              "Extract state-machine context fields from the latest user message.",
              "Return only fields that are explicitly supported by the message.",
              `State: ${args.state.id}`,
              renderStateInstructionStack(args.journey, args.state),
              `Fields: ${fields.map((field) => field.path).join(", ")}`,
              `Current context: ${JSON.stringify(args.context)}`,
            ].filter(Boolean).join("\n"),
          },
          { role: "user", content: args.userText },
        ],
        responseFormat: stateExtractionSchema,
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    const extracted = stateExtractionSchema.parse(output.structured ?? JSON.parse(output.text));
    const allowedPaths = new Set(fields.map((field) => field.path));
    const acceptedFields = Object.entries(extracted.values)
      .filter(([path, value]) => allowedPaths.has(path) && hasUsableValue(value));
    if (acceptedFields.length === 0) return args.state;

    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.extraction.proposed",
      data: {
        journeyId: args.journey.id,
        stateId: args.state.id,
        fields: acceptedFields.map(([path]) => path),
      },
    });
    for (const [path, value] of acceptedFields) setPathValue(args.context, path, value);
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.extraction.accepted",
      data: {
        journeyId: args.journey.id,
        stateId: args.state.id,
        fields: acceptedFields.map(([path]) => path),
      },
    });
  } catch (error) {
    if (isAbortLikeError(error) && args.signal?.aborted) throw error;
    await args.emit({
      conversationId: args.conversation.id,
      type: "error",
      data: {
        code: "journey_extraction_failed",
        message: error instanceof Error ? error.message : "Journey extraction failed.",
      },
    });
  }
  return args.state;
}
