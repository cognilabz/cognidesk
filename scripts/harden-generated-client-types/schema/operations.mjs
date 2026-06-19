import { fetchJson } from "./fetch.mjs";
import {
  hasSmithyTrait,
  isSmithyBodyMember,
  isSmithyRequired,
  renderComponentTypes,
  resolveSchema,
  schemaToType,
  smithyMembersObjectType,
  smithyShape,
  smithyTargetToType,
} from "./types.mjs";
import { arrayOf, quoteProperty, uniqueBy } from "../utils.mjs";

export async function renderSchemaTypesFile(surface, operations, operationsSource) {
  const keyField = operations.every((operation) => typeof operation.uid === "string")
    ? "uid"
    : operations.every((operation) => typeof operation.id === "string")
      ? "id"
      : "operationId";
  const ctx = createSchemaContext(surface);
  const queryEntries = [];
  const queryRequiredEntries = [];
  const bodyEntries = [];
  const bodyRequiredEntries = [];
  const responseEntries = [];

  const operationEntries = operations.map((operation) => ({
    key: String(operation[keyField]),
    operation,
  }));
  for (const { key, operation } of uniqueBy(operationEntries, (entry) => entry.key)) {
    const schemaInfo = await operationSchemaInfo(operation, operationsSource, ctx);
    queryEntries.push(`  ${JSON.stringify(key)}: ${schemaInfo.queryType};`);
    queryRequiredEntries.push(`  ${JSON.stringify(key)}: ${schemaInfo.queryRequired ? "true" : "false"};`);
    bodyEntries.push(`  ${JSON.stringify(key)}: ${schemaInfo.bodyType};`);
    bodyRequiredEntries.push(`  ${JSON.stringify(key)}: ${schemaInfo.bodyRequired ? "true" : "false"};`);
    responseEntries.push(`  ${JSON.stringify(key)}: ${schemaInfo.responseType};`);
  }

  const componentTypes = renderComponentTypes(ctx);
  return `// Generated provider schema DTOs for ${surface}.\n` +
    `// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.\n\n` +
    `export type ${surface}SchemaJsonPrimitive = string | number | boolean | null;\n` +
    `export type ${surface}SchemaJsonValue = ${surface}SchemaJsonPrimitive | readonly ${surface}SchemaJsonValue[] | { readonly [key: string]: ${surface}SchemaJsonValue | undefined };\n\n` +
    `${componentTypes}` +
    `export interface ${surface}OperationQueryMap {\n${queryEntries.join("\n")}\n}\n\n` +
    `export interface ${surface}OperationQueryRequiredMap {\n${queryRequiredEntries.join("\n")}\n}\n\n` +
    `export interface ${surface}OperationRequestBodyMap {\n${bodyEntries.join("\n")}\n}\n\n` +
    `export interface ${surface}OperationRequestBodyRequiredMap {\n${bodyRequiredEntries.join("\n")}\n}\n\n` +
    `export interface ${surface}OperationResponseMap {\n${responseEntries.join("\n")}\n}\n`;
}

function createSchemaContext(surface) {
  return {
    surface,
    documents: new Map(),
    emitted: new Map(),
    pending: [],
    rendering: new Set(),
  };
}

async function operationSchemaInfo(operation, operationsSource, ctx) {
  if (isAwsSmithyOperation(operation, operationsSource)) {
    try {
      return await awsSmithyOperationSchemaInfo(operation, operationsSource, ctx);
    } catch (error) {
      return fallbackSchemaInfo(ctx.surface, `AWS Smithy schema source unavailable: ${errorMessage(error)}`);
    }
  }

  const sourceUrl = operationConcreteSchemaUrl(operation, operationsSource);
  if (!sourceUrl) {
    return fallbackSchemaInfo(ctx.surface, "No provider schema source retained for this operation.");
  }
  let document;
  try {
    document = await fetchJson(sourceUrl);
  } catch (error) {
    return fallbackSchemaInfo(ctx.surface, `Provider schema source unavailable: ${errorMessage(error)}`);
  }
  ctx.documents.set(sourceUrl, document);
  if (isGoogleDiscovery(document)) {
    return discoveryOperationSchemaInfo(operation, document, sourceUrl, ctx);
  }
  return openApiOperationSchemaInfo(operation, document, sourceUrl, ctx);
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

function isAwsSmithyOperation(operation, operationsSource) {
  return Boolean(
    operation.modelPath &&
      (operation.inputShape || operation.outputShape) &&
      /github\.com\/aws\/api-models-aws\/tree\//.test(operationSourceUrl(operation, operationsSource) ?? ""),
  );
}

async function awsSmithyOperationSchemaInfo(operation, operationsSource, ctx) {
  const modelUrl = awsSmithyModelUrl(operation, operationsSource);
  if (!modelUrl) {
    return fallbackSchemaInfo(ctx.surface, "AWS Smithy model path could not be resolved.");
  }

  const document = await fetchJson(modelUrl);
  ctx.documents.set(modelUrl, document);

  const inputShape = operation.inputShape ? smithyShape(document, operation.inputShape) : undefined;
  const queryMembers = inputShape?.type === "structure"
    ? Object.entries(inputShape.members ?? {}).filter(([, member]) => hasSmithyTrait(member, "smithy.api#httpQuery"))
    : [];
  const payloadMember = inputShape?.type === "structure"
    ? Object.entries(inputShape.members ?? {}).find(([, member]) => hasSmithyTrait(member, "smithy.api#httpPayload"))
    : undefined;
  const bodyMembers = inputShape?.type === "structure"
    ? Object.entries(inputShape.members ?? {}).filter(([, member]) => isSmithyBodyMember(member))
    : [];

  const queryType = queryMembers.length > 0
    ? smithyMembersObjectType(queryMembers, ctx, modelUrl)
    : "{}";
  const bodyType = payloadMember?.[1]?.target
    ? smithyTargetToType(payloadMember[1].target, ctx, modelUrl)
    : bodyMembers.length > 0
      ? smithyMembersObjectType(bodyMembers, ctx, modelUrl)
      : "never";
  const responseType = !operation.outputShape || operation.outputShape === "smithy.api#Unit"
    ? "void"
    : smithyTargetToType(operation.outputShape, ctx, modelUrl);

  return {
    queryType,
    queryRequired: queryMembers.some(([, member]) => isSmithyRequired(member)),
    bodyType,
    bodyRequired: bodyMembers.some(([, member]) => isSmithyRequired(member)) || Boolean(payloadMember && isSmithyRequired(payloadMember[1])),
    responseType,
  };
}

function awsSmithyModelUrl(operation, operationsSource) {
  if (typeof operation.modelPath !== "string" || operation.modelPath.length === 0) return undefined;
  const sourceUrl = operationSourceUrl(operation, operationsSource);
  const match = sourceUrl?.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/tree\/([^/]+)\/models\b/);
  if (!match) return undefined;
  return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${operation.modelPath}`;
}

function operationSourceUrl(operation, operationsSource) {
  if (typeof operation.openApi === "string") return operation.openApi;
  if (typeof operation.source === "string") return operation.source;
  if (typeof operation.sourceUrl === "string") return operation.sourceUrl;
  if (typeof operation.specId === "string") {
    const spec = extractGeneratedSpecRegistry(operationsSource).find((entry) => entry.id === operation.specId);
    if (typeof spec?.openApi === "string" && /^https?:\/\//.test(spec.openApi)) return spec.openApi;
    if (typeof spec?.source === "string") return spec.source;
    if (typeof spec?.sourceUrl === "string") return spec.sourceUrl;
  }
  const constMatch = operationsSource.match(/export const \w+_SPEC_SOURCE\s*=\s*"([^"]+)"/);
  return constMatch?.[1];
}

function extractGeneratedSpecRegistry(operationsSource) {
  const match = operationsSource.match(/export const \w+_SPECS\s*=\s*JSON\.parse\(([\s\S]*?)\)\s*as\s+readonly\s+\w+Spec\[\];/);
  if (!match?.[1]) return [];
  try {
    return JSON.parse(JSON.parse(match[1]));
  } catch {
    return [];
  }
}

function operationConcreteSchemaUrl(operation, operationsSource) {
  const sourceUrl = operationSourceUrl(operation, operationsSource);
  if (sourceUrl && typeof operation.modelPath === "string" && operation.modelPath.length > 0) {
    const treeMatch = sourceUrl.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/tree\/([^/]+)\//);
    if (treeMatch) {
      return `https://raw.githubusercontent.com/${treeMatch[1]}/${treeMatch[2]}/${operation.modelPath}`;
    }
  }
  return sourceUrl;
}

function fallbackSchemaInfo(surface, _reason) {
  return {
    queryType: "{}",
    queryRequired: false,
    bodyType: "never",
    bodyRequired: false,
    responseType: `${surface}SchemaJsonValue`,
  };
}

function openApiOperationSchemaInfo(operation, document, sourceUrl, ctx) {
  const method = String(operation.method ?? "").toLowerCase();
  const operationPath = String(operation.path ?? "");
  const pathItem = resolveSchema(document.paths?.[operationPath], document, sourceUrl) ?? {};
  const operationObject = resolveSchema(pathItem?.[method], document, sourceUrl);
  if (!operationObject) return fallbackSchemaInfo(ctx.surface, `Operation not found in ${sourceUrl}`);

  const parameters = [
    ...arrayOf(pathItem.parameters),
    ...arrayOf(operationObject.parameters),
  ].map((parameter) => resolveSchema(parameter, document, sourceUrl));
  const queryParameters = parameters.filter((parameter) => parameter?.in === "query");
  const formParameters = parameters.filter((parameter) => parameter?.in === "formData");
  const bodyParameter = parameters.find((parameter) => parameter?.in === "body" && parameter.schema);
  const queryType = renderParameterObject(queryParameters, ctx, sourceUrl);
  const queryRequired = queryParameters.some((parameter) => parameter?.required === true);
  const requestBody = resolveSchema(operationObject.requestBody, document, sourceUrl);
  const requestBodySchema = firstContentSchema(requestBody?.content) ?? bodyParameter?.schema;
  const bodyType = formParameters.length > 0
    ? renderParameterObject(formParameters, ctx, sourceUrl)
    : requestBodySchema
      ? schemaToType(requestBodySchema, ctx, sourceUrl)
      : "never";
  const bodyRequired = formParameters.length > 0
    ? formParameters.some((parameter) => parameter?.required === true)
    : Boolean(requestBodySchema && (requestBody?.required === true || bodyParameter?.required === true));
  const responseSchema = firstResponseSchema(operationObject.responses, document, sourceUrl);
  const responseType = responseSchema
    ? schemaToType(responseSchema, ctx, sourceUrl)
    : responseHasNoContent(operationObject.responses, document, sourceUrl)
      ? "void"
      : `${ctx.surface}SchemaJsonValue`;

  return { queryType, queryRequired, bodyType, bodyRequired, responseType };
}

function discoveryOperationSchemaInfo(operation, document, sourceUrl, ctx) {
  const method = findDiscoveryMethod(document.resources ?? {}, String(operation.id ?? operation.operationId ?? ""));
  if (!method) return fallbackSchemaInfo(ctx.surface, `Discovery method not found in ${sourceUrl}`);

  const parameters = Object.entries(method.parameters ?? {}).map(([name, parameter]) => ({ name, ...parameter }));
  const queryParameters = parameters.filter((parameter) => parameter.location !== "path");
  const queryType = renderDiscoveryParameterObject(queryParameters, ctx, sourceUrl);
  const queryRequired = queryParameters.some((parameter) => parameter.required === true);
  const bodyType = method.request?.$ref
    ? schemaToType({ $ref: `#/schemas/${method.request.$ref}` }, ctx, sourceUrl)
    : "never";
  const bodyRequired = Boolean(method.request);
  const responseType = method.response?.$ref
    ? schemaToType({ $ref: `#/schemas/${method.response.$ref}` }, ctx, sourceUrl)
    : "void";
  return { queryType, queryRequired, bodyType, bodyRequired, responseType };
}

function isGoogleDiscovery(document) {
  return document?.kind === "discovery#restDescription" || (document?.schemas && document?.resources);
}

function findDiscoveryMethod(resources, id) {
  for (const resource of Object.values(resources)) {
    for (const method of Object.values(resource.methods ?? {})) {
      if (method?.id === id || method?.id === `${method?.id?.split(".")[0]}.${id}` || method?.id?.endsWith(`.${id}`)) return method;
    }
    const nested = findDiscoveryMethod(resource.resources ?? {}, id);
    if (nested) return nested;
  }
  return undefined;
}

function renderParameterObject(parameters, ctx, sourceUrl) {
  if (parameters.length === 0) return "{}";
  const fields = parameters
    .filter(Boolean)
    .map((parameter) => {
      const optional = parameter.required === true ? "" : "?";
      return `  ${quoteProperty(parameter.name)}${optional}: ${schemaToType(openApiParameterSchema(parameter), ctx, sourceUrl)};`;
    })
    .join("\n");
  return `{\n${fields}\n}`;
}

function openApiParameterSchema(parameter) {
  if (parameter.schema) return parameter.schema;
  const schema = {};
  for (const field of ["type", "format", "enum", "items", "nullable", "default"]) {
    if (parameter[field] !== undefined) schema[field] = parameter[field];
  }
  if (schema.type || schema.enum || schema.items) return schema;
  return {};
}

function renderDiscoveryParameterObject(parameters, ctx, sourceUrl) {
  if (parameters.length === 0) return "{}";
  const fields = parameters
    .filter(Boolean)
    .map((parameter) => {
      const optional = parameter.required === true ? "" : "?";
      return `  ${quoteProperty(parameter.name)}${optional}: ${schemaToType(discoveryParameterSchema(parameter), ctx, sourceUrl)};`;
    })
    .join("\n");
  return `{\n${fields}\n}`;
}

function discoveryParameterSchema(parameter) {
  const base = parameter.enum
    ? { enum: parameter.enum }
    : { type: parameter.type ?? "string", format: parameter.format };
  return parameter.repeated ? { type: "array", items: base } : base;
}

function firstContentSchema(content) {
  if (!content || typeof content !== "object") return undefined;
  const preferred = [
    "application/json",
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "application/scim+json",
    "text/json",
    "text/plain",
  ];
  for (const type of preferred) {
    if (content[type]?.schema) return content[type].schema;
  }
  return Object.values(content).find((entry) => entry?.schema)?.schema;
}

function firstResponseSchema(responses, document, sourceUrl) {
  if (!responses || typeof responses !== "object") return undefined;
  const preferredStatuses = ["200", "201", "202", "203", "206", "204", "default"];
  for (const status of preferredStatuses) {
    const response = resolveResponse(responses[status], document, sourceUrl);
    const schema = firstContentSchema(response?.content) ?? response?.schema;
    if (schema) return schema;
  }
  for (const response of Object.values(responses)) {
    const resolvedResponse = resolveResponse(response, document, sourceUrl);
    const schema = firstContentSchema(resolvedResponse?.content) ?? resolvedResponse?.schema;
    if (schema) return schema;
  }
  return undefined;
}

function responseHasNoContent(responses, document, sourceUrl) {
  const response = responses?.["204"] ?? responses?.["202"] ?? responses?.["200"];
  const resolvedResponse = resolveResponse(response, document, sourceUrl);
  return Boolean(response && !firstContentSchema(resolvedResponse?.content) && !resolvedResponse?.schema);
}

function resolveResponse(response, document, sourceUrl) {
  return resolveSchema(response, document, sourceUrl);
}
