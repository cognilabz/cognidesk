import { httpMethods } from "./config.mjs";

export function walkDiscoveryResources(resources, operations, sourceUrl, prefix = []) {
  for (const [resourceName, resource] of Object.entries(resources ?? {})) {
    const resourcePrefix = [...prefix, resourceName];
    for (const [methodName, method] of Object.entries(resource.methods ?? {})) {
      const id = method.id ?? [...resourcePrefix, methodName].join(".");
      operations.push({
        id,
        operationId: id,
        functionName: "",
        method: String(method.httpMethod ?? "GET").toUpperCase(),
        path: method.path ?? method.flatPath ?? "",
        description: method.description ?? "",
        sourceUrl,
      });
    }
    walkDiscoveryResources(resource.resources, operations, sourceUrl, resourcePrefix);
  }
}

export function openApiOperations(spec, sourceUrl, functionNameFor) {
  const operations = [];
  for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!httpMethods.has(method)) continue;
      const methodUpper = method.toUpperCase();
      const operationId = operation.operationId ?? toOperationId(methodUpper, operationPath, operation.summary);
      operations.push({
        id: `${methodUpper} ${operationPath}`,
        operationId,
        functionName: "",
        method: methodUpper,
        path: operationPath,
        summary: operation.summary ?? operation.description ?? "",
        tags: Array.isArray(operation.tags) ? operation.tags : [],
        requestContentTypes: Object.keys(operation.requestBody?.content ?? {}),
        sourceUrl,
      });
    }
  }
  addUniqueFunctionNames(operations, functionNameFor);
  return operations;
}

export function addUniqueFunctionNames(operations, candidateFor) {
  const used = new Map();
  for (const operation of operations) {
    const base = sanitizeFunctionName(candidateFor(operation) || "CallOperation");
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);
    operation.functionName = seen === 0 ? base : `${base}${seen + 1}`;
  }
}

export function compareOperationFunctions(left, right) {
  return left.functionName.localeCompare(right.functionName);
}

export function sanitizeFunctionName(value) {
  const name = toPascalCase(value);
  return /^[A-Za-z_$]/.test(name) ? name : `Operation${name}`;
}

export function toPascalCase(value) {
  const cleaned = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim();
  if (!cleaned) return "";
  return cleaned
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
}

export function toOperationId(method, operationPath, summary) {
  const summarySlug = summary ? toPascalCase(summary) : "";
  const pathSlug = operationPath
    .replace(/[{}]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
  return summarySlug || `${method.toLowerCase()}_${pathSlug}`;
}
