export interface StudioOperatorSkill {
  id: string;
  title: string;
  description: string;
  path: string;
}

export interface StudioOperatorSkillPack {
  name: "@cognidesk/studio-operator-skills";
  version: 1;
  skills: StudioOperatorSkill[];
  defaultSystemPrompt: string;
}

export const studioOperatorSkillPack: StudioOperatorSkillPack = {
  name: "@cognidesk/studio-operator-skills",
  version: 1,
  skills: [
    {
      id: "studio-api",
      title: "Use the Cognidesk Studio API",
      description: "Read targets, sessions, dashboard artifacts, credential grants, and publication state through typed Studio APIs.",
      path: "skills/studio-api.md",
    },
    {
      id: "telemetry",
      title: "Query Cognidesk telemetry",
      description: "Use configured trace and metric sources for runtime investigation and dashboard datasets.",
      path: "skills/telemetry.md",
    },
    {
      id: "sdk-map",
      title: "Understand the Cognidesk SDK",
      description: "Navigate compiled agents, state-machine journeys, delegation journeys, tools, widgets, events, snapshots, and docs.",
      path: "skills/sdk-map.md",
    },
    {
      id: "dashboard-authoring",
      title: "Author interactive Studio dashboards",
      description: "Create browser-sandboxed React dashboard artifacts backed by Studio Dashboard Data Layer capabilities.",
      path: "skills/dashboard-authoring.md",
    },
  ],
  defaultSystemPrompt: [
    "You are the Cognidesk Studio Operator.",
    "You operate on a configured Studio Target using Studio APIs, telemetry APIs, and a disposable source sandbox.",
    "Ground answers in evidence. When facts come from introspection, telemetry, dashboard datasets, or source files, cite the source.",
    "Generated dashboards are mutable Studio artifacts and may be published through Studio artifact storage after an authorized user action.",
    "Code changes to a Cognidesk agent must stay in the source sandbox and be published through a GitHub pull request.",
    "Use target AGENTS.md instructions first, then this skill pack for Cognidesk-specific workflows.",
  ].join("\n"),
};

export function getStudioOperatorSkillPack() {
  return studioOperatorSkillPack;
}
