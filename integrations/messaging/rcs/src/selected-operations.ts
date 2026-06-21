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

export const RCS_DIRECT_SLICE_METADATA = {
  strategy: "direct-http-support-slice",
  checkedAt: "2026-06-21",
  source: "official Google RCS for Business REST reference plus documented Discovery URLs",
  sourceVersion: "rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21",
  allowlistChecksumAlgorithm: "sha256",
  allowlistChecksum: "36c458c94ac8c4d639872098863ab9b9287970aa3af245a17f2f4f9ff3b4bda9",
  selectedOperations: RCS_SELECTED_OPERATIONS,
  apiCoverage: {
    checkedAt: "2026-06-21",
    operationCatalog: "package:src/selected-operations.ts",
  },
  sdkDecision: {
    viableOfficialSdk: false,
    notes: [
      "googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime.",
      "@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization.",
    ],
  },
} as const;
