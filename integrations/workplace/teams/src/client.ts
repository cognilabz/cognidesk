import type {
  TeamsChatMessageCollectionResponse,
  TeamsChatMessageResource,
  TeamsGraphResource,
  TeamsSubscriptionResource,
  TeamsUserResource,
  TeamsWorkplaceClient,
  TeamsWorkplaceClientOptions,
  TeamsWorkplaceProviderQuery,
} from "./contracts.js";
import {
  applyOptionalNumberQuery,
  applyOptionalStringQuery,
  assertDelegatedTeamsSend,
  assertTeamsSubscriptionResource,
  createTeamsGraphClient,
  stripUndefined,
  teamsChannelMessagePath,
  teamsChannelMessagesPath,
  teamsChatMessageBody,
  teamsChatMessagePath,
  teamsChatMessagesPath,
  teamsCollectionResult,
  teamsGraphRequest,
  teamsUpdateChatMessageBody,
} from "./request.js";

export function createTeamsWorkplaceClient(options: TeamsWorkplaceClientOptions): TeamsWorkplaceClient {
  const graphClient = createTeamsGraphClient(options);
  const requestGraph: TeamsWorkplaceClient["requestGraph"] = (input) =>
    teamsGraphRequest(graphClient, options, {
      ...input,
      signal: input.signal ?? options.signal,
    });

  return {
    graphClient,
    rawClient: graphClient,
    requestGraph,
    async sendChannelMessage(input) {
      assertDelegatedTeamsSend(options.permissionMode);
      return requestGraph<TeamsChatMessageResource>({
        path: teamsChannelMessagesPath(input.teamId, input.channelId),
        method: "POST",
        body: teamsChatMessageBody(input),
      });
    },
    async sendChannelReply(input) {
      assertDelegatedTeamsSend(options.permissionMode);
      return requestGraph<TeamsChatMessageResource>({
        path: teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, "/replies"),
        method: "POST",
        body: teamsChatMessageBody(input),
      });
    },
    async sendChatMessage(input) {
      assertDelegatedTeamsSend(options.permissionMode);
      return requestGraph<TeamsChatMessageResource>({
        path: teamsChatMessagesPath(input.chatId),
        method: "POST",
        body: teamsChatMessageBody(input),
      });
    },
    async postInternalAssistMessage(input) {
      return "chatId" in input ? this.sendChatMessage(input) : this.sendChannelMessage(input);
    },
    async listChannelMessages(input) {
      const query: TeamsWorkplaceProviderQuery = {};
      applyOptionalNumberQuery(query, "$top", input.top);
      applyOptionalStringQuery(query, "$expand", input.expand);
      const response = await requestGraph<TeamsChatMessageCollectionResponse>({
        path: teamsChannelMessagesPath(input.teamId, input.channelId),
        method: "GET",
        query,
      });
      return teamsCollectionResult(response);
    },
    async listChannelReplies(input) {
      const query: TeamsWorkplaceProviderQuery = {};
      applyOptionalNumberQuery(query, "$top", input.top);
      const response = await requestGraph<TeamsChatMessageCollectionResponse>({
        path: teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, "/replies"),
        method: "GET",
        query,
      });
      return teamsCollectionResult(response);
    },
    async listChatMessages(input) {
      const query: TeamsWorkplaceProviderQuery = {};
      applyOptionalNumberQuery(query, "$top", input.top);
      applyOptionalStringQuery(query, "$orderby", input.orderby);
      applyOptionalStringQuery(query, "$filter", input.filter);
      const response = await requestGraph<TeamsChatMessageCollectionResponse>({
        path: teamsChatMessagesPath(input.chatId),
        method: "GET",
        query,
      });
      return teamsCollectionResult(response);
    },
    async getChannelMessage(input) {
      const replyPath = input.replyId ? `/replies/${encodeURIComponent(input.replyId)}` : "";
      return requestGraph<TeamsChatMessageResource>({
        path: teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, replyPath),
        method: "GET",
      });
    },
    async getChatMessage(input) {
      return requestGraph<TeamsChatMessageResource>({
        path: teamsChatMessagePath(input.chatId, input.messageId),
        method: "GET",
      });
    },
    async updateChannelMessage(input) {
      const replyPath = input.replyId ? `/replies/${encodeURIComponent(input.replyId)}` : "";
      const body = teamsUpdateChatMessageBody(input.message, options.permissionMode);
      return await requestGraph<Partial<TeamsChatMessageResource> | undefined>({
        path: teamsChannelMessagePath(input.teamId, input.channelId, input.messageId, replyPath),
        method: "PATCH",
        body,
      }) ?? {};
    },
    async updateChatMessage(input) {
      const body = teamsUpdateChatMessageBody(input.message, options.permissionMode);
      return await requestGraph<Partial<TeamsChatMessageResource> | undefined>({
        path: teamsChatMessagePath(input.chatId, input.messageId),
        method: "PATCH",
        body,
      }) ?? {};
    },
    async createSubscription(input) {
      assertTeamsSubscriptionResource(input.resource);
      return requestGraph<TeamsSubscriptionResource>({
        path: "/subscriptions",
        method: "POST",
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
      return requestGraph<TeamsUserResource>({
        path: "/me",
        method: "GET",
      });
    },
  };
}
