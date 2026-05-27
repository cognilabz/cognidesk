import type { ReactNode } from "react";
import { BarChart3, Bot, ChevronRight, Home, LogOut, RefreshCcw, Settings, Workflow } from "lucide-react";
import type { Health, StudioView, User } from "./types";
import { Button } from "./ui";

const navItems: Array<{ id: StudioView; label: string; icon: ReactNode }> = [
  { id: "monitoring", label: "Home", icon: <Home size={17} /> },
  { id: "agents", label: "Agents", icon: <Workflow size={17} /> },
  { id: "dashboards", label: "Dashboards", icon: <BarChart3 size={17} /> },
  { id: "operator", label: "Operator", icon: <Bot size={17} /> },
  { id: "admin", label: "Admin", icon: <Settings size={17} /> },
];

export function AppShell(props: {
  children: ReactNode;
  view: StudioView;
  setView: (view: StudioView) => void;
  targetName: string;
  health: Health;
  user: User;
  refreshTarget: () => void;
  signOut: () => void;
}) {
  return (
    <main className="grid min-h-screen grid-cols-[220px_minmax(0,1fr)] bg-slate-100 max-lg:grid-cols-1">
      <aside className="sticky top-0 grid h-screen grid-rows-[auto_1fr_auto] border-r border-slate-200 bg-slate-50 px-4 py-5 max-lg:static max-lg:h-auto max-lg:border-b max-lg:border-r-0">
        <button className="flex min-h-10 items-center gap-3 rounded-lg px-2 text-left" type="button" onClick={() => props.setView("monitoring")}>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white">C</span>
          <strong className="text-sm text-slate-950">Cognidesk</strong>
        </button>
        <nav className="mt-8 grid content-start gap-1 max-lg:flex max-lg:flex-wrap">
          {navItems.map((item) => (
            <button
              className={`flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm transition ${
                props.view === item.id ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-100"
              }`}
              key={item.id}
              type="button"
              onClick={() => props.setView(item.id)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="grid gap-1 px-3 py-2 text-sm">
          <span className="truncate font-medium text-slate-950">{props.user.name}</span>
          <span className="text-xs text-slate-500">{props.user.role}</span>
        </div>
      </aside>
      <section className="min-w-0 border-[8px] border-l-0 border-slate-900 bg-white max-lg:border-l-[8px]">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 px-6 max-md:flex-col max-md:items-stretch max-md:py-4">
          <div className="flex min-w-0 items-center gap-2 text-sm text-slate-500">
            <span className="truncate">{props.targetName}</span>
            <ChevronRight size={15} />
            <strong className="text-slate-950">{labelForView(props.view)}</strong>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 text-xs text-slate-500">
              <i className={`h-2.5 w-2.5 rounded-full ${props.health.ok ? "bg-emerald-500" : "bg-rose-500"}`} />
              {props.health.ok ? `Adapter ${props.health.status} in ${props.health.latencyMs}ms` : "Adapter offline"}
            </span>
            <Button onClick={props.refreshTarget}>
              <RefreshCcw size={16} />
              Refresh
            </Button>
            <Button onClick={props.signOut} title="Sign out">
              <LogOut size={16} />
            </Button>
          </div>
        </header>
        {props.children}
      </section>
    </main>
  );
}

function labelForView(view: StudioView) {
  return {
    monitoring: "Home",
    agents: "Agents",
    dashboards: "Dashboards",
    operator: "Operator",
    admin: "Admin",
  }[view];
}
