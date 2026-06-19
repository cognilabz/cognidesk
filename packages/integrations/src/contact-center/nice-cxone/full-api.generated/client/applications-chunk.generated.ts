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
export const NiceCxoneFullApiApplicationsOperationKeys = [
  "authentication-integrations-api-docs:createApplication:POST:/applications",
  "authentication-integrations-api-docs:listApplication:GET:/applications",
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}",
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}",
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}",
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable",
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable"
] as const;
export type NiceCxoneFullApiApplicationsOperationKey = typeof NiceCxoneFullApiApplicationsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiApplicationsOperationPathParamMap {
  "authentication-integrations-api-docs:createApplication:POST:/applications": {};
  "authentication-integrations-api-docs:listApplication:GET:/applications": {};
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": { "applicationId": NiceCxoneFullApiPathParamValue };
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": { "applicationId": NiceCxoneFullApiPathParamValue };
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": { "applicationId": NiceCxoneFullApiPathParamValue };
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": { "applicationId": NiceCxoneFullApiPathParamValue };
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": { "applicationId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiApplicationsOperationRequestMap {
  "authentication-integrations-api-docs:createApplication:POST:/applications": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:createApplication:POST:/applications">;
  "authentication-integrations-api-docs:listApplication:GET:/applications": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:listApplication:GET:/applications">;
  "authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}">;
  "authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}">;
  "authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}">;
  "authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable">;
  "authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable": NiceCxoneFullApiOperationInput<"authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable">;
}

export interface NiceCxoneFullApiApplicationsGeneratedClient {
  AuthenticationIntegrationsApiDocsCreateApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:createApplication:POST:/applications">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:createApplication:POST:/applications"]>;
  AuthenticationIntegrationsApiDocsListApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:listApplication:GET:/applications">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:listApplication:GET:/applications"]>;
  AuthenticationIntegrationsApiDocsViewApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}"]>;
  AuthenticationIntegrationsApiDocsPatchApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}"]>;
  AuthenticationIntegrationsApiDocsDeleteApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}"]>;
  AuthenticationIntegrationsApiDocsEnableApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable"]>;
  AuthenticationIntegrationsApiDocsDisableApplication(...args: NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable">): Promise<NiceCxoneFullApiOperationResponseMap["authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable"]>;
}

export const NiceCxoneFullApiApplicationsGeneratedFunctionNames = [
  "AuthenticationIntegrationsApiDocsCreateApplication",
  "AuthenticationIntegrationsApiDocsListApplication",
  "AuthenticationIntegrationsApiDocsViewApplication",
  "AuthenticationIntegrationsApiDocsPatchApplication",
  "AuthenticationIntegrationsApiDocsDeleteApplication",
  "AuthenticationIntegrationsApiDocsEnableApplication",
  "AuthenticationIntegrationsApiDocsDisableApplication"
] as const satisfies readonly (keyof NiceCxoneFullApiApplicationsGeneratedClient)[];

export function createNiceCxoneFullApiApplicationsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiApplicationsGeneratedClient {
  return {
    AuthenticationIntegrationsApiDocsCreateApplication: (...args) => callOperation("authentication-integrations-api-docs:createApplication:POST:/applications", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:createApplication:POST:/applications">)),
    AuthenticationIntegrationsApiDocsListApplication: (...args) => callOperation("authentication-integrations-api-docs:listApplication:GET:/applications", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:listApplication:GET:/applications">)),
    AuthenticationIntegrationsApiDocsViewApplication: (...args) => callOperation("authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:viewApplication:GET:/applications/{applicationId}">)),
    AuthenticationIntegrationsApiDocsPatchApplication: (...args) => callOperation("authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:patchApplication:PATCH:/applications/{applicationId}">)),
    AuthenticationIntegrationsApiDocsDeleteApplication: (...args) => callOperation("authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:deleteApplication:DELETE:/applications/{applicationId}">)),
    AuthenticationIntegrationsApiDocsEnableApplication: (...args) => callOperation("authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:enableApplication:POST:/applications/{applicationId}-enable">)),
    AuthenticationIntegrationsApiDocsDisableApplication: (...args) => callOperation("authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable", ...(args as NiceCxoneFullApiOperationArgs<"authentication-integrations-api-docs:disableApplication:POST:/applications/{applicationId}-disable">)),
  };
}
