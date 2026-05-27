"use client";

import type { ComponentProps } from "react";
import { cn } from "./shared";

export function Context({ className, ...props }: ComponentProps<"aside">) {
  return <aside className={cn("grid min-h-0 grid-rows-[auto_minmax(0,1fr)] border-l border-slate-200 bg-slate-50", className)} {...props} />;
}

export function ContextHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("border-b border-slate-200 px-4 py-3", className)} {...props} />;
}

export function ContextContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("min-h-0 overflow-y-auto p-4", className)} {...props} />;
}
