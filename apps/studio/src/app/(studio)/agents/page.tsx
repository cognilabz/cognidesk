import { AgentsView } from "@/components/studio/agents-view";
import { loadIntrospectionResult, requireStudioPageContext } from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function AgentsPage() {
  await requireStudioPageContext();
  const introspectionResult = await loadIntrospectionResult();
  return (
    <AgentsView
      introspection={introspectionResult.value}
      error={introspectionResult.error}
    />
  );
}
