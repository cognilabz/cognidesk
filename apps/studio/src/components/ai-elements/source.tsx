"use client";

import type { ComponentProps } from "react";
import { FileText } from "lucide-react";
import { cn } from "./shared";

export function Sources({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("grid gap-2", className)} {...props} />;
}

export function Source({ title, detail, className }: { title: string; detail?: string; className?: string }) {
  return (
    <div className={cn("grid grid-cols-[18px_minmax(0,1fr)] gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm", className)}>
      <FileText className="mt-0.5 text-slate-500" size={15} />
      <div className="min-w-0">
        <div className="truncate font-medium text-slate-800">{title}</div>
        {detail ? <div className="mt-1 truncate text-xs text-slate-500">{detail}</div> : null}
      </div>
    </div>
  );
}
