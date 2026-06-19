import path from "node:path";

import { generatedAt, repoRoot } from "../config.mjs";
import { fetchJson } from "../fetch-json.mjs";
import { renderClientFile, renderOperationsFile } from "../renderers.mjs";
import { writeGeneratedSurface } from "../surface-writer.mjs";
import { addUniqueFunctionNames, compareOperationFunctions, walkDiscoveryResources } from "../operation-utils.mjs";

export async function generateGoogleSpeech() {
  const packageDir = path.join(repoRoot, "packages/integrations/src/voice/google-speech");
  const specs = [
    {
      id: "speech",
      label: "Google Cloud Speech-to-Text API",
      sourceUrl: "https://speech.googleapis.com/$discovery/rest?version=v1",
      docsUrl: "https://cloud.google.com/speech-to-text/docs/reference/rest/v1",
    },
    {
      id: "texttospeech",
      label: "Google Cloud Text-to-Speech API",
      sourceUrl: "https://texttospeech.googleapis.com/$discovery/rest?version=v1",
      docsUrl: "https://cloud.google.com/text-to-speech/docs/reference/rest/v1",
    },
  ];

  const operations = [];
  const specSummaries = [];
  for (const spec of specs) {
    const doc = await fetchJson(spec.sourceUrl, "cognidesk-google-speech-api-generator");
    const collected = [];
    walkDiscoveryResources(doc.resources, collected, spec.sourceUrl);
    for (const operation of collected) {
      operations.push({
        ...operation,
        specId: spec.id,
        specLabel: spec.label,
        sourceUrl: spec.sourceUrl,
        docsUrl: spec.docsUrl,
      });
    }
    specSummaries.push({
      id: spec.id,
      label: spec.label,
      sourceUrl: spec.sourceUrl,
      docsUrl: spec.docsUrl,
      revision: String(doc.revision ?? "unknown"),
      version: String(doc.version ?? "unknown"),
      operationCount: collected.length,
    });
  }
  addUniqueFunctionNames(operations, (operation) => toPascalCase(operation.id));
  operations.sort(compareOperationFunctions);

  const specSummary = {
    source: "google-discovery-bundle",
    specs: specSummaries,
    operationCount: operations.length,
  };

  await writeGeneratedSurface({
    packageDir,
    artifactStem: `google-speech-full-api-${generatedAt}`,
    docsPayload: { generatedAt, spec: specSummary, operations },
    functionsPayload: { generatedAt, spec: specSummary, functions: operations.map(({ functionName }) => functionName) },
    operationsSource: renderOperationsFile({
      header: "// Generated from Google Cloud Speech and Text-to-Speech Discovery documents.\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.",
      constPrefix: "GOOGLE_SPEECH_FULL_API",
      typePrefix: "GoogleSpeechFullApi",
      methodType: "\"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\"",
      specSource: "google-discovery-bundle",
      specVersion: `google-speech-discovery-${generatedAt}`,
      specType: `{
  source: string;
  specs: readonly GoogleSpeechFullApiSpec[];
  operationCount: number;
}`,
      specSummary,
      specsConstType: "GoogleSpeechFullApiSpec",
      specs: specSummaries,
      operationInterfaceFields: [
        "id: string;",
        "operationId: string;",
        "functionName: string;",
        "method: GoogleSpeechFullApiOperationMethod;",
        "path: string;",
        "description: string;",
        "specId: string;",
        "specLabel: string;",
        "sourceUrl: string;",
        "docsUrl: string;",
      ],
      operations,
      keyTypeName: "GoogleSpeechFullApiOperationId",
      keyField: "id",
    }),
    clientSource: renderClientFile({
      header: "// Generated from Google Cloud Speech and Text-to-Speech Discovery documents.\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.",
      typePrefix: "GoogleSpeechFullApi",
      callerType: "GoogleSpeechGeneratedOperationCaller",
      clientInterface: "GoogleSpeechFullApiGeneratedClient",
      createFunction: "createGoogleSpeechFullApiGeneratedClient",
      constPrefix: "GOOGLE_SPEECH_FULL_API",
      requestInputType: "GoogleSpeechOperationRequestInput",
      resourceType: "GoogleSpeechResource",
      operations,
      keyField: "id",
    }),
  });

  console.log(`packages/integrations/src/voice/google-speech: generated ${operations.length} operations`);
}
