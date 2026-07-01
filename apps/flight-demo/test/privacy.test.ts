import { describe, expect, it } from "vitest";
import type { RuntimePrivacyMaskRule } from "@cognidesk/core";
import { createFlightDemoPrivacySettings, parseFlightPrivacyConsent } from "../src/privacy";

function applyMaskRules(value: string, rules: RuntimePrivacyMaskRule[]) {
  return rules.reduce((text, rule) => {
    const pattern = typeof rule.pattern === "string"
      ? new RegExp(rule.pattern, rule.flags)
      : rule.pattern;
    return text.replace(pattern, rule.replacement ?? "[redacted]");
  }, value);
}

describe("flight demo privacy settings", () => {
  it("uses full runtime content when the user gives demo trace consent", () => {
    expect(createFlightDemoPrivacySettings("consent")).toBeUndefined();
  });

  it("parses only explicit consent choices from local storage", () => {
    expect(parseFlightPrivacyConsent("consent")).toBe("consent");
    expect(parseFlightPrivacyConsent("no")).toBe("no");
    expect(parseFlightPrivacyConsent("privacy")).toBeNull();
    expect(parseFlightPrivacyConsent(null)).toBeNull();
  });

  it("passes explicit privacy masks for customer-sensitive demo values", () => {
    const settings = createFlightDemoPrivacySettings("no");

    expect(settings).toMatchObject({
      traceContent: "none",
      customerRelationVisibility: "none",
      masks: [
        {
          name: "email",
          replacement: "[email]",
        },
        {
          name: "phone",
          replacement: "$1[phone]",
        },
        {
          name: "booking",
          replacement: "[booking]",
        },
      ],
    });
    expect(settings?.masks?.map((rule) => rule.name)).toEqual(["email", "phone", "booking"]);
  });

  it("masks email, phone, and booking references without SDK defaults", () => {
    const settings = createFlightDemoPrivacySettings("no");

    expect(applyMaskRules(
      "Contact alex@example.com or +43 664 1234567 about CD-CL102-4821.",
      settings?.masks ?? [],
    )).toBe("Contact [email] or [phone] about [booking].");
  });
});
