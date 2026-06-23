import { describe, expect, it } from "vitest";

import { getStudioOperatorSkillPack, studioOperatorSkillPack } from "../src/index";

describe("studio operator skill pack", () => {
  it("exposes the packaged operator skills and guidance", () => {
    expect(getStudioOperatorSkillPack()).toBe(studioOperatorSkillPack);
    expect(studioOperatorSkillPack.skills).toHaveLength(4);
    expect(studioOperatorSkillPack.skills.map((skill) => skill.path)).toEqual([
      "skills/studio-api.md",
      "skills/telemetry.md",
      "skills/sdk-map.md",
      "skills/dashboard-authoring.md",
    ]);
    expect(studioOperatorSkillPack.defaultSystemPrompt).toContain("target AGENTS.md");
  });
});
