import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type {
  IntegrationAdapterCoverage,
  IntegrationCatalogCapability,
  IntegrationCatalogCategoryProfileAttachment,
  IntegrationCatalogCredentialRequirement,
  IntegrationCatalogEntry,
  IntegrationImplementationStrategy,
  IntegrationProviderReference,
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
  kind: "manifest-only";
};

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const splitIntegrationsDir = path.join(repoRoot, "integrations");
const catalogDataPath = path.join(repoRoot, "packages/integration-catalog/src/catalog.generated.ts");
const providerPackagePrefix = "@cognidesk/integration-";
const knownImplementationStrategies = new Set<IntegrationImplementationStrategy>([
  "official-sdk",
  "official-sdk-plus-support-slice",
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

const entries = await discoverSplitProviderEntries();
entries.sort(compareEntries);

await mkdir(path.dirname(catalogDataPath), { recursive: true });
await writeFile(catalogDataPath, renderCatalogData(entries));

console.log(`Generated ${path.relative(repoRoot, catalogDataPath)} from ${entries.length} split provider manifests.`);

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
      const reference: IntegrationProviderReference = {
        id: manifest.id,
        category: canonicalCategory(manifest.category),
        provider: manifest.provider,
        importPath: `${manifest.packageName}/manifest`,
        modulePath: `${path.relative(repoRoot, path.join(packageDir, "dist", "manifest.js")).replace(/\\/g, "/")}`,
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

function canonicalCategory(category: string): string {
  return category;
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
  normalizeAllowlistChecksum(reference, source, implementation);
  const coverage = cloneJson(manifest.coverage);
  const capabilities = (manifest.capabilities ?? []).map(toCatalogCapability);
  const credentialRequirements = (manifest.credentialRequirements ?? []).map(toCredentialRequirement);
  const requiredCredentialIds = credentialRequirements.filter((credential) => credential.required).map((credential) => credential.id);
  const optionalCredentialIds = credentialRequirements.filter((credential) => !credential.required).map((credential) => credential.id);
  const summary = firstNonEmpty(coverage.notes) ?? `${manifest.name} provider integration.`;
  const adapterCoverage = deriveAdapterCoverage(manifest);

  return {
    id: manifest.id,
    category: canonicalCategory(manifest.category),
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
      tags: [canonicalCategory(manifest.category), manifest.provider, manifest.trustLevel, coverage.scope],
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

function normalizeAllowlistChecksum(
  reference: IntegrationProviderReference,
  source: ManifestSource,
  implementation: Record<string, unknown> | undefined,
): void {
  const selectedOperations = implementation?.selectedOperations;
  if (!Array.isArray(selectedOperations)) return;

  const declaredAlgorithm = stringFrom(implementation.allowlistChecksumAlgorithm);
  const declaredChecksum = stringFrom(implementation.allowlistChecksum);
  if (!declaredAlgorithm && !declaredChecksum) return;

  if (declaredAlgorithm !== "sha256") {
    throw new Error(
      `Provider integration '${reference.id}' in ${source.relativePath} declares selectedOperations with unsupported allowlistChecksumAlgorithm '${declaredAlgorithm ?? "<missing>"}'.`,
    );
  }

  const computedChecksum = sha256Json(selectedOperations, `${reference.id} selectedOperations`);
  if (declaredChecksum && declaredChecksum !== computedChecksum) {
    throw new Error(
      `Provider integration '${reference.id}' in ${source.relativePath} has allowlistChecksum '${declaredChecksum}', expected '${computedChecksum}' from sha256(JSON.stringify(selectedOperations)).`,
    );
  }

  implementation.allowlistChecksum = computedChecksum;
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

function cloneJson<T extends JsonValue>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function cloneJsonObject(value: unknown): JsonObject | undefined {
  const record = recordFrom(value);
  if (!record) return undefined;
  return cloneJson(record as JsonObject);
}

function sha256Json(value: unknown, label: string): string {
  const serialized = JSON.stringify(value);
  if (serialized === undefined) {
    throw new Error(`${label} could not be serialized for checksum generation.`);
  }
  return createHash("sha256").update(serialized).digest("hex");
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
