import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const sqliteConversations = sqliteTable("conversations", {
  id: text("id").primaryKey(),
  agentId: text("agent_id").notNull(),
  lifecycle: text("lifecycle", { enum: ["active", "handoff", "closed"] }).notNull(),
  contextJson: text("context_json").notNull(),
  channelJson: text("channel_json"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const sqliteRuntimeEvents = sqliteTable("runtime_events", {
  id: text("id").primaryKey(),
  conversationId: text("conversation_id").notNull().references(() => sqliteConversations.id, { onDelete: "cascade" }),
  offset: integer("offset").notNull(),
  type: text("type").notNull(),
  telemetryTraceId: text("telemetry_trace_id"),
  telemetrySpanId: text("telemetry_span_id"),
  dataJson: text("data_json").notNull(),
  createdAt: text("created_at").notNull(),
}, (table) => [
  uniqueIndex("runtime_events_conversation_offset_idx").on(table.conversationId, table.offset),
  index("runtime_events_conversation_created_idx").on(table.conversationId, table.createdAt),
  index("runtime_events_type_idx").on(table.type),
  index("runtime_events_trace_idx").on(table.telemetryTraceId),
]);

export const sqliteRuntimeSnapshots = sqliteTable("runtime_snapshots", {
  conversationId: text("conversation_id").primaryKey().references(() => sqliteConversations.id, { onDelete: "cascade" }),
  snapshotJson: text("snapshot_json").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const sqliteStorageSchema = {
  conversations: sqliteConversations,
  runtimeEvents: sqliteRuntimeEvents,
  runtimeSnapshots: sqliteRuntimeSnapshots,
};
