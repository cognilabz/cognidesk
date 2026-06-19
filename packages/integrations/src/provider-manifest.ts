import {
  defineProviderPackage,
  deriveProviderCapabilityCoverage,
  type CategoryOperationDeclaration,
  type ProviderManifest,
  type ProviderManifestInput,
  type ProviderOperationDeclarationInput,
} from "@cognidesk/core";
import {
  getIntegrationCategoryProfile,
  type IntegrationCategoryProfile,
} from "./category-profiles.js";

export interface IntegrationProviderProfileAttachment {
  id: string;
  coverage: "partial" | "standard" | "full";
  conformant: boolean;
  matchedOperations: string[];
  missingRequiredOperations: string[];
  missingRecommendedOperations: string[];
  missingOptionalOperations: string[];
  extensionOperations: string[];
}

export function defineIntegrationProviderPackage(manifest: ProviderManifestInput): ProviderManifest {
  const profile = getIntegrationCategoryProfile(manifest.category);
  if (!profile) return defineProviderPackage(manifest);

  const withOperations = attachCategoryProfileOperations(manifest, profile);
  const coverage = deriveProviderCapabilityCoverage({
    profile,
    manifest: withOperations,
  });
  return defineProviderPackage({
    ...withOperations,
    metadata: {
      ...(isRecord(withOperations.metadata) ? withOperations.metadata : {}),
      categoryProfileId: profile.id,
      integrationCategoryProfileId: profile.id,
      categoryProfile: {
        id: profile.id,
        coverage: coverage.coverage,
        conformant: coverage.conformant,
        matchedOperations: coverage.matchedOperations,
        missingRequiredOperations: coverage.missingRequiredOperations,
        missingRecommendedOperations: coverage.missingRecommendedOperations,
        missingOptionalOperations: coverage.missingOptionalOperations,
        extensionOperations: coverage.extensionOperations,
      } satisfies IntegrationProviderProfileAttachment,
    },
  });
}

function attachCategoryProfileOperations(
  manifest: ProviderManifestInput,
  profile: IntegrationCategoryProfile,
): ProviderManifestInput {
  const declaredCapabilities = new Set(
    (manifest.capabilities ?? []).map((capability) => capability.capability),
  );
  const declaredOperationAliases = new Set(
    (manifest.operations ?? []).map((operation) => operation.alias),
  );
  const profileOperations = profile.operations
    .filter((operation) => operation.level !== "extension")
    .filter((operation) => declaredCapabilities.has(operation.capability))
    .filter((operation) => !declaredOperationAliases.has(operation.alias))
    .map(profileOperationToProviderOperation);

  if (profileOperations.length === 0) return manifest;
  return {
    ...manifest,
    operations: [
      ...(manifest.operations ?? []),
      ...profileOperations,
    ],
  };
}

function profileOperationToProviderOperation(
  operation: CategoryOperationDeclaration,
): ProviderOperationDeclarationInput {
  return {
    alias: operation.alias,
    capability: operation.capability,
    ...(operation.label ? { label: operation.label } : {}),
    ...(operation.description ? { description: operation.description } : {}),
    ...(operation.providerObject ? { providerObject: operation.providerObject } : {}),
    ...(operation.providerObjects ? { providerObjects: operation.providerObjects } : {}),
    ...(operation.audience ? { audience: operation.audience } : {}),
    ...(operation.audiences ? { audiences: operation.audiences } : {}),
    ...(operation.requiresCredential !== undefined ? { requiresCredential: operation.requiresCredential } : {}),
    ...(operation.requiresApproval !== undefined ? { requiresApproval: operation.requiresApproval } : {}),
    ...(operation.sideEffect !== undefined ? { sideEffect: operation.sideEffect } : {}),
    ...(operation.externallyVisible !== undefined ? { externallyVisible: operation.externallyVisible } : {}),
    ...(operation.exposesSensitiveData !== undefined ? { exposesSensitiveData: operation.exposesSensitiveData } : {}),
    ...(operation.changesWorkflow !== undefined ? { changesWorkflow: operation.changesWorkflow } : {}),
    ...(operation.requiredPolicyIds ? { requiredPolicyIds: operation.requiredPolicyIds } : {}),
    ...(operation.inputSchemaName ? { inputSchemaName: operation.inputSchemaName } : {}),
    ...(operation.inputSchemaRef ? { inputSchemaRef: operation.inputSchemaRef } : {}),
    ...(operation.inputSchema !== undefined ? { inputSchema: operation.inputSchema } : {}),
    ...(operation.outputSchemaName ? { outputSchemaName: operation.outputSchemaName } : {}),
    ...(operation.outputSchemaRef ? { outputSchemaRef: operation.outputSchemaRef } : {}),
    ...(operation.outputSchema !== undefined ? { outputSchema: operation.outputSchema } : {}),
    metadata: {
      ...(operation.metadata ?? {}),
      integrationCategoryProfile: true,
      categoryOperationLevel: operation.level,
    },
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
