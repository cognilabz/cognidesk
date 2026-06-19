// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiAccountTemplatesOperationKeys = [
  "GET /v4/templates",
  "POST /v4/templates",
  "DELETE /v4/templates",
  "GET /v4/templates/{template_name}/versions",
  "POST /v4/templates/{template_name}/versions",
  "GET /v4/templates/{template_name}",
  "PUT /v4/templates/{template_name}",
  "DELETE /v4/templates/{template_name}",
  "GET /v4/templates/{template_name}/versions/{version_name}",
  "PUT /v4/templates/{template_name}/versions/{version_name}",
  "DELETE /v4/templates/{template_name}/versions/{version_name}",
  "PUT /v4/templates/{template_name}/copy",
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}",
  "PUT /v4/templates/{template_name}/rename/{new_template_name}"
] as const;
export type MailgunFullApiAccountTemplatesOperationKey = typeof MailgunFullApiAccountTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiAccountTemplatesOperationPathParamMap {
  "GET /v4/templates": {};
  "POST /v4/templates": {};
  "DELETE /v4/templates": {};
  "GET /v4/templates/{template_name}/versions": { "template_name": MailgunFullApiPathParamValue };
  "POST /v4/templates/{template_name}/versions": { "template_name": MailgunFullApiPathParamValue };
  "GET /v4/templates/{template_name}": { "template_name": MailgunFullApiPathParamValue };
  "PUT /v4/templates/{template_name}": { "template_name": MailgunFullApiPathParamValue };
  "DELETE /v4/templates/{template_name}": { "template_name": MailgunFullApiPathParamValue };
  "GET /v4/templates/{template_name}/versions/{version_name}": { "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue };
  "PUT /v4/templates/{template_name}/versions/{version_name}": { "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue };
  "DELETE /v4/templates/{template_name}/versions/{version_name}": { "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue };
  "PUT /v4/templates/{template_name}/copy": { "template_name": MailgunFullApiPathParamValue };
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": { "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue; "new_version_name": MailgunFullApiPathParamValue };
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": { "template_name": MailgunFullApiPathParamValue; "new_template_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiAccountTemplatesOperationRequestMap {
  "GET /v4/templates": MailgunFullApiOperationInput<"GET /v4/templates">;
  "POST /v4/templates": MailgunFullApiOperationInput<"POST /v4/templates">;
  "DELETE /v4/templates": MailgunFullApiOperationInput<"DELETE /v4/templates">;
  "GET /v4/templates/{template_name}/versions": MailgunFullApiOperationInput<"GET /v4/templates/{template_name}/versions">;
  "POST /v4/templates/{template_name}/versions": MailgunFullApiOperationInput<"POST /v4/templates/{template_name}/versions">;
  "GET /v4/templates/{template_name}": MailgunFullApiOperationInput<"GET /v4/templates/{template_name}">;
  "PUT /v4/templates/{template_name}": MailgunFullApiOperationInput<"PUT /v4/templates/{template_name}">;
  "DELETE /v4/templates/{template_name}": MailgunFullApiOperationInput<"DELETE /v4/templates/{template_name}">;
  "GET /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiOperationInput<"GET /v4/templates/{template_name}/versions/{version_name}">;
  "PUT /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiOperationInput<"PUT /v4/templates/{template_name}/versions/{version_name}">;
  "DELETE /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiOperationInput<"DELETE /v4/templates/{template_name}/versions/{version_name}">;
  "PUT /v4/templates/{template_name}/copy": MailgunFullApiOperationInput<"PUT /v4/templates/{template_name}/copy">;
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": MailgunFullApiOperationInput<"PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}">;
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": MailgunFullApiOperationInput<"PUT /v4/templates/{template_name}/rename/{new_template_name}">;
}

export interface MailgunFullApiAccountTemplatesGeneratedClient {
  GetAccountLevelTemplates(...args: MailgunFullApiOperationArgs<"GET /v4/templates">): Promise<MailgunFullApiOperationResponseMap["GET /v4/templates"]>;
  CreateAnAccountLevelTemplate(...args: MailgunFullApiOperationArgs<"POST /v4/templates">): Promise<MailgunFullApiOperationResponseMap["POST /v4/templates"]>;
  DeleteAllAccountLevelTemplates(...args: MailgunFullApiOperationArgs<"DELETE /v4/templates">): Promise<MailgunFullApiOperationResponseMap["DELETE /v4/templates"]>;
  GetAllAccountLevelTemplateVersions(...args: MailgunFullApiOperationArgs<"GET /v4/templates/{template_name}/versions">): Promise<MailgunFullApiOperationResponseMap["GET /v4/templates/{template_name}/versions"]>;
  CreateAnAccountLevelTemplateVersion(...args: MailgunFullApiOperationArgs<"POST /v4/templates/{template_name}/versions">): Promise<MailgunFullApiOperationResponseMap["POST /v4/templates/{template_name}/versions"]>;
  GetAnAccountLevelTemplate(...args: MailgunFullApiOperationArgs<"GET /v4/templates/{template_name}">): Promise<MailgunFullApiOperationResponseMap["GET /v4/templates/{template_name}"]>;
  UpdateAnAccountLevelTemplate(...args: MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/templates/{template_name}"]>;
  DeleteAnAccountLevelTemplate(...args: MailgunFullApiOperationArgs<"DELETE /v4/templates/{template_name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v4/templates/{template_name}"]>;
  GetAnAccountLevelTemplateVersion(...args: MailgunFullApiOperationArgs<"GET /v4/templates/{template_name}/versions/{version_name}">): Promise<MailgunFullApiOperationResponseMap["GET /v4/templates/{template_name}/versions/{version_name}"]>;
  UpdateAnAccountLevelTemplateVersion(...args: MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/versions/{version_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/templates/{template_name}/versions/{version_name}"]>;
  DeleteAnAccountLevelTemplateVersion(...args: MailgunFullApiOperationArgs<"DELETE /v4/templates/{template_name}/versions/{version_name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v4/templates/{template_name}/versions/{version_name}"]>;
  CopyATemplate2(...args: MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/copy">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/templates/{template_name}/copy"]>;
  CopyAnAccountLevelTemplateVersion(...args: MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}"]>;
  RenameATemplate2(...args: MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/rename/{new_template_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v4/templates/{template_name}/rename/{new_template_name}"]>;
}

export const MailgunFullApiAccountTemplatesGeneratedFunctionNames = [
  "GetAccountLevelTemplates",
  "CreateAnAccountLevelTemplate",
  "DeleteAllAccountLevelTemplates",
  "GetAllAccountLevelTemplateVersions",
  "CreateAnAccountLevelTemplateVersion",
  "GetAnAccountLevelTemplate",
  "UpdateAnAccountLevelTemplate",
  "DeleteAnAccountLevelTemplate",
  "GetAnAccountLevelTemplateVersion",
  "UpdateAnAccountLevelTemplateVersion",
  "DeleteAnAccountLevelTemplateVersion",
  "CopyATemplate2",
  "CopyAnAccountLevelTemplateVersion",
  "RenameATemplate2"
] as const satisfies readonly (keyof MailgunFullApiAccountTemplatesGeneratedClient)[];

export function createMailgunFullApiAccountTemplatesGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiAccountTemplatesGeneratedClient {
  return {
    GetAccountLevelTemplates: (...args) => callOperation("GET /v4/templates", ...(args as MailgunFullApiOperationArgs<"GET /v4/templates">)),
    CreateAnAccountLevelTemplate: (...args) => callOperation("POST /v4/templates", ...(args as MailgunFullApiOperationArgs<"POST /v4/templates">)),
    DeleteAllAccountLevelTemplates: (...args) => callOperation("DELETE /v4/templates", ...(args as MailgunFullApiOperationArgs<"DELETE /v4/templates">)),
    GetAllAccountLevelTemplateVersions: (...args) => callOperation("GET /v4/templates/{template_name}/versions", ...(args as MailgunFullApiOperationArgs<"GET /v4/templates/{template_name}/versions">)),
    CreateAnAccountLevelTemplateVersion: (...args) => callOperation("POST /v4/templates/{template_name}/versions", ...(args as MailgunFullApiOperationArgs<"POST /v4/templates/{template_name}/versions">)),
    GetAnAccountLevelTemplate: (...args) => callOperation("GET /v4/templates/{template_name}", ...(args as MailgunFullApiOperationArgs<"GET /v4/templates/{template_name}">)),
    UpdateAnAccountLevelTemplate: (...args) => callOperation("PUT /v4/templates/{template_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}">)),
    DeleteAnAccountLevelTemplate: (...args) => callOperation("DELETE /v4/templates/{template_name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v4/templates/{template_name}">)),
    GetAnAccountLevelTemplateVersion: (...args) => callOperation("GET /v4/templates/{template_name}/versions/{version_name}", ...(args as MailgunFullApiOperationArgs<"GET /v4/templates/{template_name}/versions/{version_name}">)),
    UpdateAnAccountLevelTemplateVersion: (...args) => callOperation("PUT /v4/templates/{template_name}/versions/{version_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/versions/{version_name}">)),
    DeleteAnAccountLevelTemplateVersion: (...args) => callOperation("DELETE /v4/templates/{template_name}/versions/{version_name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v4/templates/{template_name}/versions/{version_name}">)),
    CopyATemplate2: (...args) => callOperation("PUT /v4/templates/{template_name}/copy", ...(args as MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/copy">)),
    CopyAnAccountLevelTemplateVersion: (...args) => callOperation("PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}">)),
    RenameATemplate2: (...args) => callOperation("PUT /v4/templates/{template_name}/rename/{new_template_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v4/templates/{template_name}/rename/{new_template_name}">)),
  };
}
