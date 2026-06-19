// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiOrganizationSubscriptionsOperationKeys = [
  "CreateOrganizationSubscription",
  "DeleteOrganizationSubscription",
  "ListOrganizationSubscriptions",
  "ListOrganizationSubscriptionsByOrganization",
  "ListUserOrganizationSubscriptions",
  "ShowOrganizationSubscription"
] as const;
export type ZendeskFullApiOrganizationSubscriptionsOperationKey = typeof ZendeskFullApiOrganizationSubscriptionsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOrganizationSubscriptionsOperationPathParamMap {
  "CreateOrganizationSubscription": {};
  "DeleteOrganizationSubscription": { "organization_subscription_id": ZendeskFullApiPathParamValue };
  "ListOrganizationSubscriptions": {};
  "ListOrganizationSubscriptionsByOrganization": { "organization_id": ZendeskFullApiPathParamValue };
  "ListUserOrganizationSubscriptions": { "user_id": ZendeskFullApiPathParamValue };
  "ShowOrganizationSubscription": { "organization_subscription_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOrganizationSubscriptionsOperationRequestMap {
  "CreateOrganizationSubscription": ZendeskFullApiOperationInput<"CreateOrganizationSubscription">;
  "DeleteOrganizationSubscription": ZendeskFullApiOperationInput<"DeleteOrganizationSubscription">;
  "ListOrganizationSubscriptions": ZendeskFullApiOperationInput<"ListOrganizationSubscriptions">;
  "ListOrganizationSubscriptionsByOrganization": ZendeskFullApiOperationInput<"ListOrganizationSubscriptionsByOrganization">;
  "ListUserOrganizationSubscriptions": ZendeskFullApiOperationInput<"ListUserOrganizationSubscriptions">;
  "ShowOrganizationSubscription": ZendeskFullApiOperationInput<"ShowOrganizationSubscription">;
}

export interface ZendeskFullApiOrganizationSubscriptionsGeneratedClient {
  CreateOrganizationSubscription(...args: ZendeskFullApiOperationArgs<"CreateOrganizationSubscription">): Promise<ZendeskFullApiOperationResponseMap["CreateOrganizationSubscription"]>;
  DeleteOrganizationSubscription(...args: ZendeskFullApiOperationArgs<"DeleteOrganizationSubscription">): Promise<ZendeskFullApiOperationResponseMap["DeleteOrganizationSubscription"]>;
  ListOrganizationSubscriptions(...args: ZendeskFullApiOperationArgs<"ListOrganizationSubscriptions">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationSubscriptions"]>;
  ListOrganizationSubscriptionsByOrganization(...args: ZendeskFullApiOperationArgs<"ListOrganizationSubscriptionsByOrganization">): Promise<ZendeskFullApiOperationResponseMap["ListOrganizationSubscriptionsByOrganization"]>;
  ListUserOrganizationSubscriptions(...args: ZendeskFullApiOperationArgs<"ListUserOrganizationSubscriptions">): Promise<ZendeskFullApiOperationResponseMap["ListUserOrganizationSubscriptions"]>;
  ShowOrganizationSubscription(...args: ZendeskFullApiOperationArgs<"ShowOrganizationSubscription">): Promise<ZendeskFullApiOperationResponseMap["ShowOrganizationSubscription"]>;
}

export const ZendeskFullApiOrganizationSubscriptionsGeneratedFunctionNames = [
  "CreateOrganizationSubscription",
  "DeleteOrganizationSubscription",
  "ListOrganizationSubscriptions",
  "ListOrganizationSubscriptionsByOrganization",
  "ListUserOrganizationSubscriptions",
  "ShowOrganizationSubscription"
] as const satisfies readonly (keyof ZendeskFullApiOrganizationSubscriptionsGeneratedClient)[];

export function createZendeskFullApiOrganizationSubscriptionsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOrganizationSubscriptionsGeneratedClient {
  return {
    CreateOrganizationSubscription: (...args) => callOperation("CreateOrganizationSubscription", ...(args as ZendeskFullApiOperationArgs<"CreateOrganizationSubscription">)),
    DeleteOrganizationSubscription: (...args) => callOperation("DeleteOrganizationSubscription", ...(args as ZendeskFullApiOperationArgs<"DeleteOrganizationSubscription">)),
    ListOrganizationSubscriptions: (...args) => callOperation("ListOrganizationSubscriptions", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationSubscriptions">)),
    ListOrganizationSubscriptionsByOrganization: (...args) => callOperation("ListOrganizationSubscriptionsByOrganization", ...(args as ZendeskFullApiOperationArgs<"ListOrganizationSubscriptionsByOrganization">)),
    ListUserOrganizationSubscriptions: (...args) => callOperation("ListUserOrganizationSubscriptions", ...(args as ZendeskFullApiOperationArgs<"ListUserOrganizationSubscriptions">)),
    ShowOrganizationSubscription: (...args) => callOperation("ShowOrganizationSubscription", ...(args as ZendeskFullApiOperationArgs<"ShowOrganizationSubscription">)),
  };
}
