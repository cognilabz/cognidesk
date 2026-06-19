import { describe, expect, it } from "vitest";
import {
  checkProviderCapabilityCoverage,
  defineIntegrationCategoryProfile,
  defineProviderPackage,
  deriveProviderCapabilityCoverage,
} from "../../src/index.js";

describe("provider capability coverage contracts", () => {
  it("derives provider capability coverage from declared category operations", () => {
      const profile = defineIntegrationCategoryProfile({
        category: "ticketing",
        operations: [
          {
            alias: "ticket.read",
            capability: "read-provider-object",
            providerObject: "ticket",
            level: "required",
          },
          {
            alias: "ticket.comment.create",
            capability: "send",
            providerObject: "ticket",
            audience: "customer-facing",
            sideEffect: true,
            externallyVisible: true,
            level: "required",
          },
          {
            alias: "ticket.update",
            capability: "update-provider-object",
            providerObject: "ticket",
            sideEffect: true,
            changesWorkflow: true,
            level: "recommended",
          },
          {
            alias: "ticket.search",
            capability: "search-provider-object",
            providerObject: "ticket",
            level: "recommended",
          },
          {
            alias: "ticket.close",
            capability: "update-provider-object",
            providerObject: "ticket",
            changesWorkflow: true,
            level: "optional",
          },
        ],
      });

      const partial = deriveProviderCapabilityCoverage({
        profile,
        manifest: {
          id: "ticketing.partial",
          name: "Partial Ticketing",
          packageName: "@cognidesk/integrations",
          provider: "partialdesk",
          category: "ticketing",
          directions: ["bidirectional"],
          capabilities: [
            { capability: "read-provider-object" },
            { capability: "send" },
          ],
          operations: [
            {
              alias: "ticket.read",
              capability: "read-provider-object",
              providerObject: "ticket",
            },
            {
              alias: "ticket.comment.create",
              capability: "send",
              providerObject: "ticket",
              providerOperation: "comments.create",
            },
            {
              alias: "partialdesk.ticket.macro.apply",
              capability: "update-provider-object",
              providerObject: "ticket",
              extension: true,
            },
          ],
        },
      });
      expect(partial).toMatchObject({
        conformant: true,
        coverage: "partial",
        missingRecommendedOperations: ["ticket.update", "ticket.search"],
        missingOptionalOperations: ["ticket.close"],
        extensionOperations: ["partialdesk.ticket.macro.apply"],
      });

      const standard = deriveProviderCapabilityCoverage({
        profile,
        manifest: {
          id: "ticketing.standard",
          name: "Standard Ticketing",
          packageName: "@cognidesk/integrations",
          provider: "standarddesk",
          category: "ticketing",
          directions: ["bidirectional"],
          capabilities: [
            { capability: "read-provider-object" },
            { capability: "send" },
            { capability: "update-provider-object" },
            { capability: "search-provider-object" },
          ],
          operations: [
            { alias: "ticket.read", capability: "read-provider-object", providerObject: "ticket" },
            { alias: "ticket.comment.create", capability: "send", providerObject: "ticket" },
            { alias: "ticket.update", capability: "update-provider-object", providerObject: "ticket" },
            { alias: "ticket.search", capability: "search-provider-object", providerObject: "ticket" },
          ],
        },
      });
      expect(standard).toMatchObject({
        conformant: true,
        coverage: "standard",
        missingRecommendedOperations: [],
        missingOptionalOperations: ["ticket.close"],
      });

      const full = deriveProviderCapabilityCoverage({
        profile,
        manifest: {
          id: "ticketing.full",
          name: "Full Ticketing",
          packageName: "@cognidesk/integrations",
          provider: "fulldesk",
          category: "ticketing",
          directions: ["bidirectional"],
          capabilities: [
            { capability: "read-provider-object" },
            { capability: "send" },
            { capability: "update-provider-object" },
            { capability: "search-provider-object" },
          ],
          operations: [
            { alias: "ticket.read", capability: "read-provider-object", providerObject: "ticket" },
            { alias: "ticket.comment.create", capability: "send", providerObject: "ticket" },
            { alias: "ticket.update", capability: "update-provider-object", providerObject: "ticket" },
            { alias: "ticket.search", capability: "search-provider-object", providerObject: "ticket" },
            { alias: "ticket.close", capability: "update-provider-object", providerObject: "ticket" },
          ],
        },
      });
      expect(full).toMatchObject({
        conformant: true,
        coverage: "full",
        missingOptionalOperations: [],
      });
    });

    it("fails category conformance when required operations are missing or mismatched", () => {
      const profile = defineIntegrationCategoryProfile({
        category: "email",
        operations: [
          {
            alias: "email.thread.read",
            capability: "read-provider-object",
            providerObject: "emailThread",
            level: "required",
          },
          {
            alias: "email.send",
            capability: "send",
            providerObject: "emailThread",
            level: "required",
          },
        ],
      });

      const mismatch = deriveProviderCapabilityCoverage({
        profile,
        manifest: {
          id: "email.badmail",
          name: "Bad Mail",
          packageName: "@cognidesk/integrations",
          provider: "badmail",
          category: "email",
          directions: ["bidirectional"],
          capabilities: [{ capability: "read-provider-object" }, { capability: "send" }],
          operations: [
            {
              alias: "email.thread.read",
              capability: "search-provider-object",
              providerObject: "emailThread",
            },
            {
              alias: "email.send",
              capability: "send",
              providerObject: "message",
            },
          ],
        },
      });

      expect(mismatch).toMatchObject({
        conformant: false,
        coverage: "partial",
        missingRequiredOperations: ["email.thread.read", "email.send"],
        mismatchedOperations: [
          {
            alias: "email.thread.read",
            reason: "capability-mismatch",
            expectedCapability: "read-provider-object",
            actualCapability: "search-provider-object",
          },
          {
            alias: "email.send",
            reason: "provider-object-mismatch",
            expectedProviderObject: "emailThread",
            actualProviderObject: "message",
          },
        ],
      });
    });

    it("keeps operation aliases provider-neutral and checks only declared metadata", () => {
      const profile = defineIntegrationCategoryProfile({
        category: "handoff",
        operations: [{
          alias: "handoff.destination.request",
          capability: "handoff",
          level: "required",
          changesWorkflow: true,
        }],
      });
      const manifest = defineProviderPackage({
        id: "handoff.custom",
        name: "Custom Handoff",
        packageName: "@cognidesk/integrations",
        provider: "customhandoff",
        category: "handoff",
        directions: ["bidirectional"],
        capabilities: [{ capability: "handoff" }],
        operations: [{
          alias: "handoff.destination.request",
          capability: "handoff",
          providerOperation: "handoffProvider.transfer",
          changesWorkflow: true,
        }],
      });

      expect(checkProviderCapabilityCoverage({ profile, manifest })).toBe(true);
      expect(deriveProviderCapabilityCoverage({ profile, manifest })).toMatchObject({
        conformant: true,
        coverage: "standard",
        matchedOperations: ["handoff.destination.request"],
      });
    });

    it("rejects duplicate operation aliases in profiles and provider manifests", () => {
      expect(() => defineIntegrationCategoryProfile({
        category: "voice",
        operations: [
          { alias: "voice.call.hangup", capability: "transfer", level: "required" },
          { alias: "voice.call.hangup", capability: "send", level: "optional" },
        ],
      })).toThrow("declares operation alias 'voice.call.hangup' more than once");

      expect(() => defineProviderPackage({
        id: "voice.duplicate",
        name: "Duplicate Voice",
        packageName: "@cognidesk/integrations",
        provider: "voiceco",
        category: "voice",
        directions: ["bidirectional"],
        capabilities: [{ capability: "transfer" }],
        operations: [
          { alias: "voice.call.hangup", capability: "transfer" },
          { alias: "voice.call.hangup", capability: "transfer" },
        ],
      })).toThrow("declares operation alias 'voice.call.hangup' more than once");
    });
});
