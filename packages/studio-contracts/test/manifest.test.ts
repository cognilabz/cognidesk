import { describe, expect, it } from "vitest";
import {
  mergeStudioTargetManifest,
  roleHasPermission,
  StudioTargetManifestSchema,
} from "../src/index.js";

const baseManifest = StudioTargetManifestSchema.parse({
  version: 1,
  target: {
    id: "flight-demo-local",
    name: "Flight Demo",
  },
  runtime: {
    baseUrl: "http://127.0.0.1:8787",
  },
  source: {
    provider: "github",
    owner: "cognilabz",
    repo: "cognidesk",
  },
  dashboards: {
    artifactBucket: "cognidesk-studio",
  },
});

describe("studio contracts", () => {
  it("merges target overlays without dropping manifest defaults", () => {
    const merged = mergeStudioTargetManifest(baseManifest, {
      runtime: {
        baseUrl: "http://flight-demo:8787",
      },
      telemetry: {
        sources: [{
          id: "prometheus",
          label: "Prometheus",
          kind: "prometheus",
          baseUrl: "http://prometheus:9090",
        }],
      },
    });

    expect(merged.runtime.baseUrl).toBe("http://flight-demo:8787");
    expect(merged.runtime.apiBasePath).toBe("/api");
    expect(merged.telemetry.sources).toHaveLength(1);
    expect(merged.operator.skillPacks).toEqual(["@cognidesk/studio-operator-skills"]);
  });

  it("keeps RBAC publishing narrower than admin", () => {
    expect(roleHasPermission("dashboard_editor", "dashboards:publish")).toBe(true);
    expect(roleHasPermission("dashboard_editor", "operator:publish_code")).toBe(false);
    expect(roleHasPermission("operator", "operator:publish_code")).toBe(true);
    expect(roleHasPermission("viewer", "dashboards:edit")).toBe(false);
  });
});
