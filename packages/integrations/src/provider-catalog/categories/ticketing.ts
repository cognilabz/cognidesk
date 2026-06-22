import type { IntegrationProviderReference } from "../types.js";

export const ticketingProviderReferences = [
  {
    "id": "ticketing.dynamics365",
    "category": "ticketing",
    "provider": "dynamics365",
    "importPath": "@cognidesk/integrations/ticketing/dynamics365",
    "modulePath": "./ticketing/dynamics365/index.js",
    "manifestExport": "dynamics365TicketingProviderManifest"
  },
  {
    "id": "ticketing.freshdesk",
    "category": "ticketing",
    "provider": "freshdesk",
    "importPath": "@cognidesk/integrations/ticketing/freshdesk",
    "modulePath": "./ticketing/freshdesk/index.js",
    "manifestExport": "freshdeskTicketingProviderManifest"
  },
  {
    "id": "ticketing.front",
    "category": "ticketing",
    "provider": "front",
    "importPath": "@cognidesk/integrations/ticketing/front",
    "modulePath": "./ticketing/front/index.js",
    "manifestExport": "frontTicketingProviderManifest"
  },
  {
    "id": "ticketing.gorgias",
    "category": "ticketing",
    "provider": "gorgias",
    "importPath": "@cognidesk/integrations/ticketing/gorgias",
    "modulePath": "./ticketing/gorgias/index.js",
    "manifestExport": "gorgiasTicketingProviderManifest"
  },
  {
    "id": "ticketing.help-scout",
    "category": "ticketing",
    "provider": "help-scout",
    "importPath": "@cognidesk/integrations/ticketing/help-scout",
    "modulePath": "./ticketing/help-scout/index.js",
    "manifestExport": "helpScoutTicketingProviderManifest"
  },
  {
    "id": "ticketing.hubspot",
    "category": "ticketing",
    "provider": "hubspot",
    "importPath": "@cognidesk/integrations/ticketing/hubspot",
    "modulePath": "./ticketing/hubspot/index.js",
    "manifestExport": "hubSpotTicketingProviderManifest"
  },
  {
    "id": "ticketing.intercom",
    "category": "ticketing",
    "provider": "intercom",
    "importPath": "@cognidesk/integrations/ticketing/intercom",
    "modulePath": "./ticketing/intercom/index.js",
    "manifestExport": "intercomTicketingProviderManifest"
  },
  {
    "id": "ticketing.kustomer",
    "category": "ticketing",
    "provider": "kustomer",
    "importPath": "@cognidesk/integrations/ticketing/kustomer",
    "modulePath": "./ticketing/kustomer/index.js",
    "manifestExport": "kustomerTicketingProviderManifest"
  },
  {
    "id": "ticketing.salesforce",
    "category": "ticketing",
    "provider": "salesforce",
    "importPath": "@cognidesk/integrations/ticketing/salesforce",
    "modulePath": "./ticketing/salesforce/index.js",
    "manifestExport": "salesforceTicketingProviderManifest"
  },
  {
    "id": "ticketing.servicenow",
    "category": "ticketing",
    "provider": "servicenow",
    "importPath": "@cognidesk/integrations/ticketing/servicenow",
    "modulePath": "./ticketing/servicenow/index.js",
    "manifestExport": "serviceNowTicketingProviderManifest"
  },
  {
    "id": "ticketing.zendesk",
    "category": "ticketing",
    "provider": "zendesk",
    "importPath": "@cognidesk/integrations/ticketing/zendesk",
    "modulePath": "./ticketing/zendesk/index.js",
    "manifestExport": "zendeskTicketingProviderManifest"
  },
  {
    "id": "ticketing.zoho-desk",
    "category": "ticketing",
    "provider": "zoho-desk",
    "importPath": "@cognidesk/integrations/ticketing/zoho-desk",
    "modulePath": "./ticketing/zoho-desk/index.js",
    "manifestExport": "zohoDeskTicketingProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
