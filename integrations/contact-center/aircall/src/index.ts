import {
  IntegrationError,
  defineIntegration,
  providerJsonRequest,
} from "@cognidesk/integration-kit";
import { aircallProviderManifestInput } from "./manifest.js";

export { aircallProviderManifest, aircallProviderManifestInput, aircallOperationAliases, aircallRestSupportSlice, aircallSupportSlice } from "./manifest.js";

export type ProviderJsonObject = Record<string, unknown>;

export interface ProviderRestRetryOptions {
  attempts?: number | undefined;
  statusCodes?: readonly number[] | undefined;
  baseDelayMs?: number | undefined;
  maxDelayMs?: number | undefined;
}

type ProviderRestRequestInput = Parameters<typeof providerJsonRequest>[0] & {
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderRestRetryOptions | undefined;
};

function providerRestRequest<T = unknown>(input: ProviderRestRequestInput): Promise<T> {
  return providerJsonRequest<T>(input as Parameters<typeof providerJsonRequest>[0]);
}

export interface AircallClientOptions {
  baseUrl?: string | undefined;
  apiBaseUrl?: string | undefined;
  accessToken?: string | undefined;
  authorizationHeader?: string | undefined;
  readinessPath?: string | undefined;
  fetch?: typeof fetch | undefined;
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  retry?: number | ProviderRestRetryOptions | undefined;
  rawClient?: AircallRawClient | undefined;
}

export type AircallDispatchingStrategy = "random" | "simultaneous" | "longest_idle";

export interface AircallTransferCallInput {
  callId: string | number;
  userId?: string | number | undefined;
  teamId?: string | number | undefined;
  number?: string | undefined;
  dispatchingStrategy?: AircallDispatchingStrategy | undefined;
}

export type ConfiguredHandoffInput = AircallTransferCallInput;

export interface AircallReadinessInput {
  path?: string | undefined;
}

export interface AircallRawClient {
  transferCall(input: AircallTransferCallInput): Promise<ProviderJsonObject>;
  readiness?(input?: AircallReadinessInput): Promise<ProviderJsonObject>;
}

export interface AircallClient {
  rawClient: AircallRawClient;
  createHandoff(input?: ConfiguredHandoffInput): Promise<ProviderJsonObject>;
  transferCall(input: AircallTransferCallInput): Promise<ProviderJsonObject>;
  readiness(input?: AircallReadinessInput): Promise<ProviderJsonObject>;
}

export interface AircallIntegrationOptions extends AircallClientOptions {
  aircallClient?: AircallClient | undefined;
}

export function createAircallClient(options: AircallClientOptions = {}): AircallClient {
  const rawClient = requireAircallRawClient(options.rawClient ?? createAircallRestRawClient(options));

  return {
    rawClient,
    createHandoff(input) {
      return rawClient.transferCall(parseConfiguredHandoffInput(input));
    },
    transferCall(input) {
      return rawClient.transferCall(parseAircallTransferCallInput(input));
    },
    readiness(input = {}) {
      if (typeof rawClient.readiness !== "function") {
        throw aircallError("contract-violation", "Aircall rawClient must implement readiness() for live readiness checks.");
      }
      return rawClient.readiness(input);
    },
  };
}

export function createAircallOperationHandlers(options: AircallIntegrationOptions = {}) {
  const client = options.aircallClient ?? createAircallClient(options);

  return {
    "contact-center.handoff.request": async (input: unknown) => client.createHandoff(parseConfiguredHandoffInput(input)),
  } as const;
}

export function createAircallIntegration(options: AircallIntegrationOptions = {}) {
  return defineIntegration({
    manifest: aircallProviderManifestInput,
    operations: createAircallOperationHandlers(options),
  });
}

function createAircallRestRawClient(options: AircallClientOptions): AircallRawClient {
  return {
    transferCall(input) {
      const value = parseAircallTransferCallInput(input);
      return providerRestRequest<ProviderJsonObject>({
        baseUrl: configuredBaseUrl(options),
        method: "POST",
        path: "/calls/{callId}/transfers",
        pathParams: { callId: value.callId },
        body: aircallTransferCallBody(value),
        authorizationHeader: configuredAuthorizationHeader(options),
        fetch: options.fetch,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        providerName: "Aircall",
      });
    },
    readiness(input = {}) {
      return providerRestRequest<ProviderJsonObject>({
        baseUrl: configuredBaseUrl(options),
        method: "GET",
        path: input.path ?? options.readinessPath ?? "/ping",
        authorizationHeader: configuredAuthorizationHeader(options),
        fetch: options.fetch,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
        providerName: "Aircall",
      });
    },
  };
}

const AIRCALL_DEFAULT_API_BASE_URL = "https://api.aircall.io/v1";
const AIRCALL_DISPATCHING_STRATEGIES = new Set<AircallDispatchingStrategy>([
  "random",
  "simultaneous",
  "longest_idle",
]);
const AIRCALL_E164_PHONE_NUMBER = /^\+[1-9]\d{1,14}$/;

function configuredBaseUrl(options: Pick<AircallClientOptions, "apiBaseUrl" | "baseUrl">): string {
  return options.baseUrl ?? options.apiBaseUrl ?? AIRCALL_DEFAULT_API_BASE_URL;
}

function configuredAuthorizationHeader(options: Pick<AircallClientOptions, "accessToken" | "authorizationHeader">): string {
  if (options.authorizationHeader) return options.authorizationHeader;
  if (options.accessToken) return `Bearer ${options.accessToken}`;
  throw aircallError(
    "credential-missing",
    "Aircall built-in REST adapter requires accessToken or authorizationHeader; pass rawClient for host-managed execution.",
  );
}

function parseConfiguredHandoffInput(input: unknown): AircallTransferCallInput {
  if (input === undefined) {
    throw aircallError("provider-validation", "Aircall handoff requires a documented call transfer input.");
  }
  return parseAircallTransferCallInput(input);
}

function parseAircallTransferCallInput(input: unknown): AircallTransferCallInput {
  if (!isPlainObject(input)) {
    throw aircallError("provider-validation", "Aircall transfer call input object is required.");
  }
  const callId = positiveIntegerId(input.callId, "callId");
  const userId = input.userId === undefined ? undefined : nonEmptyProviderId(input.userId, "userId");
  const teamId = input.teamId === undefined ? undefined : nonEmptyProviderId(input.teamId, "teamId");
  const number = input.number === undefined ? undefined : e164PhoneNumber(input.number);
  const destinationCount = [userId, teamId, number].filter((value) => value !== undefined).length;
  if (destinationCount !== 1) {
    throw aircallError("provider-validation", "Aircall transfer requires exactly one of userId, teamId, or number.");
  }
  const dispatchingStrategy = aircallDispatchingStrategy(input.dispatchingStrategy);
  if (input.dispatchingStrategy !== undefined && dispatchingStrategy === undefined) {
    throw aircallError("provider-validation", "Aircall dispatchingStrategy must be random, simultaneous, or longest_idle.");
  }
  if (dispatchingStrategy !== undefined && teamId === undefined) {
    throw aircallError("provider-validation", "Aircall dispatchingStrategy is only valid for team transfers.");
  }
  return {
    callId,
    ...(userId !== undefined ? { userId } : {}),
    ...(teamId !== undefined ? { teamId } : {}),
    ...(number !== undefined ? { number } : {}),
    ...(dispatchingStrategy !== undefined ? { dispatchingStrategy } : {}),
  };
}

function aircallTransferCallBody(input: AircallTransferCallInput): ProviderJsonObject {
  return {
    ...(input.userId !== undefined ? { user_id: input.userId } : {}),
    ...(input.teamId !== undefined ? { team_id: input.teamId } : {}),
    ...(input.number !== undefined ? { number: input.number } : {}),
    ...(input.dispatchingStrategy !== undefined ? { dispatching_strategy: input.dispatchingStrategy } : {}),
  };
}

function positiveIntegerId(value: unknown, label: string): string | number {
  if (typeof value === "number" && Number.isInteger(value) && value > 0) return value;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (/^[1-9]\d*$/.test(trimmed)) return trimmed;
  }
  throw aircallError("provider-validation", `Aircall ${label} must be a positive integer.`);
}

function nonEmptyProviderId(value: unknown, label: string): string | number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim().length > 0) return value.trim();
  throw aircallError("provider-validation", `Aircall ${label} must be a non-empty provider identifier.`);
}

function e164PhoneNumber(value: unknown): string {
  if (typeof value === "string" && AIRCALL_E164_PHONE_NUMBER.test(value.trim())) return value.trim();
  throw aircallError("provider-validation", "Aircall transfer number must be an E.164 phone number.");
}

function aircallDispatchingStrategy(value: unknown): AircallDispatchingStrategy | undefined {
  if (typeof value !== "string") return undefined;
  if (AIRCALL_DISPATCHING_STRATEGIES.has(value as AircallDispatchingStrategy)) {
    return value as AircallDispatchingStrategy;
  }
  return undefined;
}

function requireAircallRawClient(rawClient: AircallRawClient): AircallRawClient {
  if (!rawClient || typeof rawClient.transferCall !== "function") {
    throw aircallError("contract-violation", "Aircall rawClient must implement transferCall().");
  }
  return rawClient;
}

function aircallError(code: ConstructorParameters<typeof IntegrationError>[0], message: string): IntegrationError {
  return new IntegrationError(code, message, {
    providerPackageId: "contact-center.aircall",
    provider: "aircall",
  });
}

function isPlainObject(value: unknown): value is ProviderJsonObject {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
