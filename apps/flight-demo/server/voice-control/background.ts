import type { CognideskRuntime } from "@cognidesk/core";
import type { VoiceControlToolCall, VoiceControlToolResult } from "@cognidesk/voice-websocket";
import { voiceSafeResultText } from "./result-text.js";
import type {
  FlightDemoVoiceControlInput,
  VoiceBackgroundWorkRecord,
  VoiceTurnIntent,
} from "./types.js";
import { voiceJourneyProposalSchema } from "./tools.js";
import { createId, parseRecord } from "./utils.js";

export function createVoiceBackgroundWorkStore(input: Pick<FlightDemoVoiceControlInput, "runtime">) {
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
      record.resultText = voiceSafeResultText(record, result);
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
