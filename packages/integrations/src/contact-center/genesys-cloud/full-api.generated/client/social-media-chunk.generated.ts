// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiSocialMediaOperationKeys = [
  "deleteSocialmediaEscalationrule",
  "deleteSocialmediaTopic",
  "deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "deleteSocialmediaTopicDataingestionrulesOpenOpenId",
  "deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId",
  "getSocialmediaAnalyticsAggregatesJob",
  "getSocialmediaAnalyticsAggregatesJobResults",
  "getSocialmediaAnalyticsMessagesJob",
  "getSocialmediaAnalyticsMessagesJobResults",
  "getSocialmediaEscalationrule",
  "getSocialmediaEscalationrules",
  "getSocialmediaTopic",
  "getSocialmediaTopicDataingestionrules",
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion",
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions",
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion",
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions",
  "getSocialmediaTopicDataingestionrulesOpenOpenId",
  "getSocialmediaTopicDataingestionrulesOpenOpenIdVersion",
  "getSocialmediaTopicDataingestionrulesOpenOpenIdVersions",
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId",
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion",
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions",
  "getSocialmediaTopics",
  "patchSocialmediaTopic",
  "patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "patchSocialmediaTopicDataingestionrulesOpenOpenId",
  "patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId",
  "postSocialmediaAnalyticsAggregatesJobs",
  "postSocialmediaAnalyticsMessagesJobs",
  "postSocialmediaEscalationrules",
  "postSocialmediaEscalationsMessages",
  "postSocialmediaTopicDataingestionrulesFacebook",
  "postSocialmediaTopicDataingestionrulesInstagram",
  "postSocialmediaTopicDataingestionrulesOpen",
  "postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk",
  "postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk",
  "postSocialmediaTopicDataingestionrulesTwitter",
  "postSocialmediaTopics",
  "postSocialmediaTwitterHistoricalTweets",
  "putSocialmediaEscalationrule",
  "putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "putSocialmediaTopicDataingestionrulesOpenOpenId",
  "putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId"
] as const;
export type GenesysCloudFullApiSocialMediaOperationKey = typeof GenesysCloudFullApiSocialMediaOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiSocialMediaOperationPathParamMap {
  "deleteSocialmediaEscalationrule": { "escalationRuleId": GenesysCloudFullApiPathParamValue };
  "deleteSocialmediaTopic": { "topicId": GenesysCloudFullApiPathParamValue };
  "deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "facebookIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "instagramIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "deleteSocialmediaTopicDataingestionrulesOpenOpenId": { "topicId": GenesysCloudFullApiPathParamValue; "openId": GenesysCloudFullApiPathParamValue };
  "deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "twitterIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaAnalyticsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaAnalyticsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaAnalyticsMessagesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaAnalyticsMessagesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaEscalationrule": { "escalationRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaEscalationrules": {};
  "getSocialmediaTopic": { "topicId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrules": { "topicId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "facebookIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion": { "topicId": GenesysCloudFullApiPathParamValue; "facebookIngestionRuleId": GenesysCloudFullApiPathParamValue; "dataIngestionRuleVersion": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions": { "topicId": GenesysCloudFullApiPathParamValue; "facebookIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "instagramIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion": { "topicId": GenesysCloudFullApiPathParamValue; "instagramIngestionRuleId": GenesysCloudFullApiPathParamValue; "dataIngestionRuleVersion": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions": { "topicId": GenesysCloudFullApiPathParamValue; "instagramIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesOpenOpenId": { "topicId": GenesysCloudFullApiPathParamValue; "openId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesOpenOpenIdVersion": { "topicId": GenesysCloudFullApiPathParamValue; "openId": GenesysCloudFullApiPathParamValue; "dataIngestionRuleVersion": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesOpenOpenIdVersions": { "topicId": GenesysCloudFullApiPathParamValue; "openId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "twitterIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion": { "topicId": GenesysCloudFullApiPathParamValue; "twitterIngestionRuleId": GenesysCloudFullApiPathParamValue; "dataIngestionRuleVersion": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions": { "topicId": GenesysCloudFullApiPathParamValue; "twitterIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "getSocialmediaTopics": {};
  "patchSocialmediaTopic": { "topicId": GenesysCloudFullApiPathParamValue };
  "patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "facebookIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "instagramIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "patchSocialmediaTopicDataingestionrulesOpenOpenId": { "topicId": GenesysCloudFullApiPathParamValue; "openId": GenesysCloudFullApiPathParamValue };
  "patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "twitterIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaAnalyticsAggregatesJobs": {};
  "postSocialmediaAnalyticsMessagesJobs": {};
  "postSocialmediaEscalationrules": {};
  "postSocialmediaEscalationsMessages": {};
  "postSocialmediaTopicDataingestionrulesFacebook": { "topicId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaTopicDataingestionrulesInstagram": { "topicId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaTopicDataingestionrulesOpen": { "topicId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk": { "topicId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk": { "topicId": GenesysCloudFullApiPathParamValue; "ruleId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaTopicDataingestionrulesTwitter": { "topicId": GenesysCloudFullApiPathParamValue };
  "postSocialmediaTopics": {};
  "postSocialmediaTwitterHistoricalTweets": {};
  "putSocialmediaEscalationrule": { "escalationRuleId": GenesysCloudFullApiPathParamValue };
  "putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "facebookIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "instagramIngestionRuleId": GenesysCloudFullApiPathParamValue };
  "putSocialmediaTopicDataingestionrulesOpenOpenId": { "topicId": GenesysCloudFullApiPathParamValue; "openId": GenesysCloudFullApiPathParamValue };
  "putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": { "topicId": GenesysCloudFullApiPathParamValue; "twitterIngestionRuleId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiSocialMediaOperationRequestMap {
  "deleteSocialmediaEscalationrule": GenesysCloudFullApiOperationInput<"deleteSocialmediaEscalationrule">;
  "deleteSocialmediaTopic": GenesysCloudFullApiOperationInput<"deleteSocialmediaTopic">;
  "deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": GenesysCloudFullApiOperationInput<"deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">;
  "deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": GenesysCloudFullApiOperationInput<"deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">;
  "deleteSocialmediaTopicDataingestionrulesOpenOpenId": GenesysCloudFullApiOperationInput<"deleteSocialmediaTopicDataingestionrulesOpenOpenId">;
  "deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": GenesysCloudFullApiOperationInput<"deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">;
  "getSocialmediaAnalyticsAggregatesJob": GenesysCloudFullApiOperationInput<"getSocialmediaAnalyticsAggregatesJob">;
  "getSocialmediaAnalyticsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getSocialmediaAnalyticsAggregatesJobResults">;
  "getSocialmediaAnalyticsMessagesJob": GenesysCloudFullApiOperationInput<"getSocialmediaAnalyticsMessagesJob">;
  "getSocialmediaAnalyticsMessagesJobResults": GenesysCloudFullApiOperationInput<"getSocialmediaAnalyticsMessagesJobResults">;
  "getSocialmediaEscalationrule": GenesysCloudFullApiOperationInput<"getSocialmediaEscalationrule">;
  "getSocialmediaEscalationrules": GenesysCloudFullApiOperationInput<"getSocialmediaEscalationrules">;
  "getSocialmediaTopic": GenesysCloudFullApiOperationInput<"getSocialmediaTopic">;
  "getSocialmediaTopicDataingestionrules": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrules">;
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">;
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion">;
  "getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions">;
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">;
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion">;
  "getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions">;
  "getSocialmediaTopicDataingestionrulesOpenOpenId": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesOpenOpenId">;
  "getSocialmediaTopicDataingestionrulesOpenOpenIdVersion": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesOpenOpenIdVersion">;
  "getSocialmediaTopicDataingestionrulesOpenOpenIdVersions": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesOpenOpenIdVersions">;
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">;
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion">;
  "getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions": GenesysCloudFullApiOperationInput<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions">;
  "getSocialmediaTopics": GenesysCloudFullApiOperationInput<"getSocialmediaTopics">;
  "patchSocialmediaTopic": GenesysCloudFullApiOperationInput<"patchSocialmediaTopic">;
  "patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": GenesysCloudFullApiOperationInput<"patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">;
  "patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": GenesysCloudFullApiOperationInput<"patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">;
  "patchSocialmediaTopicDataingestionrulesOpenOpenId": GenesysCloudFullApiOperationInput<"patchSocialmediaTopicDataingestionrulesOpenOpenId">;
  "patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": GenesysCloudFullApiOperationInput<"patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">;
  "postSocialmediaAnalyticsAggregatesJobs": GenesysCloudFullApiOperationInput<"postSocialmediaAnalyticsAggregatesJobs">;
  "postSocialmediaAnalyticsMessagesJobs": GenesysCloudFullApiOperationInput<"postSocialmediaAnalyticsMessagesJobs">;
  "postSocialmediaEscalationrules": GenesysCloudFullApiOperationInput<"postSocialmediaEscalationrules">;
  "postSocialmediaEscalationsMessages": GenesysCloudFullApiOperationInput<"postSocialmediaEscalationsMessages">;
  "postSocialmediaTopicDataingestionrulesFacebook": GenesysCloudFullApiOperationInput<"postSocialmediaTopicDataingestionrulesFacebook">;
  "postSocialmediaTopicDataingestionrulesInstagram": GenesysCloudFullApiOperationInput<"postSocialmediaTopicDataingestionrulesInstagram">;
  "postSocialmediaTopicDataingestionrulesOpen": GenesysCloudFullApiOperationInput<"postSocialmediaTopicDataingestionrulesOpen">;
  "postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk": GenesysCloudFullApiOperationInput<"postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk">;
  "postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk": GenesysCloudFullApiOperationInput<"postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk">;
  "postSocialmediaTopicDataingestionrulesTwitter": GenesysCloudFullApiOperationInput<"postSocialmediaTopicDataingestionrulesTwitter">;
  "postSocialmediaTopics": GenesysCloudFullApiOperationInput<"postSocialmediaTopics">;
  "postSocialmediaTwitterHistoricalTweets": GenesysCloudFullApiOperationInput<"postSocialmediaTwitterHistoricalTweets">;
  "putSocialmediaEscalationrule": GenesysCloudFullApiOperationInput<"putSocialmediaEscalationrule">;
  "putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId": GenesysCloudFullApiOperationInput<"putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">;
  "putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId": GenesysCloudFullApiOperationInput<"putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">;
  "putSocialmediaTopicDataingestionrulesOpenOpenId": GenesysCloudFullApiOperationInput<"putSocialmediaTopicDataingestionrulesOpenOpenId">;
  "putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId": GenesysCloudFullApiOperationInput<"putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">;
}

export interface GenesysCloudFullApiSocialMediaGeneratedClient {
  DeleteSocialmediaEscalationrule(...args: GenesysCloudFullApiOperationArgs<"deleteSocialmediaEscalationrule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSocialmediaEscalationrule"]>;
  DeleteSocialmediaTopic(...args: GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopic">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSocialmediaTopic"]>;
  DeleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId"]>;
  DeleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId"]>;
  DeleteSocialmediaTopicDataingestionrulesOpenOpenId(...args: GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesOpenOpenId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSocialmediaTopicDataingestionrulesOpenOpenId"]>;
  DeleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId"]>;
  GetSocialmediaAnalyticsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaAnalyticsAggregatesJob"]>;
  GetSocialmediaAnalyticsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaAnalyticsAggregatesJobResults"]>;
  GetSocialmediaAnalyticsMessagesJob(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsMessagesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaAnalyticsMessagesJob"]>;
  GetSocialmediaAnalyticsMessagesJobResults(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsMessagesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaAnalyticsMessagesJobResults"]>;
  GetSocialmediaEscalationrule(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaEscalationrule">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaEscalationrule"]>;
  GetSocialmediaEscalationrules(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaEscalationrules">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaEscalationrules"]>;
  GetSocialmediaTopic(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopic">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopic"]>;
  GetSocialmediaTopicDataingestionrules(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrules">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrules"]>;
  GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId"]>;
  GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion"]>;
  GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions"]>;
  GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId"]>;
  GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion"]>;
  GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions"]>;
  GetSocialmediaTopicDataingestionrulesOpenOpenId(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesOpenOpenId">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesOpenOpenId"]>;
  GetSocialmediaTopicDataingestionrulesOpenOpenIdVersion(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesOpenOpenIdVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesOpenOpenIdVersion"]>;
  GetSocialmediaTopicDataingestionrulesOpenOpenIdVersions(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesOpenOpenIdVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesOpenOpenIdVersions"]>;
  GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId"]>;
  GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion"]>;
  GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions"]>;
  GetSocialmediaTopics(...args: GenesysCloudFullApiOperationArgs<"getSocialmediaTopics">): Promise<GenesysCloudFullApiOperationResponseMap["getSocialmediaTopics"]>;
  PatchSocialmediaTopic(...args: GenesysCloudFullApiOperationArgs<"patchSocialmediaTopic">): Promise<GenesysCloudFullApiOperationResponseMap["patchSocialmediaTopic"]>;
  PatchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId"]>;
  PatchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId"]>;
  PatchSocialmediaTopicDataingestionrulesOpenOpenId(...args: GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesOpenOpenId">): Promise<GenesysCloudFullApiOperationResponseMap["patchSocialmediaTopicDataingestionrulesOpenOpenId"]>;
  PatchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId"]>;
  PostSocialmediaAnalyticsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaAnalyticsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaAnalyticsAggregatesJobs"]>;
  PostSocialmediaAnalyticsMessagesJobs(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaAnalyticsMessagesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaAnalyticsMessagesJobs"]>;
  PostSocialmediaEscalationrules(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaEscalationrules">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaEscalationrules"]>;
  PostSocialmediaEscalationsMessages(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaEscalationsMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaEscalationsMessages"]>;
  PostSocialmediaTopicDataingestionrulesFacebook(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesFacebook">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopicDataingestionrulesFacebook"]>;
  PostSocialmediaTopicDataingestionrulesInstagram(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesInstagram">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopicDataingestionrulesInstagram"]>;
  PostSocialmediaTopicDataingestionrulesOpen(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesOpen">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopicDataingestionrulesOpen"]>;
  PostSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk"]>;
  PostSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk"]>;
  PostSocialmediaTopicDataingestionrulesTwitter(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesTwitter">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopicDataingestionrulesTwitter"]>;
  PostSocialmediaTopics(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTopics">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTopics"]>;
  PostSocialmediaTwitterHistoricalTweets(...args: GenesysCloudFullApiOperationArgs<"postSocialmediaTwitterHistoricalTweets">): Promise<GenesysCloudFullApiOperationResponseMap["postSocialmediaTwitterHistoricalTweets"]>;
  PutSocialmediaEscalationrule(...args: GenesysCloudFullApiOperationArgs<"putSocialmediaEscalationrule">): Promise<GenesysCloudFullApiOperationResponseMap["putSocialmediaEscalationrule"]>;
  PutSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId"]>;
  PutSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId"]>;
  PutSocialmediaTopicDataingestionrulesOpenOpenId(...args: GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesOpenOpenId">): Promise<GenesysCloudFullApiOperationResponseMap["putSocialmediaTopicDataingestionrulesOpenOpenId"]>;
  PutSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(...args: GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">): Promise<GenesysCloudFullApiOperationResponseMap["putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId"]>;
}

export const GenesysCloudFullApiSocialMediaGeneratedFunctionNames = [
  "DeleteSocialmediaEscalationrule",
  "DeleteSocialmediaTopic",
  "DeleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "DeleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "DeleteSocialmediaTopicDataingestionrulesOpenOpenId",
  "DeleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId",
  "GetSocialmediaAnalyticsAggregatesJob",
  "GetSocialmediaAnalyticsAggregatesJobResults",
  "GetSocialmediaAnalyticsMessagesJob",
  "GetSocialmediaAnalyticsMessagesJobResults",
  "GetSocialmediaEscalationrule",
  "GetSocialmediaEscalationrules",
  "GetSocialmediaTopic",
  "GetSocialmediaTopicDataingestionrules",
  "GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion",
  "GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions",
  "GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion",
  "GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions",
  "GetSocialmediaTopicDataingestionrulesOpenOpenId",
  "GetSocialmediaTopicDataingestionrulesOpenOpenIdVersion",
  "GetSocialmediaTopicDataingestionrulesOpenOpenIdVersions",
  "GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId",
  "GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion",
  "GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions",
  "GetSocialmediaTopics",
  "PatchSocialmediaTopic",
  "PatchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "PatchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "PatchSocialmediaTopicDataingestionrulesOpenOpenId",
  "PatchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId",
  "PostSocialmediaAnalyticsAggregatesJobs",
  "PostSocialmediaAnalyticsMessagesJobs",
  "PostSocialmediaEscalationrules",
  "PostSocialmediaEscalationsMessages",
  "PostSocialmediaTopicDataingestionrulesFacebook",
  "PostSocialmediaTopicDataingestionrulesInstagram",
  "PostSocialmediaTopicDataingestionrulesOpen",
  "PostSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk",
  "PostSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk",
  "PostSocialmediaTopicDataingestionrulesTwitter",
  "PostSocialmediaTopics",
  "PostSocialmediaTwitterHistoricalTweets",
  "PutSocialmediaEscalationrule",
  "PutSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId",
  "PutSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId",
  "PutSocialmediaTopicDataingestionrulesOpenOpenId",
  "PutSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId"
] as const satisfies readonly (keyof GenesysCloudFullApiSocialMediaGeneratedClient)[];

export function createGenesysCloudFullApiSocialMediaGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiSocialMediaGeneratedClient {
  return {
    DeleteSocialmediaEscalationrule: (...args) => callOperation("deleteSocialmediaEscalationrule", ...(args as GenesysCloudFullApiOperationArgs<"deleteSocialmediaEscalationrule">)),
    DeleteSocialmediaTopic: (...args) => callOperation("deleteSocialmediaTopic", ...(args as GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopic">)),
    DeleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId: (...args) => callOperation("deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">)),
    DeleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId: (...args) => callOperation("deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">)),
    DeleteSocialmediaTopicDataingestionrulesOpenOpenId: (...args) => callOperation("deleteSocialmediaTopicDataingestionrulesOpenOpenId", ...(args as GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesOpenOpenId">)),
    DeleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId: (...args) => callOperation("deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">)),
    GetSocialmediaAnalyticsAggregatesJob: (...args) => callOperation("getSocialmediaAnalyticsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsAggregatesJob">)),
    GetSocialmediaAnalyticsAggregatesJobResults: (...args) => callOperation("getSocialmediaAnalyticsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsAggregatesJobResults">)),
    GetSocialmediaAnalyticsMessagesJob: (...args) => callOperation("getSocialmediaAnalyticsMessagesJob", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsMessagesJob">)),
    GetSocialmediaAnalyticsMessagesJobResults: (...args) => callOperation("getSocialmediaAnalyticsMessagesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaAnalyticsMessagesJobResults">)),
    GetSocialmediaEscalationrule: (...args) => callOperation("getSocialmediaEscalationrule", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaEscalationrule">)),
    GetSocialmediaEscalationrules: (...args) => callOperation("getSocialmediaEscalationrules", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaEscalationrules">)),
    GetSocialmediaTopic: (...args) => callOperation("getSocialmediaTopic", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopic">)),
    GetSocialmediaTopicDataingestionrules: (...args) => callOperation("getSocialmediaTopicDataingestionrules", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrules">)),
    GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId: (...args) => callOperation("getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">)),
    GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion: (...args) => callOperation("getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion">)),
    GetSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions: (...args) => callOperation("getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions">)),
    GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId: (...args) => callOperation("getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">)),
    GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion: (...args) => callOperation("getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersion">)),
    GetSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions: (...args) => callOperation("getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleIdVersions">)),
    GetSocialmediaTopicDataingestionrulesOpenOpenId: (...args) => callOperation("getSocialmediaTopicDataingestionrulesOpenOpenId", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesOpenOpenId">)),
    GetSocialmediaTopicDataingestionrulesOpenOpenIdVersion: (...args) => callOperation("getSocialmediaTopicDataingestionrulesOpenOpenIdVersion", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesOpenOpenIdVersion">)),
    GetSocialmediaTopicDataingestionrulesOpenOpenIdVersions: (...args) => callOperation("getSocialmediaTopicDataingestionrulesOpenOpenIdVersions", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesOpenOpenIdVersions">)),
    GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId: (...args) => callOperation("getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">)),
    GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion: (...args) => callOperation("getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion">)),
    GetSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions: (...args) => callOperation("getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions">)),
    GetSocialmediaTopics: (...args) => callOperation("getSocialmediaTopics", ...(args as GenesysCloudFullApiOperationArgs<"getSocialmediaTopics">)),
    PatchSocialmediaTopic: (...args) => callOperation("patchSocialmediaTopic", ...(args as GenesysCloudFullApiOperationArgs<"patchSocialmediaTopic">)),
    PatchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId: (...args) => callOperation("patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">)),
    PatchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId: (...args) => callOperation("patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">)),
    PatchSocialmediaTopicDataingestionrulesOpenOpenId: (...args) => callOperation("patchSocialmediaTopicDataingestionrulesOpenOpenId", ...(args as GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesOpenOpenId">)),
    PatchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId: (...args) => callOperation("patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">)),
    PostSocialmediaAnalyticsAggregatesJobs: (...args) => callOperation("postSocialmediaAnalyticsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaAnalyticsAggregatesJobs">)),
    PostSocialmediaAnalyticsMessagesJobs: (...args) => callOperation("postSocialmediaAnalyticsMessagesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaAnalyticsMessagesJobs">)),
    PostSocialmediaEscalationrules: (...args) => callOperation("postSocialmediaEscalationrules", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaEscalationrules">)),
    PostSocialmediaEscalationsMessages: (...args) => callOperation("postSocialmediaEscalationsMessages", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaEscalationsMessages">)),
    PostSocialmediaTopicDataingestionrulesFacebook: (...args) => callOperation("postSocialmediaTopicDataingestionrulesFacebook", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesFacebook">)),
    PostSocialmediaTopicDataingestionrulesInstagram: (...args) => callOperation("postSocialmediaTopicDataingestionrulesInstagram", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesInstagram">)),
    PostSocialmediaTopicDataingestionrulesOpen: (...args) => callOperation("postSocialmediaTopicDataingestionrulesOpen", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesOpen">)),
    PostSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk: (...args) => callOperation("postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk">)),
    PostSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk: (...args) => callOperation("postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk">)),
    PostSocialmediaTopicDataingestionrulesTwitter: (...args) => callOperation("postSocialmediaTopicDataingestionrulesTwitter", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopicDataingestionrulesTwitter">)),
    PostSocialmediaTopics: (...args) => callOperation("postSocialmediaTopics", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTopics">)),
    PostSocialmediaTwitterHistoricalTweets: (...args) => callOperation("postSocialmediaTwitterHistoricalTweets", ...(args as GenesysCloudFullApiOperationArgs<"postSocialmediaTwitterHistoricalTweets">)),
    PutSocialmediaEscalationrule: (...args) => callOperation("putSocialmediaEscalationrule", ...(args as GenesysCloudFullApiOperationArgs<"putSocialmediaEscalationrule">)),
    PutSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId: (...args) => callOperation("putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId">)),
    PutSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId: (...args) => callOperation("putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesInstagramInstagramIngestionRuleId">)),
    PutSocialmediaTopicDataingestionrulesOpenOpenId: (...args) => callOperation("putSocialmediaTopicDataingestionrulesOpenOpenId", ...(args as GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesOpenOpenId">)),
    PutSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId: (...args) => callOperation("putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId", ...(args as GenesysCloudFullApiOperationArgs<"putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId">)),
  };
}
