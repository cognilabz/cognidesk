import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { resolveSqliteFilename, studioEnv } from "@/server/config";
import { schema } from "@/server/db/schema";

const env = studioEnv();
const sqliteFilename = resolveSqliteFilename(env.databaseUrl);
if (env.databaseProvider === "sqlite" && sqliteFilename !== ":memory:") {
  mkdirSync(dirname(sqliteFilename), { recursive: true });
}

export const libsql = createClient({
  url: `file:${sqliteFilename}`,
});

export const db = drizzle(libsql, { schema });

let readyPromise: Promise<void> | null = null;

export function ensureStudioDatabase() {
  readyPromise ??= initialize();
  return readyPromise;
}

async function initialize() {
  await libsql.executeMultiple(`
    PRAGMA foreign_keys = ON;
    PRAGMA busy_timeout = 5000;

    CREATE TABLE IF NOT EXISTS user (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      email_verified INTEGER NOT NULL DEFAULT 0,
      image TEXT,
      role TEXT NOT NULL DEFAULT 'viewer' CHECK (role IN ('viewer', 'dashboard_editor', 'operator', 'admin')),
      created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
      updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
    );

    CREATE TABLE IF NOT EXISTS session (
      id TEXT PRIMARY KEY,
      expires_at INTEGER NOT NULL,
      token TEXT NOT NULL UNIQUE,
      created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
      updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
      ip_address TEXT,
      user_agent TEXT,
      user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
      impersonated_by TEXT
    );
    CREATE INDEX IF NOT EXISTS session_user_id_idx ON session(user_id);

    CREATE TABLE IF NOT EXISTS account (
      id TEXT PRIMARY KEY,
      account_id TEXT NOT NULL,
      provider_id TEXT NOT NULL,
      user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
      access_token TEXT,
      refresh_token TEXT,
      id_token TEXT,
      access_token_expires_at INTEGER,
      refresh_token_expires_at INTEGER,
      scope TEXT,
      password TEXT,
      created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
      updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
    );
    CREATE INDEX IF NOT EXISTS account_user_id_idx ON account(user_id);

    CREATE TABLE IF NOT EXISTS verification (
      id TEXT PRIMARY KEY,
      identifier TEXT NOT NULL,
      value TEXT NOT NULL,
      expires_at INTEGER NOT NULL,
      created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
      updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
    );
    CREATE INDEX IF NOT EXISTS verification_identifier_idx ON verification(identifier);

    CREATE TABLE IF NOT EXISTS studio_targets (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      environment TEXT NOT NULL,
      manifest_json TEXT NOT NULL,
      overlay_json TEXT,
      effective_manifest_json TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS studio_audit_log (
      id TEXT PRIMARY KEY,
      user_id TEXT REFERENCES user(id) ON DELETE SET NULL,
      target_id TEXT REFERENCES studio_targets(id) ON DELETE SET NULL,
      action TEXT NOT NULL,
      subject_type TEXT NOT NULL,
      subject_id TEXT,
      metadata_json TEXT NOT NULL DEFAULT '{}',
      created_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS audit_target_idx ON studio_audit_log(target_id);
    CREATE INDEX IF NOT EXISTS audit_user_idx ON studio_audit_log(user_id);
    CREATE INDEX IF NOT EXISTS audit_created_at_idx ON studio_audit_log(created_at);

    CREATE TABLE IF NOT EXISTS studio_conversations (
      id TEXT PRIMARY KEY,
      target_id TEXT NOT NULL REFERENCES studio_targets(id) ON DELETE CASCADE,
      agent_id TEXT NOT NULL,
      customer_label TEXT NOT NULL,
      lifecycle TEXT NOT NULL CHECK (lifecycle IN ('active', 'handoff', 'closed')),
      summary TEXT NOT NULL,
      active_journey_id TEXT,
      active_state_ids_json TEXT NOT NULL DEFAULT '[]',
      trace_ids_json TEXT NOT NULL DEFAULT '[]',
      event_count INTEGER NOT NULL DEFAULT 0,
      satisfaction TEXT NOT NULL DEFAULT 'neutral' CHECK (satisfaction IN ('positive', 'neutral', 'negative')),
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS conversation_target_idx ON studio_conversations(target_id);
    CREATE INDEX IF NOT EXISTS conversation_updated_at_idx ON studio_conversations(updated_at);

    CREATE TABLE IF NOT EXISTS dashboard_artifacts (
      id TEXT PRIMARY KEY,
      target_id TEXT NOT NULL REFERENCES studio_targets(id) ON DELETE CASCADE,
      owner_user_id TEXT NOT NULL REFERENCES user(id) ON DELETE RESTRICT,
      slug TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
      current_version INTEGER NOT NULL DEFAULT 1,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      published_at INTEGER,
      UNIQUE(target_id, slug)
    );
    CREATE INDEX IF NOT EXISTS dashboard_target_idx ON dashboard_artifacts(target_id);

    CREATE TABLE IF NOT EXISTS dashboard_artifact_versions (
      id TEXT PRIMARY KEY,
      dashboard_id TEXT NOT NULL REFERENCES dashboard_artifacts(id) ON DELETE CASCADE,
      version INTEGER NOT NULL,
      artifact_key TEXT NOT NULL,
      renderer_json TEXT NOT NULL,
      datasets_json TEXT NOT NULL,
      fallback_json TEXT NOT NULL DEFAULT '{}',
      created_by_user_id TEXT NOT NULL REFERENCES user(id) ON DELETE RESTRICT,
      created_at INTEGER NOT NULL,
      UNIQUE(dashboard_id, version)
    );

    CREATE TABLE IF NOT EXISTS operator_sessions (
      id TEXT PRIMARY KEY,
      target_id TEXT NOT NULL REFERENCES studio_targets(id) ON DELETE CASCADE,
      user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      model_id TEXT,
      status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'failed', 'archived')),
      runtime_session_id TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS operator_sessions_user_idx ON operator_sessions(user_id);
    CREATE INDEX IF NOT EXISTS operator_sessions_target_idx ON operator_sessions(target_id);

    CREATE TABLE IF NOT EXISTS operator_messages (
      id TEXT PRIMARY KEY,
      session_id TEXT NOT NULL REFERENCES operator_sessions(id) ON DELETE CASCADE,
      role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system', 'tool')),
      content_json TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS operator_messages_session_idx ON operator_messages(session_id);

    CREATE TABLE IF NOT EXISTS operator_artifacts (
      id TEXT PRIMARY KEY,
      session_id TEXT NOT NULL REFERENCES operator_sessions(id) ON DELETE CASCADE,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      artifact_json TEXT NOT NULL,
      artifact_key TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS operator_artifacts_session_idx ON operator_artifacts(session_id);

    CREATE TABLE IF NOT EXISTS credential_grants (
      id TEXT PRIMARY KEY,
      target_id TEXT NOT NULL REFERENCES studio_targets(id) ON DELETE CASCADE,
      category TEXT NOT NULL,
      label TEXT NOT NULL,
      secret_ref TEXT NOT NULL,
      created_by_user_id TEXT REFERENCES user(id) ON DELETE SET NULL,
      created_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS credential_target_idx ON credential_grants(target_id);

    CREATE TABLE IF NOT EXISTS validation_runs (
      id TEXT PRIMARY KEY,
      session_id TEXT REFERENCES operator_sessions(id) ON DELETE SET NULL,
      command_id TEXT NOT NULL,
      exit_code INTEGER NOT NULL,
      output_key TEXT,
      output_preview TEXT NOT NULL DEFAULT '',
      created_at INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS validation_session_idx ON validation_runs(session_id);
  `);
}
