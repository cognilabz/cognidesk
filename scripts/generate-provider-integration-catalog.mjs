import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const catalogPath = path.join(repoRoot, "website/guides/provider-integrations-catalog.md");
const integrationCatalogIndexPath = path.join(repoRoot, "packages/integration-catalog/dist/index.js");

const categoryLabels = new Map([
  ["cobrowsing", "Cobrowsing"],
  ["community", "Community"],
  ["contact-center", "Contact Center"],
  ["ecommerce", "Ecommerce"],
  ["email", "Email"],
  ["form", "Forms"],
  ["help-center", "Help Center"],
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

function canonicalCategory(category) {
  return category;
}

function displayCategory(category) {
  const known = categoryLabels.get(canonicalCategory(category));
  if (known) return known;
  return category
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function categorySegment(category) {
  return category
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

function providerPackageName(provider) {
  return `@cognidesk/integration-${categorySegment(provider.category)}-${provider.provider}`;
}

function providerManifestImport(provider) {
  return `${providerPackageName(provider)}/manifest`;
}

function providerRuntimeImport(provider) {
  return `${providerPackageName(provider)}/runtime`;
}

function providerWorkspacePath(provider) {
  return `integrations/${categorySegment(provider.category)}/${provider.provider}`;
}

function categoryRank(category) {
  const index = categoryOrder.indexOf(canonicalCategory(category));
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

async function loadIntegrationCatalogIndex() {
  try {
    return await import(pathToFileURL(integrationCatalogIndexPath).href);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Unable to import packages/integration-catalog/dist/index.js. Run 'pnpm --filter @cognidesk/integration-catalog build' before generating the provider catalog. ${reason}`,
    );
  }
}

async function loadProviderCatalogEntries() {
  const index = await loadIntegrationCatalogIndex();
  const entries = index.integrationCatalog;
  if (!Array.isArray(entries)) {
    throw new Error("packages/integration-catalog/dist/index.js did not export integrationCatalog.");
  }
  return entries;
}

function groupProviders(providers) {
  const grouped = new Map();
  for (const provider of providers) {
    const category = canonicalCategory(provider.category);
    const entries = grouped.get(category) ?? [];
    entries.push(provider);
    grouped.set(category, entries);
  }

  for (const entries of grouped.values()) {
    entries.sort((left, right) => compareText(left.name, right.name) || compareText(left.importPath, right.importPath));
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
    "This catalog is generated from serialized metadata in `@cognidesk/integration-catalog`. It renders the target split provider packages, manifest imports, runtime imports, and `integrations/{category}/{provider}` workspace paths without importing provider runtime modules during docs generation.",
    "",
    "`@cognidesk/voice-websocket` is not listed here because it is the browser-facing Cognidesk voice transport, not an external Provider Integration. OpenAI Realtime voice is listed as `@cognidesk/integration-voice-openai` because it can be the entry channel and the LLM-backed realtime session. Speech Providers such as ElevenLabs, Azure Speech, AWS Speech, Google Cloud Speech, and Deepgram can also back Cognidesk voice sessions while the Cognidesk Agent Model Set remains the background LLM.",
    "",
    "| Category | Provider count | Packages |",
    "|----------|----------------|---------|",
  ];

  for (const [category, providers] of groupedProviders) {
    const imports = providers.map((provider) => inlineCode(providerPackageName(provider))).join("<br>");
    lines.push(`| ${escapeTableCell(displayCategory(category))} | ${providers.length} | ${escapeTableCell(imports)} |`);
  }

  lines.push("", "## Provider Modules");

  for (const [category, providers] of groupedProviders) {
    lines.push("", `### ${displayCategory(category)}`);

    for (const provider of providers) {
      const capabilities = provider.capabilities.map((capability) => capability.capability);
      const coverageNotes = provider.coverage?.notes ?? [];
      const coverage = firstNonEmpty(coverageNotes) ?? "Coverage details are declared in the provider manifest.";
      const boundary = firstNonEmpty([...(provider.limitations ?? []), ...coverageNotes.slice(1), ...(provider.privacyNotes ?? [])]);
      const evidence = provider.coverage?.evidence ?? [];
      const integrationName = typeof provider.metadata?.integrationName === "string"
        ? provider.metadata.integrationName.trim()
        : "";
      const documentationPath = provider.implementation?.documentationPath;
      const documentation = documentationPath?.startsWith("http")
        ? `[${escapeLinkText(documentationPath)}](${documentationPath})`
        : documentationPath;

      const fieldRows = [];
      if (integrationName) fieldRows.push(`| Integration | ${escapeTableCell(integrationName)} |`);
      fieldRows.push(
        `| Package | ${escapeTableCell(inlineCode(providerPackageName(provider)))} |`,
        `| Manifest import | ${escapeTableCell(inlineCode(providerManifestImport(provider)))} |`,
        `| Runtime import | ${escapeTableCell(inlineCode(providerRuntimeImport(provider)))} |`,
        `| Workspace | ${escapeTableCell(inlineCode(providerWorkspacePath(provider)))} |`,
        `| Manifest ID | ${escapeTableCell(inlineCode(provider.id))} |`,
        `| Scope | ${escapeTableCell(inlineCode(provider.coverage?.scope ?? "support-workflow-subset"))} |`,
        `| Adapter coverage | ${escapeTableCell(inlineCode(provider.adapterCoverage?.level ?? "unprofiled"))} |`,
        `| Implementation | ${escapeTableCell(inlineCode(provider.implementation?.strategy ?? "support-workflow-adapter"))} |`,
        `| Documentation | ${escapeTableCell(documentation ?? "none declared")} |`,
        `| Directions | ${escapeTableCell(codeList(provider.directions))} |`,
        `| Capabilities | ${escapeTableCell(codeList(capabilities))} |`,
        `| Provider setup | ${escapeTableCell(credentialSummary(provider.readiness?.credentialRequirements ?? []))} |`,
      );

      lines.push(
        "",
        `#### ${provider.name}`,
        "",
        "| Field | Value |",
        "|-------|-------|",
        ...fieldRows,
        "",
        `Coverage: ${coverage}`,
      );

      if (boundary) lines.push("", `Boundary: ${boundary}`);
      lines.push("", evidenceSummary(evidence));
    }
  }

  return `${lines.join("\n")}\n`;
}

const providers = await loadProviderCatalogEntries();

if (providers.length === 0) {
  throw new Error("Unable to discover provider metadata from packages/integration-catalog/dist. Run 'pnpm --filter @cognidesk/integration-catalog build' before generating the provider catalog.");
}

const groupedProviders = groupProviders(providers);
await mkdir(path.dirname(catalogPath), { recursive: true });
await writeFile(catalogPath, renderCatalog(groupedProviders));
console.log(`Generated ${path.relative(repoRoot, catalogPath)} from ${providers.length} provider catalog entries.`);
