import path from "node:path";

import { generatedAt, repoRoot } from "../config.mjs";
import { fetchJson } from "../fetch-json.mjs";
import { renderClientFile, renderOperationsFile } from "../renderers.mjs";
import { writeGeneratedSurface } from "../surface-writer.mjs";
import { addUniqueFunctionNames, compareOperationFunctions, openApiOperations, toPascalCase } from "../operation-utils.mjs";

export async function generateAzureSpeech() {
  const packageDir = path.join(repoRoot, "packages/integrations/src/voice/azure-speech");
  const specs = [
    {
      id: "speech-to-text",
      label: "Azure Speech to Text REST API",
      sourceUrl: "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/Speech/SpeechToText/stable/2025-10-15/speechtotext.json",
      docsUrl: "https://learn.microsoft.com/azure/ai-services/speech-service/rest-speech-to-text",
    },
    {
      id: "custom-text-to-speech",
      label: "Azure Custom Voice REST API",
      sourceUrl: "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/Speech/TextToSpeech/preview/2024-02-01-preview/texttospeech.json",
      docsUrl: "https://learn.microsoft.com/azure/ai-services/speech-service/professional-voice-create-project",
    },
    {
      id: "batch-text-to-speech",
      label: "Azure Batch Text to Speech REST API",
      sourceUrl: "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/Speech/BatchTextToSpeech/stable/2024-04-01/batchsynthesis.json",
      docsUrl: "https://learn.microsoft.com/azure/ai-services/speech-service/batch-synthesis",
    },
    {
      id: "transcription",
      label: "Azure Transcription REST API",
      sourceUrl: "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/Speech/Transcription/stable/2025-10-15/Transcription.json",
      docsUrl: "https://learn.microsoft.com/azure/ai-services/speech-service/batch-transcription",
    },
  ];

  const operations = [];
  const specSummaries = [];
  for (const specConfig of specs) {
    const spec = await fetchJson(specConfig.sourceUrl, "cognidesk-azure-speech-api-generator");
    const collected = openApiOperations(
      spec,
      specConfig.sourceUrl,
      (operation) => `${toPascalCase(specConfig.id)}${toPascalCase(operation.operationId || operation.summary || `${operation.method} ${operation.path}`)}`,
    );
    for (const operation of collected) {
      operations.push({
        ...operation,
        id: `${specConfig.id}:${operation.operationId || operation.method}:${operation.path}`,
        specId: specConfig.id,
        specLabel: specConfig.label,
        docsUrl: specConfig.docsUrl,
      });
    }
    specSummaries.push({
      id: specConfig.id,
      label: specConfig.label,
      sourceUrl: specConfig.sourceUrl,
      docsUrl: specConfig.docsUrl,
      swagger: spec.swagger ?? "",
      version: spec.info?.version ?? "",
      title: spec.info?.title ?? "",
      pathCount: Object.keys(spec.paths ?? {}).length,
      operationCount: collected.length,
    });
  }
  addUniqueFunctionNames(operations, (operation) => operation.functionName);
  operations.sort(compareOperationFunctions);

  const specSummary = {
    source: "azure-rest-api-specs-speech-bundle",
    specs: specSummaries,
    pathCount: specSummaries.reduce((sum, spec) => sum + spec.pathCount, 0),
    operationCount: operations.length,
  };

  await writeGeneratedSurface({
    packageDir,
    artifactStem: `azure-speech-full-api-${generatedAt}`,
    docsPayload: { generatedAt, spec: specSummary, operations },
    functionsPayload: { generatedAt, spec: specSummary, functions: operations.map(({ functionName }) => functionName) },
    operationsSource: renderOperationsFile({
      header: "// Generated from Azure REST API specs Speech data-plane files.\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.",
      constPrefix: "AZURE_SPEECH_FULL_API",
      typePrefix: "AzureSpeechFullApi",
      methodType: "\"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\"",
      specSource: "https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/Speech",
      specVersion: `azure-speech-rest-api-specs-${generatedAt}`,
      specType: `{
  source: string;
  specs: readonly AzureSpeechFullApiSpec[];
  pathCount: number;
  operationCount: number;
}`,
      specSummary,
      specsConstType: "AzureSpeechFullApiSpec",
      specs: specSummaries,
      operationInterfaceFields: [
        "id: string;",
        "operationId: string;",
        "functionName: string;",
        "method: AzureSpeechFullApiOperationMethod;",
        "path: string;",
        "summary: string;",
        "tags: readonly string[];",
        "requestContentTypes: readonly string[];",
        "sourceUrl: string;",
        "specId: string;",
        "specLabel: string;",
        "docsUrl: string;",
      ],
      operations,
      keyTypeName: "AzureSpeechFullApiOperationId",
      keyField: "id",
    }),
    clientSource: renderClientFile({
      header: "// Generated from Azure REST API specs Speech data-plane files.\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.",
      typePrefix: "AzureSpeechFullApi",
      callerType: "AzureSpeechGeneratedOperationCaller",
      clientInterface: "AzureSpeechFullApiGeneratedClient",
      createFunction: "createAzureSpeechFullApiGeneratedClient",
      constPrefix: "AZURE_SPEECH_FULL_API",
      requestInputType: "AzureSpeechOperationRequestInput",
      resourceType: "AzureSpeechResource",
      operations,
      keyField: "id",
    }),
  });

  console.log(`packages/integrations/src/voice/azure-speech: generated ${operations.length} operations`);
}
