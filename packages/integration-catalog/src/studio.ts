import { integrationCatalog } from "./catalog.js";
import type { IntegrationCatalogEntry } from "./types.js";

const readyStatuses = new Set(["ready", "live-verified", "sandbox-verified", "scoped-verified", "full-api-verified"]);
const blockedCredentialStates = new Set(["missing", "expired", "insufficient-scope", "permission-blocked", "unavailable"]);

export type StudioIntegrationCatalogState = "available";
export type StudioIntegrationInstallationState = "installed" | "not-installed";
export type StudioIntegrationReadinessState = "ready" | "configured" | "not-configured" | "blocked" | "unknown";

export interface StudioIntegrationStateProviderPackage {
  id: string;
  packageName?: string;
}

export interface StudioIntegrationStateReadiness {
  providerPackageId: string;
  status: string;
  blockers?: readonly { code?: string; kind?: string; message?: string }[];
}

export interface StudioIntegrationStateCredential {
  providerPackageId?: string | undefined;
  requirementId: string;
  state: string;
}

export interface StudioIntegrationStateAvailability {
  providerPackageId?: string | undefined;
  status: string;
  blockers?: readonly { code?: string; kind?: string; message?: string }[];
}

export interface DeriveStudioIntegrationStatesInput {
  catalog?: readonly IntegrationCatalogEntry[];
  targetProviderPackages?: readonly StudioIntegrationStateProviderPackage[];
  installedProviderPackageIds?: readonly string[];
  providerReadiness?: readonly StudioIntegrationStateReadiness[];
  credentialStatuses?: readonly StudioIntegrationStateCredential[];
  capabilityAvailability?: readonly StudioIntegrationStateAvailability[];
}

export interface StudioIntegrationState {
  providerPackageId: string;
  name: string;
  category: string;
  provider: string;
  catalog: {
    state: StudioIntegrationCatalogState;
    entry: IntegrationCatalogEntry;
  };
  installation: {
    state: StudioIntegrationInstallationState;
    packageName: string;
  };
  readiness: {
    state: StudioIntegrationReadinessState;
    status: string;
    credentialStates: readonly string[];
    blockerCount: number;
  };
}

export function deriveStudioIntegrationStates(input: DeriveStudioIntegrationStatesInput = {}): readonly StudioIntegrationState[] {
  const entries = input.catalog ?? integrationCatalog;
  const installedIds = new Set([
    ...(input.targetProviderPackages ?? []).map((providerPackage) => providerPackage.id),
    ...(input.installedProviderPackageIds ?? []),
  ]);
  const readinessByProvider = new Map((input.providerReadiness ?? []).map((readiness) => [readiness.providerPackageId, readiness]));
  const packageById = new Map((input.targetProviderPackages ?? []).map((providerPackage) => [providerPackage.id, providerPackage]));

  return entries.map((entry) => {
    const readiness = readinessByProvider.get(entry.id);
    const credentialStates = (input.credentialStatuses ?? [])
      .filter((credential) => credential.providerPackageId === entry.id)
      .map((credential) => credential.state);
    const availabilityBlockers = (input.capabilityAvailability ?? [])
      .filter((availability) => availability.providerPackageId === entry.id && availability.status === "blocked")
      .flatMap((availability) => availability.blockers ?? []);
    const readinessBlockers = readiness?.blockers ?? [];
    const blockerCount = availabilityBlockers.length + readinessBlockers.length;
    const installed = installedIds.has(entry.id);

    return {
      providerPackageId: entry.id,
      name: entry.name,
      category: entry.category,
      provider: entry.provider,
      catalog: {
        state: "available",
        entry,
      },
      installation: {
        state: installed ? "installed" : "not-installed",
        packageName: packageById.get(entry.id)?.packageName ?? entry.packageName,
      },
      readiness: {
        state: deriveReadinessState({
          installed,
          status: readiness?.status,
          credentialStates,
          blockerCount,
        }),
        status: readiness?.status ?? "unknown",
        credentialStates,
        blockerCount,
      },
    } satisfies StudioIntegrationState;
  });
}

function deriveReadinessState(input: {
  installed: boolean;
  status: string | undefined;
  credentialStates: readonly string[];
  blockerCount: number;
}): StudioIntegrationReadinessState {
  if (!input.installed) return "unknown";
  const hasCredentialBlocker = input.credentialStates.some((state) => blockedCredentialStates.has(state));
  if (input.status === "blocked" || input.blockerCount > 0 || hasCredentialBlocker) {
    return "blocked";
  }
  if (input.status && readyStatuses.has(input.status)) return "ready";
  if (input.status === "not-configured") return "not-configured";
  if (input.status === "configured") return "configured";
  return "unknown";
}
