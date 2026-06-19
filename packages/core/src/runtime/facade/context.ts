import type { ConversationRecord } from "../../storage.js";
import type { ChannelEventBindingOutcome } from "../../types.js";
import { type RuntimeKernel } from "../kernel.js";
import type {
  HandleChannelEventInput,
  HandleChannelEventResult,
  RuntimeOptions,
} from "../types.js";
import { type defineChannelEvent } from "../../types.js";

export type RuntimeOperation = <T>(
  operation: string,
  spanName: string,
  attributes: Record<string, string | number | boolean | undefined>,
  run: () => T | Promise<T>,
) => Promise<Awaited<T>>;

export interface RuntimeFacadeContext {
  options: RuntimeOptions;
  kernel: RuntimeKernel;
  runtimeOperation: RuntimeOperation;
}

export interface RuntimeChannelFacadeContext extends RuntimeFacadeContext {
  bindChannelEvent<TPayload, TTurn>(
    input: HandleChannelEventInput<TPayload, TTurn>,
    channelEvent: ReturnType<typeof defineChannelEvent<TPayload>>,
  ): Promise<
    | { accepted: true; conversation: ConversationRecord; bindingOutcome: Extract<ChannelEventBindingOutcome, "start-new" | "resume-existing" | "link-and-start-new"> }
    | { accepted: false; reason: string; blockers: Array<{ code: string; message: string; kind?: string }> }
  >;
  handleChannelEvent<TPayload = unknown, TTurn = unknown>(
    input: HandleChannelEventInput<TPayload, TTurn>,
  ): Promise<HandleChannelEventResult<TPayload>>;
}
