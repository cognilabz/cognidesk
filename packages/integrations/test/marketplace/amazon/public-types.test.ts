import { describe, expectTypeOf, it } from "vitest";
import type {
  AmazonKnownOperationResponseMap,
  AmazonMarketplaceClient,
  AmazonMarketplaceParticipationsResponse,
  AmazonOrderItemsResponse,
  AmazonOrderResponse,
  AmazonOrdersResponse,
} from "../../../src/marketplace/amazon/index.js";

describe("@cognidesk/integrations public types", () => {
  it("exposes typed SP-API helper and selected operation responses", () => {
    expectTypeOf<AmazonKnownOperationResponseMap["ordersV0:getOrders"]>().toEqualTypeOf<AmazonOrdersResponse>();
    expectTypeOf<AmazonKnownOperationResponseMap["ordersV0:getOrder"]>().toEqualTypeOf<AmazonOrderResponse>();
    expectTypeOf<AmazonKnownOperationResponseMap["ordersV0:getOrderItems"]>().toEqualTypeOf<AmazonOrderItemsResponse>();
    expectTypeOf<AmazonKnownOperationResponseMap["sellers:getMarketplaceParticipations"]>()
      .toEqualTypeOf<AmazonMarketplaceParticipationsResponse>();
    expectTypeOf<AmazonMarketplaceClient["getOrders"]>().returns.resolves.toMatchTypeOf<AmazonOrdersResponse>();
    expectTypeOf<AmazonMarketplaceClient["getOrderItems"]>().returns.resolves.toMatchTypeOf<AmazonOrderItemsResponse>();
  });
});
