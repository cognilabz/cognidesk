import FreshdeskSdk, { type FreshdeskSdkClient, type FreshdeskSdkJsonObject } from "@freshworks/freshdesk";
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

export function createFreshworksFreshdeskProviderClient(options: FreshdeskTicketingClientOptions): FreshdeskTicketingProviderClient {
  if (!options.apiKey) {
    throw new Error("Freshdesk SDK adapter requires apiKey.");
  }
  const sdkClient = new FreshdeskSdk({
    domain: freshdeskSdkDomain(options),
    api_key: options.apiKey,
  });

  return createFreshworksFreshdeskSdkProviderClient(sdkClient);
}

export function createFreshworksFreshdeskSdkProviderClient(
  sdkClient: FreshdeskSdkClient,
): FreshdeskTicketingProviderClient {
  return {
    createTicket: (input) => freshdeskSdkJson(sdkClient.tickets.createTicket(freshdeskSdkPayload(input))),
    getTicket: (ticketId) => freshdeskSdkJson(sdkClient.tickets.getTicket(ticketId)),
    updateTicket: (ticketId, patch) => freshdeskSdkJson(sdkClient.tickets.updateTicket(ticketId, freshdeskSdkPayload(patch))),
    searchTickets: (query) => {
      const sdkQuery = freshdeskSdkSearchQuery(query);
      if (sdkQuery) return freshdeskSdkJson(sdkClient.tickets.searchTicket(sdkQuery));
      return freshdeskUnsupportedSdkOperation("searchTickets", "the official @freshworks/freshdesk SDK searchTicket method accepts a string query only; inject FreshdeskTicketingProviderClient for structured search.");
    },
    createReply: (ticketId, body) => freshdeskSdkJson(sdkClient.tickets.replyTicket(ticketId, freshdeskSdkPayload(body))),
    createNote: (ticketId, body) => freshdeskSdkJson(sdkClient.tickets.addNote(ticketId, freshdeskSdkPayload(body))),
    getContact: (contactId) => freshdeskSdkJson(sdkClient.contacts.getContact(contactId)),
    searchContacts: (query) => freshdeskSdkJson(sdkClient.contacts.searchContacts(freshdeskSdkContactSearchOptions(query))),
    getAgent: () => freshdeskUnsupportedSdkOperation("getAgent", "the official @freshworks/freshdesk SDK does not expose agents APIs; inject FreshdeskTicketingProviderClient for this operation."),
    getGroup: () => freshdeskUnsupportedSdkOperation("getGroup", "the official @freshworks/freshdesk SDK does not expose groups APIs; inject FreshdeskTicketingProviderClient for this operation."),
    readiness: () => freshdeskUnsupportedSdkOperation("readiness", "the official @freshworks/freshdesk SDK does not expose agents/me readiness; inject FreshdeskTicketingProviderClient for this operation."),
  };
}

export function createFreshdeskUnavailableClient(message = "Freshdesk SDK adapter requires domain and apiKey, or an injected FreshdeskTicketingProviderClient."): FreshdeskTicketingProviderClient {
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

function createDefaultFreshdeskProviderClient(options: FreshdeskTicketingClientOptions): FreshdeskTicketingProviderClient {
  if (options.domain && options.apiKey) {
    return createFreshworksFreshdeskProviderClient(options);
  }
  return createFreshdeskUnavailableClient();
}

function freshdeskSdkDomain(options: Pick<FreshdeskTicketingClientOptions, "domain">): string {
  const domain = options.domain?.trim();
  if (!domain) throw new Error("Freshdesk SDK adapter requires domain.");
  const url = new URL(/^https?:\/\//i.test(domain) ? domain : `https://${domain}`);
  const hostname = url.hostname.toLowerCase();
  const normalized = hostname.includes(".") ? hostname : `${hostname}.freshdesk.com`;
  if (!normalized.endsWith(".freshdesk.com")) {
    throw new Error("Freshdesk SDK adapter requires a trusted Freshdesk domain.");
  }
  return normalized;
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

function freshdeskUnsupportedSdkOperation(operation: string, reason: string): Promise<never> {
  return Promise.reject(
    new Error(`Freshdesk ${operation} is not available through the built-in official SDK adapter: ${reason}`),
  );
}

function asFreshdeskJsonObject(value: unknown): FreshdeskJsonObject {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as FreshdeskJsonObject;
  }
  return { data: value as FreshdeskJsonValue };
}
