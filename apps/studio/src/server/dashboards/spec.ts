import { StudioDashboardSpecSchema, type StudioDashboardDataset, type StudioDashboardSpec } from "@cognidesk/studio-contracts";
import { containsConversationRows } from "./datasets";

export function inferDashboardSpec(input: {
  title: string;
  description?: string;
  datasets: StudioDashboardDataset[];
}): StudioDashboardSpec {
  const text = `${input.title} ${input.description ?? ""}`.toLowerCase();
  const conversationDataset = input.datasets.find((dataset) => containsConversationRows(dataset.data));
  if (conversationDataset) {
    const wantsHandover = /handoff|hand\s*over|handover|escalat/.test(text);
    const wantsSentiment = /sentiment|satisfaction|mood|positive|negative/.test(text);
    const widgets: StudioDashboardSpec["widgets"] = [
      {
        id: "total-conversations",
        title: "Total conversations",
        kind: "metric",
        datasetId: conversationDataset.id,
        valuePath: "$metrics.totalConversations",
        tone: "blue",
      },
    ];
    if (wantsHandover || !text.trim()) {
      widgets.push(
        {
          id: "handover-conversations",
          title: "Handover conversations",
          kind: "metric",
          datasetId: conversationDataset.id,
          valuePath: "$metrics.handoverConversations",
          tone: "red",
        },
        {
          id: "handover-percentage",
          title: "Handover percentage",
          kind: "metric",
          datasetId: conversationDataset.id,
          valuePath: "$metrics.handoverPercentage",
          unit: "%",
          tone: "amber",
        },
        {
          id: "weekly-handover-trend",
          title: "Past-week handover trend",
          kind: "line",
          datasetId: conversationDataset.id,
          xPath: "date",
          series: [
            { label: "Total", path: "total" },
            { label: "Handovers", path: "handovers" },
          ],
        },
      );
    }
    if (wantsSentiment || !text.trim()) {
      widgets.push({
        id: "sentiment-breakdown",
        title: "User sentiment",
        kind: "donut",
        datasetId: conversationDataset.id,
        labelPath: "name",
        valuePath: "value",
        tone: "green",
      });
    }
    widgets.push({
      id: "recent-conversations",
      title: "Recent conversations",
      kind: "table",
      datasetId: conversationDataset.id,
      limit: 8,
      columns: [
        { label: "Customer", path: "customerLabel" },
        { label: "Lifecycle", path: "lifecycle" },
        { label: "Journey", path: "activeJourneyId" },
        { label: "Sentiment", path: "satisfaction" },
        { label: "Updated", path: "updatedAt" },
      ],
    });
    return StudioDashboardSpecSchema.parse({
      layout: "operations",
      summary: input.description ?? "Conversation operations dashboard generated from Studio conversation data.",
      widgets,
    });
  }

  return StudioDashboardSpecSchema.parse({
    layout: "overview",
    summary: input.description ?? "Generated Studio dashboard backed by captured datasets.",
    widgets: input.datasets.flatMap((dataset, index) => ([
      {
        id: `${dataset.id}-rows`,
        title: dataset.title,
        kind: "table" as const,
        datasetId: dataset.id,
        limit: index === 0 ? 10 : 5,
      },
    ])).slice(0, 6),
  });
}
