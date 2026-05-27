import pino, { type Logger } from "pino";
import type { AgentLogLevel } from "./definition.js";
import type { RuntimeOptions } from "./runtime/types.js";

export type SdkLogLevel = AgentLogLevel;
export type SdkLogger = Pick<Logger, "trace" | "debug" | "info" | "warn" | "error" | "child">;

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
