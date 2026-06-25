import type { defineIntegration } from "@cognidesk/integration-kit";

export type FreshdeskJsonPrimitive = string | number | boolean | null;
export type FreshdeskJsonValue =
  | FreshdeskJsonPrimitive
  | FreshdeskJsonObject
  | FreshdeskJsonValue[];
export interface FreshdeskJsonObject {
  [key: string]: FreshdeskJsonValue | object | undefined;
}

export type FreshdeskProviderPayload = FreshdeskJsonObject | object;

export interface FreshdeskJsonRetryOptions {
  attempts?: number;
  statusCodes?: readonly number[];
  baseDelayMs?: number;
  maxDelayMs?: number;
}

export interface FreshdeskTicketingProviderClient {
  createTicket(input: FreshdeskJsonObject): Promise<FreshdeskJsonObject>;
  getTicket(ticketId: string | number): Promise<FreshdeskJsonObject>;
  updateTicket(ticketId: string | number, patch: FreshdeskJsonObject): Promise<FreshdeskJsonObject>;
  searchTickets(query: string | FreshdeskJsonObject): Promise<FreshdeskJsonObject>;
  createReply(ticketId: string | number, body: FreshdeskJsonObject): Promise<FreshdeskJsonObject>;
  createNote(ticketId: string | number, body: FreshdeskJsonObject): Promise<FreshdeskJsonObject>;
  getContact(contactId: string | number): Promise<FreshdeskJsonObject>;
  searchContacts(query: string | FreshdeskJsonObject): Promise<FreshdeskJsonObject>;
  getAgent(agentId: string | number): Promise<FreshdeskJsonObject>;
  getGroup(groupId: string | number): Promise<FreshdeskJsonObject>;
  readiness(): Promise<FreshdeskJsonObject>;
}

export interface FreshdeskTicketingClientOptions {
  providerClient?: FreshdeskTicketingProviderClient;
  domain?: string;
  apiKey?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | FreshdeskJsonRetryOptions;
  headers?: Record<string, string>;
}

export interface FreshdeskTicketingClient extends FreshdeskTicketingProviderClient {
  providerClient: FreshdeskTicketingProviderClient;
}

export type FreshdeskTicketingIntegration = ReturnType<typeof defineIntegration>;

export type JsonPrimitive = FreshdeskJsonPrimitive;
export type JsonValue = FreshdeskJsonValue;
export type JsonObject = FreshdeskJsonObject;
