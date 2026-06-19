// Generated provider schema DTOs for AmazonFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type AmazonFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type AmazonFullApiSchemaJsonValue = AmazonFullApiSchemaJsonPrimitive | readonly AmazonFullApiSchemaJsonValue[] | { readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined };

export type AmazonFullApiSchemaInboundOrderCreationData = {
  externalReferenceId?: string;
  originAddress: AmazonFullApiSchemaAddress;
  packagesToInbound: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  preferences?: AmazonFullApiSchemaInboundPreferences;
};

export type AmazonFullApiSchemaInboundOrderReference = {
  orderId: string;
};

export type AmazonFullApiSchemaInboundOrder = {
  createdAt: string;
  destinationDetails?: AmazonFullApiSchemaDestinationDetails;
  externalReferenceId?: string;
  orderId: string;
  orderStatus: AmazonFullApiSchemaInboundStatus;
  originAddress: AmazonFullApiSchemaAddress;
  packagesToInbound: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  preferences?: AmazonFullApiSchemaInboundPreferences;
  updatedAt?: string;
};

export type AmazonFullApiSchemaErrorList = {
  errors: ReadonlyArray<AmazonFullApiSchemaError>;
};

export type AmazonFullApiSchemaInboundShipment = {
  carrierCode?: AmazonFullApiSchemaCarrierCode;
  createdAt?: string;
  destinationAddress: AmazonFullApiSchemaAddress;
  externalReferenceId?: string;
  orderId: string;
  originAddress: AmazonFullApiSchemaAddress;
  receivedQuantity?: ReadonlyArray<AmazonFullApiSchemaInventoryQuantity>;
  shipBy?: string;
  shipmentContainerQuantities: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  shipmentId: string;
  shipmentSkuQuantities?: ReadonlyArray<AmazonFullApiSchemaSkuQuantity>;
  destinationRegion?: string;
  shipmentStatus: AmazonFullApiSchemaInboundShipmentStatus;
  trackingId?: string;
  updatedAt?: string;
  warehouseReferenceId?: string;
};

export type AmazonFullApiSchemaShipmentLabels = {
  labelDownloadURL?: string;
  labelStatus: AmazonFullApiSchemaLabelStatus;
};

export type AmazonFullApiSchemaShipmentLabelPageTypes = {
  labelStatus: AmazonFullApiSchemaLabelStatus;
  pageTypes?: ReadonlyArray<AmazonFullApiSchemaPageType>;
};

export type AmazonFullApiSchemaTransportationDetails = {
  trackingDetails: ReadonlyArray<AmazonFullApiSchemaTrackingDetails>;
};

export type AmazonFullApiSchemaInboundPackages = {
  packagesToInbound: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
};

export type AmazonFullApiSchemaInboundEligibility = {
  ineligibilityReasons?: ReadonlyArray<AmazonFullApiSchemaOrderIneligibilityReason>;
  packagesToInbound: ReadonlyArray<AmazonFullApiSchemaSkuEligibility>;
  previewedAt: string;
  status: AmazonFullApiSchemaInboundEligibilityStatus;
};

export type AmazonFullApiSchemaShipmentListing = {
  nextToken?: string;
  shipments?: ReadonlyArray<AmazonFullApiSchemaInboundShipmentSummary>;
};

export type AmazonFullApiSchemaInventoryListing = {
  inventory: ReadonlyArray<AmazonFullApiSchemaInventorySummary>;
  nextToken?: string;
};

export type AmazonFullApiSchemaOutboundListing = {
  nextToken?: string;
  outboundOrders?: ReadonlyArray<AmazonFullApiSchemaOutboundOrder>;
};

export type AmazonFullApiSchemaOutboundOrderCreationData = {
  orderPreferences?: ReadonlyArray<AmazonFullApiSchemaOrderAttribute>;
  packagesToOutbound?: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  productsToOutbound?: ReadonlyArray<AmazonFullApiSchemaProductQuantity>;
};

export type AmazonFullApiSchemaOutboundOrderReference = {
  orderId: string;
};

export type AmazonFullApiSchemaOutboundOrder = {
  confirmedOn?: string;
  createdAt?: string;
  eligiblePackagesToOutbound?: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  eligibleProductsToOutbound?: ReadonlyArray<AmazonFullApiSchemaProductQuantity>;
  executionErrors?: ReadonlyArray<AmazonFullApiSchemaOutboundExecutionError>;
  orderId: string;
  orderPreferences?: ReadonlyArray<AmazonFullApiSchemaOrderAttribute>;
  orderStatus: AmazonFullApiSchemaOutboundStatus;
  outboundShipments: ReadonlyArray<AmazonFullApiSchemaOutboundShipment>;
  packagesToOutbound?: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  productsToOutbound?: ReadonlyArray<AmazonFullApiSchemaProductQuantity>;
  shippedOutboundPackages?: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  shippedOutboundProducts?: ReadonlyArray<AmazonFullApiSchemaProductQuantity>;
  updatedAt?: string;
};

export type AmazonFullApiSchemaReplenishmentOrderListing = {
  nextToken?: string;
  orders?: ReadonlyArray<AmazonFullApiSchemaReplenishmentOrder>;
};

export type AmazonFullApiSchemaReplenishmentOrderCreationData = {
  preferences?: AmazonFullApiSchemaReplenishmentPreferences;
  products?: ReadonlyArray<AmazonFullApiSchemaDistributionProduct>;
};

export type AmazonFullApiSchemaReplenishmentOrderReference = {
  orderId: string;
};

export type AmazonFullApiSchemaReplenishmentOrder = {
  confirmedOn?: string;
  createdAt?: string;
  distributionIneligibleReasons?: ReadonlyArray<AmazonFullApiSchemaDistributionIneligibleReason>;
  eligibleProducts?: ReadonlyArray<AmazonFullApiSchemaDistributionProduct>;
  orderId: string;
  status: AmazonFullApiSchemaReplenishmentOrderStatus;
  outboundShipments: ReadonlyArray<AmazonFullApiSchemaOutboundShipmentSummary>;
  products?: ReadonlyArray<AmazonFullApiSchemaDistributionProduct>;
  shippedProducts?: ReadonlyArray<AmazonFullApiSchemaDistributionProduct>;
  updatedAt?: string;
};

export type AmazonFullApiSchemaSearchContentDocumentsResponse = (AmazonFullApiSchemaAplusPaginatedResponse & {
  contentMetadataRecords: AmazonFullApiSchemaContentMetadataRecordList;
});

export type AmazonFullApiSchemaPostContentDocumentRequest = {
  contentDocument: AmazonFullApiSchemaContentDocument;
};

export type AmazonFullApiSchemaPostContentDocumentResponse = (AmazonFullApiSchemaAplusResponse & {
  contentReferenceKey: AmazonFullApiSchemaContentReferenceKey;
});

export type AmazonFullApiSchemaGetContentDocumentResponse = (AmazonFullApiSchemaAplusResponse & {
  contentRecord: AmazonFullApiSchemaContentRecord;
});

export type AmazonFullApiSchemaListContentDocumentAsinRelationsResponse = (AmazonFullApiSchemaAplusPaginatedResponse & {
  asinMetadataSet: AmazonFullApiSchemaAsinMetadataSet;
});

export type AmazonFullApiSchemaPostContentDocumentAsinRelationsRequest = {
  asinSet: AmazonFullApiSchemaAsinSet;
};

export type AmazonFullApiSchemaPostContentDocumentAsinRelationsResponse = AmazonFullApiSchemaAplusResponse;

export type AmazonFullApiSchemaValidateContentDocumentAsinRelationsResponse = (AmazonFullApiSchemaAplusResponse & AmazonFullApiSchemaErrorList12);

export type AmazonFullApiSchemaSearchContentPublishRecordsResponse = (AmazonFullApiSchemaAplusPaginatedResponse & {
  publishRecordList: AmazonFullApiSchemaPublishRecordList;
});

export type AmazonFullApiSchemaPostContentDocumentApprovalSubmissionResponse = AmazonFullApiSchemaAplusResponse;

export type AmazonFullApiSchemaPostContentDocumentSuspendSubmissionResponse = AmazonFullApiSchemaAplusResponse;

export type AmazonFullApiSchemaCreateNotificationRequest = {
  templateId: string;
  notificationParameters: AmazonFullApiSchemaNotificationParameters;
  marketplaceId?: string;
};

export type AmazonFullApiSchemaCreateNotificationResponse = {
  notificationId?: string;
};

export type AmazonFullApiSchemaDeleteNotificationsRequest = {
  templateId: string;
  deletionReason: "INCORRECT_CONTENT" | "INCORRECT_RECIPIENT";
};

export type AmazonFullApiSchemaErrorList2 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError2>;
};

export type AmazonFullApiSchemaRecordActionFeedbackRequest = {
  feedbackActionCode: "SELLER_ACTION_COMPLETED";
};

export type AmazonFullApiSchemaErrorList3 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError3>;
};

export type AmazonFullApiSchemaListCatalogCategoriesResponse = {
  payload?: AmazonFullApiSchemaListOfCategories;
  errors?: AmazonFullApiSchemaErrorList13;
};

export type AmazonFullApiSchemaItemSearchResults = {
  numberOfResults: number;
  pagination: AmazonFullApiSchemaPagination;
  refinements: AmazonFullApiSchemaRefinements;
  items: ReadonlyArray<AmazonFullApiSchemaItem>;
};

export type AmazonFullApiSchemaItem = {
  asin: AmazonFullApiSchemaItemAsin;
  attributes?: AmazonFullApiSchemaItemAttributes;
  identifiers?: AmazonFullApiSchemaItemIdentifiers;
  images?: AmazonFullApiSchemaItemImages;
  productTypes?: AmazonFullApiSchemaItemProductTypes;
  salesRanks?: AmazonFullApiSchemaItemSalesRanks;
  summaries?: AmazonFullApiSchemaItemSummaries;
  variations?: AmazonFullApiSchemaItemVariations;
  vendorDetails?: AmazonFullApiSchemaItemVendorDetails;
};

export type AmazonFullApiSchemaItemSearchResults2 = {
  numberOfResults: number;
  pagination?: AmazonFullApiSchemaPagination2;
  refinements?: AmazonFullApiSchemaRefinements2;
  items: ReadonlyArray<AmazonFullApiSchemaItem2>;
};

export type AmazonFullApiSchemaItem2 = {
  asin: AmazonFullApiSchemaItemAsin2;
  attributes?: AmazonFullApiSchemaItemAttributes2;
  classifications?: AmazonFullApiSchemaItemBrowseClassifications;
  dimensions?: AmazonFullApiSchemaItemDimensions;
  identifiers?: AmazonFullApiSchemaItemIdentifiers2;
  images?: AmazonFullApiSchemaItemImages2;
  productTypes?: AmazonFullApiSchemaItemProductTypes2;
  relationships?: AmazonFullApiSchemaItemRelationships;
  salesRanks?: AmazonFullApiSchemaItemSalesRanks2;
  summaries?: AmazonFullApiSchemaItemSummaries2;
  vendorDetails?: AmazonFullApiSchemaItemVendorDetails2;
};

export type AmazonFullApiSchemaItemReviewTopicsResponse = {
  asin: string;
  itemName: string;
  marketplaceId: string;
  countryCode: string;
  dateRange: AmazonFullApiSchemaDateRange;
  topics: AmazonFullApiSchemaItemReviewTopics;
};

export type AmazonFullApiSchemaBrowseNodeResponse = {
  browseNodeId: string;
  displayName: string;
};

export type AmazonFullApiSchemaBrowseNodeReviewTopicsResponse = {
  browseNodeId: string;
  displayName: string;
  marketplaceId: string;
  countryCode: string;
  dateRange: AmazonFullApiSchemaDateRange;
  topics: AmazonFullApiSchemaBrowseNodeReviewTopics;
};

export type AmazonFullApiSchemaItemReviewTrendsResponse = {
  asin: string;
  itemName: string;
  marketplaceId: string;
  countryCode: string;
  dateRange: AmazonFullApiSchemaDateRange;
  reviewTrends: AmazonFullApiSchemaItemReviewTrends;
};

export type AmazonFullApiSchemaBrowseNodeReviewTrendsResponse = {
  browseNodeId: string;
  displayName: string;
  marketplaceId: string;
  countryCode: string;
  dateRange: AmazonFullApiSchemaDateRange;
  reviewTrends: AmazonFullApiSchemaBrowseNodeReviewTrends;
};

export type AmazonFullApiSchemaBrowseNodeReturnTopicsResponse = {
  browseNodeId: string;
  displayName: string;
  marketplaceId: string;
  countryCode: string;
  dateRange: AmazonFullApiSchemaDateRange;
  topics: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReturnTopics>;
};

export type AmazonFullApiSchemaBrowseNodeReturnTrendsResponse = {
  browseNodeId: string;
  displayName: string;
  marketplaceId: string;
  countryCode: string;
  dateRange: AmazonFullApiSchemaDateRange;
  returnTrends: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReturnTrend>;
};

export type AmazonFullApiSchemaGetQueriesResponse = {
  queries: AmazonFullApiSchemaQueryList;
  pagination?: {
  nextToken?: string;
};
};

export type AmazonFullApiSchemaCreateQuerySpecification = {
  query: string;
  paginationToken?: string;
};

export type AmazonFullApiSchemaCreateQueryResponse = {
  queryId: string;
};

export type AmazonFullApiSchemaErrorList4 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError4>;
};

export type AmazonFullApiSchemaQuery = {
  queryId: string;
  query: string;
  createdTime: string;
  processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
  processingStartTime?: string;
  processingEndTime?: string;
  dataDocumentId?: string;
  errorDocumentId?: string;
  pagination?: {
  nextToken?: string;
};
};

export type AmazonFullApiSchemaGetDocumentResponse = {
  documentId: string;
  documentUrl: string;
};

export type AmazonFullApiSchemaSubmitInvoiceRequest = {
  invoiceContent: AmazonFullApiSchemaBlob;
  marketplaceId: string;
  contentMD5Value: string;
  invoiceType: AmazonFullApiSchemaInvoiceType;
  programType: AmazonFullApiSchemaProgramType;
};

export type AmazonFullApiSchemaSubmitInvoiceResponse = {
  errors?: AmazonFullApiSchemaErrorList14;
};

export type AmazonFullApiSchemaGetInvoiceStatusResponse = {
  amazonOrderId?: string;
  amazonShipmentId?: string;
  invoiceStatus?: AmazonFullApiSchemaShipmentInvoiceStatus;
  errors?: AmazonFullApiSchemaErrorList14;
};

export type AmazonFullApiSchemaListHandoverSlotsRequest = {
  marketplaceId: AmazonFullApiSchemaString;
  amazonOrderId: AmazonFullApiSchemaAmazonOrderId;
  packageDimensions: AmazonFullApiSchemaDimensions;
  packageWeight: AmazonFullApiSchemaWeight;
};

export type AmazonFullApiSchemaListHandoverSlotsResponse = {
  amazonOrderId: AmazonFullApiSchemaAmazonOrderId;
  timeSlots: AmazonFullApiSchemaTimeSlots;
};

export type AmazonFullApiSchemaPackage = {
  scheduledPackageId: AmazonFullApiSchemaScheduledPackageId;
  packageDimensions: AmazonFullApiSchemaDimensions;
  packageWeight: AmazonFullApiSchemaWeight;
  packageItems?: AmazonFullApiSchemaItems;
  packageTimeSlot: AmazonFullApiSchemaTimeSlot;
  packageIdentifier?: AmazonFullApiSchemaPackageIdentifier;
  invoice?: AmazonFullApiSchemaInvoiceData;
  packageStatus?: AmazonFullApiSchemaPackageStatus;
  trackingDetails?: AmazonFullApiSchemaTrackingDetails2;
};

export type AmazonFullApiSchemaCreateScheduledPackageRequest = {
  amazonOrderId: AmazonFullApiSchemaAmazonOrderId;
  marketplaceId: AmazonFullApiSchemaString;
  packageDetails: AmazonFullApiSchemaPackageDetails;
};

export type AmazonFullApiSchemaUpdateScheduledPackagesRequest = {
  marketplaceId: AmazonFullApiSchemaString;
  updatePackageDetailsList: AmazonFullApiSchemaUpdatePackageDetailsList;
};

export type AmazonFullApiSchemaPackages = {
  packages: ReadonlyArray<AmazonFullApiSchemaPackage>;
};

export type AmazonFullApiSchemaCreateScheduledPackagesRequest = {
  marketplaceId: AmazonFullApiSchemaString;
  orderScheduleDetailsList: ReadonlyArray<AmazonFullApiSchemaOrderScheduleDetails>;
  labelFormat: AmazonFullApiSchemaLabelFormat;
};

export type AmazonFullApiSchemaCreateScheduledPackagesResponse = {
  scheduledPackages?: ReadonlyArray<AmazonFullApiSchemaPackage>;
  rejectedOrders?: ReadonlyArray<AmazonFullApiSchemaRejectedOrder>;
  printableDocumentsUrl?: AmazonFullApiSchemaURL;
};

export type AmazonFullApiSchemaBatchInventoryRequest = {
  requests?: AmazonFullApiSchemaBatchInventoryRequestList;
};

export type AmazonFullApiSchemaBatchInventoryResponse = {
  responses?: AmazonFullApiSchemaBatchInventoryResponseList;
};

export type AmazonFullApiSchemaReturnsResponse = {
  returns?: ReadonlyArray<AmazonFullApiSchemaReturn>;
  nextToken?: string;
};

export type AmazonFullApiSchemaReturn = {
  id: string;
  returnLocationId?: string;
  merchantSku?: string;
  returnType: "CUSTOMER" | "REJECT";
  returnSubType?: "NORMAL" | "REPLACEMENT" | "EXCHANGE";
  numberOfUnits?: number;
  status: "CREATED" | "CARRIER_NOTIFIED_TO_PICK_UP_FROM_CUSTOMER" | "CARRIER_OUT_FOR_PICK_UP_FROM_CUSTOMER" | "CUSTOMER_CANCELLED_PICK_UP" | "CUSTOMER_RESCHEDULED_PICK_UP" | "PICKED_FROM_CUSTOMER" | "IN_TRANSIT" | "OUT_FOR_DELIVERY" | "DELIVERED" | "REPLANNED" | "CUSTOMER_DROPPED_OFF" | "PARTIALLY_PROCESSED" | "PROCESSED" | "REJECTED" | "CANCELLED";
  fulfillmentLocationId: string;
  creationDateTime?: AmazonFullApiSchemaDateTime;
  lastUpdatedDateTime: AmazonFullApiSchemaDateTime;
  returnMetadata: AmazonFullApiSchemaReturnMetadata;
  returnShippingInfo: AmazonFullApiSchemaReturnShippingInfo;
  marketplaceChannelDetails: AmazonFullApiSchemaMarketplaceChannelDetails;
  otpDetails?: AmazonFullApiSchemaOtpDetails;
  packageDeliveryMode?: "WITH_OTP" | "WITHOUT_OTP";
  replanningDetails?: AmazonFullApiSchemaReplanningDetails;
};

export type AmazonFullApiSchemaShipmentsResponse = {
  shipments?: ReadonlyArray<AmazonFullApiSchemaShipment>;
  pagination?: AmazonFullApiSchemaPagination3;
};

export type AmazonFullApiSchemaShipment = {
  id: string;
  locationId: string;
  marketplaceAttributes: AmazonFullApiSchemaMarketplaceAttributes;
  shipmentInfo: AmazonFullApiSchemaShipmentInfo;
  invoiceInfo?: AmazonFullApiSchemaInvoiceInfo;
  partyInfoList?: AmazonFullApiSchemaPartyIdentificationInfoList;
  shipmentRequirements: AmazonFullApiSchemaShipmentRequirements;
  charges: AmazonFullApiSchemaCharges;
  status: "CREATED" | "ACCEPTED" | "CONFIRMED" | "PACKAGE_CREATED" | "PICKUP_SLOT_RETRIEVED" | "INVOICE_GENERATED" | "SHIPLABEL_GENERATED" | "CANCELLED" | "SHIPPED" | "DELIVERED";
  subStatus?: "PENDING_SCHEDULE" | "PENDING_PICKUP" | "PENDING_DROP_OFF" | "LABEL_CANCELED" | "PICKED_UP" | "DROPPED_OFF" | "AT_ORIGIN_FC" | "AT_DESTINATION_FC" | "DELIVERED" | "NOT_DELIVERED" | "UNDELIVERABLE" | "LOST" | "OUT_FOR_DELIVERY" | "DAMAGED";
  reason?: string;
  lineItems: ReadonlyArray<AmazonFullApiSchemaShipmentLineItem>;
  shippingInfo: AmazonFullApiSchemaShippingInfo;
  packages?: ReadonlyArray<AmazonFullApiSchemaPackage2>;
  creationDateTime: AmazonFullApiSchemaDateTime2;
  lastUpdatedDateTime: AmazonFullApiSchemaDateTime2;
  earliestPackDateTime?: AmazonFullApiSchemaDateTime2;
};

export type AmazonFullApiSchemaShipmentAcknowledgementRequest = {
  referenceId?: string;
  lineItems: ReadonlyArray<AmazonFullApiSchemaLineItemWithReason>;
};

export type AmazonFullApiSchemaErrorList5 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError5>;
};

export type AmazonFullApiSchemaPackages2 = {
  packages: ReadonlyArray<AmazonFullApiSchemaPackage2>;
};

export type AmazonFullApiSchemaPackage2 = {
  id: string;
  dimensions: AmazonFullApiSchemaPackageDimensions;
  weight: AmazonFullApiSchemaWeight2;
  hazmatLabels?: ReadonlyArray<string>;
  packageLineItems: AmazonFullApiSchemaPackageLineItems;
  status?: "CREATED" | "PICKUP_SLOT_RETRIEVED" | "INVOICE_GENERATED" | "SHIPLABEL_GENERATED" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  packageHandlingRequirements?: "NORMAL" | "FRAGILE";
};

export type AmazonFullApiSchemaPackageDeliveryStatus = {
  status?: AmazonFullApiSchemaPackageStatus2;
  subStatus?: AmazonFullApiSchemaPackageSubStatus;
  reason?: string;
};

export type AmazonFullApiSchemaShippingOptionsResponse = {
  shippingOptions?: ReadonlyArray<AmazonFullApiSchemaShippingOptions>;
  recommendedShippingOption?: AmazonFullApiSchemaShippingOptions;
};

export type AmazonFullApiSchemaInvoiceResponse = {
  document: AmazonFullApiSchemaDocument;
};

export type AmazonFullApiSchemaShipLabelsInput = {
  packageIds: ReadonlyArray<string>;
  courierSupportedAttributes?: AmazonFullApiSchemaCourierSupportedAttributes;
};

export type AmazonFullApiSchemaShipLabelsResponse = {
  packageShipLabelList: AmazonFullApiSchemaPackageShipLabelList;
};

export type AmazonFullApiSchemaGetItemEligibilityPreviewResponse = {
  payload?: AmazonFullApiSchemaItemEligibilityPreview;
  errors?: AmazonFullApiSchemaErrorList15;
};

export type AmazonFullApiSchemaGetInventorySummariesResponse = {
  payload?: AmazonFullApiSchemaGetInventorySummariesResult;
  pagination?: AmazonFullApiSchemaPagination4;
  errors?: AmazonFullApiSchemaErrorList16;
};

export type AmazonFullApiSchemaCreateInventoryItemRequest = {
  sellerSku: string;
  marketplaceId: string;
  productName: string;
};

export type AmazonFullApiSchemaCreateInventoryItemResponse = {
  errors?: AmazonFullApiSchemaErrorList16;
};

export type AmazonFullApiSchemaDeleteInventoryItemResponse = {
  errors?: AmazonFullApiSchemaErrorList16;
};

export type AmazonFullApiSchemaAddInventoryRequest = {
  inventoryItems?: AmazonFullApiSchemaInventoryItems;
};

export type AmazonFullApiSchemaAddInventoryResponse = {
  errors?: AmazonFullApiSchemaErrorList16;
};

export type AmazonFullApiSchemaGetFeedsResponse = {
  feeds: AmazonFullApiSchemaFeedList;
  nextToken?: string;
};

export type AmazonFullApiSchemaCreateFeedSpecification = {
  feedType: string;
  marketplaceIds: ReadonlyArray<string>;
  inputFeedDocumentId: string;
  feedOptions?: AmazonFullApiSchemaFeedOptions;
};

export type AmazonFullApiSchemaCreateFeedResponse = {
  feedId: string;
};

export type AmazonFullApiSchemaErrorList6 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError6>;
};

export type AmazonFullApiSchemaFeed = {
  feedId: string;
  feedType: string;
  marketplaceIds?: ReadonlyArray<string>;
  createdTime: string;
  processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
  processingStartTime?: string;
  processingEndTime?: string;
  resultFeedDocumentId?: string;
};

export type AmazonFullApiSchemaCreateFeedDocumentSpecification = {
  contentType: string;
};

export type AmazonFullApiSchemaCreateFeedDocumentResponse = {
  feedDocumentId: string;
  url: string;
};

export type AmazonFullApiSchemaFeedDocument = {
  feedDocumentId: string;
  url: string;
  compressionAlgorithm?: "GZIP";
};

export type AmazonFullApiSchemaListFinancialEventGroupsResponse = {
  payload?: AmazonFullApiSchemaListFinancialEventGroupsPayload;
  errors?: AmazonFullApiSchemaErrorList17;
};

export type AmazonFullApiSchemaListFinancialEventsResponse = {
  payload?: AmazonFullApiSchemaListFinancialEventsPayload;
  errors?: AmazonFullApiSchemaErrorList17;
};

export type AmazonFullApiSchemaListTransactionsResponse = {
  payload?: AmazonFullApiSchemaTransactionsPayload;
};

export type AmazonFullApiSchemaInitiatePayoutRequest = {
  marketplaceId: AmazonFullApiSchemaMarketplaceId;
  accountType: string;
};

export type AmazonFullApiSchemaInitiatePayoutResponse = {
  payoutReferenceId: string;
};

export type AmazonFullApiSchemaGetPaymentMethodsResponse = {
  paymentMethods?: AmazonFullApiSchemaPaymentMethodList;
};

export type AmazonFullApiSchemaGetPrepInstructionsResponse = {
  payload?: AmazonFullApiSchemaGetPrepInstructionsResult;
  errors?: AmazonFullApiSchemaErrorList18;
};

export type AmazonFullApiSchemaGetLabelsResponse = {
  payload?: AmazonFullApiSchemaLabelDownloadURL;
  errors?: AmazonFullApiSchemaErrorList18;
};

export type AmazonFullApiSchemaGetBillOfLadingResponse = {
  payload?: AmazonFullApiSchemaBillOfLadingDownloadURL;
  errors?: AmazonFullApiSchemaErrorList18;
};

export type AmazonFullApiSchemaGetShipmentsResponse = {
  payload?: AmazonFullApiSchemaGetShipmentsResult;
  errors?: AmazonFullApiSchemaErrorList18;
};

export type AmazonFullApiSchemaGetShipmentItemsResponse = {
  payload?: AmazonFullApiSchemaGetShipmentItemsResult;
  errors?: AmazonFullApiSchemaErrorList18;
};

export type AmazonFullApiSchemaListInboundPlansResponse = {
  inboundPlans?: ReadonlyArray<AmazonFullApiSchemaInboundPlanSummary>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaCreateInboundPlanRequest = {
  destinationMarketplaces: ReadonlyArray<string>;
  items: ReadonlyArray<AmazonFullApiSchemaItemInput>;
  name?: string;
  sourceAddress: AmazonFullApiSchemaAddressInput;
};

export type AmazonFullApiSchemaCreateInboundPlanResponse = {
  inboundPlanId: string;
  operationId: string;
};

export type AmazonFullApiSchemaInboundPlan = {
  createdAt: string;
  inboundPlanId: string;
  lastUpdatedAt: string;
  marketplaceIds: ReadonlyArray<string>;
  name: string;
  packingOptions?: ReadonlyArray<AmazonFullApiSchemaPackingOptionSummary>;
  placementOptions?: ReadonlyArray<AmazonFullApiSchemaPlacementOptionSummary>;
  shipments?: ReadonlyArray<AmazonFullApiSchemaShipmentSummary>;
  sourceAddress: AmazonFullApiSchemaAddress2;
  status: string;
};

export type AmazonFullApiSchemaListInboundPlanBoxesResponse = {
  boxes: ReadonlyArray<AmazonFullApiSchemaBox>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaCancelInboundPlanResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaListInboundPlanItemsResponse = {
  items: ReadonlyArray<AmazonFullApiSchemaItem4>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaUpdateInboundPlanNameRequest = {
  name: string;
};

export type AmazonFullApiSchemaErrorList7 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError7>;
};

export type AmazonFullApiSchemaListPackingGroupBoxesResponse = {
  boxes: ReadonlyArray<AmazonFullApiSchemaBox>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaListPackingGroupItemsResponse = {
  items: ReadonlyArray<AmazonFullApiSchemaItem4>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaSetPackingInformationRequest = {
  packageGroupings: ReadonlyArray<AmazonFullApiSchemaPackageGroupingInput>;
};

export type AmazonFullApiSchemaSetPackingInformationResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaListPackingOptionsResponse = {
  packingOptions: ReadonlyArray<AmazonFullApiSchemaPackingOption>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaGeneratePackingOptionsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaConfirmPackingOptionResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaListInboundPlanPalletsResponse = {
  pagination?: AmazonFullApiSchemaPagination5;
  pallets: ReadonlyArray<AmazonFullApiSchemaPallet>;
};

export type AmazonFullApiSchemaListPlacementOptionsResponse = {
  pagination?: AmazonFullApiSchemaPagination5;
  placementOptions: ReadonlyArray<AmazonFullApiSchemaPlacementOption>;
};

export type AmazonFullApiSchemaGeneratePlacementOptionsRequest = {
  customPlacement?: ReadonlyArray<AmazonFullApiSchemaCustomPlacementInput>;
};

export type AmazonFullApiSchemaGeneratePlacementOptionsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaConfirmPlacementOptionResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaShipment2 = {
  amazonReferenceId?: string;
  contactInformation?: AmazonFullApiSchemaContactInformation;
  dates?: AmazonFullApiSchemaDates;
  destination: AmazonFullApiSchemaShipmentDestination;
  freightInformation?: AmazonFullApiSchemaFreightInformation;
  name?: string;
  placementOptionId: string;
  selectedDeliveryWindow?: AmazonFullApiSchemaSelectedDeliveryWindow;
  selectedTransportationOptionId?: string;
  selfShipAppointmentDetails?: ReadonlyArray<AmazonFullApiSchemaSelfShipAppointmentDetails>;
  shipmentConfirmationId?: string;
  shipmentId: string;
  source: AmazonFullApiSchemaShipmentSource;
  status?: string;
  trackingDetails?: AmazonFullApiSchemaTrackingDetails3;
};

export type AmazonFullApiSchemaListShipmentBoxesResponse = {
  boxes: ReadonlyArray<AmazonFullApiSchemaBox>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaListShipmentContentUpdatePreviewsResponse = {
  contentUpdatePreviews: ReadonlyArray<AmazonFullApiSchemaContentUpdatePreview>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaGenerateShipmentContentUpdatePreviewsRequest = {
  boxes: ReadonlyArray<AmazonFullApiSchemaBoxUpdateInput>;
  items: ReadonlyArray<AmazonFullApiSchemaItemInput>;
};

export type AmazonFullApiSchemaGenerateShipmentContentUpdatePreviewsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaContentUpdatePreview = {
  contentUpdatePreviewId: string;
  expiration: string;
  requestedUpdates: AmazonFullApiSchemaRequestedUpdates;
  transportationOption: AmazonFullApiSchemaTransportationOption;
};

export type AmazonFullApiSchemaConfirmShipmentContentUpdatePreviewResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaGetDeliveryChallanDocumentResponse = {
  documentDownload: AmazonFullApiSchemaDocumentDownload;
};

export type AmazonFullApiSchemaListDeliveryWindowOptionsResponse = {
  deliveryWindowOptions: ReadonlyArray<AmazonFullApiSchemaDeliveryWindowOption>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaGenerateDeliveryWindowOptionsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaConfirmDeliveryWindowOptionsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaListShipmentItemsResponse = {
  items: ReadonlyArray<AmazonFullApiSchemaItem4>;
  pagination?: AmazonFullApiSchemaPagination5;
};

export type AmazonFullApiSchemaUpdateShipmentNameRequest = {
  name: string;
};

export type AmazonFullApiSchemaListShipmentPalletsResponse = {
  pagination?: AmazonFullApiSchemaPagination5;
  pallets: ReadonlyArray<AmazonFullApiSchemaPallet>;
};

export type AmazonFullApiSchemaCancelSelfShipAppointmentRequest = {
  reasonComment?: AmazonFullApiSchemaReasonComment;
};

export type AmazonFullApiSchemaCancelSelfShipAppointmentResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaGetSelfShipAppointmentSlotsResponse = {
  pagination?: AmazonFullApiSchemaPagination5;
  selfShipAppointmentSlotsAvailability: AmazonFullApiSchemaSelfShipAppointmentSlotsAvailability;
};

export type AmazonFullApiSchemaGenerateSelfShipAppointmentSlotsRequest = {
  desiredEndDate?: string;
  desiredStartDate?: string;
};

export type AmazonFullApiSchemaGenerateSelfShipAppointmentSlotsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaScheduleSelfShipAppointmentRequest = {
  reasonComment?: AmazonFullApiSchemaReasonComment;
};

export type AmazonFullApiSchemaScheduleSelfShipAppointmentResponse = {
  selfShipAppointmentDetails: AmazonFullApiSchemaSelfShipAppointmentDetails;
};

export type AmazonFullApiSchemaUpdateShipmentSourceAddressRequest = {
  address: AmazonFullApiSchemaAddressInput;
};

export type AmazonFullApiSchemaUpdateShipmentSourceAddressResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaUpdateShipmentTrackingDetailsRequest = {
  trackingDetails: AmazonFullApiSchemaTrackingDetailsInput;
};

export type AmazonFullApiSchemaUpdateShipmentTrackingDetailsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaListTransportationOptionsResponse = {
  pagination?: AmazonFullApiSchemaPagination5;
  transportationOptions: ReadonlyArray<AmazonFullApiSchemaTransportationOption>;
};

export type AmazonFullApiSchemaGenerateTransportationOptionsRequest = {
  placementOptionId: string;
  shipmentTransportationConfigurations: ReadonlyArray<AmazonFullApiSchemaShipmentTransportationConfiguration>;
};

export type AmazonFullApiSchemaGenerateTransportationOptionsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaConfirmTransportationOptionsRequest = {
  transportationSelections: ReadonlyArray<AmazonFullApiSchemaTransportationSelection>;
};

export type AmazonFullApiSchemaConfirmTransportationOptionsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaListItemComplianceDetailsResponse = {
  complianceDetails?: ReadonlyArray<AmazonFullApiSchemaComplianceDetail>;
};

export type AmazonFullApiSchemaUpdateItemComplianceDetailsRequest = {
  msku: string;
  taxDetails: AmazonFullApiSchemaTaxDetails;
};

export type AmazonFullApiSchemaUpdateItemComplianceDetailsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaCreateMarketplaceItemLabelsRequest = {
  height?: number;
  labelType: AmazonFullApiSchemaLabelPrintType;
  localeCode?: string;
  marketplaceId: string;
  mskuQuantities: ReadonlyArray<AmazonFullApiSchemaMskuQuantity>;
  pageType?: AmazonFullApiSchemaItemLabelPageType;
  width?: number;
};

export type AmazonFullApiSchemaCreateMarketplaceItemLabelsResponse = {
  documentDownloads: ReadonlyArray<AmazonFullApiSchemaDocumentDownload>;
};

export type AmazonFullApiSchemaListPrepDetailsResponse = {
  mskuPrepDetails: ReadonlyArray<AmazonFullApiSchemaMskuPrepDetail>;
};

export type AmazonFullApiSchemaSetPrepDetailsRequest = {
  marketplaceId: string;
  mskuPrepDetails: ReadonlyArray<AmazonFullApiSchemaMskuPrepDetailInput>;
};

export type AmazonFullApiSchemaSetPrepDetailsResponse = {
  operationId: string;
};

export type AmazonFullApiSchemaInboundOperationStatus = {
  operation: string;
  operationId: string;
  operationProblems: ReadonlyArray<AmazonFullApiSchemaOperationProblem>;
  operationStatus: AmazonFullApiSchemaOperationStatus;
};

export type AmazonFullApiSchemaGetFulfillmentPreviewRequest = {
  marketplaceId?: string;
  address: AmazonFullApiSchemaAddress3;
  items: AmazonFullApiSchemaGetFulfillmentPreviewItemList;
  shippingSpeedCategories?: AmazonFullApiSchemaShippingSpeedCategoryList;
  includeCODFulfillmentPreview?: boolean;
  includeDeliveryWindows?: boolean;
  featureConstraints?: ReadonlyArray<AmazonFullApiSchemaFeatureSettings>;
};

export type AmazonFullApiSchemaGetFulfillmentPreviewResponse = {
  payload?: AmazonFullApiSchemaGetFulfillmentPreviewResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetDeliveryOffersRequest = {
  product: AmazonFullApiSchemaGetDeliveryOffersProduct;
  terms: AmazonFullApiSchemaGetDeliveryOffersTerms;
};

export type AmazonFullApiSchemaGetDeliveryOffersResponse = {
  payload?: AmazonFullApiSchemaGetDeliveryOffersResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaListAllFulfillmentOrdersResponse = {
  payload?: AmazonFullApiSchemaListAllFulfillmentOrdersResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaCreateFulfillmentOrderRequest = {
  marketplaceId?: string;
  sellerFulfillmentOrderId: string;
  displayableOrderId: string;
  displayableOrderDate: AmazonFullApiSchemaTimestamp;
  displayableOrderComment: string;
  shippingSpeedCategory: AmazonFullApiSchemaShippingSpeedCategory;
  deliveryWindow?: AmazonFullApiSchemaDeliveryWindow;
  destinationAddress: AmazonFullApiSchemaAddress3;
  deliveryPreferences?: AmazonFullApiSchemaDeliveryPreferences;
  fulfillmentAction?: AmazonFullApiSchemaFulfillmentAction;
  fulfillmentPolicy?: AmazonFullApiSchemaFulfillmentPolicy;
  codSettings?: AmazonFullApiSchemaCODSettings;
  shipFromCountryCode?: string;
  notificationEmails?: AmazonFullApiSchemaNotificationEmailList;
  featureConstraints?: ReadonlyArray<AmazonFullApiSchemaFeatureSettings>;
  items: AmazonFullApiSchemaCreateFulfillmentOrderItemList;
  paymentInformation?: AmazonFullApiSchemaPaymentInformationList;
};

export type AmazonFullApiSchemaCreateFulfillmentOrderResponse = {
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetPackageTrackingDetailsResponse = {
  payload?: AmazonFullApiSchemaPackageTrackingDetails;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaListReturnReasonCodesResponse = {
  payload?: AmazonFullApiSchemaListReturnReasonCodesResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaCreateFulfillmentReturnRequest = {
  items: AmazonFullApiSchemaCreateReturnItemList;
};

export type AmazonFullApiSchemaCreateFulfillmentReturnResponse = {
  payload?: AmazonFullApiSchemaCreateFulfillmentReturnResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetFulfillmentOrderResponse = {
  payload?: AmazonFullApiSchemaGetFulfillmentOrderResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaUpdateFulfillmentOrderRequest = {
  marketplaceId?: string;
  displayableOrderId?: string;
  displayableOrderDate?: AmazonFullApiSchemaTimestamp;
  displayableOrderComment?: string;
  shippingSpeedCategory?: AmazonFullApiSchemaShippingSpeedCategory;
  destinationAddress?: AmazonFullApiSchemaAddress3;
  fulfillmentAction?: AmazonFullApiSchemaFulfillmentAction;
  fulfillmentPolicy?: AmazonFullApiSchemaFulfillmentPolicy;
  shipFromCountryCode?: string;
  notificationEmails?: AmazonFullApiSchemaNotificationEmailList;
  featureConstraints?: ReadonlyArray<AmazonFullApiSchemaFeatureSettings>;
  items?: AmazonFullApiSchemaUpdateFulfillmentOrderItemList;
};

export type AmazonFullApiSchemaUpdateFulfillmentOrderResponse = {
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaCancelFulfillmentOrderResponse = {
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaSubmitFulfillmentOrderStatusUpdateRequest = {
  fulfillmentOrderStatus?: AmazonFullApiSchemaFulfillmentOrderStatus;
};

export type AmazonFullApiSchemaSubmitFulfillmentOrderStatusUpdateResponse = {
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetFeaturesResponse = {
  payload?: AmazonFullApiSchemaGetFeaturesResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetFeatureInventoryResponse = {
  payload?: AmazonFullApiSchemaGetFeatureInventoryResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetFeatureSkuResponse = {
  payload?: AmazonFullApiSchemaGetFeatureSkuResult;
  errors?: AmazonFullApiSchemaErrorList19;
};

export type AmazonFullApiSchemaGetInvoicesAttributesResponse = {
  invoicesAttributes?: AmazonFullApiSchemaInvoicesAttributes;
};

export type AmazonFullApiSchemaGetInvoicesDocumentResponse = {
  invoicesDocument?: AmazonFullApiSchemaInvoicesDocument;
};

export type AmazonFullApiSchemaExportInvoicesRequest = {
  dateEnd?: string;
  dateStart?: string;
  externalInvoiceId?: string;
  fileFormat?: AmazonFullApiSchemaFileFormat;
  invoiceType?: string;
  marketplaceId: string;
  series?: string;
  statuses?: ReadonlyArray<string>;
  transactionIdentifier?: AmazonFullApiSchemaTransactionIdentifier;
  transactionType?: string;
};

export type AmazonFullApiSchemaExportInvoicesResponse = {
  exportId?: string;
};

export type AmazonFullApiSchemaGetInvoicesExportsResponse = {
  exports?: ReadonlyArray<AmazonFullApiSchemaExport>;
  nextToken?: string;
};

export type AmazonFullApiSchemaGetInvoicesExportResponse = {
  export?: AmazonFullApiSchemaExport;
};

export type AmazonFullApiSchemaGovernmentInvoiceRequest = {
  contexts?: ReadonlyArray<AmazonFullApiSchemaCarrierDetailsContext>;
  inboundPlanId?: string;
  invoiceType: string;
  marketplaceId: string;
  shipmentId: string;
  transactionType: string;
};

export type AmazonFullApiSchemaErrorList8 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError8>;
};

export type AmazonFullApiSchemaGovernmentInvoiceStatusResponse = {
  invoiceErrors?: ReadonlyArray<AmazonFullApiSchemaInvoiceError>;
  invoiceExternalDocumentId?: string;
  status?: AmazonFullApiSchemaGovernmentInvoiceCreationStatus;
};

export type AmazonFullApiSchemaGovtInvoiceDocumentResponse = {
  invoiceDocument?: AmazonFullApiSchemaInvoiceDocument;
};

export type AmazonFullApiSchemaGetInvoicesResponse = {
  invoices?: ReadonlyArray<AmazonFullApiSchemaInvoice>;
  nextToken?: string;
};

export type AmazonFullApiSchemaGetInvoiceResponse = {
  invoice?: AmazonFullApiSchemaInvoice;
};

export type AmazonFullApiSchemaListingsItemSubmissionResponse = {
  sku: string;
  status: "ACCEPTED" | "INVALID";
  submissionId: string;
  issues?: ReadonlyArray<AmazonFullApiSchemaIssue>;
};

export type AmazonFullApiSchemaListingsItemPatchRequest = {
  productType: string;
  patches: ReadonlyArray<AmazonFullApiSchemaPatchOperation>;
};

export type AmazonFullApiSchemaListingsItemPutRequest = {
  productType: string;
  requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  attributes: {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};
};

export type AmazonFullApiSchemaListingsItemSubmissionResponse2 = {
  sku: string;
  status: "ACCEPTED" | "INVALID" | "VALID";
  submissionId: string;
  issues?: ReadonlyArray<AmazonFullApiSchemaIssue2>;
  identifiers?: AmazonFullApiSchemaItemIdentifiers3;
};

export type AmazonFullApiSchemaItem3 = {
  sku: string;
  summaries?: AmazonFullApiSchemaItemSummaries3;
  attributes?: AmazonFullApiSchemaItemAttributes3;
  issues?: AmazonFullApiSchemaItemIssues;
  offers?: AmazonFullApiSchemaItemOffers;
  fulfillmentAvailability?: ReadonlyArray<AmazonFullApiSchemaFulfillmentAvailability>;
  procurement?: ReadonlyArray<AmazonFullApiSchemaItemProcurement>;
  relationships?: AmazonFullApiSchemaItemRelationships2;
  productTypes?: AmazonFullApiSchemaItemProductTypes3;
};

export type AmazonFullApiSchemaListingsItemPatchRequest2 = {
  productType: string;
  patches: ReadonlyArray<AmazonFullApiSchemaPatchOperation2>;
};

export type AmazonFullApiSchemaListingsItemPutRequest2 = {
  productType: string;
  requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  attributes: {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};
};

export type AmazonFullApiSchemaItemSearchResults3 = {
  numberOfResults: number;
  pagination?: AmazonFullApiSchemaPagination6;
  items: ReadonlyArray<AmazonFullApiSchemaItem3>;
};

export type AmazonFullApiSchemaRestrictionList = {
  restrictions: ReadonlyArray<AmazonFullApiSchemaRestriction>;
};

export type AmazonFullApiSchemaGetEligibleShipmentServicesRequest = {
  ShipmentRequestDetails: AmazonFullApiSchemaShipmentRequestDetails;
  ShippingOfferingFilter?: AmazonFullApiSchemaShippingOfferingFilter;
};

export type AmazonFullApiSchemaGetEligibleShipmentServicesResponse = {
  payload?: AmazonFullApiSchemaGetEligibleShipmentServicesResult;
  errors?: AmazonFullApiSchemaErrorList20;
};

export type AmazonFullApiSchemaGetShipmentResponse = {
  payload?: AmazonFullApiSchemaShipment3;
  errors?: AmazonFullApiSchemaErrorList20;
};

export type AmazonFullApiSchemaCancelShipmentResponse = {
  payload?: AmazonFullApiSchemaShipment3;
  errors?: AmazonFullApiSchemaErrorList20;
};

export type AmazonFullApiSchemaCreateShipmentRequest = {
  ShipmentRequestDetails: AmazonFullApiSchemaShipmentRequestDetails;
  ShippingServiceId: AmazonFullApiSchemaShippingServiceIdentifier;
  ShippingServiceOfferId?: string;
  HazmatType?: AmazonFullApiSchemaHazmatType;
  LabelFormatOption?: AmazonFullApiSchemaLabelFormatOptionRequest;
  ShipmentLevelSellerInputsList?: AmazonFullApiSchemaAdditionalSellerInputsList;
};

export type AmazonFullApiSchemaCreateShipmentResponse = {
  payload?: AmazonFullApiSchemaShipment3;
  errors?: AmazonFullApiSchemaErrorList20;
};

export type AmazonFullApiSchemaGetAdditionalSellerInputsRequest = {
  ShippingServiceId: AmazonFullApiSchemaShippingServiceIdentifier;
  ShipFromAddress: AmazonFullApiSchemaAddress4;
  OrderId: AmazonFullApiSchemaAmazonOrderId2;
};

export type AmazonFullApiSchemaGetAdditionalSellerInputsResponse = {
  payload?: AmazonFullApiSchemaGetAdditionalSellerInputsResult;
  errors?: AmazonFullApiSchemaErrorList20;
};

export type AmazonFullApiSchemaGetMessagingActionsForOrderResponse = {
  _links?: {
  self: AmazonFullApiSchemaLinkObject;
  actions: ReadonlyArray<AmazonFullApiSchemaLinkObject>;
};
  _embedded?: {
  actions: ReadonlyArray<AmazonFullApiSchemaGetMessagingActionResponse>;
};
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateConfirmCustomizationDetailsRequest = {
  text?: string;
  attachments?: ReadonlyArray<AmazonFullApiSchemaAttachment>;
};

export type AmazonFullApiSchemaCreateConfirmCustomizationDetailsResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateConfirmDeliveryDetailsRequest = {
  text?: string;
};

export type AmazonFullApiSchemaCreateConfirmDeliveryDetailsResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateLegalDisclosureRequest = {
  attachments?: ReadonlyArray<AmazonFullApiSchemaAttachment>;
};

export type AmazonFullApiSchemaCreateLegalDisclosureResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateConfirmOrderDetailsRequest = {
  text?: string;
};

export type AmazonFullApiSchemaCreateConfirmOrderDetailsResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateConfirmServiceDetailsRequest = {
  text?: string;
};

export type AmazonFullApiSchemaCreateConfirmServiceDetailsResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateWarrantyRequest = {
  attachments?: ReadonlyArray<AmazonFullApiSchemaAttachment>;
  coverageStartDate?: string;
  coverageEndDate?: string;
};

export type AmazonFullApiSchemaCreateWarrantyResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaGetAttributesResponse = {
  buyer?: {
  locale?: string;
};
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateDigitalAccessKeyRequest = {
  text?: string;
  attachments?: ReadonlyArray<AmazonFullApiSchemaAttachment>;
};

export type AmazonFullApiSchemaCreateDigitalAccessKeyResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaCreateUnexpectedProblemRequest = {
  text?: string;
};

export type AmazonFullApiSchemaCreateUnexpectedProblemResponse = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaInvoiceRequest = {
  attachments?: ReadonlyArray<AmazonFullApiSchemaAttachment>;
};

export type AmazonFullApiSchemaInvoiceResponse2 = {
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaGetSubscriptionResponse = {
  payload?: AmazonFullApiSchemaSubscription;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaCreateSubscriptionRequest = {
  payloadVersion: string;
  destinationId: string;
  processingDirective?: AmazonFullApiSchemaProcessingDirective;
};

export type AmazonFullApiSchemaCreateSubscriptionResponse = {
  payload?: AmazonFullApiSchemaSubscription;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaGetSubscriptionByIdResponse = {
  payload?: AmazonFullApiSchemaSubscription;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaDeleteSubscriptionByIdResponse = {
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaSendTestNotificationRequest = {
  destinationId?: string;
  testNotification?: AmazonFullApiSchemaTestNotification;
};

export type AmazonFullApiSchemaSendTestNotificationResponse = {
  payload?: AmazonFullApiSchemaJsonValue;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaGetDestinationsResponse = {
  payload?: AmazonFullApiSchemaDestinationList;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaCreateDestinationRequest = {
  resourceSpecification: AmazonFullApiSchemaDestinationResourceSpecification;
  name: string;
};

export type AmazonFullApiSchemaCreateDestinationResponse = {
  payload?: AmazonFullApiSchemaDestination;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaGetDestinationResponse = {
  payload?: AmazonFullApiSchemaDestination;
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaDeleteDestinationResponse = {
  errors?: AmazonFullApiSchemaErrorList22;
};

export type AmazonFullApiSchemaGetOrdersResponse = {
  payload?: AmazonFullApiSchemaOrdersList;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaGetOrderResponse = {
  payload?: AmazonFullApiSchemaOrder2;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaGetOrderBuyerInfoResponse = {
  payload?: AmazonFullApiSchemaOrderBuyerInfo;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaGetOrderAddressResponse = {
  payload?: AmazonFullApiSchemaOrderAddress;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaGetOrderItemsResponse = {
  payload?: AmazonFullApiSchemaOrderItemsList;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaGetOrderItemsBuyerInfoResponse = {
  payload?: AmazonFullApiSchemaOrderItemsBuyerInfoList;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaUpdateShipmentStatusRequest = {
  marketplaceId: AmazonFullApiSchemaMarketplaceId2;
  shipmentStatus: AmazonFullApiSchemaShipmentStatus;
  orderItems?: AmazonFullApiSchemaOrderItems;
};

export type AmazonFullApiSchemaUpdateShipmentStatusErrorResponse = {
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaGetOrderRegulatedInfoResponse = {
  payload?: AmazonFullApiSchemaOrderRegulatedInfo;
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaUpdateVerificationStatusRequest = {
  regulatedOrderVerificationStatus: AmazonFullApiSchemaUpdateVerificationStatusRequestBody;
};

export type AmazonFullApiSchemaUpdateVerificationStatusErrorResponse = {
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaConfirmShipmentRequest = {
  packageDetail: AmazonFullApiSchemaPackageDetail;
  codCollectionMethod?: "DirectPayment";
  marketplaceId: AmazonFullApiSchemaMarketplaceId2;
};

export type AmazonFullApiSchemaConfirmShipmentErrorResponse = {
  errors?: AmazonFullApiSchemaErrorList23;
};

export type AmazonFullApiSchemaSearchOrdersResponse = {
  orders: ReadonlyArray<AmazonFullApiSchemaOrder3>;
  pagination?: AmazonFullApiSchemaPagination7;
  lastUpdatedBefore?: string;
  createdBefore?: string;
};

export type AmazonFullApiSchemaGetOrderResponse2 = {
  order: AmazonFullApiSchemaOrder3;
};

export type AmazonFullApiSchemaGetMyFeesEstimateRequest = {
  FeesEstimateRequest?: AmazonFullApiSchemaFeesEstimateRequest;
};

export type AmazonFullApiSchemaGetMyFeesEstimateResponse = {
  payload?: AmazonFullApiSchemaGetMyFeesEstimateResult;
  errors?: AmazonFullApiSchemaErrorList24;
};

export type AmazonFullApiSchemaGetMyFeesEstimatesRequest = ReadonlyArray<AmazonFullApiSchemaFeesEstimateByIdRequest>;

export type AmazonFullApiSchemaGetMyFeesEstimatesResponse = ReadonlyArray<AmazonFullApiSchemaFeesEstimateResult>;

export type AmazonFullApiSchemaGetPricingResponse = {
  payload?: AmazonFullApiSchemaPriceList;
  errors?: AmazonFullApiSchemaErrorList25;
};

export type AmazonFullApiSchemaGetOffersResponse = {
  payload?: AmazonFullApiSchemaGetOffersResult;
  errors?: AmazonFullApiSchemaErrorList25;
};

export type AmazonFullApiSchemaGetItemOffersBatchRequest = {
  requests?: AmazonFullApiSchemaItemOffersRequestList;
};

export type AmazonFullApiSchemaGetItemOffersBatchResponse = {
  responses?: AmazonFullApiSchemaItemOffersResponseList;
};

export type AmazonFullApiSchemaGetListingOffersBatchRequest = {
  requests?: AmazonFullApiSchemaListingOffersRequestList;
};

export type AmazonFullApiSchemaGetListingOffersBatchResponse = {
  responses?: AmazonFullApiSchemaListingOffersResponseList;
};

export type AmazonFullApiSchemaGetFeaturedOfferExpectedPriceBatchRequest = {
  requests?: AmazonFullApiSchemaFeaturedOfferExpectedPriceRequestList;
};

export type AmazonFullApiSchemaGetFeaturedOfferExpectedPriceBatchResponse = {
  responses?: AmazonFullApiSchemaFeaturedOfferExpectedPriceResponseList;
};

export type AmazonFullApiSchemaCompetitiveSummaryBatchRequest = {
  requests: AmazonFullApiSchemaCompetitiveSummaryRequestList;
};

export type AmazonFullApiSchemaCompetitiveSummaryBatchResponse = {
  responses: AmazonFullApiSchemaCompetitiveSummaryResponseList;
};

export type AmazonFullApiSchemaProductTypeList = {
  productTypes: ReadonlyArray<AmazonFullApiSchemaProductType>;
  productTypeVersion: string;
};

export type AmazonFullApiSchemaProductTypeDefinition = {
  metaSchema?: AmazonFullApiSchemaSchemaLink;
  schema: AmazonFullApiSchemaSchemaLink;
  requirements: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  requirementsEnforced: "ENFORCED" | "NOT_ENFORCED";
  propertyGroups: {
  readonly [key: string]: AmazonFullApiSchemaPropertyGroup | undefined;
};
  locale: string;
  marketplaceIds: ReadonlyArray<string>;
  productType: string;
  displayName: string;
  productTypeVersion: AmazonFullApiSchemaProductTypeVersion;
};

export type AmazonFullApiSchemaGetSellingPartnerMetricsRequest = {
  aggregationFrequency?: AmazonFullApiSchemaAggregationFrequency;
  timeInterval: AmazonFullApiSchemaTimeInterval;
  metrics?: ReadonlyArray<AmazonFullApiSchemaMetric>;
  filters?: AmazonFullApiSchemaGetSellingPartnerMetricsRequestFilters;
  timePeriodType: AmazonFullApiSchemaTimePeriodType;
  marketplaceId: AmazonFullApiSchemaMarketplaceId3;
  programTypes: AmazonFullApiSchemaProgramTypes;
};

export type AmazonFullApiSchemaGetSellingPartnerMetricsResponse = {
  metrics?: ReadonlyArray<AmazonFullApiSchemaGetSellingPartnerMetricsResponseMetric>;
};

export type AmazonFullApiSchemaListOfferMetricsRequest = {
  pagination: AmazonFullApiSchemaListOfferMetricsRequestPagination;
  sort?: AmazonFullApiSchemaListOfferMetricsRequestSort;
  filters: AmazonFullApiSchemaListOfferMetricsRequestFilters;
};

export type AmazonFullApiSchemaListOfferMetricsResponse = {
  offers?: ReadonlyArray<AmazonFullApiSchemaListOfferMetricsResponseOffer>;
  pagination?: AmazonFullApiSchemaPaginationResponse;
};

export type AmazonFullApiSchemaListOffersRequest = {
  pagination: AmazonFullApiSchemaListOffersRequestPagination;
  filters: AmazonFullApiSchemaListOffersRequestFilters;
  sort?: AmazonFullApiSchemaListOffersRequestSort;
};

export type AmazonFullApiSchemaListOffersResponse = {
  offers?: ReadonlyArray<AmazonFullApiSchemaListOffersResponseOffer>;
  pagination?: AmazonFullApiSchemaPaginationResponse;
};

export type AmazonFullApiSchemaGetReportsResponse = {
  reports: AmazonFullApiSchemaReportList;
  nextToken?: string;
};

export type AmazonFullApiSchemaCreateReportSpecification = {
  reportOptions?: AmazonFullApiSchemaReportOptions;
  reportType: string;
  dataStartTime?: string;
  dataEndTime?: string;
  marketplaceIds: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaCreateReportResponse = {
  reportId: string;
};

export type AmazonFullApiSchemaErrorList9 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError9>;
};

export type AmazonFullApiSchemaReport = {
  marketplaceIds?: ReadonlyArray<string>;
  reportId: string;
  reportType: string;
  dataStartTime?: string;
  dataEndTime?: string;
  reportScheduleId?: string;
  createdTime: string;
  processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
  processingStartTime?: string;
  processingEndTime?: string;
  reportDocumentId?: string;
};

export type AmazonFullApiSchemaReportScheduleList = {
  reportSchedules: ReadonlyArray<AmazonFullApiSchemaReportSchedule>;
};

export type AmazonFullApiSchemaCreateReportScheduleSpecification = {
  reportType: string;
  marketplaceIds: ReadonlyArray<string>;
  reportOptions?: AmazonFullApiSchemaReportOptions;
  period: "PT5M" | "PT15M" | "PT30M" | "PT1H" | "PT2H" | "PT4H" | "PT8H" | "PT12H" | "P1D" | "P2D" | "P3D" | "PT84H" | "P7D" | "P14D" | "P15D" | "P18D" | "P30D" | "P1M";
  nextReportCreationTime?: string;
};

export type AmazonFullApiSchemaCreateReportScheduleResponse = {
  reportScheduleId: string;
};

export type AmazonFullApiSchemaReportSchedule = {
  reportScheduleId: string;
  reportType: string;
  marketplaceIds?: ReadonlyArray<string>;
  reportOptions?: AmazonFullApiSchemaReportOptions;
  period: string;
  nextReportCreationTime?: string;
};

export type AmazonFullApiSchemaReportDocument = {
  reportDocumentId: string;
  url: string;
  compressionAlgorithm?: "GZIP";
};

export type AmazonFullApiSchemaGetOrderMetricsResponse = {
  payload?: AmazonFullApiSchemaOrderMetricsList;
  errors?: AmazonFullApiSchemaErrorList26;
};

export type AmazonFullApiSchemaBankAccountListing = {
  accounts: ReadonlyArray<AmazonFullApiSchemaBankAccount>;
};

export type AmazonFullApiSchemaBankAccount = {
  accountId?: string;
  accountHolderName?: string;
  bankAccountNumberFormat?: AmazonFullApiSchemaBankAccountNumberFormat;
  bankName?: string;
  bankAccountOwnershipType: AmazonFullApiSchemaBankAccountOwnershipType;
  routingNumber?: string;
  bankNumberFormat?: AmazonFullApiSchemaBankNumberFormat;
  accountCountryCode: string;
  accountCurrency: string;
  bankAccountNumberTail: string;
  bankAccountHolderStatus?: AmazonFullApiSchemaBankAccountHolderStatus;
};

export type AmazonFullApiSchemaBalanceListing = {
  balances?: ReadonlyArray<AmazonFullApiSchemaBalance>;
};

export type AmazonFullApiSchemaTransferRatePreview = {
  baseAmount: AmazonFullApiSchemaCurrency;
  fxRateDetails: AmazonFullApiSchemaFxRateDetails;
  transferAmount: AmazonFullApiSchemaCurrency;
  fees: ReadonlyArray<AmazonFullApiSchemaFee>;
};

export type AmazonFullApiSchemaTransactionListing = {
  nextPageToken?: string;
  transactions: ReadonlyArray<AmazonFullApiSchemaTransaction>;
};

export type AmazonFullApiSchemaTransactionInitiationRequest = {
  sourceAccountId: string;
  destinationAccountId?: string;
  destinationTransactionInstrument: AmazonFullApiSchemaTransactionInstrumentDetails;
  transactionDescription?: string;
  customerPaymentReference?: string;
  payeeContactInformation?: AmazonFullApiSchemaPayeeContactInformation;
  sourceAmount: AmazonFullApiSchemaCurrency;
  transferRateDetails?: AmazonFullApiSchemaTransferRatePreview;
  requestTime: string;
};

export type AmazonFullApiSchemaCreateTransactionResponse = {
  transaction: AmazonFullApiSchemaTransaction;
  callBackURL: string;
};

export type AmazonFullApiSchemaTransaction = {
  accountId: string;
  transactionId: string;
  transactionType: AmazonFullApiSchemaTransactionType;
  transactionStatus: AmazonFullApiSchemaTransactionStatus3;
  transactionRequestDate: string;
  expectedCompletionDate?: string;
  transactionActualCompletionDate?: string;
  lastUpdateDate: string;
  requesterName?: string;
  transactionRequesterSource: string;
  transactionDescription: string;
  transactionSourceAccount?: AmazonFullApiSchemaTransactionAccount;
  transactionDestinationAccount: AmazonFullApiSchemaTransactionAccount;
  transactionRequestAmount: AmazonFullApiSchemaCurrency;
  transferRateDetails: AmazonFullApiSchemaTransferRatePreview;
  transactionFinalAmount?: AmazonFullApiSchemaCurrency;
  transactionFailureReason?: string;
};

export type AmazonFullApiSchemaTransferScheduleListing = {
  nextPageToken?: string;
  transferSchedules: ReadonlyArray<AmazonFullApiSchemaTransferSchedule>;
};

export type AmazonFullApiSchemaTransferScheduleRequest = {
  sourceAccountId: string;
  sourceCurrencyCode: string;
  destinationAccountId: string;
  destinationTransactionInstrument: AmazonFullApiSchemaTransactionInstrumentDetails;
  transactionType: AmazonFullApiSchemaTransactionType;
  transferScheduleInformation: AmazonFullApiSchemaTransferScheduleInformation;
  paymentPreference: AmazonFullApiSchemaPaymentPreference;
  transferScheduleStatus?: AmazonFullApiSchemaTransferScheduleStatus;
};

export type AmazonFullApiSchemaTransferSchedule = {
  transferScheduleId: string;
  transactionType: AmazonFullApiSchemaTransactionType;
  transactionSourceAccount?: AmazonFullApiSchemaTransactionAccount;
  transactionDestinationAccount: AmazonFullApiSchemaTransactionAccount;
  transferScheduleStatus: AmazonFullApiSchemaTransferScheduleStatus;
  transferScheduleInformation: AmazonFullApiSchemaTransferScheduleInformation;
  paymentPreference?: AmazonFullApiSchemaPaymentPreference;
  transferScheduleFailures: ReadonlyArray<AmazonFullApiSchemaTransferScheduleFailures>;
};

export type AmazonFullApiSchemaDeleteTransferSchedule = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaGetMarketplaceParticipationsResponse = {
  payload?: AmazonFullApiSchemaMarketplaceParticipationList;
  errors?: AmazonFullApiSchemaErrorList27;
};

export type AmazonFullApiSchemaGetAccountResponse = {
  payload?: AmazonFullApiSchemaAccount;
  errors?: AmazonFullApiSchemaErrorList27;
};

export type AmazonFullApiSchemaGetServiceJobByServiceJobIdResponse = {
  payload?: AmazonFullApiSchemaServiceJob;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaCancelServiceJobByServiceJobIdResponse = {
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaCompleteServiceJobByServiceJobIdResponse = {
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaGetServiceJobsResponse = {
  payload?: AmazonFullApiSchemaJobListing;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaAddAppointmentRequest = {
  appointmentTime: AmazonFullApiSchemaAppointmentTimeInput;
};

export type AmazonFullApiSchemaSetAppointmentResponse = {
  appointmentId?: AmazonFullApiSchemaAppointmentId;
  warnings?: AmazonFullApiSchemaWarningList;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaRescheduleAppointmentRequest = {
  appointmentTime: AmazonFullApiSchemaAppointmentTimeInput;
  rescheduleReasonCode: AmazonFullApiSchemaRescheduleReasonCode;
};

export type AmazonFullApiSchemaAssignAppointmentResourcesRequest = {
  resources: AmazonFullApiSchemaAppointmentResources;
};

export type AmazonFullApiSchemaAssignAppointmentResourcesResponse = {
  payload?: {
  warnings?: AmazonFullApiSchemaWarningList;
};
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaSetAppointmentFulfillmentDataRequest = {
  estimatedArrivalTime?: AmazonFullApiSchemaDateTimeRange;
  fulfillmentTime?: AmazonFullApiSchemaFulfillmentTime;
  appointmentResources?: AmazonFullApiSchemaAppointmentResources;
  fulfillmentDocuments?: AmazonFullApiSchemaFulfillmentDocuments;
};

export type AmazonFullApiSchemaRangeSlotCapacityQuery = {
  capacityTypes?: ReadonlyArray<AmazonFullApiSchemaCapacityType>;
  startDateTime: string;
  endDateTime: string;
};

export type AmazonFullApiSchemaRangeSlotCapacity = {
  resourceId?: string;
  capacities?: ReadonlyArray<AmazonFullApiSchemaRangeCapacity>;
  nextPageToken?: string;
};

export type AmazonFullApiSchemaFixedSlotCapacityQuery = {
  capacityTypes?: ReadonlyArray<AmazonFullApiSchemaCapacityType>;
  slotDuration?: number;
  startDateTime: string;
  endDateTime: string;
};

export type AmazonFullApiSchemaFixedSlotCapacity = {
  resourceId?: string;
  slotDuration?: number;
  capacities?: ReadonlyArray<AmazonFullApiSchemaFixedSlot>;
  nextPageToken?: string;
};

export type AmazonFullApiSchemaUpdateScheduleRequest = {
  schedules: AmazonFullApiSchemaAvailabilityRecords;
};

export type AmazonFullApiSchemaUpdateScheduleResponse = {
  payload?: ReadonlyArray<AmazonFullApiSchemaUpdateScheduleRecord>;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaCreateReservationRequest = {
  resourceId: string;
  reservation: AmazonFullApiSchemaReservation;
};

export type AmazonFullApiSchemaCreateReservationResponse = {
  payload?: AmazonFullApiSchemaCreateReservationRecord;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaUpdateReservationRequest = {
  resourceId: string;
  reservation: AmazonFullApiSchemaReservation;
};

export type AmazonFullApiSchemaUpdateReservationResponse = {
  payload?: AmazonFullApiSchemaUpdateReservationRecord;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaCancelReservationResponse = {
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaGetAppointmentSlotsResponse = {
  payload?: AmazonFullApiSchemaAppointmentSlotReport;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaServiceUploadDocument = {
  contentType: "TIFF" | "JPG" | "PNG" | "JPEG" | "GIF" | "PDF";
  contentLength: number;
  contentMD5?: string;
};

export type AmazonFullApiSchemaCreateServiceDocumentUploadDestination = {
  payload?: AmazonFullApiSchemaServiceDocumentUploadDestination;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaGetShipmentDetailsResponse = {
  payload?: AmazonFullApiSchemaShipmentDetail;
  errors?: AmazonFullApiSchemaErrorList29;
};

export type AmazonFullApiSchemaSubmitInvoiceRequest2 = {
  InvoiceContent: AmazonFullApiSchemaBlob2;
  MarketplaceId?: string;
  ContentMD5Value: string;
};

export type AmazonFullApiSchemaSubmitInvoiceResponse2 = {
  errors?: AmazonFullApiSchemaErrorList29;
};

export type AmazonFullApiSchemaGetInvoiceStatusResponse2 = {
  payload?: AmazonFullApiSchemaShipmentInvoiceStatusResponse;
  errors?: AmazonFullApiSchemaErrorList29;
};

export type AmazonFullApiSchemaCreateShipmentRequest2 = {
  clientReferenceId: AmazonFullApiSchemaClientReferenceId;
  shipTo: AmazonFullApiSchemaAddress5;
  shipFrom: AmazonFullApiSchemaAddress5;
  containers: AmazonFullApiSchemaContainerList;
};

export type AmazonFullApiSchemaCreateShipmentResponse2 = {
  payload?: AmazonFullApiSchemaCreateShipmentResult;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaGetShipmentResponse2 = {
  payload?: AmazonFullApiSchemaShipment4;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaCancelShipmentResponse2 = {
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaPurchaseLabelsRequest = {
  rateId: AmazonFullApiSchemaRateId;
  labelSpecification: AmazonFullApiSchemaLabelSpecification;
};

export type AmazonFullApiSchemaPurchaseLabelsResponse = {
  payload?: AmazonFullApiSchemaPurchaseLabelsResult;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaRetrieveShippingLabelRequest = {
  labelSpecification: AmazonFullApiSchemaLabelSpecification;
};

export type AmazonFullApiSchemaRetrieveShippingLabelResponse = {
  payload?: AmazonFullApiSchemaRetrieveShippingLabelResult;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaPurchaseShipmentRequest = {
  clientReferenceId: AmazonFullApiSchemaClientReferenceId;
  shipTo: AmazonFullApiSchemaAddress5;
  shipFrom: AmazonFullApiSchemaAddress5;
  shipDate?: string;
  serviceType: AmazonFullApiSchemaServiceType;
  containers: AmazonFullApiSchemaContainerList;
  labelSpecification: AmazonFullApiSchemaLabelSpecification;
};

export type AmazonFullApiSchemaPurchaseShipmentResponse = {
  payload?: AmazonFullApiSchemaPurchaseShipmentResult;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaGetRatesRequest = {
  shipTo: AmazonFullApiSchemaAddress5;
  shipFrom: AmazonFullApiSchemaAddress5;
  serviceTypes: AmazonFullApiSchemaServiceTypeList;
  shipDate?: string;
  containerSpecifications: AmazonFullApiSchemaContainerSpecificationList;
};

export type AmazonFullApiSchemaGetRatesResponse = {
  payload?: AmazonFullApiSchemaGetRatesResult;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaGetAccountResponse2 = {
  payload?: AmazonFullApiSchemaAccount2;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaGetTrackingInformationResponse = {
  payload?: AmazonFullApiSchemaTrackingInformation;
  errors?: AmazonFullApiSchemaErrorList30;
};

export type AmazonFullApiSchemaGetRatesRequest2 = {
  shipTo?: AmazonFullApiSchemaAddress6;
  shipFrom: AmazonFullApiSchemaAddress6;
  returnTo?: AmazonFullApiSchemaAddress6;
  shipDate?: string;
  shipperInstruction?: AmazonFullApiSchemaShipperInstruction;
  packages: AmazonFullApiSchemaPackageList;
  valueAddedServices?: AmazonFullApiSchemaValueAddedServiceDetails;
  taxDetails?: AmazonFullApiSchemaTaxDetailList;
  channelDetails: AmazonFullApiSchemaChannelDetails;
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
  shipmentType?: AmazonFullApiSchemaShipmentType;
  destinationAccessPointDetails?: AmazonFullApiSchemaAccessPointDetails;
  carrierAccounts?: AmazonFullApiSchemaCarrierAccounts;
};

export type AmazonFullApiSchemaGetRatesResponse2 = {
  payload?: AmazonFullApiSchemaGetRatesResult2;
};

export type AmazonFullApiSchemaDirectPurchaseRequest = {
  shipTo?: AmazonFullApiSchemaAddress6;
  shipFrom?: AmazonFullApiSchemaAddress6;
  returnTo?: AmazonFullApiSchemaAddress6;
  packages?: AmazonFullApiSchemaPackageList;
  channelDetails: AmazonFullApiSchemaChannelDetails;
  labelSpecifications?: AmazonFullApiSchemaRequestedDocumentSpecification;
};

export type AmazonFullApiSchemaDirectPurchaseResponse = {
  payload?: AmazonFullApiSchemaDirectPurchaseResult;
};

export type AmazonFullApiSchemaPurchaseShipmentRequest2 = {
  requestToken: AmazonFullApiSchemaRequestToken;
  rateId: AmazonFullApiSchemaRateId2;
  requestedDocumentSpecification: AmazonFullApiSchemaRequestedDocumentSpecification;
  requestedValueAddedServices?: AmazonFullApiSchemaRequestedValueAddedServiceList;
  additionalInputs?: {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};
};

export type AmazonFullApiSchemaPurchaseShipmentResponse2 = {
  payload?: AmazonFullApiSchemaPurchaseShipmentResult2;
};

export type AmazonFullApiSchemaOneClickShipmentRequest = {
  shipTo?: AmazonFullApiSchemaAddress6;
  shipFrom: AmazonFullApiSchemaAddress6;
  returnTo?: AmazonFullApiSchemaAddress6;
  shipDate?: string;
  goodsOwner?: AmazonFullApiSchemaGoodsOwner;
  packages: AmazonFullApiSchemaPackageList;
  valueAddedServicesDetails?: AmazonFullApiSchemaOneClickShipmentValueAddedServiceDetails;
  taxDetails?: AmazonFullApiSchemaTaxDetailList;
  channelDetails: AmazonFullApiSchemaChannelDetails;
  labelSpecifications: AmazonFullApiSchemaRequestedDocumentSpecification;
  serviceSelection: AmazonFullApiSchemaServiceSelection;
  shipperInstruction?: AmazonFullApiSchemaShipperInstruction;
  destinationAccessPointDetails?: AmazonFullApiSchemaAccessPointDetails;
};

export type AmazonFullApiSchemaOneClickShipmentResponse = {
  payload?: AmazonFullApiSchemaOneClickShipmentResult;
};

export type AmazonFullApiSchemaGetTrackingResponse = {
  payload?: AmazonFullApiSchemaGetTrackingResult;
};

export type AmazonFullApiSchemaGetShipmentDocumentsResponse = {
  payload?: AmazonFullApiSchemaGetShipmentDocumentsResult;
};

export type AmazonFullApiSchemaCancelShipmentResponse3 = {
  payload?: AmazonFullApiSchemaCancelShipmentResult;
};

export type AmazonFullApiSchemaGetAdditionalInputsResponse = {
  payload?: AmazonFullApiSchemaGetAdditionalInputsResult;
};

export type AmazonFullApiSchemaGetCarrierAccountFormInputsResponse = {
  linkableCarriersList?: AmazonFullApiSchemaLinkableCarriersList;
};

export type AmazonFullApiSchemaGetCarrierAccountsRequest = {
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
};

export type AmazonFullApiSchemaGetCarrierAccountsResponse = {
  activeAccounts: AmazonFullApiSchemaActiveAccounts;
};

export type AmazonFullApiSchemaLinkCarrierAccountRequest = {
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
  carrierAccountType: AmazonFullApiSchemaCarrierAccountType;
  carrierAccountAttributes: AmazonFullApiSchemaCarrierAccountAttributes;
  encryptedCarrierAccountAttributes?: AmazonFullApiSchemaCarrierAccountAttributes;
};

export type AmazonFullApiSchemaLinkCarrierAccountResponse = {
  registrationStatus?: AmazonFullApiSchemaAccountStatus;
  accountId?: AmazonFullApiSchemaAccountId;
};

export type AmazonFullApiSchemaUnlinkCarrierAccountRequest = {
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
  accountId?: AmazonFullApiSchemaAccountId;
};

export type AmazonFullApiSchemaUnlinkCarrierAccountResponse = {
  isUnlinked?: boolean;
};

export type AmazonFullApiSchemaGenerateCollectionFormRequest = {
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
  carrierId: AmazonFullApiSchemaCarrierId;
  shipFromAddress?: AmazonFullApiSchemaAddress6;
};

export type AmazonFullApiSchemaGenerateCollectionFormResponse = {
  collectionsFormDocument?: AmazonFullApiSchemaCollectionsFormDocument;
};

export type AmazonFullApiSchemaGetCollectionFormHistoryRequest = {
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
  maxResults?: number;
  carrierId?: AmazonFullApiSchemaCarrierId;
  shipFromAddress?: AmazonFullApiSchemaAddress6;
  dateRange?: AmazonFullApiSchemaDateRange2;
};

export type AmazonFullApiSchemaGetCollectionFormHistoryResponse = {
  collectionFormsHistoryRecordList?: AmazonFullApiSchemaCollectionFormsHistoryRecordList;
  lastRefreshedDate?: string;
};

export type AmazonFullApiSchemaGetUnmanifestedShipmentsRequest = {
  clientReferenceDetails?: AmazonFullApiSchemaClientReferenceDetails;
};

export type AmazonFullApiSchemaGetUnmanifestedShipmentsResponse = {
  unmanifestedCarrierInformationList?: AmazonFullApiSchemaUnmanifestedCarrierInformationList;
};

export type AmazonFullApiSchemaGetCollectionFormResponse = {
  collectionsFormDocument?: AmazonFullApiSchemaCollectionsFormDocument;
};

export type AmazonFullApiSchemaGetAccessPointsResponse = {
  payload?: AmazonFullApiSchemaGetAccessPointsResult;
};

export type AmazonFullApiSchemaSubmitNdrFeedbackRequest = {
  trackingId: AmazonFullApiSchemaTrackingId;
  ndrAction: AmazonFullApiSchemaNdrAction;
  ndrRequestData?: AmazonFullApiSchemaNdrRequestData;
};

export type AmazonFullApiSchemaErrorList10 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError10>;
};

export type AmazonFullApiSchemaCreateClaimRequest = {
  trackingId: AmazonFullApiSchemaTrackingId;
  declaredValue?: AmazonFullApiSchemaCurrency2;
  claimReason: AmazonFullApiSchemaClaimReason;
  isReplacementPackageSent?: boolean;
  proofs?: AmazonFullApiSchemaClaimProofURLs;
  settlementType: AmazonFullApiSchemaSettlementType;
};

export type AmazonFullApiSchemaCreateClaimResponse = {
  claimId?: AmazonFullApiSchemaClaimId;
};

export type AmazonFullApiSchemaGetSolicitationActionsForOrderResponse = {
  _links?: {
  self: AmazonFullApiSchemaLinkObject2;
  actions: ReadonlyArray<AmazonFullApiSchemaLinkObject2>;
};
  _embedded?: {
  actions: ReadonlyArray<AmazonFullApiSchemaGetSolicitationActionResponse>;
};
  errors?: AmazonFullApiSchemaErrorList31;
};

export type AmazonFullApiSchemaCreateProductReviewAndSellerFeedbackSolicitationResponse = {
  errors?: AmazonFullApiSchemaErrorList31;
};

export type AmazonFullApiSchemaGetSupplySourcesResponse = {
  supplySources?: AmazonFullApiSchemaSupplySourceList;
  nextPageToken?: string;
};

export type AmazonFullApiSchemaCreateSupplySourceRequest = {
  supplySourceCode: AmazonFullApiSchemaSupplySourceCode;
  alias: AmazonFullApiSchemaSupplySourceAlias;
  address: AmazonFullApiSchemaAddress7;
};

export type AmazonFullApiSchemaCreateSupplySourceResponse = {
  supplySourceId: AmazonFullApiSchemaSupplySourceId;
  supplySourceCode: AmazonFullApiSchemaSupplySourceCode;
};

export type AmazonFullApiSchemaSupplySource = {
  supplySourceId?: AmazonFullApiSchemaSupplySourceId;
  supplySourceCode?: AmazonFullApiSchemaSupplySourceCode;
  alias?: AmazonFullApiSchemaSupplySourceAlias;
  status?: AmazonFullApiSchemaSupplySourceStatusReadOnly;
  address?: AmazonFullApiSchemaAddress7;
  configuration?: AmazonFullApiSchemaSupplySourceConfiguration;
  capabilities?: AmazonFullApiSchemaSupplySourceCapabilities;
  createdAt?: AmazonFullApiSchemaDateTime3;
  updatedAt?: AmazonFullApiSchemaDateTime3;
};

export type AmazonFullApiSchemaUpdateSupplySourceRequest = {
  alias?: AmazonFullApiSchemaSupplySourceAlias;
  configuration?: AmazonFullApiSchemaSupplySourceConfiguration;
  capabilities?: AmazonFullApiSchemaSupplySourceCapabilities;
};

export type AmazonFullApiSchemaErrorList11 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError11>;
};

export type AmazonFullApiSchemaUpdateSupplySourceStatusRequest = {
  status?: AmazonFullApiSchemaSupplySourceStatus;
};

export type AmazonFullApiSchemaCreateRestrictedDataTokenRequest = {
  targetApplication?: string;
  restrictedResources: ReadonlyArray<AmazonFullApiSchemaRestrictedResource>;
};

export type AmazonFullApiSchemaCreateRestrictedDataTokenResponse = {
  restrictedDataToken?: string;
  expiresIn?: number;
};

export type AmazonFullApiSchemaCreateUploadDestinationResponse = {
  payload?: AmazonFullApiSchemaUploadDestination;
  errors?: AmazonFullApiSchemaErrorList32;
};

export type AmazonFullApiSchemaVehiclesResponse = {
  pagination?: AmazonFullApiSchemaPagination8;
  vehicles: ReadonlyArray<AmazonFullApiSchemaVehicle>;
};

export type AmazonFullApiSchemaSubmitInventoryUpdateRequest = {
  inventory?: AmazonFullApiSchemaInventoryUpdate;
};

export type AmazonFullApiSchemaSubmitInventoryUpdateResponse = {
  payload?: AmazonFullApiSchemaTransactionReference3;
  errors?: AmazonFullApiSchemaErrorList33;
};

export type AmazonFullApiSchemaGetOrdersResponse2 = {
  payload?: AmazonFullApiSchemaOrderList2;
  errors?: AmazonFullApiSchemaErrorList34;
};

export type AmazonFullApiSchemaGetOrderResponse3 = {
  payload?: AmazonFullApiSchemaOrder4;
  errors?: AmazonFullApiSchemaErrorList34;
};

export type AmazonFullApiSchemaSubmitAcknowledgementRequest = {
  orderAcknowledgements?: ReadonlyArray<AmazonFullApiSchemaOrderAcknowledgementItem>;
};

export type AmazonFullApiSchemaSubmitAcknowledgementResponse = {
  payload?: AmazonFullApiSchemaTransactionId2;
  errors?: AmazonFullApiSchemaErrorList34;
};

export type AmazonFullApiSchemaOrderList = {
  pagination?: AmazonFullApiSchemaPagination9;
  orders?: ReadonlyArray<AmazonFullApiSchemaOrder>;
};

export type AmazonFullApiSchemaOrder = {
  purchaseOrderNumber: string;
  orderDetails?: AmazonFullApiSchemaOrderDetails;
};

export type AmazonFullApiSchemaSubmitAcknowledgementRequest2 = {
  orderAcknowledgements?: ReadonlyArray<AmazonFullApiSchemaOrderAcknowledgementItem2>;
};

export type AmazonFullApiSchemaTransactionId = {
  transactionId?: string;
};

export type AmazonFullApiSchemaSubmitInvoiceRequest3 = {
  invoices?: ReadonlyArray<AmazonFullApiSchemaInvoiceDetail>;
};

export type AmazonFullApiSchemaSubmitInvoiceResponse3 = {
  payload?: AmazonFullApiSchemaTransactionReference4;
  errors?: AmazonFullApiSchemaErrorList35;
};

export type AmazonFullApiSchemaGenerateOrderScenarioRequest = {
  orders?: ReadonlyArray<AmazonFullApiSchemaOrderScenarioRequest>;
};

export type AmazonFullApiSchemaTransactionReference = {
  transactionId?: string;
};

export type AmazonFullApiSchemaTransactionStatus = {
  transactionStatus?: AmazonFullApiSchemaTransaction2;
};

export type AmazonFullApiSchemaGetShippingLabelListResponse = {
  payload?: AmazonFullApiSchemaShippingLabelList2;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaSubmitShippingLabelsRequest = {
  shippingLabelRequests?: ReadonlyArray<AmazonFullApiSchemaShippingLabelRequest>;
};

export type AmazonFullApiSchemaSubmitShippingLabelsResponse = {
  payload?: AmazonFullApiSchemaTransactionReference5;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaGetShippingLabelResponse = {
  payload?: AmazonFullApiSchemaShippingLabel2;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaSubmitShipmentConfirmationsRequest = {
  shipmentConfirmations?: ReadonlyArray<AmazonFullApiSchemaShipmentConfirmation>;
};

export type AmazonFullApiSchemaSubmitShipmentConfirmationsResponse = {
  payload?: AmazonFullApiSchemaTransactionReference5;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaSubmitShipmentStatusUpdatesRequest = {
  shipmentStatusUpdates?: ReadonlyArray<AmazonFullApiSchemaShipmentStatusUpdate>;
};

export type AmazonFullApiSchemaSubmitShipmentStatusUpdatesResponse = {
  payload?: AmazonFullApiSchemaTransactionReference5;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaGetCustomerInvoicesResponse = {
  payload?: AmazonFullApiSchemaCustomerInvoiceList2;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaGetCustomerInvoiceResponse = {
  payload?: AmazonFullApiSchemaCustomerInvoice2;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaGetPackingSlipListResponse = {
  payload?: AmazonFullApiSchemaPackingSlipList2;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaGetPackingSlipResponse = {
  payload?: AmazonFullApiSchemaPackingSlip2;
  errors?: AmazonFullApiSchemaErrorList36;
};

export type AmazonFullApiSchemaShippingLabelList = {
  pagination?: AmazonFullApiSchemaPagination10;
  shippingLabels?: ReadonlyArray<AmazonFullApiSchemaShippingLabel>;
};

export type AmazonFullApiSchemaSubmitShippingLabelsRequest2 = {
  shippingLabelRequests?: ReadonlyArray<AmazonFullApiSchemaShippingLabelRequest2>;
};

export type AmazonFullApiSchemaTransactionReference2 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaShippingLabel = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification;
  shipFromParty: AmazonFullApiSchemaPartyIdentification;
  labelFormat: "PNG" | "ZPL";
  labelData: ReadonlyArray<AmazonFullApiSchemaLabelData>;
};

export type AmazonFullApiSchemaCreateShippingLabelsRequest = {
  sellingParty: AmazonFullApiSchemaPartyIdentification;
  shipFromParty: AmazonFullApiSchemaPartyIdentification;
  containers?: ReadonlyArray<AmazonFullApiSchemaContainer>;
};

export type AmazonFullApiSchemaSubmitShipmentConfirmationsRequest2 = {
  shipmentConfirmations?: ReadonlyArray<AmazonFullApiSchemaShipmentConfirmation2>;
};

export type AmazonFullApiSchemaSubmitShipmentStatusUpdatesRequest2 = {
  shipmentStatusUpdates?: ReadonlyArray<AmazonFullApiSchemaShipmentStatusUpdate2>;
};

export type AmazonFullApiSchemaCustomerInvoiceList = {
  pagination?: AmazonFullApiSchemaPagination10;
  customerInvoices?: ReadonlyArray<AmazonFullApiSchemaCustomerInvoice>;
};

export type AmazonFullApiSchemaCustomerInvoice = {
  purchaseOrderNumber: string;
  content: string;
};

export type AmazonFullApiSchemaPackingSlipList = {
  pagination?: AmazonFullApiSchemaPagination10;
  packingSlips?: ReadonlyArray<AmazonFullApiSchemaPackingSlip>;
};

export type AmazonFullApiSchemaPackingSlip = {
  purchaseOrderNumber: string;
  content: string;
  contentType?: "application/pdf";
};

export type AmazonFullApiSchemaCreateContainerLabelRequest = {
  sellingParty: AmazonFullApiSchemaPartyIdentification;
  shipFromParty: AmazonFullApiSchemaPartyIdentification;
  carrierId: AmazonFullApiSchemaCarrierId2;
  vendorContainerId: AmazonFullApiSchemaVendorContainerId;
  packages: AmazonFullApiSchemaPackages3;
};

export type AmazonFullApiSchemaCreateContainerLabelResponse = {
  containerLabel: AmazonFullApiSchemaContainerLabel;
};

export type AmazonFullApiSchemaGetTransactionResponse = {
  payload?: AmazonFullApiSchemaTransactionStatus4;
  errors?: AmazonFullApiSchemaErrorList37;
};

export type AmazonFullApiSchemaTransactionStatus2 = {
  transactionStatus?: AmazonFullApiSchemaTransaction3;
};

export type AmazonFullApiSchemaSubmitInvoicesRequest = {
  invoices?: ReadonlyArray<AmazonFullApiSchemaInvoice2>;
};

export type AmazonFullApiSchemaSubmitInvoicesResponse = {
  payload?: AmazonFullApiSchemaTransactionId3;
  errors?: AmazonFullApiSchemaErrorList38;
};

export type AmazonFullApiSchemaGetPurchaseOrdersResponse = {
  payload?: AmazonFullApiSchemaOrderList3;
  errors?: AmazonFullApiSchemaErrorList39;
};

export type AmazonFullApiSchemaGetPurchaseOrderResponse = {
  payload?: AmazonFullApiSchemaOrder5;
  errors?: AmazonFullApiSchemaErrorList39;
};

export type AmazonFullApiSchemaSubmitAcknowledgementRequest3 = {
  acknowledgements?: ReadonlyArray<AmazonFullApiSchemaOrderAcknowledgement>;
};

export type AmazonFullApiSchemaSubmitAcknowledgementResponse2 = {
  payload?: AmazonFullApiSchemaTransactionId4;
  errors?: AmazonFullApiSchemaErrorList39;
};

export type AmazonFullApiSchemaGetPurchaseOrdersStatusResponse = {
  payload?: AmazonFullApiSchemaOrderListStatus;
  errors?: AmazonFullApiSchemaErrorList39;
};

export type AmazonFullApiSchemaSubmitShipmentConfirmationsRequest3 = {
  shipmentConfirmations?: ReadonlyArray<AmazonFullApiSchemaShipmentConfirmation3>;
};

export type AmazonFullApiSchemaSubmitShipmentConfirmationsResponse2 = {
  payload?: AmazonFullApiSchemaTransactionReference6;
  errors?: AmazonFullApiSchemaErrorList40;
};

export type AmazonFullApiSchemaSubmitShipments = {
  shipments?: ReadonlyArray<AmazonFullApiSchemaShipment5>;
};

export type AmazonFullApiSchemaGetShipmentDetailsResponse2 = {
  payload?: AmazonFullApiSchemaShipmentDetails;
  errors?: AmazonFullApiSchemaErrorList40;
};

export type AmazonFullApiSchemaGetShipmentLabels = {
  payload?: AmazonFullApiSchemaTransportationLabels;
  errors?: AmazonFullApiSchemaErrorList40;
};

export type AmazonFullApiSchemaGetTransactionResponse2 = {
  payload?: AmazonFullApiSchemaTransactionStatus5;
  errors?: AmazonFullApiSchemaErrorList41;
};

export type AmazonFullApiSchemaAddress = {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  countryCode: string;
  county?: string;
  district?: string;
  name: string;
  phoneNumber?: string;
  postalCode?: string;
  stateOrRegion: string;
};

export type AmazonFullApiSchemaDistributionPackageQuantity = {
  count: number;
  distributionPackage: AmazonFullApiSchemaDistributionPackage;
};

export type AmazonFullApiSchemaInboundPreferences = {
  destinationRegion?: string;
};

export type AmazonFullApiSchemaDestinationDetails = {
  destinationAddress?: AmazonFullApiSchemaAddress;
  destinationRegion?: string;
  shipmentId?: string;
};

export type AmazonFullApiSchemaInboundStatus = "DRAFT" | "VALIDATING" | "CONFIRMED" | "CLOSED" | "EXPIRED" | "CANCELLED";

export type AmazonFullApiSchemaError = {
  code: string;
  details?: string;
  message: string;
};

export type AmazonFullApiSchemaCarrierCode = {
  carrierCodeType?: AmazonFullApiSchemaCarrierCodeType;
  carrierCodeValue?: string;
};

export type AmazonFullApiSchemaInventoryQuantity = {
  quantity: number;
  unitOfMeasurement: AmazonFullApiSchemaInventoryUnitOfMeasurement;
};

export type AmazonFullApiSchemaSkuQuantity = {
  expectedQuantity: AmazonFullApiSchemaInventoryQuantity;
  receivedQuantity?: AmazonFullApiSchemaInventoryQuantity;
  sku: string;
};

export type AmazonFullApiSchemaInboundShipmentStatus = "CREATED" | "SHIPPED" | "IN_TRANSIT" | "RECEIVING" | "DELIVERED" | "CLOSED" | "CANCELLED";

export type AmazonFullApiSchemaLabelStatus = "GENERATING" | "GENERATED" | "GENERATION_FAILED" | "NOT_READY";

export type AmazonFullApiSchemaPageType = "PLAIN_PAPER" | "LETTER_PCP_FULFILLMENTLABEL" | "LETTER_2_HORIZONTAL" | "LETTER_2" | "THERMAL_NO_CARRIER_ROTATION" | "THERMAL" | "A4_PAPER" | "A4_2_HORIZONTAL" | "THERMAL_SQUARE_10CM";

export type AmazonFullApiSchemaTrackingDetails = {
  carrierCode?: AmazonFullApiSchemaCarrierCode;
  bookingId: string;
};

export type AmazonFullApiSchemaOrderIneligibilityReason = {
  code: string;
  description: string;
};

export type AmazonFullApiSchemaSkuEligibility = {
  ineligibilityReasons?: ReadonlyArray<AmazonFullApiSchemaSkuIneligibilityReason>;
  packageQuantity: AmazonFullApiSchemaDistributionPackageQuantity;
  status: AmazonFullApiSchemaInboundEligibilityStatus;
};

export type AmazonFullApiSchemaInboundEligibilityStatus = "ELIGIBLE" | "INELIGIBLE";

export type AmazonFullApiSchemaInboundShipmentSummary = {
  createdAt?: string;
  externalReferenceId?: string;
  orderId: string;
  shipmentId: string;
  shipmentStatus: AmazonFullApiSchemaInboundShipmentStatus;
  updatedAt?: string;
};

export type AmazonFullApiSchemaInventorySummary = {
  expirationDetails?: ReadonlyArray<AmazonFullApiSchemaExpirationDetails>;
  inventoryDetails?: AmazonFullApiSchemaInventoryDetails;
  sku: string;
  totalInboundQuantity?: number;
  totalOnhandQuantity?: number;
};

export type AmazonFullApiSchemaOrderAttribute = {
  orderPreference: AmazonFullApiSchemaOrderPreference;
  orderPreferenceValue: AmazonFullApiSchemaOrderPreferenceValue;
};

export type AmazonFullApiSchemaProductQuantity = {
  attributes?: ReadonlyArray<AmazonFullApiSchemaProductAttribute>;
  quantity: number;
  sku: string;
  expiration?: string;
  prepDetails?: AmazonFullApiSchemaPrepDetails;
};

export type AmazonFullApiSchemaOutboundExecutionError = {
  failureCode: string;
  failureReasons: ReadonlyArray<string>;
  sku?: string;
};

export type AmazonFullApiSchemaOutboundStatus = "CONFIRMED" | "DRAFT" | "ELIGIBLE" | "EXECUTING" | "FAILURE" | "INELIGIBLE" | "INVENTORY_OUTBOUND" | "SUCCESS" | "VALIDATING";

export type AmazonFullApiSchemaOutboundShipment = {
  createdAt?: string;
  destinationAddress: AmazonFullApiSchemaAddress;
  orderId: string;
  originAddress: AmazonFullApiSchemaAddress;
  shipmentPackageQuantities?: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  shipmentId: string;
  shipmentProductQuantities?: ReadonlyArray<AmazonFullApiSchemaProductQuantity>;
  shipmentStatus: AmazonFullApiSchemaOutboundShipmentStatus;
  updatedAt?: string;
};

export type AmazonFullApiSchemaReplenishmentPreferences = {
  confirmation?: AmazonFullApiSchemaConfirmationMode;
};

export type AmazonFullApiSchemaDistributionProduct = {
  attributes?: ReadonlyArray<AmazonFullApiSchemaProductAttribute>;
  quantity: number;
  sku: string;
};

export type AmazonFullApiSchemaDistributionIneligibleReason = {
  failureCode: string;
  failureReasons: ReadonlyArray<string>;
  sku?: string;
};

export type AmazonFullApiSchemaReplenishmentOrderStatus = "CONFIRMED" | "CREATED" | "ELIGIBLE" | "EXECUTING" | "FAILURE" | "INELIGIBLE" | "INVENTORY_OUTBOUND" | "SUCCESS" | "VALIDATING";

export type AmazonFullApiSchemaOutboundShipmentSummary = {
  createdAt?: string;
  orderId: string;
  shipmentId: string;
  shipmentStatus: AmazonFullApiSchemaOutboundShipmentStatus;
  updatedAt?: string;
};

export type AmazonFullApiSchemaAplusPaginatedResponse = (AmazonFullApiSchemaAplusResponse & {
  nextPageToken?: AmazonFullApiSchemaPageToken;
});

export type AmazonFullApiSchemaContentMetadataRecordList = ReadonlyArray<AmazonFullApiSchemaContentMetadataRecord>;

export type AmazonFullApiSchemaContentDocument = {
  name: string;
  contentType: AmazonFullApiSchemaContentType;
  contentSubType?: AmazonFullApiSchemaContentSubType;
  locale: AmazonFullApiSchemaLanguageTag;
  contentModuleList: AmazonFullApiSchemaContentModuleList;
};

export type AmazonFullApiSchemaAplusResponse = {
  warnings?: AmazonFullApiSchemaMessageSet;
};

export type AmazonFullApiSchemaContentReferenceKey = string;

export type AmazonFullApiSchemaContentRecord = {
  contentReferenceKey: AmazonFullApiSchemaContentReferenceKey;
  contentMetadata?: AmazonFullApiSchemaContentMetadata;
  contentDocument?: AmazonFullApiSchemaContentDocument;
};

export type AmazonFullApiSchemaAsinMetadataSet = ReadonlyArray<AmazonFullApiSchemaAsinMetadata>;

export type AmazonFullApiSchemaAsinSet = ReadonlyArray<AmazonFullApiSchemaAsin>;

export type AmazonFullApiSchemaErrorList12 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError12>;
};

export type AmazonFullApiSchemaPublishRecordList = ReadonlyArray<AmazonFullApiSchemaPublishRecord>;

export type AmazonFullApiSchemaNotificationParameters = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaError2 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaError3 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaListOfCategories = ReadonlyArray<AmazonFullApiSchemaCategories>;

export type AmazonFullApiSchemaErrorList13 = ReadonlyArray<AmazonFullApiSchemaError13>;

export type AmazonFullApiSchemaPagination = {
  nextToken?: string;
  previousToken?: string;
};

export type AmazonFullApiSchemaRefinements = {
  brands: ReadonlyArray<AmazonFullApiSchemaBrandRefinement>;
  classifications: ReadonlyArray<AmazonFullApiSchemaClassificationRefinement>;
};

export type AmazonFullApiSchemaItemAsin = string;

export type AmazonFullApiSchemaItemAttributes = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaItemIdentifiers = ReadonlyArray<AmazonFullApiSchemaItemIdentifiersByMarketplace>;

export type AmazonFullApiSchemaItemImages = ReadonlyArray<AmazonFullApiSchemaItemImagesByMarketplace>;

export type AmazonFullApiSchemaItemProductTypes = ReadonlyArray<AmazonFullApiSchemaItemProductTypeByMarketplace>;

export type AmazonFullApiSchemaItemSalesRanks = ReadonlyArray<AmazonFullApiSchemaItemSalesRanksByMarketplace>;

export type AmazonFullApiSchemaItemSummaries = ReadonlyArray<AmazonFullApiSchemaItemSummaryByMarketplace>;

export type AmazonFullApiSchemaItemVariations = ReadonlyArray<AmazonFullApiSchemaItemVariationsByMarketplace>;

export type AmazonFullApiSchemaItemVendorDetails = ReadonlyArray<AmazonFullApiSchemaItemVendorDetailsByMarketplace>;

export type AmazonFullApiSchemaPagination2 = {
  nextToken?: string;
  previousToken?: string;
};

export type AmazonFullApiSchemaRefinements2 = {
  brands: ReadonlyArray<AmazonFullApiSchemaBrandRefinement2>;
  classifications: ReadonlyArray<AmazonFullApiSchemaClassificationRefinement2>;
};

export type AmazonFullApiSchemaItemAsin2 = string;

export type AmazonFullApiSchemaItemAttributes2 = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaItemBrowseClassifications = ReadonlyArray<AmazonFullApiSchemaItemBrowseClassificationsByMarketplace>;

export type AmazonFullApiSchemaItemDimensions = ReadonlyArray<AmazonFullApiSchemaItemDimensionsByMarketplace>;

export type AmazonFullApiSchemaItemIdentifiers2 = ReadonlyArray<AmazonFullApiSchemaItemIdentifiersByMarketplace2>;

export type AmazonFullApiSchemaItemImages2 = ReadonlyArray<AmazonFullApiSchemaItemImagesByMarketplace2>;

export type AmazonFullApiSchemaItemProductTypes2 = ReadonlyArray<AmazonFullApiSchemaItemProductTypeByMarketplace2>;

export type AmazonFullApiSchemaItemRelationships = ReadonlyArray<AmazonFullApiSchemaItemRelationshipsByMarketplace>;

export type AmazonFullApiSchemaItemSalesRanks2 = ReadonlyArray<AmazonFullApiSchemaItemSalesRanksByMarketplace2>;

export type AmazonFullApiSchemaItemSummaries2 = ReadonlyArray<AmazonFullApiSchemaItemSummaryByMarketplace2>;

export type AmazonFullApiSchemaItemVendorDetails2 = ReadonlyArray<AmazonFullApiSchemaItemVendorDetailsByMarketplace2>;

export type AmazonFullApiSchemaDateRange = {
  startDate: string;
  endDate: string;
};

export type AmazonFullApiSchemaItemReviewTopics = {
  positiveTopics?: ReadonlyArray<AmazonFullApiSchemaItemReviewTopic>;
  negativeTopics?: ReadonlyArray<AmazonFullApiSchemaItemReviewTopic>;
};

export type AmazonFullApiSchemaBrowseNodeReviewTopics = {
  positiveTopics?: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReviewTopic>;
  negativeTopics?: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReviewTopic>;
};

export type AmazonFullApiSchemaItemReviewTrends = {
  positiveTopics?: ReadonlyArray<AmazonFullApiSchemaItemReviewTrend>;
  negativeTopics?: ReadonlyArray<AmazonFullApiSchemaItemReviewTrend>;
};

export type AmazonFullApiSchemaBrowseNodeReviewTrends = {
  positiveTopics?: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReviewTrend>;
  negativeTopics?: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReviewTrend>;
};

export type AmazonFullApiSchemaBrowseNodeReturnTopics = {
  topic: string;
  browseNodeMetrics: AmazonFullApiSchemaBrowseNodeTrendMetrics;
};

export type AmazonFullApiSchemaBrowseNodeReturnTrend = {
  topic: string;
  trendMetrics: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReturnTrendPoint>;
};

export type AmazonFullApiSchemaQueryList = ReadonlyArray<AmazonFullApiSchemaQuery>;

export type AmazonFullApiSchemaError4 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaBlob = string;

export type AmazonFullApiSchemaInvoiceType = "Outbound";

export type AmazonFullApiSchemaProgramType = "EasyShip" | "FbaOnSite" | "SelfShip";

export type AmazonFullApiSchemaErrorList14 = ReadonlyArray<AmazonFullApiSchemaError14>;

export type AmazonFullApiSchemaShipmentInvoiceStatus = "Processing" | "Accepted" | "Errored" | "NotFound";

export type AmazonFullApiSchemaString = string;

export type AmazonFullApiSchemaAmazonOrderId = string;

export type AmazonFullApiSchemaDimensions = {
  length?: AmazonFullApiSchemaDimension;
  width?: AmazonFullApiSchemaDimension;
  height?: AmazonFullApiSchemaDimension;
  unit?: AmazonFullApiSchemaUnitOfLength;
  identifier?: AmazonFullApiSchemaString;
};

export type AmazonFullApiSchemaWeight = {
  value?: AmazonFullApiSchemaWeightValue;
  unit?: AmazonFullApiSchemaUnitOfWeight;
};

export type AmazonFullApiSchemaTimeSlots = ReadonlyArray<AmazonFullApiSchemaTimeSlot>;

export type AmazonFullApiSchemaScheduledPackageId = {
  amazonOrderId: AmazonFullApiSchemaAmazonOrderId;
  packageId?: AmazonFullApiSchemaPackageId;
};

export type AmazonFullApiSchemaItems = ReadonlyArray<AmazonFullApiSchemaItem5>;

export type AmazonFullApiSchemaTimeSlot = {
  slotId: AmazonFullApiSchemaString;
  startTime?: AmazonFullApiSchemaDateTime4;
  endTime?: AmazonFullApiSchemaDateTime4;
  handoverMethod?: AmazonFullApiSchemaHandoverMethod;
};

export type AmazonFullApiSchemaPackageIdentifier = string;

export type AmazonFullApiSchemaInvoiceData = {
  invoiceNumber: AmazonFullApiSchemaString;
  invoiceDate?: AmazonFullApiSchemaDateTime4;
};

export type AmazonFullApiSchemaPackageStatus = "ReadyForPickup" | "PickedUp" | "AtOriginFC" | "AtDestinationFC" | "Delivered" | "Rejected" | "Undeliverable" | "ReturnedToSeller" | "LostInTransit" | "LabelCanceled" | "DamagedInTransit" | "OutForDelivery";

export type AmazonFullApiSchemaTrackingDetails2 = {
  trackingId?: AmazonFullApiSchemaString;
};

export type AmazonFullApiSchemaPackageDetails = {
  packageItems?: AmazonFullApiSchemaItems;
  packageTimeSlot: AmazonFullApiSchemaTimeSlot;
  packageIdentifier?: AmazonFullApiSchemaPackageIdentifier;
};

export type AmazonFullApiSchemaUpdatePackageDetailsList = ReadonlyArray<AmazonFullApiSchemaUpdatePackageDetails>;

export type AmazonFullApiSchemaOrderScheduleDetails = {
  amazonOrderId: AmazonFullApiSchemaAmazonOrderId;
  packageDetails?: AmazonFullApiSchemaPackageDetails;
};

export type AmazonFullApiSchemaLabelFormat = "PDF" | "ZPL";

export type AmazonFullApiSchemaRejectedOrder = {
  amazonOrderId: AmazonFullApiSchemaAmazonOrderId;
  error?: AmazonFullApiSchemaError15;
};

export type AmazonFullApiSchemaURL = string;

export type AmazonFullApiSchemaBatchInventoryRequestList = ReadonlyArray<AmazonFullApiSchemaInventoryRequest>;

export type AmazonFullApiSchemaBatchInventoryResponseList = ReadonlyArray<AmazonFullApiSchemaInventoryResponse>;

export type AmazonFullApiSchemaDateTime = string;

export type AmazonFullApiSchemaReturnMetadata = {
  returnReason: string;
  rmaId?: string;
  fulfillmentOrderId?: string;
  invoiceInformation?: AmazonFullApiSchemaInvoiceInformation;
};

export type AmazonFullApiSchemaReturnShippingInfo = {
  deliveryDateTime?: AmazonFullApiSchemaDateTime;
  pickupDateTime?: AmazonFullApiSchemaDateTime;
  forwardTrackingInfo?: AmazonFullApiSchemaTrackingInfo;
  reverseTrackingInfo?: AmazonFullApiSchemaTrackingInfo;
};

export type AmazonFullApiSchemaMarketplaceChannelDetails = {
  marketplaceChannel?: AmazonFullApiSchemaMarketplaceChannel;
  merchantId?: string;
  shipmentId?: string;
  customerOrderId?: string;
  returnLocationId?: string;
  channelSku?: string;
  exchangeOrderId?: string;
};

export type AmazonFullApiSchemaOtpDetails = {
  otp: string;
  validTill: number;
};

export type AmazonFullApiSchemaReplanningDetails = {
  previousTrackingInfo?: ReadonlyArray<AmazonFullApiSchemaTrackingInfo>;
};

export type AmazonFullApiSchemaPagination3 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaMarketplaceAttributes = {
  marketplaceId: string;
  channelName: string;
  merchantId?: string;
  customAttributes?: AmazonFullApiSchemaCustomChannelAttribute;
};

export type AmazonFullApiSchemaShipmentInfo = {
  shipmentType: "NEW" | "EXCHANGE" | "REPLACEMENT";
  originalShipmentInfo?: AmazonFullApiSchemaReplacedShipmentInfo;
  numberOfUnits: number;
  priority: AmazonFullApiSchemaPriority;
  buyerOrderId: string;
  orderStatesEligibleForRejection?: ReadonlyArray<string>;
  orderPlacedTimestamp?: string;
  processingSource?: "EXTERNAL_PLATFORM" | "INTERNAL_PLATFORM";
  paymentMethod?: "CASH_ON_DELIVERY" | "PREPAID";
};

export type AmazonFullApiSchemaInvoiceInfo = {
  invoiceId: string;
  creationDateTime: AmazonFullApiSchemaDateTime2;
};

export type AmazonFullApiSchemaPartyIdentificationInfoList = ReadonlyArray<AmazonFullApiSchemaPartyIdentificationInfo>;

export type AmazonFullApiSchemaShipmentRequirements = {
  pSlip: AmazonFullApiSchemaPackingSlipRequirement;
  invoice: AmazonFullApiSchemaInvoiceRequirement;
};

export type AmazonFullApiSchemaCharges = ReadonlyArray<AmazonFullApiSchemaCharge>;

export type AmazonFullApiSchemaShipmentLineItem = {
  shipmentLineItemId: string;
  merchantSku: AmazonFullApiSchemaSKU;
  numberOfUnits: number;
  serialNumbers?: ReadonlyArray<AmazonFullApiSchemaSerialNumber>;
  pieceType?: AmazonFullApiSchemaPieceType;
  hazmatLabels?: ReadonlyArray<string>;
  giftAttributes?: AmazonFullApiSchemaGiftAttributes;
  charges: AmazonFullApiSchemaCharges;
  cancellations?: AmazonFullApiSchemaCancellations;
  hsnCode?: string;
  recommendedCountryOfOrigin?: AmazonFullApiSchemaCountryCode;
  countryOfOrigin?: AmazonFullApiSchemaCountryCode;
  recommendedCurrencyCode?: string;
  itemValue?: AmazonFullApiSchemaAmount;
  complianceAttributes: AmazonFullApiSchemaComplianceAttributes;
  customAttributes?: ReadonlyArray<AmazonFullApiSchemaCustomAttribute>;
};

export type AmazonFullApiSchemaShippingInfo = {
  recommendedShipMethod?: string;
  expectedShippingDateTimeInUTC: AmazonFullApiSchemaDateTime2;
  shipToAddress?: AmazonFullApiSchemaAddress8;
  shippingType?: "MARKETPLACE" | "SELF";
  recommendedPackages?: AmazonFullApiSchemaRecommendedPackages;
};

export type AmazonFullApiSchemaDateTime2 = string;

export type AmazonFullApiSchemaLineItemWithReason = {
  lineItem: AmazonFullApiSchemaLineItem;
  reason?: "OUT_OF_STOCK" | "CUSTOMER_REQUESTED";
};

export type AmazonFullApiSchemaError5 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaPackageDimensions = {
  length: AmazonFullApiSchemaDimension2;
  width: AmazonFullApiSchemaDimension2;
  height: AmazonFullApiSchemaDimension2;
};

export type AmazonFullApiSchemaWeight2 = {
  value: AmazonFullApiSchemaDecimal;
  weightUnit: "G" | "KG" | "LB" | "OZ";
};

export type AmazonFullApiSchemaPackageLineItems = ReadonlyArray<AmazonFullApiSchemaPackageLineItem>;

export type AmazonFullApiSchemaPackageStatus2 = "CREATED" | "PICKUP_SLOT_RETRIEVED" | "INVOICE_GENERATED" | "SHIPLABEL_GENERATED" | "SHIPPED" | "DELIVERED";

export type AmazonFullApiSchemaPackageSubStatus = "OUT_FOR_DELIVERY" | "DELIVERED" | "NOT_DELIVERED" | "UNDELIVERABLE";

export type AmazonFullApiSchemaShippingOptions = {
  shippingOptionId: string;
  shipBy: "MARKETPLACE" | "SELLER" | "THIRD_PARTY_CARRIER" | "OTHER";
  carrierName?: string;
  pickupWindow?: AmazonFullApiSchemaTimeWindow;
  timeSlot?: AmazonFullApiSchemaTimeWindow;
  handoverLocation?: AmazonFullApiSchemaHandoverLocation;
};

export type AmazonFullApiSchemaDocument = {
  format?: "ZPL" | "PDF" | "PNG" | "PLAIN_TEXT";
  content?: string;
};

export type AmazonFullApiSchemaCourierSupportedAttributes = {
  carrierName: string;
  trackingId: string;
};

export type AmazonFullApiSchemaPackageShipLabelList = ReadonlyArray<AmazonFullApiSchemaPackageShipLabel>;

export type AmazonFullApiSchemaItemEligibilityPreview = {
  asin: string;
  marketplaceId?: string;
  program: "INBOUND" | "COMMINGLING";
  isEligibleForProgram: boolean;
  ineligibilityReasonList?: ReadonlyArray<"FBA_INB_0004" | "FBA_INB_0006" | "FBA_INB_0007" | "FBA_INB_0008" | "FBA_INB_0009" | "FBA_INB_0010" | "FBA_INB_0011" | "FBA_INB_0012" | "FBA_INB_0013" | "FBA_INB_0014" | "FBA_INB_0015" | "FBA_INB_0016" | "FBA_INB_0017" | "FBA_INB_0018" | "FBA_INB_0019" | "FBA_INB_0034" | "FBA_INB_0035" | "FBA_INB_0036" | "FBA_INB_0037" | "FBA_INB_0038" | "FBA_INB_0050" | "FBA_INB_0051" | "FBA_INB_0053" | "FBA_INB_0055" | "FBA_INB_0056" | "FBA_INB_0059" | "FBA_INB_0065" | "FBA_INB_0066" | "FBA_INB_0067" | "FBA_INB_0068" | "FBA_INB_0095" | "FBA_INB_0097" | "FBA_INB_0098" | "FBA_INB_0099" | "FBA_INB_0100" | "FBA_INB_0103" | "FBA_INB_0104" | "FBA_INB_0197" | "FBA_INB_0342" | "FBA_INB_0465" | "UNKNOWN_INB_ERROR_CODE">;
};

export type AmazonFullApiSchemaErrorList15 = ReadonlyArray<AmazonFullApiSchemaError16>;

export type AmazonFullApiSchemaGetInventorySummariesResult = {
  granularity: AmazonFullApiSchemaGranularity;
  inventorySummaries: AmazonFullApiSchemaInventorySummaries;
};

export type AmazonFullApiSchemaPagination4 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaErrorList16 = ReadonlyArray<AmazonFullApiSchemaError17>;

export type AmazonFullApiSchemaInventoryItems = ReadonlyArray<AmazonFullApiSchemaInventoryItem>;

export type AmazonFullApiSchemaFeedList = ReadonlyArray<AmazonFullApiSchemaFeed>;

export type AmazonFullApiSchemaFeedOptions = {
  readonly [key: string]: string | undefined;
};

export type AmazonFullApiSchemaError6 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaListFinancialEventGroupsPayload = {
  NextToken?: string;
  FinancialEventGroupList?: AmazonFullApiSchemaFinancialEventGroupList;
};

export type AmazonFullApiSchemaErrorList17 = ReadonlyArray<AmazonFullApiSchemaError18>;

export type AmazonFullApiSchemaListFinancialEventsPayload = {
  NextToken?: string;
  FinancialEvents?: AmazonFullApiSchemaFinancialEvents;
};

export type AmazonFullApiSchemaTransactionsPayload = {
  nextToken?: string;
  transactions?: AmazonFullApiSchemaTransactions;
};

export type AmazonFullApiSchemaMarketplaceId = string;

export type AmazonFullApiSchemaPaymentMethodList = ReadonlyArray<AmazonFullApiSchemaPaymentMethodDetails>;

export type AmazonFullApiSchemaGetPrepInstructionsResult = {
  SKUPrepInstructionsList?: AmazonFullApiSchemaSKUPrepInstructionsList;
  InvalidSKUList?: AmazonFullApiSchemaInvalidSKUList;
  ASINPrepInstructionsList?: AmazonFullApiSchemaASINPrepInstructionsList;
  InvalidASINList?: AmazonFullApiSchemaInvalidASINList;
};

export type AmazonFullApiSchemaErrorList18 = ReadonlyArray<AmazonFullApiSchemaError19>;

export type AmazonFullApiSchemaLabelDownloadURL = {
  DownloadURL?: string;
};

export type AmazonFullApiSchemaBillOfLadingDownloadURL = {
  DownloadURL?: string;
};

export type AmazonFullApiSchemaGetShipmentsResult = {
  ShipmentData?: AmazonFullApiSchemaInboundShipmentList;
  NextToken?: string;
};

export type AmazonFullApiSchemaGetShipmentItemsResult = {
  ItemData?: AmazonFullApiSchemaInboundShipmentItemList;
  NextToken?: string;
};

export type AmazonFullApiSchemaInboundPlanSummary = {
  createdAt: string;
  inboundPlanId: string;
  lastUpdatedAt: string;
  marketplaceIds: ReadonlyArray<string>;
  name: string;
  sourceAddress: AmazonFullApiSchemaAddress2;
  status: string;
};

export type AmazonFullApiSchemaPagination5 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaItemInput = {
  expiration?: string;
  labelOwner: AmazonFullApiSchemaLabelOwner;
  manufacturingLotCode?: string;
  msku: string;
  prepOwner: AmazonFullApiSchemaPrepOwner;
  quantity: number;
};

export type AmazonFullApiSchemaAddressInput = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  companyName?: string;
  countryCode: string;
  districtOrCounty?: string;
  email?: string;
  name: string;
  phoneNumber: string;
  postalCode: string;
  stateOrProvinceCode?: string;
};

export type AmazonFullApiSchemaPackingOptionSummary = {
  packingOptionId: string;
  status: string;
};

export type AmazonFullApiSchemaPlacementOptionSummary = {
  placementOptionId: string;
  status: string;
};

export type AmazonFullApiSchemaShipmentSummary = {
  shipmentId: string;
  status: string;
};

export type AmazonFullApiSchemaAddress2 = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  companyName?: string;
  countryCode: string;
  districtOrCounty?: string;
  email?: string;
  name: string;
  phoneNumber?: string;
  postalCode: string;
  stateOrProvinceCode?: string;
};

export type AmazonFullApiSchemaBox = {
  boxId?: string;
  contentInformationSource?: AmazonFullApiSchemaBoxContentInformationSource;
  destinationRegion?: AmazonFullApiSchemaRegion;
  dimensions?: AmazonFullApiSchemaDimensions2;
  externalContainerIdentifier?: string;
  externalContainerIdentifierType?: string;
  items?: ReadonlyArray<AmazonFullApiSchemaItem4>;
  packageId: string;
  quantity?: number;
  templateName?: string;
  weight?: AmazonFullApiSchemaWeight3;
};

export type AmazonFullApiSchemaItem4 = {
  asin: string;
  expiration?: string;
  fnsku: string;
  labelOwner: string;
  manufacturingLotCode?: string;
  msku: string;
  prepInstructions: ReadonlyArray<AmazonFullApiSchemaPrepInstruction>;
  quantity: number;
};

export type AmazonFullApiSchemaError7 = {
  code: string;
  details?: string;
  message: string;
};

export type AmazonFullApiSchemaPackageGroupingInput = {
  boxes: ReadonlyArray<AmazonFullApiSchemaBoxInput>;
  packingGroupId?: string;
  shipmentId?: string;
};

export type AmazonFullApiSchemaPackingOption = {
  discounts: ReadonlyArray<AmazonFullApiSchemaIncentive>;
  expiration?: string;
  fees: ReadonlyArray<AmazonFullApiSchemaIncentive>;
  packingGroups: ReadonlyArray<string>;
  packingOptionId: string;
  status: string;
  supportedConfigurations: ReadonlyArray<AmazonFullApiSchemaPackingConfiguration>;
  supportedShippingConfigurations: ReadonlyArray<AmazonFullApiSchemaShippingConfiguration>;
};

export type AmazonFullApiSchemaPallet = {
  dimensions?: AmazonFullApiSchemaDimensions2;
  packageId: string;
  quantity?: number;
  stackability?: AmazonFullApiSchemaStackability;
  weight?: AmazonFullApiSchemaWeight3;
};

export type AmazonFullApiSchemaPlacementOption = {
  discounts: ReadonlyArray<AmazonFullApiSchemaIncentive>;
  expiration?: string;
  fees: ReadonlyArray<AmazonFullApiSchemaIncentive>;
  placementOptionId: string;
  shipmentIds: ReadonlyArray<string>;
  status: string;
};

export type AmazonFullApiSchemaCustomPlacementInput = {
  items: ReadonlyArray<AmazonFullApiSchemaItemInput>;
  warehouseId: string;
};

export type AmazonFullApiSchemaContactInformation = {
  email?: string;
  name: string;
  phoneNumber: string;
};

export type AmazonFullApiSchemaDates = {
  readyToShipWindow?: AmazonFullApiSchemaWindow;
};

export type AmazonFullApiSchemaShipmentDestination = {
  address?: AmazonFullApiSchemaAddress2;
  destinationType: string;
  warehouseId?: string;
};

export type AmazonFullApiSchemaFreightInformation = {
  declaredValue?: AmazonFullApiSchemaCurrency3;
  freightClass?: string;
};

export type AmazonFullApiSchemaSelectedDeliveryWindow = {
  availabilityType: string;
  deliveryWindowOptionId: string;
  editableUntil?: string;
  endDate: string;
  startDate: string;
};

export type AmazonFullApiSchemaSelfShipAppointmentDetails = {
  appointmentId?: number;
  appointmentSlotTime?: AmazonFullApiSchemaAppointmentSlotTime;
  appointmentStatus?: string;
};

export type AmazonFullApiSchemaShipmentSource = {
  address?: AmazonFullApiSchemaAddress2;
  sourceType: string;
};

export type AmazonFullApiSchemaTrackingDetails3 = {
  ltlTrackingDetail?: AmazonFullApiSchemaLtlTrackingDetail;
  spdTrackingDetail?: AmazonFullApiSchemaSpdTrackingDetail;
};

export type AmazonFullApiSchemaBoxUpdateInput = {
  contentInformationSource: AmazonFullApiSchemaBoxContentInformationSource;
  dimensions: AmazonFullApiSchemaDimensions2;
  items?: ReadonlyArray<AmazonFullApiSchemaItemInput>;
  packageId?: string;
  quantity: number;
  weight: AmazonFullApiSchemaWeight3;
};

export type AmazonFullApiSchemaRequestedUpdates = {
  boxes?: ReadonlyArray<AmazonFullApiSchemaBoxUpdateInput>;
  items?: ReadonlyArray<AmazonFullApiSchemaItemInput>;
};

export type AmazonFullApiSchemaTransportationOption = {
  carrier: AmazonFullApiSchemaCarrier;
  carrierAppointment?: AmazonFullApiSchemaCarrierAppointment;
  preconditions: ReadonlyArray<string>;
  quote?: AmazonFullApiSchemaQuote;
  shipmentId: string;
  shippingMode: string;
  shippingSolution: string;
  transportationOptionId: string;
};

export type AmazonFullApiSchemaDocumentDownload = {
  downloadType: string;
  expiration?: string;
  uri: string;
};

export type AmazonFullApiSchemaDeliveryWindowOption = {
  availabilityType: string;
  deliveryWindowOptionId: string;
  endDate: string;
  startDate: string;
  validUntil: string;
};

export type AmazonFullApiSchemaReasonComment = "APPOINTMENT_REQUESTED_BY_MISTAKE" | "VEHICLE_DELAY" | "SLOT_NOT_SUITABLE" | "OUTSIDE_CARRIER_BUSINESS_HOURS" | "UNFAVOURABLE_EXTERNAL_CONDITIONS" | "PROCUREMENT_DELAY" | "SHIPPING_PLAN_CHANGED" | "INCREASED_QUANTITY" | "OTHER";

export type AmazonFullApiSchemaSelfShipAppointmentSlotsAvailability = {
  expiresAt?: string;
  slots?: ReadonlyArray<AmazonFullApiSchemaAppointmentSlot>;
};

export type AmazonFullApiSchemaTrackingDetailsInput = {
  ltlTrackingDetail?: AmazonFullApiSchemaLtlTrackingDetailInput;
  spdTrackingDetail?: AmazonFullApiSchemaSpdTrackingDetailInput;
};

export type AmazonFullApiSchemaShipmentTransportationConfiguration = {
  contactInformation?: AmazonFullApiSchemaContactInformation;
  freightInformation?: AmazonFullApiSchemaFreightInformation;
  pallets?: ReadonlyArray<AmazonFullApiSchemaPalletInput>;
  readyToShipWindow: AmazonFullApiSchemaWindowInput;
  shipmentId: string;
};

export type AmazonFullApiSchemaTransportationSelection = {
  contactInformation?: AmazonFullApiSchemaContactInformation;
  shipmentId: string;
  transportationOptionId: string;
};

export type AmazonFullApiSchemaComplianceDetail = {
  asin?: string;
  fnsku?: string;
  msku?: string;
  taxDetails?: AmazonFullApiSchemaTaxDetails;
};

export type AmazonFullApiSchemaTaxDetails = {
  declaredValue?: AmazonFullApiSchemaCurrency3;
  hsnCode?: string;
  taxRates?: ReadonlyArray<AmazonFullApiSchemaTaxRate>;
};

export type AmazonFullApiSchemaLabelPrintType = "STANDARD_FORMAT" | "THERMAL_PRINTING";

export type AmazonFullApiSchemaMskuQuantity = {
  msku: string;
  quantity: number;
};

export type AmazonFullApiSchemaItemLabelPageType = "A4_21" | "A4_24" | "A4_24_64x33" | "A4_24_66x35" | "A4_24_70x36" | "A4_24_70x37" | "A4_24i" | "A4_27" | "A4_40_52x29" | "A4_44_48x25" | "Letter_30";

export type AmazonFullApiSchemaMskuPrepDetail = {
  allOwnersConstraint?: AmazonFullApiSchemaAllOwnersConstraint;
  labelOwnerConstraint?: AmazonFullApiSchemaOwnerConstraint;
  msku: string;
  prepCategory: AmazonFullApiSchemaPrepCategory;
  prepOwnerConstraint?: AmazonFullApiSchemaOwnerConstraint;
  prepTypes: ReadonlyArray<AmazonFullApiSchemaPrepType>;
};

export type AmazonFullApiSchemaMskuPrepDetailInput = {
  msku: string;
  prepCategory: AmazonFullApiSchemaPrepCategory;
  prepTypes: ReadonlyArray<AmazonFullApiSchemaPrepType>;
};

export type AmazonFullApiSchemaOperationProblem = {
  code: string;
  details?: string;
  message: string;
  severity: string;
};

export type AmazonFullApiSchemaOperationStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS";

export type AmazonFullApiSchemaAddress3 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  districtOrCounty?: string;
  stateOrRegion?: string;
  postalCode: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaGetFulfillmentPreviewItemList = ReadonlyArray<AmazonFullApiSchemaGetFulfillmentPreviewItem>;

export type AmazonFullApiSchemaShippingSpeedCategoryList = ReadonlyArray<AmazonFullApiSchemaShippingSpeedCategory>;

export type AmazonFullApiSchemaFeatureSettings = {
  featureName?: string;
  featureFulfillmentPolicy?: "Required" | "NotRequired";
};

export type AmazonFullApiSchemaGetFulfillmentPreviewResult = {
  fulfillmentPreviews?: AmazonFullApiSchemaFulfillmentPreviewList;
};

export type AmazonFullApiSchemaErrorList19 = ReadonlyArray<AmazonFullApiSchemaError20>;

export type AmazonFullApiSchemaGetDeliveryOffersProduct = {
  productIdentifier: AmazonFullApiSchemaProductIdentifier;
  amount?: AmazonFullApiSchemaAmount2;
};

export type AmazonFullApiSchemaGetDeliveryOffersTerms = {
  origin: AmazonFullApiSchemaOrigin;
  destination: AmazonFullApiSchemaDestination2;
};

export type AmazonFullApiSchemaGetDeliveryOffersResult = {
  deliveryOffers?: AmazonFullApiSchemaDeliveryOffersList;
};

export type AmazonFullApiSchemaListAllFulfillmentOrdersResult = {
  nextToken?: string;
  fulfillmentOrders?: ReadonlyArray<AmazonFullApiSchemaFulfillmentOrder>;
};

export type AmazonFullApiSchemaTimestamp = string;

export type AmazonFullApiSchemaShippingSpeedCategory = "Standard" | "Expedited" | "Priority" | "ScheduledDelivery";

export type AmazonFullApiSchemaDeliveryWindow = {
  startDate: AmazonFullApiSchemaTimestamp;
  endDate: AmazonFullApiSchemaTimestamp;
};

export type AmazonFullApiSchemaDeliveryPreferences = {
  deliveryInstructions?: string;
  dropOffLocation?: AmazonFullApiSchemaDropOffLocation;
};

export type AmazonFullApiSchemaFulfillmentAction = "Ship" | "Hold";

export type AmazonFullApiSchemaFulfillmentPolicy = "FillOrKill" | "FillAll" | "FillAllAvailable";

export type AmazonFullApiSchemaCODSettings = {
  isCodRequired: boolean;
  codCharge?: AmazonFullApiSchemaMoney;
  codChargeTax?: AmazonFullApiSchemaMoney;
  shippingCharge?: AmazonFullApiSchemaMoney;
  shippingChargeTax?: AmazonFullApiSchemaMoney;
};

export type AmazonFullApiSchemaNotificationEmailList = ReadonlyArray<string>;

export type AmazonFullApiSchemaCreateFulfillmentOrderItemList = ReadonlyArray<AmazonFullApiSchemaCreateFulfillmentOrderItem>;

export type AmazonFullApiSchemaPaymentInformationList = ReadonlyArray<AmazonFullApiSchemaPaymentInformation>;

export type AmazonFullApiSchemaPackageTrackingDetails = {
  packageNumber: number;
  trackingNumber?: string;
  customerTrackingLink?: string;
  carrierCode?: string;
  carrierPhoneNumber?: string;
  carrierURL?: string;
  shipDate?: AmazonFullApiSchemaTimestamp;
  estimatedArrivalDate?: AmazonFullApiSchemaTimestamp;
  shipToAddress?: AmazonFullApiSchemaTrackingAddress;
  currentStatus?: AmazonFullApiSchemaCurrentStatus;
  currentStatusDescription?: string;
  deliveryWindow?: AmazonFullApiSchemaDateRange3;
  signedForBy?: string;
  additionalLocationInfo?: AmazonFullApiSchemaAdditionalLocationInfo;
  trackingEvents?: AmazonFullApiSchemaTrackingEventList;
};

export type AmazonFullApiSchemaListReturnReasonCodesResult = {
  reasonCodeDetails?: AmazonFullApiSchemaReasonCodeDetailsList;
};

export type AmazonFullApiSchemaCreateReturnItemList = ReadonlyArray<AmazonFullApiSchemaCreateReturnItem>;

export type AmazonFullApiSchemaCreateFulfillmentReturnResult = {
  returnItems?: AmazonFullApiSchemaReturnItemList;
  invalidReturnItems?: AmazonFullApiSchemaInvalidReturnItemList;
  returnAuthorizations?: AmazonFullApiSchemaReturnAuthorizationList;
};

export type AmazonFullApiSchemaGetFulfillmentOrderResult = {
  fulfillmentOrder: AmazonFullApiSchemaFulfillmentOrder;
  fulfillmentOrderItems: AmazonFullApiSchemaFulfillmentOrderItemList;
  fulfillmentShipments?: AmazonFullApiSchemaFulfillmentShipmentList;
  returnItems: AmazonFullApiSchemaReturnItemList;
  returnAuthorizations: AmazonFullApiSchemaReturnAuthorizationList;
  paymentInformation?: AmazonFullApiSchemaPaymentInformationList;
};

export type AmazonFullApiSchemaUpdateFulfillmentOrderItemList = ReadonlyArray<AmazonFullApiSchemaUpdateFulfillmentOrderItem>;

export type AmazonFullApiSchemaFulfillmentOrderStatus = "New" | "Received" | "Planning" | "Processing" | "Cancelled" | "Complete" | "CompletePartialled" | "Unfulfillable" | "Invalid";

export type AmazonFullApiSchemaGetFeaturesResult = {
  features: AmazonFullApiSchemaFeatures;
};

export type AmazonFullApiSchemaGetFeatureInventoryResult = {
  marketplaceId: string;
  featureName: string;
  nextToken?: string;
  featureSkus?: ReadonlyArray<AmazonFullApiSchemaFeatureSku>;
};

export type AmazonFullApiSchemaGetFeatureSkuResult = {
  marketplaceId: string;
  featureName: string;
  isEligible: boolean;
  ineligibleReasons?: ReadonlyArray<string>;
  sellerSku?: string;
  fnSku?: string;
  asin?: string;
  skuCount?: number;
};

export type AmazonFullApiSchemaInvoicesAttributes = {
  invoiceStatusOptions?: ReadonlyArray<AmazonFullApiSchemaAttributeOption>;
  invoiceTypeOptions?: ReadonlyArray<AmazonFullApiSchemaAttributeOption>;
  transactionIdentifierNameOptions?: ReadonlyArray<AmazonFullApiSchemaAttributeOption>;
  transactionTypeOptions?: ReadonlyArray<AmazonFullApiSchemaAttributeOption>;
};

export type AmazonFullApiSchemaInvoicesDocument = {
  invoicesDocumentId?: string;
  invoicesDocumentUrl?: string;
};

export type AmazonFullApiSchemaFileFormat = "XML";

export type AmazonFullApiSchemaTransactionIdentifier = {
  name?: string;
  id?: string;
};

export type AmazonFullApiSchemaExport = {
  errorMessage?: string;
  exportId?: string;
  generateExportFinishedAt?: string;
  generateExportStartedAt?: string;
  invoicesDocumentIds?: ReadonlyArray<string>;
  status?: AmazonFullApiSchemaExportStatus;
};

export type AmazonFullApiSchemaCarrierDetailsContext = {
  name?: string;
  address?: string;
  contextType?: string;
  federalTaxId?: string;
  regionCode?: string;
  regionTaxId?: string;
  vehicleLicensePlate?: string;
  vehicleRegistrationRegionCode?: string;
};

export type AmazonFullApiSchemaError8 = {
  code: string;
  details?: string;
  message: string;
};

export type AmazonFullApiSchemaInvoiceError = {
  description?: string;
  errorCode?: string;
};

export type AmazonFullApiSchemaGovernmentInvoiceCreationStatus = "PROCESSING" | "SUCCESS" | "ERROR";

export type AmazonFullApiSchemaInvoiceDocument = {
  invoiceDocumentUrl?: string;
};

export type AmazonFullApiSchemaInvoice = {
  date?: string;
  errorCode?: string;
  externalInvoiceId?: string;
  govResponse?: string;
  id?: string;
  invoiceType?: string;
  series?: string;
  status?: string;
  transactionIds?: ReadonlyArray<AmazonFullApiSchemaTransactionIdentifier>;
  transactionType?: string;
};

export type AmazonFullApiSchemaIssue = {
  code: string;
  message: string;
  severity: "ERROR" | "WARNING" | "INFO";
  attributeName?: string;
};

export type AmazonFullApiSchemaPatchOperation = {
  op: "add" | "replace" | "delete";
  path: string;
  value?: ReadonlyArray<{
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
}>;
};

export type AmazonFullApiSchemaIssue2 = {
  code: string;
  message: string;
  severity: "ERROR" | "WARNING" | "INFO";
  attributeNames?: ReadonlyArray<string>;
  categories: ReadonlyArray<string>;
  enforcements?: AmazonFullApiSchemaIssueEnforcements;
};

export type AmazonFullApiSchemaItemIdentifiers3 = ReadonlyArray<AmazonFullApiSchemaItemIdentifiersByMarketplace3>;

export type AmazonFullApiSchemaItemSummaries3 = ReadonlyArray<AmazonFullApiSchemaItemSummaryByMarketplace3>;

export type AmazonFullApiSchemaItemAttributes3 = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaItemIssues = ReadonlyArray<AmazonFullApiSchemaIssue2>;

export type AmazonFullApiSchemaItemOffers = ReadonlyArray<AmazonFullApiSchemaItemOfferByMarketplace>;

export type AmazonFullApiSchemaFulfillmentAvailability = {
  fulfillmentChannelCode: string;
  quantity?: number;
};

export type AmazonFullApiSchemaItemProcurement = {
  costPrice: AmazonFullApiSchemaMoney2;
};

export type AmazonFullApiSchemaItemRelationships2 = ReadonlyArray<AmazonFullApiSchemaItemRelationshipsByMarketplace2>;

export type AmazonFullApiSchemaItemProductTypes3 = ReadonlyArray<AmazonFullApiSchemaItemProductTypeByMarketplace3>;

export type AmazonFullApiSchemaPatchOperation2 = {
  op: "add" | "replace" | "merge" | "delete";
  path: string;
  value?: ReadonlyArray<{
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
}>;
};

export type AmazonFullApiSchemaPagination6 = {
  nextToken?: string;
  previousToken?: string;
};

export type AmazonFullApiSchemaRestriction = {
  marketplaceId: string;
  conditionType?: "new_new" | "new_open_box" | "new_oem" | "refurbished_refurbished" | "used_like_new" | "used_very_good" | "used_good" | "used_acceptable" | "collectible_like_new" | "collectible_very_good" | "collectible_good" | "collectible_acceptable" | "club_club";
  reasons?: ReadonlyArray<AmazonFullApiSchemaReason>;
};

export type AmazonFullApiSchemaShipmentRequestDetails = {
  AmazonOrderId: AmazonFullApiSchemaAmazonOrderId2;
  SellerOrderId?: AmazonFullApiSchemaSellerOrderId;
  ItemList: AmazonFullApiSchemaItemList;
  ShipFromAddress: AmazonFullApiSchemaAddress4;
  PackageDimensions: AmazonFullApiSchemaPackageDimensions2;
  Weight: AmazonFullApiSchemaWeight4;
  MustArriveByDate?: AmazonFullApiSchemaTimestamp2;
  ShipDate?: AmazonFullApiSchemaTimestamp2;
  ShippingServiceOptions: AmazonFullApiSchemaShippingServiceOptions;
  LabelCustomization?: AmazonFullApiSchemaLabelCustomization;
};

export type AmazonFullApiSchemaShippingOfferingFilter = {
  IncludePackingSlipWithLabel?: boolean;
  IncludeComplexShippingOptions?: boolean;
  CarrierWillPickUp?: AmazonFullApiSchemaCarrierWillPickUpOption;
  DeliveryExperience?: AmazonFullApiSchemaDeliveryExperienceOption;
};

export type AmazonFullApiSchemaGetEligibleShipmentServicesResult = {
  ShippingServiceList: AmazonFullApiSchemaShippingServiceList;
  RejectedShippingServiceList?: AmazonFullApiSchemaRejectedShippingServiceList;
  TemporarilyUnavailableCarrierList?: AmazonFullApiSchemaTemporarilyUnavailableCarrierList;
  TermsAndConditionsNotAcceptedCarrierList?: AmazonFullApiSchemaTermsAndConditionsNotAcceptedCarrierList;
};

export type AmazonFullApiSchemaErrorList20 = ReadonlyArray<AmazonFullApiSchemaError21>;

export type AmazonFullApiSchemaShipment3 = {
  ShipmentId: AmazonFullApiSchemaShipmentId;
  AmazonOrderId: AmazonFullApiSchemaAmazonOrderId2;
  SellerOrderId?: AmazonFullApiSchemaSellerOrderId;
  ItemList: AmazonFullApiSchemaItemList;
  ShipFromAddress: AmazonFullApiSchemaAddress4;
  ShipToAddress: AmazonFullApiSchemaAddress4;
  PackageDimensions: AmazonFullApiSchemaPackageDimensions2;
  Weight: AmazonFullApiSchemaWeight4;
  Insurance: AmazonFullApiSchemaCurrencyAmount;
  ShippingService: AmazonFullApiSchemaShippingService;
  Label: AmazonFullApiSchemaLabel;
  Status: AmazonFullApiSchemaShipmentStatus2;
  TrackingId?: AmazonFullApiSchemaTrackingId2;
  CreatedDate: AmazonFullApiSchemaTimestamp2;
  LastUpdatedDate?: AmazonFullApiSchemaTimestamp2;
};

export type AmazonFullApiSchemaShippingServiceIdentifier = string;

export type AmazonFullApiSchemaHazmatType = "None" | "LQHazmat";

export type AmazonFullApiSchemaLabelFormatOptionRequest = {
  IncludePackingSlipWithLabel?: boolean;
};

export type AmazonFullApiSchemaAdditionalSellerInputsList = ReadonlyArray<AmazonFullApiSchemaAdditionalSellerInputs>;

export type AmazonFullApiSchemaAddress4 = {
  Name: AmazonFullApiSchemaAddressName;
  AddressLine1: AmazonFullApiSchemaAddressLine1;
  AddressLine2?: AmazonFullApiSchemaAddressLine2;
  AddressLine3?: AmazonFullApiSchemaAddressLine3;
  DistrictOrCounty?: AmazonFullApiSchemaDistrictOrCounty;
  Email: AmazonFullApiSchemaEmailAddress;
  City: AmazonFullApiSchemaCity;
  StateOrProvinceCode?: AmazonFullApiSchemaStateOrProvinceCode;
  PostalCode: AmazonFullApiSchemaPostalCode;
  CountryCode: AmazonFullApiSchemaCountryCode2;
  Phone: AmazonFullApiSchemaPhoneNumber;
};

export type AmazonFullApiSchemaAmazonOrderId2 = string;

export type AmazonFullApiSchemaGetAdditionalSellerInputsResult = {
  ShipmentLevelFields?: AmazonFullApiSchemaAdditionalInputsList;
  ItemLevelFieldsList?: AmazonFullApiSchemaItemLevelFieldsList;
};

export type AmazonFullApiSchemaLinkObject = {
  href: string;
  name?: string;
};

export type AmazonFullApiSchemaGetMessagingActionResponse = {
  _links?: {
  self: AmazonFullApiSchemaLinkObject;
  schema: AmazonFullApiSchemaLinkObject;
};
  _embedded?: {
  schema?: AmazonFullApiSchemaGetSchemaResponse;
};
  payload?: AmazonFullApiSchemaMessagingAction;
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaErrorList21 = ReadonlyArray<AmazonFullApiSchemaError22>;

export type AmazonFullApiSchemaAttachment = {
  uploadDestinationId: string;
  fileName: string;
};

export type AmazonFullApiSchemaSubscription = {
  subscriptionId: string;
  payloadVersion: string;
  destinationId: string;
  processingDirective?: AmazonFullApiSchemaProcessingDirective;
};

export type AmazonFullApiSchemaErrorList22 = ReadonlyArray<AmazonFullApiSchemaError23>;

export type AmazonFullApiSchemaProcessingDirective = {
  eventFilter?: AmazonFullApiSchemaEventFilter;
  filterExpression?: string;
};

export type AmazonFullApiSchemaTestNotification = {
  payloadVersion: string;
  testScenario?: string;
};

export type AmazonFullApiSchemaDestinationList = ReadonlyArray<AmazonFullApiSchemaDestination>;

export type AmazonFullApiSchemaDestinationResourceSpecification = {
  sqs?: AmazonFullApiSchemaSqsResource;
  eventBridge?: AmazonFullApiSchemaEventBridgeResourceSpecification;
};

export type AmazonFullApiSchemaDestination = {
  name: string;
  destinationId: string;
  resource: AmazonFullApiSchemaDestinationResource;
};

export type AmazonFullApiSchemaOrdersList = {
  Orders: AmazonFullApiSchemaOrderList4;
  NextToken?: string;
  LastUpdatedBefore?: string;
  CreatedBefore?: string;
};

export type AmazonFullApiSchemaErrorList23 = ReadonlyArray<AmazonFullApiSchemaError24>;

export type AmazonFullApiSchemaOrder2 = {
  AmazonOrderId: string;
  SellerOrderId?: string;
  PurchaseDate: string;
  LastUpdateDate: string;
  OrderStatus: "Pending" | "Unshipped" | "PartiallyShipped" | "Shipped" | "Canceled" | "Unfulfillable" | "InvoiceUnconfirmed" | "PendingAvailability";
  FulfillmentChannel?: "MFN" | "AFN";
  SalesChannel?: string;
  OrderChannel?: string;
  ShipServiceLevel?: string;
  OrderTotal?: AmazonFullApiSchemaMoney3;
  NumberOfItemsShipped?: number;
  NumberOfItemsUnshipped?: number;
  PaymentExecutionDetail?: AmazonFullApiSchemaPaymentExecutionDetailItemList;
  PaymentMethod?: "COD" | "CVS" | "Other";
  PaymentMethodDetails?: AmazonFullApiSchemaPaymentMethodDetailItemList;
  MarketplaceId?: string;
  ShipmentServiceLevelCategory?: string;
  EasyShipShipmentStatus?: AmazonFullApiSchemaEasyShipShipmentStatus;
  CbaDisplayableShippingLabel?: string;
  OrderType?: "StandardOrder" | "LongLeadTimeOrder" | "Preorder" | "BackOrder" | "SourcingOnDemandOrder";
  EarliestShipDate?: string;
  LatestShipDate?: string;
  EarliestDeliveryDate?: string;
  LatestDeliveryDate?: string;
  IsBusinessOrder?: boolean;
  IsPrime?: boolean;
  IsPremiumOrder?: boolean;
  IsGlobalExpressEnabled?: boolean;
  ReplacedOrderId?: string;
  IsReplacementOrder?: boolean;
  PromiseResponseDueDate?: string;
  IsEstimatedShipDateSet?: boolean;
  IsSoldByAB?: boolean;
  IsIBA?: boolean;
  DefaultShipFromLocationAddress?: AmazonFullApiSchemaAddress9;
  BuyerInvoicePreference?: "INDIVIDUAL" | "BUSINESS";
  BuyerTaxInformation?: AmazonFullApiSchemaBuyerTaxInformation;
  FulfillmentInstruction?: AmazonFullApiSchemaFulfillmentInstruction;
  IsISPU?: boolean;
  IsAccessPointOrder?: boolean;
  MarketplaceTaxInfo?: AmazonFullApiSchemaMarketplaceTaxInfo;
  SellerDisplayName?: string;
  ShippingAddress?: AmazonFullApiSchemaAddress9;
  BuyerInfo?: AmazonFullApiSchemaBuyerInfo;
  AutomatedShippingSettings?: AmazonFullApiSchemaAutomatedShippingSettings;
  HasRegulatedItems?: boolean;
  ElectronicInvoiceStatus?: AmazonFullApiSchemaElectronicInvoiceStatus;
};

export type AmazonFullApiSchemaOrderBuyerInfo = {
  AmazonOrderId: string;
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: AmazonFullApiSchemaBuyerTaxInfo;
  PurchaseOrderNumber?: string;
};

export type AmazonFullApiSchemaOrderAddress = {
  AmazonOrderId: string;
  BuyerCompanyName?: string;
  ShippingAddress?: AmazonFullApiSchemaAddress9;
  DeliveryPreferences?: AmazonFullApiSchemaDeliveryPreferences2;
};

export type AmazonFullApiSchemaOrderItemsList = {
  OrderItems: AmazonFullApiSchemaOrderItemList;
  NextToken?: string;
  AmazonOrderId: string;
};

export type AmazonFullApiSchemaOrderItemsBuyerInfoList = {
  OrderItems: AmazonFullApiSchemaOrderItemBuyerInfoList;
  NextToken?: string;
  AmazonOrderId: string;
};

export type AmazonFullApiSchemaMarketplaceId2 = string;

export type AmazonFullApiSchemaShipmentStatus = "ReadyForPickup" | "PickedUp" | "RefusedPickup";

export type AmazonFullApiSchemaOrderItems = ReadonlyArray<{
  orderItemId?: string;
  quantity?: number;
}>;

export type AmazonFullApiSchemaOrderRegulatedInfo = {
  AmazonOrderId: string;
  RegulatedInformation: AmazonFullApiSchemaRegulatedInformation;
  RequiresDosageLabel: boolean;
  RegulatedOrderVerificationStatus: AmazonFullApiSchemaRegulatedOrderVerificationStatus;
};

export type AmazonFullApiSchemaUpdateVerificationStatusRequestBody = {
  status?: AmazonFullApiSchemaVerificationStatus;
  externalReviewerId: string;
  rejectionReasonId?: string;
  verificationDetails?: AmazonFullApiSchemaVerificationDetails;
};

export type AmazonFullApiSchemaPackageDetail = {
  packageReferenceId: AmazonFullApiSchemaPackageReferenceId;
  carrierCode: string;
  carrierName?: string;
  shippingMethod?: string;
  trackingNumber: string;
  shipDate: string;
  shipFromSupplySourceId?: string;
  orderItems: AmazonFullApiSchemaConfirmShipmentOrderItemsList;
};

export type AmazonFullApiSchemaOrder3 = {
  orderId: string;
  orderAliases?: ReadonlyArray<AmazonFullApiSchemaAlias>;
  createdTime: string;
  lastUpdatedTime: string;
  programs?: ReadonlyArray<string>;
  associatedOrders?: ReadonlyArray<AmazonFullApiSchemaAssociatedOrder>;
  salesChannel: AmazonFullApiSchemaSalesChannel;
  buyer?: AmazonFullApiSchemaBuyer;
  recipient?: AmazonFullApiSchemaRecipient;
  proceeds?: AmazonFullApiSchemaOrderProceeds;
  payment?: AmazonFullApiSchemaOrderPayment;
  tax?: AmazonFullApiSchemaOrderTax;
  fulfillment?: AmazonFullApiSchemaOrderFulfillment;
  orderItems: ReadonlyArray<AmazonFullApiSchemaOrderItem>;
  packages?: ReadonlyArray<AmazonFullApiSchemaOrderPackage>;
  fulfillmentOrders?: ReadonlyArray<AmazonFullApiSchemaFulfillmentOrder2>;
};

export type AmazonFullApiSchemaPagination7 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaFeesEstimateRequest = {
  MarketplaceId: string;
  IsAmazonFulfilled?: boolean;
  PriceToEstimateFees: AmazonFullApiSchemaPriceToEstimateFees;
  Identifier: string;
  OptionalFulfillmentProgram?: AmazonFullApiSchemaOptionalFulfillmentProgram;
};

export type AmazonFullApiSchemaGetMyFeesEstimateResult = {
  FeesEstimateResult?: AmazonFullApiSchemaFeesEstimateResult;
};

export type AmazonFullApiSchemaErrorList24 = ReadonlyArray<AmazonFullApiSchemaError25>;

export type AmazonFullApiSchemaFeesEstimateByIdRequest = {
  FeesEstimateRequest?: AmazonFullApiSchemaFeesEstimateRequest;
  IdType: AmazonFullApiSchemaIdType;
  IdValue: string;
};

export type AmazonFullApiSchemaFeesEstimateResult = {
  Status?: string;
  FeesEstimateIdentifier?: AmazonFullApiSchemaFeesEstimateIdentifier;
  FeesEstimate?: AmazonFullApiSchemaFeesEstimate;
  Error?: AmazonFullApiSchemaFeesEstimateError;
};

export type AmazonFullApiSchemaPriceList = ReadonlyArray<AmazonFullApiSchemaPrice>;

export type AmazonFullApiSchemaErrorList25 = ReadonlyArray<AmazonFullApiSchemaError26>;

export type AmazonFullApiSchemaGetOffersResult = {
  marketplaceId: string;
  ASIN?: string;
  SKU?: string;
  ItemCondition: AmazonFullApiSchemaConditionType;
  status: string;
  Identifier: AmazonFullApiSchemaItemIdentifier;
  Summary: AmazonFullApiSchemaSummary;
  Offers: AmazonFullApiSchemaOfferDetailList;
};

export type AmazonFullApiSchemaItemOffersRequestList = ReadonlyArray<AmazonFullApiSchemaItemOffersRequest>;

export type AmazonFullApiSchemaItemOffersResponseList = ReadonlyArray<AmazonFullApiSchemaItemOffersResponse>;

export type AmazonFullApiSchemaListingOffersRequestList = ReadonlyArray<AmazonFullApiSchemaListingOffersRequest>;

export type AmazonFullApiSchemaListingOffersResponseList = ReadonlyArray<AmazonFullApiSchemaListingOffersResponse>;

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceRequestList = ReadonlyArray<AmazonFullApiSchemaFeaturedOfferExpectedPriceRequest>;

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceResponseList = ReadonlyArray<AmazonFullApiSchemaFeaturedOfferExpectedPriceResponse>;

export type AmazonFullApiSchemaCompetitiveSummaryRequestList = ReadonlyArray<AmazonFullApiSchemaCompetitiveSummaryRequest>;

export type AmazonFullApiSchemaCompetitiveSummaryResponseList = ReadonlyArray<AmazonFullApiSchemaCompetitiveSummaryResponse>;

export type AmazonFullApiSchemaProductType = {
  name: string;
  displayName: string;
  marketplaceIds: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaSchemaLink = {
  link: {
  resource: string;
  verb: "GET";
};
  checksum: string;
};

export type AmazonFullApiSchemaPropertyGroup = {
  title?: string;
  description?: string;
  propertyNames?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaProductTypeVersion = {
  version: string;
  latest: boolean;
  releaseCandidate?: boolean;
};

export type AmazonFullApiSchemaAggregationFrequency = "DAY" | "WEEK" | "MONTH" | "QUARTER" | "YEAR";

export type AmazonFullApiSchemaTimeInterval = {
  startDate: string;
  endDate: string;
};

export type AmazonFullApiSchemaMetric = "SHIPPED_SUBSCRIPTION_UNITS" | "TOTAL_SUBSCRIPTIONS_REVENUE" | "ACTIVE_SUBSCRIPTIONS" | "NOT_DELIVERED_DUE_TO_OOS" | "SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE" | "LOST_REVENUE_DUE_TO_OOS" | "SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS" | "COUPONS_REVENUE_PENETRATION" | "REVENUE_BY_DELIVERIES" | "SUBSCRIBER_RETENTION" | "REVENUE_PENETRATION_BY_SELLER_FUNDING" | "SHARE_OF_COUPON_SUBSCRIPTIONS" | "SUBSCRIBER_LIFETIME_VALUE_BY_CUSTOMER_SEGMENT" | "SIGNUP_CONVERSION_BY_SELLER_FUNDING" | "REVENUE_PENETRATION";

export type AmazonFullApiSchemaGetSellingPartnerMetricsRequestFilters = {
  asins?: ReadonlyArray<string>;
  skus?: ReadonlyArray<string>;
  fulfillmentChannelTypes?: ReadonlyArray<AmazonFullApiSchemaFulfillmentChannelType>;
  brandNames?: ReadonlyArray<string>;
  productGroups?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaTimePeriodType = "PERFORMANCE" | "FORECAST";

export type AmazonFullApiSchemaMarketplaceId3 = string;

export type AmazonFullApiSchemaProgramTypes = ReadonlyArray<AmazonFullApiSchemaProgramType2>;

export type AmazonFullApiSchemaGetSellingPartnerMetricsResponseMetric = {
  notDeliveredDueToOOS?: number;
  totalSubscriptionsRevenue?: number;
  shippedSubscriptionUnits?: number;
  activeSubscriptions?: number;
  subscriberAverageRevenue?: number;
  nonSubscriberAverageRevenue?: number;
  lostRevenueDueToOOS?: number;
  subscriberAverageReorders?: number;
  nonSubscriberAverageReorders?: number;
  couponsRevenuePenetration?: number;
  revenueFromSubscriptionsWithMultipleDeliveries?: number;
  revenueFromActiveSubscriptionsWithSingleDelivery?: number;
  revenueFromCancelledSubscriptionsAfterSingleDelivery?: number;
  subscriberRetentionFor30Days?: number;
  subscriberRetentionFor90Days?: number;
  revenuePenetrationFor0PercentSellerFunding?: number;
  revenuePenetrationFor5PercentSellerFunding?: number;
  revenuePenetrationFor10PercentSellerFunding?: number;
  revenuePenetrationFor5PlusPercentSellerFunding?: number;
  shareOfCouponSubscriptions?: number;
  nonSubscriberLifeTimeValueFromOTP?: number;
  lostSubscriberLifeTimeValueFromOTP?: number;
  lostSubscriberLifeTimeValueFromSNS?: number;
  growingSubscriberLifeTimeValueFromOTP?: number;
  growingSubscriberLifeTimeValueFromSNS?: number;
  establishedSubscriberLifeTimeValueFromOTP?: number;
  establishedSubscriberLifeTimeValueFromSNS?: number;
  signupConversionFor0PercentSellerFunding?: number;
  signupConversionFor5PercentSellerFunding?: number;
  signupConversionFor10PercentSellerFunding?: number;
  signupConversionFor5PlusPercentSellerFunding?: number;
  revenuePenetration?: number;
  timeInterval?: AmazonFullApiSchemaTimeInterval;
  currencyCode?: string;
};

export type AmazonFullApiSchemaListOfferMetricsRequestPagination = {
  limit: number;
  offset: number;
};

export type AmazonFullApiSchemaListOfferMetricsRequestSort = {
  order: AmazonFullApiSchemaSortOrder;
  key: AmazonFullApiSchemaListOfferMetricsSortKey;
};

export type AmazonFullApiSchemaListOfferMetricsRequestFilters = {
  aggregationFrequency?: AmazonFullApiSchemaAggregationFrequency;
  timeInterval: AmazonFullApiSchemaTimeInterval;
  timePeriodType: AmazonFullApiSchemaTimePeriodType;
  marketplaceId: AmazonFullApiSchemaMarketplaceId3;
  programTypes: AmazonFullApiSchemaProgramTypes;
  asins?: ReadonlyArray<string>;
  skus?: ReadonlyArray<string>;
  fulfillmentChannelTypes?: ReadonlyArray<AmazonFullApiSchemaFulfillmentChannelType>;
  brandNames?: ReadonlyArray<string>;
  productGroups?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaListOfferMetricsResponseOffer = {
  asin?: string;
  sku?: string;
  fulfillmentChannelType?: AmazonFullApiSchemaFulfillmentChannelType;
  brandName?: string;
  productGroup?: string;
  notDeliveredDueToOOS?: number;
  totalSubscriptionsRevenue?: number;
  shippedSubscriptionUnits?: number;
  activeSubscriptions?: number;
  revenuePenetration?: number;
  lostRevenueDueToOOS?: number;
  couponsRevenuePenetration?: number;
  shareOfCouponSubscriptions?: number;
  next30DayTotalSubscriptionsRevenue?: number;
  next60DayTotalSubscriptionsRevenue?: number;
  next90DayTotalSubscriptionsRevenue?: number;
  next30DayShippedSubscriptionUnits?: number;
  next60DayShippedSubscriptionUnits?: number;
  next90DayShippedSubscriptionUnits?: number;
  timeInterval?: AmazonFullApiSchemaTimeInterval;
  currencyCode?: string;
};

export type AmazonFullApiSchemaPaginationResponse = {
  totalResults?: number;
};

export type AmazonFullApiSchemaListOffersRequestPagination = {
  limit: number;
  offset: number;
};

export type AmazonFullApiSchemaListOffersRequestFilters = {
  marketplaceId: AmazonFullApiSchemaMarketplaceId3;
  skus?: ReadonlyArray<string>;
  asins?: ReadonlyArray<string>;
  eligibilities?: ReadonlyArray<AmazonFullApiSchemaEligibilityStatus>;
  preferences?: AmazonFullApiSchemaPreference;
  promotions?: AmazonFullApiSchemaPromotion;
  programTypes: AmazonFullApiSchemaProgramTypes;
  deliveriesConditions?: ReadonlyArray<"NEXT_30_DAYS_DELIVERIES_PAUSED_PRICING" | "NEXT_30_DAYS_DELIVERIES_PAUSED_NON_BUYABLE" | "NEXT_30_DAYS_DELIVERIES_AT_LOW_INVENTORY_RISK_ONLY" | "NEXT_30_DAYS_DELIVERIES_AT_LOW_INVENTORY_RISK" | "NO_ISSUES_FOR_NEXT_30_DAYS_DELIVERIES">;
};

export type AmazonFullApiSchemaListOffersRequestSort = {
  order: AmazonFullApiSchemaSortOrder;
  key: AmazonFullApiSchemaListOffersSortKey;
};

export type AmazonFullApiSchemaListOffersResponseOffer = {
  sku?: string;
  asin?: string;
  marketplaceId?: AmazonFullApiSchemaMarketplaceId3;
  eligibility?: AmazonFullApiSchemaEligibilityStatus;
  offerProgramConfiguration?: AmazonFullApiSchemaOfferProgramConfiguration;
  programType?: AmazonFullApiSchemaProgramType2;
  vendorCodes?: ReadonlyArray<string>;
  price?: number;
  priceCurrencyCode?: string;
  inventory?: number;
  stockRisk?: string;
  deliveriesConditions?: ReadonlyArray<AmazonFullApiSchemaDeliveriesCondition>;
  subscriptions?: number;
  fulfillmentNetworkIDType?: string;
  forecastDeliveries?: AmazonFullApiSchemaForecastDeliveries;
};

export type AmazonFullApiSchemaReportList = ReadonlyArray<AmazonFullApiSchemaReport>;

export type AmazonFullApiSchemaReportOptions = {
  readonly [key: string]: string | undefined;
};

export type AmazonFullApiSchemaError9 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaOrderMetricsList = ReadonlyArray<AmazonFullApiSchemaOrderMetricsInterval>;

export type AmazonFullApiSchemaErrorList26 = ReadonlyArray<AmazonFullApiSchemaError27>;

export type AmazonFullApiSchemaBankAccountNumberFormat = "IBAN" | "BBAN";

export type AmazonFullApiSchemaBankAccountOwnershipType = "THIRD_PARTY" | "SELF";

export type AmazonFullApiSchemaBankNumberFormat = "BIC" | "BASIC";

export type AmazonFullApiSchemaBankAccountHolderStatus = "ACTIVE" | "INACTIVE" | "UNDER_REVIEW" | "VERIFICATION_FAILED";

export type AmazonFullApiSchemaBalance = {
  accountId: string;
  balanceType?: AmazonFullApiSchemaBalanceType;
  balanceAmount: AmazonFullApiSchemaBigDecimal;
  balanceCurrency: string;
  lastUpdateDate: string;
};

export type AmazonFullApiSchemaCurrency = {
  currencyCode?: string;
  currencyAmount?: AmazonFullApiSchemaBigDecimal;
};

export type AmazonFullApiSchemaFxRateDetails = {
  fxRateId: string;
  baseRate: AmazonFullApiSchemaBigDecimal;
  effectiveFxRate: AmazonFullApiSchemaBigDecimal;
  rateDirection: AmazonFullApiSchemaRateDirection;
};

export type AmazonFullApiSchemaFee = {
  feeId: string;
  feeType: AmazonFullApiSchemaFeeType;
  feeRateValue: string;
  feeAmount: AmazonFullApiSchemaCurrency;
};

export type AmazonFullApiSchemaTransactionInstrumentDetails = {
  bankAccount: AmazonFullApiSchemaBankAccount;
  bankAccountNumber: string;
  accountHolderName: string;
};

export type AmazonFullApiSchemaPayeeContactInformation = {
  payeeFirstName: string;
  payeeMiddleName?: string;
  payeeLastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country?: string;
  countryCode: string;
  emailAddress: string;
  phoneNumber: string;
  payeeEntityType: AmazonFullApiSchemaPayeeEntityType;
};

export type AmazonFullApiSchemaTransactionType = "CREDIT" | "DEBIT";

export type AmazonFullApiSchemaTransactionStatus3 = "EXPIRED" | "FAILED" | "FAILED_CREDITS_APPLIED" | "IN_PROGRESS" | "PENDING_USER_APPROVAL" | "SUCCESSFUL";

export type AmazonFullApiSchemaTransactionAccount = {
  accountId?: string;
  bankAccountHolderName?: string;
  bankName: string;
  bankAccountNumberFormat: AmazonFullApiSchemaBankAccountNumberFormat;
  bankAccountNumberTail?: string;
  bankAccountCountryCode?: string;
  bankAccountCurrency: string;
};

export type AmazonFullApiSchemaTransferScheduleInformation = {
  scheduleStartDate?: string;
  scheduleEndDate?: string;
  scheduleExpression?: AmazonFullApiSchemaScheduleExpression;
  scheduleType?: AmazonFullApiSchemaScheduleTransferType;
};

export type AmazonFullApiSchemaPaymentPreference = {
  paymentPreferencePaymentType: AmazonFullApiSchemaPaymentPreferencePaymentType;
  value: AmazonFullApiSchemaBigDecimal;
};

export type AmazonFullApiSchemaTransferScheduleStatus = "ENABLED" | "DISABLED" | "EXPIRED" | "DELETED";

export type AmazonFullApiSchemaTransferScheduleFailures = {
  transferScheduleFailureDate: string;
  transferScheduleFailureReason: string;
};

export type AmazonFullApiSchemaMarketplaceParticipationList = ReadonlyArray<AmazonFullApiSchemaMarketplaceParticipation>;

export type AmazonFullApiSchemaErrorList27 = ReadonlyArray<AmazonFullApiSchemaError28>;

export type AmazonFullApiSchemaAccount = {
  marketplaceParticipationList: AmazonFullApiSchemaMarketplaceParticipationList;
  businessType: "CHARITY" | "CRAFTSMAN" | "NATURAL_PERSON_COMPANY" | "PUBLIC_LISTED" | "PRIVATE_LIMITED" | "SOLE_PROPRIETORSHIP" | "STATE_OWNED" | "INDIVIDUAL";
  sellingPlan: "PROFESSIONAL" | "INDIVIDUAL";
  business?: AmazonFullApiSchemaBusiness;
  primaryContact?: AmazonFullApiSchemaPrimaryContact;
};

export type AmazonFullApiSchemaServiceJob = {
  createTime?: string;
  serviceJobId?: AmazonFullApiSchemaServiceJobId;
  serviceJobStatus?: "NOT_SERVICED" | "CANCELLED" | "COMPLETED" | "PENDING_SCHEDULE" | "NOT_FULFILLABLE" | "HOLD" | "PAYMENT_DECLINED";
  scopeOfWork?: AmazonFullApiSchemaScopeOfWork;
  seller?: AmazonFullApiSchemaSeller;
  serviceJobProvider?: AmazonFullApiSchemaServiceJobProvider;
  preferredAppointmentTimes?: ReadonlyArray<AmazonFullApiSchemaAppointmentTime>;
  appointments?: ReadonlyArray<AmazonFullApiSchemaAppointment>;
  serviceOrderId?: AmazonFullApiSchemaOrderId;
  productOrderIds?: ReadonlyArray<string>;
  trackingIds?: ReadonlyArray<string>;
  marketplaceId?: string;
  storeId?: string;
  buyer?: AmazonFullApiSchemaBuyer2;
  associatedItems?: ReadonlyArray<AmazonFullApiSchemaAssociatedItem>;
  serviceLocation?: AmazonFullApiSchemaServiceLocation;
  payments?: ReadonlyArray<AmazonFullApiSchemaPayment>;
};

export type AmazonFullApiSchemaErrorList28 = ReadonlyArray<AmazonFullApiSchemaError29>;

export type AmazonFullApiSchemaJobListing = {
  totalResultSize?: number;
  nextPageToken?: string;
  previousPageToken?: string;
  jobs?: ReadonlyArray<AmazonFullApiSchemaServiceJob>;
};

export type AmazonFullApiSchemaAppointmentTimeInput = {
  startTime: string;
  durationInMinutes?: number;
};

export type AmazonFullApiSchemaAppointmentId = string;

export type AmazonFullApiSchemaWarningList = ReadonlyArray<AmazonFullApiSchemaWarning>;

export type AmazonFullApiSchemaRescheduleReasonCode = string;

export type AmazonFullApiSchemaAppointmentResources = ReadonlyArray<AmazonFullApiSchemaAppointmentResource>;

export type AmazonFullApiSchemaDateTimeRange = {
  startTime: string;
  endTime: string;
};

export type AmazonFullApiSchemaFulfillmentTime = {
  startTime?: string;
  endTime?: string;
};

export type AmazonFullApiSchemaFulfillmentDocuments = ReadonlyArray<AmazonFullApiSchemaFulfillmentDocument>;

export type AmazonFullApiSchemaCapacityType = "SCHEDULED_CAPACITY" | "AVAILABLE_CAPACITY" | "ENCUMBERED_CAPACITY" | "RESERVED_CAPACITY";

export type AmazonFullApiSchemaRangeCapacity = {
  capacityType?: AmazonFullApiSchemaCapacityType;
  slots?: ReadonlyArray<AmazonFullApiSchemaRangeSlot>;
};

export type AmazonFullApiSchemaFixedSlot = {
  startDateTime?: string;
  scheduledCapacity?: number;
  availableCapacity?: number;
  encumberedCapacity?: number;
  reservedCapacity?: number;
};

export type AmazonFullApiSchemaAvailabilityRecords = ReadonlyArray<AmazonFullApiSchemaAvailabilityRecord>;

export type AmazonFullApiSchemaUpdateScheduleRecord = {
  availability?: AmazonFullApiSchemaAvailabilityRecord;
  warnings?: AmazonFullApiSchemaWarningList;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaReservation = {
  reservationId?: string;
  type: "APPOINTMENT" | "TRAVEL" | "VACATION" | "BREAK" | "TRAINING";
  availability: AmazonFullApiSchemaAvailabilityRecord;
};

export type AmazonFullApiSchemaCreateReservationRecord = {
  reservation?: AmazonFullApiSchemaReservation;
  warnings?: AmazonFullApiSchemaWarningList;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaUpdateReservationRecord = {
  reservation?: AmazonFullApiSchemaReservation;
  warnings?: AmazonFullApiSchemaWarningList;
  errors?: AmazonFullApiSchemaErrorList28;
};

export type AmazonFullApiSchemaAppointmentSlotReport = {
  schedulingType?: "REAL_TIME_SCHEDULING" | "NON_REAL_TIME_SCHEDULING";
  startTime?: string;
  endTime?: string;
  appointmentSlots?: ReadonlyArray<AmazonFullApiSchemaAppointmentSlot2>;
};

export type AmazonFullApiSchemaServiceDocumentUploadDestination = {
  uploadDestinationId: string;
  url: string;
  encryptionDetails: AmazonFullApiSchemaEncryptionDetails;
  headers?: {};
};

export type AmazonFullApiSchemaShipmentDetail = {
  WarehouseId?: string;
  AmazonOrderId?: string;
  AmazonShipmentId?: string;
  PurchaseDate?: string;
  ShippingAddress?: AmazonFullApiSchemaAddress10;
  PaymentMethodDetails?: AmazonFullApiSchemaPaymentMethodDetailItemList2;
  Payments?: AmazonFullApiSchemaPaymentInformationList2;
  MarketplaceId?: string;
  SellerId?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: AmazonFullApiSchemaBuyerTaxInfo2;
  MarketplaceTaxInfo?: AmazonFullApiSchemaMarketplaceTaxInfo2;
  SellerDisplayName?: string;
  ShipmentItems?: AmazonFullApiSchemaShipmentItems;
};

export type AmazonFullApiSchemaErrorList29 = ReadonlyArray<AmazonFullApiSchemaError30>;

export type AmazonFullApiSchemaBlob2 = string;

export type AmazonFullApiSchemaShipmentInvoiceStatusResponse = {
  Shipments?: AmazonFullApiSchemaShipmentInvoiceStatusInfo;
};

export type AmazonFullApiSchemaClientReferenceId = string;

export type AmazonFullApiSchemaAddress5 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  stateOrRegion: AmazonFullApiSchemaStateOrRegion;
  city: AmazonFullApiSchemaCity2;
  countryCode: AmazonFullApiSchemaCountryCode3;
  postalCode: AmazonFullApiSchemaPostalCode2;
  email?: string;
  copyEmails?: ReadonlyArray<string>;
  phoneNumber?: string;
};

export type AmazonFullApiSchemaContainerList = ReadonlyArray<AmazonFullApiSchemaContainer2>;

export type AmazonFullApiSchemaCreateShipmentResult = {
  shipmentId: AmazonFullApiSchemaShipmentId2;
  eligibleRates: AmazonFullApiSchemaRateList;
};

export type AmazonFullApiSchemaErrorList30 = ReadonlyArray<AmazonFullApiSchemaError31>;

export type AmazonFullApiSchemaShipment4 = {
  shipmentId: AmazonFullApiSchemaShipmentId2;
  clientReferenceId: AmazonFullApiSchemaClientReferenceId;
  shipFrom: AmazonFullApiSchemaAddress5;
  shipTo: AmazonFullApiSchemaAddress5;
  acceptedRate?: AmazonFullApiSchemaAcceptedRate;
  shipper?: AmazonFullApiSchemaParty;
  containers: AmazonFullApiSchemaContainerList;
};

export type AmazonFullApiSchemaRateId = string;

export type AmazonFullApiSchemaLabelSpecification = {
  labelFormat: "PNG";
  labelStockSize: "4x6";
};

export type AmazonFullApiSchemaPurchaseLabelsResult = {
  shipmentId: AmazonFullApiSchemaShipmentId2;
  clientReferenceId?: AmazonFullApiSchemaClientReferenceId;
  acceptedRate: AmazonFullApiSchemaAcceptedRate;
  labelResults: AmazonFullApiSchemaLabelResultList;
};

export type AmazonFullApiSchemaRetrieveShippingLabelResult = {
  labelStream: AmazonFullApiSchemaLabelStream;
  labelSpecification: AmazonFullApiSchemaLabelSpecification;
};

export type AmazonFullApiSchemaServiceType = "Amazon Shipping Ground" | "Amazon Shipping Standard" | "Amazon Shipping Premium";

export type AmazonFullApiSchemaPurchaseShipmentResult = {
  shipmentId: AmazonFullApiSchemaShipmentId2;
  serviceRate: AmazonFullApiSchemaServiceRate;
  labelResults: AmazonFullApiSchemaLabelResultList;
};

export type AmazonFullApiSchemaServiceTypeList = ReadonlyArray<AmazonFullApiSchemaServiceType>;

export type AmazonFullApiSchemaContainerSpecificationList = ReadonlyArray<AmazonFullApiSchemaContainerSpecification>;

export type AmazonFullApiSchemaGetRatesResult = {
  serviceRates: AmazonFullApiSchemaServiceRateList;
};

export type AmazonFullApiSchemaAccount2 = {
  accountId: AmazonFullApiSchemaAccountId2;
};

export type AmazonFullApiSchemaTrackingInformation = {
  trackingId: AmazonFullApiSchemaTrackingId3;
  summary: AmazonFullApiSchemaTrackingSummary;
  promisedDeliveryDate: AmazonFullApiSchemaPromisedDeliveryDate;
  eventHistory: AmazonFullApiSchemaEventList;
};

export type AmazonFullApiSchemaAddress6 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  companyName?: string;
  stateOrRegion: AmazonFullApiSchemaStateOrRegion2;
  city: AmazonFullApiSchemaCity3;
  countryCode: AmazonFullApiSchemaCountryCode4;
  postalCode: AmazonFullApiSchemaPostalCode3;
  email?: string;
  phoneNumber?: string;
  geocode?: AmazonFullApiSchemaGeocode;
};

export type AmazonFullApiSchemaShipperInstruction = {
  deliveryNotes?: string;
};

export type AmazonFullApiSchemaPackageList = ReadonlyArray<AmazonFullApiSchemaPackage3>;

export type AmazonFullApiSchemaValueAddedServiceDetails = {
  collectOnDelivery?: AmazonFullApiSchemaCollectOnDelivery;
};

export type AmazonFullApiSchemaTaxDetailList = ReadonlyArray<AmazonFullApiSchemaTaxDetail>;

export type AmazonFullApiSchemaChannelDetails = {
  channelType: AmazonFullApiSchemaChannelType;
  amazonOrderDetails?: AmazonFullApiSchemaAmazonOrderDetails;
  amazonShipmentDetails?: AmazonFullApiSchemaAmazonShipmentDetails;
};

export type AmazonFullApiSchemaClientReferenceDetails = ReadonlyArray<AmazonFullApiSchemaClientReferenceDetail>;

export type AmazonFullApiSchemaShipmentType = "FORWARD" | "RETURNS";

export type AmazonFullApiSchemaAccessPointDetails = {
  accessPointId?: AmazonFullApiSchemaAccessPointId;
};

export type AmazonFullApiSchemaCarrierAccounts = ReadonlyArray<AmazonFullApiSchemaCarrierAccount>;

export type AmazonFullApiSchemaGetRatesResult2 = {
  requestToken: AmazonFullApiSchemaRequestToken;
  rates: AmazonFullApiSchemaRateList2;
  ineligibleRates?: AmazonFullApiSchemaIneligibleRateList;
};

export type AmazonFullApiSchemaRequestedDocumentSpecification = {
  format: AmazonFullApiSchemaDocumentFormat;
  size: AmazonFullApiSchemaDocumentSize;
  dpi?: AmazonFullApiSchemaDpi;
  pageLayout?: AmazonFullApiSchemaPageLayout;
  needFileJoining: AmazonFullApiSchemaNeedFileJoining;
  requestedDocumentTypes: ReadonlyArray<AmazonFullApiSchemaDocumentType>;
  requestedLabelCustomization?: AmazonFullApiSchemaRequestedLabelCustomization;
};

export type AmazonFullApiSchemaDirectPurchaseResult = {
  shipmentId: AmazonFullApiSchemaShipmentId3;
  packageDocumentDetailList?: AmazonFullApiSchemaPackageDocumentDetailList;
};

export type AmazonFullApiSchemaRequestToken = string;

export type AmazonFullApiSchemaRateId2 = string;

export type AmazonFullApiSchemaRequestedValueAddedServiceList = ReadonlyArray<AmazonFullApiSchemaRequestedValueAddedService>;

export type AmazonFullApiSchemaPurchaseShipmentResult2 = {
  shipmentId: AmazonFullApiSchemaShipmentId3;
  packageDocumentDetails: AmazonFullApiSchemaPackageDocumentDetailList;
  promise: AmazonFullApiSchemaPromise;
  benefits?: AmazonFullApiSchemaBenefits;
};

export type AmazonFullApiSchemaGoodsOwner = {
  merchantId: AmazonFullApiSchemaMerchantId;
};

export type AmazonFullApiSchemaOneClickShipmentValueAddedServiceDetails = ReadonlyArray<AmazonFullApiSchemaOneClickShipmentValueAddedService>;

export type AmazonFullApiSchemaServiceSelection = {
  serviceId: AmazonFullApiSchemaServiceIds;
};

export type AmazonFullApiSchemaOneClickShipmentResult = {
  shipmentId: AmazonFullApiSchemaShipmentId3;
  packageDocumentDetails: AmazonFullApiSchemaPackageDocumentDetailList;
  promise: AmazonFullApiSchemaPromise;
  carrier: AmazonFullApiSchemaCarrier2;
  service: AmazonFullApiSchemaService;
  totalCharge: AmazonFullApiSchemaCurrency2;
};

export type AmazonFullApiSchemaGetTrackingResult = {
  trackingId: AmazonFullApiSchemaTrackingId;
  alternateLegTrackingId: AmazonFullApiSchemaAlternateLegTrackingId;
  eventHistory: ReadonlyArray<AmazonFullApiSchemaEvent>;
  promisedDeliveryDate: string;
  summary: AmazonFullApiSchemaTrackingSummary2;
};

export type AmazonFullApiSchemaGetShipmentDocumentsResult = {
  shipmentId: AmazonFullApiSchemaShipmentId3;
  packageDocumentDetail: AmazonFullApiSchemaPackageDocumentDetail;
  benefits?: AmazonFullApiSchemaBenefits;
};

export type AmazonFullApiSchemaCancelShipmentResult = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaGetAdditionalInputsResult = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaLinkableCarriersList = ReadonlyArray<AmazonFullApiSchemaLinkableCarrier>;

export type AmazonFullApiSchemaActiveAccounts = ReadonlyArray<AmazonFullApiSchemaActiveAccount>;

export type AmazonFullApiSchemaCarrierAccountType = string;

export type AmazonFullApiSchemaCarrierAccountAttributes = ReadonlyArray<AmazonFullApiSchemaCarrierAccountAttribute>;

export type AmazonFullApiSchemaAccountStatus = "ACTIVE" | "INACTIVE" | "PENDING" | "SUSPENDED";

export type AmazonFullApiSchemaAccountId = string;

export type AmazonFullApiSchemaCarrierId = string;

export type AmazonFullApiSchemaCollectionsFormDocument = {
  base64EncodedContent?: string;
  documentFormat?: string;
};

export type AmazonFullApiSchemaDateRange2 = {
  startDate?: string;
  endDate?: string;
};

export type AmazonFullApiSchemaCollectionFormsHistoryRecordList = ReadonlyArray<AmazonFullApiSchemaCollectionFormsHistoryRecord>;

export type AmazonFullApiSchemaUnmanifestedCarrierInformationList = ReadonlyArray<AmazonFullApiSchemaUnmanifestedCarrierInformation>;

export type AmazonFullApiSchemaGetAccessPointsResult = {
  accessPointsMap: AmazonFullApiSchemaAccessPointsMap;
};

export type AmazonFullApiSchemaTrackingId = string;

export type AmazonFullApiSchemaNdrAction = "RESCHEDULE" | "REATTEMPT" | "RTO";

export type AmazonFullApiSchemaNdrRequestData = {
  rescheduleDate?: string;
  additionalAddressNotes?: AmazonFullApiSchemaAdditionalAddressNotes;
};

export type AmazonFullApiSchemaError10 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaCurrency2 = {
  value: number;
  unit: string;
};

export type AmazonFullApiSchemaClaimReason = "LOST_IN_TRANSIT" | "DAMAGED_IN_TRANSIT" | "DELIVERED_NOT_RECEIVED" | "ITEM_MISSING_SWITCHEROO" | "COD_ABUSE";

export type AmazonFullApiSchemaClaimProofURLs = ReadonlyArray<string>;

export type AmazonFullApiSchemaSettlementType = "REFUND" | "CERTIFICATE_OF_FACT";

export type AmazonFullApiSchemaClaimId = string;

export type AmazonFullApiSchemaLinkObject2 = {
  href: string;
  name?: string;
};

export type AmazonFullApiSchemaGetSolicitationActionResponse = {
  _links?: {
  self: AmazonFullApiSchemaLinkObject2;
  schema: AmazonFullApiSchemaLinkObject2;
};
  _embedded?: {
  schema?: AmazonFullApiSchemaGetSchemaResponse2;
};
  payload?: AmazonFullApiSchemaSolicitationsAction;
  errors?: AmazonFullApiSchemaErrorList31;
};

export type AmazonFullApiSchemaErrorList31 = ReadonlyArray<AmazonFullApiSchemaError32>;

export type AmazonFullApiSchemaSupplySourceList = ReadonlyArray<{
  alias?: AmazonFullApiSchemaSupplySourceAlias;
  supplySourceId?: AmazonFullApiSchemaSupplySourceId;
  supplySourceCode?: AmazonFullApiSchemaSupplySourceCode;
  address?: AmazonFullApiSchemaAddress7;
}>;

export type AmazonFullApiSchemaSupplySourceCode = string;

export type AmazonFullApiSchemaSupplySourceAlias = string;

export type AmazonFullApiSchemaAddress7 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaSupplySourceId = string;

export type AmazonFullApiSchemaSupplySourceStatusReadOnly = "Active" | "Inactive" | "Archived";

export type AmazonFullApiSchemaSupplySourceConfiguration = {
  operationalConfiguration?: AmazonFullApiSchemaOperationalConfiguration;
  timezone?: string;
};

export type AmazonFullApiSchemaSupplySourceCapabilities = {
  outbound?: AmazonFullApiSchemaOutboundCapability;
  services?: AmazonFullApiSchemaServicesCapability;
};

export type AmazonFullApiSchemaDateTime3 = string;

export type AmazonFullApiSchemaError11 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaSupplySourceStatus = "Active" | "Inactive";

export type AmazonFullApiSchemaRestrictedResource = {
  method: "GET" | "PUT" | "POST" | "DELETE";
  path: string;
  dataElements?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaUploadDestination = {
  uploadDestinationId?: string;
  url?: string;
  headers?: {};
};

export type AmazonFullApiSchemaErrorList32 = ReadonlyArray<AmazonFullApiSchemaError33>;

export type AmazonFullApiSchemaPagination8 = {
  nextToken?: string;
  previousToken?: string;
};

export type AmazonFullApiSchemaVehicle = {
  make: string;
  model: string;
  variantName?: string;
  bodyStyle?: string;
  driveType?: string;
  energy?: string;
  engineOutput?: ReadonlyArray<AmazonFullApiSchemaEngineOutput>;
  manufacturingStartDate?: AmazonFullApiSchemaMonthAndYear;
  manufacturingStopDate?: AmazonFullApiSchemaMonthAndYear;
  lastProcessedDate?: string;
  status?: AmazonFullApiSchemaVehicleStatusInCatalog;
  identifiers: ReadonlyArray<AmazonFullApiSchemaVehicleIdentifiers>;
};

export type AmazonFullApiSchemaInventoryUpdate = {
  sellingParty: AmazonFullApiSchemaPartyIdentification2;
  isFullUpdate: boolean;
  items: ReadonlyArray<AmazonFullApiSchemaItemDetails>;
};

export type AmazonFullApiSchemaTransactionReference3 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaErrorList33 = ReadonlyArray<AmazonFullApiSchemaError34>;

export type AmazonFullApiSchemaOrderList2 = {
  pagination?: AmazonFullApiSchemaPagination11;
  orders?: ReadonlyArray<AmazonFullApiSchemaOrder4>;
};

export type AmazonFullApiSchemaErrorList34 = ReadonlyArray<AmazonFullApiSchemaError35>;

export type AmazonFullApiSchemaOrder4 = {
  purchaseOrderNumber: string;
  orderDetails?: AmazonFullApiSchemaOrderDetails2;
};

export type AmazonFullApiSchemaOrderAcknowledgementItem = {
  purchaseOrderNumber: string;
  vendorOrderNumber: string;
  acknowledgementDate: string;
  acknowledgementStatus: AmazonFullApiSchemaAcknowledgementStatus;
  sellingParty: AmazonFullApiSchemaPartyIdentification3;
  shipFromParty: AmazonFullApiSchemaPartyIdentification3;
  itemAcknowledgements: ReadonlyArray<AmazonFullApiSchemaOrderItemAcknowledgement>;
};

export type AmazonFullApiSchemaTransactionId2 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaPagination9 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaOrderDetails = {
  customerOrderNumber: string;
  orderDate: string;
  orderStatus?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
  shipmentDetails: AmazonFullApiSchemaShipmentDetails2;
  taxTotal?: AmazonFullApiSchemaTaxItemDetails;
  sellingParty: AmazonFullApiSchemaPartyIdentification4;
  shipFromParty: AmazonFullApiSchemaPartyIdentification4;
  shipToParty: AmazonFullApiSchemaAddress11;
  billToParty: AmazonFullApiSchemaPartyIdentification4;
  hasCustomizableItems?: boolean;
  items: ReadonlyArray<AmazonFullApiSchemaOrderItem2>;
};

export type AmazonFullApiSchemaOrderAcknowledgementItem2 = {
  purchaseOrderNumber: string;
  vendorOrderNumber: string;
  acknowledgementDate: string;
  acknowledgementStatus: AmazonFullApiSchemaAcknowledgementStatus2;
  sellingParty: AmazonFullApiSchemaPartyIdentification4;
  shipFromParty: AmazonFullApiSchemaPartyIdentification4;
  itemAcknowledgements: ReadonlyArray<AmazonFullApiSchemaOrderItemAcknowledgement2>;
};

export type AmazonFullApiSchemaInvoiceDetail = {
  invoiceNumber: string;
  invoiceDate: string;
  referenceNumber?: string;
  remitToParty: AmazonFullApiSchemaPartyIdentification5;
  shipFromParty: AmazonFullApiSchemaPartyIdentification5;
  billToParty?: AmazonFullApiSchemaPartyIdentification5;
  shipToCountryCode?: string;
  paymentTermsCode?: string;
  invoiceTotal: AmazonFullApiSchemaMoney4;
  taxTotals?: ReadonlyArray<AmazonFullApiSchemaTaxDetail2>;
  additionalDetails?: ReadonlyArray<AmazonFullApiSchemaAdditionalDetails>;
  chargeDetails?: ReadonlyArray<AmazonFullApiSchemaChargeDetails>;
  items: ReadonlyArray<AmazonFullApiSchemaInvoiceItem>;
};

export type AmazonFullApiSchemaTransactionReference4 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaErrorList35 = ReadonlyArray<AmazonFullApiSchemaError36>;

export type AmazonFullApiSchemaOrderScenarioRequest = {
  sellingParty: AmazonFullApiSchemaPartyIdentification6;
  shipFromParty: AmazonFullApiSchemaPartyIdentification6;
};

export type AmazonFullApiSchemaTransaction2 = {
  transactionId: string;
  status: "FAILURE" | "PROCESSING" | "SUCCESS";
  testCaseData?: AmazonFullApiSchemaTestCaseData;
};

export type AmazonFullApiSchemaShippingLabelList2 = {
  pagination?: AmazonFullApiSchemaPagination12;
  shippingLabels?: ReadonlyArray<AmazonFullApiSchemaShippingLabel2>;
};

export type AmazonFullApiSchemaErrorList36 = ReadonlyArray<AmazonFullApiSchemaError37>;

export type AmazonFullApiSchemaShippingLabelRequest = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification7;
  shipFromParty: AmazonFullApiSchemaPartyIdentification7;
  containers?: ReadonlyArray<AmazonFullApiSchemaContainer3>;
};

export type AmazonFullApiSchemaTransactionReference5 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaShippingLabel2 = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification7;
  shipFromParty: AmazonFullApiSchemaPartyIdentification7;
  labelFormat: "PNG" | "ZPL";
  labelData: ReadonlyArray<AmazonFullApiSchemaLabelData2>;
};

export type AmazonFullApiSchemaShipmentConfirmation = {
  purchaseOrderNumber: string;
  shipmentDetails: AmazonFullApiSchemaShipmentDetails3;
  sellingParty: AmazonFullApiSchemaPartyIdentification7;
  shipFromParty: AmazonFullApiSchemaPartyIdentification7;
  items: ReadonlyArray<AmazonFullApiSchemaItem6>;
  containers?: ReadonlyArray<AmazonFullApiSchemaContainer3>;
};

export type AmazonFullApiSchemaShipmentStatusUpdate = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification7;
  shipFromParty: AmazonFullApiSchemaPartyIdentification7;
  statusUpdateDetails: AmazonFullApiSchemaStatusUpdateDetails;
};

export type AmazonFullApiSchemaCustomerInvoiceList2 = {
  pagination?: AmazonFullApiSchemaPagination12;
  customerInvoices?: ReadonlyArray<AmazonFullApiSchemaCustomerInvoice2>;
};

export type AmazonFullApiSchemaCustomerInvoice2 = {
  purchaseOrderNumber: string;
  content: string;
};

export type AmazonFullApiSchemaPackingSlipList2 = {
  pagination?: AmazonFullApiSchemaPagination12;
  packingSlips?: ReadonlyArray<AmazonFullApiSchemaPackingSlip2>;
};

export type AmazonFullApiSchemaPackingSlip2 = {
  purchaseOrderNumber: string;
  content: string;
  contentType?: "application/pdf";
};

export type AmazonFullApiSchemaPagination10 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaShippingLabelRequest2 = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification;
  shipFromParty: AmazonFullApiSchemaPartyIdentification;
  containers?: ReadonlyArray<AmazonFullApiSchemaContainer>;
};

export type AmazonFullApiSchemaPartyIdentification = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress12;
  taxRegistrationDetails?: ReadonlyArray<AmazonFullApiSchemaTaxRegistrationDetails>;
};

export type AmazonFullApiSchemaLabelData = {
  packageIdentifier?: string;
  trackingNumber?: string;
  shipMethod?: string;
  shipMethodName?: string;
  content: string;
};

export type AmazonFullApiSchemaContainer = {
  containerType: "Carton" | "Pallet";
  containerIdentifier: string;
  trackingNumber?: string;
  manifestId?: string;
  manifestDate?: string;
  shipMethod?: string;
  scacCode?: string;
  carrier?: string;
  containerSequenceNumber?: number;
  dimensions?: AmazonFullApiSchemaDimensions3;
  weight: AmazonFullApiSchemaWeight5;
  packedItems: ReadonlyArray<AmazonFullApiSchemaPackedItem>;
};

export type AmazonFullApiSchemaShipmentConfirmation2 = {
  purchaseOrderNumber: string;
  shipmentDetails: AmazonFullApiSchemaShipmentDetails4;
  sellingParty: AmazonFullApiSchemaPartyIdentification;
  shipFromParty: AmazonFullApiSchemaPartyIdentification;
  items: ReadonlyArray<AmazonFullApiSchemaItem7>;
  containers?: ReadonlyArray<AmazonFullApiSchemaContainer>;
};

export type AmazonFullApiSchemaShipmentStatusUpdate2 = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification;
  shipFromParty: AmazonFullApiSchemaPartyIdentification;
  statusUpdateDetails: AmazonFullApiSchemaStatusUpdateDetails2;
};

export type AmazonFullApiSchemaCarrierId2 = "SWA";

export type AmazonFullApiSchemaVendorContainerId = string;

export type AmazonFullApiSchemaPackages3 = ReadonlyArray<AmazonFullApiSchemaPackage4>;

export type AmazonFullApiSchemaContainerLabel = {
  containerTrackingNumber?: string;
  content: string;
  format: AmazonFullApiSchemaContainerLabelFormat;
};

export type AmazonFullApiSchemaTransactionStatus4 = {
  transactionStatus?: AmazonFullApiSchemaTransaction4;
};

export type AmazonFullApiSchemaErrorList37 = ReadonlyArray<AmazonFullApiSchemaError38>;

export type AmazonFullApiSchemaTransaction3 = {
  transactionId: string;
  status: "Failure" | "Processing" | "Success";
  errors?: AmazonFullApiSchemaErrorList42;
};

export type AmazonFullApiSchemaInvoice2 = {
  invoiceType: "Invoice" | "CreditNote";
  id: string;
  referenceNumber?: string;
  date: AmazonFullApiSchemaDateTime5;
  remitToParty: AmazonFullApiSchemaPartyIdentification8;
  shipToParty?: AmazonFullApiSchemaPartyIdentification8;
  shipFromParty?: AmazonFullApiSchemaPartyIdentification8;
  billToParty?: AmazonFullApiSchemaPartyIdentification8;
  paymentTerms?: AmazonFullApiSchemaPaymentTerms;
  invoiceTotal: AmazonFullApiSchemaMoney5;
  taxDetails?: ReadonlyArray<AmazonFullApiSchemaTaxDetails2>;
  additionalDetails?: ReadonlyArray<AmazonFullApiSchemaAdditionalDetails2>;
  chargeDetails?: ReadonlyArray<AmazonFullApiSchemaChargeDetails2>;
  allowanceDetails?: ReadonlyArray<AmazonFullApiSchemaAllowanceDetails>;
  items?: ReadonlyArray<AmazonFullApiSchemaInvoiceItem2>;
};

export type AmazonFullApiSchemaTransactionId3 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaErrorList38 = ReadonlyArray<AmazonFullApiSchemaError39>;

export type AmazonFullApiSchemaOrderList3 = {
  pagination?: AmazonFullApiSchemaPagination13;
  orders?: ReadonlyArray<AmazonFullApiSchemaOrder5>;
};

export type AmazonFullApiSchemaErrorList39 = ReadonlyArray<AmazonFullApiSchemaError40>;

export type AmazonFullApiSchemaOrder5 = {
  purchaseOrderNumber: string;
  purchaseOrderState: "New" | "Acknowledged" | "Closed";
  orderDetails?: AmazonFullApiSchemaOrderDetails3;
};

export type AmazonFullApiSchemaOrderAcknowledgement = {
  purchaseOrderNumber: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification9;
  acknowledgementDate: string;
  items: ReadonlyArray<AmazonFullApiSchemaOrderAcknowledgementItem3>;
};

export type AmazonFullApiSchemaTransactionId4 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaOrderListStatus = {
  pagination?: AmazonFullApiSchemaPagination13;
  ordersStatus?: ReadonlyArray<AmazonFullApiSchemaOrderStatus>;
};

export type AmazonFullApiSchemaShipmentConfirmation3 = {
  shipmentIdentifier: string;
  shipmentConfirmationType: "Original" | "Replace";
  shipmentType?: "TruckLoad" | "LessThanTruckLoad" | "SmallParcel";
  shipmentStructure?: "PalletizedAssortmentCase" | "LooseAssortmentCase" | "PalletOfItems" | "PalletizedStandardCase" | "LooseStandardCase" | "MasterPallet" | "MasterCase";
  transportationDetails?: AmazonFullApiSchemaTransportationDetailsForShipmentConfirmation;
  amazonReferenceNumber?: string;
  shipmentConfirmationDate: string;
  shippedDate?: string;
  estimatedDeliveryDate?: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification10;
  shipFromParty: AmazonFullApiSchemaPartyIdentification10;
  shipToParty: AmazonFullApiSchemaPartyIdentification10;
  shipmentMeasurements?: AmazonFullApiSchemaShipmentMeasurements;
  importDetails?: AmazonFullApiSchemaImportDetails;
  shippedItems: ReadonlyArray<AmazonFullApiSchemaItem8>;
  cartons?: ReadonlyArray<AmazonFullApiSchemaCarton>;
  pallets?: ReadonlyArray<AmazonFullApiSchemaPallet2>;
};

export type AmazonFullApiSchemaTransactionReference6 = {
  transactionId?: string;
};

export type AmazonFullApiSchemaErrorList40 = ReadonlyArray<AmazonFullApiSchemaError41>;

export type AmazonFullApiSchemaShipment5 = {
  vendorShipmentIdentifier: string;
  transactionType: "New" | "Cancel";
  buyerReferenceNumber?: string;
  transactionDate: string;
  currentShipmentStatus?: "Created" | "TransportationRequested" | "CarrierAssigned" | "Shipped";
  currentshipmentStatusDate?: string;
  shipmentStatusDetails?: ReadonlyArray<AmazonFullApiSchemaShipmentStatusDetails>;
  shipmentCreateDate?: string;
  shipmentConfirmDate?: string;
  packageLabelCreateDate?: string;
  shipmentFreightTerm?: "Collect" | "Prepaid";
  sellingParty: AmazonFullApiSchemaPartyIdentification10;
  shipFromParty: AmazonFullApiSchemaPartyIdentification10;
  shipToParty: AmazonFullApiSchemaPartyIdentification10;
  shipmentMeasurements?: AmazonFullApiSchemaTransportShipmentMeasurements;
  collectFreightPickupDetails?: AmazonFullApiSchemaCollectFreightPickupDetails;
  purchaseOrders?: ReadonlyArray<AmazonFullApiSchemaPurchaseOrders>;
  importDetails?: AmazonFullApiSchemaImportDetails;
  containers?: ReadonlyArray<AmazonFullApiSchemaContainers>;
  transportationDetails?: AmazonFullApiSchemaTransportationDetails2;
};

export type AmazonFullApiSchemaShipmentDetails = {
  pagination?: AmazonFullApiSchemaPagination14;
  shipments?: ReadonlyArray<AmazonFullApiSchemaShipment5>;
};

export type AmazonFullApiSchemaTransportationLabels = {
  pagination?: AmazonFullApiSchemaPagination14;
  transportLabels?: ReadonlyArray<AmazonFullApiSchemaTransportLabel>;
};

export type AmazonFullApiSchemaTransactionStatus5 = {
  transactionStatus?: AmazonFullApiSchemaTransaction5;
};

export type AmazonFullApiSchemaErrorList41 = ReadonlyArray<AmazonFullApiSchemaError42>;

export type AmazonFullApiSchemaDistributionPackage = {
  contents: AmazonFullApiSchemaDistributionPackageContents;
  measurements: AmazonFullApiSchemaMeasurementData;
  type: AmazonFullApiSchemaDistributionPackageType;
};

export type AmazonFullApiSchemaCarrierCodeType = "SCAC";

export type AmazonFullApiSchemaInventoryUnitOfMeasurement = "PRODUCT_UNITS" | "CASES" | "PALLETS";

export type AmazonFullApiSchemaSkuIneligibilityReason = {
  code: string;
  description: string;
};

export type AmazonFullApiSchemaExpirationDetails = {
  expiration?: string;
  onhandQuantity?: number;
};

export type AmazonFullApiSchemaInventoryDetails = {
  availableDistributableQuantity?: number;
  replenishmentQuantity?: number;
  reservedDistributableQuantity?: number;
};

export type AmazonFullApiSchemaOrderPreference = "PARTIAL_ORDER";

export type AmazonFullApiSchemaOrderPreferenceValue = "SET" | "UNSET";

export type AmazonFullApiSchemaProductAttribute = {
  name?: string;
  value?: string;
};

export type AmazonFullApiSchemaPrepDetails = {
  labelOwner?: AmazonFullApiSchemaLabelOwner2;
  prepCategory?: AmazonFullApiSchemaPrepCategory2;
  prepInstructions?: ReadonlyArray<AmazonFullApiSchemaPrepInstruction2>;
  prepOwner?: AmazonFullApiSchemaPrepOwner2;
};

export type AmazonFullApiSchemaOutboundShipmentStatus = "CREATED" | "IN_TRANSIT" | "DELIVERED" | "RECEIVING" | "RECEIVED" | "CLOSED" | "CANCELLED" | "FAILED";

export type AmazonFullApiSchemaConfirmationMode = "AUTO" | "MANUAL";

export type AmazonFullApiSchemaPageToken = string;

export type AmazonFullApiSchemaContentMetadataRecord = {
  contentReferenceKey: AmazonFullApiSchemaContentReferenceKey;
  contentMetadata: AmazonFullApiSchemaContentMetadata;
};

export type AmazonFullApiSchemaContentType = "EBC" | "EMC";

export type AmazonFullApiSchemaContentSubType = string;

export type AmazonFullApiSchemaLanguageTag = string;

export type AmazonFullApiSchemaContentModuleList = ReadonlyArray<AmazonFullApiSchemaContentModule>;

export type AmazonFullApiSchemaMessageSet = ReadonlyArray<AmazonFullApiSchemaError12>;

export type AmazonFullApiSchemaContentMetadata = {
  name: string;
  marketplaceId: AmazonFullApiSchemaMarketplaceId4;
  status: AmazonFullApiSchemaContentStatus;
  badgeSet: AmazonFullApiSchemaContentBadgeSet;
  updateTime: string;
};

export type AmazonFullApiSchemaAsinMetadata = {
  asin: AmazonFullApiSchemaAsin;
  badgeSet?: AmazonFullApiSchemaAsinBadgeSet;
  parent?: AmazonFullApiSchemaAsin;
  title?: string;
  imageUrl?: string;
  contentReferenceKeySet?: AmazonFullApiSchemaContentReferenceKeySet;
};

export type AmazonFullApiSchemaAsin = string;

export type AmazonFullApiSchemaError12 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaPublishRecord = {
  marketplaceId: AmazonFullApiSchemaMarketplaceId4;
  locale: AmazonFullApiSchemaLanguageTag;
  asin: AmazonFullApiSchemaAsin;
  contentType: AmazonFullApiSchemaContentType;
  contentSubType?: AmazonFullApiSchemaContentSubType;
  contentReferenceKey: AmazonFullApiSchemaContentReferenceKey;
};

export type AmazonFullApiSchemaCategories = {
  ProductCategoryId?: string;
  ProductCategoryName?: string;
  parent?: {};
};

export type AmazonFullApiSchemaError13 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaBrandRefinement = {
  numberOfResults: number;
  brandName: string;
};

export type AmazonFullApiSchemaClassificationRefinement = {
  numberOfResults: number;
  displayName: string;
  classificationId: string;
};

export type AmazonFullApiSchemaItemIdentifiersByMarketplace = {
  marketplaceId: string;
  identifiers: ReadonlyArray<AmazonFullApiSchemaItemIdentifier2>;
};

export type AmazonFullApiSchemaItemImagesByMarketplace = {
  marketplaceId: string;
  images: ReadonlyArray<AmazonFullApiSchemaItemImage>;
};

export type AmazonFullApiSchemaItemProductTypeByMarketplace = {
  marketplaceId?: string;
  productType?: string;
};

export type AmazonFullApiSchemaItemSalesRanksByMarketplace = {
  marketplaceId: string;
  ranks: ReadonlyArray<AmazonFullApiSchemaItemSalesRank>;
};

export type AmazonFullApiSchemaItemSummaryByMarketplace = {
  marketplaceId: string;
  brandName?: string;
  browseNode?: string;
  colorName?: string;
  itemName?: string;
  manufacturer?: string;
  modelNumber?: string;
  sizeName?: string;
  styleName?: string;
};

export type AmazonFullApiSchemaItemVariationsByMarketplace = {
  marketplaceId: string;
  asins: ReadonlyArray<string>;
  variationType: "PARENT" | "CHILD";
};

export type AmazonFullApiSchemaItemVendorDetailsByMarketplace = {
  marketplaceId: string;
  brandCode?: string;
  categoryCode?: string;
  manufacturerCode?: string;
  manufacturerCodeParent?: string;
  productGroup?: string;
  replenishmentCategory?: "ALLOCATED" | "BASIC_REPLENISHMENT" | "IN_SEASON" | "LIMITED_REPLENISHMENT" | "MANUFACTURER_OUT_OF_STOCK" | "NEW_PRODUCT" | "NON_REPLENISHABLE" | "NON_STOCKUPABLE" | "OBSOLETE" | "PLANNED_REPLENISHMENT";
  subcategoryCode?: string;
};

export type AmazonFullApiSchemaBrandRefinement2 = {
  numberOfResults: number;
  brandName: string;
};

export type AmazonFullApiSchemaClassificationRefinement2 = {
  numberOfResults: number;
  displayName: string;
  classificationId: string;
};

export type AmazonFullApiSchemaItemBrowseClassificationsByMarketplace = {
  marketplaceId: string;
  classifications?: ReadonlyArray<AmazonFullApiSchemaItemBrowseClassification>;
};

export type AmazonFullApiSchemaItemDimensionsByMarketplace = {
  marketplaceId: string;
  item?: AmazonFullApiSchemaDimensions4;
  package?: AmazonFullApiSchemaDimensions4;
};

export type AmazonFullApiSchemaItemIdentifiersByMarketplace2 = {
  marketplaceId: string;
  identifiers: ReadonlyArray<AmazonFullApiSchemaItemIdentifier3>;
};

export type AmazonFullApiSchemaItemImagesByMarketplace2 = {
  marketplaceId: string;
  images: ReadonlyArray<AmazonFullApiSchemaItemImage2>;
};

export type AmazonFullApiSchemaItemProductTypeByMarketplace2 = {
  marketplaceId?: string;
  productType?: string;
};

export type AmazonFullApiSchemaItemRelationshipsByMarketplace = {
  marketplaceId: string;
  relationships: ReadonlyArray<AmazonFullApiSchemaItemRelationship>;
};

export type AmazonFullApiSchemaItemSalesRanksByMarketplace2 = {
  marketplaceId: string;
  classificationRanks?: ReadonlyArray<AmazonFullApiSchemaItemClassificationSalesRank>;
  displayGroupRanks?: ReadonlyArray<AmazonFullApiSchemaItemDisplayGroupSalesRank>;
};

export type AmazonFullApiSchemaItemSummaryByMarketplace2 = {
  marketplaceId: string;
  adultProduct?: boolean;
  autographed?: boolean;
  brand?: string;
  browseClassification?: AmazonFullApiSchemaItemBrowseClassification;
  color?: string;
  contributors?: ReadonlyArray<AmazonFullApiSchemaItemContributor>;
  itemClassification?: "BASE_PRODUCT" | "OTHER" | "PRODUCT_BUNDLE" | "VARIATION_PARENT";
  itemName?: string;
  manufacturer?: string;
  memorabilia?: boolean;
  modelNumber?: string;
  packageQuantity?: number;
  partNumber?: string;
  releaseDate?: string;
  size?: string;
  style?: string;
  tradeInEligible?: boolean;
  websiteDisplayGroup?: string;
  websiteDisplayGroupName?: string;
};

export type AmazonFullApiSchemaItemVendorDetailsByMarketplace2 = {
  marketplaceId: string;
  brandCode?: string;
  manufacturerCode?: string;
  manufacturerCodeParent?: string;
  productCategory?: AmazonFullApiSchemaItemVendorDetailsCategory;
  productGroup?: string;
  productSubcategory?: AmazonFullApiSchemaItemVendorDetailsCategory;
  replenishmentCategory?: "ALLOCATED" | "BASIC_REPLENISHMENT" | "IN_SEASON" | "LIMITED_REPLENISHMENT" | "MANUFACTURER_OUT_OF_STOCK" | "NEW_PRODUCT" | "NON_REPLENISHABLE" | "NON_STOCKUPABLE" | "OBSOLETE" | "PLANNED_REPLENISHMENT";
};

export type AmazonFullApiSchemaItemReviewTopic = {
  topic: string;
  asinMetrics: AmazonFullApiSchemaItemReviewTopicMetrics;
  parentAsinMetrics?: AmazonFullApiSchemaItemReviewTopicMetrics;
  browseNodeMetrics?: AmazonFullApiSchemaItemReviewBrowseNodeMetrics;
  childAsinMetrics?: AmazonFullApiSchemaChildAsinMetrics;
  reviewSnippets?: ReadonlyArray<string>;
  subtopics?: ReadonlyArray<AmazonFullApiSchemaItemReviewSubtopic>;
};

export type AmazonFullApiSchemaBrowseNodeReviewTopic = {
  topic: string;
  browseNodeMetrics: AmazonFullApiSchemaBrowseNodeReviewTopicMetrics;
  reviewSnippets?: ReadonlyArray<string>;
  subtopics?: ReadonlyArray<AmazonFullApiSchemaBrowseNodeSubtopic>;
};

export type AmazonFullApiSchemaItemReviewTrend = {
  topic: string;
  trendMetrics: ReadonlyArray<AmazonFullApiSchemaItemReviewTrendPoint>;
};

export type AmazonFullApiSchemaBrowseNodeReviewTrend = {
  topic: string;
  trendMetrics: ReadonlyArray<AmazonFullApiSchemaBrowseNodeReviewTrendPoint>;
};

export type AmazonFullApiSchemaBrowseNodeTrendMetrics = {
  occurrencePercentage: AmazonFullApiSchemaBrowseNodeOccurrence;
};

export type AmazonFullApiSchemaBrowseNodeReturnTrendPoint = {
  dateRange: AmazonFullApiSchemaDateRange;
  browseNodeMetrics: AmazonFullApiSchemaBrowseNodeTrendMetrics;
};

export type AmazonFullApiSchemaError14 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaDimension = number;

export type AmazonFullApiSchemaUnitOfLength = "cm";

export type AmazonFullApiSchemaWeightValue = number;

export type AmazonFullApiSchemaUnitOfWeight = "grams" | "g";

export type AmazonFullApiSchemaPackageId = string;

export type AmazonFullApiSchemaItem5 = {
  orderItemId?: AmazonFullApiSchemaOrderItemId;
  orderItemSerialNumbers?: AmazonFullApiSchemaOrderItemSerialNumbers;
};

export type AmazonFullApiSchemaDateTime4 = string;

export type AmazonFullApiSchemaHandoverMethod = "PICKUP" | "DROPOFF";

export type AmazonFullApiSchemaUpdatePackageDetails = {
  scheduledPackageId: AmazonFullApiSchemaScheduledPackageId;
  packageTimeSlot: AmazonFullApiSchemaTimeSlot;
};

export type AmazonFullApiSchemaError15 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaInventoryRequest = {
  uri: string;
  method: AmazonFullApiSchemaHttpMethod;
  body?: AmazonFullApiSchemaInventoryRequestParams;
};

export type AmazonFullApiSchemaInventoryResponse = {
  status: AmazonFullApiSchemaHttpStatusLine;
  body: AmazonFullApiSchemaInventoryResponseBody;
};

export type AmazonFullApiSchemaInvoiceInformation = {
  id: string;
};

export type AmazonFullApiSchemaTrackingInfo = {
  carrierName: string;
  trackingId: string;
};

export type AmazonFullApiSchemaMarketplaceChannel = {
  marketplaceName?: string;
  channelName?: string;
};

export type AmazonFullApiSchemaCustomChannelAttribute = ReadonlyArray<"PRIME" | "FASTTRACK">;

export type AmazonFullApiSchemaReplacedShipmentInfo = {
  id: string;
  locationId: string;
  marketplaceAttributes: AmazonFullApiSchemaMarketplaceAttributes;
  originalLineItems?: AmazonFullApiSchemaOriginalLineItems;
};

export type AmazonFullApiSchemaPriority = "HIGH" | "LOW";

export type AmazonFullApiSchemaPartyIdentificationInfo = {
  partyId: string;
  partyType: "BILL_TO_PARTY" | "SHIP_TO_PARTY" | "SHIP_FROM_PARTY" | "SELLING_PARTY";
  address?: AmazonFullApiSchemaAddress8;
  taxInfo?: AmazonFullApiSchemaTaxRegistrationInfo;
};

export type AmazonFullApiSchemaPackingSlipRequirement = {
  requirement?: "REQUIRED" | "NOT_REQUIRED";
  status?: "GENERATED" | "NOT_GENERATED";
};

export type AmazonFullApiSchemaInvoiceRequirement = {
  requirement?: "REQUIRED" | "NOT_REQUIRED";
  status?: "PENDING" | "AVAILABLE" | "NOT_AVAILABLE";
};

export type AmazonFullApiSchemaCharge = {
  baseCharge: AmazonFullApiSchemaChargeBreakup;
  taxBreakup?: ReadonlyArray<AmazonFullApiSchemaTax>;
  chargeType: "PRODUCT" | "SHIPPING" | "GIFT_WRAP" | "TOTAL" | "OTHER";
  totalCharge: AmazonFullApiSchemaChargeBreakup;
  totalTax: AmazonFullApiSchemaTax;
};

export type AmazonFullApiSchemaSKU = string;

export type AmazonFullApiSchemaSerialNumber = string;

export type AmazonFullApiSchemaPieceType = "SINGLE" | "MULTIPLE";

export type AmazonFullApiSchemaGiftAttributes = {
  giftWrapRequirement: AmazonFullApiSchemaRequirementLevel;
  giftWrapLabel?: string;
  giftMessagePresence: AmazonFullApiSchemaPresenceStatus;
  giftMessage?: AmazonFullApiSchemaDocument;
};

export type AmazonFullApiSchemaCancellations = ReadonlyArray<AmazonFullApiSchemaCancellation>;

export type AmazonFullApiSchemaCountryCode = string;

export type AmazonFullApiSchemaAmount = {
  value: AmazonFullApiSchemaDecimal;
  currencyCode: string;
};

export type AmazonFullApiSchemaComplianceAttributes = {
  hazmatLabelsRequirement: AmazonFullApiSchemaRequirementLevel;
  serialNumberRequirement: AmazonFullApiSchemaRequirementLevel;
  countryOfOriginRequirement: AmazonFullApiSchemaRequirementLevel;
  itemValueRequirement: AmazonFullApiSchemaRequirementLevel;
};

export type AmazonFullApiSchemaCustomAttribute = {
  key?: string;
  type?: AmazonFullApiSchemaCustomAttributeType;
  value?: string;
};

export type AmazonFullApiSchemaAddress8 = {
  name?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  district?: string;
  municipality?: string;
  state?: string;
  city?: string;
  countryCode?: string;
  postalCode: string;
  email?: string;
  copyEmails?: ReadonlyArray<string>;
  phoneNumber?: string;
  addressType?: string;
  geocodes?: AmazonFullApiSchemaGeocodes;
};

export type AmazonFullApiSchemaRecommendedPackages = ReadonlyArray<AmazonFullApiSchemaRecommendedPackage>;

export type AmazonFullApiSchemaLineItem = {
  id: string;
  quantity?: number;
};

export type AmazonFullApiSchemaDimension2 = {
  value: AmazonFullApiSchemaDecimal;
  dimensionUnit: "CM" | "M" | "IN";
};

export type AmazonFullApiSchemaDecimal = string;

export type AmazonFullApiSchemaPackageLineItem = {
  packageLineItemId: string;
  quantity: number;
  serialNumbers?: ReadonlyArray<AmazonFullApiSchemaSerialNumber>;
  pieces?: number;
  countryOfOrigin?: AmazonFullApiSchemaCountryCode;
  itemValue?: AmazonFullApiSchemaAmount;
};

export type AmazonFullApiSchemaTimeWindow = {
  startTime: number;
  endTime: number;
  handoverMethod?: "PICKUP" | "DROPOFF";
};

export type AmazonFullApiSchemaHandoverLocation = {
  address?: AmazonFullApiSchemaAddress8;
  distance?: AmazonFullApiSchemaDistance;
  mapUrl?: string;
};

export type AmazonFullApiSchemaPackageShipLabel = {
  packageId?: string;
  shipLabelMetadata?: AmazonFullApiSchemaShipLabelMetadata;
  fileData?: AmazonFullApiSchemaDocumentV2;
  status?: AmazonFullApiSchemaStatus;
  errorDetails?: AmazonFullApiSchemaError5;
};

export type AmazonFullApiSchemaError16 = {
  code: string;
  message?: string;
  details?: string;
};

export type AmazonFullApiSchemaGranularity = {
  granularityType?: string;
  granularityId?: string;
};

export type AmazonFullApiSchemaInventorySummaries = ReadonlyArray<AmazonFullApiSchemaInventorySummary2>;

export type AmazonFullApiSchemaError17 = {
  code: string;
  message?: string;
  details?: string;
};

export type AmazonFullApiSchemaInventoryItem = {
  sellerSku: string;
  marketplaceId: string;
  quantity: number;
};

export type AmazonFullApiSchemaFinancialEventGroupList = ReadonlyArray<AmazonFullApiSchemaFinancialEventGroup>;

export type AmazonFullApiSchemaError18 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaFinancialEvents = {
  ShipmentEventList?: AmazonFullApiSchemaShipmentEventList;
  ShipmentSettleEventList?: AmazonFullApiSchemaShipmentSettleEventList;
  RefundEventList?: AmazonFullApiSchemaShipmentEventList;
  GuaranteeClaimEventList?: AmazonFullApiSchemaShipmentEventList;
  EBTRefundReimbursementOnlyEventList?: AmazonFullApiSchemaEBTRefundReimbursementOnlyEventList;
  ChargebackEventList?: AmazonFullApiSchemaShipmentEventList;
  PayWithAmazonEventList?: AmazonFullApiSchemaPayWithAmazonEventList;
  ServiceProviderCreditEventList?: AmazonFullApiSchemaSolutionProviderCreditEventList;
  RetrochargeEventList?: AmazonFullApiSchemaRetrochargeEventList;
  RentalTransactionEventList?: AmazonFullApiSchemaRentalTransactionEventList;
  ProductAdsPaymentEventList?: AmazonFullApiSchemaProductAdsPaymentEventList;
  ServiceFeeEventList?: AmazonFullApiSchemaServiceFeeEventList;
  SellerDealPaymentEventList?: AmazonFullApiSchemaSellerDealPaymentEventList;
  DebtRecoveryEventList?: AmazonFullApiSchemaDebtRecoveryEventList;
  LoanServicingEventList?: AmazonFullApiSchemaLoanServicingEventList;
  AdjustmentEventList?: AmazonFullApiSchemaAdjustmentEventList;
  SAFETReimbursementEventList?: AmazonFullApiSchemaSAFETReimbursementEventList;
  SellerReviewEnrollmentPaymentEventList?: AmazonFullApiSchemaSellerReviewEnrollmentPaymentEventList;
  FBALiquidationEventList?: AmazonFullApiSchemaFBALiquidationEventList;
  CouponPaymentEventList?: AmazonFullApiSchemaCouponPaymentEventList;
  ImagingServicesFeeEventList?: AmazonFullApiSchemaImagingServicesFeeEventList;
  NetworkComminglingTransactionEventList?: AmazonFullApiSchemaNetworkComminglingTransactionEventList;
  AffordabilityExpenseEventList?: AmazonFullApiSchemaAffordabilityExpenseEventList;
  AffordabilityExpenseReversalEventList?: AmazonFullApiSchemaAffordabilityExpenseEventList;
  RemovalShipmentEventList?: AmazonFullApiSchemaRemovalShipmentEventList;
  RemovalShipmentAdjustmentEventList?: AmazonFullApiSchemaRemovalShipmentAdjustmentEventList;
  TrialShipmentEventList?: AmazonFullApiSchemaTrialShipmentEventList;
  TDSReimbursementEventList?: AmazonFullApiSchemaTDSReimbursementEventList;
  AdhocDisbursementEventList?: AmazonFullApiSchemaAdhocDisbursementEventList;
  TaxWithholdingEventList?: AmazonFullApiSchemaTaxWithholdingEventList;
  ChargeRefundEventList?: AmazonFullApiSchemaChargeRefundEventList;
  FailedAdhocDisbursementEventList?: AmazonFullApiSchemaFailedAdhocDisbursementEventList;
  ValueAddedServiceChargeEventList?: AmazonFullApiSchemaValueAddedServiceChargeEventList;
  CapacityReservationBillingEventList?: AmazonFullApiSchemaCapacityReservationBillingEventList;
};

export type AmazonFullApiSchemaTransactions = ReadonlyArray<AmazonFullApiSchemaTransaction6>;

export type AmazonFullApiSchemaPaymentMethodDetails = {
  accountHolderName?: string;
  paymentMethodId?: string;
  tail?: string;
  expiryDate?: AmazonFullApiSchemaExpiryDate;
  countryCode?: string;
  paymentMethodType?: AmazonFullApiSchemaPaymentMethodType;
  assignmentType?: AmazonFullApiSchemaAssignmentType;
};

export type AmazonFullApiSchemaSKUPrepInstructionsList = ReadonlyArray<AmazonFullApiSchemaSKUPrepInstructions>;

export type AmazonFullApiSchemaInvalidSKUList = ReadonlyArray<AmazonFullApiSchemaInvalidSKU>;

export type AmazonFullApiSchemaASINPrepInstructionsList = ReadonlyArray<AmazonFullApiSchemaASINPrepInstructions>;

export type AmazonFullApiSchemaInvalidASINList = ReadonlyArray<AmazonFullApiSchemaInvalidASIN>;

export type AmazonFullApiSchemaError19 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaInboundShipmentList = ReadonlyArray<AmazonFullApiSchemaInboundShipmentInfo>;

export type AmazonFullApiSchemaInboundShipmentItemList = ReadonlyArray<AmazonFullApiSchemaInboundShipmentItem>;

export type AmazonFullApiSchemaLabelOwner = "AMAZON" | "SELLER" | "NONE";

export type AmazonFullApiSchemaPrepOwner = "AMAZON" | "SELLER" | "NONE";

export type AmazonFullApiSchemaBoxContentInformationSource = "BOX_CONTENT_PROVIDED" | "MANUAL_PROCESS" | "BARCODE_2D";

export type AmazonFullApiSchemaRegion = {
  countryCode?: string;
  state?: string;
  warehouseId?: string;
};

export type AmazonFullApiSchemaDimensions2 = {
  height: number;
  length: number;
  unitOfMeasurement: AmazonFullApiSchemaUnitOfMeasurement;
  width: number;
};

export type AmazonFullApiSchemaWeight3 = {
  unit: AmazonFullApiSchemaUnitOfWeight2;
  value: number;
};

export type AmazonFullApiSchemaPrepInstruction = {
  fee?: AmazonFullApiSchemaCurrency3;
  prepOwner?: string;
  prepType?: string;
};

export type AmazonFullApiSchemaBoxInput = {
  contentInformationSource: AmazonFullApiSchemaBoxContentInformationSource;
  dimensions: AmazonFullApiSchemaDimensions2;
  items?: ReadonlyArray<AmazonFullApiSchemaItemInput>;
  quantity: number;
  weight: AmazonFullApiSchemaWeight3;
};

export type AmazonFullApiSchemaIncentive = {
  description: string;
  target: string;
  type: string;
  value: AmazonFullApiSchemaCurrency3;
};

export type AmazonFullApiSchemaPackingConfiguration = {
  boxPackingMethods?: ReadonlyArray<AmazonFullApiSchemaBoxContentInformationSource>;
  boxRequirements?: AmazonFullApiSchemaBoxRequirements;
  shippingRequirements?: ReadonlyArray<AmazonFullApiSchemaShippingRequirements>;
};

export type AmazonFullApiSchemaShippingConfiguration = {
  shippingMode?: string;
  shippingSolution?: string;
};

export type AmazonFullApiSchemaStackability = "STACKABLE" | "NON_STACKABLE";

export type AmazonFullApiSchemaWindow = {
  editableUntil?: string;
  end: string;
  start: string;
};

export type AmazonFullApiSchemaCurrency3 = {
  amount: number;
  code: string;
};

export type AmazonFullApiSchemaAppointmentSlotTime = {
  endTime: string;
  startTime: string;
};

export type AmazonFullApiSchemaLtlTrackingDetail = {
  billOfLadingNumber?: string;
  freightBillNumber?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaSpdTrackingDetail = {
  spdTrackingItems?: ReadonlyArray<AmazonFullApiSchemaSpdTrackingItem>;
};

export type AmazonFullApiSchemaCarrier = {
  alphaCode?: string;
  name?: string;
};

export type AmazonFullApiSchemaCarrierAppointment = {
  endTime: string;
  startTime: string;
};

export type AmazonFullApiSchemaQuote = {
  cost: AmazonFullApiSchemaCurrency3;
  expiration?: string;
  voidableUntil?: string;
};

export type AmazonFullApiSchemaAppointmentSlot = {
  slotId: string;
  slotTime: AmazonFullApiSchemaAppointmentSlotTime;
};

export type AmazonFullApiSchemaLtlTrackingDetailInput = {
  billOfLadingNumber?: string;
  freightBillNumber: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaSpdTrackingDetailInput = {
  spdTrackingItems: ReadonlyArray<AmazonFullApiSchemaSpdTrackingItemInput>;
};

export type AmazonFullApiSchemaPalletInput = {
  dimensions?: AmazonFullApiSchemaDimensions2;
  quantity: number;
  stackability?: AmazonFullApiSchemaStackability;
  weight?: AmazonFullApiSchemaWeight3;
};

export type AmazonFullApiSchemaWindowInput = {
  start: string;
};

export type AmazonFullApiSchemaTaxRate = {
  cessRate?: number;
  gstRate?: number;
  taxType?: string;
};

export type AmazonFullApiSchemaAllOwnersConstraint = "MUST_MATCH";

export type AmazonFullApiSchemaOwnerConstraint = "AMAZON_ONLY" | "NONE_ONLY" | "SELLER_ONLY";

export type AmazonFullApiSchemaPrepCategory = "ADULT" | "BABY" | "FC_PROVIDED" | "FRAGILE" | "GRANULAR" | "HANGER" | "LIQUID" | "PERFORATED" | "SET" | "SHARP" | "SMALL" | "TEXTILE" | "UNKNOWN" | "NONE";

export type AmazonFullApiSchemaPrepType = "ITEM_BLACK_SHRINKWRAP" | "ITEM_BLANKSTK" | "ITEM_BOXING" | "ITEM_BUBBLEWRAP" | "ITEM_CAP_SEALING" | "ITEM_DEBUNDLE" | "ITEM_HANG_GARMENT" | "ITEM_LABELING" | "ITEM_NO_PREP" | "ITEM_POLYBAGGING" | "ITEM_RMOVHANG" | "ITEM_SETCREAT" | "ITEM_SETSTK" | "ITEM_SIOC" | "ITEM_SUFFOSTK" | "ITEM_TAPING";

export type AmazonFullApiSchemaGetFulfillmentPreviewItem = {
  sellerSku: string;
  quantity: AmazonFullApiSchemaQuantity;
  perUnitDeclaredValue?: AmazonFullApiSchemaMoney;
  sellerFulfillmentOrderItemId: string;
};

export type AmazonFullApiSchemaFulfillmentPreviewList = ReadonlyArray<AmazonFullApiSchemaFulfillmentPreview>;

export type AmazonFullApiSchemaError20 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaProductIdentifier = {
  merchantSku: string;
};

export type AmazonFullApiSchemaAmount2 = {
  unitOfMeasure: "Eaches";
  value: AmazonFullApiSchemaDecimal2;
};

export type AmazonFullApiSchemaOrigin = {
  countryCode: string;
};

export type AmazonFullApiSchemaDestination2 = {
  deliveryAddress?: AmazonFullApiSchemaVariablePrecisionAddress;
  ipAddress?: AmazonFullApiSchemaIpAddress;
};

export type AmazonFullApiSchemaDeliveryOffersList = ReadonlyArray<AmazonFullApiSchemaDeliveryOffer>;

export type AmazonFullApiSchemaFulfillmentOrder = {
  sellerFulfillmentOrderId: string;
  marketplaceId: string;
  displayableOrderId: string;
  displayableOrderDate: AmazonFullApiSchemaTimestamp;
  displayableOrderComment: string;
  shippingSpeedCategory: AmazonFullApiSchemaShippingSpeedCategory;
  deliveryWindow?: AmazonFullApiSchemaDeliveryWindow;
  destinationAddress: AmazonFullApiSchemaAddress3;
  fulfillmentAction?: AmazonFullApiSchemaFulfillmentAction;
  fulfillmentPolicy?: AmazonFullApiSchemaFulfillmentPolicy;
  codSettings?: AmazonFullApiSchemaCODSettings;
  receivedDate: AmazonFullApiSchemaTimestamp;
  fulfillmentOrderStatus: AmazonFullApiSchemaFulfillmentOrderStatus;
  statusUpdatedDate: AmazonFullApiSchemaTimestamp;
  notificationEmails?: AmazonFullApiSchemaNotificationEmailList;
  featureConstraints?: ReadonlyArray<AmazonFullApiSchemaFeatureSettings>;
};

export type AmazonFullApiSchemaDropOffLocation = {
  type: "FRONT_DOOR" | "DELIVERY_BOX" | "GAS_METER_BOX" | "BICYCLE_BASKET" | "GARAGE" | "RECEPTIONIST" | "FALLBACK_NEIGHBOR_DELIVERY" | "DO_NOT_LEAVE_UNATTENDED";
  attributes?: {
  readonly [key: string]: string | undefined;
};
};

export type AmazonFullApiSchemaMoney = {
  currencyCode: string;
  value: AmazonFullApiSchemaDecimal2;
};

export type AmazonFullApiSchemaCreateFulfillmentOrderItem = {
  sellerSku: string;
  sellerFulfillmentOrderItemId: string;
  quantity: AmazonFullApiSchemaQuantity;
  giftMessage?: string;
  displayableComment?: string;
  fulfillmentNetworkSku?: string;
  perUnitDeclaredValue?: AmazonFullApiSchemaMoney;
  perUnitPrice?: AmazonFullApiSchemaMoney;
  perUnitTax?: AmazonFullApiSchemaMoney;
};

export type AmazonFullApiSchemaPaymentInformation = {
  paymentTransactionId: string;
  paymentMode: string;
  paymentDate: AmazonFullApiSchemaTimestamp;
};

export type AmazonFullApiSchemaTrackingAddress = {
  city: string;
  state: string;
  country: string;
};

export type AmazonFullApiSchemaCurrentStatus = "IN_TRANSIT" | "DELIVERED" | "RETURNING" | "RETURNED" | "UNDELIVERABLE" | "DELAYED" | "AVAILABLE_FOR_PICKUP" | "CUSTOMER_ACTION" | "UNKNOWN" | "OUT_FOR_DELIVERY" | "DELIVERY_ATTEMPTED" | "PICKUP_SUCCESSFUL" | "PICKUP_CANCELLED" | "PICKUP_ATTEMPTED" | "PICKUP_SCHEDULED" | "RETURN_REQUEST_ACCEPTED" | "REFUND_ISSUED" | "RETURN_RECEIVED_IN_FC";

export type AmazonFullApiSchemaDateRange3 = {
  earliest: AmazonFullApiSchemaTimestamp;
  latest: AmazonFullApiSchemaTimestamp;
};

export type AmazonFullApiSchemaAdditionalLocationInfo = "AS_INSTRUCTED" | "CARPORT" | "CUSTOMER_PICKUP" | "DECK" | "DOOR_PERSON" | "FRONT_DESK" | "FRONT_DOOR" | "GARAGE" | "GUARD" | "MAIL_ROOM" | "MAIL_SLOT" | "MAILBOX" | "MC_BOY" | "MC_GIRL" | "MC_MAN" | "MC_WOMAN" | "NEIGHBOR" | "OFFICE" | "OUTBUILDING" | "PATIO" | "PORCH" | "REAR_DOOR" | "RECEPTIONIST" | "RECEIVER" | "SECURE_LOCATION" | "SIDE_DOOR";

export type AmazonFullApiSchemaTrackingEventList = ReadonlyArray<AmazonFullApiSchemaTrackingEvent>;

export type AmazonFullApiSchemaReasonCodeDetailsList = ReadonlyArray<AmazonFullApiSchemaReasonCodeDetails>;

export type AmazonFullApiSchemaCreateReturnItem = {
  sellerReturnItemId: string;
  sellerFulfillmentOrderItemId: string;
  amazonShipmentId: string;
  returnReasonCode: string;
  returnComment?: string;
};

export type AmazonFullApiSchemaReturnItemList = ReadonlyArray<AmazonFullApiSchemaReturnItem>;

export type AmazonFullApiSchemaInvalidReturnItemList = ReadonlyArray<AmazonFullApiSchemaInvalidReturnItem>;

export type AmazonFullApiSchemaReturnAuthorizationList = ReadonlyArray<AmazonFullApiSchemaReturnAuthorization>;

export type AmazonFullApiSchemaFulfillmentOrderItemList = ReadonlyArray<AmazonFullApiSchemaFulfillmentOrderItem>;

export type AmazonFullApiSchemaFulfillmentShipmentList = ReadonlyArray<AmazonFullApiSchemaFulfillmentShipment>;

export type AmazonFullApiSchemaUpdateFulfillmentOrderItem = {
  sellerSku?: string;
  sellerFulfillmentOrderItemId: string;
  quantity: AmazonFullApiSchemaQuantity;
  giftMessage?: string;
  displayableComment?: string;
  fulfillmentNetworkSku?: string;
  orderItemDisposition?: string;
  perUnitDeclaredValue?: AmazonFullApiSchemaMoney;
  perUnitPrice?: AmazonFullApiSchemaMoney;
  perUnitTax?: AmazonFullApiSchemaMoney;
};

export type AmazonFullApiSchemaFeatures = ReadonlyArray<AmazonFullApiSchemaFeature>;

export type AmazonFullApiSchemaFeatureSku = {
  sellerSku?: string;
  fnSku?: string;
  asin?: string;
  skuCount?: number;
  overlappingSkus?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaAttributeOption = {
  description?: string;
  value?: string;
};

export type AmazonFullApiSchemaExportStatus = "REQUESTED" | "PROCESSING" | "DONE" | "ERROR";

export type AmazonFullApiSchemaIssueEnforcements = {
  actions: ReadonlyArray<AmazonFullApiSchemaIssueEnforcementAction>;
  exemption: AmazonFullApiSchemaIssueExemption;
};

export type AmazonFullApiSchemaItemIdentifiersByMarketplace3 = {
  marketplaceId?: string;
  asin?: string;
};

export type AmazonFullApiSchemaItemSummaryByMarketplace3 = {
  marketplaceId: string;
  asin?: string;
  productType: string;
  conditionType?: "new_new" | "new_open_box" | "new_oem" | "refurbished_refurbished" | "used_like_new" | "used_very_good" | "used_good" | "used_acceptable" | "collectible_like_new" | "collectible_very_good" | "collectible_good" | "collectible_acceptable" | "club_club";
  status: ReadonlyArray<"BUYABLE" | "DISCOVERABLE">;
  fnSku?: string;
  itemName?: string;
  createdDate: string;
  lastUpdatedDate: string;
  mainImage?: AmazonFullApiSchemaItemImage3;
};

export type AmazonFullApiSchemaItemOfferByMarketplace = {
  marketplaceId: string;
  offerType: "B2C" | "B2B";
  price: AmazonFullApiSchemaMoney2;
  points?: AmazonFullApiSchemaPoints;
  audience?: AmazonFullApiSchemaAudience;
};

export type AmazonFullApiSchemaMoney2 = {
  currencyCode: string;
  amount: AmazonFullApiSchemaDecimal3;
};

export type AmazonFullApiSchemaItemRelationshipsByMarketplace2 = {
  marketplaceId: string;
  relationships: ReadonlyArray<AmazonFullApiSchemaItemRelationship2>;
};

export type AmazonFullApiSchemaItemProductTypeByMarketplace3 = {
  marketplaceId: string;
  productType: string;
};

export type AmazonFullApiSchemaReason = {
  message: string;
  reasonCode?: "APPROVAL_REQUIRED" | "ASIN_NOT_FOUND" | "NOT_ELIGIBLE";
  links?: ReadonlyArray<AmazonFullApiSchemaLink>;
};

export type AmazonFullApiSchemaSellerOrderId = string;

export type AmazonFullApiSchemaItemList = ReadonlyArray<AmazonFullApiSchemaItem9>;

export type AmazonFullApiSchemaPackageDimensions2 = {
  Length?: AmazonFullApiSchemaPackageDimension;
  Width?: AmazonFullApiSchemaPackageDimension;
  Height?: AmazonFullApiSchemaPackageDimension;
  Unit?: AmazonFullApiSchemaUnitOfLength2;
  PredefinedPackageDimensions?: AmazonFullApiSchemaPredefinedPackageDimensions;
};

export type AmazonFullApiSchemaWeight4 = {
  Value: AmazonFullApiSchemaWeightValue2;
  Unit: AmazonFullApiSchemaUnitOfWeight3;
};

export type AmazonFullApiSchemaTimestamp2 = string;

export type AmazonFullApiSchemaShippingServiceOptions = {
  DeliveryExperience: AmazonFullApiSchemaDeliveryExperienceType;
  DeclaredValue?: AmazonFullApiSchemaCurrencyAmount;
  CarrierWillPickUp: boolean;
  CarrierWillPickUpOption?: AmazonFullApiSchemaCarrierWillPickUpOption;
  LabelFormat?: AmazonFullApiSchemaLabelFormat2;
};

export type AmazonFullApiSchemaLabelCustomization = {
  CustomTextForLabel?: AmazonFullApiSchemaCustomTextForLabel;
  StandardIdForLabel?: AmazonFullApiSchemaStandardIdForLabel;
};

export type AmazonFullApiSchemaCarrierWillPickUpOption = "CarrierWillPickUp" | "ShipperWillDropOff" | "NoPreference";

export type AmazonFullApiSchemaDeliveryExperienceOption = "DeliveryConfirmationWithAdultSignature" | "DeliveryConfirmationWithSignature" | "DeliveryConfirmationWithoutSignature" | "NoTracking" | "NoPreference";

export type AmazonFullApiSchemaShippingServiceList = ReadonlyArray<AmazonFullApiSchemaShippingService>;

export type AmazonFullApiSchemaRejectedShippingServiceList = ReadonlyArray<AmazonFullApiSchemaRejectedShippingService>;

export type AmazonFullApiSchemaTemporarilyUnavailableCarrierList = ReadonlyArray<AmazonFullApiSchemaTemporarilyUnavailableCarrier>;

export type AmazonFullApiSchemaTermsAndConditionsNotAcceptedCarrierList = ReadonlyArray<AmazonFullApiSchemaTermsAndConditionsNotAcceptedCarrier>;

export type AmazonFullApiSchemaError21 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaShipmentId = string;

export type AmazonFullApiSchemaCurrencyAmount = {
  CurrencyCode: string;
  Amount: number;
};

export type AmazonFullApiSchemaShippingService = {
  ShippingServiceName: string;
  CarrierName: string;
  ShippingServiceId: AmazonFullApiSchemaShippingServiceIdentifier;
  ShippingServiceOfferId: string;
  ShipDate: AmazonFullApiSchemaTimestamp2;
  EarliestEstimatedDeliveryDate?: AmazonFullApiSchemaTimestamp2;
  LatestEstimatedDeliveryDate?: AmazonFullApiSchemaTimestamp2;
  Rate: AmazonFullApiSchemaCurrencyAmount;
  RateWithAdjustments: AmazonFullApiSchemaCurrencyAmount;
  AdjustmentItemList?: AmazonFullApiSchemaAdjustmentItemList;
  ShippingServiceOptions: AmazonFullApiSchemaShippingServiceOptions;
  AvailableShippingServiceOptions?: AmazonFullApiSchemaAvailableShippingServiceOptions;
  AvailableLabelFormats?: AmazonFullApiSchemaLabelFormatList;
  AvailableFormatOptionsForLabel?: AmazonFullApiSchemaAvailableFormatOptionsForLabelList;
  RequiresAdditionalSellerInputs: boolean;
  Benefits?: AmazonFullApiSchemaBenefits2;
};

export type AmazonFullApiSchemaLabel = {
  CustomTextForLabel?: AmazonFullApiSchemaCustomTextForLabel;
  Dimensions: AmazonFullApiSchemaLabelDimensions;
  FileContents: AmazonFullApiSchemaFileContents;
  LabelFormat?: AmazonFullApiSchemaLabelFormat2;
  StandardIdForLabel?: AmazonFullApiSchemaStandardIdForLabel;
};

export type AmazonFullApiSchemaShipmentStatus2 = "Purchased" | "RefundPending" | "RefundRejected" | "RefundApplied";

export type AmazonFullApiSchemaTrackingId2 = string;

export type AmazonFullApiSchemaAdditionalSellerInputs = {
  AdditionalInputFieldName: string;
  AdditionalSellerInput: AmazonFullApiSchemaAdditionalSellerInput;
};

export type AmazonFullApiSchemaAddressName = string;

export type AmazonFullApiSchemaAddressLine1 = string;

export type AmazonFullApiSchemaAddressLine2 = string;

export type AmazonFullApiSchemaAddressLine3 = string;

export type AmazonFullApiSchemaDistrictOrCounty = string;

export type AmazonFullApiSchemaEmailAddress = string;

export type AmazonFullApiSchemaCity = string;

export type AmazonFullApiSchemaStateOrProvinceCode = string;

export type AmazonFullApiSchemaPostalCode = string;

export type AmazonFullApiSchemaCountryCode2 = string;

export type AmazonFullApiSchemaPhoneNumber = string;

export type AmazonFullApiSchemaAdditionalInputsList = ReadonlyArray<AmazonFullApiSchemaAdditionalInputs>;

export type AmazonFullApiSchemaItemLevelFieldsList = ReadonlyArray<AmazonFullApiSchemaItemLevelFields>;

export type AmazonFullApiSchemaGetSchemaResponse = {
  _links?: {
  self: AmazonFullApiSchemaLinkObject;
};
  payload?: AmazonFullApiSchemaSchema;
  errors?: AmazonFullApiSchemaErrorList21;
};

export type AmazonFullApiSchemaMessagingAction = {
  name: string;
};

export type AmazonFullApiSchemaError22 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaError23 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaEventFilter = (AmazonFullApiSchemaAggregationFilter & AmazonFullApiSchemaMarketplaceFilter & AmazonFullApiSchemaOrderChangeTypeFilter & {
  eventFilterType: "ANY_OFFER_CHANGED" | "ORDER_CHANGE";
});

export type AmazonFullApiSchemaSqsResource = {
  arn: string;
};

export type AmazonFullApiSchemaEventBridgeResourceSpecification = {
  region: string;
  accountId: string;
};

export type AmazonFullApiSchemaDestinationResource = {
  sqs?: AmazonFullApiSchemaSqsResource;
  eventBridge?: AmazonFullApiSchemaEventBridgeResource;
};

export type AmazonFullApiSchemaOrderList4 = ReadonlyArray<AmazonFullApiSchemaOrder2>;

export type AmazonFullApiSchemaError24 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaMoney3 = {
  CurrencyCode?: string;
  Amount?: string;
};

export type AmazonFullApiSchemaPaymentExecutionDetailItemList = ReadonlyArray<AmazonFullApiSchemaPaymentExecutionDetailItem>;

export type AmazonFullApiSchemaPaymentMethodDetailItemList = ReadonlyArray<string>;

export type AmazonFullApiSchemaEasyShipShipmentStatus = "PendingSchedule" | "PendingPickUp" | "PendingDropOff" | "LabelCanceled" | "PickedUp" | "DroppedOff" | "AtOriginFC" | "AtDestinationFC" | "Delivered" | "RejectedByBuyer" | "Undeliverable" | "ReturningToSeller" | "ReturnedToSeller" | "Lost" | "OutForDelivery" | "Damaged";

export type AmazonFullApiSchemaAddress9 = {
  Name?: string;
  CompanyName?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City?: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  Municipality?: string;
  PostalCode?: string;
  CountryCode?: string;
  Phone?: string;
  ExtendedFields?: AmazonFullApiSchemaAddressExtendedFields;
  AddressType?: "Residential" | "Commercial";
};

export type AmazonFullApiSchemaBuyerTaxInformation = {
  BuyerLegalCompanyName?: string;
  BuyerBusinessAddress?: string;
  BuyerTaxRegistrationId?: string;
  BuyerTaxOffice?: string;
};

export type AmazonFullApiSchemaFulfillmentInstruction = {
  FulfillmentSupplySourceId?: string;
};

export type AmazonFullApiSchemaMarketplaceTaxInfo = {
  TaxClassifications?: ReadonlyArray<AmazonFullApiSchemaTaxClassification>;
};

export type AmazonFullApiSchemaBuyerInfo = {
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: AmazonFullApiSchemaBuyerTaxInfo;
  PurchaseOrderNumber?: string;
};

export type AmazonFullApiSchemaAutomatedShippingSettings = {
  HasAutomatedShippingSettings?: boolean;
  AutomatedCarrier?: string;
  AutomatedShipMethod?: string;
};

export type AmazonFullApiSchemaElectronicInvoiceStatus = "NotRequired" | "NotFound" | "Processing" | "Errored" | "Accepted";

export type AmazonFullApiSchemaBuyerTaxInfo = {
  CompanyLegalName?: string;
  TaxingRegion?: string;
  TaxClassifications?: ReadonlyArray<AmazonFullApiSchemaTaxClassification>;
};

export type AmazonFullApiSchemaDeliveryPreferences2 = {
  DropOffLocation?: string;
  PreferredDeliveryTime?: AmazonFullApiSchemaPreferredDeliveryTime;
  OtherAttributes?: ReadonlyArray<AmazonFullApiSchemaOtherDeliveryAttributes>;
  AddressInstructions?: string;
};

export type AmazonFullApiSchemaOrderItemList = ReadonlyArray<AmazonFullApiSchemaOrderItem3>;

export type AmazonFullApiSchemaOrderItemBuyerInfoList = ReadonlyArray<AmazonFullApiSchemaOrderItemBuyerInfo>;

export type AmazonFullApiSchemaRegulatedInformation = {
  Fields: ReadonlyArray<AmazonFullApiSchemaRegulatedInformationField>;
};

export type AmazonFullApiSchemaRegulatedOrderVerificationStatus = {
  Status: AmazonFullApiSchemaVerificationStatus;
  RequiresMerchantAction: boolean;
  ValidRejectionReasons: ReadonlyArray<AmazonFullApiSchemaRejectionReason>;
  RejectionReason?: AmazonFullApiSchemaRejectionReason;
  ReviewDate?: string;
  ExternalReviewerId?: string;
  ValidVerificationDetails?: ReadonlyArray<AmazonFullApiSchemaValidVerificationDetail>;
  ValidInterimStatusCodes?: ReadonlyArray<AmazonFullApiSchemaValidInterimStatusCode>;
};

export type AmazonFullApiSchemaVerificationStatus = "Pending" | "Approved" | "Rejected" | "Expired" | "Cancelled";

export type AmazonFullApiSchemaVerificationDetails = {
  prescriptionDetail?: AmazonFullApiSchemaPrescriptionDetail;
  approvedAlternativeDetails?: AmazonFullApiSchemaApprovedAlternativeDetails;
  interimStatusDetail?: AmazonFullApiSchemaInterimStatusDetail;
};

export type AmazonFullApiSchemaPackageReferenceId = string;

export type AmazonFullApiSchemaConfirmShipmentOrderItemsList = ReadonlyArray<AmazonFullApiSchemaConfirmShipmentOrderItem>;

export type AmazonFullApiSchemaAlias = {
  aliasId: string;
  aliasType: string;
};

export type AmazonFullApiSchemaAssociatedOrder = {
  orderId?: string;
  associationType?: string;
};

export type AmazonFullApiSchemaSalesChannel = {
  channelName: string;
  marketplaceId?: string;
  marketplaceName?: string;
};

export type AmazonFullApiSchemaBuyer = {
  buyerName?: string;
  buyerEmail?: string;
  buyerCompanyName?: string;
  buyerPurchaseOrderNumber?: string;
};

export type AmazonFullApiSchemaRecipient = {
  deliveryAddress?: AmazonFullApiSchemaCustomerAddress;
  deliveryPreference?: AmazonFullApiSchemaDeliveryPreference;
};

export type AmazonFullApiSchemaOrderProceeds = {
  grandTotal?: AmazonFullApiSchemaMoney6;
  breakdowns?: ReadonlyArray<AmazonFullApiSchemaOrderProceedsBreakdown>;
};

export type AmazonFullApiSchemaOrderPayment = {
  paymentExecutions?: ReadonlyArray<AmazonFullApiSchemaPaymentExecution>;
};

export type AmazonFullApiSchemaOrderTax = {
  taxRegistrations?: ReadonlyArray<AmazonFullApiSchemaOrderTaxRegistration>;
  taxInvoicing?: AmazonFullApiSchemaOrderTaxInvoicing;
};

export type AmazonFullApiSchemaOrderFulfillment = {
  fulfillmentStatus: AmazonFullApiSchemaFulfillmentStatus;
  fulfilledBy?: string;
  fulfillmentServiceLevel?: string;
  shipByWindow?: AmazonFullApiSchemaDateTimeRange2;
  deliverByWindow?: AmazonFullApiSchemaDateTimeRange2;
};

export type AmazonFullApiSchemaOrderItem = {
  orderItemId: string;
  quantityOrdered: number;
  measurement?: AmazonFullApiSchemaMeasurement;
  associatedOrderItems?: ReadonlyArray<AmazonFullApiSchemaAssociatedOrderItem>;
  programs?: ReadonlyArray<string>;
  product: AmazonFullApiSchemaItemProduct;
  proceeds?: AmazonFullApiSchemaItemProceeds;
  expense?: AmazonFullApiSchemaItemExpense;
  promotion?: AmazonFullApiSchemaItemPromotion;
  cancellation?: AmazonFullApiSchemaItemCancellation;
  fulfillment?: AmazonFullApiSchemaItemFulfillment;
  tax?: AmazonFullApiSchemaItemTax;
};

export type AmazonFullApiSchemaOrderPackage = {
  packageReferenceId: string;
  createdTime?: string;
  packageStatus?: AmazonFullApiSchemaPackageStatus3;
  carrier?: string;
  shipTime?: string;
  shippingService?: string;
  trackingNumber?: string;
  shipFromAddress?: AmazonFullApiSchemaMerchantAddress;
  packageItems?: ReadonlyArray<AmazonFullApiSchemaPackageItem>;
};

export type AmazonFullApiSchemaFulfillmentOrder2 = {
  fulfillmentOrderId: string;
};

export type AmazonFullApiSchemaPriceToEstimateFees = {
  ListingPrice: AmazonFullApiSchemaMoneyType;
  Shipping?: AmazonFullApiSchemaMoneyType;
  Points?: AmazonFullApiSchemaPoints2;
};

export type AmazonFullApiSchemaOptionalFulfillmentProgram = "FBA_CORE" | "FBA_SNL" | "FBA_EFN";

export type AmazonFullApiSchemaError25 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaIdType = "ASIN" | "SellerSKU";

export type AmazonFullApiSchemaFeesEstimateIdentifier = {
  MarketplaceId?: string;
  SellerId?: string;
  IdType?: AmazonFullApiSchemaIdType;
  IdValue?: string;
  IsAmazonFulfilled?: boolean;
  PriceToEstimateFees?: AmazonFullApiSchemaPriceToEstimateFees;
  SellerInputIdentifier?: string;
  OptionalFulfillmentProgram?: AmazonFullApiSchemaOptionalFulfillmentProgram;
};

export type AmazonFullApiSchemaFeesEstimate = {
  TimeOfFeesEstimation: string;
  TotalFeesEstimate?: AmazonFullApiSchemaMoneyType;
  FeeDetailList?: AmazonFullApiSchemaFeeDetailList;
};

export type AmazonFullApiSchemaFeesEstimateError = {
  Type: string;
  Code: string;
  Message: string;
  Detail: AmazonFullApiSchemaFeesEstimateErrorDetail;
};

export type AmazonFullApiSchemaPrice = {
  status: string;
  SellerSKU?: string;
  ASIN?: string;
  Product?: AmazonFullApiSchemaProduct;
};

export type AmazonFullApiSchemaError26 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaConditionType = "New" | "Used" | "Collectible" | "Refurbished" | "Club";

export type AmazonFullApiSchemaItemIdentifier = {
  MarketplaceId: string;
  ASIN?: string;
  SellerSKU?: string;
  ItemCondition: AmazonFullApiSchemaConditionType;
};

export type AmazonFullApiSchemaSummary = {
  TotalOfferCount: number;
  NumberOfOffers?: AmazonFullApiSchemaNumberOfOffers;
  LowestPrices?: AmazonFullApiSchemaLowestPrices;
  BuyBoxPrices?: AmazonFullApiSchemaBuyBoxPrices;
  ListPrice?: AmazonFullApiSchemaMoneyType2;
  CompetitivePriceThreshold?: AmazonFullApiSchemaMoneyType2;
  SuggestedLowerPricePlusShipping?: AmazonFullApiSchemaMoneyType2;
  SalesRankings?: AmazonFullApiSchemaSalesRankList;
  BuyBoxEligibleOffers?: AmazonFullApiSchemaBuyBoxEligibleOffers;
  OffersAvailableTime?: string;
};

export type AmazonFullApiSchemaOfferDetailList = ReadonlyArray<AmazonFullApiSchemaOfferDetail>;

export type AmazonFullApiSchemaItemOffersRequest = (AmazonFullApiSchemaBatchRequest & AmazonFullApiSchemaBatchOffersRequestParams);

export type AmazonFullApiSchemaItemOffersResponse = (AmazonFullApiSchemaBatchOffersResponse & {
  request: AmazonFullApiSchemaItemOffersRequestParams;
});

export type AmazonFullApiSchemaListingOffersRequest = (AmazonFullApiSchemaBatchRequest & AmazonFullApiSchemaBatchOffersRequestParams);

export type AmazonFullApiSchemaListingOffersResponse = (AmazonFullApiSchemaBatchOffersResponse & {
  request?: AmazonFullApiSchemaListingOffersRequestParams;
});

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceRequest = (AmazonFullApiSchemaBatchRequest2 & AmazonFullApiSchemaFeaturedOfferExpectedPriceRequestParams);

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceResponse = (AmazonFullApiSchemaBatchResponse & {
  request: AmazonFullApiSchemaFeaturedOfferExpectedPriceRequestParams;
  body?: AmazonFullApiSchemaFeaturedOfferExpectedPriceResponseBody;
});

export type AmazonFullApiSchemaCompetitiveSummaryRequest = {
  asin: AmazonFullApiSchemaAsin2;
  marketplaceId: AmazonFullApiSchemaMarketplaceId5;
  includedData: ReadonlyArray<AmazonFullApiSchemaCompetitiveSummaryIncludedData>;
  lowestPricedOffersInputs?: ReadonlyArray<AmazonFullApiSchemaLowestPricedOffersInput>;
  method: AmazonFullApiSchemaHttpMethod2;
  uri: AmazonFullApiSchemaHttpUri;
};

export type AmazonFullApiSchemaCompetitiveSummaryResponse = {
  status: AmazonFullApiSchemaHttpStatusLine2;
  body: AmazonFullApiSchemaCompetitiveSummaryResponseBody;
};

export type AmazonFullApiSchemaFulfillmentChannelType = "AMAZON" | "MERCHANT";

export type AmazonFullApiSchemaProgramType2 = "SUBSCRIBE_AND_SAVE";

export type AmazonFullApiSchemaSortOrder = "ASC" | "DESC";

export type AmazonFullApiSchemaListOfferMetricsSortKey = "SHIPPED_SUBSCRIPTION_UNITS" | "TOTAL_SUBSCRIPTIONS_REVENUE" | "ACTIVE_SUBSCRIPTIONS" | "NEXT_90DAYS_SHIPPED_SUBSCRIPTION_UNITS" | "NEXT_60DAYS_SHIPPED_SUBSCRIPTION_UNITS" | "NEXT_30DAYS_SHIPPED_SUBSCRIPTION_UNITS" | "NEXT_90DAYS_TOTAL_SUBSCRIPTIONS_REVENUE" | "NEXT_60DAYS_TOTAL_SUBSCRIPTIONS_REVENUE" | "NEXT_30DAYS_TOTAL_SUBSCRIPTIONS_REVENUE";

export type AmazonFullApiSchemaEligibilityStatus = "ELIGIBLE" | "INELIGIBLE" | "SUSPENDED" | "REPLENISHMENT_ONLY_ORDERING";

export type AmazonFullApiSchemaPreference = {
  autoEnrollment?: ReadonlyArray<AmazonFullApiSchemaAutoEnrollmentPreference>;
};

export type AmazonFullApiSchemaPromotion = {
  sellingPartnerFundedBaseDiscount?: AmazonFullApiSchemaDiscountFunding;
  sellingPartnerFundedTieredDiscount?: AmazonFullApiSchemaDiscountFunding;
  amazonFundedBaseDiscount?: AmazonFullApiSchemaDiscountFunding;
  amazonFundedTieredDiscount?: AmazonFullApiSchemaDiscountFunding;
};

export type AmazonFullApiSchemaListOffersSortKey = "ASIN" | "SELLING_PARTNER_FUNDED_BASE_DISCOUNT_PERCENTAGE" | "SELLING_PARTNER_FUNDED_TIERED_DISCOUNT_PERCENTAGE" | "AMAZON_FUNDED_BASE_DISCOUNT_PERCENTAGE" | "AMAZON_FUNDED_TIERED_DISCOUNT_PERCENTAGE" | "INVENTORY" | "PRICE" | "SUBSCRIPTION_COUNT" | "FULFILLMENT_NETWORK_ID_TYPE";

export type AmazonFullApiSchemaOfferProgramConfiguration = {
  preferences?: AmazonFullApiSchemaOfferProgramConfigurationPreferences;
  promotions?: AmazonFullApiSchemaOfferProgramConfigurationPromotions;
  enrollmentMethod?: AmazonFullApiSchemaEnrollmentMethod;
};

export type AmazonFullApiSchemaDeliveriesCondition = {
  condition?: "NEXT_30_DAYS_DELIVERIES_PAUSED_PRICING" | "NEXT_30_DAYS_DELIVERIES_PAUSED_NON_BUYABLE" | "NEXT_30_DAYS_DELIVERIES_AT_LOW_INVENTORY_RISK_ONLY" | "NEXT_30_DAYS_DELIVERIES_AT_LOW_INVENTORY_RISK" | "NO_ISSUES_FOR_NEXT_30_DAYS_DELIVERIES";
  next30DaysDeliveries?: number;
};

export type AmazonFullApiSchemaForecastDeliveries = {
  next15DaysDeliveries?: number;
  next30DaysDeliveries?: number;
  next60DaysDeliveries?: number;
  next90DaysDeliveries?: number;
};

export type AmazonFullApiSchemaOrderMetricsInterval = {
  interval: string;
  unitCount: number;
  orderItemCount: number;
  orderCount: number;
  averageUnitPrice: AmazonFullApiSchemaMoney7;
  totalSales: AmazonFullApiSchemaMoney7;
};

export type AmazonFullApiSchemaError27 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaBalanceType = "AVAILABLE" | "LOCKED_IN" | "LOCKED_OUT" | "TOTAL";

export type AmazonFullApiSchemaBigDecimal = number;

export type AmazonFullApiSchemaRateDirection = "BUY" | "SELL";

export type AmazonFullApiSchemaFeeType = "MISCELLANEOUS_FEE" | "TAX" | "TRANSACTION_FEE";

export type AmazonFullApiSchemaPayeeEntityType = "INDIVIDUAL" | "BUSINESS" | "TAX_AUTHORITY";

export type AmazonFullApiSchemaScheduleExpression = {
  scheduleExpressionType: AmazonFullApiSchemaScheduleExpressionType;
  recurringFrequency?: AmazonFullApiSchemaRecurringFrequency;
};

export type AmazonFullApiSchemaScheduleTransferType = "TIME_BASED";

export type AmazonFullApiSchemaPaymentPreferencePaymentType = "PERCENTAGE" | "AMOUNT";

export type AmazonFullApiSchemaMarketplaceParticipation = {
  marketplace: AmazonFullApiSchemaMarketplace;
  participation: AmazonFullApiSchemaParticipation;
  storeName: string;
};

export type AmazonFullApiSchemaError28 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaBusiness = {
  name: string;
  registeredBusinessAddress: AmazonFullApiSchemaAddress13;
  companyRegistrationNumber?: string;
  companyTaxIdentificationNumber?: string;
  nonLatinName?: string;
};

export type AmazonFullApiSchemaPrimaryContact = {
  name: string;
  address: AmazonFullApiSchemaAddress13;
  nonLatinName?: string;
};

export type AmazonFullApiSchemaServiceJobId = string;

export type AmazonFullApiSchemaScopeOfWork = {
  asin?: string;
  title?: string;
  quantity?: number;
  requiredSkills?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaSeller = {
  sellerId?: string;
};

export type AmazonFullApiSchemaServiceJobProvider = {
  serviceJobProviderId?: string;
};

export type AmazonFullApiSchemaAppointmentTime = {
  startTime: string;
  durationInMinutes: number;
};

export type AmazonFullApiSchemaAppointment = {
  appointmentId?: AmazonFullApiSchemaAppointmentId;
  appointmentStatus?: "ACTIVE" | "CANCELLED" | "COMPLETED";
  appointmentTime?: AmazonFullApiSchemaAppointmentTime;
  assignedTechnicians?: ReadonlyArray<AmazonFullApiSchemaTechnician>;
  rescheduledAppointmentId?: AmazonFullApiSchemaAppointmentId;
  poa?: AmazonFullApiSchemaPoa;
};

export type AmazonFullApiSchemaOrderId = string;

export type AmazonFullApiSchemaBuyer2 = {
  buyerId?: string;
  name?: string;
  phone?: string;
  isPrimeMember?: boolean;
};

export type AmazonFullApiSchemaAssociatedItem = {
  asin?: string;
  title?: string;
  quantity?: number;
  orderId?: AmazonFullApiSchemaOrderId;
  itemStatus?: "ACTIVE" | "CANCELLED" | "SHIPPED" | "DELIVERED";
  brandName?: string;
  itemDelivery?: AmazonFullApiSchemaItemDelivery;
  linkedAssets?: ReadonlyArray<AmazonFullApiSchemaLinkedAsset>;
};

export type AmazonFullApiSchemaServiceLocation = {
  serviceLocationType?: "IN_HOME" | "IN_STORE" | "ONLINE";
  address?: AmazonFullApiSchemaAddress14;
};

export type AmazonFullApiSchemaPayment = {
  amount?: AmazonFullApiSchemaMoneyAmount;
  instrument?: string;
};

export type AmazonFullApiSchemaError29 = {
  code: string;
  message: string;
  details?: string;
  errorLevel?: "ERROR" | "WARNING";
};

export type AmazonFullApiSchemaWarning = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaAppointmentResource = {
  resourceId?: string;
};

export type AmazonFullApiSchemaFulfillmentDocument = {
  uploadDestinationId?: string;
  contentSha256?: string;
};

export type AmazonFullApiSchemaRangeSlot = {
  startDateTime?: string;
  endDateTime?: string;
  capacity?: number;
};

export type AmazonFullApiSchemaAvailabilityRecord = {
  startTime: string;
  endTime: string;
  recurrence?: AmazonFullApiSchemaRecurrence;
  capacity?: number;
};

export type AmazonFullApiSchemaAppointmentSlot2 = {
  startTime?: string;
  endTime?: string;
  capacity?: number;
};

export type AmazonFullApiSchemaEncryptionDetails = {
  standard: "AES";
  initializationVector: string;
  key: string;
};

export type AmazonFullApiSchemaAddress10 = {
  Name?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City?: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  PostalCode?: string;
  CountryCode?: string;
  Phone?: string;
  AddressType?: AmazonFullApiSchemaAddressTypeEnum;
};

export type AmazonFullApiSchemaPaymentMethodDetailItemList2 = ReadonlyArray<string>;

export type AmazonFullApiSchemaPaymentInformationList2 = ReadonlyArray<AmazonFullApiSchemaPaymentInformation2>;

export type AmazonFullApiSchemaBuyerTaxInfo2 = {
  CompanyLegalName?: string;
  TaxingRegion?: string;
  TaxClassifications?: AmazonFullApiSchemaTaxClassificationList;
};

export type AmazonFullApiSchemaMarketplaceTaxInfo2 = {
  CompanyLegalName?: string;
  TaxingRegion?: string;
  TaxClassifications?: AmazonFullApiSchemaTaxClassificationList;
};

export type AmazonFullApiSchemaShipmentItems = ReadonlyArray<AmazonFullApiSchemaShipmentItem>;

export type AmazonFullApiSchemaError30 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaShipmentInvoiceStatusInfo = {
  AmazonShipmentId?: string;
  InvoiceStatus?: AmazonFullApiSchemaShipmentInvoiceStatus2;
};

export type AmazonFullApiSchemaStateOrRegion = string;

export type AmazonFullApiSchemaCity2 = string;

export type AmazonFullApiSchemaCountryCode3 = string;

export type AmazonFullApiSchemaPostalCode2 = string;

export type AmazonFullApiSchemaContainer2 = {
  containerType?: "PACKAGE";
  containerReferenceId: AmazonFullApiSchemaContainerReferenceId;
  value: AmazonFullApiSchemaCurrency4;
  dimensions: AmazonFullApiSchemaDimensions5;
  items: ReadonlyArray<AmazonFullApiSchemaContainerItem>;
  weight: AmazonFullApiSchemaWeight6;
};

export type AmazonFullApiSchemaShipmentId2 = string;

export type AmazonFullApiSchemaRateList = ReadonlyArray<AmazonFullApiSchemaRate>;

export type AmazonFullApiSchemaError31 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaAcceptedRate = {
  totalCharge?: AmazonFullApiSchemaCurrency4;
  billedWeight?: AmazonFullApiSchemaWeight6;
  serviceType?: AmazonFullApiSchemaServiceType;
  promise?: AmazonFullApiSchemaShippingPromiseSet;
};

export type AmazonFullApiSchemaParty = {
  accountId?: AmazonFullApiSchemaAccountId2;
};

export type AmazonFullApiSchemaLabelResultList = ReadonlyArray<AmazonFullApiSchemaLabelResult>;

export type AmazonFullApiSchemaLabelStream = string;

export type AmazonFullApiSchemaServiceRate = {
  totalCharge: AmazonFullApiSchemaCurrency4;
  billableWeight: AmazonFullApiSchemaWeight6;
  serviceType: AmazonFullApiSchemaServiceType;
  promise: AmazonFullApiSchemaShippingPromiseSet;
};

export type AmazonFullApiSchemaContainerSpecification = {
  dimensions: AmazonFullApiSchemaDimensions5;
  weight: AmazonFullApiSchemaWeight6;
};

export type AmazonFullApiSchemaServiceRateList = ReadonlyArray<AmazonFullApiSchemaServiceRate>;

export type AmazonFullApiSchemaAccountId2 = string;

export type AmazonFullApiSchemaTrackingId3 = string;

export type AmazonFullApiSchemaTrackingSummary = {
  status?: string;
};

export type AmazonFullApiSchemaPromisedDeliveryDate = string;

export type AmazonFullApiSchemaEventList = ReadonlyArray<AmazonFullApiSchemaEvent2>;

export type AmazonFullApiSchemaStateOrRegion2 = string;

export type AmazonFullApiSchemaCity3 = string;

export type AmazonFullApiSchemaCountryCode4 = string;

export type AmazonFullApiSchemaPostalCode3 = string;

export type AmazonFullApiSchemaGeocode = {
  latitude?: string;
  longitude?: string;
};

export type AmazonFullApiSchemaPackage3 = {
  dimensions: AmazonFullApiSchemaDimensions6;
  weight: AmazonFullApiSchemaWeight7;
  insuredValue: AmazonFullApiSchemaCurrency2;
  isHazmat?: boolean;
  sellerDisplayName?: string;
  charges?: AmazonFullApiSchemaChargeList;
  packageClientReferenceId: AmazonFullApiSchemaPackageClientReferenceId;
  items: AmazonFullApiSchemaItemList2;
};

export type AmazonFullApiSchemaCollectOnDelivery = {
  amount: AmazonFullApiSchemaCurrency2;
};

export type AmazonFullApiSchemaTaxDetail = {
  taxType: AmazonFullApiSchemaTaxType;
  taxRegistrationNumber: string;
};

export type AmazonFullApiSchemaChannelType = "AMAZON" | "EXTERNAL";

export type AmazonFullApiSchemaAmazonOrderDetails = {
  orderId: string;
};

export type AmazonFullApiSchemaAmazonShipmentDetails = {
  shipmentId: string;
};

export type AmazonFullApiSchemaClientReferenceDetail = {
  clientReferenceType: "IntegratorShipperId" | "IntegratorMerchantId";
  clientReferenceId: string;
};

export type AmazonFullApiSchemaAccessPointId = string;

export type AmazonFullApiSchemaCarrierAccount = {
  carrierAccountId: AmazonFullApiSchemaAccountId;
  carrierId: AmazonFullApiSchemaCarrierId;
};

export type AmazonFullApiSchemaRateList2 = ReadonlyArray<AmazonFullApiSchemaRate2>;

export type AmazonFullApiSchemaIneligibleRateList = ReadonlyArray<AmazonFullApiSchemaIneligibleRate>;

export type AmazonFullApiSchemaDocumentFormat = "PDF" | "PNG" | "ZPL";

export type AmazonFullApiSchemaDocumentSize = {
  width: number;
  length: number;
  unit: "INCH" | "CENTIMETER";
};

export type AmazonFullApiSchemaDpi = number;

export type AmazonFullApiSchemaPageLayout = string;

export type AmazonFullApiSchemaNeedFileJoining = boolean;

export type AmazonFullApiSchemaDocumentType = "PACKSLIP" | "LABEL" | "RECEIPT" | "CUSTOM_FORM";

export type AmazonFullApiSchemaRequestedLabelCustomization = {
  requestAttributes?: AmazonFullApiSchemaRequestAttributes;
};

export type AmazonFullApiSchemaShipmentId3 = string;

export type AmazonFullApiSchemaPackageDocumentDetailList = ReadonlyArray<AmazonFullApiSchemaPackageDocumentDetail>;

export type AmazonFullApiSchemaRequestedValueAddedService = {
  id: string;
};

export type AmazonFullApiSchemaPromise = {
  deliveryWindow?: AmazonFullApiSchemaTimeWindow2;
  pickupWindow?: AmazonFullApiSchemaTimeWindow2;
};

export type AmazonFullApiSchemaBenefits = {
  includedBenefits: AmazonFullApiSchemaIncludedBenefits;
  excludedBenefits: AmazonFullApiSchemaExcludedBenefits;
};

export type AmazonFullApiSchemaMerchantId = string;

export type AmazonFullApiSchemaOneClickShipmentValueAddedService = {
  id: string;
  amount?: AmazonFullApiSchemaCurrency2;
};

export type AmazonFullApiSchemaServiceIds = ReadonlyArray<string>;

export type AmazonFullApiSchemaCarrier2 = {
  id: AmazonFullApiSchemaCarrierId;
  name: AmazonFullApiSchemaCarrierName;
};

export type AmazonFullApiSchemaService = {
  id: AmazonFullApiSchemaServiceId;
  name: AmazonFullApiSchemaServiceName;
};

export type AmazonFullApiSchemaAlternateLegTrackingId = string;

export type AmazonFullApiSchemaEvent = {
  eventCode: AmazonFullApiSchemaEventCode;
  location?: AmazonFullApiSchemaLocation;
  eventTime: string;
  shipmentType?: AmazonFullApiSchemaShipmentType;
};

export type AmazonFullApiSchemaTrackingSummary2 = {
  status?: AmazonFullApiSchemaStatus2;
  trackingDetailCodes?: AmazonFullApiSchemaTrackingDetailCodes;
};

export type AmazonFullApiSchemaPackageDocumentDetail = {
  packageClientReferenceId: AmazonFullApiSchemaPackageClientReferenceId;
  packageDocuments: AmazonFullApiSchemaPackageDocumentList;
  trackingId?: AmazonFullApiSchemaTrackingId;
};

export type AmazonFullApiSchemaLinkableCarrier = {
  carrierId?: AmazonFullApiSchemaCarrierId;
  linkableAccountTypes?: AmazonFullApiSchemaLinkableAccountTypeList;
};

export type AmazonFullApiSchemaActiveAccount = {
  accountId?: AmazonFullApiSchemaAccountId;
  carrierId?: AmazonFullApiSchemaCarrierId;
};

export type AmazonFullApiSchemaCarrierAccountAttribute = {
  attributeName?: string;
  propertyGroup?: string;
  value?: string;
};

export type AmazonFullApiSchemaCollectionFormsHistoryRecord = {
  carrierName?: AmazonFullApiSchemaCarrierName;
  creationDate?: string;
  generationStatus?: AmazonFullApiSchemaGenerationStatus;
  collectionFormId?: AmazonFullApiSchemaCollectionFormId;
  shipFromAddress?: AmazonFullApiSchemaAddress6;
};

export type AmazonFullApiSchemaUnmanifestedCarrierInformation = {
  carrierId?: AmazonFullApiSchemaCarrierId;
  carrierName?: AmazonFullApiSchemaCarrierName;
  unmanifestedShipmentLocationList?: AmazonFullApiSchemaUnmanifestedShipmentLocationList;
};

export type AmazonFullApiSchemaAccessPointsMap = {
  readonly [key: string]: AmazonFullApiSchemaAccessPointList | undefined;
};

export type AmazonFullApiSchemaAdditionalAddressNotes = string;

export type AmazonFullApiSchemaGetSchemaResponse2 = {
  _links?: {
  self: AmazonFullApiSchemaLinkObject2;
};
  payload?: AmazonFullApiSchemaSchema2;
  errors?: AmazonFullApiSchemaErrorList31;
};

export type AmazonFullApiSchemaSolicitationsAction = {
  name: string;
};

export type AmazonFullApiSchemaError32 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaOperationalConfiguration = {
  contactDetails?: AmazonFullApiSchemaContactDetails;
  throughputConfig?: AmazonFullApiSchemaThroughputConfig;
  operatingHoursByDay?: AmazonFullApiSchemaOperatingHoursByDay;
  handlingTime?: AmazonFullApiSchemaDuration;
};

export type AmazonFullApiSchemaOutboundCapability = {
  isSupported?: boolean;
  operationalConfiguration?: AmazonFullApiSchemaOperationalConfiguration;
  returnLocation?: AmazonFullApiSchemaReturnLocation;
  deliveryChannel?: AmazonFullApiSchemaDeliveryChannel;
  pickupChannel?: AmazonFullApiSchemaPickupChannel;
};

export type AmazonFullApiSchemaServicesCapability = {
  isSupported?: boolean;
  operationalConfiguration?: AmazonFullApiSchemaOperationalConfiguration;
};

export type AmazonFullApiSchemaError33 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaEngineOutput = {
  value: number;
  unit: AmazonFullApiSchemaEngineOutputUnit;
};

export type AmazonFullApiSchemaMonthAndYear = {
  year?: AmazonFullApiSchemaYear;
  month?: AmazonFullApiSchemaMonth;
};

export type AmazonFullApiSchemaVehicleStatusInCatalog = "ACTIVE" | "DELETED";

export type AmazonFullApiSchemaVehicleIdentifiers = {
  standard: AmazonFullApiSchemaVehicleStandard;
  value: string;
};

export type AmazonFullApiSchemaPartyIdentification2 = {
  partyId: string;
};

export type AmazonFullApiSchemaItemDetails = {
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  availableQuantity: AmazonFullApiSchemaItemQuantity;
  isObsolete?: boolean;
};

export type AmazonFullApiSchemaError34 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaPagination11 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaError35 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaOrderDetails2 = {
  customerOrderNumber: string;
  orderDate: string;
  orderStatus?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
  shipmentDetails: AmazonFullApiSchemaShipmentDetails5;
  taxTotal?: {
  taxLineItem?: AmazonFullApiSchemaTaxLineItem;
};
  sellingParty: AmazonFullApiSchemaPartyIdentification3;
  shipFromParty: AmazonFullApiSchemaPartyIdentification3;
  shipToParty: AmazonFullApiSchemaAddress15;
  billToParty: AmazonFullApiSchemaPartyIdentification3;
  items: ReadonlyArray<AmazonFullApiSchemaOrderItem4>;
};

export type AmazonFullApiSchemaAcknowledgementStatus = {
  code?: string;
  description?: string;
};

export type AmazonFullApiSchemaPartyIdentification3 = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress15;
  taxInfo?: AmazonFullApiSchemaTaxRegistrationDetails2;
};

export type AmazonFullApiSchemaOrderItemAcknowledgement = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  acknowledgedQuantity: AmazonFullApiSchemaItemQuantity2;
};

export type AmazonFullApiSchemaShipmentDetails2 = {
  isPriorityShipment: boolean;
  isScheduledDeliveryShipment?: boolean;
  isPslipRequired: boolean;
  isGift?: boolean;
  shipMethod: string;
  shipmentDates: AmazonFullApiSchemaShipmentDates;
  messageToCustomer: string;
};

export type AmazonFullApiSchemaTaxItemDetails = {
  taxLineItem?: AmazonFullApiSchemaTaxLineItem2;
};

export type AmazonFullApiSchemaPartyIdentification4 = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress11;
  taxInfo?: AmazonFullApiSchemaTaxRegistrationDetails3;
};

export type AmazonFullApiSchemaAddress11 = {
  name: string;
  attention?: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaOrderItem2 = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  title?: string;
  orderedQuantity: AmazonFullApiSchemaItemQuantity3;
  scheduledDeliveryShipment?: AmazonFullApiSchemaScheduledDeliveryShipment;
  giftDetails?: AmazonFullApiSchemaGiftDetails;
  netPrice: AmazonFullApiSchemaMoney8;
  taxDetails?: AmazonFullApiSchemaTaxItemDetails;
  totalPrice?: AmazonFullApiSchemaMoney8;
  buyerCustomizedInfo?: AmazonFullApiSchemaBuyerCustomizedInfoDetail;
};

export type AmazonFullApiSchemaAcknowledgementStatus2 = {
  code?: string;
  description?: string;
};

export type AmazonFullApiSchemaOrderItemAcknowledgement2 = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  acknowledgedQuantity: AmazonFullApiSchemaItemQuantity3;
};

export type AmazonFullApiSchemaPartyIdentification5 = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress16;
  taxRegistrationDetails?: ReadonlyArray<AmazonFullApiSchemaTaxRegistrationDetail>;
};

export type AmazonFullApiSchemaMoney4 = {
  currencyCode: string;
  amount: AmazonFullApiSchemaDecimal4;
};

export type AmazonFullApiSchemaTaxDetail2 = {
  taxType: "CGST" | "SGST" | "CESS" | "UTGST" | "IGST" | "MwSt." | "PST" | "TVA" | "VAT" | "GST" | "ST" | "Consumption" | "MutuallyDefined" | "DomesticVAT";
  taxRate?: AmazonFullApiSchemaDecimal4;
  taxAmount: AmazonFullApiSchemaMoney4;
  taxableAmount?: AmazonFullApiSchemaMoney4;
};

export type AmazonFullApiSchemaAdditionalDetails = {
  type: "SUR" | "OCR";
  detail: string;
  languageCode?: string;
};

export type AmazonFullApiSchemaChargeDetails = {
  type: "GIFTWRAP" | "FULFILLMENT" | "MARKETINGINSERT" | "PACKAGING" | "LOADING" | "FREIGHTOUT" | "TAX_COLLECTED_AT_SOURCE";
  chargeAmount: AmazonFullApiSchemaMoney4;
  taxDetails?: ReadonlyArray<AmazonFullApiSchemaTaxDetail2>;
};

export type AmazonFullApiSchemaInvoiceItem = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  invoicedQuantity: AmazonFullApiSchemaItemQuantity4;
  netCost: AmazonFullApiSchemaMoney4;
  purchaseOrderNumber: string;
  vendorOrderNumber?: string;
  hsnCode?: string;
  taxDetails?: ReadonlyArray<AmazonFullApiSchemaTaxDetail2>;
  chargeDetails?: ReadonlyArray<AmazonFullApiSchemaChargeDetails>;
};

export type AmazonFullApiSchemaError36 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaPartyIdentification6 = {
  partyId: string;
};

export type AmazonFullApiSchemaTestCaseData = {
  scenarios?: ReadonlyArray<AmazonFullApiSchemaScenario>;
};

export type AmazonFullApiSchemaPagination12 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaError37 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaPartyIdentification7 = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress17;
  taxRegistrationDetails?: ReadonlyArray<AmazonFullApiSchemaTaxRegistrationDetails4>;
};

export type AmazonFullApiSchemaContainer3 = {
  containerType: "carton" | "pallet";
  containerIdentifier: string;
  trackingNumber?: string;
  manifestId?: string;
  manifestDate?: string;
  shipMethod?: string;
  scacCode?: string;
  carrier?: string;
  containerSequenceNumber?: number;
  dimensions?: AmazonFullApiSchemaDimensions7;
  weight: AmazonFullApiSchemaWeight8;
  packedItems: ReadonlyArray<AmazonFullApiSchemaPackedItem2>;
};

export type AmazonFullApiSchemaLabelData2 = {
  packageIdentifier?: string;
  trackingNumber?: string;
  shipMethod?: string;
  shipMethodName?: string;
  content: string;
};

export type AmazonFullApiSchemaShipmentDetails3 = {
  shippedDate: string;
  shipmentStatus: "SHIPPED" | "FLOOR_DENIAL";
  isPriorityShipment?: boolean;
  vendorOrderNumber?: string;
  estimatedDeliveryDate?: string;
};

export type AmazonFullApiSchemaItem6 = {
  itemSequenceNumber: number;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  shippedQuantity: AmazonFullApiSchemaItemQuantity5;
};

export type AmazonFullApiSchemaStatusUpdateDetails = {
  trackingNumber: string;
  statusCode: string;
  reasonCode: string;
  statusDateTime: string;
  statusLocationAddress: AmazonFullApiSchemaAddress17;
  shipmentSchedule?: {
  estimatedDeliveryDateTime?: string;
  apptWindowStartDateTime?: string;
  apptWindowEndDateTime?: string;
};
};

export type AmazonFullApiSchemaAddress12 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion?: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaTaxRegistrationDetails = {
  taxRegistrationType?: "VAT" | "GST";
  taxRegistrationNumber: string;
  taxRegistrationAddress?: AmazonFullApiSchemaAddress12;
  taxRegistrationMessages?: string;
};

export type AmazonFullApiSchemaDimensions3 = {
  length: AmazonFullApiSchemaDecimal5;
  width: AmazonFullApiSchemaDecimal5;
  height: AmazonFullApiSchemaDecimal5;
  unitOfMeasure: "IN" | "CM";
};

export type AmazonFullApiSchemaWeight5 = {
  unitOfMeasure: "KG" | "LB";
  value: AmazonFullApiSchemaDecimal5;
};

export type AmazonFullApiSchemaPackedItem = {
  itemSequenceNumber: number;
  buyerProductIdentifier?: string;
  pieceNumber?: number;
  vendorProductIdentifier?: string;
  packedQuantity: AmazonFullApiSchemaItemQuantity6;
};

export type AmazonFullApiSchemaShipmentDetails4 = {
  shippedDate: string;
  shipmentStatus: "SHIPPED" | "FLOOR_DENIAL";
  isPriorityShipment?: boolean;
  vendorOrderNumber?: string;
  estimatedDeliveryDate?: string;
};

export type AmazonFullApiSchemaItem7 = {
  itemSequenceNumber: number;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  shippedQuantity: AmazonFullApiSchemaItemQuantity6;
};

export type AmazonFullApiSchemaStatusUpdateDetails2 = {
  trackingNumber: string;
  statusCode: string;
  reasonCode: string;
  statusDateTime: string;
  statusLocationAddress: AmazonFullApiSchemaAddress12;
  shipmentSchedule?: AmazonFullApiSchemaShipmentSchedule;
};

export type AmazonFullApiSchemaPackage4 = {
  packageTrackingNumber: string;
};

export type AmazonFullApiSchemaContainerLabelFormat = "PNG" | "ZPL";

export type AmazonFullApiSchemaTransaction4 = {
  transactionId: string;
  status: "Failure" | "Processing" | "Success";
  errors?: AmazonFullApiSchemaErrorList37;
};

export type AmazonFullApiSchemaError38 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaErrorList42 = {
  errors: ReadonlyArray<AmazonFullApiSchemaError43>;
};

export type AmazonFullApiSchemaDateTime5 = string;

export type AmazonFullApiSchemaPartyIdentification8 = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress18;
  taxRegistrationDetails?: ReadonlyArray<AmazonFullApiSchemaTaxRegistrationDetails5>;
};

export type AmazonFullApiSchemaPaymentTerms = {
  type?: "Basic" | "EndOfMonth" | "FixedDate" | "Proximo" | "PaymentDueUponReceiptOfInvoice" | "LetterofCredit";
  discountPercent?: AmazonFullApiSchemaDecimal6;
  discountDueDays?: number;
  netDueDays?: number;
};

export type AmazonFullApiSchemaMoney5 = {
  currencyCode?: string;
  amount?: AmazonFullApiSchemaDecimal6;
};

export type AmazonFullApiSchemaTaxDetails2 = {
  taxType: "CGST" | "SGST" | "CESS" | "UTGST" | "IGST" | "MwSt." | "PST" | "TVA" | "VAT" | "GST" | "ST" | "Consumption" | "MutuallyDefined" | "DomesticVAT";
  taxRate?: AmazonFullApiSchemaDecimal6;
  taxAmount: AmazonFullApiSchemaMoney5;
  taxableAmount?: AmazonFullApiSchemaMoney5;
};

export type AmazonFullApiSchemaAdditionalDetails2 = {
  type: "SUR" | "OCR" | "CartonCount";
  detail: string;
  languageCode?: string;
};

export type AmazonFullApiSchemaChargeDetails2 = {
  type: "Freight" | "Packing" | "Duty" | "Service" | "SmallOrder" | "InsurancePlacementCost" | "InsuranceFee" | "SpecialHandlingService" | "CollectionAndRecyclingService" | "EnvironmentalProtectionService" | "TaxCollectedAtSource";
  description?: string;
  chargeAmount: AmazonFullApiSchemaMoney5;
  taxDetails?: ReadonlyArray<AmazonFullApiSchemaTaxDetails2>;
};

export type AmazonFullApiSchemaAllowanceDetails = {
  type: "Discount" | "DiscountIncentive" | "Defective" | "Promotional" | "UnsaleableMerchandise" | "Special";
  description?: string;
  allowanceAmount: AmazonFullApiSchemaMoney5;
  taxDetails?: ReadonlyArray<AmazonFullApiSchemaTaxDetails2>;
};

export type AmazonFullApiSchemaInvoiceItem2 = {
  itemSequenceNumber: number;
  amazonProductIdentifier?: string;
  vendorProductIdentifier?: string;
  invoicedQuantity: AmazonFullApiSchemaItemQuantity7;
  netCost: AmazonFullApiSchemaMoney5;
  netCostUnitOfMeasure?: AmazonFullApiSchemaNetCostUnitOfMeasure;
  purchaseOrderNumber?: string;
  hsnCode?: string;
  creditNoteDetails?: AmazonFullApiSchemaCreditNoteDetails;
  taxDetails?: ReadonlyArray<AmazonFullApiSchemaTaxDetails2>;
  chargeDetails?: ReadonlyArray<AmazonFullApiSchemaChargeDetails2>;
  allowanceDetails?: ReadonlyArray<AmazonFullApiSchemaAllowanceDetails>;
};

export type AmazonFullApiSchemaError39 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaPagination13 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaError40 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaOrderDetails3 = {
  purchaseOrderDate: string;
  purchaseOrderChangedDate?: string;
  purchaseOrderStateChangedDate: string;
  purchaseOrderType?: "RegularOrder" | "ConsignedOrder" | "NewProductIntroduction" | "RushOrder";
  importDetails?: AmazonFullApiSchemaImportDetails2;
  dealCode?: string;
  paymentMethod?: "Invoice" | "Consignment" | "CreditCard" | "Prepaid";
  buyingParty?: AmazonFullApiSchemaPartyIdentification9;
  sellingParty?: AmazonFullApiSchemaPartyIdentification9;
  shipToParty?: AmazonFullApiSchemaPartyIdentification9;
  billToParty?: AmazonFullApiSchemaPartyIdentification9;
  shipWindow?: AmazonFullApiSchemaDateTimeInterval;
  deliveryWindow?: AmazonFullApiSchemaDateTimeInterval;
  items: ReadonlyArray<AmazonFullApiSchemaOrderItem5>;
};

export type AmazonFullApiSchemaPartyIdentification9 = {
  partyId: string;
  address?: AmazonFullApiSchemaAddress19;
  taxInfo?: AmazonFullApiSchemaTaxRegistrationDetails6;
};

export type AmazonFullApiSchemaOrderAcknowledgementItem3 = {
  itemSequenceNumber?: string;
  amazonProductIdentifier?: string;
  vendorProductIdentifier?: string;
  orderedQuantity: AmazonFullApiSchemaItemQuantity8;
  netCost?: AmazonFullApiSchemaMoney9;
  listPrice?: AmazonFullApiSchemaMoney9;
  discountMultiplier?: string;
  itemAcknowledgements: ReadonlyArray<AmazonFullApiSchemaOrderItemAcknowledgement3>;
};

export type AmazonFullApiSchemaOrderStatus = {
  purchaseOrderNumber: string;
  purchaseOrderStatus: "OPEN" | "CLOSED";
  purchaseOrderDate: string;
  lastUpdatedDate?: string;
  sellingParty: AmazonFullApiSchemaPartyIdentification9;
  shipToParty: AmazonFullApiSchemaPartyIdentification9;
  itemStatus: AmazonFullApiSchemaItemStatus;
};

export type AmazonFullApiSchemaTransportationDetailsForShipmentConfirmation = {
  carrierScac?: string;
  carrierShipmentReferenceNumber?: string;
  transportationMode?: "Road" | "Air" | "Ocean";
  billOfLadingNumber?: string;
};

export type AmazonFullApiSchemaPartyIdentification10 = {
  address?: AmazonFullApiSchemaAddress20;
  partyId: string;
  taxRegistrationDetails?: ReadonlyArray<AmazonFullApiSchemaTaxRegistrationDetails7>;
};

export type AmazonFullApiSchemaShipmentMeasurements = {
  grossShipmentWeight?: AmazonFullApiSchemaWeight9;
  shipmentVolume?: AmazonFullApiSchemaVolume;
  cartonCount?: number;
  palletCount?: number;
};

export type AmazonFullApiSchemaImportDetails = {
  methodOfPayment?: "PaidByBuyer" | "CollectOnDelivery" | "DefinedByBuyerAndSeller" | "FOBPortOfCall" | "PrepaidBySeller" | "PaidBySeller";
  sealNumber?: string;
  route?: AmazonFullApiSchemaRoute;
  importContainers?: string;
  billableWeight?: AmazonFullApiSchemaWeight9;
  estimatedShipByDate?: string;
  handlingInstructions?: "Oversized" | "Fragile" | "Food" | "HandleWithCare";
};

export type AmazonFullApiSchemaItem8 = {
  itemSequenceNumber: string;
  amazonProductIdentifier?: string;
  vendorProductIdentifier?: string;
  shippedQuantity: AmazonFullApiSchemaItemQuantity9;
  itemDetails?: AmazonFullApiSchemaItemDetails2;
};

export type AmazonFullApiSchemaCarton = {
  cartonIdentifiers?: ReadonlyArray<AmazonFullApiSchemaContainerIdentification>;
  cartonSequenceNumber: string;
  dimensions?: AmazonFullApiSchemaDimensions8;
  weight?: AmazonFullApiSchemaWeight9;
  trackingNumber?: string;
  items: ReadonlyArray<AmazonFullApiSchemaContainerItem2>;
};

export type AmazonFullApiSchemaPallet2 = {
  palletIdentifiers: ReadonlyArray<AmazonFullApiSchemaContainerIdentification>;
  tier?: number;
  block?: number;
  dimensions?: AmazonFullApiSchemaDimensions8;
  weight?: AmazonFullApiSchemaWeight9;
  cartonReferenceDetails?: AmazonFullApiSchemaCartonReferenceDetails;
  items?: ReadonlyArray<AmazonFullApiSchemaContainerItem2>;
};

export type AmazonFullApiSchemaError41 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaShipmentStatusDetails = {
  shipmentStatus?: "Created" | "TransportationRequested" | "CarrierAssigned" | "Shipped";
  shipmentStatusDate?: string;
};

export type AmazonFullApiSchemaTransportShipmentMeasurements = {
  totalCartonCount?: number;
  totalPalletStackable?: number;
  totalPalletNonStackable?: number;
  shipmentWeight?: AmazonFullApiSchemaWeight9;
  shipmentVolume?: AmazonFullApiSchemaVolume;
};

export type AmazonFullApiSchemaCollectFreightPickupDetails = {
  requestedPickUp?: string;
  scheduledPickUp?: string;
  carrierAssignmentDate?: string;
};

export type AmazonFullApiSchemaPurchaseOrders = {
  purchaseOrderNumber?: string;
  purchaseOrderDate?: string;
  shipWindow?: string;
  items?: ReadonlyArray<AmazonFullApiSchemaPurchaseOrderItems>;
};

export type AmazonFullApiSchemaContainers = {
  containerType: "carton" | "pallet";
  containerSequenceNumber?: string;
  containerIdentifiers: ReadonlyArray<AmazonFullApiSchemaContainerIdentification>;
  trackingNumber?: string;
  dimensions?: AmazonFullApiSchemaDimensions8;
  weight?: AmazonFullApiSchemaWeight9;
  tier?: number;
  block?: number;
  innerContainersDetails?: AmazonFullApiSchemaInnerContainersDetails;
  packedItems?: ReadonlyArray<AmazonFullApiSchemaPackedItems>;
};

export type AmazonFullApiSchemaTransportationDetails2 = {
  shipMode?: "TruckLoad" | "LessThanTruckLoad" | "SmallParcel";
  transportationMode?: "Road" | "Air" | "Ocean";
  shippedDate?: string;
  estimatedDeliveryDate?: string;
  shipmentDeliveryDate?: string;
  carrierDetails?: AmazonFullApiSchemaCarrierDetails;
  billOfLadingNumber?: string;
};

export type AmazonFullApiSchemaPagination14 = {
  nextToken?: string;
};

export type AmazonFullApiSchemaTransportLabel = {
  labelCreateDateTime?: string;
  shipmentInformation?: AmazonFullApiSchemaShipmentInformation;
  labelData?: ReadonlyArray<AmazonFullApiSchemaLabelData3>;
};

export type AmazonFullApiSchemaTransaction5 = {
  transactionId: string;
  status: "Failure" | "Processing" | "Success";
  errors?: AmazonFullApiSchemaErrorList41;
};

export type AmazonFullApiSchemaError42 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaDistributionPackageContents = {
  packages?: ReadonlyArray<AmazonFullApiSchemaDistributionPackageQuantity>;
  products?: ReadonlyArray<AmazonFullApiSchemaProductQuantity>;
};

export type AmazonFullApiSchemaMeasurementData = {
  dimensions?: AmazonFullApiSchemaPackageDimensions3;
  volume?: AmazonFullApiSchemaPackageVolume;
  weight: AmazonFullApiSchemaPackageWeight;
};

export type AmazonFullApiSchemaDistributionPackageType = "CASE" | "PALLET";

export type AmazonFullApiSchemaLabelOwner2 = "AMAZON" | "SELF";

export type AmazonFullApiSchemaPrepCategory2 = "ADULT" | "BABY" | "FC_PROVIDED" | "FRAGILE" | "GRANULAR" | "HANGER" | "LIQUID" | "PERFORATED" | "SET" | "SHARP" | "SMALL" | "TEXTILE" | "NO_PREP" | "UNKNOWN";

export type AmazonFullApiSchemaPrepInstruction2 = {
  prepOwner?: AmazonFullApiSchemaPrepOwner2;
  prepType?: string;
};

export type AmazonFullApiSchemaPrepOwner2 = "AMAZON" | "SELF";

export type AmazonFullApiSchemaContentModule = {
  contentModuleType: AmazonFullApiSchemaContentModuleType;
  standardCompanyLogo?: AmazonFullApiSchemaStandardCompanyLogoModule;
  standardComparisonTable?: AmazonFullApiSchemaStandardComparisonTableModule;
  standardFourImageText?: AmazonFullApiSchemaStandardFourImageTextModule;
  standardFourImageTextQuadrant?: AmazonFullApiSchemaStandardFourImageTextQuadrantModule;
  standardHeaderImageText?: AmazonFullApiSchemaStandardHeaderImageTextModule;
  standardImageSidebar?: AmazonFullApiSchemaStandardImageSidebarModule;
  standardImageTextOverlay?: AmazonFullApiSchemaStandardImageTextOverlayModule;
  standardMultipleImageText?: AmazonFullApiSchemaStandardMultipleImageTextModule;
  standardProductDescription?: AmazonFullApiSchemaStandardProductDescriptionModule;
  standardSingleImageHighlights?: AmazonFullApiSchemaStandardSingleImageHighlightsModule;
  standardSingleImageSpecsDetail?: AmazonFullApiSchemaStandardSingleImageSpecsDetailModule;
  standardSingleSideImage?: AmazonFullApiSchemaStandardSingleSideImageModule;
  standardTechSpecs?: AmazonFullApiSchemaStandardTechSpecsModule;
  standardText?: AmazonFullApiSchemaStandardTextModule;
  standardThreeImageText?: AmazonFullApiSchemaStandardThreeImageTextModule;
};

export type AmazonFullApiSchemaMarketplaceId4 = string;

export type AmazonFullApiSchemaContentStatus = "APPROVED" | "DRAFT" | "REJECTED" | "SUBMITTED";

export type AmazonFullApiSchemaContentBadgeSet = ReadonlyArray<AmazonFullApiSchemaContentBadge>;

export type AmazonFullApiSchemaAsinBadgeSet = ReadonlyArray<AmazonFullApiSchemaAsinBadge>;

export type AmazonFullApiSchemaContentReferenceKeySet = ReadonlyArray<AmazonFullApiSchemaContentReferenceKey>;

export type AmazonFullApiSchemaItemIdentifier2 = {
  identifierType: string;
  identifier: string;
};

export type AmazonFullApiSchemaItemImage = {
  variant: "MAIN" | "PT01" | "PT02" | "PT03" | "PT04" | "PT05" | "PT06" | "PT07" | "PT08" | "SWCH";
  link: string;
  height: number;
  width: number;
};

export type AmazonFullApiSchemaItemSalesRank = {
  title: string;
  link?: string;
  rank: number;
};

export type AmazonFullApiSchemaItemBrowseClassification = {
  displayName: string;
  classificationId: string;
  parent?: AmazonFullApiSchemaItemBrowseClassification;
};

export type AmazonFullApiSchemaDimensions4 = {
  height?: AmazonFullApiSchemaDimension3;
  length?: AmazonFullApiSchemaDimension3;
  weight?: AmazonFullApiSchemaDimension3;
  width?: AmazonFullApiSchemaDimension3;
};

export type AmazonFullApiSchemaItemIdentifier3 = {
  identifierType: string;
  identifier: string;
};

export type AmazonFullApiSchemaItemImage2 = {
  variant: "MAIN" | "PT01" | "PT02" | "PT03" | "PT04" | "PT05" | "PT06" | "PT07" | "PT08" | "SWCH";
  link: string;
  height: number;
  width: number;
};

export type AmazonFullApiSchemaItemRelationship = {
  childAsins?: ReadonlyArray<string>;
  parentAsins?: ReadonlyArray<string>;
  variationTheme?: AmazonFullApiSchemaItemVariationTheme;
  type: "VARIATION" | "PACKAGE_HIERARCHY";
};

export type AmazonFullApiSchemaItemClassificationSalesRank = {
  classificationId: string;
  title: string;
  link?: string;
  rank: number;
};

export type AmazonFullApiSchemaItemDisplayGroupSalesRank = {
  websiteDisplayGroup: string;
  title: string;
  link?: string;
  rank: number;
};

export type AmazonFullApiSchemaItemContributor = {
  role: AmazonFullApiSchemaItemContributorRole;
  value: string;
};

export type AmazonFullApiSchemaItemVendorDetailsCategory = {
  displayName?: string;
  value?: string;
};

export type AmazonFullApiSchemaItemReviewTopicMetrics = {
  numberOfMentions?: number;
  occurrencePercentage?: number;
  starRatingImpact?: number;
};

export type AmazonFullApiSchemaItemReviewBrowseNodeMetrics = {
  occurrencePercentage?: AmazonFullApiSchemaBrowseNodeOccurrence;
  starRatingImpact?: AmazonFullApiSchemaBrowseNodeStarRatingImpact;
};

export type AmazonFullApiSchemaChildAsinMetrics = {
  mostMentions?: AmazonFullApiSchemaChildAsinMentionMetrics;
  leastMentions?: AmazonFullApiSchemaChildAsinMentionMetrics;
};

export type AmazonFullApiSchemaItemReviewSubtopic = {
  subtopic: string;
  metrics: AmazonFullApiSchemaItemReviewSubtopicMetrics;
  reviewSnippets?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaBrowseNodeReviewTopicMetrics = {
  occurrencePercentage?: AmazonFullApiSchemaBrowseNodeAllOccurrence;
  starRatingImpact?: AmazonFullApiSchemaBrowseNodeAllStarRatingImpact;
};

export type AmazonFullApiSchemaBrowseNodeSubtopic = {
  subtopic: string;
  metrics: AmazonFullApiSchemaBrowseNodeReviewSubtopicMetrics;
  reviewSnippets?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaItemReviewTrendPoint = {
  dateRange: AmazonFullApiSchemaDateRange;
  asinMetrics: AmazonFullApiSchemaReviewTrendMetrics;
  parentAsinMetrics?: AmazonFullApiSchemaReviewTrendMetrics;
  browseNodeMetrics?: AmazonFullApiSchemaBrowseNodeTrendMetrics;
};

export type AmazonFullApiSchemaBrowseNodeReviewTrendPoint = {
  dateRange: AmazonFullApiSchemaDateRange;
  browseNodeMetrics: AmazonFullApiSchemaBrowseNodeReviewTrendMetrics;
};

export type AmazonFullApiSchemaBrowseNodeOccurrence = {
  allProducts: number;
};

export type AmazonFullApiSchemaOrderItemId = string;

export type AmazonFullApiSchemaOrderItemSerialNumbers = ReadonlyArray<AmazonFullApiSchemaOrderItemSerialNumber>;

export type AmazonFullApiSchemaHttpMethod = "GET" | "POST";

export type AmazonFullApiSchemaInventoryRequestParams = {
  clientSequenceNumber?: number;
  quantity?: number;
  marketplaceAttributes?: AmazonFullApiSchemaMarketplaceAttributes2;
};

export type AmazonFullApiSchemaHttpStatusLine = {
  statusCode?: number;
  reasonPhrase?: string;
};

export type AmazonFullApiSchemaInventoryResponseBody = {
  clientSequenceNumber?: number;
  locationId?: string;
  skuId?: string;
  sellableQuantity?: number;
  reservedQuantity?: number;
  marketplaceAttributes?: AmazonFullApiSchemaMarketplaceAttributes2;
  actionableErrors?: ReadonlyArray<AmazonFullApiSchemaActionableError>;
};

export type AmazonFullApiSchemaOriginalLineItems = ReadonlyArray<AmazonFullApiSchemaOriginalLineItem>;

export type AmazonFullApiSchemaTaxRegistrationInfo = {
  type?: "VAT" | "GST";
  number?: string;
  address?: AmazonFullApiSchemaAddress8;
  messages?: string;
};

export type AmazonFullApiSchemaChargeBreakup = {
  baseAmount: AmazonFullApiSchemaAmount;
  discountAmount: AmazonFullApiSchemaAmount;
  netAmount: AmazonFullApiSchemaAmount;
};

export type AmazonFullApiSchemaTax = {
  type?: "VAT" | "CST" | "IGST" | "SGST" | "CGST" | "UTGST" | "CESS" | "OTHER" | "TOTAL";
  rate?: AmazonFullApiSchemaDecimal;
  charge: AmazonFullApiSchemaChargeBreakup;
};

export type AmazonFullApiSchemaRequirementLevel = "REQUIRED" | "DISALLOWED";

export type AmazonFullApiSchemaPresenceStatus = "ABSENT" | "PRESENT";

export type AmazonFullApiSchemaCancellation = {
  cancelledQuantity: number;
  cancelledTimestamp: AmazonFullApiSchemaDateTime2;
  cancellationType: "SELLER_REJECTED" | "MARKETPLACE_CANCELLED" | "SYSTEM_CANCELLED";
  cancellationReason?: string;
};

export type AmazonFullApiSchemaCustomAttributeType = "STRING" | "BOOLEAN" | "INTEGER" | "DOUBLE" | "JSON_STRING";

export type AmazonFullApiSchemaGeocodes = {
  latitude: AmazonFullApiSchemaDecimal;
  longitude: AmazonFullApiSchemaDecimal;
  elevation?: AmazonFullApiSchemaDecimal;
};

export type AmazonFullApiSchemaRecommendedPackage = {
  dimensions: AmazonFullApiSchemaPackageDimensions;
  weight: AmazonFullApiSchemaWeight2;
  lineItems: AmazonFullApiSchemaRecommendedPackageLineItems;
};

export type AmazonFullApiSchemaDistance = {
  value: AmazonFullApiSchemaDecimal;
  distanceUnit: "MI" | "KM";
};

export type AmazonFullApiSchemaShipLabelMetadata = {
  shippingOptionId?: string;
  carrierName: string;
  trackingId: string;
  pickupWindow?: AmazonFullApiSchemaTimeWindow;
  timeSlot?: AmazonFullApiSchemaTimeWindow;
  handoverLocation?: AmazonFullApiSchemaHandoverLocation;
};

export type AmazonFullApiSchemaDocumentV2 = {
  url: string;
};

export type AmazonFullApiSchemaStatus = "SUCCESS" | "FAILURE";

export type AmazonFullApiSchemaInventorySummary2 = {
  asin?: string;
  fnSku?: string;
  sellerSku?: string;
  condition?: string;
  inventoryDetails?: AmazonFullApiSchemaInventoryDetails2;
  lastUpdatedTime?: string;
  productName?: string;
  totalQuantity?: number;
  stores?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaFinancialEventGroup = {
  FinancialEventGroupId?: string;
  ProcessingStatus?: string;
  FundTransferStatus?: string;
  OriginalTotal?: AmazonFullApiSchemaCurrency5;
  ConvertedTotal?: AmazonFullApiSchemaCurrency5;
  FundTransferDate?: AmazonFullApiSchemaDate;
  TraceId?: string;
  AccountTail?: string;
  BeginningBalance?: AmazonFullApiSchemaCurrency5;
  FinancialEventGroupStart?: AmazonFullApiSchemaDate;
  FinancialEventGroupEnd?: AmazonFullApiSchemaDate;
};

export type AmazonFullApiSchemaShipmentEventList = ReadonlyArray<AmazonFullApiSchemaShipmentEvent>;

export type AmazonFullApiSchemaShipmentSettleEventList = ReadonlyArray<AmazonFullApiSchemaShipmentEvent>;

export type AmazonFullApiSchemaEBTRefundReimbursementOnlyEventList = ReadonlyArray<AmazonFullApiSchemaEBTRefundReimbursementOnlyEvent>;

export type AmazonFullApiSchemaPayWithAmazonEventList = ReadonlyArray<AmazonFullApiSchemaPayWithAmazonEvent>;

export type AmazonFullApiSchemaSolutionProviderCreditEventList = ReadonlyArray<AmazonFullApiSchemaSolutionProviderCreditEvent>;

export type AmazonFullApiSchemaRetrochargeEventList = ReadonlyArray<AmazonFullApiSchemaRetrochargeEvent>;

export type AmazonFullApiSchemaRentalTransactionEventList = ReadonlyArray<AmazonFullApiSchemaRentalTransactionEvent>;

export type AmazonFullApiSchemaProductAdsPaymentEventList = ReadonlyArray<AmazonFullApiSchemaProductAdsPaymentEvent>;

export type AmazonFullApiSchemaServiceFeeEventList = ReadonlyArray<AmazonFullApiSchemaServiceFeeEvent>;

export type AmazonFullApiSchemaSellerDealPaymentEventList = ReadonlyArray<AmazonFullApiSchemaSellerDealPaymentEvent>;

export type AmazonFullApiSchemaDebtRecoveryEventList = ReadonlyArray<AmazonFullApiSchemaDebtRecoveryEvent>;

export type AmazonFullApiSchemaLoanServicingEventList = ReadonlyArray<AmazonFullApiSchemaLoanServicingEvent>;

export type AmazonFullApiSchemaAdjustmentEventList = ReadonlyArray<AmazonFullApiSchemaAdjustmentEvent>;

export type AmazonFullApiSchemaSAFETReimbursementEventList = ReadonlyArray<AmazonFullApiSchemaSAFETReimbursementEvent>;

export type AmazonFullApiSchemaSellerReviewEnrollmentPaymentEventList = ReadonlyArray<AmazonFullApiSchemaSellerReviewEnrollmentPaymentEvent>;

export type AmazonFullApiSchemaFBALiquidationEventList = ReadonlyArray<AmazonFullApiSchemaFBALiquidationEvent>;

export type AmazonFullApiSchemaCouponPaymentEventList = ReadonlyArray<AmazonFullApiSchemaCouponPaymentEvent>;

export type AmazonFullApiSchemaImagingServicesFeeEventList = ReadonlyArray<AmazonFullApiSchemaImagingServicesFeeEvent>;

export type AmazonFullApiSchemaNetworkComminglingTransactionEventList = ReadonlyArray<AmazonFullApiSchemaNetworkComminglingTransactionEvent>;

export type AmazonFullApiSchemaAffordabilityExpenseEventList = ReadonlyArray<AmazonFullApiSchemaAffordabilityExpenseEvent>;

export type AmazonFullApiSchemaRemovalShipmentEventList = ReadonlyArray<AmazonFullApiSchemaRemovalShipmentEvent>;

export type AmazonFullApiSchemaRemovalShipmentAdjustmentEventList = ReadonlyArray<AmazonFullApiSchemaRemovalShipmentAdjustmentEvent>;

export type AmazonFullApiSchemaTrialShipmentEventList = ReadonlyArray<AmazonFullApiSchemaTrialShipmentEvent>;

export type AmazonFullApiSchemaTDSReimbursementEventList = ReadonlyArray<AmazonFullApiSchemaTDSReimbursementEvent>;

export type AmazonFullApiSchemaAdhocDisbursementEventList = ReadonlyArray<AmazonFullApiSchemaAdhocDisbursementEvent>;

export type AmazonFullApiSchemaTaxWithholdingEventList = ReadonlyArray<AmazonFullApiSchemaTaxWithholdingEvent>;

export type AmazonFullApiSchemaChargeRefundEventList = ReadonlyArray<AmazonFullApiSchemaChargeRefundEvent>;

export type AmazonFullApiSchemaFailedAdhocDisbursementEventList = ReadonlyArray<AmazonFullApiSchemaFailedAdhocDisbursementEvent>;

export type AmazonFullApiSchemaValueAddedServiceChargeEventList = ReadonlyArray<AmazonFullApiSchemaValueAddedServiceChargeEvent>;

export type AmazonFullApiSchemaCapacityReservationBillingEventList = ReadonlyArray<AmazonFullApiSchemaCapacityReservationBillingEvent>;

export type AmazonFullApiSchemaTransaction6 = {
  sellingPartnerMetadata?: AmazonFullApiSchemaSellingPartnerMetadata;
  relatedIdentifiers?: AmazonFullApiSchemaRelatedIdentifiers;
  transactionType?: string;
  transactionId?: string;
  transactionStatus?: string;
  description?: string;
  postedDate?: AmazonFullApiSchemaDate2;
  totalAmount?: AmazonFullApiSchemaCurrency6;
  marketplaceDetails?: AmazonFullApiSchemaMarketplaceDetails;
  items?: AmazonFullApiSchemaItems2;
  contexts?: AmazonFullApiSchemaContexts;
  breakdowns?: ReadonlyArray<AmazonFullApiSchemaBreakdown>;
};

export type AmazonFullApiSchemaExpiryDate = {
  month?: string;
  year?: string;
};

export type AmazonFullApiSchemaPaymentMethodType = "BANK_ACCOUNT" | "CARD" | "SELLER_WALLET";

export type AmazonFullApiSchemaAssignmentType = "DEFAULT_DEPOSIT_METHOD";

export type AmazonFullApiSchemaSKUPrepInstructions = {
  SellerSKU?: string;
  ASIN?: string;
  BarcodeInstruction?: AmazonFullApiSchemaBarcodeInstruction;
  PrepGuidance?: AmazonFullApiSchemaPrepGuidance;
  PrepInstructionList?: AmazonFullApiSchemaPrepInstructionList;
  AmazonPrepFeesDetailsList?: AmazonFullApiSchemaAmazonPrepFeesDetailsList;
};

export type AmazonFullApiSchemaInvalidSKU = {
  SellerSKU?: string;
  ErrorReason?: AmazonFullApiSchemaErrorReason;
};

export type AmazonFullApiSchemaASINPrepInstructions = {
  ASIN?: string;
  BarcodeInstruction?: AmazonFullApiSchemaBarcodeInstruction;
  PrepGuidance?: AmazonFullApiSchemaPrepGuidance;
  PrepInstructionList?: AmazonFullApiSchemaPrepInstructionList;
};

export type AmazonFullApiSchemaInvalidASIN = {
  ASIN?: string;
  ErrorReason?: AmazonFullApiSchemaErrorReason;
};

export type AmazonFullApiSchemaInboundShipmentInfo = {
  ShipmentId?: string;
  ShipmentName?: string;
  ShipFromAddress: AmazonFullApiSchemaAddress21;
  DestinationFulfillmentCenterId?: string;
  ShipmentStatus?: AmazonFullApiSchemaShipmentStatus3;
  LabelPrepType?: AmazonFullApiSchemaLabelPrepType;
  AreCasesRequired: boolean;
  ConfirmedNeedByDate?: AmazonFullApiSchemaDateStringType;
  BoxContentsSource?: AmazonFullApiSchemaBoxContentsSource;
  EstimatedBoxContentsFee?: AmazonFullApiSchemaBoxContentsFeeDetails;
};

export type AmazonFullApiSchemaInboundShipmentItem = {
  ShipmentId?: string;
  SellerSKU: string;
  FulfillmentNetworkSKU?: string;
  QuantityShipped: AmazonFullApiSchemaQuantity2;
  QuantityReceived?: AmazonFullApiSchemaQuantity2;
  QuantityInCase?: AmazonFullApiSchemaQuantity2;
  ReleaseDate?: AmazonFullApiSchemaDateStringType;
  PrepDetailsList?: AmazonFullApiSchemaPrepDetailsList;
};

export type AmazonFullApiSchemaUnitOfMeasurement = "IN" | "CM";

export type AmazonFullApiSchemaUnitOfWeight2 = "LB" | "KG";

export type AmazonFullApiSchemaBoxRequirements = {
  weight: AmazonFullApiSchemaWeightRange;
};

export type AmazonFullApiSchemaShippingRequirements = {
  modes: ReadonlyArray<string>;
  solution: string;
};

export type AmazonFullApiSchemaSpdTrackingItem = {
  boxId?: string;
  trackingId?: string;
  trackingNumberValidationStatus?: string;
};

export type AmazonFullApiSchemaSpdTrackingItemInput = {
  boxId: string;
  trackingId: string;
};

export type AmazonFullApiSchemaQuantity = number;

export type AmazonFullApiSchemaFulfillmentPreview = {
  shippingSpeedCategory: AmazonFullApiSchemaShippingSpeedCategory;
  scheduledDeliveryInfo?: AmazonFullApiSchemaScheduledDeliveryInfo;
  isFulfillable: boolean;
  isCODCapable: boolean;
  estimatedShippingWeight?: AmazonFullApiSchemaWeight10;
  estimatedFees?: AmazonFullApiSchemaFeeList;
  fulfillmentPreviewShipments?: AmazonFullApiSchemaFulfillmentPreviewShipmentList;
  unfulfillablePreviewItems?: AmazonFullApiSchemaUnfulfillablePreviewItemList;
  orderUnfulfillableReasons?: AmazonFullApiSchemaStringList;
  marketplaceId: string;
  featureConstraints?: ReadonlyArray<AmazonFullApiSchemaFeatureSettings>;
};

export type AmazonFullApiSchemaDecimal2 = string;

export type AmazonFullApiSchemaVariablePrecisionAddress = {
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  districtOrCounty?: string;
  stateOrRegion?: string;
  postalCode: string;
  countryCode: string;
};

export type AmazonFullApiSchemaIpAddress = string;

export type AmazonFullApiSchemaDeliveryOffer = {
  expiresAt?: AmazonFullApiSchemaTimestamp;
  dateRange?: AmazonFullApiSchemaDateRange3;
  policy?: AmazonFullApiSchemaDeliveryPolicy;
};

export type AmazonFullApiSchemaTrackingEvent = {
  eventDate: AmazonFullApiSchemaTimestamp;
  eventAddress: AmazonFullApiSchemaTrackingAddress;
  eventCode: AmazonFullApiSchemaEventCode2;
  eventDescription: string;
};

export type AmazonFullApiSchemaReasonCodeDetails = {
  returnReasonCode: string;
  description: string;
  translatedDescription?: string;
};

export type AmazonFullApiSchemaReturnItem = {
  sellerReturnItemId: string;
  sellerFulfillmentOrderItemId: string;
  amazonShipmentId: string;
  sellerReturnReasonCode: string;
  returnComment?: string;
  amazonReturnReasonCode?: string;
  status: AmazonFullApiSchemaFulfillmentReturnItemStatus;
  statusChangedDate: AmazonFullApiSchemaTimestamp;
  returnAuthorizationId?: string;
  returnReceivedCondition?: AmazonFullApiSchemaReturnItemDisposition;
  fulfillmentCenterId?: string;
};

export type AmazonFullApiSchemaInvalidReturnItem = {
  sellerReturnItemId: string;
  sellerFulfillmentOrderItemId: string;
  invalidItemReason: AmazonFullApiSchemaInvalidItemReason;
};

export type AmazonFullApiSchemaReturnAuthorization = {
  returnAuthorizationId: string;
  fulfillmentCenterId: string;
  returnToAddress: AmazonFullApiSchemaAddress3;
  amazonRmaId: string;
  rmaPageURL: string;
};

export type AmazonFullApiSchemaFulfillmentOrderItem = {
  sellerSku: string;
  sellerFulfillmentOrderItemId: string;
  quantity: AmazonFullApiSchemaQuantity;
  giftMessage?: string;
  displayableComment?: string;
  fulfillmentNetworkSku?: string;
  orderItemDisposition?: string;
  cancelledQuantity: AmazonFullApiSchemaQuantity;
  unfulfillableQuantity: AmazonFullApiSchemaQuantity;
  estimatedShipDate?: AmazonFullApiSchemaTimestamp;
  estimatedArrivalDate?: AmazonFullApiSchemaTimestamp;
  perUnitPrice?: AmazonFullApiSchemaMoney;
  perUnitTax?: AmazonFullApiSchemaMoney;
  perUnitDeclaredValue?: AmazonFullApiSchemaMoney;
};

export type AmazonFullApiSchemaFulfillmentShipment = {
  amazonShipmentId: string;
  fulfillmentCenterId: string;
  fulfillmentShipmentStatus: "PENDING" | "SHIPPED" | "CANCELLED_BY_FULFILLER" | "CANCELLED_BY_SELLER";
  shippingDate?: AmazonFullApiSchemaTimestamp;
  estimatedArrivalDate?: AmazonFullApiSchemaTimestamp;
  shippingNotes?: ReadonlyArray<string>;
  fulfillmentShipmentItem: AmazonFullApiSchemaFulfillmentShipmentItemList;
  fulfillmentShipmentPackage?: AmazonFullApiSchemaFulfillmentShipmentPackageList;
};

export type AmazonFullApiSchemaFeature = {
  featureName: string;
  featureDescription: string;
  sellerEligible?: boolean;
};

export type AmazonFullApiSchemaIssueEnforcementAction = {
  action: string;
};

export type AmazonFullApiSchemaIssueExemption = {
  status: "EXEMPT" | "EXEMPT_UNTIL_EXPIRY_DATE" | "NOT_EXEMPT";
  expiryDate?: string;
};

export type AmazonFullApiSchemaItemImage3 = {
  link: string;
  height: number;
  width: number;
};

export type AmazonFullApiSchemaPoints = {
  pointsNumber: number;
};

export type AmazonFullApiSchemaAudience = {
  value?: string;
  displayName?: string;
};

export type AmazonFullApiSchemaDecimal3 = string;

export type AmazonFullApiSchemaItemRelationship2 = {
  childSkus?: ReadonlyArray<string>;
  parentSkus?: ReadonlyArray<string>;
  variationTheme?: AmazonFullApiSchemaItemVariationTheme2;
  type: "VARIATION" | "PACKAGE_HIERARCHY";
};

export type AmazonFullApiSchemaLink = {
  resource: string;
  verb: "GET";
  title?: string;
  type?: string;
};

export type AmazonFullApiSchemaItem9 = {
  OrderItemId: AmazonFullApiSchemaOrderItemId2;
  Quantity: AmazonFullApiSchemaItemQuantity10;
  ItemWeight?: AmazonFullApiSchemaWeight4;
  ItemDescription?: AmazonFullApiSchemaItemDescription;
  TransparencyCodeList?: AmazonFullApiSchemaTransparencyCodeList;
  ItemLevelSellerInputsList?: AmazonFullApiSchemaAdditionalSellerInputsList;
  LiquidVolume?: AmazonFullApiSchemaLiquidVolume;
  IsHazmat?: boolean;
  DangerousGoodsDetails?: AmazonFullApiSchemaDangerousGoodsDetails;
};

export type AmazonFullApiSchemaPackageDimension = number;

export type AmazonFullApiSchemaUnitOfLength2 = "inches" | "centimeters";

export type AmazonFullApiSchemaPredefinedPackageDimensions = "FedEx_Box_10kg" | "FedEx_Box_25kg" | "FedEx_Box_Extra_Large_1" | "FedEx_Box_Extra_Large_2" | "FedEx_Box_Large_1" | "FedEx_Box_Large_2" | "FedEx_Box_Medium_1" | "FedEx_Box_Medium_2" | "FedEx_Box_Small_1" | "FedEx_Box_Small_2" | "FedEx_Envelope" | "FedEx_Padded_Pak" | "FedEx_Pak_1" | "FedEx_Pak_2" | "FedEx_Tube" | "FedEx_XL_Pak" | "UPS_Box_10kg" | "UPS_Box_25kg" | "UPS_Express_Box" | "UPS_Express_Box_Large" | "UPS_Express_Box_Medium" | "UPS_Express_Box_Small" | "UPS_Express_Envelope" | "UPS_Express_Hard_Pak" | "UPS_Express_Legal_Envelope" | "UPS_Express_Pak" | "UPS_Express_Tube" | "UPS_Laboratory_Pak" | "UPS_Pad_Pak" | "UPS_Pallet" | "USPS_Card" | "USPS_Flat" | "USPS_FlatRateCardboardEnvelope" | "USPS_FlatRateEnvelope" | "USPS_FlatRateGiftCardEnvelope" | "USPS_FlatRateLegalEnvelope" | "USPS_FlatRatePaddedEnvelope" | "USPS_FlatRateWindowEnvelope" | "USPS_LargeFlatRateBoardGameBox" | "USPS_LargeFlatRateBox" | "USPS_Letter" | "USPS_MediumFlatRateBox1" | "USPS_MediumFlatRateBox2" | "USPS_RegionalRateBoxA1" | "USPS_RegionalRateBoxA2" | "USPS_RegionalRateBoxB1" | "USPS_RegionalRateBoxB2" | "USPS_RegionalRateBoxC" | "USPS_SmallFlatRateBox" | "USPS_SmallFlatRateEnvelope";

export type AmazonFullApiSchemaWeightValue2 = number;

export type AmazonFullApiSchemaUnitOfWeight3 = "oz" | "g";

export type AmazonFullApiSchemaDeliveryExperienceType = "DeliveryConfirmationWithAdultSignature" | "DeliveryConfirmationWithSignature" | "DeliveryConfirmationWithoutSignature" | "NoTracking";

export type AmazonFullApiSchemaLabelFormat2 = "PDF" | "PNG" | "ZPL203" | "ZPL300" | "ShippingServiceDefault";

export type AmazonFullApiSchemaCustomTextForLabel = string;

export type AmazonFullApiSchemaStandardIdForLabel = "AmazonOrderId";

export type AmazonFullApiSchemaRejectedShippingService = {
  CarrierName: string;
  ShippingServiceName: string;
  ShippingServiceId: AmazonFullApiSchemaShippingServiceIdentifier;
  RejectionReasonCode: string;
  RejectionReasonMessage?: string;
};

export type AmazonFullApiSchemaTemporarilyUnavailableCarrier = {
  CarrierName: string;
};

export type AmazonFullApiSchemaTermsAndConditionsNotAcceptedCarrier = {
  CarrierName: string;
};

export type AmazonFullApiSchemaAdjustmentItemList = ReadonlyArray<AmazonFullApiSchemaRateItem>;

export type AmazonFullApiSchemaAvailableShippingServiceOptions = {
  AvailableCarrierWillPickUpOptions: AmazonFullApiSchemaAvailableCarrierWillPickUpOptionsList;
  AvailableDeliveryExperienceOptions: AmazonFullApiSchemaAvailableDeliveryExperienceOptionsList;
};

export type AmazonFullApiSchemaLabelFormatList = ReadonlyArray<AmazonFullApiSchemaLabelFormat2>;

export type AmazonFullApiSchemaAvailableFormatOptionsForLabelList = ReadonlyArray<AmazonFullApiSchemaLabelFormatOption>;

export type AmazonFullApiSchemaBenefits2 = {
  IncludedBenefits?: AmazonFullApiSchemaIncludedBenefits2;
  ExcludedBenefits?: AmazonFullApiSchemaExcludedBenefits2;
};

export type AmazonFullApiSchemaLabelDimensions = {
  Length: AmazonFullApiSchemaLabelDimension;
  Width: AmazonFullApiSchemaLabelDimension;
  Unit: AmazonFullApiSchemaUnitOfLength2;
};

export type AmazonFullApiSchemaFileContents = {
  Contents: string;
  FileType: AmazonFullApiSchemaFileType;
  Checksum: string;
};

export type AmazonFullApiSchemaAdditionalSellerInput = {
  DataType?: string;
  ValueAsString?: string;
  ValueAsBoolean?: boolean;
  ValueAsInteger?: number;
  ValueAsTimestamp?: AmazonFullApiSchemaTimestamp2;
  ValueAsAddress?: AmazonFullApiSchemaAddress4;
  ValueAsWeight?: AmazonFullApiSchemaWeight4;
  ValueAsDimension?: AmazonFullApiSchemaLength;
  ValueAsCurrency?: AmazonFullApiSchemaCurrencyAmount;
};

export type AmazonFullApiSchemaAdditionalInputs = {
  AdditionalInputFieldName?: string;
  SellerInputDefinition?: AmazonFullApiSchemaSellerInputDefinition;
};

export type AmazonFullApiSchemaItemLevelFields = {
  Asin: string;
  AdditionalInputs: AmazonFullApiSchemaAdditionalInputsList;
};

export type AmazonFullApiSchemaSchema = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaAggregationFilter = {
  aggregationSettings?: AmazonFullApiSchemaAggregationSettings;
};

export type AmazonFullApiSchemaMarketplaceFilter = {
  marketplaceIds?: AmazonFullApiSchemaMarketplaceIds;
};

export type AmazonFullApiSchemaOrderChangeTypeFilter = {
  orderChangeTypes?: AmazonFullApiSchemaOrderChangeTypes;
};

export type AmazonFullApiSchemaEventBridgeResource = {
  name: string;
  region: string;
  accountId: string;
};

export type AmazonFullApiSchemaPaymentExecutionDetailItem = {
  Payment: AmazonFullApiSchemaMoney3;
  PaymentMethod: string;
  AcquirerId?: string;
  CardBrand?: string;
  AuthorizationCode?: string;
};

export type AmazonFullApiSchemaAddressExtendedFields = {
  StreetName?: string;
  StreetNumber?: string;
  Complement?: string;
  Neighborhood?: string;
  GeoCoordinates?: AmazonFullApiSchemaGeoCoordinates;
};

export type AmazonFullApiSchemaTaxClassification = {
  Name?: string;
  Value?: string;
};

export type AmazonFullApiSchemaPreferredDeliveryTime = {
  BusinessHours?: ReadonlyArray<AmazonFullApiSchemaBusinessHours>;
  ExceptionDates?: ReadonlyArray<AmazonFullApiSchemaExceptionDates>;
};

export type AmazonFullApiSchemaOtherDeliveryAttributes = "HAS_ACCESS_POINT" | "PALLET_ENABLED" | "PALLET_DISABLED";

export type AmazonFullApiSchemaOrderItem3 = {
  ASIN: string;
  SellerSKU?: string;
  OrderItemId: string;
  AssociatedItems?: ReadonlyArray<AmazonFullApiSchemaAssociatedItem2>;
  Title?: string;
  QuantityOrdered: number;
  QuantityShipped?: number;
  ProductInfo?: AmazonFullApiSchemaProductInfoDetail;
  PointsGranted?: AmazonFullApiSchemaPointsGrantedDetail;
  ItemPrice?: AmazonFullApiSchemaMoney3;
  ShippingPrice?: AmazonFullApiSchemaMoney3;
  ItemTax?: AmazonFullApiSchemaMoney3;
  ShippingTax?: AmazonFullApiSchemaMoney3;
  ShippingDiscount?: AmazonFullApiSchemaMoney3;
  ShippingDiscountTax?: AmazonFullApiSchemaMoney3;
  PromotionDiscount?: AmazonFullApiSchemaMoney3;
  PromotionDiscountTax?: AmazonFullApiSchemaMoney3;
  PromotionIds?: AmazonFullApiSchemaPromotionIdList;
  CODFee?: AmazonFullApiSchemaMoney3;
  CODFeeDiscount?: AmazonFullApiSchemaMoney3;
  IsGift?: string;
  ConditionNote?: string;
  ConditionId?: string;
  ConditionSubtypeId?: string;
  ScheduledDeliveryStartDate?: string;
  ScheduledDeliveryEndDate?: string;
  PriceDesignation?: string;
  TaxCollection?: AmazonFullApiSchemaTaxCollection;
  SerialNumberRequired?: boolean;
  IsTransparency?: boolean;
  IossNumber?: string;
  StoreChainStoreId?: string;
  DeemedResellerCategory?: "IOSS" | "UOSS";
  BuyerInfo?: AmazonFullApiSchemaItemBuyerInfo;
  BuyerRequestedCancel?: AmazonFullApiSchemaBuyerRequestedCancel;
  SerialNumbers?: ReadonlyArray<string>;
  SubstitutionPreferences?: AmazonFullApiSchemaSubstitutionPreferences;
  Measurement?: AmazonFullApiSchemaMeasurement2;
  ShippingConstraints?: AmazonFullApiSchemaShippingConstraints;
  AmazonPrograms?: AmazonFullApiSchemaAmazonPrograms;
};

export type AmazonFullApiSchemaOrderItemBuyerInfo = {
  OrderItemId: string;
  BuyerCustomizedInfo?: AmazonFullApiSchemaBuyerCustomizedInfoDetail2;
  GiftWrapPrice?: AmazonFullApiSchemaMoney3;
  GiftWrapTax?: AmazonFullApiSchemaMoney3;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
};

export type AmazonFullApiSchemaRegulatedInformationField = {
  FieldId: string;
  FieldLabel: string;
  FieldType: "Text" | "FileAttachment";
  FieldValue: string;
};

export type AmazonFullApiSchemaRejectionReason = {
  RejectionReasonId: string;
  RejectionReasonDescription: string;
};

export type AmazonFullApiSchemaValidVerificationDetail = {
  VerificationDetailType: string;
  ValidVerificationStatuses: ReadonlyArray<AmazonFullApiSchemaVerificationStatus>;
};

export type AmazonFullApiSchemaValidInterimStatusCode = {
  StatusCode: string;
  StatusDescription: string;
};

export type AmazonFullApiSchemaPrescriptionDetail = {
  prescriptionId: string;
  expirationDate: string;
  writtenQuantity: number;
  totalRefillsAuthorized: number;
  refillsRemaining: number;
  clinicId: string;
  usageInstructions: string;
};

export type AmazonFullApiSchemaApprovedAlternativeDetails = ReadonlyArray<AmazonFullApiSchemaApprovedAttribute>;

export type AmazonFullApiSchemaInterimStatusDetail = {
  statusCode: string;
  statusDateTime: string;
};

export type AmazonFullApiSchemaConfirmShipmentOrderItem = {
  orderItemId: string;
  quantity: number;
  transparencyCodes?: AmazonFullApiSchemaTransparencyCodeList2;
};

export type AmazonFullApiSchemaCustomerAddress = {
  name?: string;
  companyName?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  districtOrCounty?: string;
  stateOrRegion?: string;
  municipality?: string;
  postalCode?: string;
  countryCode?: string;
  phone?: string;
  extendedFields?: AmazonFullApiSchemaAddressExtendedFields2;
  addressType?: string;
};

export type AmazonFullApiSchemaDeliveryPreference = {
  dropOffLocation?: string;
  addressInstruction?: string;
  deliveryTime?: AmazonFullApiSchemaPreferredDeliveryTime2;
  deliveryCapabilities?: ReadonlyArray<AmazonFullApiSchemaPreferredDeliveryCapability>;
};

export type AmazonFullApiSchemaMoney6 = {
  amount: AmazonFullApiSchemaDecimal7;
  currencyCode: string;
};

export type AmazonFullApiSchemaOrderProceedsBreakdown = {
  type: string;
  status?: string;
  subtotal: AmazonFullApiSchemaMoney6;
};

export type AmazonFullApiSchemaPaymentExecution = {
  paymentMethod?: string;
  paymentAmount?: AmazonFullApiSchemaMoney6;
  acquirerId?: string;
  cardBrand?: string;
  authorizationCode?: string;
};

export type AmazonFullApiSchemaOrderTaxRegistration = {
  entityType?: string;
  legalName?: string;
  taxRegistrationType?: string;
  taxRegistrationNumber?: string;
  taxRegistrationAddress?: AmazonFullApiSchemaCustomerAddress;
  taxRegistrationAttributes?: ReadonlyArray<AmazonFullApiSchemaTaxRegistrationAttribute>;
};

export type AmazonFullApiSchemaOrderTaxInvoicing = {
  buyerInvoicePreference?: string;
  invoiceStatus?: string;
};

export type AmazonFullApiSchemaFulfillmentStatus = "PENDING_AVAILABILITY" | "PENDING" | "UNSHIPPED" | "PARTIALLY_SHIPPED" | "SHIPPED" | "CANCELLED" | "UNFULFILLABLE";

export type AmazonFullApiSchemaDateTimeRange2 = {
  earliestDateTime?: string;
  latestDateTime?: string;
};

export type AmazonFullApiSchemaMeasurement = {
  unit: "OUNCES" | "POUNDS" | "KILOGRAMS" | "GRAMS" | "MILLIGRAMS" | "INCHES" | "FEET" | "METERS" | "CENTIMETERS" | "MILLIMETERS" | "SQUARE_METERS" | "SQUARE_CENTIMETERS" | "SQUARE_FEET" | "SQUARE_INCHES" | "GALLONS" | "PINTS" | "QUARTS" | "FLUID_OUNCES" | "LITERS" | "CUBIC_METERS" | "CUBIC_FEET" | "CUBIC_INCHES" | "CUBIC_CENTIMETERS" | "COUNT";
  value: number;
};

export type AmazonFullApiSchemaAssociatedOrderItem = {
  orderId?: string;
  orderItemId?: string;
  associationType?: string;
};

export type AmazonFullApiSchemaItemProduct = {
  asin?: AmazonFullApiSchemaAsin3;
  title?: string;
  sellerSku?: AmazonFullApiSchemaSKU2;
  condition?: AmazonFullApiSchemaItemCondition;
  price?: AmazonFullApiSchemaItemPrice;
  serialNumbers?: ReadonlyArray<string>;
  customization?: AmazonFullApiSchemaItemCustomization;
};

export type AmazonFullApiSchemaItemProceeds = {
  proceedsTotal?: AmazonFullApiSchemaMoney6;
  breakdowns?: ReadonlyArray<AmazonFullApiSchemaItemProceedsBreakdown>;
};

export type AmazonFullApiSchemaItemExpense = {
  pointsCost?: AmazonFullApiSchemaItemPointsCost;
};

export type AmazonFullApiSchemaItemPromotion = {
  breakdowns?: ReadonlyArray<AmazonFullApiSchemaItemPromotionBreakdown>;
};

export type AmazonFullApiSchemaItemCancellation = {
  cancellationRequest?: AmazonFullApiSchemaItemCancellationRequest;
};

export type AmazonFullApiSchemaItemFulfillment = {
  quantityFulfilled?: number;
  quantityUnfulfilled?: number;
  picking?: AmazonFullApiSchemaItemPicking;
  packing?: AmazonFullApiSchemaItemPacking;
  shipping?: AmazonFullApiSchemaItemShipping;
};

export type AmazonFullApiSchemaItemTax = {
  taxCalculationBreakdowns?: ReadonlyArray<AmazonFullApiSchemaItemTaxCalculationBreakdown>;
  taxCollections?: ReadonlyArray<AmazonFullApiSchemaItemTaxCollection>;
};

export type AmazonFullApiSchemaPackageStatus3 = {
  status: "PENDING" | "IN_TRANSIT" | "SHIPPED" | "DELIVERED" | "CANCELLED" | "UNDELIVERABLE";
  detailedStatus?: string;
};

export type AmazonFullApiSchemaMerchantAddress = {
  name?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  districtOrCounty?: string;
  stateOrRegion?: string;
  municipality?: string;
  postalCode?: string;
  countryCode?: string;
};

export type AmazonFullApiSchemaPackageItem = {
  orderItemId: string;
  quantity: number;
  transparencyCodes?: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaMoneyType = {
  CurrencyCode?: string;
  Amount?: number;
};

export type AmazonFullApiSchemaPoints2 = {
  PointsNumber?: number;
  PointsMonetaryValue?: AmazonFullApiSchemaMoneyType;
};

export type AmazonFullApiSchemaFeeDetailList = ReadonlyArray<AmazonFullApiSchemaFeeDetail>;

export type AmazonFullApiSchemaFeesEstimateErrorDetail = ReadonlyArray<{}>;

export type AmazonFullApiSchemaProduct = {
  Identifiers: AmazonFullApiSchemaIdentifierType;
  AttributeSets?: AmazonFullApiSchemaAttributeSetList;
  Relationships?: AmazonFullApiSchemaRelationshipList;
  CompetitivePricing?: AmazonFullApiSchemaCompetitivePricingType;
  SalesRankings?: AmazonFullApiSchemaSalesRankList;
  Offers?: AmazonFullApiSchemaOffersList;
};

export type AmazonFullApiSchemaNumberOfOffers = ReadonlyArray<AmazonFullApiSchemaOfferCountType>;

export type AmazonFullApiSchemaLowestPrices = ReadonlyArray<AmazonFullApiSchemaLowestPriceType>;

export type AmazonFullApiSchemaBuyBoxPrices = ReadonlyArray<AmazonFullApiSchemaBuyBoxPriceType>;

export type AmazonFullApiSchemaMoneyType2 = {
  CurrencyCode?: string;
  Amount?: number;
};

export type AmazonFullApiSchemaSalesRankList = ReadonlyArray<AmazonFullApiSchemaSalesRankType>;

export type AmazonFullApiSchemaBuyBoxEligibleOffers = ReadonlyArray<AmazonFullApiSchemaOfferCountType>;

export type AmazonFullApiSchemaOfferDetail = {
  MyOffer?: boolean;
  offerType?: AmazonFullApiSchemaOfferCustomerType;
  SubCondition: string;
  SellerId?: string;
  ConditionNotes?: string;
  SellerFeedbackRating?: AmazonFullApiSchemaSellerFeedbackType;
  ShippingTime: AmazonFullApiSchemaDetailedShippingTimeType;
  ListingPrice: AmazonFullApiSchemaMoneyType2;
  quantityDiscountPrices?: ReadonlyArray<AmazonFullApiSchemaQuantityDiscountPriceType>;
  Points?: AmazonFullApiSchemaPoints3;
  Shipping: AmazonFullApiSchemaMoneyType2;
  ShipsFrom?: AmazonFullApiSchemaShipsFromType;
  IsFulfilledByAmazon: boolean;
  PrimeInformation?: AmazonFullApiSchemaPrimeInformationType;
  IsBuyBoxWinner?: boolean;
  IsFeaturedMerchant?: boolean;
};

export type AmazonFullApiSchemaBatchRequest = {
  uri: string;
  method: AmazonFullApiSchemaHttpMethod3;
  headers?: AmazonFullApiSchemaHttpRequestHeaders;
};

export type AmazonFullApiSchemaBatchOffersRequestParams = {
  MarketplaceId: AmazonFullApiSchemaMarketplaceId6;
  ItemCondition: AmazonFullApiSchemaItemCondition2;
  CustomerType?: AmazonFullApiSchemaCustomerType;
};

export type AmazonFullApiSchemaBatchOffersResponse = {
  headers?: AmazonFullApiSchemaHttpResponseHeaders;
  status?: AmazonFullApiSchemaGetOffersHttpStatusLine;
  body: AmazonFullApiSchemaGetOffersResponse;
};

export type AmazonFullApiSchemaItemOffersRequestParams = (AmazonFullApiSchemaBatchOffersRequestParams & {
  Asin?: string;
});

export type AmazonFullApiSchemaListingOffersRequestParams = (AmazonFullApiSchemaBatchOffersRequestParams & {
  SellerSKU: string;
});

export type AmazonFullApiSchemaBatchRequest2 = {
  uri: string;
  method: AmazonFullApiSchemaHttpMethod2;
  body?: AmazonFullApiSchemaHttpBody;
  headers?: AmazonFullApiSchemaHttpHeaders;
};

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceRequestParams = {
  marketplaceId: AmazonFullApiSchemaMarketplaceId5;
  sku: AmazonFullApiSchemaSku;
  segment?: AmazonFullApiSchemaSegment;
};

export type AmazonFullApiSchemaBatchResponse = {
  headers: AmazonFullApiSchemaHttpHeaders;
  status: AmazonFullApiSchemaHttpStatusLine2;
};

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceResponseBody = {
  offerIdentifier?: AmazonFullApiSchemaOfferIdentifier;
  featuredOfferExpectedPriceResults?: AmazonFullApiSchemaFeaturedOfferExpectedPriceResultList;
  errors?: AmazonFullApiSchemaErrorList43;
};

export type AmazonFullApiSchemaAsin2 = string;

export type AmazonFullApiSchemaMarketplaceId5 = string;

export type AmazonFullApiSchemaCompetitiveSummaryIncludedData = "featuredBuyingOptions" | "referencePrices" | "lowestPricedOffers" | "similarItems";

export type AmazonFullApiSchemaLowestPricedOffersInput = {
  itemCondition: AmazonFullApiSchemaCondition;
  offerType: "Consumer";
};

export type AmazonFullApiSchemaHttpMethod2 = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";

export type AmazonFullApiSchemaHttpUri = string;

export type AmazonFullApiSchemaHttpStatusLine2 = {
  statusCode?: number;
  reasonPhrase?: string;
};

export type AmazonFullApiSchemaCompetitiveSummaryResponseBody = {
  asin: AmazonFullApiSchemaAsin2;
  marketplaceId: AmazonFullApiSchemaMarketplaceId5;
  featuredBuyingOptions?: ReadonlyArray<AmazonFullApiSchemaFeaturedBuyingOption>;
  lowestPricedOffers?: ReadonlyArray<AmazonFullApiSchemaLowestPricedOffer>;
  referencePrices?: ReadonlyArray<AmazonFullApiSchemaReferencePrice>;
  similarItems?: ReadonlyArray<AmazonFullApiSchemaSimilarItems>;
  errors?: AmazonFullApiSchemaErrorList43;
};

export type AmazonFullApiSchemaAutoEnrollmentPreference = "OPTED_IN" | "OPTED_OUT";

export type AmazonFullApiSchemaDiscountFunding = {
  percentage?: ReadonlyArray<number>;
};

export type AmazonFullApiSchemaOfferProgramConfigurationPreferences = {
  autoEnrollment?: AmazonFullApiSchemaAutoEnrollmentPreference;
};

export type AmazonFullApiSchemaOfferProgramConfigurationPromotions = {
  sellingPartnerFundedBaseDiscount?: AmazonFullApiSchemaOfferProgramConfigurationPromotionsDiscountFunding;
  sellingPartnerFundedTieredDiscount?: AmazonFullApiSchemaOfferProgramConfigurationPromotionsDiscountFunding;
  amazonFundedBaseDiscount?: AmazonFullApiSchemaOfferProgramConfigurationPromotionsDiscountFunding;
  amazonFundedTieredDiscount?: AmazonFullApiSchemaOfferProgramConfigurationPromotionsDiscountFunding;
};

export type AmazonFullApiSchemaEnrollmentMethod = "MANUAL" | "AUTOMATIC";

export type AmazonFullApiSchemaMoney7 = {
  currencyCode: string;
  amount: AmazonFullApiSchemaDecimal8;
};

export type AmazonFullApiSchemaScheduleExpressionType = "RECURRING" | "ONE_TIME";

export type AmazonFullApiSchemaRecurringFrequency = "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";

export type AmazonFullApiSchemaMarketplace = {
  id: string;
  name: string;
  countryCode: string;
  defaultCurrencyCode: string;
  defaultLanguageCode: string;
  domainName: string;
};

export type AmazonFullApiSchemaParticipation = {
  isParticipating: boolean;
  hasSuspendedListings: boolean;
};

export type AmazonFullApiSchemaAddress13 = {
  addressLine1: string;
  addressLine2?: string;
  countryCode: string;
  stateOrProvinceCode?: string;
  city?: string;
  postalCode?: string;
};

export type AmazonFullApiSchemaTechnician = {
  technicianId?: string;
  name?: string;
};

export type AmazonFullApiSchemaPoa = {
  appointmentTime?: AmazonFullApiSchemaAppointmentTime;
  technicians?: ReadonlyArray<AmazonFullApiSchemaTechnician>;
  uploadingTechnician?: string;
  uploadTime?: string;
  poaType?: "NO_SIGNATURE_DUMMY_POS" | "CUSTOMER_SIGNATURE" | "DUMMY_RECEIPT" | "POA_RECEIPT";
};

export type AmazonFullApiSchemaItemDelivery = {
  estimatedDeliveryDate?: string;
  itemDeliveryPromise?: AmazonFullApiSchemaItemDeliveryPromise;
};

export type AmazonFullApiSchemaLinkedAsset = {
  assetType?: string;
  assetName?: string;
  additionalAttributes?: {
  readonly [key: string]: string | undefined;
};
};

export type AmazonFullApiSchemaAddress14 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion?: string;
  postalCode?: string;
  countryCode?: string;
  phone?: string;
};

export type AmazonFullApiSchemaMoneyAmount = {
  value: number;
  currency: string;
};

export type AmazonFullApiSchemaRecurrence = {
  endTime: string;
  daysOfWeek?: ReadonlyArray<AmazonFullApiSchemaDayOfWeek>;
  daysOfMonth?: ReadonlyArray<number>;
};

export type AmazonFullApiSchemaAddressTypeEnum = "Residential" | "Commercial";

export type AmazonFullApiSchemaPaymentInformation2 = {
  PaymentMethod?: AmazonFullApiSchemaPaymentMethodEnum;
  AcquirerId?: string;
  CardBrand?: string;
  PaymentValue?: AmazonFullApiSchemaMoney10;
  AuthorizationCode?: string;
};

export type AmazonFullApiSchemaTaxClassificationList = ReadonlyArray<AmazonFullApiSchemaTaxClassification2>;

export type AmazonFullApiSchemaShipmentItem = {
  ASIN?: string;
  SellerSKU?: string;
  OrderItemId?: string;
  Title?: string;
  QuantityOrdered?: number;
  ItemPrice?: AmazonFullApiSchemaMoney10;
  ShippingPrice?: AmazonFullApiSchemaMoney10;
  GiftWrapPrice?: AmazonFullApiSchemaMoney10;
  ShippingDiscount?: AmazonFullApiSchemaMoney10;
  PromotionDiscount?: AmazonFullApiSchemaMoney10;
  SerialNumbers?: AmazonFullApiSchemaSerialNumbersList;
};

export type AmazonFullApiSchemaShipmentInvoiceStatus2 = "Processing" | "Accepted" | "Errored" | "NotFound";

export type AmazonFullApiSchemaContainerReferenceId = string;

export type AmazonFullApiSchemaCurrency4 = {
  value: number;
  unit: string;
};

export type AmazonFullApiSchemaDimensions5 = {
  length: number;
  width: number;
  height: number;
  unit: "IN" | "CM";
};

export type AmazonFullApiSchemaContainerItem = {
  quantity: number;
  unitPrice: AmazonFullApiSchemaCurrency4;
  unitWeight: AmazonFullApiSchemaWeight6;
  title: string;
};

export type AmazonFullApiSchemaWeight6 = {
  unit: "g" | "kg" | "oz" | "lb";
  value: number;
};

export type AmazonFullApiSchemaRate = {
  rateId?: string;
  totalCharge?: AmazonFullApiSchemaCurrency4;
  billedWeight?: AmazonFullApiSchemaWeight6;
  expirationTime?: string;
  serviceType?: AmazonFullApiSchemaServiceType;
  promise?: AmazonFullApiSchemaShippingPromiseSet;
};

export type AmazonFullApiSchemaShippingPromiseSet = {
  deliveryWindow?: AmazonFullApiSchemaTimeRange;
  receiveWindow?: AmazonFullApiSchemaTimeRange;
};

export type AmazonFullApiSchemaLabelResult = {
  containerReferenceId?: AmazonFullApiSchemaContainerReferenceId;
  trackingId?: string;
  label?: AmazonFullApiSchemaLabel2;
};

export type AmazonFullApiSchemaEvent2 = {
  eventCode: AmazonFullApiSchemaEventCode3;
  eventTime: string;
  location?: AmazonFullApiSchemaLocation2;
};

export type AmazonFullApiSchemaDimensions6 = {
  length: number;
  width: number;
  height: number;
  unit: "INCH" | "CENTIMETER";
};

export type AmazonFullApiSchemaWeight7 = {
  unit: "GRAM" | "KILOGRAM" | "OUNCE" | "POUND";
  value: number;
};

export type AmazonFullApiSchemaChargeList = ReadonlyArray<AmazonFullApiSchemaChargeComponent>;

export type AmazonFullApiSchemaPackageClientReferenceId = string;

export type AmazonFullApiSchemaItemList2 = ReadonlyArray<AmazonFullApiSchemaItem10>;

export type AmazonFullApiSchemaTaxType = "GST";

export type AmazonFullApiSchemaRate2 = {
  rateId: AmazonFullApiSchemaRateId2;
  carrierId: AmazonFullApiSchemaCarrierId;
  carrierName: AmazonFullApiSchemaCarrierName;
  serviceId: AmazonFullApiSchemaServiceId;
  serviceName: AmazonFullApiSchemaServiceName;
  billedWeight?: AmazonFullApiSchemaWeight7;
  totalCharge: AmazonFullApiSchemaCurrency2;
  promise: AmazonFullApiSchemaPromise;
  supportedDocumentSpecifications: AmazonFullApiSchemaSupportedDocumentSpecificationList;
  availableValueAddedServiceGroups?: AmazonFullApiSchemaAvailableValueAddedServiceGroupList;
  requiresAdditionalInputs: boolean;
  rateItemList?: AmazonFullApiSchemaRateItemList;
  paymentType?: AmazonFullApiSchemaPaymentType;
  benefits?: AmazonFullApiSchemaBenefits;
};

export type AmazonFullApiSchemaIneligibleRate = {
  serviceId: AmazonFullApiSchemaServiceId;
  serviceName: AmazonFullApiSchemaServiceName;
  carrierName: AmazonFullApiSchemaCarrierName;
  carrierId: AmazonFullApiSchemaCarrierId;
  ineligibilityReasons: ReadonlyArray<AmazonFullApiSchemaIneligibilityReason>;
};

export type AmazonFullApiSchemaRequestAttributes = ReadonlyArray<AmazonFullApiSchemaLabelAttribute>;

export type AmazonFullApiSchemaTimeWindow2 = {
  start?: string;
  end?: string;
};

export type AmazonFullApiSchemaIncludedBenefits = ReadonlyArray<string>;

export type AmazonFullApiSchemaExcludedBenefits = ReadonlyArray<AmazonFullApiSchemaExcludedBenefit>;

export type AmazonFullApiSchemaCarrierName = string;

export type AmazonFullApiSchemaServiceId = string;

export type AmazonFullApiSchemaServiceName = string;

export type AmazonFullApiSchemaEventCode = "ReadyForReceive" | "PickupDone" | "Delivered" | "Departed" | "DeliveryAttempted" | "Lost" | "OutForDelivery" | "ArrivedAtCarrierFacility" | "Rejected" | "Undeliverable" | "PickupCancelled" | "ReturnInitiated" | "AvailableForPickup" | "RecipientRequestedAlternateDeliveryTiming";

export type AmazonFullApiSchemaLocation = {
  stateOrRegion?: AmazonFullApiSchemaStateOrRegion2;
  city?: AmazonFullApiSchemaCity3;
  countryCode?: AmazonFullApiSchemaCountryCode4;
  postalCode?: AmazonFullApiSchemaPostalCode3;
};

export type AmazonFullApiSchemaStatus2 = "PreTransit" | "InTransit" | "Delivered" | "Lost" | "OutForDelivery" | "Rejected" | "Undeliverable" | "DeliveryAttempted" | "PickupCancelled" | "AwaitingCustomerPickup";

export type AmazonFullApiSchemaTrackingDetailCodes = {
  forward: ReadonlyArray<AmazonFullApiSchemaDetailCodes>;
  returns: ReadonlyArray<AmazonFullApiSchemaDetailCodes>;
};

export type AmazonFullApiSchemaPackageDocumentList = ReadonlyArray<AmazonFullApiSchemaPackageDocument>;

export type AmazonFullApiSchemaLinkableAccountTypeList = ReadonlyArray<AmazonFullApiSchemaLinkableAccountType>;

export type AmazonFullApiSchemaGenerationStatus = "Completed" | "InProgress";

export type AmazonFullApiSchemaCollectionFormId = string;

export type AmazonFullApiSchemaUnmanifestedShipmentLocationList = ReadonlyArray<AmazonFullApiSchemaUnmanifestedShipmentLocation>;

export type AmazonFullApiSchemaAccessPointList = ReadonlyArray<AmazonFullApiSchemaAccessPoint>;

export type AmazonFullApiSchemaSchema2 = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaContactDetails = {
  primary?: {
  email?: AmazonFullApiSchemaEmailAddress2;
  phone?: string;
};
};

export type AmazonFullApiSchemaThroughputConfig = {
  throughputCap?: AmazonFullApiSchemaThroughputCap;
  throughputUnit: AmazonFullApiSchemaThroughputUnit;
};

export type AmazonFullApiSchemaOperatingHoursByDay = {
  monday?: AmazonFullApiSchemaOperatingHours;
  tuesday?: AmazonFullApiSchemaOperatingHours;
  wednesday?: AmazonFullApiSchemaOperatingHours;
  thursday?: AmazonFullApiSchemaOperatingHours;
  friday?: AmazonFullApiSchemaOperatingHours;
  saturday?: AmazonFullApiSchemaOperatingHours;
  sunday?: AmazonFullApiSchemaOperatingHours;
};

export type AmazonFullApiSchemaDuration = {
  value?: AmazonFullApiSchemaNonNegativeInteger;
  timeUnit?: AmazonFullApiSchemaTimeUnit;
};

export type AmazonFullApiSchemaReturnLocation = {
  supplySourceId?: string;
  addressWithContact?: AmazonFullApiSchemaAddressWithContact;
};

export type AmazonFullApiSchemaDeliveryChannel = {
  isSupported?: boolean;
  operationalConfiguration?: AmazonFullApiSchemaOperationalConfiguration;
};

export type AmazonFullApiSchemaPickupChannel = {
  inventoryHoldPeriod?: AmazonFullApiSchemaDuration;
  isSupported?: boolean;
  operationalConfiguration?: AmazonFullApiSchemaOperationalConfiguration;
  inStorePickupConfiguration?: AmazonFullApiSchemaInStorePickupConfiguration;
  curbsidePickupConfiguration?: AmazonFullApiSchemaCurbsidePickupConfiguration;
};

export type AmazonFullApiSchemaEngineOutputUnit = "KILOWATT" | "HORSEPOWER";

export type AmazonFullApiSchemaYear = number;

export type AmazonFullApiSchemaMonth = number;

export type AmazonFullApiSchemaVehicleStandard = "KTYPE" | "AMAZON_ID";

export type AmazonFullApiSchemaItemQuantity = {
  amount?: number;
  unitOfMeasure: string;
};

export type AmazonFullApiSchemaShipmentDetails5 = {
  isPriorityShipment: boolean;
  isScheduledDeliveryShipment?: boolean;
  isPslipRequired: boolean;
  isGift?: boolean;
  shipMethod: string;
  shipmentDates: AmazonFullApiSchemaShipmentDates2;
  messageToCustomer: string;
};

export type AmazonFullApiSchemaTaxLineItem = ReadonlyArray<AmazonFullApiSchemaTaxDetails3>;

export type AmazonFullApiSchemaAddress15 = {
  name: string;
  attention?: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaOrderItem4 = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  title?: string;
  orderedQuantity: AmazonFullApiSchemaItemQuantity2;
  scheduledDeliveryShipment?: AmazonFullApiSchemaScheduledDeliveryShipment2;
  giftDetails?: AmazonFullApiSchemaGiftDetails2;
  netPrice: AmazonFullApiSchemaMoney11;
  taxDetails?: {
  taxLineItem?: AmazonFullApiSchemaTaxLineItem;
};
  totalPrice?: AmazonFullApiSchemaMoney11;
};

export type AmazonFullApiSchemaTaxRegistrationDetails2 = {
  taxRegistrationType?: "VAT" | "GST";
  taxRegistrationNumber: string;
  taxRegistrationAddress?: AmazonFullApiSchemaAddress15;
  taxRegistrationMessages?: string;
};

export type AmazonFullApiSchemaItemQuantity2 = {
  amount?: number;
  unitOfMeasure?: "Each";
};

export type AmazonFullApiSchemaShipmentDates = {
  requiredShipDate: string;
  promisedDeliveryDate?: string;
};

export type AmazonFullApiSchemaTaxLineItem2 = ReadonlyArray<AmazonFullApiSchemaTaxDetails4>;

export type AmazonFullApiSchemaTaxRegistrationDetails3 = {
  taxRegistrationType?: "VAT" | "GST";
  taxRegistrationNumber: string;
  taxRegistrationAddress?: AmazonFullApiSchemaAddress11;
  taxRegistrationMessages?: string;
};

export type AmazonFullApiSchemaItemQuantity3 = {
  amount?: number;
  unitOfMeasure?: "Each";
};

export type AmazonFullApiSchemaScheduledDeliveryShipment = {
  scheduledDeliveryServiceType?: string;
  earliestNominatedDeliveryDate?: string;
  latestNominatedDeliveryDate?: string;
};

export type AmazonFullApiSchemaGiftDetails = {
  giftMessage?: string;
  giftWrapId?: string;
};

export type AmazonFullApiSchemaMoney8 = {
  currencyCode?: string;
  amount?: AmazonFullApiSchemaDecimal9;
};

export type AmazonFullApiSchemaBuyerCustomizedInfoDetail = {
  customizedUrl?: string;
};

export type AmazonFullApiSchemaAddress16 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city: string;
  county?: string;
  district?: string;
  stateOrRegion: string;
  postalCode: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaTaxRegistrationDetail = {
  taxRegistrationType?: "VAT" | "GST";
  taxRegistrationNumber: string;
  taxRegistrationAddress?: AmazonFullApiSchemaAddress16;
  taxRegistrationMessage?: string;
};

export type AmazonFullApiSchemaDecimal4 = string;

export type AmazonFullApiSchemaItemQuantity4 = {
  amount: number;
  unitOfMeasure: string;
};

export type AmazonFullApiSchemaScenario = {
  scenarioId: string;
  orders: ReadonlyArray<AmazonFullApiSchemaTestOrder>;
};

export type AmazonFullApiSchemaAddress17 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion?: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaTaxRegistrationDetails4 = {
  taxRegistrationType?: "VAT" | "GST";
  taxRegistrationNumber: string;
  taxRegistrationAddress?: AmazonFullApiSchemaAddress17;
  taxRegistrationMessages?: string;
};

export type AmazonFullApiSchemaDimensions7 = {
  length: AmazonFullApiSchemaDecimal10;
  width: AmazonFullApiSchemaDecimal10;
  height: AmazonFullApiSchemaDecimal10;
  unitOfMeasure: "IN" | "CM";
};

export type AmazonFullApiSchemaWeight8 = {
  unitOfMeasure: "KG" | "LB";
  value: AmazonFullApiSchemaDecimal10;
};

export type AmazonFullApiSchemaPackedItem2 = {
  itemSequenceNumber: number;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  packedQuantity: AmazonFullApiSchemaItemQuantity5;
};

export type AmazonFullApiSchemaItemQuantity5 = {
  amount: number;
  unitOfMeasure: string;
};

export type AmazonFullApiSchemaDecimal5 = string;

export type AmazonFullApiSchemaItemQuantity6 = {
  amount: number;
  unitOfMeasure: string;
};

export type AmazonFullApiSchemaShipmentSchedule = {
  estimatedDeliveryDateTime?: string;
  apptWindowStartDateTime?: string;
  apptWindowEndDateTime?: string;
};

export type AmazonFullApiSchemaError43 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaAddress18 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion?: string;
  postalOrZipCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaTaxRegistrationDetails5 = {
  taxRegistrationType: "VAT" | "GST";
  taxRegistrationNumber: string;
};

export type AmazonFullApiSchemaDecimal6 = string;

export type AmazonFullApiSchemaItemQuantity7 = {
  amount: number;
  unitOfMeasure: "Cases" | "Eaches";
  unitSize?: number;
  totalWeight?: AmazonFullApiSchemaTotalWeight;
};

export type AmazonFullApiSchemaNetCostUnitOfMeasure = "POUNDS" | "OUNCES" | "GRAMS" | "KILOGRAMS";

export type AmazonFullApiSchemaCreditNoteDetails = {
  referenceInvoiceNumber?: string;
  debitNoteNumber?: string;
  returnsReferenceNumber?: string;
  goodsReturnDate?: AmazonFullApiSchemaDateTime5;
  rmaId?: string;
  coopReferenceNumber?: string;
  consignorsReferenceNumber?: string;
};

export type AmazonFullApiSchemaImportDetails2 = {
  methodOfPayment?: "PaidByBuyer" | "CollectOnDelivery" | "DefinedByBuyerAndSeller" | "FOBPortOfCall" | "PrepaidBySeller" | "PaidBySeller";
  internationalCommercialTerms?: "ExWorks" | "FreeCarrier" | "FreeOnBoard" | "FreeAlongSideShip" | "CarriagePaidTo" | "CostAndFreight" | "CarriageAndInsurancePaidTo" | "CostInsuranceAndFreight" | "DeliveredAtTerminal" | "DeliveredAtPlace" | "DeliverDutyPaid";
  portOfDelivery?: string;
  importContainers?: string;
  shippingInstructions?: string;
};

export type AmazonFullApiSchemaDateTimeInterval = string;

export type AmazonFullApiSchemaOrderItem5 = {
  itemSequenceNumber: string;
  amazonProductIdentifier?: string;
  vendorProductIdentifier?: string;
  orderedQuantity: AmazonFullApiSchemaItemQuantity8;
  isBackOrderAllowed: boolean;
  netCost?: AmazonFullApiSchemaMoney9;
  listPrice?: AmazonFullApiSchemaMoney9;
};

export type AmazonFullApiSchemaAddress19 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion?: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaTaxRegistrationDetails6 = {
  taxRegistrationType: "VAT" | "GST";
  taxRegistrationNumber: string;
};

export type AmazonFullApiSchemaItemQuantity8 = {
  amount?: number;
  unitOfMeasure?: "Cases" | "Eaches";
  unitSize?: number;
};

export type AmazonFullApiSchemaMoney9 = {
  currencyCode?: string;
  amount?: AmazonFullApiSchemaDecimal11;
  unitOfMeasure?: "POUNDS" | "OUNCES" | "GRAMS" | "KILOGRAMS";
};

export type AmazonFullApiSchemaOrderItemAcknowledgement3 = {
  acknowledgementCode: "Accepted" | "Backordered" | "Rejected";
  acknowledgedQuantity: AmazonFullApiSchemaItemQuantity8;
  scheduledShipDate?: string;
  scheduledDeliveryDate?: string;
  rejectionReason?: "TemporarilyUnavailable" | "InvalidProductIdentifier" | "ObsoleteProduct";
};

export type AmazonFullApiSchemaItemStatus = ReadonlyArray<AmazonFullApiSchemaOrderItemStatus>;

export type AmazonFullApiSchemaAddress20 = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  county?: string;
  district?: string;
  stateOrRegion?: string;
  postalCode?: string;
  countryCode: string;
  phone?: string;
};

export type AmazonFullApiSchemaTaxRegistrationDetails7 = {
  taxRegistrationType: "VAT" | "GST";
  taxRegistrationNumber: string;
};

export type AmazonFullApiSchemaWeight9 = {
  unitOfMeasure: "G" | "Kg" | "Oz" | "Lb";
  value: AmazonFullApiSchemaDecimal12;
};

export type AmazonFullApiSchemaVolume = {
  unitOfMeasure: "CuFt" | "CuIn" | "CuM" | "CuY";
  value: AmazonFullApiSchemaDecimal12;
};

export type AmazonFullApiSchemaRoute = {
  stops: ReadonlyArray<AmazonFullApiSchemaStop>;
};

export type AmazonFullApiSchemaItemQuantity9 = {
  amount: number;
  unitOfMeasure: "Cases" | "Eaches";
  unitSize?: number;
  totalWeight?: AmazonFullApiSchemaTotalWeight2;
};

export type AmazonFullApiSchemaItemDetails2 = {
  purchaseOrderNumber?: string;
  lotNumber?: string;
  lotNumberSourceReference?: string;
  lotNumberSourceType?: "GLN" | "FFRN" | "USDA_E" | "URL";
  countryOfOrigin?: string;
  regulationReferences?: AmazonFullApiSchemaRegulationReferences;
  expiry?: AmazonFullApiSchemaExpiry;
  maximumRetailPrice?: AmazonFullApiSchemaMoney12;
  handlingCode?: "Oversized" | "Fragile" | "Food" | "HandleWithCare";
};

export type AmazonFullApiSchemaContainerIdentification = {
  containerIdentificationType: "SSCC" | "AMZNCC" | "GTIN" | "BPS" | "CID";
  containerIdentificationNumber: string;
};

export type AmazonFullApiSchemaDimensions8 = {
  length: AmazonFullApiSchemaDecimal12;
  width: AmazonFullApiSchemaDecimal12;
  height: AmazonFullApiSchemaDecimal12;
  unitOfMeasure: "In" | "Ft" | "Meter" | "Yard";
};

export type AmazonFullApiSchemaContainerItem2 = {
  itemReference: string;
  shippedQuantity: AmazonFullApiSchemaItemQuantity9;
  itemDetails?: AmazonFullApiSchemaItemDetails2;
};

export type AmazonFullApiSchemaCartonReferenceDetails = {
  cartonCount?: number;
  cartonReferenceNumbers: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaPurchaseOrderItems = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  shippedQuantity: AmazonFullApiSchemaItemQuantity9;
  maximumRetailPrice?: AmazonFullApiSchemaMoney12;
};

export type AmazonFullApiSchemaInnerContainersDetails = {
  containerCount?: number;
  containerSequenceNumbers?: ReadonlyArray<AmazonFullApiSchemaContainerSequenceNumbers>;
};

export type AmazonFullApiSchemaPackedItems = {
  itemSequenceNumber?: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  packedQuantity?: AmazonFullApiSchemaItemQuantity9;
  itemDetails?: AmazonFullApiSchemaPackageItemDetails;
};

export type AmazonFullApiSchemaCarrierDetails = {
  name?: string;
  code?: string;
  phone?: string;
  email?: string;
  shipmentReferenceNumber?: string;
};

export type AmazonFullApiSchemaShipmentInformation = {
  vendorDetails?: AmazonFullApiSchemaVendorDetails;
  buyerReferenceNumber?: string;
  shipToParty?: AmazonFullApiSchemaPartyIdentification10;
  shipFromParty?: AmazonFullApiSchemaPartyIdentification10;
  warehouseId?: string;
  masterTrackingId?: string;
  totalLabelCount?: number;
  shipMode?: "SmallParcel" | "LTL";
};

export type AmazonFullApiSchemaLabelData3 = {
  labelSequenceNumber?: number;
  labelFormat?: "PDF";
  carrierCode?: string;
  trackingId?: string;
  label?: string;
};

export type AmazonFullApiSchemaPackageDimensions3 = {
  height: number;
  length: number;
  unitOfMeasurement: AmazonFullApiSchemaDimensionUnitOfMeasurement;
  width: number;
};

export type AmazonFullApiSchemaPackageVolume = {
  unitOfMeasurement: AmazonFullApiSchemaVolumeUnitOfMeasurement;
  volume: number;
};

export type AmazonFullApiSchemaPackageWeight = {
  unitOfMeasurement: AmazonFullApiSchemaWeightUnitOfMeasurement;
  weight: number;
};

export type AmazonFullApiSchemaContentModuleType = "STANDARD_COMPANY_LOGO" | "STANDARD_COMPARISON_TABLE" | "STANDARD_FOUR_IMAGE_TEXT" | "STANDARD_FOUR_IMAGE_TEXT_QUADRANT" | "STANDARD_HEADER_IMAGE_TEXT" | "STANDARD_IMAGE_SIDEBAR" | "STANDARD_IMAGE_TEXT_OVERLAY" | "STANDARD_MULTIPLE_IMAGE_TEXT" | "STANDARD_PRODUCT_DESCRIPTION" | "STANDARD_SINGLE_IMAGE_HIGHLIGHTS" | "STANDARD_SINGLE_IMAGE_SPECS_DETAIL" | "STANDARD_SINGLE_SIDE_IMAGE" | "STANDARD_TECH_SPECS" | "STANDARD_TEXT" | "STANDARD_THREE_IMAGE_TEXT";

export type AmazonFullApiSchemaStandardCompanyLogoModule = {
  companyLogo: AmazonFullApiSchemaImageComponent;
};

export type AmazonFullApiSchemaStandardComparisonTableModule = {
  productColumns?: ReadonlyArray<AmazonFullApiSchemaStandardComparisonProductBlock>;
  metricRowLabels?: ReadonlyArray<AmazonFullApiSchemaPlainTextItem>;
};

export type AmazonFullApiSchemaStandardFourImageTextModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  block1?: AmazonFullApiSchemaStandardImageTextBlock;
  block2?: AmazonFullApiSchemaStandardImageTextBlock;
  block3?: AmazonFullApiSchemaStandardImageTextBlock;
  block4?: AmazonFullApiSchemaStandardImageTextBlock;
};

export type AmazonFullApiSchemaStandardFourImageTextQuadrantModule = {
  block1: AmazonFullApiSchemaStandardImageTextBlock;
  block2: AmazonFullApiSchemaStandardImageTextBlock;
  block3: AmazonFullApiSchemaStandardImageTextBlock;
  block4: AmazonFullApiSchemaStandardImageTextBlock;
};

export type AmazonFullApiSchemaStandardHeaderImageTextModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  block?: AmazonFullApiSchemaStandardImageTextBlock;
};

export type AmazonFullApiSchemaStandardImageSidebarModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  imageCaptionBlock?: AmazonFullApiSchemaStandardImageCaptionBlock;
  descriptionTextBlock?: AmazonFullApiSchemaStandardTextBlock;
  descriptionListBlock?: AmazonFullApiSchemaStandardTextListBlock;
  sidebarImageTextBlock?: AmazonFullApiSchemaStandardImageTextBlock;
  sidebarListBlock?: AmazonFullApiSchemaStandardTextListBlock;
};

export type AmazonFullApiSchemaStandardImageTextOverlayModule = {
  overlayColorType: AmazonFullApiSchemaColorType;
  block?: AmazonFullApiSchemaStandardImageTextBlock;
};

export type AmazonFullApiSchemaStandardMultipleImageTextModule = {
  blocks?: ReadonlyArray<AmazonFullApiSchemaStandardImageTextCaptionBlock>;
};

export type AmazonFullApiSchemaStandardProductDescriptionModule = {
  body: AmazonFullApiSchemaParagraphComponent;
};

export type AmazonFullApiSchemaStandardSingleImageHighlightsModule = {
  image?: AmazonFullApiSchemaImageComponent;
  headline?: AmazonFullApiSchemaTextComponent;
  textBlock1?: AmazonFullApiSchemaStandardTextBlock;
  textBlock2?: AmazonFullApiSchemaStandardTextBlock;
  textBlock3?: AmazonFullApiSchemaStandardTextBlock;
  bulletedListBlock?: AmazonFullApiSchemaStandardHeaderTextListBlock;
};

export type AmazonFullApiSchemaStandardSingleImageSpecsDetailModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  image?: AmazonFullApiSchemaImageComponent;
  descriptionHeadline?: AmazonFullApiSchemaTextComponent;
  descriptionBlock1?: AmazonFullApiSchemaStandardTextBlock;
  descriptionBlock2?: AmazonFullApiSchemaStandardTextBlock;
  specificationHeadline?: AmazonFullApiSchemaTextComponent;
  specificationListBlock?: AmazonFullApiSchemaStandardHeaderTextListBlock;
  specificationTextBlock?: AmazonFullApiSchemaStandardTextBlock;
};

export type AmazonFullApiSchemaStandardSingleSideImageModule = {
  imagePositionType: AmazonFullApiSchemaPositionType;
  block?: AmazonFullApiSchemaStandardImageTextBlock;
};

export type AmazonFullApiSchemaStandardTechSpecsModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  specificationList: ReadonlyArray<AmazonFullApiSchemaStandardTextPairBlock>;
  tableCount?: number;
};

export type AmazonFullApiSchemaStandardTextModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  body: AmazonFullApiSchemaParagraphComponent;
};

export type AmazonFullApiSchemaStandardThreeImageTextModule = {
  headline?: AmazonFullApiSchemaTextComponent;
  block1?: AmazonFullApiSchemaStandardImageTextBlock;
  block2?: AmazonFullApiSchemaStandardImageTextBlock;
  block3?: AmazonFullApiSchemaStandardImageTextBlock;
};

export type AmazonFullApiSchemaContentBadge = "BULK" | "GENERATED" | "LAUNCHPAD" | "PREMIUM" | "STANDARD";

export type AmazonFullApiSchemaAsinBadge = "BRAND_NOT_ELIGIBLE" | "CATALOG_NOT_FOUND" | "CONTENT_NOT_PUBLISHED" | "CONTENT_PUBLISHED";

export type AmazonFullApiSchemaDimension3 = {
  unit?: string;
  value?: number;
};

export type AmazonFullApiSchemaItemVariationTheme = {
  attributes?: ReadonlyArray<string>;
  theme?: string;
};

export type AmazonFullApiSchemaItemContributorRole = {
  displayName?: string;
  value: string;
};

export type AmazonFullApiSchemaBrowseNodeStarRatingImpact = {
  allProducts: number;
};

export type AmazonFullApiSchemaChildAsinMentionMetrics = {
  asin: string;
  numberOfMentions: number;
};

export type AmazonFullApiSchemaItemReviewSubtopicMetrics = {
  numberOfMentions: number;
  occurrencePercentage: number;
};

export type AmazonFullApiSchemaBrowseNodeAllOccurrence = {
  topTwentyFivePercentProducts: number;
  allProducts: number;
};

export type AmazonFullApiSchemaBrowseNodeAllStarRatingImpact = {
  topTwentyFivePercentProducts: number;
  allProducts: number;
};

export type AmazonFullApiSchemaBrowseNodeReviewSubtopicMetrics = {
  occurrencePercentage: number;
};

export type AmazonFullApiSchemaReviewTrendMetrics = {
  occurrencePercentage: number;
};

export type AmazonFullApiSchemaBrowseNodeReviewTrendMetrics = {
  occurrencePercentage: AmazonFullApiSchemaBrowseNodeAllOccurrence;
};

export type AmazonFullApiSchemaOrderItemSerialNumber = string;

export type AmazonFullApiSchemaMarketplaceAttributes2 = {
  channelName?: "FBA" | "MFN" | "DF";
  marketplaceId?: string;
};

export type AmazonFullApiSchemaActionableError = {
  errorType?: string;
  errorSubType?: string;
};

export type AmazonFullApiSchemaOriginalLineItem = {
  replacingSku: string;
  originalSku: string;
  charges: AmazonFullApiSchemaCharges;
};

export type AmazonFullApiSchemaRecommendedPackageLineItems = ReadonlyArray<AmazonFullApiSchemaRecommendedPackageLineItem>;

export type AmazonFullApiSchemaInventoryDetails2 = {
  fulfillableQuantity?: number;
  inboundWorkingQuantity?: number;
  inboundShippedQuantity?: number;
  inboundReceivingQuantity?: number;
  reservedQuantity?: AmazonFullApiSchemaReservedQuantity;
  researchingQuantity?: AmazonFullApiSchemaResearchingQuantity;
  unfulfillableQuantity?: AmazonFullApiSchemaUnfulfillableQuantity;
};

export type AmazonFullApiSchemaCurrency5 = {
  CurrencyCode?: string;
  CurrencyAmount?: AmazonFullApiSchemaBigDecimal2;
};

export type AmazonFullApiSchemaDate = string;

export type AmazonFullApiSchemaShipmentEvent = {
  AmazonOrderId?: string;
  SellerOrderId?: string;
  MarketplaceName?: string;
  StoreName?: string;
  OrderChargeList?: AmazonFullApiSchemaChargeComponentList;
  OrderChargeAdjustmentList?: AmazonFullApiSchemaChargeComponentList;
  ShipmentFeeList?: AmazonFullApiSchemaFeeComponentList;
  ShipmentFeeAdjustmentList?: AmazonFullApiSchemaFeeComponentList;
  OrderFeeList?: AmazonFullApiSchemaFeeComponentList;
  OrderFeeAdjustmentList?: AmazonFullApiSchemaFeeComponentList;
  DirectPaymentList?: AmazonFullApiSchemaDirectPaymentList;
  PostedDate?: AmazonFullApiSchemaDate;
  ShipmentItemList?: AmazonFullApiSchemaShipmentItemList;
  ShipmentItemAdjustmentList?: AmazonFullApiSchemaShipmentItemList;
};

export type AmazonFullApiSchemaEBTRefundReimbursementOnlyEvent = {
  OrderId?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  Amount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaPayWithAmazonEvent = {
  SellerOrderId?: string;
  TransactionPostedDate?: AmazonFullApiSchemaDate;
  BusinessObjectType?: string;
  SalesChannel?: string;
  Charge?: AmazonFullApiSchemaChargeComponent2;
  FeeList?: AmazonFullApiSchemaFeeComponentList;
  PaymentAmountType?: string;
  AmountDescription?: string;
  FulfillmentChannel?: string;
  StoreName?: string;
};

export type AmazonFullApiSchemaSolutionProviderCreditEvent = {
  ProviderTransactionType?: string;
  SellerOrderId?: string;
  MarketplaceId?: string;
  MarketplaceCountryCode?: string;
  SellerId?: string;
  SellerStoreName?: string;
  ProviderId?: string;
  ProviderStoreName?: string;
  TransactionAmount?: AmazonFullApiSchemaCurrency5;
  TransactionCreationDate?: AmazonFullApiSchemaDate;
};

export type AmazonFullApiSchemaRetrochargeEvent = {
  RetrochargeEventType?: string;
  AmazonOrderId?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  BaseTax?: AmazonFullApiSchemaCurrency5;
  ShippingTax?: AmazonFullApiSchemaCurrency5;
  MarketplaceName?: string;
  RetrochargeTaxWithheldList?: AmazonFullApiSchemaTaxWithheldComponentList;
};

export type AmazonFullApiSchemaRentalTransactionEvent = {
  AmazonOrderId?: string;
  RentalEventType?: string;
  ExtensionLength?: number;
  PostedDate?: AmazonFullApiSchemaDate;
  RentalChargeList?: AmazonFullApiSchemaChargeComponentList;
  RentalFeeList?: AmazonFullApiSchemaFeeComponentList;
  MarketplaceName?: string;
  RentalInitialValue?: AmazonFullApiSchemaCurrency5;
  RentalReimbursement?: AmazonFullApiSchemaCurrency5;
  RentalTaxWithheldList?: AmazonFullApiSchemaTaxWithheldComponentList;
};

export type AmazonFullApiSchemaProductAdsPaymentEvent = {
  postedDate?: AmazonFullApiSchemaDate;
  transactionType?: string;
  invoiceId?: string;
  baseValue?: AmazonFullApiSchemaCurrency5;
  taxValue?: AmazonFullApiSchemaCurrency5;
  transactionValue?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaServiceFeeEvent = {
  AmazonOrderId?: string;
  FeeReason?: string;
  FeeList?: AmazonFullApiSchemaFeeComponentList;
  SellerSKU?: string;
  FnSKU?: string;
  FeeDescription?: string;
  ASIN?: string;
  StoreName?: string;
};

export type AmazonFullApiSchemaSellerDealPaymentEvent = {
  postedDate?: AmazonFullApiSchemaDate;
  dealId?: string;
  dealDescription?: string;
  eventType?: string;
  feeType?: string;
  feeAmount?: AmazonFullApiSchemaCurrency5;
  taxAmount?: AmazonFullApiSchemaCurrency5;
  totalAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaDebtRecoveryEvent = {
  DebtRecoveryType?: string;
  RecoveryAmount?: AmazonFullApiSchemaCurrency5;
  OverPaymentCredit?: AmazonFullApiSchemaCurrency5;
  DebtRecoveryItemList?: AmazonFullApiSchemaDebtRecoveryItemList;
  ChargeInstrumentList?: AmazonFullApiSchemaChargeInstrumentList;
};

export type AmazonFullApiSchemaLoanServicingEvent = {
  LoanAmount?: AmazonFullApiSchemaCurrency5;
  SourceBusinessEventType?: string;
};

export type AmazonFullApiSchemaAdjustmentEvent = {
  AdjustmentType?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  StoreName?: string;
  AdjustmentAmount?: AmazonFullApiSchemaCurrency5;
  AdjustmentItemList?: AmazonFullApiSchemaAdjustmentItemList2;
};

export type AmazonFullApiSchemaSAFETReimbursementEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  SAFETClaimId?: string;
  ReimbursedAmount?: AmazonFullApiSchemaCurrency5;
  ReasonCode?: string;
  SAFETReimbursementItemList?: AmazonFullApiSchemaSAFETReimbursementItemList;
};

export type AmazonFullApiSchemaSellerReviewEnrollmentPaymentEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  EnrollmentId?: string;
  ParentASIN?: string;
  FeeComponent?: AmazonFullApiSchemaFeeComponent;
  ChargeComponent?: AmazonFullApiSchemaChargeComponent2;
  TotalAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaFBALiquidationEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  OriginalRemovalOrderId?: string;
  LiquidationProceedsAmount?: AmazonFullApiSchemaCurrency5;
  LiquidationFeeAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaCouponPaymentEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  CouponId?: string;
  SellerCouponDescription?: string;
  ClipOrRedemptionCount?: number;
  PaymentEventId?: string;
  FeeComponent?: AmazonFullApiSchemaFeeComponent;
  ChargeComponent?: AmazonFullApiSchemaChargeComponent2;
  TotalAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaImagingServicesFeeEvent = {
  ImagingRequestBillingItemID?: string;
  ASIN?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  FeeList?: AmazonFullApiSchemaFeeComponentList;
};

export type AmazonFullApiSchemaNetworkComminglingTransactionEvent = {
  TransactionType?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  NetCoTransactionID?: string;
  SwapReason?: string;
  ASIN?: string;
  MarketplaceId?: string;
  TaxExclusiveAmount?: AmazonFullApiSchemaCurrency5;
  TaxAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaAffordabilityExpenseEvent = {
  AmazonOrderId?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  MarketplaceId?: string;
  TransactionType?: string;
  BaseExpense?: AmazonFullApiSchemaCurrency5;
  TaxTypeCGST: AmazonFullApiSchemaCurrency5;
  TaxTypeSGST: AmazonFullApiSchemaCurrency5;
  TaxTypeIGST: AmazonFullApiSchemaCurrency5;
  TotalExpense?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaRemovalShipmentEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  MerchantOrderId?: string;
  OrderId?: string;
  TransactionType?: string;
  StoreName?: string;
  RemovalShipmentItemList?: AmazonFullApiSchemaRemovalShipmentItemList;
};

export type AmazonFullApiSchemaRemovalShipmentAdjustmentEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  AdjustmentEventId?: string;
  MerchantOrderId?: string;
  OrderId?: string;
  TransactionType?: string;
  RemovalShipmentItemAdjustmentList?: ReadonlyArray<AmazonFullApiSchemaRemovalShipmentItemAdjustment>;
};

export type AmazonFullApiSchemaTrialShipmentEvent = {
  AmazonOrderId?: string;
  FinancialEventGroupId?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  SKU?: string;
  FeeList?: AmazonFullApiSchemaFeeComponentList;
};

export type AmazonFullApiSchemaTDSReimbursementEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  TDSOrderId?: string;
  ReimbursedAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaAdhocDisbursementEvent = {
  TransactionType?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  TransactionId?: string;
  TransactionAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaTaxWithholdingEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  BaseAmount?: AmazonFullApiSchemaCurrency5;
  WithheldAmount?: AmazonFullApiSchemaCurrency5;
  TaxWithholdingPeriod?: AmazonFullApiSchemaTaxWithholdingPeriod;
};

export type AmazonFullApiSchemaChargeRefundEvent = {
  PostedDate?: AmazonFullApiSchemaDate;
  ReasonCode?: string;
  ReasonCodeDescription?: string;
  ChargeRefundTransactions?: AmazonFullApiSchemaChargeRefundTransactions;
};

export type AmazonFullApiSchemaFailedAdhocDisbursementEvent = {
  FundsTransfersType?: string;
  TransferId?: string;
  DisbursementId?: string;
  PaymentDisbursementType?: string;
  Status?: string;
  TransferAmount?: AmazonFullApiSchemaCurrency5;
  PostedDate?: AmazonFullApiSchemaDate;
};

export type AmazonFullApiSchemaValueAddedServiceChargeEvent = {
  TransactionType?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  Description?: string;
  TransactionAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaCapacityReservationBillingEvent = {
  TransactionType?: string;
  PostedDate?: AmazonFullApiSchemaDate;
  Description?: string;
  TransactionAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaSellingPartnerMetadata = {
  sellingPartnerId?: string;
  accountType?: string;
  marketplaceId?: string;
};

export type AmazonFullApiSchemaRelatedIdentifiers = ReadonlyArray<AmazonFullApiSchemaRelatedIdentifier>;

export type AmazonFullApiSchemaDate2 = string;

export type AmazonFullApiSchemaCurrency6 = {
  currencyCode?: string;
  currencyAmount?: AmazonFullApiSchemaBigDecimal3;
};

export type AmazonFullApiSchemaMarketplaceDetails = {
  marketplaceId?: string;
  marketplaceName?: string;
};

export type AmazonFullApiSchemaItems2 = ReadonlyArray<AmazonFullApiSchemaItem11>;

export type AmazonFullApiSchemaContexts = ReadonlyArray<AmazonFullApiSchemaContext>;

export type AmazonFullApiSchemaBreakdown = {
  breakdownType?: string;
  breakdownAmount?: AmazonFullApiSchemaCurrency6;
  breakdowns?: ReadonlyArray<AmazonFullApiSchemaBreakdown>;
};

export type AmazonFullApiSchemaBarcodeInstruction = "RequiresFNSKULabel" | "CanUseOriginalBarcode" | "MustProvideSellerSKU";

export type AmazonFullApiSchemaPrepGuidance = "ConsultHelpDocuments" | "NoAdditionalPrepRequired" | "SeePrepInstructionsList";

export type AmazonFullApiSchemaPrepInstructionList = ReadonlyArray<AmazonFullApiSchemaPrepInstruction3>;

export type AmazonFullApiSchemaAmazonPrepFeesDetailsList = ReadonlyArray<AmazonFullApiSchemaAmazonPrepFeesDetails>;

export type AmazonFullApiSchemaErrorReason = "DoesNotExist" | "InvalidASIN";

export type AmazonFullApiSchemaAddress21 = {
  Name: string;
  AddressLine1: string;
  AddressLine2?: string;
  DistrictOrCounty?: string;
  City: string;
  StateOrProvinceCode: string;
  CountryCode: string;
  PostalCode: string;
};

export type AmazonFullApiSchemaShipmentStatus3 = "WORKING" | "SHIPPED" | "RECEIVING" | "CANCELLED" | "DELETED" | "CLOSED" | "ERROR" | "IN_TRANSIT" | "DELIVERED" | "CHECKED_IN";

export type AmazonFullApiSchemaLabelPrepType = "NO_LABEL" | "SELLER_LABEL" | "AMAZON_LABEL";

export type AmazonFullApiSchemaDateStringType = string;

export type AmazonFullApiSchemaBoxContentsSource = "NONE" | "FEED" | "2D_BARCODE" | "INTERACTIVE";

export type AmazonFullApiSchemaBoxContentsFeeDetails = {
  TotalUnits?: AmazonFullApiSchemaQuantity2;
  FeePerUnit?: AmazonFullApiSchemaAmount3;
  TotalFee?: AmazonFullApiSchemaAmount3;
};

export type AmazonFullApiSchemaQuantity2 = number;

export type AmazonFullApiSchemaPrepDetailsList = ReadonlyArray<AmazonFullApiSchemaPrepDetails2>;

export type AmazonFullApiSchemaWeightRange = {
  maximum: number;
  minimum: number;
  unit: AmazonFullApiSchemaUnitOfWeight2;
};

export type AmazonFullApiSchemaScheduledDeliveryInfo = {
  deliveryTimeZone: string;
  deliveryWindows: AmazonFullApiSchemaDeliveryWindowList;
};

export type AmazonFullApiSchemaWeight10 = {
  unit: "KG" | "KILOGRAMS" | "LB" | "POUNDS";
  value: string;
};

export type AmazonFullApiSchemaFeeList = ReadonlyArray<AmazonFullApiSchemaFee2>;

export type AmazonFullApiSchemaFulfillmentPreviewShipmentList = ReadonlyArray<AmazonFullApiSchemaFulfillmentPreviewShipment>;

export type AmazonFullApiSchemaUnfulfillablePreviewItemList = ReadonlyArray<AmazonFullApiSchemaUnfulfillablePreviewItem>;

export type AmazonFullApiSchemaStringList = ReadonlyArray<string>;

export type AmazonFullApiSchemaDeliveryPolicy = {
  message?: AmazonFullApiSchemaDeliveryMessage;
};

export type AmazonFullApiSchemaEventCode2 = "EVENT_101" | "EVENT_102" | "EVENT_201" | "EVENT_202" | "EVENT_203" | "EVENT_204" | "EVENT_205" | "EVENT_206" | "EVENT_301" | "EVENT_302" | "EVENT_304" | "EVENT_306" | "EVENT_307" | "EVENT_308" | "EVENT_309" | "EVENT_401" | "EVENT_402" | "EVENT_403" | "EVENT_404" | "EVENT_405" | "EVENT_406" | "EVENT_407" | "EVENT_408" | "EVENT_409" | "EVENT_411" | "EVENT_412" | "EVENT_413" | "EVENT_414" | "EVENT_415" | "EVENT_416" | "EVENT_417" | "EVENT_418" | "EVENT_419" | "EVENT_801" | "EVENT_804";

export type AmazonFullApiSchemaFulfillmentReturnItemStatus = "New" | "Processed";

export type AmazonFullApiSchemaReturnItemDisposition = "Sellable" | "Defective" | "CustomerDamaged" | "CarrierDamaged" | "FulfillerDamaged";

export type AmazonFullApiSchemaInvalidItemReason = {
  invalidItemReasonCode: AmazonFullApiSchemaInvalidItemReasonCode;
  description: string;
};

export type AmazonFullApiSchemaFulfillmentShipmentItemList = ReadonlyArray<AmazonFullApiSchemaFulfillmentShipmentItem>;

export type AmazonFullApiSchemaFulfillmentShipmentPackageList = ReadonlyArray<AmazonFullApiSchemaFulfillmentShipmentPackage>;

export type AmazonFullApiSchemaItemVariationTheme2 = {
  attributes: ReadonlyArray<string>;
  theme: string;
};

export type AmazonFullApiSchemaOrderItemId2 = string;

export type AmazonFullApiSchemaItemQuantity10 = number;

export type AmazonFullApiSchemaItemDescription = string;

export type AmazonFullApiSchemaTransparencyCodeList = ReadonlyArray<AmazonFullApiSchemaTransparencyCode>;

export type AmazonFullApiSchemaLiquidVolume = {
  Unit: "ML" | "L" | "FL_OZ" | "GAL" | "PT" | "QT" | "C";
  Value: number;
};

export type AmazonFullApiSchemaDangerousGoodsDetails = {
  UnitedNationsRegulatoryId?: string;
  TransportationRegulatoryClass?: string;
  PackingGroup?: "I" | "II" | "III";
  PackingInstruction?: "PI965_SECTION_IA" | "PI965_SECTION_IB" | "PI965_SECTION_II" | "PI966_SECTION_I" | "PI966_SECTION_II" | "PI967_SECTION_I" | "PI967_SECTION_II" | "PI968_SECTION_IA" | "PI968_SECTION_IB" | "PI969_SECTION_I" | "PI969_SECTION_II" | "PI970_SECTION_I" | "PI970_SECTION_II";
};

export type AmazonFullApiSchemaRateItem = {
  RateItemID: AmazonFullApiSchemaRateItemID;
  RateItemType?: AmazonFullApiSchemaRateItemType;
  RateItemCharge?: AmazonFullApiSchemaCurrencyAmount;
  RateItemNameLocalization?: string;
};

export type AmazonFullApiSchemaAvailableCarrierWillPickUpOptionsList = ReadonlyArray<AmazonFullApiSchemaAvailableCarrierWillPickUpOption>;

export type AmazonFullApiSchemaAvailableDeliveryExperienceOptionsList = ReadonlyArray<AmazonFullApiSchemaAvailableDeliveryExperienceOption>;

export type AmazonFullApiSchemaLabelFormatOption = {
  IncludePackingSlipWithLabel?: boolean;
  LabelFormat?: AmazonFullApiSchemaLabelFormat2;
};

export type AmazonFullApiSchemaIncludedBenefits2 = ReadonlyArray<string>;

export type AmazonFullApiSchemaExcludedBenefits2 = ReadonlyArray<AmazonFullApiSchemaExcludedBenefit2>;

export type AmazonFullApiSchemaLabelDimension = number;

export type AmazonFullApiSchemaFileType = "application/pdf" | "application/zpl" | "image/png";

export type AmazonFullApiSchemaLength = {
  value?: number;
  unit?: AmazonFullApiSchemaUnitOfLength2;
};

export type AmazonFullApiSchemaSellerInputDefinition = {
  IsRequired: boolean;
  DataType: string;
  Constraints: AmazonFullApiSchemaConstraints;
  InputDisplayText: string;
  InputTarget?: AmazonFullApiSchemaInputTargetType;
  StoredValue: AmazonFullApiSchemaAdditionalSellerInput;
  RestrictedSetValues?: AmazonFullApiSchemaRestrictedSetValues;
};

export type AmazonFullApiSchemaAggregationSettings = {
  aggregationTimePeriod: AmazonFullApiSchemaAggregationTimePeriod;
};

export type AmazonFullApiSchemaMarketplaceIds = ReadonlyArray<string>;

export type AmazonFullApiSchemaOrderChangeTypes = ReadonlyArray<AmazonFullApiSchemaOrderChangeTypeEnum>;

export type AmazonFullApiSchemaGeoCoordinates = {
  Latitude?: number;
  Longitude?: number;
};

export type AmazonFullApiSchemaBusinessHours = {
  DayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
  OpenIntervals?: ReadonlyArray<AmazonFullApiSchemaOpenInterval>;
};

export type AmazonFullApiSchemaExceptionDates = {
  ExceptionDate?: string;
  IsOpen?: boolean;
  OpenIntervals?: ReadonlyArray<AmazonFullApiSchemaOpenInterval>;
};

export type AmazonFullApiSchemaAssociatedItem2 = {
  OrderId?: string;
  OrderItemId?: string;
  AssociationType?: AmazonFullApiSchemaAssociationType;
};

export type AmazonFullApiSchemaProductInfoDetail = {
  NumberOfItems?: string;
};

export type AmazonFullApiSchemaPointsGrantedDetail = {
  PointsNumber?: number;
  PointsMonetaryValue?: AmazonFullApiSchemaMoney3;
};

export type AmazonFullApiSchemaPromotionIdList = ReadonlyArray<string>;

export type AmazonFullApiSchemaTaxCollection = {
  Model?: "MarketplaceFacilitator";
  ResponsibleParty?: "Amazon Services, Inc.";
};

export type AmazonFullApiSchemaItemBuyerInfo = {
  BuyerCustomizedInfo?: AmazonFullApiSchemaBuyerCustomizedInfoDetail2;
  GiftWrapPrice?: AmazonFullApiSchemaMoney3;
  GiftWrapTax?: AmazonFullApiSchemaMoney3;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
};

export type AmazonFullApiSchemaBuyerRequestedCancel = {
  IsBuyerRequestedCancel?: string;
  BuyerCancelReason?: string;
};

export type AmazonFullApiSchemaSubstitutionPreferences = {
  SubstitutionType: "CUSTOMER_PREFERENCE" | "AMAZON_RECOMMENDED" | "DO_NOT_SUBSTITUTE";
  SubstitutionOptions?: AmazonFullApiSchemaSubstitutionOptionList;
};

export type AmazonFullApiSchemaMeasurement2 = {
  Unit: "OUNCES" | "POUNDS" | "KILOGRAMS" | "GRAMS" | "MILLIGRAMS" | "INCHES" | "FEET" | "METERS" | "CENTIMETERS" | "MILLIMETERS" | "SQUARE_METERS" | "SQUARE_CENTIMETERS" | "SQUARE_FEET" | "SQUARE_INCHES" | "GALLONS" | "PINTS" | "QUARTS" | "FLUID_OUNCES" | "LITERS" | "CUBIC_METERS" | "CUBIC_FEET" | "CUBIC_INCHES" | "CUBIC_CENTIMETERS" | "COUNT";
  Value: number;
};

export type AmazonFullApiSchemaShippingConstraints = {
  PalletDelivery?: AmazonFullApiSchemaConstraintType;
  SignatureConfirmation?: AmazonFullApiSchemaConstraintType;
  RecipientIdentityVerification?: AmazonFullApiSchemaConstraintType;
  RecipientAgeVerification?: AmazonFullApiSchemaConstraintType;
};

export type AmazonFullApiSchemaAmazonPrograms = {
  Programs: ReadonlyArray<string>;
};

export type AmazonFullApiSchemaBuyerCustomizedInfoDetail2 = {
  CustomizedURL?: string;
};

export type AmazonFullApiSchemaApprovedAttribute = {
  attributeName: string;
  originalValue: string;
  approvedValue: string;
};

export type AmazonFullApiSchemaTransparencyCodeList2 = ReadonlyArray<AmazonFullApiSchemaTransparencyCode2>;

export type AmazonFullApiSchemaAddressExtendedFields2 = {
  streetName?: string;
  streetNumber?: string;
  complement?: string;
  neighborhood?: string;
};

export type AmazonFullApiSchemaPreferredDeliveryTime2 = {
  businessHours?: ReadonlyArray<AmazonFullApiSchemaBusinessHour>;
  exceptionDates?: ReadonlyArray<AmazonFullApiSchemaExceptionDate>;
};

export type AmazonFullApiSchemaPreferredDeliveryCapability = string;

export type AmazonFullApiSchemaDecimal7 = string;

export type AmazonFullApiSchemaTaxRegistrationAttribute = {
  key?: string;
  value?: string;
};

export type AmazonFullApiSchemaAsin3 = string;

export type AmazonFullApiSchemaSKU2 = string;

export type AmazonFullApiSchemaItemCondition = {
  conditionType?: string;
  conditionSubtype?: string;
  conditionNote?: string;
};

export type AmazonFullApiSchemaItemPrice = {
  unitPrice?: AmazonFullApiSchemaMoney6;
  priceDesignation?: string;
};

export type AmazonFullApiSchemaItemCustomization = {
  customizedUrl?: string;
};

export type AmazonFullApiSchemaItemProceedsBreakdown = {
  type: string;
  subtotal: AmazonFullApiSchemaMoney6;
  detailedBreakdowns?: ReadonlyArray<AmazonFullApiSchemaItemProceedsDetailedBreakdown>;
};

export type AmazonFullApiSchemaItemPointsCost = {
  pointsGranted?: AmazonFullApiSchemaPointsGranted;
};

export type AmazonFullApiSchemaItemPromotionBreakdown = {
  promotionId?: string;
};

export type AmazonFullApiSchemaItemCancellationRequest = {
  requester?: string;
  cancelReason?: string;
};

export type AmazonFullApiSchemaItemPicking = {
  substitutionPreference?: AmazonFullApiSchemaItemSubstitutionPreference;
};

export type AmazonFullApiSchemaItemPacking = {
  giftOption?: AmazonFullApiSchemaGiftOption;
  serialNumberRequirement?: AmazonFullApiSchemaSerialNumberRequirement;
};

export type AmazonFullApiSchemaItemShipping = {
  scheduledDeliveryWindow?: AmazonFullApiSchemaDateTimeRange2;
  shippingConstraints?: AmazonFullApiSchemaItemShippingConstraints;
  internationalShipping?: AmazonFullApiSchemaItemInternationalShipping;
};

export type AmazonFullApiSchemaItemTaxCalculationBreakdown = {
  reportingScheme?: string;
};

export type AmazonFullApiSchemaItemTaxCollection = {
  model?: string;
  responsibleParty?: string;
};

export type AmazonFullApiSchemaFeeDetail = {
  FeeType: string;
  FeeAmount: AmazonFullApiSchemaMoneyType;
  FeePromotion?: AmazonFullApiSchemaMoneyType;
  TaxAmount?: AmazonFullApiSchemaMoneyType;
  FinalFee: AmazonFullApiSchemaMoneyType;
  IncludedFeeDetailList?: AmazonFullApiSchemaIncludedFeeDetailList;
};

export type AmazonFullApiSchemaIdentifierType = {
  MarketplaceASIN: AmazonFullApiSchemaASINIdentifier;
  SKUIdentifier?: AmazonFullApiSchemaSellerSKUIdentifier;
};

export type AmazonFullApiSchemaAttributeSetList = ReadonlyArray<{}>;

export type AmazonFullApiSchemaRelationshipList = ReadonlyArray<{}>;

export type AmazonFullApiSchemaCompetitivePricingType = {
  CompetitivePrices: AmazonFullApiSchemaCompetitivePriceList;
  NumberOfOfferListings: AmazonFullApiSchemaNumberOfOfferListingsList;
  TradeInValue?: AmazonFullApiSchemaMoneyType2;
};

export type AmazonFullApiSchemaOffersList = ReadonlyArray<AmazonFullApiSchemaOfferType>;

export type AmazonFullApiSchemaOfferCountType = {
  condition?: string;
  fulfillmentChannel?: AmazonFullApiSchemaFulfillmentChannelType2;
  OfferCount?: number;
};

export type AmazonFullApiSchemaLowestPriceType = {
  condition: string;
  fulfillmentChannel: string;
  offerType?: AmazonFullApiSchemaOfferCustomerType;
  quantityTier?: number;
  quantityDiscountType?: AmazonFullApiSchemaQuantityDiscountType;
  LandedPrice?: AmazonFullApiSchemaMoneyType2;
  ListingPrice: AmazonFullApiSchemaMoneyType2;
  Shipping?: AmazonFullApiSchemaMoneyType2;
  Points?: AmazonFullApiSchemaPoints3;
};

export type AmazonFullApiSchemaBuyBoxPriceType = {
  condition: string;
  offerType?: AmazonFullApiSchemaOfferCustomerType;
  quantityTier?: number;
  quantityDiscountType?: AmazonFullApiSchemaQuantityDiscountType;
  LandedPrice: AmazonFullApiSchemaMoneyType2;
  ListingPrice: AmazonFullApiSchemaMoneyType2;
  Shipping: AmazonFullApiSchemaMoneyType2;
  Points?: AmazonFullApiSchemaPoints3;
  sellerId?: string;
};

export type AmazonFullApiSchemaSalesRankType = {
  ProductCategoryId: string;
  Rank: number;
};

export type AmazonFullApiSchemaOfferCustomerType = "B2C" | "B2B";

export type AmazonFullApiSchemaSellerFeedbackType = {
  SellerPositiveFeedbackRating?: number;
  FeedbackCount: number;
};

export type AmazonFullApiSchemaDetailedShippingTimeType = {
  minimumHours?: number;
  maximumHours?: number;
  availableDate?: string;
  availabilityType?: "NOW" | "FUTURE_WITHOUT_DATE" | "FUTURE_WITH_DATE";
};

export type AmazonFullApiSchemaQuantityDiscountPriceType = {
  quantityTier: number;
  quantityDiscountType: AmazonFullApiSchemaQuantityDiscountType;
  listingPrice: AmazonFullApiSchemaMoneyType2;
};

export type AmazonFullApiSchemaPoints3 = {
  PointsNumber?: number;
  PointsMonetaryValue?: AmazonFullApiSchemaMoneyType2;
};

export type AmazonFullApiSchemaShipsFromType = {
  State?: string;
  Country?: string;
};

export type AmazonFullApiSchemaPrimeInformationType = {
  IsPrime: boolean;
  IsNationalPrime: boolean;
};

export type AmazonFullApiSchemaHttpMethod3 = "GET" | "PUT" | "PATCH" | "DELETE" | "POST";

export type AmazonFullApiSchemaHttpRequestHeaders = {
  readonly [key: string]: string | undefined;
};

export type AmazonFullApiSchemaMarketplaceId6 = string;

export type AmazonFullApiSchemaItemCondition2 = "New" | "Used" | "Collectible" | "Refurbished" | "Club";

export type AmazonFullApiSchemaCustomerType = "Consumer" | "Business";

export type AmazonFullApiSchemaHttpResponseHeaders = {
  Date?: string;
  "x-amzn-RequestId"?: string;
  readonly [key: string]: string | undefined;
};

export type AmazonFullApiSchemaGetOffersHttpStatusLine = {
  statusCode?: number;
  reasonPhrase?: string;
};

export type AmazonFullApiSchemaHttpBody = {
  readonly [key: string]: AmazonFullApiSchemaJsonValue | undefined;
};

export type AmazonFullApiSchemaHttpHeaders = {
  readonly [key: string]: string | undefined;
};

export type AmazonFullApiSchemaSku = string;

export type AmazonFullApiSchemaSegment = {
  segmentDetails?: AmazonFullApiSchemaSegmentDetails;
};

export type AmazonFullApiSchemaOfferIdentifier = {
  marketplaceId: AmazonFullApiSchemaMarketplaceId5;
  sellerId?: string;
  sku?: string;
  asin: AmazonFullApiSchemaAsin2;
  fulfillmentType?: AmazonFullApiSchemaFulfillmentType;
};

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceResultList = ReadonlyArray<AmazonFullApiSchemaFeaturedOfferExpectedPriceResult>;

export type AmazonFullApiSchemaErrorList43 = ReadonlyArray<AmazonFullApiSchemaError44>;

export type AmazonFullApiSchemaCondition = "New" | "Used" | "Collectible" | "Refurbished" | "Club";

export type AmazonFullApiSchemaFeaturedBuyingOption = {
  buyingOptionType: "New";
  segmentedFeaturedOffers: ReadonlyArray<AmazonFullApiSchemaSegmentedFeaturedOffer>;
};

export type AmazonFullApiSchemaLowestPricedOffer = {
  lowestPricedOffersInput: AmazonFullApiSchemaLowestPricedOffersInput;
  offers: ReadonlyArray<AmazonFullApiSchemaOffer>;
};

export type AmazonFullApiSchemaReferencePrice = {
  name: string;
  price: AmazonFullApiSchemaMoneyType3;
};

export type AmazonFullApiSchemaSimilarItems = {
  items?: ReadonlyArray<AmazonFullApiSchemaItem12>;
};

export type AmazonFullApiSchemaOfferProgramConfigurationPromotionsDiscountFunding = {
  percentage?: number;
};

export type AmazonFullApiSchemaDecimal8 = string;

export type AmazonFullApiSchemaItemDeliveryPromise = {
  startTime?: string;
  endTime?: string;
};

export type AmazonFullApiSchemaDayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

export type AmazonFullApiSchemaPaymentMethodEnum = "CreditCard" | "DebitCard" | "Pix" | "BankSlip" | "GiftCard" | "Other";

export type AmazonFullApiSchemaMoney10 = {
  CurrencyCode?: string;
  Amount?: string;
};

export type AmazonFullApiSchemaTaxClassification2 = {
  Name?: string;
  Value?: string;
};

export type AmazonFullApiSchemaSerialNumbersList = ReadonlyArray<string>;

export type AmazonFullApiSchemaTimeRange = {
  start?: string;
  end?: string;
};

export type AmazonFullApiSchemaLabel2 = {
  labelStream?: AmazonFullApiSchemaLabelStream;
  labelSpecification?: AmazonFullApiSchemaLabelSpecification;
};

export type AmazonFullApiSchemaEventCode3 = string;

export type AmazonFullApiSchemaLocation2 = {
  stateOrRegion?: AmazonFullApiSchemaStateOrRegion;
  city?: AmazonFullApiSchemaCity2;
  countryCode?: AmazonFullApiSchemaCountryCode3;
  postalCode?: AmazonFullApiSchemaPostalCode2;
};

export type AmazonFullApiSchemaChargeComponent = {
  amount?: AmazonFullApiSchemaCurrency2;
  chargeType?: "TAX" | "DISCOUNT";
};

export type AmazonFullApiSchemaItem10 = {
  itemValue?: AmazonFullApiSchemaCurrency2;
  description?: string;
  itemIdentifier?: string;
  quantity: number;
  weight?: AmazonFullApiSchemaWeight7;
  liquidVolume?: AmazonFullApiSchemaLiquidVolume2;
  isHazmat?: boolean;
  dangerousGoodsDetails?: AmazonFullApiSchemaDangerousGoodsDetails2;
  productType?: string;
  invoiceDetails?: AmazonFullApiSchemaInvoiceDetails;
  serialNumbers?: ReadonlyArray<string>;
  directFulfillmentItemIdentifiers?: AmazonFullApiSchemaDirectFulfillmentItemIdentifiers;
};

export type AmazonFullApiSchemaSupportedDocumentSpecificationList = ReadonlyArray<AmazonFullApiSchemaSupportedDocumentSpecification>;

export type AmazonFullApiSchemaAvailableValueAddedServiceGroupList = ReadonlyArray<AmazonFullApiSchemaAvailableValueAddedServiceGroup>;

export type AmazonFullApiSchemaRateItemList = ReadonlyArray<AmazonFullApiSchemaRateItem2>;

export type AmazonFullApiSchemaPaymentType = "PAY_THROUGH_AMAZON" | "PAY_DIRECT_TO_CARRIER";

export type AmazonFullApiSchemaIneligibilityReason = {
  code: AmazonFullApiSchemaIneligibilityReasonCode;
  message: string;
};

export type AmazonFullApiSchemaLabelAttribute = "PACKAGE_CLIENT_REFERENCE_ID" | "SELLER_DISPLAY_NAME" | "COLLECT_ON_DELIVERY_AMOUNT";

export type AmazonFullApiSchemaExcludedBenefit = {
  benefit: string;
  reasonCodes?: AmazonFullApiSchemaExcludedBenefitReasonCodes;
};

export type AmazonFullApiSchemaDetailCodes = "BusinessClosed" | "CustomerUnavailable" | "PaymentNotReady" | "OtpNotAvailable" | "DeliveryAttempted" | "UnableToAccess" | "UnableToContactRecipient" | "DeliveredToBehindWheelieBin" | "DeliveredToPorch" | "DeliveredToGarage" | "DeliveredToGarden" | "DeliveredToGreenhouse" | "DeliveredToMailSlot" | "DeliveredToMailRoom" | "DeliveredToNeighbor" | "DeliveredToRearDoor" | "DeliveredToReceptionist" | "DeliveredToShed" | "DeliveredWithOTP" | "Signed" | "Damaged" | "IncorrectItems" | "NotRequired" | "Rejected" | "RejectedByRecipientWithVerification" | "CancelledByRecipient" | "AddressNotFound" | "HazmatShipment" | "Undeliverable" | "ArrivedAtLocalFacility";

export type AmazonFullApiSchemaPackageDocument = {
  type: AmazonFullApiSchemaDocumentType;
  format: AmazonFullApiSchemaDocumentFormat;
  contents: AmazonFullApiSchemaContents;
};

export type AmazonFullApiSchemaLinkableAccountType = {
  accountType?: AmazonFullApiSchemaAccountType;
  carrierAccountInputs?: AmazonFullApiSchemaCarrierAccountInputsList;
};

export type AmazonFullApiSchemaUnmanifestedShipmentLocation = {
  address?: AmazonFullApiSchemaAddress6;
  lastManifestDate?: string;
};

export type AmazonFullApiSchemaAccessPoint = {
  accessPointId?: AmazonFullApiSchemaAccessPointId;
  name?: string;
  timezone?: string;
  type?: AmazonFullApiSchemaAccessPointType;
  accessibilityAttributes?: AmazonFullApiSchemaAccessibilityAttributes;
  address?: AmazonFullApiSchemaAddress6;
  exceptionOperatingHours?: ReadonlyArray<AmazonFullApiSchemaExceptionOperatingHours>;
  assistanceType?: "STAFF_ASSISTED" | "SELF_ASSISTED";
  score?: string;
  standardOperatingHours?: AmazonFullApiSchemaDayOfWeekTimeMap;
};

export type AmazonFullApiSchemaEmailAddress2 = string;

export type AmazonFullApiSchemaThroughputCap = {
  value?: AmazonFullApiSchemaNonNegativeInteger;
  timeUnit?: AmazonFullApiSchemaTimeUnit;
};

export type AmazonFullApiSchemaThroughputUnit = "Order";

export type AmazonFullApiSchemaOperatingHours = ReadonlyArray<AmazonFullApiSchemaOperatingHour>;

export type AmazonFullApiSchemaNonNegativeInteger = number;

export type AmazonFullApiSchemaTimeUnit = "Hours" | "Minutes" | "Days";

export type AmazonFullApiSchemaAddressWithContact = {
  contactDetails?: AmazonFullApiSchemaContactDetails;
  address?: AmazonFullApiSchemaAddress7;
};

export type AmazonFullApiSchemaInStorePickupConfiguration = {
  isSupported?: boolean;
  parkingConfiguration?: AmazonFullApiSchemaParkingConfiguration;
};

export type AmazonFullApiSchemaCurbsidePickupConfiguration = {
  isSupported?: boolean;
  operationalConfiguration?: AmazonFullApiSchemaOperationalConfiguration;
  parkingWithAddressConfiguration?: AmazonFullApiSchemaParkingWithAddressConfiguration;
};

export type AmazonFullApiSchemaShipmentDates2 = {
  requiredShipDate: string;
  promisedDeliveryDate?: string;
};

export type AmazonFullApiSchemaTaxDetails3 = {
  taxRate?: AmazonFullApiSchemaDecimal13;
  taxAmount: AmazonFullApiSchemaMoney11;
  taxableAmount?: AmazonFullApiSchemaMoney11;
  type?: "CONSUMPTION" | "GST" | "MwSt." | "PST" | "TOTAL" | "TVA" | "VAT";
};

export type AmazonFullApiSchemaScheduledDeliveryShipment2 = {
  scheduledDeliveryServiceType?: string;
  earliestNominatedDeliveryDate?: string;
  latestNominatedDeliveryDate?: string;
};

export type AmazonFullApiSchemaGiftDetails2 = {
  giftMessage?: string;
  giftWrapId?: string;
};

export type AmazonFullApiSchemaMoney11 = {
  currencyCode?: string;
  amount?: AmazonFullApiSchemaDecimal13;
};

export type AmazonFullApiSchemaTaxDetails4 = {
  taxRate?: AmazonFullApiSchemaDecimal9;
  taxAmount: AmazonFullApiSchemaMoney8;
  taxableAmount?: AmazonFullApiSchemaMoney8;
  type?: "CONSUMPTION" | "GST" | "MwSt." | "PST" | "TOTAL" | "TVA" | "VAT";
};

export type AmazonFullApiSchemaDecimal9 = string;

export type AmazonFullApiSchemaTestOrder = {
  orderId: string;
};

export type AmazonFullApiSchemaDecimal10 = string;

export type AmazonFullApiSchemaTotalWeight = {
  unitOfMeasure: "POUNDS" | "OUNCES" | "GRAMS" | "KILOGRAMS";
  amount: AmazonFullApiSchemaDecimal6;
};

export type AmazonFullApiSchemaDecimal11 = string;

export type AmazonFullApiSchemaOrderItemStatus = {
  itemSequenceNumber: string;
  buyerProductIdentifier?: string;
  vendorProductIdentifier?: string;
  netCost?: AmazonFullApiSchemaMoney9;
  listPrice?: AmazonFullApiSchemaMoney9;
  orderedQuantity?: {
  orderedQuantity?: AmazonFullApiSchemaItemQuantity8;
  orderedQuantityDetails?: ReadonlyArray<AmazonFullApiSchemaOrderedQuantityDetails>;
};
  acknowledgementStatus?: {
  confirmationStatus?: "ACCEPTED" | "PARTIALLY_ACCEPTED" | "REJECTED" | "UNCONFIRMED";
  acceptedQuantity?: AmazonFullApiSchemaItemQuantity8;
  rejectedQuantity?: AmazonFullApiSchemaItemQuantity8;
  acknowledgementStatusDetails?: ReadonlyArray<AmazonFullApiSchemaAcknowledgementStatusDetails>;
};
  receivingStatus?: {
  receiveStatus?: "NOT_RECEIVED" | "PARTIALLY_RECEIVED" | "RECEIVED";
  receivedQuantity?: AmazonFullApiSchemaItemQuantity8;
  lastReceiveDate?: string;
};
};

export type AmazonFullApiSchemaDecimal12 = string;

export type AmazonFullApiSchemaStop = {
  functionCode: "PortOfDischarge" | "FreightPayableAt" | "PortOfLoading";
  locationIdentification?: AmazonFullApiSchemaLocation3;
  arrivalTime?: string;
  departureTime?: string;
};

export type AmazonFullApiSchemaTotalWeight2 = {
  unitOfMeasure: "POUNDS" | "OUNCES" | "GRAMS" | "KILOGRAMS";
  amount: AmazonFullApiSchemaDecimal12;
};

export type AmazonFullApiSchemaRegulationReferences = {
  dueDiligenceReference?: string;
  dueDiligenceVerification?: string;
  dueDiligenceInformation?: string;
  dueDiligenceExemptionCode?: string;
};

export type AmazonFullApiSchemaExpiry = {
  manufacturerDate?: string;
  expiryDate?: string;
  expiryAfterDuration?: AmazonFullApiSchemaDuration2;
};

export type AmazonFullApiSchemaMoney12 = {
  currencyCode: string;
  amount: AmazonFullApiSchemaDecimal12;
};

export type AmazonFullApiSchemaContainerSequenceNumbers = {
  containerSequenceNumber?: string;
};

export type AmazonFullApiSchemaPackageItemDetails = {
  purchaseOrderNumber?: string;
  lotNumber?: string;
  expiry?: AmazonFullApiSchemaExpiry;
};

export type AmazonFullApiSchemaVendorDetails = {
  sellingParty?: AmazonFullApiSchemaPartyIdentification10;
  vendorShipmentIdentifier?: string;
};

export type AmazonFullApiSchemaDimensionUnitOfMeasurement = "INCHES" | "CENTIMETERS";

export type AmazonFullApiSchemaVolumeUnitOfMeasurement = "CU_IN" | "CBM" | "CC";

export type AmazonFullApiSchemaWeightUnitOfMeasurement = "POUNDS" | "KILOGRAMS";

export type AmazonFullApiSchemaImageComponent = {
  uploadDestinationId: string;
  imageCropSpecification: AmazonFullApiSchemaImageCropSpecification;
  altText: string;
};

export type AmazonFullApiSchemaStandardComparisonProductBlock = {
  position: number;
  image?: AmazonFullApiSchemaImageComponent;
  title?: string;
  asin?: AmazonFullApiSchemaAsin;
  highlight?: boolean;
  metrics?: ReadonlyArray<AmazonFullApiSchemaPlainTextItem>;
};

export type AmazonFullApiSchemaPlainTextItem = {
  position: number;
  value: string;
};

export type AmazonFullApiSchemaTextComponent = {
  value: string;
  decoratorSet?: AmazonFullApiSchemaDecoratorSet;
};

export type AmazonFullApiSchemaStandardImageTextBlock = {
  image?: AmazonFullApiSchemaImageComponent;
  headline?: AmazonFullApiSchemaTextComponent;
  body?: AmazonFullApiSchemaParagraphComponent;
};

export type AmazonFullApiSchemaStandardImageCaptionBlock = {
  image?: AmazonFullApiSchemaImageComponent;
  caption?: AmazonFullApiSchemaTextComponent;
};

export type AmazonFullApiSchemaStandardTextBlock = {
  headline?: AmazonFullApiSchemaTextComponent;
  body?: AmazonFullApiSchemaParagraphComponent;
};

export type AmazonFullApiSchemaStandardTextListBlock = {
  textList: ReadonlyArray<AmazonFullApiSchemaTextItem>;
};

export type AmazonFullApiSchemaColorType = "DARK" | "LIGHT";

export type AmazonFullApiSchemaStandardImageTextCaptionBlock = {
  block?: AmazonFullApiSchemaStandardImageTextBlock;
  caption?: AmazonFullApiSchemaTextComponent;
};

export type AmazonFullApiSchemaParagraphComponent = {
  textList: ReadonlyArray<AmazonFullApiSchemaTextComponent>;
};

export type AmazonFullApiSchemaStandardHeaderTextListBlock = {
  headline?: AmazonFullApiSchemaTextComponent;
  block?: AmazonFullApiSchemaStandardTextListBlock;
};

export type AmazonFullApiSchemaPositionType = "LEFT" | "RIGHT";

export type AmazonFullApiSchemaStandardTextPairBlock = {
  label?: AmazonFullApiSchemaTextComponent;
  description?: AmazonFullApiSchemaTextComponent;
};

export type AmazonFullApiSchemaRecommendedPackageLineItem = {
  lineItemId: string;
};

export type AmazonFullApiSchemaReservedQuantity = {
  totalReservedQuantity?: number;
  pendingCustomerOrderQuantity?: number;
  pendingTransshipmentQuantity?: number;
  fcProcessingQuantity?: number;
};

export type AmazonFullApiSchemaResearchingQuantity = {
  totalResearchingQuantity?: number;
  researchingQuantityBreakdown?: ReadonlyArray<AmazonFullApiSchemaResearchingQuantityEntry>;
};

export type AmazonFullApiSchemaUnfulfillableQuantity = {
  totalUnfulfillableQuantity?: number;
  customerDamagedQuantity?: number;
  warehouseDamagedQuantity?: number;
  distributorDamagedQuantity?: number;
  carrierDamagedQuantity?: number;
  defectiveQuantity?: number;
  expiredQuantity?: number;
};

export type AmazonFullApiSchemaBigDecimal2 = number;

export type AmazonFullApiSchemaChargeComponentList = ReadonlyArray<AmazonFullApiSchemaChargeComponent2>;

export type AmazonFullApiSchemaFeeComponentList = ReadonlyArray<AmazonFullApiSchemaFeeComponent>;

export type AmazonFullApiSchemaDirectPaymentList = ReadonlyArray<AmazonFullApiSchemaDirectPayment>;

export type AmazonFullApiSchemaShipmentItemList = ReadonlyArray<AmazonFullApiSchemaShipmentItem2>;

export type AmazonFullApiSchemaChargeComponent2 = {
  ChargeType?: string;
  ChargeAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaTaxWithheldComponentList = ReadonlyArray<AmazonFullApiSchemaTaxWithheldComponent>;

export type AmazonFullApiSchemaDebtRecoveryItemList = ReadonlyArray<AmazonFullApiSchemaDebtRecoveryItem>;

export type AmazonFullApiSchemaChargeInstrumentList = ReadonlyArray<AmazonFullApiSchemaChargeInstrument>;

export type AmazonFullApiSchemaAdjustmentItemList2 = ReadonlyArray<AmazonFullApiSchemaAdjustmentItem>;

export type AmazonFullApiSchemaSAFETReimbursementItemList = ReadonlyArray<AmazonFullApiSchemaSAFETReimbursementItem>;

export type AmazonFullApiSchemaFeeComponent = {
  FeeType?: string;
  FeeAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaRemovalShipmentItemList = ReadonlyArray<AmazonFullApiSchemaRemovalShipmentItem>;

export type AmazonFullApiSchemaRemovalShipmentItemAdjustment = {
  RemovalShipmentItemId?: string;
  TaxCollectionModel?: string;
  FulfillmentNetworkSKU?: string;
  AdjustedQuantity?: number;
  RevenueAdjustment?: AmazonFullApiSchemaCurrency5;
  TaxAmountAdjustment?: AmazonFullApiSchemaCurrency5;
  TaxWithheldAdjustment?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaTaxWithholdingPeriod = {
  StartDate?: AmazonFullApiSchemaDate;
  EndDate?: AmazonFullApiSchemaDate;
};

export type AmazonFullApiSchemaChargeRefundTransactions = ReadonlyArray<AmazonFullApiSchemaChargeRefundTransaction>;

export type AmazonFullApiSchemaRelatedIdentifier = {
  relatedIdentifierName?: "ORDER_ID" | "SHIPMENT_ID" | "FINANCIAL_EVENT_GROUP_ID" | "REFUND_ID" | "INVOICE_ID" | "DISBURSEMENT_ID" | "TRANSFER_ID" | "DEFERRED_TRANSACTION_ID" | "RELEASE_TRANSACTION_ID" | "SETTLEMENT_ID";
  relatedIdentifierValue?: string;
};

export type AmazonFullApiSchemaBigDecimal3 = number;

export type AmazonFullApiSchemaItem11 = {
  description?: string;
  relatedIdentifiers?: AmazonFullApiSchemaItemRelatedIdentifiers;
  totalAmount?: AmazonFullApiSchemaCurrency6;
  breakdowns?: ReadonlyArray<AmazonFullApiSchemaBreakdown>;
  contexts?: AmazonFullApiSchemaContexts;
};

export type AmazonFullApiSchemaContext = ({
  contextType: string;
} & AmazonFullApiSchemaAmazonPayContext & AmazonFullApiSchemaProductContext & AmazonFullApiSchemaPaymentsContext & AmazonFullApiSchemaDeferredContext & AmazonFullApiSchemaBusinessContext & AmazonFullApiSchemaTimeRangeContext);

export type AmazonFullApiSchemaPrepInstruction3 = "Polybagging" | "BubbleWrapping" | "Taping" | "BlackShrinkWrapping" | "Labeling" | "HangGarment" | "SetCreation" | "Boxing" | "RemoveFromHanger" | "Debundle" | "SuffocationStickering" | "CapSealing" | "SetStickering" | "BlankStickering" | "ShipsInProductPackaging" | "NoPrep";

export type AmazonFullApiSchemaAmazonPrepFeesDetails = {
  PrepInstruction?: AmazonFullApiSchemaPrepInstruction3;
  FeePerUnit?: AmazonFullApiSchemaAmount3;
};

export type AmazonFullApiSchemaAmount3 = {
  CurrencyCode: AmazonFullApiSchemaCurrencyCode;
  Value: AmazonFullApiSchemaBigDecimalType;
};

export type AmazonFullApiSchemaPrepDetails2 = {
  PrepInstruction: AmazonFullApiSchemaPrepInstruction3;
  PrepOwner: AmazonFullApiSchemaPrepOwner3;
};

export type AmazonFullApiSchemaDeliveryWindowList = ReadonlyArray<AmazonFullApiSchemaDeliveryWindow>;

export type AmazonFullApiSchemaFee2 = {
  name: "FBAPerUnitFulfillmentFee" | "FBAPerOrderFulfillmentFee" | "FBATransportationFee" | "FBAFulfillmentCODFee";
  amount: AmazonFullApiSchemaMoney;
};

export type AmazonFullApiSchemaFulfillmentPreviewShipment = {
  earliestShipDate?: AmazonFullApiSchemaTimestamp;
  latestShipDate?: AmazonFullApiSchemaTimestamp;
  earliestArrivalDate?: AmazonFullApiSchemaTimestamp;
  latestArrivalDate?: AmazonFullApiSchemaTimestamp;
  shippingNotes?: ReadonlyArray<string>;
  fulfillmentPreviewItems: AmazonFullApiSchemaFulfillmentPreviewItemList;
};

export type AmazonFullApiSchemaUnfulfillablePreviewItem = {
  sellerSku: string;
  quantity: AmazonFullApiSchemaQuantity;
  sellerFulfillmentOrderItemId: string;
  itemUnfulfillableReasons?: AmazonFullApiSchemaStringList;
};

export type AmazonFullApiSchemaDeliveryMessage = {
  text?: string;
  locale?: string;
};

export type AmazonFullApiSchemaInvalidItemReasonCode = "InvalidValues" | "DuplicateRequest" | "NoCompletedShipItems" | "NoReturnableQuantity";

export type AmazonFullApiSchemaFulfillmentShipmentItem = {
  sellerSku: string;
  sellerFulfillmentOrderItemId: string;
  quantity: AmazonFullApiSchemaQuantity;
  packageNumber?: number;
  serialNumber?: string;
  manufacturerLotCodes?: AmazonFullApiSchemaStringList;
};

export type AmazonFullApiSchemaFulfillmentShipmentPackage = {
  packageNumber: number;
  carrierCode: string;
  trackingNumber?: string;
  amazonFulfillmentTrackingNumber?: string;
  estimatedArrivalDate?: AmazonFullApiSchemaTimestamp;
  lockerDetails?: AmazonFullApiSchemaLockerDetails;
  deliveryInformation?: AmazonFullApiSchemaDeliveryInformation;
};

export type AmazonFullApiSchemaTransparencyCode = string;

export type AmazonFullApiSchemaRateItemID = "FBM_SHIP_PLUS_CREDIT";

export type AmazonFullApiSchemaRateItemType = "INCLUDED";

export type AmazonFullApiSchemaAvailableCarrierWillPickUpOption = {
  CarrierWillPickUpOption: AmazonFullApiSchemaCarrierWillPickUpOption;
  Charge: AmazonFullApiSchemaCurrencyAmount;
};

export type AmazonFullApiSchemaAvailableDeliveryExperienceOption = {
  DeliveryExperienceOption: AmazonFullApiSchemaDeliveryExperienceOption;
  Charge: AmazonFullApiSchemaCurrencyAmount;
};

export type AmazonFullApiSchemaExcludedBenefit2 = {
  Benefit?: string;
  ReasonCodes?: AmazonFullApiSchemaExcludedBenefitReasonCodes2;
};

export type AmazonFullApiSchemaConstraints = ReadonlyArray<AmazonFullApiSchemaConstraint>;

export type AmazonFullApiSchemaInputTargetType = "SHIPMENT_LEVEL" | "ITEM_LEVEL";

export type AmazonFullApiSchemaRestrictedSetValues = ReadonlyArray<string>;

export type AmazonFullApiSchemaAggregationTimePeriod = "FiveMinutes" | "TenMinutes";

export type AmazonFullApiSchemaOrderChangeTypeEnum = "BuyerRequestedChange" | "DeliveryTipChange" | "OrderStatusChange";

export type AmazonFullApiSchemaOpenInterval = {
  StartTime?: AmazonFullApiSchemaOpenTimeInterval;
  EndTime?: AmazonFullApiSchemaOpenTimeInterval;
};

export type AmazonFullApiSchemaAssociationType = "VALUE_ADD_SERVICE";

export type AmazonFullApiSchemaSubstitutionOptionList = ReadonlyArray<AmazonFullApiSchemaSubstitutionOption>;

export type AmazonFullApiSchemaConstraintType = "MANDATORY";

export type AmazonFullApiSchemaTransparencyCode2 = string;

export type AmazonFullApiSchemaBusinessHour = {
  dayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
  timeWindows?: ReadonlyArray<AmazonFullApiSchemaTimeWindow3>;
};

export type AmazonFullApiSchemaExceptionDate = {
  exceptionDate?: string;
  exceptionDateType?: "CLOSED" | "OPEN";
  timeWindows?: ReadonlyArray<AmazonFullApiSchemaTimeWindow3>;
};

export type AmazonFullApiSchemaItemProceedsDetailedBreakdown = {
  subtype?: string;
  value?: AmazonFullApiSchemaMoney6;
};

export type AmazonFullApiSchemaPointsGranted = {
  pointsNumber?: number;
  pointsMonetaryValue?: AmazonFullApiSchemaMoney6;
};

export type AmazonFullApiSchemaItemSubstitutionPreference = {
  substitutionType: "CUSTOMER_PREFERENCE" | "AMAZON_RECOMMENDED" | "DO_NOT_SUBSTITUTE";
  substitutionOptions?: ReadonlyArray<AmazonFullApiSchemaItemSubstitutionOption>;
};

export type AmazonFullApiSchemaGiftOption = {
  giftMessage?: string;
  giftWrapLevel?: string;
};

export type AmazonFullApiSchemaSerialNumberRequirement = {
  requirementType?: string;
};

export type AmazonFullApiSchemaItemShippingConstraints = {
  palletDelivery?: AmazonFullApiSchemaConstraintType2;
  cashOnDelivery?: AmazonFullApiSchemaConstraintType2;
  signatureConfirmation?: AmazonFullApiSchemaConstraintType2;
  recipientIdentityVerification?: AmazonFullApiSchemaConstraintType2;
  recipientAgeVerification?: AmazonFullApiSchemaConstraintType2;
};

export type AmazonFullApiSchemaItemInternationalShipping = {
  iossNumber?: string;
};

export type AmazonFullApiSchemaIncludedFeeDetailList = ReadonlyArray<AmazonFullApiSchemaIncludedFeeDetail>;

export type AmazonFullApiSchemaASINIdentifier = {
  MarketplaceId: string;
  ASIN: string;
};

export type AmazonFullApiSchemaSellerSKUIdentifier = {
  MarketplaceId: string;
  SellerId: string;
  SellerSKU: string;
};

export type AmazonFullApiSchemaCompetitivePriceList = ReadonlyArray<AmazonFullApiSchemaCompetitivePriceType>;

export type AmazonFullApiSchemaNumberOfOfferListingsList = ReadonlyArray<AmazonFullApiSchemaOfferListingCountType>;

export type AmazonFullApiSchemaOfferType = {
  offerType?: AmazonFullApiSchemaOfferCustomerType;
  BuyingPrice: AmazonFullApiSchemaPriceType;
  RegularPrice: AmazonFullApiSchemaMoneyType2;
  businessPrice?: AmazonFullApiSchemaMoneyType2;
  quantityDiscountPrices?: ReadonlyArray<AmazonFullApiSchemaQuantityDiscountPriceType>;
  FulfillmentChannel: string;
  ItemCondition: string;
  ItemSubCondition: string;
  SellerSKU: string;
};

export type AmazonFullApiSchemaFulfillmentChannelType2 = "Amazon" | "Merchant";

export type AmazonFullApiSchemaQuantityDiscountType = "QUANTITY_DISCOUNT";

export type AmazonFullApiSchemaSegmentDetails = {
  glanceViewWeightPercentage?: number;
  sampleLocation?: AmazonFullApiSchemaSampleLocation;
};

export type AmazonFullApiSchemaFulfillmentType = "AFN" | "MFN";

export type AmazonFullApiSchemaFeaturedOfferExpectedPriceResult = {
  featuredOfferExpectedPrice?: AmazonFullApiSchemaFeaturedOfferExpectedPrice;
  resultStatus: string;
  competingFeaturedOffer?: AmazonFullApiSchemaFeaturedOffer;
  currentFeaturedOffer?: AmazonFullApiSchemaFeaturedOffer;
};

export type AmazonFullApiSchemaError44 = {
  code: string;
  message: string;
  details?: string;
};

export type AmazonFullApiSchemaSegmentedFeaturedOffer = (AmazonFullApiSchemaOffer & {
  featuredOfferSegments: ReadonlyArray<AmazonFullApiSchemaFeaturedOfferSegment>;
});

export type AmazonFullApiSchemaOffer = {
  sellerId: string;
  condition: AmazonFullApiSchemaCondition;
  subCondition?: "New" | "Mint" | "VeryGood" | "Good" | "Acceptable" | "Poor" | "Club" | "OEM" | "Warranty" | "RefurbishedWarranty" | "Refurbished" | "OpenBox" | "Other";
  fulfillmentType: AmazonFullApiSchemaFulfillmentType;
  listingPrice: AmazonFullApiSchemaMoneyType3;
  shippingOptions?: ReadonlyArray<AmazonFullApiSchemaShippingOption>;
  points?: AmazonFullApiSchemaPoints4;
  primeDetails?: AmazonFullApiSchemaPrimeDetails;
};

export type AmazonFullApiSchemaMoneyType3 = {
  currencyCode?: string;
  amount?: number;
};

export type AmazonFullApiSchemaItem12 = {
  asin: AmazonFullApiSchemaAsin2;
};

export type AmazonFullApiSchemaLiquidVolume2 = {
  unit: "ML" | "L" | "FL_OZ" | "GAL" | "PT" | "QT" | "C";
  value: number;
};

export type AmazonFullApiSchemaDangerousGoodsDetails2 = {
  unitedNationsRegulatoryId?: string;
  transportationRegulatoryClass?: string;
  packingGroup?: "I" | "II" | "III";
  packingInstruction?: "PI965_SECTION_IA" | "PI965_SECTION_IB" | "PI965_SECTION_II" | "PI966_SECTION_I" | "PI966_SECTION_II" | "PI967_SECTION_I" | "PI967_SECTION_II" | "PI968_SECTION_IA" | "PI968_SECTION_IB" | "PI969_SECTION_I" | "PI969_SECTION_II" | "PI970_SECTION_I" | "PI970_SECTION_II";
};

export type AmazonFullApiSchemaInvoiceDetails = {
  invoiceNumber?: string;
  invoiceDate?: string;
};

export type AmazonFullApiSchemaDirectFulfillmentItemIdentifiers = {
  lineItemID: string;
  pieceNumber?: string;
};

export type AmazonFullApiSchemaSupportedDocumentSpecification = {
  format: AmazonFullApiSchemaDocumentFormat;
  size: AmazonFullApiSchemaDocumentSize;
  printOptions: AmazonFullApiSchemaPrintOptionList;
};

export type AmazonFullApiSchemaAvailableValueAddedServiceGroup = {
  groupId: string;
  groupDescription: string;
  isRequired: boolean;
  valueAddedServices?: ReadonlyArray<AmazonFullApiSchemaValueAddedService>;
};

export type AmazonFullApiSchemaRateItem2 = {
  rateItemID?: AmazonFullApiSchemaRateItemID2;
  rateItemType?: AmazonFullApiSchemaRateItemType2;
  rateItemCharge?: AmazonFullApiSchemaCurrency2;
  rateItemNameLocalization?: string;
};

export type AmazonFullApiSchemaIneligibilityReasonCode = "NO_COVERAGE" | "PICKUP_SLOT_RESTRICTION" | "UNSUPPORTED_VAS" | "VAS_COMBINATION_RESTRICTION" | "SIZE_RESTRICTIONS" | "WEIGHT_RESTRICTIONS" | "LATE_DELIVERY" | "PROGRAM_CONSTRAINTS" | "TERMS_AND_CONDITIONS_NOT_ACCEPTED" | "UNKNOWN";

export type AmazonFullApiSchemaExcludedBenefitReasonCodes = ReadonlyArray<string>;

export type AmazonFullApiSchemaContents = string;

export type AmazonFullApiSchemaAccountType = "SHIPPER_ACCOUNT" | "SHIPPER_ACCOUNT_WITH_INVOICE" | "AMAZON_ACCOUNT";

export type AmazonFullApiSchemaCarrierAccountInputsList = ReadonlyArray<AmazonFullApiSchemaCarrierAccountInput>;

export type AmazonFullApiSchemaAccessPointType = "HELIX" | "CAMPUS_LOCKER" | "OMNI_LOCKER" | "ODIN_LOCKER" | "DOBBY_LOCKER" | "CORE_LOCKER" | "3P" | "CAMPUS_ROOM";

export type AmazonFullApiSchemaAccessibilityAttributes = {
  distance?: string;
  driveTime?: number;
};

export type AmazonFullApiSchemaExceptionOperatingHours = {
  dateRange?: AmazonFullApiSchemaDateRange2;
  operatingHours?: AmazonFullApiSchemaOperatingHours2;
};

export type AmazonFullApiSchemaDayOfWeekTimeMap = {
  readonly [key: string]: AmazonFullApiSchemaOperatingHours2 | undefined;
};

export type AmazonFullApiSchemaOperatingHour = {
  startTime?: string;
  endTime?: string;
};

export type AmazonFullApiSchemaParkingConfiguration = {
  parkingCostType?: AmazonFullApiSchemaParkingCostType;
  parkingSpotIdentificationType?: AmazonFullApiSchemaParkingSpotIdentificationType;
  numberOfParkingSpots?: AmazonFullApiSchemaNonNegativeInteger;
};

export type AmazonFullApiSchemaParkingWithAddressConfiguration = (AmazonFullApiSchemaParkingConfiguration & {
  address?: AmazonFullApiSchemaAddress7;
});

export type AmazonFullApiSchemaDecimal13 = string;

export type AmazonFullApiSchemaOrderedQuantityDetails = {
  updatedDate?: string;
  orderedQuantity?: AmazonFullApiSchemaItemQuantity8;
  cancelledQuantity?: AmazonFullApiSchemaItemQuantity8;
};

export type AmazonFullApiSchemaAcknowledgementStatusDetails = {
  acknowledgementDate?: string;
  acceptedQuantity?: AmazonFullApiSchemaItemQuantity8;
  rejectedQuantity?: AmazonFullApiSchemaItemQuantity8;
};

export type AmazonFullApiSchemaLocation3 = {
  type?: string;
  locationCode?: string;
  countryCode?: string;
};

export type AmazonFullApiSchemaDuration2 = {
  durationUnit: "Days" | "Months";
  durationValue: number;
};

export type AmazonFullApiSchemaImageCropSpecification = {
  size: AmazonFullApiSchemaImageDimensions;
  offset?: AmazonFullApiSchemaImageOffsets;
};

export type AmazonFullApiSchemaDecoratorSet = ReadonlyArray<AmazonFullApiSchemaDecorator>;

export type AmazonFullApiSchemaTextItem = {
  position: number;
  text: AmazonFullApiSchemaTextComponent;
};

export type AmazonFullApiSchemaResearchingQuantityEntry = {
  name: "researchingQuantityInShortTerm" | "researchingQuantityInMidTerm" | "researchingQuantityInLongTerm";
  quantity: number;
};

export type AmazonFullApiSchemaDirectPayment = {
  DirectPaymentType?: string;
  DirectPaymentAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaShipmentItem2 = {
  SellerSKU?: string;
  OrderItemId?: string;
  OrderAdjustmentItemId?: string;
  QuantityShipped?: number;
  ItemChargeList?: AmazonFullApiSchemaChargeComponentList;
  ItemChargeAdjustmentList?: AmazonFullApiSchemaChargeComponentList;
  ItemFeeList?: AmazonFullApiSchemaFeeComponentList;
  ItemFeeAdjustmentList?: AmazonFullApiSchemaFeeComponentList;
  ItemTaxWithheldList?: AmazonFullApiSchemaTaxWithheldComponentList;
  PromotionList?: AmazonFullApiSchemaPromotionList;
  PromotionAdjustmentList?: AmazonFullApiSchemaPromotionList;
  CostOfPointsGranted?: AmazonFullApiSchemaCurrency5;
  CostOfPointsReturned?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaTaxWithheldComponent = {
  TaxCollectionModel?: string;
  TaxesWithheld?: AmazonFullApiSchemaChargeComponentList;
};

export type AmazonFullApiSchemaDebtRecoveryItem = {
  RecoveryAmount?: AmazonFullApiSchemaCurrency5;
  OriginalAmount?: AmazonFullApiSchemaCurrency5;
  GroupBeginDate?: AmazonFullApiSchemaDate;
  GroupEndDate?: AmazonFullApiSchemaDate;
};

export type AmazonFullApiSchemaChargeInstrument = {
  Description?: string;
  Tail?: string;
  Amount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaAdjustmentItem = {
  Quantity?: string;
  PerUnitAmount?: AmazonFullApiSchemaCurrency5;
  TotalAmount?: AmazonFullApiSchemaCurrency5;
  SellerSKU?: string;
  FnSKU?: string;
  ProductDescription?: string;
  ASIN?: string;
  TransactionNumber?: string;
};

export type AmazonFullApiSchemaSAFETReimbursementItem = {
  itemChargeList?: AmazonFullApiSchemaChargeComponentList;
  productDescription?: string;
  quantity?: string;
};

export type AmazonFullApiSchemaRemovalShipmentItem = {
  RemovalShipmentItemId?: string;
  TaxCollectionModel?: string;
  FulfillmentNetworkSKU?: string;
  Quantity?: number;
  Revenue?: AmazonFullApiSchemaCurrency5;
  FeeAmount?: AmazonFullApiSchemaCurrency5;
  TaxAmount?: AmazonFullApiSchemaCurrency5;
  TaxWithheld?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaChargeRefundTransaction = {
  ChargeAmount?: AmazonFullApiSchemaCurrency5;
  ChargeType?: string;
};

export type AmazonFullApiSchemaItemRelatedIdentifiers = ReadonlyArray<AmazonFullApiSchemaItemRelatedIdentifier>;

export type AmazonFullApiSchemaAmazonPayContext = {
  storeName?: string;
  orderType?: string;
  channel?: string;
};

export type AmazonFullApiSchemaProductContext = {
  asin?: string;
  sku?: string;
  quantityShipped?: number;
  fulfillmentNetwork?: string;
};

export type AmazonFullApiSchemaPaymentsContext = {
  paymentType?: string;
  paymentMethod?: string;
  paymentReference?: string;
  paymentDate?: AmazonFullApiSchemaDate2;
};

export type AmazonFullApiSchemaDeferredContext = {
  deferralReason?: string;
  maturityDate?: AmazonFullApiSchemaDate2;
};

export type AmazonFullApiSchemaBusinessContext = {
  storeName?: "AMAZON_HAUL";
};

export type AmazonFullApiSchemaTimeRangeContext = {
  startTime?: AmazonFullApiSchemaDate2;
  endTime?: AmazonFullApiSchemaDate2;
};

export type AmazonFullApiSchemaCurrencyCode = "USD" | "GBP";

export type AmazonFullApiSchemaBigDecimalType = number;

export type AmazonFullApiSchemaPrepOwner3 = "AMAZON" | "SELLER";

export type AmazonFullApiSchemaFulfillmentPreviewItemList = ReadonlyArray<AmazonFullApiSchemaFulfillmentPreviewItem>;

export type AmazonFullApiSchemaLockerDetails = {
  lockerNumber?: string;
  lockerAccessCode?: string;
};

export type AmazonFullApiSchemaDeliveryInformation = {
  deliveryDocumentList?: AmazonFullApiSchemaDeliveryDocumentList;
  dropOffLocation?: AmazonFullApiSchemaDropOffLocation;
};

export type AmazonFullApiSchemaExcludedBenefitReasonCodes2 = ReadonlyArray<string>;

export type AmazonFullApiSchemaConstraint = {
  ValidationRegEx?: string;
  ValidationString: string;
};

export type AmazonFullApiSchemaOpenTimeInterval = {
  Hour?: number;
  Minute?: number;
};

export type AmazonFullApiSchemaSubstitutionOption = {
  ASIN?: string;
  QuantityOrdered?: number;
  SellerSKU?: string;
  Title?: string;
  Measurement?: AmazonFullApiSchemaMeasurement2;
};

export type AmazonFullApiSchemaTimeWindow3 = {
  startTime?: AmazonFullApiSchemaHourMinute;
  endTime?: AmazonFullApiSchemaHourMinute;
};

export type AmazonFullApiSchemaItemSubstitutionOption = {
  asin?: string;
  quantityOrdered?: number;
  sellerSku?: string;
  title?: string;
  measurement?: AmazonFullApiSchemaMeasurement;
};

export type AmazonFullApiSchemaConstraintType2 = "MANDATORY";

export type AmazonFullApiSchemaIncludedFeeDetail = {
  FeeType: string;
  FeeAmount: AmazonFullApiSchemaMoneyType;
  FeePromotion?: AmazonFullApiSchemaMoneyType;
  TaxAmount?: AmazonFullApiSchemaMoneyType;
  FinalFee: AmazonFullApiSchemaMoneyType;
};

export type AmazonFullApiSchemaCompetitivePriceType = {
  CompetitivePriceId: string;
  Price: AmazonFullApiSchemaPriceType;
  condition?: string;
  subcondition?: string;
  offerType?: AmazonFullApiSchemaOfferCustomerType;
  quantityTier?: number;
  quantityDiscountType?: AmazonFullApiSchemaQuantityDiscountType;
  sellerId?: string;
  belongsToRequester?: boolean;
};

export type AmazonFullApiSchemaOfferListingCountType = {
  Count: number;
  condition: string;
};

export type AmazonFullApiSchemaPriceType = {
  LandedPrice?: AmazonFullApiSchemaMoneyType2;
  ListingPrice: AmazonFullApiSchemaMoneyType2;
  Shipping?: AmazonFullApiSchemaMoneyType2;
  Points?: AmazonFullApiSchemaPoints3;
};

export type AmazonFullApiSchemaSampleLocation = {
  postalCode?: AmazonFullApiSchemaPostalCode4;
};

export type AmazonFullApiSchemaFeaturedOfferExpectedPrice = {
  listingPrice: AmazonFullApiSchemaMoneyType3;
  points?: AmazonFullApiSchemaPoints4;
};

export type AmazonFullApiSchemaFeaturedOffer = {
  offerIdentifier: AmazonFullApiSchemaOfferIdentifier;
  condition?: AmazonFullApiSchemaCondition;
  price?: AmazonFullApiSchemaPrice2;
};

export type AmazonFullApiSchemaFeaturedOfferSegment = {
  customerMembership: "PRIME" | "NON_PRIME" | "DEFAULT";
  segmentDetails: AmazonFullApiSchemaSegmentDetails;
};

export type AmazonFullApiSchemaShippingOption = {
  shippingOptionType: "DEFAULT";
  price: AmazonFullApiSchemaMoneyType3;
};

export type AmazonFullApiSchemaPoints4 = {
  pointsNumber?: number;
  pointsMonetaryValue?: AmazonFullApiSchemaMoneyType3;
};

export type AmazonFullApiSchemaPrimeDetails = {
  eligibility: "NATIONAL" | "REGIONAL" | "NONE";
};

export type AmazonFullApiSchemaPrintOptionList = ReadonlyArray<AmazonFullApiSchemaPrintOption>;

export type AmazonFullApiSchemaValueAddedService = {
  id: string;
  name: string;
  cost: AmazonFullApiSchemaCurrency2;
};

export type AmazonFullApiSchemaRateItemID2 = "BASE_RATE" | "TRANSACTION_FEE" | "ADULT_SIGNATURE_CONFIRMATION" | "SIGNATURE_CONFIRMATION" | "NO_CONFIRMATION" | "WAIVE_SIGNATURE" | "IMPLIED_LIABILITY" | "HIDDEN_POSTAGE" | "DECLARED_VALUE" | "SUNDAY_HOLIDAY_DELIVERY" | "DELIVERY_CONFIRMATION" | "IMPORT_DUTY_CHARGE" | "VAT" | "NO_SATURDAY_DELIVERY" | "INSURANCE" | "COD" | "FUEL_SURCHARGE" | "INSPECTION_CHARGE" | "DELIVERY_AREA_SURCHARGE" | "WAYBILL_CHARGE" | "AMAZON_SPONSORED_DISCOUNT" | "INTEGRATOR_SPONSORED_DISCOUNT" | "OVERSIZE_SURCHARGE" | "CONGESTION_CHARGE" | "RESIDENTIAL_SURCHARGE" | "ADDITIONAL_SURCHARGE" | "SURCHARGE" | "REBATE" | "HIGH_CUBE_SURCHARGE" | "HIGH_LENGTH_SURCHARGE" | "HIGH_WIDTH_SURCHARGE" | "DEMAND_SURCHARGE" | "NONSTANDARD_FEE";

export type AmazonFullApiSchemaRateItemType2 = "MANDATORY" | "OPTIONAL" | "INCLUDED";

export type AmazonFullApiSchemaCarrierAccountInput = {
  descriptionLocalizationKey?: string;
  name?: string;
  groupName?: string;
  inputType?: AmazonFullApiSchemaInputType;
  isMandatory?: boolean;
  isConfidential?: boolean;
  isHidden?: boolean;
  validationMetadata?: AmazonFullApiSchemaValidationMetadataList;
};

export type AmazonFullApiSchemaOperatingHours2 = {
  closingTime?: AmazonFullApiSchemaTimeOfDay;
  openingTime?: AmazonFullApiSchemaTimeOfDay;
  midDayClosures?: ReadonlyArray<AmazonFullApiSchemaTimeOfDay>;
};

export type AmazonFullApiSchemaParkingCostType = "Free" | "Other";

export type AmazonFullApiSchemaParkingSpotIdentificationType = "Numbered" | "Other";

export type AmazonFullApiSchemaImageDimensions = {
  width: AmazonFullApiSchemaIntegerWithUnits;
  height: AmazonFullApiSchemaIntegerWithUnits;
};

export type AmazonFullApiSchemaImageOffsets = {
  x: AmazonFullApiSchemaIntegerWithUnits;
  y: AmazonFullApiSchemaIntegerWithUnits;
};

export type AmazonFullApiSchemaDecorator = {
  type?: AmazonFullApiSchemaDecoratorType;
  offset?: number;
  length?: number;
  depth?: number;
};

export type AmazonFullApiSchemaPromotionList = ReadonlyArray<AmazonFullApiSchemaPromotion2>;

export type AmazonFullApiSchemaItemRelatedIdentifier = {
  itemRelatedIdentifierName?: "ORDER_ADJUSTMENT_ITEM_ID" | "COUPON_ID" | "REMOVAL_SHIPMENT_ITEM_ID" | "TRANSACTION_ID";
  itemRelatedIdentifierValue?: string;
};

export type AmazonFullApiSchemaFulfillmentPreviewItem = {
  sellerSku: string;
  quantity: AmazonFullApiSchemaQuantity;
  sellerFulfillmentOrderItemId: string;
  estimatedShippingWeight?: AmazonFullApiSchemaWeight10;
  shippingWeightCalculationMethod?: "Package" | "Dimensional";
};

export type AmazonFullApiSchemaDeliveryDocumentList = ReadonlyArray<AmazonFullApiSchemaDeliveryDocument>;

export type AmazonFullApiSchemaHourMinute = {
  hour?: number;
  minute?: number;
};

export type AmazonFullApiSchemaPostalCode4 = {
  countryCode?: string;
  value?: string;
};

export type AmazonFullApiSchemaPrice2 = {
  listingPrice: AmazonFullApiSchemaMoneyType3;
  shippingPrice?: AmazonFullApiSchemaMoneyType3;
  points?: AmazonFullApiSchemaPoints4;
};

export type AmazonFullApiSchemaPrintOption = {
  supportedDPIs?: ReadonlyArray<AmazonFullApiSchemaDpi>;
  supportedPageLayouts: ReadonlyArray<AmazonFullApiSchemaPageLayout>;
  supportedFileJoiningOptions: ReadonlyArray<AmazonFullApiSchemaNeedFileJoining>;
  supportedDocumentDetails: ReadonlyArray<AmazonFullApiSchemaSupportedDocumentDetail>;
};

export type AmazonFullApiSchemaInputType = "TEXTBOX" | "PASSWORD";

export type AmazonFullApiSchemaValidationMetadataList = ReadonlyArray<AmazonFullApiSchemaValidationMetadata>;

export type AmazonFullApiSchemaTimeOfDay = {
  hourOfDay?: number;
  minuteOfHour?: number;
  secondOfMinute?: number;
};

export type AmazonFullApiSchemaIntegerWithUnits = {
  value: number;
  units: string;
};

export type AmazonFullApiSchemaDecoratorType = "LIST_ITEM" | "LIST_ORDERED" | "LIST_UNORDERED" | "STYLE_BOLD" | "STYLE_ITALIC" | "STYLE_LINEBREAK" | "STYLE_PARAGRAPH" | "STYLE_UNDERLINE";

export type AmazonFullApiSchemaPromotion2 = {
  PromotionType?: string;
  PromotionId?: string;
  PromotionAmount?: AmazonFullApiSchemaCurrency5;
};

export type AmazonFullApiSchemaDeliveryDocument = {
  documentType: string;
  url?: string;
};

export type AmazonFullApiSchemaSupportedDocumentDetail = {
  name: AmazonFullApiSchemaDocumentType;
  isMandatory: boolean;
};

export type AmazonFullApiSchemaValidationMetadata = {
  errorMessage?: string;
  validationStrategy?: string;
  value?: string;
};

export interface AmazonFullApiOperationQueryMap {
  "awd_2024-05-09:createInbound": {};
  "awd_2024-05-09:getInbound": {};
  "awd_2024-05-09:updateInbound": {};
  "awd_2024-05-09:cancelInbound": {};
  "awd_2024-05-09:confirmInbound": {};
  "awd_2024-05-09:getInboundShipment": {
  skuQuantities?: "SHOW" | "HIDE";
};
  "awd_2024-05-09:getInboundShipmentLabels": {
  pageType?: "PLAIN_PAPER";
  formatType?: "PDF";
};
  "awd_2024-05-09:getLabelPageTypes": {};
  "awd_2024-05-09:updateInboundShipmentTransportDetails": {};
  "awd_2024-05-09:checkInboundEligibility": {};
  "awd_2024-05-09:listInboundShipments": {
  sortBy?: "UPDATED_AT" | "CREATED_AT";
  sortOrder?: "ASCENDING" | "DESCENDING";
  shipmentStatus?: "CREATED" | "SHIPPED" | "IN_TRANSIT" | "RECEIVING" | "DELIVERED" | "CLOSED" | "CANCELLED";
  updatedAfter?: string;
  updatedBefore?: string;
  maxResults?: number;
  nextToken?: string;
};
  "awd_2024-05-09:listInventory": {
  sku?: string;
  sortOrder?: "ASCENDING" | "DESCENDING";
  details?: "SHOW" | "HIDE";
  nextToken?: string;
  maxResults?: number;
};
  "awd_2024-05-09:listOutbounds": {
  updatedAfter?: string;
  updatedBefore?: string;
  sortOrder?: "ASCENDING" | "DESCENDING";
  maxResults?: number;
  nextToken?: string;
};
  "awd_2024-05-09:createOutbound": {};
  "awd_2024-05-09:getOutbound": {};
  "awd_2024-05-09:updateOutbound": {};
  "awd_2024-05-09:confirmOutbound": {};
  "awd_2024-05-09:listReplenishmentOrders": {
  updatedAfter?: string;
  updatedBefore?: string;
  sortOrder?: "ASCENDING" | "DESCENDING";
  maxResults?: number;
  nextToken?: string;
};
  "awd_2024-05-09:createReplenishmentOrder": {};
  "awd_2024-05-09:getReplenishmentOrder": {};
  "awd_2024-05-09:confirmReplenishmentOrder": {};
  "aplusContent_2020-11-01:searchContentDocuments": {
  marketplaceId: string;
  pageToken?: string;
};
  "aplusContent_2020-11-01:createContentDocument": {
  marketplaceId: string;
};
  "aplusContent_2020-11-01:getContentDocument": {
  marketplaceId: string;
  includedDataSet: ReadonlyArray<"CONTENTS" | "METADATA">;
};
  "aplusContent_2020-11-01:updateContentDocument": {
  marketplaceId: string;
};
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": {
  marketplaceId: string;
  includedDataSet?: ReadonlyArray<"METADATA">;
  asinSet?: ReadonlyArray<string>;
  pageToken?: string;
};
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": {
  marketplaceId: string;
};
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": {
  marketplaceId: string;
  asinSet?: ReadonlyArray<string>;
};
  "aplusContent_2020-11-01:searchContentPublishRecords": {
  marketplaceId: string;
  asin: string;
  pageToken?: string;
};
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": {
  marketplaceId: string;
};
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": {
  marketplaceId: string;
};
  "appIntegrations-2024-04-01:createNotification": {};
  "appIntegrations-2024-04-01:deleteNotifications": {};
  "appIntegrations-2024-04-01:recordActionFeedback": {};
  "application_2023-11-30:rotateApplicationClientSecret": {};
  "catalogItemsV0:listCatalogCategories": {
  MarketplaceId: string;
  ASIN?: string;
  SellerSKU?: string;
};
  "catalogItems_2020-12-01:searchCatalogItems": {
  keywords: ReadonlyArray<string>;
  marketplaceIds: ReadonlyArray<string>;
  includedData?: ReadonlyArray<"identifiers" | "images" | "productTypes" | "salesRanks" | "summaries" | "variations" | "vendorDetails">;
  brandNames?: ReadonlyArray<string>;
  classificationIds?: ReadonlyArray<string>;
  pageSize?: number;
  pageToken?: string;
  keywordsLocale?: string;
  locale?: string;
};
  "catalogItems_2020-12-01:getCatalogItem": {
  marketplaceIds: ReadonlyArray<string>;
  includedData?: ReadonlyArray<"attributes" | "identifiers" | "images" | "productTypes" | "salesRanks" | "summaries" | "variations" | "vendorDetails">;
  locale?: string;
};
  "catalogItems_2022-04-01:searchCatalogItems": {
  identifiers?: ReadonlyArray<string>;
  identifiersType?: "ASIN" | "EAN" | "GTIN" | "ISBN" | "JAN" | "MINSAN" | "SKU" | "UPC";
  marketplaceIds: ReadonlyArray<string>;
  includedData?: ReadonlyArray<"attributes" | "classifications" | "dimensions" | "identifiers" | "images" | "productTypes" | "relationships" | "salesRanks" | "summaries" | "vendorDetails">;
  locale?: string;
  sellerId?: string;
  keywords?: ReadonlyArray<string>;
  brandNames?: ReadonlyArray<string>;
  classificationIds?: ReadonlyArray<string>;
  pageSize?: number;
  pageToken?: string;
  keywordsLocale?: string;
};
  "catalogItems_2022-04-01:getCatalogItem": {
  marketplaceIds: ReadonlyArray<string>;
  includedData?: ReadonlyArray<"attributes" | "classifications" | "dimensions" | "identifiers" | "images" | "productTypes" | "relationships" | "salesRanks" | "summaries" | "vendorDetails">;
  locale?: string;
};
  "customerFeedback_2024-06-01:getItemReviewTopics": {
  marketplaceId: string;
  sortBy: string;
};
  "customerFeedback_2024-06-01:getItemBrowseNode": {
  marketplaceId: string;
};
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": {
  marketplaceId: string;
  sortBy: string;
};
  "customerFeedback_2024-06-01:getItemReviewTrends": {
  marketplaceId: string;
};
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": {
  marketplaceId: string;
};
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": {
  marketplaceId: string;
};
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": {
  marketplaceId: string;
};
  "dataKiosk_2023-11-15:getQueries": {
  processingStatuses?: ReadonlyArray<"CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE">;
  pageSize?: number;
  createdSince?: string;
  createdUntil?: string;
  paginationToken?: string;
};
  "dataKiosk_2023-11-15:createQuery": {};
  "dataKiosk_2023-11-15:cancelQuery": {};
  "dataKiosk_2023-11-15:getQuery": {};
  "dataKiosk_2023-11-15:getDocument": {};
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": {
  orderId?: string;
  shipmentId?: string;
};
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": {
  orderId?: string;
  shipmentId?: string;
  marketplaceId: string;
  invoiceType: "Outbound";
  programType: "EasyShip" | "FbaOnSite" | "SelfShip";
};
  "easyShip_2022-03-23:listHandoverSlots": {};
  "easyShip_2022-03-23:getScheduledPackage": {
  amazonOrderId: string;
  marketplaceId: string;
};
  "easyShip_2022-03-23:createScheduledPackage": {};
  "easyShip_2022-03-23:updateScheduledPackages": {};
  "easyShip_2022-03-23:createScheduledPackageBulk": {};
  "externalFulfillmentInventory_2024-09-11:batchInventory": {};
  "externalFulfillmentReturns_2024-09-11:listReturns": {
  returnLocationId?: string;
  rmaId?: string;
  status?: "CREATED" | "CARRIER_NOTIFIED_TO_PICK_UP_FROM_CUSTOMER" | "CARRIER_OUT_FOR_PICK_UP_FROM_CUSTOMER" | "CUSTOMER_CANCELLED_PICK_UP" | "CUSTOMER_RESCHEDULED_PICK_UP" | "PICKED_FROM_CUSTOMER" | "IN_TRANSIT" | "OUT_FOR_DELIVERY" | "DELIVERED" | "REPLANNED" | "CUSTOMER_DROPPED_OFF" | "PARTIALLY_PROCESSED" | "PROCESSED" | "REJECTED" | "CANCELLED";
  reverseTrackingId?: string;
  createdSince?: string;
  createdUntil?: string;
  lastUpdatedSince?: string;
  lastUpdatedUntil?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  maxResults?: number;
  nextToken?: string;
};
  "externalFulfillmentReturns_2024-09-11:getReturn": {};
  "externalFulfillmentShipments_2024-09-11:getShipments": {
  locationId?: string;
  marketplaceId?: string;
  channelName?: string;
  status: "CREATED" | "ACCEPTED" | "CONFIRMED" | "PACKAGE_CREATED" | "PICKUP_SLOT_RETRIEVED" | "INVOICE_GENERATED" | "SHIPLABEL_GENERATED" | "CANCELLED" | "SHIPPED" | "DELIVERED";
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  maxResults?: number;
  paginationToken?: string;
};
  "externalFulfillmentShipments_2024-09-11:getShipment": {};
  "externalFulfillmentShipments_2024-09-11:processShipment": {
  operation: "CONFIRM" | "REJECT";
};
  "externalFulfillmentShipments_2024-09-11:createPackages": {};
  "externalFulfillmentShipments_2024-09-11:updatePackage": {};
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": {
  status?: "SHIPPED";
};
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": {
  packageId: string;
};
  "externalFulfillmentShipments_2024-09-11:generateInvoice": {};
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": {};
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": {
  shippingOptionId?: string;
  operation: "GENERATE" | "REGENERATE";
};
  "fbaInbound:getItemEligibilityPreview": {
  marketplaceIds?: ReadonlyArray<string>;
  asin: string;
  program: "INBOUND" | "COMMINGLING";
};
  "fbaInventory:getInventorySummaries": {
  details?: boolean;
  granularityType: "Marketplace";
  granularityId: string;
  startDateTime?: string;
  sellerSkus?: ReadonlyArray<string>;
  sellerSku?: string;
  nextToken?: string;
  marketplaceIds: ReadonlyArray<string>;
};
  "fbaInventory:createInventoryItem": {};
  "fbaInventory:deleteInventoryItem": {
  marketplaceId: string;
};
  "fbaInventory:addInventory": {};
  "feeds_2021-06-30:getFeeds": {
  feedTypes?: ReadonlyArray<string>;
  marketplaceIds?: ReadonlyArray<string>;
  pageSize?: number;
  processingStatuses?: ReadonlyArray<"CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE">;
  createdSince?: string;
  createdUntil?: string;
  nextToken?: string;
};
  "feeds_2021-06-30:createFeed": {};
  "feeds_2021-06-30:cancelFeed": {};
  "feeds_2021-06-30:getFeed": {};
  "feeds_2021-06-30:createFeedDocument": {};
  "feeds_2021-06-30:getFeedDocument": {
  enableContentEncodingUrlHeader?: boolean;
};
  "financesV0:listFinancialEventGroups": {
  MaxResultsPerPage?: number;
  FinancialEventGroupStartedBefore?: string;
  FinancialEventGroupStartedAfter?: string;
  NextToken?: string;
};
  "financesV0:listFinancialEventsByGroupId": {
  MaxResultsPerPage?: number;
  PostedAfter?: string;
  PostedBefore?: string;
  NextToken?: string;
};
  "financesV0:listFinancialEventsByOrderId": {
  MaxResultsPerPage?: number;
  NextToken?: string;
};
  "financesV0:listFinancialEvents": {
  MaxResultsPerPage?: number;
  PostedAfter?: string;
  PostedBefore?: string;
  NextToken?: string;
};
  "finances_2024-06-19:listTransactions": {
  postedAfter?: string;
  postedBefore?: string;
  marketplaceId?: string;
  transactionStatus?: string;
  relatedIdentifierName?: string;
  relatedIdentifierValue?: string;
  nextToken?: string;
};
  "transfers_2024-06-01:initiatePayout": {};
  "transfers_2024-06-01:getPaymentMethods": {
  marketplaceId: string;
  paymentMethodTypes?: ReadonlyArray<"BANK_ACCOUNT" | "CARD" | "SELLER_WALLET">;
};
  "fulfillmentInboundV0:getPrepInstructions": {
  ShipToCountryCode: string;
  SellerSKUList?: ReadonlyArray<string>;
  ASINList?: ReadonlyArray<string>;
};
  "fulfillmentInboundV0:getLabels": {
  PageType: "PackageLabel_Letter_2" | "PackageLabel_Letter_4" | "PackageLabel_Letter_6" | "PackageLabel_Letter_6_CarrierLeft" | "PackageLabel_A4_2" | "PackageLabel_A4_4" | "PackageLabel_Plain_Paper" | "PackageLabel_Plain_Paper_CarrierBottom" | "PackageLabel_Thermal" | "PackageLabel_Thermal_Unified" | "PackageLabel_Thermal_NonPCP" | "PackageLabel_Thermal_No_Carrier_Rotation";
  LabelType: "BARCODE_2D" | "UNIQUE" | "PALLET";
  NumberOfPackages?: number;
  PackageLabelsToPrint?: ReadonlyArray<string>;
  NumberOfPallets?: number;
  PageSize?: number;
  PageStartIndex?: number;
};
  "fulfillmentInboundV0:getBillOfLading": {};
  "fulfillmentInboundV0:getShipments": {
  ShipmentStatusList?: ReadonlyArray<"WORKING" | "READY_TO_SHIP" | "SHIPPED" | "RECEIVING" | "CANCELLED" | "DELETED" | "CLOSED" | "ERROR" | "IN_TRANSIT" | "DELIVERED" | "CHECKED_IN">;
  ShipmentIdList?: ReadonlyArray<string>;
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  QueryType: "SHIPMENT" | "DATE_RANGE" | "NEXT_TOKEN";
  NextToken?: string;
  MarketplaceId: string;
};
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": {
  MarketplaceId?: string;
};
  "fulfillmentInboundV0:getShipmentItems": {
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  QueryType: "DATE_RANGE" | "NEXT_TOKEN";
  NextToken?: string;
  MarketplaceId: string;
};
  "fulfillmentInbound_2024-03-20:listInboundPlans": {
  pageSize?: number;
  paginationToken?: string;
  status?: "ACTIVE" | "VOIDED" | "SHIPPED";
  sortBy?: "LAST_UPDATED_TIME" | "CREATION_TIME";
  sortOrder?: "ASC" | "DESC";
};
  "fulfillmentInbound_2024-03-20:createInboundPlan": {};
  "fulfillmentInbound_2024-03-20:getInboundPlan": {};
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": {};
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": {};
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:setPackingInformation": {};
  "fulfillmentInbound_2024-03-20:listPackingOptions": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:generatePackingOptions": {};
  "fulfillmentInbound_2024-03-20:confirmPackingOption": {};
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:listPlacementOptions": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": {};
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": {};
  "fulfillmentInbound_2024-03-20:getShipment": {};
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": {};
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": {};
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": {};
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": {};
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": {};
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": {};
  "fulfillmentInbound_2024-03-20:listShipmentItems": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:updateShipmentName": {};
  "fulfillmentInbound_2024-03-20:listShipmentPallets": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": {};
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": {
  pageSize?: number;
  paginationToken?: string;
};
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": {};
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": {};
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": {};
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": {};
  "fulfillmentInbound_2024-03-20:listTransportationOptions": {
  pageSize?: number;
  paginationToken?: string;
  placementOptionId?: string;
  shipmentId?: string;
};
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": {};
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": {};
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": {
  mskus: ReadonlyArray<string>;
  marketplaceId: string;
};
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": {
  marketplaceId: string;
};
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": {};
  "fulfillmentInbound_2024-03-20:listPrepDetails": {
  marketplaceId: string;
  mskus: ReadonlyArray<string>;
};
  "fulfillmentInbound_2024-03-20:setPrepDetails": {};
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": {};
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": {};
  "fulfillmentOutbound_2020-07-01:deliveryOffers": {};
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": {
  queryStartDate?: string;
  nextToken?: string;
};
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": {};
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": {
  packageNumber: number;
};
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": {
  sellerSku: string;
  marketplaceId?: string;
  sellerFulfillmentOrderId?: string;
  language?: string;
};
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": {};
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": {};
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": {};
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": {};
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": {};
  "fulfillmentOutbound_2020-07-01:getFeatures": {
  marketplaceId: string;
};
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": {
  marketplaceId: string;
  nextToken?: string;
  queryStartDate?: string;
};
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": {
  marketplaceId: string;
};
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": {
  marketplaceId: string;
};
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": {};
  "InvoicesApiModel_2024-06-19:createInvoicesExport": {};
  "InvoicesApiModel_2024-06-19:getInvoicesExports": {
  marketplaceId: string;
  dateStart?: string;
  nextToken?: string;
  pageSize?: number;
  dateEnd?: string;
  status?: "REQUESTED" | "PROCESSING" | "DONE" | "ERROR";
};
  "InvoicesApiModel_2024-06-19:getInvoicesExport": {};
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": {};
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": {
  marketplaceId: string;
  transactionType: string;
  shipmentId: string;
  invoiceType: string;
  inboundPlanId?: string;
};
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": {
  marketplaceId: string;
  transactionType: string;
  invoiceType: string;
  inboundPlanId?: string;
  fileFormat?: string;
};
  "InvoicesApiModel_2024-06-19:getInvoices": {
  transactionIdentifierName?: string;
  pageSize?: number;
  dateEnd?: string;
  marketplaceId: string;
  transactionType?: string;
  transactionIdentifierId?: string;
  dateStart?: string;
  series?: string;
  nextToken?: string;
  sortOrder?: "DESC" | "ASC";
  invoiceType?: string;
  statuses?: ReadonlyArray<string>;
  externalInvoiceId?: string;
  sortBy?: "START_DATE_TIME";
};
  "InvoicesApiModel_2024-06-19:getInvoice": {
  marketplaceId: string;
};
  "listingsItems_2020-09-01:deleteListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  issueLocale?: string;
};
  "listingsItems_2020-09-01:patchListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  issueLocale?: string;
};
  "listingsItems_2020-09-01:putListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  issueLocale?: string;
};
  "listingsItems_2021-08-01:deleteListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  issueLocale?: string;
};
  "listingsItems_2021-08-01:getListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  issueLocale?: string;
  includedData?: ReadonlyArray<"summaries" | "attributes" | "issues" | "offers" | "fulfillmentAvailability" | "procurement" | "relationships" | "productTypes">;
};
  "listingsItems_2021-08-01:patchListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  includedData?: ReadonlyArray<"identifiers" | "issues">;
  mode?: "VALIDATION_PREVIEW";
  issueLocale?: string;
};
  "listingsItems_2021-08-01:putListingsItem": {
  marketplaceIds: ReadonlyArray<string>;
  includedData?: ReadonlyArray<"identifiers" | "issues">;
  mode?: "VALIDATION_PREVIEW";
  issueLocale?: string;
};
  "listingsItems_2021-08-01:searchListingsItems": {
  marketplaceIds: ReadonlyArray<string>;
  issueLocale?: string;
  includedData?: ReadonlyArray<"summaries" | "attributes" | "issues" | "offers" | "fulfillmentAvailability" | "procurement" | "relationships" | "productTypes">;
  identifiers?: ReadonlyArray<string>;
  identifiersType?: "ASIN" | "EAN" | "FNSKU" | "GTIN" | "ISBN" | "JAN" | "MINSAN" | "SKU" | "UPC";
  variationParentSku?: string;
  packageHierarchySku?: string;
  createdAfter?: string;
  createdBefore?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  withIssueSeverity?: ReadonlyArray<"WARNING" | "ERROR">;
  withStatus?: ReadonlyArray<"BUYABLE" | "DISCOVERABLE">;
  withoutStatus?: ReadonlyArray<"BUYABLE" | "DISCOVERABLE">;
  sortBy?: "sku" | "createdDate" | "lastUpdatedDate";
  sortOrder?: "ASC" | "DESC";
  pageSize?: number;
  pageToken?: string;
};
  "listingsRestrictions_2021-08-01:getListingsRestrictions": {
  asin: string;
  conditionType?: "new_new" | "new_open_box" | "new_oem" | "refurbished_refurbished" | "used_like_new" | "used_very_good" | "used_good" | "used_acceptable" | "collectible_like_new" | "collectible_very_good" | "collectible_good" | "collectible_acceptable" | "club_club";
  sellerId: string;
  marketplaceIds: ReadonlyArray<string>;
  reasonLocale?: string;
  productType?: string;
};
  "merchantFulfillmentV0:getEligibleShipmentServices": {};
  "merchantFulfillmentV0:getShipment": {};
  "merchantFulfillmentV0:cancelShipment": {};
  "merchantFulfillmentV0:createShipment": {};
  "merchantFulfillmentV0:getAdditionalSellerInputs": {};
  "messaging:getMessagingActionsForOrder": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:confirmCustomizationDetails": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:createConfirmDeliveryDetails": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:createLegalDisclosure": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:createConfirmOrderDetails": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:createConfirmServiceDetails": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:CreateWarranty": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:GetAttributes": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:createDigitalAccessKey": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:createUnexpectedProblem": {
  marketplaceIds: ReadonlyArray<string>;
};
  "messaging:sendInvoice": {
  marketplaceIds: ReadonlyArray<string>;
};
  "notifications:getSubscription": {
  payloadVersion?: string;
};
  "notifications:createSubscription": {};
  "notifications:getSubscriptionById": {};
  "notifications:deleteSubscriptionById": {};
  "notifications:sendTestNotification": {};
  "notifications:getDestinations": {};
  "notifications:createDestination": {};
  "notifications:getDestination": {};
  "notifications:deleteDestination": {};
  "ordersV0:getOrders": {
  CreatedAfter?: string;
  CreatedBefore?: string;
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  OrderStatuses?: ReadonlyArray<string>;
  MarketplaceIds: ReadonlyArray<string>;
  FulfillmentChannels?: ReadonlyArray<string>;
  PaymentMethods?: ReadonlyArray<string>;
  BuyerEmail?: string;
  SellerOrderId?: string;
  MaxResultsPerPage?: number;
  EasyShipShipmentStatuses?: ReadonlyArray<string>;
  ElectronicInvoiceStatuses?: ReadonlyArray<string>;
  NextToken?: string;
  AmazonOrderIds?: ReadonlyArray<string>;
  ActualFulfillmentSupplySourceId?: string;
  IsISPU?: boolean;
  StoreChainStoreId?: string;
  EarliestDeliveryDateBefore?: string;
  EarliestDeliveryDateAfter?: string;
  LatestDeliveryDateBefore?: string;
  LatestDeliveryDateAfter?: string;
};
  "ordersV0:getOrder": {};
  "ordersV0:getOrderBuyerInfo": {};
  "ordersV0:getOrderAddress": {};
  "ordersV0:getOrderItems": {
  NextToken?: string;
};
  "ordersV0:getOrderItemsBuyerInfo": {
  NextToken?: string;
};
  "ordersV0:updateShipmentStatus": {};
  "ordersV0:getOrderRegulatedInfo": {};
  "ordersV0:updateVerificationStatus": {};
  "ordersV0:confirmShipment": {};
  "orders_2026-01-01:searchOrders": {
  createdAfter?: string;
  createdBefore?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  fulfillmentStatuses?: ReadonlyArray<"PENDING_AVAILABILITY" | "PENDING" | "UNSHIPPED" | "PARTIALLY_SHIPPED" | "SHIPPED" | "CANCELLED" | "UNFULFILLABLE">;
  marketplaceIds?: ReadonlyArray<string>;
  fulfilledBy?: ReadonlyArray<"MERCHANT" | "AMAZON">;
  maxResultsPerPage?: number;
  paginationToken?: string;
  includedData?: ReadonlyArray<"BUYER" | "RECIPIENT" | "PROCEEDS" | "EXPENSE" | "PROMOTION" | "CANCELLATION" | "FULFILLMENT" | "PACKAGES" | "TAX" | "PAYMENT" | "FULFILLMENT_ORDERS">;
};
  "orders_2026-01-01:getOrder": {
  includedData?: ReadonlyArray<"BUYER" | "RECIPIENT" | "PROCEEDS" | "EXPENSE" | "PROMOTION" | "CANCELLATION" | "FULFILLMENT" | "PACKAGES" | "TAX" | "PAYMENT" | "FULFILLMENT_ORDERS">;
};
  "productFeesV0:getMyFeesEstimateForSKU": {};
  "productFeesV0:getMyFeesEstimateForASIN": {};
  "productFeesV0:getMyFeesEstimates": {};
  "productPricingV0:getPricing": {
  MarketplaceId: string;
  Asins?: ReadonlyArray<string>;
  Skus?: ReadonlyArray<string>;
  ItemType: "Asin" | "Sku";
  ItemCondition?: "New" | "Used" | "Collectible" | "Refurbished" | "Club";
  OfferType?: "B2C" | "B2B";
};
  "productPricingV0:getCompetitivePricing": {
  MarketplaceId: string;
  Asins?: ReadonlyArray<string>;
  Skus?: ReadonlyArray<string>;
  ItemType: "Asin" | "Sku";
  CustomerType?: "Consumer" | "Business";
};
  "productPricingV0:getListingOffers": {
  MarketplaceId: string;
  ItemCondition: "New" | "Used" | "Collectible" | "Refurbished" | "Club";
  CustomerType?: "Consumer" | "Business";
};
  "productPricingV0:getItemOffers": {
  MarketplaceId: string;
  ItemCondition: "New" | "Used" | "Collectible" | "Refurbished" | "Club";
  CustomerType?: "Consumer" | "Business";
};
  "productPricingV0:getItemOffersBatch": {};
  "productPricingV0:getListingOffersBatch": {};
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": {};
  "productPricing_2022-05-01:getCompetitiveSummary": {};
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": {
  keywords?: ReadonlyArray<string>;
  marketplaceIds: ReadonlyArray<string>;
  itemName?: string;
  locale?: string;
  searchLocale?: string;
};
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": {
  sellerId?: string;
  marketplaceIds: ReadonlyArray<string>;
  productTypeVersion?: string;
  requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  requirementsEnforced?: "ENFORCED" | "NOT_ENFORCED";
  locale?: "DEFAULT" | "ar" | "ar_AE" | "de" | "de_DE" | "en" | "en_AE" | "en_AU" | "en_CA" | "en_GB" | "en_IN" | "en_SG" | "en_US" | "es" | "es_ES" | "es_MX" | "es_US" | "fr" | "fr_CA" | "fr_FR" | "it" | "it_IT" | "ja" | "ja_JP" | "nl" | "nl_NL" | "pl" | "pl_PL" | "pt" | "pt_BR" | "pt_PT" | "sv" | "sv_SE" | "tr" | "tr_TR" | "zh" | "zh_CN" | "zh_TW";
  parentageLevel?: "NONE" | "CHILD" | "PARENT";
};
  "replenishment-2022-11-07:getSellingPartnerMetrics": {};
  "replenishment-2022-11-07:listOfferMetrics": {};
  "replenishment-2022-11-07:listOffers": {};
  "reports_2021-06-30:getReports": {
  reportTypes?: ReadonlyArray<string>;
  processingStatuses?: ReadonlyArray<"CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE">;
  marketplaceIds?: ReadonlyArray<string>;
  pageSize?: number;
  createdSince?: string;
  createdUntil?: string;
  nextToken?: string;
};
  "reports_2021-06-30:createReport": {};
  "reports_2021-06-30:cancelReport": {};
  "reports_2021-06-30:getReport": {};
  "reports_2021-06-30:getReportSchedules": {
  reportTypes: ReadonlyArray<string>;
};
  "reports_2021-06-30:createReportSchedule": {};
  "reports_2021-06-30:cancelReportSchedule": {};
  "reports_2021-06-30:getReportSchedule": {};
  "reports_2021-06-30:getReportDocument": {
  enableContentEncodingUrlHeader?: boolean;
};
  "sales:getOrderMetrics": {
  marketplaceIds: ReadonlyArray<string>;
  interval: string;
  granularityTimeZone?: string;
  granularity: "Hour" | "Day" | "Week" | "Month" | "Year" | "Total";
  buyerType?: "B2B" | "B2C" | "All";
  fulfillmentNetwork?: string;
  firstDayOfWeek?: "Monday" | "Sunday";
  asin?: string;
  sku?: string;
  amazonProgram?: "AmazonHaul";
};
  "sellerWallet_2024-03-01:listAccounts": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:getAccount": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:listAccountBalances": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:getTransferPreview": {
  sourceCountryCode: string;
  sourceCurrencyCode: string;
  destinationCountryCode: string;
  destinationCurrencyCode: string;
  baseAmount: number;
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:listAccountTransactions": {
  accountId: string;
  nextPageToken?: string;
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:createTransaction": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:getTransaction": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:listTransferSchedules": {
  accountId: string;
  marketplaceId: string;
  nextPageToken?: string;
};
  "sellerWallet_2024-03-01:createTransferSchedule": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:updateTransferSchedule": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:getTransferSchedule": {
  marketplaceId: string;
};
  "sellerWallet_2024-03-01:deleteScheduleTransaction": {
  marketplaceId: string;
};
  "sellers:getMarketplaceParticipations": {};
  "sellers:getAccount": {};
  "services:getServiceJobByServiceJobId": {};
  "services:cancelServiceJobByServiceJobId": {
  cancellationReasonCode: string;
};
  "services:completeServiceJobByServiceJobId": {};
  "services:getServiceJobs": {
  serviceOrderIds?: ReadonlyArray<string>;
  productOrderIds?: ReadonlyArray<string>;
  trackingIds?: ReadonlyArray<string>;
  serviceJobStatus?: ReadonlyArray<"NOT_SERVICED" | "CANCELLED" | "COMPLETED" | "PENDING_SCHEDULE" | "NOT_FULFILLABLE" | "HOLD" | "PAYMENT_DECLINED">;
  pageToken?: string;
  pageSize?: number;
  sortField?: "JOB_DATE" | "JOB_STATUS";
  sortOrder?: "ASC" | "DESC";
  createdAfter?: string;
  createdBefore?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  scheduleStartDate?: string;
  scheduleEndDate?: string;
  marketplaceIds: ReadonlyArray<string>;
  asins?: ReadonlyArray<string>;
  requiredSkills?: ReadonlyArray<string>;
  storeIds?: ReadonlyArray<string>;
};
  "services:addAppointmentForServiceJobByServiceJobId": {};
  "services:rescheduleAppointmentForServiceJobByServiceJobId": {};
  "services:assignAppointmentResources": {};
  "services:setAppointmentFulfillmentData": {};
  "services:getRangeSlotCapacity": {
  marketplaceIds: ReadonlyArray<string>;
  nextPageToken?: string;
};
  "services:getFixedSlotCapacity": {
  marketplaceIds: ReadonlyArray<string>;
  nextPageToken?: string;
};
  "services:updateSchedule": {
  marketplaceIds: ReadonlyArray<string>;
};
  "services:createReservation": {
  marketplaceIds: ReadonlyArray<string>;
};
  "services:updateReservation": {
  marketplaceIds: ReadonlyArray<string>;
};
  "services:cancelReservation": {
  marketplaceIds: ReadonlyArray<string>;
};
  "services:getAppointmmentSlotsByJobId": {
  marketplaceIds: ReadonlyArray<string>;
  startTime?: string;
  endTime?: string;
};
  "services:getAppointmentSlots": {
  asin: string;
  storeId: string;
  marketplaceIds: ReadonlyArray<string>;
  startTime?: string;
  endTime?: string;
};
  "services:createServiceDocumentUploadDestination": {};
  "shipmentInvoicingV0:getShipmentDetails": {};
  "shipmentInvoicingV0:submitInvoice": {};
  "shipmentInvoicingV0:getInvoiceStatus": {};
  "shipping:createShipment": {};
  "shipping:getShipment": {};
  "shipping:cancelShipment": {};
  "shipping:purchaseLabels": {};
  "shipping:retrieveShippingLabel": {};
  "shipping:purchaseShipment": {};
  "shipping:getRates": {};
  "shipping:getAccount": {};
  "shipping:getTrackingInformation": {};
  "shippingV2:getRates": {};
  "shippingV2:directPurchaseShipment": {};
  "shippingV2:purchaseShipment": {};
  "shippingV2:oneClickShipment": {};
  "shippingV2:getTracking": {
  trackingId: string;
  carrierId: string;
};
  "shippingV2:getShipmentDocuments": {
  packageClientReferenceId: string;
  format?: string;
  dpi?: number;
};
  "shippingV2:cancelShipment": {};
  "shippingV2:getAdditionalInputs": {
  requestToken: string;
  rateId: string;
};
  "shippingV2:getCarrierAccountFormInputs": {};
  "shippingV2:getCarrierAccounts": {};
  "shippingV2:linkCarrierAccount": {};
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": {};
  "shippingV2:unlinkCarrierAccount": {};
  "shippingV2:generateCollectionForm": {};
  "shippingV2:getCollectionFormHistory": {};
  "shippingV2:getUnmanifestedShipments": {};
  "shippingV2:getCollectionForm": {};
  "shippingV2:getAccessPoints": {
  accessPointTypes: ReadonlyArray<"HELIX" | "CAMPUS_LOCKER" | "OMNI_LOCKER" | "ODIN_LOCKER" | "DOBBY_LOCKER" | "CORE_LOCKER" | "3P" | "CAMPUS_ROOM">;
  countryCode: string;
  postalCode: string;
};
  "shippingV2:submitNdrFeedback": {};
  "shippingV2:createClaim": {};
  "solicitations:getSolicitationActionsForOrder": {
  marketplaceIds: ReadonlyArray<string>;
};
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": {
  marketplaceIds: ReadonlyArray<string>;
};
  "supplySources_2020-07-01:getSupplySources": {
  nextPageToken?: string;
  pageSize?: number;
};
  "supplySources_2020-07-01:createSupplySource": {};
  "supplySources_2020-07-01:getSupplySource": {};
  "supplySources_2020-07-01:updateSupplySource": {};
  "supplySources_2020-07-01:archiveSupplySource": {};
  "supplySources_2020-07-01:updateSupplySourceStatus": {};
  "tokens_2021-03-01:createRestrictedDataToken": {};
  "uploads_2020-11-01:createUploadDestinationForResource": {
  marketplaceIds: ReadonlyArray<string>;
  contentMD5: string;
  contentType?: string;
};
  "vehicles_2024-11-01:getVehicles": {
  pageToken?: string;
  marketplaceId: string;
  vehicleType: "CAR" | "MOTORBIKE";
  updatedAfter?: string;
};
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": {};
  "vendorDirectFulfillmentOrdersV1:getOrders": {
  shipFromPartyId?: string;
  status?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
  includeDetails?: string;
};
  "vendorDirectFulfillmentOrdersV1:getOrder": {};
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": {};
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": {
  shipFromPartyId?: string;
  status?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
  includeDetails?: string;
};
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": {};
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": {};
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": {};
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": {};
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": {};
  "vendorDirectFulfillmentShippingV1:getShippingLabels": {
  shipFromPartyId?: string;
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
};
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": {};
  "vendorDirectFulfillmentShippingV1:getShippingLabel": {};
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": {};
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": {};
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": {
  shipFromPartyId?: string;
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
};
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": {};
  "vendorDirectFulfillmentShippingV1:getPackingSlips": {
  shipFromPartyId?: string;
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
};
  "vendorDirectFulfillmentShippingV1:getPackingSlip": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": {
  shipFromPartyId?: string;
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
};
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": {};
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": {};
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": {};
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": {
  shipFromPartyId?: string;
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
};
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": {};
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": {
  shipFromPartyId?: string;
  limit?: number;
  createdAfter: string;
  createdBefore: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
};
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": {};
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": {};
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": {};
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": {};
  "vendorInvoices:submitInvoices": {};
  "vendorOrders:getPurchaseOrders": {
  limit?: number;
  createdAfter?: string;
  createdBefore?: string;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
  includeDetails?: string;
  changedAfter?: string;
  changedBefore?: string;
  poItemState?: "Cancelled";
  isPOChanged?: string;
  purchaseOrderState?: "New" | "Acknowledged" | "Closed";
  orderingVendorCode?: string;
};
  "vendorOrders:getPurchaseOrder": {};
  "vendorOrders:submitAcknowledgement": {};
  "vendorOrders:getPurchaseOrdersStatus": {
  limit?: number;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
  createdAfter?: string;
  createdBefore?: string;
  updatedAfter?: string;
  updatedBefore?: string;
  purchaseOrderNumber?: string;
  purchaseOrderStatus?: "OPEN" | "CLOSED";
  itemConfirmationStatus?: "ACCEPTED" | "PARTIALLY_ACCEPTED" | "REJECTED" | "UNCONFIRMED";
  itemReceiveStatus?: "NOT_RECEIVED" | "PARTIALLY_RECEIVED" | "RECEIVED";
  orderingVendorCode?: string;
  shipToPartyId?: string;
};
  "vendorShipments:SubmitShipmentConfirmations": {};
  "vendorShipments:SubmitShipments": {};
  "vendorShipments:GetShipmentDetails": {
  limit?: number;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
  createdAfter?: string;
  createdBefore?: string;
  shipmentConfirmedBefore?: string;
  shipmentConfirmedAfter?: string;
  packageLabelCreatedBefore?: string;
  packageLabelCreatedAfter?: string;
  shippedBefore?: string;
  shippedAfter?: string;
  estimatedDeliveryBefore?: string;
  estimatedDeliveryAfter?: string;
  shipmentDeliveryBefore?: string;
  shipmentDeliveryAfter?: string;
  requestedPickUpBefore?: string;
  requestedPickUpAfter?: string;
  scheduledPickUpBefore?: string;
  scheduledPickUpAfter?: string;
  currentShipmentStatus?: string;
  vendorShipmentIdentifier?: string;
  buyerReferenceNumber?: string;
  buyerWarehouseCode?: string;
  sellerWarehouseCode?: string;
};
  "vendorShipments:GetShipmentLabels": {
  limit?: number;
  sortOrder?: "ASC" | "DESC";
  nextToken?: string;
  labelCreatedAfter?: string;
  labelCreatedBefore?: string;
  buyerReferenceNumber?: string;
  vendorShipmentIdentifier?: string;
  sellerWarehouseCode?: string;
};
  "vendorTransactionStatus:getTransaction": {};
}

export interface AmazonFullApiOperationQueryRequiredMap {
  "awd_2024-05-09:createInbound": false;
  "awd_2024-05-09:getInbound": false;
  "awd_2024-05-09:updateInbound": false;
  "awd_2024-05-09:cancelInbound": false;
  "awd_2024-05-09:confirmInbound": false;
  "awd_2024-05-09:getInboundShipment": false;
  "awd_2024-05-09:getInboundShipmentLabels": false;
  "awd_2024-05-09:getLabelPageTypes": false;
  "awd_2024-05-09:updateInboundShipmentTransportDetails": false;
  "awd_2024-05-09:checkInboundEligibility": false;
  "awd_2024-05-09:listInboundShipments": false;
  "awd_2024-05-09:listInventory": false;
  "awd_2024-05-09:listOutbounds": false;
  "awd_2024-05-09:createOutbound": false;
  "awd_2024-05-09:getOutbound": false;
  "awd_2024-05-09:updateOutbound": false;
  "awd_2024-05-09:confirmOutbound": false;
  "awd_2024-05-09:listReplenishmentOrders": false;
  "awd_2024-05-09:createReplenishmentOrder": false;
  "awd_2024-05-09:getReplenishmentOrder": false;
  "awd_2024-05-09:confirmReplenishmentOrder": false;
  "aplusContent_2020-11-01:searchContentDocuments": true;
  "aplusContent_2020-11-01:createContentDocument": true;
  "aplusContent_2020-11-01:getContentDocument": true;
  "aplusContent_2020-11-01:updateContentDocument": true;
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": true;
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": true;
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": true;
  "aplusContent_2020-11-01:searchContentPublishRecords": true;
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": true;
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": true;
  "appIntegrations-2024-04-01:createNotification": false;
  "appIntegrations-2024-04-01:deleteNotifications": false;
  "appIntegrations-2024-04-01:recordActionFeedback": false;
  "application_2023-11-30:rotateApplicationClientSecret": false;
  "catalogItemsV0:listCatalogCategories": true;
  "catalogItems_2020-12-01:searchCatalogItems": true;
  "catalogItems_2020-12-01:getCatalogItem": true;
  "catalogItems_2022-04-01:searchCatalogItems": true;
  "catalogItems_2022-04-01:getCatalogItem": true;
  "customerFeedback_2024-06-01:getItemReviewTopics": true;
  "customerFeedback_2024-06-01:getItemBrowseNode": true;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": true;
  "customerFeedback_2024-06-01:getItemReviewTrends": true;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": true;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": true;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": true;
  "dataKiosk_2023-11-15:getQueries": false;
  "dataKiosk_2023-11-15:createQuery": false;
  "dataKiosk_2023-11-15:cancelQuery": false;
  "dataKiosk_2023-11-15:getQuery": false;
  "dataKiosk_2023-11-15:getDocument": false;
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": false;
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": true;
  "easyShip_2022-03-23:listHandoverSlots": false;
  "easyShip_2022-03-23:getScheduledPackage": true;
  "easyShip_2022-03-23:createScheduledPackage": false;
  "easyShip_2022-03-23:updateScheduledPackages": false;
  "easyShip_2022-03-23:createScheduledPackageBulk": false;
  "externalFulfillmentInventory_2024-09-11:batchInventory": false;
  "externalFulfillmentReturns_2024-09-11:listReturns": false;
  "externalFulfillmentReturns_2024-09-11:getReturn": false;
  "externalFulfillmentShipments_2024-09-11:getShipments": true;
  "externalFulfillmentShipments_2024-09-11:getShipment": false;
  "externalFulfillmentShipments_2024-09-11:processShipment": true;
  "externalFulfillmentShipments_2024-09-11:createPackages": false;
  "externalFulfillmentShipments_2024-09-11:updatePackage": false;
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": false;
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": true;
  "externalFulfillmentShipments_2024-09-11:generateInvoice": false;
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": false;
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": true;
  "fbaInbound:getItemEligibilityPreview": true;
  "fbaInventory:getInventorySummaries": true;
  "fbaInventory:createInventoryItem": false;
  "fbaInventory:deleteInventoryItem": true;
  "fbaInventory:addInventory": false;
  "feeds_2021-06-30:getFeeds": false;
  "feeds_2021-06-30:createFeed": false;
  "feeds_2021-06-30:cancelFeed": false;
  "feeds_2021-06-30:getFeed": false;
  "feeds_2021-06-30:createFeedDocument": false;
  "feeds_2021-06-30:getFeedDocument": false;
  "financesV0:listFinancialEventGroups": false;
  "financesV0:listFinancialEventsByGroupId": false;
  "financesV0:listFinancialEventsByOrderId": false;
  "financesV0:listFinancialEvents": false;
  "finances_2024-06-19:listTransactions": false;
  "transfers_2024-06-01:initiatePayout": false;
  "transfers_2024-06-01:getPaymentMethods": true;
  "fulfillmentInboundV0:getPrepInstructions": true;
  "fulfillmentInboundV0:getLabels": true;
  "fulfillmentInboundV0:getBillOfLading": false;
  "fulfillmentInboundV0:getShipments": true;
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": false;
  "fulfillmentInboundV0:getShipmentItems": true;
  "fulfillmentInbound_2024-03-20:listInboundPlans": false;
  "fulfillmentInbound_2024-03-20:createInboundPlan": false;
  "fulfillmentInbound_2024-03-20:getInboundPlan": false;
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": false;
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": false;
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": false;
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": false;
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": false;
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": false;
  "fulfillmentInbound_2024-03-20:setPackingInformation": false;
  "fulfillmentInbound_2024-03-20:listPackingOptions": false;
  "fulfillmentInbound_2024-03-20:generatePackingOptions": false;
  "fulfillmentInbound_2024-03-20:confirmPackingOption": false;
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": false;
  "fulfillmentInbound_2024-03-20:listPlacementOptions": false;
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": false;
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": false;
  "fulfillmentInbound_2024-03-20:getShipment": false;
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": false;
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": false;
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": false;
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": false;
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": false;
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": false;
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": false;
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": false;
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": false;
  "fulfillmentInbound_2024-03-20:listShipmentItems": false;
  "fulfillmentInbound_2024-03-20:updateShipmentName": false;
  "fulfillmentInbound_2024-03-20:listShipmentPallets": false;
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": false;
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": false;
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": false;
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": false;
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": false;
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": false;
  "fulfillmentInbound_2024-03-20:listTransportationOptions": false;
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": false;
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": false;
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": true;
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": true;
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": false;
  "fulfillmentInbound_2024-03-20:listPrepDetails": true;
  "fulfillmentInbound_2024-03-20:setPrepDetails": false;
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": false;
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": false;
  "fulfillmentOutbound_2020-07-01:deliveryOffers": false;
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": false;
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": false;
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": true;
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": true;
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": false;
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": false;
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": false;
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": false;
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": false;
  "fulfillmentOutbound_2020-07-01:getFeatures": true;
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": true;
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": true;
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": true;
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": false;
  "InvoicesApiModel_2024-06-19:createInvoicesExport": false;
  "InvoicesApiModel_2024-06-19:getInvoicesExports": true;
  "InvoicesApiModel_2024-06-19:getInvoicesExport": false;
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": false;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": true;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": true;
  "InvoicesApiModel_2024-06-19:getInvoices": true;
  "InvoicesApiModel_2024-06-19:getInvoice": true;
  "listingsItems_2020-09-01:deleteListingsItem": true;
  "listingsItems_2020-09-01:patchListingsItem": true;
  "listingsItems_2020-09-01:putListingsItem": true;
  "listingsItems_2021-08-01:deleteListingsItem": true;
  "listingsItems_2021-08-01:getListingsItem": true;
  "listingsItems_2021-08-01:patchListingsItem": true;
  "listingsItems_2021-08-01:putListingsItem": true;
  "listingsItems_2021-08-01:searchListingsItems": true;
  "listingsRestrictions_2021-08-01:getListingsRestrictions": true;
  "merchantFulfillmentV0:getEligibleShipmentServices": false;
  "merchantFulfillmentV0:getShipment": false;
  "merchantFulfillmentV0:cancelShipment": false;
  "merchantFulfillmentV0:createShipment": false;
  "merchantFulfillmentV0:getAdditionalSellerInputs": false;
  "messaging:getMessagingActionsForOrder": true;
  "messaging:confirmCustomizationDetails": true;
  "messaging:createConfirmDeliveryDetails": true;
  "messaging:createLegalDisclosure": true;
  "messaging:createConfirmOrderDetails": true;
  "messaging:createConfirmServiceDetails": true;
  "messaging:CreateWarranty": true;
  "messaging:GetAttributes": true;
  "messaging:createDigitalAccessKey": true;
  "messaging:createUnexpectedProblem": true;
  "messaging:sendInvoice": true;
  "notifications:getSubscription": false;
  "notifications:createSubscription": false;
  "notifications:getSubscriptionById": false;
  "notifications:deleteSubscriptionById": false;
  "notifications:sendTestNotification": false;
  "notifications:getDestinations": false;
  "notifications:createDestination": false;
  "notifications:getDestination": false;
  "notifications:deleteDestination": false;
  "ordersV0:getOrders": true;
  "ordersV0:getOrder": false;
  "ordersV0:getOrderBuyerInfo": false;
  "ordersV0:getOrderAddress": false;
  "ordersV0:getOrderItems": false;
  "ordersV0:getOrderItemsBuyerInfo": false;
  "ordersV0:updateShipmentStatus": false;
  "ordersV0:getOrderRegulatedInfo": false;
  "ordersV0:updateVerificationStatus": false;
  "ordersV0:confirmShipment": false;
  "orders_2026-01-01:searchOrders": false;
  "orders_2026-01-01:getOrder": false;
  "productFeesV0:getMyFeesEstimateForSKU": false;
  "productFeesV0:getMyFeesEstimateForASIN": false;
  "productFeesV0:getMyFeesEstimates": false;
  "productPricingV0:getPricing": true;
  "productPricingV0:getCompetitivePricing": true;
  "productPricingV0:getListingOffers": true;
  "productPricingV0:getItemOffers": true;
  "productPricingV0:getItemOffersBatch": false;
  "productPricingV0:getListingOffersBatch": false;
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": false;
  "productPricing_2022-05-01:getCompetitiveSummary": false;
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": true;
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": true;
  "replenishment-2022-11-07:getSellingPartnerMetrics": false;
  "replenishment-2022-11-07:listOfferMetrics": false;
  "replenishment-2022-11-07:listOffers": false;
  "reports_2021-06-30:getReports": false;
  "reports_2021-06-30:createReport": false;
  "reports_2021-06-30:cancelReport": false;
  "reports_2021-06-30:getReport": false;
  "reports_2021-06-30:getReportSchedules": true;
  "reports_2021-06-30:createReportSchedule": false;
  "reports_2021-06-30:cancelReportSchedule": false;
  "reports_2021-06-30:getReportSchedule": false;
  "reports_2021-06-30:getReportDocument": false;
  "sales:getOrderMetrics": true;
  "sellerWallet_2024-03-01:listAccounts": true;
  "sellerWallet_2024-03-01:getAccount": true;
  "sellerWallet_2024-03-01:listAccountBalances": true;
  "sellerWallet_2024-03-01:getTransferPreview": true;
  "sellerWallet_2024-03-01:listAccountTransactions": true;
  "sellerWallet_2024-03-01:createTransaction": true;
  "sellerWallet_2024-03-01:getTransaction": true;
  "sellerWallet_2024-03-01:listTransferSchedules": true;
  "sellerWallet_2024-03-01:createTransferSchedule": true;
  "sellerWallet_2024-03-01:updateTransferSchedule": true;
  "sellerWallet_2024-03-01:getTransferSchedule": true;
  "sellerWallet_2024-03-01:deleteScheduleTransaction": true;
  "sellers:getMarketplaceParticipations": false;
  "sellers:getAccount": false;
  "services:getServiceJobByServiceJobId": false;
  "services:cancelServiceJobByServiceJobId": true;
  "services:completeServiceJobByServiceJobId": false;
  "services:getServiceJobs": true;
  "services:addAppointmentForServiceJobByServiceJobId": false;
  "services:rescheduleAppointmentForServiceJobByServiceJobId": false;
  "services:assignAppointmentResources": false;
  "services:setAppointmentFulfillmentData": false;
  "services:getRangeSlotCapacity": true;
  "services:getFixedSlotCapacity": true;
  "services:updateSchedule": true;
  "services:createReservation": true;
  "services:updateReservation": true;
  "services:cancelReservation": true;
  "services:getAppointmmentSlotsByJobId": true;
  "services:getAppointmentSlots": true;
  "services:createServiceDocumentUploadDestination": false;
  "shipmentInvoicingV0:getShipmentDetails": false;
  "shipmentInvoicingV0:submitInvoice": false;
  "shipmentInvoicingV0:getInvoiceStatus": false;
  "shipping:createShipment": false;
  "shipping:getShipment": false;
  "shipping:cancelShipment": false;
  "shipping:purchaseLabels": false;
  "shipping:retrieveShippingLabel": false;
  "shipping:purchaseShipment": false;
  "shipping:getRates": false;
  "shipping:getAccount": false;
  "shipping:getTrackingInformation": false;
  "shippingV2:getRates": false;
  "shippingV2:directPurchaseShipment": false;
  "shippingV2:purchaseShipment": false;
  "shippingV2:oneClickShipment": false;
  "shippingV2:getTracking": true;
  "shippingV2:getShipmentDocuments": true;
  "shippingV2:cancelShipment": false;
  "shippingV2:getAdditionalInputs": true;
  "shippingV2:getCarrierAccountFormInputs": false;
  "shippingV2:getCarrierAccounts": false;
  "shippingV2:linkCarrierAccount": false;
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": false;
  "shippingV2:unlinkCarrierAccount": false;
  "shippingV2:generateCollectionForm": false;
  "shippingV2:getCollectionFormHistory": false;
  "shippingV2:getUnmanifestedShipments": false;
  "shippingV2:getCollectionForm": false;
  "shippingV2:getAccessPoints": true;
  "shippingV2:submitNdrFeedback": false;
  "shippingV2:createClaim": false;
  "solicitations:getSolicitationActionsForOrder": true;
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": true;
  "supplySources_2020-07-01:getSupplySources": false;
  "supplySources_2020-07-01:createSupplySource": false;
  "supplySources_2020-07-01:getSupplySource": false;
  "supplySources_2020-07-01:updateSupplySource": false;
  "supplySources_2020-07-01:archiveSupplySource": false;
  "supplySources_2020-07-01:updateSupplySourceStatus": false;
  "tokens_2021-03-01:createRestrictedDataToken": false;
  "uploads_2020-11-01:createUploadDestinationForResource": true;
  "vehicles_2024-11-01:getVehicles": true;
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": false;
  "vendorDirectFulfillmentOrdersV1:getOrders": true;
  "vendorDirectFulfillmentOrdersV1:getOrder": false;
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": false;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": true;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": false;
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": false;
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": false;
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": false;
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": false;
  "vendorDirectFulfillmentShippingV1:getShippingLabels": true;
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": false;
  "vendorDirectFulfillmentShippingV1:getShippingLabel": false;
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": false;
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": false;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": true;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": false;
  "vendorDirectFulfillmentShippingV1:getPackingSlips": true;
  "vendorDirectFulfillmentShippingV1:getPackingSlip": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": true;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": false;
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": false;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": false;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": true;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": true;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": false;
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": false;
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": false;
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": false;
  "vendorInvoices:submitInvoices": false;
  "vendorOrders:getPurchaseOrders": false;
  "vendorOrders:getPurchaseOrder": false;
  "vendorOrders:submitAcknowledgement": false;
  "vendorOrders:getPurchaseOrdersStatus": false;
  "vendorShipments:SubmitShipmentConfirmations": false;
  "vendorShipments:SubmitShipments": false;
  "vendorShipments:GetShipmentDetails": false;
  "vendorShipments:GetShipmentLabels": false;
  "vendorTransactionStatus:getTransaction": false;
}

export interface AmazonFullApiOperationRequestBodyMap {
  "awd_2024-05-09:createInbound": AmazonFullApiSchemaInboundOrderCreationData;
  "awd_2024-05-09:getInbound": never;
  "awd_2024-05-09:updateInbound": AmazonFullApiSchemaInboundOrder;
  "awd_2024-05-09:cancelInbound": never;
  "awd_2024-05-09:confirmInbound": never;
  "awd_2024-05-09:getInboundShipment": never;
  "awd_2024-05-09:getInboundShipmentLabels": never;
  "awd_2024-05-09:getLabelPageTypes": never;
  "awd_2024-05-09:updateInboundShipmentTransportDetails": AmazonFullApiSchemaTransportationDetails;
  "awd_2024-05-09:checkInboundEligibility": AmazonFullApiSchemaInboundPackages;
  "awd_2024-05-09:listInboundShipments": never;
  "awd_2024-05-09:listInventory": never;
  "awd_2024-05-09:listOutbounds": never;
  "awd_2024-05-09:createOutbound": AmazonFullApiSchemaOutboundOrderCreationData;
  "awd_2024-05-09:getOutbound": never;
  "awd_2024-05-09:updateOutbound": AmazonFullApiSchemaOutboundOrder;
  "awd_2024-05-09:confirmOutbound": never;
  "awd_2024-05-09:listReplenishmentOrders": never;
  "awd_2024-05-09:createReplenishmentOrder": AmazonFullApiSchemaReplenishmentOrderCreationData;
  "awd_2024-05-09:getReplenishmentOrder": never;
  "awd_2024-05-09:confirmReplenishmentOrder": never;
  "aplusContent_2020-11-01:searchContentDocuments": never;
  "aplusContent_2020-11-01:createContentDocument": AmazonFullApiSchemaPostContentDocumentRequest;
  "aplusContent_2020-11-01:getContentDocument": never;
  "aplusContent_2020-11-01:updateContentDocument": AmazonFullApiSchemaPostContentDocumentRequest;
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": never;
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": AmazonFullApiSchemaPostContentDocumentAsinRelationsRequest;
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": AmazonFullApiSchemaPostContentDocumentRequest;
  "aplusContent_2020-11-01:searchContentPublishRecords": never;
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": never;
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": never;
  "appIntegrations-2024-04-01:createNotification": AmazonFullApiSchemaCreateNotificationRequest;
  "appIntegrations-2024-04-01:deleteNotifications": AmazonFullApiSchemaDeleteNotificationsRequest;
  "appIntegrations-2024-04-01:recordActionFeedback": AmazonFullApiSchemaRecordActionFeedbackRequest;
  "application_2023-11-30:rotateApplicationClientSecret": never;
  "catalogItemsV0:listCatalogCategories": never;
  "catalogItems_2020-12-01:searchCatalogItems": never;
  "catalogItems_2020-12-01:getCatalogItem": never;
  "catalogItems_2022-04-01:searchCatalogItems": never;
  "catalogItems_2022-04-01:getCatalogItem": never;
  "customerFeedback_2024-06-01:getItemReviewTopics": never;
  "customerFeedback_2024-06-01:getItemBrowseNode": never;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": never;
  "customerFeedback_2024-06-01:getItemReviewTrends": never;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": never;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": never;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": never;
  "dataKiosk_2023-11-15:getQueries": never;
  "dataKiosk_2023-11-15:createQuery": AmazonFullApiSchemaCreateQuerySpecification;
  "dataKiosk_2023-11-15:cancelQuery": never;
  "dataKiosk_2023-11-15:getQuery": never;
  "dataKiosk_2023-11-15:getDocument": never;
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": AmazonFullApiSchemaSubmitInvoiceRequest;
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": never;
  "easyShip_2022-03-23:listHandoverSlots": AmazonFullApiSchemaListHandoverSlotsRequest;
  "easyShip_2022-03-23:getScheduledPackage": never;
  "easyShip_2022-03-23:createScheduledPackage": AmazonFullApiSchemaCreateScheduledPackageRequest;
  "easyShip_2022-03-23:updateScheduledPackages": AmazonFullApiSchemaUpdateScheduledPackagesRequest;
  "easyShip_2022-03-23:createScheduledPackageBulk": AmazonFullApiSchemaCreateScheduledPackagesRequest;
  "externalFulfillmentInventory_2024-09-11:batchInventory": AmazonFullApiSchemaBatchInventoryRequest;
  "externalFulfillmentReturns_2024-09-11:listReturns": never;
  "externalFulfillmentReturns_2024-09-11:getReturn": never;
  "externalFulfillmentShipments_2024-09-11:getShipments": never;
  "externalFulfillmentShipments_2024-09-11:getShipment": never;
  "externalFulfillmentShipments_2024-09-11:processShipment": AmazonFullApiSchemaShipmentAcknowledgementRequest;
  "externalFulfillmentShipments_2024-09-11:createPackages": AmazonFullApiSchemaPackages2;
  "externalFulfillmentShipments_2024-09-11:updatePackage": AmazonFullApiSchemaPackage2;
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": AmazonFullApiSchemaPackageDeliveryStatus;
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": never;
  "externalFulfillmentShipments_2024-09-11:generateInvoice": never;
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": never;
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": AmazonFullApiSchemaShipLabelsInput;
  "fbaInbound:getItemEligibilityPreview": never;
  "fbaInventory:getInventorySummaries": never;
  "fbaInventory:createInventoryItem": AmazonFullApiSchemaCreateInventoryItemRequest;
  "fbaInventory:deleteInventoryItem": never;
  "fbaInventory:addInventory": AmazonFullApiSchemaAddInventoryRequest;
  "feeds_2021-06-30:getFeeds": never;
  "feeds_2021-06-30:createFeed": AmazonFullApiSchemaCreateFeedSpecification;
  "feeds_2021-06-30:cancelFeed": never;
  "feeds_2021-06-30:getFeed": never;
  "feeds_2021-06-30:createFeedDocument": AmazonFullApiSchemaCreateFeedDocumentSpecification;
  "feeds_2021-06-30:getFeedDocument": never;
  "financesV0:listFinancialEventGroups": never;
  "financesV0:listFinancialEventsByGroupId": never;
  "financesV0:listFinancialEventsByOrderId": never;
  "financesV0:listFinancialEvents": never;
  "finances_2024-06-19:listTransactions": never;
  "transfers_2024-06-01:initiatePayout": AmazonFullApiSchemaInitiatePayoutRequest;
  "transfers_2024-06-01:getPaymentMethods": never;
  "fulfillmentInboundV0:getPrepInstructions": never;
  "fulfillmentInboundV0:getLabels": never;
  "fulfillmentInboundV0:getBillOfLading": never;
  "fulfillmentInboundV0:getShipments": never;
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": never;
  "fulfillmentInboundV0:getShipmentItems": never;
  "fulfillmentInbound_2024-03-20:listInboundPlans": never;
  "fulfillmentInbound_2024-03-20:createInboundPlan": AmazonFullApiSchemaCreateInboundPlanRequest;
  "fulfillmentInbound_2024-03-20:getInboundPlan": never;
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": never;
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": never;
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": never;
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": AmazonFullApiSchemaUpdateInboundPlanNameRequest;
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": never;
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": never;
  "fulfillmentInbound_2024-03-20:setPackingInformation": AmazonFullApiSchemaSetPackingInformationRequest;
  "fulfillmentInbound_2024-03-20:listPackingOptions": never;
  "fulfillmentInbound_2024-03-20:generatePackingOptions": never;
  "fulfillmentInbound_2024-03-20:confirmPackingOption": never;
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": never;
  "fulfillmentInbound_2024-03-20:listPlacementOptions": never;
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": AmazonFullApiSchemaGeneratePlacementOptionsRequest;
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": never;
  "fulfillmentInbound_2024-03-20:getShipment": never;
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": never;
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": never;
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": AmazonFullApiSchemaGenerateShipmentContentUpdatePreviewsRequest;
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": never;
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": never;
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": never;
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": never;
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": never;
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": never;
  "fulfillmentInbound_2024-03-20:listShipmentItems": never;
  "fulfillmentInbound_2024-03-20:updateShipmentName": AmazonFullApiSchemaUpdateShipmentNameRequest;
  "fulfillmentInbound_2024-03-20:listShipmentPallets": never;
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": AmazonFullApiSchemaCancelSelfShipAppointmentRequest;
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": never;
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": AmazonFullApiSchemaGenerateSelfShipAppointmentSlotsRequest;
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": AmazonFullApiSchemaScheduleSelfShipAppointmentRequest;
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": AmazonFullApiSchemaUpdateShipmentSourceAddressRequest;
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": AmazonFullApiSchemaUpdateShipmentTrackingDetailsRequest;
  "fulfillmentInbound_2024-03-20:listTransportationOptions": never;
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": AmazonFullApiSchemaGenerateTransportationOptionsRequest;
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": AmazonFullApiSchemaConfirmTransportationOptionsRequest;
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": never;
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": AmazonFullApiSchemaUpdateItemComplianceDetailsRequest;
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": AmazonFullApiSchemaCreateMarketplaceItemLabelsRequest;
  "fulfillmentInbound_2024-03-20:listPrepDetails": never;
  "fulfillmentInbound_2024-03-20:setPrepDetails": AmazonFullApiSchemaSetPrepDetailsRequest;
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": never;
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": AmazonFullApiSchemaGetFulfillmentPreviewRequest;
  "fulfillmentOutbound_2020-07-01:deliveryOffers": AmazonFullApiSchemaGetDeliveryOffersRequest;
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": never;
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": AmazonFullApiSchemaCreateFulfillmentOrderRequest;
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": never;
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": never;
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": AmazonFullApiSchemaCreateFulfillmentReturnRequest;
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": never;
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": AmazonFullApiSchemaUpdateFulfillmentOrderRequest;
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": never;
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": AmazonFullApiSchemaSubmitFulfillmentOrderStatusUpdateRequest;
  "fulfillmentOutbound_2020-07-01:getFeatures": never;
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": never;
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": never;
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": never;
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": never;
  "InvoicesApiModel_2024-06-19:createInvoicesExport": AmazonFullApiSchemaExportInvoicesRequest;
  "InvoicesApiModel_2024-06-19:getInvoicesExports": never;
  "InvoicesApiModel_2024-06-19:getInvoicesExport": never;
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": AmazonFullApiSchemaGovernmentInvoiceRequest;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": never;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": never;
  "InvoicesApiModel_2024-06-19:getInvoices": never;
  "InvoicesApiModel_2024-06-19:getInvoice": never;
  "listingsItems_2020-09-01:deleteListingsItem": never;
  "listingsItems_2020-09-01:patchListingsItem": AmazonFullApiSchemaListingsItemPatchRequest;
  "listingsItems_2020-09-01:putListingsItem": AmazonFullApiSchemaListingsItemPutRequest;
  "listingsItems_2021-08-01:deleteListingsItem": never;
  "listingsItems_2021-08-01:getListingsItem": never;
  "listingsItems_2021-08-01:patchListingsItem": AmazonFullApiSchemaListingsItemPatchRequest2;
  "listingsItems_2021-08-01:putListingsItem": AmazonFullApiSchemaListingsItemPutRequest2;
  "listingsItems_2021-08-01:searchListingsItems": never;
  "listingsRestrictions_2021-08-01:getListingsRestrictions": never;
  "merchantFulfillmentV0:getEligibleShipmentServices": AmazonFullApiSchemaGetEligibleShipmentServicesRequest;
  "merchantFulfillmentV0:getShipment": never;
  "merchantFulfillmentV0:cancelShipment": never;
  "merchantFulfillmentV0:createShipment": AmazonFullApiSchemaCreateShipmentRequest;
  "merchantFulfillmentV0:getAdditionalSellerInputs": AmazonFullApiSchemaGetAdditionalSellerInputsRequest;
  "messaging:getMessagingActionsForOrder": never;
  "messaging:confirmCustomizationDetails": AmazonFullApiSchemaCreateConfirmCustomizationDetailsRequest;
  "messaging:createConfirmDeliveryDetails": AmazonFullApiSchemaCreateConfirmDeliveryDetailsRequest;
  "messaging:createLegalDisclosure": AmazonFullApiSchemaCreateLegalDisclosureRequest;
  "messaging:createConfirmOrderDetails": AmazonFullApiSchemaCreateConfirmOrderDetailsRequest;
  "messaging:createConfirmServiceDetails": AmazonFullApiSchemaCreateConfirmServiceDetailsRequest;
  "messaging:CreateWarranty": AmazonFullApiSchemaCreateWarrantyRequest;
  "messaging:GetAttributes": never;
  "messaging:createDigitalAccessKey": AmazonFullApiSchemaCreateDigitalAccessKeyRequest;
  "messaging:createUnexpectedProblem": AmazonFullApiSchemaCreateUnexpectedProblemRequest;
  "messaging:sendInvoice": AmazonFullApiSchemaInvoiceRequest;
  "notifications:getSubscription": never;
  "notifications:createSubscription": AmazonFullApiSchemaCreateSubscriptionRequest;
  "notifications:getSubscriptionById": never;
  "notifications:deleteSubscriptionById": never;
  "notifications:sendTestNotification": AmazonFullApiSchemaSendTestNotificationRequest;
  "notifications:getDestinations": never;
  "notifications:createDestination": AmazonFullApiSchemaCreateDestinationRequest;
  "notifications:getDestination": never;
  "notifications:deleteDestination": never;
  "ordersV0:getOrders": never;
  "ordersV0:getOrder": never;
  "ordersV0:getOrderBuyerInfo": never;
  "ordersV0:getOrderAddress": never;
  "ordersV0:getOrderItems": never;
  "ordersV0:getOrderItemsBuyerInfo": never;
  "ordersV0:updateShipmentStatus": AmazonFullApiSchemaUpdateShipmentStatusRequest;
  "ordersV0:getOrderRegulatedInfo": never;
  "ordersV0:updateVerificationStatus": AmazonFullApiSchemaUpdateVerificationStatusRequest;
  "ordersV0:confirmShipment": AmazonFullApiSchemaConfirmShipmentRequest;
  "orders_2026-01-01:searchOrders": never;
  "orders_2026-01-01:getOrder": never;
  "productFeesV0:getMyFeesEstimateForSKU": AmazonFullApiSchemaGetMyFeesEstimateRequest;
  "productFeesV0:getMyFeesEstimateForASIN": AmazonFullApiSchemaGetMyFeesEstimateRequest;
  "productFeesV0:getMyFeesEstimates": AmazonFullApiSchemaGetMyFeesEstimatesRequest;
  "productPricingV0:getPricing": never;
  "productPricingV0:getCompetitivePricing": never;
  "productPricingV0:getListingOffers": never;
  "productPricingV0:getItemOffers": never;
  "productPricingV0:getItemOffersBatch": AmazonFullApiSchemaGetItemOffersBatchRequest;
  "productPricingV0:getListingOffersBatch": AmazonFullApiSchemaGetListingOffersBatchRequest;
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": AmazonFullApiSchemaGetFeaturedOfferExpectedPriceBatchRequest;
  "productPricing_2022-05-01:getCompetitiveSummary": AmazonFullApiSchemaCompetitiveSummaryBatchRequest;
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": never;
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": never;
  "replenishment-2022-11-07:getSellingPartnerMetrics": AmazonFullApiSchemaGetSellingPartnerMetricsRequest;
  "replenishment-2022-11-07:listOfferMetrics": AmazonFullApiSchemaListOfferMetricsRequest;
  "replenishment-2022-11-07:listOffers": AmazonFullApiSchemaListOffersRequest;
  "reports_2021-06-30:getReports": never;
  "reports_2021-06-30:createReport": AmazonFullApiSchemaCreateReportSpecification;
  "reports_2021-06-30:cancelReport": never;
  "reports_2021-06-30:getReport": never;
  "reports_2021-06-30:getReportSchedules": never;
  "reports_2021-06-30:createReportSchedule": AmazonFullApiSchemaCreateReportScheduleSpecification;
  "reports_2021-06-30:cancelReportSchedule": never;
  "reports_2021-06-30:getReportSchedule": never;
  "reports_2021-06-30:getReportDocument": never;
  "sales:getOrderMetrics": never;
  "sellerWallet_2024-03-01:listAccounts": never;
  "sellerWallet_2024-03-01:getAccount": never;
  "sellerWallet_2024-03-01:listAccountBalances": never;
  "sellerWallet_2024-03-01:getTransferPreview": never;
  "sellerWallet_2024-03-01:listAccountTransactions": never;
  "sellerWallet_2024-03-01:createTransaction": AmazonFullApiSchemaTransactionInitiationRequest;
  "sellerWallet_2024-03-01:getTransaction": never;
  "sellerWallet_2024-03-01:listTransferSchedules": never;
  "sellerWallet_2024-03-01:createTransferSchedule": AmazonFullApiSchemaTransferScheduleRequest;
  "sellerWallet_2024-03-01:updateTransferSchedule": AmazonFullApiSchemaTransferSchedule;
  "sellerWallet_2024-03-01:getTransferSchedule": never;
  "sellerWallet_2024-03-01:deleteScheduleTransaction": never;
  "sellers:getMarketplaceParticipations": never;
  "sellers:getAccount": never;
  "services:getServiceJobByServiceJobId": never;
  "services:cancelServiceJobByServiceJobId": never;
  "services:completeServiceJobByServiceJobId": never;
  "services:getServiceJobs": never;
  "services:addAppointmentForServiceJobByServiceJobId": AmazonFullApiSchemaAddAppointmentRequest;
  "services:rescheduleAppointmentForServiceJobByServiceJobId": AmazonFullApiSchemaRescheduleAppointmentRequest;
  "services:assignAppointmentResources": AmazonFullApiSchemaAssignAppointmentResourcesRequest;
  "services:setAppointmentFulfillmentData": AmazonFullApiSchemaSetAppointmentFulfillmentDataRequest;
  "services:getRangeSlotCapacity": AmazonFullApiSchemaRangeSlotCapacityQuery;
  "services:getFixedSlotCapacity": AmazonFullApiSchemaFixedSlotCapacityQuery;
  "services:updateSchedule": AmazonFullApiSchemaUpdateScheduleRequest;
  "services:createReservation": AmazonFullApiSchemaCreateReservationRequest;
  "services:updateReservation": AmazonFullApiSchemaUpdateReservationRequest;
  "services:cancelReservation": never;
  "services:getAppointmmentSlotsByJobId": never;
  "services:getAppointmentSlots": never;
  "services:createServiceDocumentUploadDestination": AmazonFullApiSchemaServiceUploadDocument;
  "shipmentInvoicingV0:getShipmentDetails": never;
  "shipmentInvoicingV0:submitInvoice": AmazonFullApiSchemaSubmitInvoiceRequest2;
  "shipmentInvoicingV0:getInvoiceStatus": never;
  "shipping:createShipment": AmazonFullApiSchemaCreateShipmentRequest2;
  "shipping:getShipment": never;
  "shipping:cancelShipment": never;
  "shipping:purchaseLabels": AmazonFullApiSchemaPurchaseLabelsRequest;
  "shipping:retrieveShippingLabel": AmazonFullApiSchemaRetrieveShippingLabelRequest;
  "shipping:purchaseShipment": AmazonFullApiSchemaPurchaseShipmentRequest;
  "shipping:getRates": AmazonFullApiSchemaGetRatesRequest;
  "shipping:getAccount": never;
  "shipping:getTrackingInformation": never;
  "shippingV2:getRates": AmazonFullApiSchemaGetRatesRequest2;
  "shippingV2:directPurchaseShipment": AmazonFullApiSchemaDirectPurchaseRequest;
  "shippingV2:purchaseShipment": AmazonFullApiSchemaPurchaseShipmentRequest2;
  "shippingV2:oneClickShipment": AmazonFullApiSchemaOneClickShipmentRequest;
  "shippingV2:getTracking": never;
  "shippingV2:getShipmentDocuments": never;
  "shippingV2:cancelShipment": never;
  "shippingV2:getAdditionalInputs": never;
  "shippingV2:getCarrierAccountFormInputs": never;
  "shippingV2:getCarrierAccounts": AmazonFullApiSchemaGetCarrierAccountsRequest;
  "shippingV2:linkCarrierAccount": AmazonFullApiSchemaLinkCarrierAccountRequest;
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": AmazonFullApiSchemaLinkCarrierAccountRequest;
  "shippingV2:unlinkCarrierAccount": AmazonFullApiSchemaUnlinkCarrierAccountRequest;
  "shippingV2:generateCollectionForm": AmazonFullApiSchemaGenerateCollectionFormRequest;
  "shippingV2:getCollectionFormHistory": AmazonFullApiSchemaGetCollectionFormHistoryRequest;
  "shippingV2:getUnmanifestedShipments": AmazonFullApiSchemaGetUnmanifestedShipmentsRequest;
  "shippingV2:getCollectionForm": never;
  "shippingV2:getAccessPoints": never;
  "shippingV2:submitNdrFeedback": AmazonFullApiSchemaSubmitNdrFeedbackRequest;
  "shippingV2:createClaim": AmazonFullApiSchemaCreateClaimRequest;
  "solicitations:getSolicitationActionsForOrder": never;
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": never;
  "supplySources_2020-07-01:getSupplySources": never;
  "supplySources_2020-07-01:createSupplySource": AmazonFullApiSchemaCreateSupplySourceRequest;
  "supplySources_2020-07-01:getSupplySource": never;
  "supplySources_2020-07-01:updateSupplySource": AmazonFullApiSchemaUpdateSupplySourceRequest;
  "supplySources_2020-07-01:archiveSupplySource": never;
  "supplySources_2020-07-01:updateSupplySourceStatus": AmazonFullApiSchemaUpdateSupplySourceStatusRequest;
  "tokens_2021-03-01:createRestrictedDataToken": AmazonFullApiSchemaCreateRestrictedDataTokenRequest;
  "uploads_2020-11-01:createUploadDestinationForResource": never;
  "vehicles_2024-11-01:getVehicles": never;
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": AmazonFullApiSchemaSubmitInventoryUpdateRequest;
  "vendorDirectFulfillmentOrdersV1:getOrders": never;
  "vendorDirectFulfillmentOrdersV1:getOrder": never;
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": AmazonFullApiSchemaSubmitAcknowledgementRequest;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": never;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": never;
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": AmazonFullApiSchemaSubmitAcknowledgementRequest2;
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": AmazonFullApiSchemaSubmitInvoiceRequest3;
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": AmazonFullApiSchemaGenerateOrderScenarioRequest;
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": never;
  "vendorDirectFulfillmentShippingV1:getShippingLabels": never;
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": AmazonFullApiSchemaSubmitShippingLabelsRequest;
  "vendorDirectFulfillmentShippingV1:getShippingLabel": never;
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": AmazonFullApiSchemaSubmitShipmentConfirmationsRequest;
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": AmazonFullApiSchemaSubmitShipmentStatusUpdatesRequest;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": never;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": never;
  "vendorDirectFulfillmentShippingV1:getPackingSlips": never;
  "vendorDirectFulfillmentShippingV1:getPackingSlip": never;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": never;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": AmazonFullApiSchemaSubmitShippingLabelsRequest2;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": never;
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": AmazonFullApiSchemaCreateShippingLabelsRequest;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": AmazonFullApiSchemaSubmitShipmentConfirmationsRequest2;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": AmazonFullApiSchemaSubmitShipmentStatusUpdatesRequest2;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": never;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": never;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": never;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": never;
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": AmazonFullApiSchemaCreateContainerLabelRequest;
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": never;
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": never;
  "vendorInvoices:submitInvoices": AmazonFullApiSchemaSubmitInvoicesRequest;
  "vendorOrders:getPurchaseOrders": never;
  "vendorOrders:getPurchaseOrder": never;
  "vendorOrders:submitAcknowledgement": AmazonFullApiSchemaSubmitAcknowledgementRequest3;
  "vendorOrders:getPurchaseOrdersStatus": never;
  "vendorShipments:SubmitShipmentConfirmations": AmazonFullApiSchemaSubmitShipmentConfirmationsRequest3;
  "vendorShipments:SubmitShipments": AmazonFullApiSchemaSubmitShipments;
  "vendorShipments:GetShipmentDetails": never;
  "vendorShipments:GetShipmentLabels": never;
  "vendorTransactionStatus:getTransaction": never;
}

export interface AmazonFullApiOperationRequestBodyRequiredMap {
  "awd_2024-05-09:createInbound": true;
  "awd_2024-05-09:getInbound": false;
  "awd_2024-05-09:updateInbound": true;
  "awd_2024-05-09:cancelInbound": false;
  "awd_2024-05-09:confirmInbound": false;
  "awd_2024-05-09:getInboundShipment": false;
  "awd_2024-05-09:getInboundShipmentLabels": false;
  "awd_2024-05-09:getLabelPageTypes": false;
  "awd_2024-05-09:updateInboundShipmentTransportDetails": true;
  "awd_2024-05-09:checkInboundEligibility": true;
  "awd_2024-05-09:listInboundShipments": false;
  "awd_2024-05-09:listInventory": false;
  "awd_2024-05-09:listOutbounds": false;
  "awd_2024-05-09:createOutbound": true;
  "awd_2024-05-09:getOutbound": false;
  "awd_2024-05-09:updateOutbound": true;
  "awd_2024-05-09:confirmOutbound": false;
  "awd_2024-05-09:listReplenishmentOrders": false;
  "awd_2024-05-09:createReplenishmentOrder": true;
  "awd_2024-05-09:getReplenishmentOrder": false;
  "awd_2024-05-09:confirmReplenishmentOrder": false;
  "aplusContent_2020-11-01:searchContentDocuments": false;
  "aplusContent_2020-11-01:createContentDocument": true;
  "aplusContent_2020-11-01:getContentDocument": false;
  "aplusContent_2020-11-01:updateContentDocument": true;
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": false;
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": true;
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": true;
  "aplusContent_2020-11-01:searchContentPublishRecords": false;
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": false;
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": false;
  "appIntegrations-2024-04-01:createNotification": true;
  "appIntegrations-2024-04-01:deleteNotifications": true;
  "appIntegrations-2024-04-01:recordActionFeedback": true;
  "application_2023-11-30:rotateApplicationClientSecret": false;
  "catalogItemsV0:listCatalogCategories": false;
  "catalogItems_2020-12-01:searchCatalogItems": false;
  "catalogItems_2020-12-01:getCatalogItem": false;
  "catalogItems_2022-04-01:searchCatalogItems": false;
  "catalogItems_2022-04-01:getCatalogItem": false;
  "customerFeedback_2024-06-01:getItemReviewTopics": false;
  "customerFeedback_2024-06-01:getItemBrowseNode": false;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": false;
  "customerFeedback_2024-06-01:getItemReviewTrends": false;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": false;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": false;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": false;
  "dataKiosk_2023-11-15:getQueries": false;
  "dataKiosk_2023-11-15:createQuery": true;
  "dataKiosk_2023-11-15:cancelQuery": false;
  "dataKiosk_2023-11-15:getQuery": false;
  "dataKiosk_2023-11-15:getDocument": false;
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": true;
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": false;
  "easyShip_2022-03-23:listHandoverSlots": false;
  "easyShip_2022-03-23:getScheduledPackage": false;
  "easyShip_2022-03-23:createScheduledPackage": true;
  "easyShip_2022-03-23:updateScheduledPackages": false;
  "easyShip_2022-03-23:createScheduledPackageBulk": true;
  "externalFulfillmentInventory_2024-09-11:batchInventory": true;
  "externalFulfillmentReturns_2024-09-11:listReturns": false;
  "externalFulfillmentReturns_2024-09-11:getReturn": false;
  "externalFulfillmentShipments_2024-09-11:getShipments": false;
  "externalFulfillmentShipments_2024-09-11:getShipment": false;
  "externalFulfillmentShipments_2024-09-11:processShipment": false;
  "externalFulfillmentShipments_2024-09-11:createPackages": true;
  "externalFulfillmentShipments_2024-09-11:updatePackage": true;
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": false;
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": false;
  "externalFulfillmentShipments_2024-09-11:generateInvoice": false;
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": false;
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": false;
  "fbaInbound:getItemEligibilityPreview": false;
  "fbaInventory:getInventorySummaries": false;
  "fbaInventory:createInventoryItem": true;
  "fbaInventory:deleteInventoryItem": false;
  "fbaInventory:addInventory": true;
  "feeds_2021-06-30:getFeeds": false;
  "feeds_2021-06-30:createFeed": true;
  "feeds_2021-06-30:cancelFeed": false;
  "feeds_2021-06-30:getFeed": false;
  "feeds_2021-06-30:createFeedDocument": true;
  "feeds_2021-06-30:getFeedDocument": false;
  "financesV0:listFinancialEventGroups": false;
  "financesV0:listFinancialEventsByGroupId": false;
  "financesV0:listFinancialEventsByOrderId": false;
  "financesV0:listFinancialEvents": false;
  "finances_2024-06-19:listTransactions": false;
  "transfers_2024-06-01:initiatePayout": true;
  "transfers_2024-06-01:getPaymentMethods": false;
  "fulfillmentInboundV0:getPrepInstructions": false;
  "fulfillmentInboundV0:getLabels": false;
  "fulfillmentInboundV0:getBillOfLading": false;
  "fulfillmentInboundV0:getShipments": false;
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": false;
  "fulfillmentInboundV0:getShipmentItems": false;
  "fulfillmentInbound_2024-03-20:listInboundPlans": false;
  "fulfillmentInbound_2024-03-20:createInboundPlan": true;
  "fulfillmentInbound_2024-03-20:getInboundPlan": false;
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": false;
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": false;
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": false;
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": true;
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": false;
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": false;
  "fulfillmentInbound_2024-03-20:setPackingInformation": true;
  "fulfillmentInbound_2024-03-20:listPackingOptions": false;
  "fulfillmentInbound_2024-03-20:generatePackingOptions": false;
  "fulfillmentInbound_2024-03-20:confirmPackingOption": false;
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": false;
  "fulfillmentInbound_2024-03-20:listPlacementOptions": false;
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": true;
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": false;
  "fulfillmentInbound_2024-03-20:getShipment": false;
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": false;
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": false;
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": true;
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": false;
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": false;
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": false;
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": false;
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": false;
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": false;
  "fulfillmentInbound_2024-03-20:listShipmentItems": false;
  "fulfillmentInbound_2024-03-20:updateShipmentName": true;
  "fulfillmentInbound_2024-03-20:listShipmentPallets": false;
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": true;
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": false;
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": true;
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": true;
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": true;
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": true;
  "fulfillmentInbound_2024-03-20:listTransportationOptions": false;
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": true;
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": true;
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": false;
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": true;
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": true;
  "fulfillmentInbound_2024-03-20:listPrepDetails": false;
  "fulfillmentInbound_2024-03-20:setPrepDetails": true;
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": false;
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": true;
  "fulfillmentOutbound_2020-07-01:deliveryOffers": true;
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": false;
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": true;
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": false;
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": false;
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": true;
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": false;
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": true;
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": false;
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": true;
  "fulfillmentOutbound_2020-07-01:getFeatures": false;
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": false;
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": false;
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": false;
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": false;
  "InvoicesApiModel_2024-06-19:createInvoicesExport": true;
  "InvoicesApiModel_2024-06-19:getInvoicesExports": false;
  "InvoicesApiModel_2024-06-19:getInvoicesExport": false;
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": true;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": false;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": false;
  "InvoicesApiModel_2024-06-19:getInvoices": false;
  "InvoicesApiModel_2024-06-19:getInvoice": false;
  "listingsItems_2020-09-01:deleteListingsItem": false;
  "listingsItems_2020-09-01:patchListingsItem": true;
  "listingsItems_2020-09-01:putListingsItem": true;
  "listingsItems_2021-08-01:deleteListingsItem": false;
  "listingsItems_2021-08-01:getListingsItem": false;
  "listingsItems_2021-08-01:patchListingsItem": true;
  "listingsItems_2021-08-01:putListingsItem": true;
  "listingsItems_2021-08-01:searchListingsItems": false;
  "listingsRestrictions_2021-08-01:getListingsRestrictions": false;
  "merchantFulfillmentV0:getEligibleShipmentServices": true;
  "merchantFulfillmentV0:getShipment": false;
  "merchantFulfillmentV0:cancelShipment": false;
  "merchantFulfillmentV0:createShipment": true;
  "merchantFulfillmentV0:getAdditionalSellerInputs": true;
  "messaging:getMessagingActionsForOrder": false;
  "messaging:confirmCustomizationDetails": true;
  "messaging:createConfirmDeliveryDetails": true;
  "messaging:createLegalDisclosure": true;
  "messaging:createConfirmOrderDetails": true;
  "messaging:createConfirmServiceDetails": true;
  "messaging:CreateWarranty": true;
  "messaging:GetAttributes": false;
  "messaging:createDigitalAccessKey": true;
  "messaging:createUnexpectedProblem": true;
  "messaging:sendInvoice": true;
  "notifications:getSubscription": false;
  "notifications:createSubscription": true;
  "notifications:getSubscriptionById": false;
  "notifications:deleteSubscriptionById": false;
  "notifications:sendTestNotification": true;
  "notifications:getDestinations": false;
  "notifications:createDestination": true;
  "notifications:getDestination": false;
  "notifications:deleteDestination": false;
  "ordersV0:getOrders": false;
  "ordersV0:getOrder": false;
  "ordersV0:getOrderBuyerInfo": false;
  "ordersV0:getOrderAddress": false;
  "ordersV0:getOrderItems": false;
  "ordersV0:getOrderItemsBuyerInfo": false;
  "ordersV0:updateShipmentStatus": true;
  "ordersV0:getOrderRegulatedInfo": false;
  "ordersV0:updateVerificationStatus": true;
  "ordersV0:confirmShipment": true;
  "orders_2026-01-01:searchOrders": false;
  "orders_2026-01-01:getOrder": false;
  "productFeesV0:getMyFeesEstimateForSKU": true;
  "productFeesV0:getMyFeesEstimateForASIN": true;
  "productFeesV0:getMyFeesEstimates": true;
  "productPricingV0:getPricing": false;
  "productPricingV0:getCompetitivePricing": false;
  "productPricingV0:getListingOffers": false;
  "productPricingV0:getItemOffers": false;
  "productPricingV0:getItemOffersBatch": true;
  "productPricingV0:getListingOffersBatch": true;
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": true;
  "productPricing_2022-05-01:getCompetitiveSummary": true;
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": false;
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": false;
  "replenishment-2022-11-07:getSellingPartnerMetrics": false;
  "replenishment-2022-11-07:listOfferMetrics": false;
  "replenishment-2022-11-07:listOffers": false;
  "reports_2021-06-30:getReports": false;
  "reports_2021-06-30:createReport": true;
  "reports_2021-06-30:cancelReport": false;
  "reports_2021-06-30:getReport": false;
  "reports_2021-06-30:getReportSchedules": false;
  "reports_2021-06-30:createReportSchedule": true;
  "reports_2021-06-30:cancelReportSchedule": false;
  "reports_2021-06-30:getReportSchedule": false;
  "reports_2021-06-30:getReportDocument": false;
  "sales:getOrderMetrics": false;
  "sellerWallet_2024-03-01:listAccounts": false;
  "sellerWallet_2024-03-01:getAccount": false;
  "sellerWallet_2024-03-01:listAccountBalances": false;
  "sellerWallet_2024-03-01:getTransferPreview": false;
  "sellerWallet_2024-03-01:listAccountTransactions": false;
  "sellerWallet_2024-03-01:createTransaction": true;
  "sellerWallet_2024-03-01:getTransaction": false;
  "sellerWallet_2024-03-01:listTransferSchedules": false;
  "sellerWallet_2024-03-01:createTransferSchedule": true;
  "sellerWallet_2024-03-01:updateTransferSchedule": true;
  "sellerWallet_2024-03-01:getTransferSchedule": false;
  "sellerWallet_2024-03-01:deleteScheduleTransaction": false;
  "sellers:getMarketplaceParticipations": false;
  "sellers:getAccount": false;
  "services:getServiceJobByServiceJobId": false;
  "services:cancelServiceJobByServiceJobId": false;
  "services:completeServiceJobByServiceJobId": false;
  "services:getServiceJobs": false;
  "services:addAppointmentForServiceJobByServiceJobId": true;
  "services:rescheduleAppointmentForServiceJobByServiceJobId": true;
  "services:assignAppointmentResources": true;
  "services:setAppointmentFulfillmentData": true;
  "services:getRangeSlotCapacity": true;
  "services:getFixedSlotCapacity": true;
  "services:updateSchedule": true;
  "services:createReservation": true;
  "services:updateReservation": true;
  "services:cancelReservation": false;
  "services:getAppointmmentSlotsByJobId": false;
  "services:getAppointmentSlots": false;
  "services:createServiceDocumentUploadDestination": true;
  "shipmentInvoicingV0:getShipmentDetails": false;
  "shipmentInvoicingV0:submitInvoice": true;
  "shipmentInvoicingV0:getInvoiceStatus": false;
  "shipping:createShipment": true;
  "shipping:getShipment": false;
  "shipping:cancelShipment": false;
  "shipping:purchaseLabels": true;
  "shipping:retrieveShippingLabel": true;
  "shipping:purchaseShipment": true;
  "shipping:getRates": true;
  "shipping:getAccount": false;
  "shipping:getTrackingInformation": false;
  "shippingV2:getRates": true;
  "shippingV2:directPurchaseShipment": true;
  "shippingV2:purchaseShipment": true;
  "shippingV2:oneClickShipment": true;
  "shippingV2:getTracking": false;
  "shippingV2:getShipmentDocuments": false;
  "shippingV2:cancelShipment": false;
  "shippingV2:getAdditionalInputs": false;
  "shippingV2:getCarrierAccountFormInputs": false;
  "shippingV2:getCarrierAccounts": true;
  "shippingV2:linkCarrierAccount": true;
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": true;
  "shippingV2:unlinkCarrierAccount": true;
  "shippingV2:generateCollectionForm": true;
  "shippingV2:getCollectionFormHistory": true;
  "shippingV2:getUnmanifestedShipments": true;
  "shippingV2:getCollectionForm": false;
  "shippingV2:getAccessPoints": false;
  "shippingV2:submitNdrFeedback": true;
  "shippingV2:createClaim": true;
  "solicitations:getSolicitationActionsForOrder": false;
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": false;
  "supplySources_2020-07-01:getSupplySources": false;
  "supplySources_2020-07-01:createSupplySource": true;
  "supplySources_2020-07-01:getSupplySource": false;
  "supplySources_2020-07-01:updateSupplySource": false;
  "supplySources_2020-07-01:archiveSupplySource": false;
  "supplySources_2020-07-01:updateSupplySourceStatus": false;
  "tokens_2021-03-01:createRestrictedDataToken": true;
  "uploads_2020-11-01:createUploadDestinationForResource": false;
  "vehicles_2024-11-01:getVehicles": false;
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": true;
  "vendorDirectFulfillmentOrdersV1:getOrders": false;
  "vendorDirectFulfillmentOrdersV1:getOrder": false;
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": true;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": false;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": false;
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": true;
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": true;
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": true;
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": false;
  "vendorDirectFulfillmentShippingV1:getShippingLabels": false;
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": true;
  "vendorDirectFulfillmentShippingV1:getShippingLabel": false;
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": true;
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": true;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": false;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": false;
  "vendorDirectFulfillmentShippingV1:getPackingSlips": false;
  "vendorDirectFulfillmentShippingV1:getPackingSlip": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": false;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": true;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": false;
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": true;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": true;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": true;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": false;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": false;
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": true;
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": false;
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": false;
  "vendorInvoices:submitInvoices": true;
  "vendorOrders:getPurchaseOrders": false;
  "vendorOrders:getPurchaseOrder": false;
  "vendorOrders:submitAcknowledgement": true;
  "vendorOrders:getPurchaseOrdersStatus": false;
  "vendorShipments:SubmitShipmentConfirmations": true;
  "vendorShipments:SubmitShipments": true;
  "vendorShipments:GetShipmentDetails": false;
  "vendorShipments:GetShipmentLabels": false;
  "vendorTransactionStatus:getTransaction": false;
}

export interface AmazonFullApiOperationResponseMap {
  "awd_2024-05-09:createInbound": AmazonFullApiSchemaInboundOrderReference;
  "awd_2024-05-09:getInbound": AmazonFullApiSchemaInboundOrder;
  "awd_2024-05-09:updateInbound": AmazonFullApiSchemaErrorList;
  "awd_2024-05-09:cancelInbound": AmazonFullApiSchemaErrorList;
  "awd_2024-05-09:confirmInbound": AmazonFullApiSchemaErrorList;
  "awd_2024-05-09:getInboundShipment": AmazonFullApiSchemaInboundShipment;
  "awd_2024-05-09:getInboundShipmentLabels": AmazonFullApiSchemaShipmentLabels;
  "awd_2024-05-09:getLabelPageTypes": AmazonFullApiSchemaShipmentLabelPageTypes;
  "awd_2024-05-09:updateInboundShipmentTransportDetails": AmazonFullApiSchemaErrorList;
  "awd_2024-05-09:checkInboundEligibility": AmazonFullApiSchemaInboundEligibility;
  "awd_2024-05-09:listInboundShipments": AmazonFullApiSchemaShipmentListing;
  "awd_2024-05-09:listInventory": AmazonFullApiSchemaInventoryListing;
  "awd_2024-05-09:listOutbounds": AmazonFullApiSchemaOutboundListing;
  "awd_2024-05-09:createOutbound": AmazonFullApiSchemaOutboundOrderReference;
  "awd_2024-05-09:getOutbound": AmazonFullApiSchemaOutboundOrder;
  "awd_2024-05-09:updateOutbound": AmazonFullApiSchemaOutboundOrderReference;
  "awd_2024-05-09:confirmOutbound": AmazonFullApiSchemaErrorList;
  "awd_2024-05-09:listReplenishmentOrders": AmazonFullApiSchemaReplenishmentOrderListing;
  "awd_2024-05-09:createReplenishmentOrder": AmazonFullApiSchemaReplenishmentOrderReference;
  "awd_2024-05-09:getReplenishmentOrder": AmazonFullApiSchemaReplenishmentOrder;
  "awd_2024-05-09:confirmReplenishmentOrder": AmazonFullApiSchemaErrorList;
  "aplusContent_2020-11-01:searchContentDocuments": AmazonFullApiSchemaSearchContentDocumentsResponse;
  "aplusContent_2020-11-01:createContentDocument": AmazonFullApiSchemaPostContentDocumentResponse;
  "aplusContent_2020-11-01:getContentDocument": AmazonFullApiSchemaGetContentDocumentResponse;
  "aplusContent_2020-11-01:updateContentDocument": AmazonFullApiSchemaPostContentDocumentResponse;
  "aplusContent_2020-11-01:listContentDocumentAsinRelations": AmazonFullApiSchemaListContentDocumentAsinRelationsResponse;
  "aplusContent_2020-11-01:postContentDocumentAsinRelations": AmazonFullApiSchemaPostContentDocumentAsinRelationsResponse;
  "aplusContent_2020-11-01:validateContentDocumentAsinRelations": AmazonFullApiSchemaValidateContentDocumentAsinRelationsResponse;
  "aplusContent_2020-11-01:searchContentPublishRecords": AmazonFullApiSchemaSearchContentPublishRecordsResponse;
  "aplusContent_2020-11-01:postContentDocumentApprovalSubmission": AmazonFullApiSchemaPostContentDocumentApprovalSubmissionResponse;
  "aplusContent_2020-11-01:postContentDocumentSuspendSubmission": AmazonFullApiSchemaPostContentDocumentSuspendSubmissionResponse;
  "appIntegrations-2024-04-01:createNotification": AmazonFullApiSchemaCreateNotificationResponse;
  "appIntegrations-2024-04-01:deleteNotifications": AmazonFullApiSchemaErrorList2;
  "appIntegrations-2024-04-01:recordActionFeedback": AmazonFullApiSchemaErrorList2;
  "application_2023-11-30:rotateApplicationClientSecret": AmazonFullApiSchemaErrorList3;
  "catalogItemsV0:listCatalogCategories": AmazonFullApiSchemaListCatalogCategoriesResponse;
  "catalogItems_2020-12-01:searchCatalogItems": AmazonFullApiSchemaItemSearchResults;
  "catalogItems_2020-12-01:getCatalogItem": AmazonFullApiSchemaItem;
  "catalogItems_2022-04-01:searchCatalogItems": AmazonFullApiSchemaItemSearchResults2;
  "catalogItems_2022-04-01:getCatalogItem": AmazonFullApiSchemaItem2;
  "customerFeedback_2024-06-01:getItemReviewTopics": AmazonFullApiSchemaItemReviewTopicsResponse;
  "customerFeedback_2024-06-01:getItemBrowseNode": AmazonFullApiSchemaBrowseNodeResponse;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTopics": AmazonFullApiSchemaBrowseNodeReviewTopicsResponse;
  "customerFeedback_2024-06-01:getItemReviewTrends": AmazonFullApiSchemaItemReviewTrendsResponse;
  "customerFeedback_2024-06-01:getBrowseNodeReviewTrends": AmazonFullApiSchemaBrowseNodeReviewTrendsResponse;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTopics": AmazonFullApiSchemaBrowseNodeReturnTopicsResponse;
  "customerFeedback_2024-06-01:getBrowseNodeReturnTrends": AmazonFullApiSchemaBrowseNodeReturnTrendsResponse;
  "dataKiosk_2023-11-15:getQueries": AmazonFullApiSchemaGetQueriesResponse;
  "dataKiosk_2023-11-15:createQuery": AmazonFullApiSchemaCreateQueryResponse;
  "dataKiosk_2023-11-15:cancelQuery": AmazonFullApiSchemaErrorList4;
  "dataKiosk_2023-11-15:getQuery": AmazonFullApiSchemaQuery;
  "dataKiosk_2023-11-15:getDocument": AmazonFullApiSchemaGetDocumentResponse;
  "deliveryShipmentInvoiceV2022-07-01:submitInvoice": AmazonFullApiSchemaSubmitInvoiceResponse;
  "deliveryShipmentInvoiceV2022-07-01:getInvoiceStatus": AmazonFullApiSchemaGetInvoiceStatusResponse;
  "easyShip_2022-03-23:listHandoverSlots": AmazonFullApiSchemaListHandoverSlotsResponse;
  "easyShip_2022-03-23:getScheduledPackage": AmazonFullApiSchemaPackage;
  "easyShip_2022-03-23:createScheduledPackage": AmazonFullApiSchemaPackage;
  "easyShip_2022-03-23:updateScheduledPackages": AmazonFullApiSchemaPackages;
  "easyShip_2022-03-23:createScheduledPackageBulk": AmazonFullApiSchemaCreateScheduledPackagesResponse;
  "externalFulfillmentInventory_2024-09-11:batchInventory": AmazonFullApiSchemaBatchInventoryResponse;
  "externalFulfillmentReturns_2024-09-11:listReturns": AmazonFullApiSchemaReturnsResponse;
  "externalFulfillmentReturns_2024-09-11:getReturn": AmazonFullApiSchemaReturn;
  "externalFulfillmentShipments_2024-09-11:getShipments": AmazonFullApiSchemaShipmentsResponse;
  "externalFulfillmentShipments_2024-09-11:getShipment": AmazonFullApiSchemaShipment;
  "externalFulfillmentShipments_2024-09-11:processShipment": AmazonFullApiSchemaErrorList5;
  "externalFulfillmentShipments_2024-09-11:createPackages": AmazonFullApiSchemaErrorList5;
  "externalFulfillmentShipments_2024-09-11:updatePackage": AmazonFullApiSchemaErrorList5;
  "externalFulfillmentShipments_2024-09-11:updatePackageStatus": AmazonFullApiSchemaErrorList5;
  "externalFulfillmentShipments_2024-09-11:retrieveShippingOptions": AmazonFullApiSchemaShippingOptionsResponse;
  "externalFulfillmentShipments_2024-09-11:generateInvoice": AmazonFullApiSchemaInvoiceResponse;
  "externalFulfillmentShipments_2024-09-11:retrieveInvoice": AmazonFullApiSchemaInvoiceResponse;
  "externalFulfillmentShipments_2024-09-11:generateShipLabels": AmazonFullApiSchemaShipLabelsResponse;
  "fbaInbound:getItemEligibilityPreview": AmazonFullApiSchemaGetItemEligibilityPreviewResponse;
  "fbaInventory:getInventorySummaries": AmazonFullApiSchemaGetInventorySummariesResponse;
  "fbaInventory:createInventoryItem": AmazonFullApiSchemaCreateInventoryItemResponse;
  "fbaInventory:deleteInventoryItem": AmazonFullApiSchemaDeleteInventoryItemResponse;
  "fbaInventory:addInventory": AmazonFullApiSchemaAddInventoryResponse;
  "feeds_2021-06-30:getFeeds": AmazonFullApiSchemaGetFeedsResponse;
  "feeds_2021-06-30:createFeed": AmazonFullApiSchemaCreateFeedResponse;
  "feeds_2021-06-30:cancelFeed": AmazonFullApiSchemaErrorList6;
  "feeds_2021-06-30:getFeed": AmazonFullApiSchemaFeed;
  "feeds_2021-06-30:createFeedDocument": AmazonFullApiSchemaCreateFeedDocumentResponse;
  "feeds_2021-06-30:getFeedDocument": AmazonFullApiSchemaFeedDocument;
  "financesV0:listFinancialEventGroups": AmazonFullApiSchemaListFinancialEventGroupsResponse;
  "financesV0:listFinancialEventsByGroupId": AmazonFullApiSchemaListFinancialEventsResponse;
  "financesV0:listFinancialEventsByOrderId": AmazonFullApiSchemaListFinancialEventsResponse;
  "financesV0:listFinancialEvents": AmazonFullApiSchemaListFinancialEventsResponse;
  "finances_2024-06-19:listTransactions": AmazonFullApiSchemaListTransactionsResponse;
  "transfers_2024-06-01:initiatePayout": AmazonFullApiSchemaInitiatePayoutResponse;
  "transfers_2024-06-01:getPaymentMethods": AmazonFullApiSchemaGetPaymentMethodsResponse;
  "fulfillmentInboundV0:getPrepInstructions": AmazonFullApiSchemaGetPrepInstructionsResponse;
  "fulfillmentInboundV0:getLabels": AmazonFullApiSchemaGetLabelsResponse;
  "fulfillmentInboundV0:getBillOfLading": AmazonFullApiSchemaGetBillOfLadingResponse;
  "fulfillmentInboundV0:getShipments": AmazonFullApiSchemaGetShipmentsResponse;
  "fulfillmentInboundV0:getShipmentItemsByShipmentId": AmazonFullApiSchemaGetShipmentItemsResponse;
  "fulfillmentInboundV0:getShipmentItems": AmazonFullApiSchemaGetShipmentItemsResponse;
  "fulfillmentInbound_2024-03-20:listInboundPlans": AmazonFullApiSchemaListInboundPlansResponse;
  "fulfillmentInbound_2024-03-20:createInboundPlan": AmazonFullApiSchemaCreateInboundPlanResponse;
  "fulfillmentInbound_2024-03-20:getInboundPlan": AmazonFullApiSchemaInboundPlan;
  "fulfillmentInbound_2024-03-20:listInboundPlanBoxes": AmazonFullApiSchemaListInboundPlanBoxesResponse;
  "fulfillmentInbound_2024-03-20:cancelInboundPlan": AmazonFullApiSchemaCancelInboundPlanResponse;
  "fulfillmentInbound_2024-03-20:listInboundPlanItems": AmazonFullApiSchemaListInboundPlanItemsResponse;
  "fulfillmentInbound_2024-03-20:updateInboundPlanName": AmazonFullApiSchemaErrorList7;
  "fulfillmentInbound_2024-03-20:listPackingGroupBoxes": AmazonFullApiSchemaListPackingGroupBoxesResponse;
  "fulfillmentInbound_2024-03-20:listPackingGroupItems": AmazonFullApiSchemaListPackingGroupItemsResponse;
  "fulfillmentInbound_2024-03-20:setPackingInformation": AmazonFullApiSchemaSetPackingInformationResponse;
  "fulfillmentInbound_2024-03-20:listPackingOptions": AmazonFullApiSchemaListPackingOptionsResponse;
  "fulfillmentInbound_2024-03-20:generatePackingOptions": AmazonFullApiSchemaGeneratePackingOptionsResponse;
  "fulfillmentInbound_2024-03-20:confirmPackingOption": AmazonFullApiSchemaConfirmPackingOptionResponse;
  "fulfillmentInbound_2024-03-20:listInboundPlanPallets": AmazonFullApiSchemaListInboundPlanPalletsResponse;
  "fulfillmentInbound_2024-03-20:listPlacementOptions": AmazonFullApiSchemaListPlacementOptionsResponse;
  "fulfillmentInbound_2024-03-20:generatePlacementOptions": AmazonFullApiSchemaGeneratePlacementOptionsResponse;
  "fulfillmentInbound_2024-03-20:confirmPlacementOption": AmazonFullApiSchemaConfirmPlacementOptionResponse;
  "fulfillmentInbound_2024-03-20:getShipment": AmazonFullApiSchemaShipment2;
  "fulfillmentInbound_2024-03-20:listShipmentBoxes": AmazonFullApiSchemaListShipmentBoxesResponse;
  "fulfillmentInbound_2024-03-20:listShipmentContentUpdatePreviews": AmazonFullApiSchemaListShipmentContentUpdatePreviewsResponse;
  "fulfillmentInbound_2024-03-20:generateShipmentContentUpdatePreviews": AmazonFullApiSchemaGenerateShipmentContentUpdatePreviewsResponse;
  "fulfillmentInbound_2024-03-20:getShipmentContentUpdatePreview": AmazonFullApiSchemaContentUpdatePreview;
  "fulfillmentInbound_2024-03-20:confirmShipmentContentUpdatePreview": AmazonFullApiSchemaConfirmShipmentContentUpdatePreviewResponse;
  "fulfillmentInbound_2024-03-20:getDeliveryChallanDocument": AmazonFullApiSchemaGetDeliveryChallanDocumentResponse;
  "fulfillmentInbound_2024-03-20:listDeliveryWindowOptions": AmazonFullApiSchemaListDeliveryWindowOptionsResponse;
  "fulfillmentInbound_2024-03-20:generateDeliveryWindowOptions": AmazonFullApiSchemaGenerateDeliveryWindowOptionsResponse;
  "fulfillmentInbound_2024-03-20:confirmDeliveryWindowOptions": AmazonFullApiSchemaConfirmDeliveryWindowOptionsResponse;
  "fulfillmentInbound_2024-03-20:listShipmentItems": AmazonFullApiSchemaListShipmentItemsResponse;
  "fulfillmentInbound_2024-03-20:updateShipmentName": AmazonFullApiSchemaErrorList7;
  "fulfillmentInbound_2024-03-20:listShipmentPallets": AmazonFullApiSchemaListShipmentPalletsResponse;
  "fulfillmentInbound_2024-03-20:cancelSelfShipAppointment": AmazonFullApiSchemaCancelSelfShipAppointmentResponse;
  "fulfillmentInbound_2024-03-20:getSelfShipAppointmentSlots": AmazonFullApiSchemaGetSelfShipAppointmentSlotsResponse;
  "fulfillmentInbound_2024-03-20:generateSelfShipAppointmentSlots": AmazonFullApiSchemaGenerateSelfShipAppointmentSlotsResponse;
  "fulfillmentInbound_2024-03-20:scheduleSelfShipAppointment": AmazonFullApiSchemaScheduleSelfShipAppointmentResponse;
  "fulfillmentInbound_2024-03-20:updateShipmentSourceAddress": AmazonFullApiSchemaUpdateShipmentSourceAddressResponse;
  "fulfillmentInbound_2024-03-20:updateShipmentTrackingDetails": AmazonFullApiSchemaUpdateShipmentTrackingDetailsResponse;
  "fulfillmentInbound_2024-03-20:listTransportationOptions": AmazonFullApiSchemaListTransportationOptionsResponse;
  "fulfillmentInbound_2024-03-20:generateTransportationOptions": AmazonFullApiSchemaGenerateTransportationOptionsResponse;
  "fulfillmentInbound_2024-03-20:confirmTransportationOptions": AmazonFullApiSchemaConfirmTransportationOptionsResponse;
  "fulfillmentInbound_2024-03-20:listItemComplianceDetails": AmazonFullApiSchemaListItemComplianceDetailsResponse;
  "fulfillmentInbound_2024-03-20:updateItemComplianceDetails": AmazonFullApiSchemaUpdateItemComplianceDetailsResponse;
  "fulfillmentInbound_2024-03-20:createMarketplaceItemLabels": AmazonFullApiSchemaCreateMarketplaceItemLabelsResponse;
  "fulfillmentInbound_2024-03-20:listPrepDetails": AmazonFullApiSchemaListPrepDetailsResponse;
  "fulfillmentInbound_2024-03-20:setPrepDetails": AmazonFullApiSchemaSetPrepDetailsResponse;
  "fulfillmentInbound_2024-03-20:getInboundOperationStatus": AmazonFullApiSchemaInboundOperationStatus;
  "fulfillmentOutbound_2020-07-01:getFulfillmentPreview": AmazonFullApiSchemaGetFulfillmentPreviewResponse;
  "fulfillmentOutbound_2020-07-01:deliveryOffers": AmazonFullApiSchemaGetDeliveryOffersResponse;
  "fulfillmentOutbound_2020-07-01:listAllFulfillmentOrders": AmazonFullApiSchemaListAllFulfillmentOrdersResponse;
  "fulfillmentOutbound_2020-07-01:createFulfillmentOrder": AmazonFullApiSchemaCreateFulfillmentOrderResponse;
  "fulfillmentOutbound_2020-07-01:getPackageTrackingDetails": AmazonFullApiSchemaGetPackageTrackingDetailsResponse;
  "fulfillmentOutbound_2020-07-01:listReturnReasonCodes": AmazonFullApiSchemaListReturnReasonCodesResponse;
  "fulfillmentOutbound_2020-07-01:createFulfillmentReturn": AmazonFullApiSchemaCreateFulfillmentReturnResponse;
  "fulfillmentOutbound_2020-07-01:getFulfillmentOrder": AmazonFullApiSchemaGetFulfillmentOrderResponse;
  "fulfillmentOutbound_2020-07-01:updateFulfillmentOrder": AmazonFullApiSchemaUpdateFulfillmentOrderResponse;
  "fulfillmentOutbound_2020-07-01:cancelFulfillmentOrder": AmazonFullApiSchemaCancelFulfillmentOrderResponse;
  "fulfillmentOutbound_2020-07-01:submitFulfillmentOrderStatusUpdate": AmazonFullApiSchemaSubmitFulfillmentOrderStatusUpdateResponse;
  "fulfillmentOutbound_2020-07-01:getFeatures": AmazonFullApiSchemaGetFeaturesResponse;
  "fulfillmentOutbound_2020-07-01:getFeatureInventory": AmazonFullApiSchemaGetFeatureInventoryResponse;
  "fulfillmentOutbound_2020-07-01:getFeatureSKU": AmazonFullApiSchemaGetFeatureSkuResponse;
  "InvoicesApiModel_2024-06-19:getInvoicesAttributes": AmazonFullApiSchemaGetInvoicesAttributesResponse;
  "InvoicesApiModel_2024-06-19:getInvoicesDocument": AmazonFullApiSchemaGetInvoicesDocumentResponse;
  "InvoicesApiModel_2024-06-19:createInvoicesExport": AmazonFullApiSchemaExportInvoicesResponse;
  "InvoicesApiModel_2024-06-19:getInvoicesExports": AmazonFullApiSchemaGetInvoicesExportsResponse;
  "InvoicesApiModel_2024-06-19:getInvoicesExport": AmazonFullApiSchemaGetInvoicesExportResponse;
  "InvoicesApiModel_2024-06-19:createGovernmentInvoice": AmazonFullApiSchemaErrorList8;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceStatus": AmazonFullApiSchemaGovernmentInvoiceStatusResponse;
  "InvoicesApiModel_2024-06-19:getGovernmentInvoiceDocument": AmazonFullApiSchemaGovtInvoiceDocumentResponse;
  "InvoicesApiModel_2024-06-19:getInvoices": AmazonFullApiSchemaGetInvoicesResponse;
  "InvoicesApiModel_2024-06-19:getInvoice": AmazonFullApiSchemaGetInvoiceResponse;
  "listingsItems_2020-09-01:deleteListingsItem": AmazonFullApiSchemaListingsItemSubmissionResponse;
  "listingsItems_2020-09-01:patchListingsItem": AmazonFullApiSchemaListingsItemSubmissionResponse;
  "listingsItems_2020-09-01:putListingsItem": AmazonFullApiSchemaListingsItemSubmissionResponse;
  "listingsItems_2021-08-01:deleteListingsItem": AmazonFullApiSchemaListingsItemSubmissionResponse2;
  "listingsItems_2021-08-01:getListingsItem": AmazonFullApiSchemaItem3;
  "listingsItems_2021-08-01:patchListingsItem": AmazonFullApiSchemaListingsItemSubmissionResponse2;
  "listingsItems_2021-08-01:putListingsItem": AmazonFullApiSchemaListingsItemSubmissionResponse2;
  "listingsItems_2021-08-01:searchListingsItems": AmazonFullApiSchemaItemSearchResults3;
  "listingsRestrictions_2021-08-01:getListingsRestrictions": AmazonFullApiSchemaRestrictionList;
  "merchantFulfillmentV0:getEligibleShipmentServices": AmazonFullApiSchemaGetEligibleShipmentServicesResponse;
  "merchantFulfillmentV0:getShipment": AmazonFullApiSchemaGetShipmentResponse;
  "merchantFulfillmentV0:cancelShipment": AmazonFullApiSchemaCancelShipmentResponse;
  "merchantFulfillmentV0:createShipment": AmazonFullApiSchemaCreateShipmentResponse;
  "merchantFulfillmentV0:getAdditionalSellerInputs": AmazonFullApiSchemaGetAdditionalSellerInputsResponse;
  "messaging:getMessagingActionsForOrder": AmazonFullApiSchemaGetMessagingActionsForOrderResponse;
  "messaging:confirmCustomizationDetails": AmazonFullApiSchemaCreateConfirmCustomizationDetailsResponse;
  "messaging:createConfirmDeliveryDetails": AmazonFullApiSchemaCreateConfirmDeliveryDetailsResponse;
  "messaging:createLegalDisclosure": AmazonFullApiSchemaCreateLegalDisclosureResponse;
  "messaging:createConfirmOrderDetails": AmazonFullApiSchemaCreateConfirmOrderDetailsResponse;
  "messaging:createConfirmServiceDetails": AmazonFullApiSchemaCreateConfirmServiceDetailsResponse;
  "messaging:CreateWarranty": AmazonFullApiSchemaCreateWarrantyResponse;
  "messaging:GetAttributes": AmazonFullApiSchemaGetAttributesResponse;
  "messaging:createDigitalAccessKey": AmazonFullApiSchemaCreateDigitalAccessKeyResponse;
  "messaging:createUnexpectedProblem": AmazonFullApiSchemaCreateUnexpectedProblemResponse;
  "messaging:sendInvoice": AmazonFullApiSchemaInvoiceResponse2;
  "notifications:getSubscription": AmazonFullApiSchemaGetSubscriptionResponse;
  "notifications:createSubscription": AmazonFullApiSchemaCreateSubscriptionResponse;
  "notifications:getSubscriptionById": AmazonFullApiSchemaGetSubscriptionByIdResponse;
  "notifications:deleteSubscriptionById": AmazonFullApiSchemaDeleteSubscriptionByIdResponse;
  "notifications:sendTestNotification": AmazonFullApiSchemaSendTestNotificationResponse;
  "notifications:getDestinations": AmazonFullApiSchemaGetDestinationsResponse;
  "notifications:createDestination": AmazonFullApiSchemaCreateDestinationResponse;
  "notifications:getDestination": AmazonFullApiSchemaGetDestinationResponse;
  "notifications:deleteDestination": AmazonFullApiSchemaDeleteDestinationResponse;
  "ordersV0:getOrders": AmazonFullApiSchemaGetOrdersResponse;
  "ordersV0:getOrder": AmazonFullApiSchemaGetOrderResponse;
  "ordersV0:getOrderBuyerInfo": AmazonFullApiSchemaGetOrderBuyerInfoResponse;
  "ordersV0:getOrderAddress": AmazonFullApiSchemaGetOrderAddressResponse;
  "ordersV0:getOrderItems": AmazonFullApiSchemaGetOrderItemsResponse;
  "ordersV0:getOrderItemsBuyerInfo": AmazonFullApiSchemaGetOrderItemsBuyerInfoResponse;
  "ordersV0:updateShipmentStatus": AmazonFullApiSchemaUpdateShipmentStatusErrorResponse;
  "ordersV0:getOrderRegulatedInfo": AmazonFullApiSchemaGetOrderRegulatedInfoResponse;
  "ordersV0:updateVerificationStatus": AmazonFullApiSchemaUpdateVerificationStatusErrorResponse;
  "ordersV0:confirmShipment": AmazonFullApiSchemaConfirmShipmentErrorResponse;
  "orders_2026-01-01:searchOrders": AmazonFullApiSchemaSearchOrdersResponse;
  "orders_2026-01-01:getOrder": AmazonFullApiSchemaGetOrderResponse2;
  "productFeesV0:getMyFeesEstimateForSKU": AmazonFullApiSchemaGetMyFeesEstimateResponse;
  "productFeesV0:getMyFeesEstimateForASIN": AmazonFullApiSchemaGetMyFeesEstimateResponse;
  "productFeesV0:getMyFeesEstimates": AmazonFullApiSchemaGetMyFeesEstimatesResponse;
  "productPricingV0:getPricing": AmazonFullApiSchemaGetPricingResponse;
  "productPricingV0:getCompetitivePricing": AmazonFullApiSchemaGetPricingResponse;
  "productPricingV0:getListingOffers": AmazonFullApiSchemaGetOffersResponse;
  "productPricingV0:getItemOffers": AmazonFullApiSchemaGetOffersResponse;
  "productPricingV0:getItemOffersBatch": AmazonFullApiSchemaGetItemOffersBatchResponse;
  "productPricingV0:getListingOffersBatch": AmazonFullApiSchemaGetListingOffersBatchResponse;
  "productPricing_2022-05-01:getFeaturedOfferExpectedPriceBatch": AmazonFullApiSchemaGetFeaturedOfferExpectedPriceBatchResponse;
  "productPricing_2022-05-01:getCompetitiveSummary": AmazonFullApiSchemaCompetitiveSummaryBatchResponse;
  "definitionsProductTypes_2020-09-01:searchDefinitionsProductTypes": AmazonFullApiSchemaProductTypeList;
  "definitionsProductTypes_2020-09-01:getDefinitionsProductType": AmazonFullApiSchemaProductTypeDefinition;
  "replenishment-2022-11-07:getSellingPartnerMetrics": AmazonFullApiSchemaGetSellingPartnerMetricsResponse;
  "replenishment-2022-11-07:listOfferMetrics": AmazonFullApiSchemaListOfferMetricsResponse;
  "replenishment-2022-11-07:listOffers": AmazonFullApiSchemaListOffersResponse;
  "reports_2021-06-30:getReports": AmazonFullApiSchemaGetReportsResponse;
  "reports_2021-06-30:createReport": AmazonFullApiSchemaCreateReportResponse;
  "reports_2021-06-30:cancelReport": AmazonFullApiSchemaErrorList9;
  "reports_2021-06-30:getReport": AmazonFullApiSchemaReport;
  "reports_2021-06-30:getReportSchedules": AmazonFullApiSchemaReportScheduleList;
  "reports_2021-06-30:createReportSchedule": AmazonFullApiSchemaCreateReportScheduleResponse;
  "reports_2021-06-30:cancelReportSchedule": AmazonFullApiSchemaErrorList9;
  "reports_2021-06-30:getReportSchedule": AmazonFullApiSchemaReportSchedule;
  "reports_2021-06-30:getReportDocument": AmazonFullApiSchemaReportDocument;
  "sales:getOrderMetrics": AmazonFullApiSchemaGetOrderMetricsResponse;
  "sellerWallet_2024-03-01:listAccounts": AmazonFullApiSchemaBankAccountListing;
  "sellerWallet_2024-03-01:getAccount": AmazonFullApiSchemaBankAccount;
  "sellerWallet_2024-03-01:listAccountBalances": AmazonFullApiSchemaBalanceListing;
  "sellerWallet_2024-03-01:getTransferPreview": AmazonFullApiSchemaTransferRatePreview;
  "sellerWallet_2024-03-01:listAccountTransactions": AmazonFullApiSchemaTransactionListing;
  "sellerWallet_2024-03-01:createTransaction": AmazonFullApiSchemaCreateTransactionResponse;
  "sellerWallet_2024-03-01:getTransaction": AmazonFullApiSchemaTransaction;
  "sellerWallet_2024-03-01:listTransferSchedules": AmazonFullApiSchemaTransferScheduleListing;
  "sellerWallet_2024-03-01:createTransferSchedule": AmazonFullApiSchemaTransferSchedule;
  "sellerWallet_2024-03-01:updateTransferSchedule": AmazonFullApiSchemaTransferSchedule;
  "sellerWallet_2024-03-01:getTransferSchedule": AmazonFullApiSchemaTransferSchedule;
  "sellerWallet_2024-03-01:deleteScheduleTransaction": AmazonFullApiSchemaDeleteTransferSchedule;
  "sellers:getMarketplaceParticipations": AmazonFullApiSchemaGetMarketplaceParticipationsResponse;
  "sellers:getAccount": AmazonFullApiSchemaGetAccountResponse;
  "services:getServiceJobByServiceJobId": AmazonFullApiSchemaGetServiceJobByServiceJobIdResponse;
  "services:cancelServiceJobByServiceJobId": AmazonFullApiSchemaCancelServiceJobByServiceJobIdResponse;
  "services:completeServiceJobByServiceJobId": AmazonFullApiSchemaCompleteServiceJobByServiceJobIdResponse;
  "services:getServiceJobs": AmazonFullApiSchemaGetServiceJobsResponse;
  "services:addAppointmentForServiceJobByServiceJobId": AmazonFullApiSchemaSetAppointmentResponse;
  "services:rescheduleAppointmentForServiceJobByServiceJobId": AmazonFullApiSchemaSetAppointmentResponse;
  "services:assignAppointmentResources": AmazonFullApiSchemaAssignAppointmentResourcesResponse;
  "services:setAppointmentFulfillmentData": string;
  "services:getRangeSlotCapacity": AmazonFullApiSchemaRangeSlotCapacity;
  "services:getFixedSlotCapacity": AmazonFullApiSchemaFixedSlotCapacity;
  "services:updateSchedule": AmazonFullApiSchemaUpdateScheduleResponse;
  "services:createReservation": AmazonFullApiSchemaCreateReservationResponse;
  "services:updateReservation": AmazonFullApiSchemaUpdateReservationResponse;
  "services:cancelReservation": AmazonFullApiSchemaCancelReservationResponse;
  "services:getAppointmmentSlotsByJobId": AmazonFullApiSchemaGetAppointmentSlotsResponse;
  "services:getAppointmentSlots": AmazonFullApiSchemaGetAppointmentSlotsResponse;
  "services:createServiceDocumentUploadDestination": AmazonFullApiSchemaCreateServiceDocumentUploadDestination;
  "shipmentInvoicingV0:getShipmentDetails": AmazonFullApiSchemaGetShipmentDetailsResponse;
  "shipmentInvoicingV0:submitInvoice": AmazonFullApiSchemaSubmitInvoiceResponse2;
  "shipmentInvoicingV0:getInvoiceStatus": AmazonFullApiSchemaGetInvoiceStatusResponse2;
  "shipping:createShipment": AmazonFullApiSchemaCreateShipmentResponse2;
  "shipping:getShipment": AmazonFullApiSchemaGetShipmentResponse2;
  "shipping:cancelShipment": AmazonFullApiSchemaCancelShipmentResponse2;
  "shipping:purchaseLabels": AmazonFullApiSchemaPurchaseLabelsResponse;
  "shipping:retrieveShippingLabel": AmazonFullApiSchemaRetrieveShippingLabelResponse;
  "shipping:purchaseShipment": AmazonFullApiSchemaPurchaseShipmentResponse;
  "shipping:getRates": AmazonFullApiSchemaGetRatesResponse;
  "shipping:getAccount": AmazonFullApiSchemaGetAccountResponse2;
  "shipping:getTrackingInformation": AmazonFullApiSchemaGetTrackingInformationResponse;
  "shippingV2:getRates": AmazonFullApiSchemaGetRatesResponse2;
  "shippingV2:directPurchaseShipment": AmazonFullApiSchemaDirectPurchaseResponse;
  "shippingV2:purchaseShipment": AmazonFullApiSchemaPurchaseShipmentResponse2;
  "shippingV2:oneClickShipment": AmazonFullApiSchemaOneClickShipmentResponse;
  "shippingV2:getTracking": AmazonFullApiSchemaGetTrackingResponse;
  "shippingV2:getShipmentDocuments": AmazonFullApiSchemaGetShipmentDocumentsResponse;
  "shippingV2:cancelShipment": AmazonFullApiSchemaCancelShipmentResponse3;
  "shippingV2:getAdditionalInputs": AmazonFullApiSchemaGetAdditionalInputsResponse;
  "shippingV2:getCarrierAccountFormInputs": AmazonFullApiSchemaGetCarrierAccountFormInputsResponse;
  "shippingV2:getCarrierAccounts": AmazonFullApiSchemaGetCarrierAccountsResponse;
  "shippingV2:linkCarrierAccount": AmazonFullApiSchemaLinkCarrierAccountResponse;
  "shippingV2:linkCarrierAccount:POST /shipping/v2/carrierAccounts/{carrierId}": AmazonFullApiSchemaLinkCarrierAccountResponse;
  "shippingV2:unlinkCarrierAccount": AmazonFullApiSchemaUnlinkCarrierAccountResponse;
  "shippingV2:generateCollectionForm": AmazonFullApiSchemaGenerateCollectionFormResponse;
  "shippingV2:getCollectionFormHistory": AmazonFullApiSchemaGetCollectionFormHistoryResponse;
  "shippingV2:getUnmanifestedShipments": AmazonFullApiSchemaGetUnmanifestedShipmentsResponse;
  "shippingV2:getCollectionForm": AmazonFullApiSchemaGetCollectionFormResponse;
  "shippingV2:getAccessPoints": AmazonFullApiSchemaGetAccessPointsResponse;
  "shippingV2:submitNdrFeedback": AmazonFullApiSchemaErrorList10;
  "shippingV2:createClaim": AmazonFullApiSchemaCreateClaimResponse;
  "solicitations:getSolicitationActionsForOrder": AmazonFullApiSchemaGetSolicitationActionsForOrderResponse;
  "solicitations:createProductReviewAndSellerFeedbackSolicitation": AmazonFullApiSchemaCreateProductReviewAndSellerFeedbackSolicitationResponse;
  "supplySources_2020-07-01:getSupplySources": AmazonFullApiSchemaGetSupplySourcesResponse;
  "supplySources_2020-07-01:createSupplySource": AmazonFullApiSchemaCreateSupplySourceResponse;
  "supplySources_2020-07-01:getSupplySource": AmazonFullApiSchemaSupplySource;
  "supplySources_2020-07-01:updateSupplySource": AmazonFullApiSchemaErrorList11;
  "supplySources_2020-07-01:archiveSupplySource": AmazonFullApiSchemaErrorList11;
  "supplySources_2020-07-01:updateSupplySourceStatus": AmazonFullApiSchemaErrorList11;
  "tokens_2021-03-01:createRestrictedDataToken": AmazonFullApiSchemaCreateRestrictedDataTokenResponse;
  "uploads_2020-11-01:createUploadDestinationForResource": AmazonFullApiSchemaCreateUploadDestinationResponse;
  "vehicles_2024-11-01:getVehicles": AmazonFullApiSchemaVehiclesResponse;
  "vendorDirectFulfillmentInventoryV1:submitInventoryUpdate": AmazonFullApiSchemaSubmitInventoryUpdateResponse;
  "vendorDirectFulfillmentOrdersV1:getOrders": AmazonFullApiSchemaGetOrdersResponse2;
  "vendorDirectFulfillmentOrdersV1:getOrder": AmazonFullApiSchemaGetOrderResponse3;
  "vendorDirectFulfillmentOrdersV1:submitAcknowledgement": AmazonFullApiSchemaSubmitAcknowledgementResponse;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrders": AmazonFullApiSchemaOrderList;
  "vendorDirectFulfillmentOrders_2021-12-28:getOrder": AmazonFullApiSchemaOrder;
  "vendorDirectFulfillmentOrders_2021-12-28:submitAcknowledgement": AmazonFullApiSchemaTransactionId;
  "vendorDirectFulfillmentPaymentsV1:submitInvoice": AmazonFullApiSchemaSubmitInvoiceResponse3;
  "vendorDirectFulfillmentSandboxData_2021-10-28:generateOrderScenarios": AmazonFullApiSchemaTransactionReference;
  "vendorDirectFulfillmentSandboxData_2021-10-28:getOrderScenarios": AmazonFullApiSchemaTransactionStatus;
  "vendorDirectFulfillmentShippingV1:getShippingLabels": AmazonFullApiSchemaGetShippingLabelListResponse;
  "vendorDirectFulfillmentShippingV1:submitShippingLabelRequest": AmazonFullApiSchemaSubmitShippingLabelsResponse;
  "vendorDirectFulfillmentShippingV1:getShippingLabel": AmazonFullApiSchemaGetShippingLabelResponse;
  "vendorDirectFulfillmentShippingV1:submitShipmentConfirmations": AmazonFullApiSchemaSubmitShipmentConfirmationsResponse;
  "vendorDirectFulfillmentShippingV1:submitShipmentStatusUpdates": AmazonFullApiSchemaSubmitShipmentStatusUpdatesResponse;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoices": AmazonFullApiSchemaGetCustomerInvoicesResponse;
  "vendorDirectFulfillmentShippingV1:getCustomerInvoice": AmazonFullApiSchemaGetCustomerInvoiceResponse;
  "vendorDirectFulfillmentShippingV1:getPackingSlips": AmazonFullApiSchemaGetPackingSlipListResponse;
  "vendorDirectFulfillmentShippingV1:getPackingSlip": AmazonFullApiSchemaGetPackingSlipResponse;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabels": AmazonFullApiSchemaShippingLabelList;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShippingLabelRequest": AmazonFullApiSchemaTransactionReference2;
  "vendorDirectFulfillmentShipping_2021-12-28:getShippingLabel": AmazonFullApiSchemaShippingLabel;
  "vendorDirectFulfillmentShipping_2021-12-28:createShippingLabels": AmazonFullApiSchemaShippingLabel;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentConfirmations": AmazonFullApiSchemaTransactionReference2;
  "vendorDirectFulfillmentShipping_2021-12-28:submitShipmentStatusUpdates": AmazonFullApiSchemaTransactionReference2;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoices": AmazonFullApiSchemaCustomerInvoiceList;
  "vendorDirectFulfillmentShipping_2021-12-28:getCustomerInvoice": AmazonFullApiSchemaCustomerInvoice;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlips": AmazonFullApiSchemaPackingSlipList;
  "vendorDirectFulfillmentShipping_2021-12-28:getPackingSlip": AmazonFullApiSchemaPackingSlip;
  "vendorDirectFulfillmentShipping_2021-12-28:createContainerLabel": AmazonFullApiSchemaCreateContainerLabelResponse;
  "vendorDirectFulfillmentTransactionsV1:getTransactionStatus": AmazonFullApiSchemaGetTransactionResponse;
  "vendorDirectFulfillmentTransactions_2021-12-28:getTransactionStatus": AmazonFullApiSchemaTransactionStatus2;
  "vendorInvoices:submitInvoices": AmazonFullApiSchemaSubmitInvoicesResponse;
  "vendorOrders:getPurchaseOrders": AmazonFullApiSchemaGetPurchaseOrdersResponse;
  "vendorOrders:getPurchaseOrder": AmazonFullApiSchemaGetPurchaseOrderResponse;
  "vendorOrders:submitAcknowledgement": AmazonFullApiSchemaSubmitAcknowledgementResponse2;
  "vendorOrders:getPurchaseOrdersStatus": AmazonFullApiSchemaGetPurchaseOrdersStatusResponse;
  "vendorShipments:SubmitShipmentConfirmations": AmazonFullApiSchemaSubmitShipmentConfirmationsResponse2;
  "vendorShipments:SubmitShipments": AmazonFullApiSchemaSubmitShipmentConfirmationsResponse2;
  "vendorShipments:GetShipmentDetails": AmazonFullApiSchemaGetShipmentDetailsResponse2;
  "vendorShipments:GetShipmentLabels": AmazonFullApiSchemaGetShipmentLabels;
  "vendorTransactionStatus:getTransaction": AmazonFullApiSchemaGetTransactionResponse2;
}
