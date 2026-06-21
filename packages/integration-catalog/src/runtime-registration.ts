import { isIntegrationCatalogEntryAvailable, requireIntegrationCatalogEntry } from "./catalog.js";

export type IntegrationRuntimeModule = Record<string, unknown>;
export type IntegrationRuntimeLoader = () => Promise<IntegrationRuntimeModule>;

export interface IntegrationRuntimeRegistration {
  id: string;
  load: IntegrationRuntimeLoader;
}

export interface IntegrationRuntimeRegistry {
  register(registration: IntegrationRuntimeRegistration): void;
  has(id: string): boolean;
  load(id: string): Promise<IntegrationRuntimeModule>;
  loadManifest(id: string): Promise<unknown>;
  registeredIds(): readonly string[];
}

export function defineIntegrationRuntimeLoader(registration: IntegrationRuntimeRegistration): IntegrationRuntimeRegistration {
  requireIntegrationCatalogEntry(registration.id);
  return registration;
}

export function createIntegrationRuntimeRegistry(
  registrations: readonly IntegrationRuntimeRegistration[] = [],
): IntegrationRuntimeRegistry {
  const loaders = new Map<string, IntegrationRuntimeLoader>();
  const registry: IntegrationRuntimeRegistry = {
    register(registration) {
      requireIntegrationCatalogEntry(registration.id);
      loaders.set(registration.id, registration.load);
    },
    has(id) {
      return loaders.has(id);
    },
    async load(id) {
      const entry = requireIntegrationCatalogEntry(id);
      const loader = loaders.get(id);
      if (!loader) {
        throw new Error(
          `Integration '${entry.id}' is available in the metadata catalog but is not registered in this runtime.`,
        );
      }
      return loader();
    },
    async loadManifest(id) {
      const entry = requireIntegrationCatalogEntry(id);
      const module = await registry.load(id);
      const manifest = Reflect.get(module, entry.manifestExport);
      if (!manifest) {
        throw new Error(`Integration '${entry.id}' did not export manifest '${entry.manifestExport}'.`);
      }
      return manifest;
    },
    registeredIds() {
      return [...loaders.keys()].sort();
    },
  };

  for (const registration of registrations) registry.register(registration);
  return registry;
}

export function assertIntegrationRuntimeRegistration(id: string): void {
  if (!isIntegrationCatalogEntryAvailable(id)) {
    throw new Error(`Unknown Cognidesk integration '${id}'. Register only metadata catalog IDs.`);
  }
}
