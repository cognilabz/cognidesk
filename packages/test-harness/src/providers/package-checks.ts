import { isCoreChannelCapability, type ProviderManifest } from "@cognidesk/core";
import type { ProviderConformanceCheckResult } from "./types.js";
import { isRecord } from "./shared.js";

export function checkPackageName(
  manifest: ProviderManifest,
  expectedPackageName?: string,
): ProviderConformanceCheckResult {
  const expected = expectedPackageName ?? defaultPackageNameExpectation(manifest);
  if (!expected) {
    return {
      id: "provider.package_name",
      status: "skipped",
      message: "No official Cognidesk package-name expectation applies.",
    };
  }
  const expectedNames = Array.isArray(expected) ? expected : [expected];
  if (!expectedNames.includes(manifest.packageName)) {
    return {
      id: "provider.package_name",
      status: "failed",
      message: `Provider integration package '${manifest.packageName}' must be named '${expectedNames.join("' or '")}'.`,
      details: { expected: expectedNames, actual: manifest.packageName },
    };
  }
  return {
    id: "provider.package_name",
    status: "passed",
    message: "Provider integration package name matches the expected distribution boundary.",
  };
}

function defaultPackageNameExpectation(manifest: ProviderManifest) {
  if (!manifest.packageName.startsWith("@cognidesk/")) return undefined;
  const infrastructurePackage = infrastructurePackageNameExpectation(manifest);
  if (infrastructurePackage) return infrastructurePackage;
  if (integrationPackageCategories.has(manifest.category)) {
    const splitPackageName = `@cognidesk/integration-${packageSegment(manifest.category)}-${packageSegment(manifest.provider)}`;
    return splitPackageName;
  }
  const categoryPackageName = `@cognidesk/${packageSegment(manifest.category)}`;
  if (manifest.packageName === categoryPackageName) return categoryPackageName;
  return `@cognidesk/${packageSegment(manifest.category)}-${manifest.provider}`;
}

const integrationPackageCategories = new Set([
  "cobrowsing",
  "community",
  "contact-center",
  "ecommerce",
  "email",
  "form",
  "help-center",
  "marketplace",
  "messaging",
  "review",
  "sms",
  "social",
  "ticketing",
  "video",
  "voice",
  "workplace",
]);

function infrastructurePackageNameExpectation(manifest: ProviderManifest) {
  if (manifest.category === "model" && manifest.provider === "ai-sdk") return "@cognidesk/model";
  if (manifest.category === "storage") return "@cognidesk/storage";
  if (manifest.category === "studio" && manifest.provider === "cognidesk") return "@cognidesk/studio-adapter";
  if (manifest.category === "voice" && manifest.provider === "websocket") return "@cognidesk/voice-websocket";
  return undefined;
}

function packageSegment(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

export function checkCapabilityVocabulary(manifest: ProviderManifest): ProviderConformanceCheckResult {
  const undeclaredExtensions = manifest.capabilities
    .filter((capability) => !isCoreChannelCapability(capability.capability) && !capability.extension)
    .map((capability) => capability.capability);
  if (undeclaredExtensions.length > 0) {
    return {
      id: "provider.capability_vocabulary",
      status: "failed",
      message: "Extension Channel Capabilities must be declared with extension: true.",
      details: { capabilities: undeclaredExtensions },
    };
  }
  return {
    id: "provider.capability_vocabulary",
    status: "passed",
    message: "Channel Capabilities use the core vocabulary or declare extensions explicitly.",
  };
}

export function checkProviderCoverage(manifest: ProviderManifest): ProviderConformanceCheckResult {
  const hasUrlEvidence = manifest.coverage.evidence.some((evidence) => Boolean(evidence.url));
  if (manifest.coverage.scope !== "full-provider-api") {
    return {
      id: "provider.coverage_scope",
      status: "passed",
      message: "Provider API coverage scope is declared explicitly.",
      details: {
        scope: manifest.coverage.scope,
        evidenceCount: manifest.coverage.evidence.length,
      },
    };
  }

  const verification = manifest.metadata?.fullProviderApiVerification;
  const verificationRecord = isRecord(verification) ? verification : undefined;
  const missingVerificationFields = ["provider", "apiVersion", "verifiedAt", "coverageArtifact", "operationCatalogArtifact", "functionCatalogArtifact"]
    .filter((field) => typeof verificationRecord?.[field] !== "string" || verificationRecord[field].length === 0);
  const documentedOperationCount = verificationRecord?.documentedOperationCount;
  const implementedOperationCount = verificationRecord?.implementedOperationCount;
  const unimplementedOperationCount = verificationRecord?.unimplementedOperationCount;
  const generatedFunctionCount = verificationRecord?.generatedFunctionCount;
  const invalidOperationCounts = [
    ["documentedOperationCount", documentedOperationCount],
    ["implementedOperationCount", implementedOperationCount],
    ["unimplementedOperationCount", unimplementedOperationCount],
    ["generatedFunctionCount", generatedFunctionCount],
  ].filter(([, value]) => !Number.isInteger(value) || (value as number) < 0)
    .map(([field]) => field);
  const operationCoverageMismatch = invalidOperationCounts.length === 0
    && (
      documentedOperationCount !== implementedOperationCount
      || documentedOperationCount !== generatedFunctionCount
      || unimplementedOperationCount !== 0
    );

  if (!hasUrlEvidence || missingVerificationFields.length > 0 || invalidOperationCounts.length > 0 || operationCoverageMismatch) {
    return {
      id: "provider.coverage_scope",
      status: "failed",
      message: "Full provider API coverage claims must include official URL evidence, endpoint inventory metadata, generated per-operation functions, and zero unimplemented documented operations.",
      details: {
        scope: manifest.coverage.scope,
        hasUrlEvidence,
        missingVerificationFields,
        invalidOperationCounts,
        documentedOperationCount,
        implementedOperationCount,
        unimplementedOperationCount,
        generatedFunctionCount,
        operationCoverageMismatch,
      },
    };
  }
  return {
    id: "provider.coverage_scope",
    status: "passed",
    message: "Provider API coverage scope is declared explicitly.",
    details: {
      scope: manifest.coverage.scope,
      evidenceCount: manifest.coverage.evidence.length,
    },
  };
}
