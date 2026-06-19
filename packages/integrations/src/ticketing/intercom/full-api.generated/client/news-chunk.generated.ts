// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiNewsOperationKeys = [
  "listNewsItems",
  "createNewsItem",
  "deleteNewsItem",
  "retrieveNewsItem",
  "updateNewsItem",
  "listNewsfeeds",
  "retrieveNewsfeed",
  "listLiveNewsfeedItems"
] as const;
export type IntercomFullApiNewsOperationKey = typeof IntercomFullApiNewsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiNewsOperationPathParamMap {
  "listNewsItems": {};
  "createNewsItem": {};
  "deleteNewsItem": { "news_item_id": IntercomFullApiPathParamValue };
  "retrieveNewsItem": { "news_item_id": IntercomFullApiPathParamValue };
  "updateNewsItem": { "news_item_id": IntercomFullApiPathParamValue };
  "listNewsfeeds": {};
  "retrieveNewsfeed": { "newsfeed_id": IntercomFullApiPathParamValue };
  "listLiveNewsfeedItems": { "newsfeed_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiNewsOperationRequestMap {
  "listNewsItems": IntercomFullApiOperationInput<"listNewsItems">;
  "createNewsItem": IntercomFullApiOperationInput<"createNewsItem">;
  "deleteNewsItem": IntercomFullApiOperationInput<"deleteNewsItem">;
  "retrieveNewsItem": IntercomFullApiOperationInput<"retrieveNewsItem">;
  "updateNewsItem": IntercomFullApiOperationInput<"updateNewsItem">;
  "listNewsfeeds": IntercomFullApiOperationInput<"listNewsfeeds">;
  "retrieveNewsfeed": IntercomFullApiOperationInput<"retrieveNewsfeed">;
  "listLiveNewsfeedItems": IntercomFullApiOperationInput<"listLiveNewsfeedItems">;
}

export interface IntercomFullApiNewsGeneratedClient {
  intercomListNewsItems(...args: IntercomFullApiOperationArgs<"listNewsItems">): Promise<IntercomFullApiOperationResponseMap["listNewsItems"]>;
  intercomCreateNewsItem(...args: IntercomFullApiOperationArgs<"createNewsItem">): Promise<IntercomFullApiOperationResponseMap["createNewsItem"]>;
  intercomDeleteNewsItem(...args: IntercomFullApiOperationArgs<"deleteNewsItem">): Promise<IntercomFullApiOperationResponseMap["deleteNewsItem"]>;
  intercomRetrieveNewsItem(...args: IntercomFullApiOperationArgs<"retrieveNewsItem">): Promise<IntercomFullApiOperationResponseMap["retrieveNewsItem"]>;
  intercomUpdateNewsItem(...args: IntercomFullApiOperationArgs<"updateNewsItem">): Promise<IntercomFullApiOperationResponseMap["updateNewsItem"]>;
  intercomListNewsfeeds(...args: IntercomFullApiOperationArgs<"listNewsfeeds">): Promise<IntercomFullApiOperationResponseMap["listNewsfeeds"]>;
  intercomRetrieveNewsfeed(...args: IntercomFullApiOperationArgs<"retrieveNewsfeed">): Promise<IntercomFullApiOperationResponseMap["retrieveNewsfeed"]>;
  intercomListLiveNewsfeedItems(...args: IntercomFullApiOperationArgs<"listLiveNewsfeedItems">): Promise<IntercomFullApiOperationResponseMap["listLiveNewsfeedItems"]>;
}

export const IntercomFullApiNewsGeneratedFunctionNames = [
  "intercomListNewsItems",
  "intercomCreateNewsItem",
  "intercomDeleteNewsItem",
  "intercomRetrieveNewsItem",
  "intercomUpdateNewsItem",
  "intercomListNewsfeeds",
  "intercomRetrieveNewsfeed",
  "intercomListLiveNewsfeedItems"
] as const satisfies readonly (keyof IntercomFullApiNewsGeneratedClient)[];

export function createIntercomFullApiNewsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiNewsGeneratedClient {
  return {
    intercomListNewsItems: (...args) => callOperation("listNewsItems", ...(args as IntercomFullApiOperationArgs<"listNewsItems">)),
    intercomCreateNewsItem: (...args) => callOperation("createNewsItem", ...(args as IntercomFullApiOperationArgs<"createNewsItem">)),
    intercomDeleteNewsItem: (...args) => callOperation("deleteNewsItem", ...(args as IntercomFullApiOperationArgs<"deleteNewsItem">)),
    intercomRetrieveNewsItem: (...args) => callOperation("retrieveNewsItem", ...(args as IntercomFullApiOperationArgs<"retrieveNewsItem">)),
    intercomUpdateNewsItem: (...args) => callOperation("updateNewsItem", ...(args as IntercomFullApiOperationArgs<"updateNewsItem">)),
    intercomListNewsfeeds: (...args) => callOperation("listNewsfeeds", ...(args as IntercomFullApiOperationArgs<"listNewsfeeds">)),
    intercomRetrieveNewsfeed: (...args) => callOperation("retrieveNewsfeed", ...(args as IntercomFullApiOperationArgs<"retrieveNewsfeed">)),
    intercomListLiveNewsfeedItems: (...args) => callOperation("listLiveNewsfeedItems", ...(args as IntercomFullApiOperationArgs<"listLiveNewsfeedItems">)),
  };
}
