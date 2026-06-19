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
export const NiceCxoneFullApiAccessKeysOperationKeys = [
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys",
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys",
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys",
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}",
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}"
] as const;
export type NiceCxoneFullApiAccessKeysOperationKey = typeof NiceCxoneFullApiAccessKeysOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiAccessKeysOperationPathParamMap {
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": {};
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": {};
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": {};
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": { "accessKeyId": NiceCxoneFullApiPathParamValue };
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": { "accessKeyId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiAccessKeysOperationRequestMap {
  "cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys": NiceCxoneFullApiOperationInput<"cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys">;
  "cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys": NiceCxoneFullApiOperationInput<"cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys">;
  "cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys": NiceCxoneFullApiOperationInput<"cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys">;
  "cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}": NiceCxoneFullApiOperationInput<"cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}">;
  "cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}": NiceCxoneFullApiOperationInput<"cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}">;
}

export interface NiceCxoneFullApiAccessKeysGeneratedClient {
  CxoneAccesskeysApiDocsCreateAnAccessKeyForAUser(...args: NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys"]>;
  CxoneAccesskeysApiDocsUpdatesAnAccessKeyForAUser(...args: NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys"]>;
  CxoneAccesskeysApiDocsReturnsAListOfAccessKeys(...args: NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys"]>;
  CxoneAccesskeysApiDocsReturnsAnAccessKeyConfig(...args: NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}"]>;
  CxoneAccesskeysApiDocsDeletesAnAccessKey(...args: NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}">): Promise<NiceCxoneFullApiOperationResponseMap["cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}"]>;
}

export const NiceCxoneFullApiAccessKeysGeneratedFunctionNames = [
  "CxoneAccesskeysApiDocsCreateAnAccessKeyForAUser",
  "CxoneAccesskeysApiDocsUpdatesAnAccessKeyForAUser",
  "CxoneAccesskeysApiDocsReturnsAListOfAccessKeys",
  "CxoneAccesskeysApiDocsReturnsAnAccessKeyConfig",
  "CxoneAccesskeysApiDocsDeletesAnAccessKey"
] as const satisfies readonly (keyof NiceCxoneFullApiAccessKeysGeneratedClient)[];

export function createNiceCxoneFullApiAccessKeysGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiAccessKeysGeneratedClient {
  return {
    CxoneAccesskeysApiDocsCreateAnAccessKeyForAUser: (...args) => callOperation("cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys", ...(args as NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:CreateAnAccessKeyForAUser:POST:/access-key-management/v1/access-keys">)),
    CxoneAccesskeysApiDocsUpdatesAnAccessKeyForAUser: (...args) => callOperation("cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys", ...(args as NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:Updates an access key for a user:PATCH:/access-key-management/v1/access-keys">)),
    CxoneAccesskeysApiDocsReturnsAListOfAccessKeys: (...args) => callOperation("cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys", ...(args as NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:ReturnsAListOfAccessKeys:GET:/access-key-management/v1/access-keys">)),
    CxoneAccesskeysApiDocsReturnsAnAccessKeyConfig: (...args) => callOperation("cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:ReturnsAnAccessKeyConfig:GET:/access-key-management/v1/access-keys/{accessKeyId}">)),
    CxoneAccesskeysApiDocsDeletesAnAccessKey: (...args) => callOperation("cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}", ...(args as NiceCxoneFullApiOperationArgs<"cxone-accesskeys-api-docs:DeletesAnAccessKey:DELETE:/access-key-management/v1/access-keys/{accessKeyId}">)),
  };
}
