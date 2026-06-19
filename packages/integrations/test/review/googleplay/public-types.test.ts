import { describe, expectTypeOf, it } from "vitest";
import type {
  GooglePlayKnownOperationResponseMap,
  GooglePlayReview,
  GooglePlayReviewReplyResponse,
  GooglePlayReviewsClient,
  GooglePlayReviewsListResponse,
} from "../../../src/review/googleplay/index.js";

describe("@cognidesk/integrations public types", () => {
  it("exposes typed Android Publisher review operation responses", () => {
    expectTypeOf<GooglePlayKnownOperationResponseMap["reviews.list"]>().toEqualTypeOf<GooglePlayReviewsListResponse>();
    expectTypeOf<GooglePlayKnownOperationResponseMap["reviews.get"]>().toEqualTypeOf<GooglePlayReview>();
    expectTypeOf<GooglePlayKnownOperationResponseMap["reviews.reply"]>().toEqualTypeOf<GooglePlayReviewReplyResponse>();
    expectTypeOf<GooglePlayReviewsClient["listReviews"]>().returns.resolves.toMatchTypeOf<GooglePlayReviewsListResponse>();
    expectTypeOf<GooglePlayReview["comments"]>().items.toHaveProperty("userComment");
  });
});
