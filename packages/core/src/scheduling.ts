import type { z } from "zod";
import type { JourneyEventDefinition } from "./definition.js";

export type ScheduleTrigger =
  | { kind: "at"; at: string | Date }
  | { kind: "after"; milliseconds: number }
  | { kind: "cron"; expression: string; timezone?: string };

export interface ScheduledOperationIntent {
  operationAlias?: string;
  providerPackageId?: string;
  capability?: string;
  reason?: string;
}

export interface ScheduleDefinition<
  TId extends string = string,
  TEvent extends JourneyEventDefinition = JourneyEventDefinition,
> {
  kind: "schedule";
  id: TId;
  trigger: ScheduleTrigger;
  event: TEvent;
  payload?: z.infer<TEvent["payload"]> | ((input: { now: Date }) => z.infer<TEvent["payload"]>);
  intent?: ScheduledOperationIntent;
  metadata?: Record<string, unknown>;
}

export interface ScheduledSupportAction {
  id: string;
  scheduleId: string;
  conversationId: string;
  dueAt: string;
  eventName: string;
  payload: unknown;
  intent?: ScheduledOperationIntent;
  metadata?: Record<string, unknown>;
  status: "scheduled" | "cancelled" | "delivered";
}

export interface ScheduleAdapter {
  schedule(input: Omit<ScheduledSupportAction, "id" | "status"> & { id?: string }): Promise<ScheduledSupportAction>;
  cancel(id: string): Promise<boolean>;
  list?(conversationId?: string): Promise<ScheduledSupportAction[]>;
}

export interface InMemoryScheduleAdapterOptions {
  now?: () => Date;
  createId?: () => string;
  onDue?(action: ScheduledSupportAction): Promise<void> | void;
}

export function defineSchedule<
  const TId extends string,
  TEvent extends JourneyEventDefinition,
>(id: TId, options: Omit<ScheduleDefinition<TId, TEvent>, "kind" | "id">): ScheduleDefinition<TId, TEvent> {
  return { kind: "schedule", id, ...options };
}

export function at(atDate: string | Date): ScheduleTrigger {
  return { kind: "at", at: atDate };
}

export function after(input: { milliseconds?: number; seconds?: number; minutes?: number; hours?: number; days?: number }): ScheduleTrigger {
  const milliseconds =
    (input.milliseconds ?? 0)
    + (input.seconds ?? 0) * 1_000
    + (input.minutes ?? 0) * 60_000
    + (input.hours ?? 0) * 3_600_000
    + (input.days ?? 0) * 86_400_000;
  if (milliseconds <= 0) throw new Error("after() schedule trigger must be greater than zero milliseconds.");
  return { kind: "after", milliseconds };
}

export function cron(expression: string, options: { timezone?: string } = {}): ScheduleTrigger {
  return { kind: "cron", expression, ...(options.timezone ? { timezone: options.timezone } : {}) };
}

export function resolveScheduleDueAt(trigger: ScheduleTrigger, now = new Date()): Date {
  if (trigger.kind === "at") return typeof trigger.at === "string" ? new Date(trigger.at) : trigger.at;
  if (trigger.kind === "after") return new Date(now.getTime() + trigger.milliseconds);
  throw new Error("Cron schedule triggers require a host-owned scheduler adapter.");
}

export function createInMemoryScheduleAdapter(options: InMemoryScheduleAdapterOptions = {}): ScheduleAdapter {
  const now = options.now ?? (() => new Date());
  const createId = options.createId ?? (() => randomId());
  const scheduled = new Map<string, ScheduledSupportAction>();
  const timers = new Map<string, ReturnType<typeof setTimeout>>();

  return {
    async schedule(input) {
      const id = input.id ?? createId();
      const action: ScheduledSupportAction = {
        ...input,
        id,
        status: "scheduled",
      };
      scheduled.set(id, action);
      const delay = Math.max(0, Date.parse(action.dueAt) - now().getTime());
      const timer = setTimeout(async () => {
        const current = scheduled.get(id);
        if (!current || current.status !== "scheduled") return;
        const delivered = { ...current, status: "delivered" as const };
        scheduled.set(id, delivered);
        await options.onDue?.(delivered);
      }, delay);
      timers.set(id, timer);
      return action;
    },
    async cancel(id) {
      const action = scheduled.get(id);
      if (!action || action.status !== "scheduled") return false;
      const timer = timers.get(id);
      if (timer) clearTimeout(timer);
      timers.delete(id);
      scheduled.set(id, { ...action, status: "cancelled" });
      return true;
    },
    async list(conversationId) {
      return [...scheduled.values()].filter((action) => !conversationId || action.conversationId === conversationId);
    },
  };
}

function randomId() {
  const bytes = new Uint8Array(16);
  globalThis.crypto?.getRandomValues?.(bytes);
  if (bytes.some(Boolean)) return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
