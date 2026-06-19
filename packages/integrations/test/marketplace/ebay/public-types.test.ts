import { describe, expectTypeOf, it } from "vitest";
import type {
  EbayMarketplaceClient,
  EbayNotificationDestination,
  EbayNotificationSubscription,
  EbayOrder,
  EbayOrdersCollection,
  EbayPaymentDispute,
  EbayRefund,
} from "../../../src/marketplace/ebay/index.js";

describe("@cognidesk/integrations public types", () => {
  it("exposes typed selected eBay REST resource responses", () => {
    expectTypeOf<EbayMarketplaceClient["getOrder"]>().returns.resolves.toMatchTypeOf<EbayOrder>();
    expectTypeOf<EbayMarketplaceClient["searchOrders"]>().returns.resolves.toMatchTypeOf<EbayOrdersCollection>();
    expectTypeOf<EbayMarketplaceClient["issueRefund"]>().returns.resolves.toMatchTypeOf<EbayRefund>();
    expectTypeOf<EbayMarketplaceClient["getPaymentDispute"]>().returns.resolves.toMatchTypeOf<EbayPaymentDispute>();
    expectTypeOf<EbayMarketplaceClient["createNotificationDestination"]>()
      .returns.resolves.toMatchTypeOf<EbayNotificationDestination>();
    expectTypeOf<EbayMarketplaceClient["createNotificationSubscription"]>()
      .returns.resolves.toMatchTypeOf<EbayNotificationSubscription>();
  });
});
