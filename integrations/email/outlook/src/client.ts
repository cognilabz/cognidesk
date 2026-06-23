import type {
  OutlookAttachmentResource,
  OutlookCreateSubscriptionInput,
  OutlookEmailClient,
  OutlookEmailClientOptions,
  OutlookGraphResource,
  OutlookLiveCheckOptions,
  OutlookMailboxUserResource,
  OutlookMessageResource,
  OutlookSubscriptionResource,
} from "./contracts.js";
import { outlookMessageBody } from "./mappers.js";
import {
  applyOutlookListQuery,
  createOutlookGraphClient,
  outlookAttachmentPath,
  outlookCollectionResult,
  outlookGraphRequest,
  outlookUserPath,
  selectExpandQuery,
  stripUndefined,
} from "./request.js";

export function createOutlookEmailClient(options: OutlookEmailClientOptions): OutlookEmailClient {
  const graphClient = createOutlookGraphClient(options);
  const userPath = outlookUserPath(options.userId);
  const requestGraph: OutlookEmailClient["requestGraph"] = (input) =>
    outlookGraphRequest(graphClient, options, {
      ...input,
      signal: input.signal ?? options.signal,
    });

  return {
    graphClient,
    rawClient: graphClient,
    requestGraph,
    async listMessages(input = {}) {
      const path = input.folderId
        ? `${userPath}/mailFolders/${encodeURIComponent(input.folderId)}/messages`
        : `${userPath}/messages`;
      const response = await requestGraph<OutlookGraphCollection<OutlookMessageResource>>({
        path,
        method: "GET",
        query: applyOutlookListQuery(input),
        signal: input.signal,
      });
      return outlookCollectionResult(response);
    },
    async getMessage(input) {
      return requestGraph<OutlookMessageResource>({
        path: `${userPath}/messages/${encodeURIComponent(input.id)}`,
        method: "GET",
        query: selectExpandQuery(input),
        signal: input.signal,
      });
    },
    async deltaMessages(input) {
      const response = await requestGraph<OutlookGraphCollection<OutlookMessageResource>>({
        path: `${userPath}/mailFolders/${encodeURIComponent(input.folderId)}/messages/delta`,
        method: "GET",
        query: stripUndefined({
          ...selectExpandQuery(input),
          ...(input.top !== undefined ? { "$top": input.top } : {}),
        }),
        signal: input.signal,
      });
      return outlookCollectionResult(response);
    },
    async listAttachments(input) {
      const response = await requestGraph<OutlookGraphCollection<OutlookAttachmentResource>>({
        path: outlookAttachmentPath(userPath, input),
        method: "GET",
        signal: input.signal,
      });
      return outlookCollectionResult(response);
    },
    async getAttachment(input) {
      return requestGraph<OutlookAttachmentResource>({
        path: `${outlookAttachmentPath(userPath, input)}/${encodeURIComponent(input.attachmentId)}`,
        method: "GET",
        signal: input.signal,
      });
    },
    async getAttachmentValue(input) {
      return requestGraph<Response>({
        path: `${outlookAttachmentPath(userPath, input)}/${encodeURIComponent(input.attachmentId)}/$value`,
        method: "GET",
        rawResponse: true,
        signal: input.signal,
      });
    },
    async createSubscription(input) {
      return requestGraph<OutlookSubscriptionResource>({
        path: "/subscriptions",
        method: "POST",
        body: outlookSubscriptionBody(input),
        signal: input.signal,
      });
    },
    async createDraft(input) {
      return requestGraph<OutlookMessageResource>({
        path: `${userPath}/messages`,
        method: "POST",
        body: outlookMessageBody(input),
        signal: input.signal,
      });
    },
    async sendMail(input) {
      await requestGraph<OutlookGraphResource>({
        path: `${userPath}/sendMail`,
        method: "POST",
        body: {
          message: outlookMessageBody(input.message),
          ...(input.saveToSentItems !== undefined ? { saveToSentItems: input.saveToSentItems } : {}),
        },
        signal: input.signal,
      });
      return { accepted: true };
    },
    async updateMessage(input) {
      return requestGraph<OutlookMessageResource>({
        path: `${userPath}/messages/${encodeURIComponent(input.id)}`,
        method: "PATCH",
        body: outlookMessageBody(input),
        signal: input.signal,
      });
    },
    async getMailboxUser(input = {}) {
      return requestGraph<OutlookMailboxUserResource>({
        path: userPath,
        method: "GET",
        query: { "$select": "id,displayName,mail,userPrincipalName" },
        signal: input.signal,
      });
    },
  };
}

export function createOutlookEmailLiveChecks(options: OutlookLiveCheckOptions) {
  return [{
    id: "mailbox-user",
    description: "Microsoft Graph mailbox user endpoint is reachable with the configured OAuth token.",
    requiredCredentialIds: ["microsoft-graph-oauth-access-token", "microsoft-graph-mailbox-user"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createOutlookEmailClient(options);
      const user = await client.getMailboxUser({ signal: context.signal });
      if (context.signal?.aborted) throw new Error("Outlook live mailbox-user check aborted.");
      return {
        details: {
          userId: typeof user.id === "string" ? user.id : undefined,
          mail: typeof user.mail === "string" ? user.mail : undefined,
          userPrincipalName: typeof user.userPrincipalName === "string" ? user.userPrincipalName : undefined,
          displayName: typeof user.displayName === "string" ? user.displayName : undefined,
        },
      };
    },
  }];
}

interface OutlookGraphCollection<T> {
  value?: T[];
  "@odata.nextLink"?: string;
  "@odata.deltaLink"?: string;
}

function outlookSubscriptionBody(input: OutlookCreateSubscriptionInput) {
  return stripUndefined({
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
  });
}
