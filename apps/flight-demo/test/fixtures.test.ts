import { describe, expect, it } from "vitest";
import { isExplicitBookingConfirmation } from "./fixtures.js";

describe("flight demo test fixture confirmation matching", () => {
  it("matches explicit booking confirmations without accepting substrings or negations", () => {
    expect(isExplicitBookingConfirmation("yes please, book it")).toBe(true);
    expect(isExplicitBookingConfirmation("go ahead and proceed")).toBe(true);
    expect(isExplicitBookingConfirmation("yesterday works better")).toBe(false);
    expect(isExplicitBookingConfirmation("do not proceed")).toBe(false);
    expect(isExplicitBookingConfirmation("no, don't book it")).toBe(false);
  });
});
