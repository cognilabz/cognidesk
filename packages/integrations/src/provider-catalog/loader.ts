import type { ProviderManifest } from "@cognidesk/core";

import {
  isIntegrationProviderReferenceAvailable,
  requireIntegrationProviderReference,
} from "./references.js";
import type { IntegrationProviderReference } from "./types.js";
import { integrationProviderRuntimeLoaders } from "./runtime-loaders.generated.js";

export type IntegrationProviderModule = Record<string, unknown>;
export type IntegrationProviderRuntimeLoader = () => Promise<IntegrationProviderModule>;

export interface IntegrationProviderRuntimeLoaderRegistration {
  id: string;
  load: IntegrationProviderRuntimeLoader;
}

export interface IntegrationProviderRuntimeRegistry {
  register(registration: IntegrationProviderRuntimeLoaderRegistration): void;
  has(idOrReference: string | IntegrationProviderReference): boolean;
  loadProviderIntegration(idOrReference: string | IntegrationProviderReference): Promise<IntegrationProviderModule>;
  loadProviderIntegrationManifest(idOrReference: string | IntegrationProviderReference): Promise<ProviderManifest>;
  registeredIds(): readonly string[];
}

export function defineIntegrationProviderRuntimeLoader(
  registration: IntegrationProviderRuntimeLoaderRegistration,
): IntegrationProviderRuntimeLoaderRegistration {
  requireIntegrationProviderReference(registration.id);
  return registration;
}

export function createIntegrationProviderRuntimeRegistry(
  registrations: readonly IntegrationProviderRuntimeLoaderRegistration[] = [],
): IntegrationProviderRuntimeRegistry {
  const loaders = new Map<string, IntegrationProviderRuntimeLoader>();
  const registry: IntegrationProviderRuntimeRegistry = {
    register(registration) {
      requireIntegrationProviderReference(registration.id);
      loaders.set(registration.id, registration.load);
    },
    has(idOrReference) {
      const reference = resolveIntegrationProviderReference(idOrReference);
      return loaders.has(reference.id);
    },
    async loadProviderIntegration(idOrReference) {
      const reference = resolveIntegrationProviderReference(idOrReference);
      const loader = loaders.get(reference.id);
      if (!loader) throw new Error(`Provider integration '${reference.id}' is not registered in this runtime.`);
      return loader();
    },
    async loadProviderIntegrationManifest(idOrReference) {
      const reference = resolveIntegrationProviderReference(idOrReference);
      const module = await registry.loadProviderIntegration(reference);
      const manifest = Reflect.get(module, reference.manifestExport) as ProviderManifest | undefined;
      if (!manifest) throw new Error(`Provider integration '${reference.id}' did not export manifest '${reference.manifestExport}'.`);
      return manifest;
    },
    registeredIds() {
      return [...loaders.keys()].sort();
    },
  };

  for (const registration of registrations) registry.register(registration);
  return registry;
}

export const defaultIntegrationProviderRuntimeRegistry = createIntegrationProviderRuntimeRegistry(
  integrationProviderRuntimeLoaders,
);

export function registerProviderIntegrationLoader(registration: IntegrationProviderRuntimeLoaderRegistration): void {
  defaultIntegrationProviderRuntimeRegistry.register(registration);
}

export async function loadProviderIntegration(idOrReference: string | IntegrationProviderReference): Promise<IntegrationProviderModule> {
  return defaultIntegrationProviderRuntimeRegistry.loadProviderIntegration(idOrReference);
}

export async function loadProviderIntegrationManifest(idOrReference: string | IntegrationProviderReference): Promise<ProviderManifest> {
  return defaultIntegrationProviderRuntimeRegistry.loadProviderIntegrationManifest(idOrReference);
}

function resolveIntegrationProviderReference(idOrReference: string | IntegrationProviderReference): IntegrationProviderReference {
  const reference = typeof idOrReference === "string"
    ? requireIntegrationProviderReference(idOrReference)
    : idOrReference;
  if (!isIntegrationProviderReferenceAvailable(reference)) {
    throw new Error(`Provider integration '${reference.id}' is not available in this @cognidesk/integrations slice.`);
  }
  return reference;
}
