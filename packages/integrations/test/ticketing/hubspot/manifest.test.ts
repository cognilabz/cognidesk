import { describe, expect, it } from "vitest";
import {
  HUBSPOT_FULL_API_GENERATED_FUNCTION_COUNT,
  HUBSPOT_FULL_API_GENERATED_FUNCTION_NAMES,
  HUBSPOT_FULL_API_OPERATION_COUNT,
  HUBSPOT_FULL_API_SPEC_COUNT,
  hubSpotTicketingProviderManifest,
} from "../../../src/ticketing/hubspot/index.js";

describe("@cognidesk/integrations HubSpot manifest", () => {
  it("exports an official provider manifest for HubSpot ticketing", () => {
    expect(hubSpotTicketingProviderManifest).toMatchObject({
      id: "ticketing.hubspot",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "hubspot",
      trustLevel: "official",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(hubSpotTicketingProviderManifest.coverage.notes.join(" ")).toContain("every selected current API entry");
    expect(hubSpotTicketingProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      documentedSpecCount: 101,
      documentedOperationCount: 1182,
      implementedOperationCount: 1182,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 1182,
    });
    expect(HUBSPOT_FULL_API_SPEC_COUNT).toBe(101);
    expect(HUBSPOT_FULL_API_OPERATION_COUNT).toBe(1182);
    expect(HUBSPOT_FULL_API_GENERATED_FUNCTION_COUNT).toBe(1182);
    expect(HUBSPOT_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "TicketsPostCrmObjects202603TicketsCreate",
      "TicketsGetCrmObjects202603TicketsTicketIdGetById",
      "CustomChannelsPostConversationsCustomChannels202603ChannelIdMessages",
      "FilesGetFiles202603FilesFileIdGetById",
      "CrmOwnersGetCrmOwners202603CrmOwnersV3",
      "PipelinesPostCrmPipelines202603ObjectTypeCreate",
      "NotesPostCrmObjects202603NotesSearchDoSearch",
    ]));
    expect(hubSpotTicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toEqual(expect.arrayContaining([
        "https://api.hubapi.com/public/api/spec/v1/specs",
        "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/tickets/guide",
        "https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm",
        "https://developers.hubspot.com/docs/api-reference/legacy/account/account-information/get-account-details",
        "https://developers.hubspot.com/docs/apps/legacy-apps/authentication/validating-requests",
      ]));
    expect(hubSpotTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
        "hubspot.request-signature-v3",
      ]));
    expect(hubSpotTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "hubspotTicket",
      "hubspotContact",
      "hubspotCompany",
      "hubspotNote",
      "hubspotAssociation",
    ]));
    expect(hubSpotTicketingProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "hubspot-webhook-secret")?.required).toBe(false);
    expect(hubSpotTicketingProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "hubspot-private-app-token")?.scopes)
      .toEqual(expect.arrayContaining(["tickets", "crm.objects.owners.read"]));
    const readCapability = hubSpotTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "read-provider-object");
    const updateCapability = hubSpotTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "update-provider-object");
    const searchCapability = hubSpotTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "search-provider-object");
    const handoffCapability = hubSpotTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "handoff");
    expect(readCapability?.description).not.toContain("notes");
    expect(readCapability?.description).toContain("association labels");
    expect(readCapability?.providerObjects?.map((object) => object.schemaName))
      .not.toContain("notes");
    expect(readCapability?.providerObjects?.map((object) => object.kind))
      .toContain("hubspotAssociationLabel");
    expect(updateCapability?.providerObjects?.map((object) => object.kind))
      .not.toContain("hubspotAssociation");
    expect(searchCapability?.providerObjects?.map((object) => object.kind))
      .not.toContain("hubspotAssociation");
    expect(handoffCapability?.description).toContain("associate existing HubSpot file IDs");
    expect(handoffCapability?.description).not.toContain("attachment foundations");
    expect(hubSpotTicketingProviderManifest.limitations.join(" ")).toContain("associationTypeId");
    expect(hubSpotTicketingProviderManifest.limitations.join(" ")).toContain("SDK-user");
  });
});
