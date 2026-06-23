import {
  defineIntegration,
  IntegrationError,
  type IntegrationOperationContext,
} from "@cognidesk/integration-kit";
import { createOutlookEmailClient } from "./client.js";
import type {
  OutlookEmailClient,
  OutlookEmailClientOptions,
  OutlookGetAttachmentInput,
  OutlookGraphRequestInput,
  OutlookListAttachmentsInput,
} from "./contracts.js";
import { outlookEmailManifestInput, outlookEmailOperationAliases } from "./manifest.js";
import { parseOutlookWebhook } from "./webhooks.js";

export type OutlookEmailOperationCredentials = OutlookEmailClientOptions;

export const outlookEmailOperationHandlers = {
  [outlookEmailOperationAliases.receive]: (
    input: Parameters<typeof parseOutlookWebhook>[0],
    _context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => parseOutlookWebhook(input),
  [outlookEmailOperationAliases.send]: (
    input: Parameters<OutlookEmailClient["sendMail"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).sendMail(input),
  [outlookEmailOperationAliases.draftCreate]: (
    input: Parameters<OutlookEmailClient["createDraft"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).createDraft(input),
  [outlookEmailOperationAliases.attachmentsRead]: (
    input: OutlookListAttachmentsInput | OutlookGetAttachmentInput,
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => "attachmentId" in input
    ? outlookClient(context).getAttachment(input)
    : outlookClient(context).listAttachments(input),
  [outlookEmailOperationAliases.mailboxWatch]: (
    input: Parameters<OutlookEmailClient["createSubscription"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).createSubscription(input),
  [outlookEmailOperationAliases.messageList]: (
    input: Parameters<OutlookEmailClient["listMessages"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).listMessages(input),
  [outlookEmailOperationAliases.messageGet]: (
    input: Parameters<OutlookEmailClient["getMessage"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).getMessage(input),
  [outlookEmailOperationAliases.messageDelta]: (
    input: Parameters<OutlookEmailClient["deltaMessages"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).deltaMessages(input),
  [outlookEmailOperationAliases.messageUpdate]: (
    input: Parameters<OutlookEmailClient["updateMessage"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).updateMessage(input),
  [outlookEmailOperationAliases.mailboxUserGet]: (
    input: Parameters<OutlookEmailClient["getMailboxUser"]>[0],
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).getMailboxUser(input),
  [outlookEmailOperationAliases.webhookParse]: (
    input: Parameters<typeof parseOutlookWebhook>,
    _context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => parseOutlookWebhook(input[0], input[1]),
  [outlookEmailOperationAliases.rawGraphRequest]: (
    input: OutlookGraphRequestInput,
    context: IntegrationOperationContext<OutlookEmailOperationCredentials>,
  ) => outlookClient(context).requestGraph(input),
};

export const outlookEmailIntegration = defineIntegration<
  typeof outlookEmailManifestInput,
  OutlookEmailOperationCredentials,
  typeof outlookEmailOperationHandlers
>({
  manifest: outlookEmailManifestInput,
  operations: outlookEmailOperationHandlers,
});

function outlookClient(context: IntegrationOperationContext<OutlookEmailOperationCredentials>) {
  if (!context.credentials) {
    throw new IntegrationError("credential-missing", "Outlook operation credentials are required.", {
      providerPackageId: context.providerPackageId,
      provider: context.provider,
      operationAlias: context.operationAlias,
    });
  }
  return createOutlookEmailClient(context.credentials);
}
