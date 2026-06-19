import {
  createMailgunFullApiGeneratedClient,
  type MailgunGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  MAILGUN_FULL_API_OPERATION_BY_ID,
  MAILGUN_FULL_API_OPERATION_BY_UID,
  type MailgunFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  MailgunDomainResponse,
  MailgunDomainTemplatesInput,
  MailgunDomainTemplatesResponse,
  MailgunEmailClient,
  MailgunEmailClientOptions,
  MailgunEmailInput,
  MailgunEventsResponse,
  MailgunEventsSearchInput,
  MailgunHttpMethod,
  MailgunLiveCheckOptions,
  MailgunMimeInput,
  MailgunOperationRequestInput,
  MailgunResource,
  MailgunRoutesResponse,
  MailgunRoutesSearchInput,
  MailgunSendResponse,
  MailgunStoredMessage,
  MailgunSuppressionList,
  MailgunSuppressionRecord,
  MailgunWebhookResource,
} from "./contracts.js";
import {
  appendAddress,
  buildMailgunEmailForm,
  toBlob,
} from "./form.js";
import {
  applyEventsSearchQuery,
  mailgunOperationUrl,
  mailgunRequest,
  resolveMailgunApiBaseUrl,
} from "./request.js";

export function createMailgunEmailClient(options: MailgunEmailClientOptions): MailgunEmailClient {
  const apiBaseUrl = resolveMailgunApiBaseUrl(options);
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = MailgunResource>(
    method: MailgunHttpMethod,
    path: string,
    input: MailgunOperationRequestInput = {},
  ) => mailgunRequest<T>({
    url: mailgunOperationUrl(apiBaseUrl, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    ...(input.headers ? { headers: input.headers } : {}),
  });
  const requestOperation = async (
    operationUidOrId: MailgunFullApiOperationUid | string,
    input: MailgunOperationRequestInput = {},
  ) => {
    const operation = MAILGUN_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? MAILGUN_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Mailgun OpenAPI operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createMailgunFullApiGeneratedClient(requestOperation as MailgunGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as MailgunGeneratedOperationCaller,
    async sendEmail(input: MailgunEmailInput): Promise<MailgunSendResponse> {
      return mailgunRequest<MailgunSendResponse>({
        url: `${apiBaseUrl}/v3/${encodeURIComponent(options.domain)}/messages`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: buildMailgunEmailForm(input),
      });
    },
    async sendMime(input: MailgunMimeInput): Promise<MailgunSendResponse> {
      const body = new FormData();
      appendAddress(body, "to", input.to);
      body.set("message", toBlob(input.message), "message.mime");
      return mailgunRequest<MailgunSendResponse>({
        url: `${apiBaseUrl}/v3/${encodeURIComponent(options.domain)}/messages.mime`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body,
      });
    },
    async getStoredMessage(storageKey: string): Promise<MailgunStoredMessage> {
      return mailgunRequest<MailgunStoredMessage>({
        url: `${apiBaseUrl}/v3/domains/${encodeURIComponent(options.domain)}/messages/${encodeURIComponent(storageKey)}`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async searchEvents(input: MailgunEventsSearchInput = {}): Promise<MailgunEventsResponse> {
      const url = new URL(`${apiBaseUrl}/v3/${encodeURIComponent(options.domain)}/events`);
      applyEventsSearchQuery(url, input);
      return mailgunRequest<MailgunEventsResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getDomain(): Promise<MailgunDomainResponse> {
      return mailgunRequest<MailgunDomainResponse>({
        url: `${apiBaseUrl}/v3/domains/${encodeURIComponent(options.domain)}`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listWebhooks(): Promise<MailgunWebhookResource[]> {
      const response = await mailgunRequest<{ webhooks?: Record<string, MailgunWebhookResource | string[]> }>({
        url: `${apiBaseUrl}/v3/domains/${encodeURIComponent(options.domain)}/webhooks`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return Object.entries(response.webhooks ?? {}).map(([id, value]) => {
        if (Array.isArray(value)) return { id, urls: value };
        return { id, ...value };
      });
    },
    async listRoutes(input: MailgunRoutesSearchInput = {}): Promise<MailgunRoutesResponse> {
      const url = new URL(`${apiBaseUrl}/v3/routes`);
      if (input.skip !== undefined) url.searchParams.set("skip", String(input.skip));
      if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
      return mailgunRequest<MailgunRoutesResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getSuppression(
      list: MailgunSuppressionList,
      address: string,
    ): Promise<MailgunSuppressionRecord> {
      return mailgunRequest<MailgunSuppressionRecord>({
        url: `${apiBaseUrl}/v3/${encodeURIComponent(options.domain)}/${list}/${encodeURIComponent(address)}`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listDomainTemplates(
      input: MailgunDomainTemplatesInput = {},
    ): Promise<MailgunDomainTemplatesResponse> {
      const url = new URL(`${apiBaseUrl}/v3/${encodeURIComponent(options.domain)}/templates`);
      if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
      if (input.page) url.searchParams.set("page", input.page);
      if (input.p) url.searchParams.set("p", input.p);
      return mailgunRequest<MailgunDomainTemplatesResponse>({
        url: url.toString(),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

export function createMailgunEmailLiveChecks(options: MailgunLiveCheckOptions) {
  return [
    {
      id: "domain",
      description: "Mailgun Domains API is reachable with the configured API key and domain.",
      requiredCredentialIds: ["mailgun-api-key", "mailgun-domain"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createMailgunEmailClient(options);
        const domain = await client.getDomain();
        if (context.signal?.aborted) throw new Error("Mailgun live domain check aborted.");
        return {
          details: {
            domain: options.domain,
            state: domain.domain?.state,
          },
        };
      },
    },
    {
      id: "webhooks",
      description: "Mailgun Webhooks API is reachable and exposes SDK-user-configured callback URLs.",
      requiredCredentialIds: ["mailgun-api-key", "mailgun-domain"],
      async run(context: { signal?: AbortSignal }) {
        const client = options.client ?? createMailgunEmailClient(options);
        const webhooks = await client.listWebhooks();
        if (context.signal?.aborted) throw new Error("Mailgun live webhooks check aborted.");
        return {
          details: {
            webhookCount: webhooks.length,
            webhookIds: webhooks.map((webhook) => webhook.id).filter(Boolean),
          },
        };
      },
    },
  ];
}
