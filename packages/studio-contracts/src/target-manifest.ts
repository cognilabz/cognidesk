import { z } from "zod";

export const StudioTargetManifestSchema = z.object({
  version: z.literal(1),
  target: z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    environment: z.string().default("local"),
  }),
  runtime: z.object({
    baseUrl: z.string().url(),
    apiBasePath: z.string().default("/api"),
    studioAdapterBasePath: z.string().default("/api/studio"),
    serviceAuthHeader: z.string().default("authorization"),
  }),
  telemetry: z.object({
    sources: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      kind: z.enum(["prometheus", "tempo", "otel-http"]),
      baseUrl: z.string().url(),
      headers: z.record(z.string(), z.string()).optional(),
    })).default([]),
  }).default({ sources: [] }),
  source: z.object({
    provider: z.literal("github"),
    owner: z.string().min(1),
    repo: z.string().min(1),
    defaultBranch: z.string().default("main"),
    root: z.string().default("."),
  }),
  code: z.object({
    allowedPaths: z.array(z.string()).default([]),
    validationCommands: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      command: z.string().min(1),
      workingDirectory: z.string().default("."),
    })).default([]),
  }).default({ allowedPaths: [], validationCommands: [] }),
  dashboards: z.object({
    artifactBucket: z.string().min(1),
    artifactPrefix: z.string().default("studio/dashboards"),
  }),
  operator: z.object({
    instructionsPath: z.string().default("AGENTS.md"),
    skillPacks: z.array(z.string()).default(["@cognidesk/studio-operator-skills"]),
    models: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      provider: z.string().min(1),
      model: z.string().min(1),
      default: z.boolean().optional(),
    })).default([]),
    allowedCredentialGrants: z.array(z.enum([
      "github",
      "package_registry",
      "telemetry",
      "artifact_store",
      "studio_adapter",
      "backend_service",
    ])).default([]),
  }).default({
    instructionsPath: "AGENTS.md",
    skillPacks: ["@cognidesk/studio-operator-skills"],
    models: [],
    allowedCredentialGrants: [],
  }),
});
export type StudioTargetManifest = z.infer<typeof StudioTargetManifestSchema>;
export type StudioTargetManifestInput = z.input<typeof StudioTargetManifestSchema>;

export const StudioTargetOverlaySchema = z.object({
  version: z.literal(1).optional(),
  target: z.object({
    id: z.string().min(1).optional(),
    name: z.string().min(1).optional(),
    environment: z.string().optional(),
  }).optional(),
  runtime: z.object({
    baseUrl: z.string().url().optional(),
    apiBasePath: z.string().optional(),
    studioAdapterBasePath: z.string().optional(),
    serviceAuthHeader: z.string().optional(),
  }).optional(),
  telemetry: z.object({
    sources: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      kind: z.enum(["prometheus", "tempo", "otel-http"]),
      baseUrl: z.string().url(),
      headers: z.record(z.string(), z.string()).optional(),
    })).optional(),
  }).optional(),
  source: z.object({
    provider: z.literal("github").optional(),
    owner: z.string().min(1).optional(),
    repo: z.string().min(1).optional(),
    defaultBranch: z.string().optional(),
    root: z.string().optional(),
  }).optional(),
  code: z.object({
    allowedPaths: z.array(z.string()).optional(),
    validationCommands: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      command: z.string().min(1),
      workingDirectory: z.string().default("."),
    })).optional(),
  }).optional(),
  dashboards: z.object({
    artifactBucket: z.string().min(1).optional(),
    artifactPrefix: z.string().optional(),
  }).optional(),
  operator: z.object({
    instructionsPath: z.string().optional(),
    skillPacks: z.array(z.string()).optional(),
    models: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      provider: z.string().min(1),
      model: z.string().min(1),
      default: z.boolean().optional(),
    })).optional(),
    allowedCredentialGrants: z.array(z.enum([
      "github",
      "package_registry",
      "telemetry",
      "artifact_store",
      "studio_adapter",
      "backend_service",
    ])).optional(),
  }).optional(),
});
export type StudioTargetOverlay = z.infer<typeof StudioTargetOverlaySchema>;

export function mergeStudioTargetManifest(
  base: StudioTargetManifestInput,
  overlay: StudioTargetOverlay = {},
): StudioTargetManifest {
  return StudioTargetManifestSchema.parse(deepMerge(base as Record<string, unknown>, overlay as Record<string, unknown>));
}

function deepMerge(base: Record<string, unknown>, overlay: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === undefined) continue;
    const baseValue = result[key];
    result[key] = isPlainRecord(baseValue) && isPlainRecord(value)
      ? deepMerge(baseValue, value)
      : value;
  }
  return result;
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
