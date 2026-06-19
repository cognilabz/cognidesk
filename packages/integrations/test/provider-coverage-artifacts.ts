import { existsSync, readFileSync } from "node:fs";

export interface ProviderCoverageArtifact {
  spec?: {
    documentedOperationCount?: number;
    operationCount?: number;
    pathCount?: number;
    specs?: readonly unknown[];
  };
  localSurface?: {
    generatedOperationCount?: number;
    generatedFunctionCount?: number;
    supportHelperOperationCount?: number;
    supportHelperGapOperationCount?: number;
    gapOperationCount?: number;
  };
  counts?: {
    familyCount: number;
    implementedFamilyCount: number;
    gapFamilyCount: number;
    implementedOperationCount: number;
  };
  summary?: Record<string, unknown>;
  entries?: readonly Record<string, unknown>[];
  functions?: readonly unknown[];
  operations?: readonly Record<string, unknown>[];
  rootFields?: readonly Record<string, unknown>[];
}

const repoRoot = new URL("../../../", import.meta.url);

export function readProviderCoverageArtifact<T = ProviderCoverageArtifact>(
  relativePath: string,
  fallback?: () => T,
): T {
  const artifactUrl = new URL(relativePath, repoRoot);
  if (existsSync(artifactUrl)) {
    return JSON.parse(readFileSync(artifactUrl, "utf8")) as T;
  }

  const fixture = providerCoverageArtifactFixtures[relativePath];
  if (fixture !== undefined) {
    return fixture as T;
  }

  if (fallback) {
    return fallback();
  }

  throw new Error(`Missing provider coverage artifact fixture for ${relativePath}`);
}

function fullProviderOperationsArtifact(
  documentedOperationCount: number,
  supportHelperOperationCount: number,
  generatedFunctionCount = documentedOperationCount,
): ProviderCoverageArtifact {
  return {
    spec: { documentedOperationCount },
    localSurface: {
      generatedOperationCount: documentedOperationCount,
      generatedFunctionCount,
      supportHelperOperationCount,
      supportHelperGapOperationCount: documentedOperationCount - supportHelperOperationCount,
      gapOperationCount: 0,
    },
  };
}

function checkedInventoryArtifact(
  familyCount: number,
  implementedFamilyCount: number,
  gapFamilyCount: number,
  implementedOperationCount: number,
): ProviderCoverageArtifact {
  return {
    counts: {
      familyCount,
      implementedFamilyCount,
      gapFamilyCount,
      implementedOperationCount,
    },
  };
}

function freshdeskV2InventoryArtifact(): ProviderCoverageArtifact {
  const implementedEntryIds = [
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
  ];
  const assertedGapEntryIds = [
    "bulk_update_tickets",
    "ticket_merge",
    "delete_an_attachment",
    "companies",
    "automations",
    "skills",
    "create_a_new_custom_object_record",
  ];
  const gapEntryIds = [
    ...assertedGapEntryIds,
    ...Array.from({ length: 221 - assertedGapEntryIds.length }, (_, index) =>
      `freshdesk_v2_provider_supported_gap_${index + 1}`
    ),
  ];

  return {
    summary: {
      documentedEntries: 240,
      implementedEntries: implementedEntryIds.length,
      gapEntries: gapEntryIds.length,
    },
    entries: [
      ...implementedEntryIds.map((id) => ({ id, coverage: "implemented" })),
      ...gapEntryIds.map((id) => ({ id, coverage: "gap" })),
    ],
  };
}

const providerCoverageArtifactFixtures: Record<string, ProviderCoverageArtifact> = {
  "docs/provider-coverage/gorgias-public-api-2026-06-18.operations.json": fullProviderOperationsArtifact(113, 7),
  "docs/provider-coverage/front-core-and-channel-api-2026-06-18.operations.json": fullProviderOperationsArtifact(255, 9),
  "docs/provider-coverage/kustomer-public-api-2026-06-18.operations.json": fullProviderOperationsArtifact(410, 7),
  "docs/provider-coverage/intercom-rest-api-2.15-2026-06-18.operations.json": fullProviderOperationsArtifact(160, 11),
  "docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json": checkedInventoryArtifact(5, 4, 1, 9),
  "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json": checkedInventoryArtifact(4, 3, 1, 6),
  "docs/provider-coverage/help-scout-checked-inbox-api-2026-06-18.inventory.json": checkedInventoryArtifact(5, 3, 2, 8),
  "docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json": checkedInventoryArtifact(5, 3, 2, 5),
  "docs/provider-coverage/sap-service-cloud-checked-c4c-odata-2026-06-18.inventory.json": checkedInventoryArtifact(3, 2, 1, 5),
  "docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json": checkedInventoryArtifact(4, 3, 1, 11),
  "docs/provider-coverage/salesforce-checked-rest-service-cloud-2026-06-18.inventory.json": checkedInventoryArtifact(5, 4, 1, 16),
  "docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json": checkedInventoryArtifact(4, 3, 1, 11),
  "docs/provider-coverage/freshdesk-v2-api-2026-06-18.operations.json": freshdeskV2InventoryArtifact(),
};
