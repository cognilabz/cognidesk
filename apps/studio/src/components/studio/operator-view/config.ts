import type { ReasoningEffort } from "../types";

export const reasoningEfforts: Array<{ id: ReasoningEffort; label: string }> = [
  { id: "minimal", label: "Minimal" },
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];

export const operatorSuggestions = [
  {
    label: "Explain the agent",
    prompt:
      "Explain the current Cognidesk agent. Ground the answer in introspection and name the journeys, tools, knowledge, and widgets you found.",
  },
  {
    label: "Create a dashboard",
    prompt:
      "Create and save a Studio dashboard draft for recent conversations. Use the Studio dashboard API and include datasets, code, and a fallback summary.",
  },
  {
    label: "Inspect a change",
    prompt:
      "Inspect the source sandbox and propose one small improvement to the flight demo agent. Show your evidence before editing.",
  },
];

export const SESSION_RAIL_WIDTH = 64;
export const SESSION_DEFAULT_WIDTH = 300;
export const SESSION_MAX_WIDTH = 420;
export const SESSION_COLLAPSE_THRESHOLD = 120;
export const SESSION_RESIZE_MIN_WIDTH = SESSION_COLLAPSE_THRESHOLD + 1;
export const DASHBOARD_DEFAULT_WIDTH = 520;
export const DASHBOARD_COLLAPSE_THRESHOLD = 220;
export const DASHBOARD_RESIZE_MIN_WIDTH = DASHBOARD_COLLAPSE_THRESHOLD + 1;
export const DASHBOARD_INLINE_MIN_WIDTH = 360;
export const CHAT_INLINE_MIN_WIDTH = 360;
