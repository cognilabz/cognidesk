import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../../storage.js";
import type {
  AgentModelSet,
  ModelAdapter,
  RuntimeEvent,
  TextGenerationInput,
  TextGenerationOutput,
} from "../../types.js";

export type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;

type GenerateTextWithTrace = (input: {
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}) => Promise<TextGenerationOutput>;

type SelectTransition = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  models?: AgentModelSet;
  userText?: string;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<CompiledJourney["states"][number]["transitions"][number] | null>;

type RunStateActionRuns = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<void>;

type RunStateToolRuns = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  confirmedPromptId?: string;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}) => Promise<string | null>;

type EmitStatePrompt = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  emit: RuntimeEmit;
}) => Promise<number>;

export interface StateMachineDeps {
  generateTextWithTrace: GenerateTextWithTrace;
  requireConversationRecord(conversationId: string): Promise<ConversationRecord>;
  selectTransition: SelectTransition;
  runStateActionRuns: RunStateActionRuns;
  runStateToolRuns: RunStateToolRuns;
  emitFieldPrompts: EmitStatePrompt;
  emitFieldConfirmationPrompts: EmitStatePrompt;
  emitConfirmationPrompts: EmitStatePrompt;
}
