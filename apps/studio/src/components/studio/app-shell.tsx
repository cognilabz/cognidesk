"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Bot,
  ChevronRight,
  Home,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  RefreshCcw,
  Settings,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Health, User } from "./types";
import { Button } from "./ui";

const navItems: Array<{ href: string; label: string; icon: ReactNode }> = [
  { href: "/", label: "Home", icon: <Home size={17} /> },
  { href: "/agents", label: "Agents", icon: <Workflow size={17} /> },
  { href: "/dashboards", label: "Dashboards", icon: <BarChart3 size={17} /> },
  { href: "/operator", label: "Operator", icon: <Bot size={17} /> },
  { href: "/admin", label: "Admin", icon: <Settings size={17} /> },
];

export function AppShell(props: {
  children: ReactNode;
  targetName: string;
  health: Health;
  user: User;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const active = activeItem(pathname);

  async function signOut() {
    await fetch("/api/auth/sign-out", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <main className={`grid min-h-screen bg-slate-100 ${collapsed ? "lg:grid-cols-[72px_minmax(0,1fr)]" : "lg:grid-cols-[220px_minmax(0,1fr)]"}`}>
      <aside className={cn(
        "sticky top-0 grid h-screen grid-rows-[auto_1fr_auto] overflow-hidden border-r border-slate-200 bg-slate-50 py-4 max-lg:static max-lg:h-auto max-lg:border-b max-lg:border-r-0",
        collapsed ? "px-2 lg:justify-items-center" : "px-3"
      )}>
        <div className={cn("flex items-center gap-2", collapsed ? "lg:flex-col lg:justify-start" : "justify-between")}>
          <Link className={cn("flex min-h-10 items-center gap-3 rounded-lg px-2 text-left", collapsed && "lg:w-10 lg:justify-center lg:px-0")} href="/" title="Cognidesk">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white">C</span>
            <strong className={`text-sm text-slate-950 ${collapsed ? "lg:hidden" : ""}`}>Cognidesk</strong>
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 max-lg:hidden"
            type="button"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>

        <nav className={cn("grid content-start gap-1 max-lg:flex max-lg:flex-wrap", collapsed ? "mt-5 lg:justify-items-center" : "mt-8")}>
          {navItems.map((item) => {
            const selected = isActive(pathname, item.href);
            return (
              <Link
                className={`flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm transition ${
                  selected ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-100"
                } ${collapsed ? "lg:w-10 lg:justify-center lg:px-0" : ""}`}
                href={item.href}
                key={item.href}
                title={item.label}
              >
                {item.icon}
                <span className={collapsed ? "lg:hidden" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={`grid max-w-full gap-1 overflow-hidden px-3 py-2 text-sm ${collapsed ? "lg:px-0 lg:text-center" : ""}`}>
          <span className={`truncate font-medium text-slate-950 ${collapsed ? "lg:hidden" : ""}`}>{props.user.name}</span>
          <span className={`text-xs text-slate-500 ${collapsed ? "lg:hidden" : ""}`}>{props.user.role}</span>
          <span className={`mx-auto hidden h-8 w-8 place-items-center rounded-full bg-white text-xs font-semibold text-slate-700 ring-1 ring-slate-200 ${collapsed ? "lg:grid" : ""}`}>
            {initials(props.user.name)}
          </span>
        </div>
      </aside>

      <section className="min-w-0 border-[8px] border-l-0 border-slate-900 bg-white max-lg:border-l-[8px]">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 px-6 max-md:flex-col max-md:items-stretch max-md:py-4">
          <div className="flex min-w-0 items-center gap-2 text-sm text-slate-500">
            <span className="truncate">{props.targetName}</span>
            <ChevronRight size={15} />
            <strong className="text-slate-950">{active.label}</strong>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 text-xs text-slate-500">
              <i className={`h-2.5 w-2.5 rounded-full ${props.health.ok ? "bg-emerald-500" : "bg-rose-500"}`} />
              {props.health.ok ? `Adapter ${props.health.status} in ${props.health.latencyMs}ms` : "Adapter offline"}
            </span>
            <Button onClick={() => router.refresh()} title="Refresh">
              <RefreshCcw size={16} />
              <span className="max-sm:hidden">Refresh</span>
            </Button>
            <Button onClick={signOut} title="Sign out">
              <LogOut size={16} />
            </Button>
          </div>
        </header>
        {props.children}
      </section>
    </main>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function activeItem(pathname: string) {
  return navItems.find((item) => isActive(pathname, item.href)) ?? navItems[0]!;
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "U";
}
