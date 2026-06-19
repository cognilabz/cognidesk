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
export const GenesysCloudFullApiGamificationOperationKeys = [
  "deleteEmployeeperformanceExternalmetricsDefinition",
  "deleteGamificationContest",
  "getEmployeeperformanceExternalmetricsDefinition",
  "getEmployeeperformanceExternalmetricsDefinitions",
  "getGamificationContest",
  "getGamificationContestAgentsScores",
  "getGamificationContestAgentsScoresMe",
  "getGamificationContestAgentsScoresTrends",
  "getGamificationContestAgentsScoresTrendsMe",
  "getGamificationContestPrizeimage",
  "getGamificationContests",
  "getGamificationContestsMe",
  "getGamificationInsights",
  "getGamificationInsightsDetails",
  "getGamificationInsightsGroupsTrends",
  "getGamificationInsightsGroupsTrendsAll",
  "getGamificationInsightsManagers",
  "getGamificationInsightsMembers",
  "getGamificationInsightsRankings",
  "getGamificationInsightsTrends",
  "getGamificationInsightsUserDetails",
  "getGamificationInsightsUserTrends",
  "getGamificationLeaderboard",
  "getGamificationLeaderboardAll",
  "getGamificationLeaderboardAllBestpoints",
  "getGamificationLeaderboardBestpoints",
  "getGamificationMetricdefinition",
  "getGamificationMetricdefinitions",
  "getGamificationProfile",
  "getGamificationProfileMembers",
  "getGamificationProfileMetric",
  "getGamificationProfileMetrics",
  "getGamificationProfileMetricsObjectivedetails",
  "getGamificationProfiles",
  "getGamificationProfilesUser",
  "getGamificationProfilesUsersMe",
  "getGamificationScorecards",
  "getGamificationScorecardsAttendance",
  "getGamificationScorecardsBestpoints",
  "getGamificationScorecardsPointsAlltime",
  "getGamificationScorecardsPointsAverage",
  "getGamificationScorecardsPointsTrends",
  "getGamificationScorecardsProfileMetricUsersValuesTrends",
  "getGamificationScorecardsProfileMetricUserValuesTrends",
  "getGamificationScorecardsProfileMetricValuesTrends",
  "getGamificationScorecardsUser",
  "getGamificationScorecardsUserAttendance",
  "getGamificationScorecardsUserBestpoints",
  "getGamificationScorecardsUserPointsAlltime",
  "getGamificationScorecardsUserPointsTrends",
  "getGamificationScorecardsUsersPointsAverage",
  "getGamificationScorecardsUsersValuesAverage",
  "getGamificationScorecardsUsersValuesTrends",
  "getGamificationScorecardsUserValuesTrends",
  "getGamificationScorecardsValuesAverage",
  "getGamificationScorecardsValuesTrends",
  "getGamificationStatus",
  "getGamificationTemplate",
  "getGamificationTemplates",
  "patchEmployeeperformanceExternalmetricsDefinition",
  "patchGamificationContest",
  "postEmployeeperformanceExternalmetricsData",
  "postEmployeeperformanceExternalmetricsDefinitions",
  "postGamificationContests",
  "postGamificationContestsUploadsPrizeimages",
  "postGamificationProfileActivate",
  "postGamificationProfileDeactivate",
  "postGamificationProfileMembers",
  "postGamificationProfileMembersValidate",
  "postGamificationProfileMetricLink",
  "postGamificationProfileMetrics",
  "postGamificationProfiles",
  "postGamificationProfilesUserQuery",
  "postGamificationProfilesUsersMeQuery",
  "putGamificationContest",
  "putGamificationProfile",
  "putGamificationProfileMetric",
  "putGamificationStatus"
] as const;
export type GenesysCloudFullApiGamificationOperationKey = typeof GenesysCloudFullApiGamificationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiGamificationOperationPathParamMap {
  "deleteEmployeeperformanceExternalmetricsDefinition": { "metricId": GenesysCloudFullApiPathParamValue };
  "deleteGamificationContest": { "contestId": GenesysCloudFullApiPathParamValue };
  "getEmployeeperformanceExternalmetricsDefinition": { "metricId": GenesysCloudFullApiPathParamValue };
  "getEmployeeperformanceExternalmetricsDefinitions": {};
  "getGamificationContest": { "contestId": GenesysCloudFullApiPathParamValue };
  "getGamificationContestAgentsScores": { "contestId": GenesysCloudFullApiPathParamValue };
  "getGamificationContestAgentsScoresMe": { "contestId": GenesysCloudFullApiPathParamValue };
  "getGamificationContestAgentsScoresTrends": { "contestId": GenesysCloudFullApiPathParamValue };
  "getGamificationContestAgentsScoresTrendsMe": { "contestId": GenesysCloudFullApiPathParamValue };
  "getGamificationContestPrizeimage": { "contestId": GenesysCloudFullApiPathParamValue; "prizeImageId": GenesysCloudFullApiPathParamValue };
  "getGamificationContests": {};
  "getGamificationContestsMe": {};
  "getGamificationInsights": {};
  "getGamificationInsightsDetails": {};
  "getGamificationInsightsGroupsTrends": {};
  "getGamificationInsightsGroupsTrendsAll": {};
  "getGamificationInsightsManagers": {};
  "getGamificationInsightsMembers": {};
  "getGamificationInsightsRankings": {};
  "getGamificationInsightsTrends": {};
  "getGamificationInsightsUserDetails": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationInsightsUserTrends": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationLeaderboard": {};
  "getGamificationLeaderboardAll": {};
  "getGamificationLeaderboardAllBestpoints": {};
  "getGamificationLeaderboardBestpoints": {};
  "getGamificationMetricdefinition": { "metricDefinitionId": GenesysCloudFullApiPathParamValue };
  "getGamificationMetricdefinitions": {};
  "getGamificationProfile": { "profileId": GenesysCloudFullApiPathParamValue };
  "getGamificationProfileMembers": { "profileId": GenesysCloudFullApiPathParamValue };
  "getGamificationProfileMetric": { "profileId": GenesysCloudFullApiPathParamValue; "metricId": GenesysCloudFullApiPathParamValue };
  "getGamificationProfileMetrics": { "profileId": GenesysCloudFullApiPathParamValue };
  "getGamificationProfileMetricsObjectivedetails": { "profileId": GenesysCloudFullApiPathParamValue };
  "getGamificationProfiles": {};
  "getGamificationProfilesUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationProfilesUsersMe": {};
  "getGamificationScorecards": {};
  "getGamificationScorecardsAttendance": {};
  "getGamificationScorecardsBestpoints": {};
  "getGamificationScorecardsPointsAlltime": {};
  "getGamificationScorecardsPointsAverage": {};
  "getGamificationScorecardsPointsTrends": {};
  "getGamificationScorecardsProfileMetricUsersValuesTrends": { "profileId": GenesysCloudFullApiPathParamValue; "metricId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsProfileMetricUserValuesTrends": { "profileId": GenesysCloudFullApiPathParamValue; "metricId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsProfileMetricValuesTrends": { "profileId": GenesysCloudFullApiPathParamValue; "metricId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsUserAttendance": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsUserBestpoints": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsUserPointsAlltime": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsUserPointsTrends": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsUsersPointsAverage": {};
  "getGamificationScorecardsUsersValuesAverage": {};
  "getGamificationScorecardsUsersValuesTrends": {};
  "getGamificationScorecardsUserValuesTrends": { "userId": GenesysCloudFullApiPathParamValue };
  "getGamificationScorecardsValuesAverage": {};
  "getGamificationScorecardsValuesTrends": {};
  "getGamificationStatus": {};
  "getGamificationTemplate": { "templateId": GenesysCloudFullApiPathParamValue };
  "getGamificationTemplates": {};
  "patchEmployeeperformanceExternalmetricsDefinition": { "metricId": GenesysCloudFullApiPathParamValue };
  "patchGamificationContest": { "contestId": GenesysCloudFullApiPathParamValue };
  "postEmployeeperformanceExternalmetricsData": {};
  "postEmployeeperformanceExternalmetricsDefinitions": {};
  "postGamificationContests": {};
  "postGamificationContestsUploadsPrizeimages": {};
  "postGamificationProfileActivate": { "profileId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfileDeactivate": { "profileId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfileMembers": { "profileId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfileMembersValidate": { "profileId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfileMetricLink": { "sourceProfileId": GenesysCloudFullApiPathParamValue; "sourceMetricId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfileMetrics": { "profileId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfiles": {};
  "postGamificationProfilesUserQuery": { "userId": GenesysCloudFullApiPathParamValue };
  "postGamificationProfilesUsersMeQuery": {};
  "putGamificationContest": { "contestId": GenesysCloudFullApiPathParamValue };
  "putGamificationProfile": { "profileId": GenesysCloudFullApiPathParamValue };
  "putGamificationProfileMetric": { "profileId": GenesysCloudFullApiPathParamValue; "metricId": GenesysCloudFullApiPathParamValue };
  "putGamificationStatus": {};
}

export interface GenesysCloudFullApiGamificationOperationRequestMap {
  "deleteEmployeeperformanceExternalmetricsDefinition": GenesysCloudFullApiOperationInput<"deleteEmployeeperformanceExternalmetricsDefinition">;
  "deleteGamificationContest": GenesysCloudFullApiOperationInput<"deleteGamificationContest">;
  "getEmployeeperformanceExternalmetricsDefinition": GenesysCloudFullApiOperationInput<"getEmployeeperformanceExternalmetricsDefinition">;
  "getEmployeeperformanceExternalmetricsDefinitions": GenesysCloudFullApiOperationInput<"getEmployeeperformanceExternalmetricsDefinitions">;
  "getGamificationContest": GenesysCloudFullApiOperationInput<"getGamificationContest">;
  "getGamificationContestAgentsScores": GenesysCloudFullApiOperationInput<"getGamificationContestAgentsScores">;
  "getGamificationContestAgentsScoresMe": GenesysCloudFullApiOperationInput<"getGamificationContestAgentsScoresMe">;
  "getGamificationContestAgentsScoresTrends": GenesysCloudFullApiOperationInput<"getGamificationContestAgentsScoresTrends">;
  "getGamificationContestAgentsScoresTrendsMe": GenesysCloudFullApiOperationInput<"getGamificationContestAgentsScoresTrendsMe">;
  "getGamificationContestPrizeimage": GenesysCloudFullApiOperationInput<"getGamificationContestPrizeimage">;
  "getGamificationContests": GenesysCloudFullApiOperationInput<"getGamificationContests">;
  "getGamificationContestsMe": GenesysCloudFullApiOperationInput<"getGamificationContestsMe">;
  "getGamificationInsights": GenesysCloudFullApiOperationInput<"getGamificationInsights">;
  "getGamificationInsightsDetails": GenesysCloudFullApiOperationInput<"getGamificationInsightsDetails">;
  "getGamificationInsightsGroupsTrends": GenesysCloudFullApiOperationInput<"getGamificationInsightsGroupsTrends">;
  "getGamificationInsightsGroupsTrendsAll": GenesysCloudFullApiOperationInput<"getGamificationInsightsGroupsTrendsAll">;
  "getGamificationInsightsManagers": GenesysCloudFullApiOperationInput<"getGamificationInsightsManagers">;
  "getGamificationInsightsMembers": GenesysCloudFullApiOperationInput<"getGamificationInsightsMembers">;
  "getGamificationInsightsRankings": GenesysCloudFullApiOperationInput<"getGamificationInsightsRankings">;
  "getGamificationInsightsTrends": GenesysCloudFullApiOperationInput<"getGamificationInsightsTrends">;
  "getGamificationInsightsUserDetails": GenesysCloudFullApiOperationInput<"getGamificationInsightsUserDetails">;
  "getGamificationInsightsUserTrends": GenesysCloudFullApiOperationInput<"getGamificationInsightsUserTrends">;
  "getGamificationLeaderboard": GenesysCloudFullApiOperationInput<"getGamificationLeaderboard">;
  "getGamificationLeaderboardAll": GenesysCloudFullApiOperationInput<"getGamificationLeaderboardAll">;
  "getGamificationLeaderboardAllBestpoints": GenesysCloudFullApiOperationInput<"getGamificationLeaderboardAllBestpoints">;
  "getGamificationLeaderboardBestpoints": GenesysCloudFullApiOperationInput<"getGamificationLeaderboardBestpoints">;
  "getGamificationMetricdefinition": GenesysCloudFullApiOperationInput<"getGamificationMetricdefinition">;
  "getGamificationMetricdefinitions": GenesysCloudFullApiOperationInput<"getGamificationMetricdefinitions">;
  "getGamificationProfile": GenesysCloudFullApiOperationInput<"getGamificationProfile">;
  "getGamificationProfileMembers": GenesysCloudFullApiOperationInput<"getGamificationProfileMembers">;
  "getGamificationProfileMetric": GenesysCloudFullApiOperationInput<"getGamificationProfileMetric">;
  "getGamificationProfileMetrics": GenesysCloudFullApiOperationInput<"getGamificationProfileMetrics">;
  "getGamificationProfileMetricsObjectivedetails": GenesysCloudFullApiOperationInput<"getGamificationProfileMetricsObjectivedetails">;
  "getGamificationProfiles": GenesysCloudFullApiOperationInput<"getGamificationProfiles">;
  "getGamificationProfilesUser": GenesysCloudFullApiOperationInput<"getGamificationProfilesUser">;
  "getGamificationProfilesUsersMe": GenesysCloudFullApiOperationInput<"getGamificationProfilesUsersMe">;
  "getGamificationScorecards": GenesysCloudFullApiOperationInput<"getGamificationScorecards">;
  "getGamificationScorecardsAttendance": GenesysCloudFullApiOperationInput<"getGamificationScorecardsAttendance">;
  "getGamificationScorecardsBestpoints": GenesysCloudFullApiOperationInput<"getGamificationScorecardsBestpoints">;
  "getGamificationScorecardsPointsAlltime": GenesysCloudFullApiOperationInput<"getGamificationScorecardsPointsAlltime">;
  "getGamificationScorecardsPointsAverage": GenesysCloudFullApiOperationInput<"getGamificationScorecardsPointsAverage">;
  "getGamificationScorecardsPointsTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsPointsTrends">;
  "getGamificationScorecardsProfileMetricUsersValuesTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsProfileMetricUsersValuesTrends">;
  "getGamificationScorecardsProfileMetricUserValuesTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsProfileMetricUserValuesTrends">;
  "getGamificationScorecardsProfileMetricValuesTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsProfileMetricValuesTrends">;
  "getGamificationScorecardsUser": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUser">;
  "getGamificationScorecardsUserAttendance": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUserAttendance">;
  "getGamificationScorecardsUserBestpoints": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUserBestpoints">;
  "getGamificationScorecardsUserPointsAlltime": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUserPointsAlltime">;
  "getGamificationScorecardsUserPointsTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUserPointsTrends">;
  "getGamificationScorecardsUsersPointsAverage": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUsersPointsAverage">;
  "getGamificationScorecardsUsersValuesAverage": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUsersValuesAverage">;
  "getGamificationScorecardsUsersValuesTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUsersValuesTrends">;
  "getGamificationScorecardsUserValuesTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsUserValuesTrends">;
  "getGamificationScorecardsValuesAverage": GenesysCloudFullApiOperationInput<"getGamificationScorecardsValuesAverage">;
  "getGamificationScorecardsValuesTrends": GenesysCloudFullApiOperationInput<"getGamificationScorecardsValuesTrends">;
  "getGamificationStatus": GenesysCloudFullApiOperationInput<"getGamificationStatus">;
  "getGamificationTemplate": GenesysCloudFullApiOperationInput<"getGamificationTemplate">;
  "getGamificationTemplates": GenesysCloudFullApiOperationInput<"getGamificationTemplates">;
  "patchEmployeeperformanceExternalmetricsDefinition": GenesysCloudFullApiOperationInput<"patchEmployeeperformanceExternalmetricsDefinition">;
  "patchGamificationContest": GenesysCloudFullApiOperationInput<"patchGamificationContest">;
  "postEmployeeperformanceExternalmetricsData": GenesysCloudFullApiOperationInput<"postEmployeeperformanceExternalmetricsData">;
  "postEmployeeperformanceExternalmetricsDefinitions": GenesysCloudFullApiOperationInput<"postEmployeeperformanceExternalmetricsDefinitions">;
  "postGamificationContests": GenesysCloudFullApiOperationInput<"postGamificationContests">;
  "postGamificationContestsUploadsPrizeimages": GenesysCloudFullApiOperationInput<"postGamificationContestsUploadsPrizeimages">;
  "postGamificationProfileActivate": GenesysCloudFullApiOperationInput<"postGamificationProfileActivate">;
  "postGamificationProfileDeactivate": GenesysCloudFullApiOperationInput<"postGamificationProfileDeactivate">;
  "postGamificationProfileMembers": GenesysCloudFullApiOperationInput<"postGamificationProfileMembers">;
  "postGamificationProfileMembersValidate": GenesysCloudFullApiOperationInput<"postGamificationProfileMembersValidate">;
  "postGamificationProfileMetricLink": GenesysCloudFullApiOperationInput<"postGamificationProfileMetricLink">;
  "postGamificationProfileMetrics": GenesysCloudFullApiOperationInput<"postGamificationProfileMetrics">;
  "postGamificationProfiles": GenesysCloudFullApiOperationInput<"postGamificationProfiles">;
  "postGamificationProfilesUserQuery": GenesysCloudFullApiOperationInput<"postGamificationProfilesUserQuery">;
  "postGamificationProfilesUsersMeQuery": GenesysCloudFullApiOperationInput<"postGamificationProfilesUsersMeQuery">;
  "putGamificationContest": GenesysCloudFullApiOperationInput<"putGamificationContest">;
  "putGamificationProfile": GenesysCloudFullApiOperationInput<"putGamificationProfile">;
  "putGamificationProfileMetric": GenesysCloudFullApiOperationInput<"putGamificationProfileMetric">;
  "putGamificationStatus": GenesysCloudFullApiOperationInput<"putGamificationStatus">;
}

export interface GenesysCloudFullApiGamificationGeneratedClient {
  DeleteEmployeeperformanceExternalmetricsDefinition(...args: GenesysCloudFullApiOperationArgs<"deleteEmployeeperformanceExternalmetricsDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["deleteEmployeeperformanceExternalmetricsDefinition"]>;
  DeleteGamificationContest(...args: GenesysCloudFullApiOperationArgs<"deleteGamificationContest">): Promise<GenesysCloudFullApiOperationResponseMap["deleteGamificationContest"]>;
  GetEmployeeperformanceExternalmetricsDefinition(...args: GenesysCloudFullApiOperationArgs<"getEmployeeperformanceExternalmetricsDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getEmployeeperformanceExternalmetricsDefinition"]>;
  GetEmployeeperformanceExternalmetricsDefinitions(...args: GenesysCloudFullApiOperationArgs<"getEmployeeperformanceExternalmetricsDefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getEmployeeperformanceExternalmetricsDefinitions"]>;
  GetGamificationContest(...args: GenesysCloudFullApiOperationArgs<"getGamificationContest">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContest"]>;
  GetGamificationContestAgentsScores(...args: GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScores">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContestAgentsScores"]>;
  GetGamificationContestAgentsScoresMe(...args: GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScoresMe">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContestAgentsScoresMe"]>;
  GetGamificationContestAgentsScoresTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScoresTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContestAgentsScoresTrends"]>;
  GetGamificationContestAgentsScoresTrendsMe(...args: GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScoresTrendsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContestAgentsScoresTrendsMe"]>;
  GetGamificationContestPrizeimage(...args: GenesysCloudFullApiOperationArgs<"getGamificationContestPrizeimage">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContestPrizeimage"]>;
  GetGamificationContests(...args: GenesysCloudFullApiOperationArgs<"getGamificationContests">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContests"]>;
  GetGamificationContestsMe(...args: GenesysCloudFullApiOperationArgs<"getGamificationContestsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationContestsMe"]>;
  GetGamificationInsights(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsights">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsights"]>;
  GetGamificationInsightsDetails(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsDetails"]>;
  GetGamificationInsightsGroupsTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsGroupsTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsGroupsTrends"]>;
  GetGamificationInsightsGroupsTrendsAll(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsGroupsTrendsAll">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsGroupsTrendsAll"]>;
  GetGamificationInsightsManagers(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsManagers">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsManagers"]>;
  GetGamificationInsightsMembers(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsMembers"]>;
  GetGamificationInsightsRankings(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsRankings">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsRankings"]>;
  GetGamificationInsightsTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsTrends"]>;
  GetGamificationInsightsUserDetails(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsUserDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsUserDetails"]>;
  GetGamificationInsightsUserTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationInsightsUserTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationInsightsUserTrends"]>;
  GetGamificationLeaderboard(...args: GenesysCloudFullApiOperationArgs<"getGamificationLeaderboard">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationLeaderboard"]>;
  GetGamificationLeaderboardAll(...args: GenesysCloudFullApiOperationArgs<"getGamificationLeaderboardAll">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationLeaderboardAll"]>;
  GetGamificationLeaderboardAllBestpoints(...args: GenesysCloudFullApiOperationArgs<"getGamificationLeaderboardAllBestpoints">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationLeaderboardAllBestpoints"]>;
  GetGamificationLeaderboardBestpoints(...args: GenesysCloudFullApiOperationArgs<"getGamificationLeaderboardBestpoints">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationLeaderboardBestpoints"]>;
  GetGamificationMetricdefinition(...args: GenesysCloudFullApiOperationArgs<"getGamificationMetricdefinition">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationMetricdefinition"]>;
  GetGamificationMetricdefinitions(...args: GenesysCloudFullApiOperationArgs<"getGamificationMetricdefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationMetricdefinitions"]>;
  GetGamificationProfile(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfile">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfile"]>;
  GetGamificationProfileMembers(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfileMembers">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfileMembers"]>;
  GetGamificationProfileMetric(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfileMetric">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfileMetric"]>;
  GetGamificationProfileMetrics(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfileMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfileMetrics"]>;
  GetGamificationProfileMetricsObjectivedetails(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfileMetricsObjectivedetails">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfileMetricsObjectivedetails"]>;
  GetGamificationProfiles(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfiles">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfiles"]>;
  GetGamificationProfilesUser(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfilesUser">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfilesUser"]>;
  GetGamificationProfilesUsersMe(...args: GenesysCloudFullApiOperationArgs<"getGamificationProfilesUsersMe">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationProfilesUsersMe"]>;
  GetGamificationScorecards(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecards">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecards"]>;
  GetGamificationScorecardsAttendance(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsAttendance">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsAttendance"]>;
  GetGamificationScorecardsBestpoints(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsBestpoints">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsBestpoints"]>;
  GetGamificationScorecardsPointsAlltime(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsPointsAlltime">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsPointsAlltime"]>;
  GetGamificationScorecardsPointsAverage(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsPointsAverage">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsPointsAverage"]>;
  GetGamificationScorecardsPointsTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsPointsTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsPointsTrends"]>;
  GetGamificationScorecardsProfileMetricUsersValuesTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsProfileMetricUsersValuesTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsProfileMetricUsersValuesTrends"]>;
  GetGamificationScorecardsProfileMetricUserValuesTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsProfileMetricUserValuesTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsProfileMetricUserValuesTrends"]>;
  GetGamificationScorecardsProfileMetricValuesTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsProfileMetricValuesTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsProfileMetricValuesTrends"]>;
  GetGamificationScorecardsUser(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUser">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUser"]>;
  GetGamificationScorecardsUserAttendance(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserAttendance">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUserAttendance"]>;
  GetGamificationScorecardsUserBestpoints(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserBestpoints">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUserBestpoints"]>;
  GetGamificationScorecardsUserPointsAlltime(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserPointsAlltime">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUserPointsAlltime"]>;
  GetGamificationScorecardsUserPointsTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserPointsTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUserPointsTrends"]>;
  GetGamificationScorecardsUsersPointsAverage(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUsersPointsAverage">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUsersPointsAverage"]>;
  GetGamificationScorecardsUsersValuesAverage(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUsersValuesAverage">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUsersValuesAverage"]>;
  GetGamificationScorecardsUsersValuesTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUsersValuesTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUsersValuesTrends"]>;
  GetGamificationScorecardsUserValuesTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserValuesTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsUserValuesTrends"]>;
  GetGamificationScorecardsValuesAverage(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsValuesAverage">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsValuesAverage"]>;
  GetGamificationScorecardsValuesTrends(...args: GenesysCloudFullApiOperationArgs<"getGamificationScorecardsValuesTrends">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationScorecardsValuesTrends"]>;
  GetGamificationStatus(...args: GenesysCloudFullApiOperationArgs<"getGamificationStatus">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationStatus"]>;
  GetGamificationTemplate(...args: GenesysCloudFullApiOperationArgs<"getGamificationTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationTemplate"]>;
  GetGamificationTemplates(...args: GenesysCloudFullApiOperationArgs<"getGamificationTemplates">): Promise<GenesysCloudFullApiOperationResponseMap["getGamificationTemplates"]>;
  PatchEmployeeperformanceExternalmetricsDefinition(...args: GenesysCloudFullApiOperationArgs<"patchEmployeeperformanceExternalmetricsDefinition">): Promise<GenesysCloudFullApiOperationResponseMap["patchEmployeeperformanceExternalmetricsDefinition"]>;
  PatchGamificationContest(...args: GenesysCloudFullApiOperationArgs<"patchGamificationContest">): Promise<GenesysCloudFullApiOperationResponseMap["patchGamificationContest"]>;
  PostEmployeeperformanceExternalmetricsData(...args: GenesysCloudFullApiOperationArgs<"postEmployeeperformanceExternalmetricsData">): Promise<GenesysCloudFullApiOperationResponseMap["postEmployeeperformanceExternalmetricsData"]>;
  PostEmployeeperformanceExternalmetricsDefinitions(...args: GenesysCloudFullApiOperationArgs<"postEmployeeperformanceExternalmetricsDefinitions">): Promise<GenesysCloudFullApiOperationResponseMap["postEmployeeperformanceExternalmetricsDefinitions"]>;
  PostGamificationContests(...args: GenesysCloudFullApiOperationArgs<"postGamificationContests">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationContests"]>;
  PostGamificationContestsUploadsPrizeimages(...args: GenesysCloudFullApiOperationArgs<"postGamificationContestsUploadsPrizeimages">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationContestsUploadsPrizeimages"]>;
  PostGamificationProfileActivate(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfileActivate">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfileActivate"]>;
  PostGamificationProfileDeactivate(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfileDeactivate">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfileDeactivate"]>;
  PostGamificationProfileMembers(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfileMembers">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfileMembers"]>;
  PostGamificationProfileMembersValidate(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfileMembersValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfileMembersValidate"]>;
  PostGamificationProfileMetricLink(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfileMetricLink">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfileMetricLink"]>;
  PostGamificationProfileMetrics(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfileMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfileMetrics"]>;
  PostGamificationProfiles(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfiles">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfiles"]>;
  PostGamificationProfilesUserQuery(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfilesUserQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfilesUserQuery"]>;
  PostGamificationProfilesUsersMeQuery(...args: GenesysCloudFullApiOperationArgs<"postGamificationProfilesUsersMeQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postGamificationProfilesUsersMeQuery"]>;
  PutGamificationContest(...args: GenesysCloudFullApiOperationArgs<"putGamificationContest">): Promise<GenesysCloudFullApiOperationResponseMap["putGamificationContest"]>;
  PutGamificationProfile(...args: GenesysCloudFullApiOperationArgs<"putGamificationProfile">): Promise<GenesysCloudFullApiOperationResponseMap["putGamificationProfile"]>;
  PutGamificationProfileMetric(...args: GenesysCloudFullApiOperationArgs<"putGamificationProfileMetric">): Promise<GenesysCloudFullApiOperationResponseMap["putGamificationProfileMetric"]>;
  PutGamificationStatus(...args: GenesysCloudFullApiOperationArgs<"putGamificationStatus">): Promise<GenesysCloudFullApiOperationResponseMap["putGamificationStatus"]>;
}

export const GenesysCloudFullApiGamificationGeneratedFunctionNames = [
  "DeleteEmployeeperformanceExternalmetricsDefinition",
  "DeleteGamificationContest",
  "GetEmployeeperformanceExternalmetricsDefinition",
  "GetEmployeeperformanceExternalmetricsDefinitions",
  "GetGamificationContest",
  "GetGamificationContestAgentsScores",
  "GetGamificationContestAgentsScoresMe",
  "GetGamificationContestAgentsScoresTrends",
  "GetGamificationContestAgentsScoresTrendsMe",
  "GetGamificationContestPrizeimage",
  "GetGamificationContests",
  "GetGamificationContestsMe",
  "GetGamificationInsights",
  "GetGamificationInsightsDetails",
  "GetGamificationInsightsGroupsTrends",
  "GetGamificationInsightsGroupsTrendsAll",
  "GetGamificationInsightsManagers",
  "GetGamificationInsightsMembers",
  "GetGamificationInsightsRankings",
  "GetGamificationInsightsTrends",
  "GetGamificationInsightsUserDetails",
  "GetGamificationInsightsUserTrends",
  "GetGamificationLeaderboard",
  "GetGamificationLeaderboardAll",
  "GetGamificationLeaderboardAllBestpoints",
  "GetGamificationLeaderboardBestpoints",
  "GetGamificationMetricdefinition",
  "GetGamificationMetricdefinitions",
  "GetGamificationProfile",
  "GetGamificationProfileMembers",
  "GetGamificationProfileMetric",
  "GetGamificationProfileMetrics",
  "GetGamificationProfileMetricsObjectivedetails",
  "GetGamificationProfiles",
  "GetGamificationProfilesUser",
  "GetGamificationProfilesUsersMe",
  "GetGamificationScorecards",
  "GetGamificationScorecardsAttendance",
  "GetGamificationScorecardsBestpoints",
  "GetGamificationScorecardsPointsAlltime",
  "GetGamificationScorecardsPointsAverage",
  "GetGamificationScorecardsPointsTrends",
  "GetGamificationScorecardsProfileMetricUsersValuesTrends",
  "GetGamificationScorecardsProfileMetricUserValuesTrends",
  "GetGamificationScorecardsProfileMetricValuesTrends",
  "GetGamificationScorecardsUser",
  "GetGamificationScorecardsUserAttendance",
  "GetGamificationScorecardsUserBestpoints",
  "GetGamificationScorecardsUserPointsAlltime",
  "GetGamificationScorecardsUserPointsTrends",
  "GetGamificationScorecardsUsersPointsAverage",
  "GetGamificationScorecardsUsersValuesAverage",
  "GetGamificationScorecardsUsersValuesTrends",
  "GetGamificationScorecardsUserValuesTrends",
  "GetGamificationScorecardsValuesAverage",
  "GetGamificationScorecardsValuesTrends",
  "GetGamificationStatus",
  "GetGamificationTemplate",
  "GetGamificationTemplates",
  "PatchEmployeeperformanceExternalmetricsDefinition",
  "PatchGamificationContest",
  "PostEmployeeperformanceExternalmetricsData",
  "PostEmployeeperformanceExternalmetricsDefinitions",
  "PostGamificationContests",
  "PostGamificationContestsUploadsPrizeimages",
  "PostGamificationProfileActivate",
  "PostGamificationProfileDeactivate",
  "PostGamificationProfileMembers",
  "PostGamificationProfileMembersValidate",
  "PostGamificationProfileMetricLink",
  "PostGamificationProfileMetrics",
  "PostGamificationProfiles",
  "PostGamificationProfilesUserQuery",
  "PostGamificationProfilesUsersMeQuery",
  "PutGamificationContest",
  "PutGamificationProfile",
  "PutGamificationProfileMetric",
  "PutGamificationStatus"
] as const satisfies readonly (keyof GenesysCloudFullApiGamificationGeneratedClient)[];

export function createGenesysCloudFullApiGamificationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiGamificationGeneratedClient {
  return {
    DeleteEmployeeperformanceExternalmetricsDefinition: (...args) => callOperation("deleteEmployeeperformanceExternalmetricsDefinition", ...(args as GenesysCloudFullApiOperationArgs<"deleteEmployeeperformanceExternalmetricsDefinition">)),
    DeleteGamificationContest: (...args) => callOperation("deleteGamificationContest", ...(args as GenesysCloudFullApiOperationArgs<"deleteGamificationContest">)),
    GetEmployeeperformanceExternalmetricsDefinition: (...args) => callOperation("getEmployeeperformanceExternalmetricsDefinition", ...(args as GenesysCloudFullApiOperationArgs<"getEmployeeperformanceExternalmetricsDefinition">)),
    GetEmployeeperformanceExternalmetricsDefinitions: (...args) => callOperation("getEmployeeperformanceExternalmetricsDefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getEmployeeperformanceExternalmetricsDefinitions">)),
    GetGamificationContest: (...args) => callOperation("getGamificationContest", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContest">)),
    GetGamificationContestAgentsScores: (...args) => callOperation("getGamificationContestAgentsScores", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScores">)),
    GetGamificationContestAgentsScoresMe: (...args) => callOperation("getGamificationContestAgentsScoresMe", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScoresMe">)),
    GetGamificationContestAgentsScoresTrends: (...args) => callOperation("getGamificationContestAgentsScoresTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScoresTrends">)),
    GetGamificationContestAgentsScoresTrendsMe: (...args) => callOperation("getGamificationContestAgentsScoresTrendsMe", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContestAgentsScoresTrendsMe">)),
    GetGamificationContestPrizeimage: (...args) => callOperation("getGamificationContestPrizeimage", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContestPrizeimage">)),
    GetGamificationContests: (...args) => callOperation("getGamificationContests", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContests">)),
    GetGamificationContestsMe: (...args) => callOperation("getGamificationContestsMe", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationContestsMe">)),
    GetGamificationInsights: (...args) => callOperation("getGamificationInsights", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsights">)),
    GetGamificationInsightsDetails: (...args) => callOperation("getGamificationInsightsDetails", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsDetails">)),
    GetGamificationInsightsGroupsTrends: (...args) => callOperation("getGamificationInsightsGroupsTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsGroupsTrends">)),
    GetGamificationInsightsGroupsTrendsAll: (...args) => callOperation("getGamificationInsightsGroupsTrendsAll", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsGroupsTrendsAll">)),
    GetGamificationInsightsManagers: (...args) => callOperation("getGamificationInsightsManagers", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsManagers">)),
    GetGamificationInsightsMembers: (...args) => callOperation("getGamificationInsightsMembers", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsMembers">)),
    GetGamificationInsightsRankings: (...args) => callOperation("getGamificationInsightsRankings", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsRankings">)),
    GetGamificationInsightsTrends: (...args) => callOperation("getGamificationInsightsTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsTrends">)),
    GetGamificationInsightsUserDetails: (...args) => callOperation("getGamificationInsightsUserDetails", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsUserDetails">)),
    GetGamificationInsightsUserTrends: (...args) => callOperation("getGamificationInsightsUserTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationInsightsUserTrends">)),
    GetGamificationLeaderboard: (...args) => callOperation("getGamificationLeaderboard", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationLeaderboard">)),
    GetGamificationLeaderboardAll: (...args) => callOperation("getGamificationLeaderboardAll", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationLeaderboardAll">)),
    GetGamificationLeaderboardAllBestpoints: (...args) => callOperation("getGamificationLeaderboardAllBestpoints", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationLeaderboardAllBestpoints">)),
    GetGamificationLeaderboardBestpoints: (...args) => callOperation("getGamificationLeaderboardBestpoints", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationLeaderboardBestpoints">)),
    GetGamificationMetricdefinition: (...args) => callOperation("getGamificationMetricdefinition", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationMetricdefinition">)),
    GetGamificationMetricdefinitions: (...args) => callOperation("getGamificationMetricdefinitions", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationMetricdefinitions">)),
    GetGamificationProfile: (...args) => callOperation("getGamificationProfile", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfile">)),
    GetGamificationProfileMembers: (...args) => callOperation("getGamificationProfileMembers", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfileMembers">)),
    GetGamificationProfileMetric: (...args) => callOperation("getGamificationProfileMetric", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfileMetric">)),
    GetGamificationProfileMetrics: (...args) => callOperation("getGamificationProfileMetrics", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfileMetrics">)),
    GetGamificationProfileMetricsObjectivedetails: (...args) => callOperation("getGamificationProfileMetricsObjectivedetails", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfileMetricsObjectivedetails">)),
    GetGamificationProfiles: (...args) => callOperation("getGamificationProfiles", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfiles">)),
    GetGamificationProfilesUser: (...args) => callOperation("getGamificationProfilesUser", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfilesUser">)),
    GetGamificationProfilesUsersMe: (...args) => callOperation("getGamificationProfilesUsersMe", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationProfilesUsersMe">)),
    GetGamificationScorecards: (...args) => callOperation("getGamificationScorecards", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecards">)),
    GetGamificationScorecardsAttendance: (...args) => callOperation("getGamificationScorecardsAttendance", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsAttendance">)),
    GetGamificationScorecardsBestpoints: (...args) => callOperation("getGamificationScorecardsBestpoints", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsBestpoints">)),
    GetGamificationScorecardsPointsAlltime: (...args) => callOperation("getGamificationScorecardsPointsAlltime", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsPointsAlltime">)),
    GetGamificationScorecardsPointsAverage: (...args) => callOperation("getGamificationScorecardsPointsAverage", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsPointsAverage">)),
    GetGamificationScorecardsPointsTrends: (...args) => callOperation("getGamificationScorecardsPointsTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsPointsTrends">)),
    GetGamificationScorecardsProfileMetricUsersValuesTrends: (...args) => callOperation("getGamificationScorecardsProfileMetricUsersValuesTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsProfileMetricUsersValuesTrends">)),
    GetGamificationScorecardsProfileMetricUserValuesTrends: (...args) => callOperation("getGamificationScorecardsProfileMetricUserValuesTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsProfileMetricUserValuesTrends">)),
    GetGamificationScorecardsProfileMetricValuesTrends: (...args) => callOperation("getGamificationScorecardsProfileMetricValuesTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsProfileMetricValuesTrends">)),
    GetGamificationScorecardsUser: (...args) => callOperation("getGamificationScorecardsUser", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUser">)),
    GetGamificationScorecardsUserAttendance: (...args) => callOperation("getGamificationScorecardsUserAttendance", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserAttendance">)),
    GetGamificationScorecardsUserBestpoints: (...args) => callOperation("getGamificationScorecardsUserBestpoints", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserBestpoints">)),
    GetGamificationScorecardsUserPointsAlltime: (...args) => callOperation("getGamificationScorecardsUserPointsAlltime", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserPointsAlltime">)),
    GetGamificationScorecardsUserPointsTrends: (...args) => callOperation("getGamificationScorecardsUserPointsTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserPointsTrends">)),
    GetGamificationScorecardsUsersPointsAverage: (...args) => callOperation("getGamificationScorecardsUsersPointsAverage", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUsersPointsAverage">)),
    GetGamificationScorecardsUsersValuesAverage: (...args) => callOperation("getGamificationScorecardsUsersValuesAverage", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUsersValuesAverage">)),
    GetGamificationScorecardsUsersValuesTrends: (...args) => callOperation("getGamificationScorecardsUsersValuesTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUsersValuesTrends">)),
    GetGamificationScorecardsUserValuesTrends: (...args) => callOperation("getGamificationScorecardsUserValuesTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsUserValuesTrends">)),
    GetGamificationScorecardsValuesAverage: (...args) => callOperation("getGamificationScorecardsValuesAverage", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsValuesAverage">)),
    GetGamificationScorecardsValuesTrends: (...args) => callOperation("getGamificationScorecardsValuesTrends", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationScorecardsValuesTrends">)),
    GetGamificationStatus: (...args) => callOperation("getGamificationStatus", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationStatus">)),
    GetGamificationTemplate: (...args) => callOperation("getGamificationTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationTemplate">)),
    GetGamificationTemplates: (...args) => callOperation("getGamificationTemplates", ...(args as GenesysCloudFullApiOperationArgs<"getGamificationTemplates">)),
    PatchEmployeeperformanceExternalmetricsDefinition: (...args) => callOperation("patchEmployeeperformanceExternalmetricsDefinition", ...(args as GenesysCloudFullApiOperationArgs<"patchEmployeeperformanceExternalmetricsDefinition">)),
    PatchGamificationContest: (...args) => callOperation("patchGamificationContest", ...(args as GenesysCloudFullApiOperationArgs<"patchGamificationContest">)),
    PostEmployeeperformanceExternalmetricsData: (...args) => callOperation("postEmployeeperformanceExternalmetricsData", ...(args as GenesysCloudFullApiOperationArgs<"postEmployeeperformanceExternalmetricsData">)),
    PostEmployeeperformanceExternalmetricsDefinitions: (...args) => callOperation("postEmployeeperformanceExternalmetricsDefinitions", ...(args as GenesysCloudFullApiOperationArgs<"postEmployeeperformanceExternalmetricsDefinitions">)),
    PostGamificationContests: (...args) => callOperation("postGamificationContests", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationContests">)),
    PostGamificationContestsUploadsPrizeimages: (...args) => callOperation("postGamificationContestsUploadsPrizeimages", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationContestsUploadsPrizeimages">)),
    PostGamificationProfileActivate: (...args) => callOperation("postGamificationProfileActivate", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfileActivate">)),
    PostGamificationProfileDeactivate: (...args) => callOperation("postGamificationProfileDeactivate", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfileDeactivate">)),
    PostGamificationProfileMembers: (...args) => callOperation("postGamificationProfileMembers", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfileMembers">)),
    PostGamificationProfileMembersValidate: (...args) => callOperation("postGamificationProfileMembersValidate", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfileMembersValidate">)),
    PostGamificationProfileMetricLink: (...args) => callOperation("postGamificationProfileMetricLink", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfileMetricLink">)),
    PostGamificationProfileMetrics: (...args) => callOperation("postGamificationProfileMetrics", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfileMetrics">)),
    PostGamificationProfiles: (...args) => callOperation("postGamificationProfiles", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfiles">)),
    PostGamificationProfilesUserQuery: (...args) => callOperation("postGamificationProfilesUserQuery", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfilesUserQuery">)),
    PostGamificationProfilesUsersMeQuery: (...args) => callOperation("postGamificationProfilesUsersMeQuery", ...(args as GenesysCloudFullApiOperationArgs<"postGamificationProfilesUsersMeQuery">)),
    PutGamificationContest: (...args) => callOperation("putGamificationContest", ...(args as GenesysCloudFullApiOperationArgs<"putGamificationContest">)),
    PutGamificationProfile: (...args) => callOperation("putGamificationProfile", ...(args as GenesysCloudFullApiOperationArgs<"putGamificationProfile">)),
    PutGamificationProfileMetric: (...args) => callOperation("putGamificationProfileMetric", ...(args as GenesysCloudFullApiOperationArgs<"putGamificationProfileMetric">)),
    PutGamificationStatus: (...args) => callOperation("putGamificationStatus", ...(args as GenesysCloudFullApiOperationArgs<"putGamificationStatus">)),
  };
}
