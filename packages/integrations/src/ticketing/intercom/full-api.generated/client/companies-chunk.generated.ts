// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiCompaniesOperationKeys = [
  "retrieveCompany",
  "createOrUpdateCompany",
  "deleteCompany",
  "RetrieveACompanyById",
  "UpdateCompany",
  "ListAttachedContacts",
  "ListAttachedSegmentsForCompanies",
  "listAllCompanies",
  "scrollOverAllCompanies",
  "attachContactToACompany",
  "detachContactFromACompany"
] as const;
export type IntercomFullApiCompaniesOperationKey = typeof IntercomFullApiCompaniesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiCompaniesOperationPathParamMap {
  "retrieveCompany": {};
  "createOrUpdateCompany": {};
  "deleteCompany": { "company_id": IntercomFullApiPathParamValue };
  "RetrieveACompanyById": { "company_id": IntercomFullApiPathParamValue };
  "UpdateCompany": { "company_id": IntercomFullApiPathParamValue };
  "ListAttachedContacts": { "company_id": IntercomFullApiPathParamValue };
  "ListAttachedSegmentsForCompanies": { "company_id": IntercomFullApiPathParamValue };
  "listAllCompanies": {};
  "scrollOverAllCompanies": {};
  "attachContactToACompany": { "contact_id": IntercomFullApiPathParamValue };
  "detachContactFromACompany": { "contact_id": IntercomFullApiPathParamValue; "company_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiCompaniesOperationRequestMap {
  "retrieveCompany": IntercomFullApiOperationInput<"retrieveCompany">;
  "createOrUpdateCompany": IntercomFullApiOperationInput<"createOrUpdateCompany">;
  "deleteCompany": IntercomFullApiOperationInput<"deleteCompany">;
  "RetrieveACompanyById": IntercomFullApiOperationInput<"RetrieveACompanyById">;
  "UpdateCompany": IntercomFullApiOperationInput<"UpdateCompany">;
  "ListAttachedContacts": IntercomFullApiOperationInput<"ListAttachedContacts">;
  "ListAttachedSegmentsForCompanies": IntercomFullApiOperationInput<"ListAttachedSegmentsForCompanies">;
  "listAllCompanies": IntercomFullApiOperationInput<"listAllCompanies">;
  "scrollOverAllCompanies": IntercomFullApiOperationInput<"scrollOverAllCompanies">;
  "attachContactToACompany": IntercomFullApiOperationInput<"attachContactToACompany">;
  "detachContactFromACompany": IntercomFullApiOperationInput<"detachContactFromACompany">;
}

export interface IntercomFullApiCompaniesGeneratedClient {
  intercomRetrieveCompany(...args: IntercomFullApiOperationArgs<"retrieveCompany">): Promise<IntercomFullApiOperationResponseMap["retrieveCompany"]>;
  intercomCreateOrUpdateCompany(...args: IntercomFullApiOperationArgs<"createOrUpdateCompany">): Promise<IntercomFullApiOperationResponseMap["createOrUpdateCompany"]>;
  intercomDeleteCompany(...args: IntercomFullApiOperationArgs<"deleteCompany">): Promise<IntercomFullApiOperationResponseMap["deleteCompany"]>;
  intercomRetrieveACompanyById(...args: IntercomFullApiOperationArgs<"RetrieveACompanyById">): Promise<IntercomFullApiOperationResponseMap["RetrieveACompanyById"]>;
  intercomUpdateCompany(...args: IntercomFullApiOperationArgs<"UpdateCompany">): Promise<IntercomFullApiOperationResponseMap["UpdateCompany"]>;
  intercomListAttachedContacts(...args: IntercomFullApiOperationArgs<"ListAttachedContacts">): Promise<IntercomFullApiOperationResponseMap["ListAttachedContacts"]>;
  intercomListAttachedSegmentsForCompanies(...args: IntercomFullApiOperationArgs<"ListAttachedSegmentsForCompanies">): Promise<IntercomFullApiOperationResponseMap["ListAttachedSegmentsForCompanies"]>;
  intercomListAllCompanies(...args: IntercomFullApiOperationArgs<"listAllCompanies">): Promise<IntercomFullApiOperationResponseMap["listAllCompanies"]>;
  intercomScrollOverAllCompanies(...args: IntercomFullApiOperationArgs<"scrollOverAllCompanies">): Promise<IntercomFullApiOperationResponseMap["scrollOverAllCompanies"]>;
  intercomAttachContactToACompany(...args: IntercomFullApiOperationArgs<"attachContactToACompany">): Promise<IntercomFullApiOperationResponseMap["attachContactToACompany"]>;
  intercomDetachContactFromACompany(...args: IntercomFullApiOperationArgs<"detachContactFromACompany">): Promise<IntercomFullApiOperationResponseMap["detachContactFromACompany"]>;
}

export const IntercomFullApiCompaniesGeneratedFunctionNames = [
  "intercomRetrieveCompany",
  "intercomCreateOrUpdateCompany",
  "intercomDeleteCompany",
  "intercomRetrieveACompanyById",
  "intercomUpdateCompany",
  "intercomListAttachedContacts",
  "intercomListAttachedSegmentsForCompanies",
  "intercomListAllCompanies",
  "intercomScrollOverAllCompanies",
  "intercomAttachContactToACompany",
  "intercomDetachContactFromACompany"
] as const satisfies readonly (keyof IntercomFullApiCompaniesGeneratedClient)[];

export function createIntercomFullApiCompaniesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiCompaniesGeneratedClient {
  return {
    intercomRetrieveCompany: (...args) => callOperation("retrieveCompany", ...(args as IntercomFullApiOperationArgs<"retrieveCompany">)),
    intercomCreateOrUpdateCompany: (...args) => callOperation("createOrUpdateCompany", ...(args as IntercomFullApiOperationArgs<"createOrUpdateCompany">)),
    intercomDeleteCompany: (...args) => callOperation("deleteCompany", ...(args as IntercomFullApiOperationArgs<"deleteCompany">)),
    intercomRetrieveACompanyById: (...args) => callOperation("RetrieveACompanyById", ...(args as IntercomFullApiOperationArgs<"RetrieveACompanyById">)),
    intercomUpdateCompany: (...args) => callOperation("UpdateCompany", ...(args as IntercomFullApiOperationArgs<"UpdateCompany">)),
    intercomListAttachedContacts: (...args) => callOperation("ListAttachedContacts", ...(args as IntercomFullApiOperationArgs<"ListAttachedContacts">)),
    intercomListAttachedSegmentsForCompanies: (...args) => callOperation("ListAttachedSegmentsForCompanies", ...(args as IntercomFullApiOperationArgs<"ListAttachedSegmentsForCompanies">)),
    intercomListAllCompanies: (...args) => callOperation("listAllCompanies", ...(args as IntercomFullApiOperationArgs<"listAllCompanies">)),
    intercomScrollOverAllCompanies: (...args) => callOperation("scrollOverAllCompanies", ...(args as IntercomFullApiOperationArgs<"scrollOverAllCompanies">)),
    intercomAttachContactToACompany: (...args) => callOperation("attachContactToACompany", ...(args as IntercomFullApiOperationArgs<"attachContactToACompany">)),
    intercomDetachContactFromACompany: (...args) => callOperation("detachContactFromACompany", ...(args as IntercomFullApiOperationArgs<"detachContactFromACompany">)),
  };
}
