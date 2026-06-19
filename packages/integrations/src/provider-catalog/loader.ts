import type { ProviderManifest } from "@cognidesk/core";

import {
  isIntegrationProviderReferenceAvailable,
  requireIntegrationProviderReference,
} from "./references.js";
import type { IntegrationProviderReference } from "./types.js";

async function importProviderModule(reference: IntegrationProviderReference): Promise<Record<string, unknown>> {
  if (!isIntegrationProviderReferenceAvailable(reference)) {
    throw new Error(`Provider integration '${reference.id}' is not available in this @cognidesk/integrations slice.`);
  }

  return import(reference.importPath) as Promise<Record<string, unknown>>;
}

export type IntegrationProviderModule = Awaited<ReturnType<typeof importProviderModule>>;

export async function loadProviderIntegration(idOrReference: string | IntegrationProviderReference): Promise<IntegrationProviderModule> {
  const reference = typeof idOrReference === "string"
    ? requireIntegrationProviderReference(idOrReference)
    : idOrReference;
  return importProviderModule(reference);
}

export async function loadProviderIntegrationManifest(idOrReference: string | IntegrationProviderReference): Promise<ProviderManifest> {
  const reference = typeof idOrReference === "string"
    ? requireIntegrationProviderReference(idOrReference)
    : idOrReference;
  const module = await loadProviderIntegration(reference);
  const manifest = Reflect.get(module, reference.manifestExport) as ProviderManifest | undefined;
  if (!manifest) throw new Error(`Provider integration '${reference.id}' did not export manifest '${reference.manifestExport}'.`);
  return manifest;
}
