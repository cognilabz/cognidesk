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
  databaseProvider: "sqlite" | "postgres";
  databaseUrl: string;
  betterAuthSecret: string;
  manifestPath: string;
  manifestOverlayPath?: string;
  targetServiceToken?: string;
  operatorRuntimeWsUrl: string;
  artifact: {
    endpoint?: string;
    region: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    forcePathStyle: boolean;
  };
}

export function studioEnv(): StudioEnv {
  const manifestOverlayPath = process.env.STUDIO_TARGET_OVERLAY;
  const targetServiceToken = process.env.COGNIDESK_STUDIO_TARGET_TOKEN ?? "dev-studio-token";
  const endpoint = process.env.STUDIO_S3_ENDPOINT ?? "http://127.0.0.1:9000";
  const accessKeyId = process.env.STUDIO_S3_ACCESS_KEY_ID ?? "minioadmin";
  const secretAccessKey = process.env.STUDIO_S3_SECRET_ACCESS_KEY ?? "minioadmin";
  return {
    appUrl: process.env.STUDIO_APP_URL ?? `http://127.0.0.1:${process.env.PORT ?? "3000"}`,
    databaseProvider: process.env.STUDIO_DATABASE_PROVIDER === "postgres" ? "postgres" : "sqlite",
    databaseUrl: process.env.STUDIO_DATABASE_URL ?? "file:./data/studio.sqlite",
    betterAuthSecret: process.env.BETTER_AUTH_SECRET ?? "cognidesk-studio-local-development-secret-change-me",
    manifestPath: process.env.STUDIO_TARGET_MANIFEST ?? resolve(/*turbopackIgnore: true*/ process.cwd(), "../../cognidesk.studio.json"),
    ...(manifestOverlayPath ? { manifestOverlayPath } : {}),
    ...(targetServiceToken ? { targetServiceToken } : {}),
    operatorRuntimeWsUrl: process.env.STUDIO_OPERATOR_RUNTIME_WS_URL ?? "ws://127.0.0.1:4099/ws",
    artifact: {
      ...(endpoint ? { endpoint } : {}),
      region: process.env.STUDIO_S3_REGION ?? "us-east-1",
      ...(accessKeyId ? { accessKeyId } : {}),
      ...(secretAccessKey ? { secretAccessKey } : {}),
      forcePathStyle: process.env.STUDIO_S3_FORCE_PATH_STYLE !== "false",
    },
  };
}

export function resolveSqliteFilename(databaseUrl = studioEnv().databaseUrl) {
  if (databaseUrl === ":memory:") return databaseUrl;
  if (databaseUrl.startsWith("file:")) return resolve(/*turbopackIgnore: true*/ process.cwd(), databaseUrl.slice("file:".length));
  return resolve(/*turbopackIgnore: true*/ process.cwd(), databaseUrl);
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
