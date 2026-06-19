import { createAgent, cognideskStudioAdapterProviderManifest, createCognideskStudioAdapter, describe, expect, it } from "./helpers.js";

describe("studio adapter", () => {
  it("fails closed when the SDK host does not support configuration mutation", async () => {
      const agent = createAgent("test-agent", {
        instructions: "Test agent instructions",
      }).compile();
      const adapter = createCognideskStudioAdapter({
        targetId: "test-target",
        agent,
        runtime: {
          async listEvents() {
            return [];
          },
        },
      });
  
      const response = await adapter.handle(new Request("http://local/api/studio/configuration/changes", {
        method: "POST",
        body: JSON.stringify({
          targetId: "test-target",
          reason: "Disable voice flow while updating consent policy.",
          operations: [{
            op: "set-flow-enabled",
            channelId: "voice-support",
            journeyId: "human-handoff",
            value: false,
          }],
        }),
      }));
  
      expect(response.status).toBe(501);
      expect(await response.json()).toMatchObject({
        accepted: false,
        status: "unsupported",
      });
    });

  it("delegates configuration mutation requests to the SDK host", async () => {
      const agent = createAgent("test-agent", {
        instructions: "Test agent instructions",
      }).compile();
      const adapter = createCognideskStudioAdapter({
        targetId: "test-target",
        agent,
        runtime: {
          async listEvents() {
            return [];
          },
        },
        configuration: {
          async updateConfiguration(request) {
            return {
              requestId: request.requestId ?? "generated",
              targetId: request.targetId,
              accepted: true,
              applied: false,
              status: "accepted",
              message: `Queued ${request.operations.length} configuration change.`,
            };
          },
        },
      });
  
      const response = await adapter.handle(new Request("http://local/api/studio/configuration/changes", {
        method: "POST",
        body: JSON.stringify({
          requestId: "cfg-1",
          targetId: "test-target",
          reason: "Operator approved SMS outbound quiet-hours policy.",
          operations: [{
            op: "set-outbound-policy",
            channelId: "sms-support",
            policyId: "quietHours",
            value: { owner: "sdk-user", channelSpecific: true },
          }],
        }),
      }));
  
      expect(response.status).toBe(202);
      expect(await response.json()).toMatchObject({
        requestId: "cfg-1",
        targetId: "test-target",
        accepted: true,
        applied: false,
        status: "accepted",
      });
    });
});
