import {
  defineIntegrationCategoryProfile as defineCoreIntegrationCategoryProfile,
  type ActionAudience,
  type CategoryDataSourceDeclaration,
  type CategoryEventDeclaration,
  type CategoryOperationDeclaration,
  type CategoryOperationLevel,
  type CategoryOutputDeclaration,
  type IntegrationCategoryProfile as CoreIntegrationCategoryProfile,
  type IntegrationCategoryProfileInput,
  type ProviderCategory,
  type ProviderObjectDescriptor,
} from "@cognidesk/core";

export type CategoryCoverageLevel = "not-conformant" | "partial" | "standard" | "full";

export interface OperationSchemaDescriptor {
  kind: "schema-ref";
  ref: string;
  description?: string;
}

export interface IntegrationCategoryProfile extends CoreIntegrationCategoryProfile {
  id: string;
  category: ProviderCategory;
  label: string;
  description: string;
  providerObjects: ProviderObjectDescriptor[];
  operations: CategoryOperationDeclaration[];
  events: CategoryEventDeclaration[];
  outputs: CategoryOutputDeclaration[];
  dataSources: CategoryDataSourceDeclaration[];
  notes: string[];
}

export interface ProviderCapabilityCoverage {
  profileId: string;
  category: ProviderCategory;
  coverageLevel: CategoryCoverageLevel;
  supportedOperationAliases: readonly string[];
  missingRequiredOperationAliases: readonly string[];
  missingRecommendedOperationAliases: readonly string[];
  missingOptionalOperationAliases: readonly string[];
}

type CategoryOperationInput =
  Omit<CategoryOperationDeclaration, "inputSchema" | "outputSchema" | "audiences">
  & Partial<Pick<CategoryOperationDeclaration, "inputSchema" | "outputSchema">>
  & { audiences?: readonly ActionAudience[] };

type ConcreteIntegrationCategoryProfileInput =
  Omit<IntegrationCategoryProfileInput, "id" | "label" | "description" | "events" | "outputs" | "dataSources" | "notes">
  & {
    id: string;
    label: string;
    description: string;
    events: CategoryEventDeclaration[];
    outputs: CategoryOutputDeclaration[];
    dataSources: CategoryDataSourceDeclaration[];
    notes?: readonly string[];
  };

export const customerAudiences = ["customer-facing", "mixed"] as const;
export const internalAudiences = ["internal-support", "mixed"] as const;
export const allAudiences = ["customer-facing", "internal-support", "mixed"] as const;

export const categoryProfilesCoreIntegrationNote =
  "Core owns the shared IntegrationCategoryProfile contract; @cognidesk/integration-kit owns the concrete provider-neutral category profiles.";

type CategoryOperationWithAlias<Alias extends string> =
  CategoryOperationDeclaration
  & { alias: Alias };

type OperationAliasOf<Operation> = Operation extends { alias: infer Alias extends string } ? Alias : never;

export type CategoryOperationAliasMap<Alias extends string> = Readonly<{
  [Key in Alias]: Key;
}>;

export function operation<const Input extends CategoryOperationInput>(
  input: Input,
): CategoryOperationWithAlias<Input["alias"]> {
  const { audiences, inputSchema, outputSchema, ...rest } = input;
  return {
    ...rest,
    ...(audiences ? { audiences: [...audiences] } : {}),
    inputSchema: inputSchema ?? schemaRef(`${schemaName(input.alias)}Input`),
    outputSchema: outputSchema ?? schemaRef(`${schemaName(input.alias)}Result`),
  } as CategoryOperationWithAlias<Input["alias"]>;
}

function schemaRef(ref: string): OperationSchemaDescriptor {
  return { kind: "schema-ref", ref };
}

function schemaName(alias: string) {
  return alias
    .split(/[.-]/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
}

export function defineIntegrationCategoryProfile<const Operations extends readonly CategoryOperationDeclaration[]>(
  profile: ConcreteIntegrationCategoryProfileInput & { operations: Operations },
): IntegrationCategoryProfile & { operations: Operations } {
  const parsed = defineCoreIntegrationCategoryProfile({
    ...profile,
    notes: profile.notes ? [...profile.notes] : [],
  });
  assertUnique(parsed.events.map((candidate) => candidate.kind), `${profile.id} event kind`);
  assertUnique(parsed.outputs.map((candidate) => candidate.intent), `${profile.id} output intent`);
  assertUnique(parsed.dataSources.map((candidate) => candidate.id), `${profile.id} data source`);
  return parsed as IntegrationCategoryProfile & { operations: Operations };
}

export function categoryOperationAliases(
  profile: IntegrationCategoryProfile,
  level?: CategoryOperationLevel,
): readonly string[] {
  return profile.operations
    .filter((candidate) => level === undefined || candidate.level === level)
    .map((candidate) => candidate.alias);
}

export function findCategoryOperation(
  profile: IntegrationCategoryProfile,
  alias: string,
): CategoryOperationDeclaration | undefined {
  return profile.operations.find((candidate) => candidate.alias === alias);
}

export function categoryOperationAliasMap<const Profile extends { operations: readonly { alias: string }[] }>(
  profile: Profile,
): CategoryOperationAliasMap<OperationAliasOf<Profile["operations"][number]>> {
  return Object.fromEntries(
    profile.operations.map((candidate) => [candidate.alias, candidate.alias]),
  ) as CategoryOperationAliasMap<OperationAliasOf<Profile["operations"][number]>>;
}

export function deriveProviderCapabilityCoverage(
  profile: IntegrationCategoryProfile,
  supportedOperationAliases: readonly string[],
): ProviderCapabilityCoverage {
  const supported = new Set(supportedOperationAliases);
  const required = categoryOperationAliases(profile, "required");
  const recommended = categoryOperationAliases(profile, "recommended");
  const optional = categoryOperationAliases(profile, "optional");
  const missingRequired = required.filter((alias) => !supported.has(alias));
  const missingRecommended = recommended.filter((alias) => !supported.has(alias));
  const missingOptional = optional.filter((alias) => !supported.has(alias));
  const coverageLevel: CategoryCoverageLevel = missingRequired.length > 0
    ? "not-conformant"
    : missingRecommended.length > 0
      ? "partial"
      : missingOptional.length > 0
        ? "standard"
        : "full";

  return {
    profileId: profile.id,
    category: profile.category,
    coverageLevel,
    supportedOperationAliases: [...supported].sort(),
    missingRequiredOperationAliases: missingRequired,
    missingRecommendedOperationAliases: missingRecommended,
    missingOptionalOperationAliases: missingOptional,
  };
}

function assertUnique(values: readonly string[], label: string) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  if (duplicates.size > 0) {
    throw new Error(`Duplicate ${label}: ${[...duplicates].sort().join(", ")}`);
  }
}
