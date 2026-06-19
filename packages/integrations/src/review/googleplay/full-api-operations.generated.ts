// Generated from Google Play Android Publisher Discovery (https://androidpublisher.googleapis.com/$discovery/rest?version=v3).
// Do not edit by hand; run scripts/generate-googleplay-full-api.mjs after checking upstream docs.

export type GooglePlayFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GooglePlayFullApiSpec {
  sourceUrl: string;
  revision: string;
  version: string;
  documentedOperationCount: number;
}

export interface GooglePlayFullApiOperation {
  id: string;
  functionName: string;
  method: GooglePlayFullApiOperationMethod;
  path: string;
  description: string;
  sourceUrl: string;
}

export const GOOGLEPLAY_FULL_API_SPEC_SOURCE = "https://androidpublisher.googleapis.com/$discovery/rest?version=v3" as const;
export const GOOGLEPLAY_FULL_API_SPEC_VERSION = "androidpublisher-20260617-2026-06-18" as const;
export const GOOGLEPLAY_FULL_API_GENERATED_AT = "2026-06-18" as const;
export const GOOGLEPLAY_FULL_API_OPERATION_COUNT = 137 as const;

export const GOOGLEPLAY_FULL_API_SPEC: GooglePlayFullApiSpec = {
  "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3",
  "revision": "20260617",
  "version": "v3",
  "documentedOperationCount": 137
};

export const GOOGLEPLAY_FULL_API_OPERATIONS: readonly GooglePlayFullApiOperation[] = [
  {
    "id": "applications.dataSafety",
    "functionName": "ApplicationsDataSafety",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/dataSafety",
    "description": "Writes the Safety Labels declaration of an app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "applications.deviceTierConfigs.create",
    "functionName": "ApplicationsDeviceTierConfigsCreate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/deviceTierConfigs",
    "description": "Creates a new device tier config for an app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "applications.deviceTierConfigs.get",
    "functionName": "ApplicationsDeviceTierConfigsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}",
    "description": "Returns a particular device tier config.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "applications.deviceTierConfigs.list",
    "functionName": "ApplicationsDeviceTierConfigsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/deviceTierConfigs",
    "description": "Returns created device tier configs, ordered by descending creation time.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "applications.tracks.releases.list",
    "functionName": "ApplicationsTracksReleasesList",
    "method": "GET",
    "path": "androidpublisher/v3/{+parent}/releases",
    "description": "Returns the list of all releases for a given track. This excludes any releases that are obsolete.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "apprecovery.addTargeting",
    "functionName": "ApprecoveryAddTargeting",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:addTargeting",
    "description": "Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "apprecovery.cancel",
    "functionName": "ApprecoveryCancel",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:cancel",
    "description": "Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "apprecovery.create",
    "functionName": "ApprecoveryCreate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/appRecoveries",
    "description": "Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "apprecovery.deploy",
    "functionName": "ApprecoveryDeploy",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/appRecoveries/{appRecoveryId}:deploy",
    "description": "Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "apprecovery.list",
    "functionName": "ApprecoveryList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/appRecoveries",
    "description": "List all app recovery action resources associated with a particular package name and app version.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.apks.addexternallyhosted",
    "functionName": "EditsApksAddexternallyhosted",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted",
    "description": "Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.apks.list",
    "functionName": "EditsApksList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks",
    "description": "Lists all current APKs of the app and edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.apks.upload",
    "functionName": "EditsApksUpload",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks",
    "description": "Uploads an APK and adds to the current edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.bundles.list",
    "functionName": "EditsBundlesList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles",
    "description": "Lists all current Android App Bundles of the app and edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.bundles.upload",
    "functionName": "EditsBundlesUpload",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles",
    "description": "Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.commit",
    "functionName": "EditsCommit",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}:commit",
    "description": "Commits an app edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.countryavailability.get",
    "functionName": "EditsCountryavailabilityGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}",
    "description": "Gets country availability.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.delete",
    "functionName": "EditsDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}",
    "description": "Deletes an app edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.deobfuscationfiles.upload",
    "functionName": "EditsDeobfuscationfilesUpload",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}",
    "description": "Uploads a new deobfuscation file and attaches to the specified APK.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.details.get",
    "functionName": "EditsDetailsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/details",
    "description": "Gets details of an app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.details.patch",
    "functionName": "EditsDetailsPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/details",
    "description": "Patches details of an app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.details.update",
    "functionName": "EditsDetailsUpdate",
    "method": "PUT",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/details",
    "description": "Updates details of an app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.expansionfiles.get",
    "functionName": "EditsExpansionfilesGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
    "description": "Fetches the expansion file configuration for the specified APK.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.expansionfiles.patch",
    "functionName": "EditsExpansionfilesPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
    "description": "Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.expansionfiles.update",
    "functionName": "EditsExpansionfilesUpdate",
    "method": "PUT",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
    "description": "Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.expansionfiles.upload",
    "functionName": "EditsExpansionfilesUpload",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}",
    "description": "Uploads a new expansion file and attaches to the specified APK.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.get",
    "functionName": "EditsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}",
    "description": "Gets an app edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.images.delete",
    "functionName": "EditsImagesDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}",
    "description": "Deletes the image (specified by id) from the edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.images.deleteall",
    "functionName": "EditsImagesDeleteall",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}",
    "description": "Deletes all images for the specified language and image type. Returns an empty response if no images are found.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.images.list",
    "functionName": "EditsImagesList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}",
    "description": "Lists all images. The response may be empty.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.images.upload",
    "functionName": "EditsImagesUpload",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}",
    "description": "Uploads an image of the specified language and image type, and adds to the edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.insert",
    "functionName": "EditsInsert",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits",
    "description": "Creates a new edit for an app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.listings.delete",
    "functionName": "EditsListingsDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
    "description": "Deletes a localized store listing.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.listings.deleteall",
    "functionName": "EditsListingsDeleteall",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings",
    "description": "Deletes all store listings.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.listings.get",
    "functionName": "EditsListingsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
    "description": "Gets a localized store listing.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.listings.list",
    "functionName": "EditsListingsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings",
    "description": "Lists all localized store listings.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.listings.patch",
    "functionName": "EditsListingsPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
    "description": "Patches a localized store listing.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.listings.update",
    "functionName": "EditsListingsUpdate",
    "method": "PUT",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}",
    "description": "Creates or updates a localized store listing.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.testers.get",
    "functionName": "EditsTestersGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}",
    "description": "Gets testers. Note: Testers resource does not support email lists.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.testers.patch",
    "functionName": "EditsTestersPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}",
    "description": "Patches testers. Note: Testers resource does not support email lists.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.testers.update",
    "functionName": "EditsTestersUpdate",
    "method": "PUT",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}",
    "description": "Updates testers. Note: Testers resource does not support email lists.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.tracks.create",
    "functionName": "EditsTracksCreate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks",
    "description": "Creates a new track.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.tracks.get",
    "functionName": "EditsTracksGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}",
    "description": "Gets a track.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.tracks.list",
    "functionName": "EditsTracksList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks",
    "description": "Lists all tracks.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.tracks.patch",
    "functionName": "EditsTracksPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}",
    "description": "Patches a track.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.tracks.update",
    "functionName": "EditsTracksUpdate",
    "method": "PUT",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}",
    "description": "Updates a track.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "edits.validate",
    "functionName": "EditsValidate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/edits/{editId}:validate",
    "description": "Validates an app edit.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "externaltransactions.createexternaltransaction",
    "functionName": "ExternaltransactionsCreateexternaltransaction",
    "method": "POST",
    "path": "androidpublisher/v3/{+parent}/externalTransactions",
    "description": "Creates a new external transaction.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "externaltransactions.getexternaltransaction",
    "functionName": "ExternaltransactionsGetexternaltransaction",
    "method": "GET",
    "path": "androidpublisher/v3/{+name}",
    "description": "Gets an existing external transaction.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "externaltransactions.refundexternaltransaction",
    "functionName": "ExternaltransactionsRefundexternaltransaction",
    "method": "POST",
    "path": "androidpublisher/v3/{+name}:refund",
    "description": "Refunds or partially refunds an existing external transaction.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "generatedapks.download",
    "functionName": "GeneratedapksDownload",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download",
    "description": "Downloads a single signed APK generated from an app bundle.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "generatedapks.list",
    "functionName": "GeneratedapksList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}",
    "description": "Returns download metadata for all APKs that were generated from a given app bundle.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "grants.create",
    "functionName": "GrantsCreate",
    "method": "POST",
    "path": "androidpublisher/v3/{+parent}/grants",
    "description": "Grant access for a user to the given package.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "grants.delete",
    "functionName": "GrantsDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/{+name}",
    "description": "Removes all access for the user to the given package or developer account.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "grants.patch",
    "functionName": "GrantsPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/{+name}",
    "description": "Updates access for the user to the given package.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.batchDelete",
    "functionName": "InappproductsBatchDelete",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts:batchDelete",
    "description": "Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.batchGet",
    "functionName": "InappproductsBatchGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts:batchGet",
    "description": "Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.batchUpdate",
    "functionName": "InappproductsBatchUpdate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts:batchUpdate",
    "description": "Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.delete",
    "functionName": "InappproductsDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
    "description": "Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.get",
    "functionName": "InappproductsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
    "description": "Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.insert",
    "functionName": "InappproductsInsert",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts",
    "description": "Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.list",
    "functionName": "InappproductsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts",
    "description": "Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.patch",
    "functionName": "InappproductsPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
    "description": "Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "inappproducts.update",
    "functionName": "InappproductsUpdate",
    "method": "PUT",
    "path": "androidpublisher/v3/applications/{packageName}/inappproducts/{sku}",
    "description": "Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "internalappsharingartifacts.uploadapk",
    "functionName": "InternalappsharingartifactsUploadapk",
    "method": "POST",
    "path": "androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk",
    "description": "Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "internalappsharingartifacts.uploadbundle",
    "functionName": "InternalappsharingartifactsUploadbundle",
    "method": "POST",
    "path": "androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle",
    "description": "Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.convertRegionPrices",
    "functionName": "MonetizationConvertRegionPrices",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices",
    "description": "Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.batchDelete",
    "functionName": "MonetizationOnetimeproductsBatchDelete",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchDelete",
    "description": "Deletes one or more one-time products.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.batchGet",
    "functionName": "MonetizationOnetimeproductsBatchGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchGet",
    "description": "Reads one or more one-time products.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.batchUpdate",
    "functionName": "MonetizationOnetimeproductsBatchUpdate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts:batchUpdate",
    "description": "Creates or updates one or more one-time products.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.delete",
    "functionName": "MonetizationOnetimeproductsDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}",
    "description": "Deletes a one-time product.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.get",
    "functionName": "MonetizationOnetimeproductsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}",
    "description": "Reads a single one-time product.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.list",
    "functionName": "MonetizationOnetimeproductsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts",
    "description": "Lists all one-time products under a given app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.patch",
    "functionName": "MonetizationOnetimeproductsPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/onetimeproducts/{productId}",
    "description": "Creates or updates a one-time product.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.batchDelete",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsBatchDelete",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchDelete",
    "description": "Deletes purchase options across one or multiple one-time products. By default this operation will fail if there are any existing offers under the deleted purchase options. Use the force parameter to override the default behavior.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.batchUpdateStates",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsBatchUpdateStates",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions:batchUpdateStates",
    "description": "Activates or deactivates purchase options across one or multiple one-time products.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.activate",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersActivate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:activate",
    "description": "Activates a one-time product offer.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.batchDelete",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersBatchDelete",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchDelete",
    "description": "Deletes one or more one-time product offers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.batchGet",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersBatchGet",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchGet",
    "description": "Reads one or more one-time product offers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdate",
    "description": "Creates or updates one or more one-time product offers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdateStates",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers:batchUpdateStates",
    "description": "Updates a batch of one-time product offer states.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.cancel",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersCancel",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:cancel",
    "description": "Cancels a one-time product offer.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.deactivate",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersDeactivate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers/{offerId}:deactivate",
    "description": "Deactivates a one-time product offer.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.onetimeproducts.purchaseOptions.offers.list",
    "functionName": "MonetizationOnetimeproductsPurchaseOptionsOffersList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/oneTimeProducts/{productId}/purchaseOptions/{purchaseOptionId}/offers",
    "description": "Lists all offers under a given app, product, or purchase option.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.archive",
    "functionName": "MonetizationSubscriptionsArchive",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive",
    "description": "Deprecated: subscription archiving is not supported.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.activate",
    "functionName": "MonetizationSubscriptionsBasePlansActivate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate",
    "description": "Activates a base plan. Once activated, base plans will be available to new subscribers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.batchMigratePrices",
    "functionName": "MonetizationSubscriptionsBasePlansBatchMigratePrices",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchMigratePrices",
    "description": "Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.batchUpdateStates",
    "functionName": "MonetizationSubscriptionsBasePlansBatchUpdateStates",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans:batchUpdateStates",
    "description": "Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.deactivate",
    "functionName": "MonetizationSubscriptionsBasePlansDeactivate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate",
    "description": "Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.delete",
    "functionName": "MonetizationSubscriptionsBasePlansDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}",
    "description": "Deletes a base plan. Can only be done for draft base plans. This action is irreversible.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.migratePrices",
    "functionName": "MonetizationSubscriptionsBasePlansMigratePrices",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices",
    "description": "Migrates subscribers from one or more legacy price cohorts to the current price. Requests result in Google Play notifying affected subscribers. Only up to 250 simultaneous legacy price cohorts are supported.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.activate",
    "functionName": "MonetizationSubscriptionsBasePlansOffersActivate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate",
    "description": "Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.batchGet",
    "functionName": "MonetizationSubscriptionsBasePlansOffersBatchGet",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchGet",
    "description": "Reads one or more subscription offers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.batchUpdate",
    "functionName": "MonetizationSubscriptionsBasePlansOffersBatchUpdate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdate",
    "description": "Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.batchUpdateStates",
    "functionName": "MonetizationSubscriptionsBasePlansOffersBatchUpdateStates",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers:batchUpdateStates",
    "description": "Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.create",
    "functionName": "MonetizationSubscriptionsBasePlansOffersCreate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers",
    "description": "Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.deactivate",
    "functionName": "MonetizationSubscriptionsBasePlansOffersDeactivate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate",
    "description": "Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.delete",
    "functionName": "MonetizationSubscriptionsBasePlansOffersDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}",
    "description": "Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.get",
    "functionName": "MonetizationSubscriptionsBasePlansOffersGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}",
    "description": "Reads a single offer",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.list",
    "functionName": "MonetizationSubscriptionsBasePlansOffersList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers",
    "description": "Lists all offers under a given subscription.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.basePlans.offers.patch",
    "functionName": "MonetizationSubscriptionsBasePlansOffersPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}",
    "description": "Updates an existing subscription offer.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.batchGet",
    "functionName": "MonetizationSubscriptionsBatchGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions:batchGet",
    "description": "Reads one or more subscriptions.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.batchUpdate",
    "functionName": "MonetizationSubscriptionsBatchUpdate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions:batchUpdate",
    "description": "Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.create",
    "functionName": "MonetizationSubscriptionsCreate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions",
    "description": "Creates a new subscription. Newly added base plans will remain in draft state until activated.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.delete",
    "functionName": "MonetizationSubscriptionsDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}",
    "description": "Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.get",
    "functionName": "MonetizationSubscriptionsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}",
    "description": "Reads a single subscription.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.list",
    "functionName": "MonetizationSubscriptionsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions",
    "description": "Lists all subscriptions under a given app.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "monetization.subscriptions.patch",
    "functionName": "MonetizationSubscriptionsPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/applications/{packageName}/subscriptions/{productId}",
    "description": "Updates an existing subscription.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "orders.batchget",
    "functionName": "OrdersBatchget",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/orders:batchGet",
    "description": "Get order details for a list of orders.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "orders.get",
    "functionName": "OrdersGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/orders/{orderId}",
    "description": "Get order details for a single order.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "orders.refund",
    "functionName": "OrdersRefund",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund",
    "description": "Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.products.acknowledge",
    "functionName": "PurchasesProductsAcknowledge",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge",
    "description": "Acknowledges a purchase of an inapp item.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.products.consume",
    "functionName": "PurchasesProductsConsume",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume",
    "description": "Consumes a purchase for an inapp item.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.products.get",
    "functionName": "PurchasesProductsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}",
    "description": "Checks the purchase and consumption status of an inapp item.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.productsv2.getproductpurchasev2",
    "functionName": "PurchasesProductsv2Getproductpurchasev2",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/productsv2/tokens/{token}",
    "description": "Checks the purchase and consumption status of an inapp item.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptions.acknowledge",
    "functionName": "PurchasesSubscriptionsAcknowledge",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge",
    "description": "Acknowledges a subscription purchase.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptions.cancel",
    "functionName": "PurchasesSubscriptionsCancel",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel",
    "description": "Deprecated: Use purchases.subscriptionsv2.cancel instead. Cancels a user's subscription purchase. The subscription remains valid until its expiration time. Newer version is available at purchases.subscriptionsv2.cancel for better client library support.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptions.defer",
    "functionName": "PurchasesSubscriptionsDefer",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer",
    "description": "Deprecated: Use purchases.subscriptionsv2.defer instead. Defers a user's subscription purchase until a specified future expiration time.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptions.get",
    "functionName": "PurchasesSubscriptionsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}",
    "description": "Deprecated: Use purchases.subscriptionsv2.get instead. Checks whether a user's subscription purchase is valid and returns its expiry time.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptions.refund",
    "functionName": "PurchasesSubscriptionsRefund",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund",
    "description": "Deprecated: Use orders.refund instead. Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptions.revoke",
    "functionName": "PurchasesSubscriptionsRevoke",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke",
    "description": "Deprecated: Use purchases.subscriptionsv2.revoke instead. Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptionsv2.cancel",
    "functionName": "PurchasesSubscriptionsv2Cancel",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:cancel",
    "description": "Cancel a subscription purchase for the user.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptionsv2.defer",
    "functionName": "PurchasesSubscriptionsv2Defer",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:defer",
    "description": "Defers the renewal of a subscription.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptionsv2.get",
    "functionName": "PurchasesSubscriptionsv2Get",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}",
    "description": "Get metadata about a subscription",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.subscriptionsv2.revoke",
    "functionName": "PurchasesSubscriptionsv2Revoke",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}:revoke",
    "description": "Revoke a subscription purchase for the user.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "purchases.voidedpurchases.list",
    "functionName": "PurchasesVoidedpurchasesList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases",
    "description": "Lists the purchases that were canceled, refunded or charged-back.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "reviews.get",
    "functionName": "ReviewsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/reviews/{reviewId}",
    "description": "Gets a single review.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "reviews.list",
    "functionName": "ReviewsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/reviews",
    "description": "Lists all reviews.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "reviews.reply",
    "functionName": "ReviewsReply",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply",
    "description": "Replies to a single review, or updates an existing reply.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "systemapks.variants.create",
    "functionName": "SystemapksVariantsCreate",
    "method": "POST",
    "path": "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants",
    "description": "Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "systemapks.variants.download",
    "functionName": "SystemapksVariantsDownload",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download",
    "description": "Downloads a previously created system APK which is suitable for inclusion in a system image.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "systemapks.variants.get",
    "functionName": "SystemapksVariantsGet",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}",
    "description": "Returns a previously created system APK variant.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "systemapks.variants.list",
    "functionName": "SystemapksVariantsList",
    "method": "GET",
    "path": "androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants",
    "description": "Returns the list of previously created system APK variants.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "users.create",
    "functionName": "UsersCreate",
    "method": "POST",
    "path": "androidpublisher/v3/{+parent}/users",
    "description": "Grant access for a user to the given developer account.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "users.delete",
    "functionName": "UsersDelete",
    "method": "DELETE",
    "path": "androidpublisher/v3/{+name}",
    "description": "Removes all access for the user to the given developer account.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "users.list",
    "functionName": "UsersList",
    "method": "GET",
    "path": "androidpublisher/v3/{+parent}/users",
    "description": "Lists all users with access to a developer account.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  },
  {
    "id": "users.patch",
    "functionName": "UsersPatch",
    "method": "PATCH",
    "path": "androidpublisher/v3/{+name}",
    "description": "Updates access for the user to the developer account.",
    "sourceUrl": "https://androidpublisher.googleapis.com/$discovery/rest?version=v3"
  }
];

// Hardened literal operation keys for generated SDK typing.
export const GOOGLEPLAY_FULL_API_OPERATION_IDS = [
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
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate",
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates",
  "monetization.onetimeproducts.purchaseOptions.offers.cancel",
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate",
  "monetization.onetimeproducts.purchaseOptions.offers.list",
  "monetization.subscriptions.archive",
  "monetization.subscriptions.basePlans.activate",
  "monetization.subscriptions.basePlans.batchMigratePrices",
  "monetization.subscriptions.basePlans.batchUpdateStates",
  "monetization.subscriptions.basePlans.deactivate",
  "monetization.subscriptions.basePlans.delete",
  "monetization.subscriptions.basePlans.migratePrices",
  "monetization.subscriptions.basePlans.offers.activate",
  "monetization.subscriptions.basePlans.offers.batchGet",
  "monetization.subscriptions.basePlans.offers.batchUpdate",
  "monetization.subscriptions.basePlans.offers.batchUpdateStates",
  "monetization.subscriptions.basePlans.offers.create",
  "monetization.subscriptions.basePlans.offers.deactivate",
  "monetization.subscriptions.basePlans.offers.delete",
  "monetization.subscriptions.basePlans.offers.get",
  "monetization.subscriptions.basePlans.offers.list",
  "monetization.subscriptions.basePlans.offers.patch",
  "monetization.subscriptions.batchGet",
  "monetization.subscriptions.batchUpdate",
  "monetization.subscriptions.create",
  "monetization.subscriptions.delete",
  "monetization.subscriptions.get",
  "monetization.subscriptions.list",
  "monetization.subscriptions.patch",
  "orders.batchget",
  "orders.get",
  "orders.refund",
  "purchases.products.acknowledge",
  "purchases.products.consume",
  "purchases.products.get",
  "purchases.productsv2.getproductpurchasev2",
  "purchases.subscriptions.acknowledge",
  "purchases.subscriptions.cancel",
  "purchases.subscriptions.defer",
  "purchases.subscriptions.get",
  "purchases.subscriptions.refund",
  "purchases.subscriptions.revoke",
  "purchases.subscriptionsv2.cancel",
  "purchases.subscriptionsv2.defer",
  "purchases.subscriptionsv2.get",
  "purchases.subscriptionsv2.revoke",
  "purchases.voidedpurchases.list",
  "reviews.get",
  "reviews.list",
  "reviews.reply",
  "systemapks.variants.create",
  "systemapks.variants.download",
  "systemapks.variants.get",
  "systemapks.variants.list",
  "users.create",
  "users.delete",
  "users.list",
  "users.patch"
] as const;
// End hardened literal operation keys.

export type GooglePlayFullApiOperationId = typeof GOOGLEPLAY_FULL_API_OPERATION_IDS[number];

export const GOOGLEPLAY_FULL_API_OPERATION_BY_ID = new Map<string, GooglePlayFullApiOperation>(
  GOOGLEPLAY_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),
);
