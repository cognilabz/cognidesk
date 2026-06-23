import type { IntegrationProviderReference } from "../types.js";

export const contactCenterProviderReferences = [
  {
    "id": "contactCenter.8x8",
    "category": "contactCenter",
    "provider": "8x8",
    "importPath": "@cognidesk/integrations/contact-center/8x8",
    "modulePath": "./contact-center/8x8/index.js",
    "manifestExport": "eightByEightContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.aircall",
    "category": "contactCenter",
    "provider": "aircall",
    "importPath": "@cognidesk/integrations/contact-center/aircall",
    "modulePath": "./contact-center/aircall/index.js",
    "manifestExport": "aircallContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.five9",
    "category": "contactCenter",
    "provider": "five9",
    "importPath": "@cognidesk/integrations/contact-center/five9",
    "modulePath": "./contact-center/five9/index.js",
    "manifestExport": "five9ContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.genesys-engage",
    "category": "contactCenter",
    "provider": "genesys-engage",
    "importPath": "@cognidesk/integrations/contact-center/genesys-engage",
    "modulePath": "./contact-center/genesys-engage/index.js",
    "manifestExport": "genesysEngageContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.genesys-pureconnect",
    "category": "contactCenter",
    "provider": "genesys-pureconnect",
    "importPath": "@cognidesk/integrations/contact-center/genesys-pureconnect",
    "modulePath": "./contact-center/genesys-pureconnect/index.js",
    "manifestExport": "genesysPureConnectContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.nextiva",
    "category": "contactCenter",
    "provider": "nextiva",
    "importPath": "@cognidesk/integrations/contact-center/nextiva",
    "modulePath": "./contact-center/nextiva/index.js",
    "manifestExport": "nextivaContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.nice-cxone",
    "category": "contactCenter",
    "provider": "nice-cxone",
    "importPath": "@cognidesk/integrations/contact-center/nice-cxone",
    "modulePath": "./contact-center/nice-cxone/index.js",
    "manifestExport": "niceCxoneContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.talkdesk",
    "category": "contactCenter",
    "provider": "talkdesk",
    "importPath": "@cognidesk/integrations/contact-center/talkdesk",
    "modulePath": "./contact-center/talkdesk/index.js",
    "manifestExport": "talkdeskContactCenterProviderManifest"
  },
  {
    "id": "contactCenter.zoom",
    "category": "contactCenter",
    "provider": "zoom",
    "importPath": "@cognidesk/integrations/contact-center/zoom",
    "modulePath": "./contact-center/zoom/index.js",
    "manifestExport": "zoomContactCenterProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
