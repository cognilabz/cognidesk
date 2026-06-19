import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const pegaCustomerServiceTicketingProviderManifest = defineProviderPackage({
  id: "ticketing.pega-customer-service",
  name: "Pega Customer Service",
  packageName: "@cognidesk/integrations",
  provider: "pega-customer-service",
  category: "ticketing",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is typed for Pega DX API case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows.",
      "This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter.",
    ],
    evidence: [
      { label: "Pega DX API overview", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html" },
      { label: "Pega DX API cases endpoints", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html" },
      { label: "Pega DX API POST /cases", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html" },
      { label: "Pega DX API GET /cases", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html" },
      { label: "Pega DX API GET /cases/{ID}", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html" },
      { label: "Pega DX API PUT /cases/{ID}", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html" },
      { label: "Pega DX API GET /casetypes", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html" },
      { label: "Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html" },
    ],
  },
  credentialRequirements: [
    {
      id: "pega-customer-service-instance",
      label: "Pega Customer Service instance URL",
      description: "The SDK user's Pega Platform or Pega Customer Service application URL.",
      required: true,
    },
    {
      id: "pega-customer-service-api-access",
      label: "Pega DX API access",
      description: "Server-side OAuth bearer access or Basic Auth credentials for Pega DX API endpoints with operator/client privileges for cases, case types, and assignment actions.",
      scopes: ["cases:read", "cases:write", "casetypes:read"],
      required: true,
      metadata: {
        scopeKind: "internal-capability-labels",
        privilegeGuidance: "These strings are Cognidesk capability labels, not proven official Pega OAuth scopes. Pega access depends on the operator/client access group and privileges for case list/read/create/update, case type read, and assignment action submission.",
      },
    },
  ],
  capabilities: [
    {
      capability: "create-provider-object",
      label: "Create Pega cases",
      description: "Creates Pega Customer Service cases with the Pega DX API from SDK-user-selected workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "pegaCase", label: "Pega Case", schemaName: "Pega-API-CaseManagement-Case" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read Pega cases",
      description: "Reads Pega cases and case type metadata through the Pega DX API.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [
        { kind: "pegaCase", label: "Pega Case", schemaName: "Pega-API-CaseManagement-Case" },
        { kind: "pegaCaseType", label: "Pega Case Type", schemaName: "Pega-API-CaseManagement-CaseType" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "update-provider-object",
      label: "Update Pega cases",
      description: "Updates Pega cases with SDK-user-supplied case data through the Pega DX API.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "pegaCase", label: "Pega Case", schemaName: "Pega-API-CaseManagement-Case" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "search-provider-object",
      label: "Search Pega cases",
      description: "Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "pegaCase", label: "Pega Case", schemaName: "Pega-API-CaseManagement-Case" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "handoff",
      label: "Run Pega case handoff action",
      description: "Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [
        { kind: "pegaCase", label: "Pega Case", schemaName: "Pega-API-CaseManagement-Case" },
        { kind: "pegaAssignmentAction", label: "Pega Assignment Action", schemaName: "Pega-API-CaseManagement-AssignmentAction" },
      ],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
  ],
  privacyNotes: [
    "Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context.",
    "Pega API credentials stay server-side and Studio receives only readiness and scope status.",
  ],
  limitations: [
    "Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application.",
    "SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before calling Pega APIs.",
  ],
  metadata: {
    checkedProviderApiCoverage: {
      verifiedAt: "2026-06-18",
      sourceKind: "checked-endpoint-family-inventory",
      coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json",
      checkedFamilyCount: 4,
      implementedFamilyCount: 3,
      gapFamilyCount: 1,
      implementedOperationCount: 6,
    },
    channelCoverage: {
      cases: "typed-create-read-update-search",
      assignmentActions: "typed-submit",
      caseTypes: "typed-list",
      readiness: "typed-list",
      attachmentsDataPages: "provider-supported-not-typed",
      stageLifecycleActions: "provider-supported-not-typed",
      broaderCaseManagementAdmin: "not-covered",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export type PegaCustomerServiceJsonPrimitive = string | number | boolean | null;
export type PegaCustomerServiceJsonValue =
  | PegaCustomerServiceJsonPrimitive
  | PegaCustomerServiceJsonObject
  | readonly PegaCustomerServiceJsonValue[];
export type PegaCustomerServiceProviderExtensionValue = PegaCustomerServiceJsonValue | object | undefined;
export interface PegaCustomerServiceJsonObject {
  [key: string]: PegaCustomerServiceProviderExtensionValue;
}
export type PegaCustomerServiceProviderPayload = PegaCustomerServiceJsonObject | object;
export type PegaCustomerServiceProviderQuery = Record<string, PegaCustomerServiceProviderExtensionValue>;
export interface PegaCustomerServiceProviderResponse extends PegaCustomerServiceJsonObject {}
export interface PegaCustomerServiceProviderExtensionFields extends PegaCustomerServiceJsonObject {}

export interface PegaCustomerServiceTicketingClientOptions {
  instanceUrl: string;
  username?: string;
  password?: string;
  accessToken?: string;
  apiBasePath?: string;
  fetch?: typeof fetch;
}

export interface PegaCustomerServiceCredentialStatusInput {
  instanceUrl?: string;
  username?: string;
  password?: string;
  accessToken?: string;
  scopes?: string[];
}

export type PegaCaseResource = PegaCustomerServiceProviderPayload & {
  ID?: string;
  caseID?: string;
  name?: string;
  status?: string;
  stage?: string;
  caseTypeID?: string;
};

export type PegaCaseTypeResource = PegaCustomerServiceProviderPayload & {
  ID?: string;
  name?: string;
  startingProcesses?: Array<PegaCustomerServiceJsonObject>;
};

export interface PegaCreateCaseInput {
  caseTypeId: string;
  processId?: string;
  parentCaseId?: string;
  content?: PegaCustomerServiceJsonObject;
  pageInstructions?: PegaCustomerServiceJsonValue[];
  fields?: PegaCustomerServiceJsonObject;
}

export interface PegaUpdateCaseInput {
  content?: PegaCustomerServiceJsonObject;
  pageInstructions?: PegaCustomerServiceJsonValue[];
  fields?: PegaCustomerServiceJsonObject;
}

export interface PegaAssignmentActionInput {
  assignmentId: string;
  actionId: string;
  eTag?: string;
  content?: PegaCustomerServiceJsonObject;
  pageInstructions?: PegaCustomerServiceJsonValue[];
  fields?: PegaCustomerServiceJsonObject;
}

export interface PegaSearchCasesInput {
  caseTypeId?: string;
  status?: string;
  assignmentId?: string;
  page?: number;
  pageSize?: number;
  fields?: Record<string, string | number | boolean>;
}

export interface PegaCasesResult<T = PegaCaseResource> {
  cases: T[];
  count?: number;
}

export interface PegaCustomerServiceTicketingClient {
  createCase(input: PegaCreateCaseInput): Promise<PegaCaseResource>;
  getCase(caseId: string): Promise<PegaCaseResource>;
  updateCase(caseId: string, input: PegaUpdateCaseInput): Promise<PegaCaseResource>;
  performAssignmentAction(input: PegaAssignmentActionInput): Promise<PegaCustomerServiceProviderResponse>;
  searchCases(input?: PegaSearchCasesInput): Promise<PegaCasesResult>;
  listCaseTypes(): Promise<PegaCaseTypeResource[]>;
  readiness(): Promise<PegaCaseTypeResource[]>;
}

export interface PegaCustomerServiceLiveCheckOptions extends PegaCustomerServiceTicketingClientOptions {
  client?: Pick<PegaCustomerServiceTicketingClient, "readiness">;
}

export function createPegaCustomerServiceTicketingClient(
  options: PegaCustomerServiceTicketingClientOptions,
): PegaCustomerServiceTicketingClient {
  const fetchImpl = options.fetch ?? fetch;
  return {
    async createCase(input) {
      return pegaRequest<PegaCaseResource>({
        options,
        fetch: fetchImpl,
        method: "POST",
        path: "/cases",
        body: createCaseBody(input),
      });
    },
    async getCase(caseId) {
      return pegaRequest<PegaCaseResource>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/cases/${encodeURIComponent(caseId)}`,
      });
    },
    async updateCase(caseId, input) {
      return pegaRequest<PegaCaseResource>({
        options,
        fetch: fetchImpl,
        method: "PUT",
        path: `/cases/${encodeURIComponent(caseId)}`,
        body: updateCaseBody(input),
      });
    },
    async performAssignmentAction(input) {
      return pegaRequest<PegaCustomerServiceJsonObject>({
        options,
        fetch: fetchImpl,
        method: "PATCH",
        path: `/assignments/${encodeURIComponent(input.assignmentId)}/actions/${encodeURIComponent(input.actionId)}`,
        body: assignmentActionBody(input),
        ...(input.eTag ? { headers: { "if-match": input.eTag } } : {}),
      });
    },
    async searchCases(input = {}) {
      const response = await pegaRequest<PegaCasesApiResponse<PegaCaseResource>>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: `/cases${pegaCasesQuery(input)}`,
      });
      return {
        cases: response.cases ?? response.data ?? [],
        ...(response.count !== undefined ? { count: response.count } : {}),
      };
    },
    async listCaseTypes() {
      const response = await pegaRequest<PegaCaseTypesApiResponse>({
        options,
        fetch: fetchImpl,
        method: "GET",
        path: "/casetypes",
      });
      return response.caseTypes ?? response.data ?? [];
    },
    async readiness() {
      return this.listCaseTypes();
    },
  };
}

export function pegaCustomerServiceTicketingCredentialStatuses(
  input: PegaCustomerServiceCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const hasBasic = Boolean(input.username && input.password);
  const hasBearer = Boolean(input.accessToken);
  return [
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-instance",
      state: input.instanceUrl ? "configured" : "missing",
      message: input.instanceUrl
        ? "Pega Customer Service instance URL is configured."
        : "A Pega Customer Service instance URL is required.",
    },
    {
      providerPackageId: pegaCustomerServiceTicketingProviderManifest.id,
      requirementId: "pega-customer-service-api-access",
      state: hasBasic || hasBearer ? "configured" : "missing",
      scopes: input.scopes ?? ["cases:read", "cases:write", "casetypes:read"],
      message: hasBasic || hasBearer
        ? "Pega DX API access is configured."
        : "Pega DX API OAuth bearer access or Basic Auth credentials are required.",
    },
  ];
}

export function createPegaCustomerServiceTicketingLiveChecks(options: PegaCustomerServiceLiveCheckOptions) {
  return [{
    id: "case-types",
    description: "Pega DX API case types endpoint can be queried with the configured credentials.",
    requiredCredentialIds: ["pega-customer-service-instance", "pega-customer-service-api-access"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createPegaCustomerServiceTicketingClient(options);
      const caseTypes = await client.readiness();
      if (context.signal?.aborted) throw new Error("Pega Customer Service live case-types check aborted.");
      return { details: { caseTypeCount: caseTypes.length } };
    },
  }];
}

function createCaseBody(input: PegaCreateCaseInput) {
  return stripUndefined({
    caseTypeID: input.caseTypeId,
    processID: input.processId,
    parentCaseID: input.parentCaseId,
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function updateCaseBody(input: PegaUpdateCaseInput) {
  return stripUndefined({
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function assignmentActionBody(input: PegaAssignmentActionInput) {
  return stripUndefined({
    content: input.content,
    pageInstructions: input.pageInstructions,
    ...(input.fields ?? {}),
  });
}

function pegaCasesQuery(input: PegaSearchCasesInput) {
  const params = new URLSearchParams();
  if (input.caseTypeId) params.set("caseTypeID", input.caseTypeId);
  if (input.status) params.set("status", input.status);
  if (input.assignmentId) params.set("assignmentID", input.assignmentId);
  if (input.page !== undefined) params.set("page", String(input.page));
  if (input.pageSize !== undefined) params.set("pageSize", String(input.pageSize));
  for (const [key, value] of Object.entries(input.fields ?? {})) {
    params.set(key, String(value));
  }
  return params.size ? `?${params}` : "";
}

async function pegaRequest<T>(input: {
  options: PegaCustomerServiceTicketingClientOptions;
  fetch: typeof fetch;
  method: "GET" | "POST" | "PUT" | "PATCH";
  path: string;
  body?: PegaCustomerServiceProviderPayload;
  headers?: Record<string, string>;
}): Promise<T> {
  const baseUrl = `${normalizeInstanceUrl(input.options.instanceUrl)}${input.options.apiBasePath ?? "/api/v1"}`;
  const response = await input.fetch(`${baseUrl}${input.path}`, {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.headers ?? {}),
      ...authHeaders(input.options),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & PegaErrorResponse : {} as T & PegaErrorResponse;
  if (!response.ok) throw new Error(pegaErrorMessage(body, response.status));
  return body as T;
}

function normalizeInstanceUrl(instanceUrl: string) {
  if (!instanceUrl) throw new Error("Pega Customer Service instanceUrl is required.");
  const withProtocol = /^https?:\/\//i.test(instanceUrl) ? instanceUrl : `https://${instanceUrl}`;
  const url = new URL(withProtocol);
  return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, "")}`;
}

function authHeaders(options: PegaCustomerServiceTicketingClientOptions) {
  if (options.accessToken) return { authorization: `Bearer ${options.accessToken}` };
  if (options.username && options.password) {
    return {
      authorization: `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`,
    };
  }
  throw new Error("Pega Customer Service API access requires either accessToken or username and password.");
}

interface PegaCasesApiResponse<T> {
  cases?: T[];
  data?: T[];
  count?: number;
}

interface PegaCaseTypesApiResponse {
  caseTypes?: PegaCaseTypeResource[];
  data?: PegaCaseTypeResource[];
}

interface PegaErrorResponse {
  message?: string;
  error?: string;
  errors?: Array<{ message?: string; ValidationMessage?: string; ID?: string }>;
}

function pegaErrorMessage(body: PegaErrorResponse, status: number) {
  const firstError = body.errors?.[0];
  return firstError?.ValidationMessage
    ?? firstError?.message
    ?? firstError?.ID
    ?? body.message
    ?? body.error
    ?? `Pega Customer Service API returned ${status}.`;
}

function stripUndefined<T extends PegaCustomerServiceJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}
