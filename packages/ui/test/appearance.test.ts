import { describe, expect, it } from "vitest";
import {
  resolveElementClassName,
  resolveInlineStyle,
  resolveWidgetElementClassName,
  resolveWidgetInlineStyle,
} from "../src/index.js";

describe("appearance helpers", () => {
  it("merges default, global, and widget-specific class names and styles", () => {
    const appearance = {
      variables: {
        "--cd-color-primary": "#111111",
      },
      elements: {
        root: {
          className: "custom-root",
          style: {
            height: 720,
          },
        },
        panel: "global-panel",
      },
      widgets: {
        confirmation: {
          elements: {
            panel: {
              className: "specific-panel",
              style: {
                borderRadius: 4,
              },
            },
            primaryButton: "confirm-primary",
          },
        },
      },
    };

    expect(resolveElementClassName("root", appearance)).toBe("cd-root custom-root");
    expect(resolveInlineStyle("root", appearance)).toEqual({
      "--cd-color-primary": "#111111",
      height: 720,
    });
    expect(resolveWidgetElementClassName("confirmation", "panel", appearance)).toBe("cd-widget-panel global-panel specific-panel");
    expect(resolveWidgetInlineStyle("confirmation", "panel", appearance)).toEqual({
      "--cd-color-primary": "#111111",
      borderRadius: 4,
    });
    expect(resolveWidgetElementClassName("confirmation", "primaryButton", appearance)).toBe(
      "cd-widget-button cd-widget-button-primary confirm-primary",
    );
  });
});
