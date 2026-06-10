import { z } from "zod";
import {
  createTelemetryContext,
  type AgentModelSet,
  type AnyTool,
  type CognideskRuntime,
  type CompiledAgent,
  type RuntimeEvent,
} from "@cognidesk/core";
import type { VoiceControlSurface, VoiceControlToolCall, VoiceControlToolResult } from "@cognidesk/voice-websocket";
import {
  searchFlightKnowledgeIndex,
  type FlightKnowledgeIndex,
} from "./knowledge-index.js";
import { flightTools } from "./agent/tools/flight-tools.js";

type FlightToolName = keyof typeof flightTools;
type VoiceTurnIntent = "advance_journey" | "side_exchange" | "cancel_or_replace" | "correction" | "handoff";
type VoiceBackgroundWorkStatus = "running" | "completed" | "failed" | "cancelled";

interface VoiceBackgroundWorkRecord {
  id: string;
  conversationId: string;
  channelSegmentId: string;
  connectionId?: string;
  intent: VoiceTurnIntent;
  targetJourneyId?: string;
  userTranscript: string;
  reason?: string;
  status: VoiceBackgroundWorkStatus;
  startedAt: string;
  updatedAt: string;
  resultText?: string;
  activeJourneyId?: string;
  error?: string;
  events: RuntimeEvent[];
  controller: AbortController;
  promise?: Promise<void>;
}

const safeToolNames = ["searchFlights", "suggestFlightOptions", "getTicketStatus", "getFlightInfo"] as const;
const sideEffectToolNames = ["bookFlight"] as const;
const allToolNames = [...safeToolNames, ...sideEffectToolNames] as FlightToolName[];
const voiceTurnIntents = ["advance_journey", "side_exchange", "cancel_or_replace", "correction", "handoff"] as const;

const voiceJourneyProposalSchema = z.object({
  intent: z.enum(voiceTurnIntents),
  userTranscript: z.string().min(1),
  replacementTranscript: z.string().min(1).optional(),
  targetJourneyId: z.string().min(1).optional(),
  background: z.boolean().optional(),
  reason: z.string().optional(),
  confirmationEvidence: z.string().optional(),
  spokenResponsePlan: z.object({
    immediate: z.string().optional(),
    completion: z.string().optional(),
  }).optional(),
});

export function createFlightDemoVoiceControlSurface(input: {
  runtime: CognideskRuntime;
  agent: CompiledAgent;
  models: AgentModelSet;
  knowledgeIndex: FlightKnowledgeIndex;
}): VoiceControlSurface {
  const backgroundWork = createVoiceBackgroundWorkStore(input);
  const journeyIds = input.agent.journeys.map((journey) => journey.id);
  return {
    tools: [{
      name: "retrieve_voice_knowledge",
      description: "Retrieve scoped Cogni Air policy or service knowledge before answering factual policy/domain questions.",
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {
          query: {
            type: "string",
            description: "The concise policy or domain question to retrieve grounding for.",
          },
        },
        required: ["query"],
      },
    }, {
      name: "submit_voice_journey_proposal",
      description: "Submit a validated voice turn proposal when the customer is advancing, correcting, replacing, cancelling, or handing off workflow work.",
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {
          intent: {
            type: "string",
            enum: voiceTurnIntents,
          },
          userTranscript: {
            type: "string",
            description: "The latest customer utterance, cleaned up only enough for text workflow processing.",
          },
          replacementTranscript: {
            type: "string",
            description: "Use only for cancel_or_replace or correction when the workflow should continue with a corrected request.",
          },
          targetJourneyId: {
            type: "string",
            enum: journeyIds,
          },
          background: {
            type: "boolean",
            description: "Prefer true so the voice conversation stays responsive while Cognidesk works.",
          },
          reason: {
            type: "string",
            description: "Why this utterance should affect workflow state.",
          },
          confirmationEvidence: {
            type: "string",
            description: "Short transcript evidence for explicit confirmation, when applicable.",
          },
          spokenResponsePlan: {
            type: "object",
            additionalProperties: false,
            properties: {
              immediate: { type: "string" },
              completion: { type: "string" },
            },
          },
        },
        required: ["intent", "userTranscript"],
      },
    }, {
      name: "get_voice_background_work",
      description: "Inspect running or recently completed Cognidesk voice background work before answering status questions.",
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {
          workId: {
            type: "string",
            description: "Specific background work id. Omit to get the active/latest work for this conversation.",
          },
        },
      },
    }, {
      name: "cancel_voice_background_work",
      description: "Cancel running Cognidesk voice background work when the customer explicitly cancels or replaces it.",
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {
          workId: {
            type: "string",
            description: "Specific background work id. Omit to cancel active work for this conversation.",
          },
          reason: {
            type: "string",
          },
        },
      },
    }, {
      name: "request_tool_run",
      description: "Request a validated Cognidesk flight-demo tool run for quick flight search, flight status, ticket status, or confirmed mocked booking creation.",
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {
          toolName: {
            type: "string",
            enum: allToolNames,
          },
          arguments: {
            type: "object",
            description: "Arguments for the named Cognidesk tool.",
          },
          confirmed: {
            type: "boolean",
            description: "True only when the customer explicitly confirmed a side-effect action in their latest speech.",
          },
          confirmationEvidence: {
            type: "string",
            description: "Short transcript evidence for explicit confirmation, required for side-effect tools.",
          },
          reason: {
            type: "string",
            description: "Why this tool is needed for the customer-facing answer.",
          },
        },
        required: ["toolName", "arguments"],
      },
    }],
    async createSessionInstructions({ session }) {
      const replay = await input.runtime.replayConversation({
        conversationId: session.conversation.id,
      });
      const snapshot = await input.runtime.getSnapshot(session.conversation.id);
      return [
        "# Cognidesk Voice Runtime Context",
        `Agent id: ${input.agent.id}`,
        "",
        "# Base Agent Instructions",
        input.agent.instructions,
        "",
        "# Voice Answer Authority",
        "Use the Voice Instruction Layer and full history for greetings, small talk, clarification, and interruption recovery.",
        "Use retrieve_voice_knowledge before factual policy or domain answers.",
        "Use request_tool_run for quick read-only flight availability, flight information, and ticket status checks.",
        "Use submit_voice_journey_proposal when the customer is trying to advance, correct, replace, cancel, or hand off workflow state.",
        "Prefer submit_voice_journey_proposal with background=true for workflow progress so the customer can keep talking while Cognidesk works.",
        "Use get_voice_background_work before answering questions about work that may still be running.",
        "Use cancel_voice_background_work only when the customer explicitly cancels or replaces running work.",
        "Never claim a side effect completed until request_tool_run or a background completion update returns a successful result.",
        "",
        "# Voice Turn Intent Policy",
        "Small talk, greetings, and lightweight clarifications are side exchanges; answer them directly without mutating workflow state.",
        "Policy and domain facts require retrieve_voice_knowledge unless they are already present in the validated runtime context.",
        "Workflow progress, corrections, cancellations, replacements, or handoff require Cognidesk validation through submit_voice_journey_proposal.",
        "",
        "# Available Journeys",
        input.agent.journeys.map((journey) => `- ${journey.id}: ${journey.condition}`).join("\n"),
        "",
        "# Active Runtime Snapshot",
        JSON.stringify(snapshot ?? { activeJourneyId: null, activeStateIds: [] }),
        "",
        "# Voice Background Work",
        backgroundWork.describeForPrompt(session.conversation.id),
        "",
        "# Canonical Conversation History",
        replay.messages.length > 0
          ? replay.messages.map((message) => `${message.role}: ${message.text}`).join("\n")
          : "No prior customer-visible messages.",
      ].join("\n");
    },
    async handleToolCall(call) {
      if (call.name === "retrieve_voice_knowledge") {
        return retrieveVoiceKnowledge(input, call);
      }
      if (call.name === "submit_voice_journey_proposal") {
        return backgroundWork.submitProposal(call);
      }
      if (call.name === "get_voice_background_work") {
        return backgroundWork.getStatus(call);
      }
      if (call.name === "cancel_voice_background_work") {
        return backgroundWork.cancel(call);
      }
      if (call.name === "request_tool_run") {
        return requestToolRun(input, call);
      }
      return {
        output: {
          ok: false,
          error: `Unknown voice control tool '${call.name}'.`,
        },
      };
    },
  };
}

function createVoiceBackgroundWorkStore(input: {
  runtime: CognideskRuntime;
}) {
  const byConversation = new Map<string, VoiceBackgroundWorkRecord[]>();

  const list = (conversationId: string) => byConversation.get(conversationId) ?? [];
  const remember = (record: VoiceBackgroundWorkRecord) => {
    const records = [record, ...list(record.conversationId)].slice(0, 8);
    byConversation.set(record.conversationId, records);
  };
  const find = (conversationId: string, workId?: string) => {
    const records = list(conversationId);
    if (workId) return records.find((record) => record.id === workId) ?? null;
    return records.find((record) => record.status === "running") ?? records[0] ?? null;
  };
  const running = (conversationId: string) => list(conversationId).filter((record) => record.status === "running");

  return {
    describeForPrompt(conversationId: string) {
      const records = list(conversationId);
      if (records.length === 0) return "No active or recent background work.";
      return records.map((record) => [
        `${record.id}: ${record.status}`,
        `intent=${record.intent}`,
        record.targetJourneyId ? `targetJourneyId=${record.targetJourneyId}` : null,
        record.resultText ? `result=${record.resultText}` : null,
        record.error ? `error=${record.error}` : null,
      ].filter(Boolean).join("; ")).join("\n");
    },
    async submitProposal(call: VoiceControlToolCall): Promise<VoiceControlToolResult> {
      const parsed = voiceJourneyProposalSchema.safeParse(call.arguments);
      if (!parsed.success) {
        return {
          output: {
            ok: false,
            error: parsed.error.message,
          },
        };
      }
      const proposal = parsed.data;
      const textForWorkflow = (proposal.replacementTranscript ?? proposal.userTranscript).trim();
      if (proposal.intent === "side_exchange") {
        const event = await emitBackgroundEvent(input.runtime, call.session.conversation.id, "side_exchange", {
          intent: proposal.intent,
          userTranscript: proposal.userTranscript,
          reason: proposal.reason,
        });
        return {
          events: [event],
          output: {
            ok: true,
            intent: proposal.intent,
            mutation: "none",
            message: "Accepted as a side exchange. Answer conversationally without changing workflow state.",
          },
        };
      }

      if (proposal.intent === "cancel_or_replace" || proposal.intent === "correction") {
        await cancelRunning({
          conversationId: call.session.conversation.id,
          reason: proposal.reason ?? proposal.intent,
          notify: proposal.intent === "cancel_or_replace",
        });
      }

      if (proposal.intent === "handoff") {
        const result = await input.runtime.requestHandoff({
          conversationId: call.session.conversation.id,
          reason: proposal.reason ?? "Customer requested handoff in voice.",
          summary: textForWorkflow,
          payload: {
            channel: "voice",
            confirmationEvidence: proposal.confirmationEvidence,
          },
        });
        return {
          events: [result.event],
          output: {
            ok: true,
            intent: proposal.intent,
            status: "completed",
            resultText: "A human handoff has been requested for this conversation.",
          },
        };
      }

      if (!textForWorkflow) {
        return {
          output: {
            ok: false,
            error: "userTranscript or replacementTranscript is required for workflow progress.",
          },
        };
      }

      const record = await startWork({
        call,
        intent: proposal.intent,
        userTranscript: textForWorkflow,
        notifyOnCompletion: proposal.background !== false,
        ...(proposal.targetJourneyId ? { targetJourneyId: proposal.targetJourneyId } : {}),
        ...(proposal.reason ? { reason: proposal.reason } : {}),
        ...(proposal.spokenResponsePlan?.completion ? { completionInstruction: proposal.spokenResponsePlan.completion } : {}),
      });

      if (proposal.background === false) {
        await record.promise;
      }

      return {
        events: record.events,
        output: serializeWork(record, {
          ok: true,
          message: record.status === "running"
            ? "Cognidesk accepted the workflow proposal and is processing it in the background."
            : undefined,
        }),
      };
    },
    async getStatus(call: VoiceControlToolCall): Promise<VoiceControlToolResult> {
      const args = parseRecord(call.arguments);
      const workId = typeof args.workId === "string" ? args.workId : undefined;
      const record = find(call.session.conversation.id, workId);
      return {
        output: {
          ok: true,
          work: record ? serializeWork(record) : null,
          running: running(call.session.conversation.id).map((item) => serializeWork(item)),
        },
      };
    },
    async cancel(call: VoiceControlToolCall): Promise<VoiceControlToolResult> {
      const args = parseRecord(call.arguments);
      const workId = typeof args.workId === "string" ? args.workId : undefined;
      const reason = typeof args.reason === "string" ? args.reason : "Customer cancelled voice background work.";
      const cancelled = await cancelRunning({
        conversationId: call.session.conversation.id,
        reason,
        notify: false,
        ...(workId ? { workId } : {}),
      });
      return {
        events: cancelled.flatMap((record) => record.events),
        output: {
          ok: true,
          cancelled: cancelled.map((record) => serializeWork(record)),
        },
      };
    },
  };

  async function startWork(args: {
    call: VoiceControlToolCall;
    intent: VoiceTurnIntent;
    targetJourneyId?: string;
    userTranscript: string;
    reason?: string;
    notifyOnCompletion: boolean;
    completionInstruction?: string;
  }) {
    const controller = new AbortController();
    const abortFromCall = () => controller.abort(args.call.signal.reason ?? new Error("voice_control_aborted"));
    if (args.call.signal.aborted) abortFromCall();
    else args.call.signal.addEventListener("abort", abortFromCall, { once: true });

    const record: VoiceBackgroundWorkRecord = {
      id: createId("voice_work"),
      conversationId: args.call.session.conversation.id,
      channelSegmentId: args.call.session.channelSegment.id,
      connectionId: args.call.session.connection.id,
      intent: args.intent,
      ...(args.targetJourneyId ? { targetJourneyId: args.targetJourneyId } : {}),
      userTranscript: args.userTranscript,
      ...(args.reason ? { reason: args.reason } : {}),
      status: "running",
      startedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      events: [],
      controller,
    };
    remember(record);
    record.events.push(await emitBackgroundEvent(input.runtime, record.conversationId, "started", {
      workId: record.id,
      intent: record.intent,
      targetJourneyId: record.targetJourneyId,
      reason: record.reason,
    }));
    record.promise = runWork(record, args.call, {
      notifyOnCompletion: args.notifyOnCompletion,
      ...(args.completionInstruction ? { completionInstruction: args.completionInstruction } : {}),
    }).finally(() => {
      args.call.signal.removeEventListener("abort", abortFromCall);
    });
    return record;
  }

  async function runWork(
    record: VoiceBackgroundWorkRecord,
    call: VoiceControlToolCall,
    options: {
      notifyOnCompletion: boolean;
      completionInstruction?: string;
    },
  ) {
    try {
      const result = await input.runtime.handleVoiceUserMessage({
        conversationId: record.conversationId,
        channelSegmentId: record.channelSegmentId,
        text: record.userTranscript,
        transcriptionSource: "voice-control-background",
        recordUserMessage: false,
        assistantMessageMode: "none",
        turn: {
          voiceIntent: record.intent,
          forceStatus: record.targetJourneyId === "ticket-status",
          ...(record.targetJourneyId ? { targetJourneyId: record.targetJourneyId } : {}),
        },
        signal: record.controller.signal,
        ...(record.connectionId ? { connectionId: record.connectionId } : {}),
      });
      record.status = "completed";
      record.updatedAt = new Date().toISOString();
      record.resultText = result.text;
      if (result.activeJourneyId) record.activeJourneyId = result.activeJourneyId;
      record.events.push(...result.events);
      record.events.push(await emitBackgroundEvent(input.runtime, record.conversationId, "completed", {
        workId: record.id,
        intent: record.intent,
        targetJourneyId: record.targetJourneyId,
        activeJourneyId: record.activeJourneyId,
      }));
      if (options.notifyOnCompletion) {
        await call.notify?.({
          message: [
            "Cognidesk background work completed.",
            `Work id: ${record.id}`,
            `Intent: ${record.intent}`,
            record.targetJourneyId ? `Target journey: ${record.targetJourneyId}` : null,
            `Customer request: ${record.userTranscript}`,
            `Validated result to tell the customer: ${record.resultText || "The workflow updated successfully."}`,
          ].filter(Boolean).join("\n"),
          events: record.events,
          responseInstructions: options.completionInstruction
            ?? "Briefly tell the customer the Cognidesk background result. Do not mention work ids, internal events, or JSON.",
        });
      }
    } catch (error) {
      record.updatedAt = new Date().toISOString();
      if (record.controller.signal.aborted) {
        const alreadyCancelled = record.status === "cancelled";
        record.status = "cancelled";
        record.error ??= "cancelled";
        if (!alreadyCancelled) {
          record.events.push(await emitBackgroundEvent(input.runtime, record.conversationId, "cancelled", {
            workId: record.id,
            intent: record.intent,
            reason: "cancelled",
          }));
        }
        return;
      }
      record.status = "failed";
      record.error = error instanceof Error ? error.message : "Voice background work failed.";
      record.events.push(await emitBackgroundEvent(input.runtime, record.conversationId, "failed", {
        workId: record.id,
        intent: record.intent,
        error: record.error,
      }));
      if (options.notifyOnCompletion) {
        await call.notify?.({
          message: [
            "Cognidesk background work failed.",
            `Work id: ${record.id}`,
            `Customer request: ${record.userTranscript}`,
            `Error: ${record.error}`,
          ].join("\n"),
          events: record.events,
          responseInstructions: "Briefly apologize and ask one clarifying question or suggest trying again. Do not mention internal work ids.",
        });
      }
    }
  }

  async function cancelRunning(args: {
    conversationId: string;
    workId?: string;
    reason: string;
    notify: boolean;
  }) {
    const targets = args.workId
      ? list(args.conversationId).filter((record) => record.id === args.workId && record.status === "running")
      : running(args.conversationId);
    for (const record of targets) {
      record.status = "cancelled";
      record.updatedAt = new Date().toISOString();
      record.error = args.reason;
      record.controller.abort(new Error(args.reason));
      record.events.push(await emitBackgroundEvent(input.runtime, record.conversationId, "cancelled", {
        workId: record.id,
        intent: record.intent,
        reason: args.reason,
      }));
    }
    return targets;
  }
}

async function emitBackgroundEvent(
  runtime: CognideskRuntime,
  conversationId: string,
  suffix: "started" | "completed" | "failed" | "cancelled" | "side_exchange",
  data: unknown,
) {
  return runtime.emit({
    conversationId,
    type: `custom.voice.background.${suffix}`,
    data,
  });
}

function serializeWork(record: VoiceBackgroundWorkRecord, extra: Record<string, unknown> = {}) {
  return {
    ...extra,
    workId: record.id,
    intent: record.intent,
    status: record.status,
    userTranscript: record.userTranscript,
    ...(record.targetJourneyId ? { targetJourneyId: record.targetJourneyId } : {}),
    ...(record.reason ? { reason: record.reason } : {}),
    ...(record.resultText ? { resultText: record.resultText } : {}),
    ...(record.activeJourneyId ? { activeJourneyId: record.activeJourneyId } : {}),
    ...(record.error ? { error: record.error } : {}),
    startedAt: record.startedAt,
    updatedAt: record.updatedAt,
  };
}

async function retrieveVoiceKnowledge(
  input: {
    runtime: CognideskRuntime;
    models: AgentModelSet;
    knowledgeIndex: FlightKnowledgeIndex;
  },
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
        title: item.title,
        content: item.content,
        score: item.score,
        metadata: {
          ...item.metadata,
          url: item.metadata.url ?? `/docs/${item.metadata.documentId}.html`,
        },
      })),
    },
  };
}

async function requestToolRun(
  input: {
    runtime: CognideskRuntime;
  },
  call: VoiceControlToolCall,
): Promise<VoiceControlToolResult> {
  const args = parseRecord(call.arguments);
  const toolName = typeof args.toolName === "string" ? args.toolName as FlightToolName : "";
  const toolArgs = parseRecord(args.arguments);
  const tool = isFlightToolName(toolName) ? flightTools[toolName] : null;
  if (!tool) {
    return {
      output: {
        ok: false,
        error: `Tool '${toolName}' is not available in the flight demo voice scope.`,
        availableTools: allToolNames,
      },
    };
  }

  if (tool.sideEffect && args.confirmed !== true) {
    return {
      output: {
        ok: false,
        needsConfirmation: true,
        message: "Ask the customer to explicitly confirm before creating the mocked booking.",
      },
    };
  }

  const parsedInput = tool.input.safeParse(toolArgs);
  if (!parsedInput.success) {
    return {
      output: {
        ok: false,
        error: parsedInput.error.message,
      },
    };
  }

  const events: RuntimeEvent[] = [];
  events.push(await input.runtime.emit({
    conversationId: call.session.conversation.id,
    type: "tool.started",
    data: {
      toolName: tool.name,
    },
  }));

  try {
    const output = await executeFlightTool(tool, {
      conversationId: call.session.conversation.id,
      input: parsedInput.data,
      signal: call.signal,
    });
    const parsedOutput = tool.output.parse(output);
    events.push(await input.runtime.emit({
      conversationId: call.session.conversation.id,
      type: "tool.completed",
      data: {
        toolName: tool.name,
        success: true,
        result: parsedOutput,
      },
    }));
    return {
      events,
      output: {
        ok: true,
        toolName: tool.name,
        result: parsedOutput,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Tool execution failed.";
    events.push(await input.runtime.emit({
      conversationId: call.session.conversation.id,
      type: "tool.completed",
      data: {
        toolName: tool.name,
        success: false,
        error: message,
      },
    }));
    return {
      events,
      output: {
        ok: false,
        toolName: tool.name,
        error: message,
      },
    };
  }
}

async function executeFlightTool(tool: AnyTool, input: {
  conversationId: string;
  input: unknown;
  signal: AbortSignal;
}) {
  const idempotencyKey = tool.idempotencyKey?.({
    conversationId: input.conversationId,
    input: input.input,
  });
  return tool.execute({
    input: input.input,
    app: {},
    conversationId: input.conversationId,
    telemetry: createTelemetryContext({}),
    ...(idempotencyKey ? { idempotencyKey } : {}),
    signal: input.signal,
  });
}

function isFlightToolName(value: string): value is FlightToolName {
  return allToolNames.includes(value as FlightToolName);
}

function parseRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
}

function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.()
    ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}
