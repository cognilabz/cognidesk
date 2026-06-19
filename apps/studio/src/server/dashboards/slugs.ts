import { and, eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { dashboardArtifacts } from "@/server/db/schema";

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || `dashboard-${Date.now()}`;
}

export async function uniqueDashboardSlug(targetId: string, baseSlug: string) {
  let candidate = baseSlug;
  for (let suffix = 2; suffix < 100; suffix += 1) {
    const [existing] = await db.select({ id: dashboardArtifacts.id }).from(dashboardArtifacts)
      .where(and(eq(dashboardArtifacts.targetId, targetId), eq(dashboardArtifacts.slug, candidate)))
      .limit(1);
    if (!existing) return candidate;
    candidate = `${baseSlug}-${suffix}`;
  }
  return `${baseSlug}-${Date.now()}`;
}
