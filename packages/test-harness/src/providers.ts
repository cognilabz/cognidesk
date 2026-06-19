import {
  CapabilityAvailabilitySchema,
  ChannelPolicyConfigSchema,
  ProviderCredentialStatusSchema,
  ProviderManifestSchema,
} from "@cognidesk/core";
import { checkCategoryProfileCoverage } from "./providers/category-coverage.js";
import { runLiveChecks } from "./providers/live-checks.js";
import {
  checkChannelCoverageMetadata,
  checkConnectionBackedMetadata,
  checkCredentialDeclarations,
  checkCredentialScopeClassification,
  checkFailClosedPolicy,
  checkGenericCapabilityEvidence,
  checkNoCredentialSecretShape,
  checkOfficialProviderEvidence,
} from "./providers/metadata-checks.js";
import { checkCapabilityVocabulary, checkPackageName, checkProviderCoverage } from "./providers/package-checks.js";
import type { ProviderConformanceCheckResult, ProviderConformanceInput, ProviderConformanceResult } from "./providers/types.js";

export type * from "./providers/types.js";
export { deriveProviderCategoryCoverage } from "./providers/category-coverage.js";

export async function runProviderConformance(
  input: ProviderConformanceInput,
): Promise<ProviderConformanceResult> {
  const manifest = ProviderManifestSchema.parse(input.manifest);
  const channels = (input.channels ?? []).map((channel) => ChannelPolicyConfigSchema.parse(channel));
  const availability = (input.availability ?? []).map((candidate) => CapabilityAvailabilitySchema.parse(candidate));
  const credentialStatuses = (input.credentialStatuses ?? []).map((credential) =>
    ProviderCredentialStatusSchema.parse(credential)
  );
  const checks: ProviderConformanceCheckResult[] = [
    checkPackageName(manifest, input.expectedPackageName),
    checkCapabilityVocabulary(manifest),
    checkProviderCoverage(manifest),
    checkCategoryProfileCoverage(manifest, input.categoryProfiles ?? []),
    checkOfficialProviderEvidence(manifest),
    checkChannelCoverageMetadata(manifest),
    checkGenericCapabilityEvidence(manifest),
    checkCredentialDeclarations(manifest, credentialStatuses),
    checkCredentialScopeClassification(manifest),
    checkNoCredentialSecretShape(input.credentialStatuses ?? []),
    checkConnectionBackedMetadata(manifest),
    checkFailClosedPolicy(manifest, channels, availability),
  ];

  checks.push(...await runLiveChecks({
    manifest,
    credentialStatuses,
    live: input.live,
    ...(input.signal ? { signal: input.signal } : {}),
  }));

  const hardFailures = checks.filter((check) => check.status === "failed");
  const credentialBlocked = checks.filter((check) => check.status === "credential-blocked");
  return {
    status: hardFailures.length > 0
      ? "failed"
      : credentialBlocked.length > 0
        ? "credential-blocked"
        : "passed",
    passed: hardFailures.length === 0 && credentialBlocked.length === 0,
    manifest,
    checks,
  };
}
