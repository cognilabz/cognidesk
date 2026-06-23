import { describe, expect, it } from "vitest";
import { runProviderConformance } from "../../src/providers.js";

describe("provider metadata and evidence conformance", () => {
  it("fails channelCoverage metadata with unknown coverage status words", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "contact-center.genesys-cloud",
          name: "Genesys Cloud CX",
          packageName: "@cognidesk/integration-contact-center-genesys-cloud",
          provider: "genesys-cloud",
          category: "contact-center",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "Genesys Cloud Developer Center", url: "https://developer.genesys.cloud/" }],
          },
          capabilities: [{
            capability: "handoff",
            providerObjects: [{ kind: "genesysCloudCallback", label: "Genesys Cloud Callback" }],
          }],
          metadata: {
            channelCoverage: {
              callback: "typed-create",
              nativeChat: "maybe-later",
            },
          },
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.channel_coverage_metadata")).toMatchObject({
        status: "failed",
        details: {
          invalidEntries: [{ key: "nativeChat", status: "maybe-later" }],
        },
      });
    });

    it("fails official Studio-visible channel packages without channelCoverage metadata", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "voice.twilio",
          name: "Twilio Programmable Voice",
          packageName: "@cognidesk/integration-voice-twilio",
          provider: "twilio",
          category: "voice",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "Twilio Programmable Voice API overview", url: "https://www.twilio.com/docs/voice/api" }],
          },
          capabilities: [{
            capability: "send",
            providerObjects: [{ kind: "twilioCall", label: "Twilio Call" }],
          }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.channel_coverage_metadata")).toMatchObject({
        status: "failed",
        message: expect.stringContaining("Official provider packages in Studio-visible channel categories must declare channelCoverage"),
        details: expect.objectContaining({ category: "voice" }),
      });
    });

    it("fails provider-supported channelCoverage claims without URL evidence", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "contact-center.genesys-cloud",
          name: "Genesys Cloud CX",
          packageName: "@cognidesk/integration-contact-center-genesys-cloud",
          provider: "genesys-cloud",
          category: "contact-center",
          trustLevel: "community",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [],
          },
          capabilities: [{
            capability: "handoff",
            providerObjects: [{ kind: "genesysCloudCallback", label: "Genesys Cloud Callback" }],
          }],
          metadata: {
            channelCoverage: {
              webMessagingMessenger: "provider-supported-customer-site-not-typed",
            },
          },
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.channel_coverage_metadata")).toMatchObject({
        status: "failed",
        details: {
          providerSupportedCount: 1,
          hasUrlEvidence: false,
        },
      });
    });

    it("fails official provider scope strings without scope-kind metadata", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.servicenow",
          name: "ServiceNow",
          packageName: "@cognidesk/integration-ticketing-servicenow",
          provider: "servicenow",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "ServiceNow Table API", url: "https://www.servicenow.com/docs/api-reference/rest-apis/c_TableAPI.html" }],
          },
          capabilities: [{
            capability: "read-provider-object",
            providerObjects: [{ kind: "servicenowRecord", label: "ServiceNow Record" }],
            requiresCredential: true,
          }],
          credentialRequirements: [{ id: "servicenow-api", scopes: ["table_api"] }],
          metadata: {
            channelCoverage: { tableRecords: "typed-json-create-read-update-search" },
          },
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.credential_scope_classification")).toMatchObject({
        status: "failed",
        details: { requirementIds: ["servicenow-api"] },
      });
    });

    it("fails official provider packages without HTTPS URL evidence", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integration-ticketing-zendesk",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            notes: ["Scoped Zendesk ticketing coverage."],
            evidence: [{ label: "internal note" }],
          },
          capabilities: [{
            capability: "read-provider-object",
            providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }],
          }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.official_evidence")).toMatchObject({
        status: "failed",
        details: {
          urlEvidenceCount: 0,
        },
      });
    });

    it("fails official provider packages with non-HTTPS evidence URLs", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integration-ticketing-zendesk",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            notes: ["Scoped Zendesk ticketing coverage."],
            evidence: [{ label: "Zendesk API reference", url: "http://developer.zendesk.com/api-reference/" }],
          },
          capabilities: [{
            capability: "read-provider-object",
            providerObjects: [{ kind: "zendeskTicket", label: "Zendesk Ticket" }],
          }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.official_evidence")).toMatchObject({
        status: "failed",
        details: {
          nonHttpsUrls: ["http://developer.zendesk.com/api-reference/"],
        },
      });
    });

    it("fails full provider API coverage claims without evidence", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integration-ticketing-zendesk",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "full-provider-api",
            notes: ["Claims complete Zendesk API coverage."],
            evidence: [],
          },
          capabilities: [{ capability: "read-provider-object", requiresCredential: true }],
          credentialRequirements: [{ id: "zendesk-api-access" }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.coverage_scope")).toMatchObject({
        status: "failed",
        details: { scope: "full-provider-api" },
      });
    });

    it("fails full provider API coverage claims with label-only evidence", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integration-ticketing-zendesk",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "full-provider-api",
            notes: ["Claims complete Zendesk API coverage."],
            evidence: [{ label: "internal audit note" }],
          },
          capabilities: [{ capability: "read-provider-object", requiresCredential: true }],
          credentialRequirements: [{ id: "zendesk-api-access" }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.coverage_scope")).toMatchObject({
        status: "failed",
      });
    });

    it("fails full provider API coverage claims without verification metadata", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integration-ticketing-zendesk",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "full-provider-api",
            notes: ["Claims complete Zendesk API coverage."],
            evidence: [{ label: "Zendesk API reference", url: "https://developer.zendesk.com/api-reference/" }],
          },
          capabilities: [{
            capability: "read-provider-object",
            requiresCredential: true,
            providerObjects: [{ kind: "zendeskResource", label: "Zendesk Resource" }],
          }],
          credentialRequirements: [{ id: "zendesk-api-access" }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.coverage_scope")).toMatchObject({
        status: "failed",
        details: {
          scope: "full-provider-api",
          hasUrlEvidence: true,
          missingVerificationFields: ["provider", "apiVersion", "verifiedAt", "coverageArtifact", "operationCatalogArtifact", "functionCatalogArtifact"],
          invalidOperationCounts: ["documentedOperationCount", "implementedOperationCount", "unimplementedOperationCount", "generatedFunctionCount"],
        },
      });
    });

    it("allows full provider API coverage only with URL evidence and complete operation inventory metadata", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.zendesk",
          name: "Zendesk",
          packageName: "@cognidesk/integration-ticketing-zendesk",
          provider: "zendesk",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          channelAudiences: ["internal-support"],
          coverage: {
            scope: "full-provider-api",
            notes: ["Generated coverage artifact proves every documented Zendesk endpoint is represented."],
            evidence: [{ label: "Zendesk API reference", url: "https://developer.zendesk.com/api-reference/" }],
          },
          metadata: {
            fullProviderApiVerification: {
              provider: "zendesk",
              apiVersion: "2026-06-17",
              verifiedAt: "2026-06-17",
              coverageArtifact: "docs/provider-coverage/zendesk-2026-06-17.json",
              operationCatalogArtifact: "docs/provider-coverage/zendesk-2026-06-17.operations.json",
              functionCatalogArtifact: "docs/provider-coverage/zendesk-2026-06-17.functions.json",
              documentedOperationCount: 100,
              implementedOperationCount: 100,
              unimplementedOperationCount: 0,
              generatedFunctionCount: 100,
            },
          },
          capabilities: [{
            capability: "read-provider-object",
            providerObjects: [{ kind: "zendeskResource", label: "Zendesk Resource" }],
          }],
        },
      });

      expect(result.checks.find((check) => check.id === "provider.coverage_scope")).toMatchObject({
        status: "passed",
        details: {
          scope: "full-provider-api",
          evidenceCount: 1,
        },
      });
    });

    it("fails generic provider capabilities without provider-object evidence", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "contact-center.genesys-cloud",
          name: "Genesys Cloud CX",
          packageName: "@cognidesk/integration-contact-center-genesys-cloud",
          provider: "genesys-cloud",
          category: "contact-center",
          trustLevel: "official",
          directions: ["bidirectional"],
          capabilities: [{
            capability: "transfer",
            sideEffect: true,
            changesWorkflow: true,
          }],
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.generic_capability_evidence")).toMatchObject({
        status: "failed",
        details: { capabilities: ["transfer"] },
      });
    });

    it("passes connection-backed provider metadata with reviewed contract and operation aliases", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.front",
          name: "Front",
          packageName: "@cognidesk/integration-ticketing-front",
          provider: "front",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "Front API", url: "https://dev.frontapp.com/reference" }],
          },
          capabilities: [{
            capability: "send",
            providerObjects: [{ kind: "frontMessage", label: "Front Message" }],
            sideEffect: true,
            exposesSensitiveData: true,
            changesWorkflow: true,
          }],
          metadata: {
            connectionBacked: {
              kind: "openapi",
              id: "ticketing.front",
              provider: "front",
              source: "https://front.example.test/openapi.json",
              reviewedContract: {
                source: "https://front.example.test/openapi.json",
                digest: "sha256:abc123",
              },
              operationAliases: [{
                alias: "replyToConversation",
                providerOperation: "createConversationReply",
                capability: "send",
                sideEffect: true,
                exposesSensitiveData: true,
                changesWorkflow: true,
              }],
            },
          },
        },
      });

      expect(result.checks.find((check) => check.id === "provider.connection_backed")).toMatchObject({
        status: "passed",
        details: {
          kind: "openapi",
          operationAliasCount: 1,
        },
      });
    });

    it("fails connection-backed provider metadata without reviewed contract evidence", async () => {
      const result = await runProviderConformance({
        manifest: {
          id: "ticketing.front",
          name: "Front",
          packageName: "@cognidesk/integration-ticketing-front",
          provider: "front",
          category: "ticketing",
          trustLevel: "official",
          directions: ["bidirectional"],
          coverage: {
            scope: "support-workflow-subset",
            evidence: [{ label: "Front API", url: "https://dev.frontapp.com/reference" }],
          },
          capabilities: [{
            capability: "send",
            providerObjects: [{ kind: "frontMessage", label: "Front Message" }],
            sideEffect: true,
          }],
          metadata: {
            connectionBacked: {
              kind: "openapi",
              id: "ticketing.front",
              provider: "front",
              source: "https://front.example.test/openapi.json",
              operationAliases: [{
                alias: "replyToConversation",
                providerOperation: "createConversationReply",
                capability: "send",
                sideEffect: true,
              }],
            },
          },
        },
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.connection_backed")).toMatchObject({
        status: "failed",
        details: {
          missingReviewedContract: true,
        },
      });
    });
});
