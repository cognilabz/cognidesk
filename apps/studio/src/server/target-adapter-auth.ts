import type { StudioTargetManifest } from "@cognidesk/studio-contracts";

export function createStudioAdapterHeaders(
  manifest: { runtime: Pick<StudioTargetManifest["runtime"], "serviceAuthHeader"> },
  serviceToken: string | undefined,
  initHeaders?: HeadersInit,
) {
  const headers = new Headers(initHeaders);
  if (serviceToken) {
    headers.set(manifest.runtime.serviceAuthHeader || "authorization", `Bearer ${serviceToken}`);
  }
  return headers;
}
