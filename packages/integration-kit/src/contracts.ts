import {
  defineProviderPackage,
  deriveProviderCapabilityCoverage,
  type ProviderManifest,
  type ProviderManifestInput,
} from "@cognidesk/core";
import {
  getIntegrationCategoryProfile,
  type IntegrationCategoryProfile,
} from "./category-profiles.js";
import { IntegrationError, integrationErrorToJSON, normalizeIntegrationError } from "./errors.js";
import {
  createOperationInstrumentation,
  type IntegrationInstrumentationHooks,
} from "./instrumentation.js";

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

export interface IntegrationOperationContext<Credentials = unknown> {
  providerPackageId: string;
  provider: string;
  operationAlias: string;
  credentials?: Credentials;
  abortSignal?: AbortSignal;
  metadata?: Record<string, unknown>;
}

export type IntegrationOperationHandler<
  Input = unknown,
  Output = unknown,
  Credentials = unknown,
> = (
  input: Input,
  context: IntegrationOperationContext<Credentials>,
) => Output | Promise<Output>;

export type IntegrationOperationHandlers<Credentials = unknown> = Record<
  string,
  IntegrationOperationHandler<any, any, Credentials>
>;
type AnyIntegrationOperationHandlers = Record<string, IntegrationOperationHandler<any, any, any>>;

export type ManifestOperationAlias<Manifest> =
  Manifest extends { operations?: readonly (infer Operation)[] }
    ? Operation extends { alias: infer Alias extends string }
      ? Alias
      : never
    : never;

type HandlerAliases<Handlers> = Extract<keyof Handlers, string>;

type MissingOperationHandlers<Manifest, Handlers> = {
  [Alias in Exclude<ManifestOperationAlias<Manifest>, HandlerAliases<Handlers>>]: IntegrationOperationHandler;
};

type ExtraOperationHandlers<Manifest, Handlers> = {
  [Alias in Exclude<HandlerAliases<Handlers>, ManifestOperationAlias<Manifest>>]: never;
};

export type ExactIntegrationOperationHandlers<
  Manifest,
  Handlers extends AnyIntegrationOperationHandlers,
> = Handlers & MissingOperationHandlers<Manifest, Handlers> & ExtraOperationHandlers<Manifest, Handlers>;

export type ProviderNamespacedOperationAlias<Provider extends string> = `${Provider}.${string}`;

export interface ProviderManifestAuthorInput {
  id: string;
  name: string;
  packageName: string;
  provider: string;
  category: string;
  operations?: readonly { alias: string }[];
  metadata?: unknown;
}

export interface OperationBindingReport {
  declaredOperationAliases: string[];
  handlerOperationAliases: string[];
  missingHandlerAliases: string[];
  extraHandlerAliases: string[];
  invalidExtensionOperationAliases: string[];
}

export interface DefineIntegrationInput<
  Manifest extends ProviderManifestAuthorInput,
  Credentials = unknown,
  Handlers extends IntegrationOperationHandlers<Credentials> = IntegrationOperationHandlers<Credentials>,
> {
  manifest: Manifest;
  operations: ExactIntegrationOperationHandlers<Manifest, Handlers>;
  instrumentation?: IntegrationInstrumentationHooks;
  metadata?: Record<string, unknown>;
  credentials?: Credentials;
}

export interface DefinedIntegration<
  Manifest extends ProviderManifestAuthorInput,
  Credentials = unknown,
  Handlers extends IntegrationOperationHandlers<Credentials> = IntegrationOperationHandlers<Credentials>,
> {
  manifest: ProviderManifest & Manifest;
  operations: Handlers;
  operationAliases: ManifestOperationAlias<Manifest>[];
  bindingReport: OperationBindingReport;
  metadata?: Record<string, unknown>;
  getOperationHandler<Alias extends keyof Handlers & string>(alias: Alias): Handlers[Alias] | undefined;
  requireOperationHandler<Alias extends keyof Handlers & string>(alias: Alias): Handlers[Alias];
  run<Alias extends keyof Handlers & string>(
    alias: Alias,
    input: Parameters<Handlers[Alias]>[0],
    context?: Partial<IntegrationOperationContext<Credentials>>,
  ): Promise<Awaited<ReturnType<Handlers[Alias]>>>;
}

export function defineIntegrationProviderPackage<const Manifest extends ProviderManifestAuthorInput>(
  manifest: Manifest,
): ProviderManifest {
  const profile = getIntegrationCategoryProfile(manifest.category);
  const parsed = profile
    ? defineProviderWithProfileMetadata(manifest, profile)
    : defineProviderPackage(manifest as unknown as ProviderManifestInput);
  assertProviderExtensionOperationAliases(parsed, profile);
  return parsed;
}

export function defineIntegration<
  const Manifest extends ProviderManifestAuthorInput,
  Credentials = unknown,
  const Handlers extends IntegrationOperationHandlers<Credentials> = IntegrationOperationHandlers<Credentials>,
>(input: DefineIntegrationInput<Manifest, Credentials, Handlers>): DefinedIntegration<Manifest, Credentials, Handlers> {
  const manifest = defineIntegrationProviderPackage(input.manifest) as ProviderManifest & Manifest;
  const operations = input.operations as Handlers;
  const bindingReport = createOperationBindingReport(manifest, operations);
  assertOperationBindingReport(manifest, bindingReport);
  const operationAliases = manifest.operations.map((operation) => operation.alias) as ManifestOperationAlias<Manifest>[];

  const integration: DefinedIntegration<Manifest, Credentials, Handlers> = {
    manifest,
    operations,
    operationAliases,
    bindingReport,
    ...(input.metadata ? { metadata: input.metadata } : {}),
    getOperationHandler(alias) {
      return operations[alias];
    },
    requireOperationHandler(alias) {
      const handler = operations[alias];
      if (!handler) {
        throw new IntegrationError("contract-violation", `No handler is registered for operation '${alias}'.`, {
          providerPackageId: manifest.id,
          provider: manifest.provider,
          operationAlias: alias,
        });
      }
      return handler;
    },
    run: async <Alias extends keyof Handlers & string>(
      alias: Alias,
      operationInput: Parameters<Handlers[Alias]>[0],
      context: Partial<IntegrationOperationContext<Credentials>> = {},
    ): Promise<Awaited<ReturnType<Handlers[Alias]>>> => {
      const handler = operations[alias];
      if (!handler) {
        throw new IntegrationError("contract-violation", `No handler is registered for operation '${alias}'.`, {
          providerPackageId: manifest.id,
          provider: manifest.provider,
          operationAlias: alias,
        });
      }
      const instrumentation = createOperationInstrumentation({
        providerPackageId: manifest.id,
        provider: manifest.provider,
        operationAlias: alias,
        ...(input.instrumentation ? { hooks: input.instrumentation } : {}),
        ...(context.metadata ? { metadata: context.metadata } : {}),
      });
      try {
        const result = await handler(operationInput, {
          providerPackageId: manifest.id,
          provider: manifest.provider,
          operationAlias: alias,
          ...(context.credentials !== undefined
            ? { credentials: context.credentials }
            : input.credentials !== undefined
              ? { credentials: input.credentials }
              : {}),
          ...(context.abortSignal ? { abortSignal: context.abortSignal } : {}),
          ...(context.metadata ? { metadata: context.metadata } : {}),
        });
        instrumentation.success();
        return result as Awaited<ReturnType<Handlers[Alias]>>;
      } catch (error) {
        const normalized = normalizeIntegrationError(error, {
          providerPackageId: manifest.id,
          provider: manifest.provider,
          operationAlias: alias,
        });
        instrumentation.error(integrationErrorToJSON(normalized));
        throw normalized;
      }
    },
  };
  return integration;
}

export function createOperationBindingReport(
  manifest: Pick<ProviderManifest, "operations" | "provider" | "id" | "category" | "packageName">,
  handlers: Record<string, unknown>,
): OperationBindingReport {
  const declaredOperationAliases = manifest.operations.map((operation) => operation.alias).sort();
  const handlerOperationAliases = Object.keys(handlers).sort();
  const declared = new Set(declaredOperationAliases);
  const handlerAliases = new Set(handlerOperationAliases);
  const profile = getIntegrationCategoryProfile(manifest.category);

  return {
    declaredOperationAliases,
    handlerOperationAliases,
    missingHandlerAliases: declaredOperationAliases.filter((alias) => !handlerAliases.has(alias)),
    extraHandlerAliases: handlerOperationAliases.filter((alias) => !declared.has(alias)),
    invalidExtensionOperationAliases: invalidProviderExtensionOperationAliases(manifest, profile),
  };
}

export function isProviderNamespacedOperationAlias(
  alias: string,
  manifest: Pick<ProviderManifest, "id" | "provider" | "packageName">,
): boolean {
  return providerOperationAliasNamespaces(manifest).some((namespace) => alias.startsWith(`${namespace}.`));
}

export function providerOperationAliasNamespaces(
  manifest: Pick<ProviderManifest, "id" | "provider" | "packageName">,
): readonly string[] {
  const packageLeaf = manifest.packageName.split("/").pop()?.replace(/^integration-/, "");
  return [...new Set([
    manifest.provider,
    manifest.id,
    ...(packageLeaf ? [packageLeaf] : []),
  ].filter((value): value is string => Boolean(value)))];
}

function defineProviderWithProfileMetadata<const Manifest extends ProviderManifestAuthorInput>(
  manifest: Manifest,
  profile: IntegrationCategoryProfile,
): ProviderManifest {
  const coverage = deriveProviderCapabilityCoverage({
    profile,
    manifest: manifest as unknown as ProviderManifestInput,
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
  } as unknown as ProviderManifestInput);
}

function assertOperationBindingReport(
  manifest: Pick<ProviderManifest, "id" | "provider">,
  report: OperationBindingReport,
): void {
  if (
    report.missingHandlerAliases.length === 0
    && report.extraHandlerAliases.length === 0
    && report.invalidExtensionOperationAliases.length === 0
  ) {
    return;
  }
  throw new IntegrationError("contract-violation", `Integration '${manifest.id}' operation contract is invalid.`, {
    providerPackageId: manifest.id,
    provider: manifest.provider,
    details: report as unknown as Record<string, unknown>,
  });
}

function assertProviderExtensionOperationAliases(
  manifest: ProviderManifest,
  profile: IntegrationCategoryProfile | undefined,
): void {
  const invalid = invalidProviderExtensionOperationAliases(manifest, profile);
  if (invalid.length === 0) return;
  throw new IntegrationError("contract-violation", `Provider extension operation aliases must be provider-namespaced for '${manifest.id}'.`, {
    providerPackageId: manifest.id,
    provider: manifest.provider,
    details: { invalidExtensionOperationAliases: invalid },
  });
}

function invalidProviderExtensionOperationAliases(
  manifest: Pick<ProviderManifest, "id" | "provider" | "packageName" | "operations">,
  profile: IntegrationCategoryProfile | undefined,
): string[] {
  const profileAliases = new Set(profile?.operations.map((operation) => operation.alias) ?? []);
  return manifest.operations
    .filter((operation) => {
      const extension = operation.extension || (profile !== undefined && !profileAliases.has(operation.alias));
      return extension && !isProviderNamespacedOperationAlias(operation.alias, manifest);
    })
    .map((operation) => operation.alias)
    .sort();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
