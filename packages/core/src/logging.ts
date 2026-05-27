import pino, { type Logger } from "pino";
import type { AgentLogLevel } from "./definition.js";
import type { TraceEvent } from "./observability.js";
import type { RuntimeOptions } from "./runtime/types.js";

export type SdkLogLevel = AgentLogLevel;
export type SdkLogger = Pick<Logger, "trace" | "debug" | "info" | "error" | "child">;

export interface RuntimeLogContext {
  agentId?: string;
  conversationId?: string;
  journeyId?: string;
  stateId?: string;
}

export function createRuntimeLogger(options: RuntimeOptions): SdkLogger {
  const level = options.logLevel ?? options.agent?.logLevel;
  return pino({
    name: "cognidesk",
    level: level ?? "silent",
    base: {
      sdk: "cognidesk",
      ...(options.agent ? { agentId: options.agent.id } : {}),
    },
  });
}

export function runtimeLogger(options: RuntimeOptions, context: RuntimeLogContext = {}) {
  const logger = options.logger ?? createRuntimeLogger(options);
  return Object.keys(context).length > 0 ? logger.child(context) : logger;
}

export function logTraceEvent(options: RuntimeOptions, event: TraceEvent) {
  const logger = runtimeLogger(options, {
    conversationId: event.conversationId,
    ...("journeyId" in event && event.journeyId ? { journeyId: event.journeyId } : {}),
    ...("stateId" in event && event.stateId ? { stateId: event.stateId } : {}),
  });
  const data = traceEventData(event);
  switch (event.type) {
    case "runtime.event":
      logger.trace(data, "Runtime event stored");
      return;
    case "model.started":
      logger.debug(data, "Model call started");
      return;
    case "model.completed":
      logger.info(data, "Model call completed");
      return;
    case "model.failed":
      logger.error(data, "Model call failed");
      return;
    case "tool.started":
      logger.debug(data, "Tool execution started");
      return;
    case "tool.completed":
      if (event.success) logger.info(data, "Tool execution completed");
      else logger.error(data, "Tool execution failed");
      return;
    case "action.started":
      logger.debug(data, "Action execution started");
      return;
    case "action.completed":
      if (event.success) logger.info(data, "Action execution completed");
      else logger.error(data, "Action execution failed");
      return;
    case "knowledge.retrieved":
      logger.debug(data, "Knowledge retrieved");
      return;
  }
}

function traceEventData(event: TraceEvent) {
  if (event.type === "runtime.event") {
    return {
      traceType: event.type,
      runtimeEventType: event.event.type,
      offset: event.event.offset,
    };
  }
  const { type, ...data } = event;
  delete (data as Record<string, unknown>).conversationId;
  delete (data as Record<string, unknown>).journeyId;
  delete (data as Record<string, unknown>).stateId;
  return {
    ...data,
    traceType: type,
  };
}
