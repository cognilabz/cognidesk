import { describe, expect, it } from "vitest";
import { startCognideskOtel } from "../src/index";

describe("startCognideskOtel", () => {
  it("starts and shuts down the OpenTelemetry SDK", async () => {
    const handle = startCognideskOtel({
      serviceName: "cognidesk-otel-smoke-test",
      installShutdownHooks: false,
    });

    await expect(handle.shutdown()).resolves.toBeUndefined();
  });
});
