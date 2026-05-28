import { randomUUID } from "node:crypto";
import { and, desc, eq } from "drizzle-orm";
import {
  StudioDashboardArtifactSchema,
  StudioDashboardDataQuerySchema,
  StudioDashboardDatasetSchema,
  type StudioDashboardArtifact,
  type StudioDashboardDataset,
} from "@cognidesk/studio-contracts";
import { putArtifact, getArtifactText } from "@/server/artifacts";
import { audit } from "@/server/audit";
import { currentTarget } from "@/server/target";
import { db } from "@/server/db/client";
import { dashboardArtifacts, dashboardArtifactVersions } from "@/server/db/schema";

export async function listDashboards(targetId?: string) {
  const rows = await db.select().from(dashboardArtifacts)
    .where(targetId ? eq(dashboardArtifacts.targetId, targetId) : undefined)
    .orderBy(desc(dashboardArtifacts.updatedAt));
  return rows;
}

export async function getDashboardArtifact(id: string): Promise<StudioDashboardArtifact | null> {
  const [dashboard] = await db.select().from(dashboardArtifacts).where(eq(dashboardArtifacts.id, id)).limit(1);
  if (!dashboard) return null;
  const [version] = await db.select().from(dashboardArtifactVersions)
    .where(and(
      eq(dashboardArtifactVersions.dashboardId, id),
      eq(dashboardArtifactVersions.version, dashboard.currentVersion),
    ))
    .limit(1);
  if (!version) return null;
  const datasets = parseStoredDatasets(version.datasetsJson, dashboard.targetId, version.createdAt.toISOString());
  return StudioDashboardArtifactSchema.parse({
    id: dashboard.id,
    targetId: dashboard.targetId,
    ownerUserId: dashboard.ownerUserId,
    slug: dashboard.slug,
    title: dashboard.title,
    description: dashboard.description ?? undefined,
    status: dashboard.status,
    version: dashboard.currentVersion,
    artifactKey: version.artifactKey,
    renderer: JSON.parse(version.rendererJson) as unknown,
    datasets,
    createdAt: dashboard.createdAt.toISOString(),
    updatedAt: dashboard.updatedAt.toISOString(),
    publishedAt: dashboard.publishedAt?.toISOString(),
  });
}

export async function getDashboardCode(id: string) {
  const artifact = await getDashboardArtifact(id);
  if (!artifact) return null;
  return {
    artifact,
    code: await getArtifactText({ key: artifact.artifactKey }),
  };
}

export async function saveDashboardDraft(input: {
  userId: string;
  targetId?: string;
  dashboardId?: string;
  title: string;
  slug?: string;
  description?: string;
  code: string;
  datasets?: StudioDashboardDataset[];
  fallback?: unknown;
}) {
  const target = await currentTarget();
  const targetId = input.targetId ?? target.target.id;
  const now = new Date();
  const slug = slugify(input.slug ?? input.title);
  const dashboardId = input.dashboardId ?? randomUUID();
  const datasets = StudioDashboardDatasetSchema.array().parse(input.datasets ?? []);
  const existing = input.dashboardId
    ? await getDashboardArtifact(input.dashboardId)
    : null;
  const version = existing ? existing.version + 1 : 1;
  const artifactKey = `${target.dashboards.artifactPrefix}/${dashboardId}/v${version}/dashboard.tsx`;
  await putArtifact({
    key: artifactKey,
    body: input.code,
    contentType: "text/typescript",
  });

  if (existing) {
    await db.update(dashboardArtifacts).set({
      title: input.title,
      description: input.description ?? null,
      slug,
      currentVersion: version,
      status: "draft",
      updatedAt: now,
    }).where(eq(dashboardArtifacts.id, dashboardId));
  } else {
    await db.insert(dashboardArtifacts).values({
      id: dashboardId,
      targetId,
      ownerUserId: input.userId,
      slug,
      title: input.title,
      description: input.description ?? null,
      status: "draft",
      currentVersion: version,
      createdAt: now,
      updatedAt: now,
      publishedAt: null,
    });
  }

  await db.insert(dashboardArtifactVersions).values({
    id: randomUUID(),
    dashboardId,
    version,
    artifactKey,
    rendererJson: JSON.stringify({ kind: "react-component", entry: "Dashboard" }),
    datasetsJson: JSON.stringify(datasets),
    fallbackJson: JSON.stringify(input.fallback ?? {}),
    createdByUserId: input.userId,
    createdAt: now,
  });
  await audit({
    userId: input.userId,
    targetId,
    action: "dashboard.draft.saved",
    subjectType: "dashboard",
    subjectId: dashboardId,
    metadata: { version, artifactKey },
  });
  return await getDashboardArtifact(dashboardId);
}

export async function publishDashboard(input: {
  dashboardId: string;
  userId: string;
}) {
  const now = new Date();
  const artifact = await getDashboardArtifact(input.dashboardId);
  if (!artifact) return null;
  await db.update(dashboardArtifacts).set({
    status: "published",
    updatedAt: now,
    publishedAt: now,
  }).where(eq(dashboardArtifacts.id, input.dashboardId));
  await audit({
    userId: input.userId,
    targetId: artifact.targetId,
    action: "dashboard.published",
    subjectType: "dashboard",
    subjectId: input.dashboardId,
    metadata: { version: artifact.version },
  });
  return await getDashboardArtifact(input.dashboardId);
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || `dashboard-${Date.now()}`;
}

function parseStoredDatasets(rawJson: string, targetId: string, capturedAt: string) {
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
    source: strictSource.success
      ? strictSource.data
      : {
          capability: "cognidesk.events",
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

function stringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}
