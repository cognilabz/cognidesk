import type { IntegrationProviderReference } from "../types.js";

export const ticketingProviderReferences = [
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
  }
] as const satisfies readonly IntegrationProviderReference[];
