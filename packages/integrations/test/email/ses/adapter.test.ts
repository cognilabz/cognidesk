import { describe } from "vitest";
import { registerSesClientTests } from "./adapter/client.js";
import { registerSesConformanceTests } from "./adapter/conformance.js";
import { registerSesEventTests } from "./adapter/events.js";
import { registerSesManifestTests } from "./adapter/manifest.js";

describe("@cognidesk/integrations", () => {
  registerSesManifestTests();
  registerSesClientTests();
  registerSesEventTests();
  registerSesConformanceTests();
});
