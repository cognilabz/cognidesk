import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const GENERATED_AT = "2026-06-18";
const DOCS_URL = "https://developers.freshdesk.com/api/";
const DOCS_DIR = "docs/provider-coverage";
const artifactStem = `freshdesk-v2-api-${GENERATED_AT}`;

const implementedDocIds = new Set([
  "create_ticket",
  "view_a_ticket",
  "list_all_tickets",
  "filter_tickets",
  "update_ticket",
  "list_all_ticket_notes",
  "reply_ticket",
  "add_note_to_a_ticket",
  "create_contact",
  "view_contact",
  "list_all_contacts",
  "filter_contacts",
  "update_contact",
  "view_agent",
  "list_all_agents",
  "me",
  "view_group",
  "list_all_groups",
  "list_all_agents_in_a_group",
]);

const implementedFunctions = [
  { name: "createTicket", docIds: ["create_ticket"], method: "POST", path: "/api/v2/tickets" },
  { name: "getTicket", docIds: ["view_a_ticket"], method: "GET", path: "/api/v2/tickets/[id]" },
  { name: "updateTicket", docIds: ["update_ticket"], method: "PUT", path: "/api/v2/tickets/[id]" },
  { name: "listTickets", docIds: ["list_all_tickets"], method: "GET", path: "/api/v2/tickets" },
  { name: "searchTickets", docIds: ["filter_tickets"], method: "GET", path: "/api/v2/search/tickets?query=[query]" },
  { name: "listConversations", docIds: ["list_all_ticket_notes"], method: "GET", path: "/api/v2/tickets/[id]/conversations" },
  { name: "createReply", docIds: ["reply_ticket"], method: "POST", path: "/api/v2/tickets/[id]/reply" },
  { name: "createNote", docIds: ["add_note_to_a_ticket"], method: "POST", path: "/api/v2/tickets/[ticket_id]/notes" },
  { name: "createContact", docIds: ["create_contact"], method: "POST", path: "/api/v2/contacts" },
  { name: "getContact", docIds: ["view_contact"], method: "GET", path: "/api/v2/contacts/[id]" },
  { name: "updateContact", docIds: ["update_contact"], method: "PUT", path: "/api/v2/contacts/[id]" },
  { name: "searchContacts", docIds: ["filter_contacts"], method: "GET", path: "/api/v2/search/contacts?query=[query]" },
  { name: "getCurrentAgent", docIds: ["current_agent"], method: "GET", path: "/api/v2/agents/me" },
  { name: "getAgent", docIds: ["view_agent"], method: "GET", path: "/api/v2/agents/[id]" },
  { name: "listAgents", docIds: ["list_all_agents"], method: "GET", path: "/api/v2/agents" },
  { name: "getGroup", docIds: ["view_group"], method: "GET", path: "/api/v2/admin/groups/[id]" },
  { name: "listGroups", docIds: ["list_all_groups"], method: "GET", path: "/api/v2/admin/groups" },
  { name: "listAdminGroupAgents", docIds: ["list_all_agent_groups"], method: "GET", path: "/api/v2/admin/groups/[id]/agents" },
];

function cleanHtml(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePath(value) {
  const cleaned = cleanHtml(value);
  if (!cleaned) {
    return undefined;
  }
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

function classifyFamily(pathValue, title) {
  const value = `${pathValue ?? ""} ${title}`.toLowerCase();
  if (value.includes("ticket")) return "tickets";
  if (value.includes("conversation") || value.includes("reply") || value.includes("note")) return "conversations";
  if (value.includes("contact")) return "contacts";
  if (value.includes("company")) return "companies";
  if (value.includes("agent")) return "agents";
  if (value.includes("group")) return "groups";
  if (value.includes("field") || value.includes("form")) return "fields-and-forms";
  if (value.includes("skill")) return "skills";
  if (value.includes("automation")) return "automations";
  if (value.includes("sla")) return "slas";
  if (value.includes("business_hour")) return "business-hours";
  if (value.includes("canned")) return "canned-responses";
  if (value.includes("discussion") || value.includes("forum") || value.includes("topic")) return "forums";
  if (value.includes("solution")) return "solutions";
  if (value.includes("custom_object")) return "custom-objects";
  if (value.includes("satisfaction")) return "customer-satisfaction";
  if (value.includes("mailbox")) return "email-mailboxes";
  if (value.includes("outbound")) return "outbound-messages";
  if (value.includes("account")) return "account";
  if (value.includes("job")) return "jobs";
  return "other";
}

async function main() {
  const response = await fetch(DOCS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${DOCS_URL}: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const liRegex = /<li>([\s\S]*?)<\/li>/g;
  const anchorRegex = /<a href="#([^"]+)"[^>]*>/;
  const titleRegex = /<span class="api-request-title">([\s\S]*?)<\/span>/;
  const pathRegex = /<span class="muted small light nav-center-url ellipsis">([\s\S]*?)<\/span>/;
  const entries = [];
  const seen = new Set();
  let match;

  while ((match = liRegex.exec(html)) !== null) {
    const block = match[1];
    const anchorMatch = anchorRegex.exec(block);
    const titleMatch = titleRegex.exec(block);
    if (!anchorMatch || !titleMatch) {
      continue;
    }
    const id = cleanHtml(anchorMatch[1]);
    const title = cleanHtml(titleMatch[1]);
    const docPath = normalizePath(pathRegex.exec(block)?.[1] ?? "");
    if (!id || !title || title === "Overview") {
      continue;
    }
    const key = `${id}:${docPath ?? ""}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    entries.push({
      id,
      title,
      ...(docPath ? { path: docPath } : {}),
      family: classifyFamily(docPath, title),
      coverage: implementedDocIds.has(id) ? "implemented" : "gap",
    });
  }

  const families = [...new Set(entries.map((entry) => entry.family))].sort();
  const implemented = entries.filter((entry) => entry.coverage === "implemented");
  const gaps = entries.filter((entry) => entry.coverage === "gap");

  await mkdir(DOCS_DIR, { recursive: true });
  await writeFile(
    path.join(DOCS_DIR, `${artifactStem}.operations.json`),
    `${JSON.stringify({
      generatedAt: GENERATED_AT,
      source: {
        label: "Freshdesk API v2 reference",
        url: DOCS_URL,
        format: "html-reference",
        openApiAvailability: "no-official-public-openapi-found",
      },
      scope: "provider-api-subset",
      summary: {
        documentedEntries: entries.length,
        implementedEntries: implemented.length,
        gapEntries: gaps.length,
        families,
      },
      entries,
    }, null, 2)}\n`,
  );

  await writeFile(
    path.join(DOCS_DIR, `${artifactStem}.functions.json`),
    `${JSON.stringify({
      generatedAt: GENERATED_AT,
      source: {
        label: "Freshdesk API v2 reference",
        url: DOCS_URL,
      },
      functionCount: implementedFunctions.length,
      functions: implementedFunctions,
      note: "Function catalog covers implemented SDK client methods only; the operations inventory records other official Freshdesk v2 docs entries as explicit gaps.",
    }, null, 2)}\n`,
  );

  console.log(`Generated ${entries.length} Freshdesk docs entries with ${implemented.length} implemented entries and ${gaps.length} gaps.`);
}

await main();
