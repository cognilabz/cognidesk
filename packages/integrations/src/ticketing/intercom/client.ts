import {
  createIntercomFullApiGeneratedClient,
  type IntercomGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  INTERCOM_FULL_API_OPERATION_BY_ID,
  type IntercomFullApiOperationId,
} from "./full-api-operations.generated.js";
import {
  createConversationBody,
  createTicketBody,
  manageConversationBody,
  replyConversationBody,
  searchBody,
  updateConversationBody,
  updateTicketBody,
} from "./bodies.js";
import type {
  IntercomAdminIdentity,
  IntercomClientRequestInput,
  IntercomConversationResource,
  IntercomHttpMethod,
  IntercomMessageResource,
  IntercomOperationRequestInput,
  IntercomResource,
  IntercomSearchConversationsResponse,
  IntercomSearchTicketsResponse,
  IntercomTicketingClient,
  IntercomTicketingClientOptions,
  IntercomTicketResource,
} from "./contracts.js";
import {
  intercomApiUrl,
  intercomRequest,
  operationUrl,
} from "./request.js";

export function createIntercomTicketingClient(options: IntercomTicketingClientOptions): IntercomTicketingClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.intercom.io").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = IntercomResource>(
    method: IntercomHttpMethod,
    path: string,
    input: IntercomClientRequestInput = {},
  ) => intercomRequest<T>({
    url: operationUrl(apiBaseUrl, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    ...(input.body ? { body: input.body } : {}),
    ...(input.rawBody ? { rawBody: input.rawBody } : {}),
    ...(input.contentType ? { contentType: input.contentType } : {}),
  });
  const requestOperation = (
    operationId: IntercomFullApiOperationId | string,
    input: IntercomOperationRequestInput = {},
  ) => {
    const operation = INTERCOM_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Intercom OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createIntercomFullApiGeneratedClient(requestOperation as IntercomGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as IntercomGeneratedOperationCaller,
    async createConversation(input) {
      return intercomRequest<IntercomMessageResource>({
        url: intercomApiUrl(apiBaseUrl, "/conversations"),
        method: "POST",
        body: createConversationBody(input),
        options,
        fetch: fetchImpl,
      });
    },
    async getConversation(conversationId, input = {}) {
      const url = intercomApiUrl(apiBaseUrl, `/conversations/${encodeURIComponent(String(conversationId))}`);
      if (input.displayAs) url.searchParams.set("display_as", input.displayAs);
      if (input.includeTranslations !== undefined) {
        url.searchParams.set("include_translations", String(input.includeTranslations));
      }
      return intercomRequest<IntercomConversationResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateConversation(conversationId, input) {
      const url = intercomApiUrl(apiBaseUrl, `/conversations/${encodeURIComponent(String(conversationId))}`);
      if (input.displayAs) url.searchParams.set("display_as", input.displayAs);
      return intercomRequest<IntercomConversationResource>({
        url,
        method: "PUT",
        body: updateConversationBody(input),
        options,
        fetch: fetchImpl,
      });
    },
    async replyConversation(conversationId, input) {
      return intercomRequest<IntercomConversationResource>({
        url: intercomApiUrl(apiBaseUrl, `/conversations/${encodeURIComponent(String(conversationId))}/reply`),
        method: "POST",
        body: replyConversationBody(input),
        options,
        fetch: fetchImpl,
      });
    },
    async manageConversation(conversationId, input) {
      return intercomRequest<IntercomConversationResource>({
        url: intercomApiUrl(apiBaseUrl, `/conversations/${encodeURIComponent(String(conversationId))}/parts`),
        method: "POST",
        body: manageConversationBody(input),
        options,
        fetch: fetchImpl,
      });
    },
    async searchConversations(input) {
      const response = await intercomRequest<IntercomSearchConversationsResponse>({
        url: intercomApiUrl(apiBaseUrl, "/conversations/search"),
        method: "POST",
        body: searchBody(input),
        options,
        fetch: fetchImpl,
      });
      return {
        ...(response.type ? { type: response.type } : {}),
        ...(response.pages ? { pages: response.pages } : {}),
        conversations: response.conversations ?? [],
        ...(response.total_count !== undefined ? { totalCount: response.total_count } : {}),
      };
    },
    async createTicket(input) {
      return intercomRequest<IntercomTicketResource>({
        url: intercomApiUrl(apiBaseUrl, "/tickets"),
        method: "POST",
        body: createTicketBody(input),
        options,
        fetch: fetchImpl,
      });
    },
    async getTicket(ticketId) {
      return intercomRequest<IntercomTicketResource>({
        url: intercomApiUrl(apiBaseUrl, `/tickets/${encodeURIComponent(String(ticketId))}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateTicket(ticketId, input) {
      return intercomRequest<IntercomTicketResource>({
        url: intercomApiUrl(apiBaseUrl, `/tickets/${encodeURIComponent(String(ticketId))}`),
        method: "PUT",
        body: updateTicketBody(input),
        options,
        fetch: fetchImpl,
      });
    },
    async searchTickets(input) {
      const response = await intercomRequest<IntercomSearchTicketsResponse>({
        url: intercomApiUrl(apiBaseUrl, "/tickets/search"),
        method: "POST",
        body: searchBody(input),
        options,
        fetch: fetchImpl,
      });
      return {
        ...(response.type ? { type: response.type } : {}),
        ...(response.pages ? { pages: response.pages } : {}),
        tickets: response.tickets ?? [],
        ...(response.total_count !== undefined ? { totalCount: response.total_count } : {}),
      };
    },
    async identifyAdmin() {
      return intercomRequest<IntercomAdminIdentity>({
        url: intercomApiUrl(apiBaseUrl, "/me"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}
