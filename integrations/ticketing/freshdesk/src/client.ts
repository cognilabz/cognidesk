import { Buffer } from "node:buffer";
import FreshdeskSdk, { type FreshdeskSdkClient, type FreshdeskSdkJsonObject } from "@freshworks/freshdesk";
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

export function createFreshworksFreshdeskProviderClient(options: FreshdeskTicketingClientOptions): FreshdeskTicketingProviderClient {
  if (!options.apiKey) {
    throw new Error("Freshdesk SDK adapter requires apiKey.");
  }
  const sdkClient = new FreshdeskSdk({
    domain: freshdeskSdkDomain(options),
    api_key: options.apiKey,
  });
  const restFallback = createFreshdeskRestProviderClient(options);

  return createFreshworksFreshdeskSdkProviderClient(sdkClient, restFallback);
}

export function createFreshworksFreshdeskSdkProviderClient(
  sdkClient: FreshdeskSdkClient,
  restFallback: FreshdeskTicketingProviderClient,
): FreshdeskTicketingProviderClient {
  return {
    createTicket: (input) => freshdeskSdkJson(sdkClient.tickets.createTicket(freshdeskSdkPayload(input))),
    getTicket: (ticketId) => freshdeskSdkJson(sdkClient.tickets.getTicket(ticketId)),
    updateTicket: (ticketId, patch) => freshdeskSdkJson(sdkClient.tickets.updateTicket(ticketId, freshdeskSdkPayload(patch))),
    searchTickets: (query) => {
      const sdkQuery = freshdeskSdkSearchQuery(query);
      if (sdkQuery) return freshdeskSdkJson(sdkClient.tickets.searchTicket(sdkQuery));
      return restFallback.searchTickets(query);
    },
    createReply: (ticketId, body) => freshdeskSdkJson(sdkClient.tickets.replyTicket(ticketId, freshdeskSdkPayload(body))),
    createNote: (ticketId, body) => freshdeskSdkJson(sdkClient.tickets.addNotes(ticketId, freshdeskSdkPayload(body))),
    getContact: (contactId) => freshdeskSdkJson(sdkClient.contacts.getContact(contactId)),
    searchContacts: (query) => freshdeskSdkJson(sdkClient.contacts.searchContacts(freshdeskSdkContactSearchOptions(query))),
    getAgent: (agentId) => restFallback.getAgent(agentId),
    getGroup: (groupId) => restFallback.getGroup(groupId),
    readiness: () => restFallback.readiness(),
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
    if (shouldUseFreshworksFreshdeskSdk(options)) {
      return createFreshworksFreshdeskProviderClient(options);
    }
    return createFreshdeskRestProviderClient(options);
  }
  return createFreshdeskUnavailableClient();
}

function shouldUseFreshworksFreshdeskSdk(options: FreshdeskTicketingClientOptions): boolean {
  return Boolean(
    options.domain
      && options.apiKey
      && !options.apiBaseUrl
      && !options.fetch
      && !options.signal
      && options.timeoutMs === undefined
      && options.retry === undefined
      && options.headers === undefined,
  );
}

function freshdeskSdkDomain(options: Pick<FreshdeskTicketingClientOptions, "domain">): string {
  const domain = options.domain?.trim();
  if (!domain) throw new Error("Freshdesk SDK adapter requires domain.");
  const url = new URL(/^https?:\/\//i.test(domain) ? domain : `https://${domain}`);
  return url.hostname.includes(".") ? url.hostname : `${url.hostname}.freshdesk.com`;
}

function freshdeskSearchQuery(query: string | FreshdeskJsonObject): FreshdeskQueryInput {
  if (typeof query === "string") return { query };
  return query;
}

function freshdeskSdkSearchQuery(query: string | FreshdeskJsonObject): string | undefined {
  if (typeof query === "string") return query;
  const entries = Object.entries(query).filter(([, value]) => value !== undefined);
  const [entry] = entries;
  return entries.length === 1 && entry?.[0] === "query" && typeof entry[1] === "string"
    ? entry[1]
    : undefined;
}

function freshdeskSdkContactSearchOptions(query: string | FreshdeskJsonObject): FreshdeskSdkJsonObject {
  if (typeof query === "string") return { query };
  return freshdeskSdkPayload(query);
}

function freshdeskSdkPayload(value: FreshdeskJsonObject): FreshdeskSdkJsonObject {
  return value as FreshdeskSdkJsonObject;
}

async function freshdeskSdkJson(value: Promise<unknown>): Promise<FreshdeskJsonObject> {
  return asFreshdeskJsonObject(await value);
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
