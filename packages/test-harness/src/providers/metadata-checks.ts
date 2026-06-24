import {
  CapabilityAvailabilitySchema,
  ChannelPolicyConfigSchema,
  evaluateCapabilityUse,
  type ProviderCredentialStatus,
  type ProviderCredentialStatusInput,
  type ProviderManifest,
} from "@cognidesk/core";
import type { ProviderConformanceCheckResult } from "./types.js";
import { isRecord } from "./shared.js";

export function checkOfficialProviderEvidence(manifest: ProviderManifest): ProviderConformanceCheckResult {
  if (manifest.trustLevel !== "official" || manifest.coverage.scope === "local-protocol") {
    return {
      id: "provider.official_evidence",
      status: "skipped",
      message: "Official provider URL evidence is not required for this manifest.",
    };
  }

  const urls = manifest.coverage.evidence
    .map((evidence) => evidence.url)
    .filter((url): url is string => typeof url === "string" && url.length > 0);
  const nonHttpsUrls = urls.filter((url) => !url.startsWith("https://"));
  if (urls.length === 0 || nonHttpsUrls.length > 0) {
    return {
      id: "provider.official_evidence",
      status: "failed",
      message: "Official provider packages must cite HTTPS provider documentation evidence.",
      details: {
        urlEvidenceCount: urls.length,
        nonHttpsUrls,
      },
    };
  }

  return {
    id: "provider.official_evidence",
    status: "passed",
    message: "Official provider package cites HTTPS documentation evidence.",
    details: { urlEvidenceCount: urls.length },
  };
}


export function checkChannelCoverageMetadata(manifest: ProviderManifest): ProviderConformanceCheckResult {
  const channelCoverage = manifest.metadata?.channelCoverage;
  if (channelCoverage === undefined) {
    if (manifest.trustLevel === "official" && channelCoverageRequiredCategories.has(manifest.category)) {
      return {
        id: "provider.channel_coverage_metadata",
        status: "failed",
        message: "Official provider packages in Studio-visible channel categories must declare channelCoverage metadata for support surfaces.",
        details: { category: manifest.category, requiredCategories: [...channelCoverageRequiredCategories] },
      };
    }
    return {
      id: "provider.channel_coverage_metadata",
      status: "skipped",
      message: "No channelCoverage metadata is declared.",
    };
  }
  if (!isRecord(channelCoverage)) {
    return {
      id: "provider.channel_coverage_metadata",
      status: "failed",
      message: "channelCoverage metadata must be a record of channel/surface keys to coverage status strings.",
      details: { valueType: typeof channelCoverage },
    };
  }

  const invalidEntries = Object.entries(channelCoverage)
    .filter(([, status]) => typeof status !== "string" || !isKnownChannelCoverageStatus(status))
    .map(([key, status]) => ({ key, status }));
  const providerSupportedCount = Object.values(channelCoverage)
    .filter((status) => typeof status === "string" && status.includes("provider-supported"))
    .length;
  const hasUrlEvidence = manifest.coverage.evidence.some((evidence) => Boolean(evidence.url));

  if (invalidEntries.length > 0 || (providerSupportedCount > 0 && !hasUrlEvidence)) {
    return {
      id: "provider.channel_coverage_metadata",
      status: "failed",
      message: "channelCoverage statuses must use known coverage families and cite provider documentation for provider-supported claims.",
      details: {
        invalidEntries,
        providerSupportedCount,
        hasUrlEvidence,
      },
    };
  }

  return {
    id: "provider.channel_coverage_metadata",
    status: "passed",
    message: "channelCoverage metadata uses known coverage status families.",
    details: { surfaceCount: Object.keys(channelCoverage).length },
  };
}

function isKnownChannelCoverageStatus(status: string) {
  return status === "supported"
    || status === "not-covered"
    || status.startsWith("generated")
    || status.startsWith("typed")
    || status.startsWith("provider-supported")
    || status.startsWith("sdk-owned");
}

const channelCoverageRequiredCategories = new Set([
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

const genericProviderCapabilities = new Set([
  "send",
  "handoff",
  "transfer",
  "create-provider-object",
  "read-provider-object",
  "update-provider-object",
  "delete-provider-object",
  "search-provider-object",
  "link-provider-object",
]);

export function checkGenericCapabilityEvidence(manifest: ProviderManifest): ProviderConformanceCheckResult {
  const missingProviderObjects = manifest.capabilities
    .filter((capability) => genericProviderCapabilities.has(capability.capability))
    .filter((capability) => (capability.providerObjects ?? []).length === 0)
    .map((capability) => capability.capability);
  if (missingProviderObjects.length > 0) {
    return {
      id: "provider.generic_capability_evidence",
      status: "failed",
      message: "Generic provider/action capabilities must name the provider objects they operate on.",
      details: { capabilities: missingProviderObjects },
    };
  }
  return {
    id: "provider.generic_capability_evidence",
    status: "passed",
    message: "Generic provider/action capabilities include provider-object evidence.",
  };
}

export function checkCredentialDeclarations(
  manifest: ProviderManifest,
  credentialStatuses: ProviderCredentialStatus[],
): ProviderConformanceCheckResult {
  const requiresCredentials = manifest.capabilities.some((capability) => capability.requiresCredential);
  if (requiresCredentials && manifest.credentialRequirements.length === 0) {
    return {
      id: "provider.credentials",
      status: "failed",
      message: "Capabilities that require credentials must declare credential requirements.",
    };
  }
  const declared = new Set(manifest.credentialRequirements.map((requirement) => requirement.id));
  const unknownStatuses = credentialStatuses
    .filter((status) => status.state !== "not-required" && !declared.has(status.requirementId))
    .map((status) => status.requirementId);
  if (unknownStatuses.length > 0) {
    return {
      id: "provider.credentials",
      status: "failed",
      message: "Credential statuses must reference declared credential requirements.",
      details: { requirementIds: unknownStatuses },
    };
  }
  return {
    id: "provider.credentials",
    status: "passed",
    message: "Credential requirements and statuses are declared without granting runtime permission.",
  };
}

const credentialScopeKinds = new Set([
  "provider-oauth-scopes",
  "provider-permission-labels",
  "provider-role-or-privilege-guidance",
  "internal-capability-labels",
  "mixed-auth-mode",
]);

export function checkCredentialScopeClassification(manifest: ProviderManifest): ProviderConformanceCheckResult {
  if (manifest.trustLevel !== "official") {
    return {
      id: "provider.credential_scope_classification",
      status: "skipped",
      message: "Credential scope classification is not required for this manifest.",
    };
  }

  const unclassified = manifest.credentialRequirements
    .filter((requirement) => requirement.scopes.length > 0)
    .filter((requirement) => {
      const scopeKind = requirement.metadata?.scopeKind;
      return typeof scopeKind !== "string" || !credentialScopeKinds.has(scopeKind);
    })
    .map((requirement) => requirement.id);

  if (unclassified.length > 0) {
    return {
      id: "provider.credential_scope_classification",
      status: "failed",
      message: "Official provider credential requirements with scope strings must classify whether they are OAuth scopes, provider permissions, roles/privileges, or internal capability labels.",
      details: { requirementIds: unclassified, allowedKinds: [...credentialScopeKinds] },
    };
  }

  return {
    id: "provider.credential_scope_classification",
    status: "passed",
    message: "Credential scope strings are classified for Studio display.",
  };
}

export function checkNoCredentialSecretShape(credentials: ProviderCredentialStatusInput[]): ProviderConformanceCheckResult {
  const unsafeKeys = new Set<string>();
  for (const credential of credentials) {
    collectUnsafeCredentialKeys(credential, unsafeKeys);
  }
  if (unsafeKeys.size > 0) {
    return {
      id: "provider.credentials.no_secret_values",
      status: "failed",
      message: "Provider credential status must expose readiness only, not secret values.",
      details: { keys: [...unsafeKeys] },
    };
  }
  return {
    id: "provider.credentials.no_secret_values",
    status: "passed",
    message: "Credential status does not expose obvious secret-bearing fields.",
  };
}

export function checkConnectionBackedMetadata(manifest: ProviderManifest): ProviderConformanceCheckResult {
  const connectionBacked = isRecord(manifest.metadata?.connectionBacked)
    ? manifest.metadata.connectionBacked
    : undefined;
  if (!connectionBacked) {
    return {
      id: "provider.connection_backed",
      status: "skipped",
      message: "Provider package is not connection-backed.",
    };
  }

  const reviewedContract = isRecord(connectionBacked.reviewedContract)
    ? connectionBacked.reviewedContract
    : undefined;
  const operationAliases = Array.isArray(connectionBacked.operationAliases)
    ? connectionBacked.operationAliases.filter(isRecord)
    : [];
  const missingReviewedContract = !reviewedContract
    || typeof reviewedContract.source !== "string"
    || (
      typeof reviewedContract.digest !== "string"
      && typeof reviewedContract.version !== "string"
      && typeof reviewedContract.compatibility !== "string"
    );
  const aliasesMissingMetadata = operationAliases
    .filter((operation) =>
      typeof operation.alias !== "string"
      || typeof operation.providerOperation !== "string"
      || typeof operation.capability !== "string"
      || typeof operation.sideEffect !== "boolean"
    )
    .map((operation) => typeof operation.alias === "string" ? operation.alias : "<unknown>");
  if (missingReviewedContract || operationAliases.length === 0 || aliasesMissingMetadata.length > 0) {
    return {
      id: "provider.connection_backed",
      status: "failed",
      message: "Connection-backed provider packages must declare reviewed contract metadata and reviewed operation aliases.",
      details: {
        missingReviewedContract,
        operationAliasCount: operationAliases.length,
        aliasesMissingMetadata,
      },
    };
  }
  return {
    id: "provider.connection_backed",
    status: "passed",
    message: "Connection-backed provider package declares reviewed contract and operation alias metadata.",
    details: {
      kind: connectionBacked.kind,
      operationAliasCount: operationAliases.length,
    },
  };
}

function collectUnsafeCredentialKeys(value: unknown, unsafeKeys: Set<string>) {
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (/(secret|token|password|api[-_]?key|auth)/i.test(key)) unsafeKeys.add(key);
    collectUnsafeCredentialKeys(child, unsafeKeys);
  }
}

export function checkFailClosedPolicy(
  manifest: ProviderManifest,
  channels: ReturnType<typeof ChannelPolicyConfigSchema.parse>[],
  availability: ReturnType<typeof CapabilityAvailabilitySchema.parse>[],
): ProviderConformanceCheckResult {
  const consequential = manifest.capabilities.find((capability) =>
    capability.sideEffect || capability.exposesSensitiveData || capability.changesWorkflow
  );
  if (!consequential) {
    return {
      id: "provider.policy_fail_closed",
      status: "skipped",
      message: "No consequential capability was declared.",
    };
  }
  const decision = evaluateCapabilityUse({
    request: {
      channel: manifest.category,
      providerPackageId: manifest.id,
      capability: consequential.capability,
      sideEffect: consequential.sideEffect,
      exposesSensitiveData: consequential.exposesSensitiveData,
      changesWorkflow: consequential.changesWorkflow,
      requiredPolicyIds: ["provider-conformance-required-policy"],
    },
    channels,
    availability,
  });
  if (decision.allowed) {
    return {
      id: "provider.policy_fail_closed",
      status: "failed",
      message: "Consequential capability was allowed without the conformance-required policy.",
    };
  }
  return {
    id: "provider.policy_fail_closed",
    status: "passed",
    message: "Consequential capability fails closed when required policy is missing.",
    details: { code: decision.code },
  };
}
