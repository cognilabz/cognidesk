import {
  createHubSpotFullApiGeneratedClient,
  type HubSpotGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  HUBSPOT_FULL_API_OPERATION_BY_ID,
  HUBSPOT_FULL_API_OPERATION_BY_UID,
  type HubSpotFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  HubSpotAssociationCreateResponse,
  HubSpotAssociationInput,
  HubSpotAssociationLabel,
  HubSpotCreateCompanyInput,
  HubSpotCreateContactInput,
  HubSpotCreateHandoffNoteInput,
  HubSpotCreateNoteInput,
  HubSpotCreateTicketInput,
  HubSpotHttpMethod,
  HubSpotObjectResponse,
  HubSpotOperationRequestInput,
  HubSpotPipeline,
  HubSpotProperties,
  HubSpotPropertyDefinition,
  HubSpotPropertyValue,
  HubSpotReadOptions,
  HubSpotResource,
  HubSpotSearchRequest,
  HubSpotSearchResponse,
  HubSpotTicketingClient,
  HubSpotTicketingClientOptions,
  HubSpotUpdateObjectInput,
  HubSpotAccountDetails,
  HubSpotOwner,
} from "./contracts.js";
import {
  applyReadOptions,
  hubSpotOperationUrl,
  hubSpotRequest,
  hubSpotUrl,
} from "./request.js";

export function createHubSpotTicketingClient(options: HubSpotTicketingClientOptions): HubSpotTicketingClient {
  const baseUrl = options.baseUrl ?? "https://api.hubapi.com";
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (!fetchImpl) {
    throw new Error("A fetch implementation is required to create a HubSpot ticketing client.");
  }
  const request = <T = HubSpotResource>(
    method: HubSpotHttpMethod,
    path: string,
    input: HubSpotOperationRequestInput = {},
  ) => hubSpotRequest<T>({
    url: hubSpotOperationUrl(baseUrl, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
    headers: input.headers,
  });
  const requestOperation = async (
    operationUidOrId: HubSpotFullApiOperationUid | string,
    input: HubSpotOperationRequestInput = {},
  ) => {
    const operation = HUBSPOT_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? HUBSPOT_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown HubSpot OpenAPI operation '${operationUidOrId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createHubSpotFullApiGeneratedClient(requestOperation as HubSpotGeneratedOperationCaller);

  const object = <TProperties extends HubSpotProperties = HubSpotProperties>(
    objectType: "tickets" | "contacts" | "companies" | "notes",
  ) => ({
    create(input: { properties: HubSpotProperties; associations?: HubSpotAssociationInput[] }) {
      return hubSpotRequest<HubSpotObjectResponse<TProperties>>({
        url: hubSpotUrl(baseUrl, `/crm/v3/objects/${objectType}`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: {
          properties: input.properties,
          ...(input.associations ? { associations: input.associations } : {}),
        },
      });
    },
    get(id: string | number, readOptions: HubSpotReadOptions = {}) {
      const url = hubSpotUrl(baseUrl, `/crm/v3/objects/${objectType}/${encodeURIComponent(String(id))}`);
      applyReadOptions(url, readOptions);
      return hubSpotRequest<HubSpotObjectResponse<TProperties>>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    update(id: string | number, input: HubSpotUpdateObjectInput) {
      const url = hubSpotUrl(baseUrl, `/crm/v3/objects/${objectType}/${encodeURIComponent(String(id))}`);
      if (input.idProperty) url.searchParams.set("idProperty", input.idProperty);
      return hubSpotRequest<HubSpotObjectResponse<TProperties>>({
        url,
        method: "PATCH",
        options,
        fetch: fetchImpl,
        body: { properties: input.properties },
      });
    },
    search(input: HubSpotSearchRequest = {}) {
      return hubSpotRequest<HubSpotSearchResponse<HubSpotObjectResponse<TProperties>>>({
        url: hubSpotUrl(baseUrl, `/crm/v3/objects/${objectType}/search`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: input,
      });
    },
  });

  const tickets = object("tickets");
  const contacts = object("contacts");
  const companies = object("companies");
  const notes = object("notes");

  return {
    fullApi,
    requestOperation: requestOperation as HubSpotGeneratedOperationCaller,
    createTicket(input) {
      return tickets.create({
        properties: ticketProperties(input),
        ...(input.associations ? { associations: input.associations } : {}),
      });
    },
    getTicket(ticketId, readOptions) {
      return tickets.get(ticketId, readOptions);
    },
    updateTicket(ticketId, input) {
      return tickets.update(ticketId, input);
    },
    searchTickets(input = {}) {
      return tickets.search(input);
    },
    createContact(input) {
      return contacts.create({
        properties: contactProperties(input),
        ...(input.associations ? { associations: input.associations } : {}),
      });
    },
    getContact(contactId, readOptions) {
      return contacts.get(contactId, readOptions);
    },
    updateContact(contactId, input) {
      return contacts.update(contactId, input);
    },
    searchContacts(input = {}) {
      return contacts.search(input);
    },
    createCompany(input) {
      return companies.create({
        properties: companyProperties(input),
        ...(input.associations ? { associations: input.associations } : {}),
      });
    },
    getCompany(companyId, readOptions) {
      return companies.get(companyId, readOptions);
    },
    updateCompany(companyId, input) {
      return companies.update(companyId, input);
    },
    searchCompanies(input = {}) {
      return companies.search(input);
    },
    createNote(input) {
      return notes.create({
        properties: noteProperties(input),
        ...(input.associations ? { associations: input.associations } : {}),
      });
    },
    updateNote(noteId, input) {
      return notes.update(noteId, input);
    },
    createHandoffNote(input) {
      return notes.create({
        properties: noteProperties(input),
        associations: [
          {
            to: { id: input.ticketId },
            types: [{
              associationCategory: input.associationCategory ?? "HUBSPOT_DEFINED",
              associationTypeId: input.associationTypeId,
            }],
          },
          ...(input.additionalAssociations ?? []),
        ],
      });
    },
    associateTicket(input) {
      return hubSpotRequest<HubSpotAssociationCreateResponse>({
        url: hubSpotUrl(
          baseUrl,
          `/crm/v3/objects/tickets/${encodeURIComponent(String(input.ticketId))}/associations/${encodeURIComponent(input.toObjectType)}/${encodeURIComponent(String(input.toObjectId))}/${input.associationTypeId}`,
        ),
        method: "PUT",
        options,
        fetch: fetchImpl,
      });
    },
    async getAssociationLabels(fromObjectType, toObjectType) {
      const response = await hubSpotRequest<{ results?: HubSpotAssociationLabel[] }>({
        url: hubSpotUrl(
          baseUrl,
          `/crm/v4/associations/${encodeURIComponent(fromObjectType)}/${encodeURIComponent(toObjectType)}/labels`,
        ),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.results ?? [];
    },
    async listProperties(objectType) {
      const response = await hubSpotRequest<{ results?: HubSpotPropertyDefinition[] }>({
        url: hubSpotUrl(baseUrl, `/crm/v3/properties/${encodeURIComponent(objectType)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.results ?? [];
    },
    async listOwners() {
      const response = await hubSpotRequest<{ results?: HubSpotOwner[] }>({
        url: hubSpotUrl(baseUrl, "/crm/v3/owners"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.results ?? [];
    },
    async listTicketPipelines() {
      const response = await hubSpotRequest<{ results?: HubSpotPipeline[] }>({
        url: hubSpotUrl(baseUrl, "/crm/v3/pipelines/tickets"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
      return response.results ?? [];
    },
    getTicketPipeline(pipelineId) {
      return hubSpotRequest<HubSpotPipeline>({
        url: hubSpotUrl(baseUrl, `/crm/v3/pipelines/tickets/${encodeURIComponent(pipelineId)}`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    getAccountDetails() {
      return hubSpotRequest<HubSpotAccountDetails>({
        url: hubSpotUrl(baseUrl, "/account-info/v3/details"),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

function ticketProperties(input: HubSpotCreateTicketInput): HubSpotProperties {
  return pruneUndefined({
    ...input.properties,
    subject: input.subject ?? input.properties?.subject,
    hs_pipeline: input.pipeline ?? input.properties?.hs_pipeline,
    hs_pipeline_stage: input.pipelineStage ?? input.properties?.hs_pipeline_stage,
    hs_ticket_priority: input.priority ?? input.properties?.hs_ticket_priority,
    hubspot_owner_id: input.ownerId ?? input.properties?.hubspot_owner_id,
    cognidesk_conversation_id: input.sourceConversationId ?? input.properties?.cognidesk_conversation_id,
  });
}

function contactProperties(input: HubSpotCreateContactInput): HubSpotProperties {
  return pruneUndefined({
    ...input.properties,
    email: input.email ?? input.properties?.email,
    firstname: input.firstname ?? input.properties?.firstname,
    lastname: input.lastname ?? input.properties?.lastname,
    phone: input.phone ?? input.properties?.phone,
  });
}

function companyProperties(input: HubSpotCreateCompanyInput): HubSpotProperties {
  return pruneUndefined({
    ...input.properties,
    name: input.name ?? input.properties?.name,
    domain: input.domain ?? input.properties?.domain,
  });
}

function noteProperties(input: HubSpotCreateNoteInput): HubSpotProperties {
  return pruneUndefined({
    ...input.properties,
    hs_note_body: input.body ?? input.properties?.hs_note_body,
    hs_timestamp: input.timestamp ?? input.properties?.hs_timestamp,
    hubspot_owner_id: input.ownerId ?? input.properties?.hubspot_owner_id,
    hs_attachment_ids: input.attachmentIds?.join(";") ?? input.properties?.hs_attachment_ids,
  });
}

function pruneUndefined(input: Record<string, HubSpotPropertyValue | undefined>): HubSpotProperties {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined),
  ) as HubSpotProperties;
}
