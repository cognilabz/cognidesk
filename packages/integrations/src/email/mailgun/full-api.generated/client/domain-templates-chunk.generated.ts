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
export const MailgunFullApiDomainTemplatesOperationKeys = [
  "GET /v3/{domain_name}/templates",
  "POST /v3/{domain_name}/templates",
  "DELETE /v3/{domain_name}/templates",
  "GET /v3/{domain_name}/templates/{template_name}/versions",
  "POST /v3/{domain_name}/templates/{template_name}/versions",
  "GET /v3/{domain_name}/templates/{template_name}",
  "PUT /v3/{domain_name}/templates/{template_name}",
  "DELETE /v3/{domain_name}/templates/{template_name}",
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}",
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}",
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}",
  "PUT /v3/{domain_name}/templates/{template_name}/copy",
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}",
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}"
] as const;
export type MailgunFullApiDomainTemplatesOperationKey = typeof MailgunFullApiDomainTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDomainTemplatesOperationPathParamMap {
  "GET /v3/{domain_name}/templates": { "domain_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/templates": { "domain_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/templates": { "domain_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/templates/{template_name}/versions": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue };
  "POST /v3/{domain_name}/templates/{template_name}/versions": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/templates/{template_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue };
  "PUT /v3/{domain_name}/templates/{template_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/templates/{template_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue };
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue };
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue };
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue };
  "PUT /v3/{domain_name}/templates/{template_name}/copy": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue };
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue; "version_name": MailgunFullApiPathParamValue; "new_version_name": MailgunFullApiPathParamValue };
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": { "domain_name": MailgunFullApiPathParamValue; "template_name": MailgunFullApiPathParamValue; "new_template_name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiDomainTemplatesOperationRequestMap {
  "GET /v3/{domain_name}/templates": MailgunFullApiOperationInput<"GET /v3/{domain_name}/templates">;
  "POST /v3/{domain_name}/templates": MailgunFullApiOperationInput<"POST /v3/{domain_name}/templates">;
  "DELETE /v3/{domain_name}/templates": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/templates">;
  "GET /v3/{domain_name}/templates/{template_name}/versions": MailgunFullApiOperationInput<"GET /v3/{domain_name}/templates/{template_name}/versions">;
  "POST /v3/{domain_name}/templates/{template_name}/versions": MailgunFullApiOperationInput<"POST /v3/{domain_name}/templates/{template_name}/versions">;
  "GET /v3/{domain_name}/templates/{template_name}": MailgunFullApiOperationInput<"GET /v3/{domain_name}/templates/{template_name}">;
  "PUT /v3/{domain_name}/templates/{template_name}": MailgunFullApiOperationInput<"PUT /v3/{domain_name}/templates/{template_name}">;
  "DELETE /v3/{domain_name}/templates/{template_name}": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/templates/{template_name}">;
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiOperationInput<"GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}">;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiOperationInput<"PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}">;
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiOperationInput<"DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}">;
  "PUT /v3/{domain_name}/templates/{template_name}/copy": MailgunFullApiOperationInput<"PUT /v3/{domain_name}/templates/{template_name}/copy">;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": MailgunFullApiOperationInput<"PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}">;
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": MailgunFullApiOperationInput<"PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}">;
}

export interface MailgunFullApiDomainTemplatesGeneratedClient {
  GetTemplates(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/templates"]>;
  CreateATemplate(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/templates">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/templates"]>;
  DeleteAllTemplates(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/templates">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/templates"]>;
  GetAllTemplateVersions(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates/{template_name}/versions">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/templates/{template_name}/versions"]>;
  CreateATemplateVersion(...args: MailgunFullApiOperationArgs<"POST /v3/{domain_name}/templates/{template_name}/versions">): Promise<MailgunFullApiOperationResponseMap["POST /v3/{domain_name}/templates/{template_name}/versions"]>;
  GetTemplate(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates/{template_name}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/templates/{template_name}"]>;
  UpdateTemplate(...args: MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/{domain_name}/templates/{template_name}"]>;
  DeleteATemplate(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/templates/{template_name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/templates/{template_name}"]>;
  GetAVersion(...args: MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}">): Promise<MailgunFullApiOperationResponseMap["GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}"]>;
  UpdateAVersion(...args: MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}"]>;
  DeleteAVersion(...args: MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}">): Promise<MailgunFullApiOperationResponseMap["DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}"]>;
  CopyATemplate(...args: MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/copy">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/{domain_name}/templates/{template_name}/copy"]>;
  CopyAVersion(...args: MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}"]>;
  RenameATemplate(...args: MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}"]>;
}

export const MailgunFullApiDomainTemplatesGeneratedFunctionNames = [
  "GetTemplates",
  "CreateATemplate",
  "DeleteAllTemplates",
  "GetAllTemplateVersions",
  "CreateATemplateVersion",
  "GetTemplate",
  "UpdateTemplate",
  "DeleteATemplate",
  "GetAVersion",
  "UpdateAVersion",
  "DeleteAVersion",
  "CopyATemplate",
  "CopyAVersion",
  "RenameATemplate"
] as const satisfies readonly (keyof MailgunFullApiDomainTemplatesGeneratedClient)[];

export function createMailgunFullApiDomainTemplatesGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDomainTemplatesGeneratedClient {
  return {
    GetTemplates: (...args) => callOperation("GET /v3/{domain_name}/templates", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates">)),
    CreateATemplate: (...args) => callOperation("POST /v3/{domain_name}/templates", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/templates">)),
    DeleteAllTemplates: (...args) => callOperation("DELETE /v3/{domain_name}/templates", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/templates">)),
    GetAllTemplateVersions: (...args) => callOperation("GET /v3/{domain_name}/templates/{template_name}/versions", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates/{template_name}/versions">)),
    CreateATemplateVersion: (...args) => callOperation("POST /v3/{domain_name}/templates/{template_name}/versions", ...(args as MailgunFullApiOperationArgs<"POST /v3/{domain_name}/templates/{template_name}/versions">)),
    GetTemplate: (...args) => callOperation("GET /v3/{domain_name}/templates/{template_name}", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates/{template_name}">)),
    UpdateTemplate: (...args) => callOperation("PUT /v3/{domain_name}/templates/{template_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}">)),
    DeleteATemplate: (...args) => callOperation("DELETE /v3/{domain_name}/templates/{template_name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/templates/{template_name}">)),
    GetAVersion: (...args) => callOperation("GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}", ...(args as MailgunFullApiOperationArgs<"GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}">)),
    UpdateAVersion: (...args) => callOperation("PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}">)),
    DeleteAVersion: (...args) => callOperation("DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}", ...(args as MailgunFullApiOperationArgs<"DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}">)),
    CopyATemplate: (...args) => callOperation("PUT /v3/{domain_name}/templates/{template_name}/copy", ...(args as MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/copy">)),
    CopyAVersion: (...args) => callOperation("PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}">)),
    RenameATemplate: (...args) => callOperation("PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}", ...(args as MailgunFullApiOperationArgs<"PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}">)),
  };
}
