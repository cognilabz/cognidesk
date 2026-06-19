// Generated endpoint chunk for PostmarkFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  PostmarkGeneratedOperationCaller,
  PostmarkFullApiOperationArgs,
  PostmarkFullApiOperationInput,
  PostmarkFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { PostmarkFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const PostmarkFullApiStatsOperationKeys = [
  "server:GET:/stats/outbound/bounces",
  "server:GET:/stats/outbound/clicks",
  "server:GET:/stats/outbound/clicks/browserfamilies",
  "server:GET:/stats/outbound/clicks/location",
  "server:GET:/stats/outbound/clicks/platforms",
  "server:GET:/stats/outbound/opens",
  "server:GET:/stats/outbound/opens/emailclients",
  "server:GET:/stats/outbound/opens/platforms",
  "server:GET:/stats/outbound",
  "server:GET:/stats/outbound/sends",
  "server:GET:/stats/outbound/spam",
  "server:GET:/stats/outbound/tracked"
] as const;
export type PostmarkFullApiStatsOperationKey = typeof PostmarkFullApiStatsOperationKeys[number];
// End hardened literal operation keys.

export interface PostmarkFullApiStatsOperationPathParamMap {
  "server:GET:/stats/outbound/bounces": {};
  "server:GET:/stats/outbound/clicks": {};
  "server:GET:/stats/outbound/clicks/browserfamilies": {};
  "server:GET:/stats/outbound/clicks/location": {};
  "server:GET:/stats/outbound/clicks/platforms": {};
  "server:GET:/stats/outbound/opens": {};
  "server:GET:/stats/outbound/opens/emailclients": {};
  "server:GET:/stats/outbound/opens/platforms": {};
  "server:GET:/stats/outbound": {};
  "server:GET:/stats/outbound/sends": {};
  "server:GET:/stats/outbound/spam": {};
  "server:GET:/stats/outbound/tracked": {};
}

export interface PostmarkFullApiStatsOperationRequestMap {
  "server:GET:/stats/outbound/bounces": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/bounces">;
  "server:GET:/stats/outbound/clicks": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/clicks">;
  "server:GET:/stats/outbound/clicks/browserfamilies": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/clicks/browserfamilies">;
  "server:GET:/stats/outbound/clicks/location": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/clicks/location">;
  "server:GET:/stats/outbound/clicks/platforms": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/clicks/platforms">;
  "server:GET:/stats/outbound/opens": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/opens">;
  "server:GET:/stats/outbound/opens/emailclients": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/opens/emailclients">;
  "server:GET:/stats/outbound/opens/platforms": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/opens/platforms">;
  "server:GET:/stats/outbound": PostmarkFullApiOperationInput<"server:GET:/stats/outbound">;
  "server:GET:/stats/outbound/sends": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/sends">;
  "server:GET:/stats/outbound/spam": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/spam">;
  "server:GET:/stats/outbound/tracked": PostmarkFullApiOperationInput<"server:GET:/stats/outbound/tracked">;
}

export interface PostmarkFullApiStatsGeneratedClient {
  GetBounceCounts(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/bounces">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/bounces"]>;
  GetOutboundClickCounts(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/clicks"]>;
  GetOutboundClickCountsByBrowserFamily(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks/browserfamilies">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/clicks/browserfamilies"]>;
  GetOutboundClickCountsByLocation(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks/location">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/clicks/location"]>;
  GetOutboundClickCountsByPlatform(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks/platforms">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/clicks/platforms"]>;
  GetOutboundOpenCounts(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/opens">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/opens"]>;
  GetOutboundOpenCountsByEmailClient(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/opens/emailclients">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/opens/emailclients"]>;
  GetOutboundOpenCountsByPlatform(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/opens/platforms">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/opens/platforms"]>;
  GetOutboundOverviewStatistics(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound"]>;
  GetSentCounts(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/sends">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/sends"]>;
  GetSpamComplaints(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/spam">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/spam"]>;
  GetTrackedEmailCounts(...args: PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/tracked">): Promise<PostmarkFullApiOperationResponseMap["server:GET:/stats/outbound/tracked"]>;
}

export const PostmarkFullApiStatsGeneratedFunctionNames = [
  "GetBounceCounts",
  "GetOutboundClickCounts",
  "GetOutboundClickCountsByBrowserFamily",
  "GetOutboundClickCountsByLocation",
  "GetOutboundClickCountsByPlatform",
  "GetOutboundOpenCounts",
  "GetOutboundOpenCountsByEmailClient",
  "GetOutboundOpenCountsByPlatform",
  "GetOutboundOverviewStatistics",
  "GetSentCounts",
  "GetSpamComplaints",
  "GetTrackedEmailCounts"
] as const satisfies readonly (keyof PostmarkFullApiStatsGeneratedClient)[];

export function createPostmarkFullApiStatsGeneratedClient(
  callOperation: PostmarkGeneratedOperationCaller,
): PostmarkFullApiStatsGeneratedClient {
  return {
    GetBounceCounts: (...args) => callOperation("server:GET:/stats/outbound/bounces", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/bounces">)),
    GetOutboundClickCounts: (...args) => callOperation("server:GET:/stats/outbound/clicks", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks">)),
    GetOutboundClickCountsByBrowserFamily: (...args) => callOperation("server:GET:/stats/outbound/clicks/browserfamilies", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks/browserfamilies">)),
    GetOutboundClickCountsByLocation: (...args) => callOperation("server:GET:/stats/outbound/clicks/location", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks/location">)),
    GetOutboundClickCountsByPlatform: (...args) => callOperation("server:GET:/stats/outbound/clicks/platforms", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/clicks/platforms">)),
    GetOutboundOpenCounts: (...args) => callOperation("server:GET:/stats/outbound/opens", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/opens">)),
    GetOutboundOpenCountsByEmailClient: (...args) => callOperation("server:GET:/stats/outbound/opens/emailclients", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/opens/emailclients">)),
    GetOutboundOpenCountsByPlatform: (...args) => callOperation("server:GET:/stats/outbound/opens/platforms", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/opens/platforms">)),
    GetOutboundOverviewStatistics: (...args) => callOperation("server:GET:/stats/outbound", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound">)),
    GetSentCounts: (...args) => callOperation("server:GET:/stats/outbound/sends", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/sends">)),
    GetSpamComplaints: (...args) => callOperation("server:GET:/stats/outbound/spam", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/spam">)),
    GetTrackedEmailCounts: (...args) => callOperation("server:GET:/stats/outbound/tracked", ...(args as PostmarkFullApiOperationArgs<"server:GET:/stats/outbound/tracked">)),
  };
}
