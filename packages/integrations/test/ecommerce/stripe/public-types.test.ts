import { describe, expectTypeOf, it } from "vitest";
import type {
  StripeCheckoutSessionResource,
  StripeDisputeResource,
  StripeEcommerceClient,
  StripeKnownOperationResponseMap,
  StripePaymentIntentResource,
  StripeSubscriptionResource,
} from "../../../src/ecommerce/stripe/index.js";

describe("@cognidesk/integrations public types", () => {
  it("exposes provider-specific Stripe operation and helper result shapes", () => {
    expectTypeOf<StripeKnownOperationResponseMap["PostPaymentIntents"]>().toEqualTypeOf<StripePaymentIntentResource>();
    expectTypeOf<StripeKnownOperationResponseMap["PostCheckoutSessions"]>().toEqualTypeOf<StripeCheckoutSessionResource>();
    expectTypeOf<StripeKnownOperationResponseMap["PostSubscriptionsSubscriptionExposedId"]>()
      .toEqualTypeOf<StripeSubscriptionResource>();
    expectTypeOf<StripeKnownOperationResponseMap["PostDisputesDispute"]>().toEqualTypeOf<StripeDisputeResource>();
    expectTypeOf<StripeEcommerceClient["createPaymentIntent"]>().returns.resolves.toMatchTypeOf<StripePaymentIntentResource>();
    expectTypeOf<StripePaymentIntentResource["status"]>().toMatchTypeOf<
      | "requires_payment_method"
      | "requires_confirmation"
      | "requires_action"
      | "processing"
      | "requires_capture"
      | "canceled"
      | "succeeded"
      | undefined
    >();
  });
});
