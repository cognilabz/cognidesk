// Generated from Amazon SP-API models (https://github.com/amzn/selling-partner-api-models/tree/main/models).
// Do not edit by hand; run scripts/generate-amazon-full-api.mjs after checking upstream docs.

import type { AmazonOperationRequestInput } from "./index.js";
import type {
  AmazonFullApiOperationQueryMap,
  AmazonFullApiOperationQueryRequiredMap,
  AmazonFullApiOperationRequestBodyMap,
  AmazonFullApiOperationRequestBodyRequiredMap,
  AmazonFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createAmazonFullApiAccountsGeneratedClient,
  AmazonFullApiAccountsGeneratedFunctionNames,
  type AmazonFullApiAccountsGeneratedClient,
  type AmazonFullApiAccountsOperationPathParamMap,
  type AmazonFullApiAccountsOperationRequestMap,
} from "./full-api.generated/client/accounts-chunk.generated.js";
import {
  createAmazonFullApiAplusContentGeneratedClient,
  AmazonFullApiAplusContentGeneratedFunctionNames,
  type AmazonFullApiAplusContentGeneratedClient,
  type AmazonFullApiAplusContentOperationPathParamMap,
  type AmazonFullApiAplusContentOperationRequestMap,
} from "./full-api.generated/client/aplus-content-chunk.generated.js";
import {
  createAmazonFullApiAppIntegrationsGeneratedClient,
  AmazonFullApiAppIntegrationsGeneratedFunctionNames,
  type AmazonFullApiAppIntegrationsGeneratedClient,
  type AmazonFullApiAppIntegrationsOperationPathParamMap,
  type AmazonFullApiAppIntegrationsOperationRequestMap,
} from "./full-api.generated/client/app-integrations-chunk.generated.js";
import {
  createAmazonFullApiApplicationsGeneratedClient,
  AmazonFullApiApplicationsGeneratedFunctionNames,
  type AmazonFullApiApplicationsGeneratedClient,
  type AmazonFullApiApplicationsOperationPathParamMap,
  type AmazonFullApiApplicationsOperationRequestMap,
} from "./full-api.generated/client/applications-chunk.generated.js";
import {
  createAmazonFullApiAwdGeneratedClient,
  AmazonFullApiAwdGeneratedFunctionNames,
  type AmazonFullApiAwdGeneratedClient,
  type AmazonFullApiAwdOperationPathParamMap,
  type AmazonFullApiAwdOperationRequestMap,
} from "./full-api.generated/client/awd-chunk.generated.js";
import {
  createAmazonFullApiBatchInventoryGeneratedClient,
  AmazonFullApiBatchInventoryGeneratedFunctionNames,
  type AmazonFullApiBatchInventoryGeneratedClient,
  type AmazonFullApiBatchInventoryOperationPathParamMap,
  type AmazonFullApiBatchInventoryOperationRequestMap,
} from "./full-api.generated/client/batch-inventory-chunk.generated.js";
import {
  createAmazonFullApiCatalogGeneratedClient,
  AmazonFullApiCatalogGeneratedFunctionNames,
  type AmazonFullApiCatalogGeneratedClient,
  type AmazonFullApiCatalogOperationPathParamMap,
  type AmazonFullApiCatalogOperationRequestMap,
} from "./full-api.generated/client/catalog-chunk.generated.js";
import {
  createAmazonFullApiCreateContainerLabelGeneratedClient,
  AmazonFullApiCreateContainerLabelGeneratedFunctionNames,
  type AmazonFullApiCreateContainerLabelGeneratedClient,
  type AmazonFullApiCreateContainerLabelOperationPathParamMap,
  type AmazonFullApiCreateContainerLabelOperationRequestMap,
} from "./full-api.generated/client/create-container-label-chunk.generated.js";
import {
  createAmazonFullApiCustomerFeedbackGeneratedClient,
  AmazonFullApiCustomerFeedbackGeneratedFunctionNames,
  type AmazonFullApiCustomerFeedbackGeneratedClient,
  type AmazonFullApiCustomerFeedbackOperationPathParamMap,
  type AmazonFullApiCustomerFeedbackOperationRequestMap,
} from "./full-api.generated/client/customer-feedback-chunk.generated.js";
import {
  createAmazonFullApiCustomerInvoicesGeneratedClient,
  AmazonFullApiCustomerInvoicesGeneratedFunctionNames,
  type AmazonFullApiCustomerInvoicesGeneratedClient,
  type AmazonFullApiCustomerInvoicesOperationPathParamMap,
  type AmazonFullApiCustomerInvoicesOperationRequestMap,
} from "./full-api.generated/client/customer-invoices-chunk.generated.js";
import {
  createAmazonFullApiDefinitionsGeneratedClient,
  AmazonFullApiDefinitionsGeneratedFunctionNames,
  type AmazonFullApiDefinitionsGeneratedClient,
  type AmazonFullApiDefinitionsOperationPathParamMap,
  type AmazonFullApiDefinitionsOperationRequestMap,
} from "./full-api.generated/client/definitions-chunk.generated.js";
import {
  createAmazonFullApiDeliveryShipmentInvoiceGeneratedClient,
  AmazonFullApiDeliveryShipmentInvoiceGeneratedFunctionNames,
  type AmazonFullApiDeliveryShipmentInvoiceGeneratedClient,
  type AmazonFullApiDeliveryShipmentInvoiceOperationPathParamMap,
  type AmazonFullApiDeliveryShipmentInvoiceOperationRequestMap,
} from "./full-api.generated/client/delivery-shipment-invoice-chunk.generated.js";
import {
  createAmazonFullApiEasyShipGeneratedClient,
  AmazonFullApiEasyShipGeneratedFunctionNames,
  type AmazonFullApiEasyShipGeneratedClient,
  type AmazonFullApiEasyShipOperationPathParamMap,
  type AmazonFullApiEasyShipOperationRequestMap,
} from "./full-api.generated/client/easy-ship-chunk.generated.js";
import {
  createAmazonFullApiFbaInboundGeneratedClient,
  AmazonFullApiFbaInboundGeneratedFunctionNames,
  type AmazonFullApiFbaInboundGeneratedClient,
  type AmazonFullApiFbaInboundOperationPathParamMap,
  type AmazonFullApiFbaInboundOperationRequestMap,
} from "./full-api.generated/client/fba-inbound-chunk.generated.js";
import {
  createAmazonFullApiFbaInventoryGeneratedClient,
  AmazonFullApiFbaInventoryGeneratedFunctionNames,
  type AmazonFullApiFbaInventoryGeneratedClient,
  type AmazonFullApiFbaInventoryOperationPathParamMap,
  type AmazonFullApiFbaInventoryOperationRequestMap,
} from "./full-api.generated/client/fba-inventory-chunk.generated.js";
import {
  createAmazonFullApiFbaOutboundGeneratedClient,
  AmazonFullApiFbaOutboundGeneratedFunctionNames,
  type AmazonFullApiFbaOutboundGeneratedClient,
  type AmazonFullApiFbaOutboundOperationPathParamMap,
  type AmazonFullApiFbaOutboundOperationRequestMap,
} from "./full-api.generated/client/fba-outbound-chunk.generated.js";
import {
  createAmazonFullApiFeedsGeneratedClient,
  AmazonFullApiFeedsGeneratedFunctionNames,
  type AmazonFullApiFeedsGeneratedClient,
  type AmazonFullApiFeedsOperationPathParamMap,
  type AmazonFullApiFeedsOperationRequestMap,
} from "./full-api.generated/client/feeds-chunk.generated.js";
import {
  createAmazonFullApiFeesGeneratedClient,
  AmazonFullApiFeesGeneratedFunctionNames,
  type AmazonFullApiFeesGeneratedClient,
  type AmazonFullApiFeesOperationPathParamMap,
  type AmazonFullApiFeesOperationRequestMap,
} from "./full-api.generated/client/fees-chunk.generated.js";
import {
  createAmazonFullApiFinancesGeneratedClient,
  AmazonFullApiFinancesGeneratedFunctionNames,
  type AmazonFullApiFinancesGeneratedClient,
  type AmazonFullApiFinancesOperationPathParamMap,
  type AmazonFullApiFinancesOperationRequestMap,
} from "./full-api.generated/client/finances-chunk.generated.js";
import {
  createAmazonFullApiGetOrderGeneratedClient,
  AmazonFullApiGetOrderGeneratedFunctionNames,
  type AmazonFullApiGetOrderGeneratedClient,
  type AmazonFullApiGetOrderOperationPathParamMap,
  type AmazonFullApiGetOrderOperationRequestMap,
} from "./full-api.generated/client/get-order-chunk.generated.js";
import {
  createAmazonFullApiInvoicesGeneratedClient,
  AmazonFullApiInvoicesGeneratedFunctionNames,
  type AmazonFullApiInvoicesGeneratedClient,
  type AmazonFullApiInvoicesOperationPathParamMap,
  type AmazonFullApiInvoicesOperationRequestMap,
} from "./full-api.generated/client/invoices-chunk.generated.js";
import {
  createAmazonFullApiListingsGeneratedClient,
  AmazonFullApiListingsGeneratedFunctionNames,
  type AmazonFullApiListingsGeneratedClient,
  type AmazonFullApiListingsOperationPathParamMap,
  type AmazonFullApiListingsOperationRequestMap,
} from "./full-api.generated/client/listings-chunk.generated.js";
import {
  createAmazonFullApiMerchantFulfillmentGeneratedClient,
  AmazonFullApiMerchantFulfillmentGeneratedFunctionNames,
  type AmazonFullApiMerchantFulfillmentGeneratedClient,
  type AmazonFullApiMerchantFulfillmentOperationPathParamMap,
  type AmazonFullApiMerchantFulfillmentOperationRequestMap,
} from "./full-api.generated/client/merchant-fulfillment-chunk.generated.js";
import {
  createAmazonFullApiMessagingGeneratedClient,
  AmazonFullApiMessagingGeneratedFunctionNames,
  type AmazonFullApiMessagingGeneratedClient,
  type AmazonFullApiMessagingOperationPathParamMap,
  type AmazonFullApiMessagingOperationRequestMap,
} from "./full-api.generated/client/messaging-chunk.generated.js";
import {
  createAmazonFullApiNotificationsGeneratedClient,
  AmazonFullApiNotificationsGeneratedFunctionNames,
  type AmazonFullApiNotificationsGeneratedClient,
  type AmazonFullApiNotificationsOperationPathParamMap,
  type AmazonFullApiNotificationsOperationRequestMap,
} from "./full-api.generated/client/notifications-chunk.generated.js";
import {
  createAmazonFullApiOffersGeneratedClient,
  AmazonFullApiOffersGeneratedFunctionNames,
  type AmazonFullApiOffersGeneratedClient,
  type AmazonFullApiOffersOperationPathParamMap,
  type AmazonFullApiOffersOperationRequestMap,
} from "./full-api.generated/client/offers-chunk.generated.js";
import {
  createAmazonFullApiOrdersV0GeneratedClient,
  AmazonFullApiOrdersV0GeneratedFunctionNames,
  type AmazonFullApiOrdersV0GeneratedClient,
  type AmazonFullApiOrdersV0OperationPathParamMap,
  type AmazonFullApiOrdersV0OperationRequestMap,
} from "./full-api.generated/client/orders-v0-chunk.generated.js";
import {
  createAmazonFullApiProductPricingGeneratedClient,
  AmazonFullApiProductPricingGeneratedFunctionNames,
  type AmazonFullApiProductPricingGeneratedClient,
  type AmazonFullApiProductPricingOperationPathParamMap,
  type AmazonFullApiProductPricingOperationRequestMap,
} from "./full-api.generated/client/product-pricing-chunk.generated.js";
import {
  createAmazonFullApiQueriesGeneratedClient,
  AmazonFullApiQueriesGeneratedFunctionNames,
  type AmazonFullApiQueriesGeneratedClient,
  type AmazonFullApiQueriesOperationPathParamMap,
  type AmazonFullApiQueriesOperationRequestMap,
} from "./full-api.generated/client/queries-chunk.generated.js";
import {
  createAmazonFullApiReportsGeneratedClient,
  AmazonFullApiReportsGeneratedFunctionNames,
  type AmazonFullApiReportsGeneratedClient,
  type AmazonFullApiReportsOperationPathParamMap,
  type AmazonFullApiReportsOperationRequestMap,
} from "./full-api.generated/client/reports-chunk.generated.js";
import {
  createAmazonFullApiReturnRetrievalGeneratedClient,
  AmazonFullApiReturnRetrievalGeneratedFunctionNames,
  type AmazonFullApiReturnRetrievalGeneratedClient,
  type AmazonFullApiReturnRetrievalOperationPathParamMap,
  type AmazonFullApiReturnRetrievalOperationRequestMap,
} from "./full-api.generated/client/return-retrieval-chunk.generated.js";
import {
  createAmazonFullApiSalesGeneratedClient,
  AmazonFullApiSalesGeneratedFunctionNames,
  type AmazonFullApiSalesGeneratedClient,
  type AmazonFullApiSalesOperationPathParamMap,
  type AmazonFullApiSalesOperationRequestMap,
} from "./full-api.generated/client/sales-chunk.generated.js";
import {
  createAmazonFullApiSearchOrdersGeneratedClient,
  AmazonFullApiSearchOrdersGeneratedFunctionNames,
  type AmazonFullApiSearchOrdersGeneratedClient,
  type AmazonFullApiSearchOrdersOperationPathParamMap,
  type AmazonFullApiSearchOrdersOperationRequestMap,
} from "./full-api.generated/client/search-orders-chunk.generated.js";
import {
  createAmazonFullApiSellersGeneratedClient,
  AmazonFullApiSellersGeneratedFunctionNames,
  type AmazonFullApiSellersGeneratedClient,
  type AmazonFullApiSellersOperationPathParamMap,
  type AmazonFullApiSellersOperationRequestMap,
} from "./full-api.generated/client/sellers-chunk.generated.js";
import {
  createAmazonFullApiSellingpartnersGeneratedClient,
  AmazonFullApiSellingpartnersGeneratedFunctionNames,
  type AmazonFullApiSellingpartnersGeneratedClient,
  type AmazonFullApiSellingpartnersOperationPathParamMap,
  type AmazonFullApiSellingpartnersOperationRequestMap,
} from "./full-api.generated/client/sellingpartners-chunk.generated.js";
import {
  createAmazonFullApiServiceGeneratedClient,
  AmazonFullApiServiceGeneratedFunctionNames,
  type AmazonFullApiServiceGeneratedClient,
  type AmazonFullApiServiceOperationPathParamMap,
  type AmazonFullApiServiceOperationRequestMap,
} from "./full-api.generated/client/service-chunk.generated.js";
import {
  createAmazonFullApiShipmentGeneratedClient,
  AmazonFullApiShipmentGeneratedFunctionNames,
  type AmazonFullApiShipmentGeneratedClient,
  type AmazonFullApiShipmentOperationPathParamMap,
  type AmazonFullApiShipmentOperationRequestMap,
} from "./full-api.generated/client/shipment-chunk.generated.js";
import {
  createAmazonFullApiShipmentInvoiceGeneratedClient,
  AmazonFullApiShipmentInvoiceGeneratedFunctionNames,
  type AmazonFullApiShipmentInvoiceGeneratedClient,
  type AmazonFullApiShipmentInvoiceOperationPathParamMap,
  type AmazonFullApiShipmentInvoiceOperationRequestMap,
} from "./full-api.generated/client/shipment-invoice-chunk.generated.js";
import {
  createAmazonFullApiShipmentProcessingGeneratedClient,
  AmazonFullApiShipmentProcessingGeneratedFunctionNames,
  type AmazonFullApiShipmentProcessingGeneratedClient,
  type AmazonFullApiShipmentProcessingOperationPathParamMap,
  type AmazonFullApiShipmentProcessingOperationRequestMap,
} from "./full-api.generated/client/shipment-processing-chunk.generated.js";
import {
  createAmazonFullApiShipmentRetrievalGeneratedClient,
  AmazonFullApiShipmentRetrievalGeneratedFunctionNames,
  type AmazonFullApiShipmentRetrievalGeneratedClient,
  type AmazonFullApiShipmentRetrievalOperationPathParamMap,
  type AmazonFullApiShipmentRetrievalOperationRequestMap,
} from "./full-api.generated/client/shipment-retrieval-chunk.generated.js";
import {
  createAmazonFullApiShippingGeneratedClient,
  AmazonFullApiShippingGeneratedFunctionNames,
  type AmazonFullApiShippingGeneratedClient,
  type AmazonFullApiShippingOperationPathParamMap,
  type AmazonFullApiShippingOperationRequestMap,
} from "./full-api.generated/client/shipping-chunk.generated.js";
import {
  createAmazonFullApiSolicitationsGeneratedClient,
  AmazonFullApiSolicitationsGeneratedFunctionNames,
  type AmazonFullApiSolicitationsGeneratedClient,
  type AmazonFullApiSolicitationsOperationPathParamMap,
  type AmazonFullApiSolicitationsOperationRequestMap,
} from "./full-api.generated/client/solicitations-chunk.generated.js";
import {
  createAmazonFullApiSupplySourcesGeneratedClient,
  AmazonFullApiSupplySourcesGeneratedFunctionNames,
  type AmazonFullApiSupplySourcesGeneratedClient,
  type AmazonFullApiSupplySourcesOperationPathParamMap,
  type AmazonFullApiSupplySourcesOperationRequestMap,
} from "./full-api.generated/client/supply-sources-chunk.generated.js";
import {
  createAmazonFullApiTokensGeneratedClient,
  AmazonFullApiTokensGeneratedFunctionNames,
  type AmazonFullApiTokensGeneratedClient,
  type AmazonFullApiTokensOperationPathParamMap,
  type AmazonFullApiTokensOperationRequestMap,
} from "./full-api.generated/client/tokens-chunk.generated.js";
import {
  createAmazonFullApiTransactionsGeneratedClient,
  AmazonFullApiTransactionsGeneratedFunctionNames,
  type AmazonFullApiTransactionsGeneratedClient,
  type AmazonFullApiTransactionsOperationPathParamMap,
  type AmazonFullApiTransactionsOperationRequestMap,
} from "./full-api.generated/client/transactions-chunk.generated.js";
import {
  createAmazonFullApiTransferPreviewGeneratedClient,
  AmazonFullApiTransferPreviewGeneratedFunctionNames,
  type AmazonFullApiTransferPreviewGeneratedClient,
  type AmazonFullApiTransferPreviewOperationPathParamMap,
  type AmazonFullApiTransferPreviewOperationRequestMap,
} from "./full-api.generated/client/transfer-preview-chunk.generated.js";
import {
  createAmazonFullApiTransferScheduleGeneratedClient,
  AmazonFullApiTransferScheduleGeneratedFunctionNames,
  type AmazonFullApiTransferScheduleGeneratedClient,
  type AmazonFullApiTransferScheduleOperationPathParamMap,
  type AmazonFullApiTransferScheduleOperationRequestMap,
} from "./full-api.generated/client/transfer-schedule-chunk.generated.js";
import {
  createAmazonFullApiUpdateInventoryGeneratedClient,
  AmazonFullApiUpdateInventoryGeneratedFunctionNames,
  type AmazonFullApiUpdateInventoryGeneratedClient,
  type AmazonFullApiUpdateInventoryOperationPathParamMap,
  type AmazonFullApiUpdateInventoryOperationRequestMap,
} from "./full-api.generated/client/update-inventory-chunk.generated.js";
import {
  createAmazonFullApiUploadsGeneratedClient,
  AmazonFullApiUploadsGeneratedFunctionNames,
  type AmazonFullApiUploadsGeneratedClient,
  type AmazonFullApiUploadsOperationPathParamMap,
  type AmazonFullApiUploadsOperationRequestMap,
} from "./full-api.generated/client/uploads-chunk.generated.js";
import {
  createAmazonFullApiVehiclesGeneratedClient,
  AmazonFullApiVehiclesGeneratedFunctionNames,
  type AmazonFullApiVehiclesGeneratedClient,
  type AmazonFullApiVehiclesOperationPathParamMap,
  type AmazonFullApiVehiclesOperationRequestMap,
} from "./full-api.generated/client/vehicles-chunk.generated.js";
import {
  createAmazonFullApiVendorDFSandboxGeneratedClient,
  AmazonFullApiVendorDFSandboxGeneratedFunctionNames,
  type AmazonFullApiVendorDFSandboxGeneratedClient,
  type AmazonFullApiVendorDFSandboxOperationPathParamMap,
  type AmazonFullApiVendorDFSandboxOperationRequestMap,
} from "./full-api.generated/client/vendor-dfsandbox-chunk.generated.js";
import {
  createAmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient,
  AmazonFullApiVendorDFSandboxtransactionstatusGeneratedFunctionNames,
  type AmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient,
  type AmazonFullApiVendorDFSandboxtransactionstatusOperationPathParamMap,
  type AmazonFullApiVendorDFSandboxtransactionstatusOperationRequestMap,
} from "./full-api.generated/client/vendor-dfsandboxtransactionstatus-chunk.generated.js";
import {
  createAmazonFullApiVendorInvoiceGeneratedClient,
  AmazonFullApiVendorInvoiceGeneratedFunctionNames,
  type AmazonFullApiVendorInvoiceGeneratedClient,
  type AmazonFullApiVendorInvoiceOperationPathParamMap,
  type AmazonFullApiVendorInvoiceOperationRequestMap,
} from "./full-api.generated/client/vendor-invoice-chunk.generated.js";
import {
  createAmazonFullApiVendorOrdersGeneratedClient,
  AmazonFullApiVendorOrdersGeneratedFunctionNames,
  type AmazonFullApiVendorOrdersGeneratedClient,
  type AmazonFullApiVendorOrdersOperationPathParamMap,
  type AmazonFullApiVendorOrdersOperationRequestMap,
} from "./full-api.generated/client/vendor-orders-chunk.generated.js";
import {
  createAmazonFullApiVendorPaymentsGeneratedClient,
  AmazonFullApiVendorPaymentsGeneratedFunctionNames,
  type AmazonFullApiVendorPaymentsGeneratedClient,
  type AmazonFullApiVendorPaymentsOperationPathParamMap,
  type AmazonFullApiVendorPaymentsOperationRequestMap,
} from "./full-api.generated/client/vendor-payments-chunk.generated.js";
import {
  createAmazonFullApiVendorShippingGeneratedClient,
  AmazonFullApiVendorShippingGeneratedFunctionNames,
  type AmazonFullApiVendorShippingGeneratedClient,
  type AmazonFullApiVendorShippingOperationPathParamMap,
  type AmazonFullApiVendorShippingOperationRequestMap,
} from "./full-api.generated/client/vendor-shipping-chunk.generated.js";
import {
  createAmazonFullApiVendorShippingLabelsGeneratedClient,
  AmazonFullApiVendorShippingLabelsGeneratedFunctionNames,
  type AmazonFullApiVendorShippingLabelsGeneratedClient,
  type AmazonFullApiVendorShippingLabelsOperationPathParamMap,
  type AmazonFullApiVendorShippingLabelsOperationRequestMap,
} from "./full-api.generated/client/vendor-shipping-labels-chunk.generated.js";
import {
  createAmazonFullApiVendorTransactionGeneratedClient,
  AmazonFullApiVendorTransactionGeneratedFunctionNames,
  type AmazonFullApiVendorTransactionGeneratedClient,
  type AmazonFullApiVendorTransactionOperationPathParamMap,
  type AmazonFullApiVendorTransactionOperationRequestMap,
} from "./full-api.generated/client/vendor-transaction-chunk.generated.js";

export type AmazonFullApiPathParamValue = string | number;
export interface AmazonFullApiOperationPathParamMap extends AmazonFullApiAccountsOperationPathParamMap, AmazonFullApiAplusContentOperationPathParamMap, AmazonFullApiAppIntegrationsOperationPathParamMap, AmazonFullApiApplicationsOperationPathParamMap, AmazonFullApiAwdOperationPathParamMap, AmazonFullApiBatchInventoryOperationPathParamMap, AmazonFullApiCatalogOperationPathParamMap, AmazonFullApiCreateContainerLabelOperationPathParamMap, AmazonFullApiCustomerFeedbackOperationPathParamMap, AmazonFullApiCustomerInvoicesOperationPathParamMap, AmazonFullApiDefinitionsOperationPathParamMap, AmazonFullApiDeliveryShipmentInvoiceOperationPathParamMap, AmazonFullApiEasyShipOperationPathParamMap, AmazonFullApiFbaInboundOperationPathParamMap, AmazonFullApiFbaInventoryOperationPathParamMap, AmazonFullApiFbaOutboundOperationPathParamMap, AmazonFullApiFeedsOperationPathParamMap, AmazonFullApiFeesOperationPathParamMap, AmazonFullApiFinancesOperationPathParamMap, AmazonFullApiGetOrderOperationPathParamMap, AmazonFullApiInvoicesOperationPathParamMap, AmazonFullApiListingsOperationPathParamMap, AmazonFullApiMerchantFulfillmentOperationPathParamMap, AmazonFullApiMessagingOperationPathParamMap, AmazonFullApiNotificationsOperationPathParamMap, AmazonFullApiOffersOperationPathParamMap, AmazonFullApiOrdersV0OperationPathParamMap, AmazonFullApiProductPricingOperationPathParamMap, AmazonFullApiQueriesOperationPathParamMap, AmazonFullApiReportsOperationPathParamMap, AmazonFullApiReturnRetrievalOperationPathParamMap, AmazonFullApiSalesOperationPathParamMap, AmazonFullApiSearchOrdersOperationPathParamMap, AmazonFullApiSellersOperationPathParamMap, AmazonFullApiSellingpartnersOperationPathParamMap, AmazonFullApiServiceOperationPathParamMap, AmazonFullApiShipmentOperationPathParamMap, AmazonFullApiShipmentInvoiceOperationPathParamMap, AmazonFullApiShipmentProcessingOperationPathParamMap, AmazonFullApiShipmentRetrievalOperationPathParamMap, AmazonFullApiShippingOperationPathParamMap, AmazonFullApiSolicitationsOperationPathParamMap, AmazonFullApiSupplySourcesOperationPathParamMap, AmazonFullApiTokensOperationPathParamMap, AmazonFullApiTransactionsOperationPathParamMap, AmazonFullApiTransferPreviewOperationPathParamMap, AmazonFullApiTransferScheduleOperationPathParamMap, AmazonFullApiUpdateInventoryOperationPathParamMap, AmazonFullApiUploadsOperationPathParamMap, AmazonFullApiVehiclesOperationPathParamMap, AmazonFullApiVendorDFSandboxOperationPathParamMap, AmazonFullApiVendorDFSandboxtransactionstatusOperationPathParamMap, AmazonFullApiVendorInvoiceOperationPathParamMap, AmazonFullApiVendorOrdersOperationPathParamMap, AmazonFullApiVendorPaymentsOperationPathParamMap, AmazonFullApiVendorShippingOperationPathParamMap, AmazonFullApiVendorShippingLabelsOperationPathParamMap, AmazonFullApiVendorTransactionOperationPathParamMap {}

export type AmazonFullApiOperationKey = keyof AmazonFullApiOperationPathParamMap & string;

export type AmazonFullApiOperationQueryInput<OperationKey extends AmazonFullApiOperationKey> =
  AmazonFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: AmazonFullApiOperationQueryMap[OperationKey] }
    : { query?: AmazonFullApiOperationQueryMap[OperationKey] };

export type AmazonFullApiOperationBodyInput<OperationKey extends AmazonFullApiOperationKey> =
  [AmazonFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : AmazonFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: AmazonFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: AmazonFullApiOperationRequestBodyMap[OperationKey] };

export type AmazonFullApiOperationInput<OperationKey extends AmazonFullApiOperationKey> = Omit<AmazonOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends AmazonFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: AmazonFullApiOperationPathParamMap[OperationKey] }
) & AmazonFullApiOperationQueryInput<OperationKey> & AmazonFullApiOperationBodyInput<OperationKey>;

export interface AmazonFullApiOperationRequestMap extends AmazonFullApiAccountsOperationRequestMap, AmazonFullApiAplusContentOperationRequestMap, AmazonFullApiAppIntegrationsOperationRequestMap, AmazonFullApiApplicationsOperationRequestMap, AmazonFullApiAwdOperationRequestMap, AmazonFullApiBatchInventoryOperationRequestMap, AmazonFullApiCatalogOperationRequestMap, AmazonFullApiCreateContainerLabelOperationRequestMap, AmazonFullApiCustomerFeedbackOperationRequestMap, AmazonFullApiCustomerInvoicesOperationRequestMap, AmazonFullApiDefinitionsOperationRequestMap, AmazonFullApiDeliveryShipmentInvoiceOperationRequestMap, AmazonFullApiEasyShipOperationRequestMap, AmazonFullApiFbaInboundOperationRequestMap, AmazonFullApiFbaInventoryOperationRequestMap, AmazonFullApiFbaOutboundOperationRequestMap, AmazonFullApiFeedsOperationRequestMap, AmazonFullApiFeesOperationRequestMap, AmazonFullApiFinancesOperationRequestMap, AmazonFullApiGetOrderOperationRequestMap, AmazonFullApiInvoicesOperationRequestMap, AmazonFullApiListingsOperationRequestMap, AmazonFullApiMerchantFulfillmentOperationRequestMap, AmazonFullApiMessagingOperationRequestMap, AmazonFullApiNotificationsOperationRequestMap, AmazonFullApiOffersOperationRequestMap, AmazonFullApiOrdersV0OperationRequestMap, AmazonFullApiProductPricingOperationRequestMap, AmazonFullApiQueriesOperationRequestMap, AmazonFullApiReportsOperationRequestMap, AmazonFullApiReturnRetrievalOperationRequestMap, AmazonFullApiSalesOperationRequestMap, AmazonFullApiSearchOrdersOperationRequestMap, AmazonFullApiSellersOperationRequestMap, AmazonFullApiSellingpartnersOperationRequestMap, AmazonFullApiServiceOperationRequestMap, AmazonFullApiShipmentOperationRequestMap, AmazonFullApiShipmentInvoiceOperationRequestMap, AmazonFullApiShipmentProcessingOperationRequestMap, AmazonFullApiShipmentRetrievalOperationRequestMap, AmazonFullApiShippingOperationRequestMap, AmazonFullApiSolicitationsOperationRequestMap, AmazonFullApiSupplySourcesOperationRequestMap, AmazonFullApiTokensOperationRequestMap, AmazonFullApiTransactionsOperationRequestMap, AmazonFullApiTransferPreviewOperationRequestMap, AmazonFullApiTransferScheduleOperationRequestMap, AmazonFullApiUpdateInventoryOperationRequestMap, AmazonFullApiUploadsOperationRequestMap, AmazonFullApiVehiclesOperationRequestMap, AmazonFullApiVendorDFSandboxOperationRequestMap, AmazonFullApiVendorDFSandboxtransactionstatusOperationRequestMap, AmazonFullApiVendorInvoiceOperationRequestMap, AmazonFullApiVendorOrdersOperationRequestMap, AmazonFullApiVendorPaymentsOperationRequestMap, AmazonFullApiVendorShippingOperationRequestMap, AmazonFullApiVendorShippingLabelsOperationRequestMap, AmazonFullApiVendorTransactionOperationRequestMap {}

export type AmazonFullApiOperationArgs<OperationKey extends AmazonFullApiOperationKey> = {} extends AmazonFullApiOperationPathParamMap[OperationKey]
  ? [input?: AmazonFullApiOperationRequestMap[OperationKey]]
  : [input: AmazonFullApiOperationRequestMap[OperationKey]];

export type AmazonGeneratedOperationCaller = <OperationKey extends AmazonFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: AmazonFullApiOperationArgs<OperationKey>
) => Promise<AmazonFullApiOperationResponseMap[OperationKey]>;

export interface AmazonFullApiGeneratedClient extends AmazonFullApiAccountsGeneratedClient, AmazonFullApiAplusContentGeneratedClient, AmazonFullApiAppIntegrationsGeneratedClient, AmazonFullApiApplicationsGeneratedClient, AmazonFullApiAwdGeneratedClient, AmazonFullApiBatchInventoryGeneratedClient, AmazonFullApiCatalogGeneratedClient, AmazonFullApiCreateContainerLabelGeneratedClient, AmazonFullApiCustomerFeedbackGeneratedClient, AmazonFullApiCustomerInvoicesGeneratedClient, AmazonFullApiDefinitionsGeneratedClient, AmazonFullApiDeliveryShipmentInvoiceGeneratedClient, AmazonFullApiEasyShipGeneratedClient, AmazonFullApiFbaInboundGeneratedClient, AmazonFullApiFbaInventoryGeneratedClient, AmazonFullApiFbaOutboundGeneratedClient, AmazonFullApiFeedsGeneratedClient, AmazonFullApiFeesGeneratedClient, AmazonFullApiFinancesGeneratedClient, AmazonFullApiGetOrderGeneratedClient, AmazonFullApiInvoicesGeneratedClient, AmazonFullApiListingsGeneratedClient, AmazonFullApiMerchantFulfillmentGeneratedClient, AmazonFullApiMessagingGeneratedClient, AmazonFullApiNotificationsGeneratedClient, AmazonFullApiOffersGeneratedClient, AmazonFullApiOrdersV0GeneratedClient, AmazonFullApiProductPricingGeneratedClient, AmazonFullApiQueriesGeneratedClient, AmazonFullApiReportsGeneratedClient, AmazonFullApiReturnRetrievalGeneratedClient, AmazonFullApiSalesGeneratedClient, AmazonFullApiSearchOrdersGeneratedClient, AmazonFullApiSellersGeneratedClient, AmazonFullApiSellingpartnersGeneratedClient, AmazonFullApiServiceGeneratedClient, AmazonFullApiShipmentGeneratedClient, AmazonFullApiShipmentInvoiceGeneratedClient, AmazonFullApiShipmentProcessingGeneratedClient, AmazonFullApiShipmentRetrievalGeneratedClient, AmazonFullApiShippingGeneratedClient, AmazonFullApiSolicitationsGeneratedClient, AmazonFullApiSupplySourcesGeneratedClient, AmazonFullApiTokensGeneratedClient, AmazonFullApiTransactionsGeneratedClient, AmazonFullApiTransferPreviewGeneratedClient, AmazonFullApiTransferScheduleGeneratedClient, AmazonFullApiUpdateInventoryGeneratedClient, AmazonFullApiUploadsGeneratedClient, AmazonFullApiVehiclesGeneratedClient, AmazonFullApiVendorDFSandboxGeneratedClient, AmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient, AmazonFullApiVendorInvoiceGeneratedClient, AmazonFullApiVendorOrdersGeneratedClient, AmazonFullApiVendorPaymentsGeneratedClient, AmazonFullApiVendorShippingGeneratedClient, AmazonFullApiVendorShippingLabelsGeneratedClient, AmazonFullApiVendorTransactionGeneratedClient {}

export const AMAZON_FULL_API_GENERATED_FUNCTION_COUNT = 353 as const;
export const AMAZON_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...AmazonFullApiAccountsGeneratedFunctionNames,
  ...AmazonFullApiAplusContentGeneratedFunctionNames,
  ...AmazonFullApiAppIntegrationsGeneratedFunctionNames,
  ...AmazonFullApiApplicationsGeneratedFunctionNames,
  ...AmazonFullApiAwdGeneratedFunctionNames,
  ...AmazonFullApiBatchInventoryGeneratedFunctionNames,
  ...AmazonFullApiCatalogGeneratedFunctionNames,
  ...AmazonFullApiCreateContainerLabelGeneratedFunctionNames,
  ...AmazonFullApiCustomerFeedbackGeneratedFunctionNames,
  ...AmazonFullApiCustomerInvoicesGeneratedFunctionNames,
  ...AmazonFullApiDefinitionsGeneratedFunctionNames,
  ...AmazonFullApiDeliveryShipmentInvoiceGeneratedFunctionNames,
  ...AmazonFullApiEasyShipGeneratedFunctionNames,
  ...AmazonFullApiFbaInboundGeneratedFunctionNames,
  ...AmazonFullApiFbaInventoryGeneratedFunctionNames,
  ...AmazonFullApiFbaOutboundGeneratedFunctionNames,
  ...AmazonFullApiFeedsGeneratedFunctionNames,
  ...AmazonFullApiFeesGeneratedFunctionNames,
  ...AmazonFullApiFinancesGeneratedFunctionNames,
  ...AmazonFullApiGetOrderGeneratedFunctionNames,
  ...AmazonFullApiInvoicesGeneratedFunctionNames,
  ...AmazonFullApiListingsGeneratedFunctionNames,
  ...AmazonFullApiMerchantFulfillmentGeneratedFunctionNames,
  ...AmazonFullApiMessagingGeneratedFunctionNames,
  ...AmazonFullApiNotificationsGeneratedFunctionNames,
  ...AmazonFullApiOffersGeneratedFunctionNames,
  ...AmazonFullApiOrdersV0GeneratedFunctionNames,
  ...AmazonFullApiProductPricingGeneratedFunctionNames,
  ...AmazonFullApiQueriesGeneratedFunctionNames,
  ...AmazonFullApiReportsGeneratedFunctionNames,
  ...AmazonFullApiReturnRetrievalGeneratedFunctionNames,
  ...AmazonFullApiSalesGeneratedFunctionNames,
  ...AmazonFullApiSearchOrdersGeneratedFunctionNames,
  ...AmazonFullApiSellersGeneratedFunctionNames,
  ...AmazonFullApiSellingpartnersGeneratedFunctionNames,
  ...AmazonFullApiServiceGeneratedFunctionNames,
  ...AmazonFullApiShipmentGeneratedFunctionNames,
  ...AmazonFullApiShipmentInvoiceGeneratedFunctionNames,
  ...AmazonFullApiShipmentProcessingGeneratedFunctionNames,
  ...AmazonFullApiShipmentRetrievalGeneratedFunctionNames,
  ...AmazonFullApiShippingGeneratedFunctionNames,
  ...AmazonFullApiSolicitationsGeneratedFunctionNames,
  ...AmazonFullApiSupplySourcesGeneratedFunctionNames,
  ...AmazonFullApiTokensGeneratedFunctionNames,
  ...AmazonFullApiTransactionsGeneratedFunctionNames,
  ...AmazonFullApiTransferPreviewGeneratedFunctionNames,
  ...AmazonFullApiTransferScheduleGeneratedFunctionNames,
  ...AmazonFullApiUpdateInventoryGeneratedFunctionNames,
  ...AmazonFullApiUploadsGeneratedFunctionNames,
  ...AmazonFullApiVehiclesGeneratedFunctionNames,
  ...AmazonFullApiVendorDFSandboxGeneratedFunctionNames,
  ...AmazonFullApiVendorDFSandboxtransactionstatusGeneratedFunctionNames,
  ...AmazonFullApiVendorInvoiceGeneratedFunctionNames,
  ...AmazonFullApiVendorOrdersGeneratedFunctionNames,
  ...AmazonFullApiVendorPaymentsGeneratedFunctionNames,
  ...AmazonFullApiVendorShippingGeneratedFunctionNames,
  ...AmazonFullApiVendorShippingLabelsGeneratedFunctionNames,
  ...AmazonFullApiVendorTransactionGeneratedFunctionNames,
] as const satisfies readonly (keyof AmazonFullApiGeneratedClient)[];

export function createAmazonFullApiGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiGeneratedClient {
  return Object.assign(
    {},
    createAmazonFullApiAccountsGeneratedClient(callOperation),
    createAmazonFullApiAplusContentGeneratedClient(callOperation),
    createAmazonFullApiAppIntegrationsGeneratedClient(callOperation),
    createAmazonFullApiApplicationsGeneratedClient(callOperation),
    createAmazonFullApiAwdGeneratedClient(callOperation),
    createAmazonFullApiBatchInventoryGeneratedClient(callOperation),
    createAmazonFullApiCatalogGeneratedClient(callOperation),
    createAmazonFullApiCreateContainerLabelGeneratedClient(callOperation),
    createAmazonFullApiCustomerFeedbackGeneratedClient(callOperation),
    createAmazonFullApiCustomerInvoicesGeneratedClient(callOperation),
    createAmazonFullApiDefinitionsGeneratedClient(callOperation),
    createAmazonFullApiDeliveryShipmentInvoiceGeneratedClient(callOperation),
    createAmazonFullApiEasyShipGeneratedClient(callOperation),
    createAmazonFullApiFbaInboundGeneratedClient(callOperation),
    createAmazonFullApiFbaInventoryGeneratedClient(callOperation),
    createAmazonFullApiFbaOutboundGeneratedClient(callOperation),
    createAmazonFullApiFeedsGeneratedClient(callOperation),
    createAmazonFullApiFeesGeneratedClient(callOperation),
    createAmazonFullApiFinancesGeneratedClient(callOperation),
    createAmazonFullApiGetOrderGeneratedClient(callOperation),
    createAmazonFullApiInvoicesGeneratedClient(callOperation),
    createAmazonFullApiListingsGeneratedClient(callOperation),
    createAmazonFullApiMerchantFulfillmentGeneratedClient(callOperation),
    createAmazonFullApiMessagingGeneratedClient(callOperation),
    createAmazonFullApiNotificationsGeneratedClient(callOperation),
    createAmazonFullApiOffersGeneratedClient(callOperation),
    createAmazonFullApiOrdersV0GeneratedClient(callOperation),
    createAmazonFullApiProductPricingGeneratedClient(callOperation),
    createAmazonFullApiQueriesGeneratedClient(callOperation),
    createAmazonFullApiReportsGeneratedClient(callOperation),
    createAmazonFullApiReturnRetrievalGeneratedClient(callOperation),
    createAmazonFullApiSalesGeneratedClient(callOperation),
    createAmazonFullApiSearchOrdersGeneratedClient(callOperation),
    createAmazonFullApiSellersGeneratedClient(callOperation),
    createAmazonFullApiSellingpartnersGeneratedClient(callOperation),
    createAmazonFullApiServiceGeneratedClient(callOperation),
    createAmazonFullApiShipmentGeneratedClient(callOperation),
    createAmazonFullApiShipmentInvoiceGeneratedClient(callOperation),
    createAmazonFullApiShipmentProcessingGeneratedClient(callOperation),
    createAmazonFullApiShipmentRetrievalGeneratedClient(callOperation),
    createAmazonFullApiShippingGeneratedClient(callOperation),
    createAmazonFullApiSolicitationsGeneratedClient(callOperation),
    createAmazonFullApiSupplySourcesGeneratedClient(callOperation),
    createAmazonFullApiTokensGeneratedClient(callOperation),
    createAmazonFullApiTransactionsGeneratedClient(callOperation),
    createAmazonFullApiTransferPreviewGeneratedClient(callOperation),
    createAmazonFullApiTransferScheduleGeneratedClient(callOperation),
    createAmazonFullApiUpdateInventoryGeneratedClient(callOperation),
    createAmazonFullApiUploadsGeneratedClient(callOperation),
    createAmazonFullApiVehiclesGeneratedClient(callOperation),
    createAmazonFullApiVendorDFSandboxGeneratedClient(callOperation),
    createAmazonFullApiVendorDFSandboxtransactionstatusGeneratedClient(callOperation),
    createAmazonFullApiVendorInvoiceGeneratedClient(callOperation),
    createAmazonFullApiVendorOrdersGeneratedClient(callOperation),
    createAmazonFullApiVendorPaymentsGeneratedClient(callOperation),
    createAmazonFullApiVendorShippingGeneratedClient(callOperation),
    createAmazonFullApiVendorShippingLabelsGeneratedClient(callOperation),
    createAmazonFullApiVendorTransactionGeneratedClient(callOperation),
  ) as AmazonFullApiGeneratedClient;
}
