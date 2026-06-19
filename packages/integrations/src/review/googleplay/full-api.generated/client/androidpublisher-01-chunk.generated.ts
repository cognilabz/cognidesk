// Generated endpoint chunk for GooglePlayFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GooglePlayGeneratedOperationCaller,
  GooglePlayFullApiOperationArgs,
  GooglePlayFullApiOperationInput,
  GooglePlayFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GooglePlayFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GooglePlayFullApiAndroidpublisher01OperationKeys = [
  "applications.dataSafety",
  "applications.deviceTierConfigs.create",
  "applications.deviceTierConfigs.get",
  "applications.deviceTierConfigs.list",
  "applications.tracks.releases.list",
  "apprecovery.addTargeting",
  "apprecovery.cancel",
  "apprecovery.create",
  "apprecovery.deploy",
  "apprecovery.list",
  "edits.apks.addexternallyhosted",
  "edits.apks.list",
  "edits.apks.upload",
  "edits.bundles.list",
  "edits.bundles.upload",
  "edits.commit",
  "edits.countryavailability.get",
  "edits.delete",
  "edits.deobfuscationfiles.upload",
  "edits.details.get",
  "edits.details.patch",
  "edits.details.update",
  "edits.expansionfiles.get",
  "edits.expansionfiles.patch",
  "edits.expansionfiles.update",
  "edits.expansionfiles.upload",
  "edits.get",
  "edits.images.delete",
  "edits.images.deleteall",
  "edits.images.list",
  "edits.images.upload",
  "edits.insert",
  "edits.listings.delete",
  "edits.listings.deleteall",
  "edits.listings.get",
  "edits.listings.list",
  "edits.listings.patch",
  "edits.listings.update",
  "edits.testers.get",
  "edits.testers.patch",
  "edits.testers.update",
  "edits.tracks.create",
  "edits.tracks.get",
  "edits.tracks.list",
  "edits.tracks.patch",
  "edits.tracks.update",
  "edits.validate",
  "externaltransactions.createexternaltransaction",
  "externaltransactions.getexternaltransaction",
  "externaltransactions.refundexternaltransaction",
  "generatedapks.download",
  "generatedapks.list",
  "grants.create",
  "grants.delete",
  "grants.patch",
  "inappproducts.batchDelete",
  "inappproducts.batchGet",
  "inappproducts.batchUpdate",
  "inappproducts.delete",
  "inappproducts.get",
  "inappproducts.insert",
  "inappproducts.list",
  "inappproducts.patch",
  "inappproducts.update",
  "internalappsharingartifacts.uploadapk",
  "internalappsharingartifacts.uploadbundle",
  "monetization.convertRegionPrices",
  "monetization.onetimeproducts.batchDelete",
  "monetization.onetimeproducts.batchGet",
  "monetization.onetimeproducts.batchUpdate",
  "monetization.onetimeproducts.delete",
  "monetization.onetimeproducts.get",
  "monetization.onetimeproducts.list",
  "monetization.onetimeproducts.patch",
  "monetization.onetimeproducts.purchaseOptions.batchDelete",
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates",
  "monetization.onetimeproducts.purchaseOptions.offers.activate",
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete",
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet",
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate"
] as const;
export type GooglePlayFullApiAndroidpublisher01OperationKey = typeof GooglePlayFullApiAndroidpublisher01OperationKeys[number];
// End hardened literal operation keys.

export interface GooglePlayFullApiAndroidpublisher01OperationPathParamMap {
  "applications.dataSafety": { "packageName": GooglePlayFullApiPathParamValue };
  "applications.deviceTierConfigs.create": { "packageName": GooglePlayFullApiPathParamValue };
  "applications.deviceTierConfigs.get": { "packageName": GooglePlayFullApiPathParamValue; "deviceTierConfigId": GooglePlayFullApiPathParamValue };
  "applications.deviceTierConfigs.list": { "packageName": GooglePlayFullApiPathParamValue };
  "applications.tracks.releases.list": { "parent": GooglePlayFullApiPathParamValue };
  "apprecovery.addTargeting": { "packageName": GooglePlayFullApiPathParamValue; "appRecoveryId": GooglePlayFullApiPathParamValue };
  "apprecovery.cancel": { "packageName": GooglePlayFullApiPathParamValue; "appRecoveryId": GooglePlayFullApiPathParamValue };
  "apprecovery.create": { "packageName": GooglePlayFullApiPathParamValue };
  "apprecovery.deploy": { "packageName": GooglePlayFullApiPathParamValue; "appRecoveryId": GooglePlayFullApiPathParamValue };
  "apprecovery.list": { "packageName": GooglePlayFullApiPathParamValue };
  "edits.apks.addexternallyhosted": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.apks.list": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.apks.upload": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.bundles.list": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.bundles.upload": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.commit": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.countryavailability.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.delete": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.deobfuscationfiles.upload": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "apkVersionCode": GooglePlayFullApiPathParamValue; "deobfuscationFileType": GooglePlayFullApiPathParamValue };
  "edits.details.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.details.patch": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.details.update": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.expansionfiles.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "apkVersionCode": GooglePlayFullApiPathParamValue; "expansionFileType": GooglePlayFullApiPathParamValue };
  "edits.expansionfiles.patch": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "apkVersionCode": GooglePlayFullApiPathParamValue; "expansionFileType": GooglePlayFullApiPathParamValue };
  "edits.expansionfiles.update": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "apkVersionCode": GooglePlayFullApiPathParamValue; "expansionFileType": GooglePlayFullApiPathParamValue };
  "edits.expansionfiles.upload": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "apkVersionCode": GooglePlayFullApiPathParamValue; "expansionFileType": GooglePlayFullApiPathParamValue };
  "edits.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.images.delete": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue; "imageType": GooglePlayFullApiPathParamValue; "imageId": GooglePlayFullApiPathParamValue };
  "edits.images.deleteall": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue; "imageType": GooglePlayFullApiPathParamValue };
  "edits.images.list": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue; "imageType": GooglePlayFullApiPathParamValue };
  "edits.images.upload": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue; "imageType": GooglePlayFullApiPathParamValue };
  "edits.insert": { "packageName": GooglePlayFullApiPathParamValue };
  "edits.listings.delete": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue };
  "edits.listings.deleteall": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.listings.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue };
  "edits.listings.list": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.listings.patch": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue };
  "edits.listings.update": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "language": GooglePlayFullApiPathParamValue };
  "edits.testers.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.testers.patch": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.testers.update": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.tracks.create": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.tracks.get": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.tracks.list": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "edits.tracks.patch": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.tracks.update": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue; "track": GooglePlayFullApiPathParamValue };
  "edits.validate": { "packageName": GooglePlayFullApiPathParamValue; "editId": GooglePlayFullApiPathParamValue };
  "externaltransactions.createexternaltransaction": { "parent": GooglePlayFullApiPathParamValue };
  "externaltransactions.getexternaltransaction": { "name": GooglePlayFullApiPathParamValue };
  "externaltransactions.refundexternaltransaction": { "name": GooglePlayFullApiPathParamValue };
  "generatedapks.download": { "packageName": GooglePlayFullApiPathParamValue; "versionCode": GooglePlayFullApiPathParamValue; "downloadId": GooglePlayFullApiPathParamValue };
  "generatedapks.list": { "packageName": GooglePlayFullApiPathParamValue; "versionCode": GooglePlayFullApiPathParamValue };
  "grants.create": { "parent": GooglePlayFullApiPathParamValue };
  "grants.delete": { "name": GooglePlayFullApiPathParamValue };
  "grants.patch": { "name": GooglePlayFullApiPathParamValue };
  "inappproducts.batchDelete": { "packageName": GooglePlayFullApiPathParamValue };
  "inappproducts.batchGet": { "packageName": GooglePlayFullApiPathParamValue };
  "inappproducts.batchUpdate": { "packageName": GooglePlayFullApiPathParamValue };
  "inappproducts.delete": { "packageName": GooglePlayFullApiPathParamValue; "sku": GooglePlayFullApiPathParamValue };
  "inappproducts.get": { "packageName": GooglePlayFullApiPathParamValue; "sku": GooglePlayFullApiPathParamValue };
  "inappproducts.insert": { "packageName": GooglePlayFullApiPathParamValue };
  "inappproducts.list": { "packageName": GooglePlayFullApiPathParamValue };
  "inappproducts.patch": { "packageName": GooglePlayFullApiPathParamValue; "sku": GooglePlayFullApiPathParamValue };
  "inappproducts.update": { "packageName": GooglePlayFullApiPathParamValue; "sku": GooglePlayFullApiPathParamValue };
  "internalappsharingartifacts.uploadapk": { "packageName": GooglePlayFullApiPathParamValue };
  "internalappsharingartifacts.uploadbundle": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.convertRegionPrices": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.batchDelete": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.batchGet": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.batchUpdate": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.delete": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.get": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.list": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.patch": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.batchDelete": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.activate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue };
}

export interface GooglePlayFullApiAndroidpublisher01OperationRequestMap {
  "applications.dataSafety": GooglePlayFullApiOperationInput<"applications.dataSafety">;
  "applications.deviceTierConfigs.create": GooglePlayFullApiOperationInput<"applications.deviceTierConfigs.create">;
  "applications.deviceTierConfigs.get": GooglePlayFullApiOperationInput<"applications.deviceTierConfigs.get">;
  "applications.deviceTierConfigs.list": GooglePlayFullApiOperationInput<"applications.deviceTierConfigs.list">;
  "applications.tracks.releases.list": GooglePlayFullApiOperationInput<"applications.tracks.releases.list">;
  "apprecovery.addTargeting": GooglePlayFullApiOperationInput<"apprecovery.addTargeting">;
  "apprecovery.cancel": GooglePlayFullApiOperationInput<"apprecovery.cancel">;
  "apprecovery.create": GooglePlayFullApiOperationInput<"apprecovery.create">;
  "apprecovery.deploy": GooglePlayFullApiOperationInput<"apprecovery.deploy">;
  "apprecovery.list": GooglePlayFullApiOperationInput<"apprecovery.list">;
  "edits.apks.addexternallyhosted": GooglePlayFullApiOperationInput<"edits.apks.addexternallyhosted">;
  "edits.apks.list": GooglePlayFullApiOperationInput<"edits.apks.list">;
  "edits.apks.upload": GooglePlayFullApiOperationInput<"edits.apks.upload">;
  "edits.bundles.list": GooglePlayFullApiOperationInput<"edits.bundles.list">;
  "edits.bundles.upload": GooglePlayFullApiOperationInput<"edits.bundles.upload">;
  "edits.commit": GooglePlayFullApiOperationInput<"edits.commit">;
  "edits.countryavailability.get": GooglePlayFullApiOperationInput<"edits.countryavailability.get">;
  "edits.delete": GooglePlayFullApiOperationInput<"edits.delete">;
  "edits.deobfuscationfiles.upload": GooglePlayFullApiOperationInput<"edits.deobfuscationfiles.upload">;
  "edits.details.get": GooglePlayFullApiOperationInput<"edits.details.get">;
  "edits.details.patch": GooglePlayFullApiOperationInput<"edits.details.patch">;
  "edits.details.update": GooglePlayFullApiOperationInput<"edits.details.update">;
  "edits.expansionfiles.get": GooglePlayFullApiOperationInput<"edits.expansionfiles.get">;
  "edits.expansionfiles.patch": GooglePlayFullApiOperationInput<"edits.expansionfiles.patch">;
  "edits.expansionfiles.update": GooglePlayFullApiOperationInput<"edits.expansionfiles.update">;
  "edits.expansionfiles.upload": GooglePlayFullApiOperationInput<"edits.expansionfiles.upload">;
  "edits.get": GooglePlayFullApiOperationInput<"edits.get">;
  "edits.images.delete": GooglePlayFullApiOperationInput<"edits.images.delete">;
  "edits.images.deleteall": GooglePlayFullApiOperationInput<"edits.images.deleteall">;
  "edits.images.list": GooglePlayFullApiOperationInput<"edits.images.list">;
  "edits.images.upload": GooglePlayFullApiOperationInput<"edits.images.upload">;
  "edits.insert": GooglePlayFullApiOperationInput<"edits.insert">;
  "edits.listings.delete": GooglePlayFullApiOperationInput<"edits.listings.delete">;
  "edits.listings.deleteall": GooglePlayFullApiOperationInput<"edits.listings.deleteall">;
  "edits.listings.get": GooglePlayFullApiOperationInput<"edits.listings.get">;
  "edits.listings.list": GooglePlayFullApiOperationInput<"edits.listings.list">;
  "edits.listings.patch": GooglePlayFullApiOperationInput<"edits.listings.patch">;
  "edits.listings.update": GooglePlayFullApiOperationInput<"edits.listings.update">;
  "edits.testers.get": GooglePlayFullApiOperationInput<"edits.testers.get">;
  "edits.testers.patch": GooglePlayFullApiOperationInput<"edits.testers.patch">;
  "edits.testers.update": GooglePlayFullApiOperationInput<"edits.testers.update">;
  "edits.tracks.create": GooglePlayFullApiOperationInput<"edits.tracks.create">;
  "edits.tracks.get": GooglePlayFullApiOperationInput<"edits.tracks.get">;
  "edits.tracks.list": GooglePlayFullApiOperationInput<"edits.tracks.list">;
  "edits.tracks.patch": GooglePlayFullApiOperationInput<"edits.tracks.patch">;
  "edits.tracks.update": GooglePlayFullApiOperationInput<"edits.tracks.update">;
  "edits.validate": GooglePlayFullApiOperationInput<"edits.validate">;
  "externaltransactions.createexternaltransaction": GooglePlayFullApiOperationInput<"externaltransactions.createexternaltransaction">;
  "externaltransactions.getexternaltransaction": GooglePlayFullApiOperationInput<"externaltransactions.getexternaltransaction">;
  "externaltransactions.refundexternaltransaction": GooglePlayFullApiOperationInput<"externaltransactions.refundexternaltransaction">;
  "generatedapks.download": GooglePlayFullApiOperationInput<"generatedapks.download">;
  "generatedapks.list": GooglePlayFullApiOperationInput<"generatedapks.list">;
  "grants.create": GooglePlayFullApiOperationInput<"grants.create">;
  "grants.delete": GooglePlayFullApiOperationInput<"grants.delete">;
  "grants.patch": GooglePlayFullApiOperationInput<"grants.patch">;
  "inappproducts.batchDelete": GooglePlayFullApiOperationInput<"inappproducts.batchDelete">;
  "inappproducts.batchGet": GooglePlayFullApiOperationInput<"inappproducts.batchGet">;
  "inappproducts.batchUpdate": GooglePlayFullApiOperationInput<"inappproducts.batchUpdate">;
  "inappproducts.delete": GooglePlayFullApiOperationInput<"inappproducts.delete">;
  "inappproducts.get": GooglePlayFullApiOperationInput<"inappproducts.get">;
  "inappproducts.insert": GooglePlayFullApiOperationInput<"inappproducts.insert">;
  "inappproducts.list": GooglePlayFullApiOperationInput<"inappproducts.list">;
  "inappproducts.patch": GooglePlayFullApiOperationInput<"inappproducts.patch">;
  "inappproducts.update": GooglePlayFullApiOperationInput<"inappproducts.update">;
  "internalappsharingartifacts.uploadapk": GooglePlayFullApiOperationInput<"internalappsharingartifacts.uploadapk">;
  "internalappsharingartifacts.uploadbundle": GooglePlayFullApiOperationInput<"internalappsharingartifacts.uploadbundle">;
  "monetization.convertRegionPrices": GooglePlayFullApiOperationInput<"monetization.convertRegionPrices">;
  "monetization.onetimeproducts.batchDelete": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.batchDelete">;
  "monetization.onetimeproducts.batchGet": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.batchGet">;
  "monetization.onetimeproducts.batchUpdate": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.batchUpdate">;
  "monetization.onetimeproducts.delete": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.delete">;
  "monetization.onetimeproducts.get": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.get">;
  "monetization.onetimeproducts.list": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.list">;
  "monetization.onetimeproducts.patch": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.patch">;
  "monetization.onetimeproducts.purchaseOptions.batchDelete": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.batchDelete">;
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.batchUpdateStates">;
  "monetization.onetimeproducts.purchaseOptions.offers.activate": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.activate">;
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.batchDelete">;
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.batchGet">;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.batchUpdate">;
}

export interface GooglePlayFullApiAndroidpublisher01GeneratedClient {
  ApplicationsDataSafety(...args: GooglePlayFullApiOperationArgs<"applications.dataSafety">): Promise<GooglePlayFullApiOperationResponseMap["applications.dataSafety"]>;
  ApplicationsDeviceTierConfigsCreate(...args: GooglePlayFullApiOperationArgs<"applications.deviceTierConfigs.create">): Promise<GooglePlayFullApiOperationResponseMap["applications.deviceTierConfigs.create"]>;
  ApplicationsDeviceTierConfigsGet(...args: GooglePlayFullApiOperationArgs<"applications.deviceTierConfigs.get">): Promise<GooglePlayFullApiOperationResponseMap["applications.deviceTierConfigs.get"]>;
  ApplicationsDeviceTierConfigsList(...args: GooglePlayFullApiOperationArgs<"applications.deviceTierConfigs.list">): Promise<GooglePlayFullApiOperationResponseMap["applications.deviceTierConfigs.list"]>;
  ApplicationsTracksReleasesList(...args: GooglePlayFullApiOperationArgs<"applications.tracks.releases.list">): Promise<GooglePlayFullApiOperationResponseMap["applications.tracks.releases.list"]>;
  ApprecoveryAddTargeting(...args: GooglePlayFullApiOperationArgs<"apprecovery.addTargeting">): Promise<GooglePlayFullApiOperationResponseMap["apprecovery.addTargeting"]>;
  ApprecoveryCancel(...args: GooglePlayFullApiOperationArgs<"apprecovery.cancel">): Promise<GooglePlayFullApiOperationResponseMap["apprecovery.cancel"]>;
  ApprecoveryCreate(...args: GooglePlayFullApiOperationArgs<"apprecovery.create">): Promise<GooglePlayFullApiOperationResponseMap["apprecovery.create"]>;
  ApprecoveryDeploy(...args: GooglePlayFullApiOperationArgs<"apprecovery.deploy">): Promise<GooglePlayFullApiOperationResponseMap["apprecovery.deploy"]>;
  ApprecoveryList(...args: GooglePlayFullApiOperationArgs<"apprecovery.list">): Promise<GooglePlayFullApiOperationResponseMap["apprecovery.list"]>;
  EditsApksAddexternallyhosted(...args: GooglePlayFullApiOperationArgs<"edits.apks.addexternallyhosted">): Promise<GooglePlayFullApiOperationResponseMap["edits.apks.addexternallyhosted"]>;
  EditsApksList(...args: GooglePlayFullApiOperationArgs<"edits.apks.list">): Promise<GooglePlayFullApiOperationResponseMap["edits.apks.list"]>;
  EditsApksUpload(...args: GooglePlayFullApiOperationArgs<"edits.apks.upload">): Promise<GooglePlayFullApiOperationResponseMap["edits.apks.upload"]>;
  EditsBundlesList(...args: GooglePlayFullApiOperationArgs<"edits.bundles.list">): Promise<GooglePlayFullApiOperationResponseMap["edits.bundles.list"]>;
  EditsBundlesUpload(...args: GooglePlayFullApiOperationArgs<"edits.bundles.upload">): Promise<GooglePlayFullApiOperationResponseMap["edits.bundles.upload"]>;
  EditsCommit(...args: GooglePlayFullApiOperationArgs<"edits.commit">): Promise<GooglePlayFullApiOperationResponseMap["edits.commit"]>;
  EditsCountryavailabilityGet(...args: GooglePlayFullApiOperationArgs<"edits.countryavailability.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.countryavailability.get"]>;
  EditsDelete(...args: GooglePlayFullApiOperationArgs<"edits.delete">): Promise<GooglePlayFullApiOperationResponseMap["edits.delete"]>;
  EditsDeobfuscationfilesUpload(...args: GooglePlayFullApiOperationArgs<"edits.deobfuscationfiles.upload">): Promise<GooglePlayFullApiOperationResponseMap["edits.deobfuscationfiles.upload"]>;
  EditsDetailsGet(...args: GooglePlayFullApiOperationArgs<"edits.details.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.details.get"]>;
  EditsDetailsPatch(...args: GooglePlayFullApiOperationArgs<"edits.details.patch">): Promise<GooglePlayFullApiOperationResponseMap["edits.details.patch"]>;
  EditsDetailsUpdate(...args: GooglePlayFullApiOperationArgs<"edits.details.update">): Promise<GooglePlayFullApiOperationResponseMap["edits.details.update"]>;
  EditsExpansionfilesGet(...args: GooglePlayFullApiOperationArgs<"edits.expansionfiles.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.expansionfiles.get"]>;
  EditsExpansionfilesPatch(...args: GooglePlayFullApiOperationArgs<"edits.expansionfiles.patch">): Promise<GooglePlayFullApiOperationResponseMap["edits.expansionfiles.patch"]>;
  EditsExpansionfilesUpdate(...args: GooglePlayFullApiOperationArgs<"edits.expansionfiles.update">): Promise<GooglePlayFullApiOperationResponseMap["edits.expansionfiles.update"]>;
  EditsExpansionfilesUpload(...args: GooglePlayFullApiOperationArgs<"edits.expansionfiles.upload">): Promise<GooglePlayFullApiOperationResponseMap["edits.expansionfiles.upload"]>;
  EditsGet(...args: GooglePlayFullApiOperationArgs<"edits.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.get"]>;
  EditsImagesDelete(...args: GooglePlayFullApiOperationArgs<"edits.images.delete">): Promise<GooglePlayFullApiOperationResponseMap["edits.images.delete"]>;
  EditsImagesDeleteall(...args: GooglePlayFullApiOperationArgs<"edits.images.deleteall">): Promise<GooglePlayFullApiOperationResponseMap["edits.images.deleteall"]>;
  EditsImagesList(...args: GooglePlayFullApiOperationArgs<"edits.images.list">): Promise<GooglePlayFullApiOperationResponseMap["edits.images.list"]>;
  EditsImagesUpload(...args: GooglePlayFullApiOperationArgs<"edits.images.upload">): Promise<GooglePlayFullApiOperationResponseMap["edits.images.upload"]>;
  EditsInsert(...args: GooglePlayFullApiOperationArgs<"edits.insert">): Promise<GooglePlayFullApiOperationResponseMap["edits.insert"]>;
  EditsListingsDelete(...args: GooglePlayFullApiOperationArgs<"edits.listings.delete">): Promise<GooglePlayFullApiOperationResponseMap["edits.listings.delete"]>;
  EditsListingsDeleteall(...args: GooglePlayFullApiOperationArgs<"edits.listings.deleteall">): Promise<GooglePlayFullApiOperationResponseMap["edits.listings.deleteall"]>;
  EditsListingsGet(...args: GooglePlayFullApiOperationArgs<"edits.listings.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.listings.get"]>;
  EditsListingsList(...args: GooglePlayFullApiOperationArgs<"edits.listings.list">): Promise<GooglePlayFullApiOperationResponseMap["edits.listings.list"]>;
  EditsListingsPatch(...args: GooglePlayFullApiOperationArgs<"edits.listings.patch">): Promise<GooglePlayFullApiOperationResponseMap["edits.listings.patch"]>;
  EditsListingsUpdate(...args: GooglePlayFullApiOperationArgs<"edits.listings.update">): Promise<GooglePlayFullApiOperationResponseMap["edits.listings.update"]>;
  EditsTestersGet(...args: GooglePlayFullApiOperationArgs<"edits.testers.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.testers.get"]>;
  EditsTestersPatch(...args: GooglePlayFullApiOperationArgs<"edits.testers.patch">): Promise<GooglePlayFullApiOperationResponseMap["edits.testers.patch"]>;
  EditsTestersUpdate(...args: GooglePlayFullApiOperationArgs<"edits.testers.update">): Promise<GooglePlayFullApiOperationResponseMap["edits.testers.update"]>;
  EditsTracksCreate(...args: GooglePlayFullApiOperationArgs<"edits.tracks.create">): Promise<GooglePlayFullApiOperationResponseMap["edits.tracks.create"]>;
  EditsTracksGet(...args: GooglePlayFullApiOperationArgs<"edits.tracks.get">): Promise<GooglePlayFullApiOperationResponseMap["edits.tracks.get"]>;
  EditsTracksList(...args: GooglePlayFullApiOperationArgs<"edits.tracks.list">): Promise<GooglePlayFullApiOperationResponseMap["edits.tracks.list"]>;
  EditsTracksPatch(...args: GooglePlayFullApiOperationArgs<"edits.tracks.patch">): Promise<GooglePlayFullApiOperationResponseMap["edits.tracks.patch"]>;
  EditsTracksUpdate(...args: GooglePlayFullApiOperationArgs<"edits.tracks.update">): Promise<GooglePlayFullApiOperationResponseMap["edits.tracks.update"]>;
  EditsValidate(...args: GooglePlayFullApiOperationArgs<"edits.validate">): Promise<GooglePlayFullApiOperationResponseMap["edits.validate"]>;
  ExternaltransactionsCreateexternaltransaction(...args: GooglePlayFullApiOperationArgs<"externaltransactions.createexternaltransaction">): Promise<GooglePlayFullApiOperationResponseMap["externaltransactions.createexternaltransaction"]>;
  ExternaltransactionsGetexternaltransaction(...args: GooglePlayFullApiOperationArgs<"externaltransactions.getexternaltransaction">): Promise<GooglePlayFullApiOperationResponseMap["externaltransactions.getexternaltransaction"]>;
  ExternaltransactionsRefundexternaltransaction(...args: GooglePlayFullApiOperationArgs<"externaltransactions.refundexternaltransaction">): Promise<GooglePlayFullApiOperationResponseMap["externaltransactions.refundexternaltransaction"]>;
  GeneratedapksDownload(...args: GooglePlayFullApiOperationArgs<"generatedapks.download">): Promise<GooglePlayFullApiOperationResponseMap["generatedapks.download"]>;
  GeneratedapksList(...args: GooglePlayFullApiOperationArgs<"generatedapks.list">): Promise<GooglePlayFullApiOperationResponseMap["generatedapks.list"]>;
  GrantsCreate(...args: GooglePlayFullApiOperationArgs<"grants.create">): Promise<GooglePlayFullApiOperationResponseMap["grants.create"]>;
  GrantsDelete(...args: GooglePlayFullApiOperationArgs<"grants.delete">): Promise<GooglePlayFullApiOperationResponseMap["grants.delete"]>;
  GrantsPatch(...args: GooglePlayFullApiOperationArgs<"grants.patch">): Promise<GooglePlayFullApiOperationResponseMap["grants.patch"]>;
  InappproductsBatchDelete(...args: GooglePlayFullApiOperationArgs<"inappproducts.batchDelete">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.batchDelete"]>;
  InappproductsBatchGet(...args: GooglePlayFullApiOperationArgs<"inappproducts.batchGet">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.batchGet"]>;
  InappproductsBatchUpdate(...args: GooglePlayFullApiOperationArgs<"inappproducts.batchUpdate">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.batchUpdate"]>;
  InappproductsDelete(...args: GooglePlayFullApiOperationArgs<"inappproducts.delete">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.delete"]>;
  InappproductsGet(...args: GooglePlayFullApiOperationArgs<"inappproducts.get">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.get"]>;
  InappproductsInsert(...args: GooglePlayFullApiOperationArgs<"inappproducts.insert">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.insert"]>;
  InappproductsList(...args: GooglePlayFullApiOperationArgs<"inappproducts.list">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.list"]>;
  InappproductsPatch(...args: GooglePlayFullApiOperationArgs<"inappproducts.patch">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.patch"]>;
  InappproductsUpdate(...args: GooglePlayFullApiOperationArgs<"inappproducts.update">): Promise<GooglePlayFullApiOperationResponseMap["inappproducts.update"]>;
  InternalappsharingartifactsUploadapk(...args: GooglePlayFullApiOperationArgs<"internalappsharingartifacts.uploadapk">): Promise<GooglePlayFullApiOperationResponseMap["internalappsharingartifacts.uploadapk"]>;
  InternalappsharingartifactsUploadbundle(...args: GooglePlayFullApiOperationArgs<"internalappsharingartifacts.uploadbundle">): Promise<GooglePlayFullApiOperationResponseMap["internalappsharingartifacts.uploadbundle"]>;
  MonetizationConvertRegionPrices(...args: GooglePlayFullApiOperationArgs<"monetization.convertRegionPrices">): Promise<GooglePlayFullApiOperationResponseMap["monetization.convertRegionPrices"]>;
  MonetizationOnetimeproductsBatchDelete(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.batchDelete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.batchDelete"]>;
  MonetizationOnetimeproductsBatchGet(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.batchGet">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.batchGet"]>;
  MonetizationOnetimeproductsBatchUpdate(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.batchUpdate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.batchUpdate"]>;
  MonetizationOnetimeproductsDelete(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.delete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.delete"]>;
  MonetizationOnetimeproductsGet(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.get">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.get"]>;
  MonetizationOnetimeproductsList(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.list">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.list"]>;
  MonetizationOnetimeproductsPatch(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.patch">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.patch"]>;
  MonetizationOnetimeproductsPurchaseOptionsBatchDelete(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.batchDelete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.batchDelete"]>;
  MonetizationOnetimeproductsPurchaseOptionsBatchUpdateStates(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.batchUpdateStates">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.batchUpdateStates"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersActivate(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.activate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.activate"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersBatchDelete(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchDelete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.batchDelete"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersBatchGet(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchGet">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.batchGet"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdate(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchUpdate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.batchUpdate"]>;
}

export const GooglePlayFullApiAndroidpublisher01GeneratedFunctionNames = [
  "ApplicationsDataSafety",
  "ApplicationsDeviceTierConfigsCreate",
  "ApplicationsDeviceTierConfigsGet",
  "ApplicationsDeviceTierConfigsList",
  "ApplicationsTracksReleasesList",
  "ApprecoveryAddTargeting",
  "ApprecoveryCancel",
  "ApprecoveryCreate",
  "ApprecoveryDeploy",
  "ApprecoveryList",
  "EditsApksAddexternallyhosted",
  "EditsApksList",
  "EditsApksUpload",
  "EditsBundlesList",
  "EditsBundlesUpload",
  "EditsCommit",
  "EditsCountryavailabilityGet",
  "EditsDelete",
  "EditsDeobfuscationfilesUpload",
  "EditsDetailsGet",
  "EditsDetailsPatch",
  "EditsDetailsUpdate",
  "EditsExpansionfilesGet",
  "EditsExpansionfilesPatch",
  "EditsExpansionfilesUpdate",
  "EditsExpansionfilesUpload",
  "EditsGet",
  "EditsImagesDelete",
  "EditsImagesDeleteall",
  "EditsImagesList",
  "EditsImagesUpload",
  "EditsInsert",
  "EditsListingsDelete",
  "EditsListingsDeleteall",
  "EditsListingsGet",
  "EditsListingsList",
  "EditsListingsPatch",
  "EditsListingsUpdate",
  "EditsTestersGet",
  "EditsTestersPatch",
  "EditsTestersUpdate",
  "EditsTracksCreate",
  "EditsTracksGet",
  "EditsTracksList",
  "EditsTracksPatch",
  "EditsTracksUpdate",
  "EditsValidate",
  "ExternaltransactionsCreateexternaltransaction",
  "ExternaltransactionsGetexternaltransaction",
  "ExternaltransactionsRefundexternaltransaction",
  "GeneratedapksDownload",
  "GeneratedapksList",
  "GrantsCreate",
  "GrantsDelete",
  "GrantsPatch",
  "InappproductsBatchDelete",
  "InappproductsBatchGet",
  "InappproductsBatchUpdate",
  "InappproductsDelete",
  "InappproductsGet",
  "InappproductsInsert",
  "InappproductsList",
  "InappproductsPatch",
  "InappproductsUpdate",
  "InternalappsharingartifactsUploadapk",
  "InternalappsharingartifactsUploadbundle",
  "MonetizationConvertRegionPrices",
  "MonetizationOnetimeproductsBatchDelete",
  "MonetizationOnetimeproductsBatchGet",
  "MonetizationOnetimeproductsBatchUpdate",
  "MonetizationOnetimeproductsDelete",
  "MonetizationOnetimeproductsGet",
  "MonetizationOnetimeproductsList",
  "MonetizationOnetimeproductsPatch",
  "MonetizationOnetimeproductsPurchaseOptionsBatchDelete",
  "MonetizationOnetimeproductsPurchaseOptionsBatchUpdateStates",
  "MonetizationOnetimeproductsPurchaseOptionsOffersActivate",
  "MonetizationOnetimeproductsPurchaseOptionsOffersBatchDelete",
  "MonetizationOnetimeproductsPurchaseOptionsOffersBatchGet",
  "MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdate"
] as const satisfies readonly (keyof GooglePlayFullApiAndroidpublisher01GeneratedClient)[];

export function createGooglePlayFullApiAndroidpublisher01GeneratedClient(
  callOperation: GooglePlayGeneratedOperationCaller,
): GooglePlayFullApiAndroidpublisher01GeneratedClient {
  return {
    ApplicationsDataSafety: (...args) => callOperation("applications.dataSafety", ...(args as GooglePlayFullApiOperationArgs<"applications.dataSafety">)),
    ApplicationsDeviceTierConfigsCreate: (...args) => callOperation("applications.deviceTierConfigs.create", ...(args as GooglePlayFullApiOperationArgs<"applications.deviceTierConfigs.create">)),
    ApplicationsDeviceTierConfigsGet: (...args) => callOperation("applications.deviceTierConfigs.get", ...(args as GooglePlayFullApiOperationArgs<"applications.deviceTierConfigs.get">)),
    ApplicationsDeviceTierConfigsList: (...args) => callOperation("applications.deviceTierConfigs.list", ...(args as GooglePlayFullApiOperationArgs<"applications.deviceTierConfigs.list">)),
    ApplicationsTracksReleasesList: (...args) => callOperation("applications.tracks.releases.list", ...(args as GooglePlayFullApiOperationArgs<"applications.tracks.releases.list">)),
    ApprecoveryAddTargeting: (...args) => callOperation("apprecovery.addTargeting", ...(args as GooglePlayFullApiOperationArgs<"apprecovery.addTargeting">)),
    ApprecoveryCancel: (...args) => callOperation("apprecovery.cancel", ...(args as GooglePlayFullApiOperationArgs<"apprecovery.cancel">)),
    ApprecoveryCreate: (...args) => callOperation("apprecovery.create", ...(args as GooglePlayFullApiOperationArgs<"apprecovery.create">)),
    ApprecoveryDeploy: (...args) => callOperation("apprecovery.deploy", ...(args as GooglePlayFullApiOperationArgs<"apprecovery.deploy">)),
    ApprecoveryList: (...args) => callOperation("apprecovery.list", ...(args as GooglePlayFullApiOperationArgs<"apprecovery.list">)),
    EditsApksAddexternallyhosted: (...args) => callOperation("edits.apks.addexternallyhosted", ...(args as GooglePlayFullApiOperationArgs<"edits.apks.addexternallyhosted">)),
    EditsApksList: (...args) => callOperation("edits.apks.list", ...(args as GooglePlayFullApiOperationArgs<"edits.apks.list">)),
    EditsApksUpload: (...args) => callOperation("edits.apks.upload", ...(args as GooglePlayFullApiOperationArgs<"edits.apks.upload">)),
    EditsBundlesList: (...args) => callOperation("edits.bundles.list", ...(args as GooglePlayFullApiOperationArgs<"edits.bundles.list">)),
    EditsBundlesUpload: (...args) => callOperation("edits.bundles.upload", ...(args as GooglePlayFullApiOperationArgs<"edits.bundles.upload">)),
    EditsCommit: (...args) => callOperation("edits.commit", ...(args as GooglePlayFullApiOperationArgs<"edits.commit">)),
    EditsCountryavailabilityGet: (...args) => callOperation("edits.countryavailability.get", ...(args as GooglePlayFullApiOperationArgs<"edits.countryavailability.get">)),
    EditsDelete: (...args) => callOperation("edits.delete", ...(args as GooglePlayFullApiOperationArgs<"edits.delete">)),
    EditsDeobfuscationfilesUpload: (...args) => callOperation("edits.deobfuscationfiles.upload", ...(args as GooglePlayFullApiOperationArgs<"edits.deobfuscationfiles.upload">)),
    EditsDetailsGet: (...args) => callOperation("edits.details.get", ...(args as GooglePlayFullApiOperationArgs<"edits.details.get">)),
    EditsDetailsPatch: (...args) => callOperation("edits.details.patch", ...(args as GooglePlayFullApiOperationArgs<"edits.details.patch">)),
    EditsDetailsUpdate: (...args) => callOperation("edits.details.update", ...(args as GooglePlayFullApiOperationArgs<"edits.details.update">)),
    EditsExpansionfilesGet: (...args) => callOperation("edits.expansionfiles.get", ...(args as GooglePlayFullApiOperationArgs<"edits.expansionfiles.get">)),
    EditsExpansionfilesPatch: (...args) => callOperation("edits.expansionfiles.patch", ...(args as GooglePlayFullApiOperationArgs<"edits.expansionfiles.patch">)),
    EditsExpansionfilesUpdate: (...args) => callOperation("edits.expansionfiles.update", ...(args as GooglePlayFullApiOperationArgs<"edits.expansionfiles.update">)),
    EditsExpansionfilesUpload: (...args) => callOperation("edits.expansionfiles.upload", ...(args as GooglePlayFullApiOperationArgs<"edits.expansionfiles.upload">)),
    EditsGet: (...args) => callOperation("edits.get", ...(args as GooglePlayFullApiOperationArgs<"edits.get">)),
    EditsImagesDelete: (...args) => callOperation("edits.images.delete", ...(args as GooglePlayFullApiOperationArgs<"edits.images.delete">)),
    EditsImagesDeleteall: (...args) => callOperation("edits.images.deleteall", ...(args as GooglePlayFullApiOperationArgs<"edits.images.deleteall">)),
    EditsImagesList: (...args) => callOperation("edits.images.list", ...(args as GooglePlayFullApiOperationArgs<"edits.images.list">)),
    EditsImagesUpload: (...args) => callOperation("edits.images.upload", ...(args as GooglePlayFullApiOperationArgs<"edits.images.upload">)),
    EditsInsert: (...args) => callOperation("edits.insert", ...(args as GooglePlayFullApiOperationArgs<"edits.insert">)),
    EditsListingsDelete: (...args) => callOperation("edits.listings.delete", ...(args as GooglePlayFullApiOperationArgs<"edits.listings.delete">)),
    EditsListingsDeleteall: (...args) => callOperation("edits.listings.deleteall", ...(args as GooglePlayFullApiOperationArgs<"edits.listings.deleteall">)),
    EditsListingsGet: (...args) => callOperation("edits.listings.get", ...(args as GooglePlayFullApiOperationArgs<"edits.listings.get">)),
    EditsListingsList: (...args) => callOperation("edits.listings.list", ...(args as GooglePlayFullApiOperationArgs<"edits.listings.list">)),
    EditsListingsPatch: (...args) => callOperation("edits.listings.patch", ...(args as GooglePlayFullApiOperationArgs<"edits.listings.patch">)),
    EditsListingsUpdate: (...args) => callOperation("edits.listings.update", ...(args as GooglePlayFullApiOperationArgs<"edits.listings.update">)),
    EditsTestersGet: (...args) => callOperation("edits.testers.get", ...(args as GooglePlayFullApiOperationArgs<"edits.testers.get">)),
    EditsTestersPatch: (...args) => callOperation("edits.testers.patch", ...(args as GooglePlayFullApiOperationArgs<"edits.testers.patch">)),
    EditsTestersUpdate: (...args) => callOperation("edits.testers.update", ...(args as GooglePlayFullApiOperationArgs<"edits.testers.update">)),
    EditsTracksCreate: (...args) => callOperation("edits.tracks.create", ...(args as GooglePlayFullApiOperationArgs<"edits.tracks.create">)),
    EditsTracksGet: (...args) => callOperation("edits.tracks.get", ...(args as GooglePlayFullApiOperationArgs<"edits.tracks.get">)),
    EditsTracksList: (...args) => callOperation("edits.tracks.list", ...(args as GooglePlayFullApiOperationArgs<"edits.tracks.list">)),
    EditsTracksPatch: (...args) => callOperation("edits.tracks.patch", ...(args as GooglePlayFullApiOperationArgs<"edits.tracks.patch">)),
    EditsTracksUpdate: (...args) => callOperation("edits.tracks.update", ...(args as GooglePlayFullApiOperationArgs<"edits.tracks.update">)),
    EditsValidate: (...args) => callOperation("edits.validate", ...(args as GooglePlayFullApiOperationArgs<"edits.validate">)),
    ExternaltransactionsCreateexternaltransaction: (...args) => callOperation("externaltransactions.createexternaltransaction", ...(args as GooglePlayFullApiOperationArgs<"externaltransactions.createexternaltransaction">)),
    ExternaltransactionsGetexternaltransaction: (...args) => callOperation("externaltransactions.getexternaltransaction", ...(args as GooglePlayFullApiOperationArgs<"externaltransactions.getexternaltransaction">)),
    ExternaltransactionsRefundexternaltransaction: (...args) => callOperation("externaltransactions.refundexternaltransaction", ...(args as GooglePlayFullApiOperationArgs<"externaltransactions.refundexternaltransaction">)),
    GeneratedapksDownload: (...args) => callOperation("generatedapks.download", ...(args as GooglePlayFullApiOperationArgs<"generatedapks.download">)),
    GeneratedapksList: (...args) => callOperation("generatedapks.list", ...(args as GooglePlayFullApiOperationArgs<"generatedapks.list">)),
    GrantsCreate: (...args) => callOperation("grants.create", ...(args as GooglePlayFullApiOperationArgs<"grants.create">)),
    GrantsDelete: (...args) => callOperation("grants.delete", ...(args as GooglePlayFullApiOperationArgs<"grants.delete">)),
    GrantsPatch: (...args) => callOperation("grants.patch", ...(args as GooglePlayFullApiOperationArgs<"grants.patch">)),
    InappproductsBatchDelete: (...args) => callOperation("inappproducts.batchDelete", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.batchDelete">)),
    InappproductsBatchGet: (...args) => callOperation("inappproducts.batchGet", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.batchGet">)),
    InappproductsBatchUpdate: (...args) => callOperation("inappproducts.batchUpdate", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.batchUpdate">)),
    InappproductsDelete: (...args) => callOperation("inappproducts.delete", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.delete">)),
    InappproductsGet: (...args) => callOperation("inappproducts.get", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.get">)),
    InappproductsInsert: (...args) => callOperation("inappproducts.insert", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.insert">)),
    InappproductsList: (...args) => callOperation("inappproducts.list", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.list">)),
    InappproductsPatch: (...args) => callOperation("inappproducts.patch", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.patch">)),
    InappproductsUpdate: (...args) => callOperation("inappproducts.update", ...(args as GooglePlayFullApiOperationArgs<"inappproducts.update">)),
    InternalappsharingartifactsUploadapk: (...args) => callOperation("internalappsharingartifacts.uploadapk", ...(args as GooglePlayFullApiOperationArgs<"internalappsharingartifacts.uploadapk">)),
    InternalappsharingartifactsUploadbundle: (...args) => callOperation("internalappsharingartifacts.uploadbundle", ...(args as GooglePlayFullApiOperationArgs<"internalappsharingartifacts.uploadbundle">)),
    MonetizationConvertRegionPrices: (...args) => callOperation("monetization.convertRegionPrices", ...(args as GooglePlayFullApiOperationArgs<"monetization.convertRegionPrices">)),
    MonetizationOnetimeproductsBatchDelete: (...args) => callOperation("monetization.onetimeproducts.batchDelete", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.batchDelete">)),
    MonetizationOnetimeproductsBatchGet: (...args) => callOperation("monetization.onetimeproducts.batchGet", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.batchGet">)),
    MonetizationOnetimeproductsBatchUpdate: (...args) => callOperation("monetization.onetimeproducts.batchUpdate", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.batchUpdate">)),
    MonetizationOnetimeproductsDelete: (...args) => callOperation("monetization.onetimeproducts.delete", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.delete">)),
    MonetizationOnetimeproductsGet: (...args) => callOperation("monetization.onetimeproducts.get", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.get">)),
    MonetizationOnetimeproductsList: (...args) => callOperation("monetization.onetimeproducts.list", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.list">)),
    MonetizationOnetimeproductsPatch: (...args) => callOperation("monetization.onetimeproducts.patch", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.patch">)),
    MonetizationOnetimeproductsPurchaseOptionsBatchDelete: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.batchDelete", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.batchDelete">)),
    MonetizationOnetimeproductsPurchaseOptionsBatchUpdateStates: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.batchUpdateStates", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.batchUpdateStates">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersActivate: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.activate", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.activate">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersBatchDelete: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.batchDelete", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchDelete">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersBatchGet: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.batchGet", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchGet">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdate: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.batchUpdate", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchUpdate">)),
  };
}
