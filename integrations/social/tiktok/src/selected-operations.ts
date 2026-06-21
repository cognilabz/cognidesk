export interface TikTokSelectedOperation {
  uid: string;
  api: "tiktok-open.v2.display" | "tiktok-open.v2.content-posting" | "tiktok-open.v2.research" | "tiktok-business.v1.3";
  method: "GET" | "POST";
  path: string;
  functionName: string;
  sourceUrl: string;
}

export const TIKTOK_SELECTED_OPERATIONS = [
  {
    uid: "tiktok-open:user.info.get",
    api: "tiktok-open.v2.display",
    method: "GET",
    path: "/v2/user/info/",
    functionName: "getUserInfo",
    sourceUrl: "https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info",
  },
  {
    uid: "tiktok-open:video.list",
    api: "tiktok-open.v2.display",
    method: "POST",
    path: "/v2/video/list/",
    functionName: "listVideos",
    sourceUrl: "https://developers.tiktok.com/doc/tiktok-api-v2-video-list",
  },
  {
    uid: "tiktok-open:post.publish.status.fetch",
    api: "tiktok-open.v2.content-posting",
    method: "POST",
    path: "/v2/post/publish/status/fetch/",
    functionName: "fetchPostStatus",
    sourceUrl: "https://developers.tiktok.com/doc/content-posting-api-reference-get-video-status",
  },
  {
    uid: "tiktok-open:research.video.comment.list",
    api: "tiktok-open.v2.research",
    method: "POST",
    path: "/v2/research/video/comment/list/",
    functionName: "queryResearchVideoComments",
    sourceUrl: "https://developers.tiktok.com/doc/research-api-specs-query-video-comments",
  },
  {
    uid: "tiktok-business:business.video.list",
    api: "tiktok-business.v1.3",
    method: "GET",
    path: "/open_api/v1.3/business/video/list/",
    functionName: "listBusinessVideos",
    sourceUrl: "https://business-api.tiktok.com/portal/docs",
  },
  {
    uid: "tiktok-business:business.comment.list",
    api: "tiktok-business.v1.3",
    method: "GET",
    path: "/open_api/v1.3/business/comment/list/",
    functionName: "listBusinessComments",
    sourceUrl: "https://business-api.tiktok.com/portal/docs",
  },
  {
    uid: "tiktok-business:business.comment.reply.create",
    api: "tiktok-business.v1.3",
    method: "POST",
    path: "/open_api/v1.3/business/comment/reply/create/",
    functionName: "replyToBusinessComment",
    sourceUrl: "https://business-api.tiktok.com/portal/docs/reply-to-a-comment/v1.3",
  },
  {
    uid: "tiktok-business:business.comment.create",
    api: "tiktok-business.v1.3",
    method: "POST",
    path: "/open_api/v1.3/business/comment/create/",
    functionName: "createBusinessComment",
    sourceUrl: "https://business-api.tiktok.com/portal/docs",
  },
] satisfies TikTokSelectedOperation[];

export const TIKTOK_SELECTED_OPERATION_COUNT = TIKTOK_SELECTED_OPERATIONS.length;

export const TIKTOK_DIRECT_SLICE_METADATA = {
  strategy: "direct-http-support-slice",
  checkedAt: "2026-06-21",
  source: "official TikTok Developers and TikTok Business API docs",
  sourceVersion: "TikTok Open API v2 + Business API v1.3 public docs checked 2026-06-21",
  allowlistChecksumAlgorithm: "sha256",
  allowlistChecksum: "ec250ef62299d5cee6f9ea5c5db5060409aba55c7ebdb6dca2572c7286a4f3fb",
  selectedOperations: TIKTOK_SELECTED_OPERATIONS,
  apiCoverage: {
    checkedAt: "2026-06-21",
    operationCatalog: "package:src/selected-operations.ts",
  },
  sdkDecision: {
    viableOfficialSdk: false,
    notes: [
      "No official maintained JavaScript/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface.",
      "tiktok-business-api-sdk-official@1.1.3 is a broad Swagger Codegen Business API bundle; it does not cover TikTok Developers Open API, Research API, Content Posting status, or webhooks, and its comment endpoints do not match this adapter's selected /business/comment/* paths.",
    ],
  },
} as const;
