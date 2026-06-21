import type { IntegrationProviderReference } from "../types.js";

export const workplaceProviderReferences = [
  {
    "id": "workplace.teams",
    "category": "workplace",
    "provider": "teams",
    "importPath": "@cognidesk/integrations/workplace/teams",
    "modulePath": "./workplace/teams/index.js",
    "manifestExport": "teamsWorkplaceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
