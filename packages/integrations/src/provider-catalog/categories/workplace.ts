import type { IntegrationProviderReference } from "../types.js";

export const workplaceProviderReferences = [
  {
    "id": "workplace.teams",
    "category": "workplace",
    "provider": "teams",
    "importPath": "@cognidesk/integration-workplace-teams/manifest",
    "modulePath": "./workplace/teams/manifest.js",
    "manifestExport": "teamsWorkplaceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
