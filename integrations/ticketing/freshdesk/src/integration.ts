import {
  defineIntegration,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createFreshdeskTicketingClient } from "./client.js";
import type {
  FreshdeskJsonObject,
  FreshdeskTicketingClient,
  FreshdeskTicketingClientOptions,
} from "./contracts.js";
import { freshdeskTicketingProviderManifest, freshdeskTicketingProviderManifestInput } from "./manifest.js";
import {
  parseFreshdeskWebhookRequest,
  type FreshdeskWebhookOptions,
} from "./webhooks.js";

export interface FreshdeskTicketingIntegrationOptions extends FreshdeskTicketingClientOptions {
  ticketingClient?: FreshdeskTicketingClient;
  webhookSecret?: string;
  webhookHeaderName?: string;
}

export function createFreshdeskTicketingIntegrationOperationHandlers(options: FreshdeskTicketingIntegrationOptions) {
  const client = options.ticketingClient ?? createFreshdeskTicketingClient(options);

  return {
    "ticket.create": (input: FreshdeskJsonObject, _context: IntegrationOperationContext) => client.createTicket(input),
    "ticket.read": (input: { ticketId: string | number }, _context: IntegrationOperationContext) => client.getTicket(input.ticketId),
    "ticket.update": (input: { ticketId: string | number; patch: FreshdeskJsonObject }, _context: IntegrationOperationContext) => client.updateTicket(input.ticketId, input.patch),
    "ticket.search": (input: { query: string | FreshdeskJsonObject }, _context: IntegrationOperationContext) => client.searchTickets(input.query),
    "ticket.comment.create": (input: { ticketId: string | number; reply: FreshdeskJsonObject }, _context: IntegrationOperationContext) => client.createReply(input.ticketId, input.reply),
    "ticket.internalNote.create": (input: { ticketId: string | number; note: FreshdeskJsonObject }, _context: IntegrationOperationContext) => client.createNote(input.ticketId, input.note),
    "customer.read": (input: { contactId: string | number }, _context: IntegrationOperationContext) => client.getContact(input.contactId),
    "customer.search": (input: { query: string | FreshdeskJsonObject }, _context: IntegrationOperationContext) => client.searchContacts(input.query),
    "freshdesk.agent.read": (input: { agentId: string | number }, _context: IntegrationOperationContext) => client.getAgent(input.agentId),
    "freshdesk.group.read": (input: { groupId: string | number }, _context: IntegrationOperationContext) => client.getGroup(input.groupId),
    "freshdesk.readiness": () => client.readiness(),
    "freshdesk.webhook.parse": (input: { request: Request; options?: FreshdeskWebhookOptions }) =>
      parseFreshdeskWebhookRequest(input.request, webhookOptions(options, input.options)),
  };
}

export function createFreshdeskTicketingIntegration(options: FreshdeskTicketingIntegrationOptions) {
  return defineIntegration({
    manifest: freshdeskTicketingProviderManifestInput,
    metadata: { manifest: freshdeskTicketingProviderManifest },
    operations: createFreshdeskTicketingIntegrationOperationHandlers(options),
  });
}

export const createFreshdeskIntegration = createFreshdeskTicketingIntegration;
export const createFreshdeskIntegrationOperationHandlers = createFreshdeskTicketingIntegrationOperationHandlers;

function webhookOptions(
  options: FreshdeskTicketingIntegrationOptions,
  inputOptions: FreshdeskWebhookOptions | undefined,
): FreshdeskWebhookOptions {
  return {
    ...(options.webhookSecret ? { webhookSecret: options.webhookSecret } : {}),
    ...(options.webhookHeaderName ? { headerName: options.webhookHeaderName } : {}),
    ...(inputOptions ?? {}),
  };
}
