import type {
  CapabilityAvailabilityInput,
  ChannelPolicyConfigInput,
  IntegrationCategoryProfileInput,
  ProviderCredentialStatus,
  ProviderCredentialStatusInput,
  ProviderManifest,
  ProviderManifestInput,
} from "@cognidesk/core";

export type ProviderConformanceStatus =
  | "passed"
  | "failed"
  | "credential-blocked"
  | "skipped";

export interface ProviderConformanceCheckResult {
  id: string;
  status: ProviderConformanceStatus;
  message: string;
  details?: Record<string, unknown>;
}

export interface ProviderLiveCheckContext {
  manifest: ProviderManifest;
  credentialStatuses: ProviderCredentialStatus[];
  signal?: AbortSignal;
}

export interface ProviderLiveCheck {
  id: string;
  description?: string;
  requiredCredentialIds?: string[];
  run(context: ProviderLiveCheckContext): Promise<void | { details?: Record<string, unknown> }>;
}

export type CategoryOperationLevel =
  | "required"
  | "recommended"
  | "optional"
  | "extension";

export type ProviderCategoryCoverageLevel =
  | "none"
  | "partial"
  | "standard"
  | "full";

export interface CategoryOperationDeclaration {
  alias: string;
  level?: CategoryOperationLevel;
  capability?: string;
  providerObject?: string;
  providerObjects?: Array<{ kind: string; label?: string }>;
  audiences?: string[];
  sideEffect?: boolean;
  externallyVisible?: boolean;
  exposesSensitiveData?: boolean;
  changesWorkflow?: boolean;
  requiredPolicyIds?: string[];
  inputSchemaName?: string;
  inputSchema?: unknown;
  inputSchemaRef?: string;
  outputSchemaName?: string;
  outputSchema?: unknown;
  outputSchemaRef?: string;
  extension?: boolean;
  metadata?: Record<string, unknown>;
}

export type IntegrationCategoryProfile = Omit<
  IntegrationCategoryProfileInput,
  "category" | "metadata" | "operations"
> & {
  id?: string;
  category: string;
  operations?: CategoryOperationDeclaration[];
  metadata?: Record<string, unknown>;
};

export interface ProviderCategoryCoverage {
  profileId?: string;
  category: string;
  coverageLevel: ProviderCategoryCoverageLevel;
  implementedOperations: string[];
  missingRequired: string[];
  missingRecommended: string[];
  missingOptional: string[];
  unsupportedOperations: Array<{ alias: string; capability: string }>;
  invalidExtensions: Array<{ alias: string; missing: string[] }>;
  operationCounts: {
    required: number;
    recommended: number;
    optional: number;
    extension: number;
    implemented: number;
  };
  claimedCoverageLevel?: ProviderCategoryCoverageLevel;
  overstatedCoverage?: boolean;
}

export interface ProviderConformanceInput {
  manifest: ProviderManifestInput;
  categoryProfiles?: IntegrationCategoryProfile[];
  channels?: ChannelPolicyConfigInput[];
  availability?: CapabilityAvailabilityInput[];
  credentialStatuses?: ProviderCredentialStatusInput[];
  expectedPackageName?: string;
  live?: {
    enabled?: boolean;
    checks?: ProviderLiveCheck[];
  };
  signal?: AbortSignal;
}

export interface ProviderConformanceResult {
  status: Exclude<ProviderConformanceStatus, "skipped">;
  passed: boolean;
  manifest: ProviderManifest;
  checks: ProviderConformanceCheckResult[];
}
