import { join } from "node:path";
import { flightDemoRoot, loadFlightDemoConfig, requireConfiguredApiKey, resolveFlightDemoPath } from "./config.js";
import { createConfiguredModelSet } from "./flight-agent.js";
import {
  buildFlightKnowledgeIndex,
  loadFlightKnowledgeDocuments,
  saveFlightKnowledgeIndex,
} from "./knowledge-index.js";

const config = await loadFlightDemoConfig();
const apiKey = requireConfiguredApiKey(config);
const embeddingModel = createConfiguredModelSet(config, apiKey).journeyEmbedding;

const documents = await loadFlightKnowledgeDocuments(join(flightDemoRoot(), "knowledge", "documents.json"));
const index = await buildFlightKnowledgeIndex({ documents, embeddingModel });
const indexPath = resolveFlightDemoPath(config.storage.knowledgeIndexPath);
await saveFlightKnowledgeIndex(indexPath, index);

console.log(`Indexed ${index.entries.length} flight demo Knowledge documents at ${indexPath}`);
