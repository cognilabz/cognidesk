"use client";

import type { ComponentProps } from "react";
import { Brain } from "lucide-react";
import { cn } from "./shared";

export function Reasoning({ className, ...props }: ComponentProps<"details">) {
  return <details className={cn("rounded-lg border border-slate-200 bg-slate-50 text-sm", className)} {...props} />;
}

export function ReasoningTrigger({ children, className, ...props }: ComponentProps<"summary">) {
  return (
    <summary className={cn("flex cursor-pointer list-none items-center gap-2 px-3 py-2 font-medium text-slate-800", className)} {...props}>
      <Brain size={15} />
      {children}
    </summary>
  );
}

export function ReasoningContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("border-t border-slate-200 px-3 py-2 text-slate-600", className)} {...props} />;
}
