export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export type IntegrationImplementationStrategy =
  | "official-sdk"
  | "maintained-library"
  | "generated-support-slice"
  | "direct-http-support-slice"
  | "direct-support-slice"
  | "support-workflow-adapter"
  | "provider-api-subset"
  | "generated-full-provider-api"
  | "app-supplied-connector"
  | "local-protocol";

export type IntegrationManifestSourceKind = "manifest-only" | "runtime-module-fallback";

export interface IntegrationProviderReference {
  id: string;
  category: string;
  provider: string;
  importPath: string;
  modulePath: string;
  manifestExport: string;
}

export interface IntegrationCatalogEvidence {
  label: string;
  url?: string;
}

export interface IntegrationCatalogCredentialRequirement {
  id: string;
  label?: string;
  description?: string;
  scopes: readonly string[];
  required: boolean;
  metadata?: JsonObject;
}

export interface IntegrationCatalogProviderObject {
  kind: string;
  label?: string;
  description?: string;
  schemaName?: string;
  metadata?: JsonObject;
}

export interface IntegrationCatalogCapability {
  capability: string;
  label?: string;
  description?: string;
  audiences: readonly string[];
  providerObjects: readonly IntegrationCatalogProviderObject[];
  requiresCredential: boolean;
  sideEffect: boolean;
  exposesSensitiveData: boolean;
  changesWorkflow: boolean;
  extension: boolean;
  metadata?: JsonObject;
}

export interface IntegrationCatalogCoverage {
  scope: string;
  notes: readonly string[];
  evidence: readonly IntegrationCatalogEvidence[];
}

export interface IntegrationCatalogCategoryProfileAttachment {
  id: string;
  coverage: "partial" | "standard" | "full" | (string & {});
  conformant: boolean;
  matchedOperations: readonly string[];
  missingRequiredOperations: readonly string[];
  missingRecommendedOperations: readonly string[];
  missingOptionalOperations: readonly string[];
  extensionOperations: readonly string[];
}

export interface IntegrationAdapterCoverage {
  scope: string;
  level: "partial" | "standard" | "full" | "unprofiled" | (string & {});
  conformant: boolean | null;
  categoryProfile?: IntegrationCatalogCategoryProfileAttachment;
}

export interface IntegrationImplementationMetadata {
  strategy: IntegrationImplementationStrategy;
  sdkPackage: string;
  runtimePackage: string;
  providerModule: string;
  manifestExport: string;
  manifestSource: string;
  manifestSourceKind: IntegrationManifestSourceKind;
  documentationPath: string;
}

export type IntegrationReadinessMode =
  | "not-required"
  | "credential-configuration"
  | "credential-and-live-check"
  | "app-supplied-connector";

export interface IntegrationReadinessMetadata {
  mode: IntegrationReadinessMode;
  requiresCredentials: boolean;
  requiredCredentialIds: readonly string[];
  optionalCredentialIds: readonly string[];
  credentialRequirements: readonly IntegrationCatalogCredentialRequirement[];
}

export interface IntegrationDisplayMetadata {
  label: string;
  summary: string;
  tags: readonly string[];
}

export interface IntegrationMaintainer {
  name: string;
  type: "official" | "partner" | "community" | "unknown" | (string & {});
  url?: string;
}

export interface IntegrationCatalogEntry extends IntegrationProviderReference {
  name: string;
  packageName: string;
  trustLevel: "official" | "verified" | "community" | "experimental" | (string & {});
  directions: readonly string[];
  channelAudiences: readonly string[];
  display: IntegrationDisplayMetadata;
  capabilities: readonly IntegrationCatalogCapability[];
  coverage: IntegrationCatalogCoverage;
  adapterCoverage: IntegrationAdapterCoverage;
  implementation: IntegrationImplementationMetadata;
  readiness: IntegrationReadinessMetadata;
  privacyNotes: readonly string[];
  limitations: readonly string[];
  maintainers: readonly IntegrationMaintainer[];
  metadata?: JsonObject;
}
