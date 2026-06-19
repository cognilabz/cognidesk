// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiOutboundWebHooksOperationKeys = [
  "ListOutboundWebhooks",
  "CreateOutboundWebhook",
  "DeleteOutboundWebhook",
  "GetOutboundWebhook",
  "UpdateOutboundWebhook",
  "ListSubscribableEvents"
] as const;
export type KustomerFullApiOutboundWebHooksOperationKey = typeof KustomerFullApiOutboundWebHooksOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiOutboundWebHooksOperationPathParamMap {
  "ListOutboundWebhooks": {};
  "CreateOutboundWebhook": {};
  "DeleteOutboundWebhook": { "id": KustomerFullApiPathParamValue };
  "GetOutboundWebhook": { "id": KustomerFullApiPathParamValue };
  "UpdateOutboundWebhook": { "id": KustomerFullApiPathParamValue };
  "ListSubscribableEvents": {};
}

export interface KustomerFullApiOutboundWebHooksOperationRequestMap {
  "ListOutboundWebhooks": KustomerFullApiOperationInput<"ListOutboundWebhooks">;
  "CreateOutboundWebhook": KustomerFullApiOperationInput<"CreateOutboundWebhook">;
  "DeleteOutboundWebhook": KustomerFullApiOperationInput<"DeleteOutboundWebhook">;
  "GetOutboundWebhook": KustomerFullApiOperationInput<"GetOutboundWebhook">;
  "UpdateOutboundWebhook": KustomerFullApiOperationInput<"UpdateOutboundWebhook">;
  "ListSubscribableEvents": KustomerFullApiOperationInput<"ListSubscribableEvents">;
}

export interface KustomerFullApiOutboundWebHooksGeneratedClient {
  kustomerListOutboundWebhooks(...args: KustomerFullApiOperationArgs<"ListOutboundWebhooks">): Promise<KustomerFullApiOperationResponseMap["ListOutboundWebhooks"]>;
  kustomerCreateOutboundWebhook(...args: KustomerFullApiOperationArgs<"CreateOutboundWebhook">): Promise<KustomerFullApiOperationResponseMap["CreateOutboundWebhook"]>;
  kustomerDeleteOutboundWebhook(...args: KustomerFullApiOperationArgs<"DeleteOutboundWebhook">): Promise<KustomerFullApiOperationResponseMap["DeleteOutboundWebhook"]>;
  kustomerGetOutboundWebhook(...args: KustomerFullApiOperationArgs<"GetOutboundWebhook">): Promise<KustomerFullApiOperationResponseMap["GetOutboundWebhook"]>;
  kustomerUpdateOutboundWebhook(...args: KustomerFullApiOperationArgs<"UpdateOutboundWebhook">): Promise<KustomerFullApiOperationResponseMap["UpdateOutboundWebhook"]>;
  kustomerListSubscribableEvents(...args: KustomerFullApiOperationArgs<"ListSubscribableEvents">): Promise<KustomerFullApiOperationResponseMap["ListSubscribableEvents"]>;
}

export const KustomerFullApiOutboundWebHooksGeneratedFunctionNames = [
  "kustomerListOutboundWebhooks",
  "kustomerCreateOutboundWebhook",
  "kustomerDeleteOutboundWebhook",
  "kustomerGetOutboundWebhook",
  "kustomerUpdateOutboundWebhook",
  "kustomerListSubscribableEvents"
] as const satisfies readonly (keyof KustomerFullApiOutboundWebHooksGeneratedClient)[];

export function createKustomerFullApiOutboundWebHooksGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiOutboundWebHooksGeneratedClient {
  return {
    kustomerListOutboundWebhooks: (...args) => callOperation("ListOutboundWebhooks", ...(args as KustomerFullApiOperationArgs<"ListOutboundWebhooks">)),
    kustomerCreateOutboundWebhook: (...args) => callOperation("CreateOutboundWebhook", ...(args as KustomerFullApiOperationArgs<"CreateOutboundWebhook">)),
    kustomerDeleteOutboundWebhook: (...args) => callOperation("DeleteOutboundWebhook", ...(args as KustomerFullApiOperationArgs<"DeleteOutboundWebhook">)),
    kustomerGetOutboundWebhook: (...args) => callOperation("GetOutboundWebhook", ...(args as KustomerFullApiOperationArgs<"GetOutboundWebhook">)),
    kustomerUpdateOutboundWebhook: (...args) => callOperation("UpdateOutboundWebhook", ...(args as KustomerFullApiOperationArgs<"UpdateOutboundWebhook">)),
    kustomerListSubscribableEvents: (...args) => callOperation("ListSubscribableEvents", ...(args as KustomerFullApiOperationArgs<"ListSubscribableEvents">)),
  };
}
