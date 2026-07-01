import { AccountSettingsView } from "@/components/studio/account-settings-view";
import { PageHeader } from "@/components/studio/ui";
import { loadAccountSettings } from "@/server/account";
import { requireStudioPageContext } from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function SettingsPage() {
  const { session } = await requireStudioPageContext();
  const account = await loadAccountSettings(session);

  return (
    <section>
      <PageHeader eyebrow="Account" title="User settings" />
      <AccountSettingsView account={account} />
    </section>
  );
}
