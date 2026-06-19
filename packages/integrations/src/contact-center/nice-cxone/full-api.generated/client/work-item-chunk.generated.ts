// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiWorkItemOperationKeys = [
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items",
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent"
] as const;
export type NiceCxoneFullApiWorkItemOperationKey = typeof NiceCxoneFullApiWorkItemOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiWorkItemOperationPathParamMap {
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": {};
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": {};
}

export interface NiceCxoneFullApiWorkItemOperationRequestMap {
  "patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items": NiceCxoneFullApiOperationInput<"patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items">;
  "patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent": NiceCxoneFullApiOperationInput<"patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent">;
}

export interface NiceCxoneFullApiWorkItemGeneratedClient {
  PatronWorkitemApiDocsRequestAWorkitem(...args: NiceCxoneFullApiOperationArgs<"patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items">): Promise<NiceCxoneFullApiOperationResponseMap["patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items"]>;
  PatronWorkitemApiDocsPostInteractionsWorkItemsPersistent(...args: NiceCxoneFullApiOperationArgs<"patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent">): Promise<NiceCxoneFullApiOperationResponseMap["patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent"]>;
}

export const NiceCxoneFullApiWorkItemGeneratedFunctionNames = [
  "PatronWorkitemApiDocsRequestAWorkitem",
  "PatronWorkitemApiDocsPostInteractionsWorkItemsPersistent"
] as const satisfies readonly (keyof NiceCxoneFullApiWorkItemGeneratedClient)[];

export function createNiceCxoneFullApiWorkItemGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiWorkItemGeneratedClient {
  return {
    PatronWorkitemApiDocsRequestAWorkitem: (...args) => callOperation("patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items", ...(args as NiceCxoneFullApiOperationArgs<"patron-workitem-api-docs:requestAWorkitem:POST:/interactions/work-items">)),
    PatronWorkitemApiDocsPostInteractionsWorkItemsPersistent: (...args) => callOperation("patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent", ...(args as NiceCxoneFullApiOperationArgs<"patron-workitem-api-docs:post-interactions-work-items-persistent:POST:/interactions/work-items-persistent">)),
  };
}
