import type { StudioDashboardDataset, StudioDashboardSpec } from "@cognidesk/studio-contracts";

export function ensureDashboardCode(input: {
  title: string;
  description?: string;
  code: string;
  spec: StudioDashboardSpec;
  datasets: StudioDashboardDataset[];
}) {
  if (hasDashboardExport(input.code) && input.code.length > 600) return input.code;
  return generateDashboardCode(input);
}

export function hasDashboardExport(code: string) {
  return /\bexport\s+(default\s+)?function\s+Dashboard\b/.test(code)
    || /\bexport\s+const\s+Dashboard\b/.test(code)
    || /\bexport\s*\{\s*Dashboard\s*\}/.test(code);
}

export function generateDashboardCode(input: {
  title: string;
  description?: string;
  spec: StudioDashboardSpec;
  datasets: StudioDashboardDataset[];
}) {
  const datasetRefs = input.datasets.map((dataset) => ({
    id: dataset.id,
    title: dataset.title,
    mode: dataset.mode,
    refreshMs: dataset.refreshMs ?? null,
    source: dataset.source,
  }));
  return `import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const dashboardTitle = ${JSON.stringify(input.title)};
const dashboardDescription = ${JSON.stringify(input.description ?? "")};
const dashboardSpec = ${JSON.stringify(input.spec, null, 2)};
const datasetRefs = ${JSON.stringify(datasetRefs, null, 2)};

export function Dashboard({ dataLayer, initialDatasets = [] }) {
  const [datasets, setDatasets] = useState(initialDatasets);

  useEffect(() => {
    let cancelled = false;
    async function refreshLiveDatasets() {
      if (!dataLayer?.query) return;
      const liveRefs = datasetRefs.filter((dataset) => dataset.mode === "live");
      if (!liveRefs.length) return;
      const refreshed = await Promise.all(liveRefs.map(async (dataset) => ({
        ...dataset,
        ...(await dataLayer.query(dataset.source)),
        mode: "live",
      })));
      if (!cancelled) {
        setDatasets((current) => current.map((dataset) => refreshed.find((item) => item.id === dataset.id) ?? dataset));
      }
    }
    void refreshLiveDatasets();
    return () => {
      cancelled = true;
    };
  }, [dataLayer]);

  const byId = useMemo(() => new Map(datasets.map((dataset) => [dataset.id, dataset])), [datasets]);

  return (
    <main className="grid gap-5 p-6">
      <header>
        <p className="text-xs uppercase tracking-wide text-slate-500">Studio dashboard</p>
        <h1 className="text-2xl font-semibold text-slate-950">{dashboardTitle}</h1>
        {dashboardDescription ? <p className="mt-2 max-w-3xl text-sm text-slate-600">{dashboardDescription}</p> : null}
      </header>
      <section className="grid grid-cols-4 gap-4">
        {dashboardSpec.widgets.map((widget) => (
          <DashboardWidget key={widget.id} widget={widget} dataset={byId.get(widget.datasetId)} />
        ))}
      </section>
    </main>
  );
}

function DashboardWidget({ widget, dataset }) {
  const rows = Array.isArray(dataset?.data) ? dataset.data : Array.isArray(dataset?.data?.conversations) ? dataset.data.conversations : [];
  if (widget.kind === "metric") {
    return <article className="rounded-lg border border-slate-200 bg-white p-4"><p className="text-sm text-slate-500">{widget.title}</p><strong className="mt-2 block text-3xl text-slate-950">{rows.length}</strong></article>;
  }
  if (widget.kind === "line") {
    return <article className="col-span-2 rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><ResponsiveContainer width="100%" height={220}><LineChart data={rows}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey={widget.xPath ?? "date"} /><YAxis /><Tooltip />{(widget.series ?? []).map((series, index) => <Line key={series.path} dataKey={series.path} stroke={index ? "#0f766e" : "#2563eb"} />)}</LineChart></ResponsiveContainer></article>;
  }
  if (widget.kind === "bar") {
    return <article className="col-span-2 rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><ResponsiveContainer width="100%" height={220}><BarChart data={rows}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey={widget.labelPath ?? "name"} /><YAxis /><Tooltip /><Bar dataKey={widget.valuePath ?? "value"} fill="#2563eb" /></BarChart></ResponsiveContainer></article>;
  }
  if (widget.kind === "donut") {
    return <article className="rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><ResponsiveContainer width="100%" height={220}><PieChart><Pie data={rows} dataKey={widget.valuePath ?? "value"} nameKey={widget.labelPath ?? "name"} innerRadius={54} outerRadius={82}>{rows.map((_, index) => <Cell key={index} fill={["#16a34a", "#f59e0b", "#dc2626", "#2563eb"][index % 4]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></article>;
  }
  return <article className="col-span-4 overflow-hidden rounded-lg border border-slate-200 bg-white p-4"><p className="mb-3 text-sm font-medium text-slate-700">{widget.title}</p><pre className="max-h-72 overflow-auto text-xs text-slate-600">{JSON.stringify(rows.slice(0, widget.limit ?? 10), null, 2)}</pre></article>;
}

export default Dashboard;
`;
}
