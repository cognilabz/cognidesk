import {
  arrayOf,
  literalType,
  parenthesizeUnion,
  quoteProperty,
  toPascalCase,
  uniqueStrings,
  uniqueTypeName,
} from "../utils.mjs";

export function schemaToType(schema, ctx, sourceUrl) {
  if (!schema || typeof schema !== "object") return `${ctx.surface}SchemaJsonValue`;
  if (schema.$ref) return refTypeName(schema.$ref, ctx, sourceUrl);

  const resolvedSchema = resolveSchema(schema, ctx.documents.get(sourceUrl), sourceUrl);
  if (!resolvedSchema || typeof resolvedSchema !== "object") return `${ctx.surface}SchemaJsonValue`;
  if (resolvedSchema.const !== undefined) return literalType(resolvedSchema.const);
  if (Array.isArray(resolvedSchema.enum) && resolvedSchema.enum.length > 0) {
    return resolvedSchema.enum.map(literalType).join(" | ");
  }
  if (Array.isArray(resolvedSchema.allOf) && resolvedSchema.allOf.length > 0) {
    return parenthesizeUnion(resolvedSchema.allOf.map((entry) => schemaToType(entry, ctx, sourceUrl)).join(" & "));
  }
  if (Array.isArray(resolvedSchema.oneOf) && resolvedSchema.oneOf.length > 0) {
    return parenthesizeUnion(resolvedSchema.oneOf.map((entry) => schemaToType(entry, ctx, sourceUrl)).join(" | "));
  }
  if (Array.isArray(resolvedSchema.anyOf) && resolvedSchema.anyOf.length > 0) {
    return parenthesizeUnion(resolvedSchema.anyOf.map((entry) => schemaToType(entry, ctx, sourceUrl)).join(" | "));
  }

  const nonNullTypes = Array.isArray(resolvedSchema.type)
    ? resolvedSchema.type.filter((entry) => entry !== "null")
    : undefined;
  const type = nonNullTypes
    ? nonNullTypes.length === 1
      ? nonNullTypes[0]
      : nonNullTypes
    : resolvedSchema.type;
  const nullable = resolvedSchema.nullable === true || (Array.isArray(resolvedSchema.type) && resolvedSchema.type.includes("null"));
  const base = Array.isArray(type)
    ? parenthesizeUnion(type.map((entry) => schemaBaseType({ ...resolvedSchema, type: entry }, ctx, sourceUrl)).join(" | "))
    : schemaBaseType({ ...resolvedSchema, type }, ctx, sourceUrl);
  return nullable ? `${base} | null` : base;
}

function schemaBaseType(schema, ctx, sourceUrl) {
  if (schema.type === "string") return "string";
  if (schema.type === "integer" || schema.type === "number") return "number";
  if (schema.type === "boolean") return "boolean";
  if (schema.type === "array" || schema.items) return readonlyArrayType(schemaToType(schema.items ?? {}, ctx, sourceUrl));
  if (schema.type === "object" || schema.properties || schema.additionalProperties) {
    return objectSchemaToType(schema, ctx, sourceUrl);
  }
  const looseProperties = looseSchemaProperties(schema);
  if (looseProperties) return objectSchemaToType({ properties: looseProperties }, ctx, sourceUrl);
  return `${ctx.surface}SchemaJsonValue`;
}

function readonlyArrayType(itemType) {
  return `ReadonlyArray<${itemType}>`;
}

function looseSchemaProperties(schema) {
  const schemaKeywords = new Set([
    "$ref",
    "additionalProperties",
    "allOf",
    "anyOf",
    "const",
    "default",
    "description",
    "enum",
    "example",
    "examples",
    "format",
    "items",
    "nullable",
    "oneOf",
    "properties",
    "readOnly",
    "required",
    "title",
    "type",
    "writeOnly",
  ]);
  const entries = Object.entries(schema).filter(([key]) => !schemaKeywords.has(key));
  if (entries.length === 0) return undefined;
  if (!entries.every(([, value]) => value && typeof value === "object" && !Array.isArray(value))) return undefined;
  return Object.fromEntries(entries);
}

function objectSchemaToType(schema, ctx, sourceUrl) {
  const properties = schema.properties && typeof schema.properties === "object" ? schema.properties : {};
  const required = new Set(arrayOf(schema.required));
  const propertyTypes = Object.entries(properties).map(([name, propertySchema]) => ({
    name,
    type: schemaToType(propertySchema, ctx, sourceUrl),
  }));
  const fields = propertyTypes.map(({ name, type }) => {
    const optional = required.has(name) ? "" : "?";
    return `  ${quoteProperty(name)}${optional}: ${type};`;
  });
  if (schema.additionalProperties && schema.additionalProperties !== false) {
    const valueType = schema.additionalProperties === true
      ? `${ctx.surface}SchemaJsonValue`
      : schemaToType(schema.additionalProperties, ctx, sourceUrl);
    const indexValueType = uniqueStrings([valueType, ...propertyTypes.map((property) => property.type)])
      .join(" | ");
    fields.push(`  readonly [key: string]: ${indexValueType} | undefined;`);
  }
  if (fields.length === 0) return "{}";
  return `{\n${fields.join("\n")}\n}`;
}

function refTypeName(ref, ctx, sourceUrl) {
  const key = `json ${sourceUrl} ${ref}`;
  const existing = ctx.emitted.get(key);
  if (existing) return existing;
  const rawName = ref.split("/").pop() ?? "Schema";
  const typeName = `${ctx.surface}Schema${toPascalCase(rawName)}`;
  const uniqueName = uniqueTypeName(typeName, new Set(ctx.emitted.values()));
  ctx.emitted.set(key, uniqueName);
  ctx.pending.push({ kind: "json", key, ref, sourceUrl, typeName: uniqueName });
  return uniqueName;
}

function smithyRefTypeName(shapeId, ctx, sourceUrl) {
  if (shapeId === "smithy.api#Unit") return "void";
  const key = `smithy ${sourceUrl} ${shapeId}`;
  const existing = ctx.emitted.get(key);
  if (existing) return existing;
  const rawName = shapeId.split("#").pop() ?? "Shape";
  const typeName = `${ctx.surface}Schema${toPascalCase(rawName)}`;
  const uniqueName = uniqueTypeName(typeName, new Set(ctx.emitted.values()));
  ctx.emitted.set(key, uniqueName);
  ctx.pending.push({ kind: "smithy", key, shapeId, sourceUrl, typeName: uniqueName });
  return uniqueName;
}

export function renderComponentTypes(ctx) {
  const chunks = [];
  while (ctx.pending.length > 0) {
    const item = ctx.pending.shift();
    if (!item || ctx.rendering.has(item.key)) continue;
    ctx.rendering.add(item.key);
    if (item.kind === "smithy") {
      chunks.push(`export type ${item.typeName} = ${smithyShapeToType(item.shapeId, ctx, item.sourceUrl)};\n`);
    } else {
      const document = ctx.documents.get(item.sourceUrl);
      const schema = resolveRef(item.ref, document);
      chunks.push(`export type ${item.typeName} = ${schemaToType(schema ?? {}, ctx, item.sourceUrl)};\n`);
    }
  }
  return chunks.length > 0 ? `${chunks.join("\n")}\n` : "";
}

export function smithyShapeToType(shapeId, ctx, sourceUrl) {
  if (shapeId === "smithy.api#Unit") return "void";
  const document = ctx.documents.get(sourceUrl);
  const shape = smithyShape(document, shapeId);
  if (!shape) return `${ctx.surface}SchemaJsonValue`;
  return smithyShapeDefinitionToType(shape, ctx, sourceUrl);
}

function smithyShapeDefinitionToType(shape, ctx, sourceUrl) {
  if (shape.enum && Array.isArray(shape.enum)) return shape.enum.map((entry) => literalType(entry.value ?? entry.name)).join(" | ");
  if (shape.traits?.["smithy.api#enum"]) {
    return Object.values(shape.traits["smithy.api#enum"])
      .map((entry) => literalType(entry.value ?? entry.name))
      .join(" | ");
  }
  switch (shape.type) {
    case "string":
    case "blob":
    case "timestamp":
      return "string";
    case "byte":
    case "short":
    case "integer":
    case "long":
    case "float":
    case "double":
    case "bigInteger":
    case "bigDecimal":
      return "number";
    case "boolean":
      return "boolean";
    case "document":
      return `${ctx.surface}SchemaJsonValue`;
    case "list":
    case "set":
      return readonlyArrayType(smithyTargetToType(shape.member?.target, ctx, sourceUrl));
    case "map":
      return `{\n  readonly [key: string]: ${smithyTargetToType(shape.value?.target, ctx, sourceUrl)} | undefined;\n}`;
    case "union":
      return smithyUnionToType(shape, ctx, sourceUrl);
    case "structure":
      return smithyMembersObjectType(Object.entries(shape.members ?? {}), ctx, sourceUrl);
    default:
      return `${ctx.surface}SchemaJsonValue`;
  }
}

function smithyUnionToType(shape, ctx, sourceUrl) {
  const members = Object.entries(shape.members ?? {});
  if (members.length === 0) return "{}";
  return members
    .map(([name, member]) => `{\n  ${quoteProperty(name)}: ${smithyTargetToType(member.target, ctx, sourceUrl)};\n}`)
    .join(" | ");
}

export function smithyMembersObjectType(members, ctx, sourceUrl) {
  if (members.length === 0) return "{}";
  const fields = members
    .map(([name, member]) => {
      const optional = isSmithyRequired(member) ? "" : "?";
      return `  ${quoteProperty(name)}${optional}: ${smithyTargetToType(member.target, ctx, sourceUrl)};`;
    })
    .join("\n");
  return `{\n${fields}\n}`;
}

export function smithyTargetToType(target, ctx, sourceUrl) {
  if (!target) return `${ctx.surface}SchemaJsonValue`;
  const document = ctx.documents.get(sourceUrl);
  const shape = smithyShape(document, target);
  if (!shape) {
    return smithyPrimitiveType(target, ctx);
  }
  if (shouldInlineSmithyShape(shape)) {
    return smithyShapeDefinitionToType(shape, ctx, sourceUrl);
  }
  return smithyRefTypeName(target, ctx, sourceUrl);
}

function shouldInlineSmithyShape(shape) {
  return ["string", "blob", "timestamp", "byte", "short", "integer", "long", "float", "double", "bigInteger", "bigDecimal", "boolean", "document"].includes(shape.type) ||
    Boolean(shape.enum || shape.traits?.["smithy.api#enum"]);
}

function smithyPrimitiveType(target, ctx) {
  switch (target) {
    case "smithy.api#String":
    case "smithy.api#Blob":
    case "smithy.api#Timestamp":
      return "string";
    case "smithy.api#Byte":
    case "smithy.api#Short":
    case "smithy.api#Integer":
    case "smithy.api#Long":
    case "smithy.api#Float":
    case "smithy.api#Double":
    case "smithy.api#BigInteger":
    case "smithy.api#BigDecimal":
      return "number";
    case "smithy.api#Boolean":
      return "boolean";
    case "smithy.api#Unit":
      return "void";
    case "smithy.api#Document":
      return `${ctx.surface}SchemaJsonValue`;
    default:
      return `${ctx.surface}SchemaJsonValue`;
  }
}

export function smithyShape(document, shapeId) {
  return document?.shapes?.[shapeId];
}

export function isSmithyBodyMember(member) {
  return !hasSmithyTrait(member, "smithy.api#httpLabel") &&
    !hasSmithyTrait(member, "smithy.api#httpQuery") &&
    !hasSmithyTrait(member, "smithy.api#httpHeader") &&
    !hasSmithyTrait(member, "smithy.api#httpPrefixHeaders");
}

export function isSmithyRequired(member) {
  return hasSmithyTrait(member, "smithy.api#required");
}

export function hasSmithyTrait(member, trait) {
  return member?.traits?.[trait] !== undefined;
}

export function resolveSchema(value, document, sourceUrl) {
  if (!value || typeof value !== "object" || !value.$ref) return value;
  return resolveRef(value.$ref, document) ?? value;
}

function resolveRef(ref, document) {
  if (!ref.startsWith("#/") || !document) return undefined;
  return ref
    .slice(2)
    .split("/")
    .map((part) => part.replace(/~1/g, "/").replace(/~0/g, "~"))
    .reduce((current, part) => current?.[part], document);
}
