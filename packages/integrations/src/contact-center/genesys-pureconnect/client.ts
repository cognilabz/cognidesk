import type {
  GenesysPureConnectContactCenterClient,
  GenesysPureConnectContactCenterClientOptions,
  GenesysPureConnectMessagingSubscriptionInput,
  GenesysPureConnectRequestInput,
  GenesysPureConnectSessionRequestInput,
} from "./contracts.js";
import {
  genesysPureConnectRequest,
  pureConnectRequestInput,
  pureConnectSessionHeaders,
  type GenesysPureConnectRequestInternalInput,
} from "./request.js";

export function createGenesysPureConnectContactCenterClient(
  options: GenesysPureConnectContactCenterClientOptions,
): GenesysPureConnectContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const request = ((input: GenesysPureConnectRequestInput) => {
    const requestInput = pureConnectRequestInput(options, fetchImpl, input);
    return input.returnResponse
      ? genesysPureConnectRequest({ ...requestInput, returnResponse: true })
      : genesysPureConnectRequest({ ...requestInput, returnResponse: false });
  }) as GenesysPureConnectContactCenterClient["request"];
  const sessionRequest = ((input: GenesysPureConnectSessionRequestInput) => {
    const requestInput: GenesysPureConnectRequestInternalInput = pureConnectRequestInput(options, fetchImpl, input);
    const sessionHeaders = pureConnectSessionHeaders(options, input);
    const headers = { ...sessionHeaders, ...(input.headers ?? {}) };
    return input.returnResponse
      ? genesysPureConnectRequest({ ...requestInput, headers, returnResponse: true })
      : genesysPureConnectRequest({ ...requestInput, headers, returnResponse: false });
  }) as GenesysPureConnectContactCenterClient["sessionRequest"];

  return {
    request,
    sessionRequest,
    async createConnection(input) {
      const search = new URLSearchParams();
      if (input.include?.length) search.set("include", input.include.join(","));
      return genesysPureConnectRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: `/icws/connection${search.size > 0 ? `?${search.toString()}` : ""}`,
        body: input.payload,
        acceptLanguage: input.acceptLanguage,
      });
    },
    async createInteraction(input) {
      return sessionRequest({
        ...input,
        method: "POST",
        path: "/icws/{sessionId}/interactions",
        body: input.payload,
      });
    },
    async getInteraction(input) {
      return sessionRequest({
        ...input,
        method: "GET",
        path: `/icws/{sessionId}/interactions/${encodeURIComponent(input.interactionId)}${queryString(input.query)}`,
      });
    },
    async updateInteraction(input) {
      return sessionRequest({
        ...input,
        method: "POST",
        path: `/icws/{sessionId}/interactions/${encodeURIComponent(input.interactionId)}`,
        body: input.payload,
      });
    },
    async createConference(input) {
      return sessionRequest({
        ...input,
        method: "POST",
        path: "/icws/{sessionId}/interactions/conferences",
        body: input.payload,
      });
    },
    async createConsult(input) {
      return sessionRequest({
        ...input,
        method: "POST",
        path: `/icws/{sessionId}/interactions/${encodeURIComponent(input.interactionId)}/consult`,
        body: input.payload,
      });
    },
    async getMessages(input = {}) {
      return sessionRequest({
        ...input,
        method: "GET",
        path: "/icws/{sessionId}/messaging/messages",
      });
    },
    async subscribeInteraction(input) {
      return sessionRequest({
        ...input,
        method: "PUT",
        path: pureConnectInteractionSubscriptionPath(input),
        body: input.payload ?? {},
      });
    },
    async unsubscribeInteraction(input) {
      return sessionRequest({
        ...input,
        method: "DELETE",
        path: pureConnectInteractionSubscriptionPath(input),
      });
    },
    async getRecordingExportUri(input) {
      const attachmentPath = input.attachmentId === undefined ? "" : `/${encodeURIComponent(String(input.attachmentId))}`;
      return sessionRequest({
        ...input,
        method: "GET",
        path: `/icws/{sessionId}/recordings/${encodeURIComponent(input.recordingId)}${attachmentPath}/export-uri`,
      });
    },
    async getConfigurationUser(input) {
      return sessionRequest({
        ...input,
        method: "GET",
        path: `/icws/{sessionId}/configuration/users/${encodeURIComponent(input.userId)}${queryString(
          input.select?.length ? { select: input.select.join(",") } : undefined,
        )}`,
      });
    },
    async createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) {
        throw new Error("Genesys PureConnect handoff path must be provided by SDK configuration.");
      }
      return genesysPureConnectRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async readiness() {
      if (!options.readinessPath) {
        throw new Error("Genesys PureConnect readinessPath must be configured by the SDK app; no official default GET readiness path is assumed.");
      }
      return genesysPureConnectRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath,
      });
    },
  };
}

function pureConnectInteractionSubscriptionPath(input: GenesysPureConnectMessagingSubscriptionInput) {
  const mediaType = input.mediaType ? `/${input.mediaType}` : "";
  return `/icws/{sessionId}/messaging/subscriptions/interactions/${encodeURIComponent(input.interactionId)}${mediaType}`;
}

function queryString(query?: Record<string, string | number | boolean | undefined>) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined) params.set(key, String(value));
  }
  return params.size > 0 ? `?${params.toString()}` : "";
}
