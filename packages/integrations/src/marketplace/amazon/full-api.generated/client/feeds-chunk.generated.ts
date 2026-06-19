// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiFeedsOperationKeys = [
  "feeds_2021-06-30:getFeeds",
  "feeds_2021-06-30:createFeed",
  "feeds_2021-06-30:cancelFeed",
  "feeds_2021-06-30:getFeed",
  "feeds_2021-06-30:createFeedDocument",
  "feeds_2021-06-30:getFeedDocument"
] as const;
export type AmazonFullApiFeedsOperationKey = typeof AmazonFullApiFeedsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiFeedsOperationPathParamMap {
  "feeds_2021-06-30:getFeeds": {};
  "feeds_2021-06-30:createFeed": {};
  "feeds_2021-06-30:cancelFeed": { "feedId": AmazonFullApiPathParamValue };
  "feeds_2021-06-30:getFeed": { "feedId": AmazonFullApiPathParamValue };
  "feeds_2021-06-30:createFeedDocument": {};
  "feeds_2021-06-30:getFeedDocument": { "feedDocumentId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiFeedsOperationRequestMap {
  "feeds_2021-06-30:getFeeds": AmazonFullApiOperationInput<"feeds_2021-06-30:getFeeds">;
  "feeds_2021-06-30:createFeed": AmazonFullApiOperationInput<"feeds_2021-06-30:createFeed">;
  "feeds_2021-06-30:cancelFeed": AmazonFullApiOperationInput<"feeds_2021-06-30:cancelFeed">;
  "feeds_2021-06-30:getFeed": AmazonFullApiOperationInput<"feeds_2021-06-30:getFeed">;
  "feeds_2021-06-30:createFeedDocument": AmazonFullApiOperationInput<"feeds_2021-06-30:createFeedDocument">;
  "feeds_2021-06-30:getFeedDocument": AmazonFullApiOperationInput<"feeds_2021-06-30:getFeedDocument">;
}

export interface AmazonFullApiFeedsGeneratedClient {
  GetFeeds(...args: AmazonFullApiOperationArgs<"feeds_2021-06-30:getFeeds">): Promise<AmazonFullApiOperationResponseMap["feeds_2021-06-30:getFeeds"]>;
  CreateFeed(...args: AmazonFullApiOperationArgs<"feeds_2021-06-30:createFeed">): Promise<AmazonFullApiOperationResponseMap["feeds_2021-06-30:createFeed"]>;
  CancelFeed(...args: AmazonFullApiOperationArgs<"feeds_2021-06-30:cancelFeed">): Promise<AmazonFullApiOperationResponseMap["feeds_2021-06-30:cancelFeed"]>;
  GetFeed(...args: AmazonFullApiOperationArgs<"feeds_2021-06-30:getFeed">): Promise<AmazonFullApiOperationResponseMap["feeds_2021-06-30:getFeed"]>;
  CreateFeedDocument(...args: AmazonFullApiOperationArgs<"feeds_2021-06-30:createFeedDocument">): Promise<AmazonFullApiOperationResponseMap["feeds_2021-06-30:createFeedDocument"]>;
  GetFeedDocument(...args: AmazonFullApiOperationArgs<"feeds_2021-06-30:getFeedDocument">): Promise<AmazonFullApiOperationResponseMap["feeds_2021-06-30:getFeedDocument"]>;
}

export const AmazonFullApiFeedsGeneratedFunctionNames = [
  "GetFeeds",
  "CreateFeed",
  "CancelFeed",
  "GetFeed",
  "CreateFeedDocument",
  "GetFeedDocument"
] as const satisfies readonly (keyof AmazonFullApiFeedsGeneratedClient)[];

export function createAmazonFullApiFeedsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiFeedsGeneratedClient {
  return {
    GetFeeds: (...args) => callOperation("feeds_2021-06-30:getFeeds", ...(args as AmazonFullApiOperationArgs<"feeds_2021-06-30:getFeeds">)),
    CreateFeed: (...args) => callOperation("feeds_2021-06-30:createFeed", ...(args as AmazonFullApiOperationArgs<"feeds_2021-06-30:createFeed">)),
    CancelFeed: (...args) => callOperation("feeds_2021-06-30:cancelFeed", ...(args as AmazonFullApiOperationArgs<"feeds_2021-06-30:cancelFeed">)),
    GetFeed: (...args) => callOperation("feeds_2021-06-30:getFeed", ...(args as AmazonFullApiOperationArgs<"feeds_2021-06-30:getFeed">)),
    CreateFeedDocument: (...args) => callOperation("feeds_2021-06-30:createFeedDocument", ...(args as AmazonFullApiOperationArgs<"feeds_2021-06-30:createFeedDocument">)),
    GetFeedDocument: (...args) => callOperation("feeds_2021-06-30:getFeedDocument", ...(args as AmazonFullApiOperationArgs<"feeds_2021-06-30:getFeedDocument">)),
  };
}
