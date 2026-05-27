import { describe, expect, it } from "vitest";
import { createAgent } from "@cognidesk/core";
import { createCognideskStudioAdapter } from "../src/index.js";

describe("studio adapter", () => {
  it("serves health and compiled-agent introspection behind the service token", async () => {
    const agent = createAgent("test-agent", {
      instructions: "Test agent instructions",
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
    const body = await introspection.json() as { agent: { id: string; instructions: string } };
    expect(body.agent.id).toBe("test-agent");
    expect(body.agent.instructions).toContain("Test agent");
  });
});
