import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const integrationPackagePattern =
  /^(cobrowsing|community-|contact-center-|ecommerce-|email-|forms$|helpcenter$|marketplace-|messaging-|model$|reviews-|sms-|social-|ticketing-|video-|voice-|workplace-)/;

const prefixOverrides = new Map([
  ["contact-center-8x8", "EightByEightContactCenter"],
  ["marketplace-ebay", "EbayMarketplace"],
  ["reviews-appstore", "AppStoreReviews"],
  ["reviews-googleplay", "GooglePlayReviews"],
]);

function pascalCase(segment) {
  if (segment === "8x8") return "EightByEight";
  if (segment.toLowerCase() === "rcs") return "Rcs";
  if (segment.toLowerCase() === "sms") return "Sms";
  return segment
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function inferPrefix(packageName, source) {
  const override = prefixOverrides.get(packageName);
  if (override) return override;

  const explicit =
    source.match(/export interface ([A-Z][A-Za-z0-9]+?)(?:ContactCenter|Ticketing|Client|Adapter)?ClientOptions\b/) ??
    source.match(/export interface ([A-Z][A-Za-z0-9]+?)CredentialStatusInput\b/) ??
    source.match(/export interface ([A-Z][A-Za-z0-9]+?)ClientOptions\b/);
  if (explicit) return explicit[1];

  return packageName.split("-").map(pascalCase).join("");
}

function jsonTypeBlock(prefix) {
  return `export type ${prefix}JsonPrimitive = string | number | boolean | null;
export type ${prefix}JsonValue =
  | ${prefix}JsonPrimitive
  | ${prefix}JsonObject
  | readonly ${prefix}JsonValue[];
export type ${prefix}ProviderExtensionValue = ${prefix}JsonValue | object | undefined;
export interface ${prefix}JsonObject {
  [key: string]: ${prefix}ProviderExtensionValue;
}
export type ${prefix}ProviderPayload = ${prefix}JsonObject | object;
export type ${prefix}ProviderQuery = Record<string, ${prefix}ProviderExtensionValue>;
export interface ${prefix}ProviderResponse extends ${prefix}JsonObject {}
export interface ${prefix}ProviderExtensionFields extends ${prefix}JsonObject {}

`;
}

function insertTypeBlock(source, prefix) {
  if (source.includes(`export type ${prefix}JsonPrimitive`)) return source;

  const marker = source.search(/\nexport interface [A-Z][A-Za-z0-9]+/);
  if (marker === -1) return `${jsonTypeBlock(prefix)}${source}`;
  return `${source.slice(0, marker + 1)}${jsonTypeBlock(prefix)}${source.slice(marker + 1)}`;
}

function hardenSource(source, prefix) {
  let next = insertTypeBlock(source, prefix);

  const legacyBlock = `export type ${prefix}JsonValue =
  | ${prefix}JsonPrimitive
  | ${prefix}JsonObject
  | ${prefix}JsonValue[];
export interface ${prefix}JsonObject {
  [key: string]: ${prefix}JsonValue | undefined;
}
export interface ${prefix}ProviderPayload extends ${prefix}JsonObject {}
export interface ${prefix}ProviderQuery extends ${prefix}JsonObject {}
export interface ${prefix}ProviderResponse extends ${prefix}JsonObject {}
export interface ${prefix}ProviderExtensionFields extends ${prefix}JsonObject {}`;
  next = next.replace(legacyBlock, `export type ${prefix}JsonValue =
  | ${prefix}JsonPrimitive
  | ${prefix}JsonObject
  | readonly ${prefix}JsonValue[];
export type ${prefix}ProviderExtensionValue = ${prefix}JsonValue | object | undefined;
export interface ${prefix}JsonObject {
  [key: string]: ${prefix}ProviderExtensionValue;
}
export type ${prefix}ProviderPayload = ${prefix}JsonObject | object;
export type ${prefix}ProviderQuery = Record<string, ${prefix}ProviderExtensionValue>;
export interface ${prefix}ProviderResponse extends ${prefix}JsonObject {}
export interface ${prefix}ProviderExtensionFields extends ${prefix}JsonObject {}`);

  next = next.replaceAll(`| ${prefix}JsonValue[]`, `| readonly ${prefix}JsonValue[]`);
  next = next.replaceAll(
    `export type ${prefix}ProviderPayload = ${prefix}ProviderExtensionValue;`,
    `export type ${prefix}ProviderPayload = ${prefix}JsonObject | object;`,
  );
  next = next.replace(
    new RegExp(`export type ${prefix}JsonValue = ${prefix}JsonPrimitive \\| ${prefix}JsonObject \\| ${prefix}JsonValue\\[];`),
    `export type ${prefix}JsonValue = ${prefix}JsonPrimitive | ${prefix}JsonObject | readonly ${prefix}JsonValue[];`,
  );
  next = next.replace(
    new RegExp(`\\[([A-Za-z_$][A-Za-z0-9_$]*): string\\]: ${prefix}JsonValue \\| undefined;`, "g"),
    `[$1: string]: ${prefix}ProviderExtensionValue;`,
  );
  if (!next.includes(`export type ${prefix}ProviderExtensionValue`) && next.includes(`export interface ${prefix}JsonObject`)) {
    next = next.replace(
      new RegExp(`(export interface ${prefix}JsonObject \\{\\n[\\s\\S]*?\\n\\}\\n)`),
      `$1export type ${prefix}ProviderExtensionValue = ${prefix}JsonValue | object | undefined;
export type ${prefix}ProviderPayload = ${prefix}JsonObject | object;
export type ${prefix}ProviderQuery = Record<string, ${prefix}ProviderExtensionValue>;
export interface ${prefix}ProviderResponse extends ${prefix}JsonObject {}
export interface ${prefix}ProviderExtensionFields extends ${prefix}JsonObject {}
`,
    );
  }

  next = next.replaceAll("Promise<Record<string, unknown>>", `Promise<${prefix}ProviderResponse>`);
  next = next.replaceAll("Record<string, unknown> &", `${prefix}ProviderPayload &`);
  next = next.replaceAll("Record<string, unknown>", `${prefix}JsonObject`);
  next = next.replaceAll("unknown[]", `${prefix}JsonValue[]`);
  next = next.replace(/\[([A-Za-z_$][A-Za-z0-9_$]*): string\]: unknown;/g, `[$1: string]: ${prefix}JsonValue | undefined;`);
  next = next.replace(/\[([A-Za-z_$][A-Za-z0-9_$]*): string\]: unknown(?= \})/g, `[$1: string]: ${prefix}JsonValue | undefined`);

  next = next.replaceAll(`payload: ${prefix}JsonObject`, `payload: ${prefix}ProviderPayload`);
  next = next.replaceAll(`payload?: ${prefix}JsonObject`, `payload?: ${prefix}ProviderPayload`);
  next = next.replaceAll(`body?: ${prefix}JsonObject`, `body?: ${prefix}ProviderPayload`);
  next = next.replaceAll(`body: ${prefix}JsonObject`, `body: ${prefix}ProviderPayload`);
  next = next.replaceAll(`patch: ${prefix}JsonObject`, `patch: ${prefix}ProviderPayload`);
  next = next.replaceAll(`record: ${prefix}JsonObject`, `record: ${prefix}ProviderPayload`);
  next = next.replaceAll(`query?: ${prefix}JsonObject`, `query?: ${prefix}ProviderQuery`);
  next = next.replaceAll(`query: ${prefix}JsonObject`, `query: ${prefix}ProviderQuery`);
  next = next.replaceAll(`body?: ${prefix}JsonValue | undefined`, `body?: ${prefix}ProviderPayload | undefined`);
  next = next.replaceAll(`body: ${prefix}JsonValue`, `body: ${prefix}ProviderPayload`);
  next = next.replaceAll(`metadata?: ${prefix}JsonObject`, `metadata?: ${prefix}ProviderExtensionFields`);
  next = next.replaceAll(`metadata: ${prefix}JsonObject`, `metadata: ${prefix}ProviderExtensionFields`);
  next = next.replaceAll(`additionalFields?: ${prefix}JsonObject`, `additionalFields?: ${prefix}ProviderExtensionFields`);
  next = next.replaceAll(`additionalFields: ${prefix}JsonObject`, `additionalFields: ${prefix}ProviderExtensionFields`);
  next = next.replaceAll(`customFields?: ${prefix}JsonObject`, `customFields?: ${prefix}ProviderExtensionFields`);
  next = next.replaceAll(`customFields: ${prefix}JsonObject`, `customFields: ${prefix}ProviderExtensionFields`);
  next = next.replaceAll(`raw: ${prefix}JsonObject`, `raw: ${prefix}ProviderResponse`);
  next = next.replaceAll(`raw?: ${prefix}JsonObject`, `raw?: ${prefix}ProviderResponse`);
  next = next.replaceAll(`body?: unknown;`, `body?: ${prefix}JsonValue | undefined;`);
  next = next.replaceAll(`body?: unknown`, `body?: ${prefix}JsonValue | undefined`);

  return next;
}

const packageRoot = path.join(root, "packages");
const changed = [];

for (const packageName of fs.readdirSync(packageRoot).sort()) {
  if (!integrationPackagePattern.test(packageName)) continue;
  const indexPath = path.join(packageRoot, packageName, "src", "index.ts");
  if (!fs.existsSync(indexPath)) continue;

  const source = fs.readFileSync(indexPath, "utf8");
  if (
    !source.includes("Record<string, unknown>") &&
    !source.includes("Promise<Record<string, unknown>>") &&
    !source.includes("unknown[]") &&
    !source.includes("body?: unknown") &&
    !source.includes("]: unknown") &&
    !source.includes("ProviderPayload extends") &&
    !source.includes("JsonValue[]") &&
    !source.includes("ProviderPayload =")
  ) {
    continue;
  }

  const prefix = inferPrefix(packageName, source);
  const next = hardenSource(source, prefix);
  if (next !== source) {
    fs.writeFileSync(indexPath, next);
    changed.push(path.relative(root, indexPath));
  }
}

for (const file of changed) console.log(file);
console.error(`Hardened ${changed.length} integration public API files.`);
