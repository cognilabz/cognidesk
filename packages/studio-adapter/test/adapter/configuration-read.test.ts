import { createAgent, cognideskStudioAdapterProviderManifest, createCognideskStudioAdapter, describe, expect, it } from "./helpers.js";

describe("studio adapter", () => {
  it("serves a read-only configuration surface derived from compiled agent code", async () => {
      const agent = createAgent("test-agent", {
        instructions: "Test agent instructions",
        channels: {
          voice: {
            tone: "short-spoken",
            consent: { owner: "sdk", types: ["voice-call", "handoff"] },
          },
          chat: {
            tone: "concise",
            widgets: { owner: "sdk", enabled: true },
          },
        },
        configuration: {
          channelSets: [{
            id: "customer-support",
            label: "Customer support",
            channelIds: ["voice-support"],
            channels: ["voice"],
            conversationContinuity: {
              mode: "sdk-decides",
              crossChannel: true,
            },
            metadata: { continuity: "sdk" },
          }],
          channels: [{
            id: "voice-support",
            channel: "voice",
            audience: "customer-facing",
            channelSetIds: ["customer-support"],
            providerPackageIds: ["contactCenter.amazon-connect"],
            enabledCapabilities: ["handoff", "transfer"],
            flowActivations: [{
              journeyId: "human-handoff",
              policyIds: ["consent"],
              providerPackageIds: ["contactCenter.amazon-connect"],
              metadata: { reasonSource: "sdk" },
            }],
            outbound: {
              enabled: true,
              providerPackageIds: ["contactCenter.amazon-connect"],
              policyIds: ["consent"],
              metadata: { consent: "required" },
            },
            handoff: {
              enabled: true,
              providerPackageIds: ["contactCenter.amazon-connect"],
              sdkControlled: true,
              policyIds: ["consent"],
              metadata: { queue: "priority" },
            },
            policies: {
              consent: { owner: "sdk", types: ["voice-call", "handoff"] },
            },
            metadata: { owner: "support" },
          }],
          providerPackages: [{
            id: "contactCenter.amazon-connect",
            name: "Amazon Connect",
            packageName: "@cognidesk/integrations",
            provider: "amazon-connect",
            category: "contactCenter",
            trustLevel: "official",
            directions: ["inbound-only", "outbound-only", "bidirectional"],
            channelAudiences: ["customer-facing", "internal-support", "mixed"],
            coverage: {
              scope: "support-workflow-subset",
              evidence: [{ label: "Amazon Connect StartTaskContact", url: "https://docs.aws.amazon.com/connect/latest/APIReference/API_StartTaskContact.html" }],
            },
            capabilities: [{
              capability: "handoff",
              providerObjects: [{ kind: "amazonConnectTaskContact", label: "Amazon Connect Task Contact" }],
              requiresCredential: true,
              sideEffect: true,
              changesWorkflow: true,
              metadata: { object: "task" },
            }],
            credentialRequirements: [{
              id: "amazon-connect-api-access",
              scopes: ["connect:StartTaskContact"],
              required: true,
              metadata: { env: "server" },
            }],
            maintainers: [{ name: "Cognidesk", type: "official" }],
            metadata: { region: "eu-central-1" },
          }],
          capabilityAvailability: [{
            providerPackageId: "contactCenter.amazon-connect",
            capability: "handoff",
            status: "enabled",
            enabledForChannels: ["voice"],
            enabledForJourneys: ["human-handoff"],
            metadata: { configuredBy: "sdk" },
          }],
          credentialStatuses: [{
            providerPackageId: "contactCenter.amazon-connect",
            requirementId: "amazon-connect-api-access",
            state: "configured",
            scopes: ["connect:StartTaskContact"],
          }],
        },
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
  
      const response = await adapter.handle(new Request("http://local/api/studio/configuration"));
      expect(response.status).toBe(200);
      const body = await response.json() as {
        channelSets: Array<{ id: string; channelIds: string[]; metadata?: Record<string, unknown> }>;
        channels: Array<{
          id: string;
          channel: string;
          policyIds: string[];
          providerPackageIds: string[];
          enabledCapabilities: string[];
          flowActivations: Array<{ journeyId: string; providerPackageIds: string[]; metadata?: Record<string, unknown> }>;
          outbound?: { enabled: boolean; providerPackageIds: string[]; metadata?: Record<string, unknown> };
          handoff?: { enabled: boolean; providerPackageIds: string[]; sdkControlled?: boolean; metadata?: Record<string, unknown> };
          metadata?: Record<string, unknown>;
          policyDetails: Array<{ id: string; owner?: string; value: unknown }>;
        }>;
        providerPackages: Array<{
          id: string;
          capabilities: Array<{ capability: string; requiresCredential: boolean; metadata?: Record<string, unknown> }>;
          credentialRequirements: Array<{ id: string; metadata?: Record<string, unknown> }>;
          maintainers: Array<{ name: string; type: string }>;
          metadata?: Record<string, unknown>;
        }>;
        capabilityAvailability: Array<{ providerPackageId?: string; capability?: string; status: string; metadata?: Record<string, unknown> }>;
        providerReadiness: Array<{ providerPackageId: string; status: string }>;
        credentialStatuses: Array<{ providerPackageId?: string; requirementId: string; state: string }>;
        policyIds: string[];
      };
      expect(body.channelSets).toEqual([expect.objectContaining({
        id: "customer-support",
        channelIds: ["voice-support"],
        metadata: { continuity: "sdk" },
      })]);
      expect(body.channels).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: "voice-support",
          channel: "voice",
          providerPackageIds: ["contactCenter.amazon-connect"],
          enabledCapabilities: ["handoff", "transfer"],
          policyIds: ["consent"],
          flowActivations: [expect.objectContaining({
            journeyId: "human-handoff",
            providerPackageIds: ["contactCenter.amazon-connect"],
            metadata: { reasonSource: "sdk" },
          })],
          outbound: expect.objectContaining({
            enabled: true,
            providerPackageIds: ["contactCenter.amazon-connect"],
            metadata: { consent: "required" },
          }),
          handoff: expect.objectContaining({
            enabled: true,
            providerPackageIds: ["contactCenter.amazon-connect"],
            sdkControlled: true,
            metadata: { queue: "priority" },
          }),
          metadata: { owner: "support" },
          policyDetails: expect.arrayContaining([
            expect.objectContaining({ id: "consent", owner: "sdk" }),
          ]),
        }),
        expect.objectContaining({
          id: "chat",
          channel: "chat",
          policyIds: ["tone", "widgets"],
        }),
      ]));
      expect(body.providerPackages).toEqual([expect.objectContaining({
        id: "contactCenter.amazon-connect",
        capabilities: [expect.objectContaining({
          capability: "handoff",
          requiresCredential: true,
          metadata: { object: "task" },
        })],
        credentialRequirements: [expect.objectContaining({
          id: "amazon-connect-api-access",
          metadata: { env: "server" },
        })],
        maintainers: [expect.objectContaining({ name: "Cognidesk", type: "official" })],
        metadata: { region: "eu-central-1" },
      })]);
      expect(body.capabilityAvailability).toEqual([expect.objectContaining({
        providerPackageId: "contactCenter.amazon-connect",
        capability: "handoff",
        status: "enabled",
        metadata: { configuredBy: "sdk" },
      })]);
      expect(body.credentialStatuses).toEqual([expect.objectContaining({
        providerPackageId: "contactCenter.amazon-connect",
        requirementId: "amazon-connect-api-access",
        state: "configured",
      })]);
      expect(body.providerReadiness).toEqual([expect.objectContaining({
        providerPackageId: "contactCenter.amazon-connect",
        status: "configured",
      })]);
      expect(body.policyIds).toEqual(expect.arrayContaining(["tone", "consent", "widgets"]));
    });

  it("downgrades unsupported full-api readiness and preserves provider object schema metadata", async () => {
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
          providerPackages: [{
            id: "ticketing.oracle-service",
            name: "Oracle Service",
            packageName: "@cognidesk/integrations",
            provider: "oracle-service",
            category: "ticketing",
            trustLevel: "official",
            directions: ["bidirectional"],
            channelAudiences: ["mixed"],
            coverage: {
              scope: "support-workflow-subset",
              evidence: [{ label: "Oracle Service docs", url: "https://docs.oracle.com/" }],
            },
            capabilities: [{
              capability: "read-provider-object",
              providerObjects: [{
                kind: "oracleServiceRequest",
                label: "Oracle Service Request",
                schemaName: "serviceRequests",
                metadata: { resource: "serviceRequests" },
              }],
            }],
          }],
          providerReadiness: [{
            providerPackageId: "ticketing.oracle-service",
            status: "full-api-verified",
            live: true,
          }],
        },
      });
  
      const response = await adapter.handle(new Request("http://local/api/studio/configuration"));
      expect(response.status).toBe(200);
      const body = await response.json() as {
        providerPackages: Array<{
          capabilities: Array<{
            providerObjects: Array<{ schemaName?: string; metadata?: Record<string, unknown> }>;
          }>;
        }>;
        providerReadiness: Array<{ status: string; metadata?: Record<string, unknown> }>;
      };
  
      expect(body.providerPackages[0]?.capabilities[0]?.providerObjects[0]).toMatchObject({
        schemaName: "serviceRequests",
        metadata: { resource: "serviceRequests" },
      });
      expect(body.providerReadiness[0]).toMatchObject({
        status: "scoped-verified",
        metadata: {
          downgradedFrom: "full-api-verified",
        },
      });
    });

  it("merges runtime configuration source without adapter-only configuration", async () => {
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
          configurationSource() {
            return {
              channels: [{
                id: "email-support",
                channel: "email",
                providerPackageIds: ["email.postmark"],
                enabledCapabilities: ["send"],
                outbound: {
                  enabled: true,
                  providerPackageIds: ["email.postmark"],
                },
                policies: {
                  consent: { owner: "sdk", types: ["email-outbound"] },
                },
              }],
              providerPackages: [{
                id: "email.postmark",
                name: "Postmark",
                packageName: "@cognidesk/integrations",
                provider: "postmark",
                category: "email",
                trustLevel: "official",
                directions: ["inbound-only", "outbound-only", "bidirectional"],
                capabilities: [{
                  capability: "send",
                  providerObjects: [{ kind: "postmarkOutboundMessage" }],
                }],
              }],
            };
          },
        },
      });
  
      const response = await adapter.handle(new Request("http://local/api/studio/configuration"));
      expect(response.status).toBe(200);
      const body = await response.json() as {
        channels: Array<{ id: string; providerPackageIds: string[] }>;
        providerPackages: Array<{ id: string; packageName: string }>;
        providerReadiness: Array<{ providerPackageId: string; status: string }>;
      };
  
      expect(body.channels).toEqual([expect.objectContaining({
        id: "email-support",
        providerPackageIds: ["email.postmark"],
      })]);
      expect(body.providerPackages).toEqual([expect.objectContaining({
        id: "email.postmark",
        packageName: "@cognidesk/integrations",
      })]);
      expect(body.providerReadiness).toEqual([expect.objectContaining({
        providerPackageId: "email.postmark",
        status: "configured",
      })]);
    });
});
