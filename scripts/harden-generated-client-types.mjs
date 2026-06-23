import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  clientFileSuffix,
  integrationsDir,
  operationsFileSuffix,
  packagesDir,
  schemaFileSuffix,
} from "./harden-generated-client-types/constants.mjs";
import { walk } from "./harden-generated-client-types/filesystem.mjs";
import { renderSchemaTypesFile } from "./harden-generated-client-types/schema/operations.mjs";
import {
  extractOperations,
  hardenOperationsFile,
  parseClientShape,
  renderClientFile,
} from "./harden-generated-client-types/surface-files.mjs";

const generatedSurfaceRoots = [
  integrationsDir,
  path.join(packagesDir, "integrations", "src"),
].filter((root) => existsSync(root));
const files = (await Promise.all(generatedSurfaceRoots.map((root) => walk(root))))
  .flat()
  .sort((a, b) => a.localeCompare(b));
const operationFiles = files
  .filter((file) => file.endsWith(operationsFileSuffix))
  .sort((a, b) => a.localeCompare(b));

let updatedPairs = 0;
for (const operationsFile of operationFiles) {
  const clientFile = operationsFile.replace(operationsFileSuffix, clientFileSuffix);
  if (!files.includes(clientFile)) continue;

  const operationsSource = await readFile(operationsFile, "utf8");
  const clientSource = await readFile(clientFile, "utf8");
  const operations = extractOperations(operationsSource, operationsFile);
  if (operations.length === 0) continue;

  const clientShape = parseClientShape(clientSource, clientFile);
  const schemaFile = clientFile.replace(clientFileSuffix, schemaFileSuffix);
  const schemaModule = await renderSchemaTypesFile(clientShape.surface, operations, operationsSource);
  const hardenedOperationsSource = hardenOperationsFile(operationsSource, operations);
  const hardenedClientSource = renderClientFile(clientSource, operations, clientFile, clientShape, schemaFile);

  await writeFile(schemaFile, schemaModule);
  if (hardenedOperationsSource !== operationsSource) {
    await writeFile(operationsFile, hardenedOperationsSource);
  }
  if (hardenedClientSource !== clientSource) {
    await writeFile(clientFile, hardenedClientSource);
  }
  updatedPairs += 1;
}

console.log(`Hardened generated client typing for ${updatedPairs} generated API surfaces.`);
