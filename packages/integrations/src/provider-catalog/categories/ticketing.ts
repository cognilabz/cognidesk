import type { IntegrationProviderReference } from "../types.js";

export const ticketingProviderReferences = [
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
    "id": "ticketing.kustomer",
    "category": "ticketing",
    "provider": "kustomer",
    "importPath": "@cognidesk/integrations/ticketing/kustomer",
    "modulePath": "./ticketing/kustomer/index.js",
    "manifestExport": "kustomerTicketingProviderManifest"
  },
  {
    "id": "ticketing.oracle-service",
    "category": "ticketing",
    "provider": "oracle-service",
    "importPath": "@cognidesk/integrations/ticketing/oracle-service",
    "modulePath": "./ticketing/oracle-service/index.js",
    "manifestExport": "oracleServiceTicketingProviderManifest"
  },
  {
    "id": "ticketing.pega-customer-service",
    "category": "ticketing",
    "provider": "pega-customer-service",
    "importPath": "@cognidesk/integrations/ticketing/pega-customer-service",
    "modulePath": "./ticketing/pega-customer-service/index.js",
    "manifestExport": "pegaCustomerServiceTicketingProviderManifest"
  },
  {
    "id": "ticketing.sap-service-cloud",
    "category": "ticketing",
    "provider": "sap-service-cloud",
    "importPath": "@cognidesk/integrations/ticketing/sap-service-cloud",
    "modulePath": "./ticketing/sap-service-cloud/index.js",
    "manifestExport": "sapServiceCloudTicketingProviderManifest"
  },
  {
    "id": "ticketing.zendesk",
    "category": "ticketing",
    "provider": "zendesk",
    "importPath": "@cognidesk/integrations/ticketing/zendesk",
    "modulePath": "./ticketing/zendesk/index.js",
    "manifestExport": "zendeskTicketingProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
