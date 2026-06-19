// Generated endpoint chunk for AzureSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AzureSpeechGeneratedOperationCaller,
  AzureSpeechFullApiOperationArgs,
  AzureSpeechFullApiOperationInput,
  AzureSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AzureSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AzureSpeechFullApiCustomSpeechWebHooksOperationKeys = [
  "speech-to-text:WebHooks_Create:/webhooks",
  "speech-to-text:WebHooks_Delete:/webhooks/{id}",
  "speech-to-text:WebHooks_Get:/webhooks/{id}",
  "speech-to-text:WebHooks_List:/webhooks",
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping",
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test",
  "speech-to-text:WebHooks_Update:/webhooks/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechWebHooksOperationKey = typeof AzureSpeechFullApiCustomSpeechWebHooksOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechWebHooksOperationPathParamMap {
  "speech-to-text:WebHooks_Create:/webhooks": {};
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:WebHooks_Get:/webhooks/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:WebHooks_List:/webhooks": {};
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:WebHooks_Update:/webhooks/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechWebHooksOperationRequestMap {
  "speech-to-text:WebHooks_Create:/webhooks": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_Create:/webhooks">;
  "speech-to-text:WebHooks_Delete:/webhooks/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_Delete:/webhooks/{id}">;
  "speech-to-text:WebHooks_Get:/webhooks/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_Get:/webhooks/{id}">;
  "speech-to-text:WebHooks_List:/webhooks": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_List:/webhooks">;
  "speech-to-text:WebHooks_Ping:/webhooks/{id}:ping": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_Ping:/webhooks/{id}:ping">;
  "speech-to-text:WebHooks_Test:/webhooks/{id}:test": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_Test:/webhooks/{id}:test">;
  "speech-to-text:WebHooks_Update:/webhooks/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:WebHooks_Update:/webhooks/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient {
  SpeechToTextWebHooksCreate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Create:/webhooks">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_Create:/webhooks"]>;
  SpeechToTextWebHooksDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Delete:/webhooks/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_Delete:/webhooks/{id}"]>;
  SpeechToTextWebHooksGet(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Get:/webhooks/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_Get:/webhooks/{id}"]>;
  SpeechToTextWebHooksList(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_List:/webhooks">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_List:/webhooks"]>;
  SpeechToTextWebHooksPing(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Ping:/webhooks/{id}:ping">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_Ping:/webhooks/{id}:ping"]>;
  SpeechToTextWebHooksTest(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Test:/webhooks/{id}:test">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_Test:/webhooks/{id}:test"]>;
  SpeechToTextWebHooksUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Update:/webhooks/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:WebHooks_Update:/webhooks/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechWebHooksGeneratedFunctionNames = [
  "SpeechToTextWebHooksCreate",
  "SpeechToTextWebHooksDelete",
  "SpeechToTextWebHooksGet",
  "SpeechToTextWebHooksList",
  "SpeechToTextWebHooksPing",
  "SpeechToTextWebHooksTest",
  "SpeechToTextWebHooksUpdate"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechWebHooksGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient {
  return {
    SpeechToTextWebHooksCreate: (...args) => callOperation("speech-to-text:WebHooks_Create:/webhooks", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Create:/webhooks">)),
    SpeechToTextWebHooksDelete: (...args) => callOperation("speech-to-text:WebHooks_Delete:/webhooks/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Delete:/webhooks/{id}">)),
    SpeechToTextWebHooksGet: (...args) => callOperation("speech-to-text:WebHooks_Get:/webhooks/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Get:/webhooks/{id}">)),
    SpeechToTextWebHooksList: (...args) => callOperation("speech-to-text:WebHooks_List:/webhooks", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_List:/webhooks">)),
    SpeechToTextWebHooksPing: (...args) => callOperation("speech-to-text:WebHooks_Ping:/webhooks/{id}:ping", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Ping:/webhooks/{id}:ping">)),
    SpeechToTextWebHooksTest: (...args) => callOperation("speech-to-text:WebHooks_Test:/webhooks/{id}:test", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Test:/webhooks/{id}:test">)),
    SpeechToTextWebHooksUpdate: (...args) => callOperation("speech-to-text:WebHooks_Update:/webhooks/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:WebHooks_Update:/webhooks/{id}">)),
  };
}
