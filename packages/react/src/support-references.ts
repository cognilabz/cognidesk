import type { SupportReference } from "@cognidesk/core";

export function formatSupportReferences(references: SupportReference[] | undefined) {
  if (!references?.length) return "";
  return references.map((reference) => {
    if (reference.type === "knowledge") {
      const label = reference.title ?? reference.id;
      const source = reference.sourceName ? ` (${reference.sourceName})` : "";
      const metadata = reference.metadata === undefined ? "" : `\n${formatReferenceMetadata(reference.metadata)}`;
      return `Knowledge: ${label}${source}${metadata}`;
    }
    return `Tool result: ${reference.id}`;
  }).join("\n");
}

function formatReferenceMetadata(metadata: unknown) {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return String(metadata);
  return Object.entries(metadata as Record<string, unknown>)
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join(", ");
}
