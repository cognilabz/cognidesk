import {
  createZendeskFullApiGeneratedClient,
  type ZendeskGeneratedOperationCaller,
} from "../full-api-client.generated.js";
import {
  ZENDESK_FULL_API_OPERATION_BY_ID,
  type ZendeskFullApiOperationId,
} from "../full-api-operations.generated.js";
import type {
  ZendeskClientRequestInput,
  ZendeskCurrentUserResource,
  ZendeskHttpMethod,
  ZendeskJsonObject,
  ZendeskOperationRequestInput,
  ZendeskResource,
  ZendeskTicketingClient,
  ZendeskTicketingClientOptions,
  ZendeskTicketResource,
  ZendeskUploadResource,
} from "../contracts.js";
import { applySearchQuery, createTicketBody, updateTicketBody } from "./ticket-mappers.js";
import { normalizeInstanceUrl, zendeskOperationUrl, zendeskRequest, zendeskUrl } from "./request.js";

export function createZendeskTicketingClient(options: ZendeskTicketingClientOptions): ZendeskTicketingClient {
  const baseUrl = normalizeInstanceUrl(options.instanceUrl);
  const apiBasePath = options.apiBasePath ?? "/api/v2";
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = ZendeskResource>(
    method: ZendeskHttpMethod,
    path: string,
    input: ZendeskClientRequestInput = {},
  ) => zendeskRequest<T>({
    url: zendeskOperationUrl(baseUrl, apiBasePath, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    rawBody: input.rawBody,
    contentType: input.contentType,
  });
  const requestOperation = async (
    operationId: ZendeskFullApiOperationId | string,
    input: ZendeskOperationRequestInput = {},
  ) => {
    const operation = ZENDESK_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Zendesk OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createZendeskFullApiGeneratedClient(requestOperation as ZendeskGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as ZendeskGeneratedOperationCaller,
    async createTicket(input) {
      const body = { ticket: createTicketBody(input) };
      const response = await zendeskRequest<{ ticket?: ZendeskTicketResource }>({
        url: zendeskUrl(baseUrl, apiBasePath, "/tickets.json"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body,
      });
      return response.ticket ?? {};
    },
    async getTicket(ticketId) {
      const response = await zendeskRequest<{ ticket?: ZendeskTicketResource }>({
        url: zendeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}.json`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.ticket ?? {};
    },
    async updateTicket(ticketId, input) {
      const body = { ticket: updateTicketBody(input) };
      const response = await zendeskRequest<{ ticket?: ZendeskTicketResource }>({
        url: zendeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}.json`),
        method: "PUT",
        options,
        fetch: fetchImpl,
        body,
      });
      return response.ticket ?? {};
    },
    async searchTickets(input = {}) {
      const url = zendeskUrl(baseUrl, apiBasePath, "/search.json");
      applySearchQuery(url, input);
      const response = await zendeskRequest<{
        results?: ZendeskTicketResource[];
        count?: number;
        next_page?: string | null;
        previous_page?: string | null;
      }>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return {
        tickets: response.results ?? [],
        ...(response.count !== undefined ? { count: response.count } : {}),
        ...(response.next_page !== undefined ? { nextPage: response.next_page } : {}),
        ...(response.previous_page !== undefined ? { previousPage: response.previous_page } : {}),
      };
    },
    async listTicketComments(ticketId) {
      const response = await zendeskRequest<{
        comments?: Array<ZendeskJsonObject>;
        next_page?: string | null;
        previous_page?: string | null;
      }>({
        url: zendeskUrl(baseUrl, apiBasePath, `/tickets/${encodeURIComponent(String(ticketId))}/comments.json`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return {
        comments: response.comments ?? [],
        ...(response.next_page !== undefined ? { nextPage: response.next_page } : {}),
        ...(response.previous_page !== undefined ? { previousPage: response.previous_page } : {}),
      };
    },
    async uploadFile(input) {
      const url = zendeskUrl(baseUrl, apiBasePath, "/uploads.json");
      url.searchParams.set("filename", input.filename);
      if (input.token) url.searchParams.set("token", input.token);
      const response = await zendeskRequest<{ upload?: ZendeskUploadResource }>({
        url,
        method: "POST",
        options,
        fetch: fetchImpl,
        rawBody: input.data,
        contentType: input.contentType ?? "application/octet-stream",
      });
      return response.upload ?? {};
    },
    async getUser(userId) {
      const response = await zendeskRequest<{ user?: ZendeskJsonObject }>({
        url: zendeskUrl(baseUrl, apiBasePath, `/users/${encodeURIComponent(String(userId))}.json`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.user ?? {};
    },
    async getOrganization(organizationId) {
      const response = await zendeskRequest<{ organization?: ZendeskJsonObject }>({
        url: zendeskUrl(baseUrl, apiBasePath, `/organizations/${encodeURIComponent(String(organizationId))}.json`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.organization ?? {};
    },
    async listWebhooks() {
      const response = await zendeskRequest<{ webhooks?: Array<ZendeskJsonObject> }>({
        url: zendeskUrl(baseUrl, apiBasePath, "/webhooks"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.webhooks ?? [];
    },
    async getCurrentUser() {
      const response = await zendeskRequest<{ user?: ZendeskCurrentUserResource }>({
        url: zendeskUrl(baseUrl, apiBasePath, "/users/me.json"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.user ?? {};
    },
  };
}
