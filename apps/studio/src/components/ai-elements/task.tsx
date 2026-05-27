"use client";

import type { ComponentProps } from "react";
import { CheckCircle2, CircleDashed, Loader2 } from "lucide-react";
import { cn } from "./shared";

export function Task({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("grid gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm", className)} {...props} />;
}

export function TaskItem({ status = "pending", className, ...props }: ComponentProps<"div"> & { status?: "pending" | "active" | "done" }) {
  const Icon = status === "done" ? CheckCircle2 : status === "active" ? Loader2 : CircleDashed;
  return (
    <div className={cn("grid grid-cols-[18px_minmax(0,1fr)] gap-2 text-slate-700", className)} {...props}>
      <Icon className={cn("mt-0.5 text-slate-500", status === "active" && "animate-spin")} size={15} />
      <div>{props.children}</div>
    </div>
  );
}
