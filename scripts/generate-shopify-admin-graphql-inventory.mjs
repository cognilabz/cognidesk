import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const GENERATED_AT = "2026-06-18";
const API_VERSION = "2026-04";
const DOCS_DIR = "docs/provider-coverage";
const PACKAGE_DIR = "packages/integrations/src/ecommerce/shopify";
const DOCS_HOME_URL = "https://shopify.dev/docs/api/admin-graphql/latest";
const VERSIONED_DOCS_HOME_URL = `https://shopify.dev/docs/api/admin-graphql/${API_VERSION}`;
const QUERY_ROOT_URL = `https://shopify.dev/docs/api/admin-graphql/${API_VERSION}/objects/QueryRoot`;
const MUTATION_URL = `https://shopify.dev/docs/api/admin-graphql/${API_VERSION}/objects/Mutation`;
const USER_AGENT = "cognidesk-shopify-admin-graphql-inventory";

const staticSchemaCandidates = [
  `https://shopify.dev/docs/api/admin-graphql/${API_VERSION}/schema.json`,
  "https://shopify.dev/docs/api/admin-graphql/latest/schema.json",
  `https://shopify.dev/docs/api/admin-graphql/${API_VERSION}/objects/QueryRoot.json`,
  "https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot.json",
];

const selectedTypedHelpers = [
  {
    name: "graphql",
    kind: "raw-admin-graphql-escape-hatch",
    coverage: "sdk-user-selected-operation",
    rootFields: [],
    note: "Executes SDK-user-provided Admin GraphQL documents against the configured shop and API version; not counted as generated per-root-field coverage.",
  },
  { name: "getShop", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "shop" }] },
  { name: "getOrder", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "node" }] },
  { name: "getCustomer", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "customer" }] },
  { name: "getProduct", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "node" }] },
  { name: "getDraftOrder", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "draftOrder" }] },
  { name: "searchOrders", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "orders" }] },
  { name: "searchCustomers", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "customers" }] },
  { name: "searchProducts", kind: "typed-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "products" }] },
  {
    name: "createDraftOrder",
    kind: "typed-helper",
    coverage: "selected",
    rootFields: [{ root: "Mutation", name: "draftOrderCreate" }],
  },
  { name: "validateShopifyWebhookSignature", kind: "webhook-helper", coverage: "selected", rootFields: [] },
  { name: "parseShopifyWebhook", kind: "webhook-helper", coverage: "selected", rootFields: [] },
  { name: "shopifyEcommerceCredentialStatuses", kind: "credential-helper", coverage: "selected", rootFields: [] },
  { name: "createShopifyEcommerceLiveChecks", kind: "live-check-helper", coverage: "selected", rootFields: [{ root: "QueryRoot", name: "shop" }] },
];

const platformGaps = [
  {
    surface: "Storefront GraphQL API",
    url: "https://shopify.dev/docs/api/storefront/latest",
    status: "not-implemented",
  },
  {
    surface: "Shopify Functions APIs",
    url: "https://shopify.dev/docs/api/functions/latest",
    status: "not-implemented",
  },
  {
    surface: "Payments extensions and Payments Apps API",
    url: "https://shopify.dev/docs/apps/build/payments",
    status: "not-implemented",
  },
  {
    surface: "Payments app request reference",
    url: "https://shopify.dev/docs/apps/build/payments/request-reference",
    status: "not-implemented",
  },
  {
    surface: "REST Admin API",
    url: "https://shopify.dev/docs/api/admin-rest",
    status: "not-implemented",
  },
  {
    surface: "App platform surfaces and UI extensions",
    url: "https://shopify.dev/docs/apps/build/app-surfaces",
    status: "not-implemented",
  },
  {
    surface: "Webhook subscription management/catalog",
    url: "https://shopify.dev/docs/apps/build/webhooks",
    status: "signature-parse-only",
  },
];

async function main() {
  const docsHome = await fetchText(DOCS_HOME_URL);
  if (!docsHome.includes(`${API_VERSION} latest`)) {
    throw new Error(`Shopify Admin GraphQL docs did not identify ${API_VERSION} as latest stable.`);
  }

  const [queryHtml, mutationHtml, schemaCandidateChecks] = await Promise.all([
    fetchText(QUERY_ROOT_URL),
    fetchText(MUTATION_URL),
    checkStaticSchemaCandidates(),
  ]);

  const queryRootFields = parseRootFields(queryHtml, "QueryRoot", QUERY_ROOT_URL);
  const mutationRootFields = parseRootFields(mutationHtml, "Mutation", MUTATION_URL);
  if (queryRootFields.length < 200 || mutationRootFields.length < 400) {
    throw new Error(
      `Unexpected Shopify root-field counts: QueryRoot=${queryRootFields.length}, Mutation=${mutationRootFields.length}`,
    );
  }

  const rootFields = [...queryRootFields, ...mutationRootFields];
  const selectedTypedRootFields = uniqueSelectedTypedRootFields();
  const summary = {
    adminApiVersion: API_VERSION,
    versionStatus: "latest-stable-in-official-docs-on-2026-06-18",
    queryRootFieldCount: queryRootFields.length,
    mutationRootFieldCount: mutationRootFields.length,
    rootFieldCount: rootFields.length,
    selectedTypedHelperCount: selectedTypedHelpers.filter((helper) => helper.kind === "typed-helper").length,
    helperCatalogEntryCount: selectedTypedHelpers.length,
    selectedTypedRootFieldCount: selectedTypedRootFields.length,
    generatedPerRootFieldWrapperCount: 0,
    rawAdminGraphqlEscapeHatch: true,
    fullShopifyPlatformCoverage: false,
  };

  const source = {
    label: "Shopify Admin GraphQL API reference",
    docs: DOCS_HOME_URL,
    versionedDocs: VERSIONED_DOCS_HOME_URL,
    queryRoot: QUERY_ROOT_URL,
    mutation: MUTATION_URL,
    endpointTemplate: `https://{store_name}.myshopify.com/admin/api/${API_VERSION}/graphql.json`,
    versionSelectionEvidence: `${DOCS_HOME_URL} identifies ${API_VERSION} as latest stable on ${GENERATED_AT}.`,
    publicStaticSchemaChecks: schemaCandidateChecks,
    publicStaticSchemaAvailability: schemaCandidateChecks.some((candidate) => candidate.status === 200)
      ? "public-static-schema-candidate-found"
      : "no-public-static-schema-json-found-at-checked-official-docs-urls",
  };

  await mkdir(DOCS_DIR, { recursive: true });
  await mkdir(PACKAGE_DIR, { recursive: true });

  const rootFieldPayload = {
    generatedAt: GENERATED_AT,
    source,
    scope: "admin-graphql-root-field-catalog",
    summary,
    selectedTypedCoverage: selectedTypedHelpers.filter((helper) => helper.kind === "typed-helper"),
    platformGaps,
    rootFields,
  };

  const functionPayload = {
    generatedAt: GENERATED_AT,
    source,
    scope: "selected-helper-and-escape-hatch-catalog",
    summary,
    functions: selectedTypedHelpers,
    note: "This is a catalog of local package helper functions. The package does not generate one callable wrapper per Shopify Admin GraphQL root field.",
  };

  const artifactStem = `shopify-admin-graphql-${API_VERSION}-${GENERATED_AT}`;
  await writeFile(
    path.join(DOCS_DIR, `${artifactStem}.root-fields.json`),
    `${JSON.stringify(rootFieldPayload, null, 2)}\n`,
  );
  await writeFile(
    path.join(DOCS_DIR, `${artifactStem}.functions.json`),
    `${JSON.stringify(functionPayload, null, 2)}\n`,
  );

  await writeFile(
    path.join(PACKAGE_DIR, "admin-graphql-inventory.generated.ts"),
    generatedModule({ source, summary, rootFields, selectedTypedHelpers, platformGaps }),
  );

  console.log(
    `@cognidesk/integrations: generated ${summary.rootFieldCount} Admin GraphQL ${API_VERSION} root fields `
      + `(${summary.queryRootFieldCount} query, ${summary.mutationRootFieldCount} mutation) and `
      + `${summary.helperCatalogEntryCount} local helper catalog entries.`,
  );
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "user-agent": USER_AGENT } });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function checkStaticSchemaCandidates() {
  return Promise.all(staticSchemaCandidates.map(async (url) => {
    const response = await fetch(url, {
      method: "HEAD",
      headers: { accept: "application/json", "user-agent": USER_AGENT },
    });
    return {
      url,
      status: response.status,
      contentType: response.headers.get("content-type") ?? "",
    };
  }));
}

function parseRootFields(html, root, sourceUrl) {
  const starts = [];
  const startRegex = new RegExp(`id="field-${root}\\.fields\\.([A-Za-z0-9_]+)"`, "g");
  let match;
  while ((match = startRegex.exec(html)) !== null) {
    starts.push({ index: match.index, name: match[1] });
  }

  const fields = [];
  const seen = new Set();
  for (let index = 0; index < starts.length; index += 1) {
    const start = starts[index];
    if (!start || seen.has(start.name)) continue;
    seen.add(start.name);
    const next = starts[index + 1]?.index ?? html.length;
    const block = html.slice(start.index, next);
    const header = block.slice(0, block.indexOf("</dt>"));
    const type = decodeHtml(header.match(/class="_GqlTypeLink[^"]*"[^>]*>([\s\S]*?)<\/a>/)?.[1] ?? "");
    if (!type) {
      throw new Error(`Unable to parse Shopify ${root}.${start.name} return type.`);
    }
    fields.push({
      uid: `${root}.${start.name}`,
      root,
      name: start.name,
      type,
      docsUrl: `${sourceUrl}#field-${root}.fields.${start.name}`,
      description: firstParagraph(block),
    });
  }
  return fields;
}

function firstParagraph(block) {
  const paragraph = block.match(/<dd><div class="markdown[^"]*">[\s\S]*?<p>([\s\S]*?)<\/p>/)?.[1] ?? "";
  return decodeHtml(paragraph);
}

function uniqueSelectedTypedRootFields() {
  const keyed = new Map();
  for (const helper of selectedTypedHelpers) {
    if (helper.kind !== "typed-helper") continue;
    for (const rootField of helper.rootFields) {
      keyed.set(`${rootField.root}.${rootField.name}`, rootField);
    }
  }
  return [...keyed.values()];
}

function decodeHtml(value) {
  return value
    .replace(/<wbr\/>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_match, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_match, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/\s+/g, " ")
    .trim();
}

function generatedModule({ source, summary, rootFields, selectedTypedHelpers: helpers, platformGaps: gaps }) {
  return `// Generated from Shopify's official Admin GraphQL ${API_VERSION} docs (${QUERY_ROOT_URL}, ${MUTATION_URL}).\n`
    + "// Do not edit by hand; run scripts/generate-shopify-admin-graphql-inventory.mjs after checking upstream docs.\n\n"
    + `export const SHOPIFY_ADMIN_GRAPHQL_SCHEMA_CATALOG_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_API_VERSION = ${JSON.stringify(API_VERSION)};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_DOCS_SOURCE = ${JSON.stringify(DOCS_HOME_URL)};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_VERSIONED_DOCS_SOURCE = ${JSON.stringify(VERSIONED_DOCS_HOME_URL)};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_QUERY_ROOT_SOURCE = ${JSON.stringify(QUERY_ROOT_URL)};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_MUTATION_SOURCE = ${JSON.stringify(MUTATION_URL)};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_QUERY_ROOT_FIELD_COUNT = ${summary.queryRootFieldCount};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_MUTATION_FIELD_COUNT = ${summary.mutationRootFieldCount};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELD_COUNT = ${summary.rootFieldCount};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_SELECTED_TYPED_HELPER_COUNT = ${summary.selectedTypedHelperCount};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG_ENTRY_COUNT = ${summary.helperCatalogEntryCount};\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_SELECTED_TYPED_ROOT_FIELD_COUNT = ${summary.selectedTypedRootFieldCount};\n`
    + "export const SHOPIFY_ADMIN_GRAPHQL_GENERATED_PER_ROOT_FIELD_WRAPPER_COUNT = 0;\n\n"
    + "export interface ShopifyAdminGraphqlRootField {\n"
    + "  uid: string;\n  root: \"QueryRoot\" | \"Mutation\";\n  name: string;\n  type: string;\n  docsUrl: string;\n  description: string;\n}\n\n"
    + "export interface ShopifyAdminGraphqlHelperCatalogEntry {\n"
    + "  name: string;\n  kind: string;\n  coverage: string;\n  rootFields: readonly { root: \"QueryRoot\" | \"Mutation\"; name: string }[];\n  note?: string;\n}\n\n"
    + "export interface ShopifyPlatformGap {\n  surface: string;\n  url: string;\n  status: string;\n}\n\n"
    + `export const SHOPIFY_ADMIN_GRAPHQL_CATALOG_SOURCE = JSON.parse(${JSON.stringify(JSON.stringify(source))}) as {\n`
    + "  label: string;\n  docs: string;\n  versionedDocs: string;\n  queryRoot: string;\n  mutation: string;\n  endpointTemplate: string;\n  versionSelectionEvidence: string;\n  publicStaticSchemaChecks: readonly { url: string; status: number; contentType: string }[];\n  publicStaticSchemaAvailability: string;\n};\n\n"
    + `export const SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELDS = JSON.parse(${JSON.stringify(JSON.stringify(rootFields))}) as readonly ShopifyAdminGraphqlRootField[];\n`
    + `export const SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG = JSON.parse(${JSON.stringify(JSON.stringify(helpers))}) as readonly ShopifyAdminGraphqlHelperCatalogEntry[];\n`
    + `export const SHOPIFY_PLATFORM_GAPS = JSON.parse(${JSON.stringify(JSON.stringify(gaps))}) as readonly ShopifyPlatformGap[];\n`;
}

await main();
