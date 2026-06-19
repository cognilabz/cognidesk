// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiAddressBooksOperationKeys = [
  "GET /contact_center/address_books",
  "POST /contact_center/address_books",
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields",
  "GET /contact_center/address_books/custom_fields",
  "POST /contact_center/address_books/custom_fields",
  "GET /contact_center/address_books/custom_fields/{customFieldId}",
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}",
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}",
  "GET /contact_center/address_books/units",
  "POST /contact_center/address_books/units",
  "GET /contact_center/address_books/units/{unitId}",
  "DELETE /contact_center/address_books/units/{unitId}",
  "PATCH /contact_center/address_books/units/{unitId}",
  "GET /contact_center/address_books/{addressBookId}",
  "DELETE /contact_center/address_books/{addressBookId}",
  "PATCH /contact_center/address_books/{addressBookId}",
  "GET /contact_center/address_books/{addressBookId}/contacts",
  "POST /contact_center/address_books/{addressBookId}/contacts",
  "POST /contact_center/address_books/{addressBookId}/contacts/batch",
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch",
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch",
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}",
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}",
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}"
] as const;
export type ZoomContactCenterFullApiAddressBooksOperationKey = typeof ZoomContactCenterFullApiAddressBooksOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiAddressBooksOperationPathParamMap {
  "GET /contact_center/address_books": {};
  "POST /contact_center/address_books": {};
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": { "contactId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/address_books/custom_fields": {};
  "POST /contact_center/address_books/custom_fields": {};
  "GET /contact_center/address_books/custom_fields/{customFieldId}": { "customFieldId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": { "customFieldId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": { "customFieldId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/address_books/units": {};
  "POST /contact_center/address_books/units": {};
  "GET /contact_center/address_books/units/{unitId}": { "unitId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/address_books/units/{unitId}": { "unitId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/address_books/units/{unitId}": { "unitId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/address_books/{addressBookId}": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/address_books/{addressBookId}": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/address_books/{addressBookId}": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/address_books/{addressBookId}/contacts": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/address_books/{addressBookId}/contacts": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": { "addressBookId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": { "addressBookId": ZoomContactCenterFullApiPathParamValue; "contactId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": { "addressBookId": ZoomContactCenterFullApiPathParamValue; "contactId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": { "addressBookId": ZoomContactCenterFullApiPathParamValue; "contactId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiAddressBooksOperationRequestMap {
  "GET /contact_center/address_books": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books">;
  "POST /contact_center/address_books": ZoomContactCenterFullApiOperationInput<"POST /contact_center/address_books">;
  "GET /contact_center/address_books/contacts/{contactId}/custom_fields": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/contacts/{contactId}/custom_fields">;
  "GET /contact_center/address_books/custom_fields": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/custom_fields">;
  "POST /contact_center/address_books/custom_fields": ZoomContactCenterFullApiOperationInput<"POST /contact_center/address_books/custom_fields">;
  "GET /contact_center/address_books/custom_fields/{customFieldId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/custom_fields/{customFieldId}">;
  "DELETE /contact_center/address_books/custom_fields/{customFieldId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/address_books/custom_fields/{customFieldId}">;
  "PATCH /contact_center/address_books/custom_fields/{customFieldId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/address_books/custom_fields/{customFieldId}">;
  "GET /contact_center/address_books/units": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/units">;
  "POST /contact_center/address_books/units": ZoomContactCenterFullApiOperationInput<"POST /contact_center/address_books/units">;
  "GET /contact_center/address_books/units/{unitId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/units/{unitId}">;
  "DELETE /contact_center/address_books/units/{unitId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/address_books/units/{unitId}">;
  "PATCH /contact_center/address_books/units/{unitId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/address_books/units/{unitId}">;
  "GET /contact_center/address_books/{addressBookId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/{addressBookId}">;
  "DELETE /contact_center/address_books/{addressBookId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/address_books/{addressBookId}">;
  "PATCH /contact_center/address_books/{addressBookId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/address_books/{addressBookId}">;
  "GET /contact_center/address_books/{addressBookId}/contacts": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/{addressBookId}/contacts">;
  "POST /contact_center/address_books/{addressBookId}/contacts": ZoomContactCenterFullApiOperationInput<"POST /contact_center/address_books/{addressBookId}/contacts">;
  "POST /contact_center/address_books/{addressBookId}/contacts/batch": ZoomContactCenterFullApiOperationInput<"POST /contact_center/address_books/{addressBookId}/contacts/batch">;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/batch": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/address_books/{addressBookId}/contacts/batch">;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/batch": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/address_books/{addressBookId}/contacts/batch">;
  "GET /contact_center/address_books/{addressBookId}/contacts/{contactId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/address_books/{addressBookId}/contacts/{contactId}">;
  "DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}">;
  "PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}">;
}

export interface ZoomContactCenterFullApiAddressBooksGeneratedClient {
  ListAddressBooks(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books"]>;
  CreateAddressBook(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/address_books"]>;
  ListContactCustomFields(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/contacts/{contactId}/custom_fields">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/contacts/{contactId}/custom_fields"]>;
  Listaddressbookcustomfields(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/custom_fields">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/custom_fields"]>;
  Createacustomfield(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/custom_fields">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/address_books/custom_fields"]>;
  Getaaddressbookcustomfield(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/custom_fields/{customFieldId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/custom_fields/{customFieldId}"]>;
  Deleteancustomfield(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/custom_fields/{customFieldId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/address_books/custom_fields/{customFieldId}"]>;
  Updateacustomfield(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/custom_fields/{customFieldId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/address_books/custom_fields/{customFieldId}"]>;
  ListUnits(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/units">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/units"]>;
  CreateUnit(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/units">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/address_books/units"]>;
  GetUnit(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/units/{unitId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/units/{unitId}"]>;
  DeleteUnit(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/units/{unitId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/address_books/units/{unitId}"]>;
  UpdateUnit(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/units/{unitId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/address_books/units/{unitId}"]>;
  GetAddressBook(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/{addressBookId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/{addressBookId}"]>;
  DeleteAddressBook(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/{addressBookId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/address_books/{addressBookId}"]>;
  UpdateAddressBook(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/{addressBookId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/address_books/{addressBookId}"]>;
  ListContacts(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/{addressBookId}/contacts">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/{addressBookId}/contacts"]>;
  CreateContact(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/{addressBookId}/contacts">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/address_books/{addressBookId}/contacts"]>;
  BatchCreateContact(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/{addressBookId}/contacts/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/address_books/{addressBookId}/contacts/batch"]>;
  BatchDeletecontact(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/{addressBookId}/contacts/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/address_books/{addressBookId}/contacts/batch"]>;
  BatchUpdateContact(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/{addressBookId}/contacts/batch">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/address_books/{addressBookId}/contacts/batch"]>;
  GetContact(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/{addressBookId}/contacts/{contactId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/address_books/{addressBookId}/contacts/{contactId}"]>;
  ContactDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}"]>;
  UpdateContact(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}"]>;
}

export const ZoomContactCenterFullApiAddressBooksGeneratedFunctionNames = [
  "ListAddressBooks",
  "CreateAddressBook",
  "ListContactCustomFields",
  "Listaddressbookcustomfields",
  "Createacustomfield",
  "Getaaddressbookcustomfield",
  "Deleteancustomfield",
  "Updateacustomfield",
  "ListUnits",
  "CreateUnit",
  "GetUnit",
  "DeleteUnit",
  "UpdateUnit",
  "GetAddressBook",
  "DeleteAddressBook",
  "UpdateAddressBook",
  "ListContacts",
  "CreateContact",
  "BatchCreateContact",
  "BatchDeletecontact",
  "BatchUpdateContact",
  "GetContact",
  "ContactDelete",
  "UpdateContact"
] as const satisfies readonly (keyof ZoomContactCenterFullApiAddressBooksGeneratedClient)[];

export function createZoomContactCenterFullApiAddressBooksGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiAddressBooksGeneratedClient {
  return {
    ListAddressBooks: (...args) => callOperation("GET /contact_center/address_books", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books">)),
    CreateAddressBook: (...args) => callOperation("POST /contact_center/address_books", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books">)),
    ListContactCustomFields: (...args) => callOperation("GET /contact_center/address_books/contacts/{contactId}/custom_fields", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/contacts/{contactId}/custom_fields">)),
    Listaddressbookcustomfields: (...args) => callOperation("GET /contact_center/address_books/custom_fields", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/custom_fields">)),
    Createacustomfield: (...args) => callOperation("POST /contact_center/address_books/custom_fields", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/custom_fields">)),
    Getaaddressbookcustomfield: (...args) => callOperation("GET /contact_center/address_books/custom_fields/{customFieldId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/custom_fields/{customFieldId}">)),
    Deleteancustomfield: (...args) => callOperation("DELETE /contact_center/address_books/custom_fields/{customFieldId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/custom_fields/{customFieldId}">)),
    Updateacustomfield: (...args) => callOperation("PATCH /contact_center/address_books/custom_fields/{customFieldId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/custom_fields/{customFieldId}">)),
    ListUnits: (...args) => callOperation("GET /contact_center/address_books/units", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/units">)),
    CreateUnit: (...args) => callOperation("POST /contact_center/address_books/units", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/units">)),
    GetUnit: (...args) => callOperation("GET /contact_center/address_books/units/{unitId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/units/{unitId}">)),
    DeleteUnit: (...args) => callOperation("DELETE /contact_center/address_books/units/{unitId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/units/{unitId}">)),
    UpdateUnit: (...args) => callOperation("PATCH /contact_center/address_books/units/{unitId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/units/{unitId}">)),
    GetAddressBook: (...args) => callOperation("GET /contact_center/address_books/{addressBookId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/{addressBookId}">)),
    DeleteAddressBook: (...args) => callOperation("DELETE /contact_center/address_books/{addressBookId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/{addressBookId}">)),
    UpdateAddressBook: (...args) => callOperation("PATCH /contact_center/address_books/{addressBookId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/{addressBookId}">)),
    ListContacts: (...args) => callOperation("GET /contact_center/address_books/{addressBookId}/contacts", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/{addressBookId}/contacts">)),
    CreateContact: (...args) => callOperation("POST /contact_center/address_books/{addressBookId}/contacts", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/{addressBookId}/contacts">)),
    BatchCreateContact: (...args) => callOperation("POST /contact_center/address_books/{addressBookId}/contacts/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/address_books/{addressBookId}/contacts/batch">)),
    BatchDeletecontact: (...args) => callOperation("DELETE /contact_center/address_books/{addressBookId}/contacts/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/{addressBookId}/contacts/batch">)),
    BatchUpdateContact: (...args) => callOperation("PATCH /contact_center/address_books/{addressBookId}/contacts/batch", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/{addressBookId}/contacts/batch">)),
    GetContact: (...args) => callOperation("GET /contact_center/address_books/{addressBookId}/contacts/{contactId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/address_books/{addressBookId}/contacts/{contactId}">)),
    ContactDelete: (...args) => callOperation("DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/address_books/{addressBookId}/contacts/{contactId}">)),
    UpdateContact: (...args) => callOperation("PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/address_books/{addressBookId}/contacts/{contactId}">)),
  };
}
