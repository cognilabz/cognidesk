import {
  createGenesysCloudFullApiGeneratedClient,
  type GenesysCloudGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  GENESYS_CLOUD_FULL_API_OPERATION_BY_ID,
  type GenesysCloudFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  GenesysCloudClientRequestInput,
  GenesysCloudContactCenterClient,
  GenesysCloudContactCenterClientOptions,
  GenesysCloudHttpMethod,
  GenesysCloudOperationRequestInput,
  GenesysCloudResource,
} from "./contracts.js";
import {
  genesysCloudOpenMessagingRequest,
  genesysCloudOperationPath,
  genesysCloudRequest,
} from "./request.js";

export function createGenesysCloudContactCenterClient(
  options: GenesysCloudContactCenterClientOptions,
): GenesysCloudContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = GenesysCloudResource>(
    method: GenesysCloudHttpMethod,
    path: string,
    input: GenesysCloudClientRequestInput = {},
  ) => genesysCloudRequest<T>({
    options,
    fetch: fetchImpl,
    method,
    path,
    query: input.query,
    body: input.body,
    contentType: input.contentType,
    idempotencyKey: input.idempotencyKey,
  });
  const requestOperation = async (
    operationId: GenesysCloudFullApiOperationId | string,
    input: GenesysCloudOperationRequestInput = {},
  ) => {
    const operation = GENESYS_CLOUD_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) {
      throw new Error(`Unknown Genesys Cloud Swagger operation '${operationId}'.`);
    }
    const path = genesysCloudOperationPath(operation.path, input.pathParams ?? {});
    return request(operation.method as GenesysCloudHttpMethod, path, {
      query: input.query,
      body: input.body,
      contentType: input.contentType ?? operation.requestContentTypes[0],
      idempotencyKey: input.idempotencyKey,
    });
  };
  const fullApi = createGenesysCloudFullApiGeneratedClient(requestOperation as GenesysCloudGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as GenesysCloudGeneratedOperationCaller,
    async createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) {
        throw new Error("Genesys Cloud handoff path must be provided by SDK configuration.");
      }
      return genesysCloudRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async createCallback(input) {
      return genesysCloudRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/api/v2/conversations/callbacks",
        body: input.callback,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async createOpenMessage(input) {
      return genesysCloudOpenMessagingRequest({
        options,
        fetch: fetchImpl,
        integrationId: input.integrationId,
        kind: "message",
        body: input.message,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async createOpenEvent(input) {
      return genesysCloudOpenMessagingRequest({
        options,
        fetch: fetchImpl,
        integrationId: input.integrationId,
        kind: "event",
        body: input.event,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async createOpenReceipt(input) {
      return genesysCloudOpenMessagingRequest({
        options,
        fetch: fetchImpl,
        integrationId: input.integrationId,
        kind: "receipt",
        body: input.receipt,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async getConversation(input) {
      return genesysCloudRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/api/v2/conversations/${encodeURIComponent(input.conversationId)}`,
      });
    },
    async listQueues(input = {}) {
      const search = new URLSearchParams();
      if (input.pageSize !== undefined) search.set("pageSize", String(input.pageSize));
      if (input.pageNumber !== undefined) search.set("pageNumber", String(input.pageNumber));
      if (input.name) search.set("name", input.name);
      return genesysCloudRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/api/v2/routing/queues${search.size > 0 ? `?${search.toString()}` : ""}`,
      });
    },
    async readiness() {
      return genesysCloudRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath ?? "/api/v2/users/me",
      });
    },
  };
}
