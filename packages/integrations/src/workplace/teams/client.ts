import {
  createTeamsGraphGeneratedClient,
  type TeamsGraphGeneratedOperationCaller,
} from "./graph-api-client.generated.js";
import {
  TEAMS_GRAPH_API_OPERATION_BY_ID,
  TEAMS_GRAPH_API_OPERATION_BY_UID,
  type TeamsGraphApiOperationUid,
} from "./graph-api-operations.generated.js";
import type {
  TeamsChatMessageCollectionResponse,
  TeamsChatMessageResource,
  TeamsGraphHttpMethod,
  TeamsGraphOperationRequestInput,
  TeamsGraphResource,
  TeamsSubscriptionResource,
  TeamsUserResource,
  TeamsWorkplaceClient,
  TeamsWorkplaceClientOptions,
} from "./contracts.js";
import {
  applyOptionalNumberQuery,
  applyOptionalStringQuery,
  assertDelegatedTeamsSend,
  assertTeamsSubscriptionResource,
  stripUndefined,
  teamsChannelMessagePath,
  teamsChannelMessagesPath,
  teamsChatMessageBody,
  teamsChatMessagePath,
  teamsChatMessagesPath,
  teamsGraphOperationUrl,
  teamsGraphRequest,
  teamsGraphUrl,
  teamsUpdateChatMessageBody,
} from "./request.js";

export function createTeamsWorkplaceClient(options: TeamsWorkplaceClientOptions): TeamsWorkplaceClient {
  const graphApiBaseUrl = (options.graphApiBaseUrl ?? "https://graph.microsoft.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v1.0";
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = TeamsGraphResource>(
    method: TeamsGraphHttpMethod,
    path: string,
    input: TeamsGraphOperationRequestInput = {},
  ) => teamsGraphRequest<T>({
    url: teamsGraphOperationUrl(graphApiBaseUrl, graphApiVersion, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    headers: input.headers,
    returnResponse: false,
  });
  const requestOperation = async (
    operationUidOrId: TeamsGraphApiOperationUid | string,
    input: TeamsGraphOperationRequestInput = {},
  ) => {
    const operation = TEAMS_GRAPH_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? TEAMS_GRAPH_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Teams Graph operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const graphApi = createTeamsGraphGeneratedClient(requestOperation as TeamsGraphGeneratedOperationCaller);

  return {
    graphApi,
    requestOperation: requestOperation as TeamsGraphGeneratedOperationCaller,
    async sendChannelMessage(input) {
      assertDelegatedTeamsSend(options.permissionMode);
      return teamsGraphRequest<TeamsChatMessageResource>({
        url: teamsGraphUrl(
          graphApiBaseUrl,
          graphApiVersion,
          teamsChannelMessagesPath(input.teamId, input.channelId),
        ),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: teamsChatMessageBody(input),
      });
    },
    async sendChannelReply(input) {
      assertDelegatedTeamsSend(options.permissionMode);
      return teamsGraphRequest<TeamsChatMessageResource>({
        url: teamsGraphUrl(
          graphApiBaseUrl,
          graphApiVersion,
          teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, "/replies"),
        ),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: teamsChatMessageBody(input),
      });
    },
    async sendChatMessage(input) {
      assertDelegatedTeamsSend(options.permissionMode);
      return teamsGraphRequest<TeamsChatMessageResource>({
        url: teamsGraphUrl(graphApiBaseUrl, graphApiVersion, teamsChatMessagesPath(input.chatId)),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: teamsChatMessageBody(input),
      });
    },
    async postInternalAssistMessage(input) {
      return "chatId" in input ? this.sendChatMessage(input) : this.sendChannelMessage(input);
    },
    async listChannelMessages(input) {
      const url = teamsGraphUrl(
        graphApiBaseUrl,
        graphApiVersion,
        teamsChannelMessagesPath(input.teamId, input.channelId),
      );
      applyOptionalNumberQuery(url, "$top", input.top);
      applyOptionalStringQuery(url, "$expand", input.expand);
      return teamsGraphRequest<TeamsChatMessageCollectionResponse>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listChannelReplies(input) {
      const url = teamsGraphUrl(
        graphApiBaseUrl,
        graphApiVersion,
        teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, "/replies"),
      );
      applyOptionalNumberQuery(url, "$top", input.top);
      return teamsGraphRequest<TeamsChatMessageCollectionResponse>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listChatMessages(input) {
      const url = teamsGraphUrl(graphApiBaseUrl, graphApiVersion, teamsChatMessagesPath(input.chatId));
      applyOptionalNumberQuery(url, "$top", input.top);
      applyOptionalStringQuery(url, "$orderby", input.orderby);
      applyOptionalStringQuery(url, "$filter", input.filter);
      return teamsGraphRequest<TeamsChatMessageCollectionResponse>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getChannelMessage(input) {
      const replyPath = input.replyId ? `/replies/${encodeURIComponent(input.replyId)}` : "";
      return teamsGraphRequest<TeamsChatMessageResource>({
        url: teamsGraphUrl(
          graphApiBaseUrl,
          graphApiVersion,
          teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, replyPath),
        ),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getChatMessage(input) {
      return teamsGraphRequest<TeamsChatMessageResource>({
        url: teamsGraphUrl(graphApiBaseUrl, graphApiVersion, teamsChatMessagePath(input.chatId, input.messageId)),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateChannelMessage(input) {
      const replyPath = input.replyId ? `/replies/${encodeURIComponent(input.replyId)}` : "";
      const body = teamsUpdateChatMessageBody(input.message, options.permissionMode);
      return teamsGraphRequest<Partial<TeamsChatMessageResource>>({
        url: teamsGraphUrl(
          graphApiBaseUrl,
          graphApiVersion,
          teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, replyPath),
        ),
        method: "PATCH",
        options,
        fetch: fetchImpl,
        body,
      });
    },
    async updateChatMessage(input) {
      const body = teamsUpdateChatMessageBody(input.message, options.permissionMode);
      return teamsGraphRequest<Partial<TeamsChatMessageResource>>({
        url: teamsGraphUrl(graphApiBaseUrl, graphApiVersion, teamsChatMessagePath(input.chatId, input.messageId)),
        method: "PATCH",
        options,
        fetch: fetchImpl,
        body,
      });
    },
    async createSubscription(input) {
      assertTeamsSubscriptionResource(input.resource);
      return teamsGraphRequest<TeamsSubscriptionResource>({
        url: teamsGraphUrl(graphApiBaseUrl, graphApiVersion, "/subscriptions"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: stripUndefined({
          changeType: input.changeType,
          notificationUrl: input.notificationUrl,
          resource: input.resource,
          expirationDateTime: input.expirationDateTime,
          clientState: input.clientState,
          lifecycleNotificationUrl: input.lifecycleNotificationUrl,
          includeResourceData: input.includeResourceData,
          encryptionCertificate: input.encryptionCertificate,
          encryptionCertificateId: input.encryptionCertificateId,
          latestSupportedTlsVersion: input.latestSupportedTlsVersion,
          ...(input.additionalFields ?? {}),
        }),
      });
    },
    async getCurrentUser() {
      return teamsGraphRequest<TeamsUserResource>({
        url: teamsGraphUrl(graphApiBaseUrl, graphApiVersion, "/me"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}
