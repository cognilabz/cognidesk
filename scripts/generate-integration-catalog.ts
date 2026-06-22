import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
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

type ManifestSource = {
  absolutePath: string;
  relativePath: string;
  kind: IntegrationManifestSourceKind;
};

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const integrationsSrcDir = path.join(repoRoot, "packages/integrations/src");
const splitIntegrationsDir = path.join(repoRoot, "integrations");
const catalogDataPath = path.join(repoRoot, "packages/integration-catalog/src/catalog.generated.ts");
const runtimeLoaderPath = path.join(repoRoot, "packages/integrations/src/provider-catalog/runtime-loaders.generated.ts");
const providerPackagePrefix = "@cognidesk/integration-";
const knownImplementationStrategies = new Set<IntegrationImplementationStrategy>([
  "official-sdk",
  "maintained-library",
  "generated-support-slice",
  "direct-http-support-slice",
  "direct-support-slice",
  "support-workflow-adapter",
  "provider-api-subset",
  "generated-full-provider-api",
  "app-supplied-connector",
  "local-protocol",
]);

const legacyEntries: IntegrationCatalogEntry[] = [];
const splitEntries = await discoverSplitProviderEntries();
const splitIds = new Set(splitEntries.map((entry) => entry.id));

for (const reference of integrationProviderReferences) {
  if (splitIds.has(reference.id)) continue;

  const source = resolveManifestSource(reference);
  const manifest = await loadManifestExport(reference, source);
  if (!manifest) {
    throw new Error(`Provider integration '${reference.id}' did not export '${reference.manifestExport}' from ${source.relativePath}.`);
  }
  legacyEntries.push(toCatalogEntry(reference, manifest, source));
}

const entries = [
  ...legacyEntries,
  ...splitEntries,
];
assertUniqueCatalogEntryIds(entries);
entries.sort(compareEntries);

const runtimeReferences = integrationProviderReferences
  .filter((reference) => !splitIds.has(reference.id))
  .sort(compareReferences);

await mkdir(path.dirname(catalogDataPath), { recursive: true });
await writeFile(catalogDataPath, renderCatalogData(entries));
await writeFile(runtimeLoaderPath, renderRuntimeLoaders(runtimeReferences));

console.log(`Generated ${path.relative(repoRoot, catalogDataPath)} from ${entries.length} integration manifests (${splitEntries.length} split provider packages).`);
console.log(`Generated ${path.relative(repoRoot, runtimeLoaderPath)} from ${runtimeReferences.length} legacy runtime loaders.`);

function resolveManifestSource(reference: IntegrationProviderReference): ManifestSource {
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

async function discoverSplitProviderEntries(): Promise<IntegrationCatalogEntry[]> {
  const entries: IntegrationCatalogEntry[] = [];
  if (!existsSync(splitIntegrationsDir)) return entries;

  for (const category of await readDirectoryNames(splitIntegrationsDir)) {
    const categoryDir = path.join(splitIntegrationsDir, category);
    for (const provider of await readDirectoryNames(categoryDir)) {
      const packageDir = path.join(categoryDir, provider);
      const packageJsonPath = path.join(packageDir, "package.json");
      const manifestPath = path.join(packageDir, "src", "manifest.ts");
      if (!existsSync(packageJsonPath) || !existsSync(manifestPath)) continue;

      const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8")) as { name?: unknown; cognidesk?: unknown };
      const expectedPackageName = splitProviderPackageName(category, provider);
      if (!isSplitProviderPackage(packageJson)) {
        throw new Error(`Split provider package ${path.relative(repoRoot, packageDir)} must use the ${expectedPackageName} package name and provider-package metadata.`);
      }

      if (packageJson.name !== expectedPackageName) {
        throw new Error(`Split provider package ${path.relative(repoRoot, packageDir)} must be named '${expectedPackageName}', not '${packageJson.name}'.`);
      }

      const source: ManifestSource = {
        absolutePath: manifestPath,
        relativePath: path.relative(repoRoot, manifestPath).replace(/\\/g, "/"),
        kind: "manifest-only",
      };
      const module = await import(pathToFileURL(source.absolutePath).href) as Record<string, unknown>;
      const manifestEntry = Object.entries(module).find(([, value]) => isProviderManifest(value));
      if (!manifestEntry) {
        throw new Error(`Split provider package '${packageJson.name}' did not export a provider manifest from ${source.relativePath}.`);
      }

      const [manifestExport, manifest] = manifestEntry as [string, ProviderManifest];
      if (manifest.packageName !== expectedPackageName) {
        throw new Error(`Split provider manifest '${source.relativePath}' must declare packageName '${expectedPackageName}', not '${manifest.packageName}'.`);
      }
      if (manifest.category !== category || manifest.provider !== provider) {
        throw new Error(
          `Split provider manifest '${source.relativePath}' must declare category '${category}' and provider '${provider}', not '${manifest.category}' and '${manifest.provider}'.`,
        );
      }
      const reference: IntegrationProviderReference = {
        id: manifest.id,
        category: manifest.category,
        provider: manifest.provider,
        importPath: `${manifest.packageName}/manifest`,
        modulePath: `${path.relative(repoRoot, manifestPath).replace(/\\/g, "/").replace(/\.ts$/, ".js")}`,
        manifestExport,
      };

      entries.push(toCatalogEntry(reference, manifest, source));
    }
  }

  return entries.sort(compareEntries);
}

async function readDirectoryNames(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true }).catch((error: unknown) => {
    if (isNotFoundError(error)) return [];
    throw error;
  });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(compareText);
}

function isNotFoundError(error: unknown): boolean {
  return typeof error === "object"
    && error !== null
    && "code" in error
    && (error as { code?: unknown }).code === "ENOENT";
}

function isSplitProviderPackage(packageJson: { name?: unknown; cognidesk?: unknown }) {
  const name = stringFrom(packageJson.name);
  if (!name?.startsWith(providerPackagePrefix)) return false;

  const metadata = recordFrom(packageJson.cognidesk);
  return metadata?.providerPackage === true
    || metadata?.kind === "provider-package"
    || metadata?.release === "independent-provider"
    || /^@cognidesk\/integration-[a-z0-9]+(?:-[a-z0-9]+)+$/.test(name);
}

function splitProviderPackageName(category: string, provider: string): string {
  return `${providerPackagePrefix}${category}-${provider}`;
}

async function loadManifestExport(
  reference: IntegrationProviderReference,
  source: ManifestSource,
): Promise<ProviderManifest | undefined> {
  const module = await import(pathToFileURL(source.absolutePath).href) as Record<string, unknown>;
  return module[reference.manifestExport] as ProviderManifest | undefined;
}

function isProviderManifest(value: unknown): value is ProviderManifest {
  const manifest = recordFrom(value);
  return Boolean(
    manifest
      && typeof manifest.id === "string"
      && typeof manifest.name === "string"
      && typeof manifest.packageName === "string"
      && typeof manifest.provider === "string"
      && typeof manifest.category === "string"
      && Array.isArray(manifest.capabilities)
      && Array.isArray(manifest.directions),
  );
}

function toCatalogEntry(
  reference: IntegrationProviderReference,
  manifest: ProviderManifest,
  source: ManifestSource,
): IntegrationCatalogEntry {
  const metadata = cloneJsonObject(manifest.metadata);
  const implementation = recordFrom(metadata?.implementation);
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
      strategy: implementationStrategy(manifest, implementation),
      sdkPackage: stringFrom(implementation?.sdkPackage) ?? stringFrom(metadata?.sdkPackage) ?? manifest.packageName,
      runtimePackage: stringFrom(implementation?.runtimePackage) ?? stringFrom(metadata?.runtimePackage) ?? runtimePackage(reference, manifest),
      providerModule: stringFrom(implementation?.providerModule) ?? reference.modulePath,
      manifestExport: reference.manifestExport,
      manifestSource: source.relativePath,
      manifestSourceKind: source.kind,
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

function runtimePackage(reference: IntegrationProviderReference, manifest: ProviderManifest): string {
  return reference.importPath.endsWith("/manifest") ? manifest.packageName : reference.importPath;
}

function implementationStrategy(
  manifest: ProviderManifest,
  implementation: Record<string, unknown> | undefined,
): IntegrationImplementationStrategy {
  const metadata = recordFrom(manifest.metadata);
  const declaredStrategy = stringFrom(implementation?.strategy)
    ?? stringFrom(metadata?.implementationStrategy)
    ?? stringFrom(metadata?.strategy);
  if (declaredStrategy && knownImplementationStrategies.has(declaredStrategy as IntegrationImplementationStrategy)) {
    return declaredStrategy as IntegrationImplementationStrategy;
  }
  if (manifest.coverage.scope === "full-provider-api") return "generated-full-provider-api";
  if (manifest.coverage.scope === "provider-api-subset") return "provider-api-subset";
  if (manifest.coverage.scope === "connector-required") return "app-supplied-connector";
  if (manifest.coverage.scope === "local-protocol") return "local-protocol";
  if (manifest.credentialRequirements.some((credential) => stringFrom(credential.id)?.includes("connector"))) {
    return "app-supplied-connector";
  }
  if (stringFrom(implementation?.sdkPackage) ?? stringFrom(metadata?.sdkPackage)) return "official-sdk";
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

function assertUniqueCatalogEntryIds(entries: readonly IntegrationCatalogEntry[]): void {
  const seen = new Map<string, string>();
  for (const entry of entries) {
    const previousSource = seen.get(entry.id);
    if (previousSource) {
      throw new Error(
        `Duplicate integration catalog id '${entry.id}' declared by ${previousSource} and ${entry.implementation.manifestSource}.`,
      );
    }
    seen.set(entry.id, entry.implementation.manifestSource);
  }
}

function compareReferences(left: Pick<IntegrationProviderReference, "category" | "provider" | "id">, right: Pick<IntegrationProviderReference, "category" | "provider" | "id">) {
  return compareText(left.category, right.category)
    || compareText(left.provider, right.provider)
    || compareText(left.id, right.id);
}

function compareText(left: string, right: string) {
  return left.localeCompare(right, "en", { sensitivity: "base", numeric: true });
}
