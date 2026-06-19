import {
  createOutlookGraphGeneratedClient,
  type OutlookGraphGeneratedOperationCaller,
} from "./graph-api-client.generated.js";
import {
  OUTLOOK_GRAPH_API_OPERATION_BY_ID,
  OUTLOOK_GRAPH_API_OPERATION_BY_UID,
  type OutlookGraphApiOperationUid,
} from "./graph-api-operations.generated.js";
import type {
  OutlookAttachmentResource,
  OutlookCreateSubscriptionInput,
  OutlookEmailClient,
  OutlookEmailClientOptions,
  OutlookGraphHttpMethod,
  OutlookGraphOperationRequestInput,
  OutlookGraphResource,
  OutlookLiveCheckOptions,
  OutlookMailboxUserResource,
  OutlookMessageResource,
  OutlookSubscriptionResource,
} from "./contracts.js";
import { outlookMessageBody } from "./mappers.js";
import {
  applyOutlookListQuery,
  applySelectExpandQuery,
  outlookAttachmentPath,
  outlookGraphOperationUrl,
  outlookGraphUrl,
  outlookRequest,
  outlookUserPath,
  stripUndefined,
} from "./request.js";

export function createOutlookEmailClient(options: OutlookEmailClientOptions): OutlookEmailClient {
  const graphBaseUrl = (options.graphBaseUrl ?? "https://graph.microsoft.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v1.0";
  const fetchImpl = options.fetch ?? fetch;
  const userPath = outlookUserPath(options.userId);
  const request = <T = OutlookGraphResource>(
    method: OutlookGraphHttpMethod,
    path: string,
    input: OutlookGraphOperationRequestInput = {},
  ) => outlookRequest<T>({
    url: outlookGraphOperationUrl(graphBaseUrl, graphApiVersion, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    headers: input.headers,
    signal: input.signal ?? options.signal,
    returnResponse: false,
  });
  const requestOperation = async (
    operationUidOrId: OutlookGraphApiOperationUid | string,
    input: OutlookGraphOperationRequestInput = {},
  ) => {
    const operation = OUTLOOK_GRAPH_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? OUTLOOK_GRAPH_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Outlook Graph operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const graphApi = createOutlookGraphGeneratedClient(requestOperation as OutlookGraphGeneratedOperationCaller);

  return {
    graphApi,
    requestOperation: requestOperation as OutlookGraphGeneratedOperationCaller,
    async listMessages(input = {}) {
      const path = input.folderId
        ? `${userPath}/mailFolders/${encodeURIComponent(input.folderId)}/messages`
        : `${userPath}/messages`;
      const url = outlookGraphUrl(graphBaseUrl, graphApiVersion, path);
      applyOutlookListQuery(url, input);
      const response = await outlookRequest<OutlookGraphCollection<OutlookMessageResource>>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
      return {
        value: response.value ?? [],
        ...(response["@odata.nextLink"] ? { nextLink: response["@odata.nextLink"] } : {}),
        ...(response["@odata.deltaLink"] ? { deltaLink: response["@odata.deltaLink"] } : {}),
      };
    },
    async getMessage(input) {
      const url = outlookGraphUrl(graphBaseUrl, graphApiVersion, `${userPath}/messages/${encodeURIComponent(input.id)}`);
      applySelectExpandQuery(url, input);
      return outlookRequest<OutlookMessageResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async deltaMessages(input) {
      const url = outlookGraphUrl(
        graphBaseUrl,
        graphApiVersion,
        `${userPath}/mailFolders/${encodeURIComponent(input.folderId)}/messages/delta`,
      );
      applySelectExpandQuery(url, input);
      if (input.top !== undefined) url.searchParams.set("$top", String(input.top));
      const response = await outlookRequest<OutlookGraphCollection<OutlookMessageResource>>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
      return {
        value: response.value ?? [],
        ...(response["@odata.nextLink"] ? { nextLink: response["@odata.nextLink"] } : {}),
        ...(response["@odata.deltaLink"] ? { deltaLink: response["@odata.deltaLink"] } : {}),
      };
    },
    async listAttachments(input) {
      const response = await outlookRequest<OutlookGraphCollection<OutlookAttachmentResource>>({
        url: outlookGraphUrl(graphBaseUrl, graphApiVersion, outlookAttachmentPath(userPath, input)),
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
      return {
        value: response.value ?? [],
        ...(response["@odata.nextLink"] ? { nextLink: response["@odata.nextLink"] } : {}),
      };
    },
    async getAttachment(input) {
      return outlookRequest<OutlookAttachmentResource>({
        url: outlookGraphUrl(
          graphBaseUrl,
          graphApiVersion,
          `${outlookAttachmentPath(userPath, input)}/${encodeURIComponent(input.attachmentId)}`,
        ),
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
      });
    },
    async getAttachmentValue(input) {
      return outlookRequest({
        url: outlookGraphUrl(
          graphBaseUrl,
          graphApiVersion,
          `${outlookAttachmentPath(userPath, input)}/${encodeURIComponent(input.attachmentId)}/$value`,
        ),
        method: "GET",
        options,
        fetch: fetchImpl,
        returnResponse: true,
        signal: input.signal ?? options.signal,
      });
    },
    async createSubscription(input) {
      return outlookRequest<OutlookSubscriptionResource>({
        url: outlookGraphUrl(graphBaseUrl, graphApiVersion, "/subscriptions"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: outlookSubscriptionBody(input),
        signal: input.signal ?? options.signal,
      });
    },
    async createDraft(input) {
      return outlookRequest<OutlookMessageResource>({
        url: outlookGraphUrl(graphBaseUrl, graphApiVersion, `${userPath}/messages`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: outlookMessageBody(input),
        signal: input.signal ?? options.signal,
      });
    },
    async sendMail(input) {
      const response = await outlookRequest({
        url: outlookGraphUrl(graphBaseUrl, graphApiVersion, `${userPath}/sendMail`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: {
          message: outlookMessageBody(input.message),
          ...(input.saveToSentItems !== undefined ? { saveToSentItems: input.saveToSentItems } : {}),
        },
        returnResponse: true,
        signal: input.signal ?? options.signal,
      });
      return { accepted: true, status: response.status };
    },
    async updateMessage(input) {
      return outlookRequest<OutlookMessageResource>({
        url: outlookGraphUrl(graphBaseUrl, graphApiVersion, `${userPath}/messages/${encodeURIComponent(input.id)}`),
        method: "PATCH",
        options,
        fetch: fetchImpl,
        body: outlookMessageBody(input),
        signal: input.signal ?? options.signal,
      });
    },
    async getMailboxUser(input = {}) {
      const url = outlookGraphUrl(graphBaseUrl, graphApiVersion, userPath);
      url.searchParams.set("$select", "id,displayName,mail,userPrincipalName");
      return outlookRequest<OutlookMailboxUserResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
        signal: input.signal ?? options.signal,
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
