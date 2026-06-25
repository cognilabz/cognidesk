import { createHash } from "node:crypto";

export interface RcsSelectedOperation {
  uid: string;
  api: "rcsbusinessmessaging.v1" | "businesscommunications.v1";
  method: "GET" | "POST";
  path: string;
  functionName: string;
  sourceUrl: string;
  notes?: string;
}

export const RCS_SELECTED_OPERATIONS = [
  {
    uid: "rcsbusinessmessaging:files.create.metadata",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/v1/files",
    functionName: "createFile",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create",
  },
  {
    uid: "rcsbusinessmessaging:files.create.upload",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/upload/v1/files",
    functionName: "uploadFile",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create",
    notes: "Google documents upload as an alternate HTTP binding for files.create; the package exposes it as a separate helper.",
  },
  {
    uid: "rcsbusinessmessaging:phones.getCapabilities",
    api: "rcsbusinessmessaging.v1",
    method: "GET",
    path: "/v1/{name=phones/*}/capabilities",
    functionName: "getCapabilities",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones/getCapabilities",
  },
  {
    uid: "rcsbusinessmessaging:phones.agentEvents.create",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/v1/{parent=phones/*}/agentEvents",
    functionName: "sendAgentEvent",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create",
  },
  {
    uid: "rcsbusinessmessaging:phones.agentMessages.create",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/v1/{parent=phones/*}/agentMessages",
    functionName: "sendMessage",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create",
  },
  {
    uid: "businesscommunications:brands.agents.get",
    api: "businesscommunications.v1",
    method: "GET",
    path: "/v1/{name=brands/*/agents/*}",
    functionName: "getAgent",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/get",
  },
  {
    uid: "businesscommunications:brands.agents.getLaunch",
    api: "businesscommunications.v1",
    method: "GET",
    path: "/v1/{name=brands/*/agents/*/launch}",
    functionName: "getAgentLaunch",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch",
  },
  {
    uid: "businesscommunications:brands.agents.getVerification",
    api: "businesscommunications.v1",
    method: "GET",
    path: "/v1/{name=brands/*/agents/*/verification}",
    functionName: "getAgentVerification",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification",
  },
] satisfies RcsSelectedOperation[];

export const RCS_SELECTED_OPERATION_COUNT = RCS_SELECTED_OPERATIONS.length;

export const RCS_HOST_CLIENT_METADATA = {
  strategy: "provider-rest-adapter",
  checkedAt: "2026-06-25",
  source: "official Google RCS for Business REST reference plus provider REST adapter contract",
  sourceVersion: "rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-25",
  allowlistChecksumAlgorithm: "sha256",
  allowlistChecksum: selectedOperationsChecksum(RCS_SELECTED_OPERATIONS),
  selectedOperations: RCS_SELECTED_OPERATIONS,
  apiCoverage: {
    checkedAt: "2026-06-25",
    operationCatalog: "package:src/selected-operations.ts",
  },
  sdkDecision: {
    viableOfficialSdk: false,
    defaultClient: "provider-rest-adapter",
    notes: [
      "@google/rcsbusinessmessaging is an official Google Node.js client for RBM messaging, but the selected support slice also includes Business Communications readiness operations and SDK-tunable REST/base URL options.",
      "This package ships a built-in REST adapter for the selected RCS and Business Communications operations, including accessToken, apiKey, tokenProvider, and service-account credential paths.",
      "Hosts may still inject RcsMessagingProviderClient when they want to wrap Google's SDK or another approved provider runtime.",
    ],
  },
} as const;

function selectedOperationsChecksum(operations: readonly RcsSelectedOperation[]): string {
  const serialized = JSON.stringify(operations);
  if (serialized === undefined) {
    throw new Error("RCS selected operations could not be serialized for checksum generation.");
  }
  return createHash("sha256").update(serialized).digest("hex");
}
