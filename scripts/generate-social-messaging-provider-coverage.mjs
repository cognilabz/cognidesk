import { mkdir, writeFile } from "node:fs/promises";

const generatedAt = "2026-06-18";
const coverageDir = new URL("../docs/provider-coverage/", import.meta.url);

const metaOpenApiUrl = "https://raw.githubusercontent.com/facebook/openapi/main/business-messaging-api_v23.0.yaml";
const rcsDiscoveryUrls = [
  "https://rcsbusinessmessaging.googleapis.com/$discovery/rest?version=v1",
  "https://businesscommunications.googleapis.com/$discovery/rest?version=v1",
];

function toFunctionName(operationId) {
  return operationId
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function parseOpenApiOperations(yamlText) {
  const operations = [];
  let currentPath;
  const lines = yamlText.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const pathMatch = lines[index].match(/^  (\/.+):\s*$/);
    if (pathMatch) {
      currentPath = pathMatch[1];
      continue;
    }
    const methodMatch = lines[index].match(/^    (get|post|put|patch|delete):\s*$/);
    if (currentPath && methodMatch) {
      operations.push({
        method: methodMatch[1].toUpperCase(),
        path: currentPath,
        sourceLine: index + 1,
      });
    }
  }
  return operations;
}

async function fetchStatus(url) {
  const response = await fetch(url);
  return {
    url,
    status: response.status,
    contentType: response.headers.get("content-type") ?? undefined,
    anonymousFetchSucceeded: response.ok,
    note: response.ok
      ? "Fetched during catalog generation."
      : "Official URL exists in provider docs, but anonymous fetch from this environment was rejected.",
  };
}

function operation({ uid, api, method, path, functionName, sourceUrl, notes }) {
  return {
    uid,
    api,
    method,
    path,
    functionName,
    sourceUrl,
    ...(notes ? { notes } : {}),
  };
}

const rcsOperations = [
  operation({
    uid: "rcsbusinessmessaging:files.create.metadata",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/v1/files",
    functionName: "createFile",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create",
  }),
  operation({
    uid: "rcsbusinessmessaging:files.create.upload",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/upload/v1/files",
    functionName: "uploadFile",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create",
    notes: "Google documents upload as an alternate HTTP binding for files.create; the package exposes it as a separate helper.",
  }),
  operation({
    uid: "rcsbusinessmessaging:phones.getCapabilities",
    api: "rcsbusinessmessaging.v1",
    method: "GET",
    path: "/v1/{name=phones/*}/capabilities",
    functionName: "getCapabilities",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones/getCapabilities",
  }),
  operation({
    uid: "rcsbusinessmessaging:phones.agentEvents.create",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/v1/{parent=phones/*}/agentEvents",
    functionName: "sendAgentEvent",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create",
  }),
  operation({
    uid: "rcsbusinessmessaging:phones.agentMessages.create",
    api: "rcsbusinessmessaging.v1",
    method: "POST",
    path: "/v1/{parent=phones/*}/agentMessages",
    functionName: "sendMessage",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create",
  }),
  operation({
    uid: "businesscommunications:brands.agents.get",
    api: "businesscommunications.v1",
    method: "GET",
    path: "/v1/{name=brands/*/agents/*}",
    functionName: "getAgent",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/get",
  }),
  operation({
    uid: "businesscommunications:brands.agents.getLaunch",
    api: "businesscommunications.v1",
    method: "GET",
    path: "/v1/{name=brands/*/agents/*/launch}",
    functionName: "getAgentLaunch",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch",
  }),
  operation({
    uid: "businesscommunications:brands.agents.getVerification",
    api: "businesscommunications.v1",
    method: "GET",
    path: "/v1/{name=brands/*/agents/*/verification}",
    functionName: "getAgentVerification",
    sourceUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification",
  }),
];

const checkedInventories = [
  {
    filename: "instagram-messaging-graph-selected-api-2026-06-18.operations.json",
    packageName: "@cognidesk/integrations",
    spec: {
      source: "checked inventory from official Instagram Messaging and Meta Graph API reference pages",
      machineReadableSpecStatus: "no official public complete Instagram Messaging/Graph OpenAPI spec found in facebook/openapi as of 2026-06-18",
      docs: [
        "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview",
        "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message",
        "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks",
        "https://developers.facebook.com/docs/graph-api/",
      ],
      selectedOperationCount: 6,
    },
    operations: [
      operation({ uid: "instagram-graph:page.messages.create", api: "meta-graph.instagram-messaging", method: "POST", path: "/{Page-ID}/messages", functionName: "sendMessage", sourceUrl: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message" }),
      operation({ uid: "instagram-graph:ig-user.conversations.list", api: "meta-graph.instagram-messaging", method: "GET", path: "/{Instagram-Business-Account-ID}/conversations?platform=instagram", functionName: "listConversations", sourceUrl: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview" }),
      operation({ uid: "instagram-graph:conversation.messages.list", api: "meta-graph.instagram-messaging", method: "GET", path: "/{Conversation-ID}/messages", functionName: "listConversationMessages", sourceUrl: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/overview" }),
      operation({ uid: "instagram-graph:message.get", api: "meta-graph.instagram-messaging", method: "GET", path: "/{Message-ID}", functionName: "getMessage", sourceUrl: "https://developers.facebook.com/docs/graph-api/" }),
      operation({ uid: "instagram-graph:ig-user.get", api: "meta-graph.instagram", method: "GET", path: "/{Instagram-Business-Account-ID}", functionName: "getInstagramBusinessAccount", sourceUrl: "https://developers.facebook.com/docs/instagram-platform/instagram-api-with-facebook-login/business-discovery/" }),
      operation({ uid: "instagram-graph:page.get", api: "meta-graph.page", method: "GET", path: "/{Page-ID}", functionName: "getPage", sourceUrl: "https://developers.facebook.com/docs/graph-api/reference/page/" }),
    ],
  },
  {
    filename: "messenger-platform-graph-selected-api-2026-06-18.operations.json",
    packageName: "@cognidesk/integrations",
    spec: {
      source: "checked inventory from official Messenger Platform and Meta Graph API reference pages",
      machineReadableSpecStatus: "no official public complete Messenger Platform/Graph OpenAPI spec found in facebook/openapi as of 2026-06-18",
      docs: [
        "https://developers.facebook.com/documentation/business-messaging/messenger-platform/",
        "https://developers.facebook.com/docs/messenger-platform/reference/send-api/",
        "https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api/",
        "https://developers.facebook.com/docs/graph-api/reference/page/conversations/",
      ],
      selectedOperationCount: 8,
    },
    operations: [
      operation({ uid: "messenger-graph:page.messages.create", api: "meta-graph.messenger-platform", method: "POST", path: "/{Page-ID}/messages", functionName: "sendMessage", sourceUrl: "https://developers.facebook.com/docs/messenger-platform/reference/send-api/" }),
      operation({ uid: "messenger-graph:page.message_attachments.create", api: "meta-graph.messenger-platform", method: "POST", path: "/{Page-ID}/message_attachments", functionName: "uploadAttachment", sourceUrl: "https://developers.facebook.com/docs/messenger-platform/reference/attachment-upload-api/" }),
      operation({ uid: "messenger-graph:page.pass_thread_control", api: "meta-graph.messenger-platform.legacy-handover", method: "POST", path: "/{Page-ID}/pass_thread_control", functionName: "passThreadControl", sourceUrl: "https://developers.facebook.com/docs/messenger-platform/handover-protocol/pass-thread-control/" }),
      operation({ uid: "messenger-graph:page.take_thread_control", api: "meta-graph.messenger-platform.legacy-handover", method: "POST", path: "/{Page-ID}/take_thread_control", functionName: "takeThreadControl", sourceUrl: "https://developers.facebook.com/docs/messenger-platform/handover-protocol/take-thread-control/" }),
      operation({ uid: "messenger-graph:page.request_thread_control", api: "meta-graph.messenger-platform.legacy-handover", method: "POST", path: "/{Page-ID}/request_thread_control", functionName: "requestThreadControl", sourceUrl: "https://developers.facebook.com/docs/messenger-platform/handover-protocol/request-thread-control/" }),
      operation({ uid: "messenger-graph:page.conversations.list", api: "meta-graph.page", method: "GET", path: "/{Page-ID}/conversations", functionName: "listConversations", sourceUrl: "https://developers.facebook.com/docs/graph-api/reference/page/conversations/" }),
      operation({ uid: "messenger-graph:conversation.messages.list", api: "meta-graph.conversation", method: "GET", path: "/{Conversation-ID}/messages", functionName: "getConversationMessages", sourceUrl: "https://developers.facebook.com/docs/graph-api/reference/conversation/messages/" }),
      operation({ uid: "messenger-graph:page.get", api: "meta-graph.page", method: "GET", path: "/{Page-ID}", functionName: "getPage", sourceUrl: "https://developers.facebook.com/docs/graph-api/reference/page/" }),
    ],
  },
  {
    filename: "tiktok-selected-api-2026-06-18.operations.json",
    packageName: "@cognidesk/integrations",
    spec: {
      source: "checked inventory from official TikTok Developers and TikTok Business API docs",
      machineReadableSpecStatus: "no official public complete TikTok Developers/Business OpenAPI spec found for this mixed Display, Research, Content Posting status, webhook, and Business comments surface as of 2026-06-18",
      docs: [
        "https://developers.tiktok.com/doc/overview",
        "https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info",
        "https://developers.tiktok.com/doc/tiktok-api-v2-video-list",
        "https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status",
        "https://developers.tiktok.com/doc/research-api-specs-query-video-comments",
        "https://developers.tiktok.com/doc/webhooks-overview/",
        "https://developers.tiktok.com/doc/webhooks-verification",
        "https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3",
      ],
      selectedOperationCount: 8,
    },
    operations: [
      operation({ uid: "tiktok-open:user.info.get", api: "tiktok-open.v2.display", method: "GET", path: "/v2/user/info/", functionName: "getUserInfo", sourceUrl: "https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info" }),
      operation({ uid: "tiktok-open:video.list", api: "tiktok-open.v2.display", method: "POST", path: "/v2/video/list/", functionName: "listVideos", sourceUrl: "https://developers.tiktok.com/doc/tiktok-api-v2-video-list" }),
      operation({ uid: "tiktok-open:post.publish.status.fetch", api: "tiktok-open.v2.content-posting", method: "POST", path: "/v2/post/publish/status/fetch/", functionName: "fetchPostStatus", sourceUrl: "https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status" }),
      operation({ uid: "tiktok-open:research.video.comment.list", api: "tiktok-open.v2.research", method: "POST", path: "/v2/research/video/comment/list/", functionName: "queryResearchVideoComments", sourceUrl: "https://developers.tiktok.com/doc/research-api-specs-query-video-comments" }),
      operation({ uid: "tiktok-business:business.video.list", api: "tiktok-business.v1.3", method: "GET", path: "/open_api/v1.3/business/video/list/", functionName: "listBusinessVideos", sourceUrl: "https://business-api.tiktok.com/portal/docs" }),
      operation({ uid: "tiktok-business:business.comment.list", api: "tiktok-business.v1.3", method: "GET", path: "/open_api/v1.3/business/comment/list/", functionName: "listBusinessComments", sourceUrl: "https://business-api.tiktok.com/portal/docs" }),
      operation({ uid: "tiktok-business:business.comment.reply.create", api: "tiktok-business.v1.3", method: "POST", path: "/open_api/v1.3/business/comment/reply/create/", functionName: "replyToBusinessComment", sourceUrl: "https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3" }),
      operation({ uid: "tiktok-business:business.comment.create", api: "tiktok-business.v1.3", method: "POST", path: "/open_api/v1.3/business/comment/create/", functionName: "createBusinessComment", sourceUrl: "https://business-api.tiktok.com/portal/docs" }),
    ],
  },
];

async function writeJson(filename, value) {
  await writeFile(new URL(filename, coverageDir), `${JSON.stringify(value, null, 2)}\n`);
}

await mkdir(coverageDir, { recursive: true });

const discoveryFetches = await Promise.all(rcsDiscoveryUrls.map(fetchStatus));
await writeJson("rcs-selected-api-2026-06-18.operations.json", {
  generatedAt,
  packageName: "@cognidesk/integrations",
  spec: {
    source: "official Google RCS for Business REST reference plus documented Discovery URLs",
    docs: [
      "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest",
      "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest",
    ],
    discoveryFetches,
    documentedMethodCountsFromReference: {
      rcsBusinessMessagingApi: 7,
      businessCommunicationsApi: 31,
      total: 38,
    },
    selectedOperationCount: rcsOperations.length,
    machineReadableSpecStatus: "Discovery documents are documented by Google, but anonymous fetches returned 403 in this environment; selected operations were cataloged from the official public REST reference pages.",
  },
  operations: rcsOperations,
  excludedSurfaces: [
    "RCS agent message revoke/delete",
    "Dialogflow message creation",
    "users.batchGet",
    "brand and agent lifecycle mutations",
    "launch and verification request/update workflows",
    "agent integrations, attachments delete, analytics, partners, regions, and tester management",
  ],
});

const metaResponse = await fetch(metaOpenApiUrl);
if (!metaResponse.ok) {
  throw new Error(`Failed to fetch Meta OpenAPI: ${metaResponse.status}`);
}
const metaYaml = await metaResponse.text();
const metaOperations = parseOpenApiOperations(metaYaml);
const whatsappSelected = [
  operation({ uid: "whatsapp-openapi:phone.messages.create", api: "meta-business-messaging.v23.0", method: "POST", path: "/{Version}/{Phone-Number-ID}/messages", functionName: "sendMessage", sourceUrl: metaOpenApiUrl }),
  operation({ uid: "whatsapp-openapi:phone.media.create", api: "meta-business-messaging.v23.0", method: "POST", path: "/{Version}/{Phone-Number-ID}/media", functionName: "uploadMedia", sourceUrl: metaOpenApiUrl }),
  operation({ uid: "whatsapp-openapi:media.get", api: "meta-business-messaging.v23.0", method: "GET", path: "/{Version}/{Media-ID}", functionName: "getMedia", sourceUrl: metaOpenApiUrl }),
  operation({ uid: "whatsapp-openapi:media-url.get", api: "meta-business-messaging.v23.0", method: "GET", path: "/{Version}/{Media-URL}", functionName: "downloadMedia", sourceUrl: metaOpenApiUrl }),
  operation({ uid: "whatsapp-openapi:phone.get", api: "meta-business-messaging.v23.0", method: "GET", path: "/{Version}/{Phone-Number-ID}", functionName: "getPhoneNumber", sourceUrl: metaOpenApiUrl }),
  operation({ uid: "whatsapp-openapi:phone.whatsapp_business_profile.get", api: "meta-business-messaging.v23.0", method: "GET", path: "/{Version}/{Phone-Number-ID}/whatsapp_business_profile", functionName: "getBusinessProfile", sourceUrl: metaOpenApiUrl }),
  operation({ uid: "whatsapp-openapi:phone.whatsapp_business_profile.update", api: "meta-business-messaging.v23.0", method: "POST", path: "/{Version}/{Phone-Number-ID}/whatsapp_business_profile", functionName: "updateBusinessProfile", sourceUrl: metaOpenApiUrl }),
];

await writeJson("whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json", {
  generatedAt,
  packageName: "@cognidesk/integrations",
  spec: {
    source: metaOpenApiUrl,
    repository: "https://github.com/facebook/openapi",
    docs: [
      "https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started",
      "https://www.postman.com/meta/whatsapp-business-platform/overview/",
    ],
    openapi: "3.1.0",
    version: "v23.0",
    pathCount: new Set(metaOperations.map((item) => item.path)).size,
    operationCount: metaOperations.length,
    selectedOperationCount: whatsappSelected.length,
    fullMetaGraphCoverage: false,
    note: "The official Meta OpenAPI repository currently contains a WhatsApp Business Messaging specification, not a complete Meta Graph, Instagram Messaging, or Messenger Platform OpenAPI inventory.",
  },
  operations: whatsappSelected,
  excludedOperationCount: metaOperations.length - whatsappSelected.length,
  excludedSurfaces: [
    "WhatsApp template management",
    "Flows",
    "commerce settings",
    "calling, groups, QR codes, encrypted messages, registration, settings, compliance, pre-verified numbers, partners, WABA management, billing/credits, and embedded signup",
    "broader Meta Graph APIs outside the Business Messaging OpenAPI file",
  ],
});

for (const inventory of checkedInventories) {
  await writeJson(inventory.filename, {
    generatedAt,
    packageName: inventory.packageName,
    spec: inventory.spec,
    operations: inventory.operations,
    excludedSurfaces: [
      "provider platform surfaces outside the local package's selected support-workflow adapter scope",
      "full platform administration, analytics, ads/marketing, commerce/shop, publishing, discovery, and app-review/product-approval surfaces unless explicitly listed in operations",
    ],
  });
}

console.log(JSON.stringify({
  generatedAt,
  files: [
    { file: "rcs-selected-api-2026-06-18.operations.json", operations: rcsOperations.length },
    { file: "whatsapp-business-messaging-openapi-v23-selected-api-2026-06-18.operations.json", operations: whatsappSelected.length, sourceOperations: metaOperations.length },
    ...checkedInventories.map((inventory) => ({ file: inventory.filename, operations: inventory.operations.length })),
  ],
}, null, 2));
