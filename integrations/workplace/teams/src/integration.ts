import {
  defineIntegration,
  IntegrationError,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createTeamsWorkplaceClient } from "./client.js";
import type {
  ParseTeamsChangeNotificationOptions,
  TeamsCreateSubscriptionInput,
  TeamsGraphRequestInput,
  TeamsListChannelMessagesInput,
  TeamsListChannelRepliesInput,
  TeamsListChatMessagesInput,
  TeamsGetChannelMessageInput,
  TeamsGetChatMessageInput,
  TeamsSendChannelMessageInput,
  TeamsSendChannelReplyInput,
  TeamsSendChatMessageInput,
  TeamsUpdateChannelMessageInput,
  TeamsUpdateChatMessageRequest,
  TeamsWorkplaceClient,
  TeamsWorkplaceClientOptions,
} from "./contracts.js";
import { teamsWorkplaceManifestInput, teamsWorkplaceOperationAliases } from "./manifest.js";
import { parseTeamsChangeNotificationRequest } from "./notifications.js";

export type TeamsWorkplaceOperationCredentials = TeamsWorkplaceClientOptions;

export const teamsWorkplaceOperationHandlers = {
  [teamsWorkplaceOperationAliases.receive]: (
    input: Request,
    _context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => parseTeamsChangeNotificationRequest(input),
  [teamsWorkplaceOperationAliases.threadRead]: (
    input: TeamsListChannelRepliesInput | TeamsListChannelMessagesInput | TeamsListChatMessagesInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => {
    const client = teamsClient(context);
    if ("messageId" in input && "teamId" in input) return client.listChannelReplies(input);
    if ("teamId" in input) return client.listChannelMessages(input);
    return client.listChatMessages(input);
  },
  [teamsWorkplaceOperationAliases.messageSend]: (
    input: TeamsSendChannelMessageInput | TeamsSendChatMessageInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => "chatId" in input
    ? teamsClient(context).sendChatMessage(input)
    : teamsClient(context).sendChannelMessage(input),
  [teamsWorkplaceOperationAliases.messageReply]: (
    input: TeamsSendChannelReplyInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).sendChannelReply(input),
  [teamsWorkplaceOperationAliases.messageUpdate]: (
    input: TeamsUpdateChannelMessageInput | TeamsUpdateChatMessageRequest,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => "chatId" in input
    ? teamsClient(context).updateChatMessage(input)
    : teamsClient(context).updateChannelMessage(input),
  [teamsWorkplaceOperationAliases.notificationSend]: (
    input: Parameters<TeamsWorkplaceClient["postInternalAssistMessage"]>[0],
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).postInternalAssistMessage(input),
  [teamsWorkplaceOperationAliases.userRead]: (
    _input: unknown,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).getCurrentUser(),
  [teamsWorkplaceOperationAliases.channelMessagesList]: (
    input: TeamsListChannelMessagesInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).listChannelMessages(input),
  [teamsWorkplaceOperationAliases.channelRepliesList]: (
    input: TeamsListChannelRepliesInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).listChannelReplies(input),
  [teamsWorkplaceOperationAliases.channelMessageGet]: (
    input: TeamsGetChannelMessageInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).getChannelMessage(input),
  [teamsWorkplaceOperationAliases.chatMessagesList]: (
    input: TeamsListChatMessagesInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).listChatMessages(input),
  [teamsWorkplaceOperationAliases.chatMessageGet]: (
    input: TeamsGetChatMessageInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).getChatMessage(input),
  [teamsWorkplaceOperationAliases.subscriptionCreate]: (
    input: TeamsCreateSubscriptionInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).createSubscription(input),
  [teamsWorkplaceOperationAliases.webhookParse]: (
    input: [Request, ParseTeamsChangeNotificationOptions?],
    _context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => parseTeamsChangeNotificationRequest(input[0], input[1]),
  [teamsWorkplaceOperationAliases.rawGraphRequest]: (
    input: TeamsGraphRequestInput,
    context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>,
  ) => teamsClient(context).requestGraph(input),
};

export const teamsWorkplaceIntegration = defineIntegration<
  typeof teamsWorkplaceManifestInput,
  TeamsWorkplaceOperationCredentials,
  typeof teamsWorkplaceOperationHandlers
>({
  manifest: teamsWorkplaceManifestInput,
  operations: teamsWorkplaceOperationHandlers,
});

function teamsClient(context: IntegrationOperationContext<TeamsWorkplaceOperationCredentials>) {
  if (!context.credentials) {
    throw new IntegrationError("credential-missing", "Teams operation credentials are required.", {
      providerPackageId: context.providerPackageId,
      provider: context.provider,
      operationAlias: context.operationAlias,
    });
  }
  return createTeamsWorkplaceClient(context.credentials);
}
