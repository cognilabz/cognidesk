import { describe, expect, it } from "vitest";
import {
  categoryOperationAliases,
  contactCenterCategoryProfile,
  defineIntegrationCategoryProfile,
  deriveProviderCapabilityCoverage,
  emailCategoryProfile,
  findCategoryOperation,
  getIntegrationCategoryProfile,
  handoffCategoryProfile,
  integrationProviderReferences,
  integrationCategoryProfiles,
  loadProviderIntegrationManifest,
  messagingCategoryProfile,
  requireIntegrationCategoryProfile,
  smsCategoryProfile,
  ticketingCategoryProfile,
  voiceCategoryProfile,
  type IntegrationCategoryProfile,
} from "../src/index.js";

describe("integration category profiles", () => {
  it("exports provider-neutral profiles for the first omnichannel categories", () => {
    expect(integrationCategoryProfiles.map((profile) => profile.id)).toEqual([
      "ticketing",
      "email",
      "voice",
      "messaging",
      "sms",
      "contact-center",
      "handoff",
    ]);

    expect(getIntegrationCategoryProfile("ticketing")).toBe(ticketingCategoryProfile);
    expect(getIntegrationCategoryProfile("contactCenter")).toBe(contactCenterCategoryProfile);
    expect(getIntegrationCategoryProfile("sms")).toBe(smsCategoryProfile);
    expect(requireIntegrationCategoryProfile("handoff")).toBe(handoffCategoryProfile);
  });

  it("provides rich category-specific default operation catalogs", () => {
    expectAliases(ticketingCategoryProfile, [
      "ticket.read",
      "ticket.create",
      "ticket.update",
      "ticket.search",
      "ticket.comment.create",
      "ticket.internalNote.create",
      "ticket.assign",
      "ticket.close",
      "ticket.macro.apply",
    ]);
    expectAliases(emailCategoryProfile, [
      "email.receive",
      "email.send",
      "email.reply.send",
      "email.draft.create",
      "email.draft.update",
      "email.archive",
      "email.label.apply",
      "email.attachments.read",
    ]);
    expectAliases(voiceCategoryProfile, [
      "voice.call.start",
      "voice.call.answer",
      "voice.call.hangup",
      "voice.call.transfer",
      "voice.callback.schedule",
      "voice.transcript.read",
      "voice.recording.read",
      "voice.speak",
    ]);
    expectAliases(messagingCategoryProfile, [
      "messaging.thread.read",
      "messaging.message.receive",
      "messaging.message.send",
      "messaging.message.reply",
      "messaging.template.list",
      "messaging.template.send",
      "messaging.media.send",
    ]);
    expectAliases(smsCategoryProfile, [
      "sms.message.receive",
      "sms.message.send",
      "sms.message.reply",
      "sms.message.schedule",
      "sms.message.read",
      "sms.message.search",
      "sms.deliveryStatus.read",
      "sms.message.cancel",
    ]);
    expectAliases(contactCenterCategoryProfile, [
      "contactCenter.queue.list",
      "contactCenter.queue.status.read",
      "contactCenter.agent.list",
      "contactCenter.agent.status.update",
      "contactCenter.transfer.request",
      "contactCenter.callback.schedule",
    ]);
    expectAliases(handoffCategoryProfile, [
      "handoff.target.list",
      "handoff.request.create",
      "handoff.review.request",
      "handoff.accept",
      "handoff.complete",
      "handoff.cancel",
      "handoff.linkConversation",
    ]);
  });

  it("marks operations with level, capability, schemas, and governance metadata", () => {
    for (const profile of integrationCategoryProfiles) {
      expect(categoryOperationAliases(profile, "required").length, `${profile.id} required ops`).toBeGreaterThan(0);
      expect(categoryOperationAliases(profile, "recommended").length, `${profile.id} recommended ops`).toBeGreaterThan(0);
      expect(categoryOperationAliases(profile, "optional").length, `${profile.id} optional ops`).toBeGreaterThan(0);

      const operationAliases = categoryOperationAliases(profile);
      expect(new Set(operationAliases).size).toBe(operationAliases.length);
      for (const operation of profile.operations) {
        expect(operation.capability).toEqual(expect.any(String));
        expect(operation.inputSchema).toMatchObject({ kind: "schema-ref" });
        expect(operation.outputSchema).toMatchObject({ kind: "schema-ref" });
      }
    }

    expect(findCategoryOperation(ticketingCategoryProfile, "ticket.close")).toMatchObject({
      sideEffect: true,
      requiresApproval: true,
      changesWorkflow: true,
    });
    expect(findCategoryOperation(emailCategoryProfile, "email.reply.send")).toMatchObject({
      externallyVisible: true,
      requiresApproval: true,
    });
    expect(findCategoryOperation(voiceCategoryProfile, "voice.callback.schedule")).toMatchObject({
      capability: "schedule",
      externallyVisible: true,
      requiresApproval: true,
    });
    expect(findCategoryOperation(smsCategoryProfile, "sms.message.schedule")).toMatchObject({
      capability: "schedule",
      externallyVisible: true,
      requiresApproval: true,
    });
    expect(findCategoryOperation(handoffCategoryProfile, "handoff.request.create")).toMatchObject({
      capability: "handoff",
      changesWorkflow: true,
    });
  });

  it("keeps category profiles provider-neutral and leaves provider-specific extensions to manifests", () => {
    const forbiddenProviderPrefixes = /^(zendesk|gmail|outlook|twilio|amazon|intercom|gorgias)\./;

    for (const profile of integrationCategoryProfiles) {
      expect(profile.operations.map((operation) => operation.alias).filter((alias) =>
        forbiddenProviderPrefixes.test(alias)
      )).toEqual([]);
      expect(profile.events.length, `${profile.id} events`).toBeGreaterThan(0);
      expect(profile.outputs.length, `${profile.id} outputs`).toBeGreaterThan(0);
      expect(profile.dataSources.length, `${profile.id} data sources`).toBeGreaterThan(0);
    }
  });

  it("derives honest provider capability coverage from required, recommended, and optional operations", () => {
    const required = categoryOperationAliases(ticketingCategoryProfile, "required");
    const recommended = categoryOperationAliases(ticketingCategoryProfile, "recommended");
    const optional = categoryOperationAliases(ticketingCategoryProfile, "optional");

    expect(deriveProviderCapabilityCoverage(ticketingCategoryProfile, [])).toMatchObject({
      coverageLevel: "not-conformant",
      missingRequiredOperationAliases: required,
    });
    expect(deriveProviderCapabilityCoverage(ticketingCategoryProfile, required)).toMatchObject({
      coverageLevel: "partial",
      missingRequiredOperationAliases: [],
      missingRecommendedOperationAliases: recommended,
    });
    expect(deriveProviderCapabilityCoverage(ticketingCategoryProfile, [...required, ...recommended])).toMatchObject({
      coverageLevel: "standard",
      missingRequiredOperationAliases: [],
      missingRecommendedOperationAliases: [],
      missingOptionalOperationAliases: optional,
    });
    expect(deriveProviderCapabilityCoverage(ticketingCategoryProfile, [
      ...required,
      ...recommended,
      ...optional,
    ])).toMatchObject({
      coverageLevel: "full",
      missingRequiredOperationAliases: [],
      missingRecommendedOperationAliases: [],
      missingOptionalOperationAliases: [],
    });
  });

  it("rejects duplicate category surface declarations", () => {
    const firstOperation = ticketingCategoryProfile.operations[0];
    if (!firstOperation) throw new Error("Ticketing profile must declare operations.");

    expect(() => defineIntegrationCategoryProfile({
      ...ticketingCategoryProfile,
      id: "bad-ticketing",
      operations: [
        ...ticketingCategoryProfile.operations,
        firstOperation,
      ],
    })).toThrow("Integration category profile 'bad-ticketing' declares operation alias");
  });

  it("attaches category profiles and operation declarations to all matching provider manifests", async () => {
    const profiledCategories = new Set(integrationCategoryProfiles.map((profile) => profile.category));
    const profiledReferences = integrationProviderReferences.filter((reference) =>
      profiledCategories.has(reference.category)
    );

    expect(profiledReferences.length).toBeGreaterThan(20);
    for (const reference of profiledReferences) {
      const profile = requireIntegrationCategoryProfile(reference.category);
      const manifest = await loadProviderIntegrationManifest(reference);
      const declaredCapabilities = new Set(manifest.capabilities.map((capability) => capability.capability));
      const profileOperationAliases = new Set(profile.operations.map((operation) => operation.alias));
      const declaredProfileOperations = manifest.operations.filter((operation) =>
        profileOperationAliases.has(operation.alias)
      );

      expect(manifest.metadata?.categoryProfileId, reference.id).toBe(profile.id);
      expect(manifest.metadata?.integrationCategoryProfileId, reference.id).toBe(profile.id);
      expect(manifest.metadata?.categoryProfile, reference.id).toMatchObject({
        id: profile.id,
        coverage: expect.any(String),
        conformant: expect.any(Boolean),
      });
      expect(declaredProfileOperations.length, reference.id).toBeGreaterThan(0);
      for (const operation of declaredProfileOperations) {
        expect(declaredCapabilities.has(operation.capability), `${reference.id}:${operation.alias}`).toBe(true);
        expect(operation.metadata).toMatchObject({
          integrationCategoryProfile: true,
          categoryOperationLevel: expect.any(String),
        });
      }
    }
  }, 30000);
});

function expectAliases(profile: IntegrationCategoryProfile, aliases: readonly string[]) {
  expect(categoryOperationAliases(profile)).toEqual(expect.arrayContaining([...aliases]));
}
