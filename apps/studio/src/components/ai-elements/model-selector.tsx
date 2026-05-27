"use client";

import type { ComponentProps, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "./shared";

export function ModelSelector(props: {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <label className={cn("relative inline-flex items-center", props.className)}>
      <select
        className="h-9 appearance-none rounded-lg border border-slate-200 bg-white py-0 pl-3 pr-9 text-sm text-slate-900 outline-none hover:bg-slate-50"
        value={props.value}
        onChange={(event) => props.onValueChange(event.target.value)}
        aria-label={props["aria-label"] ?? "Model"}
      >
        {props.children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 text-slate-500" size={15} />
    </label>
  );
}

export function ModelSelectorItem({ value, children, ...props }: ComponentProps<"option"> & { value: string }) {
  return <option value={value} {...props}>{children}</option>;
}
