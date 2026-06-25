import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createZendeskTicketingClient } from "./client.js";
import type {
  JsonObject,
  ZendeskTicketingIntegrationOptions,
} from "./contracts.js";
import {
  zendeskTicketingProviderManifest,
  zendeskTicketingProviderManifestInput,
} from "./manifest.js";

export function createZendeskTicketingOperationHandlers(
  options: ZendeskTicketingIntegrationOptions,
) {
  const client = options.ticketingClient ?? createZendeskTicketingClient(options);

  return {
    "ticket.create": (
      input: JsonObject,
      _context: IntegrationOperationContext,
    ) => client.createTicket(input),
    "ticket.read": (
      input: { ticketId: string | number },
      _context: IntegrationOperationContext,
    ) => client.getTicket(input.ticketId),
    "ticket.update": (
      input: { ticketId: string | number; patch: JsonObject },
      _context: IntegrationOperationContext,
    ) => client.updateTicket(input.ticketId, input.patch),
    "ticket.search": (
      input: { query: string | JsonObject },
      _context: IntegrationOperationContext,
    ) => client.searchTickets(input.query),
    "ticket.comment.create": (
      input: { ticketId: string | number; comment: JsonObject },
      _context: IntegrationOperationContext,
    ) => client.createComment(input.ticketId, input.comment, true),
    "ticket.internalNote.create": (
      input: { ticketId: string | number; note: JsonObject },
      _context: IntegrationOperationContext,
    ) => client.createComment(input.ticketId, input.note, false),
    "ticket.attachments.add": (
      input: Parameters<typeof client.addTicketAttachment>[0],
      _context: IntegrationOperationContext,
    ) => client.addTicketAttachment(input),
    "customer.read": (
      input: { userId: string | number },
      _context: IntegrationOperationContext,
    ) => client.getUser(input.userId),
    "zendesk.organization.read": (
      input: { organizationId: string | number },
      _context: IntegrationOperationContext,
    ) => client.getOrganization(input.organizationId),
    "zendesk.webhook.list": () => client.listWebhooks(),
    "zendesk.readiness": () => client.readiness(),
  } as const;
}

export function createZendeskTicketingIntegration(options: ZendeskTicketingIntegrationOptions) {
  const client = options.ticketingClient ?? createZendeskTicketingClient(options);
  return {
    ...defineIntegration({
      manifest: zendeskTicketingProviderManifestInput,
      metadata: { manifest: zendeskTicketingProviderManifest },
      operations: createZendeskTicketingOperationHandlers({ ...options, ticketingClient: client }),
    }),
    client,
    getRawClient: () => client.getRawClient(),
  };
}

export const createZendeskIntegration = createZendeskTicketingIntegration;
export const createZendeskIntegrationOperationHandlers = createZendeskTicketingOperationHandlers;
