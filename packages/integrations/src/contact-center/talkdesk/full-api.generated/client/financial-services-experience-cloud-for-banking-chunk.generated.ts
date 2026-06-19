// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationKeys = [
  "fsi_workspace_contacts__update_talkdesk_Contact",
  "fsi-desktop-app-session-get",
  "fsi-desktop-app-session-post"
] as const;
export type TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationKey = typeof TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationPathParamMap {
  "fsi_workspace_contacts__update_talkdesk_Contact": {};
  "fsi-desktop-app-session-get": {};
  "fsi-desktop-app-session-post": {};
}

export interface TalkdeskFullApiFinancialServicesExperienceCloudForBankingOperationRequestMap {
  "fsi_workspace_contacts__update_talkdesk_Contact": TalkdeskFullApiOperationInput<"fsi_workspace_contacts__update_talkdesk_Contact">;
  "fsi-desktop-app-session-get": TalkdeskFullApiOperationInput<"fsi-desktop-app-session-get">;
  "fsi-desktop-app-session-post": TalkdeskFullApiOperationInput<"fsi-desktop-app-session-post">;
}

export interface TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient {
  FsiWorkspaceContactsUpdateTalkdeskContact(...args: TalkdeskFullApiOperationArgs<"fsi_workspace_contacts__update_talkdesk_Contact">): Promise<TalkdeskFullApiOperationResponseMap["fsi_workspace_contacts__update_talkdesk_Contact"]>;
  FsiDesktopAppSessionGet(...args: TalkdeskFullApiOperationArgs<"fsi-desktop-app-session-get">): Promise<TalkdeskFullApiOperationResponseMap["fsi-desktop-app-session-get"]>;
  FsiDesktopAppSessionPost(...args: TalkdeskFullApiOperationArgs<"fsi-desktop-app-session-post">): Promise<TalkdeskFullApiOperationResponseMap["fsi-desktop-app-session-post"]>;
}

export const TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedFunctionNames = [
  "FsiWorkspaceContactsUpdateTalkdeskContact",
  "FsiDesktopAppSessionGet",
  "FsiDesktopAppSessionPost"
] as const satisfies readonly (keyof TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient)[];

export function createTalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFinancialServicesExperienceCloudForBankingGeneratedClient {
  return {
    FsiWorkspaceContactsUpdateTalkdeskContact: (...args) => callOperation("fsi_workspace_contacts__update_talkdesk_Contact", ...(args as TalkdeskFullApiOperationArgs<"fsi_workspace_contacts__update_talkdesk_Contact">)),
    FsiDesktopAppSessionGet: (...args) => callOperation("fsi-desktop-app-session-get", ...(args as TalkdeskFullApiOperationArgs<"fsi-desktop-app-session-get">)),
    FsiDesktopAppSessionPost: (...args) => callOperation("fsi-desktop-app-session-post", ...(args as TalkdeskFullApiOperationArgs<"fsi-desktop-app-session-post">)),
  };
}
