import type { RetrievedKnowledgeItem } from "./types.js";

export function removeRawKnowledgeMarkers(text: string, knowledge: RetrievedKnowledgeItem[]) {
  if (text.length === 0) return text;
  let next = removeGenericRawMarkers(text);
  if (knowledge.length === 0) return normalizeWhitespace(next);
  const markerPattern = buildMarkerPattern(knowledge);
  if (!markerPattern) return normalizeWhitespace(next);
  next = next.replace(
    new RegExp(String.raw`\s*(?:Source|Sources|Citation|Citations)\s*:\s*(?:${markerPattern})(?:\s*[,;]\s*(?:${markerPattern}))*\.?`, "gi"),
    "",
  );
  next = next.replace(
    new RegExp(String.raw`\(\s*(?:(?:Source|Sources|Citation|Citations)\s*:\s*)?(?:${markerPattern})(?:\s*[,;]\s*(?:${markerPattern}))*\.?\s*\)`, "gi"),
    "",
  );
  next = next.replace(new RegExp(String.raw`\[\s*(?:${markerPattern})\s*\]`, "gi"), "");
  next = next.replace(new RegExp(String.raw`\bK\d+:[A-Za-z0-9_.:-]+\b`, "g"), "");
  return normalizeWhitespace(next);
}

function buildMarkerPattern(knowledge: RetrievedKnowledgeItem[]) {
  const markers = new Set<string>();
  knowledge.forEach((item, index) => {
    markers.add(`K${index + 1}:${item.id}`);
    markers.add(item.id);
  });
  const escaped = [...markers]
    .filter(Boolean)
    .sort((left, right) => right.length - left.length)
    .map(escapeRegExp);
  return escaped.length > 0 ? escaped.join("|") : null;
}

function removeGenericRawMarkers(text: string) {
  let next = text;
  next = next.replace(/\s*(?:Source|Sources|Citation|Citations)\s*:\s*K\d+:[A-Za-z0-9_.:-]+\.?/gi, "");
  next = next.replace(/\(\s*(?:(?:Source|Sources|Citation|Citations)\s*:\s*)?K\d+:[A-Za-z0-9_.:-]+\.?\s*\)/gi, "");
  next = next.replace(/\[\s*K\d+:[A-Za-z0-9_.:-]+\s*\]/gi, "");
  next = next.replace(/\bK\d+:[A-Za-z0-9_.:-]+\b/g, "");
  return next;
}

function normalizeWhitespace(text: string) {
  return text
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
