"use client";

import type { ComponentProps, ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "./shared";

export function Conversation({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("relative grid min-h-0 grid-rows-[minmax(0,1fr)]", className)} {...props} />;
}

export function ConversationContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("min-h-0 overflow-y-auto px-6 py-6", className)} {...props} />;
}

export function ConversationScrollButton({ targetId, children }: { targetId: string; children?: ReactNode }) {
  return (
    <button
      className="absolute bottom-4 left-1/2 z-10 inline-flex h-9 -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm text-slate-600 shadow-sm hover:bg-slate-50"
      type="button"
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ block: "end", behavior: "smooth" })}
    >
      {children ?? <ArrowDown size={15} />}
    </button>
  );
}
