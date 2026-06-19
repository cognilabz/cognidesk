import path from "node:path";

import { generatedAt, repoRoot } from "../config.mjs";
import { fetchJson } from "../fetch-json.mjs";
import { renderClientFile, renderOperationsFile } from "../renderers.mjs";
import { writeGeneratedSurface } from "../surface-writer.mjs";
import { addUniqueFunctionNames, compareOperationFunctions, toPascalCase } from "../operation-utils.mjs";

export async function generateAwsSpeech() {
  const repo = "aws/api-models-aws";
  const branch = "main";
  const specSource = `https://github.com/${repo}/tree/${branch}/models`;
  const rawBaseUrl = `https://raw.githubusercontent.com/${repo}/${branch}`;
  const packageDir = path.join(repoRoot, "packages/integrations/src/voice/aws-speech");
  const modelConfigs = [
    {
      serviceKey: "transcribe-streaming",
      modelPath: "models/transcribe-streaming/service/2017-10-26/transcribe-streaming-2017-10-26.json",
      docsUrl: "https://docs.aws.amazon.com/transcribe/latest/APIReference/API_Operations_Amazon_Transcribe_Streaming_Service.html",
    },
    {
      serviceKey: "transcribe",
      modelPath: "models/transcribe/service/2017-10-26/transcribe-2017-10-26.json",
      docsUrl: "https://docs.aws.amazon.com/transcribe/latest/APIReference/API_Operations_Amazon_Transcribe_Service.html",
    },
    {
      serviceKey: "polly",
      modelPath: "models/polly/service/2016-06-10/polly-2016-06-10.json",
      docsUrl: "https://docs.aws.amazon.com/polly/latest/dg/API_Operations_Amazon_Polly.html",
    },
  ];

  const operations = [];
  const specSummaries = [];
  for (const config of modelConfigs) {
    const sourceUrl = `${rawBaseUrl}/${config.modelPath}`;
    const spec = await fetchJson(sourceUrl, "cognidesk-aws-speech-api-generator");
    const modelName = path.basename(config.modelPath, ".json");
    const service = Object.entries(spec.shapes ?? {}).find(([, shape]) => shape.type === "service");
    const serviceShape = service?.[1] ?? {};
    const serviceTraits = serviceShape.traits ?? {};
    const awsService = serviceTraits["aws.api#service"] ?? {};
    const sigv4 = serviceTraits["aws.auth#sigv4"] ?? {};
    const endpointPrefix = awsService.endpointPrefix ?? sigv4.name ?? config.serviceKey;
    const signingName = sigv4.name ?? endpointPrefix;
    const sdkId = awsService.sdkId ?? modelName;
    const apiVersion = String(awsService.apiVersion ?? modelName.match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "");
    const protocol = Object.keys(serviceTraits).find((trait) => trait.startsWith("aws.protocols#"))?.replace("aws.protocols#", "") ?? "unknown";
    const operationEntries = Object.entries(spec.shapes ?? {}).filter(([, shape]) => shape.type === "operation");

    for (const [qualifiedName, operation] of operationEntries) {
      const operationId = qualifiedName.split("#").pop() ?? qualifiedName;
      const http = operation.traits?.["smithy.api#http"] ?? {};
      operations.push({
        uid: `${config.serviceKey}:${operationId}`,
        operationId,
        functionName: "",
        method: http.method ?? "POST",
        path: http.uri ?? "/",
        serviceKey: config.serviceKey,
        serviceName: sdkId,
        apiVersion,
        modelName,
        modelPath: config.modelPath,
        endpointPrefix,
        signingName,
        protocol,
        inputShape: operation.input?.target ?? "",
        outputShape: operation.output?.target ?? "",
        docsUrl: config.docsUrl,
      });
    }

    specSummaries.push({
      serviceKey: config.serviceKey,
      apiVersion,
      modelPath: config.modelPath,
      sdkId,
      protocol,
      operationCount: operationEntries.length,
      docsUrl: config.docsUrl,
    });
  }

  addUniqueFunctionNames(operations, (operation) => `${toPascalCase(operation.serviceKey)}${toPascalCase(operation.operationId)}`);
  operations.sort(compareOperationFunctions);

  const specSummary = {
    source: specSource,
    repository: repo,
    branch,
    modelCount: modelConfigs.length,
    models: specSummaries,
    operationCount: operations.length,
  };

  await writeGeneratedSurface({
    packageDir,
    artifactStem: `aws-speech-full-api-${generatedAt}`,
    docsPayload: { generatedAt, spec: specSummary, operations },
    functionsPayload: { generatedAt, spec: specSummary, functions: operations.map(({ functionName }) => functionName) },
    operationsSource: renderOperationsFile({
      header: `// Generated from AWS official API models (${specSource}).\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.`,
      constPrefix: "AWS_SPEECH_FULL_API",
      typePrefix: "AwsSpeechFullApi",
      methodType: "\"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\"",
      specSource,
      specVersion: `aws-api-models-${branch}-${generatedAt}`,
      specType: `{
  source: string;
  repository: string;
  branch: string;
  modelCount: number;
  models: readonly { serviceKey: string; apiVersion: string; modelPath: string; sdkId: string; protocol: string; operationCount: number; docsUrl: string }[];
  operationCount: number;
}`,
      specSummary,
      operations,
      operationInterfaceFields: [
        "uid: string;",
        "operationId: string;",
        "functionName: string;",
        "method: AwsSpeechFullApiOperationMethod;",
        "path: string;",
        "serviceKey: string;",
        "serviceName: string;",
        "apiVersion: string;",
        "modelName: string;",
        "modelPath: string;",
        "endpointPrefix: string;",
        "signingName: string;",
        "protocol: string;",
        "inputShape: string;",
        "outputShape: string;",
        "docsUrl: string;",
      ],
      keyTypeName: "AwsSpeechFullApiOperationUid",
      keyField: "uid",
    }),
    clientSource: renderClientFile({
      header: `// Generated from AWS official API models (${specSource}).\n// Do not edit by hand; run scripts/generate-speech-provider-apis.mjs after checking upstream docs.`,
      typePrefix: "AwsSpeechFullApi",
      callerType: "AwsSpeechGeneratedOperationCaller",
      clientInterface: "AwsSpeechFullApiGeneratedClient",
      createFunction: "createAwsSpeechFullApiGeneratedClient",
      constPrefix: "AWS_SPEECH_FULL_API",
      requestInputType: "AwsSpeechOperationRequestInput",
      resourceType: "AwsSpeechResource",
      operations,
      keyField: "uid",
    }),
  });

  console.log(`packages/integrations/src/voice/aws-speech: generated ${operations.length} operations`);
}
