// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiTicketImportOperationKeys = [
  "TicketBulkImport",
  "TicketImport"
] as const;
export type ZendeskFullApiTicketImportOperationKey = typeof ZendeskFullApiTicketImportOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTicketImportOperationPathParamMap {
  "TicketBulkImport": {};
  "TicketImport": {};
}

export interface ZendeskFullApiTicketImportOperationRequestMap {
  "TicketBulkImport": ZendeskFullApiOperationInput<"TicketBulkImport">;
  "TicketImport": ZendeskFullApiOperationInput<"TicketImport">;
}

export interface ZendeskFullApiTicketImportGeneratedClient {
  TicketBulkImport(...args: ZendeskFullApiOperationArgs<"TicketBulkImport">): Promise<ZendeskFullApiOperationResponseMap["TicketBulkImport"]>;
  TicketImport(...args: ZendeskFullApiOperationArgs<"TicketImport">): Promise<ZendeskFullApiOperationResponseMap["TicketImport"]>;
}

export const ZendeskFullApiTicketImportGeneratedFunctionNames = [
  "TicketBulkImport",
  "TicketImport"
] as const satisfies readonly (keyof ZendeskFullApiTicketImportGeneratedClient)[];

export function createZendeskFullApiTicketImportGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTicketImportGeneratedClient {
  return {
    TicketBulkImport: (...args) => callOperation("TicketBulkImport", ...(args as ZendeskFullApiOperationArgs<"TicketBulkImport">)),
    TicketImport: (...args) => callOperation("TicketImport", ...(args as ZendeskFullApiOperationArgs<"TicketImport">)),
  };
}
