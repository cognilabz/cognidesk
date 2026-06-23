import { integrationCatalogEntries } from "./catalog.generated.js";
import type { IntegrationCatalogEntry, IntegrationProviderReference } from "./types.js";

export const integrationCatalog = integrationCatalogEntries as readonly IntegrationCatalogEntry[];

export type IntegrationCatalogProviderId = typeof integrationCatalogEntries[number]["id"];

export interface IntegrationCatalogQuery {
  category?: string;
  provider?: string;
  packageName?: string;
  capabilities?: readonly string[];
  trustLevels?: readonly string[];
  strategies?: readonly string[];
}

const categoryAliases = new Map([
  ["contactCenter", "contact-center"],
  ["contact_center", "contact-center"],
  ["helpCenter", "help-center"],
  ["help_center", "help-center"],
]);

export function normalizeIntegrationCatalogCategory(category: string): string {
  return categoryAliases.get(category) ?? category;
}

export const integrationProviderReferences = integrationCatalog.map((entry) => ({
  id: entry.id,
  category: normalizeIntegrationCatalogCategory(entry.category),
  provider: entry.provider,
  importPath: entry.importPath,
  modulePath: entry.modulePath,
  manifestExport: entry.manifestExport,
})) satisfies readonly IntegrationProviderReference[];

export const integrationCatalogCategories = [
  ...new Set(integrationCatalog.map((entry) => normalizeIntegrationCatalogCategory(entry.category))),
].sort();

const catalogById = new Map(integrationCatalog.map((entry) => [entry.id, entry]));

export function listIntegrationCatalogEntries(query: IntegrationCatalogQuery = {}): readonly IntegrationCatalogEntry[] {
  return integrationCatalog.filter((entry) => matchesCatalogQuery(entry, query));
}

export function getIntegrationCatalogEntry(id: string): IntegrationCatalogEntry | undefined {
  return catalogById.get(id);
}

export function requireIntegrationCatalogEntry(id: string): IntegrationCatalogEntry {
  const entry = getIntegrationCatalogEntry(id);
  if (!entry) throw new Error(`Unknown Cognidesk integration catalog entry '${id}'.`);
  return entry;
}

export function isIntegrationCatalogEntryAvailable(id: string): boolean {
  return catalogById.has(id);
}

function matchesCatalogQuery(entry: IntegrationCatalogEntry, query: IntegrationCatalogQuery) {
  if (query.category && normalizeIntegrationCatalogCategory(entry.category) !== normalizeIntegrationCatalogCategory(query.category)) return false;
  if (query.provider && entry.provider !== query.provider) return false;
  if (query.packageName && entry.packageName !== query.packageName) return false;
  if (query.trustLevels?.length && !query.trustLevels.includes(entry.trustLevel)) return false;
  if (query.strategies?.length && !query.strategies.includes(entry.implementation.strategy)) return false;
  if (query.capabilities?.length) {
    const capabilities = new Set(entry.capabilities.map((capability) => capability.capability));
    if (!query.capabilities.every((capability) => capabilities.has(capability))) return false;
  }
  return true;
}
