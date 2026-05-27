"use client";

import type { ComponentProps, ReactNode } from "react";
import { Streamdown } from "streamdown";
import { cn } from "./shared";

export function Message({ role, className, ...props }: ComponentProps<"article"> & { role: "user" | "assistant" | "system" }) {
  return (
    <article
      className={cn(
        "group grid gap-2",
        role === "user" && "ml-auto max-w-2xl justify-items-end",
        role === "assistant" && "max-w-3xl",
        role === "system" && "max-w-3xl",
        className,
      )}
      data-role={role}
      {...props}
    />
  );
}

export function MessageContent({ role, className, children, ...props }: ComponentProps<"div"> & { role: "user" | "assistant" | "system"; children: ReactNode }) {
  return (
    <div
      className={cn(
        "text-sm leading-6",
        role === "user" && "rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-slate-900",
        role === "assistant" && "prose prose-slate max-w-none text-slate-900",
        role === "system" && "rounded-lg bg-slate-50 px-4 py-3 text-slate-500",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function MessageResponse({ children, isStreaming = false }: { children: string; isStreaming?: boolean }) {
  return <Streamdown isAnimating={isStreaming}>{children || "Working..."}</Streamdown>;
}
