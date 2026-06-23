import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import {
  mergeStudioTargetManifest,
  StudioTargetManifestSchema,
  type StudioTargetManifest,
  type StudioTargetOverlay,
} from "@cognidesk/studio-contracts";

export interface StudioEnv {
  appUrl: string;
  databaseProvider: "sqlite";
  databaseUrl: string;
  betterAuthSecret: string;
  manifestPath: string;
  manifestOverlayPath?: string;
  targetServiceToken?: string;
  operatorRuntimeWsUrl: string;
  operatorRuntimeSecret?: string;
  artifact: {
    endpoint?: string;
    region: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    forcePathStyle: boolean;
  };
}

const localDevOperatorRuntimeSecret = "cognidesk-studio-local-runtime-secret-change-me";

export function studioEnv(): StudioEnv {
  const manifestOverlayPath = process.env.STUDIO_TARGET_OVERLAY;
  const targetServiceToken = process.env.COGNIDESK_STUDIO_TARGET_TOKEN ?? "dev-studio-token";
  const endpoint = process.env.STUDIO_S3_ENDPOINT ?? "http://127.0.0.1:9000";
  const accessKeyId = process.env.STUDIO_S3_ACCESS_KEY_ID ?? "minioadmin";
  const secretAccessKey = process.env.STUDIO_S3_SECRET_ACCESS_KEY ?? "minioadmin";
  const operatorRuntimeSecret = studioOperatorRuntimeSecret();
  return {
    appUrl: process.env.STUDIO_APP_URL ?? `http://127.0.0.1:${process.env.PORT ?? "3000"}`,
    databaseProvider: resolveStudioDatabaseProvider(),
    databaseUrl: resolveStudioDatabaseUrl(process.env.STUDIO_DATABASE_URL),
    betterAuthSecret: process.env.BETTER_AUTH_SECRET ?? "cognidesk-studio-local-development-secret-change-me",
    manifestPath: process.env.STUDIO_TARGET_MANIFEST ?? resolve(/*turbopackIgnore: true*/ process.cwd(), "../../cognidesk.studio.json"),
    ...(manifestOverlayPath ? { manifestOverlayPath } : {}),
    ...(targetServiceToken ? { targetServiceToken } : {}),
    operatorRuntimeWsUrl: process.env.STUDIO_OPERATOR_RUNTIME_WS_URL ?? "ws://127.0.0.1:4099/ws",
    ...(operatorRuntimeSecret ? { operatorRuntimeSecret } : {}),
    artifact: {
      ...(endpoint ? { endpoint } : {}),
      region: process.env.STUDIO_S3_REGION ?? "us-east-1",
      ...(accessKeyId ? { accessKeyId } : {}),
      ...(secretAccessKey ? { secretAccessKey } : {}),
      forcePathStyle: process.env.STUDIO_S3_FORCE_PATH_STYLE !== "false",
    },
  };
}

export function resolveStudioDatabaseProvider(provider = process.env.STUDIO_DATABASE_PROVIDER): "sqlite" {
  const normalized = (provider ?? "sqlite").trim().toLowerCase();
  if (!normalized || normalized === "sqlite") return "sqlite";
  if (normalized === "postgres") {
    throw new Error("STUDIO_DATABASE_PROVIDER=postgres is not supported by Studio yet; set STUDIO_DATABASE_PROVIDER=sqlite or leave it unset.");
  }
  throw new Error(`Unsupported STUDIO_DATABASE_PROVIDER '${provider}'. Studio currently supports sqlite only.`);
}

export function resolveStudioDatabaseUrl(databaseUrl = "file:./data/studio.sqlite") {
  if (isUnsupportedDatabaseUrl(databaseUrl)) {
    throw new Error("STUDIO_DATABASE_URL must be a SQLite filename, :memory:, or file: URL; Postgres URLs are not supported by Studio yet.");
  }
  return databaseUrl;
}

export function studioOperatorRuntimeSecret(env: NodeJS.ProcessEnv = process.env) {
  const configured = env.STUDIO_OPERATOR_RUNTIME_SECRET?.trim();
  if (configured) return configured;
  return env.NODE_ENV === "production" ? undefined : localDevOperatorRuntimeSecret;
}

export function resolveSqliteFilename(databaseUrl = studioEnv().databaseUrl) {
  const sqliteUrl = resolveStudioDatabaseUrl(databaseUrl);
  if (sqliteUrl === ":memory:") return sqliteUrl;
  if (sqliteUrl.startsWith("file:")) return resolve(/*turbopackIgnore: true*/ process.cwd(), sqliteUrl.slice("file:".length));
  return resolve(/*turbopackIgnore: true*/ process.cwd(), sqliteUrl);
}

export function loadStudioTargetManifest(): StudioTargetManifest {
  const env = studioEnv();
  const manifest = StudioTargetManifestSchema.parse(readJson(env.manifestPath));
  const overlay = env.manifestOverlayPath && existsSync(env.manifestOverlayPath)
    ? readJson(env.manifestOverlayPath) as StudioTargetOverlay
    : {};
  return mergeStudioTargetManifest(manifest, overlay);
}

export function dataDirectory() {
  const filename = resolveSqliteFilename();
  return dirname(filename);
}

function readJson(path: string): unknown {
  if (!existsSync(path)) {
    throw new Error(`Studio manifest not found at ${path}`);
  }
  return JSON.parse(readFileSync(path, "utf8")) as unknown;
}

function isUnsupportedDatabaseUrl(value: string) {
  return /^[a-z][a-z0-9+.-]*:/i.test(value) && !value.startsWith("file:");
}
