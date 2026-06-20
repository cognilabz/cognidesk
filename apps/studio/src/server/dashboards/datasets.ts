import {
  StudioDashboardDataQuerySchema,
  StudioDashboardDatasetSchema,
  type StudioDashboardDataset,
} from "@cognidesk/studio-contracts";
import { slugify } from "./slugs";

export function normalizeDashboardDataset(dataset: StudioDashboardDataset, targetId: string): StudioDashboardDataset {
  const params = dataset.source.params;
  const endpoint = stringValue(params.endpoint);
  const isConversationDataset = endpoint?.includes("conversations") || containsConversationRows(dataset.data);
  const source = isConversationDataset
    ? {
        ...dataset.source,
        capability: "cognidesk.conversations" as const,
        targetId,
        params: { limit: 1000, ...params },
      }
    : dataset.source;
  const mode = dataset.mode === "live" || Boolean(params.live) || isConversationDataset ? "live" : dataset.mode;
  return {
    ...dataset,
    mode,
    source,
  };
}

export function parseStoredDatasets(rawJson: string, targetId: string, capturedAt: string) {
  const parsed = JSON.parse(rawJson) as unknown;
  const strict = StudioDashboardDatasetSchema.array().safeParse(parsed);
  if (strict.success) return strict.data;
  if (!Array.isArray(parsed)) return StudioDashboardDatasetSchema.array().parse([]);
  return StudioDashboardDatasetSchema.array().parse(
    parsed.map((dataset, index) => coerceLegacyDataset(dataset, index, targetId, capturedAt)),
  );
}

function coerceLegacyDataset(raw: unknown, index: number, targetId: string, capturedAt: string): StudioDashboardDataset {
  const record = isRecord(raw) ? raw : { data: raw };
  const title = stringValue(record.title) ?? stringValue(record.name) ?? `Dataset ${index + 1}`;
  const id = stringValue(record.id) ?? slugify(title);
  const description = stringValue(record.description);
  const sourceRecord = isRecord(record.source) ? record.source : {};
  const strictSource = StudioDashboardDataQuerySchema.safeParse(sourceRecord);
  const params = isRecord(sourceRecord.params) ? { ...sourceRecord.params } : {};
  for (const key of ["endpoint", "type", "capability"]) {
    const value = stringValue(sourceRecord[key]);
    if (value) params[key] = value;
  }
  return {
    id,
    title,
    ...(description ? { description } : {}),
    mode: stringValue(record.mode) === "live" || record.live === true ? "live" : "static",
    source: strictSource.success
      ? strictSource.data
      : {
          capability: containsConversationRows(record.data ?? record.rows ?? raw) ? "cognidesk.conversations" : "cognidesk.events",
          targetId: stringValue(sourceRecord.targetId) ?? targetId,
          params,
        },
    capturedAt: stringValue(record.capturedAt) ?? capturedAt,
    data: record.data ?? record.rows ?? raw,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export function containsConversationRows(value: unknown) {
  const rows = conversationRows(value);
  return rows.some((row) => typeof row.id === "string" && typeof row.lifecycle === "string");
}

export function conversationRows(value: unknown): Record<string, unknown>[] {
  if (Array.isArray(value)) return value.filter(isRecord);
  if (!isRecord(value)) return [];
  for (const key of ["conversations", "rows", "data"]) {
    const rows = value[key];
    if (Array.isArray(rows)) return rows.filter(isRecord);
  }
  return [];
}

export function stringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}
