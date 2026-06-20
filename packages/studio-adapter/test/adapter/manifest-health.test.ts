import { createAgent, cognideskStudioAdapterProviderManifest, createCognideskStudioAdapter, describe, expect, it } from "./helpers.js";

describe("studio adapter", () => {
  it("exports an official provider manifest for Studio target adapters", () => {
      expect(cognideskStudioAdapterProviderManifest).toMatchObject({
        id: "studio.adapter",
        packageName: "@cognidesk/studio-adapter",
        category: "studio",
        provider: "cognidesk",
        trustLevel: "official",
        directions: ["bidirectional"],
        coverage: {
          scope: "local-protocol",
        },
      });
      expect(cognideskStudioAdapterProviderManifest.coverage.notes.join(" "))
        .toContain("not a general admin API");
      expect(cognideskStudioAdapterProviderManifest.coverage.evidence.map((item) => item.label))
        .toEqual(expect.arrayContaining([
          "CONTEXT.md Studio Adapter definition",
          "CONTEXT.md Studio Introspection API definition",
          "CONTEXT.md Studio Configuration Surface definition",
        ]));
      expect(cognideskStudioAdapterProviderManifest.capabilities.map((capability) => capability.capability))
        .toEqual(expect.arrayContaining([
          "studio.health",
          "studio.introspection",
          "studio.configuration",
          "studio.configuration-mutation",
          "studio.conversations",
          "studio.telemetry",
        ]));
      expect(cognideskStudioAdapterProviderManifest.capabilities.every((capability) => capability.extension)).toBe(true);
    });

  it("serves health and compiled-agent introspection behind the service token", async () => {
      const agent = createAgent("test-agent", {
        instructions: "Test agent instructions",
        persona: { brandVoice: "calm", locale: "en-US" },
        channels: {
          voice: { tone: "concise spoken support" },
        },
        handoff: { destinations: ["priority-support"] },
      }).compile();
      const adapter = createCognideskStudioAdapter({
        targetId: "test-target",
        agent,
        serviceToken: "secret",
        runtime: {
          async listEvents() {
            return [];
          },
        },
      });

      const unauthorized = await adapter.handle(new Request("http://local/api/studio/health"));
      expect(unauthorized.status).toBe(401);

      const health = await adapter.handle(new Request("http://local/api/studio/health", {
        headers: { authorization: "Bearer secret" },
      }));
      expect(health.status).toBe(200);
      expect(await health.json()).toMatchObject({ ok: true, targetId: "test-target", agentId: "test-agent" });

      const introspection = await adapter.handle(new Request("http://local/api/studio/introspection", {
        headers: { authorization: "Bearer secret" },
      }));
      expect(introspection.status).toBe(200);
      const body = await introspection.json() as {
        agent: {
          id: string;
          instructions: string;
          persona?: unknown;
          channelPolicies?: unknown;
          handoffPolicy?: unknown;
        };
      };
      expect(body.agent.id).toBe("test-agent");
      expect(body.agent.instructions).toContain("Test agent");
      expect(body.agent.persona).toEqual({ brandVoice: "calm", locale: "en-US" });
      expect(body.agent.channelPolicies).toEqual({ voice: { tone: "concise spoken support" } });
      expect(body.agent.handoffPolicy).toEqual({ destinations: ["priority-support"] });
    });

  it.each([
      { basePath: "api/studio", requestPath: "/api/studio/health" },
      { basePath: "/api/studio/", requestPath: "/api/studio/health" },
      { basePath: "/", requestPath: "/health" },
    ])("serves health for normalized basePath $basePath", async ({ basePath, requestPath }) => {
      const agent = createAgent("test-agent", {
        instructions: "Test agent instructions",
      }).compile();
      const adapter = createCognideskStudioAdapter({
        targetId: "test-target",
        agent,
        basePath,
        runtime: {
          async listEvents() {
            return [];
          },
        },
      });

      const response = await adapter.handle(new Request(`http://local${requestPath}`));

      expect(response.status).toBe(200);
      expect(await response.json()).toMatchObject({ ok: true, targetId: "test-target", agentId: "test-agent" });
    });
});
