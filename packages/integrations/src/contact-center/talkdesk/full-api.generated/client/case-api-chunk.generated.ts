// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiCaseAPIOperationKeys = [
  "CreatingACase",
  "DeletingCasesSoftly",
  "GettingAListOfCases",
  "GettingCaseDetails",
  "UpdatingACase",
  "GettingNewestCaseDetailsByContact",
  "DeletingCasesPermanently",
  "UpdateACaseNote",
  "GettingAListOfCaseFields"
] as const;
export type TalkdeskFullApiCaseAPIOperationKey = typeof TalkdeskFullApiCaseAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiCaseAPIOperationPathParamMap {
  "CreatingACase": {};
  "DeletingCasesSoftly": {};
  "GettingAListOfCases": {};
  "GettingCaseDetails": { "id": TalkdeskFullApiPathParamValue };
  "UpdatingACase": { "id": TalkdeskFullApiPathParamValue };
  "GettingNewestCaseDetailsByContact": {};
  "DeletingCasesPermanently": {};
  "UpdateACaseNote": { "note_id": TalkdeskFullApiPathParamValue };
  "GettingAListOfCaseFields": {};
}

export interface TalkdeskFullApiCaseAPIOperationRequestMap {
  "CreatingACase": TalkdeskFullApiOperationInput<"CreatingACase">;
  "DeletingCasesSoftly": TalkdeskFullApiOperationInput<"DeletingCasesSoftly">;
  "GettingAListOfCases": TalkdeskFullApiOperationInput<"GettingAListOfCases">;
  "GettingCaseDetails": TalkdeskFullApiOperationInput<"GettingCaseDetails">;
  "UpdatingACase": TalkdeskFullApiOperationInput<"UpdatingACase">;
  "GettingNewestCaseDetailsByContact": TalkdeskFullApiOperationInput<"GettingNewestCaseDetailsByContact">;
  "DeletingCasesPermanently": TalkdeskFullApiOperationInput<"DeletingCasesPermanently">;
  "UpdateACaseNote": TalkdeskFullApiOperationInput<"UpdateACaseNote">;
  "GettingAListOfCaseFields": TalkdeskFullApiOperationInput<"GettingAListOfCaseFields">;
}

export interface TalkdeskFullApiCaseAPIGeneratedClient {
  CreatingACase(...args: TalkdeskFullApiOperationArgs<"CreatingACase">): Promise<TalkdeskFullApiOperationResponseMap["CreatingACase"]>;
  DeletingCasesSoftly(...args: TalkdeskFullApiOperationArgs<"DeletingCasesSoftly">): Promise<TalkdeskFullApiOperationResponseMap["DeletingCasesSoftly"]>;
  GettingAListOfCases(...args: TalkdeskFullApiOperationArgs<"GettingAListOfCases">): Promise<TalkdeskFullApiOperationResponseMap["GettingAListOfCases"]>;
  GettingCaseDetails(...args: TalkdeskFullApiOperationArgs<"GettingCaseDetails">): Promise<TalkdeskFullApiOperationResponseMap["GettingCaseDetails"]>;
  UpdatingACase(...args: TalkdeskFullApiOperationArgs<"UpdatingACase">): Promise<TalkdeskFullApiOperationResponseMap["UpdatingACase"]>;
  GettingNewestCaseDetailsByContact(...args: TalkdeskFullApiOperationArgs<"GettingNewestCaseDetailsByContact">): Promise<TalkdeskFullApiOperationResponseMap["GettingNewestCaseDetailsByContact"]>;
  DeletingCasesPermanently(...args: TalkdeskFullApiOperationArgs<"DeletingCasesPermanently">): Promise<TalkdeskFullApiOperationResponseMap["DeletingCasesPermanently"]>;
  UpdateACaseNote(...args: TalkdeskFullApiOperationArgs<"UpdateACaseNote">): Promise<TalkdeskFullApiOperationResponseMap["UpdateACaseNote"]>;
  GettingAListOfCaseFields(...args: TalkdeskFullApiOperationArgs<"GettingAListOfCaseFields">): Promise<TalkdeskFullApiOperationResponseMap["GettingAListOfCaseFields"]>;
}

export const TalkdeskFullApiCaseAPIGeneratedFunctionNames = [
  "CreatingACase",
  "DeletingCasesSoftly",
  "GettingAListOfCases",
  "GettingCaseDetails",
  "UpdatingACase",
  "GettingNewestCaseDetailsByContact",
  "DeletingCasesPermanently",
  "UpdateACaseNote",
  "GettingAListOfCaseFields"
] as const satisfies readonly (keyof TalkdeskFullApiCaseAPIGeneratedClient)[];

export function createTalkdeskFullApiCaseAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiCaseAPIGeneratedClient {
  return {
    CreatingACase: (...args) => callOperation("CreatingACase", ...(args as TalkdeskFullApiOperationArgs<"CreatingACase">)),
    DeletingCasesSoftly: (...args) => callOperation("DeletingCasesSoftly", ...(args as TalkdeskFullApiOperationArgs<"DeletingCasesSoftly">)),
    GettingAListOfCases: (...args) => callOperation("GettingAListOfCases", ...(args as TalkdeskFullApiOperationArgs<"GettingAListOfCases">)),
    GettingCaseDetails: (...args) => callOperation("GettingCaseDetails", ...(args as TalkdeskFullApiOperationArgs<"GettingCaseDetails">)),
    UpdatingACase: (...args) => callOperation("UpdatingACase", ...(args as TalkdeskFullApiOperationArgs<"UpdatingACase">)),
    GettingNewestCaseDetailsByContact: (...args) => callOperation("GettingNewestCaseDetailsByContact", ...(args as TalkdeskFullApiOperationArgs<"GettingNewestCaseDetailsByContact">)),
    DeletingCasesPermanently: (...args) => callOperation("DeletingCasesPermanently", ...(args as TalkdeskFullApiOperationArgs<"DeletingCasesPermanently">)),
    UpdateACaseNote: (...args) => callOperation("UpdateACaseNote", ...(args as TalkdeskFullApiOperationArgs<"UpdateACaseNote">)),
    GettingAListOfCaseFields: (...args) => callOperation("GettingAListOfCaseFields", ...(args as TalkdeskFullApiOperationArgs<"GettingAListOfCaseFields">)),
  };
}
