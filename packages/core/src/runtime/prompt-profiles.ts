import type {
  ModelAdapter,
  ModelMessage,
  ModelVisiblePromptPayload,
  PromptProfileRole,
  PromptTask,
  StructuredOutputPromptMetadata,
  TextGenerationInput,
} from "../types.js";
import { z } from "zod";

export async function applyModelPromptProfile(args: {
  model: ModelAdapter;
  input: TextGenerationInput;
}) {
  if (args.input.role === "journeyEmbedding") return args.input.messages;
  const profile = args.model.promptProfile;
  if (!profile) return args.input.messages;
  const promptTask = args.input.promptTask ?? defaultPromptTask(args.input.role);
  const instruction = await profile.renderInstruction({
    role: args.input.role,
    promptTask,
    model: {
      provider: args.model.provider,
      model: args.model.model,
      ...(profile.logicalModelSlug ? { logicalModelSlug: profile.logicalModelSlug } : {}),
    },
    payload: args.input.promptPayload ?? {},
    ...(args.input.responseFormat ? { structuredOutput: structuredOutputMetadata(promptTask, args.input.responseFormat) } : {}),
  });
  return prependSystemInstruction(args.input.messages, instruction);
}

function defaultPromptTask(role: PromptProfileRole): PromptTask {
  switch (role) {
    case "response":
      return "response";
    case "matcher":
      return "journey-matcher";
    case "extraction":
      return "extraction";
    case "citationPostProcessing":
      return "citation-post-processing";
    case "compaction":
      return "compaction";
  }
}

function structuredOutputMetadata(promptTask: PromptTask, schema: z.ZodType): StructuredOutputPromptMetadata {
  return {
    required: true,
    name: promptTask,
    schema: z.toJSONSchema(schema),
  };
}

function prependSystemInstruction(messages: ModelMessage[], instruction: string): ModelMessage[] {
  if (!instruction.trim()) return messages;
  const [first, ...rest] = messages;
  if (first?.role === "system") {
    return [
      {
        ...first,
        content: [instruction, first.content].filter(Boolean).join("\n\n"),
      },
      ...rest,
    ];
  }
  return [{ role: "system", content: instruction }, ...messages];
}

export function promptPayload<TPayload extends ModelVisiblePromptPayload>(payload: TPayload): TPayload {
  return payload;
}
