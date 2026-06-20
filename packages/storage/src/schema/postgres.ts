import { asc, desc } from "drizzle-orm";
import { index, integer, jsonb, pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";

export const postgresConversations = pgTable("conversations", {
  id: text("id").primaryKey(),
  agentId: text("agent_id").notNull(),
  lifecycle: text("lifecycle", { enum: ["active", "handoff", "closed"] }).notNull(),
  contextJson: jsonb("context_json").notNull(),
  channelJson: jsonb("channel_json"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
}, (table) => [
  index("conversations_updated_id_idx").on(desc(table.updatedAt), asc(table.id)),
  index("conversations_agent_updated_id_idx").on(table.agentId, desc(table.updatedAt), asc(table.id)),
]);

export const postgresRuntimeEvents = pgTable("runtime_events", {
  id: text("id").primaryKey(),
  conversationId: text("conversation_id").notNull().references(() => postgresConversations.id, { onDelete: "cascade" }),
  offset: integer("offset").notNull(),
  type: text("type").notNull(),
  telemetryTraceId: text("telemetry_trace_id"),
  telemetrySpanId: text("telemetry_span_id"),
  dataJson: jsonb("data_json").notNull(),
  createdAt: text("created_at").notNull(),
}, (table) => [
  uniqueIndex("runtime_events_conversation_offset_idx").on(table.conversationId, table.offset),
  index("runtime_events_conversation_created_idx").on(table.conversationId, table.createdAt),
  index("runtime_events_type_idx").on(table.type),
  index("runtime_events_trace_idx").on(table.telemetryTraceId),
]);

export const postgresRuntimeSnapshots = pgTable("runtime_snapshots", {
  conversationId: text("conversation_id").primaryKey().references(() => postgresConversations.id, { onDelete: "cascade" }),
  snapshotJson: jsonb("snapshot_json").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const postgresStorageSchema = {
  conversations: postgresConversations,
  runtimeEvents: postgresRuntimeEvents,
  runtimeSnapshots: postgresRuntimeSnapshots,
};
