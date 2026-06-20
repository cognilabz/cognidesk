import { describe, expect, it } from "vitest";
import { createStudioAdapterHeaders } from "./target-adapter-auth";

describe("studio adapter auth headers", () => {
  it("uses the manifest runtime service auth header for adapter calls", () => {
    const headers = createStudioAdapterHeaders({
      runtime: {
        serviceAuthHeader: "x-cognidesk-studio-token",
      },
    }, "secret", {
      authorization: "Bearer different-service",
      "x-existing": "kept",
    });

    expect(headers.get("x-cognidesk-studio-token")).toBe("Bearer secret");
    expect(headers.get("authorization")).toBe("Bearer different-service");
    expect(headers.get("x-existing")).toBe("kept");
  });
});
