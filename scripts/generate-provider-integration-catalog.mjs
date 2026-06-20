import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const catalogPath = path.join(repoRoot, "website/guides/provider-integrations-catalog.md");
const integrationsPackagePath = path.join(repoRoot, "packages/integrations/package.json");
const integrationsPackageDir = path.dirname(integrationsPackagePath);
const integrationsIndexPath = path.join(repoRoot, "packages/integrations/dist/index.js");

const categoryLabels = new Map([
  ["cobrowsing", "Cobrowsing"],
  ["community", "Community"],
  ["contactCenter", "Contact Center"],
  ["ecommerce", "Ecommerce"],
  ["email", "Email"],
  ["form", "Forms"],
  ["helpCenter", "Help Center"],
  ["marketplace", "Marketplace"],
  ["messaging", "Messaging"],
  ["review", "Reviews"],
  ["sms", "SMS"],
  ["social", "Social"],
  ["ticketing", "Ticketing"],
  ["video", "Video"],
  ["voice", "Voice Provider APIs"],
  ["workplace", "Workplace"],
]);

const categoryOrder = [...categoryLabels.keys()];

function compareText(left, right) {
  return left.localeCompare(right, "en", { sensitivity: "base", numeric: true });
}

function displayCategory(category) {
  const known = categoryLabels.get(category);
  if (known) return known;
  return category
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function categoryRank(category) {
  const index = categoryOrder.indexOf(category);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function escapeTableCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
}

function escapeLinkText(value) {
  return String(value).replace(/\]/g, "\\]");
}

function inlineCode(value) {
  return `\`${String(value).replace(/`/g, "\\`")}\``;
}

function codeList(values) {
  if (!values.length) return "none";
  return values.map(inlineCode).join(", ");
}

function credentialSummary(credentials) {
  const required = credentials.filter((credential) => credential.required !== false).map((credential) => credential.id);
  const optional = credentials.filter((credential) => credential.required === false).map((credential) => credential.id);
  if (!required.length && !optional.length) return "none declared";
  const parts = [];
  if (required.length) parts.push(`required ${codeList(required)}`);
  if (optional.length) parts.push(`optional ${codeList(optional)}`);
  return parts.join("; ");
}

function evidenceSummary(evidence) {
  if (!evidence.length) return "Evidence: No provider evidence listed in the manifest.";
  const visible = evidence.slice(0, 4).map((entry) => {
    if (entry.url) return `[${escapeLinkText(entry.label)}](${entry.url})`;
    return entry.label;
  });
  const remaining = evidence.length - visible.length;
  const suffix = remaining > 0 ? `; plus ${remaining} more.` : ".";
  return `Evidence: ${visible.join("; ")}${suffix}`;
}

function firstNonEmpty(values) {
  return values.find((value) => typeof value === "string" && value.trim().length > 0);
}

async function loadIntegrationsIndex() {
  try {
    return await import(pathToFileURL(integrationsIndexPath).href);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Unable to import packages/integrations/dist/index.js. Run 'pnpm --filter @cognidesk/integrations build' before generating the provider catalog. ${reason}`,
    );
  }
}

async function loadProviderManifestEntries() {
  const index = await loadIntegrationsIndex();
  if (index.integrationProviderReferences?.length > 0) {
    const entries = [];
    for (const reference of index.integrationProviderReferences) {
      entries.push({
        reference,
        manifest: await index.loadProviderIntegrationManifest(reference),
      });
    }
    return entries;
  }

  const packageJson = JSON.parse(await readFile(integrationsPackagePath, "utf8"));
  const exportMap = packageJson.exports ?? {};
  const entries = [];

  for (const [subpath, exportValue] of Object.entries(exportMap)) {
    if (subpath === "." || subpath.includes("*")) continue;
    if (!isObject(exportValue) || typeof exportValue.import !== "string") continue;

    const module = await import(pathToFileURL(path.join(integrationsPackageDir, exportValue.import)).href);
    const manifestEntry = Object.entries(module).find(([, value]) => isProviderManifest(value));
    if (!manifestEntry) continue;

    const [manifestExport, manifest] = manifestEntry;
    entries.push({
      reference: {
        id: manifest.id,
        category: manifest.category,
        provider: manifest.provider,
        importPath: `@cognidesk/integrations/${subpath.slice(2)}`,
        modulePath: subpath,
        manifestExport,
      },
      manifest,
    });
  }

  entries.sort((left, right) => compareText(left.reference.importPath, right.reference.importPath));
  return entries;
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isProviderManifest(value) {
  return isObject(value)
    && typeof value.id === "string"
    && typeof value.name === "string"
    && typeof value.packageName === "string"
    && typeof value.provider === "string"
    && typeof value.category === "string"
    && Array.isArray(value.capabilities)
    && Array.isArray(value.directions);
}

function groupProviders(providers) {
  const grouped = new Map();
  for (const provider of providers) {
    const category = provider.reference.category;
    const entries = grouped.get(category) ?? [];
    entries.push(provider);
    grouped.set(category, entries);
  }

  for (const entries of grouped.values()) {
    entries.sort((left, right) => compareText(left.manifest.name, right.manifest.name) || compareText(left.reference.importPath, right.reference.importPath));
  }

  return [...grouped.entries()].sort(([left], [right]) => {
    const byRank = categoryRank(left) - categoryRank(right);
    return byRank || compareText(displayCategory(left), displayCategory(right));
  });
}

function renderCatalog(groupedProviders) {
  const lines = [
    "<!-- Generated by scripts/generate-provider-integration-catalog.mjs. Do not edit by hand. -->",
    "",
    "# Provider Integration Catalog",
    "",
    "This catalog is generated from the current Provider Manifests in `@cognidesk/integrations`. It documents the official provider modules that live behind category/provider subpath imports.",
    "",
    "`@cognidesk/voice-websocket` is not listed here because it is the browser-facing Cognidesk voice transport, not an external Provider Integration. OpenAI Realtime voice is listed as `@cognidesk/integrations/voice/openai` because it can be the entry channel and the LLM-backed realtime session. Speech Providers such as ElevenLabs, Azure Speech, AWS Speech, Google Cloud Speech, and Deepgram can also back Cognidesk voice sessions while the Cognidesk Agent Model Set remains the background LLM.",
    "",
    "| Category | Provider count | Imports |",
    "|----------|----------------|---------|",
  ];

  for (const [category, providers] of groupedProviders) {
    const imports = providers.map(({ reference }) => inlineCode(reference.importPath)).join("<br>");
    lines.push(`| ${escapeTableCell(displayCategory(category))} | ${providers.length} | ${escapeTableCell(imports)} |`);
  }

  lines.push("", "## Provider Modules");

  for (const [category, providers] of groupedProviders) {
    lines.push("", `### ${displayCategory(category)}`);

    for (const { reference, manifest } of providers) {
      const capabilities = manifest.capabilities.map((capability) => capability.capability);
      const coverageNotes = manifest.coverage?.notes ?? [];
      const coverage = firstNonEmpty(coverageNotes) ?? "Coverage details are declared in the provider manifest.";
      const boundary = firstNonEmpty([...(manifest.limitations ?? []), ...coverageNotes.slice(1), ...(manifest.privacyNotes ?? [])]);
      const evidence = manifest.coverage?.evidence ?? [];

      lines.push(
        "",
        `#### ${manifest.name}`,
        "",
        "| Field | Value |",
        "|-------|-------|",
        `| Import | ${escapeTableCell(inlineCode(reference.importPath))} |`,
        `| Manifest ID | ${escapeTableCell(inlineCode(manifest.id))} |`,
        `| Package | ${escapeTableCell(inlineCode(manifest.packageName))} |`,
        `| Scope | ${escapeTableCell(inlineCode(manifest.coverage?.scope ?? "support-workflow-subset"))} |`,
        `| Directions | ${escapeTableCell(codeList(manifest.directions))} |`,
        `| Capabilities | ${escapeTableCell(codeList(capabilities))} |`,
        `| Provider setup | ${escapeTableCell(credentialSummary(manifest.credentialRequirements ?? []))} |`,
        "",
        `Coverage: ${coverage}`,
      );

      if (boundary) lines.push("", `Boundary: ${boundary}`);
      lines.push("", evidenceSummary(evidence));
    }
  }

  return `${lines.join("\n")}\n`;
}

const providers = await loadProviderManifestEntries();

if (providers.length === 0) {
  throw new Error("Unable to discover provider manifests from packages/integrations/dist. Run 'pnpm --filter @cognidesk/integrations build' before generating the provider catalog.");
}

const groupedProviders = groupProviders(providers);
await mkdir(path.dirname(catalogPath), { recursive: true });
await writeFile(catalogPath, renderCatalog(groupedProviders));
console.log(`Generated ${path.relative(repoRoot, catalogPath)} from ${providers.length} provider manifests.`);
