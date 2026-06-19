// Generated provider schema DTOs for GooglePlayFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type GooglePlayFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type GooglePlayFullApiSchemaJsonValue = GooglePlayFullApiSchemaJsonPrimitive | readonly GooglePlayFullApiSchemaJsonValue[] | { readonly [key: string]: GooglePlayFullApiSchemaJsonValue | undefined };

export type GooglePlayFullApiSchemaSafetyLabelsUpdateRequest = {
  safetyLabels?: string;
};

export type GooglePlayFullApiSchemaSafetyLabelsUpdateResponse = {};

export type GooglePlayFullApiSchemaDeviceTierConfig = {
  deviceGroups?: ReadonlyArray<GooglePlayFullApiSchemaDeviceGroup>;
  deviceTierConfigId?: string;
  deviceTierSet?: GooglePlayFullApiSchemaDeviceTierSet;
  userCountrySets?: ReadonlyArray<GooglePlayFullApiSchemaUserCountrySet>;
};

export type GooglePlayFullApiSchemaListDeviceTierConfigsResponse = {
  deviceTierConfigs?: ReadonlyArray<GooglePlayFullApiSchemaDeviceTierConfig2>;
  nextPageToken?: string;
};

export type GooglePlayFullApiSchemaListReleaseSummariesResponse = {
  releases?: ReadonlyArray<GooglePlayFullApiSchemaReleaseSummary>;
};

export type GooglePlayFullApiSchemaAddTargetingRequest = {
  targetingUpdate?: GooglePlayFullApiSchemaTargetingUpdate;
};

export type GooglePlayFullApiSchemaAddTargetingResponse = {};

export type GooglePlayFullApiSchemaCancelAppRecoveryRequest = {};

export type GooglePlayFullApiSchemaCancelAppRecoveryResponse = {};

export type GooglePlayFullApiSchemaCreateDraftAppRecoveryRequest = {
  targeting?: GooglePlayFullApiSchemaTargeting;
  remoteInAppUpdate?: GooglePlayFullApiSchemaRemoteInAppUpdate;
};

export type GooglePlayFullApiSchemaAppRecoveryAction = {
  lastUpdateTime?: string;
  deployTime?: string;
  status?: "RECOVERY_STATUS_UNSPECIFIED" | "RECOVERY_STATUS_ACTIVE" | "RECOVERY_STATUS_CANCELED" | "RECOVERY_STATUS_DRAFT" | "RECOVERY_STATUS_GENERATION_IN_PROGRESS" | "RECOVERY_STATUS_GENERATION_FAILED";
  createTime?: string;
  appRecoveryId?: string;
  targeting?: GooglePlayFullApiSchemaTargeting;
  cancelTime?: string;
  remoteInAppUpdateData?: GooglePlayFullApiSchemaRemoteInAppUpdateData;
};

export type GooglePlayFullApiSchemaDeployAppRecoveryRequest = {};

export type GooglePlayFullApiSchemaDeployAppRecoveryResponse = {};

export type GooglePlayFullApiSchemaListAppRecoveriesResponse = {
  recoveryActions?: ReadonlyArray<GooglePlayFullApiSchemaAppRecoveryAction2>;
};

export type GooglePlayFullApiSchemaApksAddExternallyHostedRequest = {
  externallyHostedApk?: GooglePlayFullApiSchemaExternallyHostedApk;
};

export type GooglePlayFullApiSchemaApksAddExternallyHostedResponse = {
  externallyHostedApk?: GooglePlayFullApiSchemaExternallyHostedApk;
};

export type GooglePlayFullApiSchemaApksListResponse = {
  apks?: ReadonlyArray<GooglePlayFullApiSchemaApk2>;
  kind?: string;
};

export type GooglePlayFullApiSchemaApk = {
  versionCode?: number;
  binary?: GooglePlayFullApiSchemaApkBinary;
};

export type GooglePlayFullApiSchemaBundlesListResponse = {
  kind?: string;
  bundles?: ReadonlyArray<GooglePlayFullApiSchemaBundle2>;
};

export type GooglePlayFullApiSchemaBundle = {
  sha1?: string;
  sha256?: string;
  versionCode?: number;
};

export type GooglePlayFullApiSchemaAppEdit = {
  expiryTimeSeconds?: string;
  id?: string;
};

export type GooglePlayFullApiSchemaTrackCountryAvailability = {
  restOfWorld?: boolean;
  syncWithProduction?: boolean;
  countries?: ReadonlyArray<GooglePlayFullApiSchemaTrackTargetedCountry>;
};

export type GooglePlayFullApiSchemaDeobfuscationFilesUploadResponse = {
  deobfuscationFile?: GooglePlayFullApiSchemaDeobfuscationFile;
};

export type GooglePlayFullApiSchemaAppDetails = {
  contactPhone?: string;
  defaultLanguage?: string;
  contactWebsite?: string;
  contactEmail?: string;
};

export type GooglePlayFullApiSchemaExpansionFile = {
  fileSize?: string;
  referencesVersion?: number;
};

export type GooglePlayFullApiSchemaExpansionFilesUploadResponse = {
  expansionFile?: GooglePlayFullApiSchemaExpansionFile2;
};

export type GooglePlayFullApiSchemaImagesDeleteAllResponse = {
  deleted?: ReadonlyArray<GooglePlayFullApiSchemaImage>;
};

export type GooglePlayFullApiSchemaImagesListResponse = {
  images?: ReadonlyArray<GooglePlayFullApiSchemaImage>;
};

export type GooglePlayFullApiSchemaImagesUploadResponse = {
  image?: GooglePlayFullApiSchemaImage;
};

export type GooglePlayFullApiSchemaListing = {
  language?: string;
  video?: string;
  title?: string;
  fullDescription?: string;
  shortDescription?: string;
};

export type GooglePlayFullApiSchemaListingsListResponse = {
  kind?: string;
  listings?: ReadonlyArray<GooglePlayFullApiSchemaListing2>;
};

export type GooglePlayFullApiSchemaTesters = {
  googleGroups?: ReadonlyArray<string>;
};

export type GooglePlayFullApiSchemaTrackConfig = {
  type?: "TRACK_TYPE_UNSPECIFIED" | "CLOSED_TESTING";
  formFactor?: "FORM_FACTOR_UNSPECIFIED" | "DEFAULT" | "WEAR" | "AUTOMOTIVE";
  track?: string;
};

export type GooglePlayFullApiSchemaTrack = {
  releases?: ReadonlyArray<GooglePlayFullApiSchemaTrackRelease>;
  track?: string;
};

export type GooglePlayFullApiSchemaTracksListResponse = {
  kind?: string;
  tracks?: ReadonlyArray<GooglePlayFullApiSchemaTrack2>;
};

export type GooglePlayFullApiSchemaExternalTransaction = {
  transactionState?: "TRANSACTION_STATE_UNSPECIFIED" | "TRANSACTION_REPORTED" | "TRANSACTION_CANCELED";
  userTaxAddress?: GooglePlayFullApiSchemaExternalTransactionAddress;
  currentTaxAmount?: GooglePlayFullApiSchemaPrice;
  testPurchase?: GooglePlayFullApiSchemaExternalTransactionTestPurchase;
  transactionProgramCode?: number;
  createTime?: string;
  oneTimeTransaction?: GooglePlayFullApiSchemaOneTimeExternalTransaction;
  currentPreTaxAmount?: GooglePlayFullApiSchemaPrice;
  packageName?: string;
  originalTaxAmount?: GooglePlayFullApiSchemaPrice;
  externalOfferDetails?: GooglePlayFullApiSchemaExternalOfferDetails;
  externalTransactionId?: string;
  recurringTransaction?: GooglePlayFullApiSchemaRecurringExternalTransaction;
  transactionTime?: string;
  originalPreTaxAmount?: GooglePlayFullApiSchemaPrice;
};

export type GooglePlayFullApiSchemaRefundExternalTransactionRequest = {
  partialRefund?: GooglePlayFullApiSchemaPartialRefund;
  fullRefund?: GooglePlayFullApiSchemaFullRefund;
  refundTime?: string;
};

export type GooglePlayFullApiSchemaGeneratedApksListResponse = {
  generatedApks?: ReadonlyArray<GooglePlayFullApiSchemaGeneratedApksPerSigningKey>;
};

export type GooglePlayFullApiSchemaGrant = {
  name?: string;
  packageName?: string;
  appLevelPermissions?: ReadonlyArray<"APP_LEVEL_PERMISSION_UNSPECIFIED" | "CAN_ACCESS_APP" | "CAN_VIEW_FINANCIAL_DATA" | "CAN_MANAGE_PERMISSIONS" | "CAN_REPLY_TO_REVIEWS" | "CAN_MANAGE_PUBLIC_APKS" | "CAN_MANAGE_TRACK_APKS" | "CAN_MANAGE_TRACK_USERS" | "CAN_MANAGE_PUBLIC_LISTING" | "CAN_MANAGE_DRAFT_APPS" | "CAN_MANAGE_ORDERS" | "CAN_MANAGE_APP_CONTENT" | "CAN_VIEW_NON_FINANCIAL_DATA" | "CAN_VIEW_APP_QUALITY" | "CAN_MANAGE_DEEPLINKS">;
};

export type GooglePlayFullApiSchemaInappproductsBatchDeleteRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaInappproductsDeleteRequest>;
};

export type GooglePlayFullApiSchemaInappproductsBatchGetResponse = {
  inappproduct?: ReadonlyArray<GooglePlayFullApiSchemaInAppProduct2>;
};

export type GooglePlayFullApiSchemaInappproductsBatchUpdateRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaInappproductsUpdateRequest>;
};

export type GooglePlayFullApiSchemaInappproductsBatchUpdateResponse = {
  inappproducts?: ReadonlyArray<GooglePlayFullApiSchemaInAppProduct2>;
};

export type GooglePlayFullApiSchemaInAppProduct = {
  gracePeriod?: string;
  listings?: {
  readonly [key: string]: GooglePlayFullApiSchemaInAppProductListing | undefined;
};
  purchaseType?: "purchaseTypeUnspecified" | "managedUser" | "subscription";
  subscriptionPeriod?: string;
  prices?: {
  readonly [key: string]: GooglePlayFullApiSchemaPrice | undefined;
};
  subscriptionTaxesAndComplianceSettings?: GooglePlayFullApiSchemaSubscriptionTaxAndComplianceSettings;
  packageName?: string;
  defaultLanguage?: string;
  managedProductTaxesAndComplianceSettings?: GooglePlayFullApiSchemaManagedProductTaxAndComplianceSettings;
  defaultPrice?: GooglePlayFullApiSchemaPrice;
  sku?: string;
  status?: "statusUnspecified" | "active" | "inactive";
  trialPeriod?: string;
};

export type GooglePlayFullApiSchemaInappproductsListResponse = {
  tokenPagination?: GooglePlayFullApiSchemaTokenPagination;
  kind?: string;
  inappproduct?: ReadonlyArray<GooglePlayFullApiSchemaInAppProduct2>;
  pageInfo?: GooglePlayFullApiSchemaPageInfo;
};

export type GooglePlayFullApiSchemaInternalAppSharingArtifact = {
  downloadUrl?: string;
  certificateFingerprint?: string;
  sha256?: string;
};

export type GooglePlayFullApiSchemaConvertRegionPricesRequest = {
  price?: GooglePlayFullApiSchemaMoney;
  productTaxCategoryCode?: string;
};

export type GooglePlayFullApiSchemaConvertRegionPricesResponse = {
  convertedRegionPrices?: {
  readonly [key: string]: GooglePlayFullApiSchemaConvertedRegionPrice | undefined;
};
  convertedOtherRegionsPrice?: GooglePlayFullApiSchemaConvertedOtherRegionsPrice;
  regionVersion?: GooglePlayFullApiSchemaRegionsVersion;
};

export type GooglePlayFullApiSchemaBatchDeleteOneTimeProductsRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaDeleteOneTimeProductRequest>;
};

export type GooglePlayFullApiSchemaBatchGetOneTimeProductsResponse = {
  oneTimeProducts?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProduct2>;
};

export type GooglePlayFullApiSchemaBatchUpdateOneTimeProductsRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateOneTimeProductRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateOneTimeProductsResponse = {
  oneTimeProducts?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProduct2>;
};

export type GooglePlayFullApiSchemaOneTimeProduct = {
  productId?: string;
  taxAndComplianceSettings?: GooglePlayFullApiSchemaOneTimeProductTaxAndComplianceSettings;
  regionsVersion?: GooglePlayFullApiSchemaRegionsVersion;
  packageName?: string;
  listings?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductListing>;
  restrictedPaymentCountries?: GooglePlayFullApiSchemaRestrictedPaymentCountries;
  offerTags?: ReadonlyArray<GooglePlayFullApiSchemaOfferTag>;
  purchaseOptions?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductPurchaseOption>;
};

export type GooglePlayFullApiSchemaListOneTimeProductsResponse = {
  oneTimeProducts?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProduct2>;
  nextPageToken?: string;
};

export type GooglePlayFullApiSchemaBatchDeletePurchaseOptionsRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaDeletePurchaseOptionRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdatePurchaseOptionStatesRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdatePurchaseOptionStateRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdatePurchaseOptionStatesResponse = {
  oneTimeProducts?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProduct2>;
};

export type GooglePlayFullApiSchemaActivateOneTimeProductOfferRequest = {
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  offerId?: string;
  purchaseOptionId?: string;
  productId?: string;
  packageName?: string;
};

export type GooglePlayFullApiSchemaOneTimeProductOffer = {
  purchaseOptionId?: string;
  offerTags?: ReadonlyArray<GooglePlayFullApiSchemaOfferTag>;
  state?: "STATE_UNSPECIFIED" | "DRAFT" | "ACTIVE" | "CANCELLED" | "INACTIVE";
  regionalPricingAndAvailabilityConfigs?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductOfferRegionalPricingAndAvailabilityConfig>;
  packageName?: string;
  preOrderOffer?: GooglePlayFullApiSchemaOneTimeProductPreOrderOffer;
  offerId?: string;
  productId?: string;
  discountedOffer?: GooglePlayFullApiSchemaOneTimeProductDiscountedOffer;
  regionsVersion?: GooglePlayFullApiSchemaRegionsVersion;
};

export type GooglePlayFullApiSchemaBatchDeleteOneTimeProductOffersRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaDeleteOneTimeProductOfferRequest>;
};

export type GooglePlayFullApiSchemaBatchGetOneTimeProductOffersRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaGetOneTimeProductOfferRequest>;
};

export type GooglePlayFullApiSchemaBatchGetOneTimeProductOffersResponse = {
  oneTimeProductOffers?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductOffer2>;
};

export type GooglePlayFullApiSchemaBatchUpdateOneTimeProductOffersRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateOneTimeProductOfferRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateOneTimeProductOffersResponse = {
  oneTimeProductOffers?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductOffer2>;
};

export type GooglePlayFullApiSchemaBatchUpdateOneTimeProductOfferStatesRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateOneTimeProductOfferStateRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateOneTimeProductOfferStatesResponse = {
  oneTimeProductOffers?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductOffer2>;
};

export type GooglePlayFullApiSchemaCancelOneTimeProductOfferRequest = {
  packageName?: string;
  productId?: string;
  offerId?: string;
  purchaseOptionId?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
};

export type GooglePlayFullApiSchemaDeactivateOneTimeProductOfferRequest = {
  packageName?: string;
  productId?: string;
  offerId?: string;
  purchaseOptionId?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
};

export type GooglePlayFullApiSchemaListOneTimeProductOffersResponse = {
  nextPageToken?: string;
  oneTimeProductOffers?: ReadonlyArray<GooglePlayFullApiSchemaOneTimeProductOffer2>;
};

export type GooglePlayFullApiSchemaArchiveSubscriptionRequest = {};

export type GooglePlayFullApiSchemaSubscription = {
  productId?: string;
  taxAndComplianceSettings?: GooglePlayFullApiSchemaSubscriptionTaxAndComplianceSettings;
  archived?: boolean;
  packageName?: string;
  listings?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionListing>;
  basePlans?: ReadonlyArray<GooglePlayFullApiSchemaBasePlan>;
  restrictedPaymentCountries?: GooglePlayFullApiSchemaRestrictedPaymentCountries;
};

export type GooglePlayFullApiSchemaActivateBasePlanRequest = {
  productId?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  packageName?: string;
  basePlanId?: string;
};

export type GooglePlayFullApiSchemaBatchMigrateBasePlanPricesRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaMigrateBasePlanPricesRequest2>;
};

export type GooglePlayFullApiSchemaBatchMigrateBasePlanPricesResponse = {
  responses?: ReadonlyArray<GooglePlayFullApiSchemaMigrateBasePlanPricesResponse2>;
};

export type GooglePlayFullApiSchemaBatchUpdateBasePlanStatesRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateBasePlanStateRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateBasePlanStatesResponse = {
  subscriptions?: ReadonlyArray<GooglePlayFullApiSchemaSubscription2>;
};

export type GooglePlayFullApiSchemaDeactivateBasePlanRequest = {
  productId?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  packageName?: string;
  basePlanId?: string;
};

export type GooglePlayFullApiSchemaMigrateBasePlanPricesRequest = {
  packageName?: string;
  productId?: string;
  regionsVersion?: GooglePlayFullApiSchemaRegionsVersion;
  basePlanId?: string;
  regionalPriceMigrations?: ReadonlyArray<GooglePlayFullApiSchemaRegionalPriceMigrationConfig>;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
};

export type GooglePlayFullApiSchemaMigrateBasePlanPricesResponse = {};

export type GooglePlayFullApiSchemaActivateSubscriptionOfferRequest = {
  productId?: string;
  packageName?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  offerId?: string;
  basePlanId?: string;
};

export type GooglePlayFullApiSchemaSubscriptionOffer = {
  productId?: string;
  targeting?: GooglePlayFullApiSchemaSubscriptionOfferTargeting;
  regionalConfigs?: ReadonlyArray<GooglePlayFullApiSchemaRegionalSubscriptionOfferConfig>;
  offerId?: string;
  phases?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionOfferPhase>;
  packageName?: string;
  otherRegionsConfig?: GooglePlayFullApiSchemaOtherRegionsSubscriptionOfferConfig;
  basePlanId?: string;
  offerTags?: ReadonlyArray<GooglePlayFullApiSchemaOfferTag>;
  state?: "STATE_UNSPECIFIED" | "DRAFT" | "ACTIVE" | "INACTIVE";
};

export type GooglePlayFullApiSchemaBatchGetSubscriptionOffersRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaGetSubscriptionOfferRequest>;
};

export type GooglePlayFullApiSchemaBatchGetSubscriptionOffersResponse = {
  subscriptionOffers?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionOffer2>;
};

export type GooglePlayFullApiSchemaBatchUpdateSubscriptionOffersRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateSubscriptionOfferRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateSubscriptionOffersResponse = {
  subscriptionOffers?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionOffer2>;
};

export type GooglePlayFullApiSchemaBatchUpdateSubscriptionOfferStatesRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateSubscriptionOfferStateRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateSubscriptionOfferStatesResponse = {
  subscriptionOffers?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionOffer2>;
};

export type GooglePlayFullApiSchemaDeactivateSubscriptionOfferRequest = {
  productId?: string;
  packageName?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  offerId?: string;
  basePlanId?: string;
};

export type GooglePlayFullApiSchemaListSubscriptionOffersResponse = {
  subscriptionOffers?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionOffer2>;
  nextPageToken?: string;
};

export type GooglePlayFullApiSchemaBatchGetSubscriptionsResponse = {
  subscriptions?: ReadonlyArray<GooglePlayFullApiSchemaSubscription2>;
};

export type GooglePlayFullApiSchemaBatchUpdateSubscriptionsRequest = {
  requests?: ReadonlyArray<GooglePlayFullApiSchemaUpdateSubscriptionRequest>;
};

export type GooglePlayFullApiSchemaBatchUpdateSubscriptionsResponse = {
  subscriptions?: ReadonlyArray<GooglePlayFullApiSchemaSubscription2>;
};

export type GooglePlayFullApiSchemaListSubscriptionsResponse = {
  subscriptions?: ReadonlyArray<GooglePlayFullApiSchemaSubscription2>;
  nextPageToken?: string;
};

export type GooglePlayFullApiSchemaBatchGetOrdersResponse = {
  orders?: ReadonlyArray<GooglePlayFullApiSchemaOrder2>;
};

export type GooglePlayFullApiSchemaOrder = {
  orderId?: string;
  pointsDetails?: GooglePlayFullApiSchemaPointsDetails;
  buyerAddress?: GooglePlayFullApiSchemaBuyerAddress;
  purchaseToken?: string;
  orderHistory?: GooglePlayFullApiSchemaOrderHistory;
  developerRevenueInBuyerCurrency?: GooglePlayFullApiSchemaMoney;
  total?: GooglePlayFullApiSchemaMoney;
  state?: "STATE_UNSPECIFIED" | "PENDING" | "PROCESSED" | "CANCELED" | "PENDING_REFUND" | "PARTIALLY_REFUNDED" | "REFUNDED";
  createTime?: string;
  orderDetails?: GooglePlayFullApiSchemaOrderDetails;
  lastEventTime?: string;
  salesChannel?: "SALES_CHANNEL_UNSPECIFIED" | "IN_APP" | "PC_EMULATOR" | "NATIVE_PC" | "PLAY_STORE" | "OUTSIDE_PLAY_STORE";
  tax?: GooglePlayFullApiSchemaMoney;
  lineItems?: ReadonlyArray<GooglePlayFullApiSchemaLineItem>;
};

export type GooglePlayFullApiSchemaProductPurchasesAcknowledgeRequest = {
  developerPayload?: string;
};

export type GooglePlayFullApiSchemaProductPurchase = {
  obfuscatedExternalAccountId?: string;
  purchaseState?: number;
  kind?: string;
  developerPayload?: string;
  quantity?: number;
  purchaseType?: number;
  purchaseTimeMillis?: string;
  orderId?: string;
  acknowledgementState?: number;
  obfuscatedExternalProfileId?: string;
  consumptionState?: number;
  purchaseToken?: string;
  refundableQuantity?: number;
  productId?: string;
  regionCode?: string;
};

export type GooglePlayFullApiSchemaProductPurchaseV2 = {
  obfuscatedExternalProfileId?: string;
  acknowledgementState?: "ACKNOWLEDGEMENT_STATE_UNSPECIFIED" | "ACKNOWLEDGEMENT_STATE_PENDING" | "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED";
  kind?: string;
  orderId?: string;
  testPurchaseContext?: GooglePlayFullApiSchemaTestPurchaseContext;
  obfuscatedExternalAccountId?: string;
  regionCode?: string;
  purchaseCompletionTime?: string;
  purchaseStateContext?: GooglePlayFullApiSchemaPurchaseStateContext;
  productLineItem?: ReadonlyArray<GooglePlayFullApiSchemaProductLineItem>;
};

export type GooglePlayFullApiSchemaSubscriptionPurchasesAcknowledgeRequest = {
  developerPayload?: string;
  externalAccountIds?: GooglePlayFullApiSchemaExternalAccountIds;
};

export type GooglePlayFullApiSchemaSubscriptionPurchasesDeferRequest = {
  deferralInfo?: GooglePlayFullApiSchemaSubscriptionDeferralInfo;
};

export type GooglePlayFullApiSchemaSubscriptionPurchasesDeferResponse = {
  newExpiryTimeMillis?: string;
};

export type GooglePlayFullApiSchemaSubscriptionPurchase = {
  obfuscatedExternalProfileId?: string;
  priceChange?: GooglePlayFullApiSchemaSubscriptionPriceChange;
  userCancellationTimeMillis?: string;
  purchaseType?: number;
  countryCode?: string;
  givenName?: string;
  promotionType?: number;
  profileName?: string;
  introductoryPriceInfo?: GooglePlayFullApiSchemaIntroductoryPriceInfo;
  autoResumeTimeMillis?: string;
  obfuscatedExternalAccountId?: string;
  profileId?: string;
  expiryTimeMillis?: string;
  autoRenewing?: boolean;
  promotionCode?: string;
  externalAccountId?: string;
  priceCurrencyCode?: string;
  acknowledgementState?: number;
  orderId?: string;
  startTimeMillis?: string;
  cancelSurveyResult?: GooglePlayFullApiSchemaSubscriptionCancelSurveyResult;
  familyName?: string;
  emailAddress?: string;
  kind?: string;
  developerPayload?: string;
  linkedPurchaseToken?: string;
  paymentState?: number;
  priceAmountMicros?: string;
  cancelReason?: number;
};

export type GooglePlayFullApiSchemaCancelSubscriptionPurchaseRequest = {
  cancellationContext?: GooglePlayFullApiSchemaCancellationContext;
};

export type GooglePlayFullApiSchemaCancelSubscriptionPurchaseResponse = {};

export type GooglePlayFullApiSchemaDeferSubscriptionPurchaseRequest = {
  deferralContext?: GooglePlayFullApiSchemaDeferralContext;
};

export type GooglePlayFullApiSchemaDeferSubscriptionPurchaseResponse = {
  itemExpiryTimeDetails?: ReadonlyArray<GooglePlayFullApiSchemaItemExpiryTimeDetails>;
};

export type GooglePlayFullApiSchemaSubscriptionPurchaseV2 = {
  latestOrderId?: string;
  acknowledgementState?: "ACKNOWLEDGEMENT_STATE_UNSPECIFIED" | "ACKNOWLEDGEMENT_STATE_PENDING" | "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED";
  externalAccountIdentifiers?: GooglePlayFullApiSchemaExternalAccountIdentifiers;
  pausedStateContext?: GooglePlayFullApiSchemaPausedStateContext;
  startTime?: string;
  onHoldStateContext?: GooglePlayFullApiSchemaOnHoldStateContext;
  regionCode?: string;
  outOfAppPurchaseContext?: GooglePlayFullApiSchemaOutOfAppPurchaseContext;
  kind?: string;
  canceledStateContext?: GooglePlayFullApiSchemaCanceledStateContext;
  linkedPurchaseToken?: string;
  etag?: string;
  subscribeWithGoogleInfo?: GooglePlayFullApiSchemaSubscribeWithGoogleInfo;
  testPurchase?: GooglePlayFullApiSchemaTestPurchase;
  inGracePeriodStateContext?: GooglePlayFullApiSchemaInGracePeriodStateContext;
  lineItems?: ReadonlyArray<GooglePlayFullApiSchemaSubscriptionPurchaseLineItem>;
  subscriptionState?: "SUBSCRIPTION_STATE_UNSPECIFIED" | "SUBSCRIPTION_STATE_PENDING" | "SUBSCRIPTION_STATE_ACTIVE" | "SUBSCRIPTION_STATE_PAUSED" | "SUBSCRIPTION_STATE_IN_GRACE_PERIOD" | "SUBSCRIPTION_STATE_ON_HOLD" | "SUBSCRIPTION_STATE_CANCELED" | "SUBSCRIPTION_STATE_EXPIRED" | "SUBSCRIPTION_STATE_PENDING_PURCHASE_CANCELED";
};

export type GooglePlayFullApiSchemaRevokeSubscriptionPurchaseRequest = {
  revocationContext?: GooglePlayFullApiSchemaRevocationContext;
};

export type GooglePlayFullApiSchemaRevokeSubscriptionPurchaseResponse = {};

export type GooglePlayFullApiSchemaVoidedPurchasesListResponse = {
  pageInfo?: GooglePlayFullApiSchemaPageInfo;
  tokenPagination?: GooglePlayFullApiSchemaTokenPagination;
  voidedPurchases?: ReadonlyArray<GooglePlayFullApiSchemaVoidedPurchase>;
};

export type GooglePlayFullApiSchemaReview = {
  reviewId?: string;
  authorName?: string;
  comments?: ReadonlyArray<GooglePlayFullApiSchemaComment>;
};

export type GooglePlayFullApiSchemaReviewsListResponse = {
  pageInfo?: GooglePlayFullApiSchemaPageInfo;
  reviews?: ReadonlyArray<GooglePlayFullApiSchemaReview2>;
  tokenPagination?: GooglePlayFullApiSchemaTokenPagination;
};

export type GooglePlayFullApiSchemaReviewsReplyRequest = {
  replyText?: string;
};

export type GooglePlayFullApiSchemaReviewsReplyResponse = {
  result?: GooglePlayFullApiSchemaReviewReplyResult;
};

export type GooglePlayFullApiSchemaVariant = {
  deviceSpec?: GooglePlayFullApiSchemaDeviceSpec;
  variantId?: number;
  options?: GooglePlayFullApiSchemaSystemApkOptions;
};

export type GooglePlayFullApiSchemaSystemApksListResponse = {
  variants?: ReadonlyArray<GooglePlayFullApiSchemaVariant2>;
};

export type GooglePlayFullApiSchemaUser = {
  accessState?: "ACCESS_STATE_UNSPECIFIED" | "INVITED" | "INVITATION_EXPIRED" | "ACCESS_GRANTED" | "ACCESS_EXPIRED";
  grants?: ReadonlyArray<GooglePlayFullApiSchemaGrant2>;
  expirationTime?: string;
  partial?: boolean;
  developerAccountPermissions?: ReadonlyArray<"DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED" | "CAN_SEE_ALL_APPS" | "CAN_VIEW_FINANCIAL_DATA_GLOBAL" | "CAN_MANAGE_PERMISSIONS_GLOBAL" | "CAN_EDIT_GAMES_GLOBAL" | "CAN_PUBLISH_GAMES_GLOBAL" | "CAN_REPLY_TO_REVIEWS_GLOBAL" | "CAN_MANAGE_PUBLIC_APKS_GLOBAL" | "CAN_MANAGE_TRACK_APKS_GLOBAL" | "CAN_MANAGE_TRACK_USERS_GLOBAL" | "CAN_MANAGE_PUBLIC_LISTING_GLOBAL" | "CAN_MANAGE_DRAFT_APPS_GLOBAL" | "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL" | "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL" | "CAN_MANAGE_ORDERS_GLOBAL" | "CAN_MANAGE_APP_CONTENT_GLOBAL" | "CAN_VIEW_NON_FINANCIAL_DATA_GLOBAL" | "CAN_VIEW_APP_QUALITY_GLOBAL" | "CAN_MANAGE_DEEPLINKS_GLOBAL" | "CAN_VIEW_CONNECTED_APPS_GLOBAL" | "CAN_EDIT_CONNECTED_APPS_GLOBAL">;
  email?: string;
  name?: string;
};

export type GooglePlayFullApiSchemaListUsersResponse = {
  users?: ReadonlyArray<GooglePlayFullApiSchemaUser2>;
  nextPageToken?: string;
};

export type GooglePlayFullApiSchemaDeviceGroup = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeviceTierSet = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUserCountrySet = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeviceTierConfig2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaReleaseSummary = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTargetingUpdate = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTargeting = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRemoteInAppUpdate = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRemoteInAppUpdateData = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaAppRecoveryAction2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExternallyHostedApk = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaApk2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaApkBinary = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaBundle2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTrackTargetedCountry = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeobfuscationFile = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExpansionFile2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaImage = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaListing2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTrackRelease = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTrack2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExternalTransactionAddress = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaPrice = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExternalTransactionTestPurchase = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeExternalTransaction = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExternalOfferDetails = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRecurringExternalTransaction = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaPartialRefund = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaFullRefund = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaGeneratedApksPerSigningKey = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaInappproductsDeleteRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaInAppProduct2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaInappproductsUpdateRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaInAppProductListing = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionTaxAndComplianceSettings = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaManagedProductTaxAndComplianceSettings = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTokenPagination = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaPageInfo = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaMoney = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaConvertedRegionPrice = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaConvertedOtherRegionsPrice = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRegionsVersion = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeleteOneTimeProductRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProduct2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateOneTimeProductRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductTaxAndComplianceSettings = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductListing = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRestrictedPaymentCountries = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOfferTag = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductPurchaseOption = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeletePurchaseOptionRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdatePurchaseOptionStateRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductOfferRegionalPricingAndAvailabilityConfig = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductPreOrderOffer = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductDiscountedOffer = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeleteOneTimeProductOfferRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaGetOneTimeProductOfferRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOneTimeProductOffer2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateOneTimeProductOfferRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateOneTimeProductOfferStateRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionListing = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaBasePlan = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaMigrateBasePlanPricesRequest2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaMigrateBasePlanPricesResponse2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateBasePlanStateRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscription2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRegionalPriceMigrationConfig = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionOfferTargeting = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRegionalSubscriptionOfferConfig = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionOfferPhase = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOtherRegionsSubscriptionOfferConfig = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaGetSubscriptionOfferRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionOffer2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateSubscriptionOfferRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateSubscriptionOfferStateRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUpdateSubscriptionRequest = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOrder2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaPointsDetails = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaBuyerAddress = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOrderHistory = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOrderDetails = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaLineItem = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTestPurchaseContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaPurchaseStateContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaProductLineItem = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExternalAccountIds = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionDeferralInfo = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionPriceChange = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaIntroductoryPriceInfo = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionCancelSurveyResult = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaCancellationContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeferralContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaItemExpiryTimeDetails = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaExternalAccountIdentifiers = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaPausedStateContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOnHoldStateContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaOutOfAppPurchaseContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaCanceledStateContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscribeWithGoogleInfo = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaTestPurchase = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaInGracePeriodStateContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSubscriptionPurchaseLineItem = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaRevocationContext = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaVoidedPurchase = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaComment = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaReview2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaReviewReplyResult = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaDeviceSpec = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaSystemApkOptions = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaVariant2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaGrant2 = GooglePlayFullApiSchemaJsonValue;

export type GooglePlayFullApiSchemaUser2 = GooglePlayFullApiSchemaJsonValue;

export interface GooglePlayFullApiOperationQueryMap {
  "applications.dataSafety": {};
  "applications.deviceTierConfigs.create": {
  allowUnknownDevices?: boolean;
};
  "applications.deviceTierConfigs.get": {};
  "applications.deviceTierConfigs.list": {
  pageToken?: string;
  pageSize?: number;
};
  "applications.tracks.releases.list": {};
  "apprecovery.addTargeting": {};
  "apprecovery.cancel": {};
  "apprecovery.create": {};
  "apprecovery.deploy": {};
  "apprecovery.list": {
  versionCode?: string;
};
  "edits.apks.addexternallyhosted": {};
  "edits.apks.list": {};
  "edits.apks.upload": {};
  "edits.bundles.list": {};
  "edits.bundles.upload": {
  ackBundleInstallationWarning?: boolean;
  deviceTierConfigId?: string;
};
  "edits.commit": {
  changesNotSentForReview?: boolean;
  changesInReviewBehavior?: "CHANGES_IN_REVIEW_BEHAVIOR_TYPE_UNSPECIFIED" | "CANCEL_IN_REVIEW_AND_SUBMIT" | "ERROR_IF_IN_REVIEW";
};
  "edits.countryavailability.get": {};
  "edits.delete": {};
  "edits.deobfuscationfiles.upload": {};
  "edits.details.get": {};
  "edits.details.patch": {};
  "edits.details.update": {};
  "edits.expansionfiles.get": {};
  "edits.expansionfiles.patch": {};
  "edits.expansionfiles.update": {};
  "edits.expansionfiles.upload": {};
  "edits.get": {};
  "edits.images.delete": {};
  "edits.images.deleteall": {};
  "edits.images.list": {};
  "edits.images.upload": {};
  "edits.insert": {};
  "edits.listings.delete": {};
  "edits.listings.deleteall": {};
  "edits.listings.get": {};
  "edits.listings.list": {};
  "edits.listings.patch": {};
  "edits.listings.update": {};
  "edits.testers.get": {};
  "edits.testers.patch": {};
  "edits.testers.update": {};
  "edits.tracks.create": {};
  "edits.tracks.get": {};
  "edits.tracks.list": {};
  "edits.tracks.patch": {};
  "edits.tracks.update": {};
  "edits.validate": {};
  "externaltransactions.createexternaltransaction": {
  externalTransactionId?: string;
};
  "externaltransactions.getexternaltransaction": {};
  "externaltransactions.refundexternaltransaction": {};
  "generatedapks.download": {};
  "generatedapks.list": {};
  "grants.create": {};
  "grants.delete": {};
  "grants.patch": {
  updateMask?: string;
};
  "inappproducts.batchDelete": {};
  "inappproducts.batchGet": {
  sku?: ReadonlyArray<string>;
};
  "inappproducts.batchUpdate": {};
  "inappproducts.delete": {
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
};
  "inappproducts.get": {};
  "inappproducts.insert": {
  autoConvertMissingPrices?: boolean;
};
  "inappproducts.list": {
  token?: string;
  maxResults?: number;
  startIndex?: number;
};
  "inappproducts.patch": {
  autoConvertMissingPrices?: boolean;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
};
  "inappproducts.update": {
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  autoConvertMissingPrices?: boolean;
  allowMissing?: boolean;
};
  "internalappsharingartifacts.uploadapk": {};
  "internalappsharingartifacts.uploadbundle": {};
  "monetization.convertRegionPrices": {};
  "monetization.onetimeproducts.batchDelete": {};
  "monetization.onetimeproducts.batchGet": {
  productIds?: ReadonlyArray<string>;
};
  "monetization.onetimeproducts.batchUpdate": {};
  "monetization.onetimeproducts.delete": {
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
};
  "monetization.onetimeproducts.get": {};
  "monetization.onetimeproducts.list": {
  pageSize?: number;
  pageToken?: string;
};
  "monetization.onetimeproducts.patch": {
  updateMask?: string;
  allowMissing?: boolean;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  "regionsVersion.version"?: string;
};
  "monetization.onetimeproducts.purchaseOptions.batchDelete": {};
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": {};
  "monetization.onetimeproducts.purchaseOptions.offers.activate": {};
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": {};
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": {};
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": {};
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": {};
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": {};
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": {};
  "monetization.onetimeproducts.purchaseOptions.offers.list": {
  pageSize?: number;
  pageToken?: string;
};
  "monetization.subscriptions.archive": {};
  "monetization.subscriptions.basePlans.activate": {};
  "monetization.subscriptions.basePlans.batchMigratePrices": {};
  "monetization.subscriptions.basePlans.batchUpdateStates": {};
  "monetization.subscriptions.basePlans.deactivate": {};
  "monetization.subscriptions.basePlans.delete": {};
  "monetization.subscriptions.basePlans.migratePrices": {};
  "monetization.subscriptions.basePlans.offers.activate": {};
  "monetization.subscriptions.basePlans.offers.batchGet": {};
  "monetization.subscriptions.basePlans.offers.batchUpdate": {};
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": {};
  "monetization.subscriptions.basePlans.offers.create": {
  offerId?: string;
  "regionsVersion.version"?: string;
};
  "monetization.subscriptions.basePlans.offers.deactivate": {};
  "monetization.subscriptions.basePlans.offers.delete": {};
  "monetization.subscriptions.basePlans.offers.get": {};
  "monetization.subscriptions.basePlans.offers.list": {
  pageSize?: number;
  pageToken?: string;
};
  "monetization.subscriptions.basePlans.offers.patch": {
  "regionsVersion.version"?: string;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  allowMissing?: boolean;
  updateMask?: string;
};
  "monetization.subscriptions.batchGet": {
  productIds?: ReadonlyArray<string>;
};
  "monetization.subscriptions.batchUpdate": {};
  "monetization.subscriptions.create": {
  productId?: string;
  "regionsVersion.version"?: string;
};
  "monetization.subscriptions.delete": {};
  "monetization.subscriptions.get": {};
  "monetization.subscriptions.list": {
  pageSize?: number;
  showArchived?: boolean;
  pageToken?: string;
};
  "monetization.subscriptions.patch": {
  allowMissing?: boolean;
  latencyTolerance?: "PRODUCT_UPDATE_LATENCY_TOLERANCE_UNSPECIFIED" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_SENSITIVE" | "PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT";
  "regionsVersion.version"?: string;
  updateMask?: string;
};
  "orders.batchget": {
  orderIds?: ReadonlyArray<string>;
};
  "orders.get": {};
  "orders.refund": {
  revoke?: boolean;
};
  "purchases.products.acknowledge": {};
  "purchases.products.consume": {};
  "purchases.products.get": {};
  "purchases.productsv2.getproductpurchasev2": {};
  "purchases.subscriptions.acknowledge": {};
  "purchases.subscriptions.cancel": {};
  "purchases.subscriptions.defer": {};
  "purchases.subscriptions.get": {};
  "purchases.subscriptions.refund": {};
  "purchases.subscriptions.revoke": {};
  "purchases.subscriptionsv2.cancel": {};
  "purchases.subscriptionsv2.defer": {};
  "purchases.subscriptionsv2.get": {};
  "purchases.subscriptionsv2.revoke": {};
  "purchases.voidedpurchases.list": {
  startIndex?: number;
  endTime?: string;
  maxResults?: number;
  token?: string;
  startTime?: string;
  type?: number;
  includeQuantityBasedPartialRefund?: boolean;
};
  "reviews.get": {
  translationLanguage?: string;
};
  "reviews.list": {
  translationLanguage?: string;
  token?: string;
  maxResults?: number;
  startIndex?: number;
};
  "reviews.reply": {};
  "systemapks.variants.create": {};
  "systemapks.variants.download": {};
  "systemapks.variants.get": {};
  "systemapks.variants.list": {};
  "users.create": {};
  "users.delete": {};
  "users.list": {
  pageSize?: number;
  pageToken?: string;
};
  "users.patch": {
  updateMask?: string;
};
}

export interface GooglePlayFullApiOperationQueryRequiredMap {
  "applications.dataSafety": false;
  "applications.deviceTierConfigs.create": false;
  "applications.deviceTierConfigs.get": false;
  "applications.deviceTierConfigs.list": false;
  "applications.tracks.releases.list": false;
  "apprecovery.addTargeting": false;
  "apprecovery.cancel": false;
  "apprecovery.create": false;
  "apprecovery.deploy": false;
  "apprecovery.list": false;
  "edits.apks.addexternallyhosted": false;
  "edits.apks.list": false;
  "edits.apks.upload": false;
  "edits.bundles.list": false;
  "edits.bundles.upload": false;
  "edits.commit": false;
  "edits.countryavailability.get": false;
  "edits.delete": false;
  "edits.deobfuscationfiles.upload": false;
  "edits.details.get": false;
  "edits.details.patch": false;
  "edits.details.update": false;
  "edits.expansionfiles.get": false;
  "edits.expansionfiles.patch": false;
  "edits.expansionfiles.update": false;
  "edits.expansionfiles.upload": false;
  "edits.get": false;
  "edits.images.delete": false;
  "edits.images.deleteall": false;
  "edits.images.list": false;
  "edits.images.upload": false;
  "edits.insert": false;
  "edits.listings.delete": false;
  "edits.listings.deleteall": false;
  "edits.listings.get": false;
  "edits.listings.list": false;
  "edits.listings.patch": false;
  "edits.listings.update": false;
  "edits.testers.get": false;
  "edits.testers.patch": false;
  "edits.testers.update": false;
  "edits.tracks.create": false;
  "edits.tracks.get": false;
  "edits.tracks.list": false;
  "edits.tracks.patch": false;
  "edits.tracks.update": false;
  "edits.validate": false;
  "externaltransactions.createexternaltransaction": false;
  "externaltransactions.getexternaltransaction": false;
  "externaltransactions.refundexternaltransaction": false;
  "generatedapks.download": false;
  "generatedapks.list": false;
  "grants.create": false;
  "grants.delete": false;
  "grants.patch": false;
  "inappproducts.batchDelete": false;
  "inappproducts.batchGet": false;
  "inappproducts.batchUpdate": false;
  "inappproducts.delete": false;
  "inappproducts.get": false;
  "inappproducts.insert": false;
  "inappproducts.list": false;
  "inappproducts.patch": false;
  "inappproducts.update": false;
  "internalappsharingartifacts.uploadapk": false;
  "internalappsharingartifacts.uploadbundle": false;
  "monetization.convertRegionPrices": false;
  "monetization.onetimeproducts.batchDelete": false;
  "monetization.onetimeproducts.batchGet": false;
  "monetization.onetimeproducts.batchUpdate": false;
  "monetization.onetimeproducts.delete": false;
  "monetization.onetimeproducts.get": false;
  "monetization.onetimeproducts.list": false;
  "monetization.onetimeproducts.patch": false;
  "monetization.onetimeproducts.purchaseOptions.batchDelete": false;
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": false;
  "monetization.onetimeproducts.purchaseOptions.offers.activate": false;
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": false;
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": false;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": false;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": false;
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": false;
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": false;
  "monetization.onetimeproducts.purchaseOptions.offers.list": false;
  "monetization.subscriptions.archive": false;
  "monetization.subscriptions.basePlans.activate": false;
  "monetization.subscriptions.basePlans.batchMigratePrices": false;
  "monetization.subscriptions.basePlans.batchUpdateStates": false;
  "monetization.subscriptions.basePlans.deactivate": false;
  "monetization.subscriptions.basePlans.delete": false;
  "monetization.subscriptions.basePlans.migratePrices": false;
  "monetization.subscriptions.basePlans.offers.activate": false;
  "monetization.subscriptions.basePlans.offers.batchGet": false;
  "monetization.subscriptions.basePlans.offers.batchUpdate": false;
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": false;
  "monetization.subscriptions.basePlans.offers.create": false;
  "monetization.subscriptions.basePlans.offers.deactivate": false;
  "monetization.subscriptions.basePlans.offers.delete": false;
  "monetization.subscriptions.basePlans.offers.get": false;
  "monetization.subscriptions.basePlans.offers.list": false;
  "monetization.subscriptions.basePlans.offers.patch": false;
  "monetization.subscriptions.batchGet": false;
  "monetization.subscriptions.batchUpdate": false;
  "monetization.subscriptions.create": false;
  "monetization.subscriptions.delete": false;
  "monetization.subscriptions.get": false;
  "monetization.subscriptions.list": false;
  "monetization.subscriptions.patch": false;
  "orders.batchget": false;
  "orders.get": false;
  "orders.refund": false;
  "purchases.products.acknowledge": false;
  "purchases.products.consume": false;
  "purchases.products.get": false;
  "purchases.productsv2.getproductpurchasev2": false;
  "purchases.subscriptions.acknowledge": false;
  "purchases.subscriptions.cancel": false;
  "purchases.subscriptions.defer": false;
  "purchases.subscriptions.get": false;
  "purchases.subscriptions.refund": false;
  "purchases.subscriptions.revoke": false;
  "purchases.subscriptionsv2.cancel": false;
  "purchases.subscriptionsv2.defer": false;
  "purchases.subscriptionsv2.get": false;
  "purchases.subscriptionsv2.revoke": false;
  "purchases.voidedpurchases.list": false;
  "reviews.get": false;
  "reviews.list": false;
  "reviews.reply": false;
  "systemapks.variants.create": false;
  "systemapks.variants.download": false;
  "systemapks.variants.get": false;
  "systemapks.variants.list": false;
  "users.create": false;
  "users.delete": false;
  "users.list": false;
  "users.patch": false;
}

export interface GooglePlayFullApiOperationRequestBodyMap {
  "applications.dataSafety": GooglePlayFullApiSchemaSafetyLabelsUpdateRequest;
  "applications.deviceTierConfigs.create": GooglePlayFullApiSchemaDeviceTierConfig;
  "applications.deviceTierConfigs.get": never;
  "applications.deviceTierConfigs.list": never;
  "applications.tracks.releases.list": never;
  "apprecovery.addTargeting": GooglePlayFullApiSchemaAddTargetingRequest;
  "apprecovery.cancel": GooglePlayFullApiSchemaCancelAppRecoveryRequest;
  "apprecovery.create": GooglePlayFullApiSchemaCreateDraftAppRecoveryRequest;
  "apprecovery.deploy": GooglePlayFullApiSchemaDeployAppRecoveryRequest;
  "apprecovery.list": never;
  "edits.apks.addexternallyhosted": GooglePlayFullApiSchemaApksAddExternallyHostedRequest;
  "edits.apks.list": never;
  "edits.apks.upload": never;
  "edits.bundles.list": never;
  "edits.bundles.upload": never;
  "edits.commit": never;
  "edits.countryavailability.get": never;
  "edits.delete": never;
  "edits.deobfuscationfiles.upload": never;
  "edits.details.get": never;
  "edits.details.patch": GooglePlayFullApiSchemaAppDetails;
  "edits.details.update": GooglePlayFullApiSchemaAppDetails;
  "edits.expansionfiles.get": never;
  "edits.expansionfiles.patch": GooglePlayFullApiSchemaExpansionFile;
  "edits.expansionfiles.update": GooglePlayFullApiSchemaExpansionFile;
  "edits.expansionfiles.upload": never;
  "edits.get": never;
  "edits.images.delete": never;
  "edits.images.deleteall": never;
  "edits.images.list": never;
  "edits.images.upload": never;
  "edits.insert": GooglePlayFullApiSchemaAppEdit;
  "edits.listings.delete": never;
  "edits.listings.deleteall": never;
  "edits.listings.get": never;
  "edits.listings.list": never;
  "edits.listings.patch": GooglePlayFullApiSchemaListing;
  "edits.listings.update": GooglePlayFullApiSchemaListing;
  "edits.testers.get": never;
  "edits.testers.patch": GooglePlayFullApiSchemaTesters;
  "edits.testers.update": GooglePlayFullApiSchemaTesters;
  "edits.tracks.create": GooglePlayFullApiSchemaTrackConfig;
  "edits.tracks.get": never;
  "edits.tracks.list": never;
  "edits.tracks.patch": GooglePlayFullApiSchemaTrack;
  "edits.tracks.update": GooglePlayFullApiSchemaTrack;
  "edits.validate": never;
  "externaltransactions.createexternaltransaction": GooglePlayFullApiSchemaExternalTransaction;
  "externaltransactions.getexternaltransaction": never;
  "externaltransactions.refundexternaltransaction": GooglePlayFullApiSchemaRefundExternalTransactionRequest;
  "generatedapks.download": never;
  "generatedapks.list": never;
  "grants.create": GooglePlayFullApiSchemaGrant;
  "grants.delete": never;
  "grants.patch": GooglePlayFullApiSchemaGrant;
  "inappproducts.batchDelete": GooglePlayFullApiSchemaInappproductsBatchDeleteRequest;
  "inappproducts.batchGet": never;
  "inappproducts.batchUpdate": GooglePlayFullApiSchemaInappproductsBatchUpdateRequest;
  "inappproducts.delete": never;
  "inappproducts.get": never;
  "inappproducts.insert": GooglePlayFullApiSchemaInAppProduct;
  "inappproducts.list": never;
  "inappproducts.patch": GooglePlayFullApiSchemaInAppProduct;
  "inappproducts.update": GooglePlayFullApiSchemaInAppProduct;
  "internalappsharingartifacts.uploadapk": never;
  "internalappsharingartifacts.uploadbundle": never;
  "monetization.convertRegionPrices": GooglePlayFullApiSchemaConvertRegionPricesRequest;
  "monetization.onetimeproducts.batchDelete": GooglePlayFullApiSchemaBatchDeleteOneTimeProductsRequest;
  "monetization.onetimeproducts.batchGet": never;
  "monetization.onetimeproducts.batchUpdate": GooglePlayFullApiSchemaBatchUpdateOneTimeProductsRequest;
  "monetization.onetimeproducts.delete": never;
  "monetization.onetimeproducts.get": never;
  "monetization.onetimeproducts.list": never;
  "monetization.onetimeproducts.patch": GooglePlayFullApiSchemaOneTimeProduct;
  "monetization.onetimeproducts.purchaseOptions.batchDelete": GooglePlayFullApiSchemaBatchDeletePurchaseOptionsRequest;
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdatePurchaseOptionStatesRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.activate": GooglePlayFullApiSchemaActivateOneTimeProductOfferRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": GooglePlayFullApiSchemaBatchDeleteOneTimeProductOffersRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": GooglePlayFullApiSchemaBatchGetOneTimeProductOffersRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": GooglePlayFullApiSchemaBatchUpdateOneTimeProductOffersRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdateOneTimeProductOfferStatesRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": GooglePlayFullApiSchemaCancelOneTimeProductOfferRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": GooglePlayFullApiSchemaDeactivateOneTimeProductOfferRequest;
  "monetization.onetimeproducts.purchaseOptions.offers.list": never;
  "monetization.subscriptions.archive": GooglePlayFullApiSchemaArchiveSubscriptionRequest;
  "monetization.subscriptions.basePlans.activate": GooglePlayFullApiSchemaActivateBasePlanRequest;
  "monetization.subscriptions.basePlans.batchMigratePrices": GooglePlayFullApiSchemaBatchMigrateBasePlanPricesRequest;
  "monetization.subscriptions.basePlans.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdateBasePlanStatesRequest;
  "monetization.subscriptions.basePlans.deactivate": GooglePlayFullApiSchemaDeactivateBasePlanRequest;
  "monetization.subscriptions.basePlans.delete": never;
  "monetization.subscriptions.basePlans.migratePrices": GooglePlayFullApiSchemaMigrateBasePlanPricesRequest;
  "monetization.subscriptions.basePlans.offers.activate": GooglePlayFullApiSchemaActivateSubscriptionOfferRequest;
  "monetization.subscriptions.basePlans.offers.batchGet": GooglePlayFullApiSchemaBatchGetSubscriptionOffersRequest;
  "monetization.subscriptions.basePlans.offers.batchUpdate": GooglePlayFullApiSchemaBatchUpdateSubscriptionOffersRequest;
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdateSubscriptionOfferStatesRequest;
  "monetization.subscriptions.basePlans.offers.create": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.basePlans.offers.deactivate": GooglePlayFullApiSchemaDeactivateSubscriptionOfferRequest;
  "monetization.subscriptions.basePlans.offers.delete": never;
  "monetization.subscriptions.basePlans.offers.get": never;
  "monetization.subscriptions.basePlans.offers.list": never;
  "monetization.subscriptions.basePlans.offers.patch": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.batchGet": never;
  "monetization.subscriptions.batchUpdate": GooglePlayFullApiSchemaBatchUpdateSubscriptionsRequest;
  "monetization.subscriptions.create": GooglePlayFullApiSchemaSubscription;
  "monetization.subscriptions.delete": never;
  "monetization.subscriptions.get": never;
  "monetization.subscriptions.list": never;
  "monetization.subscriptions.patch": GooglePlayFullApiSchemaSubscription;
  "orders.batchget": never;
  "orders.get": never;
  "orders.refund": never;
  "purchases.products.acknowledge": GooglePlayFullApiSchemaProductPurchasesAcknowledgeRequest;
  "purchases.products.consume": never;
  "purchases.products.get": never;
  "purchases.productsv2.getproductpurchasev2": never;
  "purchases.subscriptions.acknowledge": GooglePlayFullApiSchemaSubscriptionPurchasesAcknowledgeRequest;
  "purchases.subscriptions.cancel": never;
  "purchases.subscriptions.defer": GooglePlayFullApiSchemaSubscriptionPurchasesDeferRequest;
  "purchases.subscriptions.get": never;
  "purchases.subscriptions.refund": never;
  "purchases.subscriptions.revoke": never;
  "purchases.subscriptionsv2.cancel": GooglePlayFullApiSchemaCancelSubscriptionPurchaseRequest;
  "purchases.subscriptionsv2.defer": GooglePlayFullApiSchemaDeferSubscriptionPurchaseRequest;
  "purchases.subscriptionsv2.get": never;
  "purchases.subscriptionsv2.revoke": GooglePlayFullApiSchemaRevokeSubscriptionPurchaseRequest;
  "purchases.voidedpurchases.list": never;
  "reviews.get": never;
  "reviews.list": never;
  "reviews.reply": GooglePlayFullApiSchemaReviewsReplyRequest;
  "systemapks.variants.create": GooglePlayFullApiSchemaVariant;
  "systemapks.variants.download": never;
  "systemapks.variants.get": never;
  "systemapks.variants.list": never;
  "users.create": GooglePlayFullApiSchemaUser;
  "users.delete": never;
  "users.list": never;
  "users.patch": GooglePlayFullApiSchemaUser;
}

export interface GooglePlayFullApiOperationRequestBodyRequiredMap {
  "applications.dataSafety": true;
  "applications.deviceTierConfigs.create": true;
  "applications.deviceTierConfigs.get": false;
  "applications.deviceTierConfigs.list": false;
  "applications.tracks.releases.list": false;
  "apprecovery.addTargeting": true;
  "apprecovery.cancel": true;
  "apprecovery.create": true;
  "apprecovery.deploy": true;
  "apprecovery.list": false;
  "edits.apks.addexternallyhosted": true;
  "edits.apks.list": false;
  "edits.apks.upload": false;
  "edits.bundles.list": false;
  "edits.bundles.upload": false;
  "edits.commit": false;
  "edits.countryavailability.get": false;
  "edits.delete": false;
  "edits.deobfuscationfiles.upload": false;
  "edits.details.get": false;
  "edits.details.patch": true;
  "edits.details.update": true;
  "edits.expansionfiles.get": false;
  "edits.expansionfiles.patch": true;
  "edits.expansionfiles.update": true;
  "edits.expansionfiles.upload": false;
  "edits.get": false;
  "edits.images.delete": false;
  "edits.images.deleteall": false;
  "edits.images.list": false;
  "edits.images.upload": false;
  "edits.insert": true;
  "edits.listings.delete": false;
  "edits.listings.deleteall": false;
  "edits.listings.get": false;
  "edits.listings.list": false;
  "edits.listings.patch": true;
  "edits.listings.update": true;
  "edits.testers.get": false;
  "edits.testers.patch": true;
  "edits.testers.update": true;
  "edits.tracks.create": true;
  "edits.tracks.get": false;
  "edits.tracks.list": false;
  "edits.tracks.patch": true;
  "edits.tracks.update": true;
  "edits.validate": false;
  "externaltransactions.createexternaltransaction": true;
  "externaltransactions.getexternaltransaction": false;
  "externaltransactions.refundexternaltransaction": true;
  "generatedapks.download": false;
  "generatedapks.list": false;
  "grants.create": true;
  "grants.delete": false;
  "grants.patch": true;
  "inappproducts.batchDelete": true;
  "inappproducts.batchGet": false;
  "inappproducts.batchUpdate": true;
  "inappproducts.delete": false;
  "inappproducts.get": false;
  "inappproducts.insert": true;
  "inappproducts.list": false;
  "inappproducts.patch": true;
  "inappproducts.update": true;
  "internalappsharingartifacts.uploadapk": false;
  "internalappsharingartifacts.uploadbundle": false;
  "monetization.convertRegionPrices": true;
  "monetization.onetimeproducts.batchDelete": true;
  "monetization.onetimeproducts.batchGet": false;
  "monetization.onetimeproducts.batchUpdate": true;
  "monetization.onetimeproducts.delete": false;
  "monetization.onetimeproducts.get": false;
  "monetization.onetimeproducts.list": false;
  "monetization.onetimeproducts.patch": true;
  "monetization.onetimeproducts.purchaseOptions.batchDelete": true;
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": true;
  "monetization.onetimeproducts.purchaseOptions.offers.activate": true;
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": true;
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": true;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": true;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": true;
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": true;
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": true;
  "monetization.onetimeproducts.purchaseOptions.offers.list": false;
  "monetization.subscriptions.archive": true;
  "monetization.subscriptions.basePlans.activate": true;
  "monetization.subscriptions.basePlans.batchMigratePrices": true;
  "monetization.subscriptions.basePlans.batchUpdateStates": true;
  "monetization.subscriptions.basePlans.deactivate": true;
  "monetization.subscriptions.basePlans.delete": false;
  "monetization.subscriptions.basePlans.migratePrices": true;
  "monetization.subscriptions.basePlans.offers.activate": true;
  "monetization.subscriptions.basePlans.offers.batchGet": true;
  "monetization.subscriptions.basePlans.offers.batchUpdate": true;
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": true;
  "monetization.subscriptions.basePlans.offers.create": true;
  "monetization.subscriptions.basePlans.offers.deactivate": true;
  "monetization.subscriptions.basePlans.offers.delete": false;
  "monetization.subscriptions.basePlans.offers.get": false;
  "monetization.subscriptions.basePlans.offers.list": false;
  "monetization.subscriptions.basePlans.offers.patch": true;
  "monetization.subscriptions.batchGet": false;
  "monetization.subscriptions.batchUpdate": true;
  "monetization.subscriptions.create": true;
  "monetization.subscriptions.delete": false;
  "monetization.subscriptions.get": false;
  "monetization.subscriptions.list": false;
  "monetization.subscriptions.patch": true;
  "orders.batchget": false;
  "orders.get": false;
  "orders.refund": false;
  "purchases.products.acknowledge": true;
  "purchases.products.consume": false;
  "purchases.products.get": false;
  "purchases.productsv2.getproductpurchasev2": false;
  "purchases.subscriptions.acknowledge": true;
  "purchases.subscriptions.cancel": false;
  "purchases.subscriptions.defer": true;
  "purchases.subscriptions.get": false;
  "purchases.subscriptions.refund": false;
  "purchases.subscriptions.revoke": false;
  "purchases.subscriptionsv2.cancel": true;
  "purchases.subscriptionsv2.defer": true;
  "purchases.subscriptionsv2.get": false;
  "purchases.subscriptionsv2.revoke": true;
  "purchases.voidedpurchases.list": false;
  "reviews.get": false;
  "reviews.list": false;
  "reviews.reply": true;
  "systemapks.variants.create": true;
  "systemapks.variants.download": false;
  "systemapks.variants.get": false;
  "systemapks.variants.list": false;
  "users.create": true;
  "users.delete": false;
  "users.list": false;
  "users.patch": true;
}

export interface GooglePlayFullApiOperationResponseMap {
  "applications.dataSafety": GooglePlayFullApiSchemaSafetyLabelsUpdateResponse;
  "applications.deviceTierConfigs.create": GooglePlayFullApiSchemaDeviceTierConfig;
  "applications.deviceTierConfigs.get": GooglePlayFullApiSchemaDeviceTierConfig;
  "applications.deviceTierConfigs.list": GooglePlayFullApiSchemaListDeviceTierConfigsResponse;
  "applications.tracks.releases.list": GooglePlayFullApiSchemaListReleaseSummariesResponse;
  "apprecovery.addTargeting": GooglePlayFullApiSchemaAddTargetingResponse;
  "apprecovery.cancel": GooglePlayFullApiSchemaCancelAppRecoveryResponse;
  "apprecovery.create": GooglePlayFullApiSchemaAppRecoveryAction;
  "apprecovery.deploy": GooglePlayFullApiSchemaDeployAppRecoveryResponse;
  "apprecovery.list": GooglePlayFullApiSchemaListAppRecoveriesResponse;
  "edits.apks.addexternallyhosted": GooglePlayFullApiSchemaApksAddExternallyHostedResponse;
  "edits.apks.list": GooglePlayFullApiSchemaApksListResponse;
  "edits.apks.upload": GooglePlayFullApiSchemaApk;
  "edits.bundles.list": GooglePlayFullApiSchemaBundlesListResponse;
  "edits.bundles.upload": GooglePlayFullApiSchemaBundle;
  "edits.commit": GooglePlayFullApiSchemaAppEdit;
  "edits.countryavailability.get": GooglePlayFullApiSchemaTrackCountryAvailability;
  "edits.delete": void;
  "edits.deobfuscationfiles.upload": GooglePlayFullApiSchemaDeobfuscationFilesUploadResponse;
  "edits.details.get": GooglePlayFullApiSchemaAppDetails;
  "edits.details.patch": GooglePlayFullApiSchemaAppDetails;
  "edits.details.update": GooglePlayFullApiSchemaAppDetails;
  "edits.expansionfiles.get": GooglePlayFullApiSchemaExpansionFile;
  "edits.expansionfiles.patch": GooglePlayFullApiSchemaExpansionFile;
  "edits.expansionfiles.update": GooglePlayFullApiSchemaExpansionFile;
  "edits.expansionfiles.upload": GooglePlayFullApiSchemaExpansionFilesUploadResponse;
  "edits.get": GooglePlayFullApiSchemaAppEdit;
  "edits.images.delete": void;
  "edits.images.deleteall": GooglePlayFullApiSchemaImagesDeleteAllResponse;
  "edits.images.list": GooglePlayFullApiSchemaImagesListResponse;
  "edits.images.upload": GooglePlayFullApiSchemaImagesUploadResponse;
  "edits.insert": GooglePlayFullApiSchemaAppEdit;
  "edits.listings.delete": void;
  "edits.listings.deleteall": void;
  "edits.listings.get": GooglePlayFullApiSchemaListing;
  "edits.listings.list": GooglePlayFullApiSchemaListingsListResponse;
  "edits.listings.patch": GooglePlayFullApiSchemaListing;
  "edits.listings.update": GooglePlayFullApiSchemaListing;
  "edits.testers.get": GooglePlayFullApiSchemaTesters;
  "edits.testers.patch": GooglePlayFullApiSchemaTesters;
  "edits.testers.update": GooglePlayFullApiSchemaTesters;
  "edits.tracks.create": GooglePlayFullApiSchemaTrack;
  "edits.tracks.get": GooglePlayFullApiSchemaTrack;
  "edits.tracks.list": GooglePlayFullApiSchemaTracksListResponse;
  "edits.tracks.patch": GooglePlayFullApiSchemaTrack;
  "edits.tracks.update": GooglePlayFullApiSchemaTrack;
  "edits.validate": GooglePlayFullApiSchemaAppEdit;
  "externaltransactions.createexternaltransaction": GooglePlayFullApiSchemaExternalTransaction;
  "externaltransactions.getexternaltransaction": GooglePlayFullApiSchemaExternalTransaction;
  "externaltransactions.refundexternaltransaction": GooglePlayFullApiSchemaExternalTransaction;
  "generatedapks.download": void;
  "generatedapks.list": GooglePlayFullApiSchemaGeneratedApksListResponse;
  "grants.create": GooglePlayFullApiSchemaGrant;
  "grants.delete": void;
  "grants.patch": GooglePlayFullApiSchemaGrant;
  "inappproducts.batchDelete": void;
  "inappproducts.batchGet": GooglePlayFullApiSchemaInappproductsBatchGetResponse;
  "inappproducts.batchUpdate": GooglePlayFullApiSchemaInappproductsBatchUpdateResponse;
  "inappproducts.delete": void;
  "inappproducts.get": GooglePlayFullApiSchemaInAppProduct;
  "inappproducts.insert": GooglePlayFullApiSchemaInAppProduct;
  "inappproducts.list": GooglePlayFullApiSchemaInappproductsListResponse;
  "inappproducts.patch": GooglePlayFullApiSchemaInAppProduct;
  "inappproducts.update": GooglePlayFullApiSchemaInAppProduct;
  "internalappsharingartifacts.uploadapk": GooglePlayFullApiSchemaInternalAppSharingArtifact;
  "internalappsharingartifacts.uploadbundle": GooglePlayFullApiSchemaInternalAppSharingArtifact;
  "monetization.convertRegionPrices": GooglePlayFullApiSchemaConvertRegionPricesResponse;
  "monetization.onetimeproducts.batchDelete": void;
  "monetization.onetimeproducts.batchGet": GooglePlayFullApiSchemaBatchGetOneTimeProductsResponse;
  "monetization.onetimeproducts.batchUpdate": GooglePlayFullApiSchemaBatchUpdateOneTimeProductsResponse;
  "monetization.onetimeproducts.delete": void;
  "monetization.onetimeproducts.get": GooglePlayFullApiSchemaOneTimeProduct;
  "monetization.onetimeproducts.list": GooglePlayFullApiSchemaListOneTimeProductsResponse;
  "monetization.onetimeproducts.patch": GooglePlayFullApiSchemaOneTimeProduct;
  "monetization.onetimeproducts.purchaseOptions.batchDelete": void;
  "monetization.onetimeproducts.purchaseOptions.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdatePurchaseOptionStatesResponse;
  "monetization.onetimeproducts.purchaseOptions.offers.activate": GooglePlayFullApiSchemaOneTimeProductOffer;
  "monetization.onetimeproducts.purchaseOptions.offers.batchDelete": void;
  "monetization.onetimeproducts.purchaseOptions.offers.batchGet": GooglePlayFullApiSchemaBatchGetOneTimeProductOffersResponse;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdate": GooglePlayFullApiSchemaBatchUpdateOneTimeProductOffersResponse;
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdateOneTimeProductOfferStatesResponse;
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": GooglePlayFullApiSchemaOneTimeProductOffer;
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": GooglePlayFullApiSchemaOneTimeProductOffer;
  "monetization.onetimeproducts.purchaseOptions.offers.list": GooglePlayFullApiSchemaListOneTimeProductOffersResponse;
  "monetization.subscriptions.archive": GooglePlayFullApiSchemaSubscription;
  "monetization.subscriptions.basePlans.activate": GooglePlayFullApiSchemaSubscription;
  "monetization.subscriptions.basePlans.batchMigratePrices": GooglePlayFullApiSchemaBatchMigrateBasePlanPricesResponse;
  "monetization.subscriptions.basePlans.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdateBasePlanStatesResponse;
  "monetization.subscriptions.basePlans.deactivate": GooglePlayFullApiSchemaSubscription;
  "monetization.subscriptions.basePlans.delete": void;
  "monetization.subscriptions.basePlans.migratePrices": GooglePlayFullApiSchemaMigrateBasePlanPricesResponse;
  "monetization.subscriptions.basePlans.offers.activate": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.basePlans.offers.batchGet": GooglePlayFullApiSchemaBatchGetSubscriptionOffersResponse;
  "monetization.subscriptions.basePlans.offers.batchUpdate": GooglePlayFullApiSchemaBatchUpdateSubscriptionOffersResponse;
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": GooglePlayFullApiSchemaBatchUpdateSubscriptionOfferStatesResponse;
  "monetization.subscriptions.basePlans.offers.create": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.basePlans.offers.deactivate": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.basePlans.offers.delete": void;
  "monetization.subscriptions.basePlans.offers.get": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.basePlans.offers.list": GooglePlayFullApiSchemaListSubscriptionOffersResponse;
  "monetization.subscriptions.basePlans.offers.patch": GooglePlayFullApiSchemaSubscriptionOffer;
  "monetization.subscriptions.batchGet": GooglePlayFullApiSchemaBatchGetSubscriptionsResponse;
  "monetization.subscriptions.batchUpdate": GooglePlayFullApiSchemaBatchUpdateSubscriptionsResponse;
  "monetization.subscriptions.create": GooglePlayFullApiSchemaSubscription;
  "monetization.subscriptions.delete": void;
  "monetization.subscriptions.get": GooglePlayFullApiSchemaSubscription;
  "monetization.subscriptions.list": GooglePlayFullApiSchemaListSubscriptionsResponse;
  "monetization.subscriptions.patch": GooglePlayFullApiSchemaSubscription;
  "orders.batchget": GooglePlayFullApiSchemaBatchGetOrdersResponse;
  "orders.get": GooglePlayFullApiSchemaOrder;
  "orders.refund": void;
  "purchases.products.acknowledge": void;
  "purchases.products.consume": void;
  "purchases.products.get": GooglePlayFullApiSchemaProductPurchase;
  "purchases.productsv2.getproductpurchasev2": GooglePlayFullApiSchemaProductPurchaseV2;
  "purchases.subscriptions.acknowledge": void;
  "purchases.subscriptions.cancel": void;
  "purchases.subscriptions.defer": GooglePlayFullApiSchemaSubscriptionPurchasesDeferResponse;
  "purchases.subscriptions.get": GooglePlayFullApiSchemaSubscriptionPurchase;
  "purchases.subscriptions.refund": void;
  "purchases.subscriptions.revoke": void;
  "purchases.subscriptionsv2.cancel": GooglePlayFullApiSchemaCancelSubscriptionPurchaseResponse;
  "purchases.subscriptionsv2.defer": GooglePlayFullApiSchemaDeferSubscriptionPurchaseResponse;
  "purchases.subscriptionsv2.get": GooglePlayFullApiSchemaSubscriptionPurchaseV2;
  "purchases.subscriptionsv2.revoke": GooglePlayFullApiSchemaRevokeSubscriptionPurchaseResponse;
  "purchases.voidedpurchases.list": GooglePlayFullApiSchemaVoidedPurchasesListResponse;
  "reviews.get": GooglePlayFullApiSchemaReview;
  "reviews.list": GooglePlayFullApiSchemaReviewsListResponse;
  "reviews.reply": GooglePlayFullApiSchemaReviewsReplyResponse;
  "systemapks.variants.create": GooglePlayFullApiSchemaVariant;
  "systemapks.variants.download": void;
  "systemapks.variants.get": GooglePlayFullApiSchemaVariant;
  "systemapks.variants.list": GooglePlayFullApiSchemaSystemApksListResponse;
  "users.create": GooglePlayFullApiSchemaUser;
  "users.delete": void;
  "users.list": GooglePlayFullApiSchemaListUsersResponse;
  "users.patch": GooglePlayFullApiSchemaUser;
}
