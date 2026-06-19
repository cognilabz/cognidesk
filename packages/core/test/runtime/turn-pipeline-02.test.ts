import { describe } from "vitest";

import { registerPromptContextTests } from "./turn-pipeline-02/prompt-context.js";
import { registerJourneySelectionTests } from "./turn-pipeline-02/journey-selection.js";
import { registerObservabilityTests } from "./turn-pipeline-02/observability.js";

describe("runtime turn pipeline 02", () => {
  registerPromptContextTests();
  registerJourneySelectionTests();
  registerObservabilityTests();
});
