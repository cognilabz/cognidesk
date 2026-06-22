import { describe } from "vitest";

import { registerWherebyClientOperationTests } from "./adapter/client-operations.js";
import { registerWherebyConformanceTests } from "./adapter/conformance.js";
import { registerWherebyGeneratedApiTests } from "./adapter/generated-api.js";
import { registerWherebyManifestTests } from "./adapter/manifest.js";
import { registerWherebyWebhookTests } from "./adapter/webhooks.js";

describe("@cognidesk/integration-video-whereby", () => {
  registerWherebyManifestTests();
  registerWherebyClientOperationTests();
  registerWherebyGeneratedApiTests();
  registerWherebyWebhookTests();
  registerWherebyConformanceTests();
});
