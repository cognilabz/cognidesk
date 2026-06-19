import { describe, expect, it } from "vitest";
import {
  mergeStudioTargetManifest,
  roleHasPermission,
  StudioConfigurationSurfaceSchema,
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

  it("describes SDK configuration availability without exposing secrets", () => {
    const surface = StudioConfigurationSurfaceSchema.parse({
      targetId: "flight-demo-local",
      channels: [{
        channel: "voice",
        audience: "customer-facing",
        enabledCapabilities: ["receive", "transfer"],
        policyIds: ["voice-support"],
        behavior: {
          tone: "short-spoken",
          maxWords: 40,
          allowMarkdown: false,
        },
        flowActivations: [{
          journeyId: "human-handoff",
          metadata: { source: "sdk" },
        }],
        outbound: {
          enabled: true,
          metadata: { consent: "required" },
        },
        handoff: {
          enabled: true,
          metadata: { queue: "priority" },
        },
        metadata: { channelOwner: "sdk" },
      }],
      channelSets: [{
        id: "support",
        metadata: { continuity: "custom" },
      }],
      providerPackages: [{
        id: "voice.twilio",
        name: "Twilio Voice",
        packageName: "@cognidesk/integrations",
        provider: "twilio",
        category: "voice",
        trustLevel: "official",
        directions: ["inbound-only", "outbound-only"],
        channelAudiences: ["customer-facing"],
        capabilities: [{
          capability: "transfer",
          sideEffect: true,
          changesWorkflow: true,
          requiresCredential: true,
          audiences: ["customer-facing"],
          providerObjects: [{
            kind: "twilioCall",
            schemaName: "Call",
            metadata: { resource: "Calls" },
          }],
          metadata: { object: "call" },
        }],
        credentialRequirements: [{
          id: "twilio-account",
          label: "Twilio Account",
          scopes: ["calls:write"],
          required: true,
          metadata: { env: "server" },
        }],
        privacyNotes: ["Call metadata is exchanged with Twilio."],
        limitations: ["Live readiness depends on account permissions."],
        maintainers: [{ name: "Cognidesk", type: "official" }],
        metadata: { region: "us1" },
      }],
      capabilityAvailability: [{
        providerPackageId: "voice.twilio",
        capability: "transfer",
        status: "blocked",
        blockers: [{
          code: "missing-credentials",
          message: "Twilio credentials are not configured.",
          kind: "missing-credentials",
        }],
        metadata: { source: "readiness-check" },
      }],
      credentialStatuses: [{
        providerPackageId: "voice.twilio",
        requirementId: "twilio-account",
        state: "missing",
      }],
      providerReadiness: [{
        providerPackageId: "voice.twilio",
        status: "scoped-verified",
        live: true,
        metadata: {
          downgradedFrom: "full-api-verified",
        },
        remediationActions: [{
          id: "configure-twilio",
          label: "Configure Twilio",
          metadata: { route: "/settings/providers" },
        }],
      }],
      capturedAt: "2026-06-16T00:00:00.000Z",
    });

    expect(surface.providerPackages[0]?.capabilities[0]?.capability).toBe("transfer");
    expect(surface.providerPackages[0]?.capabilities[0]?.providerObjects[0]).toMatchObject({
      schemaName: "Call",
      metadata: { resource: "Calls" },
    });
    expect(surface.providerPackages[0]?.capabilities[0]?.requiresCredential).toBe(true);
    expect(surface.providerPackages[0]?.capabilities[0]?.metadata).toEqual({ object: "call" });
    expect(surface.providerPackages[0]?.credentialRequirements[0]).toMatchObject({
      id: "twilio-account",
      required: true,
      metadata: { env: "server" },
    });
    expect(surface.providerPackages[0]?.maintainers[0]).toMatchObject({ name: "Cognidesk", type: "official" });
    expect(surface.providerPackages[0]?.metadata).toEqual({ region: "us1" });
    expect(surface.channels[0]?.behavior).toMatchObject({
      tone: "short-spoken",
      maxWords: 40,
      allowMarkdown: false,
    });
    expect(surface.channels[0]?.metadata).toEqual({ channelOwner: "sdk" });
    expect(surface.channels[0]?.flowActivations[0]?.metadata).toEqual({ source: "sdk" });
    expect(surface.channels[0]?.outbound?.metadata).toEqual({ consent: "required" });
    expect(surface.channels[0]?.handoff?.metadata).toEqual({ queue: "priority" });
    expect(surface.channelSets[0]?.metadata).toEqual({ continuity: "custom" });
    expect(surface.credentialStatuses[0]).not.toHaveProperty("secret");
    expect(surface.capabilityAvailability[0]?.status).toBe("blocked");
    expect(surface.capabilityAvailability[0]?.metadata).toEqual({ source: "readiness-check" });
    expect(surface.providerReadiness[0]?.metadata).toMatchObject({
      downgradedFrom: "full-api-verified",
    });
    expect(surface.providerReadiness[0]?.remediationActions[0]?.metadata).toEqual({ route: "/settings/providers" });
  });
});
