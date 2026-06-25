import { IntercomClient } from "intercom-client";
import type { BaseClientOptions, Intercom } from "intercom-client";
import { defineIntegration, type IntegrationOperationHandlers } from "@cognidesk/integration-kit";
import { intercomTicketingProviderManifest } from "./manifest.js";

export interface IntercomTicketingClientOptions {
  accessToken?: string;
  rawClient?: IntercomTicketingRawClient;
  sdkOptions?: BaseClientOptions;
}

export interface IntercomTicketingRawClient {
  tickets: {
    create(request: Intercom.CreateTicketRequest): unknown;
    get(request: Intercom.FindTicketRequest): unknown;
    update(request: Intercom.UpdateTicketRequest): unknown;
    search(request: Intercom.SearchRequest): unknown;
    reply(request: Intercom.ReplyToTicketRequest): unknown;
  };
  conversations: {
    find(request: Intercom.FindConversationRequest): unknown;
  };
}

export interface IntercomTicketingClient {
  rawClient: IntercomTicketingRawClient;
  getRawClient(): IntercomTicketingRawClient;
  integration: ReturnType<typeof defineIntegration>;
}

export function createIntercomTicketingClient(options: IntercomTicketingClientOptions = {}): IntercomTicketingClient {
  const rawClient = options.rawClient ?? createIntercomSdkRawClient(options);
  const operations = createIntercomTicketingOperationHandlers(rawClient);
  return {
    rawClient,
    getRawClient: () => rawClient,
    integration: defineIntegration({
      manifest: intercomTicketingProviderManifest,
      operations,
    }),
  };
}

export function createIntercomTicketingOperationHandlers(rawClient: IntercomTicketingRawClient): IntegrationOperationHandlers {
  return {
    "ticket.read": (input: unknown) => rawClient.tickets.get(ticketReadRequest(input)),
    "ticket.comment.create": (input: unknown) => rawClient.tickets.reply(ticketReplyRequest(input, "comment")),
    "ticket.create": (input: unknown) => rawClient.tickets.create(sdkBodyOrInput<Intercom.CreateTicketRequest>(input)),
    "ticket.update": (input: unknown) => rawClient.tickets.update(ticketUpdateRequest(input)),
    "ticket.search": (input: unknown) => rawClient.tickets.search(sdkBodyOrInput<Intercom.SearchRequest>(input)),
    "ticket.internalNote.create": (input: unknown) => rawClient.tickets.reply(ticketReplyRequest(input, "note")),
    "intercom.conversation.read": (input: unknown) => rawClient.conversations.find(conversationReadRequest(input)),
  };
}

function createIntercomSdkRawClient(options: IntercomTicketingClientOptions): IntercomTicketingRawClient {
  return new IntercomClient({
    ...(options.sdkOptions ?? {}),
    ...(options.accessToken ? { token: options.accessToken } : {}),
  });
}

function ticketReadRequest(input: unknown): Intercom.FindTicketRequest {
  return { ticket_id: requiredString(input, ["ticket_id", "ticketId", "id"], "ticket id") };
}

function ticketUpdateRequest(input: unknown): Intercom.UpdateTicketRequest {
  const record = asRecord(input);
  const ticketId = requiredString(input, ["ticket_id", "ticketId", "id"], "ticket id");
  const patch = asRecord(record?.patch) ?? asRecord(record?.body);

  if (patch) {
    return { ticket_id: ticketId, ...patch } as Intercom.UpdateTicketRequest;
  }

  if (!record) {
    return { ticket_id: ticketId };
  }

  const { ticket_id: _ticket_id, ticketId: _ticketId, id: _id, patch: _patch, body: _body, ...rest } = record;
  return { ticket_id: ticketId, ...rest } as Intercom.UpdateTicketRequest;
}

function ticketReplyRequest(input: unknown, messageType: "comment" | "note"): Intercom.ReplyToTicketRequest {
  const record = asRecord(input);
  const bodyObject = asRecord(record?.bodyObject) ?? asRecord(record?.body);
  const bodyText = typeof record?.body === "string"
    ? record.body
    : stringField(record, ["text", "comment", "note"]);

  return {
    ticket_id: requiredString(input, ["ticket_id", "ticketId", "id"], "ticket id"),
    body: {
      message_type: stringField(record, ["message_type", "messageType"]) ?? messageType,
      type: stringField(record, ["type"]) ?? "admin",
      ...(bodyText ? { body: bodyText } : {}),
      ...(stringField(record, ["admin_id", "adminId"]) ? { admin_id: stringField(record, ["admin_id", "adminId"]) } : {}),
      ...(bodyObject ?? {}),
    },
  } as Intercom.ReplyToTicketRequest;
}

function conversationReadRequest(input: unknown): Intercom.FindConversationRequest {
  const record = asRecord(input);
  const conversationId = requiredString(input, ["conversation_id", "conversationId", "id"], "conversation id");

  if (!record) {
    return { conversation_id: conversationId };
  }

  const { conversation_id: _conversation_id, conversationId: _conversationId, id: _id, ...rest } = record;
  return {
    conversation_id: conversationId,
    ...rest,
  } as Intercom.FindConversationRequest;
}

function sdkBodyOrInput<T>(input: unknown): T {
  const record = asRecord(input);
  return (asRecord(record?.body) ?? input) as T;
}

function requiredString(input: unknown, keys: readonly string[], label: string): string {
  if (typeof input === "string" || typeof input === "number") {
    return String(input);
  }

  const record = asRecord(input);
  for (const key of keys) {
    const value = record?.[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }

  throw new Error(`Intercom ${label} is required.`);
}

function stringField(record: Record<string, unknown> | undefined, keys: readonly string[]): string | undefined {
  for (const key of keys) {
    const value = record?.[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }
  return undefined;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : undefined;
}
