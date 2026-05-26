import type {
  CreateRuntimeConversationInput,
  HandleUserMessageResult,
  ModelAdapter,
  RuntimeEvent,
} from "@cognidesk/core";

export interface HarnessAgentClient {
  createConversation(input: CreateRuntimeConversationInput): Promise<{ id: string }>;
  sendMessage(input: { conversationId: string; text: string; turn?: unknown; signal?: AbortSignal }): Promise<Pick<HandleUserMessageResult, "text" | "events" | "activeJourneyId">>;
  submitWidget?(input: {
    conversationId: string;
    promptId: string;
    widgetKind: string;
    output: unknown;
    signal?: AbortSignal;
  }): Promise<{ event: RuntimeEvent; events?: RuntimeEvent[] }>;
}

export type ScriptedUserTurn =
  | string
  | {
      type: "message";
      text: string;
    }
  | {
      type: "widget";
      promptId?: string;
      widgetKind?: string;
      output: unknown;
    };

export interface SimulatedUserDefinition {
  identity: string;
  goal: string;
  background?: string;
  scriptedTurns?: ScriptedUserTurn[];
  stopWhen?: string;
}

export interface EvaluationCriterion {
  id: string;
  description: string;
  weight?: number;
  threshold?: number;
}

type MaybePromise<T> = T | Promise<T>;

export type ScenarioAssertion =
  | {
      id: string;
      type: "assistantContains";
      text: string;
      caseSensitive?: boolean;
    }
  | {
      id: string;
      type: "journeyActivated";
      journeyId: string;
    }
  | {
      id: string;
      type: "eventEmitted";
      eventType: RuntimeEvent["type"];
    }
  | {
      id: string;
      type: "custom";
      description?: string;
      evaluate: (input: ScenarioAssertionInput) => MaybePromise<boolean | { passed: boolean; reasoning?: string }>;
    };

export interface ScenarioAssertionInput {
  scenario: HarnessScenario;
  conversationId: string;
  transcript: TranscriptTurn[];
  events: RuntimeEvent[];
  activeJourneyIds: string[];
}

export interface AssertionResult {
  assertionId: string;
  passed: boolean;
  reasoning: string;
}

export interface HarnessScenario {
  id: string;
  name?: string;
  description?: string;
  agentId: string;
  context?: unknown;
  user: SimulatedUserDefinition;
  maxTurns?: number;
  assertions?: ScenarioAssertion[];
  criteria?: EvaluationCriterion[];
  judge?: {
    threshold?: number;
    instructions?: string;
  };
  timeoutMs?: number;
}

export interface TestHarnessOptions {
  client: HarnessAgentClient;
  simulatedUserModel?: ModelAdapter;
  judgeModel?: ModelAdapter;
  timeoutMs?: number;
  privacy?: {
    redactTranscript?(input: { scenario: HarnessScenario; transcript: TranscriptTurn[] }): TranscriptTurn[] | Promise<TranscriptTurn[]>;
    redactEvents?(input: { scenario: HarnessScenario; events: RuntimeEvent[] }): RuntimeEvent[] | Promise<RuntimeEvent[]>;
  };
}

export interface TranscriptTurn {
  role: "user" | "assistant";
  content: string;
}

export interface CriterionJudgement {
  criterionId: string;
  score: number;
  passed: boolean;
  reasoning: string;
}

export interface ScenarioResult {
  scenarioId: string;
  conversationId: string;
  status: "passed" | "failed" | "error";
  transcript: TranscriptTurn[];
  events: RuntimeEvent[];
  assertions: AssertionResult[];
  judgements: CriterionJudgement[];
  score: number;
  passed: boolean;
  error?: string;
}
