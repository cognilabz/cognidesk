import type {
  TikTokApiResponse,
  TikTokCommentList,
  TikTokCommentReplyInput,
  TikTokBusinessVideoListInput,
  TikTokGeneralDmSupport,
  TikTokResearchCommentListInput,
  TikTokSocialClient,
  TikTokSocialClientOptions,
  TikTokSocialJsonObject,
  TikTokSocialProviderClient,
  TikTokUserInfo,
  TikTokVideoList,
  TikTokVideoListInput,
} from "./contracts.js";
import {
  businessUrl,
  stripUndefined,
  tiktokBusinessRequest,
  tiktokOpenRequest,
} from "./request.js";

export function createTikTokSocialClient(options: TikTokSocialClientOptions = {}): TikTokSocialClient {
  const providerClient = requireTikTokSocialProviderClient(
    options.providerClient ?? createTikTokRestProviderClient(options),
  );

  const client: TikTokSocialClient = {
    providerClient,
    getUserInfo(fields = defaultUserFields) {
      return providerClient.getUserInfo(fields);
    },
    listVideos(input = {}) {
      return providerClient.listVideos(withDefaultVideoFields(input));
    },
    fetchPostStatus(input) {
      return providerClient.fetchPostStatus(input);
    },
    queryResearchVideoComments(input) {
      validateResearchCommentQuery(input);
      return providerClient.queryResearchVideoComments(withDefaultCommentFields(input));
    },
    listBusinessVideos(input = {}) {
      return providerClient.listBusinessVideos(
        withConfiguredBusinessId(withDefaultBusinessVideoFields(input), options.businessId),
      );
    },
    listBusinessComments(input) {
      return providerClient.listBusinessComments(withConfiguredBusinessId(input, options.businessId));
    },
    replyToBusinessComment(input) {
      return providerClient.replyToBusinessComment(withConfiguredBusinessId(input, options.businessId));
    },
    createBusinessComment(input) {
      return providerClient.createBusinessComment(withConfiguredBusinessId(input, options.businessId));
    },
  };

  return client;
}

export function getTikTokGeneralDmSupport(): TikTokGeneralDmSupport {
  return {
    supported: false,
    reason: "TikTok's public developer APIs do not currently expose a general support direct-message inbox for arbitrary customer DMs.",
    alternatives: [
      "Use approved comment management primitives for owned Business accounts.",
      "Use Display API, Research API, and webhook events for read/event surfaces where approved.",
      "Route TikTok users to SDK-user-configured supported channels when direct messaging is required.",
    ],
  };
}

export function createTikTokBusinessCommentReply(
  input: TikTokCommentReplyInput,
  defaultBusinessId?: string,
) {
  const businessId = input.businessId ?? defaultBusinessId;
  if (!businessId) throw new Error("TikTok business ID is required to reply to a Business comment.");
  return stripUndefined({
    business_id: businessId,
    video_id: input.videoId,
    comment_id: input.commentId,
    text: input.text,
    ...(input.additionalFields ?? {}),
  });
}

export function createTikTokRestProviderClient(options: TikTokSocialClientOptions): TikTokSocialProviderClient {
  const token = requireConfiguredTikTokOption(options.accessToken, "accessToken");
  const openApiBaseUrl = (options.openApiBaseUrl ?? options.baseUrl ?? "https://open.tiktokapis.com").replace(/\/+$/, "");
  const businessApiBaseUrl = (options.businessApiBaseUrl ?? "https://business-api.tiktok.com").replace(/\/+$/, "");
  const businessApiVersion = options.businessApiVersion ?? "v1.3";
  const requestOptions = {
    token,
    fetch: options.fetch ?? fetch,
    ...(options.signal ? { signal: options.signal } : {}),
    ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
    ...(options.retry !== undefined ? { retry: options.retry } : {}),
  };

  return {
    getUserInfo(fields = defaultUserFields) {
      const url = new URL("/v2/user/info/", openApiBaseUrl);
      url.searchParams.set("fields", fields.join(","));
      return tiktokOpenRequest<TikTokApiResponse<TikTokUserInfo>>({
        url,
        method: "GET",
        options: requestOptions,
      });
    },
    listVideos(input = {}) {
      const url = new URL("/v2/video/list/", openApiBaseUrl);
      url.searchParams.set("fields", (input.fields ?? defaultVideoFields).join(","));
      return tiktokOpenRequest<TikTokApiResponse<TikTokVideoList>>({
        url,
        method: "POST",
        options: requestOptions,
        body: stripUndefined({
          cursor: input.cursor,
          max_count: input.maxCount,
        }),
      });
    },
    fetchPostStatus(input) {
      return tiktokOpenRequest<TikTokApiResponse>({
        url: new URL("/v2/post/publish/status/fetch/", openApiBaseUrl),
        method: "POST",
        options: requestOptions,
        body: { publish_id: input.publishId },
      });
    },
    queryResearchVideoComments(input) {
      validateResearchCommentQuery(input);
      const url = new URL("/v2/research/video/comment/list/", openApiBaseUrl);
      url.searchParams.set("fields", (input.fields ?? defaultCommentFields).join(","));
      return tiktokOpenRequest<TikTokApiResponse<TikTokCommentList>>({
        url,
        method: "POST",
        options: requestOptions,
        body: stripUndefined({
          video_id: input.videoId,
          comment_id: input.commentId,
          max_count: input.maxCount,
          cursor: input.cursor,
        }),
      });
    },
    listBusinessVideos(input = {}) {
      const businessId = input.businessId ?? options.businessId;
      if (!businessId) throw new Error("TikTok business ID is required to list Business videos.");
      const url = businessUrl(businessApiBaseUrl, businessApiVersion, "/business/video/list/");
      url.searchParams.set("business_id", businessId);
      url.searchParams.set("fields", JSON.stringify(input.fields ?? defaultBusinessVideoFields));
      if (input.filters) url.searchParams.set("filters", JSON.stringify(input.filters));
      return tiktokBusinessRequest<TikTokApiResponse>({
        url,
        method: "GET",
        options: requestOptions,
      });
    },
    listBusinessComments(input) {
      const businessId = input.businessId ?? options.businessId;
      if (!businessId) throw new Error("TikTok business ID is required to list Business comments.");
      const url = businessUrl(businessApiBaseUrl, businessApiVersion, "/business/comment/list/");
      url.searchParams.set("business_id", businessId);
      url.searchParams.set("video_id", input.videoId);
      if (input.status) url.searchParams.set("status", input.status);
      if (input.cursor !== undefined) url.searchParams.set("cursor", String(input.cursor));
      if (input.pageSize !== undefined) url.searchParams.set("page_size", String(input.pageSize));
      if (input.fields?.length) url.searchParams.set("fields", JSON.stringify(input.fields));
      return tiktokBusinessRequest<TikTokApiResponse<TikTokCommentList>>({
        url,
        method: "GET",
        options: requestOptions,
      });
    },
    replyToBusinessComment(input) {
      return tiktokBusinessRequest<TikTokApiResponse>({
        url: businessUrl(businessApiBaseUrl, businessApiVersion, "/business/comment/reply/create/"),
        method: "POST",
        options: requestOptions,
        body: createTikTokBusinessCommentReply(input, options.businessId),
      });
    },
    createBusinessComment(input) {
      const businessId = input.businessId ?? options.businessId;
      if (!businessId) throw new Error("TikTok business ID is required to create a Business comment.");
      return tiktokBusinessRequest<TikTokApiResponse>({
        url: businessUrl(businessApiBaseUrl, businessApiVersion, "/business/comment/create/"),
        method: "POST",
        options: requestOptions,
        body: stripUndefined({
          business_id: businessId,
          video_id: input.videoId,
          text: input.text,
          ...(input.additionalFields ?? {}),
        }),
      });
    },
  };
}

function requireTikTokSocialProviderClient(client: TikTokSocialProviderClient) {
  for (const method of requiredProviderClientMethods) {
    if (typeof client[method] !== "function") {
      throw new Error(`TikTok provider client must implement ${method}().`);
    }
  }
  return client;
}

function validateResearchCommentQuery(input: TikTokResearchCommentListInput) {
  if (!input.videoId && !input.commentId) {
    throw new Error("TikTok Research comment query requires videoId or commentId.");
  }
  if (input.videoId && input.commentId) {
    throw new Error("TikTok Research comment query accepts either videoId or commentId, not both.");
  }
}

function withDefaultVideoFields(input: TikTokVideoListInput): TikTokVideoListInput {
  return input.fields ? input : { ...input, fields: defaultVideoFields };
}

function withDefaultCommentFields(input: TikTokResearchCommentListInput): TikTokResearchCommentListInput {
  return input.fields ? input : { ...input, fields: defaultCommentFields };
}

function withDefaultBusinessVideoFields(input: TikTokBusinessVideoListInput): TikTokBusinessVideoListInput {
  return input.fields ? input : { ...input, fields: defaultBusinessVideoFields };
}

function withConfiguredBusinessId<T extends { businessId?: string }>(input: T, businessId: string | undefined): T {
  if (!businessId || input.businessId) return input;
  return { ...input, businessId } as T;
}

function requireConfiguredTikTokOption(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`TikTok built-in REST adapter requires ${name}; pass ${name} or providerClient.`);
  }
  return value;
}

const requiredProviderClientMethods = [
  "getUserInfo",
  "listVideos",
  "fetchPostStatus",
  "queryResearchVideoComments",
  "listBusinessVideos",
  "listBusinessComments",
  "replyToBusinessComment",
  "createBusinessComment",
] as const;

const defaultUserFields = [
  "open_id",
  "union_id",
  "avatar_url",
  "display_name",
  "username",
  "profile_deep_link",
  "is_verified",
];

const defaultVideoFields = [
  "id",
  "create_time",
  "cover_image_url",
  "share_url",
  "video_description",
  "duration",
  "title",
  "like_count",
  "comment_count",
  "share_count",
  "view_count",
];

const defaultCommentFields = [
  "id",
  "video_id",
  "text",
  "like_count",
  "reply_count",
  "parent_comment_id",
  "create_time",
];

const defaultBusinessVideoFields = [
  "item_id",
  "thumbnail_url",
  "caption",
  "likes",
  "comments",
  "shares",
  "video_views",
  "create_time",
];
