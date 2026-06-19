import { createAmazonConnectFullApiGeneratedClient } from "./full-api-client.generated.js";
import {
  AMAZON_CONNECT_FULL_API_OPERATION_BY_ID,
  AMAZON_CONNECT_FULL_API_OPERATION_BY_UID,
  type AmazonConnectFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  AmazonConnectClientOptions,
  AmazonConnectContactCenterClient,
  AmazonConnectJsonObject,
  AmazonConnectOperationRequestInput,
  AmazonConnectResource,
} from "./contracts.js";
import { startChatBody, startTaskBody, transferContactBody } from "./payloads.js";
import {
  amazonConnectGeneratedRequest,
  amazonConnectParticipantRequest,
  amazonConnectRequest,
  connectBaseUrl,
  participantBaseUrl,
} from "./requests.js";

export function createAmazonConnectContactCenterClient(
  options: AmazonConnectClientOptions,
): AmazonConnectContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = connectBaseUrl(options.region);
  const requestGenerated = <T = AmazonConnectResource>(
    operationUidOrId: AmazonConnectFullApiOperationUid | string,
    input: AmazonConnectOperationRequestInput = {},
  ) => {
    const operation = AMAZON_CONNECT_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? AMAZON_CONNECT_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Amazon Connect operation '${operationUidOrId}'.`);
    return amazonConnectGeneratedRequest<T>({
      operation,
      options,
      fetch: fetchImpl,
      input,
    });
  };
  const fullApi = createAmazonConnectFullApiGeneratedClient(requestGenerated);

  return {
    fullApi,
    requestOperation: requestGenerated,
    async startTaskContact(input) {
      const response = await amazonConnectRequest<AmazonConnectJsonObject>({
        url: new URL("/contact/task", baseUrl),
        method: "PUT",
        body: startTaskBody(options.instanceId, input),
        options,
        fetch: fetchImpl,
      });
      const contactId = typeof response.ContactId === "string" ? response.ContactId : undefined;
      return {
        ...(contactId ? { contactId } : {}),
        raw: response,
      };
    },
    async describeInstance() {
      return amazonConnectRequest<AmazonConnectJsonObject>({
        url: new URL(`/instance/${encodeURIComponent(options.instanceId)}`, baseUrl),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async startChatContact(input) {
      const response = await amazonConnectRequest<AmazonConnectJsonObject>({
        url: new URL("/contact/chat", baseUrl),
        method: "PUT",
        body: startChatBody(options.instanceId, input),
        options,
        fetch: fetchImpl,
      });
      return {
        ...(typeof response.ContactId === "string" ? { contactId: response.ContactId } : {}),
        ...(typeof response.ParticipantId === "string" ? { participantId: response.ParticipantId } : {}),
        ...(typeof response.ParticipantToken === "string" ? { participantToken: response.ParticipantToken } : {}),
        ...(typeof response.ContinuedFromContactId === "string" ? { continuedFromContactId: response.ContinuedFromContactId } : {}),
        raw: response,
      };
    },
    async createParticipantConnection(input) {
      return amazonConnectParticipantRequest({
        url: new URL("/participant/connection", participantBaseUrl(options.region)),
        bearer: input.participantToken,
        body: {
          ...(input.type?.length ? { Type: input.type } : {}),
          ...(input.connectParticipant !== undefined ? { ConnectParticipant: input.connectParticipant } : {}),
        },
        fetch: fetchImpl,
      });
    },
    async sendParticipantMessage(input) {
      return amazonConnectParticipantRequest({
        url: new URL("/participant/message", participantBaseUrl(options.region)),
        bearer: input.connectionToken,
        body: {
          Content: input.content,
          ContentType: input.contentType,
          ...(input.clientToken ? { ClientToken: input.clientToken } : {}),
        },
        fetch: fetchImpl,
      });
    },
    async sendParticipantEvent(input) {
      return amazonConnectParticipantRequest({
        url: new URL("/participant/event", participantBaseUrl(options.region)),
        bearer: input.connectionToken,
        body: {
          ContentType: input.contentType,
          ...(input.content ? { Content: input.content } : {}),
          ...(input.clientToken ? { ClientToken: input.clientToken } : {}),
        },
        fetch: fetchImpl,
      });
    },
    async getParticipantTranscript(input) {
      return amazonConnectParticipantRequest({
        url: new URL("/participant/transcript", participantBaseUrl(options.region)),
        bearer: input.connectionToken,
        body: {
          ...(input.contactId ? { ContactId: input.contactId } : {}),
          ...(input.maxResults !== undefined ? { MaxResults: input.maxResults } : {}),
          ...(input.nextToken ? { NextToken: input.nextToken } : {}),
          ...(input.scanDirection ? { ScanDirection: input.scanDirection } : {}),
          ...(input.sortOrder ? { SortOrder: input.sortOrder } : {}),
          ...(input.startPosition ? { StartPosition: input.startPosition } : {}),
        },
        fetch: fetchImpl,
      });
    },
    async transferContact(input) {
      return amazonConnectRequest<AmazonConnectJsonObject>({
        url: new URL("/contact/transfer", baseUrl),
        method: "POST",
        body: transferContactBody(options.instanceId, input),
        options,
        fetch: fetchImpl,
      });
    },
  };
}
