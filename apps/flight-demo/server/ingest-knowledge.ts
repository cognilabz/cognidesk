import { join } from "node:path";
import { flightDemoRoot, loadFlightDemoConfig, requireConfiguredModelApiKeys, resolveFlightDemoPath } from "./config.js";
import { createConfiguredModelSet } from "./agent/index.js";
import {
  buildFlightKnowledgeIndex,
  loadFlightKnowledgeDocuments,
  saveFlightKnowledgeIndex,
} from "./knowledge-index.js";

const config = await loadFlightDemoConfig();
const apiKeys = requireConfiguredModelApiKeys(config);
const embeddingModel = createConfiguredModelSet(config, apiKeys).journeyEmbedding;

const documents = await loadFlightKnowledgeDocuments(join(flightDemoRoot(), "knowledge", "documents.json"));
const index = await buildFlightKnowledgeIndex({ documents, embeddingModel });
const indexPath = resolveFlightDemoPath(config.storage.knowledgeIndexPath);
await saveFlightKnowledgeIndex(indexPath, index);

console.log(`Indexed ${index.entries.length} flight demo Knowledge documents at ${indexPath}`);
