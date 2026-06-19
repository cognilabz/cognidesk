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
export const FrontFullApiMessageTemplatesOperationKeys = [
  "get-child-templates",
  "create-child-template",
  "list-message-templates",
  "create-message-template",
  "delete-message-template",
  "get-message-template",
  "update-message-template",
  "list-teammate-message-templates",
  "create-teammate-message-template",
  "list-team-message-templates",
  "create-team-message-template"
] as const;
export type FrontFullApiMessageTemplatesOperationKey = typeof FrontFullApiMessageTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiMessageTemplatesOperationPathParamMap {
  "get-child-templates": { "message_template_folder_id": FrontFullApiPathParamValue };
  "create-child-template": { "message_template_folder_id": FrontFullApiPathParamValue };
  "list-message-templates": {};
  "create-message-template": {};
  "delete-message-template": { "message_template_id": FrontFullApiPathParamValue };
  "get-message-template": { "message_template_id": FrontFullApiPathParamValue };
  "update-message-template": { "message_template_id": FrontFullApiPathParamValue };
  "list-teammate-message-templates": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-message-template": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-message-templates": { "team_id": FrontFullApiPathParamValue };
  "create-team-message-template": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiMessageTemplatesOperationRequestMap {
  "get-child-templates": FrontFullApiOperationInput<"get-child-templates">;
  "create-child-template": FrontFullApiOperationInput<"create-child-template">;
  "list-message-templates": FrontFullApiOperationInput<"list-message-templates">;
  "create-message-template": FrontFullApiOperationInput<"create-message-template">;
  "delete-message-template": FrontFullApiOperationInput<"delete-message-template">;
  "get-message-template": FrontFullApiOperationInput<"get-message-template">;
  "update-message-template": FrontFullApiOperationInput<"update-message-template">;
  "list-teammate-message-templates": FrontFullApiOperationInput<"list-teammate-message-templates">;
  "create-teammate-message-template": FrontFullApiOperationInput<"create-teammate-message-template">;
  "list-team-message-templates": FrontFullApiOperationInput<"list-team-message-templates">;
  "create-team-message-template": FrontFullApiOperationInput<"create-team-message-template">;
}

export interface FrontFullApiMessageTemplatesGeneratedClient {
  frontGetChildTemplates(...args: FrontFullApiOperationArgs<"get-child-templates">): Promise<FrontFullApiOperationResponseMap["get-child-templates"]>;
  frontCreateChildTemplate(...args: FrontFullApiOperationArgs<"create-child-template">): Promise<FrontFullApiOperationResponseMap["create-child-template"]>;
  frontListMessageTemplates(...args: FrontFullApiOperationArgs<"list-message-templates">): Promise<FrontFullApiOperationResponseMap["list-message-templates"]>;
  frontCreateMessageTemplate(...args: FrontFullApiOperationArgs<"create-message-template">): Promise<FrontFullApiOperationResponseMap["create-message-template"]>;
  frontDeleteMessageTemplate(...args: FrontFullApiOperationArgs<"delete-message-template">): Promise<FrontFullApiOperationResponseMap["delete-message-template"]>;
  frontGetMessageTemplate(...args: FrontFullApiOperationArgs<"get-message-template">): Promise<FrontFullApiOperationResponseMap["get-message-template"]>;
  frontUpdateMessageTemplate(...args: FrontFullApiOperationArgs<"update-message-template">): Promise<FrontFullApiOperationResponseMap["update-message-template"]>;
  frontListTeammateMessageTemplates(...args: FrontFullApiOperationArgs<"list-teammate-message-templates">): Promise<FrontFullApiOperationResponseMap["list-teammate-message-templates"]>;
  frontCreateTeammateMessageTemplate(...args: FrontFullApiOperationArgs<"create-teammate-message-template">): Promise<FrontFullApiOperationResponseMap["create-teammate-message-template"]>;
  frontListTeamMessageTemplates(...args: FrontFullApiOperationArgs<"list-team-message-templates">): Promise<FrontFullApiOperationResponseMap["list-team-message-templates"]>;
  frontCreateTeamMessageTemplate(...args: FrontFullApiOperationArgs<"create-team-message-template">): Promise<FrontFullApiOperationResponseMap["create-team-message-template"]>;
}

export const FrontFullApiMessageTemplatesGeneratedFunctionNames = [
  "frontGetChildTemplates",
  "frontCreateChildTemplate",
  "frontListMessageTemplates",
  "frontCreateMessageTemplate",
  "frontDeleteMessageTemplate",
  "frontGetMessageTemplate",
  "frontUpdateMessageTemplate",
  "frontListTeammateMessageTemplates",
  "frontCreateTeammateMessageTemplate",
  "frontListTeamMessageTemplates",
  "frontCreateTeamMessageTemplate"
] as const satisfies readonly (keyof FrontFullApiMessageTemplatesGeneratedClient)[];

export function createFrontFullApiMessageTemplatesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiMessageTemplatesGeneratedClient {
  return {
    frontGetChildTemplates: (...args) => callOperation("get-child-templates", ...(args as FrontFullApiOperationArgs<"get-child-templates">)),
    frontCreateChildTemplate: (...args) => callOperation("create-child-template", ...(args as FrontFullApiOperationArgs<"create-child-template">)),
    frontListMessageTemplates: (...args) => callOperation("list-message-templates", ...(args as FrontFullApiOperationArgs<"list-message-templates">)),
    frontCreateMessageTemplate: (...args) => callOperation("create-message-template", ...(args as FrontFullApiOperationArgs<"create-message-template">)),
    frontDeleteMessageTemplate: (...args) => callOperation("delete-message-template", ...(args as FrontFullApiOperationArgs<"delete-message-template">)),
    frontGetMessageTemplate: (...args) => callOperation("get-message-template", ...(args as FrontFullApiOperationArgs<"get-message-template">)),
    frontUpdateMessageTemplate: (...args) => callOperation("update-message-template", ...(args as FrontFullApiOperationArgs<"update-message-template">)),
    frontListTeammateMessageTemplates: (...args) => callOperation("list-teammate-message-templates", ...(args as FrontFullApiOperationArgs<"list-teammate-message-templates">)),
    frontCreateTeammateMessageTemplate: (...args) => callOperation("create-teammate-message-template", ...(args as FrontFullApiOperationArgs<"create-teammate-message-template">)),
    frontListTeamMessageTemplates: (...args) => callOperation("list-team-message-templates", ...(args as FrontFullApiOperationArgs<"list-team-message-templates">)),
    frontCreateTeamMessageTemplate: (...args) => callOperation("create-team-message-template", ...(args as FrontFullApiOperationArgs<"create-team-message-template">)),
  };
}
