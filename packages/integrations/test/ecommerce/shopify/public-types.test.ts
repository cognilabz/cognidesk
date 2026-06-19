import { describe, expectTypeOf, it } from "vitest";
import type {
  ShopifyDraftOrderCreateResult,
  ShopifyDraftOrderInput,
  ShopifyEcommerceClient,
  ShopifySearchResult,
} from "../../../src/ecommerce/shopify/index.js";

describe("@cognidesk/integrations public types", () => {
  it("exposes typed draft-order helper inputs and results", () => {
    expectTypeOf<ShopifyDraftOrderInput["input"]["lineItems"]>().items.toMatchTypeOf<{ quantity: number }>();
    expectTypeOf<ShopifyDraftOrderCreateResult["draftOrder"]>().toMatchTypeOf<{ id?: string; invoiceUrl?: string | null } | null | undefined>();
    expectTypeOf<ShopifyEcommerceClient["createDraftOrder"]>().returns.resolves.toMatchTypeOf<ShopifyDraftOrderCreateResult>();
    expectTypeOf<ShopifyEcommerceClient["searchOrders"]>().returns.resolves.toMatchTypeOf<ShopifySearchResult<{ id?: string }>>();
  });
});
