"use client";

import { createElement, memo, useMemo } from "react";
import type { CSSProperties, ElementType } from "react";
import { cn } from "@/lib/utils";

export interface TextShimmerProps {
  children: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

const ShimmerComponent = ({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) => {
  const dynamicSpread = useMemo(
    () => (children?.length ?? 0) * spread,
    [children, spread]
  );
  const style = {
    "--spread": `${dynamicSpread}px`,
    animation: `text-shimmer ${duration}s linear infinite`,
    backgroundImage:
      "linear-gradient(90deg,#0000 calc(50% - var(--spread)),var(--color-background),#0000 calc(50% + var(--spread))), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))",
  } as CSSProperties;

  return createElement(
    Component,
    {
      className: cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text bg-no-repeat text-transparent",
        className
      ),
      style,
    },
    children
  );
};

export const Shimmer = memo(ShimmerComponent);
