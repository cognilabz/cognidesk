import {
  defineProviderPackage,
  deriveProviderCapabilityCoverage,
  type ProviderManifest,
  type ProviderManifestInput,
} from "@cognidesk/core";
import {
  getIntegrationCategoryProfile,
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

  const coverage = deriveProviderCapabilityCoverage({
    profile,
    manifest,
  });
  return defineProviderPackage({
    ...manifest,
    metadata: {
      ...(isRecord(manifest.metadata) ? manifest.metadata : {}),
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
