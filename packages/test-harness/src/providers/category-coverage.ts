import { ProviderManifestSchema, type ProviderManifest, type ProviderManifestInput } from "@cognidesk/core";
import type {
  CategoryOperationDeclaration,
  CategoryOperationLevel,
  IntegrationCategoryProfile,
  ProviderCategoryCoverage,
  ProviderCategoryCoverageLevel,
  ProviderConformanceCheckResult,
} from "./types.js";
import { isRecord } from "./shared.js";

export function deriveProviderCategoryCoverage(input: {
  manifest: ProviderManifestInput;
  categoryProfiles?: IntegrationCategoryProfile[];
}): ProviderCategoryCoverage | null {
  const manifest = ProviderManifestSchema.parse(input.manifest);
  return deriveProviderCategoryCoverageForManifest(manifest, input.categoryProfiles ?? []);
}

export function checkCategoryProfileCoverage(
  manifest: ProviderManifest,
  profiles: IntegrationCategoryProfile[],
): ProviderConformanceCheckResult {
  const coverage = deriveProviderCategoryCoverageForManifest(manifest, profiles);
  if (!coverage) {
    return {
      id: "provider.category_profile_coverage",
      status: "skipped",
      message: "No Integration Category Profile is available for this provider manifest.",
    };
  }

  if (
    coverage.missingRequired.length > 0
    || coverage.unsupportedOperations.length > 0
    || coverage.invalidExtensions.length > 0
    || coverage.overstatedCoverage
  ) {
    return {
      id: "provider.category_profile_coverage",
      status: "failed",
      message: "Provider manifest does not satisfy its Integration Category Profile conformance requirements.",
      details: providerCategoryCoverageDetails(coverage),
    };
  }

  return {
    id: "provider.category_profile_coverage",
    status: "passed",
    message: `Provider satisfies required category operations with ${coverage.coverageLevel} category coverage.`,
    details: providerCategoryCoverageDetails(coverage),
  };
}

function deriveProviderCategoryCoverageForManifest(
  manifest: ProviderManifest,
  profiles: IntegrationCategoryProfile[],
): ProviderCategoryCoverage | null {
  const profile = selectCategoryProfile(manifest, profiles);
  if (!profile) return null;

  const profileOperations = (profile.operations ?? [])
    .map(normalizeCategoryOperationDeclaration)
    .filter((operation): operation is NormalizedCategoryOperation => Boolean(operation));
  const profileAliases = new Set(profileOperations.map((operation) => operation.alias));
  const manifestOperations = collectManifestOperations(manifest)
    .map(normalizeCategoryOperationDeclaration)
    .filter((operation): operation is NormalizedCategoryOperation => Boolean(operation));
  const manifestCapabilities = new Set(manifest.capabilities.map((capability) => capability.capability));
  const operationsByAlias = new Map<string, NormalizedCategoryOperation>();
  for (const operation of manifestOperations) {
    const existing = operationsByAlias.get(operation.alias);
    operationsByAlias.set(operation.alias, mergeCategoryOperations(existing, operation));
  }

  const missingRequired: string[] = [];
  const missingRecommended: string[] = [];
  const missingOptional: string[] = [];
  const unsupportedOperations: Array<{ alias: string; capability: string }> = [];

  for (const profileOperation of profileOperations) {
    if (profileOperation.level === "extension") continue;
    const implementation = operationsByAlias.get(profileOperation.alias);
    const capability = implementation?.capability ?? profileOperation.capability;
    const implemented = Boolean(implementation && capability && manifestCapabilities.has(capability));
    if (implementation && capability && !manifestCapabilities.has(capability)) {
      unsupportedOperations.push({ alias: profileOperation.alias, capability });
    }
    if (implemented) continue;
    if (profileOperation.level === "required") {
      missingRequired.push(profileOperation.alias);
    } else if (profileOperation.level === "recommended") {
      missingRecommended.push(profileOperation.alias);
    } else {
      missingOptional.push(profileOperation.alias);
    }
  }

  const invalidExtensions = manifestOperations
    .filter((operation) => operation.extension || operation.level === "extension" || !profileAliases.has(operation.alias))
    .map((operation) => validateExtensionOperation(operation, manifestCapabilities, profileAliases))
    .filter((result): result is { alias: string; missing: string[] } => result.missing.length > 0);

  const requiredCount = profileOperations.filter((operation) => operation.level === "required").length;
  const recommendedCount = profileOperations.filter((operation) => operation.level === "recommended").length;
  const optionalCount = profileOperations.filter((operation) => operation.level === "optional").length;
  const extensionCount = manifestOperations.filter((operation) =>
    operation.extension || operation.level === "extension" || !profileAliases.has(operation.alias)
  ).length;
  const implementedAliases = [...operationsByAlias.keys()].sort((a, b) => a.localeCompare(b));
  const coverageLevel = missingRequired.length > 0
    ? "none"
    : missingRecommended.length > 0
      ? "partial"
      : missingOptional.length > 0
        ? "standard"
        : "full";
  const claimedCoverageLevel = readClaimedCategoryCoverageLevel(manifest);
  const coverage: ProviderCategoryCoverage = {
    category: profile.category,
    coverageLevel,
    implementedOperations: implementedAliases,
    missingRequired,
    missingRecommended,
    missingOptional,
    unsupportedOperations,
    invalidExtensions,
    operationCounts: {
      required: requiredCount,
      recommended: recommendedCount,
      optional: optionalCount,
      extension: extensionCount,
      implemented: implementedAliases.length,
    },
  };
  if (profile.id) coverage.profileId = profile.id;
  if (claimedCoverageLevel) {
    coverage.claimedCoverageLevel = claimedCoverageLevel;
    coverage.overstatedCoverage = coverageRank(claimedCoverageLevel) > coverageRank(coverageLevel);
  }
  return coverage;
}

interface NormalizedCategoryOperation extends CategoryOperationDeclaration {
  alias: string;
  level: CategoryOperationLevel;
}

function providerCategoryCoverageDetails(coverage: ProviderCategoryCoverage) {
  return {
    ...(coverage.profileId ? { profileId: coverage.profileId } : {}),
    category: coverage.category,
    coverageLevel: coverage.coverageLevel,
    ...(coverage.claimedCoverageLevel ? { claimedCoverageLevel: coverage.claimedCoverageLevel } : {}),
    ...(coverage.overstatedCoverage ? { overstatedCoverage: true } : {}),
    operationCounts: coverage.operationCounts,
    implementedOperations: coverage.implementedOperations,
    missingRequired: coverage.missingRequired,
    missingRecommended: coverage.missingRecommended,
    missingOptional: coverage.missingOptional,
    unsupportedOperations: coverage.unsupportedOperations,
    invalidExtensions: coverage.invalidExtensions,
  };
}

function selectCategoryProfile(
  manifest: ProviderManifest,
  profiles: IntegrationCategoryProfile[],
): IntegrationCategoryProfile | undefined {
  const requestedProfileId = stringFrom(manifest.metadata?.categoryProfileId)
    ?? stringFrom(manifest.metadata?.integrationCategoryProfileId);
  const candidates = [
    ...profiles,
    ...readManifestCategoryProfiles(manifest),
  ];
  if (requestedProfileId) {
    const selected = candidates.find((profile) => profile.id === requestedProfileId);
    if (selected) return selected;
  }
  return candidates.find((profile) => profile.category === manifest.category);
}

function readManifestCategoryProfiles(manifest: ProviderManifest): IntegrationCategoryProfile[] {
  return [
    ...readCategoryProfileCandidate(manifest.metadata?.categoryProfile),
    ...readCategoryProfileCandidate(manifest.metadata?.integrationCategoryProfile),
    ...readCategoryProfileCandidate(manifest.metadata?.categoryProfiles),
    ...readCategoryProfileCandidate(manifest.metadata?.integrationCategoryProfiles),
  ];
}

function readCategoryProfileCandidate(value: unknown): IntegrationCategoryProfile[] {
  if (Array.isArray(value)) return value.flatMap(readCategoryProfileCandidate);
  if (!isRecord(value)) return [];
  const category = stringFrom(value.category);
  const operations = readOperationArray(value.operations)
    ?? readOperationArray(value.operationCatalog)
    ?? (isRecord(value.operationCatalog) ? readOperationArray(value.operationCatalog.operations) : undefined);
  if (!category || !operations) return [];
  const profile: IntegrationCategoryProfile = {
    category,
    operations,
  };
  const id = stringFrom(value.id);
  if (id) profile.id = id;
  if (isRecord(value.metadata)) profile.metadata = value.metadata;
  return [profile];
}

function collectManifestOperations(manifest: ProviderManifest): CategoryOperationDeclaration[] {
  const operations: CategoryOperationDeclaration[] = [];
  collectOperationsFromUnknown(manifest.operations, operations);
  collectOperationsFromUnknown(manifest.metadata?.operations, operations);
  collectOperationsFromUnknown(manifest.metadata?.categoryOperations, operations);
  collectOperationsFromUnknown(manifest.metadata?.operationAliases, operations);
  collectOperationsFromUnknown(manifest.metadata?.providerOperations, operations);
  if (isRecord(manifest.metadata?.connectionBacked)) {
    collectOperationsFromUnknown(manifest.metadata.connectionBacked.operationAliases, operations);
  }
  for (const capability of manifest.capabilities) {
    collectOperationsFromUnknown(capability.metadata?.operations, operations, capability.capability);
    collectOperationsFromUnknown(capability.metadata?.categoryOperations, operations, capability.capability);
    collectOperationsFromUnknown(capability.metadata?.operationAliases, operations, capability.capability);
  }
  return operations;
}

function collectOperationsFromUnknown(
  value: unknown,
  operations: CategoryOperationDeclaration[],
  defaultCapability?: string,
) {
  const parsed = readOperationArray(value, defaultCapability);
  if (parsed) operations.push(...parsed);
}

function readOperationArray(value: unknown, defaultCapability?: string): CategoryOperationDeclaration[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.flatMap((candidate) => readOperationCandidate(candidate, defaultCapability));
}

function readOperationCandidate(value: unknown, defaultCapability?: string): CategoryOperationDeclaration[] {
  if (typeof value === "string") {
    return [{
      alias: value,
      ...(defaultCapability ? { capability: defaultCapability } : {}),
    }];
  }
  if (!isRecord(value)) return [];
  const alias = stringFrom(value.alias)
    ?? stringFrom(value.operationAlias)
    ?? stringFrom(value.id)
    ?? stringFrom(value.name);
  if (!alias) return [];
  const level = operationLevelFrom(value.level);
  const capability = stringFrom(value.capability) ?? defaultCapability;
  const providerObject = stringFrom(value.providerObject);
  const providerObjects = readProviderObjects(value.providerObjects);
  const audiences = readStringArray(value.audiences);
  const requiredPolicyIds = readStringArray(value.requiredPolicyIds);
  const inputSchemaName = stringFrom(value.inputSchemaName);
  const inputSchemaRef = stringFrom(value.inputSchemaRef);
  const outputSchemaName = stringFrom(value.outputSchemaName);
  const outputSchemaRef = stringFrom(value.outputSchemaRef);
  const operation: CategoryOperationDeclaration = {
    alias,
    ...(level ? { level } : {}),
    ...(capability ? { capability } : {}),
    ...(providerObject ? { providerObject } : {}),
    ...(providerObjects ? { providerObjects } : {}),
    ...(audiences ? { audiences } : {}),
    ...(typeof value.sideEffect === "boolean" ? { sideEffect: value.sideEffect } : {}),
    ...(typeof value.externallyVisible === "boolean" ? { externallyVisible: value.externallyVisible } : {}),
    ...(typeof value.exposesSensitiveData === "boolean" ? { exposesSensitiveData: value.exposesSensitiveData } : {}),
    ...(typeof value.changesWorkflow === "boolean" ? { changesWorkflow: value.changesWorkflow } : {}),
    ...(requiredPolicyIds ? { requiredPolicyIds } : {}),
    ...(inputSchemaName ? { inputSchemaName } : {}),
    ...(value.inputSchema !== undefined ? { inputSchema: value.inputSchema } : {}),
    ...(inputSchemaRef ? { inputSchemaRef } : {}),
    ...(outputSchemaName ? { outputSchemaName } : {}),
    ...(value.outputSchema !== undefined ? { outputSchema: value.outputSchema } : {}),
    ...(outputSchemaRef ? { outputSchemaRef } : {}),
    ...(typeof value.extension === "boolean" ? { extension: value.extension } : {}),
    ...(isRecord(value.metadata) ? { metadata: value.metadata } : {}),
  };
  return [operation];
}

function normalizeCategoryOperationDeclaration(
  operation: CategoryOperationDeclaration,
): NormalizedCategoryOperation | undefined {
  if (!operation.alias) return undefined;
  return {
    ...operation,
    level: operation.level ?? (operation.extension ? "extension" : "optional"),
  };
}

function mergeCategoryOperations(
  existing: NormalizedCategoryOperation | undefined,
  next: NormalizedCategoryOperation,
): NormalizedCategoryOperation {
  if (!existing) return next;
  return {
    ...existing,
    ...next,
    level: next.level ?? existing.level,
    ...((existing.extension || next.extension) ? { extension: true } : {}),
    metadata: {
      ...(existing.metadata ?? {}),
      ...(next.metadata ?? {}),
    },
  };
}

function validateExtensionOperation(
  operation: NormalizedCategoryOperation,
  manifestCapabilities: Set<string>,
  profileAliases: Set<string>,
): { alias: string; missing: string[] } {
  const missing: string[] = [];
  if (!operation.extension && operation.level !== "extension" && !profileAliases.has(operation.alias)) {
    missing.push("extension");
  }
  if (!operation.capability) {
    missing.push("capability");
  } else if (!manifestCapabilities.has(operation.capability)) {
    missing.push("manifestCapability");
  }
  if (!hasInputSchemaMetadata(operation)) missing.push("inputSchema");
  if (!hasOutputSchemaMetadata(operation)) missing.push("outputSchema");
  if (!hasPolicyMetadata(operation)) missing.push("policy");
  return { alias: operation.alias, missing };
}

function hasInputSchemaMetadata(operation: NormalizedCategoryOperation) {
  return operation.inputSchema !== undefined
    || Boolean(operation.inputSchemaName)
    || Boolean(operation.inputSchemaRef)
    || Boolean(operation.metadata?.inputSchemaName)
    || Boolean(operation.metadata?.inputSchema)
    || Boolean(operation.metadata?.inputSchemaRef);
}

function hasOutputSchemaMetadata(operation: NormalizedCategoryOperation) {
  return operation.outputSchema !== undefined
    || Boolean(operation.outputSchemaName)
    || Boolean(operation.outputSchemaRef)
    || Boolean(operation.metadata?.outputSchemaName)
    || Boolean(operation.metadata?.outputSchema)
    || Boolean(operation.metadata?.outputSchemaRef);
}

function hasPolicyMetadata(operation: NormalizedCategoryOperation) {
  return isRecord(operation.metadata?.policy)
    || (
      typeof operation.sideEffect === "boolean"
      && typeof operation.exposesSensitiveData === "boolean"
      && typeof operation.changesWorkflow === "boolean"
    );
}

function readClaimedCategoryCoverageLevel(manifest: ProviderManifest): ProviderCategoryCoverageLevel | undefined {
  return coverageLevelFrom(manifest.metadata?.categoryCoverageLevel)
    ?? coverageLevelFrom(manifest.metadata?.providerCapabilityCoverage)
    ?? (isRecord(manifest.metadata?.categoryProfile) ? coverageLevelFrom(manifest.metadata.categoryProfile.coverageLevel) : undefined)
    ?? (isRecord(manifest.metadata?.integrationCategoryProfile) ? coverageLevelFrom(manifest.metadata.integrationCategoryProfile.coverageLevel) : undefined);
}

function coverageRank(level: ProviderCategoryCoverageLevel) {
  switch (level) {
    case "none": return 0;
    case "partial": return 1;
    case "standard": return 2;
    case "full": return 3;
  }
}

function coverageLevelFrom(value: unknown): ProviderCategoryCoverageLevel | undefined {
  if (value === "none" || value === "partial" || value === "standard" || value === "full") return value;
  return undefined;
}

function operationLevelFrom(value: unknown): CategoryOperationLevel | undefined {
  if (value === "required" || value === "recommended" || value === "optional" || value === "extension") return value;
  return undefined;
}

function stringFrom(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function readStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const strings = value.filter((candidate): candidate is string => typeof candidate === "string" && candidate.length > 0);
  return strings.length > 0 ? strings : undefined;
}

function readProviderObjects(value: unknown): Array<{ kind: string; label?: string }> | undefined {
  if (!Array.isArray(value)) return undefined;
  const providerObjects: Array<{ kind: string; label?: string }> = value.flatMap((candidate) => {
    if (!isRecord(candidate)) return [];
    const kind = stringFrom(candidate.kind);
    if (!kind) return [];
    const label = stringFrom(candidate.label);
    return [{
      kind,
      ...(label ? { label } : {}),
    }];
  });
  return providerObjects.length > 0 ? providerObjects : undefined;
}
