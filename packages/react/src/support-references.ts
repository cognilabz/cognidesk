import type { SupportReference } from "@cognidesk/core";

export interface SupportSourceLink {
  id: string;
  label: string;
  url?: string;
}

export function formatSupportReferences(references: SupportReference[] | undefined) {
  if (!references?.length) return "";
  return references.map((reference) => {
    if (reference.type === "knowledge") {
      const label = reference.title ?? reference.id;
      return `Source: ${label}`;
    }
    return `Tool result: ${reference.id}`;
  }).join("\n");
}

export function collectSupportSourceLinks(references: SupportReference[] | undefined): SupportSourceLink[] {
  if (!references?.length) return [];
  const byKey = new Map<string, SupportSourceLink>();
  for (const reference of references) {
    if (reference.type !== "knowledge") continue;
    const url = extractReferenceUrl(reference.metadata);
    const label = reference.title ?? reference.sourceName ?? "Source";
    const key = `${label}:${url ?? reference.id}`;
    if (!byKey.has(key)) {
      byKey.set(key, {
        id: reference.id,
        label,
        ...(url ? { url } : {}),
      });
    }
  }
  return [...byKey.values()];
}

function extractReferenceUrl(metadata: unknown) {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return null;
  const record = metadata as Record<string, unknown>;
  const value = record.url ?? record.documentUrl ?? record.href;
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
