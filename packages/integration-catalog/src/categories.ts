export function normalizeIntegrationCatalogCategory(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
