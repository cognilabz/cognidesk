import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const integrationsSrc = path.join(repoRoot, "packages", "integrations", "src");
const operationsFileSuffix = "-operations.generated.ts";
const clientFileSuffix = "-client.generated.ts";
const schemaFileSuffix = "-schema-types.generated.ts";
const splitMinOperationCount = 40;

interface GeneratedOperation {
  uid?: string;
  id?: string;
  operationId?: string;
  functionName?: string;
}

interface GeneratedSurface {
  prefix: string;
  relativePrefix: string;
  operationsFile: string;
  clientFile: string;
  schemaFile: string;
  chunkDir: string;
  providerDir: string;
  indexFile: string;
  operations: GeneratedOperation[];
}

describe("generated provider surface integrity", () => {
  it("keeps generated operation catalogs, function names, and split chunks aligned", async () => {
    const surfaces = await generatedSurfaces();
    const failures: unknown[] = [];
    let rawDuplicateOperationIdSurfaces = 0;

    if (surfaces.length === 0) {
      expect(failures).toEqual([]);
      return;
    }

    for (const surface of surfaces) {
      const operationKeys = surface.operations.map((operation) => stableOperationKey(operation, surface.operations));
      const functionNames = surface.operations.map(generatedFunctionName);
      const rawOperationIds = surface.operations
        .map((operation) => operation.operationId)
        .filter((operationId): operationId is string => typeof operationId === "string");
      const rawDuplicateOperationIds = duplicateValues(rawOperationIds);
      if (rawDuplicateOperationIds.length > 0) rawDuplicateOperationIdSurfaces += 1;

      failures.push(...duplicateFailures(surface, operationKeys, "stable operation key"));
      failures.push(...duplicateFailures(surface, functionNames, "generated function name"));

      const operationSource = await readFile(surface.operationsFile, "utf8");
      const declaredOperationCount = extractNumberConst(operationSource, "_OPERATION_COUNT");
      if (declaredOperationCount !== undefined && declaredOperationCount !== surface.operations.length) {
        failures.push(countFailure(surface, "_OPERATION_COUNT", declaredOperationCount, surface.operations.length));
      }

      const clientSource = await readFile(surface.clientFile, "utf8");
      const chunk = await chunkSurface(surface);
      const generatedNames = extractJsonArrayAfter(clientSource, /export const \w+_GENERATED_FUNCTION_NAMES\b\s*=\s*/)
        ?? chunk.functionNames;
      const declaredGeneratedFunctionCount = extractNumberConst(clientSource, "_GENERATED_FUNCTION_COUNT");

      if (declaredGeneratedFunctionCount !== undefined && declaredGeneratedFunctionCount !== generatedNames.length) {
        failures.push(countFailure(surface, "_GENERATED_FUNCTION_COUNT", declaredGeneratedFunctionCount, generatedNames.length));
      }
      failures.push(...setMismatchFailures(surface, functionNames, generatedNames, "generated function names"));

      if (surface.operations.length >= splitMinOperationCount && chunk.files.length === 0) {
        failures.push({
          surface: surface.relativePrefix,
          reason: "missing generated endpoint chunks",
          operations: surface.operations.length,
        });
      }
      if (chunk.files.length > 0) {
        failures.push(...setMismatchFailures(surface, operationKeys, chunk.operationKeys, "chunk operation keys"));
        failures.push(...setMismatchFailures(surface, functionNames, chunk.functionNames, "chunk function names"));
        failures.push(...duplicateFailures(surface, chunk.operationKeys, "chunk operation key"));
        failures.push(...duplicateFailures(surface, chunk.functionNames, "chunk function name"));
      }
    }

    expect(rawDuplicateOperationIdSurfaces).toBeGreaterThan(0);
    expect(failures).toEqual([]);
  }, 30000);

  it("keeps generated surfaces wired into the handwritten provider modules", async () => {
    const surfaces = await generatedSurfaces();
    const failures: unknown[] = [];

    for (const surface of surfaces) {
      const indexSource = await readFile(surface.indexFile, "utf8");
      const manualSource = await providerManualSource(surface.providerDir);
      const clientModule = moduleSpecifier(surface.clientFile);
      const operationsModule = moduleSpecifier(surface.operationsFile);
      const schemaModule = moduleSpecifier(surface.schemaFile);
      const hasGeneratedClientEscapeHatch = /\b(fullApi|graphApi|webApi|httpApi|meetingsApi|voiceApi|digitalApi|stripeApi)\b/.test(manualSource);
      const isSpeechInventorySurface = /\bgeneratedSpeechApi\b/.test(manualSource);

      if (!indexSource.includes(clientModule)) {
        failures.push(exportFailure(surface, clientModule));
      }
      if (!indexSource.includes(operationsModule)) {
        failures.push(exportFailure(surface, operationsModule));
      }
      if (!indexSource.includes(schemaModule)) {
        failures.push(exportFailure(surface, schemaModule));
      }
      if (!/\bdefineIntegrationProviderPackage\b/.test(manualSource)) {
        failures.push({
          surface: surface.relativePrefix,
          reason: "handwritten provider module does not use defineIntegrationProviderPackage",
        });
      }
      if (!manualSource.includes("GENERATED_FUNCTION_COUNT") || !manualSource.includes("OPERATION_COUNT")) {
        failures.push({
          surface: surface.relativePrefix,
          reason: "handwritten provider module does not link generated operation/function counts",
        });
      }
      if (!/\bgenerated\w*Verification\b|\bfullProviderApiVerification\b|\bgeneratedSpeechApi\b|\bgeneratedProviderApiSlices\b/.test(manualSource)) {
        failures.push({
          surface: surface.relativePrefix,
          reason: "handwritten provider module does not document generated/manual composition metadata",
        });
      }
      if (!hasGeneratedClientEscapeHatch && !isSpeechInventorySurface) {
        failures.push({
          surface: surface.relativePrefix,
          reason: "generated provider API is not exposed as a named client escape hatch",
        });
      }
    }

    expect(failures).toEqual([]);
  }, 30000);
});

async function generatedSurfaces(): Promise<GeneratedSurface[]> {
  const files = await walk(integrationsSrc);
  const operationFiles = files
    .filter((file) => file.endsWith(operationsFileSuffix))
    .sort((a, b) => a.localeCompare(b));

  return Promise.all(operationFiles.map(async (operationsFile) => {
    const prefix = operationsFile.slice(0, -operationsFileSuffix.length);
    const operationsSource = await readFile(operationsFile, "utf8");
    return {
      prefix,
      relativePrefix: path.relative(integrationsSrc, prefix),
      operationsFile,
      clientFile: `${prefix}${clientFileSuffix}`,
      schemaFile: `${prefix}${schemaFileSuffix}`,
      chunkDir: `${prefix}.generated/client`,
      providerDir: path.dirname(prefix),
      indexFile: path.join(path.dirname(prefix), "index.ts"),
      operations: extractOperations(operationsSource, operationsFile),
    };
  }));
}

async function chunkSurface(surface: GeneratedSurface) {
  if (!await exists(surface.chunkDir)) {
    return { files: [] as string[], operationKeys: [] as string[], functionNames: [] as string[] };
  }

  const files = (await walk(surface.chunkDir))
    .filter((file) => file.endsWith(".generated.ts"))
    .sort((a, b) => a.localeCompare(b));
  const operationKeys: string[] = [];
  const functionNames: string[] = [];

  for (const file of files) {
    const source = await readFile(file, "utf8");
    operationKeys.push(...(extractJsonArrayAfter(source, /export const \w+OperationKeys\b\s*=\s*/) ?? []));
    functionNames.push(...(extractJsonArrayAfter(source, /export const \w+GeneratedFunctionNames\b\s*=\s*/) ?? []));
  }

  return { files, operationKeys, functionNames };
}

async function providerManualSource(providerDir: string) {
  const files = (await walk(providerDir))
    .filter((file) => file.endsWith(".ts"))
    .filter((file) => !file.endsWith(".generated.ts"))
    .filter((file) => !file.includes(`${path.sep}dist${path.sep}`))
    .filter((file) => !file.includes(`${path.sep}build${path.sep}`));
  const sources = await Promise.all(files.map((file) => readFile(file, "utf8")));
  return sources.join("\n");
}

async function walk(root: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(root, { withFileTypes: true }).catch((error: unknown) => {
    if (isMissingPath(error)) return [];
    throw error;
  });

  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "build") continue;
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(file));
    } else {
      files.push(file);
    }
  }
  return files;
}

async function exists(file: string) {
  return access(file).then(() => true, () => false);
}

function extractOperations(source: string, file: string): GeneratedOperation[] {
  const parseMatch = source.match(/export const \w+_OPERATIONS\s*=\s*JSON\.parse\(([\s\S]*?)\)\s*as\s+readonly\s+\w+\[\];/);
  if (parseMatch?.[1]) return JSON.parse(JSON.parse(parseMatch[1])) as GeneratedOperation[];

  const literalMatch = source.match(/export const \w+_OPERATIONS(?:\s*:\s*readonly\s+\w+\[\])?\s*=/);
  if (literalMatch?.[0]) {
    const literal = extractFirstJsonArray(source.slice((literalMatch.index ?? 0) + literalMatch[0].length));
    return JSON.parse(literal) as GeneratedOperation[];
  }

  throw new Error(`Could not extract generated operations from ${path.relative(repoRoot, file)}.`);
}

function extractJsonArrayAfter(source: string, pattern: RegExp): string[] | undefined {
  const match = source.match(pattern);
  if (!match) return undefined;

  const rest = source.slice((match.index ?? 0) + match[0].length);
  const parseMatch = rest.match(/^JSON\.parse\(([^)]*)\)/);
  if (parseMatch?.[1]) return JSON.parse(JSON.parse(parseMatch[1])) as string[];

  const literal = extractFirstJsonArray(rest);
  if (literal.includes("...")) return undefined;
  return JSON.parse(literal) as string[];
}

function extractFirstJsonArray(source: string) {
  const start = source.indexOf("[");
  if (start < 0) throw new Error("Missing generated JSON array.");

  let depth = 0;
  let inString = false;
  let escaping = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (character === "\\") {
        escaping = true;
        continue;
      }
      if (character === "\"") inString = false;
      continue;
    }
    if (character === "\"") {
      inString = true;
      continue;
    }
    if (character === "[") depth += 1;
    if (character === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }

  throw new Error("Unterminated generated JSON array.");
}

function extractNumberConst(source: string, suffix: string) {
  const match = source.match(new RegExp(`export const \\w+${suffix}\\b\\s*=\\s*(\\d+)\\s+as const`));
  return match?.[1] ? Number(match[1]) : undefined;
}

function stableOperationKey(operation: GeneratedOperation, operations: readonly GeneratedOperation[]) {
  if (operations.every((candidate) => typeof candidate.uid === "string")) return String(operation.uid);
  if (operations.every((candidate) => typeof candidate.id === "string")) return String(operation.id);
  return String(operation.operationId);
}

function generatedFunctionName(operation: GeneratedOperation) {
  return String(operation.functionName ?? operation.operationId ?? operation.id ?? operation.uid);
}

function duplicateValues(values: readonly string[]) {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([value, count]) => ({ value, count }));
}

function duplicateFailures(surface: GeneratedSurface, values: readonly string[], label: string) {
  return duplicateValues(values).map((duplicate) => ({
    surface: surface.relativePrefix,
    reason: `duplicate ${label}`,
    ...duplicate,
  }));
}

function setMismatchFailures(surface: GeneratedSurface, expected: readonly string[], actual: readonly string[], label: string) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  const missing = expected.filter((value) => !actualSet.has(value));
  const extra = actual.filter((value) => !expectedSet.has(value));
  return missing.length > 0 || extra.length > 0
    ? [{
        surface: surface.relativePrefix,
        reason: `${label} mismatch`,
        missing: missing.slice(0, 10),
        extra: extra.slice(0, 10),
        expectedCount: expected.length,
        actualCount: actual.length,
      }]
    : [];
}

function countFailure(surface: GeneratedSurface, constant: string, declared: number, actual: number) {
  return {
    surface: surface.relativePrefix,
    reason: `${constant} mismatch`,
    declared,
    actual,
  };
}

function exportFailure(surface: GeneratedSurface, module: string) {
  return {
    surface: surface.relativePrefix,
    reason: "provider index does not export generated module",
    module,
  };
}

function moduleSpecifier(file: string) {
  return `./${path.basename(file, ".ts")}.js`;
}

function isMissingPath(error: unknown) {
  return typeof error === "object"
    && error !== null
    && "code" in error
    && (error as { code?: unknown }).code === "ENOENT";
}
