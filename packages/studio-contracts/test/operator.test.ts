import { describe, expect, it } from "vitest";
import { StudioOperatorClientEventSchema } from "../src/index.js";

const sessionId = "11111111-1111-4111-8111-111111111111";

describe("studio operator contracts", () => {
  it("accepts UUID session ids for client events", () => {
    expect(StudioOperatorClientEventSchema.parse({
      type: "turn.start",
      sessionId,
      message: "continue",
    })).toMatchObject({ sessionId });
  });

  it("rejects path-like session ids for client events", () => {
    expect(() => StudioOperatorClientEventSchema.parse({
      type: "session.start",
      sessionId: "../outside",
      targetId: "flight-demo-local",
    })).toThrow();
  });
});
