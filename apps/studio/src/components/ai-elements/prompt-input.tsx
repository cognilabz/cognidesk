"use client";

import type { ComponentProps, FormEvent, ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "./shared";

type PromptInputProps = Omit<ComponentProps<"form">, "onSubmit"> & {
  onSubmit?: () => void;
};

export function PromptInput({ className, onSubmit, ...props }: PromptInputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }
  return (
    <form
      className={cn("rounded-xl border border-slate-200 bg-white p-2 shadow-sm", className)}
      onSubmit={handleSubmit}
      {...props}
    />
  );
}

export function PromptInputTextarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn("block min-h-24 w-full resize-none rounded-lg border-0 px-3 py-3 text-sm leading-6 outline-none placeholder:text-slate-400", className)}
      rows={3}
      {...props}
    />
  );
}

export function PromptInputFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex items-center justify-between gap-3 px-1 py-1", className)} {...props} />;
}

export function PromptInputTools({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex min-w-0 flex-wrap items-center gap-2", className)} {...props} />;
}

export function PromptInputSubmit({ className, children, ...props }: ComponentProps<"button"> & { children?: ReactNode }) {
  return (
    <button
      className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50", className)}
      type="submit"
      aria-label={props["aria-label"] ?? "Send"}
      {...props}
    >
      {children ?? <ArrowUp size={18} />}
    </button>
  );
}
