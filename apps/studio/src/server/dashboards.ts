import { randomUUID } from "node:crypto";
import { and, desc, eq } from "drizzle-orm";
import {
  StudioDashboardArtifactSchema,
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
    datasets: JSON.parse(version.datasetsJson) as unknown,
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
    datasetsJson: JSON.stringify(input.datasets ?? []),
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
