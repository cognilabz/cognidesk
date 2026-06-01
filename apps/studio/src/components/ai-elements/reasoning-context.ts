"use client";

import { createContext, use } from "react";

export interface ReasoningContextValue {
  isStreaming: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  duration: number | undefined;
}

export const ReasoningContext =
  createContext<ReasoningContextValue | null>(null);

export const useReasoning = () => {
  const context = use(ReasoningContext);
  if (!context) {
    throw new Error("Reasoning components must be used within Reasoning");
  }
  return context;
};
