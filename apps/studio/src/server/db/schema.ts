import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).default(false).notNull(),
  image: text("image"),
  role: text("role", { enum: ["viewer", "dashboard_editor", "operator", "admin"] }).default("viewer").notNull(),
  banned: integer("banned", { mode: "boolean" }).default(false).notNull(),
  banReason: text("ban_reason"),
  banExpires: integer("ban_expires", { mode: "timestamp_ms" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  impersonatedBy: text("impersonated_by"),
}, (table) => [
  index("session_user_id_idx").on(table.userId),
]);

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", { mode: "timestamp_ms" }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", { mode: "timestamp_ms" }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
}, (table) => [
  index("account_user_id_idx").on(table.userId),
]);

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
}, (table) => [
  index("verification_identifier_idx").on(table.identifier),
]);

export const studioTargets = sqliteTable("studio_targets", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  environment: text("environment").notNull(),
  manifestJson: text("manifest_json").notNull(),
  overlayJson: text("overlay_json"),
  effectiveManifestJson: text("effective_manifest_json").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const studioAuditLog = sqliteTable("studio_audit_log", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
  targetId: text("target_id").references(() => studioTargets.id, { onDelete: "set null" }),
  action: text("action").notNull(),
  subjectType: text("subject_type").notNull(),
  subjectId: text("subject_id"),
  metadataJson: text("metadata_json").notNull().default("{}"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("audit_target_idx").on(table.targetId),
  index("audit_user_idx").on(table.userId),
  index("audit_created_at_idx").on(table.createdAt),
]);

export const studioConversations = sqliteTable("studio_conversations", {
  id: text("id").primaryKey(),
  targetId: text("target_id").notNull().references(() => studioTargets.id, { onDelete: "cascade" }),
  agentId: text("agent_id").notNull(),
  customerLabel: text("customer_label").notNull(),
  lifecycle: text("lifecycle", { enum: ["active", "handoff", "closed"] }).notNull(),
  summary: text("summary").notNull(),
  activeJourneyId: text("active_journey_id"),
  activeStateIdsJson: text("active_state_ids_json").notNull().default("[]"),
  traceIdsJson: text("trace_ids_json").notNull().default("[]"),
  eventCount: integer("event_count").default(0).notNull(),
  satisfaction: text("satisfaction", { enum: ["positive", "neutral", "negative"] }).default("neutral").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("conversation_target_idx").on(table.targetId),
  index("conversation_updated_at_idx").on(table.updatedAt),
]);

export const dashboardArtifacts = sqliteTable("dashboard_artifacts", {
  id: text("id").primaryKey(),
  targetId: text("target_id").notNull().references(() => studioTargets.id, { onDelete: "cascade" }),
  ownerUserId: text("owner_user_id").notNull().references(() => user.id, { onDelete: "restrict" }),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status", { enum: ["draft", "published", "archived"] }).default("draft").notNull(),
  currentVersion: integer("current_version").default(1).notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  publishedAt: integer("published_at", { mode: "timestamp_ms" }),
}, (table) => [
  uniqueIndex("dashboard_target_slug_idx").on(table.targetId, table.slug),
  index("dashboard_target_idx").on(table.targetId),
]);

export const dashboardArtifactVersions = sqliteTable("dashboard_artifact_versions", {
  id: text("id").primaryKey(),
  dashboardId: text("dashboard_id").notNull().references(() => dashboardArtifacts.id, { onDelete: "cascade" }),
  version: integer("version").notNull(),
  artifactKey: text("artifact_key").notNull(),
  rendererJson: text("renderer_json").notNull(),
  datasetsJson: text("datasets_json").notNull(),
  fallbackJson: text("fallback_json").notNull().default("{}"),
  createdByUserId: text("created_by_user_id").notNull().references(() => user.id, { onDelete: "restrict" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  uniqueIndex("dashboard_version_idx").on(table.dashboardId, table.version),
]);

export const operatorSessions = sqliteTable("operator_sessions", {
  id: text("id").primaryKey(),
  targetId: text("target_id").notNull().references(() => studioTargets.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  modelId: text("model_id"),
  status: text("status", { enum: ["active", "completed", "failed", "archived"] }).default("active").notNull(),
  runtimeSessionId: text("runtime_session_id"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("operator_sessions_user_idx").on(table.userId),
  index("operator_sessions_target_idx").on(table.targetId),
]);

export const operatorMessages = sqliteTable("operator_messages", {
  id: text("id").primaryKey(),
  sessionId: text("session_id").notNull().references(() => operatorSessions.id, { onDelete: "cascade" }),
  role: text("role", { enum: ["user", "assistant", "system", "tool"] }).notNull(),
  contentJson: text("content_json").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("operator_messages_session_idx").on(table.sessionId),
]);

export const operatorArtifacts = sqliteTable("operator_artifacts", {
  id: text("id").primaryKey(),
  sessionId: text("session_id").notNull().references(() => operatorSessions.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  title: text("title").notNull(),
  artifactJson: text("artifact_json").notNull(),
  artifactKey: text("artifact_key"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("operator_artifacts_session_idx").on(table.sessionId),
]);

export const credentialGrants = sqliteTable("credential_grants", {
  id: text("id").primaryKey(),
  targetId: text("target_id").notNull().references(() => studioTargets.id, { onDelete: "cascade" }),
  category: text("category").notNull(),
  label: text("label").notNull(),
  secretRef: text("secret_ref").notNull(),
  createdByUserId: text("created_by_user_id").references(() => user.id, { onDelete: "set null" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("credential_target_idx").on(table.targetId),
]);

export const validationRuns = sqliteTable("validation_runs", {
  id: text("id").primaryKey(),
  sessionId: text("session_id").references(() => operatorSessions.id, { onDelete: "set null" }),
  commandId: text("command_id").notNull(),
  exitCode: integer("exit_code").notNull(),
  outputKey: text("output_key"),
  outputPreview: text("output_preview").notNull().default(""),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
}, (table) => [
  index("validation_session_idx").on(table.sessionId),
]);

export const schema = {
  user,
  session,
  account,
  verification,
  studioTargets,
  studioAuditLog,
  studioConversations,
  dashboardArtifacts,
  dashboardArtifactVersions,
  operatorSessions,
  operatorMessages,
  operatorArtifacts,
  credentialGrants,
  validationRuns,
};
