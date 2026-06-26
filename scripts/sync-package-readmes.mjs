#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import path from "node:path";
import {
  isProviderPackage,
  packageWorkspaces,
} from "./release-workspace.mjs";

const root = process.cwd();

const platformDescriptions = new Map([
  ["@cognidesk/connections", "Connection-backed provider helpers for reviewed OpenAPI and MCP provider surfaces."],
  ["@cognidesk/core", "Core Cognidesk runtime APIs for agents, journeys, tools, knowledge, events, and conversations."],
  ["@cognidesk/evals", "Evaluation helpers for testing Cognidesk agents, journeys, and support behavior."],
  ["@cognidesk/http", "HTTP and SSE transport adapters for hosting Cognidesk runtimes."],
  ["@cognidesk/integration-catalog", "Generated integration catalog metadata for Cognidesk Studio and provider discovery."],
  ["@cognidesk/integration-kit", "Shared helpers for building Cognidesk provider integration packages."],
  ["@cognidesk/journey-index-json", "JSON-backed journey index utilities for loading and publishing journey metadata."],
  ["@cognidesk/model", "Model provider adapters and model-set helpers for Cognidesk runtimes."],
  ["@cognidesk/otel", "OpenTelemetry instrumentation for Cognidesk runtime spans, metrics, and traces."],
  ["@cognidesk/react", "React hooks and widgets for Cognidesk customer support interfaces."],
  ["@cognidesk/storage", "Storage contracts and built-in storage adapters for Cognidesk runtime state."],
  ["@cognidesk/studio-adapter", "Target-side Studio adapter for exposing Cognidesk runtime introspection and conversation data."],
  ["@cognidesk/studio-contracts", "Shared Studio API schemas, auth helpers, and contract types."],
  ["@cognidesk/studio-operator-skills", "Operator skill definitions and helpers for Cognidesk Studio automation workflows."],
  ["@cognidesk/test-harness", "Test harness utilities for Cognidesk runtime and provider package conformance."],
  ["@cognidesk/ui", "Shared Cognidesk UI primitives for Studio and runtime-facing interfaces."],
  ["@cognidesk/voice-websocket", "Voice WebSocket adapter utilities for Cognidesk realtime voice sessions."],
]);

const categoryLabels = new Map([
  ["cobrowsing", "cobrowsing"],
  ["community", "community"],
  ["contact-center", "contact center"],
  ["ecommerce", "ecommerce"],
  ["email", "email"],
  ["form", "form"],
  ["help-center", "help center"],
  ["marketplace", "marketplace"],
  ["messaging", "messaging"],
  ["review", "review"],
  ["sms", "SMS"],
  ["social", "social"],
  ["ticketing", "ticketing"],
  ["video", "video"],
  ["voice", "voice"],
  ["workplace", "workplace"],
]);

const providerDisplayNames = new Map([
  ["8x8", "8x8"],
  ["aircall", "Aircall"],
  ["amazon-connect", "Amazon Connect"],
  ["appstore", "App Store"],
  ["aws-speech", "AWS Speech"],
  ["azure-speech", "Azure AI Speech"],
  ["cognidesk", "Cognidesk"],
  ["deepgram", "Deepgram"],
  ["discord", "Discord"],
  ["dynamics365", "Microsoft Dynamics 365"],
  ["ebay", "eBay"],
  ["elevenlabs", "ElevenLabs"],
  ["five9", "Five9"],
  ["front", "Front"],
  ["genesys-cloud", "Genesys Cloud CX"],
  ["genesys-engage", "Genesys Engage"],
  ["genesys-pureconnect", "Genesys PureConnect"],
  ["gmail", "Gmail"],
  ["google-speech", "Google Cloud Speech"],
  ["googleplay", "Google Play"],
  ["gorgias", "Gorgias"],
  ["help-scout", "Help Scout"],
  ["hubspot", "HubSpot"],
  ["imap", "IMAP Mailbox"],
  ["instagram", "Instagram"],
  ["intercom", "Intercom"],
  ["kustomer", "Kustomer"],
  ["mailgun", "Mailgun"],
  ["messenger", "Facebook Messenger"],
  ["nextiva", "Nextiva"],
  ["nice-cxone", "NICE CXone"],
  ["openai", "OpenAI Realtime"],
  ["oracle-service", "Oracle Service"],
  ["outlook", "Microsoft Outlook"],
  ["pega-customer-service", "Pega Customer Service"],
  ["postmark", "Postmark"],
  ["rcs", "Google RCS for Business"],
  ["ringcentral", "RingCentral RingCX"],
  ["salesforce", "Salesforce Service Cloud"],
  ["sap-service-cloud", "SAP Service Cloud"],
  ["servicenow", "ServiceNow"],
  ["ses", "Amazon SES"],
  ["shopify", "Shopify"],
  ["sip", "SIP"],
  ["slack", "Slack"],
  ["smtp", "SMTP"],
  ["stripe", "Stripe"],
  ["talkdesk", "Talkdesk"],
  ["teams", "Microsoft Teams"],
  ["tiktok", "TikTok"],
  ["twilio", "Twilio"],
  ["vonage", "Vonage"],
  ["whereby", "Whereby"],
  ["whatsapp", "WhatsApp Business Platform"],
  ["zendesk", "Zendesk"],
  ["zoho-desk", "Zoho Desk"],
  ["zoom", "Zoom"],
]);

const packages = packageWorkspaces(root);

for (const pkg of packages) {
  const readmePath = path.join(root, ...pkg.dir.split("/"), "README.md");
  writeFileSync(readmePath, renderReadme(pkg));
  console.log(`Synced ${pkg.dir}/README.md (${pkg.name})`);
}

function renderReadme(pkg) {
  const description = descriptionForPackage(pkg);
  const exports = publicExports(pkg);
  const docsPath = docsPathForPackage(pkg);

  return `# ${pkg.name}

${description}

## Install

\`\`\`bash
npm install ${pkg.name}
\`\`\`

## Usage

\`\`\`ts
import * as cognideskPackage from "${pkg.name}";
\`\`\`

${isProviderPackage(pkg) ? providerNotes(pkg) : platformNotes(pkg)}

## Public exports

${exports.map((entry) => `- \`${entry}\``).join("\n")}

## Links

- Documentation: https://cognidesk.cognilabz.com
- Repository: https://github.com/cognilabz/cognidesk/tree/main/${pkg.dir}
${docsPath ? `- Package docs: https://cognidesk.cognilabz.com/${docsPath}\n` : ""}- License: Apache-2.0
`;
}

function descriptionForPackage(pkg) {
  if (!isProviderPackage(pkg)) {
    return platformDescriptions.get(pkg.name) ?? "Cognidesk package for building customer support agents as code.";
  }

  const { category, provider } = providerMetadata(pkg);
  const providerName = providerDisplayName(provider);
  const categoryName = categoryLabels.get(category) ?? words(category);

  return `${providerName} ${categoryName} integration package for Cognidesk support agents.`;
}

function providerNotes(pkg) {
  const { category, provider } = providerMetadata(pkg);
  const providerName = providerDisplayName(provider);
  const categoryName = categoryLabels.get(category) ?? words(category);

  return `This package exposes the reviewed ${providerName} ${categoryName} support workflow surface for Cognidesk. It is intentionally scoped to the provider operations declared by the package manifest and does not claim full provider API coverage.

For manifest-only usage:

\`\`\`ts
import * as providerManifest from "${pkg.name}/manifest";
\`\`\`
`;
}

function platformNotes(pkg) {
  return `This package is part of the Cognidesk SDK. It is designed to be composed with the other \`@cognidesk/*\` packages in application-owned runtimes, transports, storage, and user interfaces.
`;
}

function providerMetadata(pkg) {
  const [, directoryCategory, directoryProvider] = pkg.dir.split("/");
  return {
    category: pkg.packageJson.cognidesk?.category ?? directoryCategory,
    provider: pkg.packageJson.cognidesk?.provider ?? directoryProvider,
  };
}

function providerDisplayName(provider) {
  return providerDisplayNames.get(provider) ?? words(provider);
}

function words(value) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => {
      if (/^[A-Z0-9]+$/.test(word)) return word;
      return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
    })
    .join(" ");
}

function publicExports(pkg) {
  const exportsField = pkg.packageJson.exports;
  if (!exportsField) return [pkg.name];

  const exportMap = isSubpathExportMap(exportsField) ? exportsField : { ".": exportsField };
  const entries = Object.keys(exportMap)
    .filter((subpath) => subpath === "." || subpath.startsWith("./"))
    .filter((subpath) => subpath !== "./package.json")
    .filter((subpath) => !subpath.includes("*"))
    .map((subpath) => subpath === "." ? pkg.name : `${pkg.name}/${subpath.slice(2)}`)
    .sort();

  return entries.length > 0 ? entries : [pkg.name];
}

function isSubpathExportMap(value) {
  return typeof value === "object"
    && value !== null
    && !Array.isArray(value)
    && Object.keys(value).some((key) => key === "." || key.startsWith("./"));
}

function docsPathForPackage(pkg) {
  if (pkg.name === "@cognidesk/core") return "api-reference/";
  if (pkg.name === "@cognidesk/react") return "api-reference/react/";
  if (pkg.name === "@cognidesk/http") return "api-reference/http/";
  return undefined;
}
