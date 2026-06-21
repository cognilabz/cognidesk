import type { IntegrationProviderReference } from "../types.js";

export const workplaceProviderReferences = [
  {
    "id": "workplace.slack",
    "category": "workplace",
    "provider": "slack",
    "importPath": "@cognidesk/integrations/workplace/slack",
    "modulePath": "./workplace/slack/index.js",
    "manifestExport": "slackWorkplaceProviderManifest"
  },
  {
    "id": "workplace.teams",
    "category": "workplace",
    "provider": "teams",
    "importPath": "@cognidesk/workplace-teams/manifest",
    "modulePath": "./workplace/teams/manifest.js",
    "manifestExport": "teamsWorkplaceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
