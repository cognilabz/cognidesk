import {
  createEightByEightContactCenterApiGeneratedClient,
  type EightByEightGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_ID,
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_LEGACY_UID,
  EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_UID,
  type EightByEightContactCenterApiOperationId,
  type EightByEightContactCenterApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  EightByEightContactCenterClient,
  EightByEightContactCenterClientOptions,
  EightByEightOperationRequestInput,
  EightByEightResource,
} from "./contracts.js";
import { eightByEightRequest } from "./request.js";

export function createEightByEightContactCenterClient(
  options: EightByEightContactCenterClientOptions,
): EightByEightContactCenterClient {
  const fetchImpl = options.fetch ?? fetch;
  const requestOperation = <T = EightByEightResource>(
    operationUidOrId: EightByEightContactCenterApiOperationUid | EightByEightContactCenterApiOperationId | string,
    input: EightByEightOperationRequestInput = {},
  ) => {
    const operation = EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_ID.get(operationUidOrId)
      ?? EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_LEGACY_UID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown 8x8 Contact Center operation '${operationUidOrId}'.`);
    return eightByEightRequest<T>({
      options,
      fetch: fetchImpl,
      method: operation.method,
      path: operation.path,
      input,
    });
  };
  const fullApi = createEightByEightContactCenterApiGeneratedClient(requestOperation as EightByEightGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as EightByEightGeneratedOperationCaller,
    async createHandoff(input) {
      const path = input.path ?? options.defaultHandoffPath;
      if (!path) throw new Error("8x8 Contact Center handoff path must be configured by the SDK app.");
      return eightByEightRequest({
        options,
        fetch: fetchImpl,
        method: "POST",
        path,
        input: {
          body: input.payload,
          idempotencyKey: input.idempotencyKey,
        },
      });
    },
    async placePhoneCall(input) {
      return requestOperation("placePhoneCall", {
        pathParams: { tenantId: input.tenantId },
        body: input.payload,
        idempotencyKey: input.idempotencyKey,
      });
    },
    async setTransactionCodes(input) {
      return requestOperation("addTransactionCodes", {
        pathParams: { tenantId: input.tenantId, interactionId: input.interactionId, agentId: input.agentId },
        body: input.payload,
      });
    },
    async endCall(input) {
      return requestOperation("deletePhoneInteraction", {
        pathParams: { tenantId: input.tenantId, interactionId: input.interactionId },
      });
    },
    async hangupAgentCall(input) {
      return requestOperation("hangupAgentHandlingInteraction", {
        pathParams: { tenantId: input.tenantId, interactionId: input.interactionId, agentId: input.agentId },
      });
    },
    async releaseAgentLine(input) {
      if (input.lineNo === undefined) throw new Error("8x8 lineNo is required to release one agent line.");
      return requestOperation("hangupAgentLine", {
        pathParams: { tenantId: input.tenantId, agentId: input.agentId, lineNo: input.lineNo },
      });
    },
    async releaseAgentLines(input) {
      return requestOperation("hangupAgentLines", {
        pathParams: { tenantId: input.tenantId, agentId: input.agentId },
      });
    },
    async listAgentStatuses(input) {
      return requestOperation("getagentsstatus", {
        pathParams: { tenantId: input.tenantId },
        query: input.query,
      });
    },
    async getAgentStatus(input) {
      return requestOperation("getagentstatus", {
        pathParams: { tenantId: input.tenantId, agentId: input.agentId },
      });
    },
    async setAgentStatusesBulk(input) {
      return requestOperation("setagentsstatuses", {
        pathParams: { tenantId: input.tenantId },
        body: input.payload,
      });
    },
    async setAgentStatus(input) {
      return requestOperation("setagentstatus", {
        pathParams: { tenantId: input.tenantId, agentId: input.agentId },
        body: input.payload,
      });
    },
    async readiness() {
      if (!options.readinessPath) throw new Error("8x8 Contact Center readiness path must be configured by the SDK app.");
      return eightByEightRequest({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: options.readinessPath,
      });
    },
  };
}
