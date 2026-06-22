import {
  ProviderCredentialStatusSchema,
  type ProviderCredentialRequirement,
  type ProviderCredentialStatus,
  type ProviderCredentialStatusInput,
  type ProviderManifest,
} from "@cognidesk/core";
import { IntegrationError } from "./errors.js";

export interface IntegrationReadinessSummary {
  ready: boolean;
  providerPackageId?: string;
  statuses: ProviderCredentialStatus[];
  blockingRequirementIds: string[];
  missingRequirementIds: string[];
  expiredRequirementIds: string[];
  insufficientScopeRequirementIds: string[];
  permissionBlockedRequirementIds: string[];
}

export function credentialConfigured(input: {
  providerPackageId?: string;
  requirementId: string;
  message?: string;
  scopes?: readonly string[];
}): ProviderCredentialStatusInput {
  return {
    ...definedProviderPackageId(input.providerPackageId),
    requirementId: input.requirementId,
    state: "configured",
    scopes: [...(input.scopes ?? [])],
    ...(input.message ? { message: input.message } : {}),
  };
}

export function credentialMissing(input: {
  providerPackageId?: string;
  requirementId: string;
  message?: string;
  scopes?: readonly string[];
}): ProviderCredentialStatusInput {
  return {
    ...definedProviderPackageId(input.providerPackageId),
    requirementId: input.requirementId,
    state: "missing",
    scopes: [...(input.scopes ?? [])],
    ...(input.message ? { message: input.message } : {}),
  };
}

export function credentialNotRequired(input: {
  providerPackageId?: string;
  requirementId: string;
  message?: string;
}): ProviderCredentialStatusInput {
  return {
    ...definedProviderPackageId(input.providerPackageId),
    requirementId: input.requirementId,
    state: "not-required",
    ...(input.message ? { message: input.message } : {}),
  };
}

export function credentialStatusesFromManifest(
  manifest: Pick<ProviderManifest, "id" | "credentialRequirements">,
  configuredRequirementIds: Iterable<string>,
): ProviderCredentialStatus[] {
  const configured = new Set(configuredRequirementIds);
  return manifest.credentialRequirements.map((requirement) =>
    ProviderCredentialStatusSchema.parse({
      providerPackageId: manifest.id,
      requirementId: requirement.id,
      state: configured.has(requirement.id) ? "configured" : requirement.required ? "missing" : "not-required",
      scopes: requirement.scopes,
      message: readinessMessage(requirement, configured.has(requirement.id)),
    } satisfies ProviderCredentialStatusInput)
  );
}

export function summarizeIntegrationReadiness(
  statusesInput: readonly ProviderCredentialStatusInput[],
  options: { providerPackageId?: string; requiredRequirementIds?: readonly string[] } = {},
): IntegrationReadinessSummary {
  const statuses = statusesInput.map((status) => ProviderCredentialStatusSchema.parse(status));
  const requiredRequirementIds = new Set(options.requiredRequirementIds ?? statuses.map((status) => status.requirementId));
  const presentRequirementIds = new Set(statuses.map((status) => status.requirementId));
  const missingStatusRequirementIds = [...requiredRequirementIds].filter((requirementId) => !presentRequirementIds.has(requirementId));
  const blocking = statuses.filter((status) =>
    requiredRequirementIds.has(status.requirementId)
    && status.state !== "configured"
    && status.state !== "not-required"
  );

  return {
    ...(options.providerPackageId ? { providerPackageId: options.providerPackageId } : {}),
    ready: blocking.length === 0 && missingStatusRequirementIds.length === 0,
    statuses,
    blockingRequirementIds: [
      ...blocking.map((status) => status.requirementId),
      ...missingStatusRequirementIds,
    ],
    missingRequirementIds: [
      ...blocking.filter((status) => status.state === "missing").map((status) => status.requirementId),
      ...missingStatusRequirementIds,
    ],
    expiredRequirementIds: blocking.filter((status) => status.state === "expired").map((status) => status.requirementId),
    insufficientScopeRequirementIds: blocking.filter((status) => status.state === "insufficient-scope").map((status) => status.requirementId),
    permissionBlockedRequirementIds: blocking.filter((status) => status.state === "permission-blocked").map((status) => status.requirementId),
  };
}

export function assertIntegrationReady(summary: IntegrationReadinessSummary): void {
  if (summary.ready) return;
  throw new IntegrationError("not-ready", "Integration is not ready to execute provider operations.", {
    providerPackageId: summary.providerPackageId,
    details: {
      blockingRequirementIds: summary.blockingRequirementIds,
      missingRequirementIds: summary.missingRequirementIds,
      expiredRequirementIds: summary.expiredRequirementIds,
      insufficientScopeRequirementIds: summary.insufficientScopeRequirementIds,
      permissionBlockedRequirementIds: summary.permissionBlockedRequirementIds,
    },
  });
}

function readinessMessage(requirement: ProviderCredentialRequirement, configured: boolean): string {
  if (configured) return `${requirement.label ?? requirement.id} is configured.`;
  return requirement.required
    ? `${requirement.label ?? requirement.id} is required.`
    : `${requirement.label ?? requirement.id} is optional and not configured.`;
}

function definedProviderPackageId(providerPackageId: string | undefined) {
  return providerPackageId ? { providerPackageId } : {};
}
