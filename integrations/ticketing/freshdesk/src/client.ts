import { Buffer } from "node:buffer";
import {
  providerJsonRequest,
  type ProviderHttpMethod,
  type ProviderJsonRequestInput,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import type {
  FreshdeskJsonObject,
  FreshdeskJsonValue,
  FreshdeskTicketingProviderClient,
  FreshdeskTicketingClient,
  FreshdeskTicketingClientOptions,
} from "./contracts.js";

export function createFreshdeskTicketingClient(options: FreshdeskTicketingClientOptions = {}): FreshdeskTicketingClient {
  const providerClient = options.providerClient ?? createDefaultFreshdeskProviderClient(options);

  return {
    providerClient,
    createTicket: (input) => providerClient.createTicket(input),
    getTicket: (ticketId) => providerClient.getTicket(ticketId),
    updateTicket: (ticketId, patch) => providerClient.updateTicket(ticketId, patch),
    searchTickets: (query) => providerClient.searchTickets(query),
    createReply: (ticketId, body) => providerClient.createReply(ticketId, body),
    createNote: (ticketId, body) => providerClient.createNote(ticketId, body),
    getContact: (contactId) => providerClient.getContact(contactId),
    searchContacts: (query) => providerClient.searchContacts(query),
    getAgent: (agentId) => providerClient.getAgent(agentId),
    getGroup: (groupId) => providerClient.getGroup(groupId),
    readiness: () => providerClient.readiness(),
  };
}

export function createFreshdeskRestProviderClient(options: FreshdeskTicketingClientOptions): FreshdeskTicketingProviderClient {
  const baseUrl = freshdeskApiBaseUrl(options);
  if (!options.apiKey) {
    throw new Error("Freshdesk REST adapter requires apiKey.");
  }

  const authorizationHeader = `Basic ${Buffer.from(`${options.apiKey}:X`).toString("base64")}`;
  const request = (method: ProviderHttpMethod, path: string, input?: {
    body?: FreshdeskJsonObject;
    pathParams?: ProviderJsonRequestInput["pathParams"];
    query?: FreshdeskQueryInput;
  }) => providerJsonRequest<unknown>({
    baseUrl,
    method,
    path,
    authorizationHeader,
    pathParams: input?.pathParams,
    query: freshdeskProviderQuery(input?.query),
    ...(options.headers ? { headers: options.headers } : {}),
    ...(input?.body !== undefined ? { body: input.body } : {}),
    ...(options.fetch ? { fetch: options.fetch } : {}),
    ...(options.signal ? { signal: options.signal } : {}),
    ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
    ...(options.retry !== undefined ? { retry: options.retry } : {}),
    providerName: "Freshdesk",
  }).then(asFreshdeskJsonObject);

  return {
    createTicket: (input) => request("POST", "tickets", { body: input }),
    getTicket: (ticketId) => request("GET", "tickets/{ticketId}", { pathParams: { ticketId } }),
    updateTicket: (ticketId, patch) => request("PUT", "tickets/{ticketId}", { pathParams: { ticketId }, body: patch }),
    searchTickets: (query) => request("GET", "search/tickets", { query: freshdeskSearchQuery(query) }),
    createReply: (ticketId, body) => request("POST", "tickets/{ticketId}/reply", { pathParams: { ticketId }, body }),
    createNote: (ticketId, body) => request("POST", "tickets/{ticketId}/notes", { pathParams: { ticketId }, body }),
    getContact: (contactId) => request("GET", "contacts/{contactId}", { pathParams: { contactId } }),
    searchContacts: (query) => request("GET", "search/contacts", { query: freshdeskSearchQuery(query) }),
    getAgent: (agentId) => request("GET", "agents/{agentId}", { pathParams: { agentId } }),
    getGroup: (groupId) => request("GET", "groups/{groupId}", { pathParams: { groupId } }),
    readiness: () => request("GET", "agents/me"),
  };
}

export function createFreshdeskUnavailableClient(message = "Freshdesk REST adapter requires domain and apiKey, or an injected FreshdeskTicketingProviderClient."): FreshdeskTicketingProviderClient {
  return {
    createTicket: () => unavailable("createTicket"),
    getTicket: () => unavailable("getTicket"),
    updateTicket: () => unavailable("updateTicket"),
    searchTickets: () => unavailable("searchTickets"),
    createReply: () => unavailable("createReply"),
    createNote: () => unavailable("createNote"),
    getContact: () => unavailable("getContact"),
    searchContacts: () => unavailable("searchContacts"),
    getAgent: () => unavailable("getAgent"),
    getGroup: () => unavailable("getGroup"),
    readiness: () => unavailable("readiness"),
  };

  function unavailable<T>(operation: string): Promise<T> {
    return Promise.reject(
      new Error(`${message} Cannot call ${operation}.`),
    );
  }
}

export function freshdeskApiBaseUrl(options: Pick<FreshdeskTicketingClientOptions, "domain" | "apiBaseUrl">): string {
  if (options.apiBaseUrl) {
    return options.apiBaseUrl.replace(/\/+$/, "");
  }

  const domain = options.domain?.trim();
  if (!domain) {
    throw new Error("Freshdesk REST adapter requires domain.");
  }

  const url = new URL(/^https?:\/\//i.test(domain) ? domain : `https://${domain}`);
  const host = url.hostname.includes(".") ? url.hostname : `${url.hostname}.freshdesk.com`;
  return `https://${host}/api/v2`;
}

type FreshdeskQueryInput = Record<string, FreshdeskJsonValue | object | undefined>;

function createDefaultFreshdeskProviderClient(options: FreshdeskTicketingClientOptions): FreshdeskTicketingProviderClient {
  if ((options.domain || options.apiBaseUrl) && options.apiKey) {
    return createFreshdeskRestProviderClient(options);
  }
  return createFreshdeskUnavailableClient();
}

function freshdeskSearchQuery(query: string | FreshdeskJsonObject): FreshdeskQueryInput {
  if (typeof query === "string") return { query };
  return query;
}

function freshdeskProviderQuery(query: FreshdeskQueryInput | undefined): Record<string, ProviderQueryValue> | undefined {
  if (!query) return undefined;
  const output: Record<string, ProviderQueryValue> = {};
  for (const [key, value] of Object.entries(query)) {
    output[key] = freshdeskProviderQueryValue(value);
  }
  return output;
}

function freshdeskProviderQueryValue(value: FreshdeskJsonValue | object | undefined): ProviderQueryValue {
  if (value === undefined || value === null) return value;
  if (Array.isArray(value)) {
    return value.flatMap((item) => {
      if (item === null) return [];
      if (typeof item === "object" && item !== null) return JSON.stringify(item);
      return item;
    });
  }
  if (typeof value === "object") return JSON.stringify(value);
  return value;
}

function asFreshdeskJsonObject(value: unknown): FreshdeskJsonObject {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as FreshdeskJsonObject;
  }
  return { data: value as FreshdeskJsonValue };
}
