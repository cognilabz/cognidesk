import type { IntegrationProviderReference } from "../types.js";

export const contactCenterProviderReferences = [
  {
    "id": "contactCenter.amazon-connect",
    "category": "contactCenter",
    "provider": "amazon-connect",
    "importPath": "@cognidesk/integrations/contact-center/amazon-connect",
    "modulePath": "./contact-center/amazon-connect/index.js",
    "manifestExport": "amazonConnectContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.genesys-cloud",
    "category": "contactCenter",
    "provider": "genesys-cloud",
    "importPath": "@cognidesk/integrations/contact-center/genesys-cloud",
    "modulePath": "./contact-center/genesys-cloud/index.js",
    "manifestExport": "genesysCloudContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.ringcentral",
    "category": "contactCenter",
    "provider": "ringcentral",
    "importPath": "@cognidesk/integrations/contact-center/ringcentral",
    "modulePath": "./contact-center/ringcentral/index.js",
    "manifestExport": "ringCentralContactCenterProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
