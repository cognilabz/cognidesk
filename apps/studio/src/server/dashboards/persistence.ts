import { randomUUID } from "node:crypto";
import { and, desc, eq } from "drizzle-orm";
import {
  StudioDashboardArtifactSchema,
  StudioDashboardDatasetSchema,
  StudioDashboardSpecSchema,
  type StudioDashboardArtifact,
  type StudioDashboardDataset,
  type StudioDashboardSpec,
} from "@cognidesk/studio-contracts";
import { deleteArtifact, getArtifactText, putArtifact } from "@/server/artifacts";
import { audit } from "@/server/audit";
import { db } from "@/server/db/client";
import { dashboardArtifacts, dashboardArtifactVersions } from "@/server/db/schema";
import { currentTarget } from "@/server/target";
import { ensureDashboardCode } from "./code";
import { normalizeDashboardDataset, parseStoredDatasets } from "./datasets";
import { demoTelemetryDashboardSeeds } from "./seeds";
import { inferDashboardSpec } from "./spec";
import { slugify, uniqueDashboardSlug } from "./slugs";

export async function listDashboards(targetId?: string) {
  const rows = await db.select().from(dashboardArtifacts)
    .where(targetId ? eq(dashboardArtifacts.targetId, targetId) : undefined)
    .orderBy(desc(dashboardArtifacts.updatedAt));
  return rows;
}

export async function ensureDemoTelemetryDashboards(input: {
  userId: string;
  targetId: string;
}) {
  const existing = await db.select({ slug: dashboardArtifacts.slug }).from(dashboardArtifacts)
    .where(eq(dashboardArtifacts.targetId, input.targetId));
  const existingSlugs = new Set(existing.map((dashboard) => dashboard.slug));
  const draftPromises = [];
  for (const seed of demoTelemetryDashboardSeeds(input.targetId)) {
    if (existingSlugs.has(seed.slug)) continue;
    draftPromises.push(
      ensureSeedDashboardDraft({
        userId: input.userId,
        targetId: input.targetId,
        title: seed.title,
        slug: seed.slug,
        description: seed.description,
        code: "export function Dashboard() { return null; }",
        datasets: seed.datasets,
        spec: seed.spec,
        fallback: { seeded: true, source: "flight-demo-otel" },
      })
    );
  }
  await Promise.all(draftPromises);
}

async function ensureSeedDashboardDraft(input: Parameters<typeof saveDashboardDraft>[0] & {
  targetId: string;
  slug: string;
}) {
  const existing = await getDashboardArtifactBySlug(input.targetId, input.slug);
  if (existing) return existing;
  try {
    return await saveDashboardDraft(input);
  } catch (error) {
    const createdByAnotherRequest = await getDashboardArtifactBySlug(input.targetId, input.slug);
    if (createdByAnotherRequest) return createdByAnotherRequest;
    throw error;
  }
}

async function getDashboardArtifactBySlug(targetId: string, slug: string) {
  const [dashboard] = await db.select({ id: dashboardArtifacts.id }).from(dashboardArtifacts)
    .where(and(eq(dashboardArtifacts.targetId, targetId), eq(dashboardArtifacts.slug, slug)))
    .limit(1);
  return dashboard ? getDashboardArtifact(dashboard.id) : null;
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
  const datasets = parseStoredDatasets(version.datasetsJson, dashboard.targetId, version.createdAt.toISOString())
    .map((dataset) => normalizeDashboardDataset(dataset, dashboard.targetId));
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
    code: await getArtifactText({ key: artifact.artifactKey }).catch(() => ""),
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
  spec?: StudioDashboardSpec;
}) {
  const target = await currentTarget();
  const targetId = input.targetId ?? target.target.id;
  const now = new Date();
  const requestedSlug = slugify(input.slug ?? input.title);
  const dashboardId = input.dashboardId ?? randomUUID();
  const datasets = StudioDashboardDatasetSchema.array()
    .parse(input.datasets ?? [])
    .map((dataset) => normalizeDashboardDataset(dataset, targetId));
  const existing = input.dashboardId
    ? await getDashboardArtifact(input.dashboardId)
    : null;
  const slug = existing ? requestedSlug : await uniqueDashboardSlug(targetId, requestedSlug);
  const version = existing ? existing.version + 1 : 1;
  const spec = StudioDashboardSpecSchema.parse(input.spec ?? inferDashboardSpec({
    title: input.title,
    datasets,
    ...(input.description ? { description: input.description } : {}),
  }));
  const code = ensureDashboardCode({
    title: input.title,
    code: input.code,
    spec,
    datasets,
    ...(input.description ? { description: input.description } : {}),
  });
  const artifactKey = `${target.dashboards.artifactPrefix}/${dashboardId}/v${version}/dashboard.tsx`;
  await putArtifact({
    key: artifactKey,
    body: code,
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
    });
  }

  await db.insert(dashboardArtifactVersions).values({
    id: randomUUID(),
    dashboardId,
    version,
    artifactKey,
    rendererJson: JSON.stringify({ kind: "react-component", entry: "Dashboard", spec }),
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

export async function deleteDashboard(input: {
  dashboardId: string;
  userId: string;
}) {
  const artifact = await getDashboardArtifact(input.dashboardId);
  if (!artifact) return null;
  const versions = await db.select().from(dashboardArtifactVersions)
    .where(eq(dashboardArtifactVersions.dashboardId, input.dashboardId));
  await Promise.all([
    Promise.all(
      versions.map((version) =>
        deleteArtifact({ key: version.artifactKey }).catch(() => undefined)
      )
    ),
    db.delete(dashboardArtifacts).where(eq(dashboardArtifacts.id, input.dashboardId)),
    audit({
      userId: input.userId,
      targetId: artifact.targetId,
      action: "dashboard.deleted",
      subjectType: "dashboard",
      subjectId: input.dashboardId,
      metadata: { version: artifact.version, artifactKeys: versions.map((version) => version.artifactKey) },
    }),
  ]);
  return artifact;
}
