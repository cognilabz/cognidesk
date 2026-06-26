import { Client as HubSpotClient } from "@hubspot/api-client";
import { defineIntegration, type IntegrationOperationHandlers } from "@cognidesk/integration-kit";
import { hubSpotTicketingProviderManifest } from "./manifest.js";

export type HubSpotTicketingRawClient = HubSpotClient;

export interface HubSpotTicketingClientOptions {
  accessToken?: string;
  rawClient?: HubSpotTicketingRawClient;
}

export interface HubSpotTicketingClient {
  rawClient: HubSpotTicketingRawClient;
  getRawClient(): HubSpotTicketingRawClient;
  integration: ReturnType<typeof defineIntegration>;
}

export function createHubSpotTicketingClient(options: HubSpotTicketingClientOptions = {}): HubSpotTicketingClient {
  const rawClient = options.rawClient ?? new HubSpotClient({
    ...(options.accessToken ? { accessToken: options.accessToken } : {}),
  });
  const operations = createHubSpotTicketingOperationHandlers(rawClient);
  return {
    rawClient,
    getRawClient: () => rawClient,
    integration: defineIntegration({
      manifest: hubSpotTicketingProviderManifest,
      operations,
    }),
  };
}

export function createHubSpotTicketingOperationHandlers(rawClient: HubSpotTicketingRawClient): IntegrationOperationHandlers {
  return {
    "ticket.read": (input: any) =>
      rawClient.crm.tickets.basicApi.getById(
        input.ticketId ?? input.id,
        input.properties,
        input.propertiesWithHistory,
        input.associations,
        input.archived,
        input.idProperty,
      ),
    "ticket.comment.create": (input: any) => createNote(rawClient, input, { publicComment: true }),
    "ticket.create": (input: any) =>
      rawClient.crm.tickets.basicApi.create({ properties: input.properties ?? input }),
    "ticket.update": (input: any) =>
      rawClient.crm.tickets.basicApi.update(
        input.ticketId ?? input.id,
        { properties: input.properties ?? input.patch ?? input },
        input.idProperty,
      ),
    "ticket.search": (input: any) =>
      rawClient.crm.tickets.searchApi.doSearch(input),
    "ticket.internalNote.create": (input: any) => createNote(rawClient, input, { publicComment: false }),
    "hubspot.association.create": (input: any) =>
      rawClient.crm.associations.v4.basicApi.create(
        input.fromObjectType ?? "tickets",
        input.fromObjectId ?? input.ticketId,
        input.toObjectType,
        input.toObjectId,
        input.associationSpec ?? input.associationTypes ?? input.types,
      ),
  };
}

function createNote(rawClient: HubSpotTicketingRawClient, input: any, options: { publicComment: boolean }) {
  const properties = {
    hs_note_body: input.body ?? input.text ?? input.comment,
    hs_timestamp: input.timestamp ?? new Date().toISOString(),
    ...(input.properties ?? {}),
    ...(options.publicComment ? { hs_note_visibility: input.visibility ?? "PUBLIC" } : {}),
  };
  return rawClient.crm.objects.notes.basicApi.create({
    properties,
    ...(input.associations ? { associations: input.associations } : {}),
  });
}
