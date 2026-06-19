import { z } from "zod";
import {
  ActionAudienceSchema,
  CategoryEventDirectionSchema,
  CategoryOperationLevelSchema,
  ChannelAudienceSchema,
  ChannelCapabilitySchema,
  ProviderCapabilityCoverageSchema,
  ProviderCategorySchema,
  ProviderDirectionSchema,
  ProviderTrustLevelSchema,
  coreChannelCapabilities,
  type CoreChannelCapability,
  type ProviderCapabilityCoverage,
} from "./base.js";

export const ProviderObjectDescriptorSchema = z.object({
  kind: z.string().min(1),
  label: z.string().optional(),
  description: z.string().optional(),
  schemaName: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ProviderObjectDescriptor = z.infer<typeof ProviderObjectDescriptorSchema>;

export const ChannelCapabilityDeclarationSchema = z.object({
  capability: ChannelCapabilitySchema,
  label: z.string().optional(),
  description: z.string().optional(),
  audiences: z.array(ActionAudienceSchema).optional(),
  providerObjects: z.array(ProviderObjectDescriptorSchema).optional(),
  requiresCredential: z.boolean().optional(),
  sideEffect: z.boolean().optional(),
  exposesSensitiveData: z.boolean().optional(),
  changesWorkflow: z.boolean().optional(),
  extension: z.boolean().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ChannelCapabilityDeclaration = z.infer<typeof ChannelCapabilityDeclarationSchema>;

const ProviderOperationDeclarationBaseSchema = z.object({
  alias: z.string().min(1),
  capability: ChannelCapabilitySchema,
  label: z.string().optional(),
  description: z.string().optional(),
  providerObject: z.string().min(1).optional(),
  providerObjects: z.array(ProviderObjectDescriptorSchema).optional(),
  audience: ActionAudienceSchema.optional(),
  audiences: z.array(ActionAudienceSchema).optional(),
  requiresCredential: z.boolean().optional(),
  requiresApproval: z.boolean().optional(),
  sideEffect: z.boolean().optional(),
  externallyVisible: z.boolean().optional(),
  exposesSensitiveData: z.boolean().optional(),
  changesWorkflow: z.boolean().optional(),
  requiredPolicyIds: z.array(z.string().min(1)).optional(),
  inputSchemaName: z.string().min(1).optional(),
  outputSchemaName: z.string().min(1).optional(),
  inputSchemaRef: z.string().min(1).optional(),
  outputSchemaRef: z.string().min(1).optional(),
  inputSchema: z.unknown().optional(),
  outputSchema: z.unknown().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const CategoryOperationDeclarationSchema = ProviderOperationDeclarationBaseSchema.extend({
  level: CategoryOperationLevelSchema.default("optional"),
});
export type CategoryOperationDeclaration = z.infer<typeof CategoryOperationDeclarationSchema>;
export type CategoryOperationDeclarationInput = z.input<typeof CategoryOperationDeclarationSchema>;

export const CategoryOperationCatalogEntrySchema = CategoryOperationDeclarationSchema;
export type CategoryOperationCatalogEntry = CategoryOperationDeclaration;
export type CategoryOperationCatalogEntryInput = CategoryOperationDeclarationInput;

export const CategoryOperationCatalogSchema = z.array(CategoryOperationCatalogEntrySchema).default([]);
export type CategoryOperationCatalog = z.infer<typeof CategoryOperationCatalogSchema>;
export type CategoryOperationCatalogInput = z.input<typeof CategoryOperationCatalogSchema>;

export const ProviderOperationDeclarationSchema = ProviderOperationDeclarationBaseSchema.extend({
  providerOperation: z.string().min(1).optional(),
  extension: z.boolean().default(false),
});
export type ProviderOperationDeclaration = z.infer<typeof ProviderOperationDeclarationSchema>;
export type ProviderOperationDeclarationInput = z.input<typeof ProviderOperationDeclarationSchema>;

export const CategoryEventDeclarationSchema = z.object({
  kind: z.string().min(1),
  label: z.string().optional(),
  description: z.string().optional(),
  direction: CategoryEventDirectionSchema,
  capability: ChannelCapabilitySchema.optional(),
  providerObject: z.string().min(1).optional(),
  operationAlias: z.string().min(1).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type CategoryEventDeclaration = z.infer<typeof CategoryEventDeclarationSchema>;
export type CategoryEventDeclarationInput = z.input<typeof CategoryEventDeclarationSchema>;

export const CategoryOutputDeclarationSchema = z.object({
  intent: z.string().min(1),
  label: z.string().optional(),
  description: z.string().optional(),
  capability: ChannelCapabilitySchema,
  operationAlias: z.string().min(1).optional(),
  providerObject: z.string().min(1).optional(),
  externallyVisible: z.boolean().optional(),
  requiresApproval: z.boolean().optional(),
  sideEffect: z.boolean().optional(),
  exposesSensitiveData: z.boolean().optional(),
  changesWorkflow: z.boolean().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type CategoryOutputDeclaration = z.infer<typeof CategoryOutputDeclarationSchema>;
export type CategoryOutputDeclarationInput = z.input<typeof CategoryOutputDeclarationSchema>;

export const CategoryDataSourceDeclarationSchema = z.object({
  id: z.string().min(1),
  label: z.string().optional(),
  description: z.string().optional(),
  capability: ChannelCapabilitySchema,
  operationAlias: z.string().min(1).optional(),
  providerObjects: z.array(z.string().min(1)).default([]),
  exposesSensitiveData: z.boolean().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type CategoryDataSourceDeclaration = z.infer<typeof CategoryDataSourceDeclarationSchema>;
export type CategoryDataSourceDeclarationInput = z.input<typeof CategoryDataSourceDeclarationSchema>;

export const IntegrationCategoryProfileSchema = z.object({
  id: z.string().min(1).optional(),
  category: ProviderCategorySchema,
  label: z.string().optional(),
  description: z.string().optional(),
  providerObjects: z.array(ProviderObjectDescriptorSchema).default([]),
  capabilities: z.array(ChannelCapabilityDeclarationSchema).default([]),
  operations: CategoryOperationCatalogSchema,
  events: z.array(CategoryEventDeclarationSchema).default([]),
  outputs: z.array(CategoryOutputDeclarationSchema).default([]),
  dataSources: z.array(CategoryDataSourceDeclarationSchema).default([]),
  notes: z.array(z.string()).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type IntegrationCategoryProfile = z.infer<typeof IntegrationCategoryProfileSchema>;
export type IntegrationCategoryProfileInput = z.input<typeof IntegrationCategoryProfileSchema>;

export const ProviderOperationCoverageMismatchSchema = z.object({
  alias: z.string().min(1),
  reason: z.enum(["missing", "capability-mismatch", "provider-object-mismatch"]),
  expectedCapability: ChannelCapabilitySchema.optional(),
  actualCapability: ChannelCapabilitySchema.optional(),
  expectedProviderObject: z.string().min(1).optional(),
  actualProviderObject: z.string().min(1).optional(),
});
export type ProviderOperationCoverageMismatch = z.infer<typeof ProviderOperationCoverageMismatchSchema>;

export const ProviderCapabilityCoverageReportSchema = z.object({
  providerPackageId: z.string().min(1),
  category: ProviderCategorySchema,
  expectedCategory: ProviderCategorySchema,
  categoryMatches: z.boolean(),
  coverage: ProviderCapabilityCoverageSchema,
  conformant: z.boolean(),
  matchedOperations: z.array(z.string().min(1)).default([]),
  missingRequiredOperations: z.array(z.string().min(1)).default([]),
  missingRecommendedOperations: z.array(z.string().min(1)).default([]),
  missingOptionalOperations: z.array(z.string().min(1)).default([]),
  extensionOperations: z.array(z.string().min(1)).default([]),
  mismatchedOperations: z.array(ProviderOperationCoverageMismatchSchema).default([]),
});
export type ProviderCapabilityCoverageReport = z.infer<typeof ProviderCapabilityCoverageReportSchema>;

export const ProviderCredentialRequirementSchema = z.object({
  id: z.string().min(1),
  label: z.string().optional(),
  description: z.string().optional(),
  scopes: z.array(z.string()).default([]),
  required: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ProviderCredentialRequirement = z.infer<typeof ProviderCredentialRequirementSchema>;

export const ProviderCoverageScopeSchema = z.enum([
  "support-workflow-subset",
  "provider-api-subset",
  "connector-required",
  "local-protocol",
  "full-provider-api",
]);
export type ProviderCoverageScope = z.infer<typeof ProviderCoverageScopeSchema>;

export const ProviderCoverageSchema = z.object({
  scope: ProviderCoverageScopeSchema.default("support-workflow-subset"),
  notes: z.array(z.string()).default([
    "Coverage is scoped to Cognidesk support workflows unless this manifest explicitly declares full-provider-api coverage.",
  ]),
  evidence: z.array(z.object({
    label: z.string().min(1),
    url: z.string().url().optional(),
  })).default([]),
});
export type ProviderCoverage = z.infer<typeof ProviderCoverageSchema>;
export type ProviderCoverageInput = z.input<typeof ProviderCoverageSchema>;

export const ProviderManifestSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  packageName: z.string().min(1),
  provider: z.string().min(1),
  category: ProviderCategorySchema,
  trustLevel: ProviderTrustLevelSchema.default("community"),
  directions: z.array(ProviderDirectionSchema).min(1),
  capabilities: z.array(ChannelCapabilityDeclarationSchema).min(1),
  operations: z.array(ProviderOperationDeclarationSchema).default([]),
  channelAudiences: z.array(ChannelAudienceSchema).default(["customer-facing"]),
  credentialRequirements: z.array(ProviderCredentialRequirementSchema).default([]),
  coverage: ProviderCoverageSchema.default({
    scope: "support-workflow-subset",
    notes: [
      "Coverage is scoped to Cognidesk support workflows unless this manifest explicitly declares full-provider-api coverage.",
    ],
    evidence: [],
  }),
  privacyNotes: z.array(z.string()).default([]),
  limitations: z.array(z.string()).default([]),
  maintainers: z.array(z.object({
    name: z.string().min(1),
    type: z.enum(["official", "partner", "community", "unknown"]).default("unknown"),
    url: z.string().url().optional(),
  })).default([]),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
export type ProviderManifest = z.infer<typeof ProviderManifestSchema>;
export type ProviderManifestInput = z.input<typeof ProviderManifestSchema>;

export const ProviderRegistryQuerySchema = z.object({
  category: ProviderCategorySchema.optional(),
  provider: z.string().min(1).optional(),
  trustLevels: z.array(ProviderTrustLevelSchema).optional(),
  capabilities: z.array(ChannelCapabilitySchema).optional(),
  directions: z.array(ProviderDirectionSchema).optional(),
  channelAudiences: z.array(ChannelAudienceSchema).optional(),
  packageNames: z.array(z.string().min(1)).optional(),
});
export type ProviderRegistryQuery = z.infer<typeof ProviderRegistryQuerySchema>;
export type ProviderRegistryQueryInput = z.input<typeof ProviderRegistryQuerySchema>;

export interface ProviderRegistry {
  register(manifest: ProviderManifestInput): ProviderManifest;
  list(query?: ProviderRegistryQueryInput): ProviderManifest[];
  get(id: string): ProviderManifest | undefined;
  require(id: string): ProviderManifest;
}

export function defineProviderPackage(manifest: ProviderManifestInput): ProviderManifest {
  const parsed = ProviderManifestSchema.parse(manifest);
  assertUniqueOperationAliases(parsed.operations, `Provider package '${parsed.id}'`);
  return parsed;
}

export function defineIntegrationCategoryProfile(profile: IntegrationCategoryProfileInput): IntegrationCategoryProfile {
  const parsed = IntegrationCategoryProfileSchema.parse(profile);
  const owner = `Integration category profile '${parsed.id ?? parsed.category}'`;
  assertUniqueOperationAliases(parsed.operations, owner);
  assertUniqueNamedValues(parsed.events.map((event) => event.kind), owner, "event kind");
  assertUniqueNamedValues(parsed.outputs.map((output) => output.intent), owner, "output intent");
  assertUniqueNamedValues(parsed.dataSources.map((dataSource) => dataSource.id), owner, "data source");
  return parsed;
}

export function deriveProviderCapabilityCoverage(input: {
  profile: IntegrationCategoryProfileInput;
  manifest: ProviderManifestInput;
}): ProviderCapabilityCoverageReport {
  const profile = defineIntegrationCategoryProfile(input.profile);
  const manifest = defineProviderPackage(input.manifest);
  const providerOperations = new Map(manifest.operations.map((operation) => [operation.alias, operation]));
  const profileAliases = new Set(profile.operations.map((operation) => operation.alias));
  const profileExtensionAliases = new Set(
    profile.operations
      .filter((operation) => operation.level === "extension")
      .map((operation) => operation.alias),
  );
  const matchedOperations: string[] = [];
  const missingRequiredOperations: string[] = [];
  const missingRecommendedOperations: string[] = [];
  const missingOptionalOperations: string[] = [];
  const mismatchedOperations: ProviderOperationCoverageMismatch[] = [];

  for (const operation of profile.operations) {
    if (operation.level === "extension") continue;
    const providerOperation = providerOperations.get(operation.alias);
    const mismatch = providerOperationCoverageMismatch(operation, providerOperation);
    if (!mismatch) {
      matchedOperations.push(operation.alias);
      continue;
    }
    mismatchedOperations.push(mismatch);
    if (operation.level === "required") missingRequiredOperations.push(operation.alias);
    if (operation.level === "recommended") missingRecommendedOperations.push(operation.alias);
    if (operation.level === "optional") missingOptionalOperations.push(operation.alias);
  }

  const optionalOperationCount = profile.operations.filter((operation) => operation.level === "optional").length;
  const categoryMatches = manifest.category === profile.category;
  const conformant = categoryMatches && missingRequiredOperations.length === 0;
  let coverage: ProviderCapabilityCoverage = "partial";
  if (conformant && missingRecommendedOperations.length === 0) {
    coverage = optionalOperationCount > 0 && missingOptionalOperations.length === 0 ? "full" : "standard";
  }

  const extensionOperations = manifest.operations
    .filter((operation) =>
      operation.extension
      || profileExtensionAliases.has(operation.alias)
      || !profileAliases.has(operation.alias)
    )
    .map((operation) => operation.alias);

  return ProviderCapabilityCoverageReportSchema.parse({
    providerPackageId: manifest.id,
    category: manifest.category,
    expectedCategory: profile.category,
    categoryMatches,
    coverage,
    conformant,
    matchedOperations,
    missingRequiredOperations,
    missingRecommendedOperations,
    missingOptionalOperations,
    extensionOperations,
    mismatchedOperations,
  });
}

export function checkProviderCapabilityCoverage(input: {
  profile: IntegrationCategoryProfileInput;
  manifest: ProviderManifestInput;
}): boolean {
  return deriveProviderCapabilityCoverage(input).conformant;
}

export function createProviderRegistry(manifests: ProviderManifestInput[] = []): ProviderRegistry {
  const byId = new Map<string, ProviderManifest>();
  const registry: ProviderRegistry = {
    register(manifestInput) {
      const manifest = defineProviderPackage(manifestInput);
      byId.set(manifest.id, manifest);
      return manifest;
    },
    list(queryInput = {}) {
      const query = ProviderRegistryQuerySchema.parse(queryInput);
      return [...byId.values()].filter((manifest) => providerMatchesQuery(manifest, query));
    },
    get(id) {
      return byId.get(id);
    },
    require(id) {
      const manifest = byId.get(id);
      if (!manifest) throw new Error(`Provider package '${id}' is not registered.`);
      return manifest;
    },
  };
  for (const manifest of manifests) registry.register(manifest);
  return registry;
}

export function isCoreChannelCapability(capability: string): capability is CoreChannelCapability {
  return (coreChannelCapabilities as readonly string[]).includes(capability);
}

function providerMatchesQuery(manifest: ProviderManifest, query: ProviderRegistryQuery) {
  if (query.category && manifest.category !== query.category) return false;
  if (query.provider && manifest.provider !== query.provider) return false;
  if (query.trustLevels?.length && !query.trustLevels.includes(manifest.trustLevel)) return false;
  if (query.packageNames?.length && !query.packageNames.includes(manifest.packageName)) return false;
  if (query.directions?.length && !query.directions.some((direction) => manifest.directions.includes(direction))) {
    return false;
  }
  if (query.channelAudiences?.length && !query.channelAudiences.some((audience) => manifest.channelAudiences.includes(audience))) {
    return false;
  }
  if (query.capabilities?.length) {
    const capabilities = new Set(manifest.capabilities.map((capability) => capability.capability));
    if (!query.capabilities.every((capability) => capabilities.has(capability))) return false;
  }
  return true;
}

function providerOperationCoverageMismatch(
  expected: CategoryOperationDeclaration,
  actual?: ProviderOperationDeclaration,
): ProviderOperationCoverageMismatch | undefined {
  if (!actual) {
    return ProviderOperationCoverageMismatchSchema.parse({
      alias: expected.alias,
      reason: "missing",
      expectedCapability: expected.capability,
      ...(expected.providerObject ? { expectedProviderObject: expected.providerObject } : {}),
    });
  }
  if (actual.capability !== expected.capability) {
    return ProviderOperationCoverageMismatchSchema.parse({
      alias: expected.alias,
      reason: "capability-mismatch",
      expectedCapability: expected.capability,
      actualCapability: actual.capability,
      ...(expected.providerObject ? { expectedProviderObject: expected.providerObject } : {}),
      ...(actual.providerObject ? { actualProviderObject: actual.providerObject } : {}),
    });
  }
  if (expected.providerObject && actual.providerObject !== expected.providerObject) {
    return ProviderOperationCoverageMismatchSchema.parse({
      alias: expected.alias,
      reason: "provider-object-mismatch",
      expectedCapability: expected.capability,
      actualCapability: actual.capability,
      expectedProviderObject: expected.providerObject,
      ...(actual.providerObject ? { actualProviderObject: actual.providerObject } : {}),
    });
  }
  return undefined;
}

function assertUniqueOperationAliases(
  operations: Array<{ alias: string }>,
  owner: string,
) {
  assertUniqueNamedValues(
    operations.map((operation) => operation.alias),
    owner,
    "operation alias",
  );
}

function assertUniqueNamedValues(
  values: string[],
  owner: string,
  label: string,
) {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`${owner} declares ${label} '${value}' more than once.`);
    }
    seen.add(value);
  }
}
