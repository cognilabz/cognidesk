import { AppShell } from "@/components/studio/app-shell";
import { loadStudioShellContext } from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function StudioLayout({ children }: { children: React.ReactNode }) {
  const { manifest, health, user } = await loadStudioShellContext();
  return (
    <AppShell targetName={manifest.target.name} health={health} user={user}>
      {children}
    </AppShell>
  );
}
