import type { IntegrationProviderReference } from "./types.js";

export const integrationProviderReferences = [] as readonly IntegrationProviderReference[];

export type IntegrationProviderId = typeof integrationProviderReferences[number]["id"];

export const integrationProviderCategories = [...new Set(integrationProviderReferences.map((provider) => provider.category))].sort();

export function getIntegrationProviderReference(id: string): IntegrationProviderReference | undefined {
  return integrationProviderReferences.find((provider) => provider.id === id);
}

export function requireIntegrationProviderReference(id: string): IntegrationProviderReference {
  const reference = getIntegrationProviderReference(id);
  if (!reference) throw new Error(`Unknown Cognidesk provider integration '${id}'.`);
  return reference;
}

export function isIntegrationProviderReferenceAvailable(idOrReference: string | IntegrationProviderReference): boolean {
  const id = typeof idOrReference === "string" ? idOrReference : idOrReference.id;
  return integrationProviderReferences.some((provider) => provider.id === id);
}
