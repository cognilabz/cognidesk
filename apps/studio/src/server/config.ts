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
const localDevBetterAuthSecret = "cognidesk-studio-local-development-secret-change-me";
const localDevTargetServiceToken = "dev-studio-token";
const buildTimeBetterAuthSecret = "cognidesk-studio-build-time-placeholder-secret";

export function studioEnv(): StudioEnv {
  const manifestOverlayPath = process.env.STUDIO_TARGET_OVERLAY;
  const targetServiceToken = studioTargetServiceToken();
  const operatorRuntimeSecret = studioOperatorRuntimeSecret();
  return {
    appUrl: process.env.STUDIO_APP_URL ?? `http://127.0.0.1:${process.env.PORT ?? "3000"}`,
    databaseProvider: resolveStudioDatabaseProvider(),
    databaseUrl: resolveStudioDatabaseUrl(process.env.STUDIO_DATABASE_URL),
    betterAuthSecret: studioBetterAuthSecret(),
    manifestPath: process.env.STUDIO_TARGET_MANIFEST ?? resolve(/*turbopackIgnore: true*/ process.cwd(), "../../cognidesk.studio.json"),
    ...(manifestOverlayPath ? { manifestOverlayPath } : {}),
    ...(targetServiceToken ? { targetServiceToken } : {}),
    operatorRuntimeWsUrl: process.env.STUDIO_OPERATOR_RUNTIME_WS_URL ?? "ws://127.0.0.1:4099/ws",
    ...(operatorRuntimeSecret ? { operatorRuntimeSecret } : {}),
    artifact: studioArtifactStorage(),
  };
}

export function studioTrustedOrigins(appUrl: string, allowedDevOrigins = process.env.STUDIO_ALLOWED_DEV_ORIGINS) {
  const origins = new Set<string>();
  const appOrigin = normalizeOrigin(appUrl, null);
  if (appOrigin) {
    origins.add(appOrigin);
    addLoopbackPeerOrigins(origins, appOrigin);
  }

  for (const value of (allowedDevOrigins ?? "").split(",")) {
    const origin = normalizeOrigin(value.trim(), appOrigin);
    if (!origin) continue;
    origins.add(origin);
    addLoopbackPeerOrigins(origins, origin);
  }

  return [...origins];
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
  const normalized = databaseUrl.trim();
  if (isUnsupportedDatabaseUrl(normalized)) {
    throw new Error("STUDIO_DATABASE_URL must be a SQLite filename, :memory:, or file: URL; Postgres URLs are not supported by Studio yet.");
  }
  return normalized;
}

export function studioOperatorRuntimeSecret(env: NodeJS.ProcessEnv = process.env) {
  const configured = env.STUDIO_OPERATOR_RUNTIME_SECRET?.trim();
  if (configured) {
    if (!allowsLocalStudioDefaults(env) && configured === localDevOperatorRuntimeSecret) {
      throw new Error("STUDIO_OPERATOR_RUNTIME_SECRET must not use the local development secret outside local development.");
    }
    return configured;
  }
  return allowsLocalStudioDefaults(env) ? localDevOperatorRuntimeSecret : undefined;
}

export function studioBetterAuthSecret(env: NodeJS.ProcessEnv = process.env) {
  const configured = env.BETTER_AUTH_SECRET?.trim();
  if (configured) {
    if (!allowsLocalStudioDefaults(env) && configured === localDevBetterAuthSecret) {
      throw new Error("BETTER_AUTH_SECRET must not use the local development secret outside local development.");
    }
    return configured;
  }
  if (!allowsLocalStudioDefaults(env)) {
    if (isStudioBuildPhase(env)) return buildTimeBetterAuthSecret;
    throw new Error("BETTER_AUTH_SECRET is required outside local development.");
  }
  return localDevBetterAuthSecret;
}

export function studioTargetServiceToken(env: NodeJS.ProcessEnv = process.env) {
  const configured = env.COGNIDESK_STUDIO_TARGET_TOKEN?.trim();
  if (configured) {
    if (!allowsLocalStudioDefaults(env) && configured === localDevTargetServiceToken) {
      throw new Error("COGNIDESK_STUDIO_TARGET_TOKEN must not use dev-studio-token outside local development.");
    }
    return configured;
  }
  return allowsLocalStudioDefaults(env) ? localDevTargetServiceToken : undefined;
}

export function studioArtifactStorage(env: NodeJS.ProcessEnv = process.env): StudioEnv["artifact"] {
  const localDefaults = allowsLocalStudioDefaults(env);
  const endpoint = stringEnv(env.STUDIO_S3_ENDPOINT) ?? (localDefaults ? "http://127.0.0.1:9000" : undefined);
  const accessKeyId = stringEnv(env.STUDIO_S3_ACCESS_KEY_ID) ?? (localDefaults ? "minioadmin" : undefined);
  const secretAccessKey = stringEnv(env.STUDIO_S3_SECRET_ACCESS_KEY) ?? (localDefaults ? "minioadmin" : undefined);
  if (!localDefaults) {
    if (endpoint && isLocalMinioEndpoint(endpoint)) {
      throw new Error("STUDIO_S3_ENDPOINT must not use the local MinIO endpoint outside local development.");
    }
    if (accessKeyId === "minioadmin" || secretAccessKey === "minioadmin") {
      throw new Error("STUDIO_S3_ACCESS_KEY_ID and STUDIO_S3_SECRET_ACCESS_KEY must not use local MinIO credentials outside local development.");
    }
  }
  if ((accessKeyId && !secretAccessKey) || (!accessKeyId && secretAccessKey)) {
    throw new Error("STUDIO_S3_ACCESS_KEY_ID and STUDIO_S3_SECRET_ACCESS_KEY must be configured together.");
  }
  const forcePathStyle = stringEnv(env.STUDIO_S3_FORCE_PATH_STYLE);
  return {
    ...(endpoint ? { endpoint } : {}),
    region: stringEnv(env.STUDIO_S3_REGION) ?? "us-east-1",
    ...(accessKeyId ? { accessKeyId } : {}),
    ...(secretAccessKey ? { secretAccessKey } : {}),
    forcePathStyle: forcePathStyle ? forcePathStyle !== "false" : localDefaults,
  };
}

export function allowsLocalStudioDefaults(env: NodeJS.ProcessEnv = process.env) {
  return env.NODE_ENV !== "production" && !truthyFlag(env.STUDIO_HOSTED) && !truthyFlag(env.COGNIDESK_STUDIO_HOSTED);
}

export function isStudioBuildPhase(env: NodeJS.ProcessEnv = process.env) {
  return env.NEXT_PHASE === "phase-production-build"
    || env.npm_lifecycle_event === "build"
    || truthyFlag(env.COGNIDESK_STUDIO_BUILD);
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

function isLocalMinioEndpoint(value: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  const hostname = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  const port = url.port || (url.protocol === "http:" ? "80" : url.protocol === "https:" ? "443" : "");
  return port === "9000" && isLoopbackHostname(hostname);
}

function isLoopbackHostname(hostname: string) {
  return hostname === "localhost"
    || hostname === "::1"
    || hostname === "0:0:0:0:0:0:0:1"
    || hostname === "0.0.0.0"
    || /^127(?:\.\d{1,3}){3}$/.test(hostname);
}

function normalizeOrigin(value: string, baseOrigin: string | null) {
  if (!value) return null;
  try {
    const baseUrl = baseOrigin ? new URL(baseOrigin) : null;
    const raw = value.includes("://")
      ? value
      : `${baseUrl?.protocol ?? "http:"}//${value}${value.includes(":") || !baseUrl?.port ? "" : `:${baseUrl.port}`}`;
    return new URL(raw).origin;
  } catch {
    return null;
  }
}

function addLoopbackPeerOrigins(origins: Set<string>, origin: string) {
  try {
    const url = new URL(origin);
    if (url.hostname === "localhost") {
      origins.add(`${url.protocol}//127.0.0.1${url.port ? `:${url.port}` : ""}`);
    }
    if (url.hostname === "127.0.0.1") {
      origins.add(`${url.protocol}//localhost${url.port ? `:${url.port}` : ""}`);
    }
  } catch {
    // Invalid origins are filtered by normalizeOrigin.
  }
}

function truthyFlag(value: string | undefined) {
  return ["1", "true", "yes", "on"].includes(value?.trim().toLowerCase() ?? "");
}

function stringEnv(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}
