import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { docsDir } from "./config.mjs";

export async function writeGeneratedSurface({
  packageDir,
  artifactStem,
  docsPayload,
  functionsPayload,
  operationsSource,
  clientSource,
}) {
  await mkdir(packageDir, { recursive: true });
  await mkdir(docsDir, { recursive: true });
  await writeFile(path.join(packageDir, "full-api-operations.generated.ts"), operationsSource);
  await writeFile(path.join(packageDir, "full-api-client.generated.ts"), clientSource);
  await writeFile(path.join(docsDir, `${artifactStem}.operations.json`), `${JSON.stringify(docsPayload, null, 2)}\n`);
  await writeFile(path.join(docsDir, `${artifactStem}.functions.json`), `${JSON.stringify(functionsPayload, null, 2)}\n`);
}
