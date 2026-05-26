import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import type {
  GuardResult,
  ModelAdapter,
  TextGenerationInput,
  TextGenerationOutput,
} from "../../types.js";
import type { RuntimeEventEmitter } from "../types.js";

export type GenerateTextWithTrace = (input: {
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}) => Promise<TextGenerationOutput>;

export type EmitGuardDenial = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state?: CompiledJourney["states"][number];
  result: GuardResult;
  emit: RuntimeEventEmitter;
}) => Promise<void>;
