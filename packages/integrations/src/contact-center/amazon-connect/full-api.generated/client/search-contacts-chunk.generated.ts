// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiSearchContactsOperationKeys = [
  "connect:SearchContacts"
] as const;
export type AmazonConnectFullApiSearchContactsOperationKey = typeof AmazonConnectFullApiSearchContactsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiSearchContactsOperationPathParamMap {
  "connect:SearchContacts": {};
}

export interface AmazonConnectFullApiSearchContactsOperationRequestMap {
  "connect:SearchContacts": AmazonConnectFullApiOperationInput<"connect:SearchContacts">;
}

export interface AmazonConnectFullApiSearchContactsGeneratedClient {
  SearchContacts(...args: AmazonConnectFullApiOperationArgs<"connect:SearchContacts">): Promise<AmazonConnectFullApiOperationResponseMap["connect:SearchContacts"]>;
}

export const AmazonConnectFullApiSearchContactsGeneratedFunctionNames = [
  "SearchContacts"
] as const satisfies readonly (keyof AmazonConnectFullApiSearchContactsGeneratedClient)[];

export function createAmazonConnectFullApiSearchContactsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiSearchContactsGeneratedClient {
  return {
    SearchContacts: (...args) => callOperation("connect:SearchContacts", ...(args as AmazonConnectFullApiOperationArgs<"connect:SearchContacts">)),
  };
}
