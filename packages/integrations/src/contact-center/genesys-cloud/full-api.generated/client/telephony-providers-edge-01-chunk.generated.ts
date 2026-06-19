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
export const GenesysCloudFullApiTelephonyProvidersEdge01OperationKeys = [
  "deleteTelephonyProvidersEdge",
  "deleteTelephonyProvidersEdgeLogicalinterface",
  "deleteTelephonyProvidersEdgesAlertablepresences",
  "deleteTelephonyProvidersEdgesCertificateauthority",
  "deleteTelephonyProvidersEdgesDidpool",
  "deleteTelephonyProvidersEdgesEdgegroup",
  "deleteTelephonyProvidersEdgesExtensionpool",
  "deleteTelephonyProvidersEdgeSoftwareupdate",
  "deleteTelephonyProvidersEdgesPhone",
  "deleteTelephonyProvidersEdgesPhonebasesetting",
  "deleteTelephonyProvidersEdgesSite",
  "deleteTelephonyProvidersEdgesSiteOutboundroute",
  "deleteTelephonyProvidersEdgesTrunkbasesetting",
  "getTelephonyProvidersEdge",
  "getTelephonyProvidersEdgeDiagnosticNslookup",
  "getTelephonyProvidersEdgeDiagnosticPing",
  "getTelephonyProvidersEdgeDiagnosticRoute",
  "getTelephonyProvidersEdgeDiagnosticTracepath",
  "getTelephonyProvidersEdgeLogicalinterface",
  "getTelephonyProvidersEdgeLogicalinterfaces",
  "getTelephonyProvidersEdgeLogsJob",
  "getTelephonyProvidersEdgeMetrics",
  "getTelephonyProvidersEdgePhysicalinterface",
  "getTelephonyProvidersEdgePhysicalinterfaces",
  "getTelephonyProvidersEdges",
  "getTelephonyProvidersEdgesAlertablepresences",
  "getTelephonyProvidersEdgesCertificateauthorities",
  "getTelephonyProvidersEdgesCertificateauthority",
  "getTelephonyProvidersEdgesDid",
  "getTelephonyProvidersEdgesDidpool",
  "getTelephonyProvidersEdgesDidpools",
  "getTelephonyProvidersEdgesDidpoolsDids",
  "getTelephonyProvidersEdgesDids",
  "getTelephonyProvidersEdgesEdgegroup",
  "getTelephonyProvidersEdgesEdgegroupEdgetrunkbase",
  "getTelephonyProvidersEdgesEdgegroups",
  "getTelephonyProvidersEdgesEdgeversionreport",
  "getTelephonyProvidersEdgeSetuppackage",
  "getTelephonyProvidersEdgesExpired",
  "getTelephonyProvidersEdgesExtension",
  "getTelephonyProvidersEdgesExtensionpool",
  "getTelephonyProvidersEdgesExtensionpools",
  "getTelephonyProvidersEdgesExtensionpoolsDivisionviews",
  "getTelephonyProvidersEdgesExtensions",
  "getTelephonyProvidersEdgesLine",
  "getTelephonyProvidersEdgesLinebasesetting",
  "getTelephonyProvidersEdgesLinebasesettings",
  "getTelephonyProvidersEdgesLines",
  "getTelephonyProvidersEdgesLinesTemplate",
  "getTelephonyProvidersEdgesLogicalinterfaces",
  "getTelephonyProvidersEdgesMetrics",
  "getTelephonyProvidersEdgeSoftwareupdate",
  "getTelephonyProvidersEdgeSoftwareversions",
  "getTelephonyProvidersEdgesOutboundroutes",
  "getTelephonyProvidersEdgesPhone",
  "getTelephonyProvidersEdgesPhonebasesetting",
  "getTelephonyProvidersEdgesPhonebasesettings",
  "getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases",
  "getTelephonyProvidersEdgesPhonebasesettingsTemplate",
  "getTelephonyProvidersEdgesPhones",
  "getTelephonyProvidersEdgesPhonesTemplate",
  "getTelephonyProvidersEdgesPhysicalinterfaces",
  "getTelephonyProvidersEdgesSite",
  "getTelephonyProvidersEdgesSiteNumberplan",
  "getTelephonyProvidersEdgesSiteNumberplans",
  "getTelephonyProvidersEdgesSiteNumberplansClassifications",
  "getTelephonyProvidersEdgesSiteOutboundroute",
  "getTelephonyProvidersEdgesSiteOutboundroutes",
  "getTelephonyProvidersEdgesSites",
  "getTelephonyProvidersEdgesSiteSiteconnections",
  "getTelephonyProvidersEdgesSitesSearch",
  "getTelephonyProvidersEdgesTimezones",
  "getTelephonyProvidersEdgesTrunk",
  "getTelephonyProvidersEdgesTrunkbasesetting",
  "getTelephonyProvidersEdgesTrunkbasesettings",
  "getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases",
  "getTelephonyProvidersEdgesTrunkbasesettingsTemplate",
  "getTelephonyProvidersEdgesTrunkMetrics",
  "getTelephonyProvidersEdgesTrunks",
  "getTelephonyProvidersEdgesTrunksMetrics"
] as const;
export type GenesysCloudFullApiTelephonyProvidersEdge01OperationKey = typeof GenesysCloudFullApiTelephonyProvidersEdge01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiTelephonyProvidersEdge01OperationPathParamMap {
  "deleteTelephonyProvidersEdge": { "edgeId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgeLogicalinterface": { "edgeId": GenesysCloudFullApiPathParamValue; "interfaceId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesAlertablepresences": {};
  "deleteTelephonyProvidersEdgesCertificateauthority": { "certificateId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesDidpool": { "didPoolId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesEdgegroup": { "edgeGroupId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesExtensionpool": { "extensionPoolId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgeSoftwareupdate": { "edgeId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesPhone": { "phoneId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesPhonebasesetting": { "phoneBaseId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesSite": { "siteId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesSiteOutboundroute": { "siteId": GenesysCloudFullApiPathParamValue; "outboundRouteId": GenesysCloudFullApiPathParamValue };
  "deleteTelephonyProvidersEdgesTrunkbasesetting": { "trunkBaseSettingsId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdge": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeDiagnosticNslookup": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeDiagnosticPing": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeDiagnosticRoute": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeDiagnosticTracepath": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeLogicalinterface": { "edgeId": GenesysCloudFullApiPathParamValue; "interfaceId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeLogicalinterfaces": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeLogsJob": { "edgeId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeMetrics": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgePhysicalinterface": { "edgeId": GenesysCloudFullApiPathParamValue; "interfaceId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgePhysicalinterfaces": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdges": {};
  "getTelephonyProvidersEdgesAlertablepresences": {};
  "getTelephonyProvidersEdgesCertificateauthorities": {};
  "getTelephonyProvidersEdgesCertificateauthority": { "certificateId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesDid": { "didId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesDidpool": { "didPoolId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesDidpools": {};
  "getTelephonyProvidersEdgesDidpoolsDids": {};
  "getTelephonyProvidersEdgesDids": {};
  "getTelephonyProvidersEdgesEdgegroup": { "edgeGroupId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesEdgegroupEdgetrunkbase": { "edgegroupId": GenesysCloudFullApiPathParamValue; "edgetrunkbaseId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesEdgegroups": {};
  "getTelephonyProvidersEdgesEdgeversionreport": {};
  "getTelephonyProvidersEdgeSetuppackage": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesExpired": {};
  "getTelephonyProvidersEdgesExtension": { "extensionId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesExtensionpool": { "extensionPoolId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesExtensionpools": {};
  "getTelephonyProvidersEdgesExtensionpoolsDivisionviews": {};
  "getTelephonyProvidersEdgesExtensions": {};
  "getTelephonyProvidersEdgesLine": { "lineId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesLinebasesetting": { "lineBaseId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesLinebasesettings": {};
  "getTelephonyProvidersEdgesLines": {};
  "getTelephonyProvidersEdgesLinesTemplate": {};
  "getTelephonyProvidersEdgesLogicalinterfaces": {};
  "getTelephonyProvidersEdgesMetrics": {};
  "getTelephonyProvidersEdgeSoftwareupdate": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgeSoftwareversions": { "edgeId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesOutboundroutes": {};
  "getTelephonyProvidersEdgesPhone": { "phoneId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesPhonebasesetting": { "phoneBaseId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesPhonebasesettings": {};
  "getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases": {};
  "getTelephonyProvidersEdgesPhonebasesettingsTemplate": {};
  "getTelephonyProvidersEdgesPhones": {};
  "getTelephonyProvidersEdgesPhonesTemplate": {};
  "getTelephonyProvidersEdgesPhysicalinterfaces": {};
  "getTelephonyProvidersEdgesSite": { "siteId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSiteNumberplan": { "siteId": GenesysCloudFullApiPathParamValue; "numberPlanId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSiteNumberplans": { "siteId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSiteNumberplansClassifications": { "siteId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSiteOutboundroute": { "siteId": GenesysCloudFullApiPathParamValue; "outboundRouteId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSiteOutboundroutes": { "siteId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSites": {};
  "getTelephonyProvidersEdgesSiteSiteconnections": { "siteId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesSitesSearch": {};
  "getTelephonyProvidersEdgesTimezones": {};
  "getTelephonyProvidersEdgesTrunk": { "trunkId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesTrunkbasesetting": { "trunkBaseSettingsId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesTrunkbasesettings": {};
  "getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases": {};
  "getTelephonyProvidersEdgesTrunkbasesettingsTemplate": {};
  "getTelephonyProvidersEdgesTrunkMetrics": { "trunkId": GenesysCloudFullApiPathParamValue };
  "getTelephonyProvidersEdgesTrunks": {};
  "getTelephonyProvidersEdgesTrunksMetrics": {};
}

export interface GenesysCloudFullApiTelephonyProvidersEdge01OperationRequestMap {
  "deleteTelephonyProvidersEdge": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdge">;
  "deleteTelephonyProvidersEdgeLogicalinterface": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgeLogicalinterface">;
  "deleteTelephonyProvidersEdgesAlertablepresences": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesAlertablepresences">;
  "deleteTelephonyProvidersEdgesCertificateauthority": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesCertificateauthority">;
  "deleteTelephonyProvidersEdgesDidpool": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesDidpool">;
  "deleteTelephonyProvidersEdgesEdgegroup": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesEdgegroup">;
  "deleteTelephonyProvidersEdgesExtensionpool": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesExtensionpool">;
  "deleteTelephonyProvidersEdgeSoftwareupdate": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgeSoftwareupdate">;
  "deleteTelephonyProvidersEdgesPhone": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesPhone">;
  "deleteTelephonyProvidersEdgesPhonebasesetting": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesPhonebasesetting">;
  "deleteTelephonyProvidersEdgesSite": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesSite">;
  "deleteTelephonyProvidersEdgesSiteOutboundroute": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesSiteOutboundroute">;
  "deleteTelephonyProvidersEdgesTrunkbasesetting": GenesysCloudFullApiOperationInput<"deleteTelephonyProvidersEdgesTrunkbasesetting">;
  "getTelephonyProvidersEdge": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdge">;
  "getTelephonyProvidersEdgeDiagnosticNslookup": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeDiagnosticNslookup">;
  "getTelephonyProvidersEdgeDiagnosticPing": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeDiagnosticPing">;
  "getTelephonyProvidersEdgeDiagnosticRoute": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeDiagnosticRoute">;
  "getTelephonyProvidersEdgeDiagnosticTracepath": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeDiagnosticTracepath">;
  "getTelephonyProvidersEdgeLogicalinterface": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeLogicalinterface">;
  "getTelephonyProvidersEdgeLogicalinterfaces": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeLogicalinterfaces">;
  "getTelephonyProvidersEdgeLogsJob": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeLogsJob">;
  "getTelephonyProvidersEdgeMetrics": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeMetrics">;
  "getTelephonyProvidersEdgePhysicalinterface": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgePhysicalinterface">;
  "getTelephonyProvidersEdgePhysicalinterfaces": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgePhysicalinterfaces">;
  "getTelephonyProvidersEdges": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdges">;
  "getTelephonyProvidersEdgesAlertablepresences": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesAlertablepresences">;
  "getTelephonyProvidersEdgesCertificateauthorities": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesCertificateauthorities">;
  "getTelephonyProvidersEdgesCertificateauthority": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesCertificateauthority">;
  "getTelephonyProvidersEdgesDid": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesDid">;
  "getTelephonyProvidersEdgesDidpool": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesDidpool">;
  "getTelephonyProvidersEdgesDidpools": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesDidpools">;
  "getTelephonyProvidersEdgesDidpoolsDids": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesDidpoolsDids">;
  "getTelephonyProvidersEdgesDids": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesDids">;
  "getTelephonyProvidersEdgesEdgegroup": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesEdgegroup">;
  "getTelephonyProvidersEdgesEdgegroupEdgetrunkbase": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesEdgegroupEdgetrunkbase">;
  "getTelephonyProvidersEdgesEdgegroups": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesEdgegroups">;
  "getTelephonyProvidersEdgesEdgeversionreport": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesEdgeversionreport">;
  "getTelephonyProvidersEdgeSetuppackage": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeSetuppackage">;
  "getTelephonyProvidersEdgesExpired": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesExpired">;
  "getTelephonyProvidersEdgesExtension": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesExtension">;
  "getTelephonyProvidersEdgesExtensionpool": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesExtensionpool">;
  "getTelephonyProvidersEdgesExtensionpools": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesExtensionpools">;
  "getTelephonyProvidersEdgesExtensionpoolsDivisionviews": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesExtensionpoolsDivisionviews">;
  "getTelephonyProvidersEdgesExtensions": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesExtensions">;
  "getTelephonyProvidersEdgesLine": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesLine">;
  "getTelephonyProvidersEdgesLinebasesetting": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesLinebasesetting">;
  "getTelephonyProvidersEdgesLinebasesettings": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesLinebasesettings">;
  "getTelephonyProvidersEdgesLines": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesLines">;
  "getTelephonyProvidersEdgesLinesTemplate": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesLinesTemplate">;
  "getTelephonyProvidersEdgesLogicalinterfaces": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesLogicalinterfaces">;
  "getTelephonyProvidersEdgesMetrics": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesMetrics">;
  "getTelephonyProvidersEdgeSoftwareupdate": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeSoftwareupdate">;
  "getTelephonyProvidersEdgeSoftwareversions": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgeSoftwareversions">;
  "getTelephonyProvidersEdgesOutboundroutes": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesOutboundroutes">;
  "getTelephonyProvidersEdgesPhone": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhone">;
  "getTelephonyProvidersEdgesPhonebasesetting": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhonebasesetting">;
  "getTelephonyProvidersEdgesPhonebasesettings": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhonebasesettings">;
  "getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases">;
  "getTelephonyProvidersEdgesPhonebasesettingsTemplate": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhonebasesettingsTemplate">;
  "getTelephonyProvidersEdgesPhones": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhones">;
  "getTelephonyProvidersEdgesPhonesTemplate": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhonesTemplate">;
  "getTelephonyProvidersEdgesPhysicalinterfaces": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesPhysicalinterfaces">;
  "getTelephonyProvidersEdgesSite": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSite">;
  "getTelephonyProvidersEdgesSiteNumberplan": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSiteNumberplan">;
  "getTelephonyProvidersEdgesSiteNumberplans": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSiteNumberplans">;
  "getTelephonyProvidersEdgesSiteNumberplansClassifications": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSiteNumberplansClassifications">;
  "getTelephonyProvidersEdgesSiteOutboundroute": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSiteOutboundroute">;
  "getTelephonyProvidersEdgesSiteOutboundroutes": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSiteOutboundroutes">;
  "getTelephonyProvidersEdgesSites": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSites">;
  "getTelephonyProvidersEdgesSiteSiteconnections": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSiteSiteconnections">;
  "getTelephonyProvidersEdgesSitesSearch": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesSitesSearch">;
  "getTelephonyProvidersEdgesTimezones": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTimezones">;
  "getTelephonyProvidersEdgesTrunk": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunk">;
  "getTelephonyProvidersEdgesTrunkbasesetting": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunkbasesetting">;
  "getTelephonyProvidersEdgesTrunkbasesettings": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunkbasesettings">;
  "getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases">;
  "getTelephonyProvidersEdgesTrunkbasesettingsTemplate": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunkbasesettingsTemplate">;
  "getTelephonyProvidersEdgesTrunkMetrics": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunkMetrics">;
  "getTelephonyProvidersEdgesTrunks": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunks">;
  "getTelephonyProvidersEdgesTrunksMetrics": GenesysCloudFullApiOperationInput<"getTelephonyProvidersEdgesTrunksMetrics">;
}

export interface GenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient {
  DeleteTelephonyProvidersEdge(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdge">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdge"]>;
  DeleteTelephonyProvidersEdgeLogicalinterface(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgeLogicalinterface">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgeLogicalinterface"]>;
  DeleteTelephonyProvidersEdgesAlertablepresences(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesAlertablepresences">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesAlertablepresences"]>;
  DeleteTelephonyProvidersEdgesCertificateauthority(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesCertificateauthority">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesCertificateauthority"]>;
  DeleteTelephonyProvidersEdgesDidpool(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesDidpool">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesDidpool"]>;
  DeleteTelephonyProvidersEdgesEdgegroup(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesEdgegroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesEdgegroup"]>;
  DeleteTelephonyProvidersEdgesExtensionpool(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesExtensionpool">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesExtensionpool"]>;
  DeleteTelephonyProvidersEdgeSoftwareupdate(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgeSoftwareupdate">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgeSoftwareupdate"]>;
  DeleteTelephonyProvidersEdgesPhone(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesPhone">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesPhone"]>;
  DeleteTelephonyProvidersEdgesPhonebasesetting(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesPhonebasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesPhonebasesetting"]>;
  DeleteTelephonyProvidersEdgesSite(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesSite">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesSite"]>;
  DeleteTelephonyProvidersEdgesSiteOutboundroute(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesSiteOutboundroute">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesSiteOutboundroute"]>;
  DeleteTelephonyProvidersEdgesTrunkbasesetting(...args: GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesTrunkbasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteTelephonyProvidersEdgesTrunkbasesetting"]>;
  GetTelephonyProvidersEdge(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdge">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdge"]>;
  GetTelephonyProvidersEdgeDiagnosticNslookup(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticNslookup">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeDiagnosticNslookup"]>;
  GetTelephonyProvidersEdgeDiagnosticPing(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticPing">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeDiagnosticPing"]>;
  GetTelephonyProvidersEdgeDiagnosticRoute(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticRoute">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeDiagnosticRoute"]>;
  GetTelephonyProvidersEdgeDiagnosticTracepath(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticTracepath">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeDiagnosticTracepath"]>;
  GetTelephonyProvidersEdgeLogicalinterface(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeLogicalinterface">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeLogicalinterface"]>;
  GetTelephonyProvidersEdgeLogicalinterfaces(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeLogicalinterfaces">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeLogicalinterfaces"]>;
  GetTelephonyProvidersEdgeLogsJob(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeLogsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeLogsJob"]>;
  GetTelephonyProvidersEdgeMetrics(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeMetrics"]>;
  GetTelephonyProvidersEdgePhysicalinterface(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgePhysicalinterface">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgePhysicalinterface"]>;
  GetTelephonyProvidersEdgePhysicalinterfaces(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgePhysicalinterfaces">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgePhysicalinterfaces"]>;
  GetTelephonyProvidersEdges(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdges">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdges"]>;
  GetTelephonyProvidersEdgesAlertablepresences(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesAlertablepresences">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesAlertablepresences"]>;
  GetTelephonyProvidersEdgesCertificateauthorities(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesCertificateauthorities">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesCertificateauthorities"]>;
  GetTelephonyProvidersEdgesCertificateauthority(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesCertificateauthority">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesCertificateauthority"]>;
  GetTelephonyProvidersEdgesDid(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDid">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesDid"]>;
  GetTelephonyProvidersEdgesDidpool(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDidpool">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesDidpool"]>;
  GetTelephonyProvidersEdgesDidpools(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDidpools">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesDidpools"]>;
  GetTelephonyProvidersEdgesDidpoolsDids(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDidpoolsDids">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesDidpoolsDids"]>;
  GetTelephonyProvidersEdgesDids(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDids">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesDids"]>;
  GetTelephonyProvidersEdgesEdgegroup(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgegroup">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesEdgegroup"]>;
  GetTelephonyProvidersEdgesEdgegroupEdgetrunkbase(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgegroupEdgetrunkbase">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesEdgegroupEdgetrunkbase"]>;
  GetTelephonyProvidersEdgesEdgegroups(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgegroups">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesEdgegroups"]>;
  GetTelephonyProvidersEdgesEdgeversionreport(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgeversionreport">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesEdgeversionreport"]>;
  GetTelephonyProvidersEdgeSetuppackage(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeSetuppackage">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeSetuppackage"]>;
  GetTelephonyProvidersEdgesExpired(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExpired">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesExpired"]>;
  GetTelephonyProvidersEdgesExtension(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtension">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesExtension"]>;
  GetTelephonyProvidersEdgesExtensionpool(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensionpool">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesExtensionpool"]>;
  GetTelephonyProvidersEdgesExtensionpools(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensionpools">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesExtensionpools"]>;
  GetTelephonyProvidersEdgesExtensionpoolsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensionpoolsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesExtensionpoolsDivisionviews"]>;
  GetTelephonyProvidersEdgesExtensions(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensions">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesExtensions"]>;
  GetTelephonyProvidersEdgesLine(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLine">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesLine"]>;
  GetTelephonyProvidersEdgesLinebasesetting(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLinebasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesLinebasesetting"]>;
  GetTelephonyProvidersEdgesLinebasesettings(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLinebasesettings">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesLinebasesettings"]>;
  GetTelephonyProvidersEdgesLines(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLines">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesLines"]>;
  GetTelephonyProvidersEdgesLinesTemplate(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLinesTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesLinesTemplate"]>;
  GetTelephonyProvidersEdgesLogicalinterfaces(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLogicalinterfaces">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesLogicalinterfaces"]>;
  GetTelephonyProvidersEdgesMetrics(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesMetrics"]>;
  GetTelephonyProvidersEdgeSoftwareupdate(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeSoftwareupdate">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeSoftwareupdate"]>;
  GetTelephonyProvidersEdgeSoftwareversions(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeSoftwareversions">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgeSoftwareversions"]>;
  GetTelephonyProvidersEdgesOutboundroutes(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesOutboundroutes">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesOutboundroutes"]>;
  GetTelephonyProvidersEdgesPhone(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhone">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhone"]>;
  GetTelephonyProvidersEdgesPhonebasesetting(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhonebasesetting"]>;
  GetTelephonyProvidersEdgesPhonebasesettings(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesettings">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhonebasesettings"]>;
  GetTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases"]>;
  GetTelephonyProvidersEdgesPhonebasesettingsTemplate(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesettingsTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhonebasesettingsTemplate"]>;
  GetTelephonyProvidersEdgesPhones(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhones">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhones"]>;
  GetTelephonyProvidersEdgesPhonesTemplate(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonesTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhonesTemplate"]>;
  GetTelephonyProvidersEdgesPhysicalinterfaces(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhysicalinterfaces">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesPhysicalinterfaces"]>;
  GetTelephonyProvidersEdgesSite(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSite">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSite"]>;
  GetTelephonyProvidersEdgesSiteNumberplan(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteNumberplan">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSiteNumberplan"]>;
  GetTelephonyProvidersEdgesSiteNumberplans(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteNumberplans">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSiteNumberplans"]>;
  GetTelephonyProvidersEdgesSiteNumberplansClassifications(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteNumberplansClassifications">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSiteNumberplansClassifications"]>;
  GetTelephonyProvidersEdgesSiteOutboundroute(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteOutboundroute">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSiteOutboundroute"]>;
  GetTelephonyProvidersEdgesSiteOutboundroutes(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteOutboundroutes">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSiteOutboundroutes"]>;
  GetTelephonyProvidersEdgesSites(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSites">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSites"]>;
  GetTelephonyProvidersEdgesSiteSiteconnections(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteSiteconnections">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSiteSiteconnections"]>;
  GetTelephonyProvidersEdgesSitesSearch(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSitesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesSitesSearch"]>;
  GetTelephonyProvidersEdgesTimezones(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTimezones">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTimezones"]>;
  GetTelephonyProvidersEdgesTrunk(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunk">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunk"]>;
  GetTelephonyProvidersEdgesTrunkbasesetting(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesetting">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunkbasesetting"]>;
  GetTelephonyProvidersEdgesTrunkbasesettings(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesettings">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunkbasesettings"]>;
  GetTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases"]>;
  GetTelephonyProvidersEdgesTrunkbasesettingsTemplate(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesettingsTemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunkbasesettingsTemplate"]>;
  GetTelephonyProvidersEdgesTrunkMetrics(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunkMetrics"]>;
  GetTelephonyProvidersEdgesTrunks(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunks">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunks"]>;
  GetTelephonyProvidersEdgesTrunksMetrics(...args: GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunksMetrics">): Promise<GenesysCloudFullApiOperationResponseMap["getTelephonyProvidersEdgesTrunksMetrics"]>;
}

export const GenesysCloudFullApiTelephonyProvidersEdge01GeneratedFunctionNames = [
  "DeleteTelephonyProvidersEdge",
  "DeleteTelephonyProvidersEdgeLogicalinterface",
  "DeleteTelephonyProvidersEdgesAlertablepresences",
  "DeleteTelephonyProvidersEdgesCertificateauthority",
  "DeleteTelephonyProvidersEdgesDidpool",
  "DeleteTelephonyProvidersEdgesEdgegroup",
  "DeleteTelephonyProvidersEdgesExtensionpool",
  "DeleteTelephonyProvidersEdgeSoftwareupdate",
  "DeleteTelephonyProvidersEdgesPhone",
  "DeleteTelephonyProvidersEdgesPhonebasesetting",
  "DeleteTelephonyProvidersEdgesSite",
  "DeleteTelephonyProvidersEdgesSiteOutboundroute",
  "DeleteTelephonyProvidersEdgesTrunkbasesetting",
  "GetTelephonyProvidersEdge",
  "GetTelephonyProvidersEdgeDiagnosticNslookup",
  "GetTelephonyProvidersEdgeDiagnosticPing",
  "GetTelephonyProvidersEdgeDiagnosticRoute",
  "GetTelephonyProvidersEdgeDiagnosticTracepath",
  "GetTelephonyProvidersEdgeLogicalinterface",
  "GetTelephonyProvidersEdgeLogicalinterfaces",
  "GetTelephonyProvidersEdgeLogsJob",
  "GetTelephonyProvidersEdgeMetrics",
  "GetTelephonyProvidersEdgePhysicalinterface",
  "GetTelephonyProvidersEdgePhysicalinterfaces",
  "GetTelephonyProvidersEdges",
  "GetTelephonyProvidersEdgesAlertablepresences",
  "GetTelephonyProvidersEdgesCertificateauthorities",
  "GetTelephonyProvidersEdgesCertificateauthority",
  "GetTelephonyProvidersEdgesDid",
  "GetTelephonyProvidersEdgesDidpool",
  "GetTelephonyProvidersEdgesDidpools",
  "GetTelephonyProvidersEdgesDidpoolsDids",
  "GetTelephonyProvidersEdgesDids",
  "GetTelephonyProvidersEdgesEdgegroup",
  "GetTelephonyProvidersEdgesEdgegroupEdgetrunkbase",
  "GetTelephonyProvidersEdgesEdgegroups",
  "GetTelephonyProvidersEdgesEdgeversionreport",
  "GetTelephonyProvidersEdgeSetuppackage",
  "GetTelephonyProvidersEdgesExpired",
  "GetTelephonyProvidersEdgesExtension",
  "GetTelephonyProvidersEdgesExtensionpool",
  "GetTelephonyProvidersEdgesExtensionpools",
  "GetTelephonyProvidersEdgesExtensionpoolsDivisionviews",
  "GetTelephonyProvidersEdgesExtensions",
  "GetTelephonyProvidersEdgesLine",
  "GetTelephonyProvidersEdgesLinebasesetting",
  "GetTelephonyProvidersEdgesLinebasesettings",
  "GetTelephonyProvidersEdgesLines",
  "GetTelephonyProvidersEdgesLinesTemplate",
  "GetTelephonyProvidersEdgesLogicalinterfaces",
  "GetTelephonyProvidersEdgesMetrics",
  "GetTelephonyProvidersEdgeSoftwareupdate",
  "GetTelephonyProvidersEdgeSoftwareversions",
  "GetTelephonyProvidersEdgesOutboundroutes",
  "GetTelephonyProvidersEdgesPhone",
  "GetTelephonyProvidersEdgesPhonebasesetting",
  "GetTelephonyProvidersEdgesPhonebasesettings",
  "GetTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases",
  "GetTelephonyProvidersEdgesPhonebasesettingsTemplate",
  "GetTelephonyProvidersEdgesPhones",
  "GetTelephonyProvidersEdgesPhonesTemplate",
  "GetTelephonyProvidersEdgesPhysicalinterfaces",
  "GetTelephonyProvidersEdgesSite",
  "GetTelephonyProvidersEdgesSiteNumberplan",
  "GetTelephonyProvidersEdgesSiteNumberplans",
  "GetTelephonyProvidersEdgesSiteNumberplansClassifications",
  "GetTelephonyProvidersEdgesSiteOutboundroute",
  "GetTelephonyProvidersEdgesSiteOutboundroutes",
  "GetTelephonyProvidersEdgesSites",
  "GetTelephonyProvidersEdgesSiteSiteconnections",
  "GetTelephonyProvidersEdgesSitesSearch",
  "GetTelephonyProvidersEdgesTimezones",
  "GetTelephonyProvidersEdgesTrunk",
  "GetTelephonyProvidersEdgesTrunkbasesetting",
  "GetTelephonyProvidersEdgesTrunkbasesettings",
  "GetTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases",
  "GetTelephonyProvidersEdgesTrunkbasesettingsTemplate",
  "GetTelephonyProvidersEdgesTrunkMetrics",
  "GetTelephonyProvidersEdgesTrunks",
  "GetTelephonyProvidersEdgesTrunksMetrics"
] as const satisfies readonly (keyof GenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient)[];

export function createGenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiTelephonyProvidersEdge01GeneratedClient {
  return {
    DeleteTelephonyProvidersEdge: (...args) => callOperation("deleteTelephonyProvidersEdge", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdge">)),
    DeleteTelephonyProvidersEdgeLogicalinterface: (...args) => callOperation("deleteTelephonyProvidersEdgeLogicalinterface", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgeLogicalinterface">)),
    DeleteTelephonyProvidersEdgesAlertablepresences: (...args) => callOperation("deleteTelephonyProvidersEdgesAlertablepresences", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesAlertablepresences">)),
    DeleteTelephonyProvidersEdgesCertificateauthority: (...args) => callOperation("deleteTelephonyProvidersEdgesCertificateauthority", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesCertificateauthority">)),
    DeleteTelephonyProvidersEdgesDidpool: (...args) => callOperation("deleteTelephonyProvidersEdgesDidpool", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesDidpool">)),
    DeleteTelephonyProvidersEdgesEdgegroup: (...args) => callOperation("deleteTelephonyProvidersEdgesEdgegroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesEdgegroup">)),
    DeleteTelephonyProvidersEdgesExtensionpool: (...args) => callOperation("deleteTelephonyProvidersEdgesExtensionpool", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesExtensionpool">)),
    DeleteTelephonyProvidersEdgeSoftwareupdate: (...args) => callOperation("deleteTelephonyProvidersEdgeSoftwareupdate", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgeSoftwareupdate">)),
    DeleteTelephonyProvidersEdgesPhone: (...args) => callOperation("deleteTelephonyProvidersEdgesPhone", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesPhone">)),
    DeleteTelephonyProvidersEdgesPhonebasesetting: (...args) => callOperation("deleteTelephonyProvidersEdgesPhonebasesetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesPhonebasesetting">)),
    DeleteTelephonyProvidersEdgesSite: (...args) => callOperation("deleteTelephonyProvidersEdgesSite", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesSite">)),
    DeleteTelephonyProvidersEdgesSiteOutboundroute: (...args) => callOperation("deleteTelephonyProvidersEdgesSiteOutboundroute", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesSiteOutboundroute">)),
    DeleteTelephonyProvidersEdgesTrunkbasesetting: (...args) => callOperation("deleteTelephonyProvidersEdgesTrunkbasesetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteTelephonyProvidersEdgesTrunkbasesetting">)),
    GetTelephonyProvidersEdge: (...args) => callOperation("getTelephonyProvidersEdge", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdge">)),
    GetTelephonyProvidersEdgeDiagnosticNslookup: (...args) => callOperation("getTelephonyProvidersEdgeDiagnosticNslookup", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticNslookup">)),
    GetTelephonyProvidersEdgeDiagnosticPing: (...args) => callOperation("getTelephonyProvidersEdgeDiagnosticPing", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticPing">)),
    GetTelephonyProvidersEdgeDiagnosticRoute: (...args) => callOperation("getTelephonyProvidersEdgeDiagnosticRoute", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticRoute">)),
    GetTelephonyProvidersEdgeDiagnosticTracepath: (...args) => callOperation("getTelephonyProvidersEdgeDiagnosticTracepath", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeDiagnosticTracepath">)),
    GetTelephonyProvidersEdgeLogicalinterface: (...args) => callOperation("getTelephonyProvidersEdgeLogicalinterface", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeLogicalinterface">)),
    GetTelephonyProvidersEdgeLogicalinterfaces: (...args) => callOperation("getTelephonyProvidersEdgeLogicalinterfaces", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeLogicalinterfaces">)),
    GetTelephonyProvidersEdgeLogsJob: (...args) => callOperation("getTelephonyProvidersEdgeLogsJob", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeLogsJob">)),
    GetTelephonyProvidersEdgeMetrics: (...args) => callOperation("getTelephonyProvidersEdgeMetrics", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeMetrics">)),
    GetTelephonyProvidersEdgePhysicalinterface: (...args) => callOperation("getTelephonyProvidersEdgePhysicalinterface", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgePhysicalinterface">)),
    GetTelephonyProvidersEdgePhysicalinterfaces: (...args) => callOperation("getTelephonyProvidersEdgePhysicalinterfaces", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgePhysicalinterfaces">)),
    GetTelephonyProvidersEdges: (...args) => callOperation("getTelephonyProvidersEdges", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdges">)),
    GetTelephonyProvidersEdgesAlertablepresences: (...args) => callOperation("getTelephonyProvidersEdgesAlertablepresences", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesAlertablepresences">)),
    GetTelephonyProvidersEdgesCertificateauthorities: (...args) => callOperation("getTelephonyProvidersEdgesCertificateauthorities", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesCertificateauthorities">)),
    GetTelephonyProvidersEdgesCertificateauthority: (...args) => callOperation("getTelephonyProvidersEdgesCertificateauthority", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesCertificateauthority">)),
    GetTelephonyProvidersEdgesDid: (...args) => callOperation("getTelephonyProvidersEdgesDid", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDid">)),
    GetTelephonyProvidersEdgesDidpool: (...args) => callOperation("getTelephonyProvidersEdgesDidpool", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDidpool">)),
    GetTelephonyProvidersEdgesDidpools: (...args) => callOperation("getTelephonyProvidersEdgesDidpools", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDidpools">)),
    GetTelephonyProvidersEdgesDidpoolsDids: (...args) => callOperation("getTelephonyProvidersEdgesDidpoolsDids", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDidpoolsDids">)),
    GetTelephonyProvidersEdgesDids: (...args) => callOperation("getTelephonyProvidersEdgesDids", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesDids">)),
    GetTelephonyProvidersEdgesEdgegroup: (...args) => callOperation("getTelephonyProvidersEdgesEdgegroup", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgegroup">)),
    GetTelephonyProvidersEdgesEdgegroupEdgetrunkbase: (...args) => callOperation("getTelephonyProvidersEdgesEdgegroupEdgetrunkbase", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgegroupEdgetrunkbase">)),
    GetTelephonyProvidersEdgesEdgegroups: (...args) => callOperation("getTelephonyProvidersEdgesEdgegroups", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgegroups">)),
    GetTelephonyProvidersEdgesEdgeversionreport: (...args) => callOperation("getTelephonyProvidersEdgesEdgeversionreport", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesEdgeversionreport">)),
    GetTelephonyProvidersEdgeSetuppackage: (...args) => callOperation("getTelephonyProvidersEdgeSetuppackage", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeSetuppackage">)),
    GetTelephonyProvidersEdgesExpired: (...args) => callOperation("getTelephonyProvidersEdgesExpired", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExpired">)),
    GetTelephonyProvidersEdgesExtension: (...args) => callOperation("getTelephonyProvidersEdgesExtension", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtension">)),
    GetTelephonyProvidersEdgesExtensionpool: (...args) => callOperation("getTelephonyProvidersEdgesExtensionpool", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensionpool">)),
    GetTelephonyProvidersEdgesExtensionpools: (...args) => callOperation("getTelephonyProvidersEdgesExtensionpools", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensionpools">)),
    GetTelephonyProvidersEdgesExtensionpoolsDivisionviews: (...args) => callOperation("getTelephonyProvidersEdgesExtensionpoolsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensionpoolsDivisionviews">)),
    GetTelephonyProvidersEdgesExtensions: (...args) => callOperation("getTelephonyProvidersEdgesExtensions", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesExtensions">)),
    GetTelephonyProvidersEdgesLine: (...args) => callOperation("getTelephonyProvidersEdgesLine", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLine">)),
    GetTelephonyProvidersEdgesLinebasesetting: (...args) => callOperation("getTelephonyProvidersEdgesLinebasesetting", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLinebasesetting">)),
    GetTelephonyProvidersEdgesLinebasesettings: (...args) => callOperation("getTelephonyProvidersEdgesLinebasesettings", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLinebasesettings">)),
    GetTelephonyProvidersEdgesLines: (...args) => callOperation("getTelephonyProvidersEdgesLines", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLines">)),
    GetTelephonyProvidersEdgesLinesTemplate: (...args) => callOperation("getTelephonyProvidersEdgesLinesTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLinesTemplate">)),
    GetTelephonyProvidersEdgesLogicalinterfaces: (...args) => callOperation("getTelephonyProvidersEdgesLogicalinterfaces", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesLogicalinterfaces">)),
    GetTelephonyProvidersEdgesMetrics: (...args) => callOperation("getTelephonyProvidersEdgesMetrics", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesMetrics">)),
    GetTelephonyProvidersEdgeSoftwareupdate: (...args) => callOperation("getTelephonyProvidersEdgeSoftwareupdate", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeSoftwareupdate">)),
    GetTelephonyProvidersEdgeSoftwareversions: (...args) => callOperation("getTelephonyProvidersEdgeSoftwareversions", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgeSoftwareversions">)),
    GetTelephonyProvidersEdgesOutboundroutes: (...args) => callOperation("getTelephonyProvidersEdgesOutboundroutes", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesOutboundroutes">)),
    GetTelephonyProvidersEdgesPhone: (...args) => callOperation("getTelephonyProvidersEdgesPhone", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhone">)),
    GetTelephonyProvidersEdgesPhonebasesetting: (...args) => callOperation("getTelephonyProvidersEdgesPhonebasesetting", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesetting">)),
    GetTelephonyProvidersEdgesPhonebasesettings: (...args) => callOperation("getTelephonyProvidersEdgesPhonebasesettings", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesettings">)),
    GetTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases: (...args) => callOperation("getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases">)),
    GetTelephonyProvidersEdgesPhonebasesettingsTemplate: (...args) => callOperation("getTelephonyProvidersEdgesPhonebasesettingsTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonebasesettingsTemplate">)),
    GetTelephonyProvidersEdgesPhones: (...args) => callOperation("getTelephonyProvidersEdgesPhones", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhones">)),
    GetTelephonyProvidersEdgesPhonesTemplate: (...args) => callOperation("getTelephonyProvidersEdgesPhonesTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhonesTemplate">)),
    GetTelephonyProvidersEdgesPhysicalinterfaces: (...args) => callOperation("getTelephonyProvidersEdgesPhysicalinterfaces", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesPhysicalinterfaces">)),
    GetTelephonyProvidersEdgesSite: (...args) => callOperation("getTelephonyProvidersEdgesSite", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSite">)),
    GetTelephonyProvidersEdgesSiteNumberplan: (...args) => callOperation("getTelephonyProvidersEdgesSiteNumberplan", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteNumberplan">)),
    GetTelephonyProvidersEdgesSiteNumberplans: (...args) => callOperation("getTelephonyProvidersEdgesSiteNumberplans", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteNumberplans">)),
    GetTelephonyProvidersEdgesSiteNumberplansClassifications: (...args) => callOperation("getTelephonyProvidersEdgesSiteNumberplansClassifications", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteNumberplansClassifications">)),
    GetTelephonyProvidersEdgesSiteOutboundroute: (...args) => callOperation("getTelephonyProvidersEdgesSiteOutboundroute", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteOutboundroute">)),
    GetTelephonyProvidersEdgesSiteOutboundroutes: (...args) => callOperation("getTelephonyProvidersEdgesSiteOutboundroutes", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteOutboundroutes">)),
    GetTelephonyProvidersEdgesSites: (...args) => callOperation("getTelephonyProvidersEdgesSites", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSites">)),
    GetTelephonyProvidersEdgesSiteSiteconnections: (...args) => callOperation("getTelephonyProvidersEdgesSiteSiteconnections", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSiteSiteconnections">)),
    GetTelephonyProvidersEdgesSitesSearch: (...args) => callOperation("getTelephonyProvidersEdgesSitesSearch", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesSitesSearch">)),
    GetTelephonyProvidersEdgesTimezones: (...args) => callOperation("getTelephonyProvidersEdgesTimezones", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTimezones">)),
    GetTelephonyProvidersEdgesTrunk: (...args) => callOperation("getTelephonyProvidersEdgesTrunk", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunk">)),
    GetTelephonyProvidersEdgesTrunkbasesetting: (...args) => callOperation("getTelephonyProvidersEdgesTrunkbasesetting", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesetting">)),
    GetTelephonyProvidersEdgesTrunkbasesettings: (...args) => callOperation("getTelephonyProvidersEdgesTrunkbasesettings", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesettings">)),
    GetTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases: (...args) => callOperation("getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases">)),
    GetTelephonyProvidersEdgesTrunkbasesettingsTemplate: (...args) => callOperation("getTelephonyProvidersEdgesTrunkbasesettingsTemplate", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkbasesettingsTemplate">)),
    GetTelephonyProvidersEdgesTrunkMetrics: (...args) => callOperation("getTelephonyProvidersEdgesTrunkMetrics", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunkMetrics">)),
    GetTelephonyProvidersEdgesTrunks: (...args) => callOperation("getTelephonyProvidersEdgesTrunks", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunks">)),
    GetTelephonyProvidersEdgesTrunksMetrics: (...args) => callOperation("getTelephonyProvidersEdgesTrunksMetrics", ...(args as GenesysCloudFullApiOperationArgs<"getTelephonyProvidersEdgesTrunksMetrics">)),
  };
}
