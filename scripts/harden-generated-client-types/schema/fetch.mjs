import { spawnSync } from "node:child_process";
import { schemaFetchTimeoutMs } from "../constants.mjs";

const fetchCache = new Map();

export async function fetchJson(url) {
  if (!/^https?:\/\//.test(url)) {
    throw new Error(`Unsupported provider schema URL '${url}'.`);
  }
  const cached = fetchCache.get(url);
  if (cached) return cached;
  const response = await fetch(url, {
    headers: { "user-agent": "cognidesk-schema-type-generator" },
    signal: AbortSignal.timeout(schemaFetchTimeoutMs),
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch provider schema ${url}: ${response.status} ${response.statusText}`);
  }
  const contentType = response.headers.get("content-type") ?? "";
  const bytes = Buffer.from(await response.arrayBuffer());
  const text = bytes.toString("utf8");
  const document = looksLikeZip(url, contentType, bytes)
    ? parseZipDocument(bytes, url)
    : looksLikeJson(url, contentType, text)
    ? JSON.parse(text)
    : looksLikeMarkdownOpenApi(url, contentType, text)
    ? parseMarkdownOpenApiDocument(text, url)
    : parseYamlDocument(text, url);
  fetchCache.set(url, document);
  return document;
}

function looksLikeJson(url, contentType, text) {
  if (/json/i.test(contentType) || /\.json(?:$|[?#])/.test(url)) return true;
  return /^[\s\n\r]*[{[]/.test(text);
}

function looksLikeZip(url, contentType, bytes) {
  if (/zip/i.test(contentType) || /\.zip(?:$|[?#])/.test(url)) return true;
  return bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04;
}

function looksLikeMarkdownOpenApi(url, contentType, text) {
  return /\.md(?:$|[?#])/.test(url) ||
    /markdown/i.test(contentType) ||
    (text.includes("# OpenAPI definition") && /```json/.test(text));
}

function parseMarkdownOpenApiDocument(text, url) {
  const explicit = extractFencedOpenApiJson(text.slice(Math.max(0, text.indexOf("# OpenAPI definition"))));
  const fallback = explicit ?? extractFencedOpenApiJson(text);
  if (!fallback) {
    throw new Error(`Unable to extract provider OpenAPI block from markdown ${url}.`);
  }
  return JSON.parse(fallback);
}

function extractFencedOpenApiJson(text) {
  const fencePattern = /(`{3,})json\s*\r?\n([\s\S]*?)\r?\n\1/g;
  for (const match of text.matchAll(fencePattern)) {
    const body = match[2] ?? "";
    if (/"(?:openapi|swagger)"\s*:/.test(body)) return body;
  }
  return undefined;
}

function parseZipDocument(bytes, url) {
  const python = String.raw`
import io
import sys
import zipfile

archive = zipfile.ZipFile(io.BytesIO(sys.stdin.buffer.read()))
names = archive.namelist()
preferred = ["openapi.oas.json", "openapi.json", "swagger.json"]
entry = next((name for name in preferred if name in names), None)
if entry is None:
    json_names = [name for name in names if name.lower().endswith(".json")]
    entry = json_names[0] if json_names else None
if entry is None:
    raise SystemExit("zip archive contains no JSON schema entry")
sys.stdout.buffer.write(archive.read(entry))
`;
  const result = spawnSync("python3", ["-c", python], {
    input: bytes,
    encoding: "buffer",
    maxBuffer: 1024 * 1024 * 1024,
  });
  if (result.status !== 0) {
    const output = result.stderr?.toString("utf8") || result.stdout?.toString("utf8") || "unknown zip parser failure";
    throw new Error(`Unable to extract provider schema archive ${url}: ${output.slice(0, 1000)}`);
  }
  return JSON.parse(result.stdout.toString("utf8"));
}

function parseYamlDocument(text, url) {
  const ruby = String.raw`
require "json"
require "date"
require "yaml"
puts JSON.generate(YAML.safe_load(STDIN.read, aliases: true, permitted_classes: [Date, Time]))
`;
  const result = spawnSync("ruby", ["-e", ruby], {
    input: text,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 1024,
  });
  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "unknown YAML parser failure").slice(0, 1000);
    throw new Error(`Unable to parse provider schema YAML ${url}: ${detail}`);
  }
  return JSON.parse(result.stdout);
}
