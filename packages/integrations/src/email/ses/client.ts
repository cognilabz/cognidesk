import {
  createSesFullApiGeneratedClient,
  type SesFullApiGeneratedClient,
  type SesGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  SES_FULL_API_OPERATION_BY_ID,
  SES_FULL_API_OPERATION_BY_UID,
  type SesFullApiOperation,
  type SesFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  SesAccountResponse,
  SesConfigurationSetEventDestinationsResponse,
  SesDeleteSuppressedDestinationInput,
  SesEmailClientOptions,
  SesHttpMethod,
  SesListConfigurationSetsInput,
  SesListConfigurationSetsResponse,
  SesListEmailIdentitiesInput,
  SesListEmailIdentitiesResponse,
  SesListSuppressedDestinationsInput,
  SesListSuppressedDestinationsResponse,
  SesListTemplatesInput,
  SesListTemplatesResponse,
  SesOperationRequestInput,
  SesProviderRequestOptions,
  SesRawEmailContent,
  SesResource,
  SesSendEmailInput,
  SesSendEmailResponse,
  SesSuppressedDestinationResponse,
} from "./contracts.js";
import {
  applyOptionalQuery,
  applySuppressionListQuery,
  sesClassicQueryRequest,
  sesOperationUrl,
  sesRequest,
} from "./request.js";

export interface SesEmailClient {
  fullApi: SesFullApiGeneratedClient;
  requestOperation: SesGeneratedOperationCaller;
  sendEmail(input: SesSendEmailInput): Promise<SesSendEmailResponse>;
  sendRawEmail(input: Omit<SesSendEmailInput, "Content"> & { Raw: SesRawEmailContent }): Promise<SesSendEmailResponse>;
  getAccount(input?: SesProviderRequestOptions): Promise<SesAccountResponse>;
  listEmailIdentities(input?: SesListEmailIdentitiesInput): Promise<SesListEmailIdentitiesResponse>;
  listTemplates(input?: SesListTemplatesInput): Promise<SesListTemplatesResponse>;
  listConfigurationSets(input?: SesListConfigurationSetsInput): Promise<SesListConfigurationSetsResponse>;
  getConfigurationSetEventDestinations(configurationSetName: string, input?: SesProviderRequestOptions): Promise<SesConfigurationSetEventDestinationsResponse>;
  listSuppressedDestinations(input?: SesListSuppressedDestinationsInput): Promise<SesListSuppressedDestinationsResponse>;
  getSuppressedDestination(emailAddress: string, input?: SesProviderRequestOptions): Promise<SesSuppressedDestinationResponse>;
  deleteSuppressedDestination(input: SesDeleteSuppressedDestinationInput): Promise<void>;
}

export interface SesLiveCheckOptions extends SesEmailClientOptions {
  client?: Pick<SesEmailClient, "getAccount" | "listEmailIdentities">;
  requireProductionAccess?: boolean;
}

export function createSesEmailClient(options: SesEmailClientOptions): SesEmailClient {
  const apiBaseUrl = (options.apiBaseUrl ?? `https://email.${options.region}.amazonaws.com`).replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = SesResource>(
    method: SesHttpMethod,
    path: string,
    input: SesOperationRequestInput = {},
  ) => sesRequest<T>({
    options,
    fetch: fetchImpl,
    method,
    url: sesOperationUrl(apiBaseUrl, path, input.pathParams, input.query),
    body: input.body,
    signal: input.signal ?? options.signal,
    ...(input.headers ? { headers: input.headers } : {}),
  });
  const requestOperation = async (
    operationUidOrId: SesFullApiOperationUid | string,
    input: SesOperationRequestInput = {},
  ) => {
    const operation: SesFullApiOperation | undefined = SES_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? SES_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown Amazon SES API model operation '${operationUidOrId}'.`);
    if (operation.protocol === "awsQuery") {
      return sesClassicQueryRequest({ options, fetch: fetchImpl, apiBaseUrl, operation, input });
    }
    return request(operation.method, operation.path, input);
  };
  const fullApi = createSesFullApiGeneratedClient(requestOperation as SesGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as SesGeneratedOperationCaller,
    async sendEmail(input) {
      const { signal, ...body } = input;
      return sesRequest<SesSendEmailResponse>({
        options,
        fetch: fetchImpl,
        method: "POST",
        url: `${apiBaseUrl}/v2/email/outbound-emails`,
        body,
        signal: signal ?? options.signal,
      });
    },
    async sendRawEmail(input) {
      const { Raw, signal, ...rest } = input;
      return sesRequest<SesSendEmailResponse>({
        options,
        fetch: fetchImpl,
        method: "POST",
        url: `${apiBaseUrl}/v2/email/outbound-emails`,
        body: { ...rest, Content: { Raw } },
        signal: signal ?? options.signal,
      });
    },
    async getAccount(input = {}) {
      return sesRequest<SesAccountResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: `${apiBaseUrl}/v2/email/account`,
        signal: input.signal ?? options.signal,
      });
    },
    async listEmailIdentities(input = {}) {
      const url = new URL(`${apiBaseUrl}/v2/email/identities`);
      applyOptionalQuery(url, input);
      return sesRequest<SesListEmailIdentitiesResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: url.toString(),
        signal: input.signal ?? options.signal,
      });
    },
    async listTemplates(input = {}) {
      const url = new URL(`${apiBaseUrl}/v2/email/templates`);
      applyOptionalQuery(url, input);
      return sesRequest<SesListTemplatesResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: url.toString(),
        signal: input.signal ?? options.signal,
      });
    },
    async listConfigurationSets(input = {}) {
      const url = new URL(`${apiBaseUrl}/v2/email/configuration-sets`);
      applyOptionalQuery(url, input);
      return sesRequest<SesListConfigurationSetsResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: url.toString(),
        signal: input.signal ?? options.signal,
      });
    },
    async getConfigurationSetEventDestinations(configurationSetName, input = {}) {
      return sesRequest<SesConfigurationSetEventDestinationsResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: `${apiBaseUrl}/v2/email/configuration-sets/${encodeURIComponent(configurationSetName)}/event-destinations`,
        signal: input.signal ?? options.signal,
      });
    },
    async listSuppressedDestinations(input = {}) {
      const url = new URL(`${apiBaseUrl}/v2/email/suppression/addresses`);
      applySuppressionListQuery(url, input);
      return sesRequest<SesListSuppressedDestinationsResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: url.toString(),
        signal: input.signal ?? options.signal,
      });
    },
    async getSuppressedDestination(emailAddress, input = {}) {
      return sesRequest<SesSuppressedDestinationResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        url: `${apiBaseUrl}/v2/email/suppression/addresses/${encodeURIComponent(emailAddress)}`,
        signal: input.signal ?? options.signal,
      });
    },
    async deleteSuppressedDestination(input) {
      const url = new URL(`${apiBaseUrl}/v2/email/suppression/addresses/${encodeURIComponent(input.EmailAddress)}`);
      if (input.TenantName) url.searchParams.set("TenantName", input.TenantName);
      await sesRequest<Record<string, never>>({
        options,
        fetch: fetchImpl,
        method: "DELETE",
        url: url.toString(),
        signal: input.signal ?? options.signal,
      });
    },
  };
}

export function createSesEmailLiveChecks(options: SesLiveCheckOptions) {
  return [{
    id: "account",
    description: "Amazon SES account and identity APIs are reachable with the configured SigV4 credentials.",
    requiredCredentialIds: ["aws-access-key-id", "aws-secret-access-key", "aws-region"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createSesEmailClient(options);
      const [account, identities] = await Promise.all([
        client.getAccount({ signal: context.signal }),
        client.listEmailIdentities({ PageSize: 10, signal: context.signal }),
      ]);
      if (context.signal?.aborted) throw new Error("Amazon SES live account check aborted.");
      if (account.SendingEnabled === false) {
        throw new Error("Amazon SES live account check failed: sending is disabled in this Region.");
      }
      if (options.requireProductionAccess && account.ProductionAccessEnabled === false) {
        throw new Error("Amazon SES live account check failed: production access is required but the account is in sandbox mode.");
      }
      return {
        details: {
          sendingEnabled: account.SendingEnabled,
          productionAccessEnabled: account.ProductionAccessEnabled,
          identityCount: identities.EmailIdentities?.length ?? 0,
          identityTypes: [...new Set((identities.EmailIdentities ?? []).flatMap((identity) =>
            identity.IdentityType ? [identity.IdentityType] : []
          ))],
        },
      };
    },
  }];
}
