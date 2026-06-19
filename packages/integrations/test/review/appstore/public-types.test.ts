import { describe, expectTypeOf, it } from "vitest";
import type {
  AppStoreCustomerReviewResponseDocument,
  AppStoreKnownOperationResponseMap,
  AppStoreReviewResponse,
  AppStoreReviewsClient,
  AppStoreReviewsListResponse,
} from "../../../src/review/appstore/index.js";

describe("@cognidesk/integrations public types", () => {
  it("exposes typed App Store Connect review JSON:API documents", () => {
    expectTypeOf<AppStoreKnownOperationResponseMap["apps_customerReviews_getToManyRelated"]>()
      .toEqualTypeOf<AppStoreReviewsListResponse>();
    expectTypeOf<AppStoreKnownOperationResponseMap["customerReviews_getInstance"]>()
      .toEqualTypeOf<AppStoreReviewResponse>();
    expectTypeOf<AppStoreKnownOperationResponseMap["customerReviewResponses_createInstance"]>()
      .toEqualTypeOf<AppStoreCustomerReviewResponseDocument>();
    expectTypeOf<AppStoreReviewsClient["listReviews"]>().returns.resolves.toMatchTypeOf<AppStoreReviewsListResponse>();
    expectTypeOf<AppStoreReviewsClient["createOrUpdateReviewResponse"]>()
      .returns.resolves.toMatchTypeOf<AppStoreCustomerReviewResponseDocument>();
  });
});
