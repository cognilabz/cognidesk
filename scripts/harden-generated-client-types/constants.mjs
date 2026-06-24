import path from "node:path";

export const repoRoot = process.cwd();
export const packagesDir = path.join(repoRoot, "packages");
export const integrationsDir = path.join(repoRoot, "integrations");
export const operationsFileSuffix = "-operations.generated.ts";
export const clientFileSuffix = "-client.generated.ts";
export const schemaFileSuffix = "-schema-types.generated.ts";
export const hardenedBlockStart = "// Hardened literal operation keys for generated SDK typing.";
export const hardenedBlockEnd = "// End hardened literal operation keys.";
export const schemaFetchTimeoutMs = Number(process.env.COGNIDESK_GENERATED_SCHEMA_FETCH_TIMEOUT_MS ?? "15000");
