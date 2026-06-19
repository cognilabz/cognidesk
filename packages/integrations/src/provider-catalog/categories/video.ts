import type { IntegrationProviderReference } from "../types.js";

export const videoProviderReferences = [
  {
    "id": "video.whereby",
    "category": "video",
    "provider": "whereby",
    "importPath": "@cognidesk/integrations/video/whereby",
    "modulePath": "./video/whereby/index.js",
    "manifestExport": "wherebyVideoProviderManifest"
  },
  {
    "id": "video.zoom",
    "category": "video",
    "provider": "zoom",
    "importPath": "@cognidesk/integrations/video/zoom",
    "modulePath": "./video/zoom/index.js",
    "manifestExport": "zoomVideoProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
