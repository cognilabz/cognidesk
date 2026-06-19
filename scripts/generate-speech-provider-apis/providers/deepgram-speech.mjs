import path from "node:path";

import { generatedAt, repoRoot } from "../config.mjs";
import { fetchJson } from "../fetch-json.mjs";
import { renderClientFile, renderOperationsFile } from "../renderers.mjs";
import { writeGeneratedSurface } from "../surface-writer.mjs";
import { compareOperationFunctions, openApiOperations, toPascalCase } from "../operation-utils.mjs";

export async function generateDeepgramSpeech() {
  const sourceUrl = "https://developers.deepgram.com/openapi.json";
  const packageDir = path.join(repoRoot, "packages/integrations/src/voice/deepgram");
  const spec = await fetchJson(sourceUrl, "cognidesk-deepgram-speech-api-generator");
  const operations = openApiOperations(spec, sourceUrl, (operation) => toPascalCase(operation.operationId || operation.summary || `${operation.method} ${operation.path}`));
  operations.sort(compareOperationFunctions);

  const specSummary = {
    sourceUrl,
    docsUrl: "https://developers.deepgram.com/reference/",
    openapi: spec.openapi ?? "",
    version: spec.info?.version ?? "",
    title: spec.info?.title ?? "",
    pathCount: Object.keys(spec.paths ?? {}).length,
    operationCount: operations.length,
  };

  await writeGeneratedSurface({
    packageDir,
    artifactStem: `deepgram-speech-full-api-${generatedAt}`,
    docsPayload: { generatedAt, spec: specSummary, operations },
    functionsPayload: { generatedAt, spec: specSummary, functions: operations.map(({ functionName }) => functionName) },
    operationsSource: renderOperationsFile({
      header: `// Generated from Deepgram official OpenAPI (${sourceUrl}).\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.`,
      constPrefix: "DEEPGRAM_SPEECH_FULL_API",
      typePrefix: "DeepgramSpeechFullApi",
      methodType: "\"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\"",
      specSource: sourceUrl,
      specVersion: `deepgram-${spec.info?.version ?? generatedAt}`,
      specType: `{
  sourceUrl: string;
  docsUrl: string;
  openapi: string;
  version: string;
  title: string;
  pathCount: number;
  operationCount: number;
}`,
      specSummary,
      operationInterfaceFields: [
        "id: string;",
        "operationId: string;",
        "functionName: string;",
        "method: DeepgramSpeechFullApiOperationMethod;",
        "path: string;",
        "summary: string;",
        "tags: readonly string[];",
        "requestContentTypes: readonly string[];",
        "sourceUrl: string;",
      ],
      operations,
      keyTypeName: "DeepgramSpeechFullApiOperationId",
      keyField: "id",
    }),
    clientSource: renderClientFile({
      header: `// Generated from Deepgram official OpenAPI (${sourceUrl}).\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.`,
      typePrefix: "DeepgramSpeechFullApi",
      callerType: "DeepgramSpeechGeneratedOperationCaller",
      clientInterface: "DeepgramSpeechFullApiGeneratedClient",
      createFunction: "createDeepgramSpeechFullApiGeneratedClient",
      constPrefix: "DEEPGRAM_SPEECH_FULL_API",
      requestInputType: "DeepgramSpeechOperationRequestInput",
      resourceType: "DeepgramSpeechResource",
      operations,
      keyField: "id",
    }),
  });

  console.log(`packages/integrations/src/voice/deepgram: generated ${operations.length} operations`);
}
