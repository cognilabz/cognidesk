import { describe } from "vitest";

import { registerTeamsChangeNotificationTests } from "./adapter/change-notifications.js";
import { registerTeamsConformanceTests } from "./adapter/conformance.js";
import { registerTeamsGeneratedApiTests } from "./adapter/generated-api.js";
import { registerTeamsManifestTests } from "./adapter/manifest.js";
import { registerTeamsMessageOperationTests } from "./adapter/message-operations.js";

describe("@cognidesk/integrations", () => {
  registerTeamsManifestTests();
  registerTeamsGeneratedApiTests();
  registerTeamsMessageOperationTests();
  registerTeamsChangeNotificationTests();
  registerTeamsConformanceTests();
});
