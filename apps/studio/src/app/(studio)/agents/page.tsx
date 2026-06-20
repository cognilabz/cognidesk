import { AgentsView } from "@/components/studio/agents-view";
import { loadConfigurationResult, loadIntrospectionResult, requireStudioPageContext } from "@/server/studio-page-data";
import type { Metadata } from "next";

export const runtime = "nodejs";
export const metadata: Metadata = {
  title: "Agents | Cognidesk Studio",
  description: "Inspect target agent journeys, tools, knowledge, and widgets.",
};

export default async function AgentsPage() {
  await requireStudioPageContext();
  const [introspectionResult, configurationResult] = await Promise.all([
    loadIntrospectionResult(),
    loadConfigurationResult(),
  ]);
  return (
    <AgentsView
      introspection={introspectionResult.value}
      configuration={configurationResult.value ?? introspectionResult.value?.configurationSurface ?? null}
      error={introspectionResult.error}
      configurationError={configurationResult.error}
    />
  );
}
