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
export const GenesysCloudFullApiTelephonyProvidersEdge02OperationKeys = [
  "getTelephonyProvidersEdgesTrunkswithrecording",
  "getTelephonyProvidersEdgeTrunks",
  "patchTelephonyProvidersEdgesSiteSiteconnections",
  "postTelephonyProvidersEdgeDiagnosticNslookup",
  "postTelephonyProvidersEdgeDiagnosticPing",
  "postTelephonyProvidersEdgeDiagnosticRoute",
  "postTelephonyProvidersEdgeDiagnosticTracepath",
  "postTelephonyProvidersEdgeLogicalinterfaces",
  "postTelephonyProvidersEdgeLogsJobs",
  "postTelephonyProvidersEdgeLogsJobUpload",
  "postTelephonyProvidersEdgeReboot",
  "postTelephonyProvidersEdges",
  "postTelephonyProvidersEdgesAddressvalidation",
  "postTelephonyProvidersEdgesCertificateauthorities",
  "postTelephonyProvidersEdgesDidpools",
  "postTelephonyProvidersEdgesEdgegroups",
  "postTelephonyProvidersEdgesExtensionpools",
  "postTelephonyProvidersEdgeSoftwareupdate",
  "postTelephonyProvidersEdgesPhonebasesettings",
  "postTelephonyProvidersEdgesPhoneReboot",
  "postTelephonyProvidersEdgesPhones",
  "postTelephonyProvidersEdgesPhonesReboot",
  "postTelephonyProvidersEdgesSiteOutboundroutes",
  "postTelephonyProvidersEdgesSites",
  "postTelephonyProvidersEdgesSitesSearch",
  "postTelephonyProvidersEdgeStatuscode",
  "postTelephonyProvidersEdgesTrunkbasesettings",
  "postTelephonyProvidersEdgeUnpair",
  "putTelephonyProvidersEdge",
  "putTelephonyProvidersEdgeLogicalinterface",
  "putTelephonyProvidersEdgesAlertablepresences",
  "putTelephonyProvidersEdgesCertificateauthority",
  "putTelephonyProvidersEdgesDidpool",
  "putTelephonyProvidersEdgesEdgegroup",
  "putTelephonyProvidersEdgesEdgegroupEdgetrunkbase",
  "putTelephonyProvidersEdgesExtensionpool",
  "putTelephonyProvidersEdgesPhone",
  "putTelephonyProvidersEdgesPhonebasesetting",
  "putTelephonyProvidersEdgesSite",
  "putTelephonyProvidersEdgesSiteNumberplans",
  "putTelephonyProvidersEdgesSiteOutboundroute",
  "putTelephonyProvidersEdgesSiteSiteconnections",
  "putTelephonyProvidersEdgesTrunkbasesetting"
] as const;
export type GenesysCloudFullApiTelephonyProvidersEdge02OperationKey = typeof GenesysCloudFullApiTelephonyProvidersEdge02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTelephonyProvidersEdge02OperationPathParamMap {
  "getTelephonyProvidersEdgesTrunkswithrecording": {};
  "getTelephonyProvidersEdgeTrunks": { "edgeId": GenesysCloudFullApiPathParamValue };
  "patchTelephonyProvidersEdgesSiteSiteconnections": { "siteId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeDiagnosticNslookup": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeDiagnosticPing": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeDiagnosticRoute": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeDiagnosticTracepath": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeLogicalinterfaces": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeLogsJobs": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeLogsJobUpload": { "edgeId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgeReboot": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdges": {};
  "postTelephonyProvidersEdgesAddressvalidation": {};
  "postTelephonyProvidersEdgesCertificateauthorities": {};
  "postTelephonyProvidersEdgesDidpools": {};
  "postTelephonyProvidersEdgesEdgegroups": {};
  "postTelephonyProvidersEdgesExtensionpools": {};
  "postTelephonyProvidersEdgeSoftwareupdate": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgesPhonebasesettings": {};
  "postTelephonyProvidersEdgesPhoneReboot": { "phoneId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgesPhones": {};
  "postTelephonyProvidersEdgesPhonesReboot": {};
  "postTelephonyProvidersEdgesSiteOutboundroutes": { "siteId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgesSites": {};
  "postTelephonyProvidersEdgesSitesSearch": {};
  "postTelephonyProvidersEdgeStatuscode": { "edgeId": GenesysCloudFullApiPathParamValue };
  "postTelephonyProvidersEdgesTrunkbasesettings": {};
  "postTelephonyProvidersEdgeUnpair": { "edgeId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdge": { "edgeId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgeLogicalinterface": { "edgeId": GenesysCloudFullApiPathParamValue; "interfaceId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesAlertablepresences": {};
  "putTelephonyProvidersEdgesCertificateauthority": { "certificateId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesDidpool": { "didPoolId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesEdgegroup": { "edgeGroupId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesEdgegroupEdgetrunkbase": { "edgegroupId": GenesysCloudFullApiPathParamValue; "edgetrunkbaseId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesExtensionpool": { "extensionPoolId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesPhone": { "phoneId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesPhonebasesetting": { "phoneBaseId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesSite": { "siteId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesSiteNumberplans": { "siteId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesSiteOutboundroute": { "siteId": GenesysCloudFullApiPathParamValue; "outboundRouteId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesSiteSiteconnections": { "siteId": GenesysCloudFullApiPathParamValue };
  "putTelephonyProvidersEdgesTrunkbasesetting": { "trunkBaseSettingsId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiTelephonyProvidersEdge02OperationRequestMap {
  "getTelephonyProvidersEdgesTrunkswithrecording": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunkswithrecording">;
  "getTelephonyProvidersEdgeTrunks": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeTrunks">;
  "patchTelephonyProvidersEdgesSiteSiteconnections": GenesysCloudFullApiOperationInput<"patchTelephonyProvidersEdgesSiteSiteconnections">;
  "postTelephonyProvidersEdgeDiagnosticNslookup": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeDiagnosticNslookup">;
  "postTelephonyProvidersEdgeDiagnosticPing": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeDiagnosticPing">;
  "postTelephonyProvidersEdgeDiagnosticRoute": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeDiagnosticRoute">;
  "postTelephonyProvidersEdgeDiagnosticTracepath": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeDiagnosticTracepath">;
  "postTelephonyProvidersEdgeLogicalinterfaces": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeLogicalinterfaces">;
  "postTelephonyProvidersEdgeLogsJobs": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeLogsJobs">;
  "postTelephonyProvidersEdgeLogsJobUpload": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeLogsJobUpload">;
  "postTelephonyProvidersEdgeReboot": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeReboot">;
  "postTelephonyProvidersEdges": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdges">;
  "postTelephonyProvidersEdgesAddressvalidation": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesAddressvalidation">;
  "postTelephonyProvidersEdgesCertificateauthorities": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesCertificateauthorities">;
  "postTelephonyProvidersEdgesDidpools": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesDidpools">;
  "postTelephonyProvidersEdgesEdgegroups": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesEdgegroups">;
  "postTelephonyProvidersEdgesExtensionpools": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesExtensionpools">;
  "postTelephonyProvidersEdgeSoftwareupdate": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeSoftwareupdate">;
  "postTelephonyProvidersEdgesPhonebasesettings": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesPhonebasesettings">;
  "postTelephonyProvidersEdgesPhoneReboot": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesPhoneReboot">;
  "postTelephonyProvidersEdgesPhones": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesPhones">;
  "postTelephonyProvidersEdgesPhonesReboot": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesPhonesReboot">;
  "postTelephonyProvidersEdgesSiteOutboundroutes": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesSiteOutboundroutes">;
  "postTelephonyProvidersEdgesSites": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesSites">;
  "postTelephonyProvidersEdgesSitesSearch": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesSitesSearch">;
  "postTelephonyProvidersEdgeStatuscode": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeStatuscode">;
  "postTelephonyProvidersEdgesTrunkbasesettings": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgesTrunkbasesettings">;
  "postTelephonyProvidersEdgeUnpair": GenesysCloudFullApiOperationInput<"postTelephonyProvidersEdgeUnpair">;
  "putTelephonyProvidersEdge": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdge">;
  "putTelephonyProvidersEdgeLogicalinterface": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgeLogicalinterface">;
  "putTelephonyProvidersEdgesAlertablepresences": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesAlertablepresences">;
  "putTelephonyProvidersEdgesCertificateauthority": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesCertificateauthority">;
  "putTelephonyProvidersEdgesDidpool": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesDidpool">;
  "putTelephonyProvidersEdgesEdgegroup": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesEdgegroup">;
  "putTelephonyProvidersEdgesEdgegroupEdgetrunkbase": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesEdgegroupEdgetrunkbase">;
  "putTelephonyProvidersEdgesExtensionpool": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesExtensionpool">;
  "putTelephonyProvidersEdgesPhone": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesPhone">;
  "putTelephonyProvidersEdgesPhonebasesetting": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesPhonebasesetting">;
  "putTelephonyProvidersEdgesSite": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesSite">;
  "putTelephonyProvidersEdgesSiteNumberplans": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesSiteNumberplans">;
  "putTelephonyProvidersEdgesSiteOutboundroute": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesSiteOutboundroute">;
  "putTelephonyProvidersEdgesSiteSiteconnections": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesSiteSiteconnections">;
  "putTelephonyProvidersEdgesTrunkbasesetting": GenesysCloudFullApiOperationInput<"putTelephonyProvidersEdgesTrunkbasesetting">;
}

export interface GenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient {
  GetTelephonyProvidersEdgesTrunkswithrecording(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkswithrecording">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunkswithrecording"]>;
  GetTelephonyProvidersEdgeTrunks(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeTrunks">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeTrunks"]>;
  PatchTelephonyProvidersEdgesSiteSiteconnections(...args: GenesysCloudFullApiOperationArgs<"patchTelephonyProvidersEdgesSiteSiteconnections">): Promise<GenesysCloudFullApiOperationResponseMap["patchTelephonyProvidersEdgesSiteSiteconnections"]>;
  PostTelephonyProvidersEdgeDiagnosticNslookup(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticNslookup">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeDiagnosticNslookup"]>;
  PostTelephonyProvidersEdgeDiagnosticPing(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticPing">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeDiagnosticPing"]>;
  PostTelephonyProvidersEdgeDiagnosticRoute(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticRoute">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeDiagnosticRoute"]>;
  PostTelephonyProvidersEdgeDiagnosticTracepath(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticTracepath">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeDiagnosticTracepath"]>;
  PostTelephonyProvidersEdgeLogicalinterfaces(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeLogicalinterfaces">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeLogicalinterfaces"]>;
  PostTelephonyProvidersEdgeLogsJobs(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeLogsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeLogsJobs"]>;
  PostTelephonyProvidersEdgeLogsJobUpload(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeLogsJobUpload">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeLogsJobUpload"]>;
  PostTelephonyProvidersEdgeReboot(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeReboot">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeReboot"]>;
  PostTelephonyProvidersEdges(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdges">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdges"]>;
  PostTelephonyProvidersEdgesAddressvalidation(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesAddressvalidation">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesAddressvalidation"]>;
  PostTelephonyProvidersEdgesCertificateauthorities(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesCertificateauthorities">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesCertificateauthorities"]>;
  PostTelephonyProvidersEdgesDidpools(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesDidpools">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesDidpools"]>;
  PostTelephonyProvidersEdgesEdgegroups(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesEdgegroups">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesEdgegroups"]>;
  PostTelephonyProvidersEdgesExtensionpools(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesExtensionpools">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesExtensionpools"]>;
  PostTelephonyProvidersEdgeSoftwareupdate(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeSoftwareupdate">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeSoftwareupdate"]>;
  PostTelephonyProvidersEdgesPhonebasesettings(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhonebasesettings">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesPhonebasesettings"]>;
  PostTelephonyProvidersEdgesPhoneReboot(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhoneReboot">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesPhoneReboot"]>;
  PostTelephonyProvidersEdgesPhones(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhones">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesPhones"]>;
  PostTelephonyProvidersEdgesPhonesReboot(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhonesReboot">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesPhonesReboot"]>;
  PostTelephonyProvidersEdgesSiteOutboundroutes(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesSiteOutboundroutes">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesSiteOutboundroutes"]>;
  PostTelephonyProvidersEdgesSites(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesSites">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesSites"]>;
  PostTelephonyProvidersEdgesSitesSearch(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesSitesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesSitesSearch"]>;
  PostTelephonyProvidersEdgeStatuscode(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeStatuscode">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeStatuscode"]>;
  PostTelephonyProvidersEdgesTrunkbasesettings(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesTrunkbasesettings">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgesTrunkbasesettings"]>;
  PostTelephonyProvidersEdgeUnpair(...args: GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeUnpair">): Promise<GenesysCloudFullApiOperationResponseMap["postTelephonyProvidersEdgeUnpair"]>;
  PutTelephonyProvidersEdge(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdge">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdge"]>;
  PutTelephonyProvidersEdgeLogicalinterface(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgeLogicalinterface">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgeLogicalinterface"]>;
  PutTelephonyProvidersEdgesAlertablepresences(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesAlertablepresences">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesAlertablepresences"]>;
  PutTelephonyProvidersEdgesCertificateauthority(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesCertificateauthority">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesCertificateauthority"]>;
  PutTelephonyProvidersEdgesDidpool(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesDidpool">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesDidpool"]>;
  PutTelephonyProvidersEdgesEdgegroup(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesEdgegroup">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesEdgegroup"]>;
  PutTelephonyProvidersEdgesEdgegroupEdgetrunkbase(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesEdgegroupEdgetrunkbase">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesEdgegroupEdgetrunkbase"]>;
  PutTelephonyProvidersEdgesExtensionpool(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesExtensionpool">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesExtensionpool"]>;
  PutTelephonyProvidersEdgesPhone(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesPhone">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesPhone"]>;
  PutTelephonyProvidersEdgesPhonebasesetting(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesPhonebasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesPhonebasesetting"]>;
  PutTelephonyProvidersEdgesSite(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSite">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesSite"]>;
  PutTelephonyProvidersEdgesSiteNumberplans(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSiteNumberplans">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesSiteNumberplans"]>;
  PutTelephonyProvidersEdgesSiteOutboundroute(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSiteOutboundroute">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesSiteOutboundroute"]>;
  PutTelephonyProvidersEdgesSiteSiteconnections(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSiteSiteconnections">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesSiteSiteconnections"]>;
  PutTelephonyProvidersEdgesTrunkbasesetting(...args: GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesTrunkbasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["putTelephonyProvidersEdgesTrunkbasesetting"]>;
}

export const GenesysCloudFullApiTelephonyProvidersEdge02GeneratedFunctionNames = [
  "GetTelephonyProvidersEdgesTrunkswithrecording",
  "GetTelephonyProvidersEdgeTrunks",
  "PatchTelephonyProvidersEdgesSiteSiteconnections",
  "PostTelephonyProvidersEdgeDiagnosticNslookup",
  "PostTelephonyProvidersEdgeDiagnosticPing",
  "PostTelephonyProvidersEdgeDiagnosticRoute",
  "PostTelephonyProvidersEdgeDiagnosticTracepath",
  "PostTelephonyProvidersEdgeLogicalinterfaces",
  "PostTelephonyProvidersEdgeLogsJobs",
  "PostTelephonyProvidersEdgeLogsJobUpload",
  "PostTelephonyProvidersEdgeReboot",
  "PostTelephonyProvidersEdges",
  "PostTelephonyProvidersEdgesAddressvalidation",
  "PostTelephonyProvidersEdgesCertificateauthorities",
  "PostTelephonyProvidersEdgesDidpools",
  "PostTelephonyProvidersEdgesEdgegroups",
  "PostTelephonyProvidersEdgesExtensionpools",
  "PostTelephonyProvidersEdgeSoftwareupdate",
  "PostTelephonyProvidersEdgesPhonebasesettings",
  "PostTelephonyProvidersEdgesPhoneReboot",
  "PostTelephonyProvidersEdgesPhones",
  "PostTelephonyProvidersEdgesPhonesReboot",
  "PostTelephonyProvidersEdgesSiteOutboundroutes",
  "PostTelephonyProvidersEdgesSites",
  "PostTelephonyProvidersEdgesSitesSearch",
  "PostTelephonyProvidersEdgeStatuscode",
  "PostTelephonyProvidersEdgesTrunkbasesettings",
  "PostTelephonyProvidersEdgeUnpair",
  "PutTelephonyProvidersEdge",
  "PutTelephonyProvidersEdgeLogicalinterface",
  "PutTelephonyProvidersEdgesAlertablepresences",
  "PutTelephonyProvidersEdgesCertificateauthority",
  "PutTelephonyProvidersEdgesDidpool",
  "PutTelephonyProvidersEdgesEdgegroup",
  "PutTelephonyProvidersEdgesEdgegroupEdgetrunkbase",
  "PutTelephonyProvidersEdgesExtensionpool",
  "PutTelephonyProvidersEdgesPhone",
  "PutTelephonyProvidersEdgesPhonebasesetting",
  "PutTelephonyProvidersEdgesSite",
  "PutTelephonyProvidersEdgesSiteNumberplans",
  "PutTelephonyProvidersEdgesSiteOutboundroute",
  "PutTelephonyProvidersEdgesSiteSiteconnections",
  "PutTelephonyProvidersEdgesTrunkbasesetting"
] as const satisfies readonly (keyof GenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient)[];

export function createGenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTelephonyProvidersEdge02GeneratedClient {
  return {
    GetTelephonyProvidersEdgesTrunkswithrecording: (...args) => callOperation("getTelephonyProvidersEdgesTrunkswithrecording", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkswithrecording">)),
    GetTelephonyProvidersEdgeTrunks: (...args) => callOperation("getTelephonyProvidersEdgeTrunks", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeTrunks">)),
    PatchTelephonyProvidersEdgesSiteSiteconnections: (...args) => callOperation("patchTelephonyProvidersEdgesSiteSiteconnections", ...(args as GenesysCloudFullApiOperationArgs<"patchTelephonyProvidersEdgesSiteSiteconnections">)),
    PostTelephonyProvidersEdgeDiagnosticNslookup: (...args) => callOperation("postTelephonyProvidersEdgeDiagnosticNslookup", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticNslookup">)),
    PostTelephonyProvidersEdgeDiagnosticPing: (...args) => callOperation("postTelephonyProvidersEdgeDiagnosticPing", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticPing">)),
    PostTelephonyProvidersEdgeDiagnosticRoute: (...args) => callOperation("postTelephonyProvidersEdgeDiagnosticRoute", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticRoute">)),
    PostTelephonyProvidersEdgeDiagnosticTracepath: (...args) => callOperation("postTelephonyProvidersEdgeDiagnosticTracepath", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeDiagnosticTracepath">)),
    PostTelephonyProvidersEdgeLogicalinterfaces: (...args) => callOperation("postTelephonyProvidersEdgeLogicalinterfaces", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeLogicalinterfaces">)),
    PostTelephonyProvidersEdgeLogsJobs: (...args) => callOperation("postTelephonyProvidersEdgeLogsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeLogsJobs">)),
    PostTelephonyProvidersEdgeLogsJobUpload: (...args) => callOperation("postTelephonyProvidersEdgeLogsJobUpload", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeLogsJobUpload">)),
    PostTelephonyProvidersEdgeReboot: (...args) => callOperation("postTelephonyProvidersEdgeReboot", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeReboot">)),
    PostTelephonyProvidersEdges: (...args) => callOperation("postTelephonyProvidersEdges", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdges">)),
    PostTelephonyProvidersEdgesAddressvalidation: (...args) => callOperation("postTelephonyProvidersEdgesAddressvalidation", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesAddressvalidation">)),
    PostTelephonyProvidersEdgesCertificateauthorities: (...args) => callOperation("postTelephonyProvidersEdgesCertificateauthorities", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesCertificateauthorities">)),
    PostTelephonyProvidersEdgesDidpools: (...args) => callOperation("postTelephonyProvidersEdgesDidpools", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesDidpools">)),
    PostTelephonyProvidersEdgesEdgegroups: (...args) => callOperation("postTelephonyProvidersEdgesEdgegroups", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesEdgegroups">)),
    PostTelephonyProvidersEdgesExtensionpools: (...args) => callOperation("postTelephonyProvidersEdgesExtensionpools", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesExtensionpools">)),
    PostTelephonyProvidersEdgeSoftwareupdate: (...args) => callOperation("postTelephonyProvidersEdgeSoftwareupdate", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeSoftwareupdate">)),
    PostTelephonyProvidersEdgesPhonebasesettings: (...args) => callOperation("postTelephonyProvidersEdgesPhonebasesettings", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhonebasesettings">)),
    PostTelephonyProvidersEdgesPhoneReboot: (...args) => callOperation("postTelephonyProvidersEdgesPhoneReboot", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhoneReboot">)),
    PostTelephonyProvidersEdgesPhones: (...args) => callOperation("postTelephonyProvidersEdgesPhones", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhones">)),
    PostTelephonyProvidersEdgesPhonesReboot: (...args) => callOperation("postTelephonyProvidersEdgesPhonesReboot", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesPhonesReboot">)),
    PostTelephonyProvidersEdgesSiteOutboundroutes: (...args) => callOperation("postTelephonyProvidersEdgesSiteOutboundroutes", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesSiteOutboundroutes">)),
    PostTelephonyProvidersEdgesSites: (...args) => callOperation("postTelephonyProvidersEdgesSites", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesSites">)),
    PostTelephonyProvidersEdgesSitesSearch: (...args) => callOperation("postTelephonyProvidersEdgesSitesSearch", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesSitesSearch">)),
    PostTelephonyProvidersEdgeStatuscode: (...args) => callOperation("postTelephonyProvidersEdgeStatuscode", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeStatuscode">)),
    PostTelephonyProvidersEdgesTrunkbasesettings: (...args) => callOperation("postTelephonyProvidersEdgesTrunkbasesettings", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgesTrunkbasesettings">)),
    PostTelephonyProvidersEdgeUnpair: (...args) => callOperation("postTelephonyProvidersEdgeUnpair", ...(args as GenesysCloudFullApiOperationArgs<"postTelephonyProvidersEdgeUnpair">)),
    PutTelephonyProvidersEdge: (...args) => callOperation("putTelephonyProvidersEdge", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdge">)),
    PutTelephonyProvidersEdgeLogicalinterface: (...args) => callOperation("putTelephonyProvidersEdgeLogicalinterface", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgeLogicalinterface">)),
    PutTelephonyProvidersEdgesAlertablepresences: (...args) => callOperation("putTelephonyProvidersEdgesAlertablepresences", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesAlertablepresences">)),
    PutTelephonyProvidersEdgesCertificateauthority: (...args) => callOperation("putTelephonyProvidersEdgesCertificateauthority", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesCertificateauthority">)),
    PutTelephonyProvidersEdgesDidpool: (...args) => callOperation("putTelephonyProvidersEdgesDidpool", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesDidpool">)),
    PutTelephonyProvidersEdgesEdgegroup: (...args) => callOperation("putTelephonyProvidersEdgesEdgegroup", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesEdgegroup">)),
    PutTelephonyProvidersEdgesEdgegroupEdgetrunkbase: (...args) => callOperation("putTelephonyProvidersEdgesEdgegroupEdgetrunkbase", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesEdgegroupEdgetrunkbase">)),
    PutTelephonyProvidersEdgesExtensionpool: (...args) => callOperation("putTelephonyProvidersEdgesExtensionpool", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesExtensionpool">)),
    PutTelephonyProvidersEdgesPhone: (...args) => callOperation("putTelephonyProvidersEdgesPhone", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesPhone">)),
    PutTelephonyProvidersEdgesPhonebasesetting: (...args) => callOperation("putTelephonyProvidersEdgesPhonebasesetting", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesPhonebasesetting">)),
    PutTelephonyProvidersEdgesSite: (...args) => callOperation("putTelephonyProvidersEdgesSite", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSite">)),
    PutTelephonyProvidersEdgesSiteNumberplans: (...args) => callOperation("putTelephonyProvidersEdgesSiteNumberplans", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSiteNumberplans">)),
    PutTelephonyProvidersEdgesSiteOutboundroute: (...args) => callOperation("putTelephonyProvidersEdgesSiteOutboundroute", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSiteOutboundroute">)),
    PutTelephonyProvidersEdgesSiteSiteconnections: (...args) => callOperation("putTelephonyProvidersEdgesSiteSiteconnections", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesSiteSiteconnections">)),
    PutTelephonyProvidersEdgesTrunkbasesetting: (...args) => callOperation("putTelephonyProvidersEdgesTrunkbasesetting", ...(args as GenesysCloudFullApiOperationArgs<"putTelephonyProvidersEdgesTrunkbasesetting">)),
  };
}
