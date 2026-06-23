import { describe, expect, it } from "vitest";
import { deriveProviderCategoryCoverage, runProviderConformance } from "../../src/providers.js";
import { ticketingCategoryProfile, ticketingManifestWithOperations } from "./helpers.js";

describe("provider category coverage conformance", () => {
  it("derives standard category coverage when required and recommended operations are implemented", async () => {
      const result = await runProviderConformance({
        manifest: ticketingManifestWithOperations([
          "ticket.read",
          "ticket.comment.create",
          "ticket.update",
        ]),
        categoryProfiles: [ticketingCategoryProfile],
      });

      expect(result.status).toBe("passed");
      expect(result.checks.find((check) => check.id === "provider.category_profile_coverage")).toMatchObject({
        status: "passed",
        details: {
          profileId: "ticketing.default.v1",
          category: "ticketing",
          coverageLevel: "standard",
          missingRequired: [],
          missingRecommended: [],
          missingOptional: ["ticket.assign"],
        },
      });
    });

    it("marks category coverage partial when recommended operations are missing", async () => {
      const result = await runProviderConformance({
        manifest: ticketingManifestWithOperations([
          "ticket.read",
          "ticket.comment.create",
        ]),
        categoryProfiles: [ticketingCategoryProfile],
      });

      expect(result.status).toBe("passed");
      expect(result.checks.find((check) => check.id === "provider.category_profile_coverage")).toMatchObject({
        status: "passed",
        details: {
          coverageLevel: "partial",
          missingRequired: [],
          missingRecommended: ["ticket.update"],
        },
      });
    });

    it("fails category conformance when required operations are missing", async () => {
      const result = await runProviderConformance({
        manifest: ticketingManifestWithOperations([
          "ticket.read",
          "ticket.update",
        ]),
        categoryProfiles: [ticketingCategoryProfile],
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.category_profile_coverage")).toMatchObject({
        status: "failed",
        details: {
          coverageLevel: "none",
          missingRequired: ["ticket.comment.create"],
        },
      });
    });

    it("fails provider extensions without capability, schema, and policy metadata", async () => {
      const result = await runProviderConformance({
        manifest: {
          ...ticketingManifestWithOperations([
            "ticket.read",
            "ticket.comment.create",
            {
              alias: "zendesk.ticket.macro.apply",
              level: "extension",
              extension: true,
              capability: "zendesk.ticket.macro.apply",
              inputSchemaRef: "ZendeskApplyMacroInput",
            },
          ]),
          capabilities: [
            ...ticketingManifestWithOperations([]).capabilities,
            {
              capability: "zendesk.ticket.macro.apply",
              extension: true,
              sideEffect: true,
            },
          ],
        },
        categoryProfiles: [ticketingCategoryProfile],
      });

      expect(result.status).toBe("failed");
      expect(result.checks.find((check) => check.id === "provider.category_profile_coverage")).toMatchObject({
        status: "failed",
        details: {
          invalidExtensions: [{
            alias: "zendesk.ticket.macro.apply",
            missing: ["outputSchema", "policy"],
          }],
        },
      });
    });

    it("accepts declared provider extensions with capability, schema, and policy metadata", async () => {
      const result = await runProviderConformance({
        manifest: {
          ...ticketingManifestWithOperations([
            "ticket.read",
            "ticket.comment.create",
            "ticket.update",
            {
              alias: "zendesk.ticket.macro.apply",
              level: "extension",
              extension: true,
              capability: "zendesk.ticket.macro.apply",
              inputSchemaRef: "ZendeskApplyMacroInput",
              outputSchemaRef: "ZendeskApplyMacroOutput",
              sideEffect: true,
              exposesSensitiveData: false,
              changesWorkflow: true,
            },
          ]),
          capabilities: [
            ...ticketingManifestWithOperations([]).capabilities,
            {
              capability: "zendesk.ticket.macro.apply",
              extension: true,
              sideEffect: true,
              changesWorkflow: true,
            },
          ],
        },
        categoryProfiles: [ticketingCategoryProfile],
      });

      expect(result.status).toBe("passed");
      expect(result.checks.find((check) => check.id === "provider.category_profile_coverage")).toMatchObject({
        status: "passed",
        details: {
          coverageLevel: "standard",
          invalidExtensions: [],
          operationCounts: expect.objectContaining({ extension: 1 }),
        },
      });
    });

    it("reads embedded category profiles from manifest metadata", () => {
      const coverage = deriveProviderCategoryCoverage({
        manifest: {
          ...ticketingManifestWithOperations([
            "ticket.read",
            "ticket.comment.create",
          ]),
          metadata: {
            categoryOperations: [
              "ticket.read",
              "ticket.comment.create",
            ],
            categoryProfile: ticketingCategoryProfile,
          },
        },
      });

      expect(coverage).toMatchObject({
        profileId: "ticketing.default.v1",
        coverageLevel: "partial",
        missingRecommended: ["ticket.update"],
      });
    });

    it("skips category profile coverage when manifest metadata does not declare a profile", async () => {
      const result = await runProviderConformance({
        manifest: ticketingManifestWithOperations([
          "ticket.read",
          "ticket.comment.create",
        ]),
      });

      expect(result.status).toBe("passed");
      expect(result.checks.find((check) => check.id === "provider.category_profile_coverage")).toMatchObject({
        status: "skipped",
      });
    });
});
