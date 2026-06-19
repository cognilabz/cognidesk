import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const generatedAt = "2026-06-17";
const twilioOaiBase = "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json";

const packages = [
  {
    key: "sms",
    constantPrefix: "TWILIO_SMS_FULL_API",
    typePrefix: "TwilioSms",
    packageDir: "packages/integrations/src/sms/twilio",
    resourceType: "TwilioSmsResource",
    requestInputType: "TwilioSmsOperationRequestInput",
    specs: [
      {
        key: "api_v2010",
        file: "twilio_api_v2010.json",
        includeTags: [
          "Api20100401Message",
          "Api20100401MediaInstance",
          "Api20100401Media",
          "Api20100401Feedback",
          "Api20100401ShortCode",
        ],
      },
      { key: "messaging_v1", file: "twilio_messaging_v1.json" },
      { key: "messaging_v2", file: "twilio_messaging_v2.json" },
      { key: "messaging_v3", file: "twilio_messaging_v3.json" },
      { key: "conversations_v1", file: "twilio_conversations_v1.json" },
      { key: "conversations_v2", file: "twilio_conversations_v2.json" },
      { key: "content_v1", file: "twilio_content_v1.json" },
      { key: "content_v2", file: "twilio_content_v2.json" },
      { key: "verify_v2", file: "twilio_verify_v2.json" },
      { key: "verify_v3", file: "twilio_verify_v3.json" },
      { key: "studio_v1", file: "twilio_studio_v1.json" },
      { key: "studio_v2", file: "twilio_studio_v2.json" },
    ],
  },
  {
    key: "voice",
    constantPrefix: "TWILIO_VOICE_FULL_API",
    typePrefix: "TwilioVoice",
    packageDir: "packages/integrations/src/voice/twilio",
    resourceType: "TwilioVoiceResource",
    requestInputType: "TwilioVoiceOperationRequestInput",
    specs: [
      {
        key: "api_v2010",
        file: "twilio_api_v2010.json",
        includeTags: [
          "Api20100401Application",
          "Api20100401Call",
          "Api20100401CallNotification",
          "Api20100401CallRecording",
          "Api20100401CallTranscription",
          "Api20100401Conference",
          "Api20100401ConferenceRecording",
          "Api20100401Credential",
          "Api20100401CredentialList",
          "Api20100401CredentialListMapping",
          "Api20100401Domain",
          "Api20100401IpAccessControlList",
          "Api20100401IpAccessControlListMapping",
          "Api20100401Member",
          "Api20100401OutgoingCallerId",
          "Api20100401Participant",
          "Api20100401Payment",
          "Api20100401Queue",
          "Api20100401Recording",
          "Api20100401RecordingTranscription",
          "Api20100401SipIpAddress",
          "Api20100401Siprec",
          "Api20100401Stream",
          "Api20100401Transcription",
          "Api20100401UserDefinedMessage",
          "Api20100401UserDefinedMessageSubscription",
        ],
      },
      { key: "voice_v1", file: "twilio_voice_v1.json" },
      { key: "voice_v3", file: "twilio_voice_v3.json" },
      { key: "trunking_v1", file: "twilio_trunking_v1.json" },
      { key: "insights_v1", file: "twilio_insights_v1.json" },
      { key: "insights_v2", file: "twilio_insights_v2.json" },
      { key: "insights_v3", file: "twilio_insights_v3.json" },
    ],
  },
];

const methods = new Set(["get", "post", "put", "patch", "delete"]);

for (const packageConfig of packages) {
  const operations = [];
  const specSummaries = [];
  for (const specConfig of packageConfig.specs) {
    const sourceUrl = `${twilioOaiBase}/${specConfig.file}`;
    const response = await fetch(sourceUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${sourceUrl}: ${response.status}`);
    const spec = await response.json();
    let documentedOperationCount = 0;
    let includedOperationCount = 0;

    for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
      for (const [method, operation] of Object.entries(pathItem ?? {})) {
        if (!methods.has(method)) continue;
        documentedOperationCount += 1;
        const tags = Array.isArray(operation.tags) ? operation.tags : [];
        if (specConfig.includeTags && !tags.some((tag) => specConfig.includeTags.includes(tag))) continue;
        includedOperationCount += 1;
        const operationId = operation.operationId ?? `${method}_${operationPath}`;
        const requestContentTypes = Object.keys(operation.requestBody?.content ?? {});
        operations.push({
          id: `${specConfig.key}:${operationId}`,
          operationId,
          functionName: uniqueFunctionName(
            operations,
            `${pascal(specConfig.key)}${pascal(operationId)}`,
          ),
          specKey: specConfig.key,
          method: method.toUpperCase(),
          path: operationPath,
          tags,
          summary: operation.summary ?? "",
          requestContentTypes,
          sourceUrl,
        });
      }
    }
    specSummaries.push({
      key: specConfig.key,
      file: specConfig.file,
      sourceUrl,
      version: String(spec.info?.version ?? "unknown"),
      documentedOperationCount,
      includedOperationCount,
      ...(specConfig.includeTags ? { includeTags: specConfig.includeTags } : {}),
    });
  }

  operations.sort((a, b) => a.functionName.localeCompare(b.functionName));
  const docsDir = path.join(repoRoot, "docs/provider-coverage");
  const srcDir = path.join(repoRoot, packageConfig.packageDir);
  await mkdir(docsDir, { recursive: true });
  await mkdir(srcDir, { recursive: true });

  const artifactStem = `twilio-${packageConfig.key}-full-api-${generatedAt}`;
  await writeFile(
    path.join(docsDir, `${artifactStem}.operations.json`),
    `${JSON.stringify({ generatedAt, specs: specSummaries, operations }, null, 2)}\n`,
  );
  await writeFile(
    path.join(docsDir, `${artifactStem}.functions.json`),
    `${JSON.stringify({
      generatedAt,
      functionCount: operations.length,
      functions: operations.map(({ id, operationId, functionName, specKey, method, path, sourceUrl }) => ({
        id,
        operationId,
        functionName,
        specKey,
        method,
        path,
        sourceUrl,
      })),
    }, null, 2)}\n`,
  );

  await writeFile(
    path.join(srcDir, "full-api-operations.generated.ts"),
    renderOperationsFile(packageConfig, specSummaries, operations),
  );
  await writeFile(
    path.join(srcDir, "full-api-client.generated.ts"),
    renderClientFile(packageConfig, operations),
  );
  console.log(`${packageConfig.packageDir}: generated ${operations.length} operations`);
}

function renderOperationsFile(config, specSummaries, operations) {
  return `// Generated from Twilio's official twilio-oai OpenAPI specs (${twilioOaiBase}).\n// Do not edit by hand; run scripts/generate-twilio-full-api.mjs after checking upstream docs.\n\nexport const ${config.constantPrefix}_SPEC_SOURCE = "https://github.com/twilio/twilio-oai" as const;\nexport const ${config.constantPrefix}_SPEC_VERSION = "twilio-oai-main-${generatedAt}" as const;\nexport const ${config.constantPrefix}_GENERATED_AT = "${generatedAt}" as const;\nexport const ${config.constantPrefix}_OPERATION_COUNT = ${operations.length} as const;\n\nexport const ${config.constantPrefix}_SPECS = ${literal(specSummaries)} as const;\n\nexport const ${config.constantPrefix}_OPERATIONS = ${literal(operations)} as const;\n\nexport type ${config.typePrefix}FullApiOperation = typeof ${config.constantPrefix}_OPERATIONS[number];\nexport type ${config.typePrefix}FullApiOperationId = ${config.typePrefix}FullApiOperation["id"];\n\nexport const ${config.constantPrefix}_OPERATION_BY_ID = new Map<string, ${config.typePrefix}FullApiOperation>(\n  ${config.constantPrefix}_OPERATIONS.map((operation) => [operation.id, operation]),\n);\n`;
}

function renderClientFile(config, operations) {
  const interfaceMethods = operations
    .map((operation) => `  ${operation.functionName}<T = ${config.resourceType}>(input?: ${config.requestInputType}): Promise<T>;`)
    .join("\n");
  const functionNames = operations.map((operation) => operation.functionName);
  const bodyMethods = operations
    .map((operation) => `    ${operation.functionName}: (input) => callOperation("${operation.id}", input),`)
    .join("\n");

  return `// Generated from Twilio's official twilio-oai OpenAPI specs (${twilioOaiBase}).\n// Do not edit by hand; run scripts/generate-twilio-full-api.mjs after checking upstream docs.\n\nimport type { ${config.requestInputType}, ${config.resourceType} } from "./index.js";\n\nexport type ${config.typePrefix}GeneratedOperationCaller = <T = ${config.resourceType}>(operationId: string, input?: ${config.requestInputType}) => Promise<T>;\n\nexport interface ${config.typePrefix}FullApiGeneratedClient {\n${interfaceMethods}\n}\n\nexport const ${config.constantPrefix}_GENERATED_FUNCTION_COUNT = ${operations.length} as const;\nexport const ${config.constantPrefix}_GENERATED_FUNCTION_NAMES = ${literal(functionNames)} as const;\n\nexport function create${config.typePrefix}FullApiGeneratedClient(\n  callOperation: ${config.typePrefix}GeneratedOperationCaller,\n): ${config.typePrefix}FullApiGeneratedClient {\n  return {\n${bodyMethods}\n  };\n}\n`;
}

function pascal(value) {
  const normalized = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  const result = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(result) ? `Op${result}` : result;
}

function uniqueFunctionName(existingOperations, candidate) {
  let name = candidate;
  let index = 2;
  const existing = new Set(existingOperations.map((operation) => operation.functionName));
  while (existing.has(name)) {
    name = `${candidate}${index}`;
    index += 1;
  }
  return name;
}

function literal(value) {
  return JSON.stringify(value, null, 2)
    .replace(/"([A-Za-z_$][\\w$]*)":/g, "$1:");
}
