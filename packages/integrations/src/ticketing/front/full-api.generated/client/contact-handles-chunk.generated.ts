// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiContactHandlesOperationKeys = [
  "delete-contact-handle",
  "add-contact-handle"
] as const;
export type FrontFullApiContactHandlesOperationKey = typeof FrontFullApiContactHandlesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiContactHandlesOperationPathParamMap {
  "delete-contact-handle": { "contact_id": FrontFullApiPathParamValue };
  "add-contact-handle": { "contact_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiContactHandlesOperationRequestMap {
  "delete-contact-handle": FrontFullApiOperationInput<"delete-contact-handle">;
  "add-contact-handle": FrontFullApiOperationInput<"add-contact-handle">;
}

export interface FrontFullApiContactHandlesGeneratedClient {
  frontDeleteContactHandle(...args: FrontFullApiOperationArgs<"delete-contact-handle">): Promise<FrontFullApiOperationResponseMap["delete-contact-handle"]>;
  frontAddContactHandle(...args: FrontFullApiOperationArgs<"add-contact-handle">): Promise<FrontFullApiOperationResponseMap["add-contact-handle"]>;
}

export const FrontFullApiContactHandlesGeneratedFunctionNames = [
  "frontDeleteContactHandle",
  "frontAddContactHandle"
] as const satisfies readonly (keyof FrontFullApiContactHandlesGeneratedClient)[];

export function createFrontFullApiContactHandlesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiContactHandlesGeneratedClient {
  return {
    frontDeleteContactHandle: (...args) => callOperation("delete-contact-handle", ...(args as FrontFullApiOperationArgs<"delete-contact-handle">)),
    frontAddContactHandle: (...args) => callOperation("add-contact-handle", ...(args as FrontFullApiOperationArgs<"add-contact-handle">)),
  };
}
