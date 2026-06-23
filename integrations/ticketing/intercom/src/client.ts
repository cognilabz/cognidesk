import { IntercomClient } from "intercom-client";
import { defineIntegration, type IntegrationOperationHandlers } from "@cognidesk/integration-kit";
import { intercomTicketingProviderManifest } from "./manifest.js";

export interface IntercomTicketingClientOptions {
  accessToken?: string;
  rawClient?: any;
}

export interface IntercomTicketingClient {
  rawClient: any;
  integration: ReturnType<typeof defineIntegration>;
}

export function createIntercomTicketingClient(options: IntercomTicketingClientOptions = {}): IntercomTicketingClient {
  const rawClient = options.rawClient ?? new IntercomClient({
    ...(options.accessToken ? { token: options.accessToken } : {}),
  });
  const operations = createIntercomTicketingOperationHandlers(rawClient);
  return {
    rawClient,
    integration: defineIntegration({
      manifest: intercomTicketingProviderManifest,
      operations,
    }),
  };
}

export function createIntercomTicketingOperationHandlers(rawClient: any): IntegrationOperationHandlers {
  return {
    "ticket.read": (input: any) => rawClient.tickets.retrieve(input.ticketId ?? input.id),
    "ticket.comment.create": (input: any) => rawClient.conversations.reply(replyBody(input, "comment")),
    "ticket.create": (input: any) => rawClient.tickets.create(input.body ?? input),
    "ticket.update": (input: any) => rawClient.tickets.update(input.ticketId ?? input.id, input.body ?? input.patch ?? input),
    "ticket.search": (input: any) => rawClient.tickets.search(input),
    "ticket.internalNote.create": (input: any) => rawClient.conversations.reply(replyBody(input, "note")),
    "intercom.conversation.read": (input: any) => rawClient.conversations.retrieve(input.conversationId ?? input.id),
  };
}

function replyBody(input: any, messageType: "comment" | "note") {
  return {
    id: input.conversationId ?? input.ticketId ?? input.id,
    type: "admin",
    admin_id: input.adminId,
    message_type: input.messageType ?? messageType,
    body: input.body ?? input.text ?? input.comment,
    ...(input.bodyObject ?? {}),
  };
}
