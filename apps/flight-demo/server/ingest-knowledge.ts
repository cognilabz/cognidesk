import { join } from "node:path";
import { openaiModel } from "@cognidesk/model-openai";
import { flightDemoRoot, loadFlightDemoConfig, requireConfiguredApiKey, resolveFlightDemoPath } from "./config.js";
import {
  buildFlightKnowledgeIndex,
  loadFlightKnowledgeDocuments,
  saveFlightKnowledgeIndex,
} from "./knowledge-index.js";

const config = await loadFlightDemoConfig();
const apiKey = requireConfiguredApiKey(config);
const embeddingModel = openaiModel({
  model: config.models.roles.journeyEmbedding,
  embeddingModel: config.models.roles.journeyEmbedding,
  apiKey,
});

const documents = await loadFlightKnowledgeDocuments(join(flightDemoRoot(), "knowledge", "documents.json"));
const index = await buildFlightKnowledgeIndex({ documents, embeddingModel });
const indexPath = resolveFlightDemoPath(config.storage.knowledgeIndexPath);
await saveFlightKnowledgeIndex(indexPath, index);

console.log(`Indexed ${index.entries.length} flight demo Knowledge documents at ${indexPath}`);
