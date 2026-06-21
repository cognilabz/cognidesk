import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { integrationProviderReferences } from "../packages/integrations/src/provider-catalog/references.js";
import type { IntegrationProviderReference } from "../packages/integrations/src/provider-catalog/types.js";
import type {
  IntegrationAdapterCoverage,
  IntegrationCatalogCapability,
  IntegrationCatalogCategoryProfileAttachment,
  IntegrationCatalogCredentialRequirement,
  IntegrationCatalogEntry,
  IntegrationImplementationStrategy,
  IntegrationManifestSourceKind,
  IntegrationReadinessMode,
  JsonObject,
  JsonValue,
} from "../packages/integration-catalog/src/types.js";

type ProviderManifest = {
  id: string;
  name: string;
  packageName: string;
  provider: string;
  category: string;
  trustLevel: string;
  directions: string[];
  channelAudiences: string[];
  capabilities: Array<Record<string, unknown>>;
  credentialRequirements: Array<Record<string, unknown>>;
  coverage: {
    scope: string;
    notes: string[];
    evidence: Array<{ label: string; url?: string }>;
  };
  privacyNotes: string[];
  limitations: string[];
  maintainers: Array<{ name: string; type: string; url?: string }>;
  metadata?: Record<string, unknown>;
};

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const integrationsSrcDir = path.join(repoRoot, "packages/integrations/src");
const catalogDataPath = path.join(repoRoot, "packages/integration-catalog/src/catalog.generated.ts");
const runtimeLoaderPath = path.join(repoRoot, "packages/integrations/src/provider-catalog/runtime-loaders.generated.ts");

const entries: IntegrationCatalogEntry[] = [];

for (const reference of integrationProviderReferences) {
  const source = resolveManifestSource(reference);
  const module = await import(pathToFileURL(source.absolutePath).href) as Record<string, unknown>;
  const manifest = module[reference.manifestExport] as ProviderManifest | undefined;
  if (!manifest) {
    throw new Error(`Provider integration '${reference.id}' did not export '${reference.manifestExport}' from ${source.relativePath}.`);
  }
  entries.push(toCatalogEntry(reference, manifest, source.relativePath, source.kind));
}

entries.sort(compareEntries);

await mkdir(path.dirname(catalogDataPath), { recursive: true });
await writeFile(catalogDataPath, renderCatalogData(entries));
await writeFile(runtimeLoaderPath, renderRuntimeLoaders([...integrationProviderReferences].sort(compareReferences)));

console.log(`Generated ${path.relative(repoRoot, catalogDataPath)} from ${entries.length} integration manifests.`);
console.log(`Generated ${path.relative(repoRoot, runtimeLoaderPath)} from ${integrationProviderReferences.length} explicit runtime loaders.`);

function resolveManifestSource(reference: IntegrationProviderReference): {
  absolutePath: string;
  relativePath: string;
  kind: IntegrationManifestSourceKind;
} {
  const moduleSource = reference.modulePath.replace(/^\.\//, "").replace(/\.js$/, ".ts");
  const manifestSource = moduleSource.replace(/\/index\.ts$/, "/manifest.ts");
  const manifestPath = path.join(integrationsSrcDir, manifestSource);
  if (existsSync(manifestPath)) {
    return {
      absolutePath: manifestPath,
      relativePath: `packages/integrations/src/${manifestSource}`,
      kind: "manifest-only",
    };
  }
  return {
    absolutePath: path.join(integrationsSrcDir, moduleSource),
    relativePath: `packages/integrations/src/${moduleSource}`,
    kind: "runtime-module-fallback",
  };
}

function toCatalogEntry(
  reference: IntegrationProviderReference,
  manifest: ProviderManifest,
  manifestSource: string,
  manifestSourceKind: IntegrationManifestSourceKind,
): IntegrationCatalogEntry {
  const metadata = cloneJsonObject(manifest.metadata);
  const coverage = cloneJson(manifest.coverage);
  const capabilities = (manifest.capabilities ?? []).map(toCatalogCapability);
  const credentialRequirements = (manifest.credentialRequirements ?? []).map(toCredentialRequirement);
  const requiredCredentialIds = credentialRequirements.filter((credential) => credential.required).map((credential) => credential.id);
  const optionalCredentialIds = credentialRequirements.filter((credential) => !credential.required).map((credential) => credential.id);
  const summary = firstNonEmpty(coverage.notes) ?? `${manifest.name} provider integration.`;
  const adapterCoverage = deriveAdapterCoverage(manifest);

  return {
    id: manifest.id,
    category: manifest.category,
    provider: manifest.provider,
    importPath: reference.importPath,
    modulePath: reference.modulePath,
    manifestExport: reference.manifestExport,
    name: manifest.name,
    packageName: manifest.packageName,
    trustLevel: manifest.trustLevel,
    directions: [...manifest.directions],
    channelAudiences: [...manifest.channelAudiences],
    display: {
      label: manifest.name,
      summary,
      tags: [manifest.category, manifest.provider, manifest.trustLevel, coverage.scope],
    },
    capabilities,
    coverage,
    adapterCoverage,
    implementation: {
      strategy: implementationStrategy(manifest),
      sdkPackage: stringFrom(metadata?.sdkPackage) ?? manifest.packageName,
      runtimePackage: reference.importPath,
      providerModule: reference.modulePath,
      manifestExport: reference.manifestExport,
      manifestSource,
      manifestSourceKind,
      documentationPath: documentationPath(manifest, reference),
    },
    readiness: {
      mode: readinessMode(manifest, credentialRequirements),
      requiresCredentials: credentialRequirements.some((credential) => credential.required),
      requiredCredentialIds,
      optionalCredentialIds,
      credentialRequirements,
    },
    privacyNotes: [...(manifest.privacyNotes ?? [])],
    limitations: [...(manifest.limitations ?? [])],
    maintainers: (manifest.maintainers ?? []).map((maintainer) => ({
      name: maintainer.name,
      type: maintainer.type,
      ...(maintainer.url ? { url: maintainer.url } : {}),
    })),
    ...(metadata ? { metadata } : {}),
  };
}

function toCatalogCapability(capability: Record<string, unknown>): IntegrationCatalogCapability {
  return {
    capability: stringFrom(capability.capability) ?? "unknown",
    ...(stringFrom(capability.label) ? { label: stringFrom(capability.label) } : {}),
    ...(stringFrom(capability.description) ? { description: stringFrom(capability.description) } : {}),
    audiences: stringArray(capability.audiences),
    providerObjects: objectArray(capability.providerObjects).map((providerObject) => ({
      kind: stringFrom(providerObject.kind) ?? "unknown",
      ...(stringFrom(providerObject.label) ? { label: stringFrom(providerObject.label) } : {}),
      ...(stringFrom(providerObject.description) ? { description: stringFrom(providerObject.description) } : {}),
      ...(stringFrom(providerObject.schemaName) ? { schemaName: stringFrom(providerObject.schemaName) } : {}),
      ...(cloneJsonObject(providerObject.metadata) ? { metadata: cloneJsonObject(providerObject.metadata) } : {}),
    })),
    requiresCredential: booleanFrom(capability.requiresCredential),
    sideEffect: booleanFrom(capability.sideEffect),
    exposesSensitiveData: booleanFrom(capability.exposesSensitiveData),
    changesWorkflow: booleanFrom(capability.changesWorkflow),
    extension: booleanFrom(capability.extension),
    ...(cloneJsonObject(capability.metadata) ? { metadata: cloneJsonObject(capability.metadata) } : {}),
  };
}

function toCredentialRequirement(credential: Record<string, unknown>): IntegrationCatalogCredentialRequirement {
  return {
    id: stringFrom(credential.id) ?? "unknown",
    ...(stringFrom(credential.label) ? { label: stringFrom(credential.label) } : {}),
    ...(stringFrom(credential.description) ? { description: stringFrom(credential.description) } : {}),
    scopes: stringArray(credential.scopes),
    required: credential.required !== false,
    ...(cloneJsonObject(credential.metadata) ? { metadata: cloneJsonObject(credential.metadata) } : {}),
  };
}

function deriveAdapterCoverage(manifest: ProviderManifest): IntegrationAdapterCoverage {
  const categoryProfile = readCategoryProfile(manifest.metadata);
  return {
    scope: manifest.coverage.scope,
    level: categoryProfile?.coverage ?? coverageLevelFromScope(manifest.coverage.scope),
    conformant: categoryProfile?.conformant ?? null,
    ...(categoryProfile ? { categoryProfile } : {}),
  };
}

function readCategoryProfile(metadata: Record<string, unknown> | undefined): IntegrationCatalogCategoryProfileAttachment | undefined {
  const candidate = recordFrom(metadata?.categoryProfile) ?? recordFrom(metadata?.integrationCategoryProfile);
  if (!candidate) return undefined;
  const id = stringFrom(candidate.id);
  const coverage = stringFrom(candidate.coverage);
  if (!id || !coverage) return undefined;
  return {
    id,
    coverage,
    conformant: booleanFrom(candidate.conformant),
    matchedOperations: stringArray(candidate.matchedOperations),
    missingRequiredOperations: stringArray(candidate.missingRequiredOperations),
    missingRecommendedOperations: stringArray(candidate.missingRecommendedOperations),
    missingOptionalOperations: stringArray(candidate.missingOptionalOperations),
    extensionOperations: stringArray(candidate.extensionOperations),
  };
}

function coverageLevelFromScope(scope: string) {
  if (scope === "full-provider-api") return "full";
  if (scope === "provider-api-subset") return "standard";
  return "partial";
}

function implementationStrategy(manifest: ProviderManifest): IntegrationImplementationStrategy {
  if (manifest.coverage.scope === "full-provider-api") return "generated-full-provider-api";
  if (manifest.coverage.scope === "provider-api-subset") return "provider-api-subset";
  if (manifest.coverage.scope === "connector-required") return "app-supplied-connector";
  if (manifest.coverage.scope === "local-protocol") return "local-protocol";
  if (manifest.credentialRequirements.some((credential) => stringFrom(credential.id)?.includes("connector"))) {
    return "app-supplied-connector";
  }
  return "support-workflow-adapter";
}

function readinessMode(
  manifest: ProviderManifest,
  credentialRequirements: readonly IntegrationCatalogCredentialRequirement[],
): IntegrationReadinessMode {
  const metadataText = JSON.stringify(manifest.metadata ?? {}).toLowerCase();
  const capabilityText = JSON.stringify(manifest.capabilities ?? []).toLowerCase();
  if (
    manifest.coverage.scope === "connector-required"
    || credentialRequirements.some((credential) => credential.id.includes("connector"))
  ) {
    return "app-supplied-connector";
  }
  if (metadataText.includes("readiness") || capabilityText.includes("readiness")) return "credential-and-live-check";
  if (credentialRequirements.length > 0) return "credential-configuration";
  return "not-required";
}

function documentationPath(manifest: ProviderManifest, reference: IntegrationProviderReference): string {
  const metadata = manifest.metadata ?? {};
  const docs = metadata.docs;
  if (typeof docs === "string" && docs.length > 0) return docs;
  if (Array.isArray(docs)) {
    const doc = docs.find((candidate): candidate is string => typeof candidate === "string" && candidate.length > 0);
    if (doc) return doc;
  }
  const evidence = manifest.coverage.evidence.find((entry) => typeof entry.url === "string" && entry.url.length > 0);
  if (evidence?.url) return evidence.url;
  return `website/guides/provider-integrations-catalog.md#${slug(reference.id)}`;
}

function renderCatalogData(catalogEntries: readonly IntegrationCatalogEntry[]) {
  return [
    "import type { IntegrationCatalogEntry } from \"./types.js\";",
    "",
    "// Generated by scripts/generate-integration-catalog.ts. Do not edit by hand.",
    `export const integrationCatalogEntries: readonly IntegrationCatalogEntry[] = ${JSON.stringify(catalogEntries, null, 2)};`,
    "",
  ].join("\n");
}

function renderRuntimeLoaders(references: readonly IntegrationProviderReference[]) {
  const loaders = references.map((reference) => {
    const importPath = `../${reference.modulePath.replace(/^\.\//, "")}`;
    return `  { id: ${JSON.stringify(reference.id)}, load: () => import(${JSON.stringify(importPath)}) },`;
  });
  return [
    "import type { IntegrationProviderRuntimeLoaderRegistration } from \"./loader.js\";",
    "",
    "// Generated by scripts/generate-integration-catalog.ts. Do not edit by hand.",
    "export const integrationProviderRuntimeLoaders = [",
    ...loaders,
    "] as const satisfies readonly IntegrationProviderRuntimeLoaderRegistration[];",
    "",
  ].join("\n");
}

function cloneJson<T extends JsonValue>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function cloneJsonObject(value: unknown): JsonObject | undefined {
  const record = recordFrom(value);
  if (!record) return undefined;
  return cloneJson(record as JsonObject);
}

function recordFrom(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : undefined;
}

function objectArray(value: unknown): Array<Record<string, unknown>> {
  return Array.isArray(value) ? value.flatMap((item) => recordFrom(item) ? [recordFrom(item)!] : []) : [];
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function stringFrom(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function booleanFrom(value: unknown): boolean {
  return value === true;
}

function firstNonEmpty(values: readonly string[]) {
  return values.find((value) => value.trim().length > 0);
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function compareEntries(left: IntegrationCatalogEntry, right: IntegrationCatalogEntry) {
  return compareReferences(left, right);
}

function compareReferences(left: Pick<IntegrationProviderReference, "category" | "provider" | "id">, right: Pick<IntegrationProviderReference, "category" | "provider" | "id">) {
  return compareText(left.category, right.category)
    || compareText(left.provider, right.provider)
    || compareText(left.id, right.id);
}

function compareText(left: string, right: string) {
  return left.localeCompare(right, "en", { sensitivity: "base", numeric: true });
}
