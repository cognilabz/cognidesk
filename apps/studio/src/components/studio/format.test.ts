import { describe, expect, it } from "vitest";
import { formatDateTime } from "./format";

describe("formatDateTime", () => {
  it("returns the original string for an invalid date", () => {
    expect(formatDateTime("not-a-date")).toBe("not-a-date");
    expect(formatDateTime("2026-99-99")).toBe("2026-99-99");
  });

  it("returns the original string for an empty string", () => {
    expect(formatDateTime("")).toBe("");
  });

  it("formats a valid ISO date string matching DD Mon, HH:MM pattern", () => {
    const result = formatDateTime("2026-06-26T08:20:00.000Z");
    expect(result).toMatch(/^\d{2} [A-Z][a-z]{2}, \d{2}:\d{2}$/);
  });

  it("includes separating comma and space between date and time", () => {
    const result = formatDateTime("2026-03-15T14:30:00.000Z");
    expect(result).toContain(",");
    const [datePart, timePart] = result.split(", ");
    expect(datePart).toMatch(/^\d{2} [A-Z][a-z]{2}$/);
    expect(timePart).toMatch(/^\d{2}:\d{2}$/);
  });

  it("uses h23 clock cycle so midnight renders as 00 not 24", () => {
    // Create a timestamp that is midnight in UTC+0 (UTC midnight)
    // The h23 hourCycle ensures 00:xx rather than 24:xx
    const result = formatDateTime("2026-01-01T00:00:00.000Z");
    const timePart = result.split(", ")[1];
    // Hour should be a two-digit number that is not "24"
    expect(timePart).not.toMatch(/^24:/);
    expect(timePart).toMatch(/^\d{2}:\d{2}$/);
  });

  it("pads single-digit day numbers with a leading zero", () => {
    // A date in the first nine days of a month should still have two-digit day
    const result = formatDateTime("2026-06-01T12:00:00.000Z");
    const dayPart = result.split(" ")[0];
    expect(dayPart).toHaveLength(2);
    expect(dayPart).toMatch(/^\d{2}$/);
  });

  it("produces consistent structure across different months", () => {
    const january = formatDateTime("2026-01-15T10:05:00.000Z");
    const december = formatDateTime("2026-12-31T23:59:00.000Z");
    expect(january).toMatch(/^\d{2} [A-Z][a-z]{2}, \d{2}:\d{2}$/);
    expect(december).toMatch(/^\d{2} [A-Z][a-z]{2}, \d{2}:\d{2}$/);
  });
});