import {
  createTelemetryContext,
  type AnyTool,
  type RuntimeEvent,
} from "@cognidesk/core";
import type { VoiceControlToolCall, VoiceControlToolResult } from "@cognidesk/voice-websocket";
import type { FlightDemoVoiceControlInput, FlightToolName } from "./types.js";
import {
  allToolNames,
  flightToolForName,
  isFlightToolName,
} from "./tools.js";
import { parseRecord } from "./utils.js";

export async function requestToolRun(
  input: Pick<FlightDemoVoiceControlInput, "runtime">,
  call: VoiceControlToolCall,
): Promise<VoiceControlToolResult> {
  const args = parseRecord(call.arguments);
  const toolName = typeof args.toolName === "string" ? args.toolName as FlightToolName : "";
  const toolArgs = parseRecord(args.arguments);
  const tool = isFlightToolName(toolName) ? flightToolForName(toolName) : null;
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
        result: parsedOutput ?? null,
      },
    }));
    return {
      events,
      output: {
        ok: true,
        toolName: tool.name,
        result: parsedOutput ?? null,
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
