import { z } from "zod";
import type {
  AnyTool,
  KnowledgeSource,
  ModelMessage,
  ModelToolCall,
  ModelToolDefinition,
} from "../types.js";

export function uniqueKnowledgeSources(sources: KnowledgeSource[]) {
  const byName = new Map<string, KnowledgeSource>();
  for (const source of sources) byName.set(source.name, source);
  return [...byName.values()];
}

export function uniqueTools(tools: AnyTool[]) {
  const byName = new Map<string, AnyTool>();
  for (const toolDefinition of tools) byName.set(toolDefinition.name, toolDefinition);
  return [...byName.values()];
}

export function toModelToolDefinition(toolDefinition: AnyTool): ModelToolDefinition {
  return {
    name: toolDefinition.name,
    input: toolDefinition.input,
    ...(toolDefinition.description ? { description: toolDefinition.description } : {}),
  };
}

export function createToolResultMessage(call: ModelToolCall, output: unknown): ModelMessage {
  return {
    role: "tool",
    name: call.name,
    toolCallId: call.id,
    content: JSON.stringify(output),
  };
}

export function parseKnowledgeQuery(source: KnowledgeSource, message: string): z.infer<KnowledgeSource["query"]> | null {
  const candidates = [
    { query: message },
    { text: message },
    message,
  ];
  for (const candidate of candidates) {
    const parsed = source.query.safeParse(candidate);
    if (parsed.success) return parsed.data;
  }
  return null;
}
