"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Bot,
  ChevronDown,
  ChevronRight,
  Home,
  LogOut,
  Monitor,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sun,
  UserCog,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Health, User } from "./types";

const navItems: Array<{ href: string; label: string; icon: ReactNode }> = [
  { href: "/", label: "Home", icon: <Home size={17} /> },
  { href: "/agents", label: "Agents", icon: <Workflow size={17} /> },
  { href: "/dashboards", label: "Dashboards", icon: <BarChart3 size={17} /> },
  { href: "/operator", label: "Operator", icon: <Bot size={17} /> },
  { href: "/admin", label: "Admin", icon: <Settings size={17} /> },
];

type ThemePreference = "light" | "dark" | "system";

export function AppShell(props: {
  children: ReactNode;
  targetName: string;
  health: Health;
  user: User;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>(() => {
    if (typeof window === "undefined") return "system";
    const stored = window.localStorage.getItem("studio-theme");
    return isThemePreference(stored) ? stored : "system";
  });
  const pathname = usePathname();
  const router = useRouter();
  const active = activeItem(pathname);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && media.matches);
      document.documentElement.classList.toggle("dark", dark);
      document.documentElement.style.colorScheme = dark ? "dark" : "light";
    };

    window.localStorage.setItem("studio-theme", theme);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  async function signOut() {
    await fetch("/api/auth/sign-out", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <main className={`grid min-h-screen bg-slate-100 ${collapsed ? "lg:grid-cols-[minmax(0,72px)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)]"}`}>
      <aside className={cn(
        "sticky top-0 grid h-screen min-w-0 grid-rows-[auto_1fr_auto] overflow-hidden border-r border-slate-200 bg-slate-50 py-4 max-lg:static max-lg:h-auto max-lg:border-b max-lg:border-r-0",
        collapsed ? "px-2 lg:justify-items-center" : "px-3"
      )}>
        <div className={cn("flex items-center gap-2", collapsed ? "lg:flex-col lg:justify-start" : "justify-between")}>
          <Link className={cn("flex min-h-10 items-center gap-3 rounded-lg px-2 text-left", collapsed && "lg:w-10 lg:justify-center lg:px-0")} href="/" title="Cognidesk">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white">C</span>
            <strong className={`text-sm text-slate-950 ${collapsed ? "lg:hidden" : ""}`}>Cognidesk</strong>
          </Link>
          <button
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-950 max-lg:hidden dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex max-w-full min-w-0 items-center gap-3 overflow-hidden rounded-lg border border-slate-200 bg-white p-2 text-left text-sm shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:shadow-none dark:hover:bg-slate-800",
                collapsed ? "lg:h-10 lg:w-10 lg:justify-center lg:p-0" : "w-full"
              )}
              type="button"
              aria-label="Open user menu"
              title="Open user menu"
            >
              <UserAvatar name={props.user.name} />
              <span className={cn("min-w-0 flex-1", collapsed && "lg:hidden")}>
                <span className="block truncate font-medium text-slate-950">{props.user.name}</span>
                <span className="block truncate text-xs text-slate-500">{props.user.role}</span>
              </span>
              <ChevronDown className={cn("h-4 w-4 shrink-0 text-slate-400", collapsed && "lg:hidden")} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 border-slate-200 bg-white text-slate-950 shadow-xl dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" side="right" sideOffset={10}>
            <DropdownMenuLabel className="grid gap-1">
              <span className="truncate text-sm font-semibold">{props.user.name}</span>
              <span className="truncate text-xs font-normal text-muted-foreground">{props.user.email}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="dark:focus:bg-slate-800 dark:focus:text-white">
              <Link href="/settings">
                <UserCog />
                User settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex items-center gap-2 text-xs uppercase text-muted-foreground">
              <Monitor className="h-3.5 w-3.5" />
              Theme
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup value={theme} onValueChange={(value) => {
              if (isThemePreference(value)) setTheme(value);
            }}>
              <DropdownMenuRadioItem className="dark:focus:bg-slate-800 dark:focus:text-white" value="light">
                <Sun />
                Light
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="dark:focus:bg-slate-800 dark:focus:text-white" value="dark">
                <Moon />
                Dark
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="dark:focus:bg-slate-800 dark:focus:text-white" value="system">
                <Monitor />
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="dark:focus:bg-red-950 dark:focus:text-red-200" onSelect={signOut} variant="destructive">
              <LogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>

      <section className="min-w-0 bg-white">
        <header className="flex min-h-16 items-center border-b border-slate-200 px-6">
          <div className="flex min-w-0 items-center gap-2 text-sm text-slate-500">
            <span className="truncate">{props.targetName}</span>
            <ChevronRight size={15} />
            <strong className="text-slate-950">{active.label}</strong>
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
  if (pathname === "/settings") return { href: "/settings", label: "Settings", icon: <UserCog size={17} /> };
  return navItems.find((item) => isActive(pathname, item.href)) ?? navItems[0]!;
}

function UserAvatar(props: { name: string }) {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-950 text-xs font-semibold text-white ring-1 ring-slate-200">
      {initials(props.name)}
    </span>
  );
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "U";
}

function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}
