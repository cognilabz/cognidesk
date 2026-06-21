import { describe } from "vitest";

import { registerTeamsChangeNotificationTests } from "./change-notifications.js";
import { registerTeamsConformanceTests } from "./conformance.js";
import { registerTeamsManifestTests } from "./manifest.js";
import { registerTeamsMessageOperationTests } from "./message-operations.js";

describe("@cognidesk/integration-workplace-teams", () => {
  registerTeamsManifestTests();
  registerTeamsMessageOperationTests();
  registerTeamsChangeNotificationTests();
  registerTeamsConformanceTests();
});
