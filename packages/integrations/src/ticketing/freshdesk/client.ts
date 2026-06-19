import type {
  FreshdeskAgentResource,
  FreshdeskContactResource,
  FreshdeskConversationResource,
  FreshdeskCreateContactInput,
  FreshdeskCreateNoteInput,
  FreshdeskCreateReplyInput,
  FreshdeskCreateTicketInput,
  FreshdeskGroupResource,
  FreshdeskHandoffResult,
  FreshdeskProviderExtensionFields,
  FreshdeskTicketingClient,
  FreshdeskTicketingClientOptions,
  FreshdeskTicketResource,
  FreshdeskUpdateContactInput,
  FreshdeskUpdateTicketInput,
} from "./contracts.js";
import {
  applyInclude,
  applyListQuery,
  applyListTicketsQuery,
  freshdeskRequest,
  freshdeskUrl,
  normalizeDomain,
  searchUrl,
  stripUndefined,
} from "./request.js";

export function createFreshdeskTicketingClient(options: FreshdeskTicketingClientOptions): FreshdeskTicketingClient {
  const baseUrl = normalizeDomain(options.domain);
  const apiBasePath = options.apiBasePath ?? "/api/v2";
  const fetchImpl = options.fetch ?? fetch;

  return {
    async createTicket(input) {
      return freshdeskRequest<FreshdeskTicketResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, "/tickets"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: createTicketBody(input),
      });
    },
    async getTicket(ticketId, input = {}) {
      const url = freshdeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}`);
      applyInclude(url, input.include);
      return freshdeskRequest<FreshdeskTicketResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateTicket(ticketId, input) {
      return freshdeskRequest<FreshdeskTicketResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}`),
        method: "PUT",
        options,
        fetch: fetchImpl,
        body: updateTicketBody(input),
      });
    },
    async listTickets(input = {}) {
      const url = freshdeskUrl(baseUrl, apiBasePath, "/tickets");
      applyListTicketsQuery(url, input);
      return freshdeskRequest<FreshdeskTicketResource[]>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async searchTickets(input = {}) {
      const response = await freshdeskRequest<FreshdeskSearchResponse<FreshdeskTicketResource>>({
        url: searchUrl(baseUrl, apiBasePath, "tickets", input),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return {
        ...(response.total !== undefined ? { total: response.total } : {}),
        results: response.results ?? [],
      };
    },
    async createContact(input) {
      return freshdeskRequest<FreshdeskContactResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, "/contacts"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: contactBody(input),
      });
    },
    async getContact(contactId) {
      return freshdeskRequest<FreshdeskContactResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/contacts/${encodeURIComponent(String(contactId))}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateContact(contactId, input) {
      return freshdeskRequest<FreshdeskContactResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/contacts/${encodeURIComponent(String(contactId))}`),
        method: "PUT",
        options,
        fetch: fetchImpl,
        body: contactBody(input),
      });
    },
    async searchContacts(input = {}) {
      const response = await freshdeskRequest<FreshdeskSearchResponse<FreshdeskContactResource>>({
        url: searchUrl(baseUrl, apiBasePath, "contacts", input),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return {
        ...(response.total !== undefined ? { total: response.total } : {}),
        results: response.results ?? [],
      };
    },
    async listConversations(ticketId) {
      return freshdeskRequest<FreshdeskConversationResource[]>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}/conversations`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async createReply(ticketId, input) {
      return freshdeskRequest<FreshdeskConversationResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}/reply`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: replyBody(input),
      });
    },
    async createNote(ticketId, input) {
      return freshdeskRequest<FreshdeskConversationResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}/notes`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: noteBody(input),
      });
    },
    async attachHandoff(ticketId, input) {
      const result: FreshdeskHandoffResult = {};
      const patchInput: FreshdeskUpdateTicketInput = {
        ...(input.status !== undefined ? { status: input.status } : {}),
        ...(input.responderId !== undefined ? { responderId: input.responderId } : {}),
        ...(input.groupId !== undefined ? { groupId: input.groupId } : {}),
        ...(input.tags !== undefined ? { tags: input.tags } : {}),
        ...(input.customFields !== undefined ? { customFields: input.customFields } : {}),
        ...(input.additionalFields !== undefined ? { additionalFields: input.additionalFields } : {}),
      };
      const patch = updateTicketBody(patchInput);
      if (Object.keys(patch).length > 0) {
        result.ticket = await this.updateTicket(ticketId, { additionalFields: patch });
      }
      if (input.note) {
        result.note = await this.createNote(ticketId, { body: input.note, private: true });
      }
      if (input.publicReply) {
        result.reply = await this.createReply(ticketId, { body: input.publicReply });
      }
      return result;
    },
    async getCurrentAgent() {
      return freshdeskRequest<FreshdeskAgentResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, "/agents/me"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getAgent(agentId) {
      return freshdeskRequest<FreshdeskAgentResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/agents/${encodeURIComponent(String(agentId))}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listAgents(input = {}) {
      const url = freshdeskUrl(baseUrl, apiBasePath, "/agents");
      applyListQuery(url, input);
      return freshdeskRequest<FreshdeskAgentResource[]>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getGroup(groupId) {
      return freshdeskRequest<FreshdeskGroupResource>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/groups/${encodeURIComponent(String(groupId))}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listGroups(input = {}) {
      const url = freshdeskUrl(baseUrl, apiBasePath, "/groups");
      applyListQuery(url, input);
      return freshdeskRequest<FreshdeskGroupResource[]>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listAdminGroupAgents(groupId) {
      return freshdeskRequest<FreshdeskAgentResource[]>({
        url: freshdeskUrl(baseUrl, apiBasePath, `/admin/groups/${encodeURIComponent(String(groupId))}/agents`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

function createTicketBody(input: FreshdeskCreateTicketInput) {
  return stripUndefined({
    subject: input.subject,
    description: input.description,
    email: input.email,
    requester_id: input.requesterId,
    status: input.status,
    priority: input.priority,
    source: input.source,
    type: input.type,
    responder_id: input.responderId,
    group_id: input.groupId,
    product_id: input.productId,
    company_id: input.companyId,
    tags: input.tags,
    custom_fields: input.customFields,
    ...(input.additionalFields ?? {}),
  });
}

function updateTicketBody(input: FreshdeskUpdateTicketInput): FreshdeskProviderExtensionFields {
  return stripUndefined({
    subject: input.subject,
    description: input.description,
    status: input.status,
    priority: input.priority,
    responder_id: input.responderId,
    group_id: input.groupId,
    product_id: input.productId,
    type: input.type,
    tags: input.tags,
    custom_fields: input.customFields,
    ...(input.additionalFields ?? {}),
  });
}

function contactBody(input: FreshdeskCreateContactInput | FreshdeskUpdateContactInput) {
  return stripUndefined({
    name: input.name,
    email: input.email,
    phone: input.phone,
    mobile: input.mobile,
    company_id: input.companyId,
    tags: input.tags,
    custom_fields: input.customFields,
    ...(input.additionalFields ?? {}),
  });
}

function replyBody(input: FreshdeskCreateReplyInput) {
  return stripUndefined({
    body: input.body,
    user_id: input.userId,
    cc_emails: input.ccEmails,
    bcc_emails: input.bccEmails,
    ...(input.additionalFields ?? {}),
  });
}

function noteBody(input: FreshdeskCreateNoteInput) {
  return stripUndefined({
    body: input.body,
    private: input.private,
    user_id: input.userId,
    notify_emails: input.notifyEmails,
    ...(input.additionalFields ?? {}),
  });
}

interface FreshdeskSearchResponse<T> {
  total?: number;
  results?: T[];
}
