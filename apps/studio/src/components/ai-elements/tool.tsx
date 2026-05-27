"use client";

import type { ComponentProps } from "react";
import { Boxes, Code2, TerminalSquare } from "lucide-react";
import { cn } from "./shared";

export function Tool({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-lg border border-slate-200 bg-white text-sm", className)} {...props} />;
}

export function ToolHeader({ kind = "tool", title, className }: { kind?: "tool" | "artifact" | "diff"; title: string; className?: string }) {
  const Icon = kind === "artifact" ? Boxes : kind === "diff" ? Code2 : TerminalSquare;
  return (
    <div className={cn("flex items-center gap-2 border-b border-slate-200 px-3 py-2 font-medium text-slate-800", className)}>
      <Icon size={15} />
      <span className="truncate">{title}</span>
    </div>
  );
}

export function ToolContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("whitespace-pre-wrap px-3 py-2 text-xs leading-5 text-slate-600", className)} {...props} />;
}
