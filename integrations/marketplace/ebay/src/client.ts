import {
  IntegrationError,
  normalizeIntegrationError,
  providerJsonRequest,
  providerRequestUrl,
  type ProviderCredentialStatusInput,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  ebayMarketplaceProviderManifest,
  ebaySelectedApiFunctionCatalog,
  ebaySelectedApiOperationCatalog,
} from "./catalog.js";
import type {
  EbayCredentialStatusInput,
  EbayLiveCheckOptions,
  EbayMarketplaceClient,
  EbayMarketplaceClientOptions,
  EbayMarketplaceProviderPayload,
  EbayMarketplaceProviderQuery,
  EbayMarketplaceProviderClient,
  EbaySelectedApiOperation,
} from "./contracts.js";
import { isEuOrUkCountry, readString } from "./utils.js";

const EBAY_API_BASE_PATHS: Record<EbaySelectedApiOperation["api"], string> = {
  "sell.fulfillment": "/sell/fulfillment/v1",
  "commerce.message": "/commerce/message/v1",
  "commerce.notification": "/commerce/notification/v1",
  "developer.key-management": "/developer/key_management/v1",
  "commerce.identity": "/commerce/identity/v1",
};
const EBAY_PROVIDER_ERROR_CONTEXT = {
  providerPackageId: "marketplace.ebay",
  provider: "ebay",
} as const;

export function createEbayMarketplaceClient(options: EbayMarketplaceClientOptions = {}): EbayMarketplaceClient {
  const providerClient = options.providerClient ?? createEbayRestMarketplaceProviderClient(options);
  const delegatedOperations = Object.fromEntries(
    ebaySelectedApiFunctionCatalog.map((functionName) => [
      functionName,
      async (...args: unknown[]) => {
        const method = providerClient[functionName] as unknown;
        if (typeof method !== "function") {
          throw missingEbayProviderClientOperationError(functionName);
        }
        return (method as (...args: unknown[]) => Promise<unknown>).apply(providerClient, args);
      },
    ]),
  ) as unknown as EbayMarketplaceProviderClient;

  return {
    providerClient,
    ...delegatedOperations,
  };
}

export function createEbayRestMarketplaceProviderClient(
  options: Omit<EbayMarketplaceClientOptions, "providerClient"> = {},
): EbayMarketplaceProviderClient {
  if (!options.accessToken && !options.applicationAccessToken) return createUnconfiguredEbayMarketplaceProviderClient();
  return Object.fromEntries(
    ebaySelectedApiOperationCatalog.map((operation) => [
      operation.functionName,
      (...args: unknown[]) => invokeEbayRestOperation(operation, args, options),
    ]),
  ) as unknown as EbayMarketplaceProviderClient;
}

export function createUnconfiguredEbayMarketplaceProviderClient(): EbayMarketplaceProviderClient {
  return Object.fromEntries(
    ebaySelectedApiFunctionCatalog.map((functionName) => [
      functionName,
      async () => {
        throw missingEbayRuntimeConfigurationError(functionName);
      },
    ]),
  ) as unknown as EbayMarketplaceProviderClient;
}

function missingEbayRuntimeConfigurationError(functionName: keyof EbayMarketplaceProviderClient) {
  return new IntegrationError(
    "credential-missing",
    "Pass eBay OAuth tokens to createEbayMarketplaceClient({ accessToken }) or a host-provided eBay marketplace providerClient.",
    {
      ...EBAY_PROVIDER_ERROR_CONTEXT,
      details: {
        functionName,
        requiredCredentials: ["accessToken", "applicationAccessToken"],
        providerClientInterface: "EbayMarketplaceProviderClient",
      },
    },
  );
}

function missingEbayProviderClientOperationError(functionName: keyof EbayMarketplaceProviderClient) {
  return new IntegrationError(
    "contract-violation",
    `eBay marketplace provider client must implement ${String(functionName)}().`,
    {
      ...EBAY_PROVIDER_ERROR_CONTEXT,
      details: {
        functionName,
        providerClientInterface: "EbayMarketplaceProviderClient",
      },
    },
  );
}

async function invokeEbayRestOperation(
  operation: EbaySelectedApiOperation,
  args: unknown[],
  options: Omit<EbayMarketplaceClientOptions, "providerClient">,
) {
  const request = await ebaySignedOperationRequest(ebayOperationRequest(operation, args, options), operation, options);
  if (operation.functionName === "fetchPaymentDisputeEvidenceContent") {
    return requestEbayEvidenceContent(request, operation, options);
  }
  try {
    return await providerJsonRequest({
      ...request,
      fetch: options.fetch,
      signal: options.signal,
      timeoutMs: options.timeoutMs,
      retry: options.retry,
      providerName: `eBay ${operation.api}.${operation.operationId}`,
    });
  } catch (error) {
    throw normalizeProviderRequestError(error, {
      providerPackageId: "marketplace.ebay",
      provider: "ebay",
    });
  }
}

async function ebaySignedOperationRequest(
  request: ReturnType<typeof ebayOperationRequest>,
  operation: EbaySelectedApiOperation,
  options: Omit<EbayMarketplaceClientOptions, "providerClient">,
) {
  if (!options.requestSigner || operation.functionName !== "issueRefund") return request;
  const body = request.body === undefined ? undefined : JSON.stringify(request.body);
  const signedHeaders = await options.requestSigner({
    method: request.method,
    url: providerRequestUrl(request),
    ...(body !== undefined ? { body } : {}),
  });
  return {
    ...request,
    headers: {
      ...request.headers,
      ...signedHeaders,
    },
  };
}

function ebayOperationRequest(
  operation: EbaySelectedApiOperation,
  args: unknown[],
  options: Omit<EbayMarketplaceClientOptions, "providerClient">,
) {
  const pathParams: Record<string, string | number | boolean | undefined> = {};
  const placeholders = [...operation.path.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]).filter(Boolean) as string[];
  for (const [index, placeholder] of placeholders.entries()) {
    const value = args[index];
    if (!isPathValue(value)) {
      throw new IntegrationError(
        "provider-validation",
        `Missing eBay path parameter '${placeholder}' for ${operation.functionName}.`,
        { providerPackageId: "marketplace.ebay", provider: "ebay" },
      );
    }
    pathParams[placeholder] = value;
  }
  const remaining = args.slice(placeholders.length);
  const query = operation.method === "GET" ? ebayQuery(remaining[0] as EbayMarketplaceProviderQuery | undefined) : undefined;
  const body = operation.method === "GET" || operation.method === "DELETE"
    ? undefined
    : remaining[0] as EbayMarketplaceProviderPayload | undefined;
  const accessToken = ebayAccessTokenForOperation(operation, options);
  const baseUrl = ebayApiBaseUrl(operation.api, options);
  const headers: Record<string, string | undefined> = {
    ...(options.marketplaceId ? { "x-ebay-c-marketplace-id": options.marketplaceId } : {}),
  };
  return {
    baseUrl,
    path: operation.path,
    method: operation.method,
    pathParams,
    query,
    body,
    accessToken,
    headers,
  };
}

async function requestEbayEvidenceContent(
  request: ReturnType<typeof ebayOperationRequest>,
  operation: EbaySelectedApiOperation,
  options: Omit<EbayMarketplaceClientOptions, "providerClient">,
) {
  const url = providerRequestUrl(request);
  const response = await (options.fetch ?? fetch)(url, {
    method: request.method,
    headers: {
      accept: "application/json, application/octet-stream",
      authorization: `Bearer ${request.accessToken}`,
      ...request.headers,
    },
    ...(options.signal ? { signal: options.signal } : {}),
  });
  if (!response.ok) {
    const payload = await parseEbayResponsePayload(response);
    throw new IntegrationError(
      providerErrorCode(response.status),
      `eBay ${operation.api}.${operation.operationId} failed with HTTP ${response.status}.`,
      {
        providerPackageId: "marketplace.ebay",
        provider: "ebay",
        statusCode: response.status,
        retryable: response.status === 429 || response.status >= 500,
        details: { payload },
      },
    );
  }
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) return response.json() as Promise<unknown>;
  return response.arrayBuffer();
}

function ebayAccessTokenForOperation(
  operation: EbaySelectedApiOperation,
  options: Omit<EbayMarketplaceClientOptions, "providerClient">,
) {
  const token = operation.functionName === "getNotificationPublicKey"
    ? options.applicationAccessToken ?? options.accessToken
    : options.accessToken ?? options.applicationAccessToken;
  if (!token) {
    throw new IntegrationError(
      "credential-missing",
      `eBay OAuth access token is required for ${operation.functionName}.`,
      { providerPackageId: "marketplace.ebay", provider: "ebay" },
    );
  }
  return token;
}

function ebayApiBaseUrl(
  api: EbaySelectedApiOperation["api"],
  options: Omit<EbayMarketplaceClientOptions, "providerClient">,
) {
  const root = options.baseUrl ?? (options.environment === "sandbox" ? "https://api.sandbox.ebay.com" : "https://api.ebay.com");
  return `${root.replace(/\/+$/, "")}${EBAY_API_BASE_PATHS[api]}`;
}

function ebayQuery(input: EbayMarketplaceProviderQuery | undefined) {
  const query: Record<string, ProviderQueryValue> = {};
  for (const [key, value] of Object.entries(input ?? {})) {
    if (value === undefined || value === null) continue;
    const normalizedKey = key === "continuationToken" ? "continuation_token" : key;
    if (Array.isArray(value)) {
      query[normalizedKey] = value.map(String);
      continue;
    }
    if (typeof value === "object") {
      query[normalizedKey] = JSON.stringify(value);
      continue;
    }
    query[normalizedKey] = value;
  }
  return query;
}

async function parseEbayResponsePayload(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return { raw: text };
  }
}

function isPathValue(value: unknown): value is string | number | boolean {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

function normalizeProviderRequestError(
  error: unknown,
  context: { providerPackageId: string; provider: string },
) {
  return normalizeIntegrationError(error, {
    ...context,
    statusCode: readErrorStatus(error),
    retryable: readErrorRetryable(error),
    details: readErrorPayload(error),
  });
}

function readErrorStatus(error: unknown) {
  if (!isRecord(error)) return undefined;
  const status = error.status ?? error.statusCode;
  return typeof status === "number" ? status : undefined;
}

function readErrorRetryable(error: unknown) {
  const status = readErrorStatus(error);
  return status === undefined ? undefined : status === 429 || status >= 500;
}

function readErrorPayload(error: unknown) {
  if (!isRecord(error) || error.payload === undefined) return undefined;
  return { payload: error.payload };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function providerErrorCode(status: number) {
  if (status === 401) return "provider-auth";
  if (status === 403) return "provider-permission";
  if (status === 429) return "provider-rate-limited";
  if (status === 408 || status === 504) return "provider-timeout";
  if (status >= 500) return "provider-unavailable";
  return "provider-validation";
}

export function ebayMarketplaceCredentialStatuses(input: EbayCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-oauth-access-token",
      state: input.accessTokenConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [
        "https://api.ebay.com/oauth/api_scope/sell.fulfillment",
        "https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly",
        "https://api.ebay.com/oauth/api_scope/commerce.message",
        "https://api.ebay.com/oauth/api_scope/commerce.identity.readonly",
        "https://api.ebay.com/oauth/api_scope/commerce.notification.subscription",
      ],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessTokenConfigured
        ? "eBay OAuth user access is configured for the built-in REST adapter or host provider client."
        : "An eBay OAuth user access token is required for marketplace REST APIs.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-application-access-token",
      state: input.applicationAccessTokenConfigured ? "configured" : "missing",
      scopes: ["https://api.ebay.com/oauth/api_scope"],
      message: input.applicationAccessTokenConfigured
        ? "eBay application access token is configured for Notification public-key retrieval."
        : "An eBay client-credentials application access token is required for Notification public-key retrieval.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-client-id",
      state: input.clientIdConfigured ? "configured" : "missing",
      message: input.clientIdConfigured
        ? "eBay application client ID is configured."
        : "The host provider client's eBay application client ID is required.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-client-secret",
      state: input.clientSecretConfigured ? "configured" : "missing",
      message: input.clientSecretConfigured
        ? "eBay application client secret is configured server-side."
        : "The host provider client's eBay application client secret is required for OAuth lifecycle operations.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-marketplace-id",
      state: input.marketplaceId ? "configured" : "missing",
      message: input.marketplaceId
        ? `eBay marketplace '${input.marketplaceId}' is configured.`
        : "An eBay marketplace ID such as EBAY_US is required.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-provider-client",
      state: input.providerClientConfigured ? "configured" : "not-required",
      message: input.providerClientConfigured
        ? "Host-provided eBay marketplace provider client override is expected to be available at runtime."
        : "A host-provided eBay marketplace provider client is optional; the package can use its built-in REST adapter with OAuth tokens.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-digital-signature-key",
      state: input.digitalSignatureConfigured ? "configured" : input.requireDigitalSignatureForRefunds || isEuOrUkCountry(input.sellerDomicileCountry) ? "missing" : "not-required",
      message: input.digitalSignatureConfigured
        ? "eBay digital signature key material is configured for regulated refund requests."
        : input.requireDigitalSignatureForRefunds || isEuOrUkCountry(input.sellerDomicileCountry)
          ? "eBay digital signature key material is required for issueRefund under EU/UK seller policy."
          : "eBay digital signature key material is only required when EU/UK seller or host provider policy requires signed issueRefund calls.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-notification-verification-token",
      state: input.notificationVerificationTokenConfigured ? "configured" : "missing",
      message: input.notificationVerificationTokenConfigured
        ? "eBay notification endpoint verification token is configured."
        : "An eBay notification verification token is required for endpoint challenge responses.",
    },
  ];
}

export function createEbayMarketplaceLiveChecks(options: EbayLiveCheckOptions) {
  return [{
    id: "identity",
    description: "eBay Identity API readiness is checked through the configured provider client.",
    requiredCredentialIds: ["ebay-oauth-access-token", "ebay-marketplace-id"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createEbayMarketplaceClient(options);
      const user = await client.getUser();
      if (context.signal?.aborted) throw new Error("eBay live identity check aborted.");
      return {
        details: {
          userId: readString(user, "userId") ?? readString(user, "username") ?? "available",
          marketplaceId: options.marketplaceId,
        },
      };
    },
  }];
}
